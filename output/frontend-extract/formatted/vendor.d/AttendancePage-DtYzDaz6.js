import { r as v, j as e, l as et } from "./react-CjxcGQav.js";
import { bM as $, fv as G, bT as c, eo as C, np as F, en as _e, no as Fe, nq as Se, e as U, c8 as oe, ak as ie, dv as le, fA as tt, cL as nt, bO as M, bx as B, z as at, bv as N, fL as de, D as w, cz as ce, c4 as Q, B as p, aB as Me, cm as Be, cO as se, cn as st, cI as J, bQ as A, K as W, al as rt, L as I, bI as Ce, ci as ot, cl as it, F as lt, d8 as Ee, lr as Ae } from "../js.d/main-Cm9wS5wt.js";
import { O as dt } from "./OptionToggleGroup-Cvm2wRyq.js";
import { a as ke, E as ct } from "./EdgeTabs-Ccbggjn6.js";
import { u as mt } from "./mobileSearchOverlay-DYWcMOOb.js";
import { A as We, a as me, w as ut, b as we, c as Pe, d as Ve, e as K, f as ht } from "./attendance-CHHNhWTj.js";
import { i as Y, p as pt } from "./formInput-KrHl7zSm.js";
import { E as ze, l as $e } from "./hrCandidates-HYZ1yzF2.js";
import { a as O } from "./attendanceMgmtApi-CC4DR0XR.js";
import { t as re, P as ft, l as De } from "./attendanceMgmt-B_e3bPBn.js";
import { t as Ge, E as Ke, e as ne } from "./EmployeePickField-CDJRGgup.js";
import { T as gt } from "./ToneChip-BFljqlNi.js";
import { I as X } from "./InlineErrorAlert-D9ICJPt7.js";
import { C as xt } from "./AttendanceParts-mHb1cK0h.js";
import { L as yt } from "./LeaveDatesInput-D2CFTlN1.js";
import { u as vt, b as bt, a as jt } from "./MobileCardListLayout-D5_p2Xer.js";
import { T as Le } from "./tableScrollbars-C9bhlJjO.js";
const H = "/v1/hr/attendance";
function _t(a) {
  const t = a ?? {},
    n = _e(t.kind);
  return {
    seq: C(t.seq),
    employee_seq: C(t.employee_seq),
    kind: We.includes(n) ? n : "annual",
    start_date: F(t.start_date),
    end_date: F(t.end_date),
    days: C(t.days),
    memo: _e(t.memo),
    doc_seq: C(t.doc_seq),
    employee: Fe(t.employee)
  };
}
function St(a) {
  const t = a ?? {};
  return {
    employee: Fe(t.employee),
    service_years: C(t.service_years),
    period_start: F(t.period_start),
    period_end: F(t.period_end),
    granted: Se(t.granted),
    adjust: C(t.adjust),
    carry: C(t.carry),
    half_count: C(t.half_count),
    quarter_count: C(t.quarter_count),
    expire: C(t.expire),
    used: C(t.used),
    remaining: Se(t.remaining)
  };
}
const T = {
    list: async a => {
      const t = await $.http.get(`${H}?year=${a}`),
        n = G(t, c("hr.errLoadAttendanceRecords"));
      return {
        today: F(n.today),
        year: C(n.year) || a,
        summary: (n.summary ?? []).map(St),
        items: (n.items ?? []).map(_t)
      };
    },
    create: async a => {
      const t = await $.http.post(H, a);
      return C(G(t, c("hr.errCreateRecord")).seq);
    },
    update: async (a, t) => {
      const n = await $.http.patch(`${H}/${a}`, t);
      G(n, c("hr.errUpdateRecord"));
    },
    remove: async a => {
      const t = await $.http.delete(`${H}/${a}`);
      G(t, c("hr.errDeleteRecord"));
    }
  },
  Ne = {
    employee_seq: 0,
    kind: "annual",
    start_date: "",
    end_date: "",
    days: "",
    memo: ""
  },
  Ct = {
    target: null,
    saving: !1,
    error: "",
    ...ze
  };
function Et(a) {
  return a in me;
}
function Ie(a) {
  return {
    employee_seq: a.employee_seq,
    kind: a.kind,
    start_date: a.start_date,
    end_date: a.end_date,
    days: a.days || "",
    memo: a.memo
  };
}
function At({
  onSaved: a
}) {
  const t = v.useRef(a);
  t.current = a;
  const n = v.useRef(null),
    i = {
      form: U({
        modalId: "hr-attendance-edit-dialog"
      })
    },
    r = oe({
      stateId: "hr-attendance-ui",
      initialValues: Ct
    }),
    h = ie({
      formId: "hr-attendance-form",
      initialValues: Ne,
      onValidate: o => {
        if (!Number(o.employee_seq)) return r.setValue("error", c("hr.attSetErrPickEmployee")), !1;
        if (!o.start_date) return r.setValue("error", c("hr.attendanceErrStart")), !1;
        if (Y(o.start_date) || Y(o.end_date)) return r.setValue("error", pt()), !1;
        if (Et(o.kind)) return !0;
        if (o.end_date && o.end_date < o.start_date) return r.setValue("error", c("hr.contractErrEnd")), !1;
        const d = Number(o.days) || 0;
        return d <= 0 || !Number.isInteger(d * 2) ? (r.setValue("error", c("hr.attendanceErrDays")), !1) : !0;
      },
      onSubmit: async o => {
        const d = r.getValue("target");
        r.setValues({
          saving: !0,
          error: ""
        });
        try {
          const y = {
            kind: o.kind,
            start_date: o.start_date,
            end_date: o.end_date || o.start_date,
            days: Number(o.days) || 0,
            memo: o.memo
          };
          return d ? await T.update(d.seq, y) : await T.create({
            ...y,
            employee_seq: Number(o.employee_seq) || 0
          }), t.current(), i.form.close(), !0;
        } catch (y) {
          return r.setValues({
            saving: !1,
            error: y instanceof Error ? y.message : c("hr.errSaveRecord")
          }), !1;
        }
      }
    }),
    g = (o = 0) => {
      h.setFormValues({
        ...Ne,
        employee_seq: o
      }), r.setValues({
        target: null,
        saving: !1,
        error: ""
      }), i.form.open();
    },
    b = o => {
      const d = Ie(o);
      h.setFormValues(d), n.current = d, r.setValues({
        target: o,
        saving: !1,
        error: ""
      }), i.form.open();
    },
    j = o => $e({
      orgSeq: o,
      onLoaded: d => r.setValues(d)
    }),
    l = o => h.setFormValue("employee_seq", o),
    u = () => {
      const o = h.getFormValue("kind"),
        d = String(h.getFormValue("start_date") ?? ""),
        y = String(h.getFormValue("end_date") ?? "");
      if (Y(d) || Y(y)) return;
      const S = me[o];
      if (S !== void 0) {
        h.setFormValues({
          end_date: d,
          days: S || ""
        });
        return;
      }
      const m = y && y >= d ? y : d;
      h.setFormValues({
        end_date: m,
        days: ut(d, m) || ""
      });
    },
    _ = async () => {
      const o = r.getValue("target");
      if (o) {
        r.setValue("saving", !0);
        try {
          await T.remove(o.seq), B({
            message: c("hr.deleted"),
            delay: 500
          }), t.current(), i.form.close();
        } catch (d) {
          r.setValues({
            saving: !1,
            error: d instanceof Error ? d.message : c("hr.errDeleteRecord")
          });
        }
      }
    };
  return le(["hr_attendance"], o => {
    const d = r.getValue("target");
    if (!d || !i.form.isOpen) return;
    const y = tt(o, "hr_attendance", d.seq);
    if (!y && !o.resync) return;
    const S = () => {
      i.form.close(), M(c("hr.attendanceDeletedByOther"));
    };
    if (y?.action === "delete") return S();
    T.list(Number(d.start_date.slice(0, 4)) || new Date().getFullYear()).then(m => {
      if (r.getValue("target")?.seq !== d.seq || !i.form.isOpen) return;
      const k = m.items.find(D => D.seq === d.seq);
      if (!k) return;
      const P = h.getFormValues(),
        {
          patch: V,
          baseline: L
        } = nt(P, n.current ?? P, Ie(k));
      n.current = L, Object.keys(V).length > 0 && h.setFormValues(V), r.setValue("target", k);
    }).catch(() => {});
  }, {
    enabled: i.form.isOpen
  }), {
    form: h,
    modals: i,
    ui: r,
    openCreate: g,
    openEdit: b,
    loadCandidates: j,
    pickEmployee: l,
    syncDays: u,
    remove: _
  };
}
function kt({
  onSaved: a
}) {
  const t = v.useRef(a);
  t.current = a;
  const n = U({
      modalId: "hr-leave-adjust-dialog"
    }),
    i = oe({
      stateId: "hr-leave-adjust-ui",
      initialValues: {
        saving: !1,
        error: "",
        ...ze
      }
    }),
    r = ie({
      formId: "hr-leave-adjust-form",
      initialValues: {
        employee_seq: 0,
        kind: "adjust",
        days: "",
        effective_date: "",
        memo: ""
      },
      onValidate: l => {
        const u = o => (i.setValue("error", o), !1);
        if (!Number(l.employee_seq)) return u(c("hr.attSetErrPickEmployee"));
        const _ = Number(l.days);
        return !Number.isFinite(_) || _ === 0 || !Number.isInteger(_ * 2) ? u(c("hr.leaveErrDays")) : l.kind !== "adjust" && _ < 0 ? u(c("hr.leaveErrPositive")) : l.memo.trim() ? !0 : u(c("hr.myAttErrReason"));
      },
      onSubmit: async l => {
        i.setValues({
          saving: !0,
          error: ""
        });
        try {
          return await O.createAdjust({
            employee_seq: Number(l.employee_seq),
            kind: l.kind,
            days: Number(l.days),
            effective_date: l.effective_date || re(),
            memo: l.memo.trim()
          }), B({
            message: c("hr.leaveAdjusted"),
            delay: 700
          }), n.close(), i.setValue("saving", !1), t.current(), !0;
        } catch (u) {
          return i.setValues({
            saving: !1,
            error: u instanceof Error ? u.message : c("hr.errAdjustLeave")
          }), !1;
        }
      }
    });
  return {
    modal: n,
    ui: i,
    form: r,
    open: (l = 0) => {
      r.setFormValues({
        employee_seq: l,
        kind: "adjust",
        days: "",
        effective_date: re(),
        memo: ""
      }), i.setValues({
        saving: !1,
        error: ""
      }), n.open();
    },
    loadCandidates: l => $e({
      orgSeq: l,
      onLoaded: u => i.setValues(u)
    }),
    pickEmployee: l => r.setFormValue("employee_seq", l),
    closePeriod: async () => {
      if (await at({
        title: c("hr.leaveCloseTitle"),
        message: c("hr.leaveCloseMessage"),
        confirmText: c("hr.attAdminClose"),
        cancelText: c("hr.cancel")
      })) try {
        const u = await O.closePeriod();
        B({
          message: c("hr.leaveCloseResult", {
            carried: u.carried,
            expired: u.expired,
            skipped: u.skipped
          }),
          delay: 1500
        }), t.current();
      } catch (u) {
        M(u instanceof Error ? u.message : c("hr.errCloseLeavePeriod"));
      }
    }
  };
}
function Pt() {
  const [a, t] = v.useState([]),
    [n, i] = v.useState(!1),
    [r, h] = v.useState(!1),
    [g, b] = v.useState(!1),
    j = U({
      modalId: "hr-leave-promotion-dialog"
    }),
    l = async (m = !1) => {
      m || h(!0);
      try {
        const f = await O.leavePromotions();
        t(f.items), i(f.enabled);
      } catch (f) {
        m || M(f instanceof Error ? f.message : c("hr.errLoadLeavePromotions"));
      } finally {
        h(!1);
      }
    },
    u = () => {
      j.open(), l();
    };
  le(["hr_leave_promotion", "hr_attendance"], () => {
    l(!0);
  }, {
    enabled: j.isOpen
  });
  const _ = async () => {
      b(!0);
      try {
        const m = await O.runLeavePromotion();
        B({
          message: m.noticed + m.reminded ? c("hr.attAdminPromoRunResult", {
            noticed: m.noticed,
            reminded: m.reminded
          }) : c("hr.attAdminPromoNothing"),
          delay: 1200
        }), await l();
      } catch (m) {
        M(m instanceof Error ? m.message : c("hr.errRunLeavePromotion"));
      } finally {
        b(!1);
      }
    },
    o = U({
      modalId: "hr-leave-designate-dialog"
    }),
    d = oe({
      stateId: "hr-leave-designate-ui",
      initialValues: {
        saving: !1,
        error: "",
        seq: 0,
        name: "",
        period_end: ""
      }
    }),
    y = ie({
      formId: "hr-leave-designate-form",
      initialValues: {
        dates: [""]
      },
      onValidate: m => {
        const f = m.dates.filter(Boolean);
        return f.length ? f.some(k => k <= re()) ? (d.setValue("error", c("hr.attAdminErrDesignateFuture")), !1) : !0 : (d.setValue("error", c("hr.attAdminErrDesignateNone")), !1);
      },
      onSubmit: async m => {
        d.setValues({
          saving: !0,
          error: ""
        });
        try {
          return await O.designateLeave(Number(d.getValues().seq), m.dates.filter(Boolean)), B({
            message: c("hr.attAdminDesignated"),
            delay: 1200
          }), o.close(), d.setValue("saving", !1), l(), !0;
        } catch (f) {
          return d.setValues({
            saving: !1,
            error: f instanceof Error ? f.message : c("hr.errDesignateDates")
          }), !1;
        }
      }
    });
  return {
    rows: a,
    enabled: n,
    loading: r,
    running: g,
    listModal: j,
    open: u,
    reload: l,
    run: _,
    designateModal: o,
    ui: d,
    form: y,
    openDesignate: m => {
      if (!m.promotion) return;
      const f = m.promotion.designate_dates.length ? m.promotion.designate_dates : m.promotion.plan_dates;
      y.setFormValues({
        dates: f.length ? [...f] : [""]
      }), d.setValues({
        saving: !1,
        error: "",
        seq: m.promotion.seq,
        name: m.employee.name,
        period_end: m.period_end
      }), o.open();
    }
  };
}
function Vt({
  controller: a
}) {
  const t = N(),
    n = de("hr"),
    {
      form: i,
      modals: r,
      ui: h
    } = a,
    g = r.form.isOpen,
    b = w(),
    j = ce()?.seq ?? 0,
    l = h.useValue("target"),
    u = !!h.useValue("saving"),
    _ = String(h.useValue("error") ?? ""),
    o = h.useValue("employees") ?? [],
    d = !!h.useValue("loadingEmployees"),
    y = Number(i.useFormValue("employee_seq")) || 0,
    m = i.useFormValue("kind") in me;
  v.useEffect(() => {
    if (g) return a.loadCandidates(j);
  }, [g, j]);
  const f = v.useMemo(() => o.map(Ge), [o]),
    k = {
      display: "grid",
      gridTemplateColumns: b ? "1fr" : "repeat(2, minmax(0, 1fr))",
      gap: 2
    },
    P = [{
      id: "attendance-basic",
      title: t("hr.attAdminRecord"),
      children: e.jsxs(Q, {
        spacing: 2,
        children: [e.jsx(Ke, {
          value: y,
          onPick: a.pickEmployee,
          employees: f,
          fixed: l?.employee,
          loading: d,
          disabled: u || !!l
        }), e.jsxs(p, {
          sx: k,
          children: [e.jsx(Me, {
            form: i,
            name: "kind",
            label: t("hr.certificateKind"),
            options: We.map(V => ({
              value: V,
              label: we[V]
            })),
            showEmptyOption: !1,
            onChange: a.syncDays,
            disabled: u,
            fullWidth: !0
          }), e.jsx(Be, {
            form: i,
            name: "days",
            label: t(m ? "hr.attendanceDaysAuto" : "hr.attendanceDaysHint"),
            min: 0,
            decimalLength: 1,
            thousandSeparator: !1,
            textAlign: "left",
            disabled: u || m,
            fullWidth: !0
          }), e.jsx(se, {
            form: i,
            name: "start_date",
            label: t(m ? "hr.attendanceDate" : "hr.recordDateStart"),
            required: !0,
            onChange: a.syncDays,
            disabled: u,
            fullWidth: !0,
            slotProps: {
              inputLabel: {
                shrink: !0
              }
            }
          }), e.jsx(se, {
            form: i,
            name: "end_date",
            label: t("hr.recordDateEnd"),
            onChange: a.syncDays,
            disabled: u || m,
            fullWidth: !0,
            slotProps: {
              inputLabel: {
                shrink: !0
              }
            }
          })]
        })]
      })
    }, {
      id: "attendance-memo",
      title: t("hr.eventMemo"),
      children: e.jsxs(Q, {
        spacing: 2,
        children: [e.jsx(st, {
          form: i,
          name: "memo",
          minRows: 3,
          disabled: u,
          slotProps: {
            htmlInput: {
              maxLength: 1e3
            }
          },
          fullWidth: !0
        }), _ && e.jsx(X, {
          message: _
        })]
      })
    }];
  return e.jsx(J, {
    readOnly: !n.canWrite,
    open: r.form.isOpen,
    onClose: r.form.close,
    title: t(l ? "hr.attendanceEdit" : "hr.attendanceCreate"),
    width: "640px",
    fullScreen: b,
    mobilePresentation: b ? "slide" : "dialog",
    draggable: !0,
    backdropClick: !1,
    titleIcons: {
      delete: {
        visible: n.canWrite && !!l,
        confirmConfig: {
          title: t("hr.attAdminDeleteRecord"),
          message: t("hr.attendanceDeleteConfirm"),
          confirmText: t("hr.delete"),
          cancelText: t("hr.cancel")
        }
      },
      print: {
        visible: !1
      },
      share: {
        visible: !1
      }
    },
    onDelete: a.remove,
    tabs: {
      visible: !1
    },
    scrollPastLastSection: !1,
    actions: {
      visible: !0,
      showCancelButton: !0,
      right: e.jsx(A, {
        style: n.canWrite ? void 0 : {
          display: "none"
        },
        variant: "contained",
        onClick: () => {
          i.submit();
        },
        disabled: u,
        sx: {
          minWidth: 80
        },
        children: u ? e.jsx(W, {
          size: 20,
          color: "inherit"
        }) : t("hr.save")
      })
    },
    sections: P
  });
}
function Dt({
  controller: a
}) {
  const t = N(),
    n = de("hr"),
    {
      modal: i,
      ui: r,
      form: h
    } = a,
    g = w(),
    b = ce()?.seq ?? 0,
    j = i.isOpen,
    l = !!r.useValue("saving"),
    u = String(r.useValue("error") ?? ""),
    _ = r.useValue("employees") ?? [],
    o = !!r.useValue("loadingEmployees"),
    d = Number(h.useFormValue("employee_seq")) || 0,
    y = h.useFormValue("kind");
  v.useEffect(() => {
    if (j) return a.loadCandidates(b);
  }, [j, b]);
  const S = v.useMemo(() => _.filter(m => m.status !== "resigned").map(Ge), [_]);
  return e.jsx(J, {
    readOnly: !n.canWrite,
    open: j,
    onClose: i.close,
    title: t("hr.attendanceAdjustLeave"),
    width: "560px",
    fullScreen: g,
    mobilePresentation: g ? "slide" : "dialog",
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
      right: e.jsx(A, {
        style: n.canWrite ? void 0 : {
          display: "none"
        },
        variant: "contained",
        onClick: () => {
          h.submit();
        },
        disabled: l,
        sx: {
          minWidth: 80
        },
        children: l ? e.jsx(W, {
          size: 20,
          color: "inherit"
        }) : t("hr.save")
      })
    },
    sections: [{
      id: "leave-adjust",
      title: t("hr.attSetAdjustKindAdjust"),
      children: e.jsxs(Q, {
        spacing: 2,
        children: [e.jsx(Ke, {
          value: d,
          onPick: a.pickEmployee,
          employees: S,
          loading: o,
          disabled: l
        }), e.jsxs(p, {
          sx: {
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 2
          },
          children: [e.jsx(Me, {
            form: h,
            name: "kind",
            label: t("hr.certificateKind"),
            options: [{
              value: "adjust",
              label: t("hr.leaveAdjustPlusMinus")
            }, {
              value: "carry",
              label: t("hr.leaveCarryPlus")
            }, {
              value: "expire",
              label: t("hr.leaveExpireMinus")
            }],
            showEmptyOption: !1,
            disabled: l,
            fullWidth: !0
          }), e.jsx(Be, {
            form: h,
            name: "days",
            label: t(y === "adjust" ? "hr.leaveDaysNegative" : "hr.leaveDays"),
            decimalLength: 1,
            negative: y === "adjust",
            thousandSeparator: !1,
            textAlign: "left",
            disabled: l,
            fullWidth: !0
          }), e.jsx(se, {
            form: h,
            name: "effective_date",
            label: t("hr.leaveEffectiveDate"),
            disabled: l,
            fullWidth: !0,
            slotProps: {
              inputLabel: {
                shrink: !0
              }
            }
          })]
        }), e.jsx(rt, {
          form: h,
          name: "memo",
          label: t("hr.reason"),
          disabled: l,
          fullWidth: !0,
          slotProps: {
            htmlInput: {
              maxLength: 300
            }
          }
        }), u && e.jsx(X, {
          message: u
        })]
      })
    }]
  });
}
const qe = ["overdue", "notice_window", "noticed", "planned", "designated", "before", "missed"],
  Lt = {
    overdue: {
      color: "#b91c1c",
      bg: "#fee2e2"
    },
    notice_window: {
      color: "#b45309",
      bg: "#fef3c7"
    },
    noticed: {
      color: "#1d4ed8",
      bg: "#dbeafe"
    },
    planned: {
      color: "#047857",
      bg: "#d1fae5"
    },
    designated: {
      color: "#047857",
      bg: "#d1fae5"
    },
    before: {
      color: "#475569",
      bg: "#f1f5f9"
    },
    missed: {
      color: "#475569",
      bg: "#f1f5f9"
    }
  };
function Nt(a) {
  const t = a.promotion,
    n = [c("hr.attAdminPromoRemaining", {
      count: a.remaining ?? 0,
      end: a.period_end
    })];
  return t ? (n.push(t.read_at ? c("hr.attAdminPromoNoticedRead", {
    date: t.notice_at.slice(0, 10),
    read: t.read_at.slice(0, 10)
  }) : c("hr.attAdminPromoNoticedUnread", {
    date: t.notice_at.slice(0, 10)
  })), t.status === "designated" ? n.push(c("hr.attAdminPromoDesignated", {
    dates: t.designate_dates.map(De).join(", ")
  })) : t.status === "planned" ? n.push(c("hr.attAdminPromoPlanned", {
    dates: t.plan_dates.map(De).join(", ")
  })) : a.stage === "overdue" ? n.push(c("hr.attAdminPromoOverdue", {
    due: t.plan_due,
    by: t.designate_by
  })) : n.push(c("hr.attAdminPromoPlanDue", {
    due: t.plan_due
  })), n) : (a.stage === "before" ? n.push(c("hr.attAdminPromoBefore", {
    from: a.times.notice_from,
    until: a.times.notice_until
  })) : a.stage === "notice_window" ? n.push(c("hr.attAdminPromoWindow", {
    until: a.times.notice_until
  })) : n.push(c("hr.attAdminPromoMissed")), n);
}
function It({
  row: a,
  onDesignate: t
}) {
  const n = N(),
    i = !!a.promotion && a.stage !== "noticed";
  return e.jsxs(p, {
    sx: {
      py: 1.5,
      borderBottom: "1px solid #f1f5f9"
    },
    children: [e.jsxs(p, {
      sx: {
        display: "flex",
        alignItems: "center",
        gap: 1,
        flexWrap: "wrap"
      },
      children: [e.jsx(I, {
        sx: {
          fontSize: 15,
          fontWeight: 700
        },
        children: a.employee.name
      }), e.jsx(xt, {
        label: ft[a.stage],
        tone: Lt[a.stage]
      }), i && e.jsx(A, {
        size: "small",
        variant: a.stage === "overdue" ? "contained" : "outlined",
        disableElevation: !0,
        onClick: t,
        sx: {
          ml: "auto"
        },
        children: a.stage === "designated" ? n("hr.attAdminPromoEditDesignate") : n("hr.attAdminPromoDesignate")
      })]
    }), e.jsx(p, {
      component: "ul",
      sx: {
        listStyleType: "disc",
        m: 0,
        mt: .5,
        pl: 2.5,
        fontSize: 14,
        color: "text.secondary"
      },
      children: Nt(a).map(r => e.jsx("li", {
        children: r
      }, r))
    })]
  });
}
function qt({
  controller: a
}) {
  const t = N(),
    n = a,
    i = w(),
    r = [...n.rows].sort((g, b) => qe.indexOf(g.stage) - qe.indexOf(b.stage) || g.employee.name.localeCompare(b.employee.name, "ko")),
    h = [{
      id: "leave-promotion-list",
      title: t("hr.attAdminPromoStages"),
      children: e.jsxs(p, {
        children: [!n.enabled && e.jsx(p, {
          sx: {
            mb: 1.5
          },
          children: e.jsx(X, {
            message: t("hr.attAdminPromoOff")
          })
        }), n.loading && r.length === 0 ? e.jsx(p, {
          sx: {
            display: "flex",
            justifyContent: "center",
            py: 4
          },
          children: e.jsx(W, {
            size: 28
          })
        }) : r.length === 0 ? e.jsx(I, {
          sx: {
            py: 4,
            textAlign: "center",
            fontSize: 15,
            color: "text.secondary"
          },
          children: t("hr.attAdminPromoNone")
        }) : r.map(g => e.jsx(It, {
          row: g,
          onDesignate: () => n.openDesignate(g)
        }, `${g.employee.seq}-${g.period_end}`))]
      })
    }];
  return e.jsx(J, {
    open: n.listModal.isOpen,
    onClose: n.listModal.close,
    title: t("hr.attAdminPromoTitle"),
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
      right: e.jsx(A, {
        variant: "contained",
        onClick: () => {
          n.run();
        },
        disabled: n.running || !n.enabled,
        sx: {
          minWidth: 96
        },
        children: n.running ? e.jsx(W, {
          size: 20,
          color: "inherit"
        }) : t("hr.attAdminCheckNow")
      })
    },
    sections: h
  });
}
function Rt({
  controller: a
}) {
  const t = N(),
    {
      form: n,
      ui: i,
      designateModal: r
    } = a,
    h = w(),
    g = !!i.useValue("saving"),
    b = String(i.useValue("error") ?? ""),
    j = String(i.useValue("name") ?? ""),
    l = String(i.useValue("period_end") ?? ""),
    u = [{
      id: "leave-designate-dates",
      title: t("hr.attAdminLeaveDates"),
      children: e.jsxs(Q, {
        spacing: 2,
        children: [e.jsxs(p, {
          component: "ul",
          sx: {
            listStyleType: "disc",
            m: 0,
            pl: 2.5,
            fontSize: 14,
            color: "text.secondary"
          },
          children: [e.jsx("li", {
            children: t("hr.attAdminDesignateIntro", {
              name: j,
              end: l
            })
          }), e.jsx("li", {
            children: t("hr.attAdminDesignateNote")
          })]
        }), e.jsx(yt, {
          form: n,
          disabled: g
        }), b && e.jsx(X, {
          message: b
        })]
      })
    }];
  return e.jsx(J, {
    open: r.isOpen,
    onClose: r.close,
    title: t("hr.attAdminDesignateTitle"),
    width: "480px",
    fullScreen: h,
    mobilePresentation: h ? "slide" : "dialog",
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
      right: e.jsx(A, {
        variant: "contained",
        onClick: () => {
          n.submit();
        },
        disabled: g,
        sx: {
          minWidth: 96
        },
        children: g ? e.jsx(W, {
          size: 20,
          color: "inherit"
        }) : t("hr.attAdminDesignate")
      })
    },
    sections: u
  });
}
const Re = 48,
  Ye = "#9b9a97",
  Tt = "#dc2626";
function Te({
  kind: a
}) {
  return e.jsx(gt, {
    label: we[a],
    tone: ht(a)
  });
}
function Oe({
  row: a
}) {
  const t = N();
  return a.remaining === null ? e.jsx(p, {
    component: "span",
    sx: {
      color: Ye
    },
    children: t("hr.attendanceNoHireDate")
  }) : e.jsx(p, {
    component: "span",
    sx: {
      fontWeight: 600,
      color: a.remaining < 0 ? Tt : "text.primary"
    },
    children: t("hr.daysN", {
      count: a.remaining
    })
  });
}
function ae({
  text: a
}) {
  return e.jsx(p, {
    sx: {
      py: 6,
      px: 2,
      textAlign: "center",
      color: Ye,
      fontSize: 14,
      wordBreak: "keep-all"
    },
    children: a
  });
}
function tn({
  embedded: a = !1,
  mode: t
} = {}) {
  const n = N(),
    i = de("hr"),
    r = w(),
    g = ce()?.seq ?? 0,
    [b, j] = v.useState(() => new Date().getFullYear()),
    [l, u] = v.useState([]),
    [_, o] = v.useState([]),
    [d, y] = v.useState(!1),
    [S, m] = v.useState(""),
    [f, k] = v.useState(t ?? "records"),
    P = mt(),
    V = !!P.useValue("open") || a;
  v.useEffect(() => {
    if (!(!r || a)) return P.setValue("active", !0), () => {
      P.setValue("active", !1), P.setValue("open", !1);
    };
  }, [r, P]), v.useEffect(() => {
    r && !V && m("");
  }, [r, V]);
  const L = v.useCallback(async (s = !1) => {
    if (!g) {
      u([]), o([]);
      return;
    }
    s || y(!0);
    try {
      const E = await T.list(b);
      u(E.items), o(E.summary);
    } catch (E) {
      s || M(E instanceof Error ? E.message : c("hr.errLoadAttendanceRecords"));
    } finally {
      y(!1);
    }
  }, [g, b]);
  v.useEffect(() => {
    L();
  }, [L]), le(["hr_attendance", "hr_leave_adjust", "hr_leave_promotion", "hr_overtime", "employee"], () => {
    L(!0);
  });
  const D = S.trim(),
    Z = v.useMemo(() => l.filter(s => !D || s.employee.name.includes(D)), [l, D]),
    ee = v.useMemo(() => _.filter(s => !D || s.employee.name.includes(D)), [_, D]),
    ue = At({
      onSaved: () => {
        L();
      }
    }),
    {
      openCreate: z,
      openEdit: he
    } = ue,
    q = kt({
      onSaved: () => {
        L();
      }
    }),
    R = Pt(),
    [pe, He] = et();
  v.useEffect(() => {
    pe.get("promotion") === "1" && (k("annual"), R.open(), He({}, {
      replace: !0
    }));
  }, [pe]);
  const fe = e.jsxs(e.Fragment, {
      children: [e.jsx(Vt, {
        controller: ue
      }), e.jsx(Dt, {
        controller: q
      }), e.jsx(qt, {
        controller: R
      }), e.jsx(Rt, {
        controller: R
      })]
    }),
    ge = D ? n("hr.attendanceNoneFound") : n("hr.attendanceYearEmpty", {
      year: b
    }),
    xe = n(D ? "hr.employeeNoneFound" : "hr.attendanceNoActive"),
    Ue = e.jsx(p, {
      sx: {
        "& .MuiToggleButtonGroup-root": {
          height: 40,
          flexWrap: "nowrap"
        }
      },
      children: e.jsx(dt, {
        size: "medium",
        value: f,
        onChange: s => k(s ?? "records"),
        options: Pe,
        sx: {
          "& .MuiToggleButtonGroup-grouped": {
            minWidth: 72,
            px: 1.5
          }
        }
      })
    }),
    ye = f === "records" && e.jsxs(p, {
      sx: {
        display: "flex",
        alignItems: "center",
        "& .MuiSvgIcon-root": {
          fontSize: 30
        }
      },
      children: [e.jsx(Ce, {
        "aria-label": n("hr.attendancePrevYear"),
        size: "small",
        onClick: () => j(s => s - 1),
        children: e.jsx(ot, {})
      }), e.jsx(I, {
        sx: {
          fontSize: 19,
          fontWeight: 600,
          minWidth: 72,
          textAlign: "center",
          whiteSpace: "nowrap"
        },
        children: n("hr.yearN", {
          year: b
        })
      }), e.jsx(Ce, {
        "aria-label": n("hr.attendanceNextYear"),
        size: "small",
        onClick: () => j(s => s + 1),
        children: e.jsx(it, {})
      })]
    }),
    ve = vt(d);
  if (r) {
    const s = {
        p: 1.5,
        cursor: "pointer",
        userSelect: "none",
        "&:active": {
          bgcolor: "#f8f8f7"
        }
      },
      E = {
        fontSize: 15,
        fontWeight: 600,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      },
      Xe = x => e.jsxs(p, {
        role: "button",
        tabIndex: 0,
        onClick: () => he(x),
        sx: s,
        children: [e.jsxs(p, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: .75,
            minWidth: 0
          },
          children: [e.jsx(Te, {
            kind: x.kind
          }), e.jsx(I, {
            sx: E,
            children: x.employee.name
          }), e.jsx(I, {
            sx: {
              fontSize: 14,
              fontWeight: 600,
              ml: "auto",
              flexShrink: 0
            },
            children: K(x.days)
          })]
        }), e.jsxs(p, {
          sx: {
            display: "flex",
            gap: 1.25,
            fontSize: 14,
            color: "text.secondary",
            mt: .5,
            flexWrap: "wrap"
          },
          children: [e.jsx("span", {
            children: Ve(x.start_date, x.end_date)
          }), x.memo ? e.jsx("span", {
            children: x.memo
          }) : null]
        })]
      }, `r${x.seq}`),
      Ze = x => e.jsxs(p, {
        role: "button",
        tabIndex: 0,
        onClick: () => z(x.employee.seq),
        sx: s,
        children: [e.jsxs(p, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: .75,
            minWidth: 0
          },
          children: [e.jsx(I, {
            sx: E,
            children: ne(x.employee)
          }), e.jsxs(p, {
            sx: {
              ml: "auto",
              flexShrink: 0,
              fontSize: 14
            },
            children: [e.jsx(p, {
              component: "span",
              sx: {
                color: "text.secondary",
                mr: .5
              },
              children: n("hr.myAttRemaining")
            }), e.jsx(Oe, {
              row: x
            })]
          })]
        }), x.granted !== null && e.jsxs(p, {
          sx: {
            display: "flex",
            gap: 1.25,
            fontSize: 14,
            color: "text.secondary",
            mt: .5,
            flexWrap: "wrap"
          },
          children: [e.jsx("span", {
            children: n("hr.attendanceGrantedN", {
              count: x.granted
            })
          }), x.adjust + x.carry - x.expire !== 0 && e.jsx("span", {
            children: n("hr.attendanceAdjustN", {
              count: x.adjust + x.carry - x.expire
            })
          }), e.jsx("span", {
            children: n("hr.attendanceUsedN", {
              count: x.used
            })
          }), e.jsxs("span", {
            children: [x.period_start, " ~ ", x.period_end]
          })]
        })]
      }, `s${x.employee.seq}`),
      je = f === "records" ? Z.map(Xe) : ee.map(Ze),
      te = [f === "records" ? e.jsx(p, {
        sx: {
          display: "flex",
          justifyContent: "center",
          p: 1.5
        },
        children: ye
      }, "head") : e.jsxs(p, {
        sx: {
          display: "flex",
          gap: 1,
          p: 1.5
        },
        children: [e.jsx(A, {
          size: "small",
          variant: "outlined",
          onClick: () => q.open(),
          children: n("hr.attendanceAdjustLeave")
        }), e.jsx(A, {
          size: "small",
          variant: "outlined",
          onClick: () => {
            q.closePeriod();
          },
          children: n("hr.attendanceClosePeriod")
        }), e.jsx(A, {
          size: "small",
          variant: "outlined",
          onClick: R.open,
          children: n("hr.attendancePromote")
        })]
      }, "head"), ...je];
    return ve && je.length === 0 && te.push(e.jsx(ae, {
      text: f === "records" ? ge : xe
    }, "empty")), ve || te.push(e.jsx(jt, {}, "loading")), e.jsxs(e.Fragment, {
      children: [t ? e.jsx(ke, {
        open: V,
        value: S,
        onChange: m,
        placeholder: n("hr.employeeSearchName")
      }) : e.jsx(ct, {
        value: f,
        options: Pe,
        onChange: k,
        ariaLabel: n("hr.attendanceView"),
        above: e.jsx(ke, {
          open: V,
          value: S,
          onChange: m,
          placeholder: n("hr.employeeSearchName")
        })
      }), e.jsx(bt, {
        attachHead: !0,
        children: te
      }), e.jsx(lt, {
        style: i.canWrite ? void 0 : {
          display: "none"
        },
        color: "primary",
        "aria-label": n("hr.attendanceAddRecord"),
        onClick: () => z(),
        sx: {
          position: "fixed",
          right: 24,
          bottom: "calc(24px + var(--taskbox-fab-lift, 0px))",
          zIndex: 40
        },
        children: e.jsx(Ee, {})
      }), fe]
    });
  }
  const Qe = [{
      id: "period",
      text: n("hr.trainingPeriod"),
      width: 220,
      align: "center",
      render: s => Ve(s.start_date, s.end_date)
    }, {
      id: "kind",
      text: n("hr.certificateKind"),
      width: 96,
      align: "center",
      render: s => e.jsx(Te, {
        kind: s.kind
      })
    }, {
      id: "employee",
      text: n("hr.employee"),
      width: 180,
      style: {
        fontSize: 15
      },
      render: s => ne(s.employee)
    }, {
      id: "days",
      text: n("hr.attendanceDays"),
      width: 80,
      align: "center",
      render: s => K(s.days)
    }, {
      id: "memo",
      text: n("hr.eventMemo"),
      render: s => s.memo
    }],
    Je = [{
      id: "employee",
      text: n("hr.employee"),
      style: {
        fontSize: 15
      },
      render: s => ne(s.employee)
    }, {
      id: "join_date",
      text: n("hr.employeeJoinDate"),
      width: 120,
      align: "center",
      render: s => s.employee.join_date
    }, {
      id: "service_years",
      text: n("hr.attendanceService"),
      width: 80,
      align: "center",
      render: s => s.granted === null ? "" : s.service_years ? n("hr.attendanceServiceYears", {
        count: s.service_years
      }) : n("hr.attendanceUnderOneYear")
    }, {
      id: "period",
      text: n("hr.attendanceLeavePeriod"),
      width: 220,
      align: "center",
      render: s => s.period_start ? `${s.period_start} ~ ${s.period_end}` : ""
    }, {
      id: "granted",
      text: n("hr.myAttGranted"),
      width: 80,
      align: "center",
      render: s => K(s.granted)
    }, {
      id: "adjust",
      text: n("hr.attendanceAdjustCarry"),
      width: 100,
      align: "center",
      render: s => {
        const E = s.adjust + s.carry - s.expire;
        return E ? `${E > 0 ? "+" : ""}${n("hr.daysN", {
          count: E
        })}` : "";
      }
    }, {
      id: "used",
      text: n("hr.myAttUsed"),
      width: 80,
      align: "center",
      render: s => K(s.used)
    }, {
      id: "half_count",
      text: n("hr.attendanceHalfCount"),
      width: 80,
      align: "center",
      render: s => s.half_count ? n("hr.timesN", {
        count: s.half_count
      }) : ""
    }, {
      id: "quarter_count",
      text: n("hr.attendanceQuarterCount"),
      width: 90,
      align: "center",
      render: s => s.quarter_count ? n("hr.timesN", {
        count: s.quarter_count
      }) : ""
    }, {
      id: "remaining",
      text: n("hr.myAttRemaining"),
      width: 110,
      align: "center",
      render: s => e.jsx(Oe, {
        row: s
      })
    }],
    be = {
      left: e.jsxs(p, {
        sx: {
          display: "flex",
          gap: 1.5
        },
        children: [e.jsx(A, {
          style: i.canWrite ? void 0 : {
            display: "none"
          },
          variant: "contained",
          disableElevation: !0,
          startIcon: e.jsx(Ee, {}),
          onClick: () => z(),
          children: n("hr.attendanceAddRecord")
        }), f === "annual" && e.jsxs(e.Fragment, {
          children: [e.jsx(A, {
            variant: "outlined",
            onClick: () => q.open(),
            children: n("hr.attendanceAdjustLeave")
          }), e.jsx(A, {
            variant: "outlined",
            onClick: () => {
              q.closePeriod();
            },
            children: n("hr.attendanceClosePeriod")
          }), e.jsx(A, {
            variant: "outlined",
            onClick: R.open,
            children: n("hr.attendancePromote")
          })]
        })]
      }),
      filter: {
        groups: []
      },
      right: e.jsxs(p, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 1.5
        },
        children: [ye, !t && Ue]
      }),
      showSearch: !0,
      searchValue: S,
      searchPlaceholder: n("hr.employeeSearchName"),
      onSearchChange: m,
      searchLoading: d,
      collapsible: !1,
      showCollapseButton: !1,
      showClearIcon: !1
    };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(p, {
      sx: {
        position: "relative",
        height: "100%",
        minHeight: 0,
        display: "flex",
        flexDirection: "column"
      },
      children: f === "records" ? e.jsx(Ae, {
        header: be,
        tableProps: {
          scrollbars: Le,
          mobile: !0,
          variant: "notion",
          columns: Qe,
          data: Z,
          totalCount: Z.length,
          getRowId: s => String(s.seq),
          rowHeight: Re,
          onRowClick: s => he(s),
          loading: d,
          emptyMessage: e.jsx(ae, {
            text: ge
          })
        }
      }) : e.jsx(Ae, {
        header: be,
        tableProps: {
          scrollbars: Le,
          mobile: !0,
          variant: "notion",
          columns: Je,
          data: ee,
          totalCount: ee.length,
          getRowId: s => String(s.employee.seq),
          rowHeight: Re,
          onRowClick: s => z(s.employee.seq),
          loading: d,
          emptyMessage: e.jsx(ae, {
            text: xe
          })
        }
      })
    }), fe]
  });
}
export { tn as A };