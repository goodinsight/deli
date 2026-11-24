import { j as t } from "./react-CjxcGQav.js";
import { B as a, as as o, b as r, f as n, d as s } from "../js.d/main-Cm9wS5wt.js";
const i = {
  정책: o.blue700,
  투자: o.violet700,
  스타트업: o.emerald700,
  창업생태계: r[700],
  인터뷰: o.rose700,
  교육: o.amber700
};
function m({
  category: e
}) {
  return t.jsx(a, {
    component: "span",
    sx: {
      alignSelf: "flex-start",
      fontSize: {
        xs: s.sm,
        md: s.xs
      },
      fontWeight: n.bold,
      color: i[e]
    },
    children: e
  });
}
export { m as C };