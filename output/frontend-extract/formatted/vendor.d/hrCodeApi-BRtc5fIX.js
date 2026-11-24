import { bM as n, bT as o } from "../js.d/main-Cm9wS5wt.js";
const s = "/v1/hr/codes",
  u = ["regular", "contract", "parttime", "intern", "freelance"];
function a(t, r) {
  if (!t || t.ok === !1) throw new Error(t?.message || r);
  return t.data;
}
function c(t) {
  const r = Number(t ?? 0);
  return Number.isFinite(r) ? r : 0;
}
function p(t) {
  return typeof t == "string" ? t : t == null ? "" : String(t);
}
function m(t) {
  return t == null || t === "" ? !0 : t === !0 || t === 1 || t === "1" || t === "true";
}
function l(t, r) {
  const e = t ?? {};
  return {
    seq: c(e.seq),
    kind: r,
    name: p(e.name),
    code: p(e.code),
    sort_no: c(e.sort_no),
    enabled: m(e.enabled)
  };
}
function d(t) {
  return (Array.isArray(t) ? t : []).map(e => e ?? {}).filter(e => u.includes(p(e.code))).map(e => ({
    seq: c(e.seq),
    code: p(e.code),
    enabled: m(e.enabled)
  }));
}
const f = {
  list: async () => {
    const t = await n.http.get(s),
      r = a(t, o("hr.errLoadHrCodes")) ?? {},
      e = i => (Array.isArray(r[i]) ? r[i] : []).map(y => l(y, i));
    return {
      position: e("position"),
      job_title: e("job_title"),
      employment_type: d(r.employment_type)
    };
  },
  create: async (t, r) => {
    const e = await n.http.post(s, {
      kind: t,
      name: r
    });
    return c(a(e, o("hr.errCreateHrCode")).seq);
  },
  update: async (t, r) => {
    const e = await n.http.patch(`${s}/${t}`, r);
    a(e, o("hr.errUpdateHrCode"));
  },
  remove: async t => {
    const r = await n.http.delete(`${s}/${t}`);
    a(r, o("hr.errDeleteHrCode"));
  },
  reorder: async (t, r) => {
    const e = await n.http.put(`${s}/order`, {
      kind: t,
      seqs: r
    });
    a(e, o("hr.errReorder"));
  },
  setEmploymentTypes: async t => {
    const r = await n.http.put(`${s}/employment-types`, {
      items: t
    });
    return d(a(r, o("hr.errSaveEmploymentTypes")).employment_type);
  }
};
export { f as h };