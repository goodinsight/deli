import { r as x, j as e } from "./react-CjxcGQav.js";
import { e as I, c8 as N, ak as B, dv as _, bx as R, bT as o, bO as C, z as O, bv as w, B as u, L as l, bQ as v, K as z, D as L, c4 as G, ca as $, cn as P, cI as W, cW as U } from "../js.d/main-Cm9wS5wt.js";
import { d as m, b as X, a as T, m as k } from "./attendanceMgmtApi-CC4DR0XR.js";
import { I as K } from "./InlineErrorAlert-D9ICJPt7.js";
import { P as E, C as y, N as Q } from "./AttendanceParts-mHb1cK0h.js";
const A = (s, r) => s instanceof Error ? s.message : r;
function se(s) {
  const [r, t] = x.useState(!1),
    n = I({
      modalId: "hr-att-device-change-dialog"
    }),
    i = N({
      stateId: "hr-att-device-change-ui",
      initialValues: {
        saving: !1,
        error: ""
      }
    }),
    a = m(X().label),
    c = async () => {
      if (await O({
        title: o("hr.myAttDeviceRegisterTitle"),
        message: o("hr.myAttDeviceRegisterMessage", {
          device: a
        }),
        confirmText: o("hr.myAttRegister"),
        cancelText: o("hr.cancel")
      })) {
        t(!0);
        try {
          await k.registerDevice(), R({
            message: o("hr.myAttDeviceRegistered"),
            delay: 900
          }), await s();
        } catch (D) {
          C(A(D, o("hr.errRegisterDevice")));
        } finally {
          t(!1);
        }
      }
    },
    j = B({
      formId: "hr-att-device-change-form",
      initialValues: {
        reason: ""
      },
      onValidate: d => d.reason.replace(/[^\p{L}\p{N}]/gu, "").length < 2 ? (i.setValue("error", o("hr.myAttErrDeviceReason")), !1) : !0,
      onSubmit: async d => {
        i.setValues({
          saving: !0,
          error: ""
        });
        try {
          return await k.registerDevice(d.reason.trim()), R({
            message: o("hr.myAttDeviceChangeRequested"),
            delay: 1200
          }), n.close(), i.setValue("saving", !1), await s(), !0;
        } catch (D) {
          return i.setValues({
            saving: !1,
            error: A(D, o("hr.myAttErrDeviceChange"))
          }), !1;
        }
      }
    });
  return {
    busy: r,
    thisLabel: a,
    register: c,
    form: j,
    ui: i,
    modal: n,
    openChange: () => {
      j.setFormValues({
        reason: ""
      }), i.setValues({
        saving: !1,
        error: ""
      }), n.open();
    },
    cancelRequest: async () => {
      t(!0);
      try {
        await k.cancelDeviceRequest(), R({
          message: o("hr.myAttRequestCancelled"),
          delay: 700
        }), await s();
      } catch (d) {
        C(A(d, o("hr.errCancelRequest")));
      } finally {
        t(!1);
      }
    }
  };
}
function re(s) {
  const [r, t] = x.useState([]),
    [n, i] = x.useState(0),
    a = I({
      modalId: "hr-att-device-reject-dialog"
    }),
    [c, j] = x.useState(null),
    f = x.useCallback(async () => {
      if (s) try {
        t((await T.deviceRequests()).items ?? []);
      } catch {}
    }, [s]);
  x.useEffect(() => {
    f();
  }, [f]), _(["hr_att_device"], () => {
    f();
  });
  const q = async (h, g, V = "") => {
      i(h.seq);
      try {
        return await T.reviewDeviceRequest(h.seq, g, V), R({
          message: g === "approve" ? o("hr.myAttDeviceApproved") : o("hr.rejectedDone"),
          delay: 900
        }), await f(), !0;
      } catch (F) {
        return C(A(F, o("hr.errProcessRequest"))), !1;
      } finally {
        i(0);
      }
    },
    d = B({
      formId: "hr-att-device-reject-form",
      initialValues: {
        reason: ""
      },
      onValidate: h => h.reason.trim() ? !0 : (C(o("hr.errRejectReason")), !1),
      onSubmit: async h => {
        if (!c) return !1;
        const g = await q(c, "reject", h.reason.trim());
        return g && a.close(), g;
      }
    });
  return {
    items: r,
    busySeq: n,
    approve: h => {
      q(h, "approve");
    },
    openReject: h => {
      j(h), d.setFormValues({
        reason: ""
      }), a.open();
    },
    rejecting: c,
    rejectForm: d,
    rejectModal: a,
    reload: f
  };
}
const b = {
    ok: {
      color: "#047857",
      bg: "#d1fae5"
    },
    wait: {
      color: "#b45309",
      bg: "#fef3c7"
    },
    no: {
      color: "#b91c1c",
      bg: "#fee2e2"
    }
  },
  S = {
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
  p = {
    fontSize: 14,
    color: "text.secondary",
    wordBreak: "keep-all",
    flexBasis: "100%",
    minWidth: 0
  };
function ie({
  status: s,
  controller: r
}) {
  const t = w(),
    {
      state: n,
      active: i,
      pending: a,
      rejected: c
    } = s;
  return e.jsxs(E, {
    title: t("hr.myAttDeviceTitle"),
    children: [a ? e.jsxs(u, {
      sx: {
        ...S,
        flexDirection: "column",
        alignItems: "flex-start",
        gap: .75
      },
      children: [e.jsxs(u, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 1,
          flexWrap: "wrap"
        },
        children: [e.jsx(l, {
          sx: {
            fontSize: 15,
            fontWeight: 600
          },
          children: t("hr.myAttDeviceChangePending")
        }), e.jsx(y, {
          label: t("hr.myAttAwaitingApproval"),
          tone: b.wait
        })]
      }), e.jsx(l, {
        sx: {
          fontSize: 15
        },
        children: t("hr.myAttDeviceRegisteredLine", {
          device: i?.label ? m(i.label) : "–",
          date: i?.created_time ? i.created_time.slice(0, 10) : "–"
        })
      }), e.jsxs(l, {
        sx: {
          fontSize: 15
        },
        children: [t("hr.myAttDeviceRequestedLine", {
          device: m(a.label)
        }), a.this ? ` (${t("hr.myAttThisDevice")})` : ""]
      }), i && i.label === a.label ? e.jsx(l, {
        sx: p,
        children: t("hr.myAttDeviceSameModelNote")
      }) : null, a.reason ? e.jsx(l, {
        sx: p,
        children: t("hr.myAttDeviceReasonLine", {
          reason: a.reason
        })
      }) : null, e.jsx(l, {
        sx: p,
        children: t("hr.myAttDevicePendingNote")
      }), e.jsx(v, {
        size: "small",
        variant: "outlined",
        color: "inherit",
        disabled: r.busy,
        onClick: () => {
          r.cancelRequest();
        },
        sx: {
          fontSize: 14,
          mt: .5
        },
        children: t("hr.myAttDeviceCancelRequest")
      })]
    }) : e.jsx(u, {
      sx: S,
      children: n === "none" ? e.jsxs(e.Fragment, {
        children: [e.jsx(l, {
          sx: {
            fontSize: 15,
            fontWeight: 600
          },
          children: t("hr.myAttDeviceNone")
        }), e.jsx(y, {
          label: t("hr.myAttDeviceNeeded"),
          tone: b.no
        }), e.jsx(l, {
          sx: p,
          children: t("hr.myAttDeviceOneOnly")
        }), e.jsx(v, {
          size: "small",
          variant: "contained",
          disableElevation: !0,
          disabled: r.busy,
          onClick: () => {
            r.register();
          },
          sx: {
            fontSize: 14,
            flexShrink: 0
          },
          children: r.busy ? e.jsx(z, {
            size: 16,
            color: "inherit"
          }) : t("hr.myAttRegisterThis")
        })]
      }) : e.jsxs(e.Fragment, {
        children: [e.jsx(l, {
          sx: {
            fontSize: 15,
            fontWeight: 600
          },
          children: i?.label ? m(i.label) : ""
        }), n === "this" ? e.jsx(y, {
          label: t("hr.myAttThisDevice"),
          tone: b.ok
        }) : e.jsx(y, {
          label: t("hr.myAttOtherDevice"),
          tone: b.no
        }), n === "other" && e.jsx(l, {
          sx: p,
          children: t("hr.myAttDeviceCannotRecord", {
            device: r.thisLabel
          })
        }), e.jsx(u, {
          sx: {
            flex: 1
          }
        }), n === "other" && !a && e.jsx(v, {
          size: "small",
          variant: "outlined",
          disabled: r.busy,
          onClick: r.openChange,
          sx: {
            fontSize: 14,
            flexShrink: 0
          },
          children: t("hr.myAttRequestThisDevice")
        })]
      })
    }), !a && c && e.jsxs(u, {
      sx: S,
      children: [e.jsx(l, {
        sx: {
          fontSize: 15
        },
        children: t("hr.myAttDeviceChangeTo", {
          device: m(c.label)
        })
      }), e.jsx(y, {
        label: t("hr.attSetRequestStatusRejected"),
        tone: b.no
      }), c.reject_reason && e.jsx(l, {
        sx: {
          fontSize: 14,
          color: "text.secondary",
          wordBreak: "keep-all"
        },
        children: t("hr.rejectReasonLine", {
          reason: c.reject_reason
        })
      })]
    })]
  });
}
function ae({
  status: s,
  controller: r
}) {
  const t = w(),
    n = L(),
    i = !!r.ui.useValue("saving"),
    a = String(r.ui.useValue("error") ?? ""),
    c = [{
      id: "att-device-change",
      showTitle: !1,
      children: e.jsxs(G, {
        spacing: $,
        children: [e.jsxs(l, {
          sx: {
            fontSize: 15,
            wordBreak: "keep-all"
          },
          children: [s?.active?.label ? m(s.active.label) : t("hr.myAttRegisteredDevice"), " → ", e.jsx("strong", {
            children: r.thisLabel
          })]
        }), e.jsx(P, {
          form: r.form,
          name: "reason",
          label: t("hr.myAttDeviceReasonLabel"),
          minRows: 3,
          spellCheck: !1,
          disabled: i,
          slotProps: {
            htmlInput: {
              maxLength: 300
            }
          },
          fullWidth: !0
        }), e.jsx(Q, {
          items: [t("hr.myAttDeviceNoteApprove"), t("hr.myAttDeviceNoteUntil")]
        }), a && e.jsx(K, {
          message: a
        })]
      })
    }];
  return e.jsx(W, {
    open: r.modal.isOpen,
    onClose: r.modal.close,
    title: t("hr.myAttDeviceChangeTitle"),
    width: "480px",
    fullScreen: n,
    mobilePresentation: n ? "slide" : "dialog",
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
      right: e.jsx(v, {
        variant: "contained",
        onClick: () => {
          r.form.submit();
        },
        disabled: i,
        sx: {
          minWidth: 96
        },
        children: i ? e.jsx(z, {
          size: 20,
          color: "inherit"
        }) : t("hr.myAttRequest")
      })
    },
    sections: c
  });
}
const M = s => `${s.current_label ? m(s.current_label) : "–"} → ${m(s.label)}`;
function ne({
  controller: s
}) {
  const r = w(),
    [t, n] = x.useState(null);
  return s.items.length ? e.jsxs(e.Fragment, {
    children: [e.jsx(E, {
      title: r("hr.myAttDeviceRequestsN", {
        count: s.items.length
      }),
      children: s.items.map(i => e.jsxs(u, {
        sx: S,
        children: [e.jsx(l, {
          sx: {
            fontSize: 15,
            fontWeight: 600,
            minWidth: 72
          },
          children: i.employee?.name ?? r("hr.employee")
        }), e.jsx(l, {
          sx: {
            fontSize: 15
          },
          children: M(i)
        }), e.jsx(l, {
          sx: p,
          children: i.reason
        }), e.jsxs(u, {
          sx: {
            display: "flex",
            gap: 1,
            flexShrink: 0
          },
          children: [e.jsx(v, {
            size: "small",
            variant: "outlined",
            color: "inherit",
            disabled: s.busySeq === i.seq,
            onClick: () => s.openReject(i),
            sx: {
              fontSize: 14
            },
            children: r("hr.attSetRequestStatusRejected")
          }), e.jsx(v, {
            size: "small",
            variant: "contained",
            disableElevation: !0,
            disabled: s.busySeq === i.seq,
            onClick: a => n({
              anchor: a.currentTarget,
              item: i
            }),
            sx: {
              fontSize: 14,
              minWidth: 64
            },
            children: s.busySeq === i.seq ? e.jsx(z, {
              size: 16,
              color: "inherit"
            }) : r("hr.myAttApprove")
          })]
        })]
      }, i.seq))
    }), e.jsx(U, {
      open: !!t,
      anchorEl: t?.anchor ?? null,
      title: t ? r("hr.myAttDeviceApproveConfirm", {
        name: t.item.employee?.name ?? r("hr.employee"),
        device: m(t.item.label)
      }) : "",
      confirmText: r("hr.myAttApprove"),
      cancelText: r("hr.cancel"),
      placement: "top",
      minWidth: 280,
      onCancel: () => n(null),
      onConfirm: () => {
        const i = t?.item;
        n(null), i && s.approve(i);
      }
    })]
  }) : null;
}
function le({
  controller: s
}) {
  const r = w(),
    t = L(),
    n = [{
      id: "att-device-reject",
      showTitle: !1,
      children: e.jsxs(u, {
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: 2
        },
        children: [s.rejecting && e.jsxs(l, {
          sx: {
            fontSize: 15,
            wordBreak: "keep-all"
          },
          children: [s.rejecting.employee?.name ?? r("hr.employee"), " · ", M(s.rejecting)]
        }), e.jsx(P, {
          form: s.rejectForm,
          name: "reason",
          label: r("hr.rejectReason"),
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
  return e.jsx(W, {
    open: s.rejectModal.isOpen,
    onClose: s.rejectModal.close,
    title: r("hr.myAttDeviceRejectTitle"),
    width: "480px",
    fullScreen: t,
    mobilePresentation: t ? "slide" : "dialog",
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
      right: e.jsx(v, {
        variant: "contained",
        color: "error",
        onClick: () => {
          s.rejectForm.submit();
        },
        disabled: s.busySeq > 0,
        sx: {
          minWidth: 96
        },
        children: r("hr.attSetRequestStatusRejected")
      })
    },
    sections: n
  });
}
export { ae as D, ie as M, re as a, ne as b, le as c, se as u };