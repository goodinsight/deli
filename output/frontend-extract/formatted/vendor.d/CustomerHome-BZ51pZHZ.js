import { u as g, r as c, j as e, L as p } from "./react-CjxcGQav.js";
import { S as l, W as y, A as b, b as f } from "./ArticleRankList-B0iEJ7wy.js";
import { u as A, bv as L, B as v, c4 as r, L as m, na as z, fj as T, bQ as j, ce as W, cf as k } from "../js.d/main-Cm9wS5wt.js";
import { u as C } from "./newsController-BGsu8k2g.js";
import "./stylis-DdLD6a3t.js";
function F() {
  return new Date().toLocaleDateString(W(k()), {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short"
  });
}
function E() {
  const u = A().useValue("account"),
    {
      state: d
    } = C(),
    x = g(),
    o = L(),
    s = d.useValue("articles") ?? [],
    a = d.useValue("favoriteSlugs") ?? [],
    n = c.useMemo(() => s.filter(t => a.includes(t.id)), [s, a]),
    h = n.filter(t => t.premium).length,
    w = c.useMemo(() => [...s].filter(t => !a.includes(t.id)).sort((t, i) => i.date.localeCompare(t.date)).slice(0, 5), [s, a]),
    S = c.useMemo(() => [...n].sort((t, i) => i.date.localeCompare(t.date)).slice(0, 5), [n]);
  return e.jsxs(v, {
    sx: {
      p: 3
    },
    children: [e.jsxs(r, {
      direction: {
        xs: "column",
        sm: "row"
      },
      spacing: 1,
      sx: {
        alignItems: {
          sm: "flex-end"
        },
        justifyContent: "space-between"
      },
      children: [e.jsxs(v, {
        children: [e.jsx(m, {
          sx: {
            fontSize: 22,
            fontWeight: 900
          },
          children: o("home.welcome", {
            name: u?.name || u?.email || ""
          })
        }), e.jsx(m, {
          sx: {
            mt: .5,
            fontSize: 14,
            color: "text.secondary"
          },
          children: o("home.customerSubtitle")
        })]
      }), e.jsx(m, {
        sx: {
          fontSize: 13,
          color: "text.secondary"
        },
        children: F()
      })]
    }), e.jsxs(r, {
      direction: "row",
      sx: {
        mt: 3,
        flexWrap: "wrap",
        gap: 2
      },
      children: [e.jsx(l, {
        label: o("home.savedArticles"),
        value: n.length,
        unit: o("home.countUnit"),
        icon: e.jsx(z, {
          sx: {
            fontSize: 18,
            color: "text.secondary"
          }
        })
      }), e.jsx(l, {
        label: o("home.savedPremium"),
        value: h,
        unit: o("home.countUnit"),
        caption: h > 0 ? o("home.membershipHint") : void 0,
        icon: e.jsx(y, {
          sx: {
            fontSize: 18,
            color: "text.secondary"
          }
        })
      }), e.jsx(l, {
        label: o("home.allArticles"),
        value: s.length,
        unit: o("home.countUnit"),
        icon: e.jsx(b, {
          sx: {
            fontSize: 18,
            color: "text.secondary"
          }
        })
      })]
    }), e.jsxs(r, {
      direction: "row",
      sx: {
        mt: 2,
        flexWrap: "wrap",
        gap: 2
      },
      children: [e.jsx(f, {
        title: o("home.recentSaved"),
        articles: S,
        metric: t => t.date,
        onSelect: t => x(`/news/${t.id}`),
        emptyText: o("home.noSaved")
      }), e.jsx(f, {
        title: o("home.recommended"),
        articles: w,
        metric: t => t.date,
        onSelect: t => x(`/news/${t.id}`),
        emptyText: o("home.noNew")
      })]
    }), e.jsx(T, {
      sx: {
        mt: 3
      }
    }), e.jsxs(r, {
      direction: "row",
      spacing: 1.5,
      sx: {
        mt: 2,
        flexWrap: "wrap",
        gap: 1.5
      },
      children: [e.jsx(j, {
        component: p,
        to: "/dashboard/favorites",
        variant: "contained",
        children: o("home.viewFavorites")
      }), e.jsx(j, {
        component: p,
        to: "/news",
        variant: "outlined",
        children: o("home.goNews")
      })]
    })]
  });
}
export { E as default };