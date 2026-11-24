import { bT as s, m8 as m, bM as o } from "../js.d/main-Cm9wS5wt.js";
function p(t) {
  return {
    get name() {
      return s(`partner.${t}Name`);
    },
    get pay() {
      return s(`partner.${t}Pay`);
    },
    get unpaid() {
      return s(`partner.${t}Unpaid`);
    },
    get partner() {
      return s(t === "sales" ? "partner.tradeSales" : "partner.tradePurchase");
    },
    tradeType: t
  };
}
const f = {
    sales: p("sales"),
    purchase: p("purchase")
  },
  _ = m({
    tax_invoice: "partner.evidenceTaxInvoice",
    invoice: "partner.evidenceInvoice",
    cash_receipt: "partner.evidenceCashReceipt",
    card: "partner.methodCard",
    none: "partner.evidenceNone"
  }),
  l = m({
    transfer: "partner.methodTransfer",
    cash: "partner.methodCash",
    card: "partner.methodCard",
    bill: "partner.methodBill",
    offset: "partner.methodOffset",
    etc: "partner.methodEtc"
  });
function b(t, e) {
  return t.settled ? "settled" : t.due_date && t.due_date < e ? "overdue" : t.paid_amount > 0 ? "partial" : "open";
}
const $ = "partner",
  g = "unsettled",
  S = "kind";
function w(t) {
  return t === "purchase" ? "purchase" : "sales";
}
const c = "/v1/partner";
function i(t, e) {
  if (!t || t.ok === !1) throw new Error(t?.message || e);
  return t.data;
}
function n(t) {
  return typeof t == "string" ? t : t == null ? "" : String(t);
}
function a(t) {
  const e = Number(t ?? 0);
  return Number.isFinite(e) ? e : 0;
}
function h(t) {
  const e = t ?? {};
  return {
    name: n(e.name),
    spec: n(e.spec),
    qty: a(e.qty),
    unit_price: a(e.unit_price),
    amount: a(e.amount),
    note: n(e.note)
  };
}
function v(t) {
  const e = t ?? {},
    r = n(e.method);
  return {
    seq: a(e.seq),
    voucher_seq: a(e.voucher_seq),
    pay_date: n(e.pay_date),
    amount: a(e.amount),
    method: r in l ? r : "transfer",
    memo: n(e.memo),
    created_by_name: n(e.created_by_name)
  };
}
function d(t) {
  const e = t ?? {},
    r = n(e.evidence);
  return {
    seq: a(e.seq),
    kind: e.kind === "purchase" ? "purchase" : "sales",
    voucher_no: n(e.voucher_no),
    voucher_date: n(e.voucher_date),
    title: n(e.title),
    partner_seq: a(e.partner_seq),
    partner_name: n(e.partner_name),
    evidence: r in _ ? r : "tax_invoice",
    vat_mode: e.vat_mode === "none" ? "none" : "exclusive",
    supply_amount: a(e.supply_amount),
    vat_amount: a(e.vat_amount),
    total_amount: a(e.total_amount),
    due_date: n(e.due_date),
    paid_amount: a(e.paid_amount),
    balance: a(e.balance),
    settled: e.settled === !0,
    memo: n(e.memo),
    items: Array.isArray(e.items) ? e.items.map(h) : [],
    payments: Array.isArray(e.payments) ? e.payments.map(v) : [],
    created_by_name: n(e.created_by_name),
    created_time: n(e.created_time)
  };
}
function y(t) {
  const e = t ?? {};
  return {
    partner_seq: a(e.partner_seq),
    partner_name: n(e.partner_name),
    count: a(e.count),
    total: a(e.total),
    paid: a(e.paid),
    balance: a(e.balance),
    overdue: a(e.overdue),
    next_due_date: n(e.next_due_date)
  };
}
const A = {
  list: async t => {
    const e = new URLSearchParams();
    e.set("kind", t.kind), t.partnerSeq && t.partnerSeq > 0 && e.set("partner_seq", String(t.partnerSeq)), t.unsettled && e.set("unsettled", "true"), t.search && e.set("search", t.search), e.set("page", String(t.page ?? 1)), e.set("limit", String(t.limit ?? 50));
    const r = await o.http.get(`${c}/vouchers?${e.toString()}`),
      u = i(r, s("partner.voucherListLoadFailed"));
    return {
      items: (u.items ?? []).map(d),
      total: a(u.total)
    };
  },
  detail: async t => {
    const e = await o.http.get(`${c}/vouchers/${t}`);
    return d(i(e, s("partner.voucherLoadFailed")));
  },
  create: async t => {
    const e = await o.http.post(`${c}/vouchers`, t);
    return a(i(e, s("partner.voucherCreateFailed")).seq);
  },
  update: async (t, e) => {
    const r = await o.http.patch(`${c}/vouchers/${t}`, e);
    i(r, s("partner.voucherSaveFailed"));
  },
  remove: async t => {
    const e = await o.http.delete(`${c}/vouchers/${t}`);
    i(e, s("partner.voucherDeleteFailed"));
  },
  createPayment: async (t, e) => {
    const r = await o.http.post(`${c}/vouchers/${t}/payments`, e);
    i(r, s("partner.paymentCreateFailed"));
  },
  removePayment: async t => {
    const e = await o.http.delete(`${c}/payments/${t}`);
    i(e, s("partner.paymentDeleteFailed"));
  },
  balances: async t => {
    const e = await o.http.get(`${c}/balances?kind=${t}`),
      r = i(e, s("partner.balanceLoadFailed"));
    return {
      items: (r.items ?? []).map(y),
      summary: {
        balance: a(r.summary?.balance),
        overdue: a(r.summary?.overdue),
        count: a(r.summary?.count)
      },
      truncated: r.truncated === !0
    };
  }
};
export { S as B, _ as E, l as P, f as V, $ as a, g as b, b as c, w as p, A as v };