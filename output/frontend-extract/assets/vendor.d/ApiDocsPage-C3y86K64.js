import{j as e,r as b,L as x}from"./react-CjxcGQav.js";import{c as O,bF as j,B as t,s as n,b as k,bG as I,I as v}from"../js.d/main-Cm9wS5wt.js";import{C as H}from"./CodeBlock-DjLPtoQG.js";import"./stylis-DdLD6a3t.js";import"./CheckRounded-q96oOTwH.js";const q=O(e.jsx("path",{d:"M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"})),f="베타",T="이 API 는 고객 서비스와 함께 씁니다. 고객 서비스는 **무료 기본 기능**이며, 조직의 서비스 설정에서 고객을 켠 뒤 쓸 수 있습니다.",r="https://taskham.com/api/v1/public",g=[{id:"start",title:"시작하기",sections:[{id:"overview",title:"개요",blocks:[{kind:"p",text:"업무함 API 는 **조직이 발급한 API 키**로 부릅니다. 키는 쓰임에 따라 나뉘고, **키 하나는 한 가지 API 만** 부릅니다."},{kind:"table",head:["종류","무엇을","부르는 곳","키를 두는 곳"],rows:[["작업공간","업무 읽고 쓰기(구성원의 이름으로)","서버","서버에만"],["게시판","공지사항 같은 게시판 글을 홈페이지에 보이기 · 쓰기","서버","서버에만"],["고객","고객 명부 · 상담 내역 읽고 쓰기","서버","서버에만"],["고객센터","홈페이지 문의를 작업공간 업무로 받고 답변 읽기","서버","서버에만"],["예약","예약 읽고 넣고 고치기 · 빈 시간 조회","서버","서버에만"],["회원(홈페이지용)","홈페이지의 회원 가입 · 로그인 · 내 정보","브라우저","페이지에 실어도 됨"],["회계 연동","바깥 서비스의 매출 · 지출을 회계 장부에 넣기","서버","서버에만"]]},{kind:"p",text:`기본 주소는 \`${r}\` 이고, 그 뒤에 API 마다 \`/workspace\` · \`/board\` · \`/customer\` · \`/support\` · \`/booking\` · \`/member\` · \`/accounting\` 이 붙습니다.`}]},{id:"keys",title:"키 발급",blocks:[{kind:"p",text:"업무함의 **조직 설정 › API 키**에서 조직의 소유자·관리자가 발급합니다."},{kind:"list",items:["종류를 고르고 이름을 붙입니다. **종류는 발급한 뒤에는 바꿀 수 없습니다.**","만료일을 정할 수 있습니다. 비우면 무기한입니다.","키마다 켜고 끌 수 있고, **폐기하면 그 키의 호출은 바로 막힙니다.**","서버에 두는 키(회원 키 말고 모두)는 **허용 IP** 를 적어 그 서버에서만 통하게 할 수 있습니다.","회원(홈페이지용) 키는 그 키를 쓸 **홈페이지 주소**를 적습니다."]},{kind:"note",text:"회원(홈페이지용) 키 말고는 모두 **비밀 키**입니다. **브라우저나 앱에 넣지 마세요** — 페이지 소스에서 누구나 볼 수 있습니다."}]},{id:"common",title:"응답과 오류",blocks:[{kind:"p",text:"모든 응답은 JSON 이고 모양이 같습니다."},{kind:"code",code:`// 성공
{ "ok": true, "data": { ... } }

// 실패
{ "ok": false, "error": { "code": "invalid_request", "message": "고객명을 입력하세요." } }`},{kind:"p",text:"`message` 는 사람이 읽는 글이라 바뀔 수 있습니다. **분기는 `code` 로 하세요.**"},{kind:"table",head:["상태","code","뜻"],rows:[["400","`invalid_request`","값이 빠졌거나 틀렸습니다"],["401","`unauthorized`","키가 없거나 틀렸거나 꺼졌거나 만료됐습니다"],["403","`forbidden`","이 API 용 키가 아니거나 권한이 없습니다"],["403","`ip_not_allowed`","키에 적어 둔 허용 IP 가 아닙니다"],["403","`feature_disabled`","조직이 그 서비스를 쓰지 않습니다"],["404","`not_found`","대상이 없습니다"],["409","`conflict`","지금 상태에서는 할 수 없습니다(겹침 · 이미 있음)"],["429","`rate_limited`","호출 한도를 넘었습니다. `Retry-After` 초 뒤에 다시 부릅니다"]]}]},{id:"rules",title:"공통 규칙",blocks:[{kind:"list",items:['수정(`PATCH`)은 **보낸 키만 바뀝니다.** **모르는 값은 키를 빼고 보내세요** — `""` · `[]` · `0` 을 보내면 비우라는 뜻입니다.',"날짜는 `YYYY-MM-DD`, 일시는 `YYYY-MM-DD HH:mm` (한국 시각)입니다.","고객 · 상담의 식별자(`id`)는 무작위 글자입니다. 순번이 아닙니다.","목록 넘기기: **고객 API 는 `cursor`** 로 넘깁니다(응답의 `next_cursor` 를 다음 호출에 넣고, `null` 이면 끝). **그 밖의 API 는 `page` · `limit`** 으로 넘깁니다.","호출량: 서버에 두는 키는 키마다 **분당 600회**입니다. 응답 헤더 `X-RateLimit-Remaining` 으로 남은 횟수를 봅니다.","**변경 알림(웹훅)은 아직 없습니다.** 바꾼 뒤에는 다시 읽어 맞춥니다."]}]}]},{id:"workspace",title:"작업공간 API",sections:[{id:"workspace-intro",title:"무엇을 하나",blocks:[{kind:"p",text:"작업공간 키로, **그 조직 구성원의 이름을 빌려** 업무함의 업무를 읽고 씁니다. 바깥 시스템에 로그인한 사람이 누구냐에 따라 **그 사람이 업무함에서 한 것과 똑같이 기록됩니다**(작성자 · 알림 · 활동 기록 · 공간 권한)."},{kind:"code",label:"인증 — 헤더 두 개",code:`Authorization: Bearer thk_...              # 작업공간 키
X-Taskham-User: someone@example.com        # 지금 이 일을 하는 사람(조직 구성원)의 이메일
Content-Type: application/json             # 본문이 있는 요청`},{kind:"list",items:[`주소는 \`${r}/workspace\` 입니다.`,"`X-Taskham-User` 는 **바깥 시스템의 로그인 사용자 이메일**입니다. 업무함에서 그 조직의 소유자·구성원인 이메일이어야 합니다.","이 키는 조직의 누구로든 움직일 수 있는 자격증명입니다. **서버에만 두세요.**"]},{kind:"table",head:["상태","code","언제"],rows:[["400","`missing_user`","`X-Taskham-User` 헤더가 없습니다"],["403","`unknown_user`","그 이메일이 이 조직의 구성원이 아닙니다"],["403","`forbidden`","그 공간에 쓸 권한이 없습니다"],["404","`not_found`","업무가 없거나, 이 조직의 공간에 있는 업무가 아닙니다"],["409","`conflict`","가져가기 경합 등"]]}]},{id:"workspace-scope",title:"범위",blocks:[{kind:"list",items:["**키를 낸 조직의 작업공간만 보입니다.** 그 사람이 다른 조직에도 속해 있어도 그쪽 업무는 404 입니다.","공간 안에서의 권한은 그 사람의 것입니다 — `access_role` 이 `read` 면 읽기만, `write` · `owner` 면 등록 · 수정.","**삭제는 휴지통까지입니다**(복원할 수 있습니다). 영구 삭제는 업무함에서만 합니다."]}]},{id:"workspace-endpoints",title:"끝점",blocks:[{kind:"table",head:["메서드","경로","용도"],rows:[["GET","`/context`","행위자 · 조직 · 조직도(구성원 + 부서) · 작업공간 목록 — 먼저 부릅니다"],["POST","`/bootstrap`","그 사람이 관여한 진행 중 업무 전량 + 프로젝트 + 커스텀 상태"],["POST","`/task/list`","완료 · 보관 · 휴지통 목록 — `{ tab, page, limit, search, from_date, to_date }`"],["GET","`/task/{seq}`","업무 상세(본문 · 댓글 포함)"],["POST","`/task`","업무 등록"],["PATCH","`/task/{seq}`","부분 수정 — 담은 필드만 바뀝니다"],["DELETE","`/task/{seq}`","휴지통으로"],["POST","`/task/{seq}/restore`","휴지통 복원"],["POST","`/task/{seq}/request-confirm`","확인 요청"],["POST","`/task/{seq}/ack`","확인 처리"],["POST","`/task/{seq}/claim`","접수함 업무 가져가기"],["POST","`/task/{seq}/read`","읽음 기록"],["POST","`/task/{seq}/notify-flush`","편집을 마쳤다 — 그동안의 수정 알림을 한 건으로 묶어 보냅니다"],["GET","`/task/{seq}/audit`","활동 기록"],["POST","`/task/{seq}/comments`","댓글 `{ text }`"],["PATCH","`/task/{seq}/comments`","내 댓글 수정 `{ index, text }`"],["POST","`/task/{seq}/comments/delete`","내 댓글 삭제 `{ index }`"],["POST","`/task/{seq}/comments/reaction`","댓글 반응 `{ index, kind }`"]]}]},{id:"workspace-task",title:"업무 등록 · 수정",blocks:[{kind:"p",text:"등록(`POST /task`)에 **꼭 필요한 것은 `title` 과 `workspace_seq`** 입니다."},{kind:"table",head:["필드","타입","설명"],rows:[["`title`","string","제목(필수)"],["`workspace_seq`","number","넣을 작업공간 — `/context` 의 `workspaces[].seq`"],["`manager_account_seq`","number","책임자"],["`receiver_account_seqs`","number[]","참조자"],["`note` · `content`","string","한 줄 메모 · 본문(HTML)"],["`start_date` · `due_date`","YYYY-MM-DD","시작 · 마감"],["`priority`","string","`high` · `medium` · `low`"],["`status`","string","상태 키 — 수정에서"],["`completed`","boolean","완료 처리 — 수정에서"],["`group_seq`","number","프로젝트 — `/bootstrap` 의 프로젝트 목록"]]},{kind:"code",label:"흐름 예",code:`1) GET   /context                     → 내 seq, 조직도, 공간 목록
2) POST  /bootstrap  {}               → 진행 중 업무
3) POST  /task  {"title":"견적서 검토","workspace_seq":20,"manager_account_seq":72,"due_date":"2026-09-30"}
4) PATCH /task/700  {"completed":true}
5) POST  /task/700/notify-flush  {}   → 상대에게 수정 알림`},{kind:"list",items:["책임자 · 참조자는 `/context` 의 `workspaces[].members` 에서 고릅니다(그 공간을 볼 수 있는 사람입니다).",'응답은 `{ "ok": true, "data": { "item": { … } } }` 이고, 사람 필드는 `*_account_seq` 와 `*_name` 이 짝으로 옵니다.',"`/context` 는 사용자별로 1분쯤 캐시해도 됩니다. **업무는 캐시하지 말고**, 바꾼 뒤에는 다시 읽습니다."]}]}]},{id:"board",title:"게시판 API",sections:[{id:"board-intro",title:"무엇을 하나",blocks:[{kind:"p",text:"업무함 **게시판(공지사항 등)의 글을 홈페이지에 그대로 보입니다**. 직원은 업무함에서 공지를 쓰고, 홈페이지는 이 API 로 읽어 갑니다. 쓰기를 허용한 키로는 바깥에서 글을 쓰고 고치고 지울 수도 있습니다."},{kind:"list",items:["조직 설정의 **API 키**에서 종류 **게시판** 키를 발급하고 **열 게시판**을 고릅니다(여러 개). **쓰기 허용**을 켜야 쓰기 끝점이 열립니다(기본은 읽기만).","이 키는 **서버에만 두는 비밀 키**입니다. 홈페이지의 서버가 읽어 와 화면에 그립니다.","**게시 중 · 전체 공개 · 원글**만 읽힙니다. 임시 저장 · 부서공개 · 비공개 글과 답글은 나오지 않습니다.","본문은 **HTML** 입니다. 보낼 때 스크립트 · 이벤트 속성 · `javascript:` 주소는 걸러져 저장됩니다. 평문을 보내려면 `content` 대신 `text` 를 씁니다.","본문 그림과 첨부는 **로그인 · 키 없이 열리는 주소**(`url`)로 옵니다. 홈페이지 방문자가 그대로 보고 받습니다. 글을 지우거나 공개 범위를 바꾸면 그 주소는 더는 열리지 않습니다."]}]},{id:"board-endpoints",title:"끝점",blocks:[{kind:"table",head:["메서드","경로","하는 일"],rows:[["GET","`/board/boards`","이 키로 열린 게시판 — `key` · `name`, 쓰기 허용 여부(`write`)"],["GET","`/board/posts`","글 목록(최근 것부터) — `board` · `page` · `limit`(최대 100) · `q`(제목 검색) · `pinned`(`1` 이면 고정 글만)"],["GET","`/board/posts/{id}`","글 하나 — 본문 HTML · 첨부"],["POST","`/board/posts`","글 쓰기 **(쓰기 허용 키)**"],["PATCH","`/board/posts/{id}`","고치기 — 보낸 칸만 **(쓰기 허용 키)**"],["DELETE","`/board/posts/{id}`","지우기 **(쓰기 허용 키)**"],["POST","`/board/posts/{id}/files`","첨부 올리기 — multipart 의 `file`, 한 개 50MB 까지 **(쓰기 허용 키)**"],["DELETE","`/board/posts/{id}/files/{fileId}`","첨부 지우기 **(쓰기 허용 키)**"]]},{kind:"code",label:"홈페이지에 공지 목록 보이기",code:`curl "${r}/board/posts?board=notice&limit=10" \\
  -H "Authorization: Bearer thk_…"

{
  "ok": true,
  "data": {
    "items": [
      {
        "id": 128, "board": "notice", "board_name": "공지사항",
        "title": "추석 연휴 휴무 안내", "excerpt": "9월 15일부터 17일까지 쉽니다…",
        "author_name": "와우그로스", "pinned": true, "file_count": 1,
        "created_at": "2026-10-30 10:12:00", "updated_at": "2026-10-30 10:12:00"
      }
    ],
    "page": 1, "limit": 10, "total": 1
  }
}`},{kind:"code",label:"글 하나",code:`{
  "ok": true,
  "data": {
    "id": 128, "board": "notice", "title": "추석 연휴 휴무 안내",
    "content": "<p>9월 15일부터 17일까지 쉽니다.</p>",
    "files": [
      { "id": "b049119b-…", "name": "휴무안내.pdf", "size": 120334, "mime": "application/pdf",
        "url": "${r}/board/files/246/128/b049119b-…?sig=…" }
    ],
    "...": "목록과 같은 칸"
  }
}`},{kind:"code",label:"글 쓰기(쓰기 허용 키)",code:`curl -X POST ${r}/board/posts \\
  -H "Authorization: Bearer thk_…" -H "Content-Type: application/json" \\
  -d '{ "board": "notice", "title": "새 공지", "content": "<p>내용</p>", "pinned": false }'

{ "ok": true, "data": { "id": 129 } }`},{kind:"list",items:["`board` · `title` · 본문(`content` 나 `text`)은 **꼭** 넣습니다.","작성자는 기본이 **조직 이름**입니다. `author_email` 에 조직 구성원의 이메일을 넣으면 그 사람 이름으로, `author_name` 을 넣으면 그 이름으로 씁니다.","고치기 · 지우기는 이 키에 열린 게시판의 글이면 업무함에서 쓴 글도 됩니다. 지운 글은 업무함 게시판에서도 사라집니다."]},{kind:"note",text:"새 글은 밀어 주지 않습니다. 홈페이지는 **목록을 읽어 와 잠시 담아 두었다가(캐시)** 다시 읽습니다. 몇 분 간격이면 충분합니다."}]}]},{id:"customer",title:"고객 API",sections:[{id:"customer-intro",title:"무엇을 하나",blocks:[{kind:"note",text:T},{kind:"p",text:"조직의 **고객 명부와 상담 내역**을 **서버에서** 읽고 씁니다. 홈페이지 문의 폼으로 들어온 사람을 고객으로 넣거나, 자체 시스템의 고객을 맞춰 두는 데 씁니다."},{kind:"code",label:"인증",code:`curl ${r}/customer/customers \\
  -H "Authorization: Bearer thk_..."`},{kind:"note",text:"**고객 키는 서버에만 둡니다.** 브라우저에서 직접 부르는 것은 막혀 있습니다."}]},{id:"customer-fields",title:"고객 항목",blocks:[{kind:"p",text:"**조직마다 고객에게 적는 칸이 다릅니다**(차트번호 · 학년 · 회원 등급 …). `GET /fields` 로 먼저 읽어 폼을 그립니다."},{kind:"code",label:"GET /fields",code:`{ "items": [
  { "key": "grade", "label": "회원 등급", "type": "select", "options": ["일반", "VIP"], "required": false },
  { "key": "field_12", "label": "가입 경로", "type": "text", "options": [], "required": true }
] }`},{kind:"list",items:["**`key` 는 바뀌지 않습니다**(`label` 은 조직이 바꿀 수 있습니다). 고객의 `extra` 가 이 `key` 로 값을 싣습니다.","`GET /categories` · `GET /consult-categories` 는 고객 분류 · 상담 분류 목록(`[{ id, name }]`)입니다. `id` 를 `category_id` 로 보냅니다."]}]},{id:"customer-customers",title:"고객",blocks:[{kind:"table",head:["끝점","내용"],rows:[["`GET /customers`","목록 — 최근 등록 먼저"],["`GET /customers/:id`","한 명(번호 목록 포함)"],["`POST /customers`","등록 — 만든 고객을 돌려줍니다"],["`PATCH /customers/:id`","수정 — 보낸 키만 바뀝니다"],["`DELETE /customers/:id`","삭제 — 상담 이력이 있으면 409"]]},{kind:"table",head:["목록 쿼리","뜻"],rows:[["`limit`","한 번에 받을 건수(기본 50 · 최대 100)"],["`cursor`","앞 응답의 `next_cursor`"],["`search`","이름의 일부, 또는 전화번호의 일부"],["`phone`","전화번호 정확히 일치 — 하이픈 · 공백 · `+82` 가 섞여도 됩니다"],["`category_id`","그 분류만"],["`include_disabled=true`","끈 고객까지"]]},{kind:"code",label:"POST /customers",code:`curl -X POST ${r}/customer/customers \\
  -H "Authorization: Bearer thk_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "홍길동",
    "phones": ["010-1234-5678", { "phone": "02-123-4567", "label": "회사" }],
    "category_id": 12,
    "email": "hong@example.com",
    "extra": { "grade": "VIP", "field_12": "홈페이지" }
  }'`},{kind:"code",label:"응답",code:`{ "ok": true, "data": {
  "id": "3f1c0b1e-...",              // 이 값으로 다시 부릅니다
  "name": "홍길동",
  "category_id": 12,
  "phone": "010-1234-5678",          // 대표 번호
  "phones": [ { "phone": "010-1234-5678", "label": "", "primary": true }, ... ],
  "email": "hong@example.com",
  "address": "", "address_detail": "", "birth_date": "", "memo": "",
  "marketing_agree": false, "marketing_agree_at": "",
  "extra": { "grade": "VIP", "field_12": "홈페이지" },
  "enabled": true,
  "source": "api",                   // manual · api · member
  "created_at": "2026-10-08 14:20:11"
} }`},{kind:"list",items:["`phones` 의 **첫 번호가 대표 번호**입니다(5개까지). 수정에서 `phones` 를 보내면 **번호 목록 전체가 그 값으로 바뀝니다.**","`extra` 는 보낸 키만 바뀝니다. **`GET /fields` 에 없는 키를 보내면 400** 이고, 필수 항목이 비어도 400 입니다.",'**지우지 않고 감추려면** `PATCH { "enabled": false }` — 목록에서 빠지고 상담 이력은 남습니다.']}]},{id:"customer-consults",title:"상담",blocks:[{kind:"table",head:["끝점","내용"],rows:[["`GET /customers/:id/consults`","그 고객의 상담 이력"],["`GET /consults`","조직의 상담 전체 — `status` · `channel` · `category_id` · `from` · `to` · `limit` · `cursor`"],["`GET /consults/:id`","한 건"],["`POST /consults`","기록"],["`PATCH /consults/:id`","수정 — 보낸 키만. 고객은 옮기지 못합니다"],["`DELETE /consults/:id`","삭제"]]},{kind:"code",label:"POST /consults",code:`curl -X POST ${r}/customer/consults \\
  -H "Authorization: Bearer thk_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "customer_id": "3f1c0b1e-...",
    "channel": "message",            // call_in · call_out · visit · message · etc
    "content": "홈페이지 문의 접수",
    "status": "open",                // open(처리 중) · done(완료)
    "handler_name": "챗봇"
  }'`},{kind:"list",items:["**`customer_id` 와 `content` 또는 `title`** 이 있어야 합니다. `consulted_at` 을 안 보내면 지금입니다.","상담한 사람: `handler_email` 이 그 조직 구성원의 이메일이면 그 사람으로 남고, 아니면 `handler_name` 의 글자만 남습니다."]}]},{id:"customer-recipes",title:"흔한 쓰임",blocks:[{kind:"list",items:['**홈페이지 문의 폼**: `GET /customers?phone=<번호>` 로 있는 고객인지 보고 → 없으면 `POST /customers` → `POST /consults`(`status: "open"`). 업무함 상담 내역에 "처리 중" 으로 뜹니다.',"**자체 시스템과 맞추기**: `GET /customers?limit=100` 을 `next_cursor` 가 `null` 이 될 때까지 넘깁니다."]}]}]},{id:"support",title:"고객센터 API",sections:[{id:"support-intro",title:"무엇을 하나",blocks:[{kind:"p",text:"홈페이지나 자체 서비스에서 받은 **고객 문의를 조직의 작업공간에 업무로 넣고**, 직원이 단 **답변을 읽어 갑니다**. 문의 한 건이 업무 한 건이라 직원은 평소처럼 업무를 가져가고(책임자) · 댓글로 답하고 · 완료하면 됩니다."},{kind:"list",items:["조직 설정의 **API 키**에서 종류 **고객센터** 키를 발급하고 **문의를 받을 작업공간**을 고릅니다. **고객 문의** 템플릿으로 만든 공간을 고르면 문의마다 고객 · 유형 · 연락처 칸이 채워져 목록에서 바로 읽힙니다.","이 키는 **서버에만 두는 비밀 키**입니다. 브라우저 코드에 넣지 말고, 홈페이지의 서버가 대신 부릅니다.","문의의 `id` 는 `790-7b27…` 꼴입니다. **이 값을 그대로 보관**했다가 상세 · 추가 글에 씁니다(번호만으로는 열리지 않습니다).","고객이 쓴 글은 **평문**으로 주고받습니다. HTML 을 보내도 글자 그대로 저장됩니다."]}]},{id:"support-endpoints",title:"끝점",blocks:[{kind:"table",head:["메서드","경로","하는 일"],rows:[["POST","`/support/tickets`","문의 접수"],["GET","`/support/tickets`","문의 목록(최근 것부터) — `email` · `phone` · `ref` · `status` · `page` · `limit`(최대 100)"],["GET","`/support/tickets/{id}`","문의 상세 — 본문과 주고받은 글"],["POST","`/support/tickets/{id}/comments`","고객의 추가 글(끝난 문의면 다시 열립니다)"]]},{kind:"code",label:"문의 접수",code:`curl -X POST ${r}/support/tickets \\
  -H "Authorization: Bearer thk_…" -H "Content-Type: application/json" \\
  -d '{
    "title": "배송 문의",
    "content": "주문한 물건이 아직 안 왔어요.",
    "type": "문의",
    "customer": { "name": "홍길동", "email": "hong@example.com", "phone": "010-1234-5678", "ref": "order-77" }
  }'`},{kind:"list",items:["`customer.name` 과 `content` 는 **꼭** 넣습니다. `title` 을 비우면 내용의 첫 줄이 제목이 됩니다.","`type` 은 `문의` · `건의사항` · `오류제보` · `상담신청` 가운데 하나입니다(그 밖의 값은 `문의`).","`customer.ref` 는 **내 서비스의 식별자**(회원 번호 · 주문 번호)를 넣는 자리입니다. 목록을 `ref` 로 걸러 그 고객의 문의만 읽을 수 있습니다."]},{kind:"code",label:"상세 응답",code:`{
  "ok": true,
  "data": {
    "id": "790-7b274369f02e663da0db426b",
    "type": "문의",
    "title": "배송 문의",
    "status": "answered",
    "customer": { "name": "홍길동", "email": "hong@example.com", "phone": "010-1234-5678", "ref": "order-77" },
    "created_at": "2026-10-13 00:45",
    "answered_at": "2026-10-13 01:00",
    "closed_at": "",
    "comment_count": 2,
    "content": "주문한 물건이 아직 안 왔어요.",
    "comments": [
      { "from": "customer", "author": "홍길동", "content": "아직도 안 왔어요", "created_at": "2026-10-13 00:45" },
      { "from": "staff", "author": "김담당", "content": "오늘 출고됩니다.", "created_at": "2026-10-13 01:00" }
    ]
  }
}`},{kind:"table",head:["status","뜻"],rows:[["`open`","접수됨 — 아직 맡은 사람이 없습니다"],["`in_progress`","직원이 맡았습니다(책임자 지정 · 진행 상태 변경)"],["`answered`","직원의 답변이 있습니다 — `comments` 에서 `from` 이 `staff` 인 글"],["`closed`","완료됐습니다"]]},{kind:"note",text:"새 답변은 밀어 주지 않습니다. **목록이나 상세를 다시 읽어** `answered_at` 이 바뀌었는지 봅니다. 이 API 로 넣은 문의만 읽히고, 직원이 업무함에서 직접 만든 고객센터 업무는 나오지 않습니다."}]}]},{id:"booking",title:"예약 API",tag:f,sections:[{id:"booking-intro",title:"무엇을 하나",blocks:[{kind:"note",text:"이 API 는 예약 서비스와 함께 씁니다. 예약 서비스는 **베타 테스트 중이라 정식 출시 전까지 무료**이며, 조직의 서비스 설정에서 예약을 켠 뒤 쓸 수 있습니다."},{kind:"p",text:"조직의 **빈 시간을 보여 주고 예약을 받습니다.** 두 갈래입니다 — 쓰는 키가 다릅니다."},{kind:"table",head:["갈래","키","누가 부르나","주소"],rows:[["홈페이지 예약","회원(홈페이지용) 키 — 브라우저에 실어도 됩니다","손님의 브라우저","`/member/booking/*`"],["서버 연동","예약 키 — **서버에만 둡니다**","자체 예약 화면의 서버 · 챗봇","`/booking/*`"]]},{kind:"list",items:['**홈페이지 예약은 조직이 켜야 열립니다** — 기업 설정 › 예약 설정의 "홈페이지에서 예약을 받습니다". 꺼져 있으면 `403 booking_closed` 입니다.',"홈페이지 예약은 **운영 시간 · 쉬는 날 · 예약 마감 · 받는 기간** 안에서만 받습니다. 서버 연동은 직원이 넣는 것과 같아 시간 밖에도 넣을 수 있습니다(자리 겹침만 `409`).","식별자는 모두 `id`(uuid)입니다. 예약 대상 · 상품도 `id` 로 가리킵니다.","그대로 열어 볼 수 있는 예제: 서버 코드 없는 HTML 한 장(`booking-sample.html`) — 대상 · 상품 · 날짜 · 시간 고르기, 회원 · 비회원 예약, 입금 안내, 내 예약 · 취소가 들어 있습니다."]}]},{id:"booking-options",title:"예약 화면 그리기",blocks:[{kind:"p",text:"`GET /member/booking/options` 한 번으로 화면에 필요한 것을 받습니다 — **예약 대상 · 상품 · 받는 규칙**. 로그인 없이 부릅니다."},{kind:"code",label:"GET /member/booking/options",code:`{
  "resources": [
    { "id": "…", "name": "김디자이너", "group": "디자이너", "unit": "time", "capacity": 1, "price": 0, "price_unit": "booking", "min_units": 0, "options": [] },
    { "id": "…", "name": "101호", "group": "본관", "unit": "day", "capacity": 1, "price": 80000, "price_unit": "day", "min_units": 0, "options": ["에어컨"] }
  ],
  "products": [ { "id": "…", "name": "커트", "category": "헤어", "price": 20000, "duration_minutes": 60, "description": "" } ],
  "rules": {
    "slot_minutes": 30, "default_minutes": 60, "min_notice_minutes": 60, "max_days_ahead": 60,
    "auto_confirm": true, "cancel_until_minutes": 120, "allow_guest": true,
    "day_start_time": "15:00", "day_end_time": "11:00",
    "open_hours": [ { "day": 0, "open": "10:00", "close": "19:00", "closed": true }, … ],
    "closed_dates": [ { "date": "2026-12-25", "memo": "성탄절 휴무" } ], "close_on_holidays": true,
    "deposit_amount": 10000, "deposit_due_hours": 24,
    "bank": { "name": "국민은행", "account_no": "123-45-67890", "holder": "홍길동" }, "contact_phone": "02-000-0000"
  }
}`},{kind:"list",items:["**`unit` 이 예약 방식을 가릅니다** — `time` 은 시간을 골라 예약(미용실 · 진료실 · 회의실), `day` 는 날짜를 골라 예약(숙박 · 대여)합니다.","`open_hours` 는 요일(0=일 … 6=토)별 운영 시간입니다. `close` 가 `open` 보다 이르면 다음 날 그 시각까지입니다.","`day_end_time` 이 `day_start_time` 보다 이르면 날짜 단위 예약은 **다음 날** 끝납니다(숙박의 입실 · 퇴실).","`deposit_amount` 가 0 보다 크면 예약이 **입금 대기**로 시작합니다 — 계좌(`bank`)를 안내하세요. 기한까지 입금 확인이 없으면 자동으로 취소됩니다."]}]},{id:"booking-slots",title:"빈 시간 · 빈 날",blocks:[{kind:"p",text:"**다른 사람의 예약 내용은 주지 않습니다** — 비었는지만 줍니다. 로그인 없이 부릅니다."},{kind:"code",label:"GET /member/booking/slots?date=2026-10-13&resource_id=…&minutes=60",code:`{ "date": "2026-10-13", "closed": false, "reason": "", "open": "10:00", "close": "19:00",
  "slot_minutes": 30, "minutes": 60,
  "resources": [ { "resource_id": "…", "name": "김디자이너", "slots": ["10:00", "10:30", "13:00"] } ] }`},{kind:"list",items:["`slots` 는 **빈 시작 시각**입니다. `minutes`(예약 길이)를 안 주면 조직의 기본 길이로 봅니다 — 상품을 골랐으면 그 `duration_minutes` 의 합을 주세요.","`resource_id` 를 빼면 시간 단위 대상 전부를 줍니다. 대상을 쓰지 않는 조직은 `resource_id` 가 `null` 인 한 줄입니다.","쉬는 날 · 받는 기간 밖이면 `closed: true` 와 까닭(`reason`)이 옵니다."]},{kind:"code",label:"GET /member/booking/days?from=2026-10-12&to=2026-10-18&resource_id=…",code:`{ "from": "2026-10-12", "to": "2026-10-18", "start_time": "15:00", "end_time": "11:00", "overnight": true,
  "closed": [ { "date": "2026-10-15", "reason": "임시 휴무" } ],
  "resources": [ { "resource_id": "…", "name": "101호", "dates": ["2026-10-13", "2026-10-14", "2026-10-16"] } ] }`},{kind:"list",items:["`dates` 는 그날 **시작할 수 있는 날**입니다(날짜 단위 대상). 한 번에 62일까지 물어볼 수 있습니다."]}]},{id:"booking-member",title:"예약 넣기(회원)",blocks:[{kind:"p",text:"로그인한 회원(`Authorization: Bearer thm_…`)이 넣습니다. 회원 가입 · 로그인은 회원 API 그대로입니다."},{kind:"code",label:"POST /member/booking",code:`// 시간 단위 — 끝 시각은 서버가 정합니다(고른 상품의 시간 합, 없으면 조직의 기본 길이)
{ "start_at": "2026-10-13 10:00", "resource_id": "…", "items": [ { "product_id": "…", "qty": 1 } ], "party_size": 2, "request": "창가 자리 부탁" }

// 날짜 단위 — date 와 units(박 · 일 수)
{ "resource_id": "…", "date": "2026-10-14", "units": 2 }`},{kind:"list",items:['시간 단위에서 **`resource_id` 를 빼면 그 시간에 빈 대상을 서버가 골라 줍니다**("상관없음").',"응답의 `status` — `confirmed`(확정) · `awaiting_payment`(입금 대기) · `requested`(직원 확정을 기다림 — 조직이 바로 확정을 꺼 둔 경우).","요금(`price`)은 서버가 셈합니다(대상의 값 + 상품 값). 손님이 정할 수 없습니다.","**그 사이 다른 사람이 먼저 잡았으면 `409 conflict`** 입니다 — 빈 시간을 다시 읽어 고르게 하세요.","`GET /member/booking/mine` 은 내 예약(`can_cancel` 포함), `DELETE /member/booking/:id` 는 취소입니다. 취소는 조직이 정한 기한(`cancel_until_minutes`) 안에서만 됩니다 — 0 이면 홈페이지에서 취소할 수 없습니다."]}]},{id:"booking-guest",title:"예약 넣기(비회원)",blocks:[{kind:"p",text:"가입 없이 **이름 · 휴대폰 번호**로 예약합니다. 번호는 문자 인증번호로 확인합니다. 조직이 비회원 예약을 꺼 두면(`allow_guest: false`) `403` 입니다."},{kind:"code",code:`// 1) 인증번호 받기 — 번호마다 · IP 마다 횟수가 제한됩니다(429)
await api("POST", "/booking/guest/code", { phone: "010-1234-5678" });

// 2) 예약 — 회원 예약의 본문에 name · phone · code 를 더합니다
const booking = await api("POST", "/booking/guest", {
  name: "홍길동", phone: "010-1234-5678", code: "123456",
  start_at: "2026-10-13 10:00", items: [ { product_id: "…" } ],
});

// 3) 나중에 보기 · 취소 — 예약 id 와 번호가 함께 맞아야 합니다
await api("GET", \`/booking/guest/\${booking.id}?phone=010-1234-5678\`);
await api("POST", \`/booking/guest/\${booking.id}/cancel\`, { phone: "010-1234-5678" });`},{kind:"list",items:["비회원도 조직의 **고객 명부에 한 줄**이 생깁니다. 같은 번호의 고객이 있으면 그 고객에 붙습니다.","**예약 `id` 를 손님 기기에 적어 두세요**(예제는 `localStorage`) — 비회원은 그 `id` 와 번호로만 제 예약을 다시 찾습니다.",'인증번호가 틀리면 `400`("인증번호가 맞지 않습니다"), 받을 수 없는 시간이면 인증번호를 쓰기 전에 `400` · `409` 로 먼저 알립니다.']}]},{id:"booking-server",title:"서버 연동(예약 키)",blocks:[{kind:"code",label:"인증",code:`curl ${r}/booking/bookings?from=2026-10-12 \\
  -H "Authorization: Bearer thk_..."`},{kind:"table",head:["끝점","내용"],rows:[["`GET /booking/options` · `/slots` · `/days`","홈페이지용과 같은 모양"],["`GET /booking/bookings`","예약 목록 — `from` · `to` · `status` · `search`(고객명 · 전화번호) · `page` · `limit`(최대 100) · `order=desc`"],["`POST /booking/bookings`","예약 넣기 — `customer_name`(+ `customer_phone`) · `start_at`(+ `end_at`) 또는 `date`(+ `units`) · `resource_id` · `items` · `price` · `deposit_amount` · `memo`"],["`GET /booking/bookings/:id`","예약 상세"],["`PATCH /booking/bookings/:id`","보낸 키만 바뀝니다 — 시간 · 대상 · 인원 · 요금 · 메모 · 상태"],["`POST /booking/bookings/:id/cancel`","취소(`reason`) — 지우지 않고 취소로 남습니다"]]},{kind:"list",items:["같은 번호의 고객이 있으면 그 고객에 붙고, 없으면 고객 명부에 새로 생깁니다.","`price` 를 안 주면 서버가 셈합니다(대상의 값 + 상품 값).",'입금 금액이 있는 예약의 **확정은 업무함의 [입금 확인] 으로만** 됩니다 — `status: "confirmed"` 로 바꾸려 하면 `400` 입니다.',"응답에는 손님용에 없는 `memo` · `source`(manual · api · member · guest)가 더 실립니다."]}]},{id:"booking-errors",title:"오류 code",blocks:[{kind:"table",head:["HTTP","code","뜻"],rows:[["400","`invalid_request`","꼴이 틀림 · 쉬는 날 · 받는 기간 밖 · 인증번호 틀림"],["401","`unauthorized` · `login_required`","키가 없거나 틀림 · 로그인 필요"],["403","`booking_closed` · `feature_disabled` · `forbidden` · `origin_not_allowed`","홈페이지 예약을 꺼 둠 · 예약 기능을 안 씀 · 키 종류가 다름 · 적어 둔 홈페이지 주소가 아님"],["404","`not_found`","없는 예약(남의 예약도 이렇게 답합니다)"],["409","`conflict`","그 시간이 이미 찼음 · 취소 기한이 지남"],["429","`rate_limited`","요청이 너무 잦음(`Retry-After` 초 뒤에 다시)"]]}]}]},{id:"member",title:"회원 API",sections:[{id:"member-intro",title:"무엇을 하나",blocks:[{kind:"note",text:T},{kind:"p",text:"홈페이지의 **회원 가입 · 로그인 · 내 정보**를 업무함에 맡깁니다. 브라우저의 `fetch` 로 바로 부르므로 **서버를 따로 만들지 않아도 됩니다.**"},{kind:"p",text:"**가입한 회원은 업무함의 고객 목록에 나타납니다.** 조직은 거기서 상담을 기록하고 담당 직원을 정합니다."},{kind:"list",items:["회원 아이디는 키를 발급할 때 정합니다 — **이메일 주소**이거나, **따로 정하는 아이디**입니다. 아이디는 조직 안에서 하나뿐입니다.",'가입 폼에 받을 칸이 더 있으면, 업무함 고객 설정에서 그 항목의 **"홈페이지 회원이 직접 입력·수정"** 을 켭니다.',"서버 코드 없이 이 API 만으로 만든 예제 페이지가 있습니다. 키를 발급한 조직에 함께 드립니다."]}]},{id:"member-call",title:"부르는 법",blocks:[{kind:"p",text:`주소는 \`${r}/member\` 입니다. **회원 키는 \`X-API-Key\` 헤더**에, **로그인한 회원의 토큰은 \`Authorization\` 헤더**에 싣습니다.`},{kind:"code",label:"JavaScript",code:`const API = "${r}/member";

async function api(method, path, body, token) {
  const res = await fetch(API + path, {
    method,
    headers: {
      "X-API-Key": "thk_...",                                 // 회원(홈페이지용) 키
      ...(token ? { Authorization: "Bearer " + token } : {}),  // 로그인한 회원의 토큰
      ...(body ? { "Content-Type": "application/json" } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const json = await res.json();
  if (!json.ok) throw json.error;   // { code, message }
  return json.data;
}`},{kind:"list",items:["**키에 적어 둔 홈페이지 주소에서 온 요청만 받습니다.** 다른 주소 · `file://` 로 연 페이지 · 서버나 curl 에서는 403 `origin_not_allowed` 입니다.","개발 중에는 키의 홈페이지 주소에 `http://localhost:3000` 처럼 개발 주소도 함께 적습니다.","로그인하면 받는 토큰(`thm_…`)은 **30일 동안** 씁니다. 어디에 둘지는 홈페이지가 정합니다."]}]},{id:"member-endpoints",title:"끝점",blocks:[{kind:"table",head:["끝점","본문","답"],rows:[["`GET /config`","—","`org_name` · `login_id_kind` · `require_email_verify` · `fields`"],["`POST /signup`","`login_id` · `password` · `name` + 선택 값","`verify_required` · `token` · `me`"],["`POST /verify-email`","`login_id` · `code`","`token` · `expires_at` · `me`"],["`POST /resend-code`","`login_id`","`sent`"],["`POST /login`","`login_id` · `password`","`token` · `expires_at` · `me`"],["`POST /password/forgot`","`login_id`","`sent` (아이디가 없어도 같은 답)"],["`POST /password/reset`","`login_id` · `code` · `new_password`","`changed`"],["`POST /logout` 🔒","—","`logged_out`"],["`GET /me` 🔒","—","내 정보"],["`PATCH /me` 🔒","고칠 키만","내 정보"],["`POST /password` 🔒","`current_password` · `new_password`","`changed`"],["`DELETE /me` 🔒","`password`","`withdrawn`"]]},{kind:"p",text:"🔒 은 로그인한 회원의 토큰이 필요한 끝점입니다."}]},{id:"member-signup",title:"가입",blocks:[{kind:"p",text:"먼저 `GET /config` 로 폼을 그리는 데 필요한 것을 읽습니다. `fields` 는 조직이 회원에게 받기로 한 칸입니다."},{kind:"code",label:"GET /config",code:`{
  "org_name": "길동치과",
  "login_id_kind": "email",          // email 또는 username
  "require_email_verify": true,
  "fields": [
    { "key": "nickname", "label": "닉네임", "type": "text", "options": [], "required": true },
    { "key": "interest", "label": "관심 분야", "type": "multiselect", "options": ["교정", "미백"], "required": false }
  ]
}`},{kind:"code",label:"POST /signup",code:`const result = await api("POST", "/signup", {
  login_id: "hong@example.com",
  password: "********",              // 8자 이상, 글자와 숫자를 함께
  name: "홍길동",
  phones: ["010-1234-5678"],         // 선택
  marketing_agree: false,            // 선택
  extra: { nickname: "길동", interest: ["미백"] },   // fields 의 key 로
});

if (result.verify_required) {
  // 메일로 인증번호를 보냈습니다 → 인증번호 입력 화면으로
} else {
  // result.token 으로 바로 로그인된 것입니다
}`},{kind:"list",items:["아이디: 이메일이면 이메일 주소, 아니면 영문 소문자 · 숫자 · `._-` 4~30자. 대문자로 적어도 소문자로 봅니다.","`type` 은 `text` · `textarea` · `number` · `date` · `select` · `multiselect`(배열) · `bool` · `phone` 입니다.","따로 정하는 아이디를 쓰는 키는 `email` 을 함께 받아 두기를 권합니다. **이메일이 없으면 비밀번호 찾기를 할 수 없습니다.**","이미 쓰고 있는 아이디면 409 `conflict` 입니다."]}]},{id:"member-verify",title:"이메일 인증",blocks:[{kind:"p",text:'키에 "가입할 때 이메일 인증" 이 켜져 있으면, 가입한 주소로 6자리 인증번호가 갑니다. 번호는 **10분 동안** 쓸 수 있고 **5번 틀리면 버려집니다.**'},{kind:"code",code:`// 인증번호 확인 — 맞으면 로그인됩니다
const { token, me } = await api("POST", "/verify-email", { login_id: "hong@example.com", code: "123456" });

// 다시 받기
await api("POST", "/resend-code", { login_id: "hong@example.com" });`},{kind:"p",text:"인증을 마치지 않은 회원이 로그인하면 403 `email_unverified` 가 오고 인증번호가 다시 발송됩니다. **인증 화면으로 보내세요.**"}]},{id:"member-login",title:"로그인 · 로그아웃",blocks:[{kind:"code",code:`// 로그인
const { token, expires_at, me } = await api("POST", "/login", {
  login_id: "hong@example.com",
  password: "********",
});
localStorage.setItem("member_token", token);

// 로그아웃
await api("POST", "/logout", null, token);
localStorage.removeItem("member_token");`},{kind:"list",items:["없는 아이디와 틀린 비밀번호는 같은 답(401 `invalid_credentials`)입니다.","비밀번호를 **5번 잇달아 틀리면 5분 동안 잠깁니다**(429 `locked`).","토큰이 끝났거나 틀리면 401 `login_required` 입니다. 다시 로그인시키세요."]}]},{id:"member-me",title:"내 정보",blocks:[{kind:"code",label:"GET /me",code:`{
  "id": "3f1c0b1e-...",
  "login_id": "hong@example.com",
  "email": "hong@example.com",
  "email_verified": true,
  "name": "홍길동",
  "phones": ["010-1234-5678"],
  "address": "", "address_detail": "", "birth_date": "",
  "marketing_agree": false,
  "extra": { "nickname": "길동" },     // config 의 fields 에 있는 칸만
  "joined_at": "2026-10-08 14:46:19"
}`},{kind:"code",label:"PATCH /me",code:`// 고칠 값만 보냅니다
const me = await api("PATCH", "/me", {
  name: "홍길순",
  phones: ["010-9999-8888"],     // 보낸 목록 전체로 바뀝니다
  extra: { nickname: "길순" },
}, token);`},{kind:"p",text:"회원이 고칠 수 있는 것은 **이름 · 전화 · 주소 · 생년월일 · 수신 동의**와, **조직이 허락한 칸**(`fields`)입니다. 그 밖의 키를 보내면 400 입니다."}]},{id:"member-password",title:"비밀번호 · 탈퇴",blocks:[{kind:"code",code:`// 비밀번호 바꾸기 — 다른 기기의 로그인은 끊깁니다
await api("POST", "/password", { current_password: "********", new_password: "########" }, token);

// 비밀번호 찾기 — 메일로 인증번호를 보냅니다(아이디가 없어도 같은 답입니다)
await api("POST", "/password/forgot", { login_id: "hong@example.com" });
await api("POST", "/password/reset", { login_id: "hong@example.com", code: "123456", new_password: "########" });

// 탈퇴
await api("DELETE", "/me", { password: "********" }, token);`},{kind:"p",text:"탈퇴하면 **로그인 정보가 지워집니다.** 조직의 **고객 목록에는 남습니다**(상담 기록이 있을 수 있습니다)."}]},{id:"member-errors",title:"오류 code",blocks:[{kind:"table",head:["상태","code","뜻 · 할 일"],rows:[["400","`invalid_request`","값이 빠졌거나 틀렸습니다. `message` 를 그대로 보여도 됩니다"],["400","`invalid_code`","인증번호가 틀렸거나 시간이 지났습니다. 다시 받습니다"],["400 · 401","`invalid_credentials`","아이디 또는 비밀번호가 맞지 않습니다"],["401","`login_required`","토큰이 없거나 끝났습니다. 다시 로그인시킵니다"],["403","`email_unverified`","이메일 인증 전입니다. 인증 화면으로 보냅니다"],["403","`origin_not_allowed`","키에 적어 둔 홈페이지 주소가 아닙니다"],["409","`conflict`","이미 쓰고 있는 아이디입니다"],["429","`rate_limited` · `locked`","요청이 너무 잦습니다 · 비밀번호를 여러 번 틀려 잠겼습니다"]]}]}]},{id:"accounting",title:"회계 API",tag:f,sections:[{id:"accounting-intro",title:"무엇을 하나",blocks:[{kind:"p",text:"쇼핑몰 · 거래 플랫폼 · 자체 서비스에서 생긴 **매출과 지출을 조직의 회계 장부에 넣습니다.** 들어온 줄은 업무함 회계의 장부 · 손익 · 통장 반영에 다른 줄과 똑같이 섭니다. 회계 담당은 장부에서 계정과목을 붙이고 통장에 연결하고 세무사 자료로 내보냅니다."},{kind:"list",items:["조직의 **서비스 설정에서 회계를 켜고**, 조직 설정의 **API 키**에서 종류 **회계 연동** 키를 발급합니다. 회계가 꺼진 조직은 키가 있어도 `feature_disabled` 입니다.","이 키는 **서버에만 두는 비밀 키**입니다. 결제 확인 · 환불 같은 일이 생길 때 내 서비스의 서버가 부릅니다.","줄마다 **`external_id`**(주문 번호처럼 내 서비스에서 유일한 값)를 붙입니다. **같은 `external_id` 로 다시 보내면 그 줄을 고칩니다** — 두 번 보내도 두 줄이 생기지 않습니다.","**보낸 쪽이 정본**입니다. 이 API 로 넣은 줄의 금액 · 일시 · 방향 · 거래처는 장부 화면에서 고칠 수 없고, 회계 담당은 분류 · 메모 · 통장만 정합니다. 바뀐 금액은 다시 보내고, 환불 · 취소는 `cancel` 로 알립니다.","이 API 로 넣은 줄만 읽힙니다. 장부의 다른 줄(직접 입력 · 카드 · 급여)은 이 키로 보이지 않습니다."]},{kind:"note",text:"회계는 **베타 테스트 중**입니다. 서비스 설정에서 회계를 켠 조직만 쓸 수 있고, 정식 출시 전까지 무료입니다."}]},{id:"accounting-endpoints",title:"끝점",blocks:[{kind:"table",head:["메서드","경로","하는 일"],rows:[["POST","`/accounting/transactions`","넣기 또는 고치기 — `external_id` 가 없으면 만들고(201) 있으면 고칩니다(200)"],["POST","`/accounting/transactions/batch`","묶음 넣기 · 고치기 — `items` 최대 100건, 줄마다 따로 판정"],["GET","`/accounting/transactions`","목록(거래 일시 최근 것부터) — `from` · `to` · `direction` · `status` · `unclassified` · `search` · `include_canceled` · `page` · `limit`(최대 100). 첫 쪽에 합계"],["GET","`/accounting/transactions/{external_id}`","한 줄"],["PATCH","`/accounting/transactions/{external_id}`","담긴 칸만 고치기"],["POST","`/accounting/transactions/{external_id}/cancel`","취소 — 환불 · 주문 취소. 줄은 남고 `status` 가 `canceled` 가 됩니다"],["DELETE","`/accounting/transactions/{external_id}`","지우기 — 잘못 보낸 줄 · 시험 데이터. 실제 거래는 `cancel` 을 씁니다"],["GET","`/accounting/tran-items`","거래항목 찾기 — `search` · `category`(최대 50). 분류를 붙여 보낼 때 이름을 확인합니다"]]},{kind:"code",label:"매출 넣기(결제가 확인됐을 때)",code:`curl -X POST ${r}/accounting/transactions \\
  -H "Authorization: Bearer thk_…" -H "Content-Type: application/json" \\
  -d '{
    "external_id": "AR2610181030001",
    "direction": "revenue",
    "payment_time": "2026-10-18 10:30:00",
    "amount": 353000,
    "fee_amount": 3000,
    "payment_method": "card",
    "partner_name": "홍길동",
    "summary": "작품 판매 — 봄의 정원(김작가)",
    "tran_item": "상품매출"
  }'`},{kind:"table",head:["칸","뜻"],rows:[["`external_id`","**꼭** 넣습니다. 내 서비스의 주문 번호 · 거래 번호(100자까지)"],["`direction`","`revenue`(매출 · 수입) 또는 `expense`(지출). 비우면 `revenue`"],["`payment_time`","거래 일시 `YYYY-MM-DD HH:mm:ss`(날짜만 보내도 됩니다). 손익은 이 날짜 기준입니다. 비우면 지금"],["`amount`","원 단위 정수, 부가세 포함 합계. **음수를 보내지 않습니다** — 환불은 `cancel`, 부분 환불은 금액을 고쳐 다시 보냅니다"],["`vat_amount`","그중 부가세(모르면 비웁니다)"],["`fee_amount`","수수료(PG · 카드 수수료). 통장에는 수수료를 뗀 금액이 반영됩니다"],["`payment_method`","`cash` · `transfer` · `card` · `other`. 비우면 `transfer`"],["`status`","`finish`(돈이 오감, 기본) · `pending`(예정 · 미수 — 정산 전) · `canceled`"],["`settled_date`","돈이 실제로 들어온 날 `YYYY-MM-DD`(정산일). `finish` 인데 비우면 거래일"],["`partner_name`","거래처 · 구매자 이름(100자)"],["`summary`","적요(200자) — 장부 목록에 보이는 한 줄. 상품명 · 작가 같은 것을 넣습니다"],["`memo`","메모(1,000자)"],["`tran_item` · `ac_code`","거래항목 이름이나 계정과목 코드. 보내면 그대로 분류되고, 비우면 조직이 같은 적요를 분류한 적이 있을 때 그 분류를 따르고 아니면 미분류로 들어갑니다. 회계 담당이 장부에서 고친 분류는 다시 보내도 덮지 않습니다"]]},{kind:"code",label:"응답",code:`{
  "ok": true,
  "data": {
    "external_id": "AR2610181030001",
    "seq": 1203,
    "direction": "revenue",
    "status": "finish",
    "payment_time": "2026-10-18 10:30:00",
    "settled_date": "2026-10-18",
    "amount": 353000,
    "vat_amount": 0,
    "fee_amount": 3000,
    "net_amount": 350000,
    "payment_method": "card",
    "partner_name": "홍길동",
    "summary": "작품 판매 — 봄의 정원(김작가)",
    "memo": "",
    "classification": { "tran_item": "상품매출", "tran_category": "매출", "ac_code": 40100, "ac_name": "상품매출", "by": "source" },
    "bank_applied": false,
    "created": true
  }
}`},{kind:"code",label:"환불 · 주문 취소",code:`curl -X POST ${r}/accounting/transactions/AR2610181030001/cancel \\
  -H "Authorization: Bearer thk_…" -H "Content-Type: application/json" \\
  -d '{ "memo": "구매자 요청 환불" }'`},{kind:"code",label:"지난 주문 한꺼번에 옮기기",code:`const res = await fetch("${r}/accounting/transactions/batch", {
  method: "POST",
  headers: { Authorization: "Bearer thk_…", "Content-Type": "application/json" },
  body: JSON.stringify({ items: orders.map((o) => ({
    external_id: o.order_no,
    payment_time: o.paid_time,
    amount: o.total,
    fee_amount: o.fee,
    payment_method: o.pay_method === "card" ? "card" : "transfer",
    partner_name: o.buyer_name,
    summary: \`작품 판매 — \${o.artwork_title}(\${o.artist_name})\`,
    tran_item: "상품매출",
  })) }),
});
const { data } = await res.json();   // { created, updated, failed, results: [{ external_id, ok, created, seq } | { external_id, ok: false, error }] }`},{kind:"list",items:["**무엇을 매출로 적을지는 내 서비스가 정합니다.** 직접 파는 상품은 판매 금액 전체를, 거래를 중개하면 수수료 수입만 `revenue` 로 보내고 작가에게 보내는 정산금은 `expense` 로 따로 보내는 식입니다.","**언제 보내나** — 결제가 확인된 시점(`finish`)이 보통입니다. 정산 전 매출을 미리 잡고 싶으면 `pending` 으로 넣고 정산되면 `status: finish` 와 `settled_date` 를 다시 보냅니다.","**같은 주문을 두 번 보내도 안전**합니다. 결제 확인 · 금액 변경 · 환불이 일어날 때마다 그 주문의 지금 상태를 보내면 됩니다.","통장 반영은 회계 담당이 장부에서 합니다(어느 통장으로 들어왔는지는 조직이 압니다). 연결되면 응답의 `bank_applied` 가 `true` 가 됩니다."]},{kind:"table",head:["오류 code","뜻"],rows:[["`invalid_request`","칸이 빠졌거나 값이 틀렸습니다 — `message` 에 무엇이 틀렸는지 적혀 있습니다"],["`feature_disabled`","조직이 회계 기능을 켜지 않았습니다"],["`not_found`","그 `external_id` 로 넣은 줄이 없습니다"],["`conflict`","카드 대금으로 이미 빠져나간 줄은 지울 수 없습니다(`cancel` 을 쓰세요)"]]}]}]}],p=56,G=264,y="@media (min-width: 960px)",C="(min-width: 1440px)",P=720,D='ui-monospace, SFMono-Regular, Menlo, Consolas, "D2Coding", monospace';function w(o,i){return o.split("`").map((s,d)=>d%2===1?e.jsx(t,{component:"code",sx:{fontFamily:D,fontSize:"max(0.875rem, 0.9em)",fontWeight:400,bgcolor:n[100],color:n[800],borderRadius:1,px:.75,py:.25,wordBreak:"break-word"},children:s},`${i}-${d}`):s)}function _(o){return o.split("**").map((i,s)=>s%2===1?e.jsx(t,{component:"strong",sx:{fontWeight:700,color:n[900]},children:w(i,String(s))},s):e.jsx("span",{children:w(i,String(s))},s))}function S({block:o}){switch(o.kind){case"p":return e.jsx(t,{component:"p",sx:{m:0,lineHeight:1.75},children:_(o.text)});case"note":return e.jsx(t,{sx:{borderLeft:`4px solid ${k[600]}`,bgcolor:"#eff6ff",borderRadius:1,px:2,py:1.5,lineHeight:1.7},children:_(o.text)});case"list":return e.jsx(t,{component:"ul",sx:{m:0,pl:2.75,listStyleType:"disc",display:"flex",flexDirection:"column",gap:1,lineHeight:1.7},children:o.items.map((i,s)=>e.jsx("li",{children:_(i)},s))});case"code":return e.jsx(H,{code:o.code,label:o.label});case"table":return e.jsx(t,{sx:{overflowX:"auto",border:`1px solid ${n[200]}`,borderRadius:2},children:e.jsxs(t,{component:"table",sx:{width:"100%",borderCollapse:"collapse",fontSize:"0.9375rem",lineHeight:1.6},children:[e.jsx("thead",{children:e.jsx("tr",{children:o.head.map(i=>e.jsx(t,{component:"th",sx:{textAlign:"left",fontWeight:600,bgcolor:n[50],color:n[700],px:1.75,py:1.25,whiteSpace:"nowrap",borderBottom:`1px solid ${n[200]}`},children:i},i))})}),e.jsx("tbody",{children:o.rows.map((i,s)=>e.jsx("tr",{children:i.map((d,c)=>e.jsx(t,{component:"td",sx:{px:1.75,py:1.25,verticalAlign:"top",borderTop:s===0?0:`1px solid ${n[200]}`,whiteSpace:c===0?"nowrap":"normal",minWidth:c===i.length-1?200:void 0},children:_(d)},c))},s))})]})})}}function $(o){const[i,s]=b.useState(o[0]??"");return b.useEffect(()=>{const d=()=>{let c=o[0]??"";for(const a of o){const l=document.getElementById(a)?.getBoundingClientRect().top;l!==void 0&&l<=p+24&&(c=a)}s(c)};return d(),window.addEventListener("scroll",d,{passive:!0}),()=>window.removeEventListener("scroll",d)},[]),i}const z=g.flatMap(o=>o.sections.map(i=>i.id));function W(){const o=$(z),[i,s]=b.useState(!1),d=j(C);b.useEffect(()=>{document.title="API 매뉴얼 - 업무함";const a=decodeURIComponent(window.location.hash.slice(1));a&&document.getElementById(a)?.scrollIntoView()},[]);const c=e.jsx(t,{component:"nav","aria-label":"목차",sx:{display:"flex",flexDirection:"column",gap:2,py:2.5,px:2},children:g.map(a=>e.jsxs(t,{children:[e.jsxs(t,{sx:{display:"flex",alignItems:"center",gap:1,px:1.5,mb:.5,fontSize:"0.875rem",fontWeight:700,color:n[900]},children:[a.title,a.tag?e.jsx(t,{component:"span",sx:{fontSize:"0.875rem",fontWeight:600,color:k[600],bgcolor:"#eff6ff",borderRadius:999,px:1,lineHeight:1.6},children:a.tag}):null]}),e.jsx(t,{component:"ul",sx:{listStyle:"none",m:0,p:0,ml:1.5,pl:1,borderLeft:`1px solid ${n[200]}`},children:a.sections.map(l=>e.jsx("li",{children:e.jsx(t,{component:"a",href:`#${l.id}`,onClick:()=>s(!1),sx:{display:"block",px:1.5,py:.625,borderRadius:1.5,fontSize:"0.9375rem",textDecoration:"none",color:o===l.id?k[600]:n[600],fontWeight:o===l.id?600:400,bgcolor:o===l.id?"#eff6ff":"transparent","&:hover":{bgcolor:o===l.id?"#eff6ff":n[100]}},children:l.title})},l.id))})]},a.id))});return e.jsxs(t,{sx:{minHeight:"100vh",bgcolor:"#fff",color:n[800],fontSize:"1rem"},children:[e.jsxs(t,{component:"header",sx:{position:"sticky",top:0,zIndex:20,height:p,display:"flex",alignItems:"center",gap:1.5,px:2,bgcolor:"#fff",borderBottom:`1px solid ${n[200]}`},children:[e.jsx(t,{component:"button",type:"button","aria-label":i?"목차 닫기":"목차 열기","aria-expanded":i,onClick:()=>s(a=>!a),sx:{display:"inline-flex",border:0,bgcolor:"transparent",p:1,ml:-1,cursor:"pointer",color:n[700],[y]:{display:"none"}},children:i?e.jsx(I,{}):e.jsx(q,{})}),e.jsx(t,{component:x,to:"/",sx:{fontWeight:700,fontSize:"1.0625rem",color:k[900],textDecoration:"none"},children:"업무함"}),e.jsx(t,{sx:{fontSize:"0.9375rem",color:n[500]},children:"API 매뉴얼"}),e.jsx(t,{component:x,to:"/developers",sx:{ml:"auto",fontSize:"0.9375rem",color:n[600],textDecoration:"none","&:hover":{color:k[600]}},children:"API 연동 안내"})]}),e.jsxs(t,{sx:{display:"flex",alignItems:"flex-start"},children:[e.jsx(t,{sx:{display:i?"block":"none",position:"fixed",top:p,left:0,right:0,bottom:0,zIndex:15,bgcolor:"#fff",[y]:{display:"block",position:"sticky",top:p,left:"auto",right:"auto",bottom:"auto",flex:`0 0 ${G}px`,height:`calc(100vh - ${p}px)`,borderRight:`1px solid ${n[200]}`}},children:e.jsx(v,{style:{height:"100%"},children:c})}),e.jsx(t,{component:"main",sx:{flex:1,minWidth:0,px:{xs:2,md:5},py:{xs:3,md:5},pb:12},children:g.map((a,l)=>e.jsxs(t,{component:"section",sx:{mt:l===0?0:8},children:[e.jsx(t,{component:"h1",sx:{m:0,fontSize:{xs:"1.625rem",md:"1.875rem"},fontWeight:700,color:k[900],letterSpacing:"-0.01em"},children:a.title}),a.sections.map(u=>{const E=d?u.blocks.filter(m=>m.kind==="code"):[],A=d?u.blocks.filter(m=>m.kind!=="code"):u.blocks;return e.jsxs(t,{id:u.id,component:"section",sx:{scrollMarginTop:p+16,mt:5},children:[e.jsx(t,{component:"h2",sx:{m:0,mb:2,pb:1.25,maxWidth:d?"none":P,fontSize:"1.25rem",fontWeight:700,color:n[900],borderBottom:`1px solid ${n[200]}`},children:u.title}),e.jsxs(t,{sx:{display:"flex",alignItems:"flex-start",gap:5},children:[e.jsx(t,{sx:{flex:`0 1 ${P}px`,minWidth:0,display:"flex",flexDirection:"column",gap:2},children:A.map((m,h)=>e.jsx(S,{block:m},h))}),d?e.jsx(t,{sx:{flex:"1 1 420px",minWidth:0,display:"flex",flexDirection:"column",gap:2,position:"sticky",top:p+16},children:E.map((m,h)=>e.jsx(S,{block:m},h))}):null]})]},u.id)})]},a.id))})]})]})}export{W as default};
