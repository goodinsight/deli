import { j as r, r as u } from "./react-CjxcGQav.js";
import { B as l, d7 as d, jA as x, cN as f, d4 as m, d1 as b, dq as h } from "../js.d/main-Cm9wS5wt.js";
const c = d;
function j({
  open: o,
  value: s,
  onChange: a,
  placeholder: i
}) {
  const n = u.useRef(null);
  return r.jsx(f, {
    in: o,
    timeout: 180,
    onEntered: () => n.current?.focus(),
    unmountOnExit: !0,
    children: r.jsx(l, {
      sx: {
        px: `${c}px`,
        pt: 1.5,
        pb: .5
      },
      children: r.jsx(m, {
        inputRef: n,
        size: "medium",
        fullWidth: !0,
        placeholder: i,
        value: s,
        onChange: e => a(e.target.value),
        slotProps: {
          input: {
            startAdornment: r.jsx(b, {
              position: "start",
              children: r.jsx(h, {
                sx: {
                  fontSize: 18,
                  color: "#9aa2af"
                }
              })
            })
          }
        },
        sx: {
          "& .MuiOutlinedInput-input": {
            paddingTop: "13px",
            paddingBottom: "13px"
          }
        }
      })
    })
  });
}
function A(o, s, a = 0, i = 400) {
  const n = u.useRef(s);
  u.useEffect(() => {
    n.current = s;
  });
  const e = u.useRef(!1);
  u.useEffect(() => {
    if (!e.current) {
      e.current = !0;
      return;
    }
    const t = o.trim();
    if (t.length > 0 && t.length < a) return;
    const p = setTimeout(() => n.current(t), i);
    return () => clearTimeout(p);
  }, [o, a, i]);
}
function B({
  value: o,
  options: s,
  onChange: a,
  ariaLabel: i,
  above: n
}) {
  return r.jsxs(l, {
    sx: {
      mx: `-${c}px`,
      mt: `-${c}px`,
      mb: `${c}px`,
      bgcolor: "#fff",
      borderBottom: "1px solid #e2e8f0"
    },
    children: [n, r.jsx(l, {
      role: "tablist",
      "aria-label": i,
      sx: {
        display: "flex"
      },
      children: s.map(e => {
        const t = e.value === o;
        return r.jsx(l, {
          component: "button",
          type: "button",
          role: "tab",
          "aria-selected": t,
          onClick: () => a(e.value),
          sx: {
            flex: 1,
            minWidth: 0,
            height: 48,
            cursor: "pointer",
            border: "none",
            borderBottom: "2px solid",
            borderBottomColor: t ? "primary.main" : "transparent",
            mb: "-1px",
            bgcolor: "transparent",
            font: "inherit",
            fontSize: x(15),
            fontWeight: t ? 700 : 500,
            color: t ? "primary.main" : "#64748b",
            whiteSpace: "nowrap"
          },
          children: e.label
        }, e.value);
      })
    })]
  });
}
export { B as E, j as a, A as u };