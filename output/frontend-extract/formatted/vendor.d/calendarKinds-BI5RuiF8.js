import { r as o } from "./react-CjxcGQav.js";
import { s as c, t as d } from "./useHolidayNames-CGgpEQbF.js";
import { a as y, s as f } from "./meetingCalendar-_jcQJ1qd.js";
let t = c(new Date());
const r = new Set();
function S(e) {
  return r.add(e), () => r.delete(e);
}
function w() {
  return o.useSyncExternalStore(S, () => t);
}
function C() {
  return t;
}
function E(e) {
  const n = c(e);
  d(n) !== d(t) && (t = n, r.forEach(a => a()));
}
const b = [{
    key: "task",
    labelKey: "calendar.kindTask"
  }, {
    key: "event",
    labelKey: "calendar.kindEvent"
  }, {
    key: "meeting",
    labelKey: "calendar.kindMeeting"
  }, {
    key: "tax",
    labelKey: "calendar.kindTax"
  }, {
    key: "docExpiry",
    labelKey: "calendar.kindDocExpiry"
  }, {
    key: "birthday",
    labelKey: "calendar.kindBirthday"
  }, {
    key: "training",
    labelKey: "calendar.kindTraining"
  }, {
    key: "office",
    labelKey: "calendar.kindOffice"
  }],
  l = "taskham.calendar.hiddenKinds";
let s = new Set(g());
const i = new Set();
function g() {
  try {
    const e = JSON.parse(window.localStorage.getItem(l) ?? "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}
function k(e) {
  return i.add(e), () => i.delete(e);
}
function p(e, n) {
  if (e === "meeting") return f(n);
  const a = new Set(s);
  n ? a.delete(e) : a.add(e), s = a;
  try {
    window.localStorage.setItem(l, JSON.stringify([...a]));
  } catch {}
  i.forEach(u => u());
}
function x() {
  const e = o.useSyncExternalStore(k, () => s),
    n = y();
  return Object.fromEntries(b.map(({
    key: a
  }) => [a, a === "meeting" ? n : !e.has(a)]));
}
export { b as C, x as a, E as b, C as g, p as s, w as u };