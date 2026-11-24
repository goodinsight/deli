import { bT as e } from "../js.d/main-Cm9wS5wt.js";
import { h as n } from "./types-CVhETUvu.js";
function o(r) {
  return r > 0 ? `D-${r}` : r === 0 ? e("hr.myAttToday") : e("hr.recordDaysOverdue", {
    count: -r
  });
}
function d(r, t = 30) {
  return r < 0 ? "#dc2626" : r <= t ? "#d97706" : "text.secondary";
}
function f(r) {
  if (!r) return "";
  const t = [r.major, r.degree ? n(r.degree) : ""].filter(Boolean).join(" "),
    u = r.status && r.status !== "졸업" ? `(${n(r.status)})` : "";
  return [r.title, t].filter(Boolean).join(" · ") + u;
}
export { d as a, o as d, f as l };