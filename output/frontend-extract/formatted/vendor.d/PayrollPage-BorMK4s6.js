import { r as j, j as n, u as Se } from "./react-CjxcGQav.js";
import { bM as E, bT as d, ce as Ie, cf as je, e as U, c8 as Ee, ak as G, dv as X, fA as Pe, bO as K, bx as Re, j9 as Ce, bv as z, fL as ne, D as ae, c4 as V, ca as B, lS as we, cO as De, L as M, cI as pe, bQ as L, K as Q, B as x, cm as re, d8 as he, al as Ve, ar as ke, bI as se, cP as oe, cz as Oe, dL as Fe, lr as Le, s as ve } from "../js.d/main-Cm9wS5wt.js";
import { a as Ne } from "./EdgeTabs-Ccbggjn6.js";
import { u as Ae } from "./mobileSearchOverlay-DYWcMOOb.js";
import { l as ye } from "./i18nLabels-BNTLL7cu.js";
import { I as Z } from "./InlineErrorAlert-D9ICJPt7.js";
import { u as $e, b as Te, a as Be } from "./MobileCardListLayout-D5_p2Xer.js";
import { T as Me } from "./tableScrollbars-C9bhlJjO.js";
import { u as qe } from "./useColumnWidths-DSAca5rC.js";
const P = "/v1/hr/payroll";
function R(t, e) {
  if (!t || t.ok === !1) throw new Error(t?.message || e);
  return t.data;
}
function b(t) {
  return typeof t == "string" ? t : t == null ? "" : String(t);
}
function p(t) {
  const e = Number(t ?? 0);
  return Number.isFinite(e) ? e : 0;
}
function ge(t) {
  const e = b(t).slice(0, 10);
  return /^\d{4}-\d{2}-\d{2}$/.test(e) && e !== "0000-00-00" ? e : "";
}
function fe(t) {
  return (Array.isArray(t) ? t : []).map(e => {
    const a = e ?? {};
    return {
      code: b(a.code),
      name: b(a.name),
      amount: p(a.amount),
      taxable: a.taxable !== !1 && a.taxable !== 0,
      note: b(a.note)
    };
  });
}
function We(t) {
  return (Array.isArray(t) ? t : []).map(e => {
    const a = e ?? {};
    return {
      code: b(a.code),
      name: b(a.name),
      amount: p(a.amount),
      note: b(a.note)
    };
  });
}
function le(t) {
  const e = t ?? {};
  return {
    seq: p(e.seq),
    pay_month: b(e.pay_month),
    pay_date: ge(e.pay_date),
    status: e.status === "confirmed" ? "confirmed" : "draft",
    title: b(e.title),
    memo: b(e.memo),
    employee_count: p(e.employee_count),
    total_gross: p(e.total_gross),
    total_deduction: p(e.total_deduction),
    total_net: p(e.total_net),
    confirmed_by_name: b(e.confirmed_by_name)
  };
}
function ze(t) {
  const e = t ?? {};
  return {
    seq: p(e.seq),
    run_seq: p(e.run_seq),
    employee_seq: p(e.employee_seq),
    employee_name: b(e.employee_name),
    unit_name: b(e.unit_name),
    position: b(e.position),
    join_date: ge(e.join_date),
    earnings: fe(e.earnings),
    deductions: We(e.deductions),
    auto_deduction: e.auto_deduction !== !1 && e.auto_deduction !== 0,
    auto_income_tax: e.auto_income_tax !== !1 && e.auto_income_tax !== 0,
    income_tax_reduction: p(e.income_tax_reduction),
    gross: p(e.gross),
    taxable: p(e.taxable),
    total_deduction: p(e.total_deduction),
    net: p(e.net),
    note: b(e.note),
    attendance_check: b(e.attendance_check),
    attendance_summary: He(e.attendance_summary)
  };
}
function He(t) {
  if (!t || typeof t != "object" || Array.isArray(t)) return null;
  const e = t;
  return {
    work_days: p(e.work_days),
    work_minutes: p(e.work_minutes),
    late_count: p(e.late_count),
    early_count: p(e.early_count),
    overtime_minutes: p(e.overtime_minutes),
    absent_count: p(e.absent_count),
    unconfirmed_days: p(e.unconfirmed_days),
    leave_days: p(e.leave_days)
  };
}
function ie(t) {
  const e = t ?? {};
  return {
    pension: p(e.pension),
    health: p(e.health),
    long_term_care: p(e.long_term_care),
    employment: p(e.employment),
    pension_min_base: p(e.pension_min_base),
    pension_max_base: p(e.pension_max_base)
  };
}
function Ue(t, e) {
  const a = (t instanceof Error ? t.message : "").replace(/^HTTP \d+:\s*/, "");
  try {
    const i = JSON.parse(a);
    if (typeof i.message == "string" && i.message) return i.message;
  } catch {}
  return e;
}
const D = {
    getSettings: async () => {
      const t = await E.http.get(`${P}/settings`),
        e = R(t, d("hr.errLoadPayrollSettings"));
      return {
        rates: ie(e.rates),
        defaults: ie(e.defaults),
        earning_items: fe(e.earning_items).map(({
          code: a,
          name: i,
          taxable: u
        }) => ({
          code: a,
          name: i,
          taxable: u
        }))
      };
    },
    putSettings: async t => {
      R(await E.http.put(`${P}/settings`, t), d("hr.errSavePayrollSettings"));
    },
    listRuns: async () => {
      const t = await E.http.get(`${P}/runs`);
      return (R(t, d("hr.errLoadPayrollRuns")).items ?? []).map(le);
    },
    createRun: async t => {
      const e = await E.http.post(`${P}/runs`, t);
      return p(R(e, d("hr.errCreatePayrollRun")).seq);
    },
    getRun: async t => {
      const e = await E.http.get(`${P}/runs/${t}`),
        a = R(e, d("hr.errLoadPayrollRun"));
      return {
        run: le(a.run),
        items: (a.items ?? []).map(ze)
      };
    },
    updateRun: async (t, e) => {
      R(await E.http.patch(`${P}/runs/${t}`, e), d("hr.errSavePayrollRun"));
    },
    removeRun: async t => {
      R(await E.http.delete(`${P}/runs/${t}`), d("hr.errDeletePayrollRun"));
    },
    recalculate: async t => {
      R(await E.http.post(`${P}/runs/${t}/recalculate`, {}), d("hr.errRecalculate"));
    },
    addItem: async (t, e) => {
      R(await E.http.post(`${P}/runs/${t}/items`, {
        employee_seq: e
      }), d("hr.errAddEmployee"));
    },
    updateItem: async (t, e) => {
      R(await E.http.put(`${P}/items/${t}`, e), d("hr.errSavePayrollItem"));
    },
    removeItem: async t => {
      R(await E.http.delete(`${P}/items/${t}`), d("hr.errDeletePayrollItem"));
    },
    payslip: async t => {
      try {
        const e = await E.requestBinary("GET", `${P}/items/${t}/payslip`);
        return new Blob([e], {
          type: "application/pdf"
        });
      } catch (e) {
        throw new Error(Ue(e, d("hr.errMakePayslip")));
      }
    }
  },
  Ge = ["pension", "health", "long_term_care", "employment"],
  q = [...Ge, "income_tax", "local_income_tax"],
  Ye = {
    pension: "국민연금",
    health: "건강보험",
    long_term_care: "장기요양",
    employment: "고용보험",
    income_tax: "소득세",
    local_income_tax: "지방소득세"
  },
  yt = ye({
    pension: "hr.insurancePension",
    health: "hr.insuranceHealth",
    long_term_care: "hr.payrollLongTermCare",
    employment: "hr.insuranceEmployment",
    income_tax: "hr.payrollIncomeTax",
    local_income_tax: "hr.payrollLocalIncomeTax"
  }),
  Je = ye({
    draft: "hr.payrollStatusDraft",
    confirmed: "hr.payrollStatusConfirmed"
  });
function $(t) {
  return (Number(t) || 0).toLocaleString(Ie(je()));
}
function _e(t) {
  const [e, a] = t.split("-");
  return e && a ? d("hr.yearMonth", {
    year: e,
    month: Number(a)
  }) : t;
}
function Y(t) {
  return t.title || d("hr.payrollRunTitle", {
    month: _e(t.pay_month)
  });
}
function gt(t, e) {
  return t.deductions.find(a => a.code === e)?.amount ?? 0;
}
const Xe = ["unpaid_leave_deduction", "absence_deduction", "late_early_deduction", "weekly_holiday_deduction"];
function ft(t) {
  return t.earnings.filter(e => Xe.includes(e.code)).reduce((e, a) => e + a.amount, 0);
}
function _t(t) {
  return t.deductions.filter(e => !q.includes(e.code)).reduce((e, a) => e + a.amount, 0);
}
function T(t) {
  return Number(t.replace(/[^\d]/g, "")) || 0;
}
function Ke(t, e = new Date()) {
  const a = t.map(o => o.pay_month).sort().pop();
  if (!a) return `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}`;
  const [i, u] = a.split("-").map(Number),
    l = new Date(i, u, 1);
  return `${l.getFullYear()}-${String(l.getMonth() + 1).padStart(2, "0")}`;
}
const Qe = {
    createError: "",
    settingsError: "",
    settings: null,
    payslipError: "",
    payslipItem: null,
    payslipDownloading: !1
  },
  xe = {
    pension: "",
    health: "",
    long_term_care: "",
    employment: "",
    income_tax: "",
    local_income_tax: ""
  };
let ce = 0;
function W() {
  return ce += 1, `r${ce}`;
}
function J(t) {
  return Number(t) || 0;
}
function v(t, e) {
  return t instanceof Error ? t.message : e;
}
function be(t) {
  return Object.fromEntries(Object.entries(t).map(([e, a]) => [e, String(a)]));
}
function ue(t) {
  const e = t.earning_items.map(() => W());
  return {
    rates: be(t.rates),
    itemIds: e,
    items: Object.fromEntries(t.earning_items.map((a, i) => [e[i], {
      code: a.code,
      name: a.name,
      nontaxable: !a.taxable
    }]))
  };
}
function me(t) {
  const e = t.earnings.map(() => W()),
    a = t.deductions.filter(l => !q.includes(l.code)),
    i = a.map(() => W()),
    u = {
      ...xe
    };
  for (const l of q) u[l] = t.deductions.find(o => o.code === l)?.amount || "";
  return {
    item_seq: t.seq,
    earningIds: e,
    earnings: Object.fromEntries(t.earnings.map((l, o) => [e[o], {
      code: l.code,
      name: l.name,
      amount: l.amount || "",
      nontaxable: !l.taxable,
      note: l.note
    }])),
    fixed: u,
    customIds: i,
    custom: Object.fromEntries(a.map((l, o) => [i[o], {
      ...l,
      amount: l.amount || ""
    }])),
    auto_deduction: t.auto_deduction,
    auto_income_tax: t.auto_income_tax,
    note: t.note
  };
}
function de(t, e, a, i) {
  const u = (y, h) => JSON.stringify(y) === JSON.stringify(h),
    l = {},
    o = {
      ...e
    };
  for (const y of i) if (!y.some(h => !u(t[h], e[h]))) for (const h of y) l[h] = a[h], o[h] = a[h];
  return {
    patch: l,
    baseline: o
  };
}
function Ze(t = {}) {
  const e = j.useRef(t);
  e.current = t;
  const a = j.useRef(0),
    i = j.useRef(null),
    u = j.useRef(null),
    l = {
      create: U({
        modalId: "hr-payroll-create-dialog"
      }),
      settings: U({
        modalId: "hr-payroll-settings-dialog"
      }),
      payslip: U({
        modalId: "hr-payroll-payslip-dialog"
      })
    },
    o = Ee({
      stateId: "hr-payroll-ui",
      initialValues: Qe
    }),
    y = G({
      formId: "hr-payroll-create-form",
      initialValues: {
        pay_month: "",
        pay_date: ""
      },
      onValidate: s => /^\d{4}-\d{2}$/.test(s.pay_month) ? s.pay_date && !/^\d{4}-\d{2}-\d{2}$/.test(s.pay_date) ? (o.setValue("createError", d("hr.payrollErrPayDateFull")), !1) : !0 : (o.setValue("createError", d("hr.payrollErrMonth")), !1),
      onSubmit: async s => {
        o.setValue("createError", "");
        try {
          const c = await D.createRun({
            pay_month: s.pay_month,
            pay_date: s.pay_date
          });
          return e.current.onCreated?.(c), l.create.close(), !0;
        } catch (c) {
          return o.setValue("createError", v(c, d("hr.errCreatePayrollRun"))), !1;
        }
      }
    }),
    h = G({
      formId: "hr-payroll-settings-form",
      initialValues: {
        itemIds: [],
        items: {}
      },
      onValidate: s => {
        const c = s.rates;
        return [c.pension, c.health, c.long_term_care, c.employment].map(Number).some(r => !Number.isFinite(r) || r < 0 || r > 100) ? (o.setValue("settingsError", d("hr.payrollErrRate")), !1) : T(String(c.pension_min_base ?? "")) >= T(String(c.pension_max_base ?? "")) ? (o.setValue("settingsError", d("hr.payrollErrPensionRange")), !1) : !0;
      },
      onSubmit: async s => {
        o.setValue("settingsError", "");
        const c = {
            pension: Number(s.rates.pension),
            health: Number(s.rates.health),
            long_term_care: Number(s.rates.long_term_care),
            employment: Number(s.rates.employment),
            pension_min_base: T(String(s.rates.pension_min_base ?? "")),
            pension_max_base: T(String(s.rates.pension_max_base ?? ""))
          },
          f = s.itemIds.map(r => s.items[r]).filter(r => !!r && !!String(r.name ?? "").trim()).map(r => ({
            code: r.code,
            name: r.name,
            taxable: !r.nontaxable
          }));
        try {
          return await D.putSettings({
            rates: c,
            earning_items: f
          }), Re({
            message: d("hr.payrollSettingsSaved"),
            delay: 1200
          }), l.settings.close(), !0;
        } catch (r) {
          return o.setValue("settingsError", v(r, d("hr.errSavePayrollSettings"))), !1;
        }
      }
    }),
    I = G({
      formId: "hr-payroll-payslip-form",
      initialValues: {
        item_seq: 0,
        earningIds: [],
        earnings: {},
        fixed: {
          ...xe
        },
        customIds: [],
        custom: {},
        auto_deduction: !0,
        auto_income_tax: !0,
        note: ""
      },
      onSubmit: async s => {
        if (!s.item_seq) return !1;
        o.setValue("payslipError", "");
        const c = s.earningIds.map(r => s.earnings[r]).filter(r => !!r).map(r => ({
            code: r.code,
            name: String(r.name ?? ""),
            amount: J(r.amount),
            taxable: !r.nontaxable,
            note: String(r.note ?? "")
          })).filter(r => r.name.trim() || r.amount),
          f = s.customIds.map(r => s.custom[r]).filter(r => !!r).map(r => ({
            code: "custom",
            name: String(r.name ?? ""),
            amount: J(r.amount),
            note: String(r.note ?? "")
          })).filter(r => r.name.trim() || r.amount);
        try {
          return await D.updateItem(s.item_seq, {
            earnings: c,
            deductions: [...q.map(r => ({
              code: r,
              name: Ye[r],
              amount: J(s.fixed[r]),
              note: ""
            })), ...f],
            auto_deduction: !!s.auto_deduction,
            auto_income_tax: !!s.auto_income_tax,
            note: String(s.note ?? "")
          }), e.current.onPayslipSaved?.(), l.payslip.close(), !0;
        } catch (r) {
          return o.setValue("payslipError", v(r, d("hr.errSavePayrollItem"))), !1;
        }
      }
    }),
    S = s => {
      y.setFormValues({
        pay_month: s,
        pay_date: ""
      }), o.setValue("createError", ""), l.create.open();
    },
    k = () => {
      const s = ++a.current;
      i.current = null, o.setValues({
        settings: null,
        settingsError: ""
      }), h.setFormValues({
        itemIds: [],
        items: {}
      }), l.settings.open(), D.getSettings().then(c => {
        if (a.current !== s) return;
        const f = ue(c);
        h.setFormValues(f), i.current = f, o.setValue("settings", c);
      }).catch(c => {
        a.current === s && o.setValue("settingsError", v(c, d("hr.errLoadPayrollSettings")));
      });
    },
    w = () => {
      const s = o.getValue("settings");
      s && h.setFormValue("rates", be(s.defaults));
    },
    C = s => {
      const c = me(s);
      I.setFormValues(c), u.current = c, o.setValues({
        payslipItem: s,
        payslipError: "",
        payslipDownloading: !1
      }), l.payslip.open();
    },
    g = async s => {
      const c = o.getValue("payslipItem");
      if (c) {
        o.setValue("payslipDownloading", !0);
        try {
          const f = await D.payslip(c.seq);
          await Ce(f, d("hr.payrollPayslipFile", {
            month: s,
            name: c.employee_name
          }));
        } catch (f) {
          K(v(f, d("hr.payrollErrPayslip")));
        } finally {
          o.setValue("payslipDownloading", !1);
        }
      }
    };
  return X(["hr_payroll_setting"], () => {
    if (!l.settings.isOpen || !i.current) return;
    const s = a.current;
    D.getSettings().then(c => {
      if (a.current !== s || !l.settings.isOpen || !i.current) return;
      const f = h.getFormValues(),
        {
          patch: r,
          baseline: O
        } = de(f, i.current, ue(c), [["rates"], ["itemIds", "items"]]);
      i.current = O, Object.keys(r).length > 0 && h.setFormValues(r), o.setValue("settings", c);
    }).catch(() => {});
  }, {
    enabled: l.settings.isOpen
  }), X(["hr_payroll_item"], s => {
    const c = o.getValue("payslipItem");
    if (!c || !l.payslip.isOpen) return;
    const f = Pe(s, "hr_payroll_item", c.seq);
    if (!f && !s.resync) return;
    const r = () => {
      l.payslip.close(), K(d("hr.payrollLineDeletedByOther"));
    };
    if (f?.action === "delete") return r();
    D.getRun(c.run_seq).then(O => {
      if (o.getValue("payslipItem")?.seq !== c.seq || !l.payslip.isOpen) return;
      const F = O.items.find(_ => _.seq === c.seq);
      if (!F) return r();
      const N = I.getFormValues(),
        {
          patch: A,
          baseline: m
        } = de(N, u.current ?? N, me(F), [["earningIds", "earnings"], ["customIds", "custom"], ["fixed"], ["auto_deduction"], ["auto_income_tax"], ["note"]]);
      u.current = m, Object.keys(A).length > 0 && I.setFormValues(A), o.setValue("payslipItem", F);
    }).catch(() => {});
  }, {
    enabled: l.payslip.isOpen
  }), {
    forms: {
      create: y,
      settings: h,
      payslip: I
    },
    modals: l,
    ui: o,
    openCreateDialog: S,
    openSettingsDialog: k,
    applySettingsDefaults: w,
    openPayslipDialog: C,
    downloadPayslip: g
  };
}
function et({
  controller: t
}) {
  const e = z(),
    a = ne("hr"),
    i = ae(),
    u = t.forms.create,
    l = t.modals.create,
    o = t.ui.useValue("createError"),
    y = u.isSubmitting,
    h = [{
      id: "payroll-create",
      showTitle: !1,
      children: n.jsxs(V, {
        spacing: B,
        children: [n.jsx(we, {
          form: u,
          name: "pay_month",
          label: e("hr.payrollPayMonth"),
          slotProps: {
            inputLabel: {
              shrink: !0
            }
          },
          disabled: y,
          fullWidth: !0
        }), n.jsx(De, {
          form: u,
          name: "pay_date",
          label: e("hr.payrollPayDate"),
          slotProps: {
            inputLabel: {
              shrink: !0
            }
          },
          disabled: y,
          readonlyInput: !0,
          fullWidth: !0
        }), n.jsx(M, {
          sx: {
            fontSize: 14,
            color: "text.secondary"
          },
          children: e("hr.payrollCreateNote")
        }), o && n.jsx(Z, {
          message: o
        })]
      })
    }];
  return n.jsx(pe, {
    readOnly: !a.canWrite,
    open: l.isOpen,
    onClose: l.close,
    title: e("hr.payrollCreateRun"),
    width: "460px",
    fullScreen: i,
    mobilePresentation: i ? "slide" : "dialog",
    draggable: !0,
    backdropClick: !1,
    titleIcons: {
      delete: {
        visible: !1
      },
      print: {
        visible: !1
      },
      share: {
        visible: !1
      }
    },
    tabs: {
      visible: !1
    },
    scrollPastLastSection: !1,
    actions: {
      visible: !0,
      showCancelButton: !0,
      right: n.jsx(L, {
        style: a.canWrite ? void 0 : {
          display: "none"
        },
        variant: "contained",
        onClick: () => {
          u.submit();
        },
        disabled: y,
        sx: {
          minWidth: 80
        },
        children: y ? n.jsx(Q, {
          size: 20,
          color: "inherit"
        }) : e("hr.payrollCreate")
      })
    },
    sections: h
  });
}
const tt = [{
    key: "pension",
    get label() {
      return d("hr.payrollRatePension");
    }
  }, {
    key: "health",
    get label() {
      return d("hr.payrollRateHealth");
    }
  }, {
    key: "long_term_care",
    get label() {
      return d("hr.payrollRateLtc");
    }
  }, {
    key: "employment",
    get label() {
      return d("hr.payrollRateEmployment");
    }
  }],
  nt = j.memo(function ({
    id: e,
    form: a,
    saving: i,
    isMobile: u,
    onRemove: l,
    readOnly: o = !1
  }) {
    const y = z(),
      h = n.jsx(Ve, {
        form: a,
        name: `items.${e}.name`,
        placeholder: y("hr.payrollItemName"),
        disabled: i,
        slotProps: {
          htmlInput: {
            maxLength: 50
          }
        },
        fullWidth: u,
        sx: u ? void 0 : {
          flex: 1
        }
      }),
      I = n.jsx(x, {
        sx: {
          "& .MuiFormControlLabel-root": {
            mr: 0
          }
        },
        children: n.jsx(ke, {
          form: a,
          name: `items.${e}.nontaxable`,
          label: y("hr.payrollNontaxable"),
          disabled: i
        })
      });
    return u ? n.jsxs(x, {
      sx: {
        pb: 1,
        borderBottom: "1px solid",
        borderColor: "divider"
      },
      children: [n.jsxs(x, {
        sx: {
          display: "flex",
          alignItems: "stretch",
          gap: 1
        },
        children: [n.jsx(x, {
          sx: {
            flex: 1,
            minWidth: 0
          },
          children: h
        }), o ? null : n.jsx(se, {
          "aria-label": y("hr.payrollRemoveItem"),
          onClick: () => l(e),
          disabled: i,
          sx: {
            flexShrink: 0,
            alignSelf: "center",
            color: "error.main"
          },
          children: n.jsx(oe, {})
        })]
      }), I]
    }) : n.jsxs(V, {
      direction: "row",
      spacing: 1,
      alignItems: "center",
      children: [h, I, o ? null : n.jsx(se, {
        "aria-label": y("hr.payrollRemoveItem"),
        onClick: () => l(e),
        disabled: i,
        children: n.jsx(oe, {
          fontSize: "small"
        })
      })]
    });
  });
function at({
  controller: t
}) {
  const e = z(),
    a = ne("hr"),
    i = ae(),
    u = t.forms.settings,
    l = t.modals.settings,
    o = t.ui.useValue("settings"),
    y = t.ui.useValue("settingsError"),
    h = u.useFormValue("itemIds") ?? [],
    I = !a.canWrite,
    S = u.isSubmitting,
    k = g => {
      const s = u.getFormValue("itemIds") ?? [];
      u.setFormValue("itemIds", s.filter(c => c !== g));
    },
    w = () => {
      const g = W();
      u.setFormValue(`items.${g}`, {
        code: `item${Date.now()}`,
        name: "",
        nontaxable: !1
      }), u.setFormValue("itemIds", [...(u.getFormValue("itemIds") ?? []), g]);
    },
    C = [{
      id: "payroll-rates",
      title: e("hr.payrollInsuranceRates"),
      children: o ? n.jsxs(V, {
        spacing: B,
        children: [n.jsx(x, {
          sx: {
            display: "grid",
            gridTemplateColumns: i ? "1fr" : "repeat(4, minmax(0, 1fr))",
            gap: B
          },
          children: tt.map(g => n.jsx(re, {
            form: u,
            name: `rates.${g.key}`,
            label: g.label,
            min: 0,
            thousandSeparator: !1,
            textAlign: "left",
            disabled: S,
            readonlyInput: !0
          }, g.key))
        }), n.jsx(x, {
          sx: {
            display: "grid",
            gridTemplateColumns: i ? "1fr" : "1fr 1fr",
            gap: B
          },
          children: ["pension_min_base", "pension_max_base"].map(g => n.jsx(re, {
            form: u,
            name: `rates.${g}`,
            label: e(g === "pension_min_base" ? "hr.payrollPensionMin" : "hr.payrollPensionMax"),
            min: 0,
            decimalLength: 0,
            textAlign: "left",
            disabled: S
          }, g))
        }), n.jsxs(V, {
          direction: "row",
          alignItems: "center",
          justifyContent: "space-between",
          spacing: 1,
          children: [n.jsx(M, {
            sx: {
              fontSize: 14,
              color: "text.secondary",
              wordBreak: "keep-all"
            },
            children: e("hr.payrollRatesNote")
          }), n.jsx(L, {
            onClick: t.applySettingsDefaults,
            disabled: S,
            sx: {
              flexShrink: 0
            },
            children: e("hr.payrollResetDefaults")
          })]
        })]
      }) : n.jsx(x, {
        sx: {
          display: "flex",
          justifyContent: "center",
          py: 3
        },
        children: y ? n.jsx(Z, {
          message: y
        }) : n.jsx(Q, {
          size: 24
        })
      })
    }, {
      id: "payroll-items",
      title: e("hr.payrollDefaultItems"),
      children: n.jsxs(V, {
        spacing: i ? 1.5 : 1,
        children: [n.jsx(M, {
          sx: {
            fontSize: 14,
            color: "text.secondary",
            wordBreak: "keep-all"
          },
          children: e("hr.payrollDefaultItemsNote")
        }), h.map(g => n.jsx(nt, {
          id: g,
          form: u,
          saving: S,
          isMobile: i,
          onRemove: k,
          readOnly: I
        }, g)), I ? null : n.jsx(L, {
          startIcon: n.jsx(he, {}),
          onClick: w,
          disabled: S,
          sx: {
            alignSelf: "flex-start"
          },
          children: e("hr.payrollAddItem")
        }), o && y && n.jsx(Z, {
          message: y
        })]
      })
    }];
  return n.jsx(pe, {
    readOnly: !a.canWrite,
    open: l.isOpen,
    onClose: l.close,
    title: e("hr.payrollSettings"),
    width: "640px",
    fullScreen: i,
    mobilePresentation: i ? "slide" : "dialog",
    draggable: !0,
    backdropClick: !1,
    titleIcons: {
      delete: {
        visible: !1
      },
      print: {
        visible: !1
      },
      share: {
        visible: !1
      }
    },
    tabs: {
      visible: !1
    },
    scrollPastLastSection: !1,
    actions: {
      visible: !0,
      showCancelButton: !0,
      right: n.jsx(L, {
        style: a.canWrite ? void 0 : {
          display: "none"
        },
        variant: "contained",
        onClick: () => {
          u.submit();
        },
        disabled: S || !o,
        sx: {
          minWidth: 80
        },
        children: S ? n.jsx(Q, {
          size: 20,
          color: "inherit"
        }) : e("hr.save")
      })
    },
    sections: C
  });
}
const ee = "/dashboard/hr/payroll",
  rt = 48;
function te({
  status: t
}) {
  const e = t === "confirmed";
  return n.jsx(x, {
    component: "span",
    sx: {
      px: 1,
      py: .25,
      borderRadius: 1,
      fontSize: 12,
      fontWeight: 600,
      whiteSpace: "nowrap",
      color: e ? "#166534" : "#b45309",
      bgcolor: e ? "#dcfce7" : "#fef3c7"
    },
    children: Je[t]
  });
}
function st() {
  const t = z(),
    e = ne("hr"),
    a = qe("hr.payroll"),
    i = ae(),
    u = Se(),
    l = Oe()?.seq ?? 0,
    [o, y] = j.useState([]),
    [h, I] = j.useState(!1),
    [S, k] = j.useState(""),
    w = Ze({
      onCreated: m => u(`${ee}/${m}`)
    }),
    C = Ae(),
    g = !!C.useValue("open");
  j.useEffect(() => {
    if (i) return C.setValue("active", !0), () => {
      C.setValue("active", !1), C.setValue("open", !1);
    };
  }, [i, C]), j.useEffect(() => {
    i && !g && k("");
  }, [i, g]);
  const s = j.useCallback(async (m = !1) => {
    if (!l) {
      y([]);
      return;
    }
    m || I(!0);
    try {
      y(await D.listRuns());
    } catch (_) {
      m || K(_ instanceof Error ? _.message : d("hr.errLoadPayrollRuns"));
    } finally {
      I(!1);
    }
  }, [l]);
  j.useEffect(() => {
    s();
  }, [s]), X(["hr_payroll_run"], () => {
    s(!0);
  });
  const c = j.useMemo(() => {
      const m = S.trim();
      return m ? o.filter(_ => Y(_).includes(m) || _.pay_month.includes(m)) : o;
    }, [o, S]),
    f = m => u(`${ee}/${m.seq}`),
    r = n.jsxs(V, {
      direction: "row",
      spacing: i ? 1 : 2,
      sx: i ? {
        "& > .MuiButton-root": {
          flex: "1 1 0",
          minWidth: 0,
          px: 1,
          whiteSpace: "nowrap"
        },
        "& > .MuiButton-contained": {
          border: "1px solid transparent"
        }
      } : void 0,
      children: [n.jsx(L, {
        style: e.canWrite ? void 0 : {
          display: "none"
        },
        variant: "contained",
        disableElevation: !0,
        startIcon: n.jsx(he, {}),
        onClick: () => w.openCreateDialog(Ke(o)),
        disabled: !l,
        children: t("hr.payrollCreateRun")
      }), n.jsx(L, {
        variant: "outlined",
        startIcon: n.jsx(Fe, {}),
        onClick: w.openSettingsDialog,
        disabled: !l,
        children: t("hr.payrollSettings")
      })]
    }),
    O = n.jsxs(n.Fragment, {
      children: [n.jsx(et, {
        controller: w
      }), n.jsx(at, {
        controller: w
      })]
    }),
    H = n.jsx(x, {
      sx: {
        py: 6,
        px: 2,
        textAlign: "center",
        color: "#9b9a97",
        fontSize: 14,
        wordBreak: "keep-all"
      },
      children: t(S ? "hr.payrollNoneFound" : "hr.payrollNone")
    }),
    F = $e(h);
  if (i) {
    const m = [n.jsxs(x, {
      children: [n.jsx(Ne, {
        open: g,
        value: S,
        onChange: k,
        placeholder: t("hr.payrollSearchMonth")
      }), n.jsx(x, {
        sx: {
          p: 1.5
        },
        children: r
      })]
    }, "head"), ...c.map(_ => n.jsxs(x, {
      role: "button",
      tabIndex: 0,
      onClick: () => f(_),
      sx: {
        p: 1.5,
        cursor: "pointer",
        "&:active": {
          bgcolor: "#f8f8f7"
        }
      },
      children: [n.jsxs(V, {
        direction: "row",
        alignItems: "center",
        spacing: .75,
        children: [n.jsx(M, {
          sx: {
            fontSize: 15,
            fontWeight: 600
          },
          children: Y(_)
        }), n.jsx(te, {
          status: _.status
        })]
      }), n.jsxs(V, {
        direction: "row",
        spacing: 1.25,
        sx: {
          mt: .5,
          fontSize: 14,
          color: "text.secondary",
          flexWrap: "wrap"
        },
        children: [n.jsx("span", {
          children: t("hr.peopleN", {
            count: _.employee_count
          })
        }), n.jsx("span", {
          children: t("hr.payrollNetWith", {
            amount: t("hr.wonAmount", {
              amount: $(_.total_net)
            })
          })
        }), _.pay_date ? n.jsx("span", {
          children: t("hr.payrollPaidOn", {
            date: _.pay_date
          })
        }) : null]
      })]
    }, _.seq))];
    return F && c.length === 0 && m.push(n.jsx(x, {
      children: H
    }, "empty")), F || m.push(n.jsx(Be, {}, "loading")), n.jsxs(n.Fragment, {
      children: [n.jsx(Te, {
        attachHead: !0,
        children: m
      }), O]
    });
  }
  const N = [{
      id: "pay_month",
      text: t("hr.payrollPayMonth"),
      width: 120,
      align: "center",
      render: m => _e(m.pay_month)
    }, {
      id: "title",
      text: t("hr.payrollTitle"),
      style: {
        fontSize: 15
      },
      render: m => Y(m)
    }, {
      id: "pay_date",
      text: t("hr.payrollPayDate"),
      width: 120,
      align: "center"
    }, {
      id: "employee_count",
      text: t("hr.attAdminHeadcount"),
      width: 80,
      align: "center",
      render: m => t("hr.peopleN", {
        count: m.employee_count
      })
    }, {
      id: "total_gross",
      text: t("hr.payrollGross"),
      width: 140,
      align: "right",
      render: m => $(m.total_gross)
    }, {
      id: "total_deduction",
      text: t("hr.payrollTotalDeduction"),
      width: 140,
      align: "right",
      render: m => $(m.total_deduction)
    }, {
      id: "total_net",
      text: t("hr.payrollNet"),
      width: 140,
      align: "right",
      render: m => n.jsx(x, {
        component: "span",
        sx: {
          fontWeight: 600
        },
        children: $(m.total_net)
      })
    }, {
      id: "status",
      text: t("hr.myAttColStatus"),
      width: 96,
      align: "center",
      render: m => n.jsx(te, {
        status: m.status
      })
    }],
    A = {
      left: r,
      showSearch: !0,
      searchValue: S,
      searchPlaceholder: t("hr.payrollSearchMonth"),
      onSearchChange: k,
      searchLoading: h,
      collapsible: !1,
      showCollapseButton: !1,
      showClearIcon: !1
    };
  return n.jsxs(n.Fragment, {
    children: [n.jsxs(x, {
      sx: {
        position: "relative",
        height: "100%",
        minHeight: 0,
        display: "flex",
        flexDirection: "column"
      },
      children: [n.jsx(Le, {
        header: A,
        tableProps: {
          ...a,
          scrollbars: Me,
          mobile: !0,
          variant: "notion",
          columns: N,
          data: c,
          totalCount: c.length,
          getRowId: m => String(m.seq),
          rowHeight: rt,
          onRowClick: f,
          loading: h,
          emptyMessage: H
        }
      }), l ? null : n.jsx(x, {
        sx: {
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: ve[500],
          bgcolor: "background.paper"
        },
        children: t("hr.payrollCreateOrgFirst")
      })]
    }), O]
  });
}
const xt = Object.freeze(Object.defineProperty({
  __proto__: null,
  PAYROLL_BASE_PATH: ee,
  PayrollStatusChip: te,
  default: st
}, Symbol.toStringTag, {
  value: "Module"
}));
export { Xe as A, yt as D, q as F, ee as P, Ge as a, te as b, ft as c, gt as d, _t as e, xt as f, W as n, D as p, Y as r, J as t, Ze as u, $ as w };