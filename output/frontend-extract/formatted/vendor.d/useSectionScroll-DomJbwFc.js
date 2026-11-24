import { u as f, i as c, r as i } from "./react-CjxcGQav.js";
function a(e) {
  let t = e;
  for (; t && t.scrollHeight <= t.clientHeight;) t = t.parentElement;
  return t;
}
function s(e) {
  const t = document.getElementById(e);
  if (!t) return;
  const o = a(t.parentElement);
  if (!o) {
    t.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    return;
  }
  const r = t.getBoundingClientRect().top - o.getBoundingClientRect().top + o.scrollTop;
  o.scrollTo({
    top: r,
    behavior: "smooth"
  });
}
function p() {
  const e = a(document.querySelector("main"));
  e ? e.scrollTo({
    top: 0,
    behavior: "smooth"
  }) : window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
function d(e) {
  const t = f(),
    {
      pathname: o
    } = c();
  return i.useCallback((r, u) => {
    const n = u.split("#")[1];
    if (n) {
      if (e?.(), r.preventDefault(), o !== "/") {
        t("/");
        let m = 0;
        const l = () => {
          document.getElementById(n) ? s(n) : m++ < 180 && requestAnimationFrame(l);
        };
        requestAnimationFrame(l);
        return;
      }
      s(n);
    }
  }, [t, e, o]);
}
function g(e) {
  const {
    pathname: t
  } = c();
  return i.useCallback(o => {
    e?.(), t === "/" && (o.preventDefault(), p());
  }, [e, t]);
}
export { g as a, s, d as u };