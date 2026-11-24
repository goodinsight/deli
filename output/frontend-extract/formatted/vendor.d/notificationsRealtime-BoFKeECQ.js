import { r as y, u as ue, j as k } from "./react-CjxcGQav.js";
import { e as B, c8 as J, ak as de, bT as n, cg as M, lb as fe, bx as W, z as T, e1 as Q, i as L, dx as X, ls as D, bO as G, bv as me, D as he, c4 as ge, ca as ye, L as _e, cn as pe, cI as ke, bQ as Ae, K as be, bM as R } from "../js.d/main-Cm9wS5wt.js";
import { m as p, s as we } from "./attendanceMgmtApi-CC4DR0XR.js";
import { I as ve } from "./InlineErrorAlert-D9ICJPt7.js";
let F = 0;
const j = new Set();
function Re(e) {
  const t = Math.max(0, Math.floor(Number(e) || 0));
  if (t !== F) {
    F = t;
    for (const o of j) o();
  }
}
function Pe() {
  return y.useSyncExternalStore(e => (j.add(e), () => j.delete(e)), () => F);
}
const x = "/dashboard/attendance",
  Y = 5 * 6e4,
  oe = "taskham-attendance-geo-asked-3";
let S = 0,
  Z = 0;
const Ee = {
  clock_in: {
    title: "hr.myAttGeoArrivedTitle",
    message: e => n("hr.myAttGeoArrivedMessage", {
      place: e || n("hr.myAttWorkplace")
    }),
    confirmText: "hr.myAttClockInNow"
  },
  clock_out: {
    title: "hr.myAttGeoOutTitle",
    message: e => n("hr.myAttGeoOutMessage", {
      place: e || n("hr.myAttWorkplace")
    }),
    confirmText: "hr.myAttGoMine"
  },
  early_or_outing: {
    title: "hr.myAttGeoEarlyTitle",
    message: e => n("hr.myAttGeoEarlyMessage", {
      place: e || n("hr.myAttWorkplace")
    }),
    confirmText: "hr.myAttGoMine"
  }
};
async function C() {
  try {
    const e = await p.geofence();
    we(e.device_blocked === !0);
    const t = e.auto_check_in?.enabled ? {
        enabled: !0,
        token: e.auto_check_in.token,
        url: new URL(`${M}/v1/hr/my-attendance/auto-check-in`, window.location.origin).toString(),
        wifi: e.auto_check_in.wifi === !0
      } : {
        enabled: !1,
        token: "",
        url: "",
        wifi: !1
      },
      o = e.geo_report?.token ? {
        token: e.geo_report.token,
        url: new URL(`${M}/v1/hr/my-attendance/geo-event/bg`, window.location.origin).toString()
      } : {
        token: "",
        url: ""
      },
      u = {
        enabled: e.outing_track?.enabled === !0,
        url: new URL(`${M}/v1/hr/my-attendance/track/bg`, window.location.origin).toString()
      };
    return fe({
      type: "SET_WORK_GEOFENCES",
      ...e,
      auto_check_in: t,
      geo_report: o,
      outing_track: u
    }), Re(e.late_reason_due ?? 0), e;
  } catch {
    return null;
  }
}
async function Ie() {
  if (!navigator.geolocation) return !1;
  if (L()) return !0;
  try {
    return (await navigator.permissions.query({
      name: "geolocation"
    })).state === "granted";
  } catch {
    return !1;
  }
}
async function ee(e) {
  const t = await D();
  return {
    lat: e.coords.latitude,
    lng: e.coords.longitude,
    accuracy: e.coords.accuracy,
    ...(t ? {
      integrity: t
    } : {})
  };
}
function Te() {
  return new Promise((e, t) => navigator.geolocation.getCurrentPosition(e, t, {
    enableHighAccuracy: !0,
    timeout: 15e3,
    maximumAge: 6e4
  }));
}
function se(e) {
  try {
    const t = JSON.parse(localStorage.getItem(oe) ?? "[]");
    return Array.isArray(t) ? t.filter(o => typeof o == "string" && o.startsWith(`${e}|`)) : [];
  } catch {
    return [];
  }
}
function te(e) {
  return se(e.split("|")[0]).includes(e);
}
function ne(e) {
  try {
    const t = se(e.split("|")[0]);
    t.includes(e) || t.push(e), localStorage.setItem(oe, JSON.stringify(t));
  } catch {}
}
function Ve(e) {
  const t = ue(),
    o = y.useRef(!1),
    u = B({
      modalId: "hr-geo-late-reason-dialog"
    }),
    l = J({
      stateId: "hr-geo-late-reason-ui",
      initialValues: {
        saving: !1,
        error: "",
        message: ""
      }
    }),
    d = y.useRef({}),
    g = B({
      modalId: "hr-auto-pending-dialog"
    }),
    f = J({
      stateId: "hr-auto-pending-ui",
      initialValues: {
        kind: "",
        at: "",
        place: "",
        endsAt: 0,
        total: 5 * 6e4,
        busy: !1
      }
    }),
    _ = (s, a) => {
      const r = Number.isFinite(a.remain_ms) ? a.remain_ms : Math.max(0, a.due - Date.now());
      f.setValues({
        kind: s,
        at: a.at,
        place: a.place,
        endsAt: Date.now() + r,
        total: a.total || 5 * 6e4,
        busy: !1
      }), g.isOpen || g.open();
    },
    m = async s => {
      const a = f.getValues().kind,
        r = f.getValues().at;
      if (!(!a || f.getValues().busy)) {
        f.setValue("busy", !0);
        try {
          const i = await p.autoPending(a, s);
          g.close();
          const h = (i.check_out_at || i.returned_at || r).slice(11, 16);
          s === "cancel" ? W(a === "out" ? n("hr.myAttKeepWorking") : n("hr.myAttKeepOuting")) : (i.check_out_at || i.returned_at) && W(a === "out" ? n("hr.myAttRecordedAt", {
            time: h
          }) : n("hr.myAttReturnedAt", {
            time: h
          })), C();
        } catch (i) {
          G(i instanceof Error ? i.message : n("hr.errProcess"));
        } finally {
          f.setValue("busy", !1);
        }
      }
    },
    K = s => {
      if (s?.auto_out) _("out", s.auto_out);else if (s?.auto_return) _("return", s.auto_return);else return !1;
      return !0;
    },
    E = (s, a = !1) => {
      const r = a ? n("hr.myAttAutoClockedIn") : n("hr.myAttClockedIn");
      W(s ? n("hr.myAttWithTime", {
        text: r,
        time: s.slice(11, 16)
      }) : n("hr.myAttSentence", {
        text: r
      })), C();
    },
    N = async s => {
      const a = await p.checkIn(s);
      if (a.need_late_reason) {
        d.current = s, U.setFormValues({
          reason: ""
        }), l.setValues({
          saving: !1,
          error: "",
          message: a.message ?? ""
        }), u.open();
        return;
      }
      if (a.need_confirm) {
        (await T({
          title: n("hr.myAttOffHoursTitle"),
          message: n("hr.myAttOffHoursConfirm", {
            message: a.message ?? ""
          }),
          confirmText: n("hr.myAttRecordClockIn"),
          cancelText: n("hr.cancel")
        })) && (await N({
          ...s,
          confirm_off_hours: !0
        }));
        return;
      }
      E(a.check_in_at);
    },
    U = de({
      formId: "hr-geo-late-reason-form",
      initialValues: {
        reason: ""
      },
      onValidate: s => s.reason.replace(/[^\p{L}\p{N}]/gu, "").length < 2 ? (l.setValue("error", n("hr.myAttErrLateReasonShort")), !1) : !0,
      onSubmit: async s => {
        l.setValues({
          saving: !0,
          error: ""
        });
        try {
          const a = await p.checkIn({
            ...d.current,
            late_reason: s.reason.trim()
          });
          return u.close(), l.setValue("saving", !1), E(a.check_in_at), !0;
        } catch (a) {
          return l.setValues({
            saving: !1,
            error: a instanceof Error ? a.message : n("hr.errRecordClockIn")
          }), !1;
        }
      }
    }),
    q = y.useRef(E);
  q.current = E;
  const O = y.useRef(N);
  O.current = N;
  const b = y.useRef(K);
  return b.current = K, y.useEffect(() => {
    if (!e) return;
    Z !== e && (Z = e, S = 0);
    const s = async () => {
      if (!(o.current || document.visibilityState !== "visible" || Date.now() - S < Y)) {
        o.current = !0, S = Date.now();
        try {
          await Q();
          const r = await C();
          if (b.current(r)) return;
          if (r?.away && r.auto_check_in?.wifi && L()) {
            const [c, v] = await Promise.all([X(), D()]);
            if (c && (c.ssid || c.bssid)) {
              const I = await p.checkIn({
                wifi: c,
                ...(v ? {
                  integrity: v
                } : {}),
                auto: !0
              }).catch(() => null);
              if (b.current({
                auto_return: I?.auto_return ?? null
              })) return;
            }
          }
          if (r?.auto_check_in?.wifi && !r.checked_in && L()) {
            const [c, v] = await Promise.all([X(), D()]);
            if (c && (c.ssid || c.bssid)) {
              const I = {
                  wifi: c,
                  ...(v ? {
                    integrity: v
                  } : {})
                },
                V = await p.checkIn({
                  ...I,
                  auto: !0
                }).catch(() => null);
              if (V?.check_in_at) {
                q.current(V.check_in_at, !0);
                return;
              }
              const H = `${r.work_date}|${r.org_seq}|clock_in`;
              if (V?.auto_closed && !te(H) && !window.location.pathname.startsWith(x)) {
                if (ne(H), await T({
                  title: n("hr.myAttWifiConnectedTitle"),
                  message: n("hr.myAttWifiConnectedMessage"),
                  confirmText: n("hr.myAttClockInNow"),
                  cancelText: n("hr.myAttLater")
                })) try {
                  await O.current(I);
                } catch (z) {
                  G(z instanceof Error ? z.message : n("hr.errRecordClockIn"));
                }
                return;
              }
            }
          }
          if (!r?.enabled || r.checked_out && !r.away || !(await Ie())) return;
          const i = await Te();
          r.away && r.outing_track?.enabled && p.track({
            lat: i.coords.latitude,
            lng: i.coords.longitude,
            accuracy: i.coords.accuracy
          }).catch(() => {});
          const h = await p.geoEvent({
            lat: i.coords.latitude,
            lng: i.coords.longitude,
            accuracy: i.coords.accuracy,
            source: L() ? "app_open" : "web",
            silent: !0
          });
          if (b.current(h)) return;
          const ce = h.changed ? h.kind === "enter" : h.inside === !0,
            A = h.prompt && h.prompt !== "none" ? h.prompt : ce && !r.checked_in ? "clock_in" : "";
          if (A === "clock_in" && r.auto_check_in?.open) {
            const c = await p.checkIn({
              ...(await ee(i)),
              auto: !0
            });
            if (c.check_in_at) {
              q.current(c.check_in_at, !0);
              return;
            }
          }
          const w = Ee[A],
            $ = `${r.work_date}|${r.org_seq}|${A}`,
            le = A !== "clock_in" && h.changed === !0;
          if (!w || !le && te($) || window.location.pathname.startsWith(x)) return;
          ne($);
          const P = h.place || r.locations[0]?.name || "";
          if (A === "clock_in" && r.gps_check_in === !1) {
            (await T({
              title: n(w.title),
              message: r.check_in_hint ? n("hr.myAttEnteredHint", {
                place: P || n("hr.myAttWorkplace"),
                hint: r.check_in_hint
              }) : n("hr.myAttEntered", {
                place: P || n("hr.myAttWorkplace")
              }),
              confirmText: n("hr.myAttGoMine"),
              cancelText: n("hr.myAttLater")
            })) && t(x);
            return;
          }
          if (!(await T({
            title: n(w.title),
            message: w.message(P),
            confirmText: n(w.confirmText),
            cancelText: n("hr.myAttLater")
          }))) return;
          if (A !== "clock_in") {
            t(x);
            return;
          }
          try {
            await O.current(await ee(i));
          } catch (c) {
            G(c instanceof Error ? c.message : n("hr.errRecordClockIn"));
          }
        } catch {} finally {
          o.current = !1;
        }
      }
    };
    s();
    const a = () => {
      document.visibilityState === "visible" && (Date.now() - S < Y ? Q().then(() => C()).then(r => b.current(r)) : s());
    };
    return document.addEventListener("visibilitychange", a), () => document.removeEventListener("visibilitychange", a);
  }, [e, t]), {
    lateForm: U,
    lateUi: l,
    lateModal: u,
    pendingModal: g,
    pendingUi: f,
    answerPending: m
  };
}
function Me({
  controller: e
}) {
  const t = me(),
    {
      lateForm: o,
      lateUi: u,
      lateModal: l
    } = e,
    d = he(),
    g = !!u.useValue("saving"),
    f = String(u.useValue("error") ?? ""),
    _ = String(u.useValue("message") ?? ""),
    m = [{
      id: "late-reason",
      title: t("hr.reason"),
      children: k.jsxs(ge, {
        spacing: ye,
        children: [_ && k.jsx(_e, {
          sx: {
            fontSize: 15
          },
          children: t("hr.myAttLateReasonMsg", {
            message: _
          })
        }), k.jsx(pe, {
          form: o,
          name: "reason",
          label: t("hr.myAttLateReason"),
          minRows: 3,
          disabled: g,
          slotProps: {
            htmlInput: {
              maxLength: 300
            }
          },
          fullWidth: !0
        }), f && k.jsx(ve, {
          message: f
        })]
      })
    }];
  return k.jsx(ke, {
    open: l.isOpen,
    onClose: l.close,
    title: t("hr.myAttLateInTitle"),
    width: "480px",
    fullScreen: d,
    mobilePresentation: d ? "slide" : "dialog",
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
      right: k.jsx(Ae, {
        variant: "contained",
        onClick: () => {
          o.submit();
        },
        disabled: g,
        sx: {
          minWidth: 96
        },
        children: g ? k.jsx(be, {
          size: 20,
          color: "inherit"
        }) : t("hr.attSetStart")
      })
    },
    sections: m
  });
}
const re = "notification.created",
  ae = "notification.state";
function ie(e) {
  return !e || typeof e != "object" || Array.isArray(e) ? null : e;
}
function xe(e) {
  const t = ie(e);
  if (!t) return null;
  const o = Number(t.seq ?? 0);
  return !Number.isInteger(o) || o <= 0 ? null : {
    seq: o,
    type: String(t.type ?? ""),
    title: String(t.title ?? ""),
    body: t.body === void 0 || t.body === null ? void 0 : String(t.body),
    target_seq: Number(t.target_seq ?? 0) || void 0,
    recipient_account_seq: Number(t.recipient_account_seq ?? 0) || 0,
    external_seq: Number(t.external_seq ?? 0) || void 0
  };
}
function Se(e) {
  const t = ie(e);
  if (!t) return null;
  const o = Number(t.account_seq ?? 0);
  if (!Number.isInteger(o) || o <= 0) return null;
  const l = (Array.isArray(t.seqs) ? t.seqs : []).map(d => Number(d ?? 0)).filter(d => Number.isInteger(d) && d > 0);
  return l.length === 0 ? null : {
    account_seq: o,
    seqs: l,
    read: typeof t.read == "boolean" ? t.read : void 0,
    deleted: typeof t.deleted == "boolean" ? t.deleted : void 0
  };
}
function We(e) {
  const {
      myAccountSeq: t,
      onCreated: o,
      onState: u
    } = e,
    l = y.useRef(o),
    d = y.useRef(u);
  y.useEffect(() => {
    l.current = o, d.current = u;
  }, [o, u]), y.useEffect(() => {
    if (t <= 0) return;
    const g = _ => {
        const m = xe(_.data);
        m && (m.recipient_account_seq > 0 && m.recipient_account_seq !== t || l.current(m));
      },
      f = _ => {
        const m = Se(_.data);
        !m || m.account_seq !== t || d.current(m);
      };
    return R.addRealtimeEventListener(re, g), R.addRealtimeEventListener(ae, f), R.connectRealtime?.().catch(() => {}), () => {
      R.removeRealtimeEventListener(re, g), R.removeRealtimeEventListener(ae, f);
    };
  }, [t]);
}
export { Me as L, Ve as a, We as b, C as c, Re as s, Pe as u };