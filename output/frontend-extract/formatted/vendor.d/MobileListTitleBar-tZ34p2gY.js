import { r as o, j as e } from "./react-CjxcGQav.js";
import { bv as j, B as t, c_ as S, d4 as b, d1 as E, dq as v } from "../js.d/main-Cm9wS5wt.js";
const I = 300;
function R({
  title: r,
  onTitleClick: a,
  action: i,
  searchValue: s,
  onSearchChange: f,
  onSearch: c,
  searchMinLength: u = 0,
  searchPlaceholder: m,
  below: h
}) {
  const p = j(),
    l = o.useRef(c);
  o.useEffect(() => {
    l.current = c;
  });
  const x = o.useRef(!1);
  o.useEffect(() => {
    if (!x.current) {
      x.current = !0;
      return;
    }
    if (!l.current) return;
    const n = s.trim();
    if (n.length > 0 && n.length < u) return;
    const g = setTimeout(() => l.current?.(n), I);
    return () => clearTimeout(g);
  }, [s, u]);
  const d = {
    fontSize: "1.25rem",
    fontWeight: 700,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  };
  return e.jsxs(t, {
    sx: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      p: 2,
      "& .MuiOutlinedInput-input, & .MuiSelect-select.MuiOutlinedInput-input": {
        paddingTop: "13px",
        paddingBottom: "13px"
      }
    },
    children: [(r || i) && e.jsxs(t, {
      sx: {
        display: "flex",
        alignItems: "center",
        gap: 1,
        minWidth: 0
      },
      children: [a ? e.jsxs(t, {
        component: "button",
        type: "button",
        onClick: a,
        "aria-label": p("dashboard.pickSection", {
          title: r
        }),
        sx: {
          display: "inline-flex",
          alignItems: "center",
          gap: .25,
          minWidth: 0,
          p: 0,
          border: "none",
          outline: "none",
          bgcolor: "transparent",
          cursor: "pointer",
          color: "inherit",
          font: "inherit",
          "&:active": {
            color: "primary.main"
          }
        },
        children: [e.jsx(t, {
          component: "span",
          sx: d,
          children: r
        }), e.jsx(S, {
          sx: {
            fontSize: 24,
            color: "text.secondary",
            flexShrink: 0
          }
        })]
      }) : e.jsx(t, {
        component: "span",
        sx: d,
        children: r
      }), i ? e.jsx(t, {
        sx: {
          ml: "auto",
          flexShrink: 0
        },
        children: i
      }) : null]
    }), e.jsx(b, {
      size: "medium",
      fullWidth: !0,
      placeholder: m ?? p("common.search"),
      value: s,
      onChange: n => f(n.target.value),
      slotProps: {
        input: {
          startAdornment: e.jsx(E, {
            position: "start",
            children: e.jsx(v, {
              sx: {
                fontSize: 18,
                color: "#9aa2af"
              }
            })
          })
        }
      }
    }), h]
  });
}
export { R as M };