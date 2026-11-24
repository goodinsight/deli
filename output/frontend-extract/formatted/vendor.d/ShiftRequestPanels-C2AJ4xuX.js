import { r as m, j as s } from "./react-CjxcGQav.js";
import { e as V, c8 as D, dv as z, ak as W, bx as _, bT as l, bO as R, bv as v, B as j, L as x, bQ as g, D as L, cn as N, cI as O, K as U, cW as G } from "../js.d/main-Cm9wS5wt.js";
import { m as q, a as T } from "./attendanceMgmtApi-CC4DR0XR.js";
import { t as C, s as b, R as $, h as F } from "./attendanceMgmt-B_e3bPBn.js";
import { P as I, C as K } from "./AttendanceParts-mHb1cK0h.js";
const E = {
    work_date: "",
    kind: "work",
    template_seq: 0,
    start_time: "",
    end_time: "",
    break_minutes: 60,
    reason: ""
  },
  w = (e, n) => e instanceof Error ? e.message : n;
function ee(e) {
  const [n, r] = m.useState([]),
    [c, a] = m.useState([]),
    f = V({
      modalId: "hr-shift-request-dialog"
    }),
    d = D({
      stateId: "hr-shift-request-ui",
      initialValues: {
        saving: !1,
        error: ""
      }
    }),
    u = m.useCallback(async () => {
      if (e) try {
        const t = await q.shiftRequests();
        r(t.items ?? []), a(t.templates ?? []);
      } catch {}
    }, [e]);
  m.useEffect(() => {
    u();
  }, [u]), z(["hr_shift_request", "hr_shift_template"], () => {
    u();
  }, {
    enabled: e
  });
  const p = W({
    formId: "hr-shift-request-form",
    initialValues: E,
    onValidate: t => {
      const i = h => (d.setValue("error", h), !1);
      if (!t.work_date) return i(l("hr.attAdminErrShiftDate"));
      if (t.work_date < C()) return i(l("hr.attAdminErrShiftPast"));
      const o = h => /^\d{2}:\d{2}$/.test(h);
      return t.kind === "work" && (!o(t.start_time) || !o(t.end_time)) ? i(l("hr.attAdminErrShiftTimes")) : t.reason.replace(/[^\p{L}\p{N}]/gu, "").length < 2 ? i(l("hr.attAdminErrReasonShort")) : !0;
    },
    onSubmit: async t => {
      d.setValues({
        saving: !0,
        error: ""
      });
      try {
        return await q.createShiftRequest({
          work_date: t.work_date,
          kind: t.kind,
          start_time: t.kind === "work" ? t.start_time : "",
          end_time: t.kind === "work" ? t.end_time : "",
          break_minutes: Number(t.break_minutes) || 0,
          template_seq: t.kind === "work" && Number(t.template_seq) || 0,
          reason: t.reason.trim()
        }), _({
          message: l("hr.attAdminShiftRequested"),
          delay: 1200
        }), f.close(), d.setValue("saving", !1), u(), !0;
      } catch (i) {
        return d.setValues({
          saving: !1,
          error: w(i, l("hr.errSendShiftRequest"))
        }), !1;
      }
    }
  });
  return {
    items: n,
    templates: c,
    modal: f,
    ui: d,
    form: p,
    open: (t = "") => {
      p.setFormValues({
        ...E,
        work_date: t && t >= C() ? t : ""
      }), d.setValues({
        saving: !1,
        error: ""
      }), f.open();
    },
    pickTemplate: t => {
      const i = c.find(o => o.seq === t);
      p.setFormValue("template_seq", t), i && (p.setFormValue("start_time", i.start_time), p.setFormValue("end_time", i.end_time), p.setFormValue("break_minutes", i.break_minutes));
    },
    cancel: async t => {
      try {
        await q.cancelShiftRequest(t), _({
          message: l("hr.myAttRequestCancelled"),
          delay: 700
        }), u();
      } catch (i) {
        R(w(i, l("hr.errCancelRequest")));
      }
    },
    reload: u
  };
}
function te(e, n) {
  const [r, c] = m.useState([]),
    [a, f] = m.useState(0),
    d = V({
      modalId: "hr-shift-request-reject-dialog"
    }),
    [u, p] = m.useState(null),
    S = m.useCallback(async () => {
      if (e) try {
        c((await T.shiftRequests()).items ?? []);
      } catch {}
    }, [e]);
  m.useEffect(() => {
    S();
  }, [S]), z(["hr_shift_request"], () => {
    S();
  });
  const y = async (o, h, M = "") => {
      f(o.seq);
      try {
        return await T.reviewShiftRequest(o.seq, h, M), _({
          message: h === "approve" ? l("hr.attAdminShiftApproved") : l("hr.rejectedDone"),
          delay: 900
        }), await S(), h === "approve" && n(), !0;
      } catch (P) {
        return R(w(P, l("hr.errProcessRequest"))), !1;
      } finally {
        f(0);
      }
    },
    k = W({
      formId: "hr-shift-request-reject-form",
      initialValues: {
        reason: ""
      },
      onValidate: o => o.reason.trim() ? !0 : (R(l("hr.errRejectReason")), !1),
      onSubmit: async o => {
        if (!u) return !1;
        const h = await y(u, "reject", o.reason.trim());
        return h && d.close(), h;
      }
    });
  return {
    items: r,
    busySeq: a,
    approve: o => {
      y(o, "approve");
    },
    openReject: o => {
      p(o), k.setFormValues({
        reason: ""
      }), d.open();
    },
    rejecting: u,
    rejectForm: k,
    rejectModal: d,
    reload: S
  };
}
const Q = {
    approved: {
      color: "#047857",
      bg: "#d1fae5"
    },
    rejected: {
      color: "#b91c1c",
      bg: "#fee2e2"
    },
    pending: {
      color: "#b45309",
      bg: "#fef3c7"
    }
  },
  B = {
    py: 1,
    borderBottom: "1px solid #f1f5f9",
    display: "flex",
    alignItems: "center",
    gap: 1,
    flexWrap: "wrap",
    "&:first-of-type": {
      pt: 0
    },
    "&:last-of-type": {
      pb: 0,
      borderBottom: "none"
    }
  },
  A = e => `${e.before_text || "–"} → ${F(e)}`;
function se({
  controller: e
}) {
  const n = v();
  return e.items.length ? s.jsx(I, {
    title: n("hr.attAdminMyShiftRequests"),
    children: e.items.slice(0, 10).map(r => s.jsxs(j, {
      sx: B,
      children: [s.jsx(x, {
        sx: {
          fontSize: 15,
          fontWeight: 600,
          minWidth: 72
        },
        children: b(r.work_date)
      }), s.jsx(x, {
        sx: {
          fontSize: 15
        },
        children: A(r)
      }), s.jsx(K, {
        label: $[r.status],
        tone: Q[r.status]
      }), r.status === "rejected" && r.reject_reason && s.jsx(x, {
        sx: {
          fontSize: 14,
          color: "text.secondary",
          wordBreak: "keep-all"
        },
        children: n("hr.rejectReasonLine", {
          reason: r.reject_reason
        })
      }), s.jsx(j, {
        sx: {
          flex: 1
        }
      }), r.status === "pending" && s.jsx(g, {
        size: "small",
        color: "inherit",
        onClick: () => {
          e.cancel(r.seq);
        },
        sx: {
          fontSize: 14
        },
        children: n("hr.cancel")
      })]
    }, r.seq))
  }) : null;
}
function re({
  controller: e
}) {
  const n = v(),
    [r, c] = m.useState(null);
  return e.items.length ? s.jsxs(s.Fragment, {
    children: [s.jsx(I, {
      title: n("hr.attAdminShiftRequestsN", {
        count: e.items.length
      }),
      children: e.items.map(a => s.jsxs(j, {
        sx: B,
        children: [s.jsx(x, {
          sx: {
            fontSize: 15,
            fontWeight: 600,
            minWidth: 72
          },
          children: a.employee?.name ?? n("hr.employee")
        }), s.jsx(x, {
          sx: {
            fontSize: 15,
            minWidth: 72
          },
          children: b(a.work_date)
        }), s.jsx(x, {
          sx: {
            fontSize: 15
          },
          children: A(a)
        }), s.jsx(x, {
          sx: {
            fontSize: 14,
            color: "text.secondary",
            wordBreak: "keep-all",
            flex: "1 1 200px",
            minWidth: 0
          },
          children: a.reason
        }), s.jsxs(j, {
          sx: {
            display: "flex",
            gap: 1,
            flexShrink: 0
          },
          children: [s.jsx(g, {
            size: "small",
            variant: "outlined",
            color: "inherit",
            disabled: e.busySeq === a.seq,
            onClick: () => e.openReject(a),
            sx: {
              fontSize: 14
            },
            children: n("hr.attSetRequestStatusRejected")
          }), s.jsx(g, {
            size: "small",
            variant: "contained",
            disableElevation: !0,
            disabled: e.busySeq === a.seq,
            onClick: f => c({
              anchor: f.currentTarget,
              item: a
            }),
            sx: {
              fontSize: 14,
              minWidth: 64
            },
            children: e.busySeq === a.seq ? s.jsx(U, {
              size: 16,
              color: "inherit"
            }) : n("hr.myAttApprove")
          })]
        })]
      }, a.seq))
    }), s.jsx(G, {
      open: !!r,
      anchorEl: r?.anchor ?? null,
      title: r ? n("hr.attAdminShiftApproveConfirm", {
        name: r.item.employee?.name ?? n("hr.employee"),
        date: b(r.item.work_date),
        wish: F(r.item)
      }) : "",
      confirmText: n("hr.myAttApprove"),
      cancelText: n("hr.cancel"),
      placement: "top",
      minWidth: 280,
      onCancel: () => c(null),
      onConfirm: () => {
        const a = r?.item;
        c(null), a && e.approve(a);
      }
    })]
  }) : null;
}
function ne({
  controller: e
}) {
  const n = v(),
    r = L(),
    c = [{
      id: "shift-request-reject",
      showTitle: !1,
      children: s.jsxs(j, {
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: 2
        },
        children: [e.rejecting && s.jsxs(x, {
          sx: {
            fontSize: 15,
            wordBreak: "keep-all"
          },
          children: [e.rejecting.employee?.name ?? n("hr.employee"), " · ", b(e.rejecting.work_date), " · ", A(e.rejecting)]
        }), s.jsx(N, {
          form: e.rejectForm,
          name: "reason",
          label: n("hr.rejectReason"),
          minRows: 3,
          spellCheck: !1,
          slotProps: {
            htmlInput: {
              maxLength: 300
            }
          },
          fullWidth: !0
        })]
      })
    }];
  return s.jsx(O, {
    open: e.rejectModal.isOpen,
    onClose: e.rejectModal.close,
    title: n("hr.attAdminShiftRejectTitle"),
    width: "480px",
    fullScreen: r,
    mobilePresentation: r ? "slide" : "dialog",
    draggable: !0,
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
      right: s.jsx(g, {
        variant: "contained",
        color: "error",
        onClick: () => {
          e.rejectForm.submit();
        },
        disabled: e.busySeq > 0,
        sx: {
          minWidth: 96
        },
        children: n("hr.attSetRequestStatusRejected")
      })
    },
    sections: c
  });
}
export { se as M, ne as S, te as a, re as b, ee as u };