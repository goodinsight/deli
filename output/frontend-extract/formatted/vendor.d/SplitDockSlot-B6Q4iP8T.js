import { r as n, j as a } from "./react-CjxcGQav.js";
import { B as f } from "../js.d/main-Cm9wS5wt.js";
function m() {
  const r = document.querySelectorAll("body > .MuiModal-root:not(.MuiModal-hidden)");
  return !!r[r.length - 1]?.querySelector("[data-split-dock]");
}
function x({
  onEscape: r
}) {
  const i = n.useRef(r);
  i.current = r, n.useEffect(() => {
    const o = t => {
      t.key === "Escape" && !t.defaultPrevented && m() && i.current?.();
    };
    return window.addEventListener("keydown", o), () => window.removeEventListener("keydown", o);
  }, []);
  const l = n.useRef(null);
  return n.useLayoutEffect(() => {
    const o = l.current;
    if (!o) return;
    const t = document.documentElement,
      s = o.closest(".MuiPaper-root");
    let c = "",
      d = 0;
    const p = () => {
      const e = (s ?? o).getBoundingClientRect(),
        u = `${e.left}|${e.top}|${e.width}|${e.height}`;
      u !== c && (c = u, t.style.setProperty("--split-dock-left", `${e.left}px`), t.style.setProperty("--split-dock-top", `${e.top}px`), t.style.setProperty("--split-dock-width", `${e.width}px`), t.style.setProperty("--split-dock-height", `${e.height}px`), t.style.setProperty("--split-dock-radius", s ? getComputedStyle(s).borderRadius : "0px")), d = requestAnimationFrame(p);
    };
    return p(), () => cancelAnimationFrame(d);
  }, []), a.jsx(f, {
    ref: l,
    sx: {
      width: "100%",
      height: "100%"
    }
  });
}
export { x as S };