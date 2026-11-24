import { j as r } from "./react-CjxcGQav.js";
import { bv as c, B as o, bQ as x, cP as m } from "../js.d/main-Cm9wS5wt.js";
function p({
  children: t,
  onRemove: e,
  removeLabel: i,
  removeAriaLabel: a,
  disabled: l,
  sx: s
}) {
  const n = c(),
    d = i ?? n("common.delete");
  return r.jsxs(o, {
    sx: [{
      p: 2,
      pb: e ? 1 : 2,
      border: 1,
      borderColor: "divider",
      borderRadius: 1.5,
      minWidth: 0
    }, ...(Array.isArray(s) ? s : [s])],
    children: [r.jsx(o, {
      sx: {
        minWidth: 0
      },
      children: t
    }), e && r.jsx(o, {
      sx: {
        display: "flex",
        justifyContent: "flex-end",
        mt: 1
      },
      children: r.jsx(x, {
        color: "error",
        size: "small",
        startIcon: r.jsx(m, {}),
        onClick: e,
        disabled: l,
        "aria-label": a,
        children: d
      })
    })]
  });
}
export { p as R };