import { j as e } from "./react-CjxcGQav.js";
import { bv as u, B as l, cO as x, bI as m, cP as h, bQ as p, d8 as j } from "../js.d/main-Cm9wS5wt.js";
function I({
  form: a,
  disabled: n
}) {
  const r = u(),
    o = a.useFormValue("dates"),
    t = Array.isArray(o) ? o : [],
    i = c => a.setFormValue("dates", t.filter((s, d) => d !== c));
  return e.jsxs(l, {
    sx: {
      display: "flex",
      flexDirection: "column",
      gap: 1.5
    },
    children: [t.map((c, s) => e.jsxs(l, {
      sx: {
        display: "flex",
        alignItems: "center",
        gap: 1
      },
      children: [e.jsx(x, {
        form: a,
        name: `dates.${s}`,
        label: r("hr.myAttNthDay", {
          n: s + 1
        }),
        disabled: n,
        fullWidth: !0,
        slotProps: {
          inputLabel: {
            shrink: !0
          }
        }
      }), e.jsx(m, {
        "aria-label": r("hr.myAttRemoveDay"),
        onClick: () => i(s),
        disabled: n || t.length <= 1,
        children: e.jsx(h, {})
      })]
    }, s)), e.jsx(l, {
      children: e.jsx(p, {
        startIcon: e.jsx(j, {}),
        onClick: () => a.setFormValue("dates", [...t, ""]),
        disabled: n || t.length >= 30,
        children: r("hr.myAttAddDay")
      })
    })]
  });
}
export { I as L };