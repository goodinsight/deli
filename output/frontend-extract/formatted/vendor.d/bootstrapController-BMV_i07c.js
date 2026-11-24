import { r } from "./react-CjxcGQav.js";
import { eY as re, eZ as he, cA as $e, c2 as bt, bM as i, bT as m, cz as fe, e_ as vt, cK as K, bv as St, e$ as Qe, e as wt, ak as Et, dv as kt, u as It, f0 as Ne, f1 as qt, dg as Pe, f2 as Ue, c8 as xt, el as Ft, f3 as Ot, em as Mt, f4 as pe, f5 as Ce, f6 as At, f7 as $t, f8 as Ct, f9 as et, fa as Tt, fb as Bt, fc as Rt, fd as Dt, fe as Lt, ff as tt, fg as Nt, fh as Pt } from "../js.d/main-Cm9wS5wt.js";
import { a as Ut } from "./profileEcho-q2FaD_03.js";
import { s as Gt, r as at } from "./teamMembers-0yRsmqL6.js";
import { s as Kt } from "./pendingRecordings-DpKJ8Y2R.js";
import { r as Vt, g as zt, s as Ht, a as nt } from "./orgTree-Dh5HFjBo.js";
import { m as jt } from "./mxApi-R6g9QtQq.js";
import { p as Wt, s as Yt, a as Jt, b as Xt } from "./aliasStore-DiN6Kp-5.js";
import { i as Ge } from "./profileApi-Btafs-pM.js";
let x = {
  loaded: !1,
  groupSeq: 0,
  canManage: !1,
  invites: []
};
const _e = new Set();
let $ = null;
function F(e) {
  x = e, _e.forEach(t => t());
}
function st() {
  return $ || ($ = (async () => {
    let e = he().myOrgSeq;
    if (e || (await $e(), e = he().myOrgSeq), !e) {
      F({
        loaded: !0,
        groupSeq: 0,
        canManage: !1,
        invites: []
      });
      return;
    }
    try {
      const t = await bt.listInvites(e);
      F({
        loaded: !0,
        groupSeq: e,
        canManage: !0,
        invites: t
      });
    } catch {
      F({
        loaded: !0,
        groupSeq: e,
        canManage: !1,
        invites: []
      });
    }
  })().finally(() => {
    $ = null;
  }), $);
}
function Zt(e) {
  if (e == null) return F({
    loaded: !0,
    groupSeq: he().myOrgSeq,
    canManage: !1,
    invites: []
  }), !0;
  if (typeof e != "object") return !1;
  const t = e;
  return Array.isArray(t.invites) ? (F({
    loaded: !0,
    groupSeq: Number(t.org_seq ?? 0) || 0,
    canManage: !0,
    invites: t.invites
  }), !0) : !1;
}
function Ya(e) {
  F({
    ...x,
    invites: x.invites.filter(t => t.seq !== e)
  });
}
let Ke = !1;
function Qt() {
  Ke || typeof window > "u" || (Ke = !0, window.addEventListener(re, e => {
    e.detail?.external_seq === void 0 && F({
      ...x,
      loaded: !1
    });
  }));
}
function Ja() {
  const e = r.useSyncExternalStore(t => (_e.add(t), () => _e.delete(t)), () => x, () => x);
  return r.useEffect(() => {
    Qt(), !x.loaded && !$ && st();
  }, []), e;
}
const ea = {
    baseUrl: "",
    license: null,
    pv_groups: [],
    pv_items: [],
    sido: [],
    sigungu: [],
    board_categories: [],
    rbac_roles: [],
    groups: [],
    roles: [],
    work_positions: [],
    work_places: [],
    application_form_service: [],
    select_options: [],
    crematoriums: [],
    burial_grounds: [],
    dispatch_status_options: {
      dispatcher_contacts: [],
      transfer_managers: [],
      dispatch_places: []
    },
    employee: [],
    work_schedule: {
      schedule_year: new Date().getFullYear(),
      schedule_month: new Date().getMonth() + 1,
      assignments: {}
    },
    gl_accounts: [],
    gl_account_items: [],
    gl_tran_items: [],
    bankbook_accounts: [],
    bankbook_cards: [],
    rooms: [],
    chamber_layout: {
      rows: [],
      cells: []
    },
    warehouse: [{
      name: "창고 1"
    }]
  },
  rt = {
    status: "idle",
    data: ea,
    loadedAt: null,
    error: null
  },
  ta = () => (e, t) => {
    e.setValues(t);
  },
  aa = () => e => {
    e.setValues(rt);
  },
  O = "/v1/calendar/memo";
function M(e, t) {
  if (!e?.ok || e.data === void 0) throw new Error(e?.error || e?.message || t);
  return e.data;
}
function na(e) {
  const t = e ?? {},
    a = String(t.uuid ?? "").trim();
  return a ? {
    uuid: a,
    name: String(t.name ?? t.original_name ?? "").trim() || m("calendar.attachmentFallback"),
    size: Number(t.size ?? 0) || 0,
    ...(typeof t.mime_type == "string" ? {
      mime_type: t.mime_type
    } : {})
  } : null;
}
function ge(e) {
  const t = Array.isArray(e?.files) ? e.files.map(na).filter(a => a !== null) : [];
  return {
    seq: Number(e?.seq ?? 0) || 0,
    content: String(e?.content ?? ""),
    color: String(e?.color ?? ""),
    updated_time: String(e?.updated_time ?? ""),
    files: t
  };
}
const sa = {
    list: async () => {
      const e = await i.http.get(O),
        t = M(e, m("calendar.memoLoadFailed"));
      return Array.isArray(t.items) ? t.items.map(ge) : [];
    },
    create: async (e, t) => {
      const a = await i.http.post(O, {
        content: e,
        color: t
      });
      return ge(M(a, m("calendar.memoAddFailed")).item);
    },
    update: async (e, t, a) => {
      const n = await i.http.patch(`${O}/${e}`, {
        content: t,
        color: a
      });
      return ge(M(n, m("calendar.memoSaveFailed")).item);
    },
    remove: async e => {
      const t = await i.http.delete(`${O}/${e}`);
      M(t, m("calendar.memoDeleteFailed"));
    },
    uploadFile: async (e, t) => {
      const a = new FormData();
      a.append("file", t, t.name);
      const n = await i.requestForm("POST", `${O}/${e}/files`, a, !0);
      M(n, m("calendar.attachmentUploadFailed", {
        name: t.name
      }));
    },
    removeFile: async e => {
      const t = await i.http.delete(`${O}/files/${encodeURIComponent(e)}`, {});
      M(t, m("calendar.attachmentDeleteFailed"));
    }
  },
  ra = "calendar.memos.changed";
let k = {
  loaded: !1,
  items: []
};
const be = new Set();
let C = null;
function U(e) {
  k = e, be.forEach(t => t());
}
function Te() {
  return C || (C = sa.list().then(e => U({
    loaded: !0,
    items: e
  })).catch(() => U({
    ...k,
    loaded: !0
  })).finally(() => {
    C = null;
  }), C);
}
function oa(e) {
  if (e == null || typeof e != "object") return !1;
  const t = e;
  return Array.isArray(t.items) ? (U({
    loaded: !0,
    items: t.items
  }), !0) : !1;
}
function Xa(e) {
  const t = k.items.some(a => a.seq === e.seq);
  U({
    loaded: !0,
    items: t ? k.items.map(a => a.seq === e.seq ? e : a) : [e, ...k.items]
  });
}
function Za(e) {
  U({
    loaded: !0,
    items: k.items.filter(t => t.seq !== e)
  });
}
let Ve = !1;
function ia() {
  Ve || typeof window > "u" || (Ve = !0, i.addRealtimeEventListener(ra, () => {
    Te();
  }), i.connectRealtime?.().catch(() => {}));
}
function Qa() {
  const e = r.useSyncExternalStore(t => (be.add(t), () => be.delete(t)), () => k, () => k);
  return r.useEffect(() => {
    ia(), !k.loaded && !C && Te();
  }, []), e;
}
let R = {
  loaded: !1,
  canManage: !1,
  domains: [],
  orgSeq: 0
};
const oe = new Set();
let D = null,
  H = 0,
  ve = !1;
function ie(e) {
  R = e, oe.forEach(t => t());
}
function Be() {
  return K()?.seq ?? 0;
}
function ot() {
  const e = Be();
  if (D && H === e) return D;
  H = e;
  const t = jt.listDomains().then(a => {
    H === e && ie({
      loaded: !0,
      canManage: a.can_manage,
      domains: a.domains,
      orgSeq: e
    });
  }).catch(() => {
    H === e && ie({
      ...R,
      loaded: !0,
      orgSeq: e
    });
  }).finally(() => {
    D === t && (D = null);
  });
  return D = t, t;
}
function en(e) {
  ie({
    loaded: !0,
    canManage: e.can_manage,
    domains: e.domains,
    orgSeq: Be()
  });
}
function ca(e) {
  const t = e;
  return !t || !Array.isArray(t.domains) ? !1 : (ie({
    loaded: !0,
    canManage: !!t.can_manage,
    domains: t.domains,
    orgSeq: Be()
  }), !0);
}
function it() {
  oe.size > 0 ? ot() : ve = !0;
}
function tn() {
  return R;
}
function an() {
  const e = r.useSyncExternalStore(n => (oe.add(n), () => oe.delete(n)), () => R),
    t = fe()?.seq ?? 0,
    a = e.orgSeq === 0 || t === 0 || e.orgSeq === t;
  return r.useEffect(() => {
    R.loaded && a || !R.loaded && !ve && vt() || (ve = !1, ot());
  }, [e, t, a]), a ? e : {
    loaded: !1,
    canManage: !1,
    domains: [],
    orgSeq: t
  };
}
function s(e) {
  return e == null ? "" : String(e).trim();
}
function ce(e) {
  return Array.isArray(e) ? e.map(s).filter(t => t !== "") : [];
}
function E(e, t, a) {
  return Array.isArray(e) ? e.map((n, o) => {
    const u = n ?? {},
      d = {
        id: s(u.id) || `row-${a}-${o}`
      };
    for (const g of t) d[g] = s(u[g]);
    return d;
  }) : [];
}
function la() {
  return {
    company_name: "",
    tax_id: "",
    corp_no: "",
    ceo_name: "",
    establish_date: "",
    industry: "",
    biz_type: "",
    employee_count: "",
    tel: "",
    homepage: "",
    postal_code: "",
    addr1: "",
    addr2: "",
    founded_date: "",
    region: "",
    ksic: "",
    ksic_division: "",
    corp_type: "",
    biz_scale: "",
    employee_band: "",
    revenue_band: "",
    export_band: "",
    ceo_birth_year: "",
    ceo_gender: "",
    ceo_type: "",
    has_factory: "",
    smart_factory_level: "",
    smart_farm: "",
    employment_insurance: ""
  };
}
function ct() {
  return {
    fields: [],
    keywords: [],
    note: ""
  };
}
function lt() {
  return {
    seq: 0,
    business: la(),
    interest: ct(),
    certifications: [],
    patents: [],
    achievements: [],
    careers: [],
    fundings: [],
    licenses: [],
    credits: [],
    shareholders: [],
    bank_accounts: []
  };
}
function ua(e) {
  const t = e.business ?? {},
    a = e.interest ?? {};
  return {
    seq: Number(e.seq ?? 0) || 0,
    business: {
      company_name: s(e.company_name) || s(t.company_name),
      tax_id: s(e.tax_id) || s(t.tax_id),
      industry: s(e.industry) || s(t.industry),
      corp_no: s(t.corp_no),
      ceo_name: s(t.ceo_name),
      establish_date: s(t.establish_date),
      biz_type: s(t.biz_type),
      employee_count: s(t.employee_count),
      tel: s(t.tel),
      homepage: s(t.homepage),
      postal_code: s(t.postal_code),
      addr1: s(t.addr1),
      addr2: s(t.addr2),
      founded_date: s(t.founded_date),
      region: s(t.region),
      ksic: s(t.ksic),
      ksic_division: s(t.ksic_division),
      corp_type: s(t.corp_type),
      biz_scale: s(t.biz_scale),
      employee_band: s(t.employee_band),
      revenue_band: s(t.revenue_band),
      export_band: s(t.export_band),
      ceo_birth_year: s(t.ceo_birth_year),
      ceo_gender: s(t.ceo_gender),
      ceo_type: s(t.ceo_type),
      has_factory: s(t.has_factory),
      smart_factory_level: s(t.smart_factory_level),
      smart_farm: s(t.smart_farm),
      employment_insurance: s(t.employment_insurance)
    },
    interest: {
      fields: ce(a.fields),
      keywords: ce(a.keywords),
      note: s(a.note)
    },
    certifications: E(e.certifications, ["kind", "name", "agency", "number", "issued_date", "expire_date", "base_date", "detail", "file_uuid", "file_name", "file_size"], 1),
    patents: E(e.patents, ["title", "kind", "number", "applied_date", "registered_date", "status", "file_uuid", "file_name", "file_size"], 2),
    achievements: E(e.achievements, ["year", "title", "description"], 3),
    careers: E(e.careers, ["period", "organization", "position", "description"], 4),
    fundings: E(e.fundings, ["round", "investor", "amount", "funded_date", "note"], 5),
    licenses: E(e.licenses, ["name", "agency", "number", "issued_date", "expire_date"], 8),
    credits: E(e.credits, ["grade", "agency", "rated_date", "expire_date"], 9),
    shareholders: E(e.shareholders, ["name", "shares", "ratio", "note"], 6),
    bank_accounts: E(e.bank_accounts, ["bank", "account_no", "holder", "account_type", "note", "file_uuid", "file_name", "file_size"], 7),
    registration_file: ee(e.registration_file)
  };
}
function ut(e) {
  const t = e && typeof e == "object" ? e : null;
  return !t || !Number(t.seq ?? 0) ? lt() : ua(t);
}
function ee(e) {
  const t = e ?? {},
    a = s(t.uuid);
  return a ? {
    uuid: a,
    name: s(t.name) || m("orgCompany.businessRegistration"),
    size: Number(t.size ?? 0) || 0
  } : null;
}
function da(e) {
  const t = e ?? {},
    a = s(t.card);
  if (a !== "careers" && a !== "achievements" && a !== "fundings" && a !== "licenses") return null;
  const n = {};
  for (const [o, u] of Object.entries(t.row ?? {})) s(u) && (n[o] = s(u));
  return Object.keys(n).length > 0 ? {
    card: a,
    row: n
  } : null;
}
const dt = {
  load: async () => {
    const e = await i.http.get("/v1/settings/company/info");
    return e?.ok ? ut(e.data) : lt();
  },
  loadInterest: async () => {
    const e = await i.http.get("/v1/settings/company/interest");
    if (!e?.ok || !e.data) return ct();
    const t = e.data;
    return {
      fields: ce(t.fields),
      keywords: ce(t.keywords),
      note: s(t.note)
    };
  },
  saveInterest: async e => {
    const t = await i.http.put("/v1/settings/company/interest", e);
    if (!t?.ok) throw new Error(t?.message || m("orgCompany.interestSaveFailed"));
  },
  save: async e => {
    const t = {
        company_name: e.business.company_name,
        industry: e.business.industry,
        tax_id: e.business.tax_id,
        business: e.business,
        interest: e.interest,
        certifications: e.certifications,
        patents: e.patents,
        achievements: e.achievements,
        careers: e.careers,
        fundings: e.fundings,
        licenses: e.licenses,
        credits: e.credits,
        shareholders: e.shareholders,
        bank_accounts: e.bank_accounts
      },
      a = await i.http.put("/v1/settings/company/info", t);
    if (!a?.ok) throw new Error(a?.message || m("orgCompany.companyInfoSaveFailed"));
    return Number(a.data?.seq ?? e.seq) || e.seq;
  },
  extractRegistration: async e => {
    const t = new FormData();
    t.append("file", e, e.name);
    const a = await i.requestForm("POST", "/v1/settings/company/registration/extract", t, !0);
    if (!a?.ok || !a.data) throw new Error(a?.message || m("orgCompany.registrationUploadFailed"));
    const n = {};
    for (const [o, u] of Object.entries(a.data.fields ?? {})) {
      const d = s(u);
      d && (n[o] = d);
    }
    return {
      file: ee(a.data.file),
      fields: n,
      extractError: s(a.data.extract_error)
    };
  },
  downloadRegistration: async () => {
    const e = await i.requestBinary("GET", "/v1/settings/company/registration");
    return new Blob([e]);
  },
  deleteRegistration: async () => {
    const e = await i.http.delete("/v1/settings/company/registration");
    if (!e?.ok) throw new Error(e?.message || m("orgCompany.registrationDeleteFailed"));
  },
  extractPatent: async e => {
    const t = new FormData();
    t.append("file", e, e.name);
    const a = await i.requestForm("POST", "/v1/settings/company/patents/extract", t, !0);
    if (!a?.ok || !a.data) throw new Error(a?.message || m("orgCompany.patentUploadFailed"));
    const n = {};
    for (const [o, u] of Object.entries(a.data.fields ?? {})) {
      const d = s(u);
      d && (n[o] = d);
    }
    return {
      file: ee(a.data.file),
      fields: n,
      extractError: s(a.data.extract_error)
    };
  },
  extractDocuments: async e => {
    const t = new FormData();
    for (const n of e) t.append("files", n, n.name);
    const a = await i.requestForm("POST", "/v1/settings/company/documents/extract", t, !0);
    if (!a?.ok || !a.data) throw new Error(a?.message || m("orgCompany.documentUploadFailed"));
    return (a.data.items ?? []).map(n => {
      const o = n ?? {},
        u = {};
      for (const [p, l] of Object.entries(o.fields ?? {})) {
        const c = s(l);
        c && (u[p] = c);
      }
      const d = {};
      for (const [p, l] of Object.entries(o.business ?? {})) {
        const c = s(l);
        c && (d[p] = c);
      }
      const g = {};
      for (const [p, l] of Object.entries(o.business_update ?? {})) {
        const c = s(l);
        c && (g[p] = c);
      }
      const y = o.bank ?? {},
        b = (Array.isArray(o.shareholders) ? o.shareholders : []).map(p => {
          const l = p ?? {};
          return {
            name: s(l.name),
            shares: s(l.shares),
            ratio: s(l.ratio)
          };
        }).filter(p => p.name);
      return {
        file: ee(o.file),
        target: s(o.target) === "patent" ? "patent" : "cert",
        fields: u,
        business: d,
        businessUpdate: g,
        bank: s(y.account_no) ? {
          bank: s(y.bank),
          account_no: s(y.account_no),
          holder: s(y.holder),
          account_type: s(y.account_type)
        } : null,
        shareholders: b,
        extra: da(o.extra),
        credit: (() => {
          const p = o.credit ?? {};
          return s(p.grade) ? {
            grade: s(p.grade),
            agency: s(p.agency),
            rated_date: s(p.rated_date),
            expire_date: s(p.expire_date)
          } : null;
        })(),
        error: s(o.error)
      };
    });
  },
  downloadDocFile: async e => {
    const t = await i.requestBinary("GET", `/v1/settings/company/documents/file/${encodeURIComponent(e)}`);
    return new Blob([t]);
  },
  downloadPatentFile: async e => {
    const t = await i.requestBinary("GET", `/v1/settings/company/patents/file/${encodeURIComponent(e)}`);
    return new Blob([t]);
  }
};
function ma(e) {
  const t = e.corp_type.trim();
  return t || (e.corp_no.trim() ? "법인사업자" : "");
}
let Se = {
    orgSeq: 0,
    corpType: ""
  },
  j = 0,
  te = 0;
const we = new Set();
function ze(e) {
  Se = e, we.forEach(t => t());
}
function mt(e) {
  if (!e || te === e) return;
  const t = ++j;
  te = e, Re(e).then(a => {
    t === j && ze({
      orgSeq: e,
      corpType: ma(a.business)
    });
  }).catch(() => {
    t === j && ze({
      orgSeq: e,
      corpType: ""
    });
  }).finally(() => {
    t === j && (te = 0);
  });
}
function fa() {
  const e = K();
  e && (te = 0, mt(e.seq));
}
function pa(e) {
  return we.add(e), () => we.delete(e);
}
function nn(e = !0) {
  const t = r.useSyncExternalStore(pa, () => Se, () => Se),
    a = fe(),
    n = e ? a?.seq ?? 0 : 0;
  return r.useEffect(() => {
    n && t.orgSeq !== n && mt(n);
  }, [n, t.orgSeq]), n && t.orgSeq === n ? t.corpType : "";
}
const ga = [60, 30, 0],
  ya = new Map();
let Ee = {
    orgSeq: 0,
    rows: []
  },
  W = 0,
  ae = 0;
const ke = new Set();
function He(e) {
  Ee = e, ke.forEach(t => t());
}
function ft(e) {
  if (!e || ae === e) return;
  const t = ++W;
  ae = e, Re(e).then(a => {
    t === W && He({
      orgSeq: e,
      rows: a.certifications
    });
  }).catch(() => {
    t === W && He({
      orgSeq: e,
      rows: []
    });
  }).finally(() => {
    t === W && (ae = 0);
  });
}
function ha() {
  const e = K();
  e && (ae = 0, ft(e.seq));
}
function _a(e) {
  return ke.add(e), () => ke.delete(e);
}
function ba(e) {
  return e === "owner" || e === "admin";
}
function va(e, t) {
  const a = new Date(`${e}T00:00:00`);
  if (Number.isNaN(a.getTime())) return "";
  a.setDate(a.getDate() - t);
  const n = String(a.getMonth() + 1).padStart(2, "0"),
    o = String(a.getDate()).padStart(2, "0");
  return `${a.getFullYear()}-${n}-${o}`;
}
function sn() {
  const e = r.useSyncExternalStore(_a, () => Ee, () => Ee),
    t = St(),
    a = fe(),
    n = ba(a?.role) ? a?.seq ?? 0 : 0;
  r.useEffect(() => {
    n && e.orgSeq !== n && ft(n);
  }, [n, e.orgSeq]);
  const o = n && e.orgSeq === n ? e.rows : null;
  return r.useMemo(() => {
    if (!o || o.length === 0) return ya;
    const u = new Map();
    for (const d of o) {
      const g = String(d.expire_date ?? "").slice(0, 10);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(g)) continue;
      const y = String(d.kind ?? "").trim() || String(d.name ?? "").trim() || t("calendar.docFallback");
      for (const b of ga) {
        const p = va(g, b);
        if (!p) continue;
        const l = {
            id: `${d.id}-${b}`,
            label: y,
            expireDay: g,
            daysLeft: b
          },
          c = u.get(p);
        c ? c.push(l) : u.set(p, [l]);
      }
    }
    for (const d of u.values()) d.sort((g, y) => g.daysLeft - y.daysLeft || g.label.localeCompare(y.label));
    return u;
  }, [o, t]);
}
let I = {
    orgSeq: 0,
    info: null
  },
  G = 0,
  A = null,
  le = !1;
const Ie = new Set();
function V(e) {
  I = e, G += 1, Ie.forEach(t => t());
}
function Sa(e) {
  if (!e || typeof e != "object") return !1;
  const t = Number(e.org_seq ?? 0) || 0;
  return t ? (le = !0, V({
    orgSeq: t,
    info: ut(e)
  }), De(), !0) : !1;
}
function pt() {
  const e = !le;
  le = !0, !(!I.info && !e) && V({
    orgSeq: 0,
    info: null
  });
}
function je(e) {
  return e > 0 && I.orgSeq === e ? I.info : null;
}
function rn(e, t) {
  e && V({
    orgSeq: e,
    info: t
  });
}
function Re(e = K()?.seq ?? 0) {
  const t = je(e);
  if (t) return Promise.resolve(t);
  if (A && A.orgSeq === e) return A.promise;
  const a = G,
    n = dt.load().then(u => (e && G === a && V({
      orgSeq: e,
      info: u
    }), je(e) ?? u)),
    o = {
      orgSeq: e,
      promise: n
    };
  return A = o, n.catch(() => {}).finally(() => {
    A === o && (A = null);
  }), n;
}
let We = !1;
const qe = new Set();
function on(e) {
  return De(), qe.add(e), () => {
    qe.delete(e);
  };
}
let Y = null;
function De() {
  We || (We = !0, Qe(["company"], () => {
    Y && clearTimeout(Y), Y = setTimeout(() => {
      Y = null;
      const e = I.orgSeq;
      if (!e || !I.info || e !== (K()?.seq ?? 0)) return;
      const t = G;
      dt.load().then(a => {
        G !== t || I.orgSeq !== e || (V({
          orgSeq: e,
          info: a
        }), qe.forEach(n => n(e, a)), fa(), ha());
      }).catch(() => {});
    }, 300);
  }));
}
function cn(e) {
  const t = r.useSyncExternalStore(n => (Ie.add(n), () => Ie.delete(n)), () => I, () => I),
    a = e > 0 && t.orgSeq === e ? t.info : null;
  return r.useEffect(() => {
    De();
  }, []), r.useEffect(() => {
    e > 0 && !a && le && Re(e).catch(() => {});
  }, [e, a, t]), a;
}
const ue = new Map(),
  de = new Map();
function ln(e) {
  if (!e) return null;
  const t = zt(),
    a = ue.get(e) ?? null;
  if (t.loaded && t.orgSeq === e) {
    if (a && a.units === t.units && a.canManage === t.canManage) return a;
    const n = {
      orgSeq: e,
      units: t.units,
      canManage: t.canManage
    };
    return ue.set(e, n), n;
  }
  return a;
}
function un(e) {
  e.orgSeq && (ue.set(e.orgSeq, e), Vt(e.orgSeq, e.units));
}
function dn(e) {
  return e ? de.get(e) ?? null : null;
}
let Ye = null;
function mn(e, t) {
  e && (de.set(e, t), Ye || (Ye = Qe(["hr_code"], () => de.clear())));
}
function wa() {
  ue.clear(), de.clear();
}
const J = "/v1/mx/import";
function X(e, t) {
  if (!e?.ok || !e.data) throw new Error(e?.error || e?.message || t);
  return e.data;
}
const N = {
    mailboxes: async () => X(await i.http.get(`${J}/mailboxes`), m("mailImport.loadFailed")),
    start: async e => X(await i.http.post(J, e), m("mailImport.startFailed")).item,
    get: async e => X(await i.http.get(`${J}/${e}`), m("mailImport.loadFailed")).item,
    cancel: async e => X(await i.http.post(`${J}/${e}/cancel`, {}), m("mailImport.loadFailed")).item
  },
  Je = [{
    id: "mailplug",
    labelKey: "mailImport.presetMailplug",
    protocol: "imap",
    host: "imap.mailplug.co.kr",
    port: 993
  }, {
    id: "hiworks",
    labelKey: "mailImport.presetHiworks",
    protocol: "pop3",
    host: "pop3s.hiworks.com",
    port: 995,
    noteKey: "mailImport.noteHiworks"
  }, {
    id: "uplus",
    labelKey: "mailImport.presetUplus",
    protocol: "imap",
    host: "mail.onnet21.com",
    port: 993
  }, {
    id: "naverworks",
    labelKey: "mailImport.presetNaverworks",
    protocol: "imap",
    host: "imap.worksmobile.com",
    port: 993,
    noteKey: "mailImport.noteImapOn"
  }, {
    id: "kakaowork",
    labelKey: "mailImport.presetKakaowork",
    protocol: "imap",
    host: "imap.kakaowork.com",
    port: 993,
    noteKey: "mailImport.noteImapOn"
  }, {
    id: "gmail",
    labelKey: "mailImport.presetGmail",
    protocol: "imap",
    host: "imap.gmail.com",
    port: 993,
    noteKey: "mailImport.noteAppPassword"
  }, {
    id: "naver",
    labelKey: "mailImport.presetNaver",
    protocol: "imap",
    host: "imap.naver.com",
    port: 993,
    noteKey: "mailImport.noteImapOn"
  }, {
    id: "daum",
    labelKey: "mailImport.presetDaum",
    protocol: "imap",
    host: "imap.daum.net",
    port: 993,
    noteKey: "mailImport.noteImapOn"
  }, {
    id: "outlook",
    labelKey: "mailImport.presetOutlook",
    protocol: "imap",
    host: "outlook.office365.com",
    port: 993,
    noteKey: "mailImport.noteAppPassword"
  }, {
    id: "custom",
    labelKey: "mailImport.presetCustom",
    protocol: "imap",
    host: "",
    port: 993
  }],
  Ea = 3e3;
let xe = 0;
const Fe = new Set();
function fn() {
  xe += 1, Fe.forEach(e => e());
}
function ka() {
  return r.useSyncExternalStore(e => (Fe.add(e), () => Fe.delete(e)), () => xe, () => xe);
}
const B = new Map(),
  me = new Set();
function Ia(e, t) {
  e && (B.set(e, t), me.forEach(a => a()));
}
async function qa(e) {
  if (!(!e || B.has(e))) {
    B.set(e, !1);
    try {
      B.set(e, (await N.mailboxes()).items.length > 0);
    } catch {
      B.delete(e);
    }
    me.forEach(t => t());
  }
}
function pn() {
  const e = fe()?.seq ?? 0;
  return r.useEffect(() => {
    qa(e);
  }, [e]), r.useSyncExternalStore(t => (me.add(t), () => me.delete(t)), () => B.get(e) === !0, () => !1);
}
const Xe = {
  mailbox: "",
  preset: "mailplug",
  host: "",
  port: "993",
  protocol: "imap",
  username: "",
  password: ""
};
function gn() {
  const e = wt({
      modalId: "mx-mail-import-dialog"
    }),
    t = e.isOpen,
    [a, n] = r.useState(null),
    [o, u] = r.useState(!1),
    [d, g] = r.useState(null),
    [y, b] = r.useState(!1),
    [p, l] = r.useState(""),
    c = r.useRef(null),
    h = Et({
      formId: "mx-mail-import-form",
      initialValues: Xe,
      onValidate: f => {
        const v = Je.find(S => S.id === f.preset),
          q = v && v.id !== "custom" ? v.host : String(f.host ?? "").trim();
        return f.mailbox ? !q || !String(f.username ?? "").trim() || !f.password ? (l(m("mailImport.fillAll")), !1) : (l(""), !0) : (l(m("mailImport.pickMailbox")), !1);
      },
      onSubmit: async f => {
        const v = Je.find(S => S.id === f.preset),
          q = !v || v.id === "custom";
        try {
          const S = await N.start({
            mailbox_seq: Number(f.mailbox),
            protocol: q ? f.protocol : v.protocol,
            host: q ? String(f.host).trim() : v.host,
            port: q ? Number(f.port) || (f.protocol === "pop3" ? 995 : 993) : v.port,
            username: String(f.username).trim(),
            password: String(f.password)
          });
          h.setFormValue("password", ""), g(S);
        } catch (S) {
          l(S instanceof Error ? S.message : m("mailImport.startFailed"));
        }
      }
    }),
    _ = async () => {
      b(!0), l("");
      try {
        const f = await N.mailboxes();
        n(f.items), u(f.manager);
        const v = f.items.find(_t => _t.job?.status === "running"),
          q = f.items.length === 1 ? f.items[0] : null,
          S = v ?? q;
        h.setFormValues({
          ...Xe,
          mailbox: S ? String(S.seq) : ""
        }), g(S?.job ?? null);
      } catch (f) {
        l(f instanceof Error ? f.message : m("mailImport.loadFailed"));
      } finally {
        b(!1);
      }
    },
    w = ka(),
    z = r.useRef(w);
  r.useEffect(() => {
    w !== z.current && e.open();
  }, [w]), r.useEffect(() => {
    t && _();
  }, [t]);
  const Le = String(h.useFormValue("mailbox") ?? "");
  return r.useEffect(() => {
    const f = a?.find(v => String(v.seq) === Le);
    g(f?.job ?? null);
  }, [Le]), r.useEffect(() => {
    if (c.current && clearTimeout(c.current), !(!t || d?.status !== "running")) return c.current = setTimeout(async () => {
      try {
        g(await N.get(d.seq));
      } catch {
        g({
          ...d
        });
      }
    }, Ea), () => {
      c.current && clearTimeout(c.current);
    };
  }, [t, d]), {
    modal: e,
    form: h,
    mailboxes: a,
    manager: o,
    job: d,
    loading: y,
    error: p,
    cancel: async () => {
      if (d) try {
        g(await N.cancel(d.seq));
      } catch (f) {
        l(f instanceof Error ? f.message : m("mailImport.loadFailed"));
      }
    },
    again: () => {
      l(""), g(null);
    }
  };
}
const xa = 15e3;
let ne = null;
function Fa(e) {
  ne = {
    items: e,
    at: Date.now()
  };
}
function yn(e) {
  return e > 0 && ne && Date.now() - ne.at < xa ? ne.items : null;
}
function gt(e) {
  return {
    id: String(e.seq),
    typeId: String(e.type ?? ""),
    title: String(e.title ?? ""),
    body: String(e.body ?? "") || void 0,
    createdAt: String(e.created_time ?? ""),
    read: !!e.read,
    targetSeq: Number(e.target_seq ?? 0) || void 0,
    externalSeq: Number(e.external_seq ?? 0) || void 0,
    targetDeleted: !!e.target_deleted
  };
}
const hn = {
    list: async (e = 30) => ((await i.http.get(`/v1/notifications/list?limit=${e}`))?.data?.items ?? []).map(gt),
    read: e => i.http.post("/v1/notifications/read", {
      seq: e
    }),
    readByTarget: (e, t, a = 0) => i.http.post("/v1/notifications/read-by-target", {
      types: e,
      target_seq: t,
      external_seq: a
    }),
    readAll: () => i.http.post("/v1/notifications/read-all", {}),
    delete: e => i.http.post("/v1/notifications/delete", {
      seq: e
    }),
    deleteAll: () => i.http.post("/v1/notifications/delete-all", {})
  },
  ye = "/v1/settings/company";
function Z(e, t) {
  return new Error(e || t);
}
const Oa = {
    get: async () => {
      const e = await i.http.get(ye);
      if (!e?.ok || !e.data) throw Z(e?.message, m("settings.companySettingsLoadFailed"));
      return {
        seq: Number(e.data.seq ?? 0) || 0,
        name: String(e.data.name ?? ""),
        logo_file: String(e.data.logo_file ?? ""),
        seal_file: String(e.data.seal_file ?? ""),
        seal_size_mm: Number(e.data.seal_size_mm ?? 0) || 0,
        editable: !!e.data.editable
      };
    },
    patch: async e => {
      const t = await i.http.patch(ye, e);
      if (!t?.ok) throw Z(t?.message, m("settings.companySettingsSaveFailed"));
      return Number(t.data?.seq ?? 0) || 0;
    },
    uploadLogo: async (e, t, a) => {
      const n = await i.fileUpload("company", t, {
          refSeq: e,
          isPublic: !0,
          ...(Ge(a) ? {
            replaceUuid: a?.trim()
          } : {})
        }),
        o = n?.uuid ?? n?.data?.uuid,
        u = typeof o == "string" ? o.trim() : "";
      if (n?.ok && u) return u;
      throw Z(n?.message, m("settings.logoUploadFailed"));
    },
    uploadSeal: async (e, t, a) => {
      const n = await i.fileUpload("company", t, {
          refSeq: e,
          isPublic: !1,
          ...(Ge(a) ? {
            replaceUuid: a?.trim()
          } : {})
        }),
        o = n?.uuid ?? n?.data?.uuid,
        u = typeof o == "string" ? o.trim() : "";
      if (n?.ok && u) return u;
      throw Z(n?.message, m("settings.sealUploadFailed"));
    },
    fetchSeal: async () => {
      const e = await i.requestBinary("GET", `${ye}/seal`);
      return new Blob([e], {
        type: "image/png"
      });
    }
  },
  Ma = 40,
  Aa = 170,
  _n = Ma * 2,
  bn = Aa * 2;
let se = {
  loaded: !1,
  logoUuid: ""
};
const Oe = new Set();
let T = null;
function Me(e) {
  se = e, Oe.forEach(t => t());
}
function yt() {
  return T || (T = Oa.get().then(e => Me({
    loaded: !0,
    logoUuid: e.logo_file
  })).catch(() => Me({
    loaded: !0,
    logoUuid: ""
  })).finally(() => {
    T = null;
  }), T);
}
function $a(e) {
  Me({
    loaded: !0,
    logoUuid: e
  });
}
typeof window < "u" && window.addEventListener(re, () => {
  yt();
});
function vn() {
  const e = r.useSyncExternalStore(t => (Oe.add(t), () => Oe.delete(t)), () => se, () => se);
  return r.useEffect(() => {
    !se.loaded && !T && yt();
  }, []), e.logoUuid;
}
const Ca = 15e3;
let P = {
    loaded: !1,
    value: null,
    at: 0
  },
  L = null;
const Ae = new Set();
function ht(e) {
  P = e, Ae.forEach(t => t());
}
function Ta(e) {
  ht({
    loaded: !0,
    value: e,
    at: Date.now()
  });
}
function Ze() {
  return L || (L = i.http.get("/v1/hr/my-attendance/today").then(e => {
    e?.ok !== !1 && ht({
      loaded: !0,
      value: e?.data ?? null,
      at: Date.now()
    });
  }).catch(() => {}).finally(() => {
    L = null;
  }), L);
}
function Sn() {
  const e = r.useSyncExternalStore(t => (Ae.add(t), () => Ae.delete(t)), () => P, () => P);
  return r.useEffect(() => {
    (!P.loaded || Date.now() - P.at > Ca) && Ze();
  }, []), kt(["hr_clock"], () => {
    Ze();
  }), e.value;
}
let Q = null;
function Ba(e) {
  e.teams ? At(e.teams) : $e(), Gt(e.team_members) || at(), Zt(e.org_invites) || st(), e.board_policy ? $t(Ct(e.board_policy)) : et(), oa(e.calendar_memos) || Te(), Ht(e.org_tree) || nt(), Tt(e.workspaces) || Ce();
  const t = e.workspace_folders?.items;
  if (Array.isArray(t) ? Bt(t.map(n => Rt(n))) : Dt(), Lt(e.external_taskbox) || tt(), ca(e.mx_domains) || it(), Sa(e.company_info) || pt(), Kt(e.meeting_pending), e.drive && (Nt(e.drive.org_seq, e.drive.folders), Pt(e.drive.org_seq, e.drive.usage)), e.chat) {
    const n = Wt(e.chat);
    n.rooms && Yt(e.chat.org_seq, n.rooms), n.aliases && Jt(n.aliases);
  }
  e.mail_import && Ia(e.mail_import.org_seq, e.mail_import.available);
  const a = e.notifications?.items;
  Array.isArray(a) && Fa(a.map(n => gt(n))), e.org_logo && $a(e.org_logo.logo_file), Xt(Array.isArray(e.e2e_devices?.items) ? e.e2e_devices.items : null), e.attendance_today !== void 0 && Ta(e.attendance_today ?? null), wa();
}
function Ra() {
  $e(), at(), nt(), Ce(), tt(), it(), pt(), et();
}
function Da() {
  const e = xt({
      stateId: "bootstrapState",
      initialValues: rt,
      actions: {
        setBootstrapState: ta(),
        resetBootstrapState: aa()
      }
    }),
    t = e.useValue("data.sido"),
    a = e.useValue("data.sigungu"),
    n = e.useValue("data.pv_items"),
    o = e.useValue("data.license.settings.relationLabels"),
    u = e.useValue("data.dispatch_status_options"),
    d = r.useMemo(() => (t || []).map(c => ({
      value: c.seq,
      label: c.sido
    })), [t]),
    g = r.useMemo(() => (a || []).map(c => ({
      value: c.seq,
      label: c.sigungu
    })), [a]),
    y = r.useMemo(() => (n || []).map(c => ({
      value: c.name,
      label: c.name
    })), [n]),
    b = r.useMemo(() => (o || []).map(c => ({
      value: c.name,
      label: c.name
    })), [o]),
    p = r.useMemo(() => {
      const c = h => (Array.isArray(h) ? h : []).map(_ => String(_ ?? "").trim()).filter(Boolean).map(_ => ({
        value: _,
        label: _
      }));
      return {
        dispatcherContacts: c(u?.dispatcher_contacts),
        transferManagers: c(u?.transfer_managers),
        dispatchPlaces: c(u?.dispatch_places)
      };
    }, [u]),
    l = r.useCallback(async c => {
      const h = c?.silent === !0;
      h || (pe("loading"), e.actions.setBootstrapState({
        status: "loading",
        error: null
      }));
      try {
        Q || (Q = (async () => {
          const w = await Ft({
              endpoint: `/v1/auth/bootstrap?board_keys=${encodeURIComponent(Ot())}`,
              method: "GET"
            }),
            z = w?.data?.bootstrap;
          if (!w || !Mt(w) || !z) throw new Error(w?.message || m("bootstrap.bootstrapLoadFailed"));
          return z;
        })().finally(() => {
          Q = null;
        }));
        const _ = await Q;
        return Ba(_), e.actions.setBootstrapState({
          status: "ready",
          data: _,
          loadedAt: new Date().toISOString(),
          error: null
        }), h || pe("ready"), _;
      } catch (_) {
        const w = _ instanceof Error ? _.message : m("bootstrap.bootstrapLoadFailed");
        throw h || (e.actions.setBootstrapState({
          status: "error",
          error: w
        }), pe("error"), Ra()), _ instanceof Error ? _ : new Error(w);
      }
    }, [e.actions]);
  return {
    state: e,
    refreshBootstrap: l,
    options: {
      pvItems: y,
      sido: d,
      sigungu: g,
      relationLabels: b,
      dispatchStatus: p
    }
  };
}
function wn() {
  const {
      state: e,
      refreshBootstrap: t
    } = Da(),
    a = e.useValue("status"),
    n = r.useRef(!1),
    o = It(),
    u = !!o.useValue("sessionChecked"),
    d = o.useValue("account"),
    g = u && !!d;
  r.useEffect(() => {
    if (!(n.current || !g)) {
      if (a === "ready" || a === "loading") {
        n.current = !0;
        return;
      }
      n.current = !0, t().catch(() => {});
    }
  }, [a, t, g]);
  const y = Number(d?.seq ?? 0) || 0,
    b = r.useRef(0);
  r.useEffect(() => {
    if (!y) return;
    const l = b.current;
    b.current = y, l && l !== y && window.location.reload();
  }, [y]), r.useEffect(() => {
    const l = c => {
      c.detail?.team_context && t({
        silent: !0
      }).catch(() => {});
    };
    return window.addEventListener(re, l), () => window.removeEventListener(re, l);
  }, [t]), r.useEffect(() => {
    const l = () => {
      Ce();
    };
    i.addRealtimeEventListener(Ne, l);
    const c = qt(l);
    return () => {
      i.removeRealtimeEventListener(Ne, l), c();
    };
  }, []), r.useEffect(() => {
    const l = () => {
      t({
        silent: !0
      }).catch(() => {});
    };
    return i.addRealtimeEventListener(Pe, l), i.connectRealtime?.().catch(() => {}), () => {
      i.removeRealtimeEventListener(Pe, l);
    };
  }, [t]), r.useEffect(() => {
    const l = c => {
      const h = c?.data ?? {};
      Ut(Number(h.account_seq ?? 0) || 0, String(h.avatar ?? ""), String(h.name ?? ""));
    };
    return i.addRealtimeEventListener(Ue, l), () => {
      i.removeRealtimeEventListener(Ue, l);
    };
  }, []);
  const p = r.useRef(!1);
  return (a === "ready" || a === "error") && (p.current = !0), p.current;
}
export { wn as A, gn as B, hn as C, yn as D, Xa as E, sa as F, Te as G, Za as H, Qa as I, Sn as J, vn as K, sn as L, Je as M, nn as N, Ma as O, ha as a, rn as b, dt as c, Oa as d, lt as e, $a as f, je as g, en as h, fa as i, tn as j, an as k, Re as l, cn as m, ln as n, fn as o, un as p, dn as q, ot as r, on as s, mn as t, pn as u, bn as v, _n as w, Ja as x, Ya as y, Da as z };