import { j as o, r as u } from "./react-CjxcGQav.js";
import { C as S } from "./CalendarMonth-DAIUkfTQ.js";
import { a as T } from "./appBarActions-BXLnK8sS.js";
import { B as s, as as a, f as i, bT as v, ce as j, cf as R, c8 as D, dD as k, cN as C, s as r, b as d, d as W, l as A } from "../js.d/main-Cm9wS5wt.js";
import { c as V, D as $, b as F, U as z } from "./DateRangeFilter-DIjxG_up.js";
import { L as p } from "./LabeledInfoRow-COxFBkyU.js";
import "./stylis-DdLD6a3t.js";
const B = {
  "IR·데모데이": {
    bg: a.blue50,
    color: a.blue700
  },
  박람회: {
    bg: a.emerald50,
    color: a.emerald700
  },
  "세미나·포럼": {
    bg: a.violet50,
    color: a.violet700
  },
  교육: {
    bg: a.amber50,
    color: a.amber700
  }
};
function N({
  type: e
}) {
  const n = B[e];
  return o.jsx(s, {
    component: "span",
    sx: {
      borderRadius: .5,
      px: 1,
      py: .25,
      fontSize: "0.875rem",
      fontWeight: i.bold,
      bgcolor: n.bg,
      color: n.color
    },
    children: e
  });
}
function O(e, n) {
  return !n || n === e ? f(e) : `${f(e)} ~ ${f(n)}`;
}
function f(e) {
  const [n, c, m] = e.split("-");
  return `${n.slice(2)}.${c}.${m} (${L(e)})`;
}
function P(e) {
  return e === void 0 ? v("utils.paid") : v("utils.feeWon", {
    amount: e.toLocaleString(j(R()))
  });
}
function L(e) {
  const n = new Date(`${e}T00:00:00`);
  return Number.isNaN(n.getTime()) ? "" : new Intl.DateTimeFormat(j(R()), {
    weekday: "short"
  }).format(n);
}
const G = [{
    id: "ev-01",
    title: "K-스타트업 그랜드 데모데이 2026",
    type: "IR·데모데이",
    date: "2026-07-16",
    place: "코엑스 오디토리움",
    host: "창업진흥원",
    free: !0
  }, {
    id: "ev-02",
    title: "창업보국 SEI 컨퍼런스 — 데이터로 보는 창업생태계",
    type: "세미나·포럼",
    date: "2026-07-23",
    endDate: "2026-07-24",
    place: "서울 드래곤시티",
    host: "창업보국",
    free: !1,
    fee: 15e4
  }, {
    id: "ev-03",
    title: "대전 딥테크 IR 라운드",
    type: "IR·데모데이",
    date: "2026-07-29",
    place: "대전컨벤션센터",
    host: "블루포인트파트너스",
    free: !0
  }, {
    id: "ev-04",
    title: "2026 대한민국 창업박람회",
    type: "박람회",
    date: "2026-08-06",
    endDate: "2026-08-08",
    place: "킨텍스 제1전시장",
    host: "중소벤처기업부",
    free: !0
  }, {
    id: "ev-05",
    title: "투자유치 실전 8주 과정 (3기)",
    type: "교육",
    date: "2026-08-10",
    endDate: "2026-10-02",
    place: "창업보국 아카데미 (온라인 병행)",
    host: "창업보국 아카데미",
    free: !1,
    fee: 88e4
  }, {
    id: "ev-06",
    title: "광주 AI 스타트업 밋업",
    type: "세미나·포럼",
    date: "2026-08-13",
    place: "광주 AI 창업캠프",
    host: "광주광역시",
    free: !0
  }, {
    id: "ev-07",
    title: "글로벌 진출 전략 세미나 — 일본·동남아",
    type: "세미나·포럼",
    date: "2026-08-20",
    endDate: "2026-08-21",
    place: "온라인 (Zoom)",
    host: "KOTRA",
    free: !0
  }, {
    id: "ev-08",
    title: "여성창업 IR 경진대회",
    type: "IR·데모데이",
    date: "2026-08-27",
    place: "부산 벡스코",
    host: "여성기업종합지원센터",
    free: !0
  }],
  U = {
    list: async () => G
  },
  H = () => async e => {
    const n = await U.list();
    e.setValue("events", n);
  },
  K = () => (e, n) => {
    e.setValue("type", n);
  },
  M = () => (e, n) => {
    e.setValue("dateFrom", n.from), e.setValue("dateTo", n.to);
  },
  _ = {
    type: "전체",
    dateFrom: "",
    dateTo: "",
    events: []
  };
function X() {
  const e = D({
    stateId: "eventsState",
    initialValues: _,
    actions: {
      loadEvents: H(),
      setType: K(),
      setDateRange: M()
    }
  });
  return u.useEffect(() => {
    e.getValue("events").length === 0 && e.actions.loadEvents();
  }, []), {
    state: e
  };
}
const Z = ["전체", "IR·데모데이", "박람회", "세미나·포럼", "교육"];
function re() {
  const {
      state: e
    } = X(),
    c = e.useValue("type") ?? "전체",
    w = e.useValue("events") ?? [],
    x = e.useValue("dateFrom") ?? "",
    b = e.useValue("dateTo") ?? "",
    h = {
      from: x,
      to: b
    },
    y = x !== "" || b !== "",
    [l, g] = u.useState(!1);
  u.useEffect(() => {
    if (!l) return;
    const {
      overflow: t,
      touchAction: E
    } = document.body.style;
    return document.body.style.overflow = "hidden", document.body.style.touchAction = "none", () => {
      document.body.style.overflow = t, document.body.style.touchAction = E;
    };
  }, [l]), T(o.jsx(s, {
    component: "button",
    onClick: () => g(t => !t),
    "aria-label": "기간 필터",
    "aria-expanded": l,
    sx: {
      display: "flex",
      height: 32,
      width: 32,
      flexShrink: 0,
      cursor: "pointer",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      borderRadius: "9999px",
      border: "none",
      bgcolor: "transparent",
      color: l || y ? d[600] : r[600]
    },
    children: o.jsx(S, {})
  }), [l, y]);
  const I = w.filter(t => c !== "전체" && t.type !== c ? !1 : V(t.date, t.endDate, h));
  return o.jsxs(s, {
    children: [o.jsx(k, {
      open: l,
      onClick: () => g(!1),
      sx: {
        zIndex: 30,
        alignItems: "flex-start"
      }
    }), o.jsx(s, {
      sx: {
        position: "fixed",
        left: 0,
        right: 0,
        top: 64,
        zIndex: 40,
        mx: "auto",
        maxWidth: 448
      },
      children: o.jsx(C, {
        in: l,
        children: o.jsx(s, {
          onClick: t => t.stopPropagation(),
          sx: {
            borderBottom: `1px solid ${r[200]}`,
            bgcolor: "#fff",
            px: 2,
            py: 2
          },
          children: o.jsx($, {
            label: "행사일",
            presets: z,
            resolve: F,
            value: h,
            onChange: t => e.actions.setDateRange(t),
            compact: !0
          })
        })
      })
    }), o.jsx(s, {
      sx: {
        position: "sticky",
        top: 0,
        zIndex: 30,
        display: "flex",
        gap: 1.5,
        overflowX: "auto",
        borderBottom: `1px solid ${r[100]}`,
        bgcolor: "#fff",
        px: 2,
        py: 1.25,
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none"
        }
      },
      children: Z.map(t => o.jsx(s, {
        component: "button",
        onClick: () => e.actions.setType(t),
        sx: {
          flexShrink: 0,
          cursor: "pointer",
          borderRadius: "9999px",
          px: 2,
          py: 1,
          fontSize: W.base,
          fontWeight: i.semibold,
          transition: "background-color 150ms, color 150ms",
          ...(c === t ? {
            bgcolor: d[900],
            color: "#fff",
            border: "none"
          } : {
            bgcolor: "transparent",
            border: `1px solid ${r[300]}`,
            color: r[600]
          })
        },
        children: t
      }, t))
    }), o.jsx(s, {
      component: "ul",
      sx: {
        listStyle: "none",
        m: 0,
        px: 2,
        py: 2,
        "& > * + *": {
          mt: 2
        }
      },
      children: I.map(t => o.jsx(s, {
        component: "li",
        sx: {
          borderRadius: 3,
          border: `1px solid ${r[400]}`,
          p: 1.75
        },
        children: o.jsxs(s, {
          sx: {
            minWidth: 0
          },
          children: [o.jsxs(s, {
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1
            },
            children: [o.jsx(N, {
              type: t.type
            }), !t.free && o.jsx(s, {
              component: "span",
              sx: {
                flexShrink: 0,
                fontSize: "1rem",
                fontWeight: i.bold,
                color: r[900]
              },
              children: P(t.fee)
            })]
          }), o.jsx(s, {
            component: "h2",
            sx: {
              m: 0,
              py: 2,
              fontSize: "1.5625rem",
              lineHeight: A.snug,
              fontWeight: i.bold,
              wordBreak: "keep-all"
            },
            children: t.title
          }), o.jsxs(s, {
            sx: {
              "& > * + *": {
                mt: .5
              }
            },
            children: [o.jsx(p, {
              label: "장소",
              value: t.place
            }), o.jsx(p, {
              label: "주최",
              value: t.host
            }), o.jsx(p, {
              label: "일정",
              value: O(t.date, t.endDate),
              sx: {
                fontWeight: i.semibold,
                color: d[700]
              }
            })]
          })]
        })
      }, t.id))
    }), o.jsxs(s, {
      sx: {
        mx: 2,
        mb: 2,
        borderRadius: 3,
        bgcolor: r[50],
        p: 2,
        textAlign: "center",
        fontSize: "1rem",
        color: r[600]
      },
      children: ["행사를 등록하고 싶으신가요?", " ", o.jsx(s, {
        component: "span",
        sx: {
          fontWeight: i.bold,
          color: d[600]
        },
        children: "기업·기관회원"
      }), "은 행사를 무제한 등록할 수 있습니다."]
    })]
  });
}
export { re as default };