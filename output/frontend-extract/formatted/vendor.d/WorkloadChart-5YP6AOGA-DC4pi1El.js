import { rQ as z, s6 as L, s7 as M, s8 as P, pO as r, s9 as f, sa as R, B as i, rZ as C, rR as F, rY as T, rS as y, rT as K, s1 as O, rU as q, s5 as w, s0 as B, rX as I } from "../js.d/main-Cm9wS5wt.js";
import { r as D, j as a } from "./react-CjxcGQav.js";
import { R as W, C as X, X as Y, Y as E, T as G } from "./CartesianChart-Cxj4zTfW.js";
import { B as V, a as j, C as $ } from "./BarChart-3N7r9fM3.js";
import { L as N } from "./Legend-BrMJEoy4.js";
import { R as _ } from "./ReferenceLine-C5Het1wy.js";
import "./stylis-DdLD6a3t.js";
import "./d3-BkRUnfR7.js";
import "./reselect-DokMjEPX.js";
import "./tiny-invariant-CopsF_GD.js";
import "./ErrorBarContext-D-uFP9dS.js";
import "./graphicalItemSelectors-DFj0YMxL.js";
var l = "#e5484d";
function la({
  tasks: g,
  todayStr: v,
  soonDays: h = 7,
  overloadThreshold: S = 0,
  capacity: s = M,
  height: c = 200,
  headerLeft: p,
  selectedAccountSeq: u = 0,
  onSelectPerson: x
}) {
  z();
  let o = D.useMemo(() => L(g, {
      todayStr: v,
      soonDays: h,
      capacity: s
    }), [g, v, h, s]),
    n = D.useMemo(() => P(o), [o]),
    k = S > 0 ? S : Math.max(3, Math.ceil(n * 1.5)),
    d = s.default_capacity > 0 || Object.keys(s.by_account).length > 0,
    b = s.basis === "points" ? "SP" : r("chart.unitCount"),
    A = o.filter(t => t.accountSeq > 0 && (d ? f(t) : R(t, k))).length;
  return o.length === 0 ? a.jsxs(i, {
    sx: T(c),
    children: [p ? a.jsx(i, {
      sx: C,
      children: p
    }) : null, a.jsx(F, {
      text: r("chart.noAssignedOpen"),
      height: c
    })]
  }) : a.jsxs(i, {
    sx: T(c),
    children: [a.jsxs(i, {
      sx: C,
      children: [p, a.jsxs(i, {
        sx: {
          fontSize: 13.5,
          color: "#37352f"
        },
        children: [y("chart.perPersonAverage", {
          value: a.jsx("b", {
            children: n.toFixed(1)
          })
        }), " ", d ? a.jsx(a.Fragment, {
          children: y("chart.capacityValue", {
            value: a.jsx("b", {
              children: s.default_capacity || r("chart.perPerson")
            })
          }, {
            unit: s.default_capacity ? b : ""
          })
        }) : a.jsx(a.Fragment, {
          children: y("chart.overloadThreshold", {
            value: a.jsx("b", {
              children: k
            })
          })
        }), A > 0 ? a.jsx(i, {
          component: "span",
          sx: {
            ml: 1,
            color: l,
            fontWeight: 700
          },
          children: r("chart.overloadedPeople", {
            count: A
          })
        }) : null]
      })]
    }), a.jsx(i, {
      sx: I(c),
      children: a.jsx(W, {
        width: "100%",
        height: "100%",
        children: a.jsxs(V, {
          data: o,
          layout: "vertical",
          onClick: x ? t => {
            let e = o.find(m => m.name === String(t?.activeLabel ?? ""));
            e && x(e.accountSeq === u ? 0 : e.accountSeq);
          } : void 0,
          style: x ? {
            cursor: "pointer"
          } : void 0,
          margin: {
            top: 4,
            right: 16,
            bottom: 4,
            left: 8
          },
          barCategoryGap: o.length > 8 ? 4 : 10,
          children: [a.jsx(X, {
            strokeDasharray: "3 3",
            horizontal: !1,
            stroke: "#eceae6"
          }), a.jsx(Y, {
            type: "number",
            allowDecimals: !1,
            tick: {
              fontSize: 12
            }
          }), a.jsx(E, {
            type: "category",
            dataKey: "name",
            width: 84,
            tick: {
              fontSize: 12
            },
            interval: 0
          }), a.jsx(G, {
            ...K,
            formatter: (t, e) => [r("chart.countValue", {
              count: Number(t) || 0
            }), String(e)],
            labelFormatter: t => {
              let e = o.find(m => m.name === t);
              return !e || !(e.capacity > 0) ? String(t) : r("chart.capacityTooltip", {
                label: String(t),
                capacity: e.capacity,
                unit: b,
                load: e.load,
                percent: Math.round(e.ratio * 100)
              });
            }
          }), a.jsx(N, {
            ...O
          }), n > 0 ? a.jsx(_, {
            x: n,
            stroke: q,
            strokeDasharray: "4 4",
            label: {
              value: r("chart.average"),
              position: "top",
              fontSize: 11,
              fill: q
            }
          }) : null, s.default_capacity > 0 ? a.jsx(_, {
            x: s.default_capacity,
            stroke: l,
            strokeDasharray: "2 3",
            label: {
              value: r("chart.capacity"),
              position: "top",
              fontSize: 11,
              fill: l
            }
          }) : null, a.jsx(j, {
            dataKey: "overdue",
            name: r("chart.overdue"),
            stackId: "load",
            fill: l
          }), a.jsx(j, {
            dataKey: "soon",
            name: r("chart.dueSoonDays", {
              days: h
            }),
            stackId: "load",
            fill: w
          }), a.jsx(j, {
            dataKey: "later",
            name: r("chart.later"),
            stackId: "load",
            fill: B,
            radius: [0, 3, 3, 0],
            children: o.map(t => a.jsx($, {
              fill: d && f(t) ? l : B,
              fillOpacity: d && f(t) ? .45 : 1,
              stroke: t.accountSeq === u ? "#37352f" : void 0,
              strokeWidth: t.accountSeq === u ? 1.5 : 0
            }, t.accountSeq))
          })]
        })
      })
    })]
  });
}
export { la as WorkloadChart };