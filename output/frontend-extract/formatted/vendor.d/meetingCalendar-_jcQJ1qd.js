import { r as o } from "./react-CjxcGQav.js";
import { m as p } from "./meetingsApi-CCkjq69B.js";
const g = "taskham-calendar-show-meetings";
function w() {
  try {
    return window.localStorage.getItem(g) !== "0";
  } catch {
    return !0;
  }
}
let h = w(),
  r = null,
  l = 0,
  c = null;
const u = new Set(),
  m = () => u.forEach(e => e()),
  f = e => (u.add(e), () => u.delete(e));
function C(e) {
  h = e;
  try {
    window.localStorage.setItem(g, e ? "1" : "0");
  } catch {}
  m();
}
const S = () => o.useSyncExternalStore(f, () => h);
function M(e, s) {
  r = {
    orgSeq: e,
    items: s
  }, m();
}
function _(e) {
  const s = S(),
    a = o.useSyncExternalStore(f, () => r && r.orgSeq === e ? r.items : null);
  return o.useEffect(() => {
    !s || !e || a || l === e || (l = e, p.list().then(n => M(e, n.items)).catch(() => {}).finally(() => {
      l = 0;
    }));
  }, [s, e, a]), o.useMemo(() => {
    const n = new Map();
    if (!s) return n;
    for (const t of a ?? []) {
      if (!t.meeting_date) continue;
      const i = n.get(t.meeting_date) ?? [];
      i.push({
        seq: t.seq,
        title: t.title,
        time: t.meeting_time
      }), n.set(t.meeting_date, i);
    }
    for (const t of n.values()) t.sort((i, d) => i.time.localeCompare(d.time) || i.seq - d.seq);
    return n;
  }, [s, a]);
}
function b(e) {
  c = {
    seq: e,
    id: (c?.id ?? 0) + 1
  }, m();
}
const v = () => o.useSyncExternalStore(f, () => c);
export { S as a, _ as b, b as o, M as p, C as s, v as u };