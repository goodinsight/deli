import { r as u, u as K, j as i } from "./react-CjxcGQav.js";
import { bM as y, cz as A, D as q, bO as j, bT as E, dC as W, by as w, bv as M, cj as V, B as k, mB as G, bQ as P, K as z, eF as X, e as H, fq as U, y as Q, gd as $, kH as O, c2 as Z } from "../js.d/main-Cm9wS5wt.js";
import { C as J } from "./CallOutlined-B2W58-Kt.js";
import { A as L } from "./AccountAvatar-DtrhoS_d.js";
import { S } from "./squircle-CQM8EvXm.js";
import { z as Y } from "./bootstrapController-BMV_i07c.js";
import { m as C, n as _, z as T } from "./aliasStore-DiN6Kp-5.js";
import { o as B } from "./chatRoomHost-ImRyH_Na.js";
import { g as ee, p as te, j as ne, h as oe } from "./callStore-DH1_RYeP.js";
import { videoMeetingApi as re } from "./videoMeetingApi-BCL1yHsp.js";
import { u as se } from "./EmployeeSelectDialog-Cdnxeoz9.js";
const F = "taskbox.task.changed",
  I = "taskbox.task.read",
  D = "taskbox.external.changed";
function ae(e) {
  if (!e || typeof e != "object" || Array.isArray(e)) return null;
  const t = e,
    n = String(t.action ?? ""),
    o = Number(t.seq ?? 0);
  return n !== "upsert" && n !== "delete" || !Number.isInteger(o) || o <= 0 ? null : {
    action: n,
    seq: o,
    actor_account_seq: Number(t.actor_account_seq ?? 0) || 0,
    item: t.item ?? void 0
  };
}
function ve(e, t = !0) {
  const n = u.useRef(e);
  u.useEffect(() => {
    n.current = e;
  }, [e]), u.useEffect(() => {
    if (!t) return;
    const o = r => {
      const s = ae(r.data);
      s && n.current(s);
    };
    return y.addRealtimeEventListener(F, o), y.connectRealtime?.().catch(() => {}), () => {
      y.removeRealtimeEventListener(F, o);
    };
  }, [t]);
}
function ie(e) {
  if (!e || typeof e != "object" || Array.isArray(e)) return null;
  const t = e,
    n = Number(t.seq ?? 0),
    o = Number(t.reader_account_seq ?? 0);
  return !Number.isInteger(n) || n <= 0 || o <= 0 ? null : {
    seq: n,
    reader_account_seq: o
  };
}
function Se(e, t = !0) {
  const n = u.useRef(e);
  u.useEffect(() => {
    n.current = e;
  }, [e]), u.useEffect(() => {
    if (!t) return;
    const o = r => {
      const s = ie(r.data);
      s && n.current(s);
    };
    return y.addRealtimeEventListener(I, o), () => {
      y.removeRealtimeEventListener(I, o);
    };
  }, [t]);
}
function le(e) {
  if (!e || typeof e != "object" || Array.isArray(e)) return null;
  const t = e,
    n = String(t.action ?? ""),
    o = Number(t.seq ?? 0),
    r = Number(t.external_seq ?? 0);
  return n !== "upsert" && n !== "delete" || !(o > 0) || !(r > 0) ? null : {
    external_seq: r,
    action: n,
    seq: o,
    actor_account_seq: Number(t.actor_account_seq ?? 0) || 0
  };
}
function Ae(e, t = !0) {
  const n = u.useRef(e);
  u.useEffect(() => {
    n.current = e;
  }, [e]), u.useEffect(() => {
    if (!t) return;
    const o = r => {
      const s = le(r.data);
      s && n.current(s);
    };
    return y.addRealtimeEventListener(D, o), () => {
      y.removeRealtimeEventListener(D, o);
    };
  }, [t]);
}
function ce() {
  const [e, t] = u.useState(0),
    n = A(),
    o = q(),
    r = K(),
    s = u.useCallback(async l => {
      if (!(!l || e)) {
        t(l);
        try {
          const a = await C.openDirect(l, !1);
          _(a), await T(), B(a.seq);
        } catch (a) {
          j(a instanceof Error ? a.message : E("taskbox.openChatFailed"));
        } finally {
          t(0);
        }
      }
    }, [e]),
    f = u.useCallback(async (l, a) => {
      const p = [...new Set(l.filter(c => c > 0 && c !== a))];
      if (p.length <= 1) return null;
      const m = [...p].sort((c, x) => c - x).join(",");
      return (await C.listRooms()).find(c => c.kind === "group" && !c.secret && c.peers.map(x => x.account_seq).sort((x, b) => x - b).join(",") === m) ?? null;
    }, []),
    d = u.useCallback(async (l, a) => {
      const p = [...new Set(l.filter(m => m > 0 && m !== a))];
      return p.length <= 1 ? C.openDirect(p[0] ?? a, !1) : (await f(l, a)) ?? (await C.createGroup(p, !1));
    }, [f]),
    g = u.useCallback(async (l, a) => {
      if (e) return;
      const p = [...new Set(l.filter(m => m > 0 && m !== a))];
      if (p.length <= 1) {
        await s(p[0] ?? a);
        return;
      }
      t(-1);
      try {
        const m = await d(l, a);
        _(m), await T(), B(m.seq);
      } catch (m) {
        j(m instanceof Error ? m.message : E("taskbox.openChatFailed"));
      } finally {
        t(0);
      }
    }, [e, s, d]),
    h = u.useCallback(async (l, a, p = !0) => {
      if (e) return;
      if (!W(n, "video_meeting")) {
        w(E("taskbox.videoMeetingDisabled"));
        return;
      }
      if (ee().session) {
        w(E("taskbox.alreadyInCall"));
        return;
      }
      if (l.filter(c => c > 0 && c !== a).length === 0) {
        w(E("taskbox.noOneToCall"));
        return;
      }
      te(), t(-2);
      try {
        const c = await d(l, a);
        _(c);
        const x = o ? "full" : "pip",
          b = await re.open("chat", c.seq).catch(() => null),
          N = b?.meeting ? await ne(b.meeting.code, p, x) : await oe(c.seq, p, x);
        o && r(`/meet/${N.code}`);
      } catch (c) {
        j(c instanceof Error ? c.message : E("taskbox.videoStartFailed"));
      } finally {
        t(0);
      }
    }, [e, n, o, r, d]);
  return {
    opening: e,
    openChat: s,
    openGroupChat: g,
    openVideoMeeting: h,
    findMembersRoom: f
  };
}
const R = 144;
function ue() {
  const {
      state: e
    } = Y(),
    t = e.useValue("data.employee");
  return u.useMemo(() => {
    const n = new Map();
    for (const o of t ?? []) {
      const r = String(o.name ?? "").trim();
      r && !n.has(r) && n.set(r, o);
    }
    return n;
  }, [t]);
}
const v = new Map();
function fe(e) {
  let t = v.get(e);
  return t || (t = Z.listMembers(e).then(n => new Map(n.members.map(o => [Number(o.account_seq), String(o.email ?? "")]))).catch(() => (v.delete(e), new Map())), v.set(e, t)), t;
}
function me({
  accountSeq: e,
  color: t,
  onCompose: n,
  known: o
}) {
  const r = M(),
    s = Number(A()?.seq ?? 0),
    [f, d] = u.useState(o ?? ""),
    g = $(!0).length > 0;
  return u.useEffect(() => {
    if (o !== void 0 || !s || e <= 0) return;
    let h = !0;
    return fe(s).then(l => h && d(l.get(e) ?? "")), () => {
      h = !1;
    };
  }, [s, e, o]), f ? g ? i.jsx(k, {
    component: "span",
    role: "link",
    tabIndex: 0,
    title: r("hr.employeeWriteMail"),
    onClick: () => {
      n(), O(f);
    },
    onKeyDown: h => {
      h.key === "Enter" && (n(), O(f));
    },
    sx: {
      fontSize: 14,
      color: "primary.main",
      wordBreak: "break-all",
      textAlign: "center",
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline"
      }
    },
    children: f
  }) : i.jsx(k, {
    sx: {
      fontSize: 14,
      color: t,
      wordBreak: "break-all",
      textAlign: "center"
    },
    children: f
  }) : null;
}
function de({
  person: e,
  size: t,
  iconFontSize: n,
  chat: o = !0,
  label: r,
  labelGap: s = .75,
  fill: f = !1
}) {
  const d = M(),
    [g, h] = u.useState(null);
  return i.jsxs(i.Fragment, {
    children: [i.jsxs(V, {
      "aria-label": d("taskbox.profileOf", {
        name: e.name || d("taskbox.thisPerson")
      }),
      onClick: l => {
        l.stopPropagation(), h(l.currentTarget);
      },
      sx: r ? f ? {
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: s,
        px: 1,
        minWidth: 0,
        font: "inherit",
        color: "inherit"
      } : {
        display: "inline-flex",
        alignItems: "center",
        gap: s,
        maxWidth: "100%",
        minWidth: 0,
        font: "inherit",
        color: "inherit",
        borderRadius: 1
      } : {
        flexShrink: 0,
        ...S
      },
      children: [i.jsx(L, {
        src: e.src ?? "",
        avatarSx: {
          width: t,
          height: t,
          flexShrink: 0,
          ...S
        },
        iconFontSize: n ?? Math.round(t * .6)
      }), r ? i.jsx(k, {
        component: "span",
        sx: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          minWidth: 0
        },
        children: r
      }) : null]
    }), g ? i.jsx(pe, {
      anchor: g,
      person: e,
      chat: o,
      onClose: () => h(null)
    }) : null]
  });
}
function pe({
  anchor: e,
  person: t,
  chat: n = !0,
  onClose: o,
  onAction: r
}) {
  const {
      colors: s
    } = G(),
    f = M(),
    d = ce(),
    g = ue(),
    h = se().useValue("account"),
    l = g.get(t.name.trim()),
    a = t.accountSeq || Number(l?.login_account_seq ?? 0),
    p = t.position ?? String(l?.position ?? ""),
    m = a > 0 && a === Number(h?.seq ?? 0),
    c = [p, t.owner ? f("taskbox.owner") : ""].filter(Boolean).join(" · "),
    x = W(A(), "video_meeting"),
    b = N => {
      o(), r?.();
    };
  return i.jsx(i.Fragment, {
    children: i.jsx(he, {
      anchor: e,
      onClose: o,
      children: i.jsxs(k, {
        sx: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          p: 2
        },
        children: [i.jsx(L, {
          src: t.src ?? "",
          avatarSx: {
            width: R,
            height: R,
            ...S
          },
          iconFontSize: Math.round(R * .6)
        }), i.jsxs(k, {
          sx: {
            display: "flex",
            alignItems: "baseline",
            justifyContent: "center",
            flexWrap: "wrap",
            columnGap: .75,
            textAlign: "center",
            wordBreak: "keep-all"
          },
          children: [i.jsx(k, {
            component: "span",
            sx: {
              fontSize: 16,
              fontWeight: 700,
              color: s.textPrimary
            },
            children: t.name || f("taskbox.accountOf", {
              seq: a
            })
          }), c ? i.jsx(k, {
            component: "span",
            sx: {
              fontSize: 14,
              color: s.textMuted
            },
            children: c
          }) : null]
        }), i.jsx(me, {
          accountSeq: a,
          color: s.textMuted,
          onCompose: () => b(),
          known: t.email
        }), a > 0 && n ? i.jsxs(k, {
          sx: {
            display: "flex",
            gap: 1.5,
            width: "100%",
            mt: 1
          },
          children: [i.jsx(P, {
            variant: "contained",
            fullWidth: !0,
            disableElevation: !0,
            startIcon: d.opening === a ? i.jsx(z, {
              size: 16,
              color: "inherit"
            }) : i.jsx(X, {
              sx: {
                fontSize: 18
              }
            }),
            disabled: d.opening !== 0,
            onClick: () => {
              b(), d.openChat(a);
            },
            sx: {
              fontSize: 14,
              textTransform: "none"
            },
            children: f(m ? "taskbox.selfChat" : "taskbox.chatWith")
          }), !m && x ? i.jsx(P, {
            variant: "outlined",
            fullWidth: !0,
            startIcon: d.opening === -2 ? i.jsx(z, {
              size: 16,
              color: "inherit"
            }) : i.jsx(J, {
              sx: {
                fontSize: 18
              }
            }),
            disabled: d.opening !== 0,
            onClick: () => {
              b(), d.openVideoMeeting([a], Number(h?.seq ?? 0), !1);
            },
            sx: {
              fontSize: 14,
              textTransform: "none"
            },
            children: f("taskbox.callWith")
          }) : null]
        }) : null]
      })
    })
  });
}
function he({
  anchor: e,
  onClose: t,
  children: n
}) {
  const o = q(),
    r = H({
      onClose: t
    });
  return u.useEffect(() => {
    r.open();
  }, []), o ? i.jsx(U, {
    open: r.isOpen,
    onClose: () => r.close(),
    onClick: s => s.stopPropagation(),
    transitionDuration: 0,
    slotProps: {
      paper: {
        sx: {
          width: 300,
          maxWidth: "calc(100% - 32px)",
          m: 2,
          borderRadius: 2
        }
      }
    },
    children: n
  }) : i.jsx(Q, {
    open: r.isOpen,
    anchorEl: e,
    onClose: () => r.close(),
    onClick: s => s.stopPropagation(),
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left"
    },
    transitionDuration: 0,
    slotProps: {
      paper: {
        sx: {
          width: 280,
          borderRadius: 2
        }
      }
    },
    children: n
  });
}
function Me({
  name: e,
  src: t,
  size: n = 32
}) {
  return i.jsx(de, {
    person: {
      name: e,
      src: t
    },
    size: n
  });
}
export { Me as F, pe as P, de as a, ce as b, Ae as c, Se as d, ve as u };