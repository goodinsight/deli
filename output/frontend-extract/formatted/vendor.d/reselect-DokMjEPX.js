import { g as D } from "./react-CjxcGQav.js";
import { o3 as $ } from "../js.d/main-Cm9wS5wt.js";
var j = {
    exports: {}
  },
  M = {};
var k;
function q() {
  if (k) return M;
  k = 1;
  var e = D(),
    n = $();
  function t(o, u) {
    return o === u && (o !== 0 || 1 / o === 1 / u) || o !== o && u !== u;
  }
  var c = typeof Object.is == "function" ? Object.is : t,
    i = n.useSyncExternalStore,
    s = e.useRef,
    a = e.useEffect,
    r = e.useMemo,
    l = e.useDebugValue;
  return M.useSyncExternalStoreWithSelector = function (o, u, d, y, f) {
    var p = s(null);
    if (p.current === null) {
      var m = {
        hasValue: !1,
        value: null
      };
      p.current = m;
    } else m = p.current;
    p = r(function () {
      function C(v) {
        if (!w) {
          if (w = !0, g = v, v = y(v), f !== void 0 && m.hasValue) {
            var b = m.value;
            if (f(b, v)) return R = b;
          }
          return R = v;
        }
        if (b = R, c(g, v)) return b;
        var N = y(v);
        return f !== void 0 && f(b, N) ? (g = v, b) : (g = v, R = N);
      }
      var w = !1,
        g,
        R,
        E = d === void 0 ? null : d;
      return [function () {
        return C(u());
      }, E === null ? void 0 : function () {
        return C(E());
      }];
    }, [u, d, y, f]);
    var h = i(o, p[0], p[1]);
    return a(function () {
      m.hasValue = !0, m.value = h;
    }, [h]), l(h), h;
  }, M;
}
var T;
function A() {
  return T || (T = 1, j.exports = q()), j.exports;
}
var te = A(),
  z = Symbol("NOT_FOUND");
function F(e, n = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function") throw new TypeError(n);
}
function V(e, n = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object") throw new TypeError(n);
}
function x(e, n = "expected all items to be functions, instead received the following types: ") {
  if (!e.every(t => typeof t == "function")) {
    const t = e.map(c => typeof c == "function" ? `function ${c.name || "unnamed"}()` : typeof c).join(", ");
    throw new TypeError(`${n}[${t}]`);
  }
}
var W = e => Array.isArray(e) ? e : [e];
function _(e) {
  const n = Array.isArray(e[0]) ? e[0] : e;
  return x(n, "createSelector expects all input-selectors to be functions, but received the following types: "), n;
}
function U(e, n) {
  const t = [],
    {
      length: c
    } = e;
  for (let i = 0; i < c; i++) t.push(e[i].apply(null, n));
  return t;
}
function K(e) {
  let n;
  return {
    get(t) {
      return n && e(n.key, t) ? n.value : z;
    },
    put(t, c) {
      n = {
        key: t,
        value: c
      };
    },
    getEntries() {
      return n ? [n] : [];
    },
    clear() {
      n = void 0;
    }
  };
}
function G(e, n) {
  let t = [];
  function c(r) {
    const l = t.findIndex(o => n(r, o.key));
    if (l > -1) {
      const o = t[l];
      return l > 0 && (t.splice(l, 1), t.unshift(o)), o.value;
    }
    return z;
  }
  function i(r, l) {
    c(r) === z && (t.unshift({
      key: r,
      value: l
    }), t.length > e && t.pop());
  }
  function s() {
    return t;
  }
  function a() {
    t = [];
  }
  return {
    get: c,
    put: i,
    getEntries: s,
    clear: a
  };
}
var L = (e, n) => e === n;
function P(e) {
  return function (t, c) {
    if (t === null || c === null || t.length !== c.length) return !1;
    const {
      length: i
    } = t;
    for (let s = 0; s < i; s++) if (!e(t[s], c[s])) return !1;
    return !0;
  };
}
function ne(e, n) {
  const t = typeof n == "object" ? n : {
      equalityCheck: n
    },
    {
      equalityCheck: c = L,
      maxSize: i = 1,
      resultEqualityCheck: s
    } = t,
    a = P(c);
  let r = 0;
  const l = i <= 1 ? K(a) : G(i, a);
  function o() {
    let u = l.get(arguments);
    if (u === z) {
      if (u = e.apply(null, arguments), r++, s) {
        const y = l.getEntries().find(f => s(f.value, u));
        y && (u = y.value, r !== 0 && r--);
      }
      l.put(arguments, u);
    }
    return u;
  }
  return o.clearCache = () => {
    l.clear(), o.resetResultsCount();
  }, o.resultsCount = () => r, o.resetResultsCount = () => {
    r = 0;
  }, o;
}
var B = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  H = typeof WeakRef < "u" ? WeakRef : B,
  J = 0,
  I = 1;
function S() {
  return {
    s: J,
    v: void 0,
    o: null,
    p: null
  };
}
function O(e, n = {}) {
  let t = S();
  const {
    resultEqualityCheck: c
  } = n;
  let i,
    s = 0;
  function a() {
    let r = t;
    const {
      length: l
    } = arguments;
    for (let d = 0, y = l; d < y; d++) {
      const f = arguments[d];
      if (typeof f == "function" || typeof f == "object" && f !== null) {
        let p = r.o;
        p === null && (r.o = p = new WeakMap());
        const m = p.get(f);
        m === void 0 ? (r = S(), p.set(f, r)) : r = m;
      } else {
        let p = r.p;
        p === null && (r.p = p = new Map());
        const m = p.get(f);
        m === void 0 ? (r = S(), p.set(f, r)) : r = m;
      }
    }
    const o = r;
    let u;
    if (r.s === I) u = r.v;else if (u = e.apply(null, arguments), s++, c) {
      const d = i?.deref?.() ?? i;
      d != null && c(d, u) && (u = d, s !== 0 && s--), i = typeof u == "object" && u !== null || typeof u == "function" ? new H(u) : u;
    }
    return o.s = I, o.v = u, u;
  }
  return a.clearCache = () => {
    t = S(), a.resetResultsCount();
  }, a.resultsCount = () => s, a.resetResultsCount = () => {
    s = 0;
  }, a;
}
function Q(e, ...n) {
  const t = typeof e == "function" ? {
      memoize: e,
      memoizeOptions: n
    } : e,
    c = (...i) => {
      let s = 0,
        a = 0,
        r,
        l = {},
        o = i.pop();
      typeof o == "object" && (l = o, o = i.pop()), F(o, `createSelector expects an output function after the inputs, but received: [${typeof o}]`);
      const u = {
          ...t,
          ...l
        },
        {
          memoize: d,
          memoizeOptions: y = [],
          argsMemoize: f = O,
          argsMemoizeOptions: p = []
        } = u,
        m = W(y),
        h = W(p),
        C = _(i),
        w = d(function () {
          return s++, o.apply(null, arguments);
        }, ...m),
        g = f(function () {
          a++;
          const E = U(C, arguments);
          return r = w.apply(null, E), r;
        }, ...h);
      return Object.assign(g, {
        resultFunc: o,
        memoizedResultFunc: w,
        dependencies: C,
        dependencyRecomputations: () => a,
        resetDependencyRecomputations: () => {
          a = 0;
        },
        lastResult: () => r,
        recomputations: () => s,
        resetRecomputations: () => {
          s = 0;
        },
        memoize: d,
        argsMemoize: f
      });
    };
  return Object.assign(c, {
    withTypes: () => c
  }), c;
}
var X = Q(O),
  Y = Object.assign((e, n = X) => {
    V(e, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);
    const t = Object.keys(e),
      c = t.map(s => e[s]);
    return n(c, (...s) => s.reduce((a, r, l) => (a[t[l]] = r, a), {}));
  }, {
    withTypes: () => Y
  });
export { X as a, Q as c, ne as l, te as w };