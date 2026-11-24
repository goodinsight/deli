재구성 JSX — 원본 TSX가 아닙니다.

원본 배포 청크의 UI/콜백 동작을 읽고 의미 있는 이름과 공식 MUI import로 옮긴 3개 컴포넌트입니다.
각 원본의 URL, SHA-256, export 별칭은 ../components/<이름>/manifest.json에 있습니다.

사용 조건
* React JSX 변환 환경과 @mui/material 및 MUI 스타일 엔진이 있는 앱에서 사용합니다.
* 앱의 ThemeProvider 아래에서 렌더링합니다. 원본 사이트의 전체 테마가 복원된 것은 아닙니다.
* 원본 package.json / lockfile을 확보하지 못했으므로 MUI/Emotion 버전을 임의로 고정하지 않았습니다.
* 구문 분석을 통과했습니다. 실제 앱에 설치하거나 렌더링·상호작용 회귀 테스트까지 마친 패키지는 아닙니다.

입력 계약
InlineErrorAlert: message (빈 값이면 렌더링하지 않음)
ToneChip: label, tone: {color, bg}
OptionToggleGroup: options:[{value,label,disabled?}], value, onChange,
  multiSelect?, allowDeselect?, size?, disabled?, sx?
  단일 선택 해제는 allowDeselect=true일 때만 null을 전달합니다.
  다중 선택은 값 배열을 전달하며 null을 빈 배열로 바꿉니다.

예시
<ToneChip label="진행 중" tone={{color:'#1565c0', bg:'#e3f2fd'}} />
<InlineErrorAlert message="필수 항목을 확인해주세요." />
<OptionToggleGroup options={[{value:'list',label:'목록'},{value:'calendar',label:'달력'}]}
  value={view} onChange={setView} />

다른 배포 청크를 그대로 import하여 실행하지 마세요.
main 번들 초기화와 전역 상태/API 의존성을 먼저 분리해야 합니다.
