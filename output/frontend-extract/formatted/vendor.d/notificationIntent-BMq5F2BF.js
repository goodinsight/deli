import { r as s } from "./react-CjxcGQav.js";
const l = 5 * 6e4,
  u = "codeshop.notificationIntent",
  c = new Set();
function d() {
  try {
    const e = window.localStorage.getItem(u);
    if (!e) return null;
    const t = JSON.parse(e),
      n = Number(t?.seq ?? 0),
      r = Number(t?.setAt ?? 0);
    return !t?.typeId || !Number.isInteger(n) || n <= 0 || !r ? null : {
      typeId: t.typeId,
      seq: n,
      setAt: r
    };
  } catch {
    return null;
  }
}
function f() {
  try {
    window.localStorage.removeItem(u);
  } catch {}
}
function y(e) {
  try {
    const t = {
      ...e,
      setAt: Date.now()
    };
    window.localStorage.setItem(u, JSON.stringify(t));
  } catch {}
  c.forEach(t => t());
}
function I(e) {
  const t = d();
  return t ? Date.now() - t.setAt > l ? (f(), null) : e.includes(t.typeId) ? {
    typeId: t.typeId,
    seq: t.seq
  } : null : null;
}
function N(e, t, n) {
  const r = s.useRef(t);
  r.current = t;
  const i = s.useRef(e);
  i.current = e, s.useEffect(() => {
    const o = () => {
      const a = I(i.current);
      a && r.current(a) && f();
    };
    return o(), c.add(o), () => {
      c.delete(o);
    };
  }, n);
}
export { y as s, N as u };