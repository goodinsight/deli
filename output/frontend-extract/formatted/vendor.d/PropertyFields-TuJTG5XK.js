import { j as e } from "./react-CjxcGQav.js";
import { fZ as o, f_ as a, f$ as r, bv as i, g0 as c, g1 as m, g2 as f } from "../js.d/main-Cm9wS5wt.js";
const x = m;
function d({
  text: s
}) {
  const t = i(),
    n = s ?? t("components.empty");
  return e.jsx(c, {
    text: n
  });
}
const l = o,
  I = r,
  g = a;
function _(s) {
  const t = s.replace(/\D/g, "");
  return t ? /^(02\d{7,8}|\d{10,11}|1\d{7})$/.test(t) ? f(t) : s.trim() : "";
}
export { d as E, x as G, l as I, g as a, I as b, _ as f };