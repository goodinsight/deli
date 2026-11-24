import { r as m, j as r } from "./react-CjxcGQav.js";
import { bv as g, B as d, ns as b, nt as v, nu as C } from "../js.d/main-Cm9wS5wt.js";
let f = null;
const u = new Set();
function p(e) {
  f = e, u.forEach(t => t());
}
function S(e) {
  return u.add(e), () => u.delete(e);
}
function j(e) {
  const t = m.useSyncExternalStore(S, () => f);
  return t && t.id === e ? t : null;
}
function B(e, t) {
  const o = t.currentTarget.querySelector("[data-head-menu]");
  return o ? (o.click(), !0) : !1;
}
function w({
  label: e,
  value: t,
  options: o,
  onChange: h
}) {
  const c = m.useId(),
    i = g(),
    s = j(c),
    a = t ? o.find(n => n.value === t) : void 0;
  return r.jsxs(r.Fragment, {
    children: [r.jsxs(d, {
      component: "button",
      type: "button",
      "aria-haspopup": "menu",
      "data-head-menu": "",
      "aria-expanded": !!s,
      "aria-label": a ? i("dashboard.filterColumnPicked", {
        label: e,
        picked: a.label
      }) : i("dashboard.filterColumn", {
        label: e
      }),
      onClick: n => {
        n.stopPropagation();
        const l = n.currentTarget.closest("th") ?? n.currentTarget;
        p({
          id: c,
          ...v(l, n.currentTarget.getBoundingClientRect().left)
        });
      },
      sx: {
        display: "inline-flex",
        alignItems: "center",
        gap: .5,
        maxWidth: "100%",
        p: 0,
        border: "none",
        background: "none",
        cursor: "pointer",
        font: "inherit",
        color: a ? "primary.main" : "inherit",
        fontWeight: a ? 600 : "inherit",
        "&:hover": {
          color: "primary.main"
        }
      },
      children: [r.jsx(d, {
        component: "span",
        sx: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        },
        children: a ? a.label : e
      }), r.jsx(b, {
        active: !!a
      })]
    }), r.jsx(C, {
      open: !!s,
      anchorPosition: s,
      onClose: () => p(null),
      filter: {
        options: o.map(n => ({
          value: String(n.value),
          label: n.label
        })),
        value: a ? [String(a.value)] : [],
        multiple: !1,
        allLabel: i("dashboard.all"),
        onChange: n => {
          const l = o.find(x => String(x.value) === n[0]);
          h(l ? l.value : null);
        }
      }
    })]
  });
}
export { w as H, B as o, p as s, j as u };