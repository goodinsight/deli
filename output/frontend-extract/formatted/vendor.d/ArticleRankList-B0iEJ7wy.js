import { r as x, j as t } from "./react-CjxcGQav.js";
import { co as h, cp as p, cq as f, cr as m, cs as C, ct as u, cJ as v, c as g, c4 as j, L as a, bv as z, B as w } from "../js.d/main-Cm9wS5wt.js";
function M(o) {
  return h("MuiCard", o);
}
p("MuiCard", ["root"]);
const W = o => {
    const {
      classes: s
    } = o;
    return C({
      root: ["root"]
    }, M, s);
  },
  R = u(v, {
    name: "MuiCard",
    slot: "Root"
  })({
    overflow: "hidden"
  }),
  S = x.forwardRef(function (s, e) {
    const n = f({
        props: s,
        name: "MuiCard"
      }),
      {
        className: c,
        raised: l = !1,
        ...r
      } = n,
      i = {
        ...n,
        raised: l
      },
      d = W(i);
    return t.jsx(R, {
      className: m(d.root, c),
      elevation: l ? 8 : void 0,
      ref: e,
      ownerState: i,
      ...r
    });
  });
function b(o) {
  return h("MuiCardContent", o);
}
p("MuiCardContent", ["root"]);
const k = o => {
    const {
      classes: s
    } = o;
    return C({
      root: ["root"]
    }, b, s);
  },
  H = u("div", {
    name: "MuiCardContent",
    slot: "Root"
  })({
    padding: 16,
    "&:last-child": {
      paddingBottom: 24
    }
  }),
  y = x.forwardRef(function (s, e) {
    const n = f({
        props: s,
        name: "MuiCardContent"
      }),
      {
        className: c,
        component: l = "div",
        ...r
      } = n,
      i = {
        ...n,
        component: l
      },
      d = k(i);
    return t.jsx(H, {
      as: l,
      className: m(d.root, c),
      ownerState: i,
      ref: e,
      ...r
    });
  }),
  I = g(t.jsx("path", {
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"
  })),
  T = g(t.jsx("path", {
    d: "M9.68 13.69 12 11.93l2.31 1.76-.88-2.85L15.75 9h-2.84L12 6.19 11.09 9H8.25l2.31 1.84zM20 10c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 2.03.76 3.87 2 5.28V23l6-2 6 2v-7.72c1.24-1.41 2-3.25 2-5.28m-8-6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6"
  }));
function A({
  label: o,
  value: s,
  unit: e,
  caption: n,
  icon: c
}) {
  return t.jsx(S, {
    variant: "outlined",
    sx: {
      flex: "1 1 200px",
      minWidth: 180
    },
    children: t.jsxs(y, {
      sx: {
        "&:last-child": {
          pb: 2
        }
      },
      children: [t.jsxs(j, {
        direction: "row",
        spacing: 1,
        alignItems: "center",
        children: [c, t.jsx(a, {
          sx: {
            fontSize: 13,
            color: "text.secondary",
            fontWeight: 700
          },
          children: o
        })]
      }), t.jsxs(a, {
        sx: {
          mt: .75,
          fontSize: 28,
          fontWeight: 900,
          lineHeight: 1.1
        },
        children: [typeof s == "number" ? s.toLocaleString() : s, e && t.jsx("span", {
          style: {
            fontSize: 14,
            marginLeft: 4,
            fontWeight: 700
          },
          children: e
        })]
      }), n && t.jsx(a, {
        sx: {
          mt: .5,
          fontSize: 12,
          color: "text.secondary"
        },
        children: n
      })]
    })
  });
}
function N({
  title: o,
  articles: s,
  metric: e,
  onSelect: n,
  emptyText: c
}) {
  const l = z();
  return t.jsx(S, {
    variant: "outlined",
    sx: {
      flex: "1 1 320px",
      minWidth: 300
    },
    children: t.jsxs(y, {
      children: [t.jsx(a, {
        sx: {
          fontSize: 15,
          fontWeight: 800
        },
        children: o
      }), s.length === 0 ? t.jsx(a, {
        sx: {
          mt: 2,
          fontSize: 13,
          color: "text.secondary"
        },
        children: c ?? l("home.noArticlesToShow")
      }) : t.jsx(j, {
        sx: {
          mt: 1
        },
        children: s.map((r, i) => t.jsxs(w, {
          onClick: () => n(r),
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            py: 1.25,
            px: 1,
            mx: -1,
            borderRadius: 1,
            cursor: "pointer",
            borderTop: i === 0 ? "none" : "1px solid",
            borderColor: "divider",
            "&:hover": {
              backgroundColor: "action.hover"
            }
          },
          children: [t.jsx(a, {
            sx: {
              width: 18,
              flexShrink: 0,
              fontSize: 13,
              fontWeight: 800,
              color: "text.secondary"
            },
            children: i + 1
          }), t.jsx(a, {
            sx: {
              flex: 1,
              minWidth: 0,
              fontSize: 14,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: r.title
          }), t.jsx(a, {
            sx: {
              flexShrink: 0,
              fontSize: 12,
              color: "text.secondary"
            },
            children: e(r)
          })]
        }, r.id))
      })]
    })
  });
}
export { I as A, S as C, A as S, T as W, y as a, N as b };