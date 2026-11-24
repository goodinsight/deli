import { r as a } from "./react-CjxcGQav.js";
import { bM as f } from "../js.d/main-Cm9wS5wt.js";
import { m as w } from "./meetingsApi-CCkjq69B.js";
const p = "meetings.pending.changed",
  u = 180 * 1e3;
let n = {
  loaded: !1,
  items: [],
  fetchedAt: 0
};
const c = new Set();
let s = null;
const l = e => JSON.stringify(e.map(({
  session: t,
  parts: i,
  size: o,
  seconds: r,
  updated_at: h
}) => [t, i, o, r, h]));
function d(e) {
  const t = n.loaded && l(n.items) === l(e);
  n = {
    loaded: !0,
    items: e,
    fetchedAt: Date.now()
  }, t || c.forEach(i => i());
}
function E() {
  return s || (s = w.recordingPending().then(d).catch(() => {
    n.loaded || d([]);
  }).finally(() => {
    s = null;
  }), s);
}
function b(e) {
  if (!e || typeof e != "object") return !1;
  const t = e;
  return Array.isArray(t.items) ? (d(t.items), !0) : !1;
}
function y(e) {
  n.items.some(t => t.session === e) && (n = {
    ...n,
    items: n.items.filter(t => t.session !== e)
  }, c.forEach(t => t()));
}
let m = !1;
function A() {
  m || typeof window > "u" || (m = !0, f.addRealtimeEventListener(p, () => {
    E();
  }), f.connectRealtime?.().catch(() => {}));
}
const g = (e, t, i) => (e.age_ms ?? u) + (i - t) >= u;
function D() {
  const e = a.useSyncExternalStore(r => (c.add(r), () => c.delete(r)), () => n, () => n),
    [t, i] = a.useState(() => Date.now()),
    o = e.items.some(r => !g(r, e.fetchedAt, t));
  return a.useEffect(() => {
    A(), !n.loaded && !s && E();
  }, []), a.useEffect(() => {
    if (!o) return;
    const r = window.setInterval(() => i(Date.now()), 3e4);
    return () => window.clearInterval(r);
  }, [o]), e.items.filter(r => g(r, e.fetchedAt, t));
}
export { y as a, E as r, b as s, D as u };