const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f || (m.f = ["vendor.d/index-DtGTpLHo.js", "vendor.d/react-CjxcGQav.js", "js.d/main-Cm9wS5wt.js", "vendor.d/stylis-DdLD6a3t.js", "css.d/main-BARtwNPI.css", "vendor.d/ReferenceList-mhfbKusm.js", "vendor.d/FileUploadBox-crZW1mG0.js", "vendor.d/bootstrapController-BMV_i07c.js", "vendor.d/profileEcho-q2FaD_03.js", "vendor.d/teamMembers-0yRsmqL6.js", "vendor.d/pendingRecordings-DpKJ8Y2R.js", "vendor.d/meetingsApi-CCkjq69B.js", "vendor.d/orgTree-Dh5HFjBo.js", "vendor.d/mxApi-R6g9QtQq.js", "vendor.d/aliasStore-DiN6Kp-5.js", "vendor.d/profileApi-Btafs-pM.js", "vendor.d/AccountAvatar-DtrhoS_d.js", "vendor.d/Person-DnoEHesw.js", "vendor.d/resolveAssetPreviewSrc-CLlbOCzq.js", "vendor.d/date_utils-CYURFdnX.js", "vendor.d/FileViewer-D5PyYcLh.js", "vendor.d/RotateRight-DbtMfjGZ.js", "vendor.d/tiny-invariant-CopsF_GD.js", "vendor.d/Snackbar-DxIDGM8-.js", "vendor.d/uploadGuard-BK1B6cyC.js", "vendor.d/printDocChrome-BMZLbM8A.js", "css.d/printDocChrome-BUGcyOM6.css", "vendor.d/index.esm-BLbQfyP0.js", "vendor.d/Refresh-xoMt5L00.js", "vendor.d/OptionToggleGroup-Cvm2wRyq.js", "vendor.d/Bookmark-D9hRs62u.js", "vendor.d/formPermission-dS9nHLBQ.js", "vendor.d/useTeamApprovalSettings-C0SRRQJg.js", "vendor.d/utils-B6Q5_urv.js", "vendor.d/closeModalThenNavigate-E6PLv0o1.js", "vendor.d/useFileViewer-B-2ewnr3.js", "vendor.d/documentViewerStore-BlSjH3BG.js", "vendor.d/mobileSearchOverlay-DYWcMOOb.js", "vendor.d/useAppBasePath-BVB_xO8H.js"])) => i.map(i => d[i]);
import { bv as A, B as i, cI as J, bQ as k, D as me, c4 as le, ca as H, cO as Je, aB as _e, dy as re, cm as gt, cn as et, K as Re, L as x, cW as yt, d6 as jt, s as bt, bF as vt, cz as St, iV as kt, dC as wt, e as Pe, cj as Se, fQ as At, lq as _t, gn as Tt, bI as Ct, go as Dt, bT as oe, df as Ot, ce as Be, cf as $e, cJ as Rt, _ as Et } from "../js.d/main-Cm9wS5wt.js";
import { j as e, r as z, u as Wt, l as zt } from "./react-CjxcGQav.js";
import { k as te, N as It, S as ce, c as Te, d as P, m as de, C, e as he, E as ie, P as N, b as O, F as Nt, D as tt, f as Lt } from "./AttendanceParts-mHb1cK0h.js";
import { E as qt } from "./EdgeTabs-Ccbggjn6.js";
import { u as Mt } from "./useSwipeNav-B6w6Iias.js";
import { E as He } from "./EditCalendarOutlined-k4e0HIS9.js";
import { E as Ue } from "./EventRepeatOutlined-BzT6rPrF.js";
import { u as Pt, M as Bt } from "./ShiftRequestPanels-C2AJ4xuX.js";
import { I as st } from "./InlineErrorAlert-D9ICJPt7.js";
import { u as $t, M as Ht, D as Ut } from "./AttendanceDevicePanels-B5hqoF42.js";
import { d as Ft, a as Gt } from "./attendanceMgmtApi-CC4DR0XR.js";
import { u as Vt } from "./sharedMyAttendance-DmyX71sh.js";
import { c as Yt } from "./trainingCalendar-BpMTSUwd.js";
import { o as Kt } from "./attendancePageOverlay-kQ292Bkg.js";
import { u as Qt, O as Xt, a as Zt, L as Jt, b as es } from "./LeavePlanDialog-B4ZZ2WNf.js";
import { c as ts, m as w, t as Ee, A as ke, o as nt, e as Z, O as ss, s as Ce, f as ns, g as os, R as is } from "./attendanceMgmt-B_e3bPBn.js";
import { m as De, n as as, T as ls, W as rs, M as cs, G as ot, l as We, H as ue, S as it, a as se } from "./MyAttendanceCards-R4z2WqwF.js";
import { L as ds } from "./notificationsRealtime-BoFKeECQ.js";
import { b as hs } from "./attendance-CHHNhWTj.js";
import { w as us } from "./i18nLabels-BNTLL7cu.js";
import { o as xs } from "./approvalDetailHost-CFvt90Au.js";
import { b as ms, C as xe } from "./MobileCardListLayout-D5_p2Xer.js";
import { T as ps } from "./tableScrollbars-C9bhlJjO.js";
import { u as fs, O as gs } from "./OutingTrackDialog-B6nMyUiB.js";
import "./stylis-DdLD6a3t.js";
import "./attendanceBio-C-9dHF9O.js";
import "./trainingApi-DT4unjOR.js";
import "./training-Bx0zycZu.js";
import "./LeaveDatesInput-D2CFTlN1.js";
import "./Logout-B1FcT8mE.js";
import "./FreeBreakfastOutlined-DsHDTKlm.js";
import "./mobileSearchOverlay-DYWcMOOb.js";
import "./leaflet-CcRL-kL8.js";
function ys({
  modal: t,
  canAssign: s,
  onOpenSettings: o
}) {
  const a = A(),
    d = [{
      id: "hr-handler-notice",
      showTitle: !1,
      children: e.jsxs(i, {
        component: "ul",
        sx: {
          m: 0,
          pl: 2.5,
          display: "grid",
          gap: 1,
          fontSize: 15,
          color: "text.secondary",
          listStyleType: "disc",
          wordBreak: "keep-all"
        },
        children: [e.jsx("li", {
          children: te(a("hr.myAttNoHrLine1"))
        }), s ? e.jsx("li", {
          children: te(a("hr.myAttNoHrOwner"))
        }) : e.jsxs(e.Fragment, {
          children: [e.jsx("li", {
            children: te(a("hr.myAttNoHrAskOwner"))
          }), e.jsx("li", {
            children: te(a("hr.myAttNoHrHow"))
          })]
        }), e.jsx("li", {
          children: a("hr.myAttNoHrAfter")
        })]
      })
    }];
  return e.jsx(J, {
    open: t.isOpen,
    onClose: t.close,
    title: a("hr.myAttNoHrTitle"),
    width: "440px",
    draggable: !1,
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
      showCancelButton: s,
      right: s ? e.jsx(k, {
        variant: "contained",
        onClick: () => {
          t.close(), o();
        },
        children: a("hr.myAttOpenCompanySettings")
      }) : e.jsx(k, {
        variant: "contained",
        onClick: t.close,
        sx: {
          minWidth: 96
        },
        children: a("hr.confirm")
      })
    },
    sections: d
  });
}
function js() {
  const t = new Date();
  return t.setHours(0, 0, 0, 0), t;
}
function bs({
  controller: t
}) {
  const s = A(),
    {
      form: o,
      ui: a,
      modal: d
    } = t,
    h = me(),
    n = !!a.useValue("saving"),
    g = String(a.useValue("error") ?? ""),
    p = o.useFormValue("kind"),
    m = Number(o.useFormValue("template_seq")) || 0,
    S = [{
      id: "shift-request-wish",
      title: s("hr.attAdminShiftWish"),
      children: e.jsxs(le, {
        spacing: H,
        children: [e.jsxs(i, {
          sx: {
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: H
          },
          children: [e.jsx(Je, {
            form: o,
            name: "work_date",
            label: s("hr.myAttColDate"),
            required: !0,
            disabled: n,
            minDate: js(),
            fullWidth: !0,
            slotProps: {
              inputLabel: {
                shrink: !0
              }
            }
          }), e.jsx(_e, {
            form: o,
            name: "kind",
            label: s("hr.attAdminThatDay"),
            options: [{
              value: "work",
              label: s("hr.attSetStatWork")
            }, {
              value: "off",
              label: s("hr.attSetDayStatusOff")
            }],
            showEmptyOption: !1,
            disabled: n,
            fullWidth: !0
          })]
        }), p === "work" && e.jsxs(e.Fragment, {
          children: [t.templates.length > 0 && e.jsx(_e, {
            label: s("hr.attSetTemplates"),
            value: m || "",
            onChange: j => t.pickTemplate(Number(j.target.value) || 0),
            options: t.templates.map(j => ({
              value: j.seq,
              label: `${j.name} (${j.start_time}~${j.end_time})`
            })),
            emptyLabel: s("hr.attAdminManualInput"),
            disabled: n,
            fullWidth: !0
          }), e.jsxs(i, {
            sx: {
              display: "grid",
              gridTemplateColumns: h ? "repeat(2, minmax(0, 1fr))" : "repeat(3, minmax(0, 1fr))",
              gap: H
            },
            children: [e.jsx(re, {
              form: o,
              name: "start_time",
              label: s("hr.attSetTimeStart"),
              disabled: n,
              fullWidth: !0
            }), e.jsx(re, {
              form: o,
              name: "end_time",
              label: s("hr.attSetTimeEnd"),
              disabled: n,
              fullWidth: !0
            }), e.jsx(gt, {
              form: o,
              name: "break_minutes",
              label: s("hr.attSetBreak"),
              suffix: s("hr.attSetMinutesSuffix"),
              min: 0,
              max: 480,
              decimalLength: 0,
              thousandSeparator: !1,
              textAlign: "left",
              disabled: n,
              fullWidth: !0
            })]
          })]
        }), e.jsx(It, {
          items: [s("hr.attAdminShiftNoteApprove"), s("hr.attAdminShiftNoteFuture"), s("hr.attAdminShiftNoteLeave")]
        })]
      })
    }, {
      id: "shift-request-reason",
      title: s("hr.reason"),
      children: e.jsxs(le, {
        spacing: H,
        children: [e.jsx(et, {
          form: o,
          name: "reason",
          minRows: 3,
          spellCheck: !1,
          disabled: n,
          slotProps: {
            htmlInput: {
              maxLength: 500
            }
          },
          fullWidth: !0
        }), g && e.jsx(st, {
          message: g
        })]
      })
    }];
  return e.jsx(J, {
    open: d.isOpen,
    onClose: d.close,
    title: s("hr.myAttShiftRequest"),
    width: "560px",
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
      right: e.jsx(k, {
        variant: "contained",
        onClick: () => {
          o.submit();
        },
        disabled: n,
        sx: {
          minWidth: 96
        },
        children: n ? e.jsx(Re, {
          size: 20,
          color: "inherit"
        }) : s("hr.myAttRequest")
      })
    },
    sections: S
  });
}
const vs = [{
  value: "",
  labelKey: "hr.myAttAwaySame"
}, {
  value: "outside",
  labelKey: "hr.myAttAwayOutside"
}, {
  value: "trip",
  labelKey: "hr.myAttAwayTrip"
}];
function Ss({
  controller: t
}) {
  const s = A(),
    {
      form: o,
      ui: a,
      modals: d
    } = t,
    h = me(),
    n = !!a.useValue("saving"),
    g = String(a.useValue("error") ?? ""),
    [p, m] = z.useState(!1),
    [S, j] = z.useState(null),
    D = [{
      id: "clock-request-time",
      title: s("hr.myAttReqRecord"),
      children: e.jsxs(le, {
        spacing: H,
        children: [e.jsx(Je, {
          form: o,
          name: "work_date",
          label: s("hr.myAttWorkDate"),
          required: !0,
          disabled: n,
          fullWidth: !0,
          slotProps: {
            inputLabel: {
              shrink: !0
            }
          }
        }), e.jsx(_e, {
          form: o,
          name: "away_kind",
          label: s("hr.myAttDayType"),
          options: vs.map(I => ({
            value: I.value,
            label: s(I.labelKey)
          })),
          showEmptyOption: !1,
          disabled: n,
          fullWidth: !0
        }), e.jsxs(i, {
          sx: {
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: H
          },
          children: [e.jsx(re, {
            form: o,
            name: "check_in",
            label: s("hr.myAttClockInTime"),
            disabled: n,
            fullWidth: !0
          }), e.jsx(re, {
            form: o,
            name: "check_out",
            label: s("hr.myAttClockOutTime"),
            disabled: n,
            fullWidth: !0
          })]
        }), e.jsx(x, {
          sx: {
            fontSize: 14,
            color: "text.secondary"
          },
          children: s("hr.myAttReqMidnightNote")
        })]
      })
    }, {
      id: "clock-request-reason",
      title: s("hr.reason"),
      children: e.jsxs(le, {
        spacing: H,
        children: [e.jsx(et, {
          form: o,
          name: "reason",
          minRows: 3,
          disabled: n,
          slotProps: {
            htmlInput: {
              maxLength: 500
            }
          },
          fullWidth: !0
        }), g && e.jsx(st, {
          message: g
        })]
      })
    }];
  return e.jsx(J, {
    open: d.request.isOpen,
    onClose: d.request.close,
    title: s("hr.myAttReqTitle"),
    width: "520px",
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
      right: e.jsxs(e.Fragment, {
        children: [e.jsx(k, {
          ref: j,
          variant: "contained",
          onClick: () => m(!0),
          disabled: n,
          sx: {
            minWidth: 96
          },
          children: n ? e.jsx(Re, {
            size: 20,
            color: "inherit"
          }) : s("hr.myAttSendRequest")
        }), e.jsx(yt, {
          open: p,
          anchorEl: S,
          title: s("hr.myAttReqConfirm"),
          confirmText: s("hr.send"),
          cancelText: s("hr.cancel"),
          placement: "top-end",
          minWidth: 260,
          zIndex: 1401,
          onCancel: () => m(!1),
          onConfirm: () => {
            m(!1), o.submit();
          }
        })]
      })
    },
    sections: D
  });
}
const ks = {
    color: "#dc2626",
    bg: "#fef2f2"
  },
  ws = {
    color: "#2563eb",
    bg: "#eff6ff"
  },
  Fe = {
    color: "#1f2937",
    bg: "#f1f5f9"
  },
  Ge = "#92400e",
  As = {
    waiting: {
      color: "#b45309",
      bg: "#fef3c7"
    },
    in_progress: {
      color: "#b45309",
      bg: "#fef3c7"
    },
    approved: {
      color: "#047857",
      bg: "#d1fae5"
    },
    rejected: {
      color: "#b91c1c",
      bg: "#fee2e2"
    }
  },
  at = t => hs[t] ?? t;
function we({
  date: t,
  holiday: s,
  band: o = !1
}) {
  const a = new Date(`${t}T00:00:00Z`).getUTCDay(),
    d = a === 0 || s ? ks : a === 6 ? ws : Fe;
  return e.jsxs(i, {
    sx: {
      display: "flex",
      alignItems: "center",
      gap: .75,
      flexShrink: 0
    },
    children: [e.jsx(C, {
      label: String(Number(t.slice(8, 10))),
      tone: o ? d : {
        ...d,
        bg: "#fff"
      },
      minWidth: 32
    }), e.jsx(x, {
      sx: {
        fontSize: 14,
        color: d === Fe ? "text.secondary" : d.color
      },
      children: us(a)
    })]
  });
}
function Ve({
  req: t,
  onOpen: s
}) {
  const o = A();
  return e.jsxs(i, {
    role: "button",
    tabIndex: 0,
    onClick: () => s(t.doc_seq),
    sx: {
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 1,
      flexWrap: "wrap"
    },
    children: [e.jsx(x, {
      sx: {
        fontSize: 14,
        color: "text.secondary"
      },
      children: o("hr.attAdminApply")
    }), e.jsxs(x, {
      sx: {
        fontSize: 15
      },
      children: [t.start_time, "~", t.end_time, t.minutes > 0 ? ` · ${w(t.minutes)}` : ""]
    }), e.jsx(i, {
      component: "span",
      sx: {
        ml: "auto"
      },
      children: e.jsx(C, {
        label: ss[t.status],
        tone: As[t.status]
      })
    }), t.status === "rejected" && t.reject_reason && e.jsx(x, {
      sx: {
        fontSize: 14,
        color: "text.secondary",
        flexBasis: "100%"
      },
      children: o("hr.rejectReasonLine", {
        reason: t.reject_reason
      })
    })]
  });
}
const Ye = {
    color: "#b91c1c",
    bg: "#fee2e2"
  },
  ae = {
    color: "#6d28d9",
    bg: "#ede9fe"
  };
function lt(t, s, o) {
  if (!s) return 0;
  if (o) return De(`${t} ${s}`, `${t} ${o}`);
  const a = as();
  return a.slice(0, 10) === t ? De(`${t} ${s}`, a) : 0;
}
const _s = ["late", "away"];
function Ts({
  day: t
}) {
  const s = A(),
    o = t.clock,
    a = o?.check_in_at && t.planned.start ? De(`${t.date} ${t.planned.start}`, o.check_in_at.slice(0, 16)) : 0;
  return e.jsxs(e.Fragment, {
    children: [e.jsxs(i, {
      sx: {
        display: "flex",
        alignItems: "baseline",
        gap: 1.5,
        flexWrap: "wrap"
      },
      children: [e.jsxs(x, {
        sx: {
          fontSize: 15
        },
        children: [e.jsx(i, {
          component: "span",
          sx: {
            color: "text.secondary",
            mr: .75
          },
          children: s("hr.sidebarIn")
        }), e.jsx(i, {
          component: "span",
          sx: {
            fontWeight: 700
          },
          children: o ? Z(o.check_in_at, t.date) : "—"
        })]
      }), t.planned.start && e.jsx(x, {
        sx: {
          fontSize: 14,
          color: "text.secondary"
        },
        children: s("hr.sidebarPlanned", {
          time: t.planned.start
        })
      }), a > 0 && a !== (o?.late_minutes ?? 0) && e.jsx(x, {
        sx: {
          fontSize: 14,
          color: "text.secondary"
        },
        children: s("hr.statLateActual", {
          duration: w(a)
        })
      })]
    }), e.jsx(x, {
      sx: {
        fontSize: 14,
        color: o?.late_reason ? "text.primary" : "text.secondary"
      },
      children: o?.late_reason ? s("hr.attSetReasonPrefix", {
        reason: o.late_reason
      }) : s("hr.statNoReason")
    })]
  });
}
function Cs({
  day: t
}) {
  const s = A(),
    o = t.clock?.outings ?? [],
    a = t.leaves.filter(d => d.kind === "outside" || d.kind === "trip" || d.kind === "remote");
  return e.jsxs(i, {
    sx: {
      display: "flex",
      flexDirection: "column",
      gap: .75
    },
    children: [o.map((d, h) => {
      const n = lt(t.date, d.start, d.end);
      return e.jsxs(i, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 1,
          minWidth: 0
        },
        children: [e.jsx(i, {
          component: "span",
          sx: {
            width: 6,
            height: 6,
            borderRadius: "50%",
            bgcolor: ae.color,
            flexShrink: 0
          }
        }), e.jsx(x, {
          sx: {
            fontSize: 15,
            fontWeight: 700,
            minWidth: 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          },
          children: d.place || s("hr.attSetClockMethodOutside")
        }), e.jsxs(x, {
          sx: {
            fontSize: 14,
            color: "text.secondary",
            whiteSpace: "nowrap"
          },
          children: [d.start, "~", d.end || "…", n > 0 ? ` · ${w(n)}` : ""]
        }), !d.end && e.jsx(i, {
          component: "span",
          sx: {
            ml: "auto",
            flexShrink: 0
          },
          children: e.jsx(C, {
            label: s("hr.statOutingNow"),
            tone: ae
          })
        })]
      }, h);
    }), !o.length && a.map(d => e.jsxs(i, {
      sx: {
        display: "flex",
        alignItems: "center",
        gap: 1,
        minWidth: 0
      },
      children: [e.jsx(C, {
        label: at(d.kind),
        tone: ae
      }), d.memo && e.jsx(x, {
        sx: {
          fontSize: 14,
          color: "text.secondary",
          minWidth: 0,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        },
        children: d.memo
      })]
    }, d.seq))]
  });
}
const Oe = {
    p: 1.5,
    borderRadius: 1.5,
    bgcolor: "#f8fafc",
    display: "flex",
    flexDirection: "column",
    gap: 1
  },
  X = 24,
  Ke = {
    ...Oe,
    mx: `-${X}px`,
    px: `${X}px`,
    borderRadius: 0,
    bgcolor: "#fff"
  };
function Ds({
  controller: t,
  data: s,
  onApplyOvertime: o,
  onOpenRequest: a,
  onOpenTrack: d
}) {
  const h = A(),
    {
      statModal: n,
      statUi: g
    } = t,
    p = me(),
    m = g.useValue("kind") ?? "overtime",
    S = ts(m, s.days, at),
    j = u => s.days.find(v => v.date === u),
    D = m === "overtime" && s.overtime_mode === "approval",
    I = _s.includes(m),
    L = (() => {
      if (m === "late") {
        const u = S.reduce((v, y) => v + (j(y.date)?.clock?.late_minutes ?? 0), 0);
        return S.length ? h("hr.statSummary", {
          count: S.length,
          duration: w(u, h("hr.minutesOnly", {
            m: 0
          }))
        }) : "";
      }
      if (m === "away") {
        let u = 0,
          v = 0;
        for (const y of S) {
          const E = j(y.date)?.clock?.outings ?? [];
          u += E.length || 1, v += E.reduce((q, W) => q + lt(y.date, W.start, W.end), 0);
        }
        return u ? v > 0 ? h("hr.statSummary", {
          count: u,
          duration: w(v)
        }) : h("hr.timesN", {
          count: u
        }) : "";
      }
      return "";
    })(),
    b = D ? s.overtime_requests ?? [] : [],
    R = new Set(S.map(u => u.date)),
    V = b.filter(u => !R.has(u.work_date)),
    c = p ? Ke : Oe,
    U = p ? jt : ce,
    l = [{
      id: "stat-rows",
      showTitle: !1,
      children: e.jsxs(i, {
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: U
        },
        children: [e.jsxs(i, {
          sx: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
            ...(p ? {
              mx: `-${X}px`,
              mt: `-${X}px`,
              px: `${X}px`,
              pt: 1,
              pb: D ? 1.5 : 1,
              bgcolor: "#fff",
              "& .MuiIconButton-root": {
                mx: 1
              }
            } : {
              mb: .5
            })
          },
          children: [e.jsx(Te, {
            large: !0,
            label: de(s.month),
            onPrev: () => t.setMonth(P(t.month, -1)),
            onNext: () => t.setMonth(P(t.month, 1)),
            nextDisabled: s.month >= Ee().slice(0, 7)
          }), L && e.jsx(C, {
            label: `${ke[m]} ${L}`,
            tone: m === "late" ? Ye : ae
          }), D && e.jsxs(i, {
            component: "ul",
            sx: {
              m: 0,
              alignSelf: "stretch",
              p: 1.5,
              pl: 3.5,
              borderRadius: 1.5,
              bgcolor: "#fffbeb",
              fontSize: 15,
              color: Ge,
              listStyleType: "disc",
              display: "grid",
              gap: .5
            },
            children: [e.jsx("li", {
              children: he(h("hr.attAdminStatNoteApproved"))
            }), e.jsx("li", {
              children: he(h("hr.attAdminStatNoteDaily"))
            })]
          })]
        }), S.map(u => {
          const v = b.filter(F => F.work_date === u.date),
            y = j(u.date)?.clock,
            Y = !!y?.overtime_waived,
            E = nt(u.date, u.unrecognized, b, Y),
            q = D && Y && u.unrecognized > 0 && !!y?.seq,
            W = j(u.date);
          return I && W ? e.jsxs(i, {
            sx: c,
            children: [e.jsxs(i, {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 1,
                minWidth: 0
              },
              children: [e.jsx(we, {
                date: u.date,
                holiday: !!s.holidays?.[u.date],
                band: p
              }), e.jsxs(i, {
                sx: {
                  ml: "auto",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  flexShrink: 0
                },
                children: [m === "late" && e.jsx(C, {
                  label: h("hr.statLateBy", {
                    duration: w(y?.late_minutes ?? 0, h("hr.minutesOnly", {
                      m: 0
                    }))
                  }),
                  tone: Ye
                }), m === "away" && d && (y?.outings?.length ?? 0) > 0 && e.jsx(k, {
                  variant: "outlined",
                  size: "small",
                  onClick: () => d(u.date),
                  sx: {
                    fontSize: 14
                  },
                  children: h("hr.attAdminViewRoute")
                })]
              })]
            }), m === "late" ? e.jsx(Ts, {
              day: W
            }) : e.jsx(Cs, {
              day: W
            })]
          }, u.date) : e.jsxs(i, {
            sx: c,
            children: [e.jsxs(i, {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 1,
                minWidth: 0
              },
              children: [e.jsx(we, {
                date: u.date,
                holiday: !!s.holidays?.[u.date],
                band: p
              }), e.jsx(x, {
                sx: {
                  fontSize: 15,
                  color: "text.secondary",
                  minWidth: 0,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: u.text
              }), e.jsx(x, {
                sx: {
                  fontSize: 16,
                  fontWeight: 700,
                  ml: "auto",
                  whiteSpace: "nowrap"
                },
                children: u.value
              })]
            }), u.note && e.jsxs(i, {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 1
              },
              children: [e.jsx(x, {
                sx: {
                  fontSize: 14,
                  color: u.unrecognized > 0 && !q ? Ge : "text.secondary",
                  fontWeight: u.unrecognized > 0 && !q ? 600 : 400,
                  minWidth: 0
                },
                children: q ? h("hr.attSetUnrecognizedOvertimeWaived", {
                  duration: w(u.unrecognized)
                }) : u.note
              }), D && E && e.jsxs(i, {
                sx: {
                  ml: "auto",
                  display: "flex",
                  gap: 1,
                  flexShrink: 0
                },
                children: [y?.seq ? e.jsx(k, {
                  variant: "outlined",
                  size: "small",
                  onClick: () => {
                    t.waiveOvertime(y.seq, !0);
                  },
                  sx: {
                    fontSize: 14
                  },
                  children: h("hr.myAttOvertimeWaive")
                }) : null, e.jsx(k, {
                  variant: "contained",
                  disableElevation: !0,
                  size: "small",
                  onClick: () => o(j(u.date)),
                  sx: {
                    fontSize: 14
                  },
                  children: h("hr.attAdminApply")
                })]
              }), q && y && e.jsx(k, {
                size: "small",
                onClick: () => {
                  t.waiveOvertime(y.seq, !1);
                },
                sx: {
                  ml: "auto",
                  flexShrink: 0,
                  fontSize: 14
                },
                children: h("hr.myAttOvertimeUnwaive")
              })]
            }), v.length > 0 && e.jsx(i, {
              sx: {
                pt: 1,
                borderTop: "1px solid #e2e8f0",
                display: "flex",
                flexDirection: "column",
                gap: 1
              },
              children: v.map(F => e.jsx(Ve, {
                req: F,
                onOpen: a
              }, F.doc_seq))
            })]
          }, u.date);
        }), !S.length && e.jsx(ie, {
          text: h("hr.attAdminStatEmpty", {
            month: de(s.month),
            kind: ke[m]
          })
        })]
      })
    }];
  return D && l.push({
    id: "stat-overtime-requests",
    title: h("hr.attAdminOtherRequests"),
    showTitle: !p,
    children: e.jsxs(i, {
      sx: p ? {
        ...Ke,
        py: 2,
        gap: 1.5
      } : {
        display: "flex",
        flexDirection: "column",
        gap: ce
      },
      children: [p && e.jsx(x, {
        sx: {
          fontSize: 16,
          fontWeight: 700
        },
        children: h("hr.attAdminOtherRequests")
      }), V.map(u => e.jsxs(i, {
        sx: Oe,
        children: [e.jsx(i, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1
          },
          children: e.jsx(we, {
            date: u.work_date,
            holiday: !!s.holidays?.[u.work_date]
          })
        }), e.jsx(Ve, {
          req: u,
          onOpen: a
        })]
      }, u.doc_seq)), e.jsx(k, {
        variant: "outlined",
        fullWidth: !0,
        onClick: () => o(),
        children: h("hr.attAdminOtherDayOvertime")
      })]
    })
  }), e.jsx(J, {
    open: n.isOpen,
    onClose: n.close,
    title: ke[m],
    width: "480px",
    fullScreen: p,
    mobilePresentation: p ? "slide" : "dialog",
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
      visible: !1
    },
    sx: p ? {
      DialogContent: {
        bgcolor: bt[200]
      }
    } : void 0,
    sections: l
  });
}
const Os = z.lazy(() => Et(() => import("./index-DtGTpLHo.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38]))),
  Qe = 3;
function Xe({
  req: t,
  onCancel: s
}) {
  const o = A();
  return e.jsxs(i, {
    sx: {
      py: 1,
      borderBottom: "1px solid #e2e8f0",
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
    children: [e.jsx(x, {
      sx: {
        fontSize: 15,
        fontWeight: 600,
        minWidth: 72
      },
      children: Ce(t.work_date)
    }), e.jsx(x, {
      sx: {
        fontSize: 15
      },
      children: os(t)
    }), e.jsx(C, {
      label: is[t.status],
      tone: t.status === "approved" ? {
        color: "#047857",
        bg: "#d1fae5"
      } : t.status === "rejected" ? {
        color: "#b91c1c",
        bg: "#fee2e2"
      } : {
        color: "#b45309",
        bg: "#fef3c7"
      }
    }), e.jsx(x, {
      sx: {
        fontSize: 14,
        color: "text.secondary",
        flexBasis: "100%"
      },
      children: t.status === "rejected" && t.reject_reason ? o("hr.rejectReasonLine", {
        reason: t.reject_reason
      }) : t.reason
    }), t.status === "pending" && e.jsx(k, {
      size: "small",
      onClick: () => s(t.seq),
      sx: {
        ml: "auto"
      },
      children: o("hr.myAttCancelRequest")
    })]
  }, t.seq);
}
function Rs({
  days: t,
  onOpenTrack: s
}) {
  const o = A(),
    a = [],
    d = new Set();
  for (const h of t) {
    for (const n of h.leaves) {
      if (d.has(n.seq)) continue;
      d.add(n.seq);
      const g = n.start_date || h.date,
        p = n.end_date || g,
        m = g === p ? se(g) : `${se(g)}~${se(p)}`,
        S = n.kind === "outside" || n.kind === "trip" || n.kind === "remote",
        j = !S && n.days ? ` ${o("hr.daysN", {
          count: n.days
        })}` : "";
      a.push({
        date: g,
        text: `${m} ${We(n.kind)}${j}`,
        color: S ? "#7c3aed" : "#1d4ed8"
      });
    }
    for (const n of h.clock?.outings ?? []) a.push({
      date: h.date,
      text: o("hr.myAttOutingLine", {
        date: se(h.date),
        place: n.place,
        range: `${n.start}~${n.end || "…"}`
      }),
      color: "#7c3aed",
      track: !0
    });
  }
  return a.sort((h, n) => h.date < n.date ? -1 : h.date > n.date ? 1 : 0), e.jsx(N, {
    title: o("hr.myAttMonthAway"),
    children: a.length ? e.jsx(i, {
      sx: {
        display: "flex",
        flexDirection: "column",
        gap: .75
      },
      children: a.map((h, n) => e.jsxs(i, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 1,
          fontSize: 15,
          lineHeight: 1.25
        },
        children: [e.jsx(i, {
          component: "span",
          sx: {
            width: 6,
            height: 6,
            borderRadius: "50%",
            bgcolor: h.color,
            flexShrink: 0
          }
        }), e.jsx(i, {
          component: "span",
          sx: {
            flex: 1,
            minWidth: 0
          },
          children: h.text
        }), h.track ? e.jsx(k, {
          size: "small",
          onClick: () => s(h.date),
          sx: {
            p: 0,
            minWidth: 0,
            flexShrink: 0,
            whiteSpace: "nowrap",
            fontSize: 14,
            lineHeight: 1.25
          },
          children: o("hr.attAdminViewRoute")
        }) : null]
      }, n))
    }) : e.jsx(x, {
      sx: {
        fontSize: 15,
        color: "text.secondary"
      },
      children: o("hr.myAttMonthAwayEmpty")
    })
  });
}
function Es({
  events: t
}) {
  const s = A();
  return e.jsx(N, {
    title: s("hr.myAttGeoToday"),
    children: e.jsx(ot, {
      events: t
    })
  });
}
function Ws({
  pay: t
}) {
  const s = A();
  return e.jsxs(N, {
    title: s("hr.myAttExpectedPay"),
    children: [t.lines.length ? e.jsxs(i, {
      sx: {
        display: "flex",
        flexDirection: "column",
        gap: 1.25
      },
      children: [t.lines.map(o => e.jsxs(i, {
        sx: {
          display: "flex",
          alignItems: "baseline",
          gap: 1
        },
        children: [e.jsxs(i, {
          sx: {
            minWidth: 0,
            flex: 1
          },
          children: [e.jsx(x, {
            sx: {
              fontSize: 15,
              fontWeight: 600
            },
            children: o.name
          }), e.jsx(x, {
            sx: {
              fontSize: 14,
              color: "text.secondary"
            },
            children: o.note
          })]
        }), e.jsx(x, {
          sx: {
            fontSize: 15,
            fontWeight: 600,
            whiteSpace: "nowrap"
          },
          children: s("hr.wonAmount", {
            amount: o.amount.toLocaleString(Be($e()))
          })
        })]
      }, o.code)), e.jsxs(i, {
        sx: {
          display: "flex",
          alignItems: "baseline",
          pt: 1.25,
          borderTop: "1px solid #f1f5f9"
        },
        children: [e.jsx(x, {
          sx: {
            fontSize: 15,
            fontWeight: 700,
            flex: 1
          },
          children: s("hr.myAttTotal")
        }), e.jsx(x, {
          sx: {
            fontSize: 18,
            fontWeight: 700,
            color: "#1d4ed8"
          },
          children: s("hr.wonAmount", {
            amount: t.total.toLocaleString(Be($e()))
          })
        })]
      })]
    }) : e.jsx(x, {
      sx: {
        fontSize: 15,
        color: "text.secondary"
      },
      children: s("hr.myAttExpectedPayEmpty")
    }), e.jsx(x, {
      sx: {
        fontSize: 14,
        color: "text.secondary",
        mt: 1.5
      },
      children: s("hr.myAttExpectedPayNote")
    })]
  });
}
const zs = "#eff6ff",
  Is = "#1d4ed8",
  Ns = {
    bgcolor: zs,
    boxShadow: `inset 3px 0 0 ${Is}`,
    mx: -.75,
    px: .75,
    pl: 1.25,
    ml: -1.25,
    borderRadius: "4px"
  },
  M = 15;
function ne({
  minutes: t
}) {
  const s = A(),
    o = Math.floor(t / 60),
    a = Math.round(t % 60),
    d = {
      fontSize: 14,
      fontWeight: 600,
      ml: "1px",
      mr: "2px"
    };
  return e.jsxs(i, {
    component: "span",
    sx: {
      whiteSpace: "nowrap"
    },
    children: [o > 0 && e.jsxs(e.Fragment, {
      children: [o, e.jsx(i, {
        component: "span",
        sx: d,
        children: s("hr.attSetHoursSuffix")
      })]
    }), (a > 0 || o === 0) && e.jsxs(e.Fragment, {
      children: [a, e.jsx(i, {
        component: "span",
        sx: d,
        children: s("hr.attSetMinutesSuffix")
      })]
    })]
  });
}
const Ae = {
    whiteSpace: "nowrap"
  },
  $ = "0 10px";
function Ls({
  days: t,
  holidays: s,
  onRequest: o
}) {
  const a = A(),
    d = Ee(),
    h = [{
      id: "date",
      text: a("hr.myAttColDate"),
      width: 72,
      align: "center",
      cellPadding: $,
      render: n => {
        const g = new Date(`${n.date}T00:00:00Z`).getUTCDay(),
          p = g === 0 || s?.[n.date] ? {
            color: ue,
            bg: "#fef2f2"
          } : g === 6 ? {
            color: it,
            bg: "#eff6ff"
          } : {
            color: "#1f2937",
            bg: "#f1f5f9"
          };
        return e.jsx(C, {
          label: String(Number(n.date.slice(8, 10))),
          tone: p,
          minWidth: 32
        });
      }
    }, {
      id: "in",
      text: a("hr.attSetStart"),
      width: 64,
      align: "center",
      cellPadding: $,
      render: n => n.clock?.check_in_at ? Z(n.clock.check_in_at, n.date) : ""
    }, {
      id: "out",
      text: a("hr.attSetEnd"),
      width: 64,
      align: "center",
      cellPadding: $,
      render: n => n.clock?.check_out_at ? Z(n.clock.check_out_at, n.date) : ""
    }, {
      id: "work",
      text: a("hr.myAttActualWork"),
      width: 100,
      align: "center",
      cellPadding: $,
      render: n => e.jsx(i, {
        component: "span",
        sx: Ae,
        children: w(n.clock?.work_minutes ?? 0)
      })
    }, {
      id: "overtime",
      text: a("hr.attSetStatOvertime"),
      width: 90,
      align: "center",
      cellPadding: $,
      render: n => e.jsx(i, {
        component: "span",
        sx: Ae,
        children: w(n.clock?.overtime_minutes ?? 0)
      })
    }, {
      id: "night",
      text: a("hr.attSetStatNight"),
      width: 90,
      align: "center",
      cellPadding: $,
      render: n => e.jsx(i, {
        component: "span",
        sx: Ae,
        children: w(n.clock?.night_minutes ?? 0)
      })
    }, {
      id: "status",
      text: a("hr.myAttColStatus"),
      cellPadding: $,
      style: {
        overflow: "hidden"
      },
      cellStyle: n => n.date === d ? {
        fontWeight: 700
      } : {},
      render: n => e.jsx(qs, {
        day: n,
        holiday: s?.[n.date],
        onRequest: o
      })
    }];
  return e.jsx(Lt, {
    children: e.jsx(Ot, {
      scrollbars: ps,
      variant: "notion",
      autoHeight: !0,
      showPaper: !1,
      paddingX: 0,
      data: t,
      totalCount: t.length,
      columns: h,
      getRowId: n => n.date,
      selectedRowId: d
    })
  });
}
function rt(t, s, o) {
  return t(o ? "hr.attSetUnrecognizedOvertimeWaived" : "hr.attSetUnrecognizedOvertime", {
    duration: w(s)
  });
}
function qs({
  day: t,
  holiday: s,
  onRequest: o
}) {
  const a = A(),
    d = t.status === "off" && !t.late && !t.early ? (s ?? "").replace(/\(.*\)$/, "") || a("hr.myAttHoliday") : "";
  if (d) return e.jsx(i, {
    component: "span",
    sx: {
      color: ue,
      whiteSpace: "nowrap"
    },
    children: d
  });
  const h = t.unrecognized_overtime_minutes ?? 0,
    n = [t.leaves.map(p => We(p.kind)).join(" · "), t.clock?.corrected ? a("hr.myAttCorrected") : "", h > 0 ? rt(a, h, !!t.clock?.overtime_waived) : ""].filter(Boolean).join(" · "),
    g = t.status === "upcoming" && !t.late && !t.early;
  return e.jsxs(i, {
    component: "span",
    sx: {
      display: "inline-flex",
      alignItems: "center",
      gap: 1,
      minWidth: 0,
      maxWidth: "100%",
      "& > span": {
        flexWrap: "nowrap"
      }
    },
    children: [!g && e.jsx(tt, {
      status: t.status,
      late: t.late,
      early: t.early,
      filled: t.filled
    }), n && e.jsx(i, {
      component: "span",
      sx: {
        color: "text.secondary",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      },
      children: n
    }), t.status === "missing_out" && o && e.jsx(k, {
      size: "small",
      onClick: () => o(t),
      sx: {
        fontSize: 14,
        whiteSpace: "nowrap",
        flexShrink: 0,
        py: 0,
        minHeight: 0
      },
      children: a("hr.myAttEnterClockOut")
    })]
  });
}
function Ms({
  day: t,
  holiday: s,
  isMobile: o,
  lastRow: a,
  place: d,
  onClick: h
}) {
  const n = A(),
    g = t.leaves.map(b => We(b.kind)).join(" · "),
    p = t.date === Ee(),
    m = t.clock?.check_in_at ? Z(t.clock.check_in_at, t.date) : "",
    S = t.clock?.check_out_at ? Z(t.clock.check_out_at, t.date) : "",
    j = new Date(`${t.date}T00:00:00Z`).getUTCDay(),
    D = j === 0 || s ? {
      color: ue,
      bg: "#fef2f2"
    } : j === 6 ? {
      color: it,
      bg: "#eff6ff"
    } : {
      color: "#1f2937",
      bg: "#f1f5f9"
    },
    I = t.status === "off" && !t.late && !t.early ? (s ?? "").replace(/\(.*\)$/, "") || n("hr.myAttHoliday") : "",
    L = I ? e.jsx(x, {
      component: "span",
      sx: {
        fontSize: 14,
        fontWeight: 400,
        color: ue,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        minWidth: 0
      },
      children: I
    }) : e.jsx(tt, {
      status: t.status,
      late: t.late,
      early: t.early,
      filled: t.filled,
      plain: o
    });
  if (o) {
    const b = w(t.clock?.work_minutes ?? 0),
      R = t.unrecognized_overtime_minutes ?? 0,
      V = [m ? `${m}~${S || "…"}` : "", [b, g].filter(Boolean).join(" · "), R > 0 ? rt(n, R, !!t.clock?.overtime_waived) : ""].filter(Boolean);
    return e.jsxs(i, {
      role: "button",
      tabIndex: 0,
      onClick: h,
      sx: {
        pt: 1,
        pb: a ? 0 : 1,
        borderBottom: a ? "none" : "1px solid #e2e8f0",
        cursor: "pointer",
        minWidth: 0,
        ...(d ? {
          gridColumn: d[0],
          gridRow: d[1]
        } : {}),
        ...(p ? Ns : {})
      },
      children: [e.jsxs(i, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 1,
          minWidth: 0
        },
        children: [e.jsx(C, {
          label: String(Number(t.date.slice(8, 10))),
          tone: D,
          minWidth: 32
        }), p ? e.jsx(i, {
          component: "span",
          sx: {
            display: "contents",
            "&& *": {
              fontWeight: 700
            }
          },
          children: L
        }) : L]
      }), V.map(c => e.jsx(x, {
        sx: {
          fontSize: 14,
          color: "text.secondary",
          mt: .5,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        },
        children: c
      }, c)), t.status === "missing_out" && e.jsxs(x, {
        sx: {
          fontSize: 14,
          color: "primary.main",
          fontWeight: 600,
          mt: .5,
          whiteSpace: "nowrap"
        },
        children: [n("hr.myAttEnterClockOut"), " ›"]
      })]
    });
  }
  return null;
}
function Ps({
  columns: t,
  sx: s
}) {
  const o = t.filter(a => a.cards.length > 0);
  return o.length ? e.jsx(i, {
    sx: [{
      display: "grid",
      gridTemplateColumns: `repeat(${o.length}, minmax(0, 1fr))`,
      gap: xe,
      alignItems: "start"
    }, ...(Array.isArray(s) ? s : [s])],
    children: o.map((a, d) => e.jsx(i, {
      sx: {
        display: "flex",
        flexDirection: "column",
        gap: xe,
        minWidth: 0,
        alignSelf: a.fill ? "stretch" : "start"
      },
      children: a.cards.map((h, n) => e.jsx(Rt, {
        elevation: 1,
        sx: {
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          "& > *": {
            flex: 1
          },
          ...(a.fill && n === Math.min(a.fillIndex ?? 0, a.cards.length - 1) ? {
            flex: 1
          } : {})
        },
        children: h
      }, n))
    }, d))
  }) : null;
}
const Bs = {
    value: "status",
    get label() {
      return oe("hr.myAttTabStatus");
    }
  },
  Ze = [{
    value: "today",
    get label() {
      return oe("hr.myAttToday");
    }
  }, {
    value: "month",
    get label() {
      return oe("hr.myAttMonthly");
    }
  }, {
    value: "requests",
    get label() {
      return oe("hr.myAttTabRequests");
    }
  }],
  $s = {
    month: "month",
    pay: "month",
    away: "month",
    leave: "requests",
    "shift-requests": "requests",
    requests: "requests"
  };
function kn() {
  const t = A(),
    s = me(),
    o = vt("(min-width: 1600px)"),
    a = Wt(),
    d = St(),
    h = d?.seq ?? 0,
    n = Yt(d) ? [...Ze, Bs] : Ze,
    [g, p] = z.useState(() => {
      const r = new URLSearchParams(window.location.search).get("tab");
      return r === "month" || r === "requests" ? r : "today";
    }),
    [m, S] = z.useState(null),
    j = () => {
      s ? S({
        type: "vacation",
        key: Date.now()
      }) : a("/dashboard/approval/create", {
        state: {
          initialType: "vacation"
        }
      });
    },
    D = r => S({
      type: "overtime",
      formData: r ? ns(r, !!l?.holidays?.[r.date]) : void 0,
      key: Date.now()
    }),
    [I] = zt(),
    L = (I.get("qr") ?? "").trim(),
    b = !kt() && wt(d, "attendance"),
    R = Vt(),
    V = Qt({
      orgSeq: b ? 0 : h,
      qrCode: L
    }),
    c = b && R ? R.controller : V,
    U = fs("hr-my-outing-track-ui", r => Gt.myOutingTrack(r)),
    {
      data: l,
      loading: u,
      month: v,
      setMonth: y,
      busy: Y
    } = c,
    E = Pt(!!l?.linked),
    q = $t(c.reload),
    W = b && R ? R.device : q,
    [F, pe] = z.useState(!1),
    ze = Pe({
      modalId: "my-attendance-hr-handler-notice"
    }),
    fe = Pe({
      modalId: "my-attendance-clock-requests"
    }),
    G = r => {
      if (l?.hr_handlers !== 0) {
        r();
        return;
      }
      ze.open();
    },
    ct = Mt(() => y(P(v, -1)), () => y(P(v, 1)));
  if (!l) return e.jsx(i, {
    sx: {
      display: "flex",
      justifyContent: "center",
      py: 8
    },
    children: u || b && !R ? e.jsx(Re, {
      size: 28
    }) : e.jsx(ie, {
      text: t("hr.myAttPickOrg")
    })
  });
  if (!l.linked) return e.jsx(i, {
    sx: {
      p: 2
    },
    children: e.jsx(N, {
      title: t("hr.myAttTitle"),
      children: e.jsx(ie, {
        text: l.hr_off ? t("hr.myAttHrOff") : l.message
      })
    })
  });
  const T = l.totals,
    Ie = l.days.reduce((r, f) => r + (f.clock?.overtime_waived ? 0 : f.unrecognized_overtime_minutes ?? 0), 0),
    dt = l.leave,
    Ne = l.overtime_mode === "approval" ? l.days.filter(r => nt(r.date, r.unrecognized_overtime_minutes ?? 0, l.overtime_requests ?? [], !!r.clock?.overtime_waived)).length : 0,
    ge = l.late_reason_due ?? [],
    Le = !!(!s && l.device && l.device.state !== "none" && !l.device.pending && !l.device.rejected),
    ht = Le && l.device ? e.jsxs(i, {
      sx: {
        display: "flex",
        alignItems: "center",
        gap: .75,
        flexWrap: "wrap",
        fontSize: 14,
        color: "text.secondary"
      },
      children: [!b && e.jsx("span", {
        children: t("hr.myAttDeviceTitle")
      }), e.jsx(i, {
        component: "span",
        sx: {
          color: "text.primary",
          fontWeight: 600
        },
        children: l.device.active?.label ? Ft(l.device.active.label) : "–"
      }), l.device.state === "this" ? e.jsx(C, {
        label: t("hr.myAttThisDevice"),
        tone: {
          color: "#047857",
          bg: "#d1fae5"
        }
      }) : e.jsxs(e.Fragment, {
        children: [e.jsx(C, {
          label: t("hr.myAttOtherDevice"),
          tone: {
            color: "#b91c1c",
            bg: "#fee2e2"
          }
        }), e.jsx(Se, {
          onClick: W.openChange,
          sx: {
            fontSize: 14,
            color: "primary.main",
            "&:hover": {
              textDecoration: "underline"
            }
          },
          children: t("hr.myAttRequestThisDevice")
        })]
      })]
    }) : null,
    ye = !s && c.geoEvents.length > 0 ? e.jsx(i, {
      children: e.jsx(Se, {
        onClick: () => pe(!0),
        sx: {
          borderRadius: 1,
          "&:hover": {
            opacity: .8
          }
        },
        children: e.jsx(C, {
          label: `${t("hr.myAttGeoToday")} ${c.geoEvents.length}`,
          tone: {
            color: "#1d4ed8",
            bg: "#dbeafe"
          }
        })
      })
    }) : null,
    qe = b ? null : ht,
    ut = ye || qe ? e.jsxs(e.Fragment, {
      children: [ye, qe]
    }) : null,
    _ = [e.jsx(ls, {
      hideButtons: b,
      hideNumbers: b,
      deviceNote: ut,
      data: l,
      busy: Y,
      qr: L,
      onIn: () => {
        c.checkIn();
      },
      offHoursMessage: c.offHours?.from === "in" ? c.offHours.message : "",
      onConfirmOffHours: c.confirmOffHours,
      onCancelOffHours: c.cancelOffHours,
      onOut: () => {
        c.checkOut();
      },
      onLateOut: c.openLateOut,
      onBreak: () => {
        c.toggleBreak();
      },
      onOuting: c.openOuting,
      onOutingEnd: () => {
        c.endOuting();
      },
      onCancelAuto: r => {
        c.cancelAuto(r);
      }
    }, "today"), ...(ge.length ? [e.jsx(N, {
      title: t("hr.myAttLateReasonTitle"),
      action: e.jsx(C, {
        label: String(ge.length),
        tone: {
          color: "#b91c1c",
          bg: "#fee2e2"
        }
      }),
      children: e.jsx(i, {
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: 1
        },
        children: ge.map(r => e.jsxs(i, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1,
            minWidth: 0
          },
          children: [e.jsxs(x, {
            sx: {
              fontSize: 15,
              minWidth: 0
            },
            children: [t("hr.myAttAutoInAt", {
              date: Ce(r.work_date),
              time: r.check_in_at.slice(11, 16)
            }), s ? e.jsx(i, {
              component: "span",
              sx: {
                display: "block"
              },
              children: t("hr.myAttLateDuration", {
                duration: w(r.late_minutes)
              })
            }) : ` · ${t("hr.myAttLateDuration", {
              duration: w(r.late_minutes)
            })}`]
          }), e.jsx(k, {
            variant: "contained",
            disableElevation: !0,
            size: "small",
            onClick: () => c.openLateReasonDue(r),
            sx: {
              ml: "auto",
              flexShrink: 0,
              fontSize: 14
            },
            children: t("hr.myAttWriteReason")
          })]
        }, r.seq))
      })
    }, "late-reason")] : []), e.jsx(N, {
      title: t("hr.myAttMonthly"),
      action: s ? e.jsxs(i, {
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          flex: "1 1 100%"
        },
        children: [e.jsx(i, {
          sx: {
            display: "flex",
            justifyContent: "center"
          },
          children: e.jsx(Te, {
            large: !0,
            label: de(v),
            onPrev: () => y(P(v, -1)),
            onNext: () => y(P(v, 1)),
            pick: {
              mode: "month",
              value: v,
              onPick: y
            }
          })
        }), e.jsxs(i, {
          sx: {
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: 1.5
          },
          children: [e.jsx(k, {
            variant: "outlined",
            startIcon: e.jsx(Ue, {}),
            onClick: () => G(() => E.open()),
            sx: {
              px: 1,
              whiteSpace: "nowrap"
            },
            children: t("hr.myAttShiftRequest")
          }), e.jsx(k, {
            variant: "outlined",
            startIcon: e.jsx(He, {}),
            onClick: () => G(() => c.openRequest()),
            sx: {
              px: 1,
              whiteSpace: "nowrap"
            },
            children: t("hr.attSetClockMethodRequest")
          })]
        })]
      }) : e.jsxs(i, {
        sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
          flexWrap: "wrap",
          flex: "1 1 auto"
        },
        children: [e.jsx(Te, {
          label: de(v),
          onPrev: () => y(P(v, -1)),
          onNext: () => y(P(v, 1)),
          pick: {
            mode: "month",
            value: v,
            onPick: y
          }
        }), e.jsxs(i, {
          sx: {
            display: "flex",
            gap: 1,
            flexWrap: "wrap"
          },
          children: [e.jsx(k, {
            variant: "outlined",
            startIcon: e.jsx(Ue, {}),
            onClick: () => G(() => E.open()),
            children: t("hr.myAttShiftRequest")
          }), e.jsx(k, {
            variant: "outlined",
            startIcon: e.jsx(He, {}),
            onClick: () => G(() => c.openRequest()),
            children: t("hr.attSetClockMethodRequest")
          })]
        })]
      }),
      children: e.jsxs(i, {
        ...ct,
        children: [e.jsxs(i, {
          sx: {
            display: "grid",
            gridTemplateColumns: s ? "repeat(3, minmax(0, 1fr))" : "repeat(6, minmax(0, 1fr))",
            gridAutoRows: "1fr",
            gap: ce,
            mb: 1.5
          },
          children: [e.jsx(O, {
            dense: !0,
            label: t("hr.myAttWorkDays"),
            value: t("hr.daysN", {
              count: T.work_days
            }),
            tone: "work",
            onClick: () => c.openStat("work")
          }), e.jsx(O, {
            dense: !0,
            label: t("hr.myAttActualWork"),
            value: e.jsx(ne, {
              minutes: T.work_minutes
            }),
            tone: "work",
            onClick: () => c.openStat("work")
          }), e.jsx(O, {
            dense: !0,
            label: t("hr.attSetDayStatusAway"),
            value: t("hr.daysN", {
              count: T.away_days
            }),
            tone: "work",
            onClick: () => c.openStat("away")
          }), e.jsx(O, {
            dense: !0,
            label: t("hr.attSetStatOvertime"),
            value: e.jsx(ne, {
              minutes: T.overtime_minutes
            }),
            tone: "extra",
            badge: Ne ? String(Ne) : void 0,
            onClick: () => c.openStat("overtime")
          }), e.jsx(O, {
            dense: !0,
            label: t("hr.attSetStatNight"),
            value: e.jsx(ne, {
              minutes: T.night_minutes
            }),
            tone: "extra",
            onClick: () => c.openStat("night")
          }), e.jsx(O, {
            dense: !0,
            label: t("hr.attSetStatNightShift"),
            value: t("hr.timesN", {
              count: T.night_shift_days ?? 0
            }),
            tone: "extra",
            onClick: () => c.openStat("night_shift")
          }), e.jsx(O, {
            dense: !0,
            label: t("hr.attSetStatLate"),
            value: t("hr.timesN", {
              count: T.late_count
            }),
            danger: !0,
            onClick: () => c.openStat("late")
          }), e.jsx(O, {
            dense: !0,
            label: t("hr.attSetStatEarly"),
            value: t("hr.timesN", {
              count: T.early_count
            }),
            danger: !0,
            onClick: () => c.openStat("early")
          }), e.jsx(O, {
            dense: !0,
            label: t("hr.attSetDayStatusAbsent"),
            value: t("hr.daysN", {
              count: T.absent_count
            }),
            danger: !0,
            onClick: () => c.openStat("absent")
          }), e.jsx(O, {
            dense: !0,
            label: t("hr.attSetDayStatusMissingOut"),
            value: t("hr.daysN", {
              count: T.missing_out_count
            }),
            danger: !0,
            onClick: () => c.openStat("missing_out")
          }), e.jsx(O, {
            dense: !0,
            label: t("hr.myAttShortfall"),
            value: e.jsx(ne, {
              minutes: Math.max(0, (T.required_minutes ?? 0) - T.work_minutes)
            }),
            danger: !0
          }), e.jsx(O, {
            dense: !0,
            label: t("hr.attSetDayStatusLeave"),
            value: t("hr.daysN", {
              count: T.leave_days
            }),
            tone: "leave",
            onClick: () => c.openStat("leave")
          })]
        }), Ie > 0 && e.jsxs(i, {
          component: "ul",
          sx: {
            mb: 1.5,
            p: 1.25,
            pl: 3.5,
            borderRadius: 1,
            bgcolor: "#fffbeb",
            color: "#92400e",
            fontSize: 15,
            listStyleType: "disc"
          },
          children: [e.jsx("li", {
            children: he(t("hr.myAttUnrecognizedNote", {
              duration: w(Ie)
            }))
          }), e.jsx("li", {
            children: he(t("hr.myAttUnrecognizedHow"))
          })]
        }), l.weekly_over.length > 0 && e.jsxs(i, {
          sx: {
            mb: 1.5,
            p: 1.25,
            borderRadius: 1,
            bgcolor: "#fef2f2",
            color: "#b91c1c",
            fontSize: 15
          },
          children: [l.weekly_over.map(r => t("hr.myAttWeekTotal", {
            date: Ce(r.week_start),
            duration: w(r.minutes)
          })).join(", "), " ", "— ", t("hr.myAttWeeklyOver", {
            hours: Math.round(l.weekly_limit_minutes / 60)
          })]
        }), s ? e.jsx(i, {
          sx: {
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            columnGap: 1.5
          },
          children: l.days.map((r, f) => e.jsx(Ms, {
            day: r,
            holiday: l.holidays?.[r.date],
            isMobile: !0,
            place: f < M ? [1, f + 1] : [2, f - M + 1],
            lastRow: (f < M ? f + 1 : f - M + 1) === Math.max(Math.min(M, l.days.length), l.days.length - M),
            onClick: () => G(() => c.openRequest(r))
          }, r.date))
        }) : e.jsx(i, {
          sx: {
            display: "grid",
            gridTemplateColumns: o ? "repeat(2, minmax(0, 1fr))" : "minmax(0, 1fr)",
            columnGap: ce,
            alignItems: "start"
          },
          children: (o ? [l.days.slice(0, M), l.days.slice(M)] : [l.days]).map((r, f) => e.jsx(Ls, {
            days: r,
            holidays: l.holidays,
            onRequest: B => G(() => c.openRequest(B))
          }, f))
        })]
      })
    }, "month")];
  if (_.splice(1, 0, e.jsx(rs, {
    weeks: l.weeks ?? [],
    today: l.today.date,
    limitMinutes: l.weekly_limit_minutes
  }, "weekly")), l.expected_pay && _.splice(2, 0, e.jsx(Ws, {
    pay: l.expected_pay
  }, "pay")), s && c.geoEvents.length && _.splice(1, 0, e.jsx(Es, {
    events: c.geoEvents
  }, "geo")), _.push(e.jsx(Rs, {
    days: l.days,
    onOpenTrack: r => U.open(r, l.employee?.name ?? "")
  }, "away")), l.device && !Le && (!b || l.device.rejected)) {
    const r = e.jsx(Ht, {
      status: l.device,
      controller: W
    }, "device");
    l.device.state === "this" && !l.device.pending && !l.device.rejected ? _.push(r) : _.unshift(r);
  }
  if (E.items.length && _.push(e.jsx(Bt, {
    controller: E
  }, "shift-requests")), l.requests.length) {
    const r = [...l.requests.filter(f => f.status === "pending"), ...l.requests.filter(f => f.status !== "pending")].slice(0, Qe);
    _.push(e.jsx(N, {
      title: t("hr.myAttMyRequests"),
      action: l.requests.length > Qe ? e.jsx(Se, {
        onClick: fe.open,
        sx: {
          fontSize: 14,
          color: "primary.main",
          "&:hover": {
            textDecoration: "underline"
          }
        },
        children: t("hr.myAttRequestsAllN", {
          count: l.requests.length
        })
      }) : void 0,
      children: r.map(f => e.jsx(Xe, {
        req: f,
        onCancel: B => {
          c.cancelRequest(B);
        }
      }, f.seq))
    }, "requests"));
  }
  dt && !b && _.splice(1, 0, e.jsx(cs, {
    data: l,
    onPlan: c.openPlan,
    onVacation: j
  }, "leave"));
  const je = r => {
      if (s) return [];
      const f = [];
      for (const B of r) {
        const K = _.findIndex(Q => z.isValidElement(Q) && Q.key === B);
        K >= 0 && f.push(..._.splice(K, 1));
      }
      return f;
    },
    ee = !s && b,
    be = r => {
      const f = [];
      for (const B of r) {
        const K = _.findIndex(Q => z.isValidElement(Q) && Q.key === B);
        K >= 0 && f.push(..._.splice(K, 1));
      }
      return f;
    },
    xt = l.days.some(r => r.leaves.length > 0 || (r.clock?.outings?.length ?? 0) > 0),
    mt = c.geoEvents.length ? [e.jsx(N, {
      title: t("hr.myAttGeoToday"),
      children: ye
    }, "geo-today")] : [],
    ve = ee ? [...be(["late-reason", "device", "requests", "shift-requests"]), ...mt, ...be(["weekly", ...(xt ? ["away"] : []), "pay"])] : [],
    pt = ee ? be(["month"]) : [],
    ft = ee ? [] : [{
      cards: je(["today", "device-mini"]),
      fill: !0
    }, {
      cards: je(["leave", "away"]),
      fill: !0,
      fillIndex: 1
    }, {
      cards: je(["weekly", "requests"]),
      fill: !0
    }],
    Me = _.filter(r => (z.isValidElement(r) ? $s[String(r.key)] ?? "today" : "today") === g);
  return e.jsxs(e.Fragment, {
    children: [e.jsx(i, {
      sx: {
        minWidth: 0,
        "& > .stack-contents-layout": {
          pb: 0
        }
      },
      children: s ? e.jsxs(e.Fragment, {
        children: [e.jsx(qt, {
          value: g,
          options: n,
          onChange: r => r === "status" ? Kt("status") : p(r),
          ariaLabel: t("hr.myAttViewMine")
        }), e.jsx(ms, {
          attachHead: !0,
          children: Me.length ? Me : [e.jsx(N, {
            children: e.jsx(ie, {
              text: t("hr.myAttRequestsEmpty")
            })
          }, "empty")]
        })]
      }) : ee ? e.jsxs(Nt, {
        children: [ve.length ? e.jsx(i, {
          sx: {
            position: "sticky",
            top: 0,
            zIndex: 2,
            bgcolor: "background.paper",
            display: "grid",
            gridTemplateColumns: `repeat(${Math.min(ve.length, 4)}, minmax(0, 1fr))`,
            "& > *": {
              minWidth: 0
            },
            "& > *:not(:nth-of-type(4n + 1))": {
              borderLeft: `1px solid ${At}`
            }
          },
          children: ve
        }) : null, pt]
      }) : e.jsxs(e.Fragment, {
        children: [e.jsx(Ps, {
          columns: ft,
          sx: {
            mb: xe
          }
        }), e.jsx(_t, {
          gap: xe,
          children: _
        })]
      })
    }), e.jsx(Ss, {
      controller: c
    }), e.jsx(bs, {
      controller: E
    }), !b && e.jsx(Ut, {
      status: l.device,
      controller: W
    }), !s && e.jsxs(Tt, {
      anchor: "right",
      open: F,
      onClose: () => pe(!1),
      slotProps: {
        paper: {
          sx: {
            width: 440,
            maxWidth: "100vw"
          }
        }
      },
      children: [e.jsxs(i, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 1,
          px: 2,
          py: 1.5,
          borderBottom: "1px solid #e2e8f0"
        },
        children: [e.jsx(x, {
          sx: {
            fontSize: 18,
            fontWeight: 700,
            flex: 1
          },
          children: t("hr.myAttGeoToday")
        }), e.jsx(Ct, {
          "aria-label": t("hr.close"),
          onClick: () => pe(!1),
          children: e.jsx(Dt, {})
        })]
      }), e.jsx(i, {
        sx: {
          p: 2,
          overflowY: "auto"
        },
        children: e.jsx(ot, {
          events: c.geoEvents
        })
      })]
    }), U.modal.isOpen && e.jsx(gs, {
      track: U
    }), !b && e.jsxs(e.Fragment, {
      children: [e.jsx(Xt, {
        controller: c
      }), e.jsx(Zt, {
        controller: c
      }), e.jsx(ds, {
        controller: c
      }), e.jsx(Jt, {
        controller: c,
        plannedEnd: l.today.planned.end,
        onCheckOutNow: () => {
          c.checkOut();
        }
      }), e.jsx(es, {
        controller: c
      })]
    }), e.jsx(J, {
      open: fe.isOpen,
      onClose: fe.close,
      title: t("hr.myAttMyRequests"),
      width: "560px",
      fullScreen: s,
      mobilePresentation: s ? "slide" : "dialog",
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
        visible: !1
      },
      sections: [{
        id: "clock-requests",
        showTitle: !1,
        children: e.jsx(i, {
          children: (l?.requests ?? []).map(r => e.jsx(Xe, {
            req: r,
            onCancel: f => {
              c.cancelRequest(f);
            }
          }, r.seq))
        })
      }]
    }), e.jsx(Ds, {
      controller: c,
      data: l,
      onApplyOvertime: D,
      onOpenTrack: r => U.open(r, l.employee?.name ?? ""),
      onOpenRequest: r => {
        s ? xs(r) : (c.statModal.close(), window.setTimeout(() => a("/dashboard/approval/my-requests"), 150));
      }
    }), e.jsx(ys, {
      modal: ze,
      canAssign: l?.can_assign_hr === !0,
      onOpenSettings: () => window.setTimeout(() => a("/dashboard/team-settings"), 150)
    }), m && e.jsx(z.Suspense, {
      fallback: null,
      children: e.jsx(Os, {
        embed: {
          initialType: m.type,
          initialFormData: m.formData,
          onExited: () => {
            S(null), c.reload();
          }
        }
      }, m.key)
    })]
  });
}
export { kn as default };