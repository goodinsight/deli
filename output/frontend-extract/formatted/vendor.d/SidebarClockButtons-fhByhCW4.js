import { l as N, r as A, j as t } from "./react-CjxcGQav.js";
import { bv as _, B as i, L as q, sf as X, bQ as d, K as B, cW as O } from "../js.d/main-Cm9wS5wt.js";
import { u as K, c as P, n as U, L as G } from "./MyAttendanceCards-R4z2WqwF.js";
import { L as Q } from "./Logout-B1FcT8mE.js";
import { m as F } from "./attendanceMgmt-B_e3bPBn.js";
import { u as J } from "./sharedMyAttendance-DmyX71sh.js";
import { C as V } from "./AttendanceParts-mHb1cK0h.js";
import { d as Y } from "./attendanceMgmtApi-CC4DR0XR.js";
import "./stylis-DdLD6a3t.js";
import "./FreeBreakfastOutlined-DsHDTKlm.js";
import "./attendance-CHHNhWTj.js";
import "./i18nLabels-BNTLL7cu.js";
import "./attendanceBio-C-9dHF9O.js";
const T = {
    height: 40,
    "&.MuiButton-sizeMedium": {
      minHeight: 40
    }
  },
  p = {
    ...T,
    py: 0,
    fontSize: "0.875rem",
    fontWeight: 700,
    borderRadius: 1.5
  },
  I = {
    ...T,
    py: 0,
    flex: "1 1 0",
    minWidth: 0,
    fontSize: "0.875rem",
    borderRadius: 1.5,
    whiteSpace: "nowrap"
  };
function ue() {
  const e = _();
  K();
  const b = J(),
    [W] = N(),
    w = (W.get("qr") ?? "").trim(),
    [z, u] = A.useState(!1),
    [h, y] = A.useState(null),
    n = b?.controller,
    s = n?.data;
  if (!n || !s || !s.linked) return null;
  const {
    working: l,
    done: E,
    qrOnly: D,
    outing: R,
    away: k,
    allowOutside: g,
    outBlocked: H,
    planned: S,
    earlyLeave: m,
    earlyMinutes: M,
    lateOut: L
  } = P(s, w, U());
  if (E) return null;
  const r = s.device,
    f = !!(r && r.state !== "this");
  if (r && f && !l) {
    const o = b.device;
    return t.jsx(i, {
      className: "sidebar-clock-buttons",
      sx: {
        boxSizing: "border-box",
        px: 2,
        pt: 2
      },
      children: t.jsxs(i, {
        sx: {
          border: "1px solid #fecaca",
          bgcolor: "#fef2f2",
          borderRadius: 1.5,
          p: 1.5,
          display: "flex",
          flexDirection: "column",
          gap: 1
        },
        children: [t.jsx(q, {
          sx: {
            fontSize: 14,
            fontWeight: 700,
            color: "#b91c1c",
            wordBreak: "keep-all"
          },
          children: r.state === "none" ? e("hr.myAttDeviceNone") : e("hr.myAttSidebarCannotRecord")
        }), r.active ? t.jsxs(i, {
          sx: {
            display: "flex",
            alignItems: "flex-start",
            gap: .75,
            minWidth: 0,
            fontSize: 13,
            color: "text.secondary"
          },
          children: [t.jsx(X, {
            sx: {
              fontSize: 18,
              flexShrink: 0,
              mt: "1px"
            }
          }), t.jsx(i, {
            component: "span",
            sx: {
              minWidth: 0,
              flex: 1,
              overflowWrap: "anywhere",
              wordBreak: "keep-all"
            },
            children: e("hr.myAttSidebarRegisteredDevice", {
              device: Y(r.active.label)
            })
          })]
        }) : null, r.pending ? t.jsx(i, {
          children: t.jsx(V, {
            label: e("hr.myAttAwaitingApproval"),
            tone: {
              color: "#b45309",
              bg: "#fef3c7"
            }
          })
        }) : r.state === "none" ? t.jsx(d, {
          fullWidth: !0,
          variant: "contained",
          disableElevation: !0,
          disabled: o.busy,
          onClick: () => {
            o.register();
          },
          sx: p,
          children: o.busy ? t.jsx(B, {
            size: 16,
            color: "inherit"
          }) : e("hr.myAttRegisterThis")
        }) : t.jsx(d, {
          fullWidth: !0,
          variant: "outlined",
          disabled: o.busy,
          onClick: o.openChange,
          sx: {
            ...I,
            bgcolor: "background.paper"
          },
          children: e("hr.myAttRequestThisDevice")
        })]
      })
    });
  }
  const c = n.busy,
    a = o => () => {
      c || o();
    },
    v = s.today.on_break,
    C = n.offHours?.from === "in" ? n.offHours.message : "",
    x = t.jsx(B, {
      size: 16,
      color: "inherit"
    }),
    j = l ? R ? f ? [] : [{
      key: "return",
      label: e("hr.myAttReturn"),
      disabled: !1,
      onClick: a(() => {
        n.endOuting();
      }),
      busy: c === "outing"
    }] : [{
      key: "break",
      label: e(v ? "hr.myAttBreakEnd" : "hr.myAttBreakStart"),
      disabled: !1,
      onClick: a(() => {
        n.toggleBreak();
      }),
      busy: c === "break"
    }, ...(g && !f ? [{
      key: "outing",
      label: e("hr.attSetClockMethodOutside"),
      disabled: v,
      onClick: a(() => n.openOuting("start"))
    }] : [])] : g && !k ? [{
      key: "outside-in",
      label: e("hr.myAttClockInOutside"),
      disabled: !1,
      onClick: a(() => n.openOuting("checkin"))
    }] : [];
  return t.jsxs(i, {
    className: "sidebar-clock-buttons",
    sx: {
      boxSizing: "border-box",
      px: 2,
      pt: 2,
      display: "flex",
      flexDirection: "column",
      gap: 1
    },
    children: [l ? t.jsx(d, {
      ref: y,
      fullWidth: !0,
      variant: "contained",
      color: "secondary",
      disableElevation: !0,
      startIcon: c === "out" ? x : t.jsx(Q, {}),
      disabled: H,
      onClick: a(() => L ? n.openLateOut(S.end) : u(!0)),
      sx: p,
      children: e(m ? "hr.attSetStatEarly" : "hr.attSetDayStatusDone")
    }) : t.jsx(d, {
      ref: y,
      fullWidth: !0,
      variant: "contained",
      disableElevation: !0,
      startIcon: c === "in" ? x : t.jsx(G, {}),
      disabled: D && !k,
      onClick: a(() => {
        n.checkIn();
      }),
      sx: p,
      children: e("hr.attSetStart")
    }), j.length > 0 && t.jsx(i, {
      sx: {
        display: "flex",
        gap: 1
      },
      children: j.map(o => t.jsx(d, {
        variant: "outlined",
        disabled: o.disabled,
        onClick: o.onClick,
        sx: I,
        children: o.busy ? x : o.label
      }, o.key))
    }), t.jsx(O, {
      open: !l && !!C && !!h,
      anchorEl: h,
      title: e("hr.myAttOffHoursConfirm", {
        message: C
      }),
      confirmText: e("hr.myAttRecordClockIn"),
      cancelText: e("hr.cancel"),
      placement: "right",
      minWidth: 260,
      zIndex: 1401,
      onCancel: n.cancelOffHours,
      onConfirm: n.confirmOffHours
    }), t.jsx(O, {
      open: l && z,
      anchorEl: h,
      title: t.jsx(i, {
        component: "span",
        sx: {
          whiteSpace: "pre-line"
        },
        children: m ? e("hr.myAttEarlyConfirm", {
          end: S.end,
          duration: F(M)
        }) : e("hr.myAttClockOutConfirm")
      }),
      confirmText: e(m ? "hr.attSetStatEarly" : "hr.attSetDayStatusDone"),
      cancelText: e("hr.cancel"),
      placement: "right",
      minWidth: 260,
      zIndex: 1401,
      onCancel: () => u(!1),
      onConfirm: () => {
        u(!1), n.checkOut();
      }
    })]
  });
}
export { ue as SidebarClockButtons };