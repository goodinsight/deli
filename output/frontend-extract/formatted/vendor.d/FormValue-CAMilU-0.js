import { r as o, j as b } from "./react-CjxcGQav.js";
function x({
  form: e,
  name: t,
  children: r
}) {
  const s = e.useFormValue(t);
  return b.jsx(b.Fragment, {
    children: r(s)
  });
}
function R(e, t) {
  if (Object.is(e, t)) return !0;
  if (!e || !t || typeof e != "object" || typeof t != "object") return !1;
  const r = Object.keys(e),
    s = Object.keys(t);
  return r.length !== s.length ? !1 : r.every(n => Object.is(e[n], t[n]));
}
function h(e, t, r, s = Object.is) {
  const n = o.useRef(r);
  n.current = r;
  const a = o.useRef(s);
  a.current = s;
  const f = o.useRef(null),
    i = t.join(`
`),
    j = e._store,
    m = o.useCallback(u => {
      const c = i.split(`
`).map(l => j.subscribe(l, u));
      return () => c.forEach(l => l());
    }, [j, i]),
    p = () => {
      const u = n.current(),
        c = f.current;
      return c && a.current(c.value, u) ? c.value : (f.current = {
        value: u
      }, u);
    };
  return o.useSyncExternalStore(m, p, p);
}
export { x as F, R as s, h as u };