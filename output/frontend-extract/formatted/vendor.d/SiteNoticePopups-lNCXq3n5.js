import { j as s, r as d } from "./react-CjxcGQav.js";
import { B as i, bv as b, D as j, L as w, bQ as m } from "../js.d/main-Cm9wS5wt.js";
import { s as y, h as v, p as c, a as k } from "./siteNoticeApi-BBEKF3sl.js";
import { S as I } from "./SiteNoticeBody-B0nqE-w_.js";
function B({
  size: t = 22
}) {
  return s.jsxs(i, {
    component: "svg",
    viewBox: "0 0 24 24",
    "aria-hidden": !0,
    sx: {
      width: t,
      height: t,
      flexShrink: 0,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.6,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    },
    children: [s.jsx("rect", {
      x: "2.5",
      y: "3.5",
      width: "19",
      height: "13",
      rx: "2.5"
    }), s.jsx("path", {
      d: "M9 20.5h6M12 16.5v4"
    })]
  });
}
const g = "site-notice-closed";
function S() {
  try {
    return new Set(JSON.parse(window.sessionStorage.getItem(g) ?? "[]"));
  } catch {
    return new Set();
  }
}
function N(t) {
  try {
    window.sessionStorage.setItem(g, JSON.stringify([...S(), t]));
  } catch {}
}
function E({
  place: t
}) {
  const f = b(),
    o = j(),
    [h, x] = d.useState([]);
  d.useEffect(() => {
    let e = !1;
    return y.listPublic(t).then(r => {
      if (e) return;
      const n = v(),
        l = S();
      x(r.filter(a => a.popup && !n.has(c(a)) && !l.has(c(a))));
    }).catch(() => {}), () => {
      e = !0;
    };
  }, [t]);
  const u = d.useMemo(() => h.slice(0, o ? 1 : 2), [h, o]);
  if (u.length === 0) return null;
  const p = (e, r) => {
    r ? k(e) : N(c(e)), x(n => n.filter(l => l.seq !== e.seq));
  };
  return s.jsx(i, {
    role: "presentation",
    sx: {
      position: "fixed",
      inset: 0,
      zIndex: 1600,
      bgcolor: "rgba(15,23,42,0.45)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 3,
      p: 2
    },
    children: u.map(e => s.jsxs(i, {
      role: "dialog",
      "aria-label": e.title,
      sx: {
        width: o ? "100%" : e.kind === "image" ? "auto" : 440,
        maxWidth: o ? 440 : "min(440px, 44vw)",
        maxHeight: "86dvh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#ffffff",
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 8
      },
      children: [s.jsxs(i, {
        sx: {
          flex: 1,
          minHeight: 0,
          overflowY: "auto",
          ...(e.kind === "editor" ? {
            p: 2.5
          } : {})
        },
        children: [e.kind === "editor" ? s.jsx(w, {
          sx: {
            fontSize: 18,
            fontWeight: 700,
            mb: 1.5
          },
          children: e.title
        }) : null, s.jsx(I, {
          notice: e,
          imageMaxHeight: "74dvh"
        })]
      }), s.jsxs(i, {
        sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 1,
          py: .5,
          borderTop: "1px solid #e2e8f0",
          bgcolor: "#f8fafc"
        },
        children: [s.jsx(m, {
          size: "small",
          onClick: () => p(e, !0),
          sx: {
            color: "text.secondary",
            fontSize: 14
          },
          children: f("siteNotice.dontShowAgain")
        }), s.jsx(m, {
          size: "small",
          onClick: () => p(e, !1),
          sx: {
            fontSize: 14,
            fontWeight: 600
          },
          children: f("siteNotice.close")
        })]
      })]
    }, e.seq))
  });
}
export { B as P, E as S };