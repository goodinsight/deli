import { bT as c } from "../js.d/main-Cm9wS5wt.js";
import { w as m, l as h, a as g } from "./i18nLabels-BNTLL7cu.js";
const f = h({
    fixed: "hr.attSetWorkTypeFixed",
    flexible: "hr.attSetWorkTypeFlexible",
    selective: "hr.attSetWorkTypeSelective",
    discretionary: "hr.attSetWorkTypeDiscretionary",
    shift: "hr.attSetWorkTypeShift"
  }),
  O = Object.keys(f).map(t => ({
    value: t,
    get label() {
      return f[t];
    }
  })),
  C = h({
    gps: "hr.attSetCheckMethodGps",
    qr: "hr.attSetCheckMethodQr",
    wifi: "hr.attSetCheckMethodWifi"
  }),
  p = h({
    button: "hr.attSetClockMethodButton",
    gps: "hr.attSetClockMethodGps",
    auto: "hr.attSetClockMethodAuto",
    wifi: "hr.attSetClockMethodWifi",
    qr: "hr.attSetClockMethodQr",
    manual: "hr.attSetClockMethodManual",
    request: "hr.attSetClockMethodRequest",
    outside: "hr.attSetClockMethodOutside",
    offsite: "hr.attSetClockMethodOffsite",
    trip: "hr.attSetClockMethodTrip",
    remote: "hr.attSetClockMethodRemote"
  }),
  _ = h({
    exact_center: "hr.attSetLocationFlagExactCenter",
    no_accuracy: "hr.attSetLocationFlagNoAccuracy",
    unverified: "hr.attSetLocationFlagUnverified"
  });
function E(t, o = !1) {
  return (t ?? []).filter(e => _[e] && (!o || e !== "unverified")).map(e => _[e]).join(" · ");
}
function M(t) {
  return p[t] ?? (t || "—");
}
const v = g(["hr.weekdayMon", "hr.weekdayTue", "hr.weekdayWed", "hr.weekdayThu", "hr.weekdayFri", "hr.weekdaySat", "hr.weekdaySun"]),
  R = h({
    done: "hr.attSetDayStatusDone",
    working: "hr.attSetDayStatusWorking",
    missing_out: "hr.attSetDayStatusMissingOut",
    absent: "hr.attSetDayStatusAbsent",
    leave: "hr.attSetDayStatusLeave",
    half: "hr.attSetDayStatusHalf",
    quarter: "hr.attSetDayStatusQuarter",
    away: "hr.attSetDayStatusAway",
    off: "hr.attSetDayStatusOff",
    upcoming: "hr.attSetDayStatusUpcoming",
    not_yet: "hr.attSetDayStatusNotYet",
    none: "hr.attSetDayStatusNone"
  });
function P(t) {
  switch (t) {
    case "absent":
    case "missing_out":
    case "not_yet":
      return {
        color: "#b91c1c",
        bg: "#fee2e2"
      };
    case "leave":
    case "half":
    case "quarter":
      return {
        color: "#1d4ed8",
        bg: "#dbeafe"
      };
    case "away":
      return {
        color: "#7c3aed",
        bg: "#ede9fe"
      };
    case "working":
    case "done":
      return {
        color: "#047857",
        bg: "#d1fae5"
      };
    default:
      return {
        color: "#475569",
        bg: "#f1f5f9"
      };
  }
}
const w = h({
  outside: "hr.attSetClockMethodOutside",
  trip: "hr.attSetClockMethodTrip"
});
function N(t) {
  return [t.away_kind === "outside" || t.away_kind === "trip" ? w[t.away_kind] : "", t.check_in_at && c("hr.attSetClockInAt", {
    time: t.check_in_at.slice(11)
  }), t.check_out_at && c("hr.attSetClockOutAt", {
    time: t.check_out_at.slice(11)
  })].filter(Boolean).join(" · ");
}
function U(t, o, a, e = !1) {
  return o <= 0 || e ? !1 : !a.some(r => r.work_date === t && (r.status === "waiting" || r.status === "in_progress" || r.status === "approved"));
}
const W = h({
    waiting: "hr.attSetRequestStatusInApproval",
    in_progress: "hr.attSetRequestStatusInApproval",
    approved: "hr.attSetRequestStatusApproved",
    rejected: "hr.attSetRequestStatusRejected"
  }),
  $ = h({
    pending: "hr.attSetRequestStatusPending",
    approved: "hr.attSetRequestStatusApproved",
    rejected: "hr.attSetRequestStatusRejected"
  }),
  j = h({
    adjust: "hr.attSetAdjustKindAdjust",
    carry: "hr.attSetAdjustKindCarry",
    expire: "hr.attSetAdjustKindExpire"
  }),
  B = h({
    none: "",
    clock_in: "hr.attSetGeoPromptClockIn",
    early_or_outing: "hr.attSetGeoPromptEarlyOrOuting",
    clock_out: "hr.attSetGeoPromptClockOut"
  }),
  x = h({
    before: "hr.attSetPromotionStageBefore",
    notice_window: "hr.attSetPromotionStageNoticeWindow",
    missed: "hr.attSetPromotionStageMissed",
    noticed: "hr.attSetPromotionStageNoticed",
    overdue: "hr.attSetPromotionStageOverdue",
    planned: "hr.attSetPromotionStagePlanned",
    designated: "hr.attSetPromotionStageDesignated"
  });
function I(t) {
  const [o, a, e] = t.split("-").map(Number);
  return !o || !a || !e ? t : c("hr.attSetLongDate", {
    month: a,
    day: e,
    weekday: m(new Date(Date.UTC(o, a - 1, e)).getUTCDay())
  });
}
function d(t, o = "") {
  if (!t) return o;
  const a = Math.floor(t / 60),
    e = Math.round(t % 60);
  return a ? e ? c("hr.hoursMinutes", {
    h: a,
    m: e
  }) : c("hr.hoursOnly", {
    h: a
  }) : c("hr.minutesOnly", {
    m: e
  });
}
function K(t) {
  return t ? String(Math.round(t / 60 * 10) / 10) : "";
}
function k(t, o) {
  if (!t) return "";
  const a = t.slice(0, 10),
    e = t.slice(11, 16);
  return a && o && a > o ? `${e}(+1)` : e;
}
function F(t) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(t)) return t;
  const [o, a, e] = t.split("-").map(Number),
    r = new Date(Date.UTC(o, a - 1, e)).getUTCDay();
  return `${a}/${e}(${m(r)})`;
}
function T(t) {
  const [o, a, e] = t.split("-").map(Number),
    r = new Date(Date.UTC(o, a - 1, e)).getUTCDay();
  return r === 0 ? 7 : r;
}
function D(t, o) {
  const [a, e, r] = t.split("-").map(Number);
  return new Date(Date.UTC(a, e - 1, r + o)).toISOString().slice(0, 10);
}
function G(t, o) {
  const a = T(t);
  return D(t, o === 1 ? 1 - a : -(a % 7));
}
function q() {
  return new Date().toLocaleDateString("sv-SE", {
    timeZone: "Asia/Seoul"
  });
}
function A(t) {
  return t.workday ? t.work_type === "discretionary" ? c("hr.attSetPlannedDiscretionary") : t.start && t.end ? `${t.start}~${t.end}` : c("hr.attSetPlannedNoTime") : c("hr.attSetDayStatusOff");
}
const z = t => t.kind === "off" ? c("hr.attSetDayStatusOff") : `${t.start_time}~${t.end_time}`,
  Q = h({
    work: "hr.attSetStatWork",
    away: "hr.attSetDayStatusAway",
    overtime: "hr.attSetStatOvertime",
    night: "hr.attSetStatNight",
    night_shift: "hr.attSetStatNightShift",
    late: "hr.attSetStatLate",
    early: "hr.attSetStatEarly",
    absent: "hr.attSetDayStatusAbsent",
    missing_out: "hr.attSetDayStatusMissingOut",
    leave: "hr.attSetDayStatusLeave"
  });
function Y(t, o) {
  const a = new Date(`${t.date}T00:00:00Z`).getUTCDay(),
    e = t.clock?.check_out_at.slice(11, 16) ?? "",
    r = s => /^\d{2}:\d{2}$/.test(s) ? Number(s.slice(0, 2)) * 60 + Number(s.slice(3)) : null,
    n = s => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`,
    l = r(e),
    u = Math.min(t.unrecognized_overtime_minutes ?? 0, 1439),
    i = l !== null && u > 0 ? n(((l - u) % 1440 + 1440) % 1440) : "",
    S = i || (t.planned.workday && t.planned.end ? t.planned.end : t.clock?.check_in_at.slice(11, 16) ?? "");
  return {
    overtime_date: t.date,
    overtimeType: o ? "휴일근무" : a === 0 || a === 6 ? "주말근무" : "평일야근",
    ...(S ? {
      start_time: S
    } : {}),
    ...(e ? {
      end_time: e
    } : {}),
    ...(i ? {
      request_time: n(u)
    } : {})
  };
}
function H(t, o, a) {
  const e = [];
  for (const r of o) {
    const n = r.clock,
      l = n?.check_in_at ? `${k(n.check_in_at, r.date)}~${n.check_out_at ? k(n.check_out_at, r.date) : "…"}` : "",
      u = (i, S = "", s = l, y = 0) => e.push({
        date: r.date,
        text: s,
        value: i,
        note: S,
        unrecognized: y
      });
    switch (t) {
      case "work":
        n?.check_in_at && u(d(n.work_minutes));
        break;
      case "away":
        {
          const i = (n?.outings ?? []).map(s => `${s.place} ${s.start}~${s.end || "…"}`).join(" · "),
            S = r.leaves.filter(s => s.kind === "outside" || s.kind === "trip" || s.kind === "remote").map(s => a(s.kind)).join(" · ");
          (r.status === "away" || i) && u(S || c("hr.attSetClockMethodOutside"), i);
          break;
        }
      case "overtime":
        {
          const i = r.unrecognized_overtime_minutes ?? 0;
          ((n?.overtime_minutes ?? 0) > 0 || i > 0) && u(d(n?.overtime_minutes ?? 0), i > 0 ? c("hr.attSetUnrecognizedOvertime", {
            duration: d(i)
          }) : "", l, i);
          break;
        }
      case "night":
        (n?.night_minutes ?? 0) > 0 && u(d(n?.night_minutes ?? 0));
        break;
      case "night_shift":
        r.night_shift && u(d(n?.night_minutes ?? 0));
        break;
      case "late":
        r.late && u(d(n?.late_minutes ?? 0), n?.late_reason ? c("hr.attSetReasonPrefix", {
          reason: n.late_reason
        }) : "");
        break;
      case "early":
        r.early && u(d(n?.early_minutes ?? 0));
        break;
      case "absent":
        r.status === "absent" && u(c("hr.attSetDayStatusAbsent"), "", A(r.planned));
        break;
      case "missing_out":
        r.status === "missing_out" && u(c("hr.attSetDayStatusMissingOut"));
        break;
      case "leave":
        {
          const i = r.leaves.filter(S => S.kind !== "outside" && S.kind !== "trip" && S.kind !== "remote");
          i.length && u(i.map(S => a(S.kind)).join(" · "), i.map(S => S.memo ?? "").filter(Boolean).join(" · "));
          break;
        }
    }
  }
  return e;
}
export { Q as A, C, R as D, B as G, W as O, x as P, $ as R, O as W, v as a, f as b, H as c, P as d, k as e, Y as f, N as g, z as h, j as i, M as j, E as k, I as l, d as m, D as n, U as o, A as p, K as q, F as s, q as t, G as w };