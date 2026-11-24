프런트엔드 컴포넌트 추출본
시작: index.html을 브라우저에서 열어주세요.
DOM 시각 검토: dom-gallery.html
배포 스크립트/원본: assets/
읽기용 정리 스크립트: formatted/
선별한 38개 컴포넌트: components/
재구성 JSX 3개: portable/

원본 TSX / package.json / lockfile / 소스맵을 확보한 패키지가 아닙니다.
원본 배포 JS와 원본에서 추론·재구성한 JSX는 별도 폴더로 구분했습니다.
파일 하나를 import하면 기존 앱의 전역 초기화나 API가 따라올 수 있습니다.
원본 동작을 읽고 필요한 부분을 분리한 뒤 새 MVP의 API/상태와 연결하세요.

검증
658개 배포 JS의 구문 분석, 661개 정적 자산의 SHA-256,
비언어 import 파일 존재, HTML 로컬 링크, DOM의 전송 동작 제거를 확인했습니다.
portable JSX는 구문 검증만 수행했으며 실제 앱에서 렌더링/상호작용 검증은 하지 않았습니다.
원본 사이트/추출본 전체를 오프라인 실행한 결과가 아닙니다.
DOM의 일부 스타일은 다른 화면의 원본 규칙 또는 computed 스타일로 보충했습니다.
메일·근태 보고서·결재 등 일부 클래스에는 대응 CSS가 없어 미리보기가 원본과 다를 수 있습니다.
style-coverage.json에서 보충/재구성/미확보 클래스를 구분해서 확인할 수 있습니다.

재수집/재분석
download_assets.py: asset-manifest.json의 명시된 정적 URL을 사용. Python 표준 라이브러리.
analyze.cjs: 설치된 Babel 파서 사용. BABEL_BUNDLE 환경변수로 해당 모듈 경로 지정 가능.
verify_package.py: Python lxml 사용. 해시/링크/의존성 검증 및 ZIP 생성.
build_catalog.py: 로컬 evidence의 DOM/CSS를 사용하여 카탈로그 생성.
  업무 데이터가 포함된 원시 evidence는 ZIP에서 제외했으므로, ZIP만으로 이 단계 전체를 재실행할 수는 없습니다.
  최종 DOM/CSS 및 모든 카탈로그 결과물은 ZIP에 있습니다.

원본 파일에 포함된 저작권/라이선스 문구는 보존했습니다.
정확한 의존 패키지 버전과 이용 조건은 실제 소스 저장소 확보 시 package.json/lockfile과 대조해야 합니다.
