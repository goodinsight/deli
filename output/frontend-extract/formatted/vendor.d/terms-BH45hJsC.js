import { bM as o, bT as n, m7 as b, m8 as _ } from "../js.d/main-Cm9wS5wt.js";
const i = "/v1/partner/terms";
function y(t, a) {
  if (!t || t.ok === !1) throw new Error(t?.message || a);
  return t.data;
}
function s(t) {
  const a = Number(t ?? 0);
  return Number.isFinite(a) ? a : 0;
}
function h(t) {
  const a = t ?? {},
    e = String(a.basis ?? "");
  return {
    seq: s(a.seq),
    name: String(a.name ?? ""),
    basis: e === "days" || e === "immediate" ? e : "closing",
    closing_day: s(a.closing_day),
    pay_month_offset: s(a.pay_month_offset),
    pay_day: s(a.pay_day),
    pay_days: s(a.pay_days),
    memo: String(a.memo ?? ""),
    enabled: a.enabled !== !1,
    sort_no: s(a.sort_no)
  };
}
const S = {
    list: async (t = !1) => {
      const a = t ? "?include_disabled=true" : "",
        e = await o.http.get(`${i}${a}`);
      return (y(e, n("partner.termsLoadFailed")).items ?? []).map(h);
    },
    create: async t => {
      const a = await o.http.post(i, t);
      return s(y(a, n("partner.termsCreateFailed")).seq);
    },
    update: async (t, a) => {
      const e = await o.http.patch(`${i}/${t}`, a);
      y(e, n("partner.termsSaveFailed"));
    },
    remove: async t => {
      const a = await o.http.delete(`${i}/${t}`);
      y(a, n("partner.termsDeleteFailed"));
    }
  },
  T = _({
    closing: "partner.basisClosing",
    days: "partner.basisDays",
    immediate: "partner.basisImmediate"
  }),
  w = b([{
    value: 0,
    labelKey: "partner.lastDay"
  }, ...Array.from({
    length: 31
  }, (t, a) => ({
    value: a + 1,
    labelKey: "partner.dayOfMonth",
    params: {
      day: a + 1
    }
  }))]),
  g = b([{
    value: 0,
    labelKey: "partner.monthCurrent"
  }, {
    value: 1,
    labelKey: "partner.monthNext"
  }, {
    value: 2,
    labelKey: "partner.monthAfterNext"
  }, {
    value: 3,
    labelKey: "partner.monthsLater",
    params: {
      count: 3
    }
  }]);
function u(t) {
  return t > 0 ? n("partner.dayOfMonth", {
    day: t
  }) : n("partner.lastDay");
}
function C(t) {
  if (t.basis === "immediate") return n("partner.describeImmediate");
  if (t.basis === "days") return n("partner.describeDays", {
    days: t.pay_days
  });
  const a = g.find(e => e.value === t.pay_month_offset)?.label ?? n("partner.monthsLater", {
    count: t.pay_month_offset
  });
  return n("partner.describeClosing", {
    closingDay: u(t.closing_day),
    month: a,
    payDay: u(t.pay_day)
  });
}
function f(t, a, e) {
  const r = new Date(Date.UTC(t, a + 1, 0)).getUTCDate();
  return e <= 0 || e > r ? r : e;
}
function O(t, a) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(t)) return "";
  const [e, r, p] = t.split("-").map(Number);
  if (a.basis === "immediate") return t;
  if (a.basis === "days") return new Date(Date.UTC(e, r - 1, p + a.pay_days)).toISOString().slice(0, 10);
  let l = r - 1;
  p > f(e, l, a.closing_day) && (l += 1);
  const c = new Date(Date.UTC(e, l + a.pay_month_offset, 1)),
    m = c.getUTCFullYear(),
    d = c.getUTCMonth();
  return new Date(Date.UTC(m, d, f(m, d, a.pay_day))).toISOString().slice(0, 10);
}
export { w as D, g as P, T, O as c, C as d, S as t };