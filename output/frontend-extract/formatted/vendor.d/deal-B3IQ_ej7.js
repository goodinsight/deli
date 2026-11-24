import { m7 as c, bT as l, m8 as o, ce as i, cf as p } from "../js.d/main-Cm9wS5wt.js";
function f(t) {
  return t.partner_name || t.customer_name;
}
const A = o({
    quote: "partner.stageQuote",
    contract: "partner.stageContract"
  }),
  L = c([{
    value: "",
    labelKey: "partner.all"
  }, {
    value: "quote",
    labelKey: "partner.stageQuote"
  }, {
    value: "contract",
    labelKey: "partner.stageContract"
  }]),
  _ = o({
    exclusive: "partner.vatExclusive",
    none: "partner.vatNone"
  }),
  g = "stage";
function S(t) {
  return t === "quote" || t === "contract" ? t : "";
}
function r(t) {
  const n = Number(String(t ?? "").replace(/,/g, ""));
  return Number.isFinite(n) && n > 0 ? n : 0;
}
function D(t, n) {
  const a = Math.round(r(t) * 100) / 100;
  return Math.round(a * Math.round(r(n)));
}
function T(t, n) {
  const a = t.reduce((s, u) => s + u, 0),
    e = n === "none" ? 0 : Math.floor(a / 10);
  return {
    supply: a,
    vat: e,
    total: a + e
  };
}
function m(t) {
  return Math.round(t).toLocaleString(i(p()));
}
function b(t) {
  return l("partner.amountWon", {
    amount: m(t)
  });
}
function d(t = 0) {
  return new Date(Date.now() + t * 864e5).toLocaleDateString("sv-SE", {
    timeZone: "Asia/Seoul"
  });
}
export { A as D, _ as a, g as b, L as c, T as d, f as e, m as f, d as k, D as l, S as p, r as t, b as w };