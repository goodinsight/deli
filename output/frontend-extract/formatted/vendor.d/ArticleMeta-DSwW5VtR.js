import { j as e, u as k, i as I, r as L } from "./react-CjxcGQav.js";
import { bv as y, u as z, B as o, s as r, rC as C, as as l, f as F, d as A, na as B, lU as R, bS as P } from "../js.d/main-Cm9wS5wt.js";
import { F as T } from "./FavoriteBorder-BkFztsJe.js";
import { s as W, a as D } from "./shareArticle-Cy4lemZ5.js";
import { a as E } from "./newsController-BGsu8k2g.js";
function M({
  size: t = 18
}) {
  return e.jsx("svg", {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    "aria-label": "프리미엄",
    children: e.jsx("path", {
      d: "M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.31l-5.8 3.05 1.11-6.46-4.7-4.58 6.49-.94L12 2.5z"
    })
  });
}
function G({
  slug: t,
  author: d,
  date: u,
  title: x = "",
  premium: f = !1,
  showActions: h = !0
}) {
  const s = y(),
    g = k(),
    c = I(),
    b = z(),
    p = E(),
    v = b.useValue("logined") ?? !1,
    a = (p.useValue("favoriteSlugs") ?? []).includes(t),
    [w, m] = L.useState(!1),
    j = n => {
      if (n.preventDefault(), n.stopPropagation(), !v) {
        const i = `${c.pathname}${c.search}`;
        P(i), g("/login", {
          state: {
            from: i
          }
        });
        return;
      }
      p.actions.toggleFavorite(t);
    },
    S = n => {
      n.preventDefault(), n.stopPropagation(), W(D(t), x).then(i => {
        i === "copied" && (m(!0), window.setTimeout(() => m(!1), 1500));
      });
    };
  return e.jsxs(o, {
    sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },
    children: [e.jsx(o, {
      sx: {
        display: "flex",
        minWidth: 0,
        alignItems: "center",
        gap: .75
      },
      children: e.jsxs(o, {
        component: "span",
        sx: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          fontSize: {
            xs: "1rem",
            md: "0.875rem"
          },
          color: r[500]
        },
        children: [d, " · ", C(u)]
      })
    }), h && e.jsxs(o, {
      sx: {
        display: "flex",
        flexShrink: 0,
        alignItems: "center"
      },
      children: [f && e.jsx(o, {
        component: "span",
        title: s("components.premiumArticle"),
        sx: {
          display: "flex",
          alignItems: "center",
          p: 1,
          lineHeight: 1,
          color: l.amber500
        },
        children: e.jsx(M, {
          size: 20
        })
      }), w && e.jsx(o, {
        component: "span",
        sx: {
          mr: .5,
          whiteSpace: "nowrap",
          fontSize: A.xs,
          fontWeight: F.semibold,
          color: l.emerald600
        },
        children: s("components.linkCopied")
      }), e.jsx(o, {
        component: "button",
        type: "button",
        onClick: j,
        "aria-pressed": a,
        "aria-label": s(a ? "components.unlike" : "components.like"),
        sx: {
          cursor: "pointer",
          borderRadius: "9999px",
          border: "none",
          bgcolor: "transparent",
          p: 1,
          transition: "background-color 150ms, color 150ms",
          ...(a ? {
            color: l.rose500
          } : {
            color: r[400],
            "&:hover": {
              bgcolor: r[100]
            }
          })
        },
        children: a ? e.jsx(B, {
          fontSize: "small"
        }) : e.jsx(T, {
          fontSize: "small"
        })
      }), e.jsx(o, {
        component: "button",
        type: "button",
        onClick: S,
        "aria-label": s("components.shareLink"),
        sx: {
          cursor: "pointer",
          borderRadius: "9999px",
          border: "none",
          bgcolor: "transparent",
          p: 1,
          color: r[400],
          transition: "background-color 150ms",
          "&:hover": {
            bgcolor: r[100]
          }
        },
        children: e.jsx(R, {
          fontSize: "small"
        })
      })]
    })]
  });
}
export { G as A };