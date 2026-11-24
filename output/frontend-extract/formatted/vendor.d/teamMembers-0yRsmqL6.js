import { r as u } from "./react-CjxcGQav.js";
import { eZ as i, cA as f, c2 as d, eY as c, e$ as g } from "../js.d/main-Cm9wS5wt.js";
let s = {
  loaded: !1,
  groupSeq: 0,
  canManage: !1,
  members: []
};
const o = new Set();
let a = null;
function n(r) {
  s = r, o.forEach(e => e());
}
function l(r = !1) {
  return a || (a = (async () => {
    let e = i().myOrgSeq;
    if (e || (await f(), e = i().myOrgSeq), !e) {
      n({
        loaded: !0,
        groupSeq: 0,
        canManage: !1,
        members: []
      });
      return;
    }
    try {
      const t = await d.listMembers(e);
      n({
        loaded: !0,
        groupSeq: t.org_seq,
        canManage: t.can_manage,
        members: t.members
      });
    } catch {
      if (r) return;
      n({
        loaded: !0,
        groupSeq: e,
        canManage: !1,
        members: []
      });
    }
  })().finally(() => {
    a = null;
  }), a);
}
function q(r) {
  if (!r || typeof r != "object") return !1;
  const e = r;
  return Array.isArray(e.members) ? (n({
    loaded: !0,
    groupSeq: Number(e.org_seq ?? 0) || 0,
    canManage: e.can_manage === !0,
    members: e.members
  }), !0) : !1;
}
let m = !1;
function b() {
  if (m || typeof window > "u") return;
  m = !0, window.addEventListener(c, e => {
    const t = e.detail;
    t?.external_seq !== void 0 || t?.current_org_seq !== void 0 || n({
      ...s,
      loaded: !1
    });
  });
  let r = null;
  g(["org_unit_member"], () => {
    r && clearTimeout(r), r = setTimeout(() => {
      r = null, s.loaded && l(!0);
    }, 300);
  });
}
function y() {
  const r = u.useSyncExternalStore(e => (o.add(e), () => o.delete(e)), () => s, () => s);
  return u.useEffect(() => {
    b(), !s.loaded && !a && l();
  }, []), r;
}
export { l as r, q as s, y as u };