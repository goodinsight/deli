import { r as S, j as t } from "./react-CjxcGQav.js";
import { bM as J, fv as X, bT as E, en as P, nn as Pe, eo as G, no as we, np as De, e as Ne, c8 as Re, ak as Be, dv as Oe, fA as Me, cL as Ae, bO as te, ds as We, bx as fe, bv as ce, fL as qe, D as ke, cz as Fe, c4 as z, cC as se, fC as re, aG as Ke, cG as ie, fJ as $e, fK as ze, fB as Ge, cD as Ye, B as O, aB as ue, cO as Ue, cY as He, cn as Je, cI as Xe, bQ as Ie, K as Qe, aF as Ze, fN as he, j as et, F as tt, d8 as _e, lr as ot, L as Q } from "../js.d/main-Cm9wS5wt.js";
import { O as nt } from "./OptionToggleGroup-Cvm2wRyq.js";
import { S as st } from "./SplitDockSlot-B6Q4iP8T.js";
import { L as rt } from "./ListViewModeToggle-NcYQu7vy.js";
import { u as it } from "./listViewMode-iTl-2ucA.js";
import { S as at } from "./selectedRow-CBnSZEGB.js";
import { a as lt } from "./EdgeTabs-Ccbggjn6.js";
import { u as mt } from "./mobileSearchOverlay-DYWcMOOb.js";
import { b as ut, l as Te } from "./i18nLabels-BNTLL7cu.js";
import { u as ct } from "./useFormModified-cVB1R-yN.js";
import { i as ve, p as ge } from "./formInput-KrHl7zSm.js";
import { E as pt, l as dt } from "./hrCandidates-HYZ1yzF2.js";
import { t as ft, E as be, e as Le } from "./EmployeePickField-CDJRGgup.js";
import { T as ht } from "./ToneChip-BFljqlNi.js";
import { C as _t } from "./CategoryOutlined-DcAqxAdD.js";
import { T as vt } from "./ToggleOnOutlined-5BVdqdOm.js";
import { W as gt } from "./WorkOutlineOutlined-D5AzVFs6.js";
import { I as ye } from "./InlineErrorAlert-D9ICJPt7.js";
import { I as ae, b as bt } from "./PropertyFields-TuJTG5XK.js";
import { P as yt } from "./propertySections-Bwsl7OH-.js";
import { u as xt, b as jt, a as St } from "./MobileCardListLayout-D5_p2Xer.js";
import { T as Et } from "./tableScrollbars-C9bhlJjO.js";
import { u as Ct } from "./useColumnWidths-DSAca5rC.js";
import { u as Vt } from "./useClientSort-CdwrAOWp.js";
import { w as Ot } from "./headerCount-4t1ZKu-L.js";
import "./stylis-DdLD6a3t.js";
import "./HorizontalSplitOutlined-MKxJhLKp.js";
import "./profileApi-Btafs-pM.js";
import "./employeeApi-CdGzOYcj.js";
import "./types-CVhETUvu.js";
import "./hrCodeApi-BRtc5fIX.js";
const oe = ["join", "transfer", "promotion", "leave", "return", "resign", "etc"],
  Y = Te({
    join: "hr.employeeKindJoin",
    transfer: "hr.eventTransfer",
    promotion: "hr.eventPromotion",
    leave: "hr.employeeStatusLeave",
    return: "hr.eventReturn",
    resign: "hr.employeeStatusResigned",
    etc: "hr.valOther"
  }),
  qt = {
    join: {
      color: "#047857",
      bg: "#d1fae5"
    },
    transfer: {
      color: "#1d4ed8",
      bg: "#dbeafe"
    },
    promotion: {
      color: "#6d28d9",
      bg: "#ede9fe"
    },
    leave: {
      color: "#b45309",
      bg: "#fef3c7"
    },
    return: {
      color: "#047857",
      bg: "#d1fae5"
    },
    resign: {
      color: "#b91c1c",
      bg: "#fee2e2"
    },
    etc: {
      color: "#475569",
      bg: "#f1f5f9"
    }
  },
  le = [...ut([{
    value: "",
    labelKey: "hr.all"
  }]), ...oe.map(e => ({
    value: e,
    get label() {
      return Y[e];
    }
  }))],
  kt = Te({
    future: "hr.eventSkippedFuture",
    not_latest: "hr.eventSkippedNotLatest"
  });
function xe(e, n, o) {
  return [e, n, o].filter(Boolean).join(" · ");
}
function Z(e) {
  const n = xe(e.from_unit_name, e.from_position, e.from_job_title),
    o = xe(e.to_unit_name, e.to_position, e.to_job_title);
  return !o || n === o ? n : n ? `${n} → ${o}` : o;
}
const ee = "/v1/hr/events";
function Ft(e) {
  const n = e ?? {},
    o = P(n.kind);
  return {
    seq: G(n.seq),
    employee_seq: G(n.employee_seq),
    kind: oe.includes(o) ? o : "etc",
    event_date: De(n.event_date),
    from_unit_seq: G(n.from_unit_seq),
    from_unit_name: P(n.from_unit_name),
    from_position: P(n.from_position),
    from_job_title: P(n.from_job_title),
    to_unit_seq: G(n.to_unit_seq),
    to_unit_name: P(n.to_unit_name),
    to_position: P(n.to_position),
    to_job_title: P(n.to_job_title),
    memo: P(n.memo),
    employee: we(n.employee)
  };
}
const B = {
    list: async () => {
      const e = await J.http.get(ee);
      return (X(e, E("hr.errLoadEvents")).items ?? []).map(Ft);
    },
    create: async e => {
      const n = await J.http.post(ee, e),
        o = X(n, E("hr.errCreateEvent")) ?? {},
        p = P(o.apply_skipped);
      return {
        seq: G(o.seq),
        applied: Pe(o.applied),
        apply_skipped: p === "future" || p === "not_latest" ? p : ""
      };
    },
    update: async (e, n) => {
      const o = await J.http.patch(`${ee}/${e}`, n);
      X(o, E("hr.errUpdateEvent"));
    },
    remove: async e => {
      const n = await J.http.delete(`${ee}/${e}`);
      X(n, E("hr.errDeleteEvent"));
    }
  },
  je = {
    employee_seq: 0,
    kind: "transfer",
    event_date: "",
    from_unit_seq: 0,
    from_position: "",
    from_job_title: "",
    to_unit_seq: 0,
    to_position: "",
    to_job_title: "",
    memo: "",
    apply_to_employee: !0
  },
  It = {
    target: null,
    saving: !1,
    error: "",
    ...pt
  };
function Tt() {
  const e = new Date();
  return `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
}
function Se(e) {
  return {
    employee_seq: e.employee_seq,
    kind: e.kind,
    event_date: e.event_date,
    from_unit_seq: e.from_unit_seq,
    from_position: e.from_position,
    from_job_title: e.from_job_title,
    to_unit_seq: e.to_unit_seq,
    to_position: e.to_position,
    to_job_title: e.to_job_title,
    memo: e.memo,
    apply_to_employee: !1
  };
}
function Ee(e) {
  return {
    kind: e.kind,
    event_date: e.event_date,
    from_unit_seq: Number(e.from_unit_seq) || 0,
    from_position: String(e.from_position ?? "").trim(),
    from_job_title: String(e.from_job_title ?? "").trim(),
    to_unit_seq: Number(e.to_unit_seq) || 0,
    to_position: String(e.to_position ?? "").trim(),
    to_job_title: String(e.to_job_title ?? "").trim(),
    memo: e.memo
  };
}
function Lt({
  onSaved: e,
  onChanged: n
}) {
  const o = S.useRef(e);
  o.current = e;
  const p = S.useRef(n);
  p.current = n;
  const m = S.useRef(null),
    g = {
      form: Ne({
        modalId: "hr-event-edit-dialog"
      })
    },
    l = Re({
      stateId: "hr-event-ui",
      initialValues: It
    }),
    f = Be({
      formId: "hr-event-form",
      initialValues: je,
      onValidate: r => Number(r.employee_seq) ? r.event_date ? ve(r.event_date) ? (l.setValue("error", ge()), !1) : !0 : (l.setValue("error", E("hr.eventErrDate")), !1) : (l.setValue("error", E("hr.attSetErrPickEmployee")), !1),
      onSubmit: async r => {
        const u = l.getValue("target");
        l.setValues({
          saving: !0,
          error: ""
        });
        try {
          const a = Ee(r);
          if (u) await B.update(u.seq, a);else {
            const h = await B.create({
              ...a,
              employee_seq: Number(r.employee_seq) || 0,
              apply_to_employee: !!r.apply_to_employee
            });
            h.apply_skipped ? We(kt[h.apply_skipped]) : h.applied && fe({
              message: E("hr.eventAppliedDone"),
              delay: 1200
            });
          }
          return o.current(), g.form.close(), !0;
        } catch (a) {
          return l.setValues({
            saving: !1,
            error: a instanceof Error ? a.message : E("hr.eventErrSave")
          }), !1;
        }
      }
    }),
    C = () => {
      const r = {
        ...je,
        event_date: Tt()
      };
      f.setFormValues(r), f.setInitialFormValues(r), l.setValues({
        target: null,
        saving: !1,
        error: ""
      }), g.form.open();
    },
    w = r => {
      const u = Se(r);
      f.setFormValues(u), f.setInitialFormValues(u), m.current = u, l.setValues({
        target: r,
        saving: !1,
        error: ""
      }), g.form.open();
    },
    c = r => dt({
      orgSeq: r,
      withPlacement: !0,
      onLoaded: u => l.setValues(u)
    }),
    b = r => {
      const a = (l.getValue("employees") ?? []).find(h => h.seq === r);
      f.setFormValues({
        employee_seq: a?.seq ?? 0,
        from_unit_seq: a?.unit_seq ?? 0,
        from_position: a?.position ?? "",
        from_job_title: a?.job_title ?? "",
        to_unit_seq: a?.unit_seq ?? 0,
        to_position: a?.position ?? "",
        to_job_title: a?.job_title ?? ""
      });
    },
    k = async (r, u) => {
      const a = l.getValue("target");
      if (!a) return f.setFormValues(r), !0;
      const h = f.getFormValues(),
        v = {
          ...h,
          ...r
        };
      if ("event_date" in r && (!v.event_date || ve(v.event_date))) return te(v.event_date ? ge() : E("hr.eventErrDate")), !1;
      f.setFormValues(r);
      const I = Ee(v),
        x = Object.fromEntries(u.map(_ => [_, I[_]]));
      try {
        return await B.update(a.seq, x), l.setValue("target", {
          ...a,
          ...x
        }), m.current && (m.current = {
          ...m.current,
          ...r
        }), p.current?.(), !0;
      } catch (_) {
        return f.setFormValues(Object.fromEntries(Object.keys(r).map(y => [y, h[y]]))), te(_ instanceof Error ? _.message : E("hr.eventErrSave")), !1;
      }
    },
    D = async () => {
      const r = l.getValue("target");
      if (r) {
        l.setValue("saving", !0);
        try {
          await B.remove(r.seq), fe({
            message: E("hr.deleted"),
            delay: 500
          }), o.current(), g.form.close();
        } catch (u) {
          l.setValues({
            saving: !1,
            error: u instanceof Error ? u.message : E("hr.errDeleteEvent")
          });
        }
      }
    };
  Oe(["hr_employee_event"], r => {
    const u = l.getValue("target");
    if (!u || !g.form.isOpen) return;
    const a = Me(r, "hr_employee_event", u.seq);
    if (!a && !r.resync) return;
    const h = () => {
      g.form.close(), te(E("hr.eventDeletedByOther"));
    };
    if (a?.action === "delete") return h();
    B.list().then(v => {
      if (l.getValue("target")?.seq !== u.seq || !g.form.isOpen) return;
      const x = v.find(N => N.seq === u.seq);
      if (!x) return h();
      const _ = f.getFormValues(),
        {
          patch: y,
          baseline: T
        } = Ae(_, m.current ?? _, Se(x), {
          skip: ["apply_to_employee"]
        });
      m.current = T, Object.keys(y).length > 0 && f.setFormValues(y), l.setValue("target", x);
    }).catch(() => {});
  }, {
    enabled: g.form.isOpen
  });
  const F = ct(f);
  return {
    form: f,
    modals: g,
    ui: l,
    formDirty: F,
    openCreate: C,
    openEdit: w,
    loadCandidates: c,
    pickEmployee: b,
    remove: D,
    saveField: k
  };
}
function Pt(e, n) {
  const o = e.map(p => ({
    value: p,
    label: p
  }));
  return n && !e.includes(n) ? [{
    value: n,
    label: n
  }, ...o] : o;
}
function wt({
  controller: e,
  docked: n
}) {
  const o = ce(),
    p = qe("hr"),
    {
      form: m,
      modals: g,
      ui: l
    } = e,
    f = g.form.isOpen,
    C = ke(),
    w = Fe()?.seq ?? 0,
    c = l.useValue("target"),
    b = !!l.useValue("saving"),
    k = String(l.useValue("error") ?? ""),
    D = l.useValue("employees") ?? [],
    F = l.useValue("units") ?? [],
    r = l.useValue("positions") ?? [],
    u = l.useValue("jobTitles") ?? [],
    a = !!l.useValue("loadingEmployees"),
    h = Number(m.useFormValue("employee_seq")) || 0,
    v = !C,
    I = v && !!c,
    x = m.useFormValue("apply_to_employee") === !0,
    _ = p.canWrite,
    y = {
      kind: String(m.useFormValue("kind") ?? ""),
      event_date: String(m.useFormValue("event_date") ?? ""),
      from_unit_seq: Number(m.useFormValue("from_unit_seq")) || 0,
      from_position: String(m.useFormValue("from_position") ?? ""),
      from_job_title: String(m.useFormValue("from_job_title") ?? ""),
      to_unit_seq: Number(m.useFormValue("to_unit_seq")) || 0,
      to_position: String(m.useFormValue("to_position") ?? ""),
      to_job_title: String(m.useFormValue("to_job_title") ?? ""),
      memo: String(m.useFormValue("memo") ?? "")
    };
  S.useEffect(() => {
    if (f) return e.loadCandidates(w);
  }, [f, w]);
  const T = S.useMemo(() => D.map(ft), [D]),
    N = (i, d) => {
      const q = [{
        value: 0,
        label: F.length === 0 ? o("hr.employeeNoGroups") : o("hr.employeeNotAssigned")
      }, ...F.map(V => ({
        value: V.seq,
        label: V.name
      }))];
      return i && !F.some(V => V.seq === i) && q.push({
        value: i,
        label: d || o("hr.eventDeletedUnit")
      }), q;
    },
    L = {
      display: "grid",
      gridTemplateColumns: C ? "1fr" : "repeat(3, minmax(0, 1fr))",
      gap: 2
    },
    U = {
      display: "grid",
      gridTemplateColumns: C ? "1fr" : "repeat(2, minmax(0, 1fr))",
      gap: 2
    },
    M = i => t.jsxs(O, {
      sx: L,
      children: [t.jsx(ue, {
        form: m,
        name: `${i}_unit_seq`,
        label: o("hr.attAdminUnit"),
        options: i === "from" ? N(c?.from_unit_seq ?? 0, c?.from_unit_name ?? "") : N(c?.to_unit_seq ?? 0, c?.to_unit_name ?? ""),
        showEmptyOption: !1,
        disabled: b,
        fullWidth: !0
      }), t.jsx(he, {
        form: m,
        name: `${i}_position`,
        label: o("hr.employeePosition"),
        options: r.map(d => ({
          value: d,
          label: d
        })),
        freeSolo: !0,
        disableFilter: !0,
        disabled: b,
        fullWidth: !0,
        textFieldProps: {
          slotProps: {
            htmlInput: {
              maxLength: 30
            }
          }
        }
      }), t.jsx(he, {
        form: m,
        name: `${i}_job_title`,
        label: o("hr.employeeJobTitle"),
        options: u.map(d => ({
          value: d,
          label: d
        })),
        freeSolo: !0,
        disableFilter: !0,
        disabled: b,
        fullWidth: !0,
        textFieldProps: {
          slotProps: {
            htmlInput: {
              maxLength: 30
            }
          }
        }
      })]
    }),
    A = (i, d, q, V) => V.length > 0 ? t.jsx(ie, {
      icon: q,
      label: d,
      value: y[i],
      options: Pt(V, y[i]),
      emptyLabel: o("hr.employeeEmpty"),
      onChange: $ => {
        e.saveField({
          [i]: String($)
        }, [i]);
      }
    }) : t.jsx(re, {
      icon: q,
      label: d,
      children: t.jsx(ae, {
        value: y[i],
        maxLength: 30,
        onCommit: $ => e.saveField({
          [i]: $.trim()
        }, [i])
      })
    }),
    H = i => {
      const d = `${i}_unit_seq`,
        q = (i === "from" ? N(c?.from_unit_seq ?? 0, c?.from_unit_name ?? "") : N(c?.to_unit_seq ?? 0, c?.to_unit_name ?? "")).filter(V => V.value !== 0);
      return t.jsxs(se, {
        sx: _ ? void 0 : {
          pointerEvents: "none"
        },
        children: [t.jsx(ie, {
          icon: t.jsx(Ze, {}),
          label: o("hr.attAdminUnit"),
          value: y[d] || "",
          options: q,
          emptyLabel: F.length === 0 ? o("hr.employeeNoGroups") : o("hr.employeeNotAssigned"),
          onChange: V => {
            e.saveField({
              [d]: Number(V) || 0
            }, [d]);
          }
        }), A(`${i}_position`, o("hr.employeePosition"), t.jsx(gt, {}), r), A(`${i}_job_title`, o("hr.employeeJobTitle"), t.jsx(et, {}), u)]
      });
    },
    W = [{
      id: "event-basic",
      title: o("hr.eventSection"),
      children: t.jsxs(z, {
        spacing: 2,
        children: [c ? null : t.jsx(be, {
          value: h,
          onPick: e.pickEmployee,
          employees: T,
          loading: a,
          disabled: b
        }), t.jsxs(se, {
          sx: _ ? void 0 : {
            pointerEvents: "none"
          },
          children: [c ? t.jsx(re, {
            icon: t.jsx(Ke, {}),
            label: o("hr.employee"),
            children: t.jsx(ae, {
              value: Le(c.employee),
              readOnly: !0
            })
          }) : null, t.jsx(ie, {
            icon: t.jsx(_t, {}),
            label: o("hr.eventKind"),
            value: y.kind,
            options: oe.map(i => ({
              value: i,
              label: Y[i]
            })),
            onChange: i => {
              e.saveField({
                kind: i
              }, ["kind"]);
            }
          }), t.jsx(re, {
            icon: t.jsx(Ge, {}),
            label: o("hr.eventDate"),
            children: t.jsx(bt, {
              value: y.event_date,
              placeholder: "YYYY-MM-DD",
              onCommit: i => {
                const d = $e(i.trim());
                return ze(d) && d ? e.saveField({
                  event_date: d
                }, ["event_date"]) : !1;
              }
            })
          })]
        })]
      })
    }, {
      id: "event-from",
      title: o("hr.eventBefore"),
      children: H("from")
    }, {
      id: "event-to",
      title: o("hr.eventAfter"),
      children: t.jsxs(z, {
        spacing: 1,
        children: [H("to"), c ? null : t.jsx(se, {
          children: t.jsx(Ye, {
            icon: t.jsx(vt, {}),
            label: o("hr.eventApplyToEmployee"),
            checked: x,
            onChange: i => m.setFormValue("apply_to_employee", i)
          })
        })]
      })
    }, {
      id: "event-memo",
      title: o("hr.eventMemo"),
      children: t.jsxs(O, {
        sx: _ ? void 0 : {
          pointerEvents: "none"
        },
        children: [t.jsx(ae, {
          value: y.memo,
          multiline: !0,
          bordered: !0,
          maxLength: 1e3,
          onCommit: i => e.saveField({
            memo: i
          }, ["memo"])
        }), k && t.jsx(O, {
          sx: {
            mt: 2
          },
          children: t.jsx(ye, {
            message: k
          })
        })]
      })
    }],
    K = [{
      id: "event-basic",
      title: o("hr.eventSection"),
      children: t.jsxs(z, {
        spacing: 2,
        children: [t.jsx(be, {
          value: h,
          onPick: e.pickEmployee,
          employees: T,
          fixed: c?.employee,
          loading: a,
          disabled: b || !!c
        }), t.jsxs(O, {
          sx: U,
          children: [t.jsx(ue, {
            form: m,
            name: "kind",
            label: o("hr.eventKind"),
            options: oe.map(i => ({
              value: i,
              label: Y[i]
            })),
            showEmptyOption: !1,
            disabled: b,
            fullWidth: !0
          }), t.jsx(Ue, {
            form: m,
            name: "event_date",
            label: o("hr.eventDate"),
            required: !0,
            disabled: b,
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
      id: "event-from",
      title: o("hr.eventBefore"),
      children: M("from")
    }, {
      id: "event-to",
      title: o("hr.eventAfter"),
      children: t.jsxs(z, {
        spacing: 1.5,
        children: [M("to"), !c && t.jsx(He, {
          form: m,
          name: "apply_to_employee",
          label: o("hr.eventApplyToEmployee"),
          disabled: b
        })]
      })
    }, {
      id: "event-memo",
      title: o("hr.eventMemo"),
      children: t.jsxs(z, {
        spacing: 2,
        children: [t.jsx(Je, {
          form: m,
          name: "memo",
          minRows: 3,
          disabled: b,
          slotProps: {
            htmlInput: {
              maxLength: 1e3
            }
          },
          fullWidth: !0
        }), k && t.jsx(ye, {
          message: k
        })]
      })
    }],
    ne = v ? W : K;
  return t.jsx(Xe, {
    readOnly: !p.canWrite,
    open: g.form.isOpen,
    onClose: g.form.close,
    title: o(c ? v ? "hr.eventDetail" : "hr.eventEdit" : "hr.eventRegister"),
    maxWidth: "md",
    fullScreen: C,
    mobilePresentation: C ? "slide" : "dialog",
    sideDrawer: !C && !n,
    splitDock: !C && !!n,
    backdropClick: I || !e.formDirty,
    sx: v ? {
      DialogContent: yt
    } : void 0,
    titleIcons: {
      delete: {
        visible: p.canWrite && !!c,
        confirmConfig: {
          title: o("hr.eventDelete"),
          message: o("hr.eventDeleteConfirm"),
          confirmText: o("hr.delete"),
          cancelText: o("hr.cancel")
        }
      },
      print: {
        visible: !1
      },
      share: {
        visible: !1
      }
    },
    onDelete: e.remove,
    tabs: {
      visible: !1
    },
    scrollPastLastSection: !1,
    actions: {
      visible: !I,
      showCancelButton: !0,
      right: t.jsx(Ie, {
        style: p.canWrite ? void 0 : {
          display: "none"
        },
        variant: "contained",
        onClick: () => {
          m.submit();
        },
        disabled: b,
        sx: {
          minWidth: 80
        },
        children: b ? t.jsx(Qe, {
          size: 20,
          color: "inherit"
        }) : o("hr.save")
      })
    },
    sections: ne
  });
}
const Dt = 48,
  Nt = "#9b9a97",
  me = "all",
  Rt = new Set(["event_date", "kind", "employee", "change"]);
function Ce({
  kind: e
}) {
  return t.jsx(ht, {
    label: Y[e],
    tone: qt[e]
  });
}
function Ve({
  searching: e
}) {
  const n = ce(),
    o = n(e ? "hr.eventNoneFound" : "hr.eventNone");
  return t.jsx(O, {
    sx: {
      py: 6,
      px: 2,
      textAlign: "center",
      color: Nt,
      fontSize: 14,
      wordBreak: "keep-all"
    },
    children: o
  });
}
function go() {
  const e = ce(),
    n = qe("hr"),
    o = Ct("hr.event"),
    p = ke(),
    g = Fe()?.seq ?? 0,
    [l, f] = it("event"),
    C = !p && l === "split",
    w = !p && l === "split_bottom",
    c = C || w,
    [b, k] = S.useState([]),
    [D, F] = S.useState(!1),
    [r, u] = S.useState(""),
    [a, h] = S.useState(""),
    v = mt(),
    I = !!v.useValue("open");
  S.useEffect(() => {
    if (p) return v.setValue("active", !0), () => {
      v.setValue("active", !1), v.setValue("open", !1);
    };
  }, [p, v]), S.useEffect(() => {
    p && !I && u("");
  }, [p, I]);
  const x = S.useCallback(async (s = !1) => {
    if (!g) {
      k([]);
      return;
    }
    s || F(!0);
    try {
      k(await B.list());
    } catch (R) {
      s || te(R instanceof Error ? R.message : E("hr.errLoadEvents"));
    } finally {
      F(!1);
    }
  }, [g]);
  S.useEffect(() => {
    x();
  }, [x]), Oe(["hr_employee_event", "employee"], () => {
    x(!0);
  });
  const _ = r.trim(),
    y = S.useMemo(() => b.filter(s => (a === "" || s.kind === a) && (!_ || s.employee.name.includes(_))), [b, a, _]),
    {
      rows: T,
      tableSort: N
    } = Vt(y, {
      event_date: s => `${s.event_date} ${String(s.seq).padStart(10, "0")}`,
      kind: s => Y[s.kind],
      employee: s => s.employee.name,
      change: s => Z(s)
    }, {
      by: "event_date",
      dir: "desc"
    }),
    L = Lt({
      onSaved: () => {
        x();
      },
      onChanged: () => {
        x(!0);
      }
    }),
    {
      openCreate: U,
      openEdit: M
    } = L,
    A = t.jsx(wt, {
      controller: L,
      docked: c
    }),
    H = L.ui.useValue("target"),
    W = L.modals.form.isOpen ? H?.seq ?? 0 : 0,
    K = c && L.modals.form.isOpen,
    ne = C && K,
    i = s => {
      if (c && s.seq === W) {
        L.modals.form.close();
        return;
      }
      M(s);
    },
    d = xt(D);
  if (p) {
    const s = j => t.jsxs(O, {
        role: "button",
        tabIndex: 0,
        onClick: () => M(j),
        sx: {
          p: 1.5,
          cursor: "pointer",
          userSelect: "none",
          "&:active": {
            bgcolor: "#f8f8f7"
          }
        },
        children: [t.jsxs(O, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: .75,
            minWidth: 0
          },
          children: [t.jsx(Ce, {
            kind: j.kind
          }), t.jsx(Q, {
            sx: {
              fontSize: 15,
              fontWeight: 600,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: j.employee.name
          }), t.jsx(Q, {
            sx: {
              fontSize: 14,
              color: "text.secondary",
              ml: "auto",
              flexShrink: 0
            },
            children: j.event_date
          })]
        }), Z(j) && t.jsx(Q, {
          sx: {
            fontSize: 14,
            color: "text.secondary",
            mt: .5
          },
          children: Z(j)
        }), j.memo && t.jsx(Q, {
          sx: {
            fontSize: 14,
            color: "text.secondary",
            mt: .25,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          },
          children: j.memo
        })]
      }, j.seq),
      R = [t.jsxs(O, {
        children: [t.jsx(lt, {
          open: I,
          value: r,
          onChange: u,
          placeholder: e("hr.employeeSearchName")
        }), t.jsx(O, {
          sx: {
            p: 1.5
          },
          children: t.jsx(ue, {
            label: e("hr.eventKind"),
            size: "small",
            value: a || me,
            options: le.map(j => ({
              value: j.value || me,
              label: j.label
            })),
            showEmptyOption: !1,
            onChange: j => {
              const de = String(j.target.value ?? "");
              h(de === me ? "" : de);
            },
            fullWidth: !0
          })
        })]
      }, "head"), ...T.map(s)];
    return d && y.length === 0 && R.push(t.jsx(Ve, {
      searching: !!(_ || a)
    }, "empty")), d || R.push(t.jsx(St, {}, "loading")), t.jsxs(t.Fragment, {
      children: [t.jsx(jt, {
        attachHead: !0,
        children: R
      }), t.jsx(tt, {
        style: n.canWrite ? void 0 : {
          display: "none"
        },
        color: "primary",
        "aria-label": e("hr.eventRegister"),
        onClick: U,
        sx: {
          position: "fixed",
          right: 24,
          bottom: "calc(24px + var(--taskbox-fab-lift, 0px))",
          zIndex: 40
        },
        children: t.jsx(_e, {})
      }), A]
    });
  }
  const q = [{
      id: "event_date",
      text: e("hr.eventDate"),
      width: 120,
      align: "center",
      sortable: !0,
      render: s => s.event_date
    }, {
      id: "kind",
      text: e("hr.certificateKind"),
      width: 88,
      align: "center",
      sortable: !0,
      filterOptions: le.filter(s => s.value !== ""),
      filterValues: a ? [a] : [],
      filterMultiple: !1,
      onFilterChange: s => h(s[0] ?? ""),
      render: s => t.jsx(Ce, {
        kind: s.kind
      })
    }, {
      id: "employee",
      text: Ot(e("hr.employee"), T.length),
      width: 160,
      sortable: !0,
      style: {
        fontSize: 15
      },
      render: s => Le(s.employee)
    }, {
      id: "change",
      text: e("hr.eventChange"),
      width: 400,
      sortable: !0,
      render: s => Z(s)
    }, {
      id: "memo",
      text: e("hr.eventMemo"),
      sortable: !0,
      render: s => s.memo
    }],
    V = t.jsx(O, {
      sx: {
        "& .MuiToggleButtonGroup-root": {
          height: 40,
          flexWrap: "nowrap"
        }
      },
      children: t.jsx(nt, {
        size: "medium",
        value: a,
        onChange: s => h(s ?? ""),
        options: le,
        sx: {
          "& .MuiToggleButtonGroup-grouped": {
            minWidth: 56,
            px: 1.25
          }
        }
      })
    }),
    $ = {
      right: t.jsx(rt, {
        value: l,
        onChange: f,
        withBottom: !0
      }),
      left: t.jsx(Ie, {
        style: n.canWrite ? void 0 : {
          display: "none"
        },
        variant: "contained",
        disableElevation: !0,
        startIcon: t.jsx(_e, {}),
        onClick: U,
        children: e("hr.eventRegister")
      }),
      filter: {
        stateId: "hr-event-filters",
        showChips: !1,
        groups: [{
          filters: [{
            type: "custom",
            name: "event-kind",
            node: V
          }]
        }]
      },
      showSearch: !0,
      searchValue: r,
      searchPlaceholder: e("hr.employeeSearchName"),
      onSearchChange: u,
      searchLoading: D,
      collapsible: !1,
      showCollapseButton: !1,
      showClearIcon: !1
    },
    pe = t.jsx(st, {
      onEscape: L.modals.form.close
    });
  return t.jsxs(t.Fragment, {
    children: [t.jsx(O, {
      sx: {
        position: "relative",
        height: "100%",
        minHeight: 0,
        display: "flex",
        flexDirection: "column"
      },
      children: t.jsx(ot, {
        storageKey: "hr-event-split",
        header: $,
        resizable: !0,
        rightPanel: w ? void 0 : pe,
        bottomPanel: w ? pe : void 0,
        bottomConfig: {
          visible: K,
          ratio: .55,
          minHeight: 320
        },
        bottomResizable: !0,
        rightConfig: {
          visible: C && K,
          ratio: .5,
          minWidth: 420
        },
        leftConfig: {
          minWidth: 360
        },
        tableProps: {
          ...o,
          scrollbars: Et,
          mobile: !0,
          variant: "notion",
          columns: ne ? q.filter(s => Rt.has(s.id)) : q,
          data: T,
          totalCount: T.length,
          ...N,
          getRowId: s => String(s.seq),
          rowHeight: Dt,
          onRowClick: i,
          selectedRowId: W ? String(W) : null,
          selectedRowSx: at,
          loading: D,
          emptyMessage: t.jsx(Ve, {
            searching: !!(_ || a)
          })
        }
      })
    }), A]
  });
}
export { go as default };