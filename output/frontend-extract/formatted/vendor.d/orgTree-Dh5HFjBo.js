import { r as l } from "./react-CjxcGQav.js";
import { eZ as _, cA as E, c2 as T, dv as y, bM as p, dg as q, eY as w, e$ as v } from "../js.d/main-Cm9wS5wt.js";
let o = {
  loaded: !1,
  orgSeq: 0,
  canManage: !1,
  units: []
};
const d = new Set();
let i = null;
function u(t) {
  o = t, d.forEach(e => e());
}
function h(t = !1) {
  return i || (i = (async () => {
    let e = _().myOrgSeq;
    if (e || (await E(), e = _().myOrgSeq), !e) {
      u({
        loaded: !0,
        orgSeq: 0,
        canManage: !1,
        units: []
      });
      return;
    }
    try {
      const n = await T.getTree(e);
      u({
        loaded: !0,
        orgSeq: n.org_seq,
        canManage: n.can_manage,
        units: n.units
      });
    } catch {
      if (t) return;
      u({
        loaded: !0,
        orgSeq: e,
        canManage: !1,
        units: []
      });
    }
  })().finally(() => {
    i = null;
  }), i);
}
function A(t) {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return Array.isArray(e.units) ? (u({
    loaded: !0,
    orgSeq: Number(e.org_seq ?? 0) || 0,
    canManage: e.can_manage === !0,
    units: e.units
  }), !0) : !1;
}
function G() {
  return o;
}
function R(t, e) {
  !t || o.orgSeq !== t || o.units === e || u({
    ...o,
    loaded: !0,
    units: e
  });
}
let S = !1;
function M() {
  if (S || typeof window > "u") return;
  S = !0, window.addEventListener(w, e => {
    const n = e.detail;
    n?.external_seq !== void 0 || n?.current_org_seq !== void 0 || u({
      ...o,
      loaded: !1
    });
  });
  let t = null;
  v(["org_unit", "org_unit_member"], () => {
    t && clearTimeout(t), t = setTimeout(() => {
      t = null, o.loaded && h(!0);
    }, 300);
  });
}
function N() {
  const t = l.useSyncExternalStore(e => (d.add(e), () => d.delete(e)), () => o, () => o);
  return l.useEffect(() => {
    M(), !o.loaded && !i && h();
  }, []), t;
}
function x(t = !0) {
  const [e, n] = l.useState(0);
  return y(["org_unit", "org_unit_member"], () => n(r => r + 1), {
    enabled: t
  }), l.useEffect(() => {
    if (!t) return;
    let r = null;
    const a = () => {
      r && clearTimeout(r), r = setTimeout(() => {
        r = null, n(s => s + 1);
      }, 300);
    };
    return p.addRealtimeEventListener(q, a), () => {
      p.removeRealtimeEventListener(q, a), r && clearTimeout(r);
    };
  }, [t]), e;
}
function D(t) {
  const e = new Map();
  for (const s of t) {
    const c = e.get(s.parent_seq) ?? [];
    c.push(s), e.set(s.parent_seq, c);
  }
  const n = [],
    r = new Set(),
    a = (s, c) => {
      for (const f of [...(e.get(s) ?? [])].sort((g, m) => g.sort_no - m.sort_no || g.seq - m.seq)) r.has(f.seq) || (r.add(f.seq), n.push({
        unit: f,
        depth: c
      }), a(f.seq, c + 1));
    };
  return a(0, 0), n;
}
function U(t, e) {
  const n = new Set(),
    r = [e];
  for (; r.length > 0;) {
    const a = r.pop();
    if (!n.has(a)) {
      n.add(a);
      for (const s of t) s.parent_seq === a && r.push(s.seq);
    }
  }
  return n;
}
export { h as a, U as b, x as c, D as f, G as g, R as r, A as s, N as u };