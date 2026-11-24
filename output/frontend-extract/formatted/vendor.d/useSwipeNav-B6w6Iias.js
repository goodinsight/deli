import { r as a } from "./react-CjxcGQav.js";
const i = 60,
  h = 80,
  f = 600;
function m(c, o) {
  const s = a.useRef(null),
    r = a.useRef({
      sum: 0,
      until: 0
    });
  return {
    onWheel: n => {
      if (n.shiftKey || Math.abs(n.deltaX) <= Math.abs(n.deltaY)) return;
      const t = Date.now();
      if (t < r.current.until || (r.current.sum += n.deltaX, Math.abs(r.current.sum) < h)) return;
      const e = r.current.sum > 0;
      r.current = {
        sum: 0,
        until: t + f
      }, e ? o() : c();
    },
    onTouchStart: n => {
      const t = n.touches[0];
      s.current = t ? {
        x: t.clientX,
        y: t.clientY
      } : null;
    },
    onTouchEnd: n => {
      const t = s.current,
        e = n.changedTouches[0];
      if (s.current = null, !t || !e) return;
      const u = e.clientX - t.x,
        l = e.clientY - t.y;
      Math.abs(u) < i || Math.abs(u) < Math.abs(l) * 2 || (u < 0 ? o() : c());
    }
  };
}
export { m as u };