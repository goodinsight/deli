import { bT as a } from "../js.d/main-Cm9wS5wt.js";
function c(e) {
  const r = {};
  for (const t of Object.keys(e)) Object.defineProperty(r, t, {
    enumerable: !0,
    get: () => e[t] ? a(e[t]) : ""
  });
  return r;
}
function y(e) {
  const r = new Array(e.length);
  return e.forEach((t, n) => Object.defineProperty(r, n, {
    enumerable: !0,
    get: () => a(t)
  })), r;
}
const o = ["hr.weekdaySun", "hr.weekdayMon", "hr.weekdayTue", "hr.weekdayWed", "hr.weekdayThu", "hr.weekdayFri", "hr.weekdaySat"],
  d = e => a(o[(e % 7 + 7) % 7]);
function h(e) {
  return e.map(({
    value: r,
    labelKey: t
  }) => ({
    value: r,
    get label() {
      return a(t);
    }
  }));
}
export { y as a, h as b, c as l, d as w };