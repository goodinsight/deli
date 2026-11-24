import { j as o } from "./react-CjxcGQav.js";
var D = {
  sm: {
    height: 18,
    fontSize: 11,
    paddingX: 6,
    minWidth: 18
  },
  md: {
    height: 24,
    fontSize: 12,
    paddingX: 8,
    minWidth: 24
  },
  lg: {
    height: 32,
    fontSize: 13,
    paddingX: 12,
    minWidth: 32
  }
};
function N(e, t) {
  return e === "pill" ? t : e === "rounded" ? 6 : 0;
}
function X({
  label: e,
  children: t,
  shape: l = "pill",
  variant: a = "filled",
  size: S = "sm",
  color: d,
  background: y,
  borderColor: C,
  weight: z = 700,
  radius: k,
  onDelete: s,
  deleteLabel: j = "삭제",
  selected: f = !1,
  onClick: h,
  disabled: c = !1,
  title: p,
  "aria-label": g,
  className: u,
  style: w
}) {
  let i = D[S],
    r = y ?? "currentColor",
    b = f ? "filled" : a,
    W = b === "filled" ? {
      backgroundColor: r,
      color: d ?? "#fff",
      border: "1px solid transparent"
    } : b === "soft" ? {
      backgroundColor: r,
      color: d ?? "inherit",
      border: "1px solid transparent"
    } : {
      backgroundColor: "transparent",
      color: d ?? r,
      border: `1px solid ${C ?? r}`
    },
    m = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      height: i.height,
      minWidth: i.minWidth,
      padding: `0 ${i.paddingX}px`,
      borderRadius: k ?? N(l, i.height),
      fontSize: i.fontSize,
      fontWeight: z,
      lineHeight: 1,
      whiteSpace: "nowrap",
      ...W,
      ...(h ? {
        cursor: c ? "default" : "pointer"
      } : {}),
      ...w
    },
    x = o.jsxs(o.Fragment, {
      children: [e ?? t, s && o.jsx("span", {
        role: "button",
        "aria-label": j,
        tabIndex: 0,
        onClick: n => {
          n.stopPropagation(), s();
        },
        onKeyDown: n => {
          n.key !== "Enter" && n.key !== " " || (n.preventDefault(), n.stopPropagation(), s());
        },
        style: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 4,
          marginRight: -Math.round(i.paddingX / 2),
          width: i.fontSize + 4,
          height: i.fontSize + 4,
          borderRadius: "50%",
          cursor: "pointer",
          opacity: .6,
          fontSize: i.fontSize,
          lineHeight: 1
        },
        children: "×"
      })]
    });
  return h ? o.jsx("button", {
    type: "button",
    className: u,
    style: m,
    onClick: c ? void 0 : h,
    disabled: c,
    "aria-pressed": f,
    "aria-label": g,
    title: p,
    children: x
  }) : o.jsx("span", {
    className: u,
    style: m,
    "aria-label": g,
    title: p,
    children: x
  });
}
function I({
  count: e,
  max: t = 99,
  showZero: l = !1,
  ...a
}) {
  return !Number.isFinite(e) || e <= 0 && !l ? null : o.jsx(X, {
    ...a,
    label: e > t ? `${t}+` : String(e)
  });
}
export { I, X as f };