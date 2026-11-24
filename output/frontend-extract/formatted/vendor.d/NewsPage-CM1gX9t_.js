import { r as a, j as o, L as m } from "./react-CjxcGQav.js";
import { u as C, nd as $, B as s, al as k, f as r, b as B, s as t, cQ as W, l as v, as as i, z as E, bx as R, bO as T } from "../js.d/main-Cm9wS5wt.js";
import { n as M } from "./newsAdminApi-DyrOnwXM.js";
import { u as D } from "./newsController-BGsu8k2g.js";
import { u as N } from "./dashboardBase-vwyZVF5L.js";
import { u as V } from "./mobileBase-CknPHYoV.js";
import "./stylis-DdLD6a3t.js";
const y = {
  borderRadius: "8px",
  border: "1px solid",
  px: 1.5,
  py: .75,
  fontSize: "0.9375rem",
  fontWeight: r.semibold
};
function q() {
  const S = V(),
    x = N(),
    {
      state: l
    } = D(),
    j = C().useValue("account"),
    u = $(j),
    f = l.useValue("articles"),
    h = a.useMemo(() => f ?? [], [f]),
    b = !(l.useValue("listLoaded") ?? !1),
    [d, L] = a.useState(""),
    [g, w] = a.useState(""),
    c = a.useMemo(() => {
      const e = d.trim().toLowerCase(),
        p = [...h].sort((n, A) => A.date.localeCompare(n.date));
      return e ? p.filter(n => `${n.title} ${n.author}`.toLowerCase().includes(e)) : p;
    }, [h, d]),
    z = async e => {
      if (await E({
        title: "기사 삭제",
        message: `"${e.title}" 기사를 삭제할까요?`,
        confirmText: "삭제",
        cancelText: "취소"
      })) {
        w(e.id);
        try {
          await M.remove(e.id), await l.actions.loadArticles(), R("삭제했습니다.");
        } catch (n) {
          T(n instanceof Error ? n.message : "삭제에 실패했습니다.");
        } finally {
          w("");
        }
      }
    };
  return o.jsxs(s, {
    sx: {
      px: 2,
      py: 2
    },
    children: [o.jsx(k, {
      value: d,
      onChange: e => L(e.target.value),
      placeholder: "제목, 기자 검색",
      fullWidth: !0,
      size: "medium"
    }), u && o.jsx(s, {
      component: m,
      to: `${x}/news/write`,
      sx: {
        mt: 1.5,
        display: "block",
        borderRadius: "12px",
        bgcolor: B[600],
        py: 1.75,
        textAlign: "center",
        fontSize: "1.0625rem",
        fontWeight: r.bold,
        color: "#fff"
      },
      children: "기사 작성"
    }), o.jsxs(s, {
      component: "p",
      sx: {
        mt: 2,
        fontSize: "1rem",
        color: t[500]
      },
      children: ["총", " ", o.jsx(s, {
        component: "span",
        sx: {
          fontWeight: r.bold,
          color: t[900]
        },
        children: c.length
      }), "건"]
    }), b ? o.jsx(W, {
      overlay: !1
    }) : o.jsx(s, {
      component: "ul",
      sx: {
        listStyle: "none",
        mt: 1,
        borderRadius: "12px",
        border: `1px solid ${t[200]}`,
        "& > * + *": {
          borderTop: `1px solid ${t[100]}`
        }
      },
      children: c.map(e => o.jsxs(s, {
        component: "li",
        sx: {
          px: 2,
          py: 1.75
        },
        children: [o.jsxs(s, {
          sx: {
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 1
          },
          children: [o.jsx(s, {
            component: m,
            to: `${S}/news/${e.id}`,
            sx: {
              minWidth: 0,
              flex: "1 1 0%"
            },
            children: o.jsx(s, {
              component: "span",
              sx: {
                display: "block",
                fontSize: "1.0625rem",
                lineHeight: v.snug,
                fontWeight: r.semibold,
                wordBreak: "keep-all"
              },
              children: e.title
            })
          }), e.premium && o.jsx(s, {
            component: "span",
            sx: {
              flexShrink: 0,
              borderRadius: "4px",
              bgcolor: i.amber100,
              px: 1,
              py: .25,
              fontSize: "0.8125rem",
              fontWeight: r.bold,
              color: i.amber700
            },
            children: "유료"
          })]
        }), o.jsxs(s, {
          component: "p",
          sx: {
            mt: .5,
            fontSize: "0.9375rem",
            color: t[400]
          },
          children: [e.category, " · ", e.author, " · ", e.date, " ·", " ", e.views.toLocaleString(), "회"]
        }), u && o.jsxs(s, {
          sx: {
            mt: 1,
            display: "flex",
            gap: 1
          },
          children: [o.jsx(s, {
            component: m,
            to: `${x}/news/write/${e.id}`,
            sx: {
              ...y,
              borderColor: t[300],
              color: t[600]
            },
            children: "수정"
          }), o.jsx(s, {
            component: "button",
            onClick: () => {
              z(e);
            },
            disabled: g === e.id,
            sx: {
              ...y,
              borderColor: i.rose200,
              color: i.rose600,
              "&:disabled": {
                opacity: .6
              }
            },
            children: g === e.id ? "삭제 중…" : "삭제"
          })]
        })]
      }, e.id))
    }), !b && c.length === 0 && o.jsx(s, {
      component: "p",
      sx: {
        py: 5,
        textAlign: "center",
        fontSize: "1rem",
        color: t[400]
      },
      children: "조건에 맞는 기사가 없습니다."
    })]
  });
}
export { q as default };