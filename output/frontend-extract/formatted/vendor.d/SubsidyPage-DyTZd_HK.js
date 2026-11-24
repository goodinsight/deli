import { r as y, j as s } from "./react-CjxcGQav.js";
import { bM as z, bT as v, e as xe, c8 as _e, ak as Se, dv as ue, fA as je, cL as ve, bO as ce, c2 as Ee, bx as Ce, bv as M, fL as me, D as pe, cz as he, c4 as U, L as J, cm as fe, al as $, B as g, bI as qe, iH as Ae, bQ as ee, d8 as te, aq as Pe, cU as Te, cn as Ve, cI as Ie, K as Oe, cO as we, F as Re, lr as ke, bH as Le, aN as Fe } from "../js.d/main-Cm9wS5wt.js";
import { O as De } from "./OptionToggleGroup-Cvm2wRyq.js";
import { E as We, a as Be } from "./EdgeTabs-Ccbggjn6.js";
import { u as Me } from "./mobileSearchOverlay-DYWcMOOb.js";
import { S as ye, a as ge, m as Ne, b as Z, p as ze, f as Y, c as Ue, d as $e } from "./subsidy-DNxQquF9.js";
import { e as Ye } from "./employeeApi-CdGzOYcj.js";
import { t as G, i as se, p as Ge } from "./formInput-KrHl7zSm.js";
import { d as He, e as Ke } from "./insurance-CLCwXZrk.js";
import { E as Qe } from "./EmployeeSelectDialog-Cdnxeoz9.js";
import { I as Je } from "./InlineErrorAlert-D9ICJPt7.js";
import { R as Xe } from "./RepeatRowCard-CW6Yl_Xr.js";
import { a as Ze } from "./types-CVhETUvu.js";
import { u as et, a as tt, b as st } from "./MobileCardListLayout-D5_p2Xer.js";
import { T as at } from "./tableScrollbars-C9bhlJjO.js";
import { u as nt } from "./useColumnWidths-DSAca5rC.js";
import { r as rt } from "./rowNoColumn-B_tyJFB_.js";
import { w as ot } from "./headerCount-4t1ZKu-L.js";
import { u as it } from "./useClientSort-CdwrAOWp.js";
import "./stylis-DdLD6a3t.js";
import "./i18nLabels-BNTLL7cu.js";
import "./utils-B6Q5_urv.js";
import "./profileApi-Btafs-pM.js";
const H = "/v1/hr/subsidies";
function K(t, e) {
  if (!t || t.ok === !1) throw new Error(t?.message || e);
  return t.data;
}
function A(t) {
  return typeof t == "string" ? t : t == null ? "" : String(t);
}
function T(t) {
  const e = Number(t ?? 0);
  return Number.isFinite(e) ? e : 0;
}
function E(t) {
  const e = A(t).slice(0, 10);
  return /^\d{4}-\d{2}-\d{2}$/.test(e) && e !== "0000-00-00" ? e : "";
}
function Q(t) {
  return Array.isArray(t) ? t : [];
}
function lt(t) {
  const e = t ?? {};
  return {
    round: T(e.round),
    due_date: E(e.due_date),
    requested_date: E(e.requested_date),
    paid_date: E(e.paid_date),
    amount: T(e.amount),
    memo: A(e.memo)
  };
}
function dt(t) {
  const e = t ?? {};
  return {
    seq: T(e.seq),
    name: A(e.name),
    status: A(e.status),
    resign_date: E(e.resign_date)
  };
}
function ut(t) {
  if (!t || typeof t != "object") return null;
  const e = t,
    m = E(e.date);
  return m ? {
    kind: e.kind === "obligation_end" ? "obligation_end" : "request",
    date: m,
    days_left: T(e.days_left)
  } : null;
}
function ct(t) {
  const e = t ?? {},
    m = A(e.status);
  return {
    seq: T(e.seq),
    name: A(e.name),
    agency: A(e.agency),
    status: ye.includes(m) ? m : "preparing",
    applied_date: E(e.applied_date),
    approved_date: E(e.approved_date),
    period_start: E(e.period_start),
    period_end: E(e.period_end),
    total_amount: T(e.total_amount),
    employee_seqs: Q(e.employee_seqs).map(T).filter(r => r > 0),
    employees: Q(e.employees).map(dt),
    payments: Q(e.payments).map(lt),
    paid_amount: T(e.paid_amount),
    obligation_end_date: E(e.obligation_end_date),
    obligation_note: A(e.obligation_note),
    memo: A(e.memo),
    next_action: ut(e.next_action),
    warnings: Q(e.warnings).map(A).filter(Boolean)
  };
}
const B = {
    list: async () => {
      const t = await z.http.get(H),
        e = K(t, v("hr.errLoadSubsidies"));
      return {
        today: E(e.today),
        items: (e.items ?? []).map(ct)
      };
    },
    create: async t => {
      const e = await z.http.post(H, t);
      return T(K(e, v("hr.errCreateSubsidy")).seq);
    },
    update: async (t, e) => {
      const m = await z.http.patch(`${H}/${t}`, e);
      K(m, v("hr.errUpdateSubsidy"));
    },
    remove: async t => {
      const e = await z.http.delete(`${H}/${t}`);
      K(e, v("hr.errDeleteSubsidy"));
    }
  },
  ae = {
    name: "",
    agency: "",
    status: "preparing",
    applied_date: "",
    approved_date: "",
    period_start: "",
    period_end: "",
    total_amount: "",
    employee_seqs: [],
    payments: [],
    obligation_end_date: "",
    obligation_note: "",
    memo: ""
  },
  mt = {
    target: null,
    saving: !1,
    error: "",
    employees: [],
    units: [],
    loadingEmployees: !1
  },
  pt = ["applied_date", "approved_date", "period_start", "period_end", "obligation_end_date"],
  ht = ["due_date", "requested_date", "paid_date"];
function ne(t) {
  return {
    name: t.name,
    agency: t.agency,
    status: t.status,
    applied_date: t.applied_date,
    approved_date: t.approved_date,
    period_start: t.period_start,
    period_end: t.period_end,
    total_amount: t.total_amount || "",
    employee_seqs: [...t.employee_seqs],
    payments: t.payments.map(e => ({
      ...e,
      round: e.round || "",
      amount: e.amount || ""
    })),
    obligation_end_date: t.obligation_end_date,
    obligation_note: t.obligation_note,
    memo: t.memo
  };
}
function ft({
  onSaved: t
}) {
  const e = y.useRef(t);
  e.current = t;
  const m = y.useRef(0),
    r = y.useRef(null),
    b = {
      form: xe({
        modalId: "hr-subsidy-edit-dialog"
      })
    },
    d = _e({
      stateId: "hr-subsidy-ui",
      initialValues: mt
    }),
    h = Se({
      formId: "hr-subsidy-form",
      initialValues: ae,
      onValidate: n => {
        if (!String(n.name ?? "").trim()) return d.setValue("error", v("hr.subsidyErrName")), !1;
        const l = n.payments ?? [];
        return pt.some(o => se(n[o])) || l.some(o => ht.some(p => se(o[p]))) ? (d.setValue("error", Ge()), !1) : n.period_start && n.period_end && n.period_end < n.period_start ? (d.setValue("error", v("hr.subsidyErrPeriod")), !1) : !0;
      },
      onSubmit: async n => {
        const l = d.getValue("target");
        d.setValues({
          saving: !0,
          error: ""
        });
        try {
          const o = {
            ...n,
            name: String(n.name ?? "").trim(),
            total_amount: G(n.total_amount),
            payments: (n.payments ?? []).map(p => ({
              ...p,
              round: G(p.round),
              amount: G(p.amount)
            }))
          };
          return l ? await B.update(l.seq, o) : await B.create(o), e.current(), b.form.close(), !0;
        } catch (o) {
          return d.setValues({
            saving: !1,
            error: o instanceof Error ? o.message : v("hr.subsidyErrSave")
          }), !1;
        }
      }
    }),
    _ = () => {
      h.setFormValues({
        ...ae,
        employee_seqs: [],
        payments: []
      }), d.setValues({
        target: null,
        saving: !1,
        error: ""
      }), b.form.open();
    },
    C = n => {
      const l = ne(n);
      h.setFormValues(l), r.current = l, d.setValues({
        target: n,
        saving: !1,
        error: ""
      }), b.form.open();
    };
  ue(["hr_subsidy"], n => {
    const l = d.getValue("target");
    if (!l || !b.form.isOpen) return;
    const o = je(n, "hr_subsidy", l.seq);
    if (!o && !n.resync) return;
    const p = () => {
      b.form.close(), ce(v("hr.subsidyDeletedByOther"));
    };
    if (o?.action === "delete") return p();
    B.list().then(j => {
      if (d.getValue("target")?.seq !== l.seq || !b.form.isOpen) return;
      const c = j.items.find(L => L.seq === l.seq);
      if (!c) return p();
      const R = h.getFormValues(),
        {
          patch: k,
          baseline: D
        } = ve(R, r.current ?? R, ne(c));
      r.current = D, Object.keys(k).length > 0 && h.setFormValues(k), d.setValue("target", c);
    }).catch(() => {});
  }, {
    enabled: b.form.isOpen
  });
  const V = async () => {
      const n = d.getValue("target");
      if (n) {
        d.setValue("saving", !0);
        try {
          await B.remove(n.seq), Ce({
            message: v("hr.deleted"),
            delay: 500
          }), e.current(), b.form.close();
        } catch (l) {
          d.setValues({
            saving: !1,
            error: l instanceof Error ? l.message : v("hr.errDeleteSubsidy")
          });
        }
      }
    },
    i = () => h.getFormValue("payments") ?? [],
    P = () => h.getFormValue("employee_seqs") ?? [];
  return {
    form: h,
    modals: b,
    ui: d,
    openCreate: _,
    openEdit: C,
    remove: V,
    addPayment: () => {
      const n = i();
      h.setFormValue("payments", [...n, {
        round: n.reduce((l, o) => Math.max(l, G(o.round)), 0) + 1,
        due_date: "",
        requested_date: "",
        paid_date: "",
        amount: "",
        memo: ""
      }]);
    },
    removePayment: n => {
      h.setFormValue("payments", i().filter((l, o) => o !== n));
    },
    loadCandidates: n => {
      const l = ++m.current,
        o = () => m.current === l;
      return d.setValue("loadingEmployees", !0), Ye.list({
        limit: 200
      }).then(p => {
        o() && d.setValue("employees", p.items);
      }).catch(() => {}).finally(() => {
        o() && d.setValue("loadingEmployees", !1);
      }), n && Ee.getTree(n).then(p => {
        o() && d.setValue("units", p.units ?? []);
      }).catch(() => {}), () => {
        o() && (m.current += 1);
      };
    },
    applyPicked: n => {
      const l = d.getValue("employees") ?? [],
        o = new Set(n.map(c => c.seq)),
        p = new Set(l.map(c => c.seq)),
        j = P().filter(c => o.has(c) || !p.has(c)),
        F = n.map(c => c.seq).filter(c => !j.includes(c));
      h.setFormValue("employee_seqs", [...j, ...F]);
    },
    removeEmployee: n => {
      h.setFormValue("employee_seqs", P().filter(l => l !== n));
    }
  };
}
function O(t) {
  return s.jsx(we, {
    form: t.form,
    name: t.name,
    label: t.label,
    disabled: t.disabled,
    size: t.size,
    fullWidth: !0,
    slotProps: {
      inputLabel: {
        shrink: !0
      }
    }
  });
}
function re(t) {
  const e = M();
  return s.jsx(fe, {
    form: t.form,
    name: t.name,
    label: t.label,
    min: 0,
    decimalLength: 0,
    suffix: e("hr.attSetWonSuffix"),
    textAlign: "left",
    disabled: t.disabled,
    size: t.size,
    fullWidth: !0
  });
}
function yt({
  controller: t
}) {
  const e = M(),
    m = me("hr"),
    {
      form: r,
      modals: b,
      ui: d
    } = t,
    h = b.form.isOpen,
    _ = pe(),
    C = d.useValue("target"),
    V = !m.canWrite,
    i = !!d.useValue("saving"),
    P = String(d.useValue("error") ?? ""),
    S = r.useFormValue("employee_seqs") ?? [],
    w = r.useFormValue("payments") ?? [],
    q = d.useValue("employees") ?? [],
    W = d.useValue("units") ?? [],
    I = !!d.useValue("loadingEmployees"),
    n = he()?.seq ?? 0,
    [l, o] = y.useState(!1),
    [p, j] = y.useState(0);
  y.useEffect(() => {
    if (h) return t.loadCandidates(n);
  }, [h, n]);
  const F = y.useMemo(() => {
      const u = new Map();
      for (const a of W) u.set(a.seq, a.name);
      return q.map(a => ({
        seq: a.seq,
        account_seq: a.account_seq,
        name: a.status !== "active" ? `${a.name}(${Ze[a.status]})` : a.name,
        department: u.get(a.unit_seq) ?? "",
        role_name: a.position
      }));
    }, [q, W]),
    c = y.useMemo(() => {
      const u = new Map();
      for (const a of C?.employees ?? []) u.set(a.seq, a);
      for (const a of q) u.set(a.seq, a);
      return S.map(a => u.get(a)).filter(a => !!a);
    }, [S, q, C]),
    R = i || I,
    k = () => {
      R || (j(u => u + 1), o(!0));
    },
    D = {
      display: "grid",
      gridTemplateColumns: _ ? "1fr" : "repeat(2, minmax(0, 1fr))",
      gap: 2
    },
    L = {
      ...D,
      gridTemplateColumns: _ ? "1fr" : "repeat(4, minmax(0, 1fr))"
    },
    N = s.jsxs(U, {
      spacing: 1.5,
      children: [w.length === 0 && s.jsx(J, {
        sx: {
          fontSize: 14,
          color: "text.secondary"
        },
        children: e("hr.subsidyPaymentsNote")
      }), w.map((u, a) => {
        const x = s.jsxs(s.Fragment, {
          children: [s.jsx(fe, {
            form: r,
            name: `payments.${a}.round`,
            label: e("hr.subsidyRound"),
            size: "small",
            min: 0,
            decimalLength: 0,
            thousandSeparator: !1,
            textAlign: "left",
            disabled: i
          }), s.jsx(O, {
            form: r,
            name: `payments.${a}.due_date`,
            size: "small",
            label: e("hr.subsidyDueDate"),
            disabled: i
          }), s.jsx(O, {
            form: r,
            name: `payments.${a}.requested_date`,
            size: "small",
            label: e("hr.subsidyAppliedDate"),
            disabled: i
          }), s.jsx(O, {
            form: r,
            name: `payments.${a}.paid_date`,
            size: "small",
            label: e("hr.payrollPayDate"),
            disabled: i
          }), s.jsx(re, {
            form: r,
            name: `payments.${a}.amount`,
            size: "small",
            label: e("hr.recordAmount"),
            disabled: i
          }), s.jsx($, {
            form: r,
            name: `payments.${a}.memo`,
            label: e("hr.note"),
            size: "small",
            disabled: i,
            slotProps: {
              htmlInput: {
                maxLength: 200
              }
            }
          })]
        });
        return _ ? s.jsx(Xe, {
          onRemove: V ? void 0 : () => t.removePayment(a),
          removeAriaLabel: e("hr.subsidyDeleteRound"),
          disabled: i,
          sx: {
            p: 1.5,
            borderRadius: 1
          },
          children: s.jsx(g, {
            sx: {
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 1,
              alignItems: "center"
            },
            children: x
          })
        }, a) : s.jsxs(g, {
          sx: {
            display: "grid",
            gridTemplateColumns: "64px repeat(3, minmax(168px, 1fr)) 140px minmax(0, 1fr) 40px",
            gap: 1,
            alignItems: "center"
          },
          children: [x, V ? s.jsx("span", {}) : s.jsx(qe, {
            "aria-label": e("hr.subsidyDeleteRound"),
            onClick: () => t.removePayment(a),
            disabled: i,
            sx: {
              justifySelf: "center"
            },
            children: s.jsx(Ae, {
              fontSize: "small"
            })
          })]
        }, a);
      }), V ? null : s.jsx(ee, {
        startIcon: s.jsx(te, {}),
        onClick: t.addPayment,
        disabled: i,
        sx: {
          alignSelf: "flex-start"
        },
        children: e("hr.subsidyAddRound")
      })]
    }),
    X = [{
      id: "subsidy-basic",
      title: e("hr.employeeBasicInfo"),
      children: s.jsxs(U, {
        spacing: 2,
        children: [s.jsx($, {
          form: r,
          name: "name",
          label: e("hr.subsidyName"),
          placeholder: e("hr.subsidyNamePlaceholder"),
          required: !0,
          disabled: i,
          slotProps: {
            htmlInput: {
              maxLength: 200
            }
          },
          fullWidth: !0
        }), s.jsxs(g, {
          sx: {
            ...D,
            gridTemplateColumns: _ ? "1fr" : "repeat(3, minmax(0, 1fr))"
          },
          children: [s.jsx($, {
            form: r,
            name: "agency",
            label: e("hr.subsidyAgency"),
            placeholder: e("hr.subsidyAgencyPlaceholder"),
            disabled: i,
            slotProps: {
              htmlInput: {
                maxLength: 200
              }
            },
            fullWidth: !0
          }), s.jsx(Pe, {
            form: r,
            name: "status",
            label: e("hr.myAttColStatus"),
            options: ye.map(u => ({
              value: u,
              label: ge[u]
            })),
            showEmptyOption: !1,
            disabled: i,
            fullWidth: !0
          }), s.jsx(re, {
            form: r,
            name: "total_amount",
            label: e("hr.subsidyApprovedTotal"),
            disabled: i
          })]
        }), s.jsxs(g, {
          sx: L,
          children: [s.jsx(O, {
            form: r,
            name: "applied_date",
            label: e("hr.subsidyAppliedDate"),
            disabled: i
          }), s.jsx(O, {
            form: r,
            name: "approved_date",
            label: e("hr.subsidyApprovedDate"),
            disabled: i
          }), s.jsx(O, {
            form: r,
            name: "period_start",
            label: e("hr.subsidyPeriodStart"),
            disabled: i
          }), s.jsx(O, {
            form: r,
            name: "period_end",
            label: e("hr.subsidyPeriodEnd"),
            disabled: i
          })]
        })]
      })
    }, {
      id: "subsidy-employees",
      title: e("hr.certificateTargetEmployee"),
      children: s.jsx(Te, {
        placeholder: e("hr.subsidyPickEmployees"),
        value: c.map(u => u.resign_date ? e("hr.subsidyResignedWith", {
          name: u.name,
          date: u.resign_date
        }) : u.name),
        allowDuplicates: !0,
        draggable: !1,
        onDelete: (u, a, x) => {
          const f = c[x];
          f && t.removeEmployee(f.seq);
        },
        onClick: u => {
          u.target.closest(".MuiChip-root") || k();
        },
        slotProps: {
          htmlInput: {
            readOnly: !0,
            "aria-label": e("hr.certificateTargetEmployee")
          }
        },
        sx: {
          cursor: "pointer",
          "& .MuiInputBase-input": {
            cursor: "pointer"
          }
        },
        disabled: i,
        fullWidth: !0
      })
    }, {
      id: "subsidy-payments",
      title: e("hr.subsidyPayments"),
      children: N
    }, {
      id: "subsidy-obligation",
      title: e("hr.subsidyObligation"),
      children: s.jsxs(U, {
        spacing: 2,
        children: [s.jsxs(g, {
          sx: L,
          children: [s.jsx(O, {
            form: r,
            name: "obligation_end_date",
            label: e("hr.subsidyObligationEnd"),
            disabled: i
          }), s.jsx($, {
            form: r,
            name: "obligation_note",
            label: e("hr.subsidyObligationDetail"),
            placeholder: e("hr.subsidyObligationPlaceholder"),
            disabled: i,
            slotProps: {
              htmlInput: {
                maxLength: 500
              }
            },
            sx: {
              gridColumn: _ ? void 0 : "span 3"
            },
            fullWidth: !0
          })]
        }), s.jsx(J, {
          sx: {
            fontSize: 14,
            color: "text.secondary"
          },
          children: e("hr.subsidyObligationNote")
        })]
      })
    }, {
      id: "subsidy-memo",
      title: e("hr.note"),
      children: s.jsxs(U, {
        spacing: 2,
        children: [s.jsx(Ve, {
          form: r,
          name: "memo",
          minRows: 2,
          disabled: i,
          slotProps: {
            htmlInput: {
              maxLength: 1e3,
              "aria-label": e("hr.note")
            }
          },
          fullWidth: !0
        }), P && s.jsx(Je, {
          message: P
        })]
      })
    }];
  return s.jsxs(s.Fragment, {
    children: [s.jsx(Ie, {
      readOnly: !m.canWrite,
      open: b.form.isOpen,
      onClose: b.form.close,
      title: e(C ? "hr.subsidyEdit" : "hr.subsidyCreate"),
      width: "960px",
      fullScreen: _,
      mobilePresentation: _ ? "slide" : "dialog",
      draggable: !0,
      backdropClick: !1,
      titleIcons: {
        delete: {
          visible: m.canWrite && !!C,
          confirmConfig: {
            title: e("hr.subsidyDelete"),
            message: e("hr.subsidyDeleteConfirm"),
            confirmText: e("hr.delete"),
            cancelText: e("hr.cancel")
          }
        },
        print: {
          visible: !1
        },
        share: {
          visible: !1
        }
      },
      onDelete: t.remove,
      tabs: {
        visible: !1
      },
      scrollPastLastSection: !1,
      actions: {
        visible: !0,
        showCancelButton: !0,
        right: s.jsx(ee, {
          style: m.canWrite ? void 0 : {
            display: "none"
          },
          variant: "contained",
          onClick: () => {
            r.submit();
          },
          disabled: i,
          sx: {
            minWidth: 80
          },
          children: i ? s.jsx(Oe, {
            size: 20,
            color: "inherit"
          }) : e("hr.save")
        })
      },
      sections: X
    }), s.jsx(Qe, {
      open: l,
      title: e("hr.subsidyPickTitle"),
      candidates: F,
      requireAccount: !1,
      initialSeqs: S,
      onClose: () => o(!1),
      onApply: t.applyPicked
    }, p)]
  });
}
const gt = 48,
  bt = "#9b9a97",
  be = "#dc2626";
function oe({
  status: t
}) {
  const e = Ue[t];
  return s.jsx(g, {
    component: "span",
    sx: {
      px: 1,
      py: .25,
      borderRadius: 1,
      fontSize: 12,
      fontWeight: 600,
      color: e.color,
      bgcolor: e.bg,
      whiteSpace: "nowrap"
    },
    children: ge[t]
  });
}
function ie({
  names: t
}) {
  const e = M();
  return t.length === 0 ? null : s.jsx(Le, {
    title: e("hr.subsidyViolationRisk", {
      names: t.join(", ")
    }),
    children: s.jsx(Fe, {
      sx: {
        fontSize: 18,
        color: be,
        flexShrink: 0
      }
    })
  });
}
function le({
  row: t
}) {
  const e = t.next_action;
  return e ? s.jsxs(g, {
    component: "span",
    sx: {
      whiteSpace: "nowrap"
    },
    children: [s.jsxs(g, {
      component: "span",
      sx: {
        color: "text.secondary"
      },
      children: [$e[e.kind], " "]
    }), s.jsx(g, {
      component: "span",
      sx: {
        color: Ke(e.days_left),
        fontWeight: 600
      },
      children: He(e.days_left)
    })]
  }) : null;
}
function de({
  searching: t
}) {
  const e = M(),
    m = e(t ? "hr.subsidyNoneFound" : "hr.subsidyNone");
  return s.jsx(g, {
    sx: {
      py: 6,
      px: 2,
      textAlign: "center",
      color: bt,
      fontSize: 14,
      wordBreak: "keep-all"
    },
    children: m
  });
}
function Nt() {
  const t = M(),
    e = me("hr"),
    m = nt("hr.subsidy"),
    r = pe(),
    d = he()?.seq ?? 0,
    [h, _] = y.useState([]),
    [C, V] = y.useState(!1),
    [i, P] = y.useState(""),
    [S, w] = y.useState(""),
    [q, W] = y.useState([]),
    I = Me(),
    n = !!I.useValue("open");
  y.useEffect(() => {
    if (r) return I.setValue("active", !0), () => {
      I.setValue("active", !1), I.setValue("open", !1);
    };
  }, [r, I]), y.useEffect(() => {
    r && !n && P("");
  }, [r, n]);
  const l = y.useCallback(async (a = !1) => {
    if (!d) {
      _([]);
      return;
    }
    a || V(!0);
    try {
      const x = await B.list();
      _(x.items);
    } catch (x) {
      a || ce(x instanceof Error ? x.message : v("hr.errLoadSubsidies"));
    } finally {
      V(!1);
    }
  }, [d]);
  y.useEffect(() => {
    l();
  }, [l]), ue(["hr_subsidy", "employee"], () => {
    l(!0);
  });
  const o = i.trim(),
    p = y.useMemo(() => h.filter(a => Ne(a.status, S) && (q.length === 0 || q.includes(a.agency)) && (!o || a.name.includes(o))), [h, S, q, o]),
    {
      rows: j,
      tableSort: F
    } = it(p, {
      status: a => a.status,
      employees: a => a.employees.length,
      period: a => a.period_start,
      next_action: a => a.next_action?.days_left ?? null
    }),
    c = ft({
      onSaved: () => {
        l();
      }
    }),
    R = c.openCreate,
    k = c.openEdit,
    D = s.jsx(g, {
      sx: {
        "& .MuiToggleButtonGroup-root": {
          height: 40,
          flexWrap: "nowrap"
        }
      },
      children: s.jsx(De, {
        size: "medium",
        value: S,
        onChange: a => w(a ?? ""),
        options: Z,
        sx: {
          "& .MuiToggleButtonGroup-grouped": {
            minWidth: 64,
            px: 1.5
          }
        }
      })
    }),
    L = s.jsx(yt, {
      controller: c
    }),
    N = et(C);
  if (r) {
    const a = f => s.jsxs(g, {
        role: "button",
        tabIndex: 0,
        onClick: () => k(f),
        sx: {
          p: 1.5,
          cursor: "pointer",
          userSelect: "none",
          "&:active": {
            bgcolor: "#f8f8f7"
          }
        },
        children: [s.jsxs(g, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: .75,
            minWidth: 0
          },
          children: [s.jsx(oe, {
            status: f.status
          }), s.jsx(J, {
            sx: {
              fontSize: 15,
              fontWeight: 600,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: f.name
          }), s.jsx(ie, {
            names: f.warnings
          })]
        }), s.jsxs(g, {
          sx: {
            display: "flex",
            gap: 1.25,
            fontSize: 14,
            color: "text.secondary",
            mt: .5,
            flexWrap: "wrap"
          },
          children: [f.agency ? s.jsx("span", {
            children: f.agency
          }) : null, s.jsx("span", {
            children: t("hr.subsidyTargetsN", {
              count: f.employees.length
            })
          }), f.total_amount ? s.jsx("span", {
            children: t("hr.subsidyApprovedWith", {
              amount: Y(f.total_amount)
            })
          }) : null, f.paid_amount ? s.jsx("span", {
            children: t("hr.subsidyReceivedWith", {
              amount: Y(f.paid_amount)
            })
          }) : null, s.jsx(le, {
            row: f
          })]
        }), f.warnings.length > 0 && s.jsx(J, {
          sx: {
            fontSize: 14,
            color: be,
            mt: .5
          },
          children: t("hr.subsidyRiskWith", {
            list: f.warnings.join(", ")
          })
        })]
      }, f.seq),
      x = j.map(a);
    return N && p.length === 0 && x.push(s.jsx(de, {
      searching: !!o
    }, "empty")), N || x.push(s.jsx(tt, {}, "loading")), s.jsxs(s.Fragment, {
      children: [s.jsx(We, {
        value: S,
        options: Z,
        onChange: w,
        ariaLabel: t("hr.subsidyView"),
        above: s.jsx(Be, {
          open: n,
          value: i,
          onChange: P,
          placeholder: t("hr.subsidySearch")
        })
      }), s.jsx(st, {
        attachHead: !0,
        children: x
      }), s.jsx(Re, {
        style: e.canWrite ? void 0 : {
          display: "none"
        },
        color: "primary",
        "aria-label": t("hr.subsidyRegister"),
        onClick: R,
        sx: {
          position: "fixed",
          right: 24,
          bottom: "calc(24px + var(--taskbox-fab-lift, 0px))",
          zIndex: 40
        },
        children: s.jsx(te, {})
      }), L]
    });
  }
  const X = [rt(), {
      id: "name",
      text: ot(t("hr.subsidyName"), j.length),
      sortable: !0,
      style: {
        fontSize: 15
      },
      render: a => s.jsxs(g, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: .75,
          minWidth: 0
        },
        children: [s.jsx(g, {
          component: "span",
          sx: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          },
          children: a.name
        }), s.jsx(ie, {
          names: a.warnings
        })]
      })
    }, {
      id: "agency",
      text: t("hr.subsidyAgency"),
      width: 230,
      align: "center",
      sortable: !0,
      filterOptions: [...new Set(h.map(a => a.agency).filter(Boolean))].map(a => ({
        value: a,
        label: a
      })),
      filterValues: q,
      onFilterChange: W,
      render: a => a.agency
    }, {
      id: "status",
      text: t("hr.myAttColStatus"),
      width: 88,
      align: "center",
      sortable: !0,
      filterOptions: Z.filter(a => a.value !== ""),
      filterValues: S ? [S] : [],
      filterMultiple: !1,
      onFilterChange: a => w(a[0] ?? ""),
      render: a => s.jsx(oe, {
        status: a.status
      })
    }, {
      id: "employees",
      text: t("hr.certificateTarget"),
      width: 72,
      align: "center",
      sortable: !0,
      render: a => t("hr.peopleN", {
        count: a.employees.length
      })
    }, {
      id: "period",
      sortable: !0,
      text: t("hr.subsidyPeriod"),
      width: 184,
      align: "center",
      render: a => ze(a.period_start, a.period_end)
    }, {
      id: "total_amount",
      sortable: !0,
      text: t("hr.subsidyApproved"),
      width: 108,
      align: "right",
      render: a => Y(a.total_amount)
    }, {
      id: "paid_amount",
      sortable: !0,
      text: t("hr.subsidyReceived"),
      width: 108,
      align: "right",
      render: a => Y(a.paid_amount)
    }, {
      id: "next_action",
      sortable: !0,
      text: t("hr.subsidyNext"),
      width: 124,
      align: "center",
      render: a => s.jsx(le, {
        row: a
      })
    }],
    u = {
      left: s.jsx(ee, {
        style: e.canWrite ? void 0 : {
          display: "none"
        },
        variant: "contained",
        disableElevation: !0,
        startIcon: s.jsx(te, {}),
        onClick: R,
        children: t("hr.subsidyRegister")
      }),
      filter: {
        stateId: "subsidy-filters",
        showChips: !1,
        groups: [{
          filters: [{
            type: "custom",
            name: "subsidy-status",
            node: D
          }]
        }]
      },
      showSearch: !0,
      searchValue: i,
      searchPlaceholder: t("hr.subsidySearch"),
      onSearchChange: P,
      searchLoading: C,
      collapsible: !1,
      showCollapseButton: !1,
      showClearIcon: !1
    };
  return s.jsxs(s.Fragment, {
    children: [s.jsx(g, {
      sx: {
        position: "relative",
        height: "100%",
        minHeight: 0,
        display: "flex",
        flexDirection: "column"
      },
      children: s.jsx(ke, {
        header: u,
        tableProps: {
          ...m,
          scrollbars: at,
          mobile: !0,
          variant: "notion",
          columns: X,
          data: j,
          totalCount: j.length,
          ...F,
          getRowId: a => String(a.seq),
          rowHeight: gt,
          onRowClick: a => k(a),
          loading: C,
          emptyMessage: s.jsx(de, {
            searching: !!o
          })
        }
      })
    }), L]
  });
}
export { Nt as default };