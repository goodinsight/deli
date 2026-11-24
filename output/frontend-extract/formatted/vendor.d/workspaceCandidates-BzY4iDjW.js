import { r as b } from "./react-CjxcGQav.js";
import { g6 as d, d3 as p } from "../js.d/main-Cm9wS5wt.js";
function w(r, o) {
  const c = d(),
    {
      items: t
    } = p(),
    n = Number(o ?? 0) > 0 ? Number(o) : c;
  return b.useMemo(() => {
    if (!(n > 0)) return;
    const s = t.find(e => e.seq === n);
    if (!s) return;
    const m = s.members ?? [],
      u = m.map(e => Number(e.account_seq ?? 0)).filter(e => e > 0);
    if (!u.includes(Number(s.owner_account_seq ?? 0)) && Number(s.owner_account_seq ?? 0) > 0 && u.push(Number(s.owner_account_seq)), u.length === 0) return;
    const l = new Map(r.filter(e => Number(e.account_seq ?? 0) > 0).map(e => [Number(e.account_seq), e])),
      a = u.map(e => {
        const i = l.get(e);
        if (i) return i;
        const N = m.find(_ => Number(_.account_seq ?? 0) === e),
          f = String(N?.name ?? "").trim();
        return f ? {
          seq: e,
          account_seq: e,
          name: f
        } : null;
      }).filter(e => !!e);
    return a.length > 0 ? a : void 0;
  }, [r, t, n]);
}
function M(r) {
  const o = d(),
    {
      items: c
    } = p(),
    t = Number(r ?? 0) > 0 ? Number(r) : o;
  return b.useMemo(() => t > 0 ? c.find(n => n.seq === t)?.name ?? "" : "", [c, t]);
}
export { M as a, w as u };