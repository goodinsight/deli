import { r as u, j as i } from "./react-CjxcGQav.js";
import { P as b } from "./Person-DnoEHesw.js";
import { fm as w, B as L } from "../js.d/main-Cm9wS5wt.js";
const p = new Set(),
  r = new Map(),
  h = new Map(),
  S = 300;
function l(e) {
  return r.get(e) ?? "";
}
function f(e) {
  return /^(blob:|data:)/i.test(e);
}
function D() {
  if (r.size <= S) return;
  const e = r.size - S;
  for (const [t, o] of [...r.entries()].slice(0, e)) o.startsWith("blob:") && URL.revokeObjectURL(o), r.delete(t), p.delete(t);
}
function y(e, t) {
  r.set(e, t), p.add(e), D();
}
async function j(e) {
  if (!e || typeof Image > "u") return;
  const t = new Image();
  if (t.src = e, typeof t.decode == "function") try {
    await t.decode();
    return;
  } catch {}
  await new Promise((o, n) => {
    t.onload = () => o(), t.onerror = () => n(new Error("account avatar decode failed"));
  });
}
async function E(e) {
  if (!e || typeof document > "u" || typeof requestAnimationFrame > "u") return;
  const t = document.createElement("div");
  t.style.cssText = ["position:fixed", "left:-10000px", "top:-10000px", "width:44px", "height:44px", "opacity:0", "pointer-events:none", "overflow:hidden", "z-index:-1"].join(";");
  const o = document.createElement("img");
  o.src = e, o.alt = "", o.style.cssText = "width:44px;height:44px;object-fit:cover;display:block";
  const n = document.createElement("div");
  n.style.cssText = ["width:44px", "height:44px", `background-image:url("${e.replace(/"/g, '\\"')}")`, "background-size:cover", "background-position:center", "background-repeat:no-repeat"].join(";"), t.append(o, n), document.body.appendChild(t), await new Promise(a => {
    requestAnimationFrame(() => requestAnimationFrame(() => a()));
  }), t.remove();
}
function M({
  src: e,
  avatarSx: t,
  iconFontSize: o = 40
}) {
  const [n, a] = u.useState(() => e ? f(e) || p.has(e) : !1),
    [s, c] = u.useState(() => e ? f(e) ? e : l(e) : ""),
    [P, m] = u.useState(!1),
    d = {
      position: "relative",
      overflow: "hidden",
      borderRadius: "15px"
    },
    A = {
      ...d,
      display: "block",
      objectFit: "cover",
      flexShrink: 0,
      maxWidth: "none"
    },
    x = t ? Array.isArray(t) ? [d, ...t] : [d, t] : d,
    C = t ? Array.isArray(t) ? [A, ...t] : [A, t] : A;
  return u.useEffect(() => {
    if (!e) {
      c("");
      return;
    }
    if (f(e)) {
      c(e), a(!0), m(!1);
      return;
    }
    a(p.has(e)), c(l(e)), m(!1);
    let g = !1;
    return k(e).then(I => {
      if (g) return;
      const v = I || l(e);
      c(v), a(!!v);
    }), () => {
      g = !0;
    };
  }, [e]), !e || P ? i.jsx(w, {
    sx: x,
    children: i.jsx(b, {
      sx: {
        fontSize: o
      }
    })
  }) : s && n ? i.jsx(L, {
    component: "img",
    src: s,
    alt: "",
    sx: C
  }) : i.jsxs(w, {
    sx: x,
    children: [i.jsx(b, {
      sx: {
        fontSize: o,
        opacity: 0
      }
    }), i.jsx("img", {
      src: s || e,
      alt: "",
      onLoad: () => {
        s || (y(e, e), c(e)), a(!0);
      },
      onError: () => m(!0),
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        position: "absolute",
        inset: 0,
        opacity: n ? 1 : 0,
        transition: "none"
      }
    })]
  });
}
function T(e) {
  for (const t of e) k(t);
}
function k(e) {
  if (!e || r.has(e)) return Promise.resolve(l(e));
  if (f(e)) return Promise.resolve(e);
  const t = h.get(e);
  if (t) return t;
  const o = fetch(e, {
    credentials: "include"
  }).then(n => {
    if (!n.ok) throw new Error(`account avatar request failed: ${n.status}`);
    return n.blob();
  }).then(n => {
    const a = URL.createObjectURL(n);
    return j(a).then(() => a);
  }).then(n => E(n).then(() => n)).then(n => (y(e, n), n)).catch(() => new Promise(n => {
    const a = new Image();
    a.onload = () => {
      j(e).finally(() => {
        E(e).finally(() => {
          y(e, e), n(e);
        });
      });
    }, a.onerror = () => {
      n("");
    }, a.src = e;
  })).finally(() => {
    h.delete(e);
  });
  return h.set(e, o), o;
}
export { M as A, k as e, T as p };