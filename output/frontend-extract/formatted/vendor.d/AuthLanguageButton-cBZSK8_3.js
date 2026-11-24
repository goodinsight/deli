import { j as n, r as x } from "./react-CjxcGQav.js";
import { L as g } from "./LanguageOutlined-dNJSO7u2.js";
import { B as r, bv as h, D as m, cf as f, cj as i, s as c, f as p, d as j, e6 as b, e7 as y, e8 as d, M as B, w as v, e9 as C } from "../js.d/main-Cm9wS5wt.js";
function L() {
  const a = h(),
    u = m(),
    [o, t] = x.useState(null),
    s = f(),
    l = e => {
      t(null), C(e);
    };
  return n.jsxs(n.Fragment, {
    children: [n.jsxs(i, {
      onClick: e => t(e.currentTarget),
      "aria-label": a("auth.chooseLanguage"),
      "aria-haspopup": "listbox",
      sx: {
        display: "inline-flex",
        alignItems: "center",
        gap: .5,
        px: 1,
        py: .5,
        borderRadius: 1.5,
        fontFamily: "inherit",
        fontSize: j.base,
        fontWeight: p.medium,
        color: c[500],
        "&:hover": {
          bgcolor: c[100]
        },
        "& > svg": {
          fontSize: "1.2em"
        }
      },
      children: [n.jsx(g, {}), n.jsx(r, {
        component: "span",
        lang: s,
        children: b(s).native
      })]
    }), u ? n.jsx(y, {
      open: !!o,
      onClose: () => t(null),
      title: a("auth.language"),
      children: n.jsx(r, {
        sx: {
          mx: "-18px"
        },
        children: d.map(e => n.jsx(i, {
          lang: e.code,
          onClick: () => l(e.code),
          sx: {
            display: "flex",
            width: "100%",
            justifyContent: "flex-start",
            px: "18px",
            py: "13px",
            fontSize: 15,
            color: e.code === s ? "primary.main" : "text.primary",
            fontWeight: e.code === s ? 700 : 400,
            borderBottom: 1,
            borderColor: "divider"
          },
          children: e.native
        }, e.code))
      })
    }) : n.jsx(B, {
      anchorEl: o,
      open: !!o,
      onClose: () => t(null),
      slotProps: {
        list: {
          dense: !0
        }
      },
      children: d.map(e => n.jsx(v, {
        lang: e.code,
        selected: e.code === s,
        onClick: () => l(e.code),
        sx: {
          fontSize: 14,
          minWidth: 160
        },
        children: e.native
      }, e.code))
    })]
  });
}
function I({
  pullUp: a = 5
} = {}) {
  return n.jsx(r, {
    sx: {
      display: "flex",
      justifyContent: "flex-end",
      mt: -a,
      mb: .5,
      mr: -1
    },
    children: n.jsx(L, {})
  });
}
export { I as A };