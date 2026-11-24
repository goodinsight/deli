import { j as n } from "./react-CjxcGQav.js";
import { da as g, dc as c } from "../js.d/main-Cm9wS5wt.js";
function m(e) {
  const {
      options: a,
      size: u = "small",
      disabled: i,
      sx: o
    } = e,
    t = e.multiSelect === !0,
    d = !t && e.allowDeselect === !0,
    s = (r, l) => {
      if (t) {
        e.onChange(l ?? []);
        return;
      }
      l === null && !d || e.onChange(l);
    };
  return n.jsx(g, {
    size: u,
    exclusive: !t,
    disabled: i,
    value: e.value,
    onChange: s,
    sx: [{
      border: "1px solid",
      borderColor: "rgba(0, 0, 0, 0.23)",
      overflow: "hidden",
      bgcolor: "#fff",
      "& .MuiToggleButtonGroup-grouped": {
        px: 2.5,
        border: "none",
        borderRadius: 0,
        margin: 0
      },
      "& .MuiToggleButtonGroup-grouped:not(:first-of-type)": {
        borderLeft: "1px solid",
        borderLeftColor: "rgba(0, 0, 0, 0.23)"
      },
      "& .MuiToggleButton-root.Mui-selected": {
        borderLeftColor: "transparent",
        backgroundColor: "primary.main",
        color: "primary.contrastText",
        "&:hover": {
          backgroundColor: "primary.main"
        }
      },
      "& .Mui-selected + .MuiToggleButton-root": {
        borderLeftColor: "transparent"
      }
    }, ...(Array.isArray(o) ? o : o ? [o] : [])],
    children: a.map(r => n.jsx(c, {
      value: r.value,
      disabled: r.disabled,
      children: r.label
    }, String(r.value)))
  });
}
export { m as O };