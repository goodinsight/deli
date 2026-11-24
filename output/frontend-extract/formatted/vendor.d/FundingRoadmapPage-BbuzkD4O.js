import { j as o } from "./react-CjxcGQav.js";
import { a as t, R as i } from "./fundingRoadmap-CsjVqAn9.js";
import { B as e, s, f as p } from "../js.d/main-Cm9wS5wt.js";
import "./stylis-DdLD6a3t.js";
function m() {
  return o.jsxs(e, {
    sx: {
      px: 2,
      py: 2
    },
    children: [o.jsx(e, {
      component: "p",
      sx: {
        fontSize: "0.9375rem",
        color: s[500]
      },
      children: "지원 유형별로 어느 층위(중앙정부·광역지자체·기초지자체)에서 자금을 찾을 수 있는지 정리한 표입니다."
    }), o.jsx(e, {
      component: "ul",
      sx: {
        listStyle: "none",
        mt: 2,
        "& > * + *": {
          mt: 1.5
        }
      },
      children: t.map(r => o.jsxs(e, {
        component: "li",
        sx: {
          borderRadius: "12px",
          border: `1px solid ${s[200]}`
        },
        children: [o.jsx(e, {
          component: "p",
          sx: {
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
            bgcolor: "#dff0d8",
            px: 1.75,
            py: 1,
            fontSize: "1.0625rem",
            fontWeight: p.bold
          },
          children: r.label
        }), o.jsx(e, {
          component: "dl",
          sx: {
            "& > * + *": {
              borderTop: `1px solid ${s[100]}`
            }
          },
          children: i.map(n => o.jsxs(e, {
            sx: {
              display: "flex",
              alignItems: "flex-start",
              gap: 1.5,
              px: 1.75,
              py: 1.25
            },
            children: [o.jsx(e, {
              component: "dt",
              sx: {
                width: 96,
                flexShrink: 0,
                fontSize: "0.9375rem",
                color: s[500]
              },
              children: n.label
            }), o.jsx(e, {
              component: "dd",
              sx: {
                minWidth: 0,
                flex: "1 1 0%",
                fontSize: "0.9375rem",
                color: s[400]
              },
              children: "-"
            })]
          }, n.key))
        })]
      }, r.key))
    })]
  });
}
export { m as default };