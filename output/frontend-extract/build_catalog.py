from pathlib import Path
import json,re,html,collections,zipfile,hashlib
from urllib.parse import urljoin,urlparse
from lxml import html as lh,etree

R=Path(__file__).resolve().parent
def read(p):return json.loads((R/p).read_text(encoding='utf8'))
def write(p,s):
    p=R/p;p.parent.mkdir(parents=True,exist_ok=True);p.write_text(s,encoding='utf8')
def dump(p,x):write(p,json.dumps(x,ensure_ascii=False,indent=2))
mods=read('module-manifest.json');assets=read('asset-manifest.json');checks=read('analysis-checks.json')
doms=[json.loads(p.read_text(encoding='utf8')) for p in sorted((R/'evidence').glob('dom-*.json'))]
for d in doms:
 full=R/'evidence'/('fullcss-'+d['id']+'.json')
 if full.exists():d['css']=json.loads(full.read_text(encoding='utf8'))
byname=collections.defaultdict(list)
for m in mods:byname[m['name']].append(m)
byfile={m['path']:m for m in mods}
E=html.escape
basecss='''*{box-sizing:border-box}body{margin:0;background:#f3f6fa;color:#142337;font:15px/1.65 "Malgun Gothic",sans-serif}main{max-width:1360px;margin:auto;padding:38px}header{background:#132c4a;color:white;padding:34px;border-radius:18px}h1{font-size:30px;margin:0 0 8px}h2{margin:32px 0 14px;font-size:22px}h3{margin:0 0 12px}a{color:#1767ad}header a{color:#c5e6ff}section,article{background:white;padding:24px;border:1px solid #dfe6ef;border-radius:13px;margin:16px 0}table{border-collapse:collapse;width:100%;font-size:14px}th,td{padding:10px;text-align:left;border-bottom:1px solid #dce4ed;vertical-align:top}th{background:#edf3f9}code,pre{font-family:Consolas,monospace}code{word-break:break-all}pre{background:#edf3f9;padding:20px;white-space:pre-wrap;overflow-wrap:anywhere}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:15px}.grid article{margin:0}.badge{display:inline-block;padding:3px 10px;border-radius:20px;background:#e8f2fc;color:#164f86;font-size:12px;margin:3px}.muted{color:#617187}.stat{font-size:30px;font-weight:bold}iframe{width:100%;height:760px;border:1px solid #ddd;background:white}details{padding:8px 0}summary{cursor:pointer;font-weight:bold}.small{font-size:13px}nav{margin:20px 0}nav a{margin-right:15px}@media(max-width:850px){.grid{grid-template-columns:1fr}main{padding:16px}table{display:block;overflow:auto}}'''
def page(title,body):return '<!doctype html><html lang="ko"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+E(title)+'</title><style>'+basecss+'</style><main>'+body+'</main></html>'

# Explicitly curated components, not a claim that every PascalCase filename is a UI component.
specs=[
('Layout','전체','셸·메뉴·라우팅','C','인증·라우터·조직 상태를 props와 어댑터로 분리','IQ8XJg1L'),
('CalendarSidebarPanel','일정','달력 사이드바','B','달력 상태와 선택 이벤트를 새 앱 상태에 연결',None),
('MobileCardListLayout','공통','모바일 카드 목록 레이아웃','B','스크롤·검색·라우터 의존 분리',None),
('InlineErrorAlert','공통','오류 메시지','A','MUI Alert로 직접 이식; portable에 재구성본 제공',None),
('ToneChip','공통','상태 배지','A','MUI Box로 직접 이식; portable에 재구성본 제공',None),
('OptionToggleGroup','공통','단일·다중 선택','A','MUI ToggleButtonGroup으로 이식; portable에 재구성본 제공',None),
('FormValue','공통','폼 값 구독·렌더링','B','form 객체의 구독 인터페이스 확인',None),
('PropertyFields','공통','속성 표시·편집 필드','B','필드 스키마와 편집 상태 연결',None),
('PropertyContentEditor','공통','리치 텍스트 편집기 래퍼','B','에디터·저장 콜백·이미지 업로드 분리',None),
('ItemLineFields','거래처·회계','품목 행 입력','B','금액 계산·품목 선택 인터페이스 분리',None),
('AccountAvatar','공통','계정 아바타','B','프로필 URL 및 계정 모델 대체',None),
('FeedProfileAvatar','공통','피드 프로필 아바타','B','프로필 팝업과 계정 상태 대체',None),
('EmployeeSelectDialog','인사·공통','직원 선택','B','직원 검색·부서 트리 데이터 공급',None),
('EmployeeFormDialog','인사','직원 등록·수정','C','controller/units/members 계약을 새 HR API에 연결',None),
('CustomerFormDialog','고객','고객 등록·수정','C','고객·상담·계약 controller, meta, rows 연결',None),
('DealFormDialog','고객·거래처','견적·계약 폼','C','계약 상태·품목·고객 및 거래처 API 교체',None),
('ApprovalDetailDialog','결재','결재 상세·처리','C','결재 권한·상태 전이·첨부 어댑터 교체',None),
('ApprovalTypeSelect','결재','문서 유형 선택','B','문서 유형 목록과 선택 콜백 연결',None),
('BoardPostDetail','게시판','게시글 상세','C','게시물 API·댓글·권한·에디터 연결',None),
('PostComposerHost','업무·게시판','작성 창 호스트','C','전역 store와 편집·첨부 상태 분리',None),
('TaskBoxCreateDrawer','업무','업무 등록 드로어','C','업무 스키마·controller·참여자·첨부 연결',None),
('TaskDetailDrawerHost','업무','업무 상세 호스트','C','라우트·전역 상세 상태 연결',None),
('PageSlideDialog','공통','페이지형 슬라이드 다이얼로그','B','열림 상태·라우터와 페이지 표시 분리',None),
('FileUploadBox','공통','파일 첨부','C','uploadFile/deleteUploadedFiles/openUploadedFile 콜백 및 인증 분리',None),
('FileDropOverlay','공통','파일 드래그 안내','B','드롭 이벤트를 새 업로드 어댑터에 연결',None),
('FileViewer','공통','파일·PDF 미리보기','C','파일 URL·PDF worker·권한 처리 확인',None),
('EmojiPanel','채팅','이모지 선택','B','선택 콜백·언어 리소스 연결',None),
('ChatRoomListPanel','채팅','대화방 목록','C','실시간 채널·읽음 상태·사용자 모델 연결',None),
('ChatRoomView','채팅','메시지·입력·첨부','C','채팅 전송·첨부·소켓·권한 어댑터 교체',None),
('ChatMemberPanel','채팅','참여자 패널','C','참여자 API·초대 권한 연결',None),
('MeetingRecordScreen','회의','회의 기록 화면','C','녹음·전사·회의 API와 브라우저 권한 연결',None),
('MeetingRecordingPlayer','회의','녹음 재생·전사','B','오디오 소스·전사 구간 데이터 연결',None),
('AttendanceSidebarSummary','근태','근태 요약','C','개인 근무 상태·정책·월별 집계 API 연결',None),
('AttendanceParts','근태','근태 공통 UI','B','근태 날짜·상태 표현 및 locale 연결',None),
('OrgChartPage','인사','조직도','C','부서·직원·권한 모델과 편집 동작 연결',None),
('ConsultHistoryPanel','고객','상담 이력 패널','C','고객 상담 이력과 조회 API 연결',None),
('ReferenceList','공통','참조 목록','B','참조 대상·프로필·에디터와 상태 연결',None),
('ReservationDialog','일정','예약 폼','C','자원·예약 충돌 검증·API 연결',None),
]
curated=[]
for name,service,role,grade,action,hashhint in specs:
    candidates=byname.get(name,[])
    if hashhint:candidates=[m for m in candidates if hashhint in m['path']]
    if not candidates:continue
    m=candidates[0];c={**m,'service':service,'purpose':role,'reuseGrade':grade,'integration':action}
    c['exportedParameters']=[{'export':ex['exported'],'compiledLocal':ex['local'],'keys':p['keys']} for ex in m['exports'] for p in m['destructuredParameters'] if ex.get('local') and ex['local']==p.get('function')]
    folder='components/'+name
    dump(folder+'/manifest.json',c)
    lines=[]
    for ex in c['exportedParameters']:lines.append('<li><code>'+E(ex['export']+' ← '+ex['compiledLocal'])+'</code>: '+E(', '.join(ex['keys']))+'</li>')
    imports=''.join('<li><code>'+E(i['specifier'])+'</code> — '+E(i['type'])+'</li>' for i in m['imports'])
    body=f'<p><a href="../../index.html">← 카탈로그</a></p><header><h1>{E(name)}</h1><p>{E(service)} · {E(role)} · 재사용 등급 {grade}</p></header><section><h2>확보한 코드</h2><p><a href="../../{m["path"]}">원본 배포 JS</a> · <a href="../../{m["formatted"]}">읽기용 정리 JS</a> · <a href="manifest.json">컴포넌트 manifest</a></p><p>{E(action)}</p><p class="muted">원본 TSX와 변수명은 복원되지 않았습니다. 정리본은 실행용 독립 패키지가 아닙니다. 컴포넌트 이름은 청크 파일명이며 청크에 여러 함수가 함께 들어 있을 수 있습니다.</p><h3>배포 export 별칭</h3><pre>{E(json.dumps(m["exports"],ensure_ascii=False,indent=2))}</pre><h3>export 함수의 구조 분해 입력값</h3><ul>{"".join(lines) or "<li>직접 구조 분해된 export 매개변수 없음. manifest의 내부 함수 입력과 코드 확인 필요.</li>"}</ul><h3>직접 import</h3><ul>{imports}</ul><p>SHA-256: <code>{m["sha256"]}</code></p><p>출처: <a href="{E(m["url"])}">{E(m["url"])}</a></p></section>'
    write(folder+'/index.html',page(name,body));curated.append(c)
dump('component-manifest.json',curated)

# DOM previews keep structural markup/classes/styles; user-visible business strings are replaced.
allowed=set('업무함 업무 메일 일정 인사 근태 게시판 회의 결재 고객 거래처 회계 채팅 오늘 요약 기업 설정 AI 상담하기 조직도 알림 글자 크기 가 전체 재직 휴직 퇴사 친구 채팅 저장 취소 닫기 이전 다음 메시지 입력 보내기 첨부 이모지 음성 녹음 AI 요약 등록 검색 이름 번호 제목 상태 폴더 분류 전화 이메일 주소 기본 정보 시설물 정보 메모 담당 직원 지정 안 함 폴더 없음 보통 내용 예시'.split(' '))
allowed.update(['고객 등록','직원 등록','업무 등록','회의록 등록','고객명','고객명 *','대표 전화','추가 전화','상세주소','생년월일','광고성 정보 수신 동의','내용을 입력하세요','선택 안 함','기본 정보','시설물 정보','근로조건','인적사항','연락처·주소','급여계좌·세금','시설물번호','주용도','연면적(㎡)','필터가 적용되지 않았습니다.','이 기간에 적힌 줄이 없습니다. 카드·통장 불러오기로 한 번에 넣을 수 있습니다.'])
for d in doms:
 for part in d['parts']:
  if part['kind'] not in ('dialog','data-table'):continue
  el=lh.fromstring(part['html'])
  for x in el.xpath('//label|//th|//h2|//h3'):
   for text in x.itertext():
    text=text.strip()
    if text and len(text)<45:allowed.add(text)
def masked(v):
 v=v.strip()
 if not v:return ''
 if v in allowed:return v
 if re.fullmatch(r'[\d\s.,:%*/+()\-]+',v):return re.sub(r'\d','0',v)
 return '예시 항목'
def sanitize(raw):
 el=lh.fromstring(raw)
 for bad in el.xpath('.//script|.//iframe|.//object|.//embed|.//link|.//style|.//input[@type="hidden"]'):
  par=bad.getparent()
  if par is not None:par.remove(bad)
 for x in el.iter():
  if not isinstance(x.tag,str):continue
  for k in list(x.attrib):
   if k.lower().startswith('on') or k in ('href','src','srcset','action','formaction','value') or k.startswith('data-'):del x.attrib[k]
   elif k=='placeholder':x.attrib[k]=''
   elif k in ('aria-label','title','alt'):x.attrib[k]=masked(x.attrib[k])
   elif k=='style':x.attrib[k]=re.sub(r'url\([^)]*\)','none',x.attrib[k])
  if x.text:x.text=masked(x.text)
  if x.tail:x.tail=masked(x.tail)
  if x.tag=='textarea':x.text=''
  if x.tag=='button':x.set('type','button')
  if x.get('contenteditable'):x.set('contenteditable','false')
  if x.tag=='img':x.set('src','data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40"%3E%3Crect width="40" height="40" fill="%23dce8f4"/%3E%3C/svg%3E')
 return lh.tostring(el,encoding='unicode')
urlpaths={a['url']:'../'+a['path'] for a in assets if a.get('path')}
def complete_css_rules(text):
 # Browser transport capped some long CSSOM strings. Never concatenate an
 # unfinished rule into the next sheet: it would swallow every later rule.
 depth=0;quote=None;comment=False;escape=False;last=0;i=0
 while i<len(text):
  ch=text[i]
  if comment:
   if text[i:i+2]=='*/':comment=False;i+=2;continue
  elif quote:
   if escape:escape=False
   elif ch=='\\':escape=True
   elif ch==quote:quote=None
  elif text[i:i+2]=='/*':comment=True;i+=2;continue
  elif ch in ('\"',"'"):quote=ch
  elif ch=='{':depth+=1
  elif ch=='}':
   depth=max(0,depth-1)
   if depth==0:last=i+1
  elif ch==';' and depth==0:last=i+1
  i+=1
 return text[:last]
def csslocal(d):
 chunks=[]
 for s in d['css']:
  content=complete_css_rules(s['rules']);base=s.get('href') or d['url']
  def sub(m):
   value=m.group(1).strip('\"\' ');url=urljoin(base,value)
   if value.startswith('data:'):return m.group(0)
   return 'url("'+urlpaths.get(url,'')+'")'
  content=re.sub(r'''url\(((?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|[^)"']*)?)\)''',sub,content)
  content=re.sub(r'@import[^;]+;','',content)
  chunks.append(content)
 return '\n'.join(chunks)
domentries=[]
seencommon=set()
for d in doms:
 write('styles/'+d['id']+'.css',csslocal(d))
 dump('structure/'+d['id']+'.json',{'id':d['id'],'title':d['title'],'url':d['url'],'computed':[{**x,'label':masked(x.get('label') or '')} for x in d['computed']],'cssErrors':d['cssErrors']})
 for p in d['parts']:
  kind=p['kind']
  if kind in ('chat-root','alert'):continue
  if kind in ('service-rail','global-header'):
   if kind in seencommon:continue
   seencommon.add(kind)
  if d['id'] in ('02-work-form','14-customer-form','15-employee-form') and kind in ('service-sidebar','service-content','data-table','view-switcher'):continue
  if kind=='data-table' and p['index']>0:continue
  slug=f'{d["id"]}-{kind}-{p["index"]}'
  fragment=sanitize(p['html']);write('dom/'+slug+'.html',fragment)
  preview='<!doctype html><html lang="ko"><meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="default-src \'none\'; style-src \'self\' \'unsafe-inline\'; img-src data:; font-src \'self\'; form-action \'none\'"><link rel="stylesheet" href="../styles/'+d['id']+'.css"><style>html,body{margin:0!important;overflow:auto!important;background:#fff;min-height:100%}.preview-root{padding:16px;min-height:650px}.preview-root> *{position:relative!important;inset:auto!important;transform:none!important} .preview-root>nav{min-height:740px} .preview-root>.dashboard-sidebar-root{width:260px!important;min-height:740px}.preview-root>.dashboard-contents-container{margin:0!important;width:100%!important;max-height:none!important;min-height:640px!important}.MuiDialog-paper{max-height:none!important;margin:0!important}.MuiDialogContent-root{max-height:900px;overflow:auto}.MuiBackdrop-root{display:none!important}</style><body><div class="preview-root">'+fragment+'</div></body></html>'
  write('previews/'+slug+'.html',preview)
  domentries.append({'id':slug,'state':d['id'],'title':d['title'],'kind':kind,'selector':p['selector'],'sourceUrl':d['url'],'html':'dom/'+slug+'.html','preview':'previews/'+slug+'.html','css':'styles/'+d['id']+'.css'})
dump('dom-manifest.json',domentries)
gallery='<header><h1>DOM 컴포넌트 미리보기</h1><p>실제 DOM·CSS를 분리한 정적 미리보기. 업무 문자열은 예시로 치환했고, 스크립트·전송 동작은 없습니다.</p><a href="index.html">← 컴포넌트 카탈로그</a></header>'
for d in doms:
 entries=[e for e in domentries if e['state']==d['id']]
 gallery+='<section><h2>'+E(d['title'])+'</h2>'
 for e in entries:gallery+=f'<details><summary>{E(e["kind"])} · <code>{E(e["selector"])}</code></summary><p><a href="{e["html"]}">DOM</a> · <a href="{e["css"]}">CSS</a> · <a href="{e["preview"]}">미리보기 단독 열기</a></p><iframe loading="lazy" sandbox src="{e["preview"]}" title="{E(e["id"])}"></iframe></details>'
 gallery+='</section>'
write('dom-gallery.html',page('DOM 컴포넌트 미리보기',gallery))

evidence=[
('react / react-dom','19.2.4','확인','formatted/vendor.d/react-CjxcGQav.js','version = "19.2.4"','React 렌더링 런타임'),
('react-router 계열','7.17.0','확인','formatted/vendor.d/react-CjxcGQav.js','__reactRouterVersion = "7.17.0"','라우팅; react-router-dom 참조 문자열도 존재'),
('@mui/material','버전 미확인','확인','formatted/js.d/main-Cm9wS5wt.js',"from '@mui/material/styles'",'MUI 클래스·컴포넌트 구현 확인'),
('Emotion 계열','버전 미확인','확인','formatted/js.d/main-Cm9wS5wt.js','data-emotion','스타일 삽입 코드 및 실제 CSSOM. 정확한 설치 패키지 목록 미확인'),
('styled-components','6.4.1','확인','formatted/js.d/main-Cm9wS5wt.js','Ov = "6.4.1"','data-styled-version 및 번들 버전 상수'),
('i18next / react-i18next','버전 미확인','확인','formatted/js.d/main-Cm9wS5wt.js','react-i18next::','한국어·영어 번역 청크 포함'),
('Vite','버전 미확인','빌드 흔적 확인','formatted/js.d/main-Cm9wS5wt.js','__vite__mapDeps','빌드 도구 흔적; 원본 설정 파일 미확보'),
('ehfuse 에디터','패키지 이름·버전 미확인','내부 모듈 흔적','formatted/js.d/main-Cm9wS5wt.js','ehfuse-editor','클래스 및 구현 코드 확인. npm 패키지로 단정하지 않음'),
]
package=[]
for name,ver,status,file,needle,note in evidence:
 source=(R/file).read_text(encoding='utf8');at=source.find(needle);line=source[:at].count('\n')+1 if at>=0 else None
 package.append({'name':name,'version':ver,'status':status,'file':file,'line':line,'evidence':needle,'note':note})
dump('package-evidence.json',package)
moduleRows=''.join(f'<tr><td>{E(m["name"])}</td><td>{E(m["kind"])}</td><td><a href="{m["formatted"]}">{E(Path(m["path"]).name)}</a></td><td>{len(m["imports"])}</td><td>{len(m["exports"])}</td></tr>' for m in mods)
write('all-modules.html',page('전체 배포 모듈',f'<h1>전체 배포 모듈 {len(mods)}개</h1><p><a href="index.html">← 카탈로그</a></p><p>kind는 파일명 기반 자동 분류이며 라이브러리/페이지/아이콘이 섞여 있습니다. 이름이 같은 청크도 파일 해시가 다르면 별개입니다.</p><table><tr><th>이름</th><th>분류</th><th>정리본</th><th>import</th><th>export</th></tr>{moduleRows}</table>'))
scope=[('업무','01-work-calendar','TaskBoxScreen','TaskBoxCreateDrawer'),('메일','03-mail','AppMuaProvider',''),('일정','04-calendar','CalendarMonthPage','CalendarSidebarPanel'),('인사','05-hr','EmployeeListPage','EmployeeFormDialog'),('근태','06-attendance','AttendanceReportPage','AttendanceSidebarSummary'),('게시판','07-board','BoardListPage','BoardPostDetail'),('회의','08-meetings','MeetingsPage','MeetingRecordScreen'),('결재','09-approval','ApprovalDraftedPage','ApprovalDetailDialog'),('고객','10-customers','CustomerListPage','CustomerFormDialog'),('거래처','11-partners','PartnerListPage','DealFormDialog'),('회계','12-accounting','LedgerPage','ItemLineFields'),('채팅','13-chat','ChatRoomView','ChatRoomListPanel')]
scopeRows=''.join('<tr><td>'+s+'</td><td><code>'+id+'</code></td><td>'+E(a+(' / '+b if b else ''))+'</td></tr>' for s,id,a,b in scope)
componentRows=''.join(f'<tr><td><a href="components/{c["name"]}/index.html">{c["name"]}</a></td><td>{c["service"]}</td><td>{c["purpose"]}</td><td>{c["reuseGrade"]}</td><td>{c["integration"]}</td></tr>' for c in curated)
pkgRows=''.join(f'<tr><td>{E(p["name"])}</td><td>{E(p["version"])}</td><td>{E(p["status"])}</td><td><a href="{p["file"]}">정리본 {p["line"]}행</a><br><code>{E(p["evidence"])}</code></td></tr>' for p in package)
summary={'capturedStates':len(doms),'services':12,'domFragments':len(domentries),'curatedComponents':len(curated),'staticAssets':len(assets),'javascriptModules':len(mods),'bytes':sum(a.get('bytes',0) for a in assets),'parseErrors':checks['errors'],'uncollectedOptionalLocaleModules':len(checks['missingDependencies']),'sourceMaps':len(checks['sourceMapReferences'])}
dump('summary.json',summary)
body=f'''<header><h1>프런트엔드 컴포넌트 추출본</h1><p>work-test.elimsafety.com · 2026-11-13 · 실제 브라우저 DOM + 배포 JavaScript 정적 분석</p><p>원본 파일, 읽기용 코드, DOM·CSS, 컴포넌트 의존성과 이식 기준을 함께 제공합니다.</p></header>
<nav><a href="dom-gallery.html">DOM 미리보기</a><a href="all-modules.html">전체 모듈</a><a href="component-manifest.json">컴포넌트 JSON</a><a href="module-manifest.json">import/export 그래프</a><a href="package-evidence.json">패키지 근거</a></nav>
<div class="grid"><article><div class="stat">{len(assets)}</div>원본 정적 파일 · {summary['bytes']/1000000:.1f} MB</article><article><div class="stat">{len(curated)}</div>선별한 컴포넌트</article><article><div class="stat">{len(domentries)}</div>DOM 조각 · {len(doms)}개 화면 상태</article></div>
<section><h2>확보 범위와 한계</h2><p>12개 서비스의 대표 DOM 및 업무·고객·직원 등록 폼과 채팅 입력을 수집했습니다. 페이지에서 관찰한 정적 URL과 그 파일에 명시된 import를 따라 JS {len(mods)}개를 확보했습니다. 배포 JS의 원래 바이트는 assets에, Babel로 구문을 파싱하여 읽기 쉽게 정리한 버전은 formatted에 있습니다.</p><p><b>원본 TSX, package.json, lockfile, 소스맵은 확보되지 않았습니다.</b> 다운로드한 파일에서 sourceMappingURL 참조가 없었습니다. 정리본의 변수명·타입·주석을 원본으로 복원한 것은 아닙니다. 재구성한 JSX 3개는 portable 폴더에 별도로 구분했습니다.</p><p>한국어·영어 이외의 선택적 언어 청크 {len(checks['missingDependencies'])}개는 받지 않았습니다. 수집한 JS의 비언어 import 참조는 모두 로컬에 있습니다. 이미지·미디어·worker/WASM 같은 런타임 URL 전체를 수집한 오프라인 앱 복제본은 아닙니다. 로그인과 백엔드 연결을 포함한 기능 실행 검증은 수행하지 않았습니다.</p><p>원본 JS는 실행하지 않고 구문 분석만 했습니다. DOM 미리보기에는 전송 기능이 없으며 업무 문자열·입력값을 예시로 치환했습니다. 로컬 evidence의 원시 DOM은 ZIP에서 제외했습니다.</p></section>
<section><h2>실제 DOM 계층</h2><pre>body
└─ #root
   ├─ nav.dashboard-rail[aria-label="메뉴"]  ← 12개 서비스 진입점
   └─ 콘텐츠 셸
      ├─ .dashboard-header                 ← 조직, 요약, 알림, 프로필
      ├─ .dashboard-sidebar-root           ← 서비스별 폴더·메뉴
      └─ .dashboard-contents-container     ← 필터, 테이블, 달력 등
body의 별도 portal
└─ .MuiModal-root / .MuiDrawer-root
   └─ [role="dialog"] → 탭 / 필드 / 편집기 / 하단 버튼</pre><p>MUI의 Mui* 클래스는 구성요소 식별에 유용합니다. css-해시 클래스는 빌드마다 달라지므로 새 MVP의 선택자 계약으로 사용하지 않는 편이 좋습니다. 미리보기에는 수집 당시 클래스를 보존했습니다.</p></section>
<section><h2>실제 패키지·빌드 근거</h2><table><tr><th>항목</th><th>버전</th><th>확인 수준</th><th>근거</th></tr>{pkgRows}</table><p>앞선 MVP 문서의 Next.js/NestJS는 신규 구현 제안입니다. 이번 사이트의 프런트엔드는 React SPA와 React Router, Vite 빌드 흔적으로 확인했습니다. backend 프레임워크는 이번 수집으로 확인하지 않았습니다.</p></section>
<section><h2>컴포넌트별 추출 파일</h2><p><span class="badge">A · 의존성 교체가 작은 UI</span><span class="badge">B · 테마·상태·콜백 연결 필요</span><span class="badge">C · 도메인 API·전역 상태 분리 필요</span></p><p>등급은 이식 작업량에 대한 분석입니다. 원본 번들의 독립 실행 보장을 의미하지 않습니다. 청크 이름과 export 별칭·입력 필드는 각 컴포넌트 상세에 정리했습니다.</p><table><tr><th>컴포넌트</th><th>서비스</th><th>역할</th><th>등급</th><th>이식 작업</th></tr>{componentRows}</table></section>
<section><h2>12개 서비스 연결표</h2><table><tr><th>서비스</th><th>실제 DOM 상태</th><th>관련 배포 청크 후보</th></tr>{scopeRows}</table><p>연결표는 DOM 역할과 코드/청크 이름을 대조한 결과입니다. 페이지에 로드된 파일 목록만으로 해당 컴포넌트의 렌더링을 단정하지 않았습니다. 메일은 AppMuaProvider를 확인했고 별도 메일 패키지의 원본 소스는 확보하지 않았습니다.</p></section>
<section><h2>MVP에 적용하는 순서</h2><ol><li><b>공통 셸과 디자인 토큰:</b> DOM/CSS와 structure의 computed 스타일을 기준으로 서비스 메뉴·헤더·사이드바를 구현합니다.</li><li><b>작은 공통 UI:</b> portable/의 InlineErrorAlert, ToneChip, OptionToggleGroup을 앱의 MUI 테마에 연결합니다.</li><li><b>목록·폼 계약:</b> Table/Filter/ViewSwitcher, FormValue/PropertyFields 구조를 새 데이터 모델로 연결합니다.</li><li><b>도메인 폼:</b> CustomerFormDialog·EmployeeFormDialog·DealFormDialog의 입력 인터페이스를 참고해 controller/API를 새로 연결합니다.</li><li><b>비동기 기능:</b> 첨부·채팅·녹음은 업로드와 소켓·worker·권한 처리를 별도 구현하고 흐름별로 검증합니다.</li></ol><p>원본 청크를 새 앱에서 직접 import하면 main 번들의 초기화·라우팅·전역 상태가 따라올 수 있습니다. 재사용할 함수나 UI를 읽기용 정리본에서 독립 소스로 옮긴 뒤 의존성을 교체하는 방식이 적합합니다.</p></section>
<section><h2>폴더 안내</h2><pre>assets/       원본 배포 파일 + SHA-256 manifest
formatted/    배포 JS 읽기용 정리본 (동일 경로 유지)
components/   {len(curated)}개 컴포넌트별 설명 / export / 입력값 / import
portable/     원본 동작을 참고해 재구성한 JSX 3개 (별도 표시)
dom/          예시 데이터로 치환한 DOM 조각
styles/       화면별 CSSOM (로컬 정적 경로로 정리)
previews/     스크립트 없는 DOM 미리보기
structure/    크기 / 색 / 폰트 / 간격 등 computed 스타일
module-manifest.json    전체 의존성 그래프
analysis-checks.json    구문 분석 결과 / 미수집 언어 목록</pre></section>'''
write('index.html',page('프런트엔드 컴포넌트 추출',body))
print(json.dumps(summary,ensure_ascii=True))
