import { jY as c } from "../js.d/main-Cm9wS5wt.js";
const p = "approval",
  u = "activeFormTypes",
  l = "formListVisibility";
function g() {
  return Object.keys(c);
}
function A(t) {
  const e = ((t ?? {})[p] ?? {})[u];
  if (!Array.isArray(e)) return null;
  const n = e.filter(s => typeof s == "string" && s in c);
  return n.length > 0 ? n : null;
}
function _(t) {
  const e = ((t ?? {})[p] ?? {})[l];
  if (!e || typeof e != "object" || Array.isArray(e)) return {};
  const n = {};
  for (const [s, i] of Object.entries(e)) typeof i == "boolean" && (n[s] = i);
  return n;
}
function v(t, r) {
  return !c[r]?.hidden;
}
const m = "전자결재";
function a(t) {
  return typeof t == "string" ? t.replace(/\s+/g, "") : "";
}
function b(t) {
  const r = new Map(),
    o = Array.isArray(t) ? t : [],
    e = new Set(o.filter(n => a(n?.name) === m).map(n => Number(n?.seq ?? 0)));
  if (e.size === 0) return r;
  for (const n of o) {
    const s = Number(n?.parent_seq ?? 0);
    if (!e.has(s)) continue;
    const i = String(n?.name ?? "").trim(),
      f = a(i);
    f && r.set(f, i);
  }
  return r;
}
function F(t, r, o) {
  return r || t.get(a(o));
}
export { g as a, b, _ as c, A as g, v as i, F as r };