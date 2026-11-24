import { r as d } from "./react-CjxcGQav.js";
import { cz as C, cK as x, e$ as k } from "../js.d/main-Cm9wS5wt.js";
import { t as D } from "./trainingApi-DT4unjOR.js";
const E = 62;
let l = {
    orgSeq: 0,
    hr: !1,
    items: []
  },
  f = 0,
  u = "";
const g = new Set();
function p(t) {
  l = t, g.forEach(n => n());
}
function S(t) {
  return !!t?.use_hr;
}
function q(t, n) {
  const s = `${t}:${n}`;
  if (!t || u === s) return;
  const i = ++f;
  u = s, D.calendar(!n).then(o => {
    i === f && p({
      orgSeq: t,
      hr: n,
      items: o
    });
  }).catch(() => {
    i === f && p({
      orgSeq: t,
      hr: n,
      items: []
    });
  }).finally(() => {
    i === f && (u = "");
  });
}
function y() {
  const t = x();
  t && (u = "", q(t.seq, S(t)));
}
let _ = null;
function O(t) {
  return g.add(t), _ || (_ = k(["hr_training"], () => {
    l.orgSeq && y();
  })), () => g.delete(t);
}
function T(t) {
  const n = new Date(`${t}T00:00:00Z`);
  return n.setUTCDate(n.getUTCDate() + 1), n.toISOString().slice(0, 10);
}
function w() {
  const t = d.useSyncExternalStore(O, () => l, () => l),
    n = C(),
    s = n?.seq ?? 0,
    i = S(n);
  d.useEffect(() => {
    s && (t.orgSeq !== s || t.hr !== i) && q(s, i);
  }, [s, i, t.orgSeq, t.hr]);
  const o = s && t.orgSeq === s && t.hr === i ? t.items : null;
  return d.useMemo(() => {
    const c = new Map();
    if (!o) return c;
    const m = (e, a) => {
      if (!e) return;
      const r = c.get(e);
      r ? r.push(a) : c.set(e, [a]);
    };
    for (const e of o) {
      if (e.start_date) {
        const a = e.end_date && e.end_date >= e.start_date ? e.end_date : e.start_date;
        let r = e.start_date;
        for (let h = 0; h < E && r <= a; h += 1) m(r, {
          trainingSeq: e.seq,
          title: e.name,
          kind: "period"
        }), r = T(r);
      }
      m(e.next_date, {
        trainingSeq: e.seq,
        title: e.name,
        kind: "next"
      });
    }
    for (const e of c.values()) e.sort((a, r) => a.kind === r.kind ? a.title.localeCompare(r.title) : a.kind === "next" ? -1 : 1);
    return c;
  }, [o]);
}
export { S as c, y as i, w as u };