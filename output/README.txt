엘림 세이프티 서비스 분석 및 MVP 설계 자료

대상: https://work-test.elimsafety.com/dashboard
저장소 반영일: 2026-11-25
MVP 범위: 좌측 메뉴의 12개 서비스별 핵심 업무 흐름 구현

자료 안내
1. service-review/screen-guide.html
   기능별 화면 설명과 138개 캡처. screenshots/에 원본 이미지,
   captures.json 및 screen-index.json에 화면별 근거와 메타데이터가 있습니다.
2. pdf/service-screen-review.pdf
   화면 분석 보고서(PDF).
3. mvp-design/mvp-design.html
   서비스별 기능 중복, 사용 흐름 개선, 우선순위, MVP 범위 및 아키텍처.
   improvement-backlog.json, mvp-scope.json 및 diagrams/를 함께 참고하세요.
4. pdf/mvp-improvement-architecture.pdf
   개선안과 MVP 아키텍처 보고서(PDF).
5. frontend-extract/index.html
   배포 프런트엔드 분석 및 38개 선별 컴포넌트 카탈로그.
   dom-gallery.html: 16개 화면 상태에서 추출한 64개 DOM 조각.
   all-modules.html: 658개 JavaScript 모듈 목록.
   assets/: 배포 원본 정적 자산. formatted/: 읽기용으로 정리한 코드.
   portable/: 원본 동작을 참고하여 재구성한 JSX 3개.
   README.txt와 validation.json, style-coverage.json에 검증 범위와 한계가 있습니다.

각 폴더의 ZIP, 생성/검증 스크립트, 증거 데이터와 QA 이미지도 함께 포함했습니다.
HTML은 저장소를 내려받은 뒤 해당 파일을 브라우저에서 열어 확인할 수 있습니다.
GitHub의 파일 화면에서는 HTML이 실행되지 않습니다.

자료의 성격과 제한
- 본 자료는 서비스 조사, 설계 및 프런트엔드 추출 결과입니다.
  MVP 애플리케이션의 구현 완료나 실행 가능한 원본 프로젝트를 의미하지 않습니다.
- Next.js/NestJS/PostgreSQL 구성은 제안한 MVP 아키텍처입니다.
  실제 사이트에서 관찰한 기술은 frontend-extract/package-evidence.json에 따로 기록했습니다.
- 원본 TSX, package.json, lockfile, 소스맵은 확보하지 못했습니다.
  재구성 JSX는 구문 검사만 했으며 실제 앱의 동작 검증은 수행하지 않았습니다.
- 일부 DOM 미리보기에는 미확보 CSS가 있어 원본 화면과 차이가 있습니다.
- evidence/와 원본 캡처에는 조사 당시의 업무 데이터가 포함되어 있습니다.
  정제한 DOM 미리보기 및 배포용 ZIP과 원시 증거 데이터의 범위는 서로 다릅니다.
- 원본 자산의 저작권/라이선스 문구와 파일 바이트를 보존했습니다.
  output/.gitattributes는 Git의 자동 줄바꿈 변환으로 자산 해시가 달라지는 것을 방지합니다.
