import { j as n } from "./react-CjxcGQav.js";
import { bv as m, B as t, s as r, f as d, as as a, b as c } from "../js.d/main-Cm9wS5wt.js";
function b({
  deadline: i
}) {
  const e = m(),
    o = Math.ceil((new Date(i).getTime() - Date.now()) / (1e3 * 60 * 60 * 24)),
    s = {
      flexShrink: 0,
      borderRadius: .5,
      px: 1,
      py: .5,
      fontSize: {
        xs: "1rem",
        md: "0.875rem"
      },
      fontWeight: d.bold
    };
  if (o < 0) return n.jsx(t, {
    component: "span",
    sx: {
      ...s,
      bgcolor: r[100],
      color: r[500]
    },
    children: e("components.closed")
  });
  const l = o <= 7;
  return n.jsx(t, {
    component: "span",
    sx: {
      ...s,
      ...(l ? {
        bgcolor: a.red50,
        color: a.red600
      } : {
        bgcolor: c[50],
        color: c[700]
      })
    },
    children: o === 0 ? e("components.today") : `D-${o}`
  });
}
export { b as D };