import { bT as r } from "../js.d/main-Cm9wS5wt.js";
import { l as e } from "./i18nLabels-BNTLL7cu.js";
const s = ["pension", "health", "employment", "accident"],
  c = e({
    pension: "hr.insurancePension",
    health: "hr.insuranceHealth",
    employment: "hr.insuranceEmployment",
    accident: "hr.insuranceAccident"
  }),
  o = e({
    pension: "hr.insuranceShortPension",
    health: "hr.insuranceShortHealth",
    employment: "hr.insuranceShortEmployment",
    accident: "hr.insuranceShortAccident"
  }),
  i = e({
    acquire: "hr.insuranceAcquire",
    lose: "hr.insuranceLose"
  }),
  u = "tab";
function h(n) {
  return n === "tasks" ? "tasks" : "status";
}
function l(n) {
  return n > 0 ? `D-${n}` : n === 0 ? r("hr.insuranceDueToday") : r("hr.recordDaysOverdue", {
    count: -n
  });
}
function m(n) {
  return n < 0 ? "#dc2626" : n <= 3 ? "#d97706" : "text.secondary";
}
export { s as I, i as T, c as a, u as b, o as c, l as d, m as e, h as p };