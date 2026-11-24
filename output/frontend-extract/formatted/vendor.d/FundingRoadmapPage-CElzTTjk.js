import { j as e } from "./react-CjxcGQav.js";
import { bv as c, nf as p, B as r, L as l, jo as f, jp as h, jq as t, jr as i, js as m } from "../js.d/main-Cm9wS5wt.js";
import { R as a, a as j } from "./fundingRoadmap-CsjVqAn9.js";
import "./stylis-DdLD6a3t.js";
const n = {
    border: "1px solid",
    borderColor: "divider",
    bgcolor: "#dff0d8",
    fontSize: 15,
    fontWeight: 700,
    textAlign: "center",
    color: "text.primary",
    py: 1.25
  },
  d = {
    border: "1px solid",
    borderColor: "divider",
    fontSize: 15,
    py: 1.25
  };
function R() {
  const o = c();
  return e.jsx(p, {
    children: e.jsxs(r, {
      sx: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        minHeight: 520,
        p: 3
      },
      children: [e.jsx(l, {
        sx: {
          fontSize: 18,
          fontWeight: 500
        },
        children: o("fundingRoadmap.title")
      }), e.jsx(l, {
        sx: {
          mt: .5,
          mb: 2,
          fontSize: 15,
          color: "text.secondary"
        },
        children: o("fundingRoadmap.description")
      }), e.jsx(r, {
        sx: {
          flex: 1,
          minHeight: 0,
          overflowX: "auto"
        },
        children: e.jsxs(f, {
          size: "small",
          sx: {
            minWidth: 720,
            height: "100%",
            borderCollapse: "collapse",
            tableLayout: "fixed"
          },
          children: [e.jsx(h, {
            children: e.jsxs(t, {
              children: [e.jsx(i, {
                sx: {
                  ...n,
                  width: 200
                },
                children: o("fundingRoadmap.category")
              }), a.map(s => e.jsx(i, {
                sx: n,
                children: o(s.labelKey)
              }, s.key))]
            })
          }), e.jsx(m, {
            children: j.map(s => e.jsxs(t, {
              children: [e.jsx(i, {
                sx: {
                  ...d,
                  textAlign: "center",
                  fontWeight: 500
                },
                children: o(s.labelKey)
              }), a.map(x => e.jsx(i, {
                sx: d
              }, x.key))]
            }, s.key))
          })]
        })
      })]
    })
  });
}
export { R as default };