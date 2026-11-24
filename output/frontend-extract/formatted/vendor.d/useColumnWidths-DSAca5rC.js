import { r as b } from "./react-CjxcGQav.js";
import { D as y, u as M } from "../js.d/main-Cm9wS5wt.js";
import { p as g } from "./profileApi-Btafs-pM.js";
const i = "tableColumnWidths",
  O = 800,
  S = 100,
  k = 80,
  v = 4e3,
  T = {};
function p(t) {
  if (!t || typeof t != "object") return {};
  const n = Array.isArray(t) ? t.filter(o => Array.isArray(o) && o.length === 2).map(([o, s]) => [String(o), s]) : Object.entries(t),
    e = {};
  for (const [o, s] of n) {
    if (Object.keys(e).length >= k) break;
    const c = Number(s);
    o && Number.isFinite(c) && c > 0 && (e[o] = Math.min(v, Math.round(c)));
  }
  return e;
}
function C(t) {
  const n = t?.[i];
  if (!n || typeof n != "object") return {};
  const e = {};
  for (const [o, s] of Object.entries(n)) {
    if (Object.keys(e).length >= S) break;
    const c = p(s);
    Object.keys(c).length > 0 && (e[o] = c);
  }
  return e;
}
function A(t) {
  return Object.entries(t);
}
let a,
  d = {};
function E(t, n) {
  d[t] = Object.keys(n).length > 0 ? A(n) : null, a !== void 0 && window.clearTimeout(a), a = window.setTimeout(() => {
    a = void 0;
    const e = d;
    d = {}, g({
      etc: {
        [i]: e
      }
    }).catch(() => {});
  }, O);
}
function V(t) {
  const n = y(),
    e = M(),
    o = e.useValue("account"),
    s = C(o?.etc)[t],
    c = s ? JSON.stringify(s) : "",
    h = b.useMemo(() => c ? JSON.parse(c) : T, [c]),
    m = b.useCallback(j => {
      const r = e.getValue("account");
      if (!r) return;
      const u = r.etc && typeof r.etc == "object" ? r.etc : {},
        l = p(j),
        f = {
          ...(u[i] && typeof u[i] == "object" ? u[i] : {})
        };
      Object.keys(l).length > 0 ? f[t] = A(l) : delete f[t], e.setValue("account", {
        ...r,
        etc: {
          ...u,
          [i]: f
        }
      }), E(t, l);
    }, [t]);
  return b.useMemo(() => n ? {} : {
    columnResize: !0,
    columnWidths: h,
    onColumnWidthsChange: m
  }, [n, h, m]);
}
export { V as u };