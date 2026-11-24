import json, re, html, zipfile
from pathlib import Path
from collections import Counter
from PIL import Image, ImageDraw, ImageFont
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from pypdf import PdfReader

ROOT=Path(__file__).resolve().parent
PDFDIR=ROOT.parent/'pdf'; PDFDIR.mkdir(exist_ok=True)
data=json.loads((ROOT/'captures.json').read_text(encoding='utf-8'))
services=['업무','메일','일정','인사','근태','게시판','회의','결재','고객','거래처','회계','채팅','공통']
data.sort(key=lambda r:(services.index(r['service']),int(r['id'].split('-')[1])))
overview={
'업무':'작업공간 중심의 협업. 다양한 보기, 콘텐츠 작성, 파일, 템플릿과 외부 업무함 연결을 제공한다.',
'메일':'받은편지함부터 예약·스팸·휴지통까지 메일을 분류한다. 현재 계정 미등록으로 실제 송수신은 확인하지 못했다.',
'일정':'업무·회의·교육 등 여러 서비스의 일정을 모으고 회의실과 차량 예약·운행일지를 관리한다.',
'인사':'직원 기본정보에서 자격·경력·교육·발령·계약·급여·보험·지원금까지 인사 정보를 관리한다.',
'근태':'개인 출퇴근과 휴가, 조직 근태, 연차, 집계·보고서, 근무 일정을 제공한다.',
'게시판':'공지·서식·계약서·자료실·건의사항 등 10개 게시판을 공통 글쓰기 구조로 운영한다.',
'회의':'회의록을 분류하고 안건·결정·후속조치를 기록한다. 녹음·AI 정리와 화상회의 진입점이 있다.',
'결재':'내 문서, 처리할 문서, 처리한 문서, 조직 문서를 분리하고 13종의 신청·보고 양식을 제공한다.',
'고객':'고객·시설물 정보, 통화·상담, 견적·계약, 고객 및 상담 통계를 연결하는 CRM 영역이다.',
'거래처':'매출처·매입처 정보와 견적·계약, 매출·매입, 미수·미지급, 거래 조건을 관리한다.',
'회계':'수기 및 엑셀 기반 매출·지출 장부, 손익, 통장·카드, 계정과목을 제공한다.',
'채팅':'부서별 구성원과 대화방을 찾아 메시지를 주고받는 별도 채팅 화면이다.',
'공통':'기업 설정, 조직도, 요금·정산과 근태·고객·상담·계약·업무의 공통 정책을 제공한다.'}
updates={
'01-02':'업무 내용을 피드 형태로 모아 본다. 글·대화·업무 등 콘텐츠를 흐름에 따라 확인하는 보기다.',
'01-03':'여러 업무를 목록으로 비교하며 검색과 상태·담당자 등 필터로 좁혀 본다.',
'01-04':'업무를 주간 단위로 배치해 해당 주의 마감과 진행 일정을 확인한다.',
'01-05':'업무를 프로젝트 기준으로 묶어 진행 현황을 확인하는 보기다.',
'01-06':'업무의 시작·종료 구간을 날짜 축에 놓아 기간과 겹치는 일정을 확인한다.',
'01-08':'자신이 보낸 업무를 별도로 모아 진행 상황을 확인한다.',
'01-19':'일정의 날짜·시간·반복·장소·주소·알림을 지정한다. 회의실·차량·화상회의 관련 항목도 제공한다.',
'01-20':'텍스트 또는 날짜 항목으로 투표를 구성한다. 선택지, 마감과 결과 공개 조건을 지정하는 화면이다.',
'02s-06':'차량별 시간대 예약을 조회한다. 차량 사용 신청은 전자결재의 차량 사용 신청서로 연결된다.',
'02s-07':'운전자, 운행일, 주행거리, 업무·출퇴근 구분과 비용을 기록하는 차량 운행일지다. 엑셀 기능이 있다.',
'03-01':'직원의 이름·부서·직급·재직 상태를 목록으로 확인하고 직원 등록과 인사 세부 화면으로 이동한다.',
'03-02':'직원별 학력과 자격증을 관리한다. 학교·졸업 정보 및 자격의 취득·만료 정보를 확인한다.',
'03-03':'직원의 경력과 동일 분야 경력을 관리하고 포상·징계 이력을 함께 확인한다.',
'03-04':'법정·직무 등의 교육을 구분해 기관, 교육일, 시간, 수료 및 다음 교육 정보를 관리한다.',
'03-05':'입사·전보·승진·휴직·복직·퇴사 등의 발령 이력을 직원별로 관리한다.',
'03-06':'재직·경력·퇴직·위촉 증명서 발급과 신청 내역·발급대장을 관리한다. PDF 관련 기능이 표시된다.',
'03-07':'기간과 작업공간을 선택해 직원별 업무 기여도를 비교한다. 완료일 또는 마감일 기준과 월별 기여도 표시를 제공한다.',
'03-08':'급여대장의 지급액·공제액·실지급액과 처리 상태를 조회한다. 대장 만들기와 급여 설정 진입점이 있다.',
'03-09':'4대보험 가입 현황과 신고할 일을 나누어 확인한다. 취득·상실·보수 관련 정보를 관리하는 영역이다.',
'03-10':'지원사업의 기관·대상·상태·기간과 승인액·수령액·다음 조치를 관리한다.',
'03-11':'직원별 근로계약의 계약일·형태·기간·급여·첨부와 상태를 관리한다.',
'03-12':'이름·입사일·사번·부서·직급·직책·근무형태·재직 상태·퇴사일을 입력한다.',
'03-13':'근태 관리 대상, 담당업무, 채용·수습, 계약기간, 근무시간, 급여 형태·금액과 수당을 입력한다.',
'03-14':'생년월일·국적·성별·병역·혼인 등의 인적사항을 입력하는 구역이다. 실제 정보는 입력하지 않았다.',
'03-15':'직원의 휴대폰·이메일·주소와 비상연락처를 입력한다.',
'03-16':'급여 지급 계좌와 공제 대상 가족, 원천징수 비율 및 소득세 감면 관련 항목을 입력한다.',
'03-17':'직원의 차량번호·차종·연료 정보를 입력한다.',
'03-18':'직원 정보에 추가 설명을 남기는 비고 구역이다. 구성원 연결 버튼도 제공한다.',
'04-02':'조직의 직원별 출퇴근 및 근무 상태를 확인하는 운영 화면이다. 날짜와 조직 기준으로 확인한다.',
'04-03':'직원별 휴가와 근태 기록을 조회하고 기간·유형·상태에 따라 관리한다.',
'04-04':'직원별 연차의 부여·사용·잔여를 확인한다. 연차 조정·마감·사용 촉진 관련 진입점이 있다.',
'04-05':'월·부서별 실근로, 연장, 승인·미승인, 야간·휴일근로 등을 표로 집계하고 엑셀 기능을 제공한다.',
'04-07':'직원별 근무 일정을 주간 또는 4주 단위로 편성한다. 이전 일정 복사와 교대 틀을 사용하는 구조다.',
'07-05':'구매 요청서 양식과 문서 선택 목록이다. 제목·중요도·보존기한·결재기한·본문·결재선·참조·첨부를 지정한다.',
'08-02':'수신·발신·부재중 통화의 시간·길이·담당자·요약을 조회한다. 고객·상담·계약 연계와 녹취 항목이 표시된다.',
'08-04':'고객의 견적·계약을 단계·번호·건명·고객·날짜·금액·작성자 기준으로 조회한다.',
'08-06':'상담 처리 중·완료, 수신·발신·부재중 및 계약 연계 현황을 집계한다. 일자·시간·유입경로·분류·담당자별 분석을 제공한다.',
'09-02':'거래처의 견적·계약을 목록으로 조회한다. 고객 영역과 별도로 거래처 기준의 계약 흐름을 관리한다.',
'09-03':'거래일·번호·매출처·적요·합계·남은 금액·결제 예정일·수금 상태를 조회하고 미수금으로 좁혀 본다.',
'09-04':'거래일·번호·매입처·적요·합계·남은 금액·결제 예정일·지급 상태를 관리한다.',
'09-05':'거래처별 미수·미지급 합계와 연체, 미정산 금액·기일을 모아 확인하는 정산 현황이다.',
'09-06':'거래에 적용할 결제 조건의 이름·규칙·비고·사용 여부를 관리한다.',
'10-03':'거래일 또는 실제 돈이 오간 날을 기준으로 손익을 조회한다. 매출·원가·매출총이익·판관비·영업이익·영업외손익·순이익을 표시한다.',
'10-04':'등록된 통장과 카드, 계좌 잔액과 거래를 관리한다. 통장 추가·이체·대사 관련 기능이 표시된다.',
'10-05':'회사의 거래 항목과 회계 계정과목의 연결을 관리한다. 검색과 사용 여부 관리 기능이 있다.',
'12-03':'직접 출퇴근을 기록할 때 GPS·QR·사내 Wi-Fi 확인 방식과 외근 허용 여부를 구성한다.',
'12-04':'근무지 도착 시 자동 출근 기록 여부를 설정하는 항목이다. 실제 기기에서의 자동 기록은 시험하지 않았다.',
'12-05':'근태 시작일·주간 근로 한도·주 시작요일·연장 인정·점심시간과 알림·자동 처리 정책을 구성한다.',
'12-06':'연차 부여 기준, 남은 연차 이월과 사용 촉진 기능을 설정한다. 화면의 정책 안내를 확인한 것으로 법적 적합성을 검증한 것은 아니다.',
'12-07':'연장·야간·휴일 수당의 배율과 야간 정액 수당·식사 공제 항목을 구성한다. 급여대장의 근태 반영에 사용된다는 안내가 있다.',
'12-08':'무급휴가·결근·지각·조퇴 및 주휴 관련 공제 여부와 일급 환산 방식을 구성한다. 급여 반영 결과는 실행하지 않았다.',
'12-09':'별도 근무제를 배정하지 않은 직원에게 적용할 기본 근무시간·요일·휴게시간을 확인한다.',
'12-10':'기본과 다른 근무시간이 필요한 직원에게 적용할 근무제를 추가·관리하는 구역이다.',
'12-11':'대상 직원에게 근무제를 배정하는 구역이다. 개인 근무시간이 있는 직원의 적용 기준 안내가 표시된다.',
'12-12':'교대근무 시간대를 틀로 정의해 근무 일정에 사용하는 구역이다.',
'12-16':'업무 기여도와 외부 공유 링크, 오류 알림 관련 설정을 확인한다. 정책을 변경하지 않았다.'}

def area(r):
    s=r['snapshot']
    if '- dialog ' in s:s=s[s.index('- dialog '):]
    if r['id'].startswith('03-') and int(r['id'].split('-')[1])>=12 or r['id'].startswith('12-') and 3<=int(r['id'].split('-')[1])<=12:
        key=r['title'].split(' - ')[-1]
        m=re.search(r'- heading "'+re.escape(key)+r'" \[level=3\]',s)
        if m:
            s=s[m.start():]; nxt=re.search(r'\n\s*- heading .*\[level=3\]',s[1:])
            if nxt:s=s[:nxt.start()+1]
    return s

def fields(r):
    s=area(r)
    vals=re.findall(r'- (?:columnheader|textbox|combobox|checkbox) "([^"]+)"',s)
    vals=[v for v in vals if v not in ['00','글자 크기','검색어를 입력하세요'] and len(v)<45]
    return list(dict.fromkeys(vals))[:18]

for r in data:
    r['summary']=updates.get(r['id'],r['summary'])
    r['fields']=fields(r)
    r['image']='screenshots/'+r['id']+'.jpg'
    r['type']='양식·설정' if ('- dialog ' in r['snapshot'] or r['id'].startswith('07-') and int(r['id'][-2:])>=5) else '조회·관리'
    if r['id'].startswith('07-') and int(r['id'][-2:])>=7:
        special=[f for f in r['fields'] if not f.startswith(('제목','중요도','보존기한','결재기한'))]
        if special:r['summary']=r['title']+' 전용 양식이다. '+', '.join(special[:10])+' 등의 항목을 작성하고 결재선·참조·첨부와 함께 상신하는 구조다.'

counts=Counter(r['service'] for r in data)
scope=[
'2026년 11월 13일, 로그인된 Chrome 계정에서 확인한 테스트 사이트 화면을 기준으로 작성했다.',
'좌측 12개 서비스와 주요 하위 메뉴·보기 방식·등록 양식·공통 설정을 138개 캡처로 정리했다. 화면별 설명은 화면 문구와 입력 항목에서 확인한 기능이다.',
'동일한 구조의 개별 고객·직원·문서·폴더와 모든 필터 조합은 반복 수집하지 않았다. 긴 화면은 선택한 탭 또는 구역의 화면을 캡처했다.',
'등록·저장·결재 제출·발송·업로드·계정 연결·결제·정책 변경은 실행하지 않았다. 저장 후 상태와 실제 연동 결과는 검증 범위 밖이다.',
'메일 계정 미등록, 근태 기기 미등록, 빈 목록 때문에 확인하지 못한 실제 처리 화면이 있다. 권한별 화면과 관리자 설정의 모든 세부 팝업을 망라한 문서는 아니다.'
]
flows=[('상담 → 업무','상담 기록 입력의 ‘업무로 등록’ 버튼에서 후속 업무로 연결한다.'),('휴가·차량 예약 → 결재','근태 휴가 신청과 차량 예약은 전용 결재 양식으로 연결된다.'),('근태 → 급여','수당·공제 설정에 급여대장 근태 반영 안내가 있다. 실제 계산·반영은 미실행이다.'),('업무 → 인사 기여도','업무 완료·마감 기준과 작업공간별 기여도 집계를 인사에서 조회한다.'),('여러 서비스 → 통합 일정','업무·회의·교육·기한·자원 예약을 일정 서비스의 달력에 모아 본다.')]

pdfmetrics.registerFont(TTFont('Malgun','C:/Windows/Fonts/malgun.ttf'))
pdfmetrics.registerFont(TTFont('MalgunB','C:/Windows/Fonts/malgunbd.ttf'))
W,H=1440,1280
pdfpath=PDFDIR/'service-screen-review.pdf'
c=canvas.Canvas(str(pdfpath),pagesize=(W,H),pageCompression=1)
c.setTitle('업무함 서비스별 화면 조사 | 138개 캡처')
c.setAuthor('서비스 화면 조사')
style=ParagraphStyle('body',fontName='Malgun',fontSize=19,leading=29,textColor=HexColor('#344256'),wordWrap='CJK')
page=0
def p(text,x,y,width=1336,size=19,color='#344256'):
    st=ParagraphStyle('p',parent=style,fontSize=size,leading=size*1.55,textColor=HexColor(color))
    o=Paragraph(html.escape(text),st); a,b=o.wrap(width,1000);o.drawOn(c,x,y-b);return y-b
def base(kicker,title):
    global page
    page+=1;c.setFillColor(HexColor('#f2f5fa'));c.rect(0,0,W,H,fill=1,stroke=0)
    c.setFillColor(HexColor('#174a8b'));c.rect(0,H-12,W,12,fill=1,stroke=0)
    c.setFont('MalgunB',14);c.drawString(52,H-48,kicker)
    c.setFillColor(HexColor('#15283e'));c.setFont('MalgunB',32);c.drawString(52,H-98,title)
    c.setFillColor(HexColor('#657389'));c.setFont('Malgun',12)
    c.drawString(52,25,'업무함 화면 조사  |  2026.11.13  |  work-test.elimsafety.com')
    c.drawRightString(W-52,25,str(page))
def end():c.showPage()

base('SERVICE SCREEN REVIEW','서비스별 화면과 기능 정리')
y=p('12개 서비스 + 공통 설정 · 138개 화면 캡처',52,1130,size=29,color='#174a8b')-36
for t in scope:y=p('• '+t,52,y,size=21)-23
y-=35
y=p('문서 사용 방법',52,y,size=25,color='#15283e')-12
y=p('다음 페이지의 서비스별 목차에서 해당 영역으로 이동할 수 있다. 이후에는 캡처 한 장마다 목적, 주요 항목, 출처를 함께 배치했다. PDF 책갈피로도 이동할 수 있다.',52,y,size=21)-18
p('함께 제공하는 HTML 화면목록은 서비스 필터·검색·원본 이미지 확대를 지원한다. ZIP을 풀고 screen-guide.html을 열면 이미지와 함께 볼 수 있다.',52,y,size=21)
end()
base('CONTENTS','좌측 메뉴 기준 서비스 구성')
y=1138
start_page=4
for i,s in enumerate(services):
    c.setFillColor(HexColor('#ffffff'));c.roundRect(44,y-67,W-88,67,10,fill=1,stroke=0)
    c.setFillColor(HexColor('#174a8b'));c.setFont('MalgunB',21);c.drawString(62,y-29,s)
    p(overview[s],215,y-12,width=1070,size=16)
    c.setFont('Malgun',12);c.drawString(62,y-51,str(counts[s])+'개 화면')
    c.linkRect('',f'service-{i}',(44,y-67,W-44,y),relative=0,thickness=0)
    y-=76
end()
base('CONNECTIONS & LIMITS','서비스 간 연결과 확인 범위')
y=1136
for title,desc in flows:
    y=p(title,52,y,size=25,color='#174a8b')-8;y=p(desc,52,y,size=21)-34
y-=20
y=p('검토 시 주의할 점',52,y,size=25,color='#15283e')-10
p('기능 설명은 실제 화면에서 확인한 구조다. AI 정리·전화 연동·자동 출퇴근·급여 계산·회계 연동 등의 성공 여부를 시험한 결과는 아니다. 화면에 있는 금액·인원·기록은 조사 시점의 테스트 데이터이며 운영 지표로 해석하지 않았다.',52,y,size=21)
end()
for i,s in enumerate(services):
    first=True
    for r in [r for r in data if r['service']==s]:
        base(f'{s}  /  {r["type"]}  /  {r["id"]}',r['title'])
        if first:
            c.bookmarkPage(f'service-{i}');c.addOutlineEntry(s,f'service-{i}',0,False);first=False
        c.bookmarkPage(r['id']);c.addOutlineEntry(r['id']+' '+r['title'],r['id'],1,False)
        y=p(r['summary'],52,H-125,size=18)-10
        if r['fields']:y=p('주요 항목: '+' · '.join(r['fields']),52,y,size=13)-8
        path=ROOT/r['image']; im=Image.open(path); iw,ih=im.size
        scale=min((W-104)/iw,(y-83)/ih); dw,dh=iw*scale,ih*scale
        x=(W-dw)/2; bottom=65
        c.setFillColor(HexColor('#ffffff'));c.rect(x-2,bottom-2,dw+4,dh+4,fill=1,stroke=0)
        c.drawImage(str(path),x,bottom,width=dw,height=dh)
        c.setFont('Malgun',10);c.setFillColor(HexColor('#657389'));c.drawString(52,46,'화면 출처: '+r['url'])
        r['pdf_page']=page;end()
c.save()

E=html.escape
nav=''.join(f'<a href="#service-{i}">{s}<span>{counts[s]}</span></a>' for i,s in enumerate(services))
sections=[]
for i,s in enumerate(services):
    cards=[]
    for r in [r for r in data if r['service']==s]:
        terms=E(s+' '+r['title']+' '+r['summary']+' '+' '.join(r['fields']),quote=True)
        fs_html='<p class="fields"><b>주요 항목</b> '+E(' · '.join(r['fields']))+'</p>' if r['fields'] else ''
        cards.append(f'<article data-search="{terms}" data-service="{s}" id="screen-{r["id"]}"><div class="cardhead"><span class="tag">{s} · {r["id"]} · {r["type"]}</span><h3>{E(r["title"])}</h3><p>{E(r["summary"])}</p>{fs_html}<p class="source">출처 <a href="{E(r["url"],quote=True)}" target="_blank" rel="noopener">{E(r["url"])}</a> · PDF {r["pdf_page"]}쪽 · <a href="{r["image"]}" target="_blank">원본 확대</a></p></div><a href="{r["image"]}" target="_blank"><img loading="lazy" src="{r["image"]}" alt="{E(r["title"])} 화면 캡처"></a></article>')
    sections.append(f'<section id="service-{i}" data-service="{s}"><h2>{s} <small>{counts[s]}개 화면</small></h2><p class="intro">{overview[s]}</p>'+''.join(cards)+'</section>')
doc='''<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>업무함 서비스별 화면 정리</title><style>
:root{--blue:#174a8b;--ink:#15283e;--muted:#64748b}*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:100px}body{margin:0;background:#f2f5fa;color:var(--ink);font:16px/1.7 'Malgun Gothic',sans-serif}aside{position:fixed;inset:0 auto 0 0;width:210px;background:#fff;padding:26px 20px;overflow:auto;border-right:1px solid #dbe3ec}aside strong{display:block;font-size:21px;margin-bottom:22px}aside a{display:flex;justify-content:space-between;padding:7px 9px;text-decoration:none;color:var(--ink);border-radius:7px}aside a:hover{background:#edf3fb}aside span{color:var(--muted);font-size:13px}main{margin-left:210px;padding:40px;max-width:1660px}.hero{background:#fff;border-top:5px solid var(--blue);padding:32px;border-radius:12px;margin-bottom:24px}h1{font-size:36px;margin:6px 0 12px}h2{font-size:28px;padding-top:26px}h3{font-size:24px;margin:6px 0 10px}p{margin:8px 0 14px}small,.source{color:var(--muted);font-size:13px}.kicker,.tag{color:var(--blue);font-size:13px;font-weight:bold}.toolbar{position:sticky;top:0;z-index:2;background:#f2f5faf2;padding:14px 0;display:flex;gap:12px;align-items:center;backdrop-filter:blur(8px)}input,select{font:inherit;padding:11px;border:1px solid #cbd5e1;border-radius:8px;background:white}input{flex:1;min-width:100px}.count{font-size:14px;white-space:nowrap}article{background:white;border:1px solid #dce4ee;border-radius:12px;overflow:hidden;margin:24px 0 38px;box-shadow:0 5px 20px #20324a06}.cardhead{padding:24px 28px 12px}article img{width:100%;height:auto;display:block;border-top:1px solid #e5eaf0}.fields{font-size:14px;color:#58667a}.source a{color:var(--blue)}.flow{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:14px}.flow div{background:#f1f6fc;padding:18px;border-radius:8px}.flow b{color:var(--blue)}details{margin-top:20px}li{margin:8px 0}.intro{color:var(--muted)}[hidden]{display:none!important}@media(max-width:850px){aside{display:none}main{margin:0;padding:16px}h1{font-size:28px}.toolbar{flex-wrap:wrap}.hero{padding:22px}}@media print{aside,.toolbar{display:none}main{margin:0;padding:0}article{break-inside:avoid;box-shadow:none}details{display:block}}
</style></head><body><aside><strong>업무함 화면 조사</strong><a href="#top">전체 안내</a>''' + nav + '''</aside><main id="top"><header class="hero"><div class="kicker">SERVICE SCREEN REVIEW · 2026.11.13</div><h1>서비스별 화면과 기능 정리</h1><p>좌측 메뉴의 12개 서비스와 공통 설정을 <b>138개 캡처</b>로 정리했습니다. 이미지를 클릭하면 원본 크기로 열립니다.</p><details open><summary><b>조사 범위와 확인 한계</b></summary><ul>'''+''.join('<li>'+E(t)+'</li>' for t in scope)+'''</ul></details><h3>서비스 간 연결</h3><div class="flow">'''+''.join('<div><b>'+E(a)+'</b><p>'+E(b)+'</p></div>' for a,b in flows)+'''</div></header><div class="toolbar"><input id="search" type="search" aria-label="화면 검색" placeholder="화면명·기능·항목 검색"><select id="service" aria-label="서비스 선택"><option value="">모든 서비스</option>'''+''.join(f'<option>{s}</option>' for s in services)+'''</select><span class="count" id="count">138개 화면</span></div>'''+''.join(sections)+'''<p id="empty" hidden>검색 조건에 맞는 화면이 없습니다.</p></main><script>
const q=document.querySelector('#search'),sel=document.querySelector('#service'),cards=[...document.querySelectorAll('article')];function filter(){let n=0;let needle=q.value.trim().toLowerCase();cards.forEach(a=>{let show=(!sel.value||a.dataset.service===sel.value)&&a.dataset.search.toLowerCase().includes(needle);a.hidden=!show;if(show)n++});document.querySelectorAll('section').forEach(s=>s.hidden=![...s.querySelectorAll('article')].some(a=>!a.hidden));document.querySelector('#count').textContent=n+' / 138개 화면';document.querySelector('#empty').hidden=n!==0}q.addEventListener('input',filter);sel.addEventListener('change',filter);
</script></body></html>'''
(ROOT/'screen-guide.html').write_text(doc,encoding='utf-8')
index=[{k:v for k,v in r.items() if k not in ('snapshot','path')} for r in data]
(ROOT/'screen-index.json').write_text(json.dumps(index,ensure_ascii=False,indent=2),encoding='utf-8')

# Contact sheets for visual inspection of new and corrected captures.
qa=ROOT/'qa';qa.mkdir(exist_ok=True)
font=ImageFont.truetype('C:/Windows/Fonts/malgun.ttf',16)
for batch in range((len(data)+19)//20):
    sheet=Image.new('RGB',(1500,1120),'#e6edf5');d=ImageDraw.Draw(sheet)
    for j,r in enumerate(data[batch*20:(batch+1)*20]):
        im=Image.open(ROOT/r['image']).convert('RGB');im.thumbnail((290,235))
        x=(j%5)*300+5;y=(j//5)*280+34;sheet.paste(im,(x,y));d.text((x,y-27),r['id']+' '+r['title'][:15],font=font,fill='#15283e')
    sheet.save(qa/f'final-contact-{batch+1}.jpg',quality=90)

reader=PdfReader(str(pdfpath))
assert len(reader.pages)==len(data)+3
assert len({r['id'] for r in data})==138
assert all((ROOT/r['image']).is_file() for r in data)
assert all(r['title'] in reader.pages[r['pdf_page']-1].extract_text() for r in data)
with zipfile.ZipFile(ROOT/'service-screen-review.zip','w',zipfile.ZIP_DEFLATED) as z:
    for f in [ROOT/'screen-guide.html',ROOT/'screen-index.json']+[ROOT/r['image'] for r in data]:z.write(f,f.relative_to(ROOT))
    z.write(pdfpath,'service-screen-review.pdf')
print(json.dumps({'screens':len(data),'pdf_pages':len(reader.pages),'services':counts,'pdf_mb':round(pdfpath.stat().st_size/1024**2,1),'zip_mb':round((ROOT/'service-screen-review.zip').stat().st_size/1024**2,1)},ensure_ascii=False))
