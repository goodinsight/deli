import { bM as n, jD as p, bT as s } from "../js.d/main-Cm9wS5wt.js";
const o = "/v1/partner";
function i(t, e) {
  if (!t || t.ok === !1) throw new Error(t?.message || e);
  return t.data;
}
function m(t) {
  return t === !0 || t === 1 || t === "1" || t === "Y" || t === "true";
}
function c(t) {
  const e = Number(t ?? 0);
  return Number.isFinite(e) ? e : 0;
}
function a(t) {
  return typeof t == "string" ? t : t == null ? "" : String(t);
}
function l(t) {
  const e = t ?? {},
    r = a(e.trade_type),
    d = a(e.entity_type);
  return {
    seq: c(e.seq),
    name: a(e.name),
    trade_type: r === "purchase" || r === "both" ? r : "sales",
    entity_type: d === "sole" || d === "person" || d === "public" ? d : "corp",
    category_seq: c(e.category_seq),
    folder_seq: c(e.folder_seq),
    terms_seq: c(e.terms_seq),
    business_no: a(e.business_no),
    representative_name: a(e.representative_name),
    phone: a(e.phone),
    email: a(e.email),
    address: a(e.address),
    address_detail: a(e.address_detail),
    contact_name: a(e.contact_name),
    contact_phone: a(e.contact_phone),
    contact_email: a(e.contact_email),
    bank_name: a(e.bank_name),
    account_no: a(e.account_no),
    account_holder: a(e.account_holder),
    memo: a(e.memo),
    content: a(e.content),
    enabled: e.enabled === void 0 ? !0 : m(e.enabled),
    created_time: a(e.created_time)
  };
}
function _(t) {
  const e = t ?? {},
    r = a(e.default_trade_type);
  return {
    seq: c(e.seq),
    name: a(e.name),
    default_trade_type: r === "sales" || r === "purchase" || r === "both" ? r : "",
    sort_no: c(e.sort_no),
    enabled: e.enabled === void 0 ? !0 : m(e.enabled)
  };
}
const f = {
  list: async (t = {}) => {
    const e = new URLSearchParams();
    t.tradeType && e.set("trade_type", t.tradeType), t.categorySeq && t.categorySeq > 0 && e.set("category_seq", String(t.categorySeq)), t.folder && t.folder !== "all" && e.set("folder", t.folder), t.search && e.set("search", t.search), t.includeDisabled && e.set("include_disabled", "true"), t.sort && e.set("sort", t.sort), t.dir && e.set("dir", t.dir), e.set("page", String(t.page ?? 1)), e.set("limit", String(t.limit ?? 50));
    const r = await n.http.get(`${o}/list?${e.toString()}`),
      d = i(r, s("partner.partnerListLoadFailed"));
    return {
      items: (d.items ?? []).map(l),
      total: c(d.total)
    };
  },
  detail: async t => {
    const e = await n.http.get(`${o}/${t}`);
    return l(i(e, s("partner.partnerLoadFailed")));
  },
  create: async t => {
    const e = await n.http.post(`${o}`, t);
    return c(i(e, s("partner.partnerCreateFailed")).seq);
  },
  update: async (t, e) => {
    const r = await n.http.patch(`${o}/${t}`, e);
    i(r, s("partner.partnerUpdateFailed"));
  },
  remove: async t => {
    const e = await n.http.delete(`${o}/${t}`);
    i(e, s("partner.partnerDeleteFailed"));
  },
  listCategories: async (t = !1) => {
    const e = t ? "?include_disabled=true" : "",
      r = await n.http.get(`${o}/categories${e}`);
    return (i(r, s("partner.categoryLoadFailed")).items ?? []).map(_);
  },
  createCategory: async t => {
    const e = await n.http.post(`${o}/categories`, t, !0, p());
    return c(i(e, s("partner.categoryCreateFailed")).seq);
  },
  updateCategory: async (t, e) => {
    const r = await n.http.patch(`${o}/categories/${t}`, e, !0, p());
    i(r, s("partner.categoryUpdateFailed"));
  },
  removeCategory: async t => {
    const e = await n.http.delete(`${o}/categories/${t}`, void 0, !0, p());
    i(e, s("partner.categoryDeleteFailed"));
  }
};
export { f as p };