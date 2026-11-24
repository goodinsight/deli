import { bT as d, bM as _ } from "../js.d/main-Cm9wS5wt.js";
import { d as N, W as O, H as M, c as A } from "./types-CVhETUvu.js";
import { l as D } from "./i18nLabels-BNTLL7cu.js";
const C = ["school", "career", "cert", "training", "reward"],
  G = D({
    school: "hr.employeeKindSchool",
    career: "hr.recordKindCareer",
    cert: "hr.employeeKindCert",
    training: "hr.employeeKindTraining",
    reward: "hr.recordKindReward"
  }),
  J = ["고졸", "전문학사", "학사", "석사", "박사"],
  W = ["졸업", "재학", "휴학", "중퇴", "수료"],
  q = {
    school: [],
    career: [],
    cert: [],
    training: [],
    reward: [],
    summary: {
      total_career_days: 0,
      same_industry_days: 0
    }
  };
let w = 0;
function E() {
  return w += 1, `new-${w}`;
}
function R(t) {
  switch (t) {
    case "school":
      return {
        major: "",
        degree: "",
        status: ""
      };
    case "career":
      return {
        role: "",
        job: "",
        same_industry: !1
      };
    case "cert":
      return {
        issuer: "",
        number: "",
        level: ""
      };
    case "training":
      return {
        institution: "",
        hours: "",
        next_date: "",
        content: ""
      };
    case "reward":
      return {
        type: "reward",
        reason: "",
        amount: "",
        content: ""
      };
  }
}
function Z(t) {
  return {
    seq: 0,
    key: E(),
    kind: t,
    title: "",
    start_date: "",
    end_date: "",
    data: R(t)
  };
}
function p(t) {
  return typeof t == "string" ? t : t == null ? "" : String(t);
}
function g(t) {
  const e = p(t).slice(0, 10);
  return /^\d{4}-\d{2}-\d{2}$/.test(e) && e !== "0000-00-00" ? e : "";
}
function k(t, e) {
  const r = e ?? {},
    n = r.data && typeof r.data == "object" ? r.data : {},
    a = R(t);
  for (const c of Object.keys(a)) {
    const l = n[c];
    typeof a[c] == "boolean" ? a[c] = l === !0 : c === "next_date" ? a[c] = g(l) : c === "hours" || c === "amount" ? a[c] = Number(l) > 0 ? String(l) : "" : a[c] = p(l) || a[c];
  }
  const s = Number(r.seq ?? 0) || 0;
  return {
    seq: s,
    key: s > 0 ? `seq-${s}` : E(),
    kind: t,
    title: p(r.title),
    start_date: g(r.start_date),
    end_date: g(r.end_date),
    data: a
  };
}
function b(t) {
  const e = t ?? {},
    r = e.summary ?? {},
    n = {
      ...q,
      summary: {
        total_career_days: Number(r.total_career_days ?? 0) || 0,
        same_industry_days: Number(r.same_industry_days ?? 0) || 0
      }
    };
  for (const a of C) n[a] = (Array.isArray(e[a]) ? e[a] : []).map(s => k(a, s));
  return n;
}
const j = ["school", "career", "cert", "reward"];
function V(t) {
  const e = [];
  for (const r of j) for (const n of t[r]) {
    const a = {
      ...n.data
    };
    "hours" in a && (a.hours = Number(a.hours) || 0), "amount" in a && (a.amount = Number(String(a.amount).replace(/,/g, "")) || 0), e.push({
      ...(n.seq > 0 ? {
        seq: n.seq
      } : {}),
      kind: r,
      title: n.title.trim(),
      start_date: n.start_date,
      end_date: n.end_date,
      data: a
    });
  }
  return e;
}
function Q(t, e) {
  let r = 0,
    n = 0;
  for (const a of t) {
    if (!a.start_date) continue;
    const s = a.end_date || e,
      c = Math.max(0, Math.round((Date.parse(`${s}T00:00:00Z`) - Date.parse(`${a.start_date}T00:00:00Z`)) / 864e5));
    Number.isFinite(c) && (r += c, a.data.same_industry === !0 && (n += c));
  }
  return {
    total_career_days: r,
    same_industry_days: n
  };
}
function X(t) {
  return t <= 0 ? 0 : Math.floor(t / 365) * 12 + Math.min(11, Math.floor(t % 365 / 30));
}
function ee(t) {
  if (t <= 0) return d("hr.none");
  const e = Math.floor(t / 365),
    r = Math.min(11, Math.floor(t % 365 / 30));
  return e === 0 ? r === 0 ? d("hr.recordUnderOneMonth") : d("hr.employeeMonthsN", {
    count: r
  }) : r === 0 ? d("hr.recordYearsN", {
    count: e
  }) : d("hr.recordYearsMonths", {
    years: e,
    months: r
  });
}
function T(t) {
  const e = t ?? {},
    r = n => (Array.isArray(e[n]) ? e[n] : []).map(a => {
      const s = a ?? {},
        {
          title: c,
          start_date: l,
          end_date: $,
          ...x
        } = s;
      return k(n, {
        seq: 0,
        title: c,
        start_date: l,
        end_date: $,
        data: x
      });
    });
  return {
    name: p(e.name),
    name_matches: e.name_matches !== !1,
    school: r("school"),
    career: r("career"),
    cert: r("cert"),
    training: r("training")
  };
}
const L = ["name", "birth", "many", "birth_mismatch", "none"];
function P(t) {
  const e = t ?? {},
    r = L.find(a => a === e.match) ?? "none",
    n = (Array.isArray(e.candidates) ? e.candidates : []).map(a => {
      const s = a ?? {};
      return {
        seq: Number(s.seq) || 0,
        name: p(s.name),
        unit_seq: Number(s.unit_seq) || 0,
        position: p(s.position),
        job_title: p(s.job_title),
        status: p(s.status) || "active",
        join_date: p(s.join_date),
        resign_date: p(s.resign_date),
        birth_matches: typeof s.birth_matches == "boolean" ? s.birth_matches : null
      };
    });
  return {
    ...T(t),
    matched_seq: Number(e.matched_seq) || 0,
    match: r,
    candidates: n.filter(a => a.seq > 0)
  };
}
function te(t, e) {
  const r = c => c.replace(/\s+/g, ""),
    n = c => `${r(c.title)}|${c.start_date}`,
    a = new Set(t.filter(c => c.title.trim()).map(n)),
    s = [];
  for (const c of e) {
    const l = n(c);
    a.has(l) || (a.add(l), s.push(c));
  }
  return [...t.filter(c => c.title.trim() || c.start_date || c.end_date), ...s];
}
const m = "/v1/hr";
function u(t, e) {
  if (!t || t.ok === !1) throw new Error(t?.message || e);
  return t.data;
}
function f(t) {
  return t === !0 || t === 1 || t === "1" || t === "Y" || t === "true";
}
function i(t) {
  const e = Number(t ?? 0);
  return Number.isFinite(e) ? e : 0;
}
function o(t) {
  return typeof t == "string" ? t : t == null ? "" : String(t);
}
function h(t) {
  const e = o(t).slice(0, 10);
  return /^\d{4}-\d{2}-\d{2}$/.test(e) && e !== "0000-00-00" ? e : "";
}
const v = new Set(["regular", "contract", "parttime", "intern", "freelance"]),
  I = new Set(["active", "leave", "resigned"]);
function S(t) {
  const e = t ?? {},
    r = o(e.employment_type),
    n = o(e.status);
  return {
    seq: i(e.seq),
    name: o(e.name),
    has_push_device: e.has_push_device === !0,
    has_biometric: e.has_biometric === !0,
    app_version: typeof e.app_version == "string" ? e.app_version : "",
    last_login_time: typeof e.last_login_time == "string" ? e.last_login_time : "",
    total_career_days: i(e.total_career_days),
    total_career_months: i(e.total_career_months),
    account_seq: i(e.account_seq),
    staff_num: o(e.staff_num),
    unit_seq: i(e.unit_seq),
    position: o(e.position),
    job_title: o(e.job_title),
    employment_type: v.has(r) ? r : "regular",
    status: I.has(n) ? n : "active",
    join_date: h(e.join_date),
    resign_date: h(e.resign_date),
    phone: o(e.phone),
    email: o(e.email),
    birth_date: h(e.birth_date),
    address: o(e.address),
    memo: o(e.memo),
    enabled: e.enabled === void 0 ? !0 : f(e.enabled),
    created_time: o(e.created_time),
    leave_reason: y(e.leave_reason, B),
    jumin_num: o(e.jumin_num).replace(/\D/g, ""),
    gender: y(e.gender, F),
    nationality: o(e.nationality) || "대한민국",
    foreign_yn: f(e.foreign_yn),
    visa_type: o(e.visa_type),
    visa_expiry_date: h(e.visa_expiry_date),
    disability_yn: f(e.disability_yn),
    disability_grade: o(e.disability_grade),
    military_type: y(e.military_type, Y),
    address_detail: o(e.address_detail),
    emergency1_name: o(e.emergency1_name),
    emergency1_relation: o(e.emergency1_relation),
    emergency1_phone: o(e.emergency1_phone),
    emergency2_name: o(e.emergency2_name),
    emergency2_relation: o(e.emergency2_relation),
    emergency2_phone: o(e.emergency2_phone),
    task: o(e.task),
    contract_type: y(e.contract_type, K),
    contract_start_date: h(e.contract_start_date),
    contract_end_date: h(e.contract_end_date),
    probation_months: i(e.probation_months),
    attendance_tracked: e.attendance_tracked === void 0 || e.attendance_tracked === null ? !0 : f(e.attendance_tracked),
    work_start_time: o(e.work_start_time).slice(0, 5),
    work_end_time: o(e.work_end_time).slice(0, 5),
    daily_work_hours: i(e.daily_work_hours),
    weekly_work_hours: i(e.weekly_work_hours),
    base_salary: i(e.base_salary),
    bank_name: o(e.bank_name),
    bank_account: o(e.bank_account),
    bank_holder: o(e.bank_holder),
    dependents_count: Math.max(1, i(e.dependents_count)),
    children_count: i(e.children_count),
    tax_reduction_start: h(e.tax_reduction_start),
    tax_reduction_end: h(e.tax_reduction_end),
    marital_status: y(e.marital_status, new Set(A)),
    wedding_date: h(e.wedding_date),
    zip_code: o(e.zip_code),
    hire_type: y(e.hire_type, new Set(M)),
    work_mode: y(e.work_mode, new Set(O)),
    monthly_work_hours: i(e.monthly_work_hours),
    head_of_household_yn: f(e.head_of_household_yn),
    female_deduction_yn: f(e.female_deduction_yn),
    car_yn: f(e.car_yn),
    car_number: o(e.car_number),
    car_model: o(e.car_model),
    children_total: i(e.children_total),
    bonus_rate: i(e.bonus_rate),
    car_fuel: y(e.car_fuel, new Set(N)),
    withholding_rate: [80, 100, 120].includes(i(e.withholding_rate)) ? i(e.withholding_rate) : 100,
    tax_reduction_rate: [70, 90].includes(i(e.tax_reduction_rate)) ? i(e.tax_reduction_rate) : 0,
    meal_allowance: i(e.meal_allowance),
    car_allowance: i(e.car_allowance),
    phone_allowance: i(e.phone_allowance)
  };
}
function y(t, e) {
  const r = o(t);
  return e.has(r) ? r : "";
}
const F = new Set(["male", "female"]),
  K = new Set(["monthly", "annual", "hourly", "daily"]),
  B = new Set(["parental", "maternity", "sick", "other"]),
  Y = new Set(["군필", "미필", "면제", "해당없음", "복무중"]),
  re = {
    list: async (t = {}) => {
      const e = new URLSearchParams();
      t.status && e.set("status", t.status), t.employmentType && e.set("employment_type", t.employmentType), t.unitSeq && t.unitSeq > 0 && e.set("unit_seq", String(t.unitSeq)), t.positions && t.positions.length > 0 && e.set("position", t.positions.join(",")), t.accountSeq && t.accountSeq > 0 && e.set("account_seq", String(t.accountSeq)), t.search && e.set("search", t.search), t.includeDisabled && e.set("include_disabled", "true"), t.sort && e.set("sort", t.sort), t.dir && e.set("dir", t.dir), e.set("page", String(t.page ?? 1)), e.set("limit", String(t.limit ?? 50));
      const r = await _.http.get(`${m}/employees?${e.toString()}`),
        n = u(r, d("hr.errLoadEmployees"));
      return {
        items: (n.items ?? []).map(S),
        total: i(n.total)
      };
    },
    birthdays: async () => {
      const t = await _.http.get(`${m}/employees/birthdays`);
      return (u(t, d("hr.errLoadBirthdays")).items ?? []).map(r => {
        const n = r ?? {};
        return {
          seq: i(n.seq),
          name: o(n.name),
          birth_date: h(n.birth_date)
        };
      }).filter(r => r.birth_date);
    },
    detail: async t => {
      const e = await _.http.get(`${m}/employees/${t}`);
      return S(u(e, d("hr.errLoadEmployee")));
    },
    create: async t => {
      const e = await _.http.post(`${m}/employees`, t);
      return i(u(e, d("hr.errCreateEmployee")).seq);
    },
    update: async (t, e) => {
      const r = await _.http.patch(`${m}/employees/${t}`, e);
      u(r, d("hr.errUpdateEmployee"));
    },
    remove: async t => {
      const e = await _.http.delete(`${m}/employees/${t}`);
      u(e, d("hr.errDeleteEmployee"));
    },
    records: async t => {
      const e = await _.http.get(`${m}/employees/${t}/records`);
      return b(u(e, d("hr.errLoadEmployeeRecords")));
    },
    cardPdf: async (t, e) => {
      try {
        const r = e && e.length > 0 ? `?kinds=${encodeURIComponent(e.join(","))}` : "",
          n = await _.requestBinary("GET", `${m}/employees/${t}/card/pdf${r}`);
        return new Blob([n], {
          type: "application/pdf"
        });
      } catch (r) {
        const n = r instanceof Error ? r.message.replace(/^HTTP \d+:\s*/, "") : "";
        let a = d("hr.errMakePersonnelCard");
        try {
          const s = JSON.parse(n);
          typeof s.message == "string" && s.message && (a = s.message);
        } catch {}
        throw new Error(a);
      }
    },
    historyPdf: async (t, e) => {
      try {
        const r = await _.requestBinary("POST", `${m}/employees/${t}/history/pdf`, {
          entries: e
        });
        return new Blob([r], {
          type: "application/pdf"
        });
      } catch (r) {
        const n = r instanceof Error ? r.message.replace(/^HTTP \d+:\s*/, "") : "";
        let a = d("hr.errMakeHistoryPdf");
        try {
          const s = JSON.parse(n);
          typeof s.message == "string" && s.message && (a = s.message);
        } catch {}
        throw new Error(a);
      }
    },
    extractRecords: async (t, e) => {
      const r = new FormData();
      r.append("file", e, e.name);
      const n = await _.requestForm("POST", `${m}/employees/${t}/records/extract`, r, !0);
      return T(u(n, d("hr.errReadCertificateFile")));
    },
    extractRecordsForOrg: async t => {
      const e = new FormData();
      e.append("file", t, t.name);
      const r = await _.requestForm("POST", `${m}/records/extract`, e, !0);
      return P(u(r, d("hr.errReadCertificateFile")));
    },
    saveRecords: async (t, e) => {
      const r = await _.http.put(`${m}/employees/${t}/records`, {
        records: e
      });
      return b(u(r, d("hr.errSaveEmployeeRecords")));
    }
  };
export { q as E, G as R, J as S, S as a, V as b, W as c, j as d, re as e, ee as f, Q as g, X as h, te as m, Z as n, b as t };