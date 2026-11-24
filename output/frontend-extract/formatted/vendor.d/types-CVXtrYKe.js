import { bT as o, ce as l, cf as p } from "../js.d/main-Cm9wS5wt.js";
function I(e) {
  return new Intl.DateTimeFormat(l(p()), {
    weekday: "short",
    timeZone: "UTC"
  }).format(Date.UTC(2023, 0, 1 + (e % 7 + 7) % 7));
}
function y(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})/.exec(e);
  return t ? new Intl.DateTimeFormat(l(p()), {
    month: "long",
    day: "numeric",
    timeZone: "UTC"
  }).format(Date.UTC(Number(t[1]), Number(t[2]) - 1, Number(t[3]))) : e;
}
function O(e) {
  const t = Math.floor(e / 60),
    n = e % 60;
  return t > 0 && n > 0 ? o("booking.hoursMinutes", {
    hours: t,
    minutes: n
  }) : t > 0 ? o("booking.hours", {
    count: t
  }) : o("booking.minutes", {
    count: n
  });
}
const S = [1, 2, 3, 4, 5, 6, 0],
  G = [10, 15, 20, 30, 60, 90, 120].map(e => ({
    value: e,
    get label() {
      return O(e);
    }
  })),
  _ = e => e.charAt(0).toUpperCase() + e.slice(1),
  f = ["general", "lodging", "rental", "beauty", "clinic", "lesson", "space", "restaurant"].map(e => ({
    value: e,
    get label() {
      return o(`booking.business${_(e)}`);
    },
    get resource() {
      return o(`booking.resource${_(e)}`);
    },
    get product() {
      return o(`booking.product${_(e)}`);
    }
  }));
function B(e) {
  const t = f.find(n => n.value === e) ?? f[0];
  return {
    resource: t.resource,
    product: t.product
  };
}
const T = 64,
  D = {
    height: T * 3,
    maxWidth: 960
  },
  $ = {
    height: 630,
    maxWidth: 1200
  },
  E = {
    bank_name: "",
    account_no: "",
    account_holder: "",
    deposit_default: 0,
    deposit_unit: "won",
    deposit_due_hours: 24,
    contact_phone: "",
    default_minutes: 60,
    day_start_time: "09:00",
    day_end_time: "18:00",
    business_type: "general",
    open_hours: [0, 1, 2, 3, 4, 5, 6].map(e => ({
      day: e,
      open: "09:00",
      close: "18:00",
      closed: !1
    })),
    closed_dates: [],
    close_on_holidays: !1,
    online_enabled: !1,
    slot_min: 30,
    min_notice_min: 0,
    max_days_ahead: 60,
    min_days_ahead: 0,
    auto_confirm: !0,
    cancel_until_min: 0,
    allow_guest: !0,
    page_slug: "",
    page_intro: "",
    page_logo: "",
    page_og_image: "",
    page_header_image: "logo",
    page_name: "",
    page_address: "",
    page_address2: ""
  },
  w = [{
    value: "booking",
    get label() {
      return o("booking.unitBooking");
    }
  }, {
    value: "hour",
    get label() {
      return o("booking.hours", {
        count: 1
      });
    }
  }, {
    value: "day",
    get label() {
      return o("booking.days", {
        count: 1
      });
    }
  }, {
    value: "month",
    get label() {
      return o("booking.months", {
        count: 1
      });
    }
  }],
  M = {
    booking: [],
    hour: [2, 3, 4, 8].map(e => ({
      value: e,
      get label() {
        return o("booking.hours", {
          count: e
        });
      }
    })),
    day: [2, 3, 7, 14, 30].map(e => ({
      value: e,
      get label() {
        return o("booking.days", {
          count: e
        });
      }
    })),
    month: [1, 3, 6, 12].map(e => ({
      value: e,
      get label() {
        return e === 12 ? o("booking.years", {
          count: 1
        }) : o("booking.months", {
          count: e
        });
      }
    }))
  },
  K = ["에어컨", "냉장고", "세탁기", "건조기", "TV", "전자레인지", "인덕션", "헤어드라이기", "침대", "책상", "의자", "옷장", "화장대", "서랍장", "신발장", "소파", "인터넷", "와이파이", "주차", "엘리베이터"];
function L(e, t) {
  const n = /^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})/.exec(e);
  if (!n) return "";
  const [r, a, i, c, m] = n.slice(1).map(Number),
    s = new Date(r, a - 1 + t, 1),
    g = new Date(s.getFullYear(), s.getMonth() + 1, 0).getDate(),
    u = d => String(d).padStart(2, "0");
  return `${s.getFullYear()}-${u(s.getMonth() + 1)}-${u(Math.min(i, g))} ${u(c)}:${u(m)}`;
}
function k(e, t) {
  const n = m => {
      const s = /^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})/.exec(m);
      if (!s) return null;
      const [g, u, d, h, b] = s.slice(1).map(Number);
      return {
        y: g,
        m: u,
        d,
        minutes: h * 60 + b
      };
    },
    r = n(e),
    a = n(t);
  if (!r || !a) return 0;
  const i = (a.y - r.y) * 12 + (a.m - r.m),
    c = a.d < r.d || a.d === r.d && a.minutes < r.minutes;
  return Math.max(0, i - (c ? 1 : 0));
}
function P(e, t, n) {
  if (!e || e.price <= 0) return 0;
  if (e.price_unit === "booking") return e.price;
  const r = Date.parse(t.replace(" ", "T")),
    a = Date.parse(n.replace(" ", "T"));
  if (!Number.isFinite(r) || !Number.isFinite(a) || a <= r) return 0;
  const i = (a - r) / 6e4;
  return e.price_unit === "hour" ? Math.floor(e.price * i / 60) : e.price_unit === "month" ? e.price * Math.max(1, k(t, n)) : e.price * Math.max(1, Math.ceil(i / 1440));
}
function U(e, t) {
  const n = e.find(r => r.seq === t);
  return n ? n.group_name ? `${n.group_name} · ${n.name}` : n.name : "";
}
function x(e) {
  return e.reduce((t, n) => ({
    amount: t.amount + n.price * n.qty,
    minutes: t.minutes + n.duration_minutes * n.qty
  }), {
    amount: 0,
    minutes: 0
  });
}
const C = {
  get requested() {
    return o("booking.statusRequested");
  },
  get awaiting_payment() {
    return o("booking.statusAwaitingPayment");
  },
  get confirmed() {
    return o("booking.statusConfirmed");
  },
  get done() {
    return o("booking.statusDone");
  },
  get canceled() {
    return o("booking.statusCanceled");
  },
  get no_show() {
    return o("booking.statusNoShow");
  }
};
function F(e, t) {
  return e.deposit_default > 0 ? e.deposit_unit !== "percent" ? e.deposit_default : Math.floor(Math.max(0, Number(t) || 0) * e.deposit_default / 100) : 0;
}
function q(e) {
  return o("booking.won", {
    amount: (Number(e) || 0).toLocaleString(l(p()))
  });
}
function R(e, t) {
  const n = r => `${r.slice(2, 4)}.${r.slice(5, 7)}.${r.slice(8, 10)}${r.length > 10 ? ` ${r.slice(11, 16)}` : ""}`;
  return /^\d{4}-\d{2}-\d{2}/.test(e) ? t ? e.slice(0, 10) === t.slice(0, 10) ? `${n(e)} ~ ${t.slice(11, 16)}` : `${n(e)} ~ ${n(t)}` : n(e) : e;
}
const Y = {
  get deposit() {
    return o("booking.messageDeposit");
  },
  get confirmed() {
    return o("booking.messageConfirmed");
  },
  get canceled() {
    return o("booking.messageCanceled");
  }
};
export { T as B, E as D, K as a, w as b, M as c, B as d, D as e, $ as f, f as g, S as h, G as i, C as j, R as k, q as l, L as m, P as n, F as o, k as p, Y as q, U as r, x as s, O as t, y as u, I as w };