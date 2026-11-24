import { bT as c, ce as r, cf as u } from "../js.d/main-Cm9wS5wt.js";
const e = {
    cash: "accounting.methodCash",
    transfer: "accounting.methodTransfer",
    card: "accounting.methodCard",
    other: "accounting.methodOther"
  },
  g = Object.keys(e);
function l(n, a = c) {
  return e[n] ? a(e[n]) : "";
}
function d(n, a, t = c) {
  return t(a === "canceled" ? "accounting.statusCanceled" : a === "completed" ? "accounting.statusCardPending" : a === "pending" ? n === "revenue" ? "accounting.statusReceivable" : "accounting.statusPayable" : n === "revenue" ? "accounting.statusReceived" : "accounting.statusPaid");
}
const o = {
  manual: "accounting.sourceManual",
  card_import: "accounting.sourceCardImport",
  bank_import: "accounting.sourceBankImport",
  partner_voucher: "accounting.sourcePartnerVoucher",
  payroll: "accounting.sourcePayroll",
  approval: "accounting.sourceApproval",
  api: "accounting.sourceApi"
};
function m(n, a = c) {
  return o[n] ? a(o[n]) : "";
}
function p(n) {
  return n === "manual" || n === "card_import" || n === "bank_import";
}
function i(n) {
  return Math.round(Number(n) || 0).toLocaleString(r(u()));
}
function f(n, a = c) {
  return a("accounting.won", {
    amount: i(n)
  });
}
function b() {
  return new Date(Date.now() + 9 * 36e5).toISOString().slice(0, 10);
}
export { g as P, d as a, i as f, p as i, b as k, l as m, m as s, f as w };