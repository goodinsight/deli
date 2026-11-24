import { r as u, j as t } from "./react-CjxcGQav.js";
import { a as ge, S as ye, b as be } from "./ShiftRequestPanels-C2AJ4xuX.js";
import { bO as K, bT as l, dv as ke, e as Se, c8 as _e, ak as we, z as se, bx as oe, bv as ue, D as xe, cI as je, c4 as Ce, aB as Ae, B as d, dy as ie, cm as ve, al as Te, bQ as z, cz as We, bJ as De, K as Pe, L as P, df as Oe, fo as qe, w as F } from "../js.d/main-Cm9wS5wt.js";
import { S as Re } from "./SaveOutlined-DgCkQRT8.js";
import { E as ze } from "./EdgeTabs-Ccbggjn6.js";
import { O as Le } from "./OptionToggleGroup-Cvm2wRyq.js";
import { a as ae } from "./attendanceMgmtApi-CC4DR0XR.js";
import { w as le, t as Z, n as B, s as R, b as de } from "./attendanceMgmt-B_e3bPBn.js";
import { P as Y, c as ce, E as Ee, f as Ie, W as Me, F as $e, O as me } from "./AttendanceParts-mHb1cK0h.js";
import { I as Fe } from "./InlineErrorAlert-D9ICJPt7.js";
import { b as Be } from "./MobileCardListLayout-D5_p2Xer.js";
import { u as Ve } from "./useSwipeNav-B6w6Iias.js";
import { T as Ne } from "./tableScrollbars-C9bhlJjO.js";
import { w as He } from "./i18nLabels-BNTLL7cu.js";
import { r as Ue } from "./rowNoColumn-B_tyJFB_.js";
import { w as Ge } from "./headerCount-4t1ZKu-L.js";
import { u as Ke } from "./useClientSort-CdwrAOWp.js";
import "./stylis-DdLD6a3t.js";
import "./attendanceBio-C-9dHF9O.js";
import "./mobileSearchOverlay-DYWcMOOb.js";
const fe = (f, n) => `${f}|${n}`;
function Ye(f) {
  const [n, T] = u.useState("week"),
    [c, r] = u.useState(() => le(Z(), 0)),
    W = u.useRef(!0),
    D = u.useRef(!1),
    [m, C] = u.useState(null),
    [O, A] = u.useState(!1),
    [Q, x] = u.useState(!1),
    [H, X] = u.useState({
      kind: "custom"
    }),
    [b, L] = u.useState(new Map()),
    h = n === "week" ? 7 : 28,
    q = u.useRef({
      from: c,
      days: h
    });
  q.current = {
    from: c,
    days: h
  };
  const _ = u.useCallback(async (e = !1) => {
    if (f) {
      e || A(!0);
      try {
        const s = W.current,
          o = await ae.schedule(s ? "" : q.current.from, q.current.days);
        s && (W.current = !1, o.from !== q.current.from && (D.current = !0, r(o.from))), C(o), e || L(new Map());
      } catch (s) {
        e || K(s instanceof Error ? s.message : l("hr.errLoadSchedule"));
      } finally {
        A(!1);
      }
    }
  }, [f]);
  u.useEffect(() => {
    if (D.current) {
      D.current = !1;
      return;
    }
    _();
  }, [_, c, h]), ke(["hr_shift", "hr_shift_template", "hr_work_assign", "hr_work_policy", "hr_attendance", "employee"], () => {
    _(!0);
  });
  const E = async e => {
      b.size && !(await se({
        title: l("hr.attAdminUnsavedTitle"),
        message: l("hr.attAdminUnsavedMessage", {
          count: b.size
        }),
        confirmText: l("hr.attAdminDiscardMove"),
        cancelText: l("hr.attAdminStay")
      })) || e();
    },
    ee = e => {
      E(() => r(s => B(s, e * h)));
    },
    U = () => {
      E(() => {
        r(le(Z(), m?.week_start_day ?? 0)), T("week");
      });
    },
    k = e => {
      E(() => T(e));
    },
    w = e => L(s => {
      const o = new Map(s);
      return o.set(fe(e.employee_seq, e.work_date), e), o;
    }),
    G = e => m?.templates.find(s => s.seq === e),
    I = Se({
      modalId: "hr-shift-cell-dialog"
    }),
    v = _e({
      stateId: "hr-shift-cell-ui",
      initialValues: {
        employee_seq: 0,
        employee_name: "",
        work_date: "",
        error: ""
      }
    }),
    V = we({
      formId: "hr-shift-cell-form",
      initialValues: {
        kind: "work",
        start_time: "",
        end_time: "",
        break_minutes: 60,
        memo: ""
      },
      onValidate: e => e.kind === "work" && (!e.start_time || !e.end_time) ? (v.setValue("error", l("hr.attSetErrTemplateTimes")), !1) : !0,
      onSubmit: async e => (w({
        employee_seq: Number(v.getValue("employee_seq")),
        work_date: String(v.getValue("work_date")),
        kind: e.kind,
        start_time: e.kind === "work" ? e.start_time : "",
        end_time: e.kind === "work" ? e.end_time : "",
        break_minutes: Number(e.break_minutes) || 0,
        memo: e.memo.trim()
      }), I.close(), !0)
    });
  return {
    span: n,
    changeSpan: k,
    from: c,
    days: h,
    data: m,
    loading: O,
    saving: Q,
    brush: H,
    setBrush: X,
    pending: b,
    step: ee,
    goToday: U,
    paint: (e, s, o, g = H) => {
      const i = g;
      if (i.kind === "template") {
        const y = G(i.seq);
        if (!y) return;
        w({
          employee_seq: e,
          work_date: o,
          kind: "work",
          template_seq: y.seq,
          start_time: y.start_time,
          end_time: y.end_time,
          break_minutes: y.break_minutes
        });
        return;
      }
      if (i.kind === "off") {
        w({
          employee_seq: e,
          work_date: o,
          kind: "off"
        });
        return;
      }
      if (i.kind === "clear") {
        w({
          employee_seq: e,
          work_date: o,
          kind: "clear"
        });
        return;
      }
      const p = b.get(fe(e, o)),
        S = m?.employees.find(y => y.employee.seq === e)?.cells.find(y => y.date === o),
        j = p ?? S?.shift ?? null;
      V.setFormValues({
        kind: j?.kind === "off" ? "off" : "work",
        start_time: j?.start_time || S?.planned.start || "",
        end_time: j?.end_time || S?.planned.end || "",
        break_minutes: j?.break_minutes ?? 60,
        memo: j?.memo ?? ""
      }), v.setValues({
        employee_seq: e,
        employee_name: s,
        work_date: o,
        error: ""
      }), I.open();
    },
    save: async () => {
      if (!b.size) return;
      const e = Z(),
        s = [...b.values()],
        o = s.filter(i => i.work_date < e).length,
        g = new Set(s.filter(i => m?.employees.find(p => p.employee.seq === i.employee_seq)?.cells.find(p => p.date === i.work_date)?.clocked).map(i => i.employee_seq)).size;
      if (o || g) {
        const i = [o ? l("hr.attAdminPastCells", {
          count: o
        }) : "", g ? l("hr.attAdminRecalc", {
          count: g
        }) : ""].filter(Boolean);
        if (!(await se({
          title: o ? l("hr.attAdminPastChangeTitle") : l("hr.attAdminRecordedChangeTitle"),
          message: i.join(`
`),
          confirmText: l("hr.save"),
          cancelText: l("hr.cancel")
        }))) return;
      }
      x(!0);
      try {
        const i = await ae.putSchedule([...b.values()]);
        oe({
          message: l("hr.attAdminCellsSaved", {
            count: i.changed
          }),
          delay: 800
        }), await _();
      } catch (i) {
        K(i instanceof Error ? i.message : l("hr.errSaveSchedule"));
      } finally {
        x(!1);
      }
    },
    discard: () => L(new Map()),
    copyPrevious: async () => {
      if (b.size) {
        K(l("hr.attAdminErrUnsaved"));
        return;
      }
      if (await se({
        title: l("hr.attAdminCopyTitle"),
        message: l("hr.attAdminCopyMessage", {
          from: B(c, -h),
          days: h
        }),
        confirmText: l("hr.attAdminCopy"),
        cancelText: l("hr.cancel")
      })) {
        x(!0);
        try {
          const s = await ae.copySchedule({
            source_from: B(c, -h),
            target_from: c,
            days: h,
            overwrite: !1
          });
          oe({
            message: s.changed ? l("hr.attAdminCellsCopied", {
              count: s.changed
            }) : l("hr.attAdminNothingToCopy"),
            delay: 900
          }), await _();
        } catch (s) {
          K(s instanceof Error ? s.message : l("hr.errCopySchedule"));
        } finally {
          x(!1);
        }
      }
    },
    cellDialog: {
      modal: I,
      ui: v,
      form: V,
      clear: () => {
        w({
          employee_seq: Number(v.getValue("employee_seq")),
          work_date: String(v.getValue("work_date")),
          kind: "clear"
        }), I.close();
      }
    },
    reload: _
  };
}
function Ze({
  controller: f
}) {
  const n = ue(),
    {
      modal: T,
      ui: c,
      form: r,
      clear: W
    } = f.cellDialog,
    D = xe(),
    m = r.useFormValue("kind"),
    C = String(c.useValue("employee_name") ?? ""),
    O = String(c.useValue("work_date") ?? ""),
    A = String(c.useValue("error") ?? "");
  return t.jsx(je, {
    open: T.isOpen,
    onClose: T.close,
    title: `${C} · ${R(O)}`,
    width: "480px",
    fullScreen: D,
    mobilePresentation: D ? "slide" : "dialog",
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
      left: t.jsx(z, {
        color: "inherit",
        onClick: W,
        children: n("hr.attAdminClearSchedule")
      }),
      right: t.jsx(z, {
        variant: "contained",
        onClick: () => {
          r.submit();
        },
        sx: {
          minWidth: 80
        },
        children: n("hr.attAdminPutInCell")
      })
    },
    sections: [{
      id: "shift-cell",
      title: n("hr.attSetStatWork"),
      children: t.jsxs(Ce, {
        spacing: 2,
        children: [t.jsx(Ae, {
          form: r,
          name: "kind",
          label: n("hr.attAdminKind"),
          options: [{
            value: "work",
            label: n("hr.attSetStatWork")
          }, {
            value: "off",
            label: n("hr.attSetDayStatusOff")
          }],
          showEmptyOption: !1,
          fullWidth: !0
        }), m !== "off" && t.jsxs(d, {
          sx: {
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 2
          },
          children: [t.jsx(ie, {
            form: r,
            name: "start_time",
            label: n("hr.attSetTimeStart"),
            fullWidth: !0
          }), t.jsx(ie, {
            form: r,
            name: "end_time",
            label: n("hr.attSetTimeEnd"),
            fullWidth: !0
          }), t.jsx(ve, {
            form: r,
            name: "break_minutes",
            label: n("hr.attSetBreak"),
            suffix: n("hr.attSetMinutesSuffix"),
            min: 0,
            thousandSeparator: !1,
            textAlign: "left",
            fullWidth: !0
          })]
        }), t.jsx(Te, {
          form: r,
          name: "memo",
          label: n("hr.note"),
          fullWidth: !0,
          slotProps: {
            htmlInput: {
              maxLength: 200
            }
          }
        }), A && t.jsx(Fe, {
          message: A
        })]
      })
    }]
  });
}
const pe = "#2563eb",
  J = .5,
  he = f => ({
    borderRadius: 1,
    bgcolor: f.faded ? f.today ? "#eff6ff" : "#f1f5f9" : `${f.color}1f`,
    borderTop: f.faded ? "3px solid transparent" : `3px solid ${f.color}`,
    outline: f.staged ? "2px dashed #f59e0b" : "none",
    outlineOffset: -2,
    opacity: f.past ? J : 1
  }),
  N = "\0off",
  Je = [{
    value: "week",
    get label() {
      return l("hr.attAdminTabWeek");
    }
  }, {
    value: "month",
    get label() {
      return l("hr.attAdminSpan4w");
    }
  }];
function yt(f = {}) {
  const n = ue(),
    T = We()?.seq ?? 0,
    c = xe(),
    r = Ye(T),
    W = ge(T, () => {
      r.reload();
    }),
    D = Ve(() => r.step(-1), () => r.step(1)),
    {
      data: m,
      pending: C
    } = r,
    O = Z(),
    {
      rows: A,
      tableSort: Q
    } = Ke(m?.employees ?? [], {
      employee: a => a.employee.name
    }),
    [x, H] = u.useState(null),
    [X, b] = u.useState(!1),
    L = (a, e, s, o) => {
      H({
        anchor: a,
        employeeSeq: e,
        name: s,
        date: o
      }), b(!0);
    },
    h = a => {
      x && (r.paint(x.employeeSeq, x.name, x.date, a), b(!1));
    },
    q = new Set(m?.holidays ?? []),
    _ = [];
  for (let a = 0; a < r.days; a += 1) _.push(B(r.from, a));
  const E = [];
  for (let a = 0; a < _.length; a += 7) E.push(_.slice(a, a + 7));
  const ee = a => m?.templates.find(e => e.seq === a)?.color || pe,
    U = t.jsxs(t.Fragment, {
      children: [t.jsx(z, {
        variant: "outlined",
        startIcon: t.jsx(De, {}),
        onClick: () => {
          r.copyPrevious();
        },
        disabled: r.saving,
        sx: c ? {
          flex: 1
        } : void 0,
        children: r.span === "week" ? n("hr.attAdminCopyLastWeek") : n("hr.attAdminCopyLast4w")
      }), C.size > 0 && t.jsx(z, {
        color: "inherit",
        onClick: r.discard,
        disabled: r.saving,
        children: n("hr.attAdminUndo")
      }), t.jsxs(z, {
        variant: "contained",
        disableElevation: !0,
        startIcon: r.saving ? t.jsx(Pe, {
          size: 18,
          color: "inherit"
        }) : t.jsx(Re, {}),
        onClick: () => {
          r.save();
        },
        disabled: !C.size || r.saving,
        sx: c ? {
          flex: 1
        } : void 0,
        children: [n("hr.save"), C.size ? ` (${C.size})` : ""]
      })]
    }),
    k = (a, e) => t.jsxs(d, {
      component: "span",
      sx: {
        display: "inline-flex",
        alignItems: "center",
        gap: .75,
        fontSize: 14,
        color: "text.secondary"
      },
      children: [t.jsx(d, {
        component: "span",
        sx: {
          width: 28,
          height: 18,
          borderRadius: .75,
          ...e
        }
      }), a]
    }),
    w = a => he({
      faded: !1,
      color: "#0f766e",
      staged: !1,
      past: !1,
      ...a
    }),
    G = c ? t.jsxs(d, {
      sx: {
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
        alignItems: "center"
      },
      children: [t.jsx(P, {
        sx: {
          fontSize: 14,
          fontWeight: 600
        },
        children: n("hr.attAdminTapToChange")
      }), k(n("hr.attAdminLegendDefault"), w({
        faded: !0
      })), k(n("hr.attAdminLegendAssigned"), w({})), k(n("hr.attSetDayStatusOff"), w({
        color: "#94a3b8"
      })), k(n("hr.attAdminLegendStaged"), w({
        staged: !0
      })), k(n("hr.attAdminLegendPast"), w({
        past: !0
      }))]
    }) : t.jsxs(d, {
      sx: {
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
        alignItems: "center"
      },
      children: [t.jsx(P, {
        sx: {
          fontSize: 14,
          fontWeight: 600
        },
        children: n("hr.attAdminTapToChange")
      }), k(n("hr.attAdminLegendDefault"), {
        border: "1px dashed #94a3b8"
      }), k(n("hr.attAdminLegendAssigned"), {
        bgcolor: "#0f766e1f",
        borderLeft: "3px solid #0f766e"
      }), k(n("hr.attSetDayStatusOff"), {
        bgcolor: "#94a3b81f",
        borderLeft: "3px solid #94a3b8"
      }), k(n("hr.attAdminLegendStaged"), {
        outline: "2px dashed #f59e0b",
        outlineOffset: -2
      }), k(n("hr.attAdminLegendPast"), {
        bgcolor: "#0f766e1f",
        borderLeft: "3px solid #0f766e",
        opacity: J
      })]
    }),
    I = t.jsx(Y, {
      children: t.jsxs(d, {
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: 1.5
        },
        children: [t.jsxs(d, {
          sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            columnGap: 1
          },
          children: [t.jsx(ce, {
            large: !0,
            label: `${R(r.from)} ~ ${R(B(r.from, r.days - 1))}`,
            onPrev: () => r.step(-1),
            onNext: () => r.step(1)
          }), t.jsx(z, {
            size: "small",
            onClick: r.goToday,
            sx: {
              minWidth: 0
            },
            children: n("hr.attAdminThisWeek")
          })]
        }), G, t.jsx(d, {
          sx: {
            display: "flex",
            gap: 1.5
          },
          children: U
        })]
      })
    }, "toolbar"),
    v = c ? I : t.jsxs(Y, {
      children: [t.jsxs(d, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          flexWrap: "wrap"
        },
        children: [t.jsx(P, {
          sx: {
            fontSize: 18,
            fontWeight: 700,
            mr: 1
          },
          children: n("hr.attPageSchedule")
        }), t.jsx(Le, {
          size: "medium",
          value: r.span,
          onChange: a => r.changeSpan(a ?? "week"),
          options: [{
            value: "week",
            label: n("hr.attAdminTabWeek")
          }, {
            value: "month",
            label: n("hr.attAdminSpan4w")
          }]
        }), t.jsx(ce, {
          label: `${R(r.from)} ~ ${R(B(r.from, r.days - 1))}`,
          onPrev: () => r.step(-1),
          onNext: () => r.step(1)
        }), t.jsx(z, {
          size: "small",
          onClick: r.goToday,
          children: n("hr.attAdminThisWeek")
        }), t.jsx(d, {
          sx: {
            flex: 1
          }
        }), U]
      }), t.jsx(d, {
        sx: {
          mt: 1.5
        },
        children: G
      })]
    }, "toolbar"),
    V = (a, e) => {
      const s = C.get(`${a}|${e.date}`),
        o = s ? s.kind === "clear" ? null : {
          kind: s.kind,
          start_time: s.start_time ?? "",
          end_time: s.end_time ?? "",
          template_seq: s.template_seq ?? 0
        } : e.shift,
        g = s?.kind === "clear";
      let i = "",
        p = "#cbd5e1",
        $ = !1,
        S = "",
        j = "";
      o?.kind === "off" ? (i = N, p = "#94a3b8") : o ? (i = `${o.start_time}~${o.end_time}`, [S, j] = [o.start_time, o.end_time], p = o.template_seq ? ee(o.template_seq) : "#0f766e") : ($ = !0, e.planned.workday && e.planned.start && (i = `${e.planned.start}~${e.planned.end}`, [S, j] = [e.planned.start, e.planned.end ?? ""]));
      const y = e.date < O && !s;
      return {
        staged: s,
        cleared: g,
        label: i,
        color: p,
        faded: $,
        start: S,
        end: j,
        past: y
      };
    },
    te = a => a.endsWith(":00") ? String(Number(a.slice(0, 2))) : a,
    ne = _.slice(0, 7).map(a => new Date(`${a}T00:00:00Z`).getUTCDay()),
    re = (m?.employees ?? []).map(a => t.jsx(Y, {
      children: t.jsxs(d, {
        ...D,
        children: [t.jsxs(d, {
          sx: {
            display: "flex",
            alignItems: "baseline",
            gap: 1,
            mb: 1
          },
          children: [t.jsx(P, {
            sx: {
              fontSize: 15,
              fontWeight: 600
            },
            children: a.employee.name
          }), t.jsx(P, {
            sx: {
              fontSize: 14,
              color: "text.secondary"
            },
            children: a.policy.name || de[a.policy.work_type]
          })]
        }), t.jsxs(d, {
          sx: {
            display: "grid",
            gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
            gap: .5
          },
          children: [ne.map(e => t.jsx(P, {
            sx: {
              fontSize: 14,
              textAlign: "center",
              color: e === 0 ? "#dc2626" : e === 6 ? "#2563eb" : "text.secondary"
            },
            children: He(e)
          }, e)), a.cells.map(e => {
            const s = V(a.employee.seq, e),
              o = new Date(`${e.date}T00:00:00Z`).getUTCDay(),
              g = o === 0 || q.has(e.date) ? "#dc2626" : o === 6 ? "#2563eb" : "text.primary";
            return t.jsxs(d, {
              role: "button",
              tabIndex: 0,
              onClick: i => L(i.currentTarget, a.employee.seq, a.employee.name, e.date),
              sx: {
                minWidth: 0,
                minHeight: 68,
                py: .5,
                textAlign: "center",
                cursor: "pointer",
                fontSize: 14,
                lineHeight: 1.3,
                ...he({
                  faded: s.faded,
                  color: s.color,
                  staged: !!s.staged,
                  past: s.past,
                  today: e.date === O
                })
              },
              children: [t.jsx(d, {
                sx: {
                  fontWeight: 700,
                  color: g
                },
                children: Number(e.date.slice(8, 10))
              }), t.jsx(d, {
                sx: {
                  color: s.label === N && !s.cleared ? me : s.faded ? "#475569" : "text.primary",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: s.cleared ? n("hr.attAdminCleared") : s.label === N ? n("hr.attSetDayStatusOff") : s.start ? te(s.start) : " "
              }), s.end && !s.cleared && t.jsx(d, {
                sx: {
                  color: s.faded ? "#475569" : "text.secondary",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: te(s.end)
              })]
            }, e.date);
          })]
        })]
      })
    }, `row-${a.employee.seq}`)),
    M = [v];
  return W.items.length && M.push(t.jsx(be, {
    controller: W
  }, "shift-requests")), m && c && m.employees.length > 0 ? M.push(...re) : m && M.push(t.jsx(Y, {
    fill: !0,
    flush: !c,
    children: m.employees.length === 0 ? t.jsx(Ee, {
      text: n("hr.attAdminNoTargets")
    }) : t.jsx(d, {
      sx: {
        display: "flex",
        flexDirection: "column",
        gap: 3
      },
      children: E.map(a => t.jsx(Ie, {
        children: t.jsx(Oe, {
          scrollbars: Ne,
          variant: "notion",
          autoHeight: !0,
          showPaper: !1,
          framed: !1,
          scrollbarGutter: !c,
          rowHeightMode: "auto",
          data: A,
          totalCount: A.length,
          ...Q,
          getRowId: e => e.employee.seq,
          columns: [Ue({
            pinned: !0
          }), {
            id: "employee",
            text: Ge(n("hr.employee"), A.length),
            width: 160,
            pinned: "left",
            sortable: !0,
            render: e => t.jsxs(t.Fragment, {
              children: [t.jsx(P, {
                sx: {
                  fontSize: 15,
                  fontWeight: 600,
                  whiteSpace: "nowrap"
                },
                children: e.employee.name
              }), t.jsx(P, {
                sx: {
                  fontSize: 14,
                  color: "text.secondary",
                  whiteSpace: "nowrap"
                },
                children: e.policy.name || de[e.policy.work_type]
              })]
            })
          }, ...a.map(e => ({
            id: e,
            text: t.jsx(Me, {
              date: e,
              holiday: q.has(e),
              label: R(e),
              opacity: e < O ? J : void 0
            }),
            align: "center",
            cellPadding: "4px",
            onCellClick: (s, o, g) => L(g.currentTarget, s.employee.seq, s.employee.name, e),
            render: s => {
              const o = s.cells.find(y => y.date === e);
              if (!o) return null;
              const {
                staged: g,
                cleared: i,
                label: p,
                color: $,
                faded: S,
                past: j
              } = V(s.employee.seq, o);
              return t.jsx(d, {
                sx: {
                  minHeight: 40,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxSizing: "border-box",
                  borderRadius: 1,
                  px: .75,
                  py: .5,
                  fontSize: 14,
                  lineHeight: 1.35,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  color: p === N && !i ? me : S ? "#475569" : "text.primary",
                  bgcolor: S ? "transparent" : `${$}1f`,
                  borderLeft: S ? "none" : `3px solid ${$}`,
                  border: S && p ? "1px dashed #94a3b8" : void 0,
                  outline: g ? "2px dashed #f59e0b" : "none",
                  opacity: j ? J : 1,
                  "&:hover": {
                    outline: "2px solid #93c5fd"
                  }
                },
                children: i ? n("hr.attAdminToPolicy") : p === N ? n("hr.attSetDayStatusOff") : p || " "
              });
            }
          }))]
        })
      }, a[0]))
    })
  }, "grid")), t.jsxs(t.Fragment, {
    children: [c ? t.jsxs(t.Fragment, {
      children: [t.jsx(ze, {
        value: r.span,
        options: Je,
        onChange: r.changeSpan,
        ariaLabel: n("hr.attAdminSpan")
      }), t.jsx(Be, {
        attachHead: !0,
        children: M
      })]
    }) : t.jsx($e, {
      children: M
    }), t.jsx(Ze, {
      controller: r
    }), t.jsxs(qe, {
      anchorEl: x?.anchor ?? null,
      open: X,
      onClose: () => b(!1),
      children: [x && t.jsxs(F, {
        disabled: !0,
        sx: {
          fontSize: 14,
          fontWeight: 600,
          color: "primary.main",
          "&.Mui-disabled": {
            opacity: 1
          }
        },
        children: [x.name, " · ", R(x.date)]
      }), (m?.templates ?? []).map(a => t.jsxs(F, {
        onClick: () => h({
          kind: "template",
          seq: a.seq
        }),
        sx: {
          gap: 1
        },
        children: [t.jsx(d, {
          component: "span",
          sx: {
            width: 10,
            height: 10,
            borderRadius: "50%",
            bgcolor: a.color || pe
          }
        }), a.short_label || a.name, " ", a.start_time, "~", a.end_time]
      }, a.seq)), t.jsx(F, {
        onClick: () => h({
          kind: "custom"
        }),
        children: n("hr.attAdminCustomTime")
      }), t.jsx(F, {
        onClick: () => h({
          kind: "off"
        }),
        children: n("hr.attSetDayStatusOff")
      }), t.jsx(F, {
        onClick: () => h({
          kind: "clear"
        }),
        children: n("hr.attAdminResetDefault")
      }), !m?.templates.length && t.jsx(F, {
        disabled: !0,
        sx: {
          fontSize: 14
        },
        children: n("hr.attAdminTemplatesInSettings")
      })]
    }), t.jsx(ye, {
      controller: W
    })]
  });
}
export { yt as default };