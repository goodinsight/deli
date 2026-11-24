import { bT as u } from "../js.d/main-Cm9wS5wt.js";
import { b as d, l as f } from "./i18nLabels-BNTLL7cu.js";
const m = ["annual", "half", "quarter", "sick", "family", "official", "unpaid", "menstrual", "compensatory", "other", "late", "early", "absent", "outside", "trip", "remote"],
  b = f({
    annual: "hr.attendanceKindAnnual",
    half: "hr.attSetDayStatusHalf",
    quarter: "hr.attSetDayStatusQuarter",
    sick: "hr.employeeLeaveSick",
    family: "hr.attendanceKindFamily",
    official: "hr.attendanceKindOfficial",
    unpaid: "hr.attendanceKindUnpaid",
    menstrual: "hr.attendanceKindMenstrual",
    compensatory: "hr.attendanceKindCompensatory",
    other: "hr.attendanceKindOther",
    late: "hr.attSetStatLate",
    early: "hr.attSetStatEarly",
    absent: "hr.attSetDayStatusAbsent",
    outside: "hr.attSetClockMethodOutside",
    trip: "hr.attSetClockMethodTrip",
    remote: "hr.attSetClockMethodRemote"
  }),
  p = {
    half: .5,
    quarter: .25,
    late: 0,
    early: 0
  },
  h = new Set(["late", "early", "absent"]);
function T(t) {
  return h.has(t) ? {
    color: "#b91c1c",
    bg: "#fee2e2"
  } : t === "annual" || t === "half" || t === "quarter" ? {
    color: "#1d4ed8",
    bg: "#dbeafe"
  } : t === "outside" || t === "trip" || t === "remote" ? {
    color: "#7c3aed",
    bg: "#ede9fe"
  } : {
    color: "#475569",
    bg: "#f1f5f9"
  };
}
const D = d([{
  value: "records",
  labelKey: "hr.attendanceViewRecords"
}, {
  value: "annual",
  labelKey: "hr.attendanceViewAnnual"
}]);
function N(t, e) {
  return !e || e === t ? t : `${t} ~ ${e}`;
}
function A(t) {
  return t === null ? "" : t ? u("hr.daysN", {
    count: t
  }) : "";
}
function E(t, e) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(t)) return 0;
  const l = /^\d{4}-\d{2}-\d{2}$/.test(e) && e >= t ? e : t,
    [c, i, s] = t.split("-").map(Number);
  let r = 0;
  for (let a = 0; a < 366; a += 1) {
    const n = new Date(Date.UTC(c, i - 1, s + a));
    if (n.toISOString().slice(0, 10) > l) break;
    const o = n.getUTCDay();
    o !== 0 && o !== 6 && (r += 1);
  }
  return r;
}
export { m as A, p as a, b, D as c, N as d, A as e, T as f, E as w };