import { p as ae, r as i } from "./react-CjxcGQav.js";
import { A as ie, a0 as oe, ai as I, an as ce, a1 as se, ao as l, a2 as p, L as ue, ap as le, aq as pe, ar as fe, as as ve } from "./CartesianChart-Cxj4zTfW.js";
import { cr as me } from "../js.d/main-Cm9wS5wt.js";
var g = {},
  W;
function be() {
  return W || (W = 1, function (e) {
    Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    });
    function r(t) {
      if (typeof t != "object" || t == null) return !1;
      if (Object.getPrototypeOf(t) === null) return !0;
      if (Object.prototype.toString.call(t) !== "[object Object]") {
        const a = t[Symbol.toStringTag];
        return a == null || !Object.getOwnPropertyDescriptor(t, Symbol.toStringTag)?.writable ? !1 : t.toString() === `[object ${a}]`;
      }
      let n = t;
      for (; Object.getPrototypeOf(n) !== null;) n = Object.getPrototypeOf(n);
      return Object.getPrototypeOf(t) === n;
    }
    e.isPlainObject = r;
  }(g)), g;
}
var P, z;
function ye() {
  return z || (z = 1, P = be().isPlainObject), P;
}
var Oe = ye();
const ge = ae(Oe);
var C, N, k, B, q;
function U(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function (a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function K(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? U(Object(t), !0).forEach(function (n) {
      Pe(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : U(Object(t)).forEach(function (n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function Pe(e, r, t) {
  return (r = de(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function de(e) {
  var r = je(e, "string");
  return typeof r == "symbol" ? r : r + "";
}
function je(e, r) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function m() {
  return m = Object.assign ? Object.assign.bind() : function (e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, m.apply(null, arguments);
}
function f(e, r) {
  return r || (r = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(r)
    }
  }));
}
var F = (e, r, t, n, a) => {
    var o = t - n,
      c;
    return c = l(C || (C = f(["M ", ",", ""])), e, r), c += l(N || (N = f(["L ", ",", ""])), e + t, r), c += l(k || (k = f(["L ", ",", ""])), e + t - o / 2, r + a), c += l(B || (B = f(["L ", ",", ""])), e + t - o / 2 - n, r + a), c += l(q || (q = f(["L ", ",", " Z"])), e, r), c;
  },
  he = {
    x: 0,
    y: 0,
    upperWidth: 0,
    lowerWidth: 0,
    height: 0,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease"
  },
  we = e => {
    var r = ie(e, he),
      {
        x: t,
        y: n,
        upperWidth: a,
        lowerWidth: o,
        height: c,
        className: y
      } = r,
      {
        animationEasing: d,
        animationDuration: j,
        animationBegin: X,
        isUpdateAnimationActive: h
      } = r,
      u = i.useRef(null),
      [v, Y] = i.useState(-1),
      w = i.useRef(a),
      S = i.useRef(o),
      E = i.useRef(c),
      x = i.useRef(t),
      _ = i.useRef(n),
      T = oe(e, "trapezoid-");
    if (i.useEffect(() => {
      if (u.current && u.current.getTotalLength) try {
        var s = u.current.getTotalLength();
        s && Y(s);
      } catch {}
    }, []), t !== +t || n !== +n || a !== +a || o !== +o || c !== +c || a === 0 && o === 0 || c === 0) return null;
    var R = me("recharts-trapezoid", y);
    if (!h) return i.createElement("g", null, i.createElement("path", m({}, I(r), {
      className: R,
      d: F(t, n, a, o, c)
    })));
    var M = w.current,
      G = S.current,
      J = E.current,
      Z = x.current,
      Q = _.current,
      ee = "0px ".concat(v === -1 ? 1 : v, "px"),
      re = "".concat(v, "px 0px"),
      te = ce(["strokeDasharray"], j, d);
    return i.createElement(se, {
      animationId: T,
      key: T,
      canBegin: v > 0,
      duration: j,
      easing: d,
      isActive: h,
      begin: X
    }, s => {
      var O = p(M, a, s),
        D = p(G, o, s),
        L = p(J, c, s),
        A = p(Z, t, s),
        $ = p(Q, n, s);
      u.current && (w.current = O, S.current = D, E.current = L, x.current = A, _.current = $);
      var ne = s > 0 ? {
        transition: te,
        strokeDasharray: re
      } : {
        strokeDasharray: ee
      };
      return i.createElement("path", m({}, I(r), {
        className: R,
        d: F(A, $, O, D, L),
        ref: u,
        style: K(K({}, ne), r.style)
      }));
    });
  },
  Se = ["option", "shapeType", "activeClassName"];
function Ee(e, r) {
  if (e == null) return {};
  var t,
    n,
    a = xe(e, r);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) t = o[n], r.indexOf(t) === -1 && {}.propertyIsEnumerable.call(e, t) && (a[t] = e[t]);
  }
  return a;
}
function xe(e, r) {
  if (e == null) return {};
  var t = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (r.indexOf(n) !== -1) continue;
    t[n] = e[n];
  }
  return t;
}
function H(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function (a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function b(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? H(Object(t), !0).forEach(function (n) {
      _e(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : H(Object(t)).forEach(function (n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function _e(e, r, t) {
  return (r = Te(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function Te(e) {
  var r = Re(e, "string");
  return typeof r == "symbol" ? r : r + "";
}
function Re(e, r) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function De(e, r) {
  return b(b({}, r), e);
}
function Le(e, r) {
  return e === "symbols";
}
function V(e) {
  var {
    shapeType: r,
    elementProps: t
  } = e;
  switch (r) {
    case "rectangle":
      return i.createElement(ve, t);
    case "trapezoid":
      return i.createElement(we, t);
    case "sector":
      return i.createElement(fe, t);
    case "symbols":
      if (Le(r)) return i.createElement(pe, t);
      break;
    case "curve":
      return i.createElement(le, t);
    default:
      return null;
  }
}
function Ae(e) {
  return i.isValidElement(e) ? e.props : e;
}
function qe(e) {
  var {
      option: r,
      shapeType: t,
      activeClassName: n = "recharts-active-shape"
    } = e,
    a = Ee(e, Se),
    o;
  if (i.isValidElement(r)) o = i.cloneElement(r, b(b({}, a), Ae(r)));else if (typeof r == "function") o = r(a, a.index);else if (ge(r) && typeof r != "boolean") {
    var c = De(r, a);
    o = i.createElement(V, {
      shapeType: t,
      elementProps: c
    });
  } else {
    var y = a;
    o = i.createElement(V, {
      shapeType: t,
      elementProps: y
    });
  }
  return a.isActive ? i.createElement(ue, {
    className: n
  }, o) : o;
}
var $e = ["children"];
function Ie(e, r) {
  if (e == null) return {};
  var t,
    n,
    a = We(e, r);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) t = o[n], r.indexOf(t) === -1 && {}.propertyIsEnumerable.call(e, t) && (a[t] = e[t]);
  }
  return a;
}
function We(e, r) {
  if (e == null) return {};
  var t = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (r.indexOf(n) !== -1) continue;
    t[n] = e[n];
  }
  return t;
}
var ze = {
    data: [],
    xAxisId: "xAxis-0",
    yAxisId: "yAxis-0",
    dataPointFormatter: () => ({
      x: 0,
      y: 0,
      value: 0
    }),
    errorBarOffset: 0
  },
  Ce = i.createContext(ze);
function Ue(e) {
  var {
      children: r
    } = e,
    t = Ie(e, $e);
  return i.createElement(Ce.Provider, {
    value: t
  }, r);
}
export { qe as S, Ue as a };