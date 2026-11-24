import { cr as xe, rQ as ye, B as S, rZ as W, rR as $, pO as w, rY as K, rS as ge, fQ as Pe, r_ as Ae, rU as Ie, rV as be, rX as Ee } from "../js.d/main-Cm9wS5wt.js";
import { r as i, j as m } from "./react-CjxcGQav.js";
import { j as ee, au as Se, l as te, n as ae, p as Ce, av as De, o as U, z as Le, A as re, D as je, B as ne, E as ke, S as we, F as Oe, G as ie, H as Te, I as Re, J as _e, aw as Ne, K as Be, N as We, ax as Ke, Z as ze, L as Me, P as Fe, O as se, ay as Z, b as q, a0 as Ve, a1 as Ge, a2 as T, a3 as Ye, a4 as Xe, ai as $e, a5 as Ue, a9 as Ze, aa as qe, R as He, C as Je, X as Qe, Y as et, T as tt } from "./CartesianChart-Cxj4zTfW.js";
import { g as at, A as rt, D as nt } from "./getRadiusAndStrokeWidthFromDot-D1Uq1RrS.js";
import { a as it, S as st } from "./ErrorBarContext-D-uFP9dS.js";
import { a as M } from "./reselect-DokMjEPX.js";
import "./stylis-DdLD6a3t.js";
import "./d3-BkRUnfR7.js";
var oe = (e, t, r, a) => te(e, "xAxis", t, a),
  le = (e, t, r, a) => ae(e, "xAxis", t, a),
  de = (e, t, r, a) => te(e, "yAxis", r, a),
  ue = (e, t, r, a) => ae(e, "yAxis", r, a),
  ot = M([ee, oe, de, le, ue], (e, t, r, a, n) => De(e, "xAxis") ? U(t, a, !1) : U(r, n, !1)),
  lt = (e, t, r, a, n) => n;
function dt(e) {
  return e.type === "line";
}
var ut = M([Ce, lt], (e, t) => e.filter(dt).find(r => r.id === t)),
  ct = M([ee, oe, de, le, ue, ut, ot, Se], (e, t, r, a, n, s, o, d) => {
    var {
      chartData: l,
      dataStartIndex: p,
      dataEndIndex: f
    } = d;
    if (!(s == null || t == null || r == null || a == null || n == null || a.length === 0 || n.length === 0 || o == null || e !== "horizontal" && e !== "vertical")) {
      var {
          dataKey: u,
          data: v
        } = s,
        h;
      if (v != null && v.length > 0 ? h = v : h = l?.slice(p, f + 1), h != null) return wt({
        layout: e,
        xAxis: t,
        yAxis: r,
        xAxisTicks: a,
        yAxisTicks: n,
        dataKey: u,
        bandSize: o,
        displayedData: h
      });
    }
  }),
  pt = ["id"],
  ht = ["type", "layout", "connectNulls", "needClip", "shape"],
  mt = ["activeDot", "animateNewValues", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "hide", "isAnimationActive", "label", "legendType", "xAxisId", "yAxisId", "id"];
function R() {
  return R = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, R.apply(null, arguments);
}
function H(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function (n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? H(Object(r), !0).forEach(function (a) {
      ft(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : H(Object(r)).forEach(function (a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function ft(e, t, r) {
  return (t = vt(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function vt(e) {
  var t = xt(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function xt(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function F(e, t) {
  if (e == null) return {};
  var r,
    a,
    n = yt(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (a = 0; a < s.length; a++) r = s[a], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function yt(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e) if ({}.hasOwnProperty.call(e, a)) {
    if (t.indexOf(a) !== -1) continue;
    r[a] = e[a];
  }
  return r;
}
var gt = e => {
    var {
      dataKey: t,
      name: r,
      stroke: a,
      legendType: n,
      hide: s
    } = e;
    return [{
      inactive: s,
      dataKey: t,
      type: n,
      color: a,
      value: ie(r, t),
      payload: e
    }];
  },
  Pt = i.memo(e => {
    var {
        dataKey: t,
        data: r,
        stroke: a,
        strokeWidth: n,
        fill: s,
        name: o,
        hide: d,
        unit: l,
        tooltipType: p,
        id: f
      } = e,
      u = {
        dataDefinedOnItem: r,
        getPosition: Re,
        settings: {
          stroke: a,
          strokeWidth: n,
          fill: s,
          dataKey: t,
          nameKey: void 0,
          name: ie(o, t),
          hide: d,
          type: p,
          color: a,
          unit: l,
          graphicalItemId: f
        }
      };
    return i.createElement(Te, {
      tooltipEntrySettings: u
    });
  }),
  ce = (e, t) => "".concat(t, "px ").concat(e - t, "px");
function At(e, t) {
  for (var r = e.length % 2 !== 0 ? [...e, 0] : e, a = [], n = 0; n < t; ++n) a = [...a, ...r];
  return a;
}
var It = (e, t, r) => {
  var a = r.reduce((h, g) => h + g);
  if (!a) return ce(t, e);
  for (var n = Math.floor(e / a), s = e % a, o = t - e, d = [], l = 0, p = 0; l < r.length; p += (f = r[l]) !== null && f !== void 0 ? f : 0, ++l) {
    var f,
      u = r[l];
    if (u != null && p + u > s) {
      d = [...r.slice(0, l), s - p];
      break;
    }
  }
  var v = d.length % 2 === 0 ? [0, o] : [o];
  return [...At(r, n), ...d, ...v].map(h => "".concat(h, "px")).join(", ");
};
function bt(e) {
  var {
      clipPathId: t,
      points: r,
      props: a
    } = e,
    {
      dot: n,
      dataKey: s,
      needClip: o
    } = a,
    {
      id: d
    } = a,
    l = F(a, pt),
    p = Ue(l);
  return i.createElement(nt, {
    points: r,
    dot: n,
    className: "recharts-line-dots",
    dotClassName: "recharts-line-dot",
    dataKey: s,
    baseProps: p,
    needClip: o,
    clipPathId: t
  });
}
function Et(e) {
  var {
      showLabels: t,
      children: r,
      points: a
    } = e,
    n = i.useMemo(() => a?.map(s => {
      var o,
        d,
        l = {
          x: (o = s.x) !== null && o !== void 0 ? o : 0,
          y: (d = s.y) !== null && d !== void 0 ? d : 0,
          width: 0,
          lowerWidth: 0,
          upperWidth: 0,
          height: 0
        };
      return C(C({}, l), {}, {
        value: s.value,
        payload: s.payload,
        viewBox: l,
        parentViewBox: void 0,
        fill: void 0
      });
    }), [a]);
  return i.createElement(Xe, {
    value: t ? n : void 0
  }, r);
}
function J(e) {
  var {
      clipPathId: t,
      pathRef: r,
      points: a,
      strokeDasharray: n,
      props: s
    } = e,
    {
      type: o,
      layout: d,
      connectNulls: l,
      needClip: p,
      shape: f
    } = s,
    u = F(s, ht),
    v = C(C({}, $e(u)), {}, {
      fill: "none",
      className: "recharts-line-curve",
      clipPath: p ? "url(#clipPath-".concat(t, ")") : void 0,
      points: a,
      type: o,
      layout: d,
      connectNulls: l,
      strokeDasharray: n ?? s.strokeDasharray
    });
  return i.createElement(i.Fragment, null, a?.length > 1 && i.createElement(st, R({
    shapeType: "curve",
    option: f
  }, v, {
    pathRef: r
  })), i.createElement(bt, {
    points: a,
    clipPathId: t,
    props: s
  }));
}
function St(e) {
  try {
    return e && e.getTotalLength && e.getTotalLength() || 0;
  } catch {
    return 0;
  }
}
function Ct(e) {
  var {
      clipPathId: t,
      props: r,
      pathRef: a,
      previousPointsRef: n,
      longestAnimatedLengthRef: s
    } = e,
    {
      points: o,
      strokeDasharray: d,
      isAnimationActive: l,
      animationBegin: p,
      animationDuration: f,
      animationEasing: u,
      animateNewValues: v,
      width: h,
      height: g,
      onAnimationEnd: x,
      onAnimationStart: A
    } = r,
    I = n.current,
    y = Ve(o, "recharts-line-"),
    P = i.useRef(y),
    [D, c] = i.useState(!1),
    E = !D,
    L = i.useCallback(() => {
      typeof x == "function" && x(), c(!1);
    }, [x]),
    N = i.useCallback(() => {
      typeof A == "function" && A(), c(!0);
    }, [A]),
    j = St(a.current),
    _ = i.useRef(0);
  P.current !== y && (_.current = s.current, P.current = y);
  var V = _.current;
  return i.createElement(Et, {
    points: o,
    showLabels: E
  }, r.children, i.createElement(Ge, {
    animationId: y,
    begin: p,
    duration: f,
    isActive: l,
    easing: u,
    onAnimationEnd: L,
    onAnimationStart: N,
    key: y
  }, k => {
    var he = T(V, j + V, k),
      B = Math.min(he, j),
      O;
    if (l) {
      if (d) {
        var me = "".concat(d).split(/[,\s]+/gim).map(b => parseFloat(b));
        O = It(B, j, me);
      } else O = ce(j, B);
    } else O = d == null ? void 0 : String(d);
    if (k > 0 && j > 0 && (n.current = o, s.current = Math.max(s.current, B)), I) {
      var fe = I.length / o.length,
        G = k === 1 ? o : o.map((b, ve) => {
          var Y = Math.floor(ve * fe);
          if (I[Y]) {
            var X = I[Y];
            return C(C({}, b), {}, {
              x: T(X.x, b.x, k),
              y: T(X.y, b.y, k)
            });
          }
          return v ? C(C({}, b), {}, {
            x: T(h * 2, b.x, k),
            y: T(g / 2, b.y, k)
          }) : C(C({}, b), {}, {
            x: b.x,
            y: b.y
          });
        });
      return n.current = G, i.createElement(J, {
        props: r,
        points: G,
        clipPathId: t,
        pathRef: a,
        strokeDasharray: O
      });
    }
    return i.createElement(J, {
      props: r,
      points: o,
      clipPathId: t,
      pathRef: a,
      strokeDasharray: O
    });
  }), i.createElement(Ye, {
    label: r.label
  }));
}
function Dt(e) {
  var {
      clipPathId: t,
      props: r
    } = e,
    a = i.useRef(null),
    n = i.useRef(0),
    s = i.useRef(null);
  return i.createElement(Ct, {
    props: r,
    clipPathId: t,
    previousPointsRef: a,
    longestAnimatedLengthRef: n,
    pathRef: s
  });
}
var Lt = (e, t) => {
  var r, a;
  return {
    x: (r = e.x) !== null && r !== void 0 ? r : void 0,
    y: (a = e.y) !== null && a !== void 0 ? a : void 0,
    value: e.value,
    errorVal: se(e.payload, t)
  };
};
class jt extends i.Component {
  render() {
    var {
      hide: t,
      dot: r,
      points: a,
      className: n,
      xAxisId: s,
      yAxisId: o,
      top: d,
      left: l,
      width: p,
      height: f,
      id: u,
      needClip: v,
      zIndex: h
    } = this.props;
    if (t) return null;
    var g = xe("recharts-line", n),
      x = u,
      {
        r: A,
        strokeWidth: I
      } = at(r),
      y = Ke(r),
      P = A * 2 + I,
      D = v ? "url(#clipPath-".concat(y ? "" : "dots-").concat(x, ")") : void 0;
    return i.createElement(ze, {
      zIndex: h
    }, i.createElement(Me, {
      className: g
    }, v && i.createElement("defs", null, i.createElement(Fe, {
      clipPathId: x,
      xAxisId: s,
      yAxisId: o
    }), !y && i.createElement("clipPath", {
      id: "clipPath-dots-".concat(x)
    }, i.createElement("rect", {
      x: l - P / 2,
      y: d - P / 2,
      width: p + P,
      height: f + P
    }))), i.createElement(it, {
      xAxisId: s,
      yAxisId: o,
      data: a,
      dataPointFormatter: Lt,
      errorBarOffset: 0
    }, i.createElement(Dt, {
      props: this.props,
      clipPathId: x
    }))), i.createElement(rt, {
      activeDot: this.props.activeDot,
      points: a,
      mainColor: this.props.stroke,
      itemDataKey: this.props.dataKey,
      clipPath: D
    }));
  }
}
var pe = {
  activeDot: !0,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  connectNulls: !1,
  dot: !0,
  fill: "#fff",
  hide: !1,
  isAnimationActive: "auto",
  label: !1,
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  xAxisId: 0,
  yAxisId: 0,
  zIndex: je.line,
  type: "linear"
};
function kt(e) {
  var t = re(e, pe),
    {
      activeDot: r,
      animateNewValues: a,
      animationBegin: n,
      animationDuration: s,
      animationEasing: o,
      connectNulls: d,
      dot: l,
      hide: p,
      isAnimationActive: f,
      label: u,
      legendType: v,
      xAxisId: h,
      yAxisId: g,
      id: x
    } = t,
    A = F(t, mt),
    {
      needClip: I
    } = _e(h, g),
    y = Ne(),
    P = Be(),
    D = ne(),
    c = We(_ => ct(_, h, g, D, x));
  if (P !== "horizontal" && P !== "vertical" || c == null || y == null) return null;
  var {
    height: E,
    width: L,
    x: N,
    y: j
  } = y;
  return i.createElement(jt, R({}, A, {
    id: x,
    connectNulls: d,
    dot: l,
    activeDot: r,
    animateNewValues: a,
    animationBegin: n,
    animationDuration: s,
    animationEasing: o,
    isAnimationActive: f,
    hide: p,
    label: u,
    legendType: v,
    xAxisId: h,
    yAxisId: g,
    points: c,
    layout: P,
    height: E,
    width: L,
    left: N,
    top: j,
    needClip: I
  }));
}
function wt(e) {
  var {
    layout: t,
    xAxis: r,
    yAxis: a,
    xAxisTicks: n,
    yAxisTicks: s,
    dataKey: o,
    bandSize: d,
    displayedData: l
  } = e;
  return l.map((p, f) => {
    var u = se(p, o);
    if (t === "horizontal") {
      var v = Z({
          axis: r,
          ticks: n,
          bandSize: d,
          entry: p,
          index: f
        }),
        h = q(u) ? null : a.scale.map(u);
      return {
        x: v,
        y: h ?? null,
        value: u,
        payload: p
      };
    }
    var g = q(u) ? null : r.scale.map(u),
      x = Z({
        axis: a,
        ticks: s,
        bandSize: d,
        entry: p,
        index: f
      });
    return g == null || x == null ? null : {
      x: g,
      y: x,
      value: u,
      payload: p
    };
  }).filter(Boolean);
}
function Ot(e) {
  var t = re(e, pe),
    r = ne();
  return i.createElement(ke, {
    id: t.id,
    type: "line"
  }, a => i.createElement(i.Fragment, null, i.createElement(we, {
    legendPayload: gt(t)
  }), i.createElement(Pt, {
    dataKey: t.dataKey,
    data: t.data,
    stroke: t.stroke,
    strokeWidth: t.strokeWidth,
    fill: t.fill,
    name: t.name,
    hide: t.hide,
    unit: t.unit,
    tooltipType: t.tooltipType,
    id: a
  }), i.createElement(Oe, {
    type: "line",
    id: a,
    data: t.data,
    xAxisId: t.xAxisId,
    yAxisId: t.yAxisId,
    zAxisId: 0,
    dataKey: t.dataKey,
    hide: t.hide,
    isPanorama: r
  }), i.createElement(kt, R({}, t, {
    id: a
  }))));
}
var z = i.memo(Ot, Le);
z.displayName = "Line";
var Tt = ["axis"],
  Rt = i.forwardRef((e, t) => i.createElement(Ze, {
    chartName: "LineChart",
    defaultTooltipEventType: "axis",
    validateTooltipEventTypes: Tt,
    tooltipPayloadSearcher: qe,
    categoricalChartProps: e,
    ref: t
  }));
function Q(e) {
  return /^\d{4}-\d{2}-\d{2}$/.test(e) ? new Date(`${e}T00:00:00`) : null;
}
function _t(e) {
  return `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
}
function Nt(e) {
  return e.slice(5).replace("-", ".");
}
function Yt({
  sprint: e,
  tasks: t,
  todayStr: r,
  height: a = 200,
  headerLeft: n
}) {
  ye();
  let s = i.useMemo(() => {
    let u = Q(e.start_date),
      v = Q(e.end_date);
    if (!u || !v || v < u || Math.round((v.getTime() - u.getTime()) / 864e5) + 1 > 366) return null;
    let h = t.filter(c => c.sprint_seq === e.seq && !c.archived);
    if (h.length === 0) return {
      empty: !0
    };
    let g = h.some(c => (c.story_points ?? 0) > 0),
      x = c => g ? c.story_points ?? 0 : 1,
      A = h.reduce((c, E) => c + x(E), 0),
      I = new Map();
    for (let c of h) {
      if (!c.completed) continue;
      let E = (c.completed_time ?? "").slice(0, 10),
        L = /^\d{4}-\d{2}-\d{2}$/.test(E) ? E : e.start_date;
      I.set(L, (I.get(L) ?? 0) + x(c));
    }
    let y = [];
    for (let c = new Date(u); c <= v; c.setDate(c.getDate() + 1)) y.push(_t(c));
    let P = A,
      D = A;
    return {
      empty: !1,
      data: y.map((c, E) => {
        let L = y.length === 1 ? 0 : A * (1 - E / (y.length - 1));
        return c <= r && (P -= I.get(c) ?? 0, D = Math.max(0, P)), {
          날짜: Nt(c),
          이상: Math.round(L * 10) / 10,
          남은량: c <= r ? Math.max(0, P) : null
        };
      }),
      total: A,
      usePoints: g,
      last: D
    };
  }, [e, t, r]);
  if (!s) return m.jsxs(S, {
    sx: K(a),
    children: [n ? m.jsx(S, {
      sx: W,
      children: n
    }) : null, m.jsx($, {
      text: w("chart.burndownNeedsDates"),
      height: a
    })]
  });
  if (s.empty) return m.jsxs(S, {
    sx: K(a),
    children: [n ? m.jsx(S, {
      sx: W,
      children: n
    }) : null, m.jsx($, {
      text: w("chart.noAssignedTasks"),
      height: a
    })]
  });
  let {
      data: o,
      total: d,
      usePoints: l,
      last: p
    } = s,
    f = l ? "SP" : w("chart.unitCount");
  return m.jsxs(S, {
    sx: K(a),
    children: [m.jsxs(S, {
      sx: W,
      children: [n ? m.jsx(S, {
        sx: {
          flexShrink: 0
        },
        children: n
      }) : null, m.jsxs(S, {
        sx: {
          flex: 1,
          minWidth: 220,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 1,
          fontSize: 14,
          color: "#000"
        },
        children: [m.jsx("span", {
          children: w(l ? "chart.remainingPointsTotal" : "chart.remainingCountTotal", {
            total: d
          })
        }), m.jsx("span", {
          children: ge("chart.currentRemaining", {
            value: m.jsx(S, {
              component: "span",
              sx: {
                color: "#2f80ed",
                fontWeight: 700
              },
              children: p
            })
          }, {
            unit: f
          })
        })]
      })]
    }), m.jsx(S, {
      sx: Ee(a),
      children: m.jsx(He, {
        width: "100%",
        height: "100%",
        children: m.jsxs(Rt, {
          data: o,
          margin: {
            top: 8,
            right: 12,
            left: 0,
            bottom: 0
          },
          children: [m.jsx(Je, {
            strokeDasharray: "3 3",
            stroke: Pe
          }), m.jsx(Qe, {
            dataKey: "날짜",
            tick: {
              fontSize: 13
            },
            tickMargin: 6,
            minTickGap: 24
          }), m.jsx(et, {
            tick: {
              fontSize: 13
            },
            width: 40,
            allowDecimals: !1
          }), m.jsx(tt, {
            ...Ae,
            formatter: u => `${Number(u ?? 0)}${f}`
          }), m.jsx(z, {
            type: "linear",
            dataKey: "이상",
            name: w("chart.seriesIdeal"),
            stroke: Ie,
            strokeDasharray: "6 5",
            strokeWidth: 1.5,
            dot: !1
          }), m.jsx(z, {
            type: "monotone",
            dataKey: "남은량",
            name: w("chart.seriesRemaining"),
            stroke: be,
            strokeWidth: 2.5,
            dot: !1,
            connectNulls: !1
          })]
        })
      })
    })]
  });
}
export { Yt as SprintBurndownChart };