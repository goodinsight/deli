import { ce as o, cf as r, bT as a } from "../js.d/main-Cm9wS5wt.js";
function c(t) {
  return Math.round(t || 0).toLocaleString(o(r()));
}
function i(t) {
  return Math.round(t || 0).toLocaleString(o(r()));
}
function e(t) {
  return `${i(t)} ${a("aiUsage.wonUnit")}`;
}
function s(t) {
  const n = t || 0;
  return `$${n < 1 ? n.toFixed(4) : n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}
export { e as a, s as b, i as c, c as f };