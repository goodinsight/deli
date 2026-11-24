import { j as e } from "./react-CjxcGQav.js";
import { B as r, s as n, f as i } from "../js.d/main-Cm9wS5wt.js";
function p({
  label: s,
  value: t,
  sx: o
}) {
  return e.jsxs(r, {
    component: "p",
    sx: [{
      m: 0,
      display: "flex",
      alignItems: "center",
      gap: 1,
      fontSize: "0.9375rem",
      color: n[600]
    }, ...(Array.isArray(o) ? o : [o])],
    children: [e.jsx(r, {
      component: "span",
      sx: {
        flexShrink: 0,
        borderRadius: .5,
        bgcolor: n[100],
        px: 1,
        py: .25,
        fontSize: "0.8125rem",
        fontWeight: i.bold,
        color: n[600]
      },
      children: s
    }), e.jsx(r, {
      component: "span",
      sx: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      },
      children: t
    })]
  });
}
export { p as L };