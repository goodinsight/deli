import { j as e } from "./react-CjxcGQav.js";
import { bv as p, B as n, s as o, f as t, b as a, l as c, ek as x } from "../js.d/main-Cm9wS5wt.js";
import "./stylis-DdLD6a3t.js";
const d = [{
  version: "1.0.3+13",
  date: "2026-10-06",
  note: "출퇴근 위치 조작 막기",
  changes: ["가짜 위치(모의 위치)·모의 위치 앱 지정·루팅 기기에서는 위치로 출퇴근을 기록할 수 없습니다", "QR 출퇴근은 그대로 쓸 수 있습니다"]
}, {
  version: "1.0.2+12",
  date: "2026-10-06",
  note: "자동 출근",
  changes: ["자동 출근을 켠 회사에서는 출근 시간에 근무지에 도착하면 앱을 켜지 않아도 출근이 기록됩니다"]
}, {
  version: "1.0.1+11",
  date: "2026-10-06",
  note: "근무지 도착·이탈 알림, 회의 녹음 끊김 방지",
  changes: ['근무지에 도착하면 앱을 켜지 않아도 출근 안내가 옵니다(위치 권한 "항상 허용" 필요)', "근무 중 근무지를 벗어나면 퇴근 안내가 옵니다", "회의 녹음 중에는 화면이 꺼지지 않고, 화면을 끄거나 다른 앱으로 가도 녹음이 이어집니다", "아이폰에는 아직 적용되지 않았습니다"]
}, {
  version: "1.0.0+2",
  date: "2026-08-03",
  note: "첫 정상 동작 빌드",
  changes: ["부팅 시 스플래시에서 멈추던 문제 수정", "지문 로그인 지원 — 이메일로 로그인하면 이 기기에 지문을 등록할 수 있습니다", "상단바·하단 탭바 여백을 줄여 본문 영역 확대", "창업뉴스·지원사업·창업행사에 기간 검색 추가"]
}, {
  version: "1.0.0+1",
  date: "2026-08-03",
  note: "최초 빌드 (부팅 문제로 사용 불가)",
  changes: ["창업보국 앱 최초 배포"]
}];
function g() {
  const i = x()?.app_version ?? "",
    l = p();
  return e.jsxs(n, {
    sx: {
      px: 2,
      py: 2
    },
    children: [i && e.jsxs(n, {
      component: "p",
      sx: {
        mb: 2,
        borderRadius: "12px",
        bgcolor: o[50],
        px: 2,
        py: 1.5,
        fontSize: "1rem",
        color: o[600]
      },
      children: [l("app.installedVersion"), " ", e.jsx(n, {
        component: "span",
        sx: {
          fontWeight: t.bold,
          color: o[900]
        },
        children: i
      })]
    }), e.jsx(n, {
      component: "ol",
      sx: {
        listStyle: "none",
        "& > * + *": {
          mt: 2
        }
      },
      children: d.map(s => e.jsxs(n, {
        component: "li",
        sx: {
          borderRadius: "12px",
          border: `1px solid ${o[200]}`,
          p: 2
        },
        children: [e.jsxs(n, {
          sx: {
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 1
          },
          children: [e.jsx(n, {
            component: "h2",
            sx: {
              fontSize: "1.25rem",
              fontWeight: t.bold
            },
            children: s.version
          }), e.jsx(n, {
            component: "span",
            sx: {
              flexShrink: 0,
              fontSize: "0.9375rem",
              color: o[400]
            },
            children: s.date
          })]
        }), s.note && e.jsx(n, {
          component: "p",
          sx: {
            mt: .5,
            fontSize: "0.9375rem",
            fontWeight: t.semibold,
            color: a[600]
          },
          children: s.note
        }), e.jsx(n, {
          component: "ul",
          sx: {
            listStyle: "none",
            mt: 1.5,
            "& > * + *": {
              mt: .75
            }
          },
          children: s.changes.map(r => e.jsxs(n, {
            component: "li",
            sx: {
              display: "flex",
              gap: 1,
              fontSize: "1rem",
              lineHeight: c.relaxed,
              color: o[600]
            },
            children: [e.jsx(n, {
              component: "span",
              sx: {
                color: o[300]
              },
              children: "·"
            }), e.jsx(n, {
              component: "span",
              sx: {
                wordBreak: "keep-all"
              },
              children: r
            })]
          }, r))
        })]
      }, s.version))
    })]
  });
}
export { g as default };