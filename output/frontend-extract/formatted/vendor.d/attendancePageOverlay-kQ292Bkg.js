import { r as s } from "./react-CjxcGQav.js";
import { l as n } from "./i18nLabels-BNTLL7cu.js";
const c = n({
    status: "hr.attPageStatus",
    records: "hr.attPageRecords",
    leave: "hr.attPageLeave",
    summary: "hr.attPageSummary",
    report: "hr.attPageReport",
    schedule: "hr.attPageSchedule"
  }),
  h = {
    "/dashboard/hr/attendance/status": "status",
    "/dashboard/hr/attendance": "records",
    "/dashboard/hr/attendance/leave": "leave",
    "/dashboard/hr/attendance/summary": "summary",
    "/dashboard/hr/attendance/report": "report",
    "/dashboard/hr/attendance/schedule": "schedule"
  };
let a = null;
const t = new Set();
function u(e) {
  a = {
    key: e,
    n: (a?.n ?? 0) + 1
  };
  for (const r of t) r();
}
function l() {
  return s.useSyncExternalStore(e => (t.add(e), () => t.delete(e)), () => a);
}
export { c as A, h as a, u as o, l as u };