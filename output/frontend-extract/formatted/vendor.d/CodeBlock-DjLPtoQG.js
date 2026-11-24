import { r as p, j as o } from "./react-CjxcGQav.js";
import { B as r, s as t, bH as d, bI as m, bJ as x } from "../js.d/main-Cm9wS5wt.js";
import { C as f } from "./CheckRounded-q96oOTwH.js";
function g({
  code: i,
  label: n,
  sx: l
}) {
  const [s, a] = p.useState(!1),
    c = async () => {
      try {
        if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(i);else {
          const e = document.createElement("textarea");
          e.value = i, e.style.position = "fixed", e.style.opacity = "0", document.body.appendChild(e), e.select(), document.execCommand("copy"), e.remove();
        }
        a(!0), setTimeout(() => a(!1), 1500);
      } catch {}
    };
  return o.jsxs(r, {
    sx: {
      position: "relative",
      borderRadius: 3,
      bgcolor: t[900],
      ...l
    },
    children: [n ? o.jsx(r, {
      sx: {
        px: {
          xs: 2.5,
          md: 3
        },
        pt: 2,
        color: t[400],
        fontSize: "0.875rem",
        fontWeight: 600
      },
      children: n
    }) : null, o.jsx(d, {
      title: s ? "복사했습니다" : "복사",
      children: o.jsx(m, {
        "aria-label": "코드 복사",
        onClick: () => {
          c();
        },
        size: "small",
        sx: {
          position: "absolute",
          top: 8,
          right: 8,
          color: s ? "#4ade80" : t[400],
          bgcolor: `${t[900]}cc`,
          "&:hover": {
            color: s ? "#4ade80" : "#fff",
            bgcolor: t[800]
          }
        },
        children: s ? o.jsx(f, {
          fontSize: "small"
        }) : o.jsx(x, {
          fontSize: "small"
        })
      })
    }), o.jsx(r, {
      component: "pre",
      sx: {
        m: 0,
        p: {
          xs: 2.5,
          md: 3
        },
        pr: {
          xs: 6,
          md: 7
        },
        pt: n ? 1.5 : {
          xs: 2.5,
          md: 3
        },
        color: t[100],
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, "D2Coding", monospace',
        fontSize: "0.875rem",
        lineHeight: 1.7,
        overflowX: "auto",
        whiteSpace: "pre",
        textAlign: "left"
      },
      children: i
    })]
  });
}
export { g as C };