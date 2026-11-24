import { j as e } from "./react-CjxcGQav.js";
import { bv as f, cf as h, dY as u, B as t, f as a, d as g, s as o, l as j } from "../js.d/main-Cm9wS5wt.js";
function S(n) {
  return /^[①-⑳] /.test(n) ? {
    pl: "1.6em",
    textIndent: "-1.6em"
  } : /^\d+\. /.test(n) ? {
    ml: "1.6em",
    pl: "1.4em",
    textIndent: "-1.4em"
  } : n.startsWith("- ") ? {
    pl: "1.1em",
    textIndent: "-1.1em"
  } : {};
}
function b(n) {
  const r = /^(\[[^\]]+\])\s*([\s\S]*)$/.exec(n);
  return r ? e.jsxs(e.Fragment, {
    children: [e.jsx(t, {
      component: "strong",
      sx: {
        fontWeight: a.semibold
      },
      children: r[1]
    }), r[2] && ` ${r[2]}`]
  }) : n;
}
function W({
  title: n,
  effectiveDate: r,
  sections: i,
  showTitle: s = !0
}) {
  const c = f(),
    p = typeof i == "function" ? i(c) : i,
    l = h() !== u;
  return e.jsxs(t, {
    sx: {
      mx: "auto",
      maxWidth: 768,
      px: 2,
      py: s ? 6 : 3
    },
    children: [s && e.jsx(t, {
      component: "h1",
      sx: {
        fontSize: g["4xl"],
        lineHeight: 1.1111,
        fontWeight: a.black
      },
      children: n
    }), l && e.jsx(t, {
      component: "p",
      role: "note",
      sx: {
        ...(s ? {
          mt: 2
        } : {}),
        mb: 1,
        borderRadius: 1.5,
        bgcolor: o[100],
        px: 1.5,
        py: 1,
        fontSize: "1rem",
        color: o[600]
      },
      children: c("policy.translationNotice")
    }), e.jsx(t, {
      component: "p",
      sx: {
        fontSize: "1rem",
        color: o[600],
        ...(s && !l ? {
          mt: 1
        } : {})
      },
      children: c("company.effectiveDate", {
        date: r
      })
    }), e.jsx(t, {
      sx: {
        mt: 4,
        "& > * + *": {
          mt: 4
        }
      },
      children: p.map(m => e.jsxs("section", {
        children: [e.jsx(t, {
          component: "h2",
          sx: {
            fontSize: "1.375rem",
            fontWeight: a.medium,
            color: o[900]
          },
          children: m.title
        }), e.jsx(t, {
          sx: {
            mt: 1,
            "& > * + *": {
              mt: 1
            }
          },
          children: m.paragraphs.map((x, d) => e.jsx(t, {
            component: "p",
            sx: {
              fontSize: "1rem",
              lineHeight: j.relaxed,
              wordBreak: "keep-all",
              color: o[900],
              ...S(x)
            },
            children: b(x)
          }, d))
        })]
      }, m.title))
    })]
  });
}
export { W as P };