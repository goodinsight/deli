from pathlib import Path
import json, html, re, shutil, zipfile, hashlib
from collections import Counter
from xml.etree import ElementTree
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, Image as RLImage
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.graphics.shapes import Drawing, Rect, String, Line, Polygon
from reportlab.graphics import renderSVG
from pypdf import PdfReader
from PIL import Image
from design_content import TITLE,SUBTITLE,INTRO,ISSUES,MVP,SECTIONS,SOURCES

ROOT=Path(__file__).resolve().parent
BASE=ROOT.parent/'service-review'
PDF=ROOT.parent/'pdf'/'mvp-improvement-architecture.pdf'
evidence={r['id']:r for r in json.loads((BASE/'screen-index.json').read_text(encoding='utf-8'))}
(ROOT/'evidence').mkdir(exist_ok=True);(ROOT/'diagrams').mkdir(exist_ok=True)
pdfmetrics.registerFont(TTFont('K','C:/Windows/Fonts/malgun.ttf'))
pdfmetrics.registerFont(TTFont('KB','C:/Windows/Fonts/malgunbd.ttf'))
INK='#172b46';BLUE='#1855a1';MUTED='#596a7c';LIGHT='#eef4fb';TEAL='#117565'

class Diagram:
    def __init__(self,w,h):self.w=w;self.h=h;self.ops=[]
    def box(self,x,y,w,h,title,lines=(),fill=LIGHT):self.ops.append(('box',x,y,w,h,title,lines,fill))
    def line(self,x1,y1,x2,y2,label=''):self.ops.append(('line',x1,y1,x2,y2,label))
    def draw(self):
        d=Drawing(self.w,self.h)
        for op in self.ops:
            if op[0]=='box':
                _,x,y,w,h,title,lines,fill=op;yy=self.h-y-h
                d.add(Rect(x,yy,w,h,rx=10,ry=10,fillColor=colors.HexColor(fill),strokeColor=colors.HexColor('#c7d5e6'),strokeWidth=1.2))
                d.add(String(x+18,self.h-y-32,title,fontName='KB',fontSize=20,fillColor=colors.HexColor(BLUE)))
                for n,t in enumerate(lines):d.add(String(x+18,self.h-y-60-n*25,t,fontName='K',fontSize=16,fillColor=colors.HexColor(INK)))
            else:
                _,x1,y1,x2,y2,label=op;ya=self.h-y1;yb=self.h-y2
                d.add(Line(x1,ya,x2,yb,strokeColor=colors.HexColor(MUTED),strokeWidth=2))
                if abs(x2-x1)>abs(y2-y1):
                    dx=1 if x2>x1 else -1;pts=[x2,yb,x2-10*dx,yb+5,x2-10*dx,yb-5]
                else:
                    dy=1 if yb>ya else -1;pts=[x2,yb,x2+5,yb-10*dy,x2-5,yb-10*dy]
                d.add(Polygon(pts,fillColor=colors.HexColor(MUTED),strokeColor=None))
                if label:d.add(String((x1+x2)/2+8,(ya+yb)/2+8,label,fontName='K',fontSize=14,fillColor=colors.HexColor(MUTED)))
        return d

diagrams={}
a=Diagram(960,1050)
a.box(280,10,400,80,'사용자 브라우저',('12개 서비스 + 내 홈 + 통합 검색',))
a.line(480,90,480,125,'HTTPS')
a.box(180,125,600,100,'Web / Next.js + 세션 BFF',('공통 목록·상세·폼 · OIDC 세션 · UI 상태',))
a.line(480,225,480,265,'REST / WebSocket')
a.box(35,265,890,290,'업무 API / NestJS 모듈형 모놀리스',('인증된 조직 · 권한 · 입력 검증 · Application Service',),'#e7f1fe')
for x,y,title,ls in [
(55,345,'고객·거래',['CRM / Trade / Finance']),
(355,345,'협업·운영',['Work / Meetings','Scheduling']),
(655,345,'인사·승인',['People / Attendance','Approval'])]:a.box(x,y,250,90,title,ls,'#ffffff')
a.box(55,450,850,80,'공통 모듈',('Identity · Content · Communication · Audit · Search · Notification',),'#ffffff')
a.line(250,555,250,610,'원자적 커밋')
a.line(735,555,735,610,'권한 확인')
a.box(35,610,430,120,'PostgreSQL',('업무 원본 · 조직 격리 · 감사', 'Outbox / 작업 lease / 처리 이력'))
a.box(525,610,400,120,'비공개 객체 저장소',('첨부·문서 버전 · 격리/검사', '권한 검증 후 단기 다운로드'))
a.line(250,730,250,785,'Outbox 처리')
a.box(35,785,430,120,'Worker / 같은 도메인 코드',('알림 · PDF · 파일 검사 · 가져오기', '메일 동기화 · 재시도 · 실패함'))
a.line(465,845,525,845)
a.box(525,785,400,120,'외부 제공자',('메일 1종 · OIDC · 운영 알림', '추후 CTI / AI / 은행 연동'))
a.box(35,945,890,85,'운영 공통',('비밀 관리 · 로그/메트릭 · 백업/복구 · CI/CD · 환경 분리',),'#eaf6f1')
diagrams['architecture']=a

f=Diagram(960,640)
for x,y,title,ls in [(20,20,'고객·시설물',['Party + Contact + Facility']),(350,20,'상담',['담당자·후속 조치']),(680,20,'견적 버전',['품목·금액·유효기간']),(680,240,'계약',['견적 원본·청구 계획']),(350,240,'프로젝트·업무',['계약 수행·보고서']),(20,240,'채권·청구',['기일·잔액']),(20,460,'입금·충당',['분할 수금·대사']),(350,460,'공통 이력',['원본 링크·상태·감사']),(680,460,'운영 보고',['미수·현금흐름·손익'])]:f.box(x,y,260,115,title,ls)
for xy in [(280,78,350,78),(610,78,680,78),(810,135,810,240),(680,297,610,297),(350,297,280,297),(150,355,150,460),(280,517,350,517),(610,517,680,517)]:f.line(*xy)
diagrams['flow']=f

e=Diagram(960,850)
for x,y,title,ls in [(20,20,'Tenant / Member',['조직·계정·역할']),(350,20,'Employee',['근무제·휴가·근태']),(680,20,'Approval',['대상·버전·결재선']),(20,240,'Party / Contact',['고객·매입처 복수 역할']),(350,240,'Facility / Relation',['시설물·소유/관리 관계']),(680,240,'Work / Meeting',['업무·회의·후속 조치']),(20,460,'Quote / Contract',['확정 견적 버전·계약']),(350,460,'Receivable / Payable',['청구·잔액']),(680,460,'Cash / Allocation',['입출금·충당']),(20,680,'File / Document',['파일·버전·업무 연결']),(350,680,'Reservation',['자원·기간·점유']),(680,680,'Message / Outbox',['대화·후속 처리 이력'])]:e.box(x,y,260,115,title,ls)
for xy,label in [((280,78,350,78),'연결'),((610,78,680,78),'신청'),((150,135,150,240),'소유 범위'),((280,297,350,297),'M:N'),((610,297,680,297),'관련'),((150,355,150,460),'1:N'),((280,517,350,517),'청구'),((680,517,610,517),'충당')]:e.line(*xy,label)
diagrams['erd']=e

for key,d in diagrams.items():
    # Keep diagrams editable and text searchable in both SVG and PDF.
    drawing=d.draw();svgpath=ROOT/'diagrams'/f'{key}.svg';renderSVG.drawToFile(drawing,str(svgpath))
    svg=svgpath.read_text(encoding='utf-8').replace('font-family: KB;','font-family: Malgun Gothic, sans-serif; font-weight: bold;').replace('font-family: K;','font-family: Malgun Gothic, sans-serif;')
    svgpath.write_text(svg,encoding='utf-8');ElementTree.parse(svgpath)

MMD='''flowchart TB
  Browser[12개 서비스 UI] --> Web[Next.js 웹 + 세션 BFF]
  Web --> API[NestJS 업무 API / 모듈형 모놀리스]
  OIDC[OIDC 제공자] --> Web
  subgraph Domains[도메인 모듈]
    CRM[CRM / Party / Facility]
    Trade[Trade / Quote / Contract]
    Work[Work / Meetings]
    Schedule[Scheduling / Resource]
    People[People / Attendance]
    Approval[Approval]
    Finance[Finance]
    Comm[Communication / Mail / Chat]
    Content[Content / File / Document]
  end
  API --> Domains
  Domains --> DB[(PostgreSQL / tenant / audit / outbox)]
  Content --> Store[(Private object storage)]
  DB --> Worker[Worker / retry / PDF / sync / notification]
  Worker --> External[메일 제공자 1종 / 외부 어댑터]
'''
(ROOT/'diagrams'/'architecture.mmd').write_text(MMD,encoding='utf-8')
ER='''erDiagram
  TENANT ||--o{ MEMBER : contains
  MEMBER o|--o| EMPLOYEE : linked
  PARTY ||--o{ PARTY_ROLE : has
  PARTY ||--o{ CONTACT : has
  PARTY ||--o{ FACILITY_RELATION : owns_or_manages
  FACILITY ||--o{ FACILITY_RELATION : relates
  PARTY ||--o{ CONSULTATION : has
  PARTY ||--o{ QUOTE : receives
  QUOTE ||--o{ QUOTE_VERSION : versions
  QUOTE_VERSION o|--o{ CONTRACT : converted
  CONTRACT ||--o{ RECEIVABLE : billed
  RECEIVABLE ||--o{ ALLOCATION : settled
  CASH_MOVEMENT ||--o{ ALLOCATION : applied
  WORKSPACE ||--o{ TASK : contains
  MEETING ||--o{ TASK : followup
  EMPLOYEE ||--o{ LEAVE_REQUEST : submits
  LEAVE_REQUEST ||--o{ LEAVE_LEDGER : effects
  APPROVAL_REQUEST ||--o{ APPROVAL_STEP : stages
  APPROVAL_STEP ||--o{ APPROVAL_DECISION : history
  RESOURCE ||--o{ RESERVATION : occupied
  FILE_OBJECT ||--o{ ATTACHMENT : linked
  DOCUMENT ||--o{ DOCUMENT_VERSION : versions
  ROOM ||--o{ MESSAGE : stores
  ROOM ||--o{ ROOM_MEMBER : has
'''
(ROOT/'diagrams'/'core-erd.mmd').write_text(ER,encoding='utf-8')

fields=['id','priority','complexity','services','title','evidence','observed','risk','change','acceptance','dependency']
issues=[dict(zip(fields,x)) for x in ISSUES]
for r in issues:
    for eid in r['evidence']:
        assert eid in evidence
        src=BASE/'screenshots'/f'{eid}.jpg';dst=ROOT/'evidence'/src.name
        if not dst.exists():shutil.copy2(src,dst)
(ROOT/'improvement-backlog.json').write_text(json.dumps(issues,ensure_ascii=False,indent=2),encoding='utf-8')

# PDF: readable portrait pages with linked evidence identifiers.
styles={
'title':ParagraphStyle('title',fontName='KB',fontSize=25,leading=36,textColor=colors.HexColor(INK),spaceAfter=20,wordWrap='CJK'),
'h1':ParagraphStyle('h1',fontName='KB',fontSize=18,leading=26,textColor=colors.HexColor(BLUE),spaceAfter=16,wordWrap='CJK'),
'h2':ParagraphStyle('h2',fontName='KB',fontSize=13,leading=20,textColor=colors.HexColor(INK),spaceBefore=8,spaceAfter=7,wordWrap='CJK'),
'body':ParagraphStyle('body',fontName='K',fontSize=10.5,leading=17,textColor=colors.HexColor(INK),spaceAfter=10,wordWrap='CJK'),
'small':ParagraphStyle('small',fontName='K',fontSize=8.3,leading=13,textColor=colors.HexColor(MUTED),spaceAfter=7,wordWrap='CJK'),
'cell':ParagraphStyle('cell',fontName='K',fontSize=9,leading=14,textColor=colors.HexColor(INK),wordWrap='CJK'),
'thead':ParagraphStyle('thead',fontName='KB',fontSize=9,leading=14,textColor=colors.white,wordWrap='CJK')}
E=html.escape
def pp(t,style='body'):return Paragraph(E(str(t)).replace('\n','<br/>'),styles[style])
def table(headers,rows):
    n=len(headers); widths=([105,190,216] if n==3 else [511/n]*n)
    cells=[[pp(x,'thead') for x in headers]]+[[pp(x,'cell') for x in row] for row in rows]
    t=Table(cells,colWidths=widths,repeatRows=1,hAlign='LEFT')
    t.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),colors.HexColor(BLUE)),('VALIGN',(0,0),(-1,-1),'TOP'),('TOPPADDING',(0,0),(-1,-1),7),('BOTTOMPADDING',(0,0),(-1,-1),7),('LEFTPADDING',(0,0),(-1,-1),9),('RIGHTPADDING',(0,0),(-1,-1),9),('ROWBACKGROUNDS',(0,1),(-1,-1),[colors.HexColor('#f0f5fb'),colors.white]),('LINEBELOW',(0,0),(-1,-1),.4,colors.HexColor('#d9e2ed'))]))
    return t
story=[]
story += [Spacer(1,45),pp('PRODUCT REVIEW / MVP DESIGN','small'),pp(TITLE,'title'),pp(SUBTITLE),Spacer(1,15)]
for t in INTRO[:3]:story.append(pp(t))
story.append(Spacer(1,16));story.append(table(['산출물','내용','활용'],[
['개선 진단','18개 개선 항목 / P0 6·P1 10·P2 2','관찰 근거·예상 불편·개선·완료 기준'],
['MVP 정의','12개 서비스의 포함/후속 범위','개발·QA의 범위 합의'],
['아키텍처','모듈·데이터·권한·상태·API·배포','설계 및 구현의 출발점'],
['실행 계획','18~22주 가정 / 검증·이관 게이트','팀·데이터 확인 후 재산정']]))
story.append(PageBreak())
story.append(pp('문서 목차','h1'))
for s in SECTIONS:
    key='h'+hashlib.sha256(s['title'].encode()).hexdigest()[:16]
    story.append(Paragraph('<a color="#1855a1" href="#'+key+'">'+E(s['title'])+'</a>',styles['body']))
story.append(pp('부록 A. 18개 개선 항목 상세 진단'))
story.append(pp('부록 B. 화면 근거와 기술 출처'))
story.append(PageBreak())
def pdfsection(s):
    story.append(pp(s['title'],'h1'))
    for t in s['paras']:story.append(pp(t))
    if s['diagram']:
        d=diagrams[s['diagram']].draw();scale=min(511/d.width,460/d.height)
        d.scale(scale,scale);d.width*=scale;d.height*=scale;story.extend([d,Spacer(1,15)])
    if s['headers']:story.append(table(s['headers'],s['rows']))
    for b in s['bullets']:story.append(pp('• '+b))
    story.append(PageBreak())
for s in SECTIONS:pdfsection(s)
story.append(pp('부록 A. 18개 개선 항목 상세 진단','h1'))
story.append(pp('화면 ID는 이전 138개 캡처의 ID와 같다. HTML 보고서에서는 해당 화면의 원본 이미지를 열 수 있다. 원본 데이터/코드 검증 전이므로 예상 불편과 구현상 결함을 구분해 읽어야 한다.'))
for r in issues:
    block=[pp(f"{r['id']} · {r['priority']} · {r['title']}",'h2'),pp(f"서비스: {r['services']} | 복잡도: {r['complexity']} | 근거: "+', '.join(r['evidence']),'small')]
    for label,key in [('관찰','observed'),('예상 불편','risk'),('개선안','change'),('완료 기준','acceptance'),('의존성','dependency')]:block.append(pp(label+': '+r[key]))
    block.append(Spacer(1,12));story.append(KeepTogether(block))
story.append(PageBreak());story.append(pp('부록 B. 화면 근거와 기술 출처','h1'))
story.append(pp('화면 근거: 2026.11.13 로그인된 Chrome에서 수집한 138개 화면. 본 설계에 사용한 ID의 원본과 제목을 HTML 보고서의 근거 링크로 연결했다. 사용자 행동 로그·소스코드·DB를 확인한 보고서는 아니다.'))
for sid,title,url,why in SOURCES:
    story.append(pp(sid+' · '+title,'h2'));story.append(pp(why))
    story.append(Paragraph('<a color="#1855a1" href="'+E(url,quote=True)+'">'+E(url)+'</a>',styles['small']))
story.append(pp('기술 문서는 2026.11.13 확인했다. 기술 선택·용량·일정은 본 보고서의 제안이며 공식 문서가 이 제품의 성능이나 일정을 보증하지 않는다.'))

def page_footer(c,doc):
    w,h=A4;c.saveState();c.setFillColor(colors.HexColor(BLUE));c.rect(0,h-7,w,7,fill=1,stroke=0)
    c.setStrokeColor(colors.HexColor('#d9e2ed'));c.line(42,35,w-42,35)
    c.setFont('K',8);c.setFillColor(colors.HexColor(MUTED));c.drawString(42,21,'업무함 MVP 설계 · 2026.11.13');c.drawRightString(w-42,21,str(doc.page));c.restoreState()
class DesignDoc(SimpleDocTemplate):
    def afterFlowable(self,f):
        if isinstance(f,Paragraph) and f.style.name=='h1':
            text=f.getPlainText();key='h'+hashlib.sha256(text.encode()).hexdigest()[:16]
            self.canv.bookmarkPage(key);self.canv.addOutlineEntry(text,key,0,False)
doc=DesignDoc(str(PDF),pagesize=A4,rightMargin=42,leftMargin=42,topMargin=40,bottomMargin=47,title=TITLE,author='업무함 화면 분석')
doc.build(story,onFirstPage=page_footer,onLaterPages=page_footer)

def htmltable(headers,rows):
    return '<div class="tablewrap"><table><thead><tr>'+''.join('<th>'+E(x)+'</th>' for x in headers)+'</tr></thead><tbody>'+''.join('<tr>'+''.join('<td>'+E(str(x)).replace('\n','<br>')+'</td>' for x in row)+'</tr>' for row in rows)+'</tbody></table></div>'
def refs(t):
    out=E(t)
    for sid,title,url,why in SOURCES:out=out.replace('['+sid+']','<a class="ref" href="'+E(url,quote=True)+'" target="_blank" rel="noopener">['+sid+']</a>')
    return out
parts=[]
for i,s in enumerate(SECTIONS):
    body=''.join('<p>'+refs(t)+'</p>' for t in s['paras'])
    if s['diagram']:body+='<a href="diagrams/'+s['diagram']+'.svg" target="_blank"><img class="diagram" src="diagrams/'+s['diagram']+'.svg" alt="'+E(s['title'])+' 구성도"></a>'
    if s['headers']:body+=htmltable(s['headers'],s['rows'])
    if s['bullets']:body+='<ul>'+''.join('<li>'+refs(x)+'</li>' for x in s['bullets'])+'</ul>'
    parts.append(f'<section id="s{i}"><h2>{E(s["title"])}</h2>{body}</section>')
cards=[]
for r in issues:
    links=''.join('<a href="evidence/'+eid+'.jpg" target="_blank">'+eid+' '+E(evidence[eid]['title'])+'</a>' for eid in r['evidence'])
    body=''.join('<div class="field"><b>'+label+'</b><p>'+E(r[key])+'</p></div>' for label,key in [('관찰','observed'),('예상 불편','risk'),('개선안','change'),('완료 기준','acceptance'),('의존성','dependency')])
    terms=E(' '.join([r['title'],r['services'],r['change'],r['observed']]),quote=True)
    cards.append(f'<article data-priority="{r["priority"]}" data-search="{terms}" id="{r["id"]}"><div class="badges"><span class="badge {r["priority"]}">{r["priority"]}</span><span>{r["id"]} · {r["services"]} · 복잡도 {r["complexity"]}</span></div><h3>{E(r["title"])}</h3>{body}<details><summary>근거 화면 {len(r["evidence"])}개 보기</summary><div class="evidence">{links}</div></details></article>')
nav=''.join(f'<a href="#s{i}">{E(s["title"])}</a>' for i,s in enumerate(SECTIONS))
sourcehtml=''.join('<li id="'+sid+'"><a target="_blank" rel="noopener" href="'+E(url,quote=True)+'">'+sid+' · '+E(title)+'</a><p>'+E(why)+'</p></li>' for sid,title,url,why in SOURCES)
css='''*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:24px}body{margin:0;background:#f3f6fa;color:#172b46;font:16px/1.85 'Malgun Gothic',sans-serif}aside{position:fixed;inset:0 auto 0 0;width:270px;padding:22px 18px;background:#fff;overflow:auto;border-right:1px solid #d8e1ed}aside strong{font-size:20px}aside a{display:block;font-size:13px;line-height:1.6;padding:7px 4px;color:#40546d;text-decoration:none}aside a:hover{color:#1855a1;background:#eef4fb}main{margin-left:270px;padding:36px 42px;max-width:1510px}header,section,.issues{background:white;padding:32px;border:1px solid #dfe6ee;border-radius:13px;margin-bottom:28px}header{border-top:5px solid #1855a1}h1{font-size:34px;line-height:1.5;margin:12px 0}h2{font-size:25px;line-height:1.6;color:#1855a1;margin:0 0 24px}h3{font-size:22px;line-height:1.6;margin:13px 0 22px}p{margin:0 0 17px}a{color:#1855a1}.kicker,.muted{color:#68798d;font-size:13px}.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:15px;margin:22px 0}.stats div{background:#edf4fc;padding:18px;border-radius:9px}.stats b{display:block;font-size:27px;color:#1855a1}.stats span{font-size:13px}.tablewrap{overflow:auto;margin:20px 0}table{border-collapse:collapse;width:100%;min-width:650px;font-size:14px;line-height:1.8}th{text-align:left;background:#1855a1;color:white}td,th{padding:14px;vertical-align:top;border-bottom:1px solid #dfe6ef}tbody tr:nth-child(odd){background:#f2f6fb}td:first-child{font-weight:bold;width:20%}.diagram{display:block;width:100%;max-width:960px;margin:24px auto}.toolbar{display:flex;gap:10px;flex-wrap:wrap;background:#eef4fb;padding:14px;border-radius:10px;margin-bottom:20px}input,select{font:inherit;padding:10px;border:1px solid #bdcadc;border-radius:7px;background:white}input{flex:1;min-width:180px}article{padding:25px;border:1px solid #dce5ee;border-radius:11px;margin-bottom:24px}.badges{display:flex;align-items:center;gap:12px;color:#66788d;font-size:13px}.badge{padding:3px 10px;border-radius:6px;font-weight:bold}.P0{background:#fee8e5;color:#a4372e}.P1{background:#e6f0fc;color:#1855a1}.P2{background:#e8f4ed;color:#287146}.field{display:grid;grid-template-columns:95px 1fr;gap:15px;margin-bottom:9px}.field b{color:#405674}.field p{margin:0}.evidence{display:flex;gap:10px;flex-wrap:wrap;padding-top:14px}.evidence a{background:#edf4fb;padding:8px 12px;font-size:13px;border-radius:6px}details{margin-top:20px}summary{cursor:pointer;color:#1855a1}.ref{font-size:12px}.downloads{display:flex;gap:14px;flex-wrap:wrap}.downloads a{background:#1855a1;color:white;padding:10px 16px;border-radius:7px;text-decoration:none}li{margin-bottom:12px}[hidden]{display:none!important}@media(max-width:980px){aside{display:none}main{margin:0;padding:16px}header,section,.issues{padding:22px}.stats{grid-template-columns:1fr 1fr}.field{display:block}.field b{display:block}.field p{margin-bottom:12px}}@media print{aside,.toolbar,.downloads{display:none}main{margin:0;padding:0}header,section,.issues{border:0}article{break-inside:avoid}.diagram{max-height:650px}}
'''
script='''const q=document.querySelector('#query'),p=document.querySelector('#priority'),cards=[...document.querySelectorAll('article')];function filter(){let n=0;const s=q.value.trim().toLowerCase();cards.forEach(c=>{const show=(!p.value||c.dataset.priority===p.value)&&c.dataset.search.toLowerCase().includes(s);c.hidden=!show;if(show)n++});document.querySelector('#result').textContent=n+' / 18개 개선 항목'}q.addEventListener('input',filter);p.addEventListener('change',filter);'''
htmltext='<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+TITLE+'</title><style>'+css+'</style></head><body><aside><strong>MVP 설계 리뷰</strong><a href="#top">요약</a><a href="#issues">개선 항목 검색</a>'+nav+'<a href="#sources">기술 출처</a></aside><main id="top"><header><div class="kicker">PRODUCT REVIEW / MVP ARCHITECTURE · 2026.11.13</div><h1>'+TITLE+'</h1><p>12개 서비스의 핵심 흐름을 유지하고, 원본 데이터·승인·권한·정산을 공통 규칙으로 연결합니다.</p><div class="stats"><div><b>138</b><span>조사 화면</span></div><div><b>18</b><span>개선 항목</span></div><div><b>12</b><span>MVP 서비스</span></div><div><b>18~22주</b><span>팀·범위 가정에 따른 추정</span></div></div><p class="muted">관찰한 화면 구조와 예상 불편을 구분했습니다. 실제 DB 중복·권한 결함을 확인한 진단은 아닙니다.</p><div class="downloads"><a href="mvp-improvement-architecture.pdf">PDF 보고서</a><a href="diagrams/architecture.svg" target="_blank">아키텍처 원본</a><a href="diagrams/core-erd.mmd">ERD 소스</a></div></header><div class="issues" id="issues"><h2>개선 항목과 우선순위</h2><p>P0: 출시 전 데이터·권한·상태 기반 / P1: 핵심 흐름 완성 / P2: 후속 최적화</p><div class="toolbar"><input id="query" type="search" aria-label="개선 항목 검색" placeholder="서비스·문제·개선안 검색"><select id="priority" aria-label="우선순위"><option value="">모든 우선순위</option><option>P0</option><option>P1</option><option>P2</option></select><span id="result">18 / 18개 개선 항목</span></div>'+''.join(cards)+'</div>'+''.join(parts)+'<section id="sources"><h2>기술 출처</h2><p>2026.11.13 공식 문서를 확인했습니다. 채택 구조·일정·용량은 본 보고서의 제안입니다.</p><ul>'+sourcehtml+'</ul></section></main><script>'+script+'</script></body></html>'
(ROOT/'mvp-design.html').write_text(htmltext,encoding='utf-8')
shutil.copy2(PDF,ROOT/PDF.name)

# Machine-readable acceptance scope and metadata.
(ROOT/'mvp-scope.json').write_text(json.dumps([dict(zip(['service','included','acceptance_flow','later','issues'],r)) for r in MVP],ensure_ascii=False,indent=2),encoding='utf-8')
reader=PdfReader(str(PDF));alltext='\n'.join(p.extract_text() or '' for p in reader.pages)
assert all(r['id'] in alltext for r in issues)
assert all(x['title'] in alltext for x in SECTIONS)
assert len(issues)==18 and len(MVP)==12
assert Counter(r['priority'] for r in issues)=={'P0':6,'P1':10,'P2':2}
for src in re.findall(r'<img[^>]+src="([^"]+)"',htmltext):assert (ROOT/src).is_file()
with zipfile.ZipFile(ROOT/'mvp-design-package.zip','w',zipfile.ZIP_DEFLATED) as z:
    for f in [ROOT/'mvp-design.html',ROOT/PDF.name,ROOT/'improvement-backlog.json',ROOT/'mvp-scope.json']+list((ROOT/'diagrams').glob('*'))+list((ROOT/'evidence').glob('*.jpg')):z.write(f,f.relative_to(ROOT))
print(json.dumps({'pages':len(reader.pages),'issues':len(issues),'services':len(MVP),'evidence_images':len(list((ROOT/'evidence').glob('*.jpg'))),'pdf_bytes':PDF.stat().st_size,'zip_bytes':(ROOT/'mvp-design-package.zip').stat().st_size},ensure_ascii=False))
