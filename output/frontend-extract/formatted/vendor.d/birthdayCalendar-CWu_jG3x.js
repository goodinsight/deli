import { r as a } from "./react-CjxcGQav.js";
import { cz as E, e$ as S, cK as M } from "../js.d/main-Cm9wS5wt.js";
import { e as O } from "./employeeApi-CdGzOYcj.js";
import { c as q } from "./trainingCalendar-BpMTSUwd.js";
const d = [];
let u = {
    orgSeq: 0,
    items: []
  },
  f = 0,
  l = 0;
const h = new Set();
function y(e) {
  u = e, h.forEach(s => s());
}
function C(e) {
  if (!e || l === e) return;
  const s = ++f;
  l = e, O.birthdays().then(p => {
    s === f && y({
      orgSeq: e,
      items: p
    });
  }).catch(() => {
    s === f && y({
      orgSeq: e,
      items: []
    });
  }).finally(() => {
    s === f && (l = 0);
  });
}
function k() {
  const e = M();
  !e || !q(e) || (l = 0, C(e.seq));
}
let b = null;
function v(e) {
  return h.add(e), b || (b = S(["employee"], () => {
    u.orgSeq && k();
  })), () => h.delete(e);
}
function x(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function Y() {
  const e = a.useSyncExternalStore(v, () => u, () => u),
    s = E(),
    i = q(s) ? s?.seq ?? 0 : 0;
  a.useEffect(() => {
    i && e.orgSeq !== i && C(i);
  }, [i, e.orgSeq]);
  const m = i && e.orgSeq === i ? e.items : null,
    c = a.useMemo(() => {
      const t = new Map();
      if (!m) return t;
      for (const n of m) {
        const r = n.birth_date.slice(5, 10),
          o = {
            employeeSeq: n.seq,
            name: n.name
          },
          g = t.get(r);
        g ? g.push(o) : t.set(r, [o]);
      }
      for (const n of t.values()) n.sort((r, o) => r.name.localeCompare(o.name));
      return t;
    }, [m]);
  return a.useCallback(t => {
    if (c.size === 0 || t.length < 10) return d;
    const n = t.slice(5, 10),
      r = c.get(n) ?? d;
    if (n !== "02-28" || x(Number(t.slice(0, 4)))) return r;
    const o = c.get("02-29");
    return o ? [...r, ...o] : r;
  }, [c]);
}
export { k as i, Y as u };