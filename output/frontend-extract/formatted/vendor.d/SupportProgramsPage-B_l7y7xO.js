import { r as c, j as t } from "./react-CjxcGQav.js";
import { bO as S, B as s, al as b, s as i, f as d, cQ as y, as as m } from "../js.d/main-Cm9wS5wt.js";
import { s as $ } from "./supportApi-C3cYlGjK.js";
import { b as W, d as v, p as E, r as L } from "./table-BzgWEHo_.js";
import "./stylis-DdLD6a3t.js";
import "./samplePrograms-hLv5etHo.js";
function z(o) {
  switch (o) {
    case "closed":
      return {
        bgcolor: i[100],
        color: i[500]
      };
    case "closing":
      return {
        bgcolor: m.amber50,
        color: m.amber700
      };
    default:
      return {
        bgcolor: m.emerald50,
        color: m.emerald700
      };
  }
}
const x = {
  mt: .5,
  fontSize: "0.9375rem",
  color: i[600]
};
function C(o) {
  const l = E(o),
    a = L(o);
  return a === null ? l : a < 0 ? `${l} · 종료` : a === 0 ? `${l} · 오늘 마감` : `${l} · D-${a}`;
}
function P() {
  const [o, l] = c.useState([]),
    [a, g] = c.useState(!0),
    [p, j] = c.useState("");
  c.useEffect(() => {
    let e = !0;
    return $.list().then(n => {
      e && l(n);
    }).catch(n => {
      S(n instanceof Error ? n.message : "지원사업 목록을 불러오지 못했습니다.");
    }).finally(() => {
      e && g(!1);
    }), () => {
      e = !1;
    };
  }, []);
  const u = c.useMemo(() => {
    const e = p.trim().toLowerCase();
    return (e ? o.filter(r => `${r.title} ${r.agency} ${r.ministry} ${r.field} ${r.target}`.toLowerCase().includes(e)) : o).slice().sort((r, f) => {
      const h = (r.start_date || "9999-12-31").localeCompare(f.start_date || "9999-12-31");
      return h !== 0 ? h : (r.deadline || "9999-12-31").localeCompare(f.deadline || "9999-12-31");
    });
  }, [o, p]);
  return t.jsxs(s, {
    sx: {
      px: 2,
      py: 2
    },
    children: [t.jsx(b, {
      value: p,
      onChange: e => j(e.target.value),
      placeholder: "사업명, 기관, 분야 검색",
      fullWidth: !0,
      size: "medium"
    }), t.jsxs(s, {
      component: "p",
      sx: {
        mt: 2,
        fontSize: "1rem",
        color: i[500]
      },
      children: ["총", " ", t.jsx(s, {
        component: "span",
        sx: {
          fontWeight: d.bold,
          color: i[900]
        },
        children: u.length
      }), "건"]
    }), a ? t.jsx(y, {
      overlay: !1
    }) : t.jsx(s, {
      component: "ul",
      sx: {
        listStyle: "none",
        mt: 1,
        "& > * + *": {
          mt: 1.5
        }
      },
      children: u.map(e => {
        const n = W(e);
        return t.jsxs(s, {
          component: "li",
          sx: {
            borderRadius: "12px",
            border: `1px solid ${i[200]}`,
            p: 1.75
          },
          children: [t.jsxs(s, {
            sx: {
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 1
            },
            children: [t.jsx(s, {
              component: "p",
              sx: {
                minWidth: 0,
                fontSize: "1.0625rem",
                fontWeight: d.semibold
              },
              children: e.title
            }), t.jsx(s, {
              component: "span",
              sx: {
                flexShrink: 0,
                borderRadius: "4px",
                px: 1,
                py: .25,
                fontSize: "0.8125rem",
                fontWeight: d.bold,
                ...z(n)
              },
              children: v(n)
            })]
          }), t.jsx(s, {
            component: "p",
            sx: {
              ...x,
              fontWeight: d.medium,
              color: i[700]
            },
            children: C(e)
          }), t.jsx(s, {
            component: "p",
            sx: x,
            children: e.ministry || "-"
          }), t.jsx(s, {
            component: "p",
            sx: x,
            children: [e.target, e.amount].filter(Boolean).join(" · ")
          })]
        }, e.id);
      })
    }), !a && u.length === 0 && t.jsx(s, {
      component: "p",
      sx: {
        py: 5,
        textAlign: "center",
        fontSize: "1rem",
        color: i[400]
      },
      children: "조건에 맞는 지원사업이 없습니다."
    })]
  });
}
export { P as default };