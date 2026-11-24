import { j as t, r as U } from "./react-CjxcGQav.js";
import { c as he, aG as Fe, k as Ne, E as ke, jt as Ve, P as De, aP as Pe, fO as Ee, B as P, bT as D, dC as $e, cK as we, bO as L, e as Te, c8 as Le, ak as Re, dv as Me, fA as Ae, cL as Be, j9 as We, bv as Q, lJ as ge, fC as O, j as Ke, cG as R, fj as Ue, w as Ye, dE as Ge, S as He, eG as ze, fJ as Je, fK as Xe, fF as Qe, cD as be, Z as Ze, U as et, fI as tt, lK as _e, aR as je, lL as nt, b7 as rt, dh as st, H as at, fB as ce, D as ot, fL as ue, cI as it, K as lt, fN as ct, cC as ut, bQ as ee, d8 as mt } from "../js.d/main-Cm9wS5wt.js";
import { d as W, a as dt } from "./dealApi-CnzQt6qM.js";
import { p as pt } from "./partnerApi-Dqdgl0Fn.js";
import { c as oe, r as ft, u as xt } from "./customerMetaStore-Bj9KdRyn.js";
import { t as me, l as ht, k as de, D as ie } from "./deal-B3IQ_ej7.js";
import { F as y, u as gt } from "./FormValue-CAMilU-0.js";
import { u as bt, P as _t } from "./PropertyContentEditor-DIsouMXi.js";
import { T as jt } from "./Title-WCY0exuZ.js";
import { E as vt } from "./EventBusyOutlined-DqcCaRMs.js";
import { D as ve, T as yt } from "./TagOutlined-Cfq6rbok.js";
import { N as Ct } from "./Notes-i9IHZW02.js";
import { I as N, b as It, a as qt, f as ye } from "./PropertyFields-TuJTG5XK.js";
import { C as St } from "./CategoryOutlined-DcAqxAdD.js";
import { P as Ce } from "./PhoneOutlined-Bjc_e42S.js";
import { P as Ot } from "./PhoneAndroidOutlined-DafU-b-9.js";
import { C as Ft } from "./ChecklistOutlined-PwlgFlaS.js";
import { G as Nt } from "./GroupOutlined-CA-gNtcg.js";
import { f as kt, e as Ie, b as Vt, d as Dt } from "./types-B1OAKh4b.js";
import { I as Pt, a as Et, T as $t, b as wt } from "./ItemLineFields-DmS0gZQx.js";
import { P as Tt } from "./propertySections-Bwsl7OH-.js";
const Lt = he(t.jsx("path", {
    d: "M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 13-4-4h8z"
  })),
  Rt = he(t.jsx("path", {
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"
  })),
  Mt = {
    text: t.jsx(Ee, {}),
    textarea: t.jsx(Pe, {}),
    number: t.jsx(yt, {}),
    money: t.jsx(De, {}),
    date: t.jsx(Ve, {}),
    period: t.jsx(ve, {}),
    month: t.jsx(ke, {}),
    select: t.jsx(Lt, {}),
    multi_select: t.jsx(Ft, {}),
    person: t.jsx(Nt, {}),
    checkbox: t.jsx(Rt, {}),
    phone: t.jsx(Ce, {}),
    customer: t.jsx(Ne, {})
  };
function At(e) {
  return e.key === "subject_name" ? t.jsx(Fe, {}) : Mt[e.type];
}
const pe = [{
  color: "#5f5e5b",
  bg: "#f1f1ef",
  name: "회색",
  nameKey: "approval.colorGray"
}, {
  color: "#9f6b53",
  bg: "#f4eeee",
  name: "갈색",
  nameKey: "approval.colorBrown"
}, {
  color: "#d9730d",
  bg: "#fbecdd",
  name: "주황",
  nameKey: "approval.colorOrange"
}, {
  color: "#cb912f",
  bg: "#fbf3db",
  name: "노랑",
  nameKey: "approval.colorYellow"
}, {
  color: "#448361",
  bg: "#edf3ec",
  name: "초록",
  nameKey: "approval.colorGreen"
}, {
  color: "#337ea9",
  bg: "#e7f3f8",
  name: "파랑",
  nameKey: "approval.colorBlue"
}, {
  color: "#9065b0",
  bg: "#f6f3f9",
  name: "보라",
  nameKey: "approval.colorPurple"
}, {
  color: "#c14c8a",
  bg: "#faf1f5",
  name: "분홍",
  nameKey: "approval.colorPink"
}, {
  color: "#d44c47",
  bg: "#fdebec",
  name: "빨강",
  nameKey: "approval.colorRed"
}];
function Bt(e, r) {
  const n = e.colors[r];
  return pe.find(s => s.color === n) ?? pe[0];
}
function qe(e) {
  return e === "multiselect" ? "multi_select" : e === "bool" ? "checkbox" : e;
}
function Cn(e) {
  return e === "multi_select" ? "multiselect" : e === "checkbox" ? "bool" : e === "customer" ? "text" : e;
}
function Wt(e) {
  return At({
    key: e.field_key,
    type: qe(e.field_type)
  });
}
function J({
  field: e,
  option: r,
  wrap: n = !1
}) {
  const s = Bt(e, r);
  return t.jsx(P, {
    component: "span",
    sx: {
      px: .75,
      py: .125,
      borderRadius: 1,
      bgcolor: s.bg,
      color: s.color,
      fontSize: 14,
      fontWeight: e.bold ? 600 : 400,
      ...(n ? {
        display: "inline-block",
        maxWidth: "100%",
        whiteSpace: "normal",
        wordBreak: "keep-all",
        overflowWrap: "anywhere",
        lineHeight: 1.4
      } : {
        whiteSpace: "nowrap"
      })
    },
    children: r
  });
}
async function fe(e, r) {
  const n = r.trim().replace(/\n/g, " ").slice(0, 50);
  if (!n) return !1;
  try {
    return await oe.addFieldOption(e.seq, n), ft(), !0;
  } catch (s) {
    return L(s instanceof Error ? s.message : D("customer.addOptionFailed")), !1;
  }
}
function Kt(e) {
  return {
    key: e.field_key,
    seq: e.seq,
    name: e.label,
    type: qe(e.field_type),
    options: e.options,
    colors: e.colors,
    band: e.show_in_list,
    searchable: e.searchable,
    hidden: !e.enabled,
    bold: e.bold,
    required: e.required,
    member_editable: e.member_editable,
    tab_name: e.tab_name
  };
}
const le = "@list:",
  te = e => e.key.startsWith(le);
function In(e, r, n) {
  const s = new Map();
  for (const o of e) s.set(Ie(o.field_key), Kt(o));
  for (const o of Vt) o.feature && !$e(we(), o.feature) || s.set(o.id, {
    key: `${le}${o.id}`,
    seq: 0,
    name: D(o.labelKey),
    type: "text",
    options: [],
    colors: {},
    band: !r.includes(o.id),
    searchable: !1,
    hidden: !1,
    bold: !1,
    required: !1,
    member_editable: !1,
    tab_name: ""
  });
  return Dt(e.map(o => o.field_key), n).flatMap(o => s.has(o) ? [s.get(o)] : []);
}
function qn(e) {
  const r = n => n.key.slice(le.length);
  return {
    list_hidden_columns: e.filter(n => te(n) && !n.band).map(r),
    list_column_order: e.filter(n => te(n) || n.seq > 0).map(n => te(n) ? r(n) : Ie(n.key))
  };
}
function Sn({
  field: e,
  value: r,
  members: n
}) {
  if (e.field_type === "select" && r) return t.jsx(J, {
    field: e,
    option: String(r),
    wrap: !0
  });
  if (e.field_type === "multiselect" && Array.isArray(r) && r.length > 0) return t.jsx(P, {
    component: "span",
    sx: {
      display: "inline-flex",
      flexWrap: "wrap",
      gap: .5,
      justifyContent: "center"
    },
    children: r.map(o => t.jsx(J, {
      field: e,
      option: String(o),
      wrap: !0
    }, String(o)))
  });
  const s = kt(e, r, n);
  return s ? e.bold ? t.jsx(P, {
    component: "span",
    sx: {
      fontWeight: 600
    },
    children: s
  }) : t.jsx(t.Fragment, {
    children: s
  }) : null;
}
function On(e, r) {
  return e.field_type === "person" ? r.map(n => ({
    value: String(n.account_seq),
    label: n.name
  })) : e.field_type === "bool" ? [{
    value: "true",
    label: D("customer.yes")
  }] : e.options.map(n => ({
    value: n,
    label: n
  }));
}
const Ut = 30,
  Yt = 300,
  Gt = 30,
  ne = {
    name: "",
    spec: "",
    qty: 1,
    unit_price: "",
    note: ""
  },
  Ht = {
    stage: "quote",
    title: "",
    partner_seq: "",
    deal_date: "",
    valid_until: "",
    start_date: "",
    end_date: "",
    vat_mode: "exclusive",
    memo: "",
    folder_seq: "",
    itemIds: [],
    items: {},
    extra: {},
    content: ""
  };
let xe = 0;
function z() {
  return xe += 1, `i${xe}`;
}
function re(e, r) {
  const n = String(e.title ?? "").trim();
  if (!n) return D("partner.dealTitleRequired");
  const s = Number(e.partner_seq) || 0;
  if (!r && !s) return D("partner.partnerRequired");
  const o = (e.itemIds ?? []).map(a => e.items?.[a]).filter(a => !!a).map(a => ({
      name: String(a.name ?? "").trim(),
      spec: String(a.spec ?? "").trim(),
      qty: me(a.qty),
      unit_price: me(a.unit_price),
      note: String(a.note ?? "").trim()
    })).filter(a => a.name || ht(a.qty, a.unit_price) > 0),
    i = e.stage === "contract";
  return {
    stage: i ? "contract" : "quote",
    title: n,
    ...(r ? {
      customer_seq: r,
      folder_seq: Number(e.folder_seq) || 0
    } : {
      partner_seq: s
    }),
    deal_date: String(e.deal_date ?? ""),
    valid_until: i ? "" : String(e.valid_until ?? ""),
    start_date: i ? String(e.start_date ?? "") : "",
    end_date: i ? String(e.end_date ?? "") : "",
    vat_mode: e.vat_mode === "none" ? "none" : "exclusive",
    memo: String(e.memo ?? ""),
    items: o,
    extra: e.extra ?? {},
    content: String(e.content ?? "")
  };
}
function Fn(e = {}) {
  const r = U.useRef(e);
  r.current = e;
  const n = U.useRef(0),
    s = U.useRef(!1),
    o = U.useRef(null),
    i = {
      form: Te({
        modalId: `${e.idPrefix ?? ""}partner-deal-form`
      })
    },
    a = Le({
      stateId: `${e.idPrefix ?? ""}partner-deal-form-ui`,
      initialValues: {
        dealSeq: 0,
        deal: null,
        loading: !1,
        partnerOptions: [],
        customerSeq: 0,
        customerName: "",
        pickingCustomer: !1,
        customerOptions: [],
        customerSearching: !1,
        dealFields: []
      }
    }),
    m = Re({
      formId: `${e.idPrefix ?? ""}partner-deal-form`,
      initialValues: Ht,
      onValidate: f => {
        if (a.getValue("pickingCustomer") && !(Number(a.getValue("customerSeq")) > 0)) return L(D("partner.customerRequired")), !1;
        const x = re(f, Number(a.getValue("customerSeq")) || 0);
        return typeof x == "string" ? (L(x), !1) : !0;
      },
      onSubmit: async f => {
        const x = re(f, Number(a.getValue("customerSeq")) || 0);
        if (typeof x == "string") return !1;
        const v = s.current;
        try {
          let h = Number(a.getValue("dealSeq")) || 0;
          if (h ? await W.update(h, x) : h = await W.create(x), v) {
            const p = await W.detail(h);
            await We(await W.pdf(h), dt(p));
          }
          return r.current.onSaved?.(), i.form.close(), !0;
        } catch (h) {
          return L(h instanceof Error ? h.message : D("partner.dealSaveFailed")), !1;
        }
      }
    }),
    C = (f, x, v = !1) => {
      const h = ++n.current;
      a.setValues({
        dealSeq: f,
        deal: null,
        loading: !0,
        customerSeq: x?.seq ?? 0,
        customerName: x?.name ?? "",
        pickingCustomer: v,
        customerOptions: []
      }), i.form.open(), v && j(""), Promise.all([x || v ? Promise.resolve([]) : pt.list({
        limit: 200
      }).then(p => p.items).catch(() => []), f ? W.detail(f) : Promise.resolve(null), oe.dealFields().catch(() => [])]).then(([p, d, q]) => {
        if (h !== n.current) return;
        a.setValue("dealFields", q);
        const S = p.map(F => ({
          value: F.seq,
          label: F.name
        }));
        d?.partner_seq && !S.some(F => F.value === d.partner_seq) && S.unshift({
          value: d.partner_seq,
          label: d.partner_name
        }), a.setValue("partnerOptions", S), d?.customer_seq && a.setValues({
          customerSeq: d.customer_seq,
          customerName: d.customer_name
        });
        const B = d?.items.length ? d.items : [ne],
          T = B.map(() => z()),
          K = {
            stage: d?.stage ?? "quote",
            title: d?.title ?? "",
            partner_seq: d?.partner_seq || "",
            deal_date: d?.deal_date || de(),
            valid_until: d ? d.valid_until : de(Gt),
            start_date: d?.start_date ?? "",
            end_date: d?.end_date ?? "",
            vat_mode: d?.vat_mode ?? "exclusive",
            memo: d?.memo ?? "",
            folder_seq: d ? d.folder_seq || "" : (x || v) && r.current.defaultFolderSeq?.() || "",
            itemIds: T,
            extra: d?.extra ?? {},
            content: d?.content ?? "",
            items: Object.fromEntries(B.map((F, V) => [T[V], {
              name: F.name,
              spec: F.spec,
              qty: F.qty || (d ? "" : 1),
              unit_price: F.unit_price || "",
              note: F.note
            }]))
          };
        m.setFormValues(K), o.current = K, a.setValue("deal", d);
      }).catch(p => {
        h === n.current && L(p instanceof Error ? p.message : D("partner.dealLoadFailed"));
      }).finally(() => {
        h === n.current && a.setValue("loading", !1);
      });
    },
    l = () => C(0),
    u = f => C(0, f),
    c = () => C(0, void 0, !0),
    _ = U.useRef(0),
    I = U.useRef(null);
  async function j(f) {
    const x = ++_.current;
    a.setValue("customerSearching", !0);
    try {
      const v = await oe.list({
        search: f,
        limit: Ut
      });
      if (x !== _.current) return;
      const h = v.items.map(q => ({
          value: q.seq,
          label: q.phone ? `${q.name} · ${q.phone}` : q.name,
          name: q.name
        })),
        p = Number(a.getValue("customerSeq")) || 0,
        d = (a.getValue("customerOptions") ?? []).find(q => q.value === p);
      d && !h.some(q => q.value === p) && h.unshift(d), a.setValue("customerOptions", h);
    } catch {} finally {
      x === _.current && a.setValue("customerSearching", !1);
    }
  }
  const g = f => {
      I.current !== null && clearTimeout(I.current), I.current = setTimeout(() => {
        I.current = null, j(f.trim());
      }, Yt);
    },
    b = f => {
      const x = (a.getValue("customerOptions") ?? []).find(v => v.value === f);
      a.setValues({
        customerSeq: x ? f : 0,
        customerName: x?.name ?? ""
      });
    },
    E = f => C(f.seq),
    $ = () => m.getFormValue("itemIds") ?? [],
    k = () => {
      const f = z();
      m.setFormValue(`items.${f}`, {
        ...ne
      }), m.setFormValue("itemIds", [...$(), f]);
    },
    w = f => {
      const x = $();
      x.length > 1 && m.setFormValue("itemIds", x.filter(v => v !== f));
    },
    A = async (f, x) => {
      const v = Number(a.getValue("dealSeq")) || 0,
        h = m.getFormValues();
      if (m.setFormValues(f), !v) return !0;
      const p = re({
        ...h,
        ...f
      }, Number(a.getValue("customerSeq")) || 0);
      if (typeof p == "string") return m.setFormValues(Object.fromEntries(Object.keys(f).map(S => [S, h[S]]))), L(p), !1;
      const d = x.includes("stage") ? [...x, "valid_until", "start_date", "end_date"] : x,
        q = Object.fromEntries(d.map(S => [S, p[S]]));
      try {
        await W.update(v, q);
        const S = a.getValue("deal");
        return S && a.setValue("deal", {
          ...S,
          ...q
        }), o.current && (o.current = {
          ...o.current,
          ...f
        }), r.current.onSaved?.(), !0;
      } catch (S) {
        return m.setFormValues(Object.fromEntries(Object.keys(f).map(B => [B, h[B]]))), L(S instanceof Error ? S.message : D("partner.dealSaveFailed")), !1;
      }
    };
  return Me(["partner_deal"], f => {
    const x = Number(a.getValue("dealSeq")) || 0;
    if (!x || !i.form.isOpen) return;
    const v = Ae(f, "partner_deal", x);
    if (!v && !f.resync) return;
    if (v?.action === "delete") {
      i.form.close(), L(D("partner.dealDeletedByOther"));
      return;
    }
    const h = n.current;
    W.detail(x).then(p => {
      if (h !== n.current || !i.form.isOpen) return;
      const d = m.getFormValues(),
        q = o.current ?? d,
        S = p.items.length ? p.items.map(() => z()) : [z()],
        B = p.items.length ? p.items : [ne],
        T = {
          ...d,
          stage: p.stage,
          title: p.title ?? "",
          partner_seq: p.partner_seq || "",
          deal_date: p.deal_date || d.deal_date,
          valid_until: p.valid_until,
          start_date: p.start_date ?? "",
          end_date: p.end_date ?? "",
          vat_mode: p.vat_mode ?? "exclusive",
          memo: p.memo ?? "",
          folder_seq: p.folder_seq || "",
          extra: p.extra ?? {},
          content: p.content ?? "",
          itemIds: S,
          items: Object.fromEntries(B.map((V, Z) => [S[Z], {
            name: V.name,
            spec: V.spec,
            qty: V.qty || "",
            unit_price: V.unit_price || "",
            note: V.note
          }]))
        },
        {
          patch: K
        } = Be(d, q, T, {
          nested: ["extra"],
          skip: ["itemIds", "items"]
        }),
        F = V => JSON.stringify((V.itemIds ?? []).map(Z => V.items?.[Z]));
      F(d) === F(q) && F(d) !== F(T) && Object.assign(K, {
        itemIds: T.itemIds,
        items: T.items
      }), o.current = T, Object.keys(K).length > 0 && m.setFormValues(K), a.setValue("deal", p);
    }).catch(() => {});
  }, {
    enabled: i.form.isOpen
  }), {
    form: m,
    modals: i,
    ui: a,
    openCreate: l,
    openCreateForCustomer: u,
    openCreatePickCustomer: c,
    openEdit: E,
    addItem: k,
    removeItem: w,
    submitWithPdf: async () => {
      s.current = !0;
      try {
        await m.submit();
      } finally {
        s.current = !1;
      }
    },
    searchCustomers: g,
    pickCustomer: b,
    saveField: A
  };
}
const M = e => String(e).padStart(2, "0"),
  X = e => e < 100 ? 2e3 + e : e;
function G(e, r, n) {
  if (e < 1900 || e > 2999 || r < 1 || r > 12 || n < 1) return null;
  const s = new Date(e, r, 0).getDate();
  return n > s ? null : `${e}-${M(r)}-${M(n)}`;
}
function Y(e, r = new Date().getFullYear()) {
  const n = e.trim().replace(/[년월]\s*/g, ".").replace(/일$/, "").replace(/\.$/, "");
  if (!n) return "";
  if (/^\d+$/.test(n)) return n.length === 8 ? G(Number(n.slice(0, 4)), Number(n.slice(4, 6)), Number(n.slice(6, 8))) : n.length === 6 ? G(X(Number(n.slice(0, 2))), Number(n.slice(2, 4)), Number(n.slice(4, 6))) : n.length === 4 ? G(r, Number(n.slice(0, 2)), Number(n.slice(2, 4))) : null;
  const s = n.split(/\s*[.\-/\s]\s*/).filter(Boolean).map(Number);
  return s.some(o => !Number.isFinite(o)) ? null : s.length === 3 ? G(X(s[0]), s[1], s[2]) : s.length === 2 ? G(r, s[0], s[1]) : null;
}
function zt(e, r = new Date().getFullYear()) {
  const n = e.trim().replace(/년\s*/g, ".").replace(/월$/, "").replace(/\.$/, "");
  if (!n) return "";
  const s = (i, a) => i >= 1900 && i <= 2999 && a >= 1 && a <= 12 ? `${i}-${M(a)}` : null;
  if (/^\d+$/.test(n)) return n.length === 6 ? s(Number(n.slice(0, 4)), Number(n.slice(4, 6))) : n.length === 4 ? s(X(Number(n.slice(0, 2))), Number(n.slice(2, 4))) : n.length <= 2 ? s(r, Number(n)) : null;
  const o = n.split(/\s*[.\-/\s]\s*/).filter(Boolean).map(Number);
  return o.length !== 2 || o.some(i => !Number.isFinite(i)) ? null : s(X(o[0]), o[1]);
}
function Se(e) {
  const r = /^(\d{4})-(\d{2})-(\d{2})/.exec(e);
  return r ? `${r[1].slice(2)}.${r[2]}.${r[3]}` : "";
}
function Jt(e) {
  const r = /^(\d{4})-(\d{2})/.exec(e);
  return r ? `${r[1].slice(2)}.${r[2]}` : "";
}
function Xt(e) {
  const r = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e);
  if (!r) return "";
  const n = new Date(Number(r[1]), Number(r[2]) - 1, Number(r[3]) + 1);
  return `${n.getFullYear()}-${M(n.getMonth() + 1)}-${M(n.getDate())}`;
}
function Nn(e) {
  const r = /^(\d{4})-(\d{2})/.exec(e);
  if (!r) return "";
  const n = Number(r[1]) * 12 + Number(r[2]);
  return `${Math.floor(n / 12)}-${M(n % 12 + 1)}`;
}
function kn(e) {
  const r = /^(\d{4})-(\d{2})-(\d{2})~(\d{4})-(\d{2})-(\d{2})$/.exec(e);
  if (!r) return "";
  const [, n, s, o, i, a, m] = r.map(Number),
    C = m === new Date(i, a, 0).getDate(),
    l = (i - n) * 12 + (a - s) + (C || m >= o ? 1 : 0),
    u = Xt(`${r[4]}-${r[5]}-${r[6]}`),
    [c, _, I] = u.split("-").map(Number),
    j = C ? new Date(c, _ - 1 + l, 0) : new Date(c, _ - 1 + l, I - 1);
  return `${u}~${j.getFullYear()}-${M(j.getMonth() + 1)}-${M(j.getDate())}`;
}
const se = e => Se(e) || e;
function Qt({
  controller: e,
  fields: r
}) {
  const {
      form: n
    } = e,
    s = (o, i) => {
      const a = n.getFormValue("extra") ?? {};
      return e.saveField({
        extra: {
          ...a,
          [o]: i
        }
      }, ["extra"]);
    };
  return t.jsx(Oe, {
    fields: r,
    form: n,
    onSave: s
  });
}
function Oe({
  fields: e,
  form: r,
  onSave: n
}) {
  const {
    members: s
  } = xt();
  return t.jsx(t.Fragment, {
    children: e.map(o => t.jsx(y, {
      form: r,
      name: `extra.${o.field_key}`,
      children: i => t.jsx(Zt, {
        field: o,
        value: i,
        members: s,
        save: n
      })
    }, o.seq))
  });
}
function Zt({
  field: e,
  value: r,
  members: n,
  save: s
}) {
  const o = Q(),
    i = e.required ? `${e.label} *` : e.label,
    a = Wt(e),
    m = r == null ? "" : String(r),
    C = e.bold ? {
      fontWeight: 600
    } : void 0;
  switch (e.field_type) {
    case "select":
      return t.jsx(R, {
        icon: a,
        label: i,
        value: m,
        options: e.options.map(l => ({
          value: l,
          label: l
        })),
        emptyLabel: o("customer.notAssigned"),
        renderLabel: l => t.jsx(J, {
          field: e,
          option: String(l.value)
        }),
        onCreate: l => fe(e, l),
        onChange: l => {
          s(e.field_key, String(l));
        }
      }, e.seq);
    case "multiselect":
      return t.jsx(nt, {
        icon: a,
        label: i,
        value: Array.isArray(r) ? r.map(String) : [],
        options: e.options,
        renderLabel: l => t.jsx(J, {
          field: e,
          option: l
        }),
        onCreate: l => fe(e, l),
        onChange: l => {
          s(e.field_key, l);
        }
      }, e.seq);
    case "person":
      return t.jsx(R, {
        icon: a,
        label: i,
        value: Number(r) || "",
        options: n.map(l => ({
          value: l.account_seq,
          label: l.name
        })),
        emptyLabel: o("customer.notAssigned"),
        onChange: l => {
          s(e.field_key, l === "" ? "" : Number(l));
        }
      }, e.seq);
    case "bool":
      return t.jsx(be, {
        icon: a,
        label: e.label,
        checked: r === !0,
        onChange: l => {
          s(e.field_key, l);
        }
      }, e.seq);
    case "date":
      return t.jsx(O, {
        icon: a,
        label: i,
        children: t.jsx(N, {
          value: se(m),
          placeholder: "26.06.01",
          onCommit: l => {
            const u = Y(l);
            return u === null ? !1 : s(e.field_key, u);
          }
        })
      }, e.seq);
    case "month":
      return t.jsx(O, {
        icon: a,
        label: i,
        children: t.jsx(N, {
          value: Jt(m) || m,
          placeholder: "26.12",
          onCommit: l => {
            const u = zt(l);
            return u === null ? !1 : s(e.field_key, u);
          }
        })
      }, e.seq);
    case "period":
      {
        const [l = "", u = ""] = m.split("~");
        return t.jsx(O, {
          icon: a,
          label: i,
          children: t.jsx(N, {
            value: l || u ? `${se(l)}~${se(u)}` : "",
            placeholder: "26.06.01~26.11.30",
            onCommit: c => {
              if (!c.trim()) return s(e.field_key, "");
              const [_ = "", I = ""] = c.split("~"),
                j = Y(_),
                g = Y(I);
              return j === null || g === null ? !1 : s(e.field_key, j || g ? `${j}~${g}` : "");
            }
          })
        }, e.seq);
      }
    case "number":
    case "money":
      return t.jsxs(O, {
        icon: a,
        label: i,
        children: [t.jsx(N, {
          value: m,
          format: e.field_type === "money" ? "number" : void 0,
          inputMode: "decimal",
          onCommit: l => {
            const u = l.replace(/[,원\s]/g, "");
            return u === "" ? s(e.field_key, "") : Number.isFinite(Number(u)) ? s(e.field_key, Number(u)) : !1;
          }
        }), e.field_type === "money" && m !== "" ? t.jsx(P, {
          component: "span",
          sx: {
            color: "text.secondary",
            flexShrink: 0
          },
          children: o("customer.wonSuffix")
        }) : null]
      }, e.seq);
    case "phone":
      return t.jsx(O, {
        icon: a,
        label: i,
        children: t.jsx(N, {
          value: m,
          inputMode: "tel",
          format: "phone",
          onCommit: l => s(e.field_key, ye(l))
        })
      }, e.seq);
    case "textarea":
      return t.jsx(O, {
        icon: a,
        label: i,
        alignTop: !0,
        full: !0,
        children: t.jsx(N, {
          value: m,
          multiline: !0,
          onCommit: l => s(e.field_key, l)
        })
      }, e.seq);
    default:
      return t.jsx(O, {
        icon: a,
        label: i,
        children: t.jsx(P, {
          component: "span",
          sx: {
            display: "contents",
            "& input": C ?? {}
          },
          children: t.jsx(N, {
            value: m,
            onCommit: l => s(e.field_key, l)
          })
        })
      }, e.seq);
  }
}
function Vn({
  controller: e,
  meta: r,
  basicFields: n
}) {
  const s = Q(),
    {
      form: o,
      saveField: i
    } = e,
    a = u => String(u ?? ""),
    m = o.useFormValue("phoneIds") ?? [],
    C = ge("customer").folders,
    l = (u, c) => {
      const _ = o.getFormValue("phones") ?? {};
      return i({
        phones: {
          ..._,
          [u]: ye(c)
        }
      }, ["phones"]);
    };
  return t.jsxs(t.Fragment, {
    children: [t.jsx(O, {
      icon: t.jsx(Ke, {}),
      label: s("customer.customerNameRequired"),
      children: t.jsx(y, {
        form: o,
        name: "name",
        children: u => t.jsx(N, {
          value: a(u),
          maxLength: 100,
          onCommit: c => i({
            name: c
          }, ["name"])
        })
      })
    }), t.jsx(y, {
      form: o,
      name: "category_seq",
      children: u => t.jsx(R, {
        icon: t.jsx(St, {}),
        label: s("customer.category"),
        value: Number(u) || "",
        options: r.categories.map(c => ({
          value: c.seq,
          label: c.name
        })),
        emptyLabel: s("customer.notAssigned"),
        onChange: c => {
          i({
            category_seq: c === "" ? "" : Number(c)
          }, ["category_seq"]);
        },
        footer: r.can_manage ? t.jsxs(t.Fragment, {
          children: [t.jsx(Ue, {}), t.jsx(Ye, {
            onClick: () => Ge(),
            sx: {
              color: "primary.main"
            },
            children: s("customer.manageCategories")
          })]
        }) : void 0
      })
    }), m.map((u, c) => t.jsx(O, {
      icon: c === 0 ? t.jsx(Ot, {}) : t.jsx(Ce, {}),
      label: s(c === 0 ? "customer.mainPhone" : "customer.extraPhone"),
      children: t.jsx(y, {
        form: o,
        name: `phones.${u}`,
        children: _ => t.jsx(N, {
          value: a(_),
          inputMode: "tel",
          format: "phone",
          onCommit: I => l(u, I)
        })
      })
    }, u)), t.jsx(y, {
      form: o,
      name: "manager_account_seq",
      children: u => t.jsx(R, {
        icon: t.jsx(He, {}),
        label: s("customer.manager"),
        value: Number(u) || "",
        options: r.members.map(c => ({
          value: c.account_seq,
          label: c.name
        })),
        emptyLabel: s("customer.notAssigned"),
        onChange: c => {
          i({
            manager_account_seq: c === "" ? "" : Number(c)
          }, ["manager_account_seq"]);
        }
      })
    }), t.jsx(O, {
      icon: t.jsx(ze, {}),
      label: s("customer.email"),
      children: t.jsx(y, {
        form: o,
        name: "email",
        children: u => t.jsx(N, {
          value: a(u),
          inputMode: "email",
          onCommit: c => c && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c) ? !1 : i({
            email: c
          }, ["email"])
        })
      })
    }), t.jsx(O, {
      icon: t.jsx(Qe, {}),
      label: s("customer.birthDate"),
      children: t.jsx(y, {
        form: o,
        name: "birth_date",
        children: u => t.jsx(It, {
          value: a(u),
          placeholder: "YYYY-MM-DD",
          onCommit: c => {
            const _ = Je(c);
            return Xe(_) ? i({
              birth_date: _
            }, ["birth_date"]) : !1;
          }
        })
      })
    }), t.jsx(y, {
      form: o,
      name: "marketing_agree",
      children: u => t.jsx(be, {
        icon: t.jsx(Ze, {}),
        label: s("customer.marketingConsent"),
        checked: u === !0,
        onChange: c => {
          i({
            marketing_agree: c
          }, ["marketing_agree"]);
        }
      })
    }), t.jsx(O, {
      icon: t.jsx(et, {}),
      label: s("customer.address"),
      wide: !0,
      rowStart: !0,
      children: t.jsx(y, {
        form: o,
        name: "address",
        children: u => t.jsx(qt, {
          value: a(u),
          onCommit: c => i({
            address: c
          }, ["address"])
        })
      })
    }), t.jsx(O, {
      icon: t.jsx(tt, {}),
      label: s("customer.addressDetail"),
      wide: !0,
      children: t.jsx(y, {
        form: o,
        name: "address_detail",
        children: u => t.jsx(N, {
          value: a(u),
          maxLength: 200,
          onCommit: c => i({
            address_detail: c
          }, ["address_detail"])
        })
      })
    }), C.length > 0 ? t.jsx(y, {
      form: o,
      name: "folder_seq",
      children: u => t.jsx(R, {
        icon: t.jsx(je, {}),
        label: s("customer.folder"),
        value: Number(u) || "",
        options: _e(C).map(c => ({
          value: Number(c.value),
          label: String(c.label)
        })),
        emptyLabel: s("customer.noFolder"),
        onChange: c => {
          i({
            folder_seq: c === "" ? "" : Number(c)
          }, ["folder_seq"]);
        }
      })
    }) : null, t.jsx(Qt, {
      controller: e,
      fields: n
    })]
  });
}
const ae = e => Se(e) || e;
function en({
  controller: e
}) {
  const r = Q(),
    {
      form: n,
      ui: s,
      saveField: o
    } = e,
    i = g => String(g ?? ""),
    a = Number(s.useValue("customerSeq")) || 0,
    m = String(s.useValue("customerName") ?? ""),
    C = !!s.useValue("pickingCustomer"),
    l = s.useValue("partnerOptions") ?? [],
    u = s.useValue("dealFields") ?? [],
    c = ge("deal").folders,
    _ = (C || a > 0) && c.length > 0,
    I = (g, b) => {
      const E = n.getFormValue("extra") ?? {};
      return o({
        extra: {
          ...E,
          [g]: b
        }
      }, ["extra"]);
    },
    j = (g, b, E) => t.jsx(O, {
      icon: E,
      label: b,
      children: t.jsx(y, {
        form: n,
        name: g,
        children: $ => t.jsx(N, {
          value: ae(i($)),
          placeholder: "26.06.01",
          onCommit: k => {
            const w = Y(k);
            return w === null ? !1 : o({
              [g]: w
            }, [g]);
          }
        })
      })
    });
  return t.jsxs(t.Fragment, {
    children: [t.jsx(y, {
      form: n,
      name: "stage",
      children: g => t.jsx(R, {
        icon: t.jsx(rt, {}),
        label: r("partner.stage"),
        value: i(g),
        options: Object.keys(ie).map(b => ({
          value: b,
          label: ie[b]
        })),
        onChange: b => {
          o({
            stage: b
          }, ["stage"]);
        }
      })
    }), a > 0 || C ? t.jsx(O, {
      icon: t.jsx(st, {}),
      label: r("partner.customer"),
      children: t.jsx(P, {
        component: "span",
        sx: {
          color: m ? "text.primary" : "text.secondary"
        },
        children: m || r("partner.pickAbove")
      })
    }) : t.jsx(y, {
      form: n,
      name: "partner_seq",
      children: g => t.jsx(R, {
        icon: t.jsx(at, {}),
        label: r("partner.partner"),
        value: Number(g) || "",
        options: l,
        emptyLabel: r("partner.selectPartner"),
        onChange: b => {
          o({
            partner_seq: b === "" ? "" : Number(b)
          }, ["partner_seq"]);
        }
      })
    }), t.jsx(O, {
      icon: t.jsx(jt, {}),
      label: r("partner.dealTitleRequiredLabel"),
      wide: !0,
      children: t.jsx(y, {
        form: n,
        name: "title",
        children: g => t.jsx(N, {
          value: i(g),
          placeholder: r("partner.dealTitlePlaceholder"),
          maxLength: 200,
          onCommit: b => b.trim() ? o({
            title: b
          }, ["title"]) : !1
        })
      })
    }), t.jsx(y, {
      form: n,
      name: "stage",
      children: g => g === "contract" ? t.jsxs(t.Fragment, {
        children: [j("deal_date", r("partner.contractDate"), t.jsx(ce, {})), t.jsx(O, {
          icon: t.jsx(ve, {}),
          label: r("partner.contractPeriod"),
          children: t.jsx(y, {
            form: n,
            name: "start_date",
            children: b => t.jsx(y, {
              form: n,
              name: "end_date",
              children: E => {
                const $ = i(b),
                  k = i(E);
                return t.jsx(N, {
                  value: $ || k ? `${ae($)}~${ae(k)}` : "",
                  placeholder: "26.06.01~27.05.31",
                  onCommit: w => {
                    const [A = "", H = ""] = w.split("~"),
                      f = Y(A),
                      x = Y(H);
                    return f === null || x === null ? !1 : o({
                      start_date: f,
                      end_date: x
                    }, ["start_date", "end_date"]);
                  }
                });
              }
            })
          })
        })]
      }) : t.jsxs(t.Fragment, {
        children: [j("deal_date", r("partner.quoteDate"), t.jsx(ce, {})), j("valid_until", r("partner.validUntil"), t.jsx(vt, {}))]
      })
    }), _ ? t.jsx(y, {
      form: n,
      name: "folder_seq",
      children: g => t.jsx(R, {
        icon: t.jsx(je, {}),
        label: r("partner.folder"),
        value: Number(g) || "",
        options: _e(c).map(b => ({
          value: Number(b.value),
          label: String(b.label)
        })),
        emptyLabel: r("partner.noFolder"),
        onChange: b => {
          o({
            folder_seq: b === "" ? "" : Number(b)
          }, ["folder_seq"]);
        }
      })
    }) : null, t.jsx(Oe, {
      fields: u,
      form: n,
      onSave: I
    }), t.jsx(O, {
      icon: t.jsx(Ct, {}),
      label: r("partner.note"),
      alignTop: !0,
      full: !0,
      children: t.jsx(y, {
        form: n,
        name: "memo",
        children: g => t.jsx(N, {
          value: i(g),
          multiline: !0,
          maxLength: 1e3,
          placeholder: r("partner.dealMemoPlaceholder"),
          onCommit: b => o({
            memo: b
          }, ["memo"])
        })
      })
    })]
  });
}
function Dn({
  controller: e,
  presentation: r = "drawer"
}) {
  const n = Q(),
    s = ot(),
    o = ue("customer").canWrite,
    i = ue("partner").canWrite,
    a = o || i,
    {
      form: m,
      modals: C,
      ui: l
    } = e,
    u = wt(m),
    c = m.useFormValue("itemIds") ?? [],
    _ = Number(l.useValue("dealSeq")) || 0,
    I = l.useValue("deal"),
    j = !!l.useValue("loading"),
    g = Number(l.useValue("customerSeq")) || 0,
    b = !!l.useValue("pickingCustomer"),
    E = l.useValue("customerOptions") ?? [],
    $ = !!l.useValue("customerSearching"),
    k = m.isSubmitting,
    w = String(m.useFormValue("content") ?? ""),
    A = bt(),
    H = m.useFormValue("stage"),
    f = gt(m, ["items", "itemIds"], () => {
      const h = m.getFormValue("itemIds") ?? [],
        p = m.getFormValue("items") ?? {};
      return h.some(d => !!(String(p[d]?.name ?? "").trim() || Number(p[d]?.unit_price)));
    }),
    x = H !== "contract" || f,
    v = _ ? `${I?.title || (I ? ie[I.stage] : n("partner.dealGeneric"))}${I?.deal_no ? ` (${I.deal_no})` : ""}` : n("partner.quoteCreate");
  return t.jsx(it, {
    readOnly: !a,
    open: C.form.isOpen,
    onClose: C.form.close,
    title: v,
    maxWidth: "lg",
    backdropClick: !s,
    sideDrawer: !s && r === "drawer",
    splitDock: !s && r === "dock",
    scrollPastLastSection: !1,
    sx: s ? void 0 : {
      DialogContent: Tt
    },
    fullScreen: s,
    mobilePresentation: s ? "slide" : "dialog",
    titleIcons: {
      print: {
        visible: !1
      },
      share: {
        visible: !1
      },
      delete: {
        visible: !1
      }
    },
    tabs: {
      visible: !1
    },
    actions: {
      showCancelButton: !0,
      left: a ? t.jsx(ee, {
        onClick: () => {
          e.submitWithPdf();
        },
        disabled: k || j,
        children: n("partner.saveWithPdf")
      }) : void 0,
      right: a ? t.jsx(ee, {
        variant: "contained",
        onClick: () => {
          m.submit();
        },
        disabled: k || j,
        children: n(k ? "partner.saving" : _ ? "partner.saveItems" : "partner.save")
      }) : void 0
    },
    sections: [{
      id: "deal-basic",
      showTitle: !1,
      children: j ? t.jsx(P, {
        sx: {
          display: "flex",
          justifyContent: "center",
          py: 4
        },
        children: t.jsx(lt, {
          size: 28
        })
      }) : t.jsxs(P, {
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: 2
        },
        children: [b ? t.jsx(ct, {
          label: n("partner.customerSearchLabel"),
          options: E,
          value: g || null,
          onChange: h => e.pickCustomer(Number(h) || 0),
          disableFilter: !0,
          onInputChange: (h, p, d) => {
            d === "input" && (!p.trim() && g && e.pickCustomer(0), e.searchCustomers(p));
          },
          disablePortal: !1,
          loading: $,
          noOptionsText: n("partner.customerNotFound"),
          fullWidth: !0
        }) : null, t.jsx(ut, {
          sx: a ? void 0 : {
            pointerEvents: "none"
          },
          children: t.jsx(en, {
            controller: e
          })
        })]
      })
    }, {
      id: "deal-content",
      title: n("partner.content"),
      endIcon: a ? A.doneButton : void 0,
      children: j ? null : t.jsx(_t, {
        syncKey: _ || "new",
        value: w,
        editing: A.editing,
        onEditingChange: a ? A.setEditing : () => {},
        onSave: h => e.saveField({
          content: h
        }, ["content"])
      })
    }, ...(x ? [{
      id: "deal-items",
      title: n("partner.items"),
      children: t.jsxs(P, {
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: 1,
          ...(a ? {} : {
            pointerEvents: "none"
          })
        },
        children: [s ? null : t.jsx(Pt, {}), c.map((h, p) => t.jsx(Et, {
          id: h,
          index: p,
          form: u,
          isMobile: s,
          canRemove: c.length > 1,
          onRemove: e.removeItem
        }, h)), a ? t.jsx(P, {
          children: t.jsx(ee, {
            startIcon: t.jsx(mt, {}),
            onClick: e.addItem,
            disabled: j,
            children: n("partner.addItem")
          })
        }) : null]
      })
    }, {
      id: "deal-summary",
      title: n("partner.total"),
      children: t.jsx($t, {
        form: u,
        itemIds: c,
        isMobile: s
      })
    }] : [])]
  });
}
export { Vn as C, Dn as D, pe as O, Kt as a, Cn as b, Qt as c, qn as d, Sn as e, On as f, Se as g, Jt as h, te as i, zt as j, Nn as m, kn as n, Bt as o, Y as p, At as s, In as t, Fn as u };