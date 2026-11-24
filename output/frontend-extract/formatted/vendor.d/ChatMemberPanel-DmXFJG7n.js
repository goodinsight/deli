import { j as e, r as x, u as Ye } from "./react-CjxcGQav.js";
import { j as an, k as rn, l as cn, m as Y, n as $e, d as me, o as he, q as ln, t as Et, v as un, w as hn, x as dn, c as At, y as ct, z as it } from "./aliasStore-DiN6Kp-5.js";
import { c as zt, bH as Ke, B as d, fm as Ee, s as j, bv as Z, D as Ae, cz as ge, cZ as pn, c2 as re, cI as Tt, K as xe, bQ as Ge, a1 as qe, L as C, c1 as Me, bO as X, bT as P, fq as ze, bI as B, go as Je, fs as Ot, u as be, ik as fn, bh as Fe, fr as xn, d4 as mn, ft as gn, bU as lt, e as Ue, dC as Wt, gL as Dt, ks as bn, o as jn, d8 as yn, dj as Sn, cW as Lt, g5 as Ft, I as vn, ci as kn, cl as Cn, y as _n, gM as wn, jl as Mn, l0 as Rn, dN as qn, by as In, G as Ne, bx as Pn, iA as En, a_ as An, eF as zn, kM as Tn, l1 as On, j as Wn, fo as ut, w as ht, fp as dt, d5 as pt, b as ft, aR as Dn, i2 as xt, c_ as mt, cN as gt, iI as bt, gK as Ln } from "../js.d/main-Cm9wS5wt.js";
import { S as je, a as Ce } from "./squircle-CQM8EvXm.js";
import { a as de, f as Fn } from "./ForwardMessageDialog-CaXjV13U.js";
import { P as Te } from "./Person-DnoEHesw.js";
import { r as Ve, a as Nn, C as Hn, c as Bn, b as $n, d as Gn, s as Nt, e as Un, f as Vn, g as Xn, n as Yn } from "./chatPrefs-Be7HCbgk.js";
import { P as Kn } from "./PhotoLibraryOutlined-7mbJKs9u.js";
import { I as Jn } from "./InsertDriveFileOutlined-DcD-Yh-v.js";
import { L as Qn } from "./Link-CVsHTXRQ.js";
import { L as Zn } from "./Logout-B1FcT8mE.js";
import { P as es, a as ts, C as ns, V as ss } from "./ChatCallButtons-TGIgJ8cF.js";
import { c as Ht } from "./orgTree-Dh5HFjBo.js";
import { u as os } from "./useFileViewer-B-2ewnr3.js";
import { f as as } from "./formatFileSize-Cwk2MLba.js";
import { c as Re, d as rs, C as cs, r as is } from "./largeFile-DlThjw63.js";
import { p as jt } from "./profileApi-Btafs-pM.js";
import { c as ls, p as us, a as hs, d as ds } from "./ChatRoomView-DTjnT2W1.js";
import { u as Bt } from "./profileEcho-q2FaD_03.js";
import { P as yt } from "./PickMenuDialog-BtpyEh4Z.js";
import { u as ps, b as fs } from "./EmployeeFormDialog-BHKK47Dg.js";
import { e as xs } from "./employeeApi-CdGzOYcj.js";
import { W as ms } from "./WorkspacesOutlined-DwFzV-9Z.js";
import { P as gs } from "./PhoneOutlined-Bjc_e42S.js";
import { videoMeetingApi as bs } from "./videoMeetingApi-BCL1yHsp.js";
import { g as St, p as js, j as ys, h as Ss } from "./callStore-DH1_RYeP.js";
const vs = zt(e.jsx("path", {
    d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z"
  })),
  ks = zt(e.jsx("path", {
    d: "M20 18.69 7.84 6.14 5.27 3.49 4 4.76l2.8 2.8v.01c-.52.99-.8 2.16-.8 3.42v5l-2 2v1h13.73l2 2L21 19.72zM12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2m6-7.32V11c0-3.08-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.15.03-.29.08-.42.12-.1.03-.2.07-.3.11h-.01c-.01 0-.01 0-.02.01-.23.09-.46.2-.68.31 0 0-.01 0-.01.01z"
  }));
function $t(n, o) {
  const [a, i] = x.useState({
      x: 0,
      y: 0
    }),
    s = x.useRef(null),
    u = x.useRef(!1);
  x.useEffect(() => {
    n && i({
      x: 0,
      y: 0
    });
  }, [n]);
  const f = o ? {
      onPointerDown: p => {
        p.button === 0 && (u.current = !1, s.current = {
          startX: p.clientX,
          startY: p.clientY,
          baseX: a.x,
          baseY: a.y
        });
      },
      onPointerMove: p => {
        const r = s.current;
        if (!r) return;
        const m = p.clientX - r.startX,
          h = p.clientY - r.startY;
        !u.current && Math.abs(m) + Math.abs(h) < 4 || (u.current || (u.current = !0, p.currentTarget.setPointerCapture(p.pointerId)), i({
          x: r.baseX + m,
          y: r.baseY + h
        }));
      },
      onPointerUp: () => {
        s.current = null;
      },
      onPointerCancel: () => {
        s.current = null;
      },
      onClickCapture: p => {
        u.current && (u.current = !1, p.stopPropagation(), p.preventDefault());
      }
    } : {},
    l = `translate(${a.x}px, ${a.y}px)`;
  return {
    dragProps: f,
    transform: l,
    dragSx: o ? {
      cursor: "move",
      touchAction: "none"
    } : {}
  };
}
const vt = 2,
  Cs = n => Math.max(1.5, Math.round(n * .05 * 2) / 2);
function Xe({
  src: n,
  size: o,
  sx: a
}) {
  return e.jsx(Ee, {
    src: n || void 0,
    sx: {
      width: o,
      height: o,
      bgcolor: j[200],
      color: j[600],
      ...je,
      ...a
    },
    children: e.jsx(Te, {
      sx: {
        fontSize: Math.round(o * .62)
      }
    })
  });
}
function kt({
  faces: n,
  size: o,
  each: a,
  spots: i
}) {
  const s = Cs(o);
  return e.jsx(d, {
    sx: {
      position: "relative",
      width: o,
      height: o,
      flexShrink: 0
    },
    children: i.map((u, f) => {
      const l = i.slice(f + 1),
        p = l.length ? {
          maskImage: [Ce, ...l.map(() => Ce)].join(", "),
          WebkitMaskImage: [Ce, ...l.map(() => Ce)].join(", "),
          maskSize: ["100% 100%", ...l.map(() => `${a + s * 2}px ${a + s * 2}px`)].join(", "),
          WebkitMaskSize: ["100% 100%", ...l.map(() => `${a + s * 2}px ${a + s * 2}px`)].join(", "),
          maskPosition: ["0 0", ...l.map(r => `${r.x - u.x - s}px ${r.y - u.y - s}px`)].join(", "),
          WebkitMaskPosition: ["0 0", ...l.map(r => `${r.x - u.x - s}px ${r.y - u.y - s}px`)].join(", "),
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskComposite: ["subtract", ...l.map(() => "add")].join(", "),
          WebkitMaskComposite: ["source-out", ...l.map(() => "source-over")].join(", ")
        } : {};
      return e.jsx(Xe, {
        src: n[f],
        size: a,
        sx: {
          position: "absolute",
          left: u.x,
          top: u.y,
          ...p
        }
      }, f);
    })
  });
}
function Gt({
  faces: n,
  names: o = [],
  size: a
}) {
  const i = o.filter(Boolean).join(", "),
    s = e.jsx(_s, {
      faces: n,
      size: a
    });
  return i ? e.jsx(Ke, {
    title: i,
    disableInteractive: !0,
    slotProps: {
      transition: {
        timeout: 0
      }
    },
    children: e.jsx(d, {
      sx: {
        display: "inline-flex",
        flexShrink: 0
      },
      children: s
    })
  }) : s;
}
function _s({
  faces: n,
  size: o
}) {
  const a = n.slice(0, 4);
  if (a.length <= 1) return e.jsx(Xe, {
    src: a[0],
    size: o
  });
  if (a.length === 2) {
    const s = Math.round(o * .64),
      u = o - s;
    return e.jsx(kt, {
      faces: a,
      size: o,
      each: s,
      spots: [{
        x: 0,
        y: 0
      }, {
        x: u,
        y: u
      }]
    });
  }
  if (a.length === 3) {
    const s = Math.round(o * .58),
      u = o - s;
    return e.jsx(kt, {
      faces: [a[1], a[2], a[0]],
      size: o,
      each: s,
      spots: [{
        x: 0,
        y: u
      }, {
        x: u,
        y: u
      }, {
        x: u / 2,
        y: 0
      }]
    });
  }
  const i = Math.floor((o - vt) / 2);
  return e.jsx(d, {
    sx: {
      width: o,
      height: o,
      flexShrink: 0,
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignContent: "center",
      gap: `${vt}px`
    },
    children: a.map((s, u) => e.jsx(Xe, {
      src: s,
      size: i
    }, u))
  });
}
function ws(n, o, a = {}) {
  return n.length === 0 ? [o] : n.map(i => a[i.account_seq] || i.name);
}
const Ms = n => `a:${n}`;
function Ct(n, o, a) {
  const i = r => ({
      kind: "person",
      id: Ms(r.account_seq),
      name: r.nickname || r.name || r.email,
      position: r.position
    }),
    s = new Map(a.map(r => [r.account_seq, r])),
    u = new Set(o.map(r => r.seq)),
    f = [...o].sort((r, m) => r.sort_no - m.sort_no || r.seq - m.seq),
    l = r => ({
      kind: "group",
      id: `o${n}-u${r.seq}`,
      name: r.name,
      children: [...f.filter(m => m.parent_seq === r.seq).map(l), ...r.account_seqs.flatMap(m => {
        const h = s.get(m);
        return h ? [i(h)] : [];
      })]
    }),
    p = new Set(o.flatMap(r => r.account_seqs));
  return [...f.filter(r => !u.has(r.parent_seq)).map(l), ...a.filter(r => !p.has(r.account_seq)).map(i)];
}
function Rs({
  open: n,
  onClose: o,
  excludeAccountSeqs: a,
  onPick: i,
  title: s,
  confirmLabel: u
}) {
  const f = Z(),
    l = u ?? f("chat.inviteShort"),
    p = Ae(),
    m = ge()?.seq ?? 0,
    {
      groups: h
    } = pn(),
    v = [m, ...h.map(y => y.seq).filter(y => y !== m)].filter(y => y > 0).join(","),
    [T, D] = x.useState([]),
    [q, I] = x.useState(!1),
    [R, $] = x.useState([]),
    [E, G] = x.useState(0),
    [ee, K] = x.useState(!1);
  x.useEffect(() => {
    const y = v ? v.split(",").map(Number) : [];
    if (!n || y.length === 0) return;
    let w = !0;
    return I(!0), $([]), G(_ => _ + 1), Promise.all(y.map(_ => Promise.all([re.listMembers(_).then(M => M.members).catch(() => []), re.getTree(_).then(M => M.units).catch(() => [])]).then(([M, O]) => ({
      orgSeq: _,
      members: M,
      units: O
    })))).then(_ => {
      w && D(_);
    }).finally(() => {
      w && I(!1);
    }), () => {
      w = !1;
    };
  }, [n, v]);
  const H = Ht(n);
  x.useEffect(() => {
    const y = v ? v.split(",").map(Number) : [];
    if (!n || y.length === 0 || H === 0) return;
    let w = !0;
    return Promise.all(y.map(_ => Promise.all([re.listMembers(_).then(M => M.members), re.getTree(_).then(M => M.units)]).then(([M, O]) => ({
      orgSeq: _,
      members: M,
      units: O
    })))).then(_ => {
      w && D(_);
    }).catch(() => {}), () => {
      w = !1;
    };
  }, [H]);
  const te = x.useMemo(() => new Set(a), [a]),
    L = x.useMemo(() => T.map(y => ({
      orgSeq: y.orgSeq,
      name: h.find(w => w.seq === y.orgSeq)?.name ?? "",
      units: y.units,
      members: y.members.filter(w => w.account_seq > 0 && !te.has(w.account_seq))
    })).filter(y => y.members.length > 0), [T, h, te]),
    U = x.useMemo(() => {
      const y = new Map();
      for (const w of L) for (const _ of w.members) y.has(_.account_seq) || y.set(_.account_seq, _);
      return [...y.values()];
    }, [L]),
    k = x.useMemo(() => L.length > 1 ? L.map(y => ({
      kind: "group",
      id: `o${y.orgSeq}`,
      name: y.name || f("chat.organization"),
      strong: !0,
      children: Ct(y.orgSeq, y.units, y.members)
    })) : L.flatMap(y => Ct(y.orgSeq, y.units, y.members)), [L, f]),
    A = async () => {
      K(!0);
      try {
        await i(U.filter(y => R.includes(y.account_seq)));
      } finally {
        K(!1);
      }
    };
  return e.jsx(Tt, {
    open: n,
    onClose: o,
    title: s ?? f("chat.invite"),
    maxWidth: "sm",
    fullScreen: p,
    mobilePresentation: p ? "slide" : "dialog",
    backdropClick: !1,
    tabs: {
      visible: !1
    },
    titleIcons: {
      print: {
        visible: !1
      },
      share: {
        visible: !1
      },
      delete: {
        visible: !1
      }
    },
    actions: {
      showCancelButton: !0,
      right: e.jsx(Ge, {
        variant: "contained",
        onClick: () => {
          A();
        },
        disabled: ee || R.length === 0,
        children: ee ? f("chat.actionInProgress", {
          action: l
        }) : f("chat.actionWithCount", {
          action: l,
          count: R.length
        })
      })
    },
    sections: [{
      id: "chat-invite",
      showTitle: !1,
      children: q ? e.jsx(d, {
        sx: {
          display: "flex",
          justifyContent: "center",
          py: 4
        },
        children: e.jsx(xe, {
          size: 24
        })
      }) : U.length === 0 ? e.jsx(es, {
        children: f("chat.nobodyToInvite")
      }) : e.jsx(ts, {
        resetKey: E,
        nodes: k,
        initialIds: [],
        onChange: y => $(y.map(w => Number(w.slice(2))).filter(w => w > 0))
      })
    }]
  });
}
const _t = {
  display: "flex",
  alignItems: "center",
  gap: 1.25,
  py: .75,
  px: 0,
  border: 0,
  bgcolor: "transparent",
  cursor: "pointer",
  width: "100%"
};
function qs({
  room: n,
  myAccountSeq: o,
  onOpened: a
}) {
  const i = Z(),
    s = Ye(),
    u = an(n.seq, n.secret),
    f = rn(n.seq, n.secret),
    [l, p] = x.useState(!1),
    r = async () => {
      if (!l) {
        p(!0);
        try {
          const m = n.peers.map(v => v.account_seq),
            h = m.length > 1 ? await Y.createGroup(m, !0) : await Y.openDirect(m[0] ?? o, !0);
          $e(h), a(), window.setTimeout(() => s(`${Me}/${h.seq}`), 350);
        } catch (m) {
          X(m instanceof Error ? m.message : P("chat.secretRoomOpenFailed"));
        } finally {
          p(!1);
        }
      }
    };
  return n.secret ? e.jsxs(d, {
    children: [e.jsx(C, {
      sx: {
        fontSize: "0.875rem",
        fontWeight: 700,
        color: j[600],
        py: .5
      },
      children: i("chat.secretRoom")
    }), e.jsxs(d, {
      component: "ul",
      sx: {
        m: 0,
        pl: 2.5,
        py: .5,
        listStyleType: "disc",
        color: j[600]
      },
      children: [e.jsx(C, {
        component: "li",
        sx: {
          fontSize: "0.875rem"
        },
        children: i(f ? "chat.secretLockPassword" : "chat.secretLockDevice")
      }), e.jsx(C, {
        component: "li",
        sx: {
          fontSize: "0.875rem"
        },
        children: i(f ? "chat.secretReadPassword" : "chat.secretReadDevice")
      })]
    }), !f || u === "unknown" || u === "unsupported" ? null : e.jsxs(d, {
      component: "button",
      type: "button",
      onClick: () => cn(n.seq, u === "ready"),
      sx: _t,
      children: [e.jsx(qe, {
        sx: {
          fontSize: 20,
          color: "primary.main"
        }
      }), e.jsx(C, {
        sx: {
          fontSize: "0.9375rem",
          color: "primary.main",
          fontWeight: 600
        },
        children: i(u === "ready" ? "chat.e2eTitleChange" : u === "unset" ? "chat.e2eTitleCreate" : "chat.e2eTitleUnlock")
      })]
    })]
  }) : e.jsxs(d, {
    component: "button",
    type: "button",
    onClick: () => {
      r();
    },
    sx: _t,
    children: [l ? e.jsx(xe, {
      size: 20
    }) : e.jsx(qe, {
      sx: {
        fontSize: 20,
        color: "primary.main"
      }
    }), e.jsx(C, {
      sx: {
        fontSize: "0.9375rem",
        color: "primary.main",
        fontWeight: 600
      },
      children: i("chat.startSecretChat")
    })]
  });
}
const _e = -1,
  Is = 200,
  wt = 88,
  Ps = 2.5,
  Es = 38,
  He = {
    position: "absolute",
    left: "100%",
    top: "50%",
    transform: "translateY(-50%)",
    ml: .5,
    color: j[400]
  };
function Ut({
  room: n,
  myName: o,
  myAvatar: a,
  faceSize: i = wt
}) {
  const s = Z(),
    u = be(),
    f = me(),
    [l, p] = x.useState(null),
    [r, m] = x.useState(""),
    [h, v] = x.useState(!1),
    T = k => {
      p(k), v(!0);
    },
    D = x.useRef(null),
    q = x.useRef(null),
    I = async k => {
      const A = k.target.files?.[0];
      if (k.target.value = "", !(!A || !n)) try {
        const y = await new Promise((_, M) => {
            const O = new FileReader();
            O.onload = () => _(String(O.result ?? "")), O.onerror = () => M(new Error(s("chat.photoReadFailed"))), O.readAsDataURL(A);
          }),
          w = await Y.setRoomAvatar(n.seq, y);
        he({
          ...n,
          avatar: w
        });
      } catch (y) {
        X(y instanceof Error ? y.message : P("chat.photoChangeFailed"));
      }
    },
    R = async k => {
      const A = k.target.files?.[0];
      if (k.target.value = "", !A) return;
      const y = u.getValue("account"),
        w = Number(y?.seq ?? 0) || 0;
      if (!(!w || !y?.email)) try {
        const _ = await new Promise((O, V) => {
          const ne = new FileReader();
          ne.onload = () => O(String(ne.result ?? "")), ne.onerror = () => V(new Error(s("chat.photoReadFailed"))), ne.readAsDataURL(A);
        });
        await jt({
          seq: w,
          email: y.email,
          name: y.name ?? "",
          avatar_image: _
        });
        const M = await lt.me().catch(() => null);
        M && u.setValue("account", M);
      } catch (_) {
        X(_ instanceof Error ? _.message : P("chat.photoChangeFailed"));
      }
    },
    $ = async () => {
      if (l) try {
        if (l.seq === _e) {
          if (!n) return;
          const k = r.trim();
          k !== n.name && (await Y.renameRoom(n.seq, k), he({
            ...n,
            name: k
          }));
        } else if (l.seq === 0) {
          const k = r.trim();
          if (!k) {
            X(P("chat.nameRequired"));
            return;
          }
          const A = u.getValue("account"),
            y = Number(A?.seq ?? 0) || 0;
          if (!y || !A?.email) return;
          await jt({
            seq: y,
            email: A.email,
            name: k
          });
          const w = await lt.me().catch(() => null);
          w && u.setValue("account", w);
        } else await ln(l.seq, r);
        v(!1);
      } catch (k) {
        X(k instanceof Error ? k.message : P("chat.nameSaveFailed"));
      }
    },
    E = n?.peers ?? [],
    G = !!n && E.length === 0,
    ee = n?.name || E.map(k => f[k.account_seq] || k.name).filter(Boolean).join(", ") || o || s("chat.conversation"),
    K = n?.kind === "group" || E.length > 1,
    H = K ? n?.avatar || "" : E[0]?.avatar || (E.length === 0 ? a ?? "" : ""),
    te = H ? de(H, "md") : "",
    L = K && !te ? E.map(k => k.avatar ? de(k.avatar) : "") : [],
    U = G || K;
  return e.jsxs(e.Fragment, {
    children: [e.jsxs(d, {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: i > wt ? Ps : 1.25,
        py: 3
      },
      children: [e.jsxs(d, {
        component: U ? "button" : "div",
        type: U ? "button" : void 0,
        onClick: G ? () => D.current?.click() : K ? () => q.current?.click() : void 0,
        "aria-label": G ? s("chat.changeMyPhoto") : K ? s("chat.changeRoomPhoto") : void 0,
        sx: {
          position: "relative",
          p: 0,
          border: 0,
          bgcolor: "transparent",
          cursor: U ? "pointer" : "default",
          lineHeight: 0
        },
        children: [L.length ? e.jsx(Gt, {
          faces: L,
          size: i
        }) : e.jsx(Ee, {
          src: te || void 0,
          sx: {
            width: i,
            height: i,
            bgcolor: j[200],
            color: j[500],
            ...je
          },
          children: e.jsx(Te, {
            sx: {
              fontSize: Math.round(i / 2)
            }
          })
        }), U ? e.jsx(d, {
          sx: {
            position: "absolute",
            right: -2,
            bottom: -2,
            width: 28,
            height: 28,
            borderRadius: "50%",
            bgcolor: "#fff",
            border: `1px solid ${j[200]}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: j[500]
          },
          children: e.jsx(fn, {
            sx: {
              fontSize: 16
            }
          })
        }) : null]
      }), e.jsx("input", {
        ref: q,
        hidden: !0,
        type: "file",
        accept: "image/png,image/jpeg,image/webp",
        onChange: k => {
          I(k);
        }
      }), e.jsx("input", {
        ref: D,
        hidden: !0,
        type: "file",
        accept: "image/png,image/jpeg,image/webp",
        onChange: k => {
          R(k);
        }
      }), e.jsxs(d, {
        sx: {
          position: "relative",
          minWidth: 0,
          maxWidth: `calc(100% - ${Es * 2}px)`
        },
        children: [e.jsx(C, {
          sx: {
            fontSize: "1.25rem",
            fontWeight: 700,
            textAlign: "center",
            minWidth: 0
          },
          children: ee
        }), G ? e.jsx(B, {
          "aria-label": s("chat.changeMyName"),
          onClick: () => {
            m(o ?? ""), T({
              seq: 0,
              name: o ?? ""
            });
          },
          sx: He,
          children: e.jsx(Fe, {
            sx: {
              fontSize: 18
            }
          })
        }) : null, n?.kind === "group" ? e.jsx(B, {
          "aria-label": s("chat.changeRoomName"),
          onClick: () => {
            m(n.name), T({
              seq: _e,
              name: ee
            });
          },
          sx: He,
          children: e.jsx(Fe, {
            sx: {
              fontSize: 18
            }
          })
        }) : null, E.length === 1 && n?.kind !== "group" ? e.jsx(B, {
          "aria-label": s("chat.changeAliasOf", {
            name: E[0].name
          }),
          onClick: () => {
            m(f[E[0].account_seq] ?? ""), T({
              seq: E[0].account_seq,
              name: E[0].name
            });
          },
          sx: He,
          children: e.jsx(Fe, {
            sx: {
              fontSize: 18
            }
          })
        }) : null]
      })]
    }), e.jsxs(ze, {
      open: h,
      onClose: () => v(!1),
      fullWidth: !0,
      maxWidth: "xs",
      children: [e.jsx(xn, {
        sx: {
          fontSize: "1rem",
          fontWeight: 700
        },
        children: l?.seq === _e ? s("chat.changeRoomName") : l?.seq === 0 ? s("chat.changeMyName") : s("chat.changeName")
      }), e.jsxs(Ot, {
        children: [e.jsx(C, {
          sx: {
            fontSize: "0.8125rem",
            color: j[500],
            mb: 1.5
          },
          children: l?.seq === _e ? s("chat.roomNameHelp") : l?.seq === 0 ? s("chat.myNameHelp") : s("chat.aliasHelp", {
            name: l?.name
          })
        }), e.jsx(mn, {
          autoFocus: !0,
          fullWidth: !0,
          size: "medium",
          value: r,
          placeholder: l?.name ?? "",
          onChange: k => m(k.target.value.slice(0, 50)),
          onKeyDown: k => {
            k.key === "Enter" && (k.preventDefault(), $());
          }
        })]
      }), e.jsxs(gn, {
        children: [e.jsx(Ge, {
          onClick: () => v(!1),
          sx: {
            color: j[600]
          },
          children: s("chat.cancel")
        }), e.jsx(Ge, {
          onClick: () => {
            $();
          },
          children: s("chat.save")
        })]
      })]
    })]
  });
}
function Po({
  open: n,
  onClose: o,
  room: a,
  myName: i,
  myAvatar: s
}) {
  const u = Z();
  return e.jsxs(ze, {
    open: n,
    onClose: o,
    maxWidth: "xs",
    fullWidth: !0,
    children: [e.jsx(B, {
      onClick: o,
      "aria-label": u("chat.close"),
      size: "small",
      sx: {
        position: "absolute",
        top: 12,
        right: 12
      },
      children: e.jsx(Je, {})
    }), e.jsx(Ot, {
      children: e.jsx(Ut, {
        room: a,
        myName: i,
        myAvatar: s,
        faceSize: Is
      })
    })]
  });
}
const As = {
    delete: {
      visible: !1
    }
  },
  zs = {
    enabled: !1
  },
  Ts = {
    visible: !1
  },
  Os = {
    visible: !1
  },
  Ws = {
    mobilePresentation: "slide",
    contentPaddingX: 2,
    contentTopPadding: 2,
    sectionsPaddingTop: 0
  };
function Ds({
  open: n,
  roomSeq: o,
  photos: a,
  onClose: i,
  onOpenPhoto: s
}) {
  const u = Z(),
    f = Ae(),
    l = Et(n ? o : 0, 0);
  x.useEffect(() => {
    !n || o <= 0 || !l.loaded || l.loading || !l.hasMore || un(o);
  }, [n, o, l.loaded, l.loading, l.hasMore, l.items.length]);
  const p = n && (l.loading || l.hasMore),
    r = x.useRef(s);
  r.current = s;
  const m = x.useMemo(() => [{
    id: "chat-photo-gallery",
    showTitle: !1,
    children: e.jsxs(e.Fragment, {
      children: [a.length > 0 ? e.jsx(d, {
        sx: {
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(3, 1fr)",
            sm: "repeat(4, 1fr)"
          },
          gap: "2px"
        },
        children: a.map(h => e.jsx(d, {
          component: "img",
          src: h.attachment_preview_url || Re(h.attachment_uuid),
          alt: h.attachment_name,
          loading: "lazy",
          onClick: () => r.current(h),
          sx: {
            display: "block",
            width: "100%",
            aspectRatio: "1 / 1",
            objectFit: "cover",
            cursor: "zoom-in",
            bgcolor: j[100]
          }
        }, h.seq))
      }) : p ? null : e.jsx(C, {
        sx: {
          py: 4,
          textAlign: "center",
          fontSize: "0.875rem",
          color: j[500]
        },
        children: u("chat.noPhotos")
      }), p ? e.jsxs(d, {
        sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          py: 2
        },
        children: [e.jsx(xe, {
          size: 18
        }), e.jsx(C, {
          sx: {
            fontSize: "0.875rem",
            color: j[600]
          },
          children: u("chat.loadingOlderPhotos")
        })]
      }) : null]
    })
  }], [a, p, u]);
  return e.jsx(Tt, {
    fontScaleKey: "ChatPhotoGalleryDialog",
    open: n,
    onClose: i,
    title: u("chat.photosCount", {
      count: a.length
    }),
    titleIcons: As,
    fontScale: zs,
    tabs: Ts,
    maxWidth: "sm",
    fullScreen: f,
    ...(f ? Ws : {}),
    actions: Os,
    sections: m
  });
}
const Ls = 10,
  Fs = x.forwardRef(function (o, a) {
    return e.jsx(Ft, {
      direction: "left",
      ref: a,
      ...o
    });
  }),
  Mt = 48,
  Ie = 56,
  Ns = /https?:\/\/[^\s<>"')]+/g;
function ae({
  children: n
}) {
  return e.jsx(d, {
    sx: {
      bgcolor: "#fff",
      borderRadius: 3,
      px: 2,
      py: 1.5,
      mb: 1.5
    },
    children: n
  });
}
function Rt({
  arrows: n,
  children: o
}) {
  const a = Z(),
    i = x.useRef(null),
    [s, u] = x.useState({
      start: !0,
      end: !1
    }),
    f = x.useCallback(() => {
      const m = i.current;
      m && u({
        start: m.scrollLeft <= 1,
        end: m.scrollLeft + m.clientWidth >= m.scrollWidth - 1
      });
    }, []);
  x.useEffect(() => {
    if (!n) return;
    const m = i.current;
    if (!m) return;
    f();
    const h = new ResizeObserver(f);
    return h.observe(m), () => h.disconnect();
  }, [n, f]);
  const l = m => {
      const h = i.current,
        v = h?.firstElementChild;
      if (!h || !v) return;
      const T = parseFloat(getComputedStyle(h).columnGap) || 0;
      h.scrollBy({
        left: m * (v.offsetWidth + T),
        behavior: "smooth"
      });
    },
    p = e.jsx(d, {
      ref: i,
      onScroll: n ? f : void 0,
      sx: {
        display: "flex",
        flexWrap: "nowrap",
        overflowX: "auto",
        gap: 1.25,
        py: .75,
        flex: 1,
        minWidth: 0,
        scrollPaddingRight: 8,
        ...(n ? {
          scrollSnapType: "x mandatory",
          "& > *": {
            scrollSnapAlign: "start"
          }
        } : {}),
        "&::-webkit-scrollbar": {
          display: "none"
        },
        scrollbarWidth: "none"
      },
      children: o
    });
  if (!n) return p;
  const r = {
    flexShrink: 0,
    width: 28,
    height: 28,
    mt: "16px",
    color: j[600],
    "&.Mui-disabled": {
      color: j[300]
    }
  };
  return e.jsxs(d, {
    sx: {
      display: "flex",
      alignItems: "flex-start",
      gap: .5,
      mx: -1
    },
    children: [e.jsx(B, {
      size: "small",
      "aria-label": a("chat.previous"),
      onClick: () => l(-1),
      disabled: s.start,
      sx: r,
      children: e.jsx(kn, {
        fontSize: "small"
      })
    }), p, e.jsx(B, {
      size: "small",
      "aria-label": a("chat.next"),
      onClick: () => l(1),
      disabled: s.end,
      sx: r,
      children: e.jsx(Cn, {
        fontSize: "small"
      })
    })]
  });
}
function Be({
  icon: n,
  color: o,
  label: a,
  count: i,
  action: s
}) {
  return e.jsxs(d, {
    sx: {
      display: "flex",
      alignItems: "center",
      gap: 1.25,
      py: .5
    },
    children: [e.jsx(d, {
      sx: {
        width: 28,
        height: 28,
        borderRadius: 1.25,
        bgcolor: o,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& .MuiSvgIcon-root": {
          fontSize: 18
        }
      },
      children: n
    }), e.jsx(C, {
      sx: {
        fontSize: "1rem",
        fontWeight: 600
      },
      children: a
    }), i ? e.jsx(C, {
      sx: {
        fontSize: "0.875rem",
        color: j[500]
      },
      children: i
    }) : null, s ? e.jsx(d, {
      sx: {
        ml: "auto"
      },
      children: s
    }) : null]
  });
}
function Hs({
  fullScreen: n,
  children: o
}) {
  const [a, i] = x.useState(0),
    s = x.useRef(null),
    u = x.useCallback(f => {
      if (s.current?.disconnect(), s.current = null, !f) return;
      const l = new ResizeObserver(() => i(f.offsetHeight));
      l.observe(f), s.current = l, i(f.offsetHeight);
    }, []);
  return n ? e.jsx(d, {
    sx: {
      flex: 1,
      minHeight: 0,
      overflowY: "auto",
      px: 1.5,
      pb: 3
    },
    children: o
  }) : e.jsx(d, {
    sx: {
      flexShrink: 0,
      height: `min(${a}px, calc(min(760px, 88vh) - ${Ie}px))`
    },
    children: e.jsx(vn, {
      style: {
        height: "100%"
      },
      children: e.jsx(d, {
        ref: u,
        sx: {
          width: 0,
          minWidth: "100%",
          boxSizing: "border-box",
          px: 1.5,
          pb: 1.5
        },
        children: o
      })
    })
  });
}
function Bs({
  open: n,
  onClose: o,
  fullScreen: a = !0,
  onLeft: i,
  room: s,
  messages: u,
  myAccountSeq: f,
  myName: l,
  myAvatar: p
}) {
  const r = Z(),
    m = $t(n, !a),
    h = os(),
    v = Ue({
      modalId: `chat-room-invite-${s?.seq ?? 0}`
    }),
    T = be(),
    D = Wt(ge(), "vault"),
    q = T.useValue("account")?.etc,
    [I, R] = x.useState(() => Ve(q).photoOriginal);
  x.useEffect(() => R(Ve(q).photoOriginal), [q]);
  const $ = async c => {
      R(c);
      const S = T.getValue("account"),
        W = await Nt(S, {
          photoOriginal: c
        }).catch(() => null);
      W ? T.setValue("account", {
        ...S,
        etc: W
      }) : (R(!c), X(P("chat.settingsSaveFailed")));
    },
    E = Nn(s, T.getValue("account")?.etc),
    G = async c => {
      if (!s) return;
      const S = {
        ...(c.bgColor ? {
          bg_color: c.bgColor
        } : {}),
        ...(c.bgPattern ? {
          bg_pattern: c.bgPattern
        } : {})
      };
      he({
        ...s,
        ...S
      });
      try {
        await Y.setBackground(s.seq, S);
      } catch (W) {
        he(s), X(W instanceof Error ? W.message : P("chat.backgroundSaveFailed"));
      }
    },
    ee = me(),
    K = async c => {
      if (!(!s || c.length === 0)) try {
        he(await Y.invite(s.seq, c.map(S => S.account_seq))), v.close();
      } catch (S) {
        X(S instanceof Error ? S.message : P("chat.inviteFailed"));
      }
    },
    H = s?.muted === !0,
    te = async () => {
      if (!s) return;
      const c = !H;
      he({
        ...s,
        muted: c
      });
      try {
        await Y.setMuted(s.seq, c);
      } catch (S) {
        he({
          ...s,
          muted: H
        }), X(S instanceof Error ? S.message : P("chat.notifySaveFailed"));
      }
    },
    [L, U] = x.useState(null),
    k = async () => {
      if (U(null), !!s) try {
        await Y.leave(s.seq), hn(s.seq), o(), i();
      } catch (c) {
        X(c instanceof Error ? c.message : P("chat.leaveFailed"));
      }
    },
    {
      photos: A,
      files: y,
      links: w
    } = x.useMemo(() => {
      const c = [],
        S = [],
        W = [];
      for (const Q of [...u].reverse()) if (!Q.deleted) {
        Q.attachment_uuid && (Q.attachment_mime_type.startsWith("image/") ? c.push(Q) : ls(Q.attachment_name, Q.attachment_mime_type) || S.push(Q));
        for (const pe of Q.description.match(Ns) ?? []) us(pe) || W.push({
          url: pe,
          seq: Q.seq
        });
      }
      return {
        photos: c,
        files: S,
        links: W
      };
    }, [u]),
    _ = Ue({
      modalId: `chat-photo-gallery-${s?.seq ?? 0}`
    }),
    M = e.jsx(d, {
      component: "button",
      type: "button",
      onClick: _.open,
      sx: {
        border: 0,
        bgcolor: "transparent",
        cursor: "pointer",
        p: .5,
        fontSize: "0.875rem",
        fontWeight: 600,
        color: "primary.main"
      },
      children: r("chat.viewAll")
    }),
    O = x.useMemo(() => A.slice(0, Ls), [A]),
    V = s?.peers ?? [],
    ne = s?.name || V.map(c => ee[c.account_seq] || c.name).filter(Boolean).join(", ") || l || r("chat.conversation"),
    ie = async c => {
      const S = await is(c.attachment_uuid).catch(() => "");
      S && h.open({
        seq: c.seq,
        user_seq: 0,
        user_name: c.worker_name,
        name: c.attachment_name,
        size: c.attachment_size,
        created_time: "",
        table_name: "",
        previewUrl: S
      });
    };
  return e.jsxs(ze, {
    open: n,
    onClose: o,
    fullScreen: a,
    fullWidth: !a,
    maxWidth: a ? !1 : "xs",
    slots: a ? {
      transition: Fs
    } : void 0,
    slotProps: {
      transition: {
        timeout: 240
      },
      paper: {
        sx: a ? {} : {
          borderRadius: 3,
          transform: m.transform
        }
      }
    },
    children: [e.jsxs(d, {
      sx: {
        height: a ? "100%" : "auto",
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
        bgcolor: j[100]
      },
      children: [e.jsxs(d, {
        ...m.dragProps,
        sx: {
          ...m.dragSx,
          height: a ? Mt : Ie,
          minHeight: a ? Mt : Ie,
          display: "flex",
          alignItems: "center",
          gap: .5,
          px: 1,
          bgcolor: "#fff"
        },
        children: [a ? e.jsx(B, {
          "aria-label": r("chat.backToChat"),
          onClick: o,
          sx: {
            color: "action.active"
          },
          children: e.jsx(Dt, {})
        }) : null, e.jsx(B, {
          "aria-label": r(H ? "chat.unmuteNotifications" : "chat.muteNotifications"),
          "aria-pressed": H,
          onClick: () => {
            te();
          },
          sx: {
            color: H ? j[400] : "primary.main",
            order: a ? 2 : 0
          },
          children: H ? e.jsx(ks, {
            sx: {
              fontSize: 22
            }
          }) : e.jsx(vs, {
            sx: {
              fontSize: 22
            }
          })
        }), e.jsx(d, {
          sx: {
            flex: 1,
            order: 1
          }
        }), a ? null : e.jsx(B, {
          "aria-label": r("chat.close"),
          onClick: o,
          sx: {
            color: "action.active",
            order: 3
          },
          children: e.jsx(Je, {})
        })]
      }), e.jsxs(Hs, {
        fullScreen: a,
        children: [e.jsx(Ut, {
          room: s,
          myName: l,
          myAvatar: p
        }), e.jsx(Ds, {
          open: _.isOpen,
          roomSeq: s?.seq ?? 0,
          photos: A,
          onClose: _.close,
          onOpenPhoto: ie
        }), O.length > 0 && e.jsxs(ae, {
          children: [e.jsxs(d, {
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            },
            children: [e.jsx(C, {
              sx: {
                fontSize: "0.875rem",
                fontWeight: 700,
                color: j[600],
                py: .5
              },
              children: r("chat.recentPhotos")
            }), M]
          }), e.jsx(d, {
            sx: {
              display: "flex",
              gap: 1,
              overflowX: "auto",
              py: .75,
              scrollPadding: 8,
              scrollSnapType: "x proximity",
              "&::-webkit-scrollbar": {
                display: "none"
              }
            },
            children: O.map(c => e.jsx(d, {
              component: "img",
              src: c.attachment_preview_url || Re(c.attachment_uuid),
              alt: c.attachment_name,
              loading: "lazy",
              onClick: () => ie(c),
              sx: {
                width: 132,
                height: 132,
                flexShrink: 0,
                objectFit: "cover",
                borderRadius: 2,
                cursor: "pointer",
                bgcolor: j[100],
                scrollSnapAlign: "start"
              }
            }, c.seq))
          })]
        }), e.jsxs(ae, {
          children: [e.jsx(Be, {
            icon: e.jsx(Kn, {}),
            color: "#22c55e",
            label: r("chat.photos"),
            count: A.length,
            action: A.length > 0 ? M : void 0
          }), A.length > 0 ? e.jsx(d, {
            sx: {
              display: "flex",
              gap: .75,
              overflowX: "auto",
              pb: .5,
              mt: .5,
              "&::-webkit-scrollbar": {
                display: "none"
              }
            },
            children: A.map(c => e.jsx(d, {
              component: "img",
              src: c.attachment_preview_url || Re(c.attachment_uuid),
              alt: c.attachment_name,
              onClick: () => ie(c),
              sx: {
                width: 108,
                height: 108,
                flexShrink: 0,
                objectFit: "cover",
                borderRadius: 1.5,
                cursor: "pointer",
                bgcolor: j[100]
              }
            }, c.seq))
          }) : e.jsx(C, {
            sx: {
              px: .5,
              py: 1,
              fontSize: "0.875rem",
              color: j[500]
            },
            children: r("chat.noPhotos")
          })]
        }), e.jsxs(ae, {
          children: [e.jsx(Be, {
            icon: e.jsx(Jn, {}),
            color: j[500],
            label: r("chat.files"),
            count: y.length
          }), y.length > 0 ? e.jsx(d, {
            sx: {
              mt: .5
            },
            children: y.map(c => e.jsxs(d, {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 1,
                py: .75
              },
              children: [e.jsxs(d, {
                sx: {
                  minWidth: 0,
                  flex: 1
                },
                children: [e.jsx(C, {
                  noWrap: !0,
                  sx: {
                    fontSize: "0.9375rem"
                  },
                  children: c.attachment_name
                }), e.jsxs(C, {
                  sx: {
                    fontSize: "0.75rem",
                    color: j[500]
                  },
                  children: [c.worker_name, c.attachment_size ? ` · ${as(c.attachment_size)}` : ""]
                })]
              }), e.jsx(B, {
                component: "a",
                href: Re(c.attachment_uuid),
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: S => {
                  rs(c.attachment_uuid) && S.preventDefault();
                },
                size: "small",
                "aria-label": r("chat.download"),
                sx: {
                  color: j[600]
                },
                children: e.jsx(bn, {
                  fontSize: "small"
                })
              })]
            }, c.seq))
          }) : e.jsx(C, {
            sx: {
              px: .5,
              py: 1,
              fontSize: "0.875rem",
              color: j[500]
            },
            children: r("chat.noFiles")
          })]
        }), e.jsxs(ae, {
          children: [e.jsx(Be, {
            icon: e.jsx(Qn, {}),
            color: "#3b82f6",
            label: r("chat.links"),
            count: w.length
          }), w.length > 0 ? e.jsx(d, {
            sx: {
              mt: .5
            },
            children: w.map((c, S) => e.jsx(C, {
              component: "a",
              href: c.url,
              target: "_blank",
              rel: "noopener noreferrer",
              onClick: W => {
                W.preventDefault(), jn(c.url);
              },
              noWrap: !0,
              sx: {
                display: "block",
                py: .75,
                fontSize: "0.9375rem",
                color: "primary.main",
                textDecoration: "none"
              },
              children: c.url
            }, `${c.seq}-${S}`))
          }) : e.jsx(C, {
            sx: {
              px: .5,
              py: 1,
              fontSize: "0.875rem",
              color: j[500]
            },
            children: r("chat.noLinks")
          })]
        }), e.jsxs(ae, {
          children: [e.jsx(C, {
            sx: {
              fontSize: "0.875rem",
              fontWeight: 700,
              color: j[600],
              py: .5
            },
            children: r("chat.membersCount", {
              count: V.length + 1
            })
          }), e.jsxs(d, {
            component: "button",
            type: "button",
            onClick: v.open,
            sx: {
              display: "flex",
              alignItems: "center",
              gap: 1.25,
              py: .75,
              px: 0,
              border: 0,
              bgcolor: "transparent",
              cursor: "pointer",
              width: "100%"
            },
            children: [e.jsx(d, {
              sx: {
                width: 36,
                height: 36,
                borderRadius: "50%",
                bgcolor: j[100],
                color: j[600],
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: e.jsx(yn, {
                sx: {
                  fontSize: 22
                }
              })
            }), e.jsx(C, {
              sx: {
                fontSize: "0.9375rem",
                color: "primary.main",
                fontWeight: 600
              },
              children: r("chat.invite")
            })]
          }), [{
            account_seq: f,
            name: r("chat.nameMe", {
              name: l
            }),
            avatar: p ?? ""
          }, ...V].map(c => {
            const W = c.account_seq === f ? c.name : ee[c.account_seq] || c.name;
            return e.jsxs(d, {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 1.25,
                py: .75
              },
              children: [e.jsx(Ee, {
                src: c.avatar ? de(c.avatar) : void 0,
                sx: {
                  width: 36,
                  height: 36,
                  bgcolor: j[200],
                  color: j[500],
                  ...je
                },
                children: e.jsx(Te, {
                  sx: {
                    fontSize: 22
                  }
                })
              }), e.jsx(C, {
                noWrap: !0,
                sx: {
                  fontSize: "0.9375rem",
                  minWidth: 0,
                  flex: 1
                },
                children: W
              })]
            }, c.account_seq);
          })]
        }), e.jsxs(ae, {
          children: [e.jsx(C, {
            sx: {
              fontSize: "0.875rem",
              fontWeight: 700,
              color: j[600],
              py: .5
            },
            children: r("chat.backgroundColor")
          }), e.jsx(Rt, {
            arrows: !a,
            children: Hn.map(c => {
              const S = E.bgColor === c.key;
              return e.jsxs(d, {
                component: "button",
                type: "button",
                "aria-label": r(c.labelKey),
                "aria-pressed": S,
                onClick: () => {
                  G({
                    bgColor: c.key
                  });
                },
                sx: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: .5,
                  border: 0,
                  p: 0,
                  bgcolor: "transparent",
                  cursor: "pointer",
                  flexShrink: 0
                },
                children: [e.jsx(d, {
                  sx: {
                    width: 48,
                    height: 48,
                    borderRadius: "10px",
                    bgcolor: c.color,
                    border: S ? "2px solid" : `1px solid ${j[300]}`,
                    borderColor: S ? "primary.main" : j[300]
                  }
                }), e.jsx(C, {
                  sx: {
                    fontSize: 12,
                    color: S ? "primary.main" : j[600]
                  },
                  children: r(c.labelKey)
                })]
              }, c.key);
            })
          }), e.jsx(C, {
            sx: {
              fontSize: "0.875rem",
              fontWeight: 700,
              color: j[600],
              pt: 1.5,
              pb: .5
            },
            children: r("chat.backgroundPattern")
          }), e.jsx(Rt, {
            arrows: !a,
            children: Bn.map(c => {
              const S = E.bgPattern === c.key,
                W = $n(c.key);
              return e.jsxs(d, {
                component: "button",
                type: "button",
                "aria-label": r(c.labelKey),
                "aria-pressed": S,
                onClick: () => {
                  G({
                    bgPattern: c.key
                  });
                },
                sx: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: .5,
                  border: 0,
                  p: 0,
                  bgcolor: "transparent",
                  cursor: "pointer",
                  flexShrink: 0
                },
                children: [e.jsx(d, {
                  sx: {
                    width: 48,
                    height: 48,
                    borderRadius: "10px",
                    bgcolor: Gn(E.bgColor),
                    backgroundImage: W || "none",
                    backgroundSize: "36px 36px",
                    border: S ? "2px solid" : `1px solid ${j[300]}`,
                    borderColor: S ? "primary.main" : j[300]
                  }
                }), e.jsx(C, {
                  sx: {
                    fontSize: 12,
                    color: S ? "primary.main" : j[600]
                  },
                  children: r(c.labelKey)
                })]
              }, c.key);
            })
          })]
        }), e.jsxs(ae, {
          children: [e.jsx(C, {
            sx: {
              fontSize: "0.9375rem",
              fontWeight: 600,
              color: j[800]
            },
            children: r("chat.attachRetention")
          }), e.jsx(C, {
            sx: {
              fontSize: "0.875rem",
              color: j[600],
              wordBreak: "keep-all"
            },
            children: r(D ? "chat.retentionArchive" : "chat.retentionDefault")
          })]
        }), e.jsx(ae, {
          children: e.jsxs(d, {
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1
            },
            children: [e.jsxs(d, {
              sx: {
                minWidth: 0
              },
              children: [e.jsx(C, {
                sx: {
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  color: j[800]
                },
                children: r("chat.sendOriginalPhotos")
              }), e.jsx(C, {
                sx: {
                  fontSize: "0.875rem",
                  color: j[600],
                  wordBreak: "keep-all"
                },
                children: r("chat.sendOriginalHelp", {
                  px: cs
                })
              })]
            }), e.jsx(Sn, {
              checked: I,
              onChange: c => {
                $(c.target.checked);
              },
              slotProps: {
                input: {
                  "aria-label": r("chat.sendOriginalPhotos")
                }
              }
            })]
          })
        }), s ? e.jsx(ae, {
          children: e.jsx(qs, {
            room: s,
            myAccountSeq: f,
            onOpened: o
          })
        }) : null, e.jsx(ae, {
          children: e.jsxs(d, {
            component: "button",
            type: "button",
            onClick: c => U(c.currentTarget),
            sx: {
              display: "flex",
              alignItems: "center",
              gap: 1.25,
              py: .75,
              px: 0,
              border: 0,
              bgcolor: "transparent",
              cursor: "pointer",
              width: "100%"
            },
            children: [e.jsx(Zn, {
              sx: {
                fontSize: 20,
                color: "error.main"
              }
            }), e.jsx(C, {
              sx: {
                fontSize: "0.9375rem",
                color: "error.main",
                fontWeight: 600
              },
              children: r("chat.leaveRoom")
            })]
          })
        })]
      })]
    }), e.jsx(Lt, {
      open: !!L,
      anchorEl: L,
      title: r("chat.leaveRoomConfirm", {
        title: ne
      }),
      content: r("chat.leaveRoomHelp"),
      confirmText: r("chat.leave"),
      cancelText: r("chat.cancel"),
      placement: "top",
      minWidth: 240,
      zIndex: 1401,
      onCancel: () => U(null),
      onConfirm: () => {
        k();
      }
    }), e.jsx(Rs, {
      open: v.isOpen,
      onClose: v.close,
      excludeAccountSeqs: [f, ...V.map(c => c.account_seq)],
      onPick: K
    })]
  });
}
const we = {
    box: 34,
    small: 12,
    large: 17
  },
  qt = n => Math.round(n * 100) / 100;
function $s({
  value: n,
  min: o,
  max: a,
  step: i,
  onApply: s
}) {
  const u = Z(),
    [f, l] = x.useState(null),
    p = (r, m, h) => e.jsx(B, {
      "aria-label": r,
      disabled: h < o || h > a,
      onClick: () => s(h),
      sx: {
        width: 44,
        height: 44,
        flexShrink: 0,
        borderRadius: 1,
        color: "#37352f",
        fontSize: `${m}px`,
        fontWeight: 600,
        lineHeight: 1,
        "&:hover": {
          backgroundColor: "action.hover",
          color: "#000000"
        },
        "&.Mui-disabled": {
          color: "action.disabled"
        }
      },
      children: u("components.scaleLetter")
    });
  return e.jsxs(e.Fragment, {
    children: [e.jsx(Ke, {
      title: u("components.fontSize"),
      disableInteractive: !0,
      slotProps: {
        transition: {
          timeout: 0
        }
      },
      children: e.jsx(B, {
        size: "small",
        "aria-label": u("components.fontSize"),
        onClick: r => l(r.currentTarget),
        sx: {
          width: we.box,
          height: we.box,
          flexShrink: 0,
          color: f ? "#000000" : "#9e9e9e",
          backgroundColor: f ? "action.hover" : "transparent",
          "&:hover": {
            color: "#000000",
            backgroundColor: "action.hover"
          }
        },
        children: e.jsxs(d, {
          component: "span",
          sx: {
            display: "inline-flex",
            alignItems: "baseline",
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: "-0.04em"
          },
          children: [e.jsx(d, {
            component: "span",
            sx: {
              fontSize: `${we.small}px`
            },
            children: u("components.scaleLetter")
          }), e.jsx(d, {
            component: "span",
            sx: {
              fontSize: `${we.large}px`
            },
            children: u("components.scaleLetter")
          })]
        })
      })
    }), e.jsx(_n, {
      open: !!f,
      anchorEl: f,
      onClose: () => l(null),
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "right"
      },
      slotProps: {
        paper: {
          sx: {
            mt: .5,
            px: 1,
            py: .75,
            borderRadius: 2
          }
        }
      },
      children: e.jsxs(d, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: .5
        },
        children: [p(u("components.fontSmaller"), 14, qt(n - i)), e.jsxs(d, {
          sx: {
            minWidth: 64,
            textAlign: "center",
            fontSize: 16,
            fontWeight: 600,
            color: "#37352f",
            fontVariantNumeric: "tabular-nums"
          },
          children: [Math.round(n * 100), "%"]
        }), p(u("components.fontLarger"), 22, qt(n + i))]
      })
    })]
  });
}
const Gs = 48;
function It({
  roomSeq: n,
  title: o,
  memberCount: a = 0,
  onBack: i,
  onOpenDrawer: s,
  extraActions: u,
  leading: f,
  height: l = Gs,
  rootProps: p
}) {
  const r = Z(),
    m = be(),
    h = m.useValue("account"),
    v = Ve(h?.etc),
    D = dn(n) ? e.jsx(qe, {
      "aria-label": r("chat.secretRoom"),
      sx: {
        fontSize: 18,
        color: j[600],
        flexShrink: 0
      }
    }) : null,
    q = async R => {
      const $ = Yn(v.scale, R);
      if ($ === v.scale) return;
      const E = await Nt(h, {
        scale: $
      }).catch(() => null);
      E && m.setValue("account", {
        ...h,
        etc: E
      });
    },
    I = R => a > 0 ? e.jsx(C, {
      component: "span",
      "aria-label": r("chat.peopleCount", {
        count: a
      }),
      sx: {
        flexShrink: 0,
        ml: .75,
        fontSize: R,
        fontWeight: 600,
        color: "text.secondary"
      },
      children: a
    }) : null;
  return e.jsxs(d, {
    ...p,
    sx: {
      cursor: p?.draggable ? "grab" : void 0,
      height: l,
      minHeight: l,
      display: "flex",
      alignItems: "center",
      gap: .5,
      px: 1,
      bgcolor: "#fff"
    },
    children: [i ? e.jsxs(d, {
      component: "button",
      type: "button",
      "aria-label": r("chat.backToList"),
      onClick: i,
      sx: {
        display: "flex",
        alignItems: "center",
        gap: .5,
        flex: 1,
        minWidth: 0,
        border: 0,
        bgcolor: "transparent",
        cursor: "pointer",
        textAlign: "left",
        px: 1,
        py: .5,
        mx: -1,
        color: "action.active",
        WebkitTapHighlightColor: "transparent"
      },
      children: [e.jsx(Dt, {}), D, e.jsx(C, {
        noWrap: !0,
        sx: {
          fontSize: "1.125rem",
          fontWeight: 700,
          minWidth: 0,
          color: "text.primary"
        },
        children: o
      }), I("1.125rem")]
    }) : e.jsxs(d, {
      sx: {
        flex: 1,
        minWidth: 0,
        px: 1,
        display: "flex",
        alignItems: "center",
        gap: f ? 1 : .5
      },
      children: [f, D, e.jsx(C, {
        noWrap: !0,
        sx: {
          minWidth: 0,
          fontSize: "1rem",
          fontWeight: 700,
          color: "text.primary"
        },
        children: o
      }), I("1rem")]
    }), e.jsx($s, {
      value: v.scale,
      min: Xn,
      max: Vn,
      step: Un,
      onApply: R => {
        q(R - v.scale);
      }
    }), e.jsx(ns, {
      roomSeq: n
    }), e.jsx(B, {
      "aria-label": r("chat.roomDrawer"),
      onClick: s,
      sx: {
        color: j[600]
      },
      children: e.jsx(wn, {
        sx: {
          fontSize: 26
        }
      })
    }), u]
  });
}
function Us(n) {
  const a = be().useValue("account"),
    i = Number(a?.seq ?? 0) || 0,
    s = String(a?.name ?? ""),
    u = ge(),
    {
      rooms: f,
      loaded: l
    } = At(i, u?.seq ?? 0),
    p = me(),
    r = Bt(),
    m = x.useMemo(() => {
      const q = {};
      for (const [I, R] of Object.entries(r)) R.name && (q[Number(I)] = R.name);
      return {
        ...q,
        ...p
      };
    }, [p, r]),
    h = f.find(q => q.seq === n),
    {
      items: v
    } = Et(n, i),
    T = !h && !l ? "" : hs(h, P("chat.conversation"), s, m),
    D = h?.kind === "group" ? h.peers.length + 1 : 0;
  return {
    account: a,
    myAccountSeq: i,
    myName: s,
    room: h,
    items: v,
    title: T,
    memberCount: D
  };
}
const Vs = 32,
  Xs = x.forwardRef(function (o, a) {
    return e.jsx(Ft, {
      direction: "left",
      ref: a,
      ...o
    });
  }),
  Ys = 480,
  Ks = "min(760px, 85vh)";
function Eo({
  open: n,
  roomSeq: o,
  onClose: a,
  windowed: i = !1
}) {
  const s = Z(),
    {
      account: u,
      myAccountSeq: f,
      myName: l,
      room: p,
      items: r,
      title: m,
      memberCount: h
    } = Us(o),
    v = Ue({
      modalId: "chat-room-drawer"
    }),
    T = me(),
    D = p ? p.avatar ? [de(p.avatar)] : p.peers.length === 0 ? [u?.avatar ? de(u.avatar) : ""] : p.peers.map(I => I.avatar ? de(I.avatar) : "") : [""],
    q = $t(n, i);
  return x.useEffect(() => {
    if (!n) return;
    const I = R => {
      R.detail?.roomSeq === o && a();
    };
    return window.addEventListener(ct, I), () => window.removeEventListener(ct, I);
  }, [n, o, a]), e.jsxs(ze, {
    open: n,
    onClose: a,
    fullScreen: !i,
    slots: i ? void 0 : {
      transition: Xs
    },
    slotProps: i ? {
      paper: {
        sx: {
          width: Ys,
          maxWidth: "calc(100vw - 32px)",
          height: Ks,
          m: 0,
          overflow: "hidden",
          transform: q.transform
        }
      }
    } : {
      transition: {
        timeout: 240
      }
    },
    children: [e.jsxs(d, {
      sx: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
        bgcolor: "#D0D9E0"
      },
      children: [e.jsx(d, {
        ...q.dragProps,
        sx: {
          ...q.dragSx,
          flexShrink: 0
        },
        children: i ? e.jsx(It, {
          roomSeq: o,
          title: m,
          memberCount: h,
          height: Ie,
          onOpenDrawer: v.open,
          leading: e.jsx(d, {
            sx: {
              flexShrink: 0,
              display: "flex",
              ...je
            },
            children: e.jsx(Gt, {
              faces: D,
              names: p ? ws(p.peers, l, T) : [],
              size: Vs
            })
          }),
          extraActions: e.jsxs(e.Fragment, {
            children: [e.jsx(Ke, {
              title: s("chat.openInNewWindow"),
              children: e.jsx(B, {
                size: "small",
                "aria-label": s("chat.openInNewWindow"),
                onClick: () => {
                  Rn(o) && a();
                },
                onPointerDown: I => I.stopPropagation(),
                sx: {
                  color: j[600]
                },
                children: e.jsx(Mn, {
                  sx: {
                    fontSize: 20
                  }
                })
              })
            }), e.jsx(B, {
              size: "small",
              "aria-label": s("chat.close"),
              onClick: a,
              onPointerDown: I => I.stopPropagation(),
              sx: {
                color: j[600]
              },
              children: e.jsx(Je, {
                sx: {
                  fontSize: 20
                }
              })
            })]
          })
        }) : e.jsx(It, {
          roomSeq: o,
          title: m,
          memberCount: h,
          onBack: a,
          onOpenDrawer: v.open
        })
      }), n && o > 0 ? e.jsx(d, {
        sx: {
          flex: 1,
          minHeight: 0,
          display: "flex",
          flexDirection: "column"
        },
        children: e.jsx(ds, {
          roomSeq: o
        })
      }) : null]
    }), e.jsx(Bs, {
      open: v.isOpen,
      onClose: v.close,
      fullScreen: !i,
      onLeft: a,
      room: p,
      messages: r,
      myAccountSeq: f,
      myName: l,
      myAvatar: u?.avatar
    })]
  });
}
const Js = 200;
function Qs(n, o) {
  const [a, i] = x.useState(new Map()),
    [s, u] = x.useState(0);
  x.useEffect(() => {
    if (!n || !o) {
      i(new Map());
      return;
    }
    let l = !0;
    return xs.list({
      includeDisabled: !0,
      limit: Js
    }).then(p => {
      if (!l) return;
      const r = new Map();
      for (const m of p.items) m.account_seq > 0 && r.set(m.account_seq, m);
      i(r);
    }).catch(() => {
      l && i(new Map());
    }), () => {
      l = !1;
    };
  }, [n, o, s]);
  const f = x.useCallback(() => u(l => l + 1), []);
  return {
    byAccount: a,
    reload: f
  };
}
const Qe = "application/x-taskham-chat-member";
function Zs(n, o) {
  n.dataTransfer.setData(Qe, JSON.stringify(o)), n.dataTransfer.effectAllowed = "copy";
}
function Ao(n) {
  return Array.from(n.dataTransfer.types).includes(Qe);
}
function zo(n) {
  try {
    const o = JSON.parse(n.dataTransfer.getData(Qe) || "null"),
      a = Number(o?.account_seq ?? 0);
    return !Number.isInteger(a) || a <= 0 ? null : {
      account_seq: a,
      name: String(o?.name ?? "")
    };
  } catch {
    return null;
  }
}
const eo = 1.75;
function to() {
  const n = ge(),
    o = Ae(),
    a = Ye(),
    i = !!(n && Wt(n, ss)),
    s = async (f, l) => {
      if (St().session) {
        In(P("chat.alreadyInCall"));
        return;
      }
      js();
      try {
        const p = await f();
        if (!p) return;
        let r = St().openByRoom[p]?.code ?? null;
        if (!r) {
          const v = await bs.open("chat", p).catch(() => null);
          v && v.meeting.status === "open" && (r = v.meeting.code);
        }
        const m = o ? "full" : "pip",
          h = r ? await ys(r, l, m) : await Ss(p, l, m);
        o && a(`/meet/${h.code}`);
      } catch (p) {
        X(p instanceof Error ? p.message : P("chat.startCallFailed"));
      }
    };
  return {
    enabled: i,
    items: (f, l) => i ? [{
      key: "call-voice",
      icon: e.jsx(gs, {}),
      label: P("chat.voiceCall"),
      onSelect: () => {
        l(), s(f, !1);
      }
    }, {
      key: "call-video",
      icon: e.jsx(qn, {}),
      label: P("chat.videoCall"),
      onSelect: () => {
        l(), s(f, !0);
      }
    }] : []
  };
}
const no = 240;
function so({
  member: n,
  size: o,
  avatarOverride: a
}) {
  const i = a ?? n.avatar;
  return e.jsx(Ee, {
    src: i ? de(i) : void 0,
    sx: {
      width: o,
      height: o,
      bgcolor: j[200],
      color: j[600],
      flexShrink: 0,
      ...je
    },
    children: e.jsx(Te, {
      sx: {
        fontSize: o * .6
      }
    })
  });
}
function Pt(n) {
  const [o, a] = x.useState(() => {
    try {
      const s = JSON.parse(window.localStorage.getItem(n) ?? "{}");
      return s && typeof s == "object" && !Array.isArray(s) ? s : {};
    } catch {
      return {};
    }
  });
  return [o, s => a(u => {
    const f = s(u);
    try {
      window.localStorage.setItem(n, JSON.stringify(f));
    } catch {}
    return f;
  })];
}
const le = new Map(),
  Pe = new Map();
async function To(n) {
  !n || le.has(n) && Pe.has(n) || (await Promise.all([Promise.all([re.listMembers(n), re.getTree(n)]).then(([o, a]) => {
    le.set(n, {
      members: o.members,
      units: a.units
    });
  }).catch(() => {}), Y.listWorkspaceFriends(n).then(o => {
    Pe.set(n, o);
  }).catch(() => {})]));
}
function Oo({
  fullWidth: n = !1,
  roomy: o = !1,
  onOpenRoom: a,
  onMemberPreview: i
}) {
  const s = Z(),
    u = Ye(),
    l = be().useValue("account"),
    p = Number(l?.seq ?? 0) || 0,
    r = String(l?.avatar ?? ""),
    m = ge(),
    h = m?.seq ?? 0,
    {
      rooms: v
    } = At(p, h),
    T = me(),
    D = Bt(),
    [q, I] = x.useState(() => le.get(h)?.members ?? []),
    [R, $] = x.useState(() => le.get(h)?.units ?? []),
    [E, G] = x.useState(() => le.has(h)),
    [ee, K] = Pt("taskham-chat-open-units"),
    [H, te] = x.useState(0),
    L = Ae() && Ne() !== "other",
    U = Ne() === "other" ? "0.9375rem" : "1rem",
    k = Ne() === "other" ? "0.9rem" : "0.95rem",
    [, A] = x.useState(!1),
    [y] = x.useState(0),
    [w, _] = x.useState(null),
    [M, O] = x.useState(null),
    [V, ne] = x.useState(null),
    ie = Qs(h, m?.use_hr === !0),
    c = ps({
      idSuffix: `chat${x.useId()}`,
      onSaved: () => {
        Pn({
          message: s("chat.saved"),
          delay: 500
        }), ie.reload();
      }
    }),
    S = x.useRef(null);
  x.useEffect(() => {
    if (!h) return;
    let t = !0;
    const b = le.get(h);
    return b ? (I(b.members), $(b.units), G(!0)) : G(!1), Promise.all([re.listMembers(h), re.getTree(h)]).then(([g, N]) => {
      le.set(h, {
        members: g.members,
        units: N.units
      }), t && (I(g.members), A(g.can_manage), $(N.units), G(!0));
    }).catch(() => {
      t && G(!0);
    }), () => {
      t = !1;
    };
  }, [h, y]);
  const W = Ht(!!h);
  x.useEffect(() => {
    if (!h || W === 0) return;
    let t = !0;
    return Promise.all([re.listMembers(h), re.getTree(h)]).then(([b, g]) => {
      le.set(h, {
        members: b.members,
        units: g.units
      }), t && (I(b.members), A(b.can_manage), $(g.units));
    }).catch(() => {}), () => {
      t = !1;
    };
  }, [W]);
  const Q = En(),
    [pe, Ze] = x.useState(() => {
      const t = Pe.get(h);
      return t ? {
        orgSeq: h,
        groups: t
      } : {
        orgSeq: 0,
        groups: []
      };
    }),
    Vt = pe.orgSeq === h,
    et = pe.orgSeq === h ? pe.groups : [],
    [Xt, Yt] = Pt("taskham-chat-open-workspaces");
  x.useEffect(() => {
    if (!h) return;
    let t = !0;
    return Y.listWorkspaceFriends(h).then(b => {
      Pe.set(h, b), t && Ze({
        orgSeq: h,
        groups: b
      });
    }).catch(() => {
      t && Ze({
        orgSeq: h,
        groups: []
      });
    }), () => {
      t = !1;
    };
  }, [h, W, Q]);
  const Kt = x.useMemo(() => {
      const t = new Map();
      for (const b of v) if (b.kind === "direct") for (const g of b.peers) t.set(g.account_seq, (t.get(g.account_seq) ?? 0) + b.unread);
      return t;
    }, [v]),
    {
      lastTalkByPeer: Jt,
      selfRoomTime: Qt
    } = x.useMemo(() => {
      const t = new Map();
      let b = "";
      for (const g of v) if (!(g.kind !== "direct" || !g.last_message_time)) {
        if (g.peers.length === 0) {
          g.last_message_time > b && (b = g.last_message_time);
          continue;
        }
        for (const N of g.peers) g.last_message_time > (t.get(N.account_seq) ?? "") && t.set(N.account_seq, g.last_message_time);
      }
      return {
        lastTalkByPeer: t,
        selfRoomTime: b
      };
    }, [v]),
    se = x.useMemo(() => {
      const t = new Map(),
        b = new Set();
      for (const F of R) {
        const z = q.filter(J => J.unit_seqs.includes(F.seq));
        t.set(F.seq, z), z.forEach(J => b.add(J.account_seq));
      }
      const g = q.filter(F => !b.has(F.account_seq)),
        N = R.filter(F => !F.parent_seq).sort((F, z) => F.sort_no - z.sort_no);
      return {
        byUnit: t,
        unassigned: g,
        roots: N,
        childrenOf: F => R.filter(z => z.parent_seq === F).sort((z, J) => z.sort_no - J.sort_no)
      };
    }, [q, R]),
    ye = async (t, b = !1) => {
      if (H) return null;
      te(t.account_seq);
      try {
        const g = await Y.openDirect(t.account_seq, b);
        return $e(g), await it(), a ? a(g.seq) : u(`${Me}/${g.seq}`), g.seq;
      } catch (g) {
        return X(g instanceof Error ? g.message : P("chat.openRoomFailed")), null;
      } finally {
        te(0);
      }
    },
    Zt = async t => {
      try {
        const b = t.length === 1 ? await Y.openDirect(t[0]) : await Y.createGroup(t);
        $e(b), await it(), a ? a(b.seq) : u(`${Me}/${b.seq}`);
      } catch (b) {
        X(b instanceof Error ? b.message : P("chat.createRoomFailed"));
      }
    },
    tt = (t, b) => g => {
      g.preventDefault(), g.stopPropagation(), O({
        name: t,
        accountSeqs: b,
        position: L ? null : {
          top: g.clientY,
          left: g.clientX
        },
        anchor: g.currentTarget
      });
    },
    Se = M ? [...new Set(M.accountSeqs.filter(t => t > 0 && t !== p))] : [],
    Oe = M ? Se.length + 1 : 0,
    ve = Se.length > 1 ? v.find(t => t.kind === "group" && !t.secret && t.peers.length === Se.length && Se.every(b => t.peers.some(g => g.account_seq === b))) : void 0,
    nt = M ? [{
      key: Oe > 1 ? "group-chat" : "group-chat-none",
      icon: e.jsx(An, {}),
      label: Oe <= 1 ? P("chat.groupChatNobody") : ve ? P("chat.groupChatOpen") : P("chat.groupChatCreate", {
        count: Oe
      }),
      onSelect: () => {
        if (ve) {
          O(null), a ? a(ve.seq) : u(`${Me}/${ve.seq}`);
          return;
        }
        const t = M;
        O(null);
        const b = [...new Set(t.accountSeqs)].filter(g => g > 0 && g !== p);
        b.length !== 0 && ne({
          name: t.name,
          seqs: b,
          anchor: t.anchor
        });
      }
    }] : [],
    en = to(),
    st = (t, b, g) => _({
      member: t,
      position: L ? null : {
        top: g,
        left: b
      }
    }),
    fe = () => {
      S.current && window.clearTimeout(S.current.timer);
    },
    tn = (t, b) => {
      if (t.pointerType === "mouse") return;
      fe();
      const {
          clientX: g,
          clientY: N
        } = t,
        ue = window.setTimeout(() => {
          S.current && (S.current.fired = !0), st(b, g, N);
        }, 500);
      S.current = {
        timer: ue,
        fired: !1,
        x: g,
        y: N
      };
    },
    nn = t => {
      const b = S.current;
      !b || b.fired || (Math.abs(t.clientX - b.x) > 10 || Math.abs(t.clientY - b.y) > 10) && fe();
    },
    sn = (t, b) => {
      if (S.current?.fired) {
        S.current = null;
        return;
      }
      if (i && b) {
        i(t, b.querySelector(".MuiAvatar-root") ?? b);
        return;
      }
      ye(t);
    },
    oe = w?.member ?? null,
    ke = oe?.account_seq === p,
    ot = oe ? [{
      key: "chat",
      icon: e.jsx(zn, {}),
      label: s(ke ? "chat.selfChat" : "chat.startChat"),
      onSelect: () => {
        _(null), ye(oe);
      }
    }, ...(ke ? [] : en.items(() => ye(oe), () => _(null))), {
      key: "secret-chat",
      icon: e.jsx(qe, {}),
      label: s(ke ? "chat.selfSecretChat" : "chat.secretChat"),
      onSelect: () => {
        _(null), ye(oe, !0);
      }
    }, {
      key: "task",
      icon: e.jsx(On, {}),
      label: s(ke ? "chat.newTask" : "chat.requestTask"),
      onSelect: () => {
        _(null), Tn({
          manager: {
            name: oe.name || oe.email,
            accountSeq: oe.account_seq
          }
        });
      }
    }, ...(ie.byAccount.has(oe.account_seq) ? [{
      key: "employee",
      icon: e.jsx(Wn, {}),
      label: s("chat.editEmployee"),
      onSelect: () => {
        _(null);
        const t = ie.byAccount.get(oe.account_seq);
        t && c.openEdit(t);
      }
    }] : [])] : [],
    We = {
      display: "flex",
      alignItems: "center",
      gap: eo,
      px: 1.5,
      py: o ? 1 : .6,
      borderRadius: o ? 0 : "8px",
      cursor: "pointer",
      userSelect: "none",
      "&:hover": {
        backgroundColor: o ? "#f8f8f7" : "rgba(0, 0, 0, 0.04)"
      }
    },
    De = t => (o ? 2 : 1.5) + t * 1.5,
    Le = (t, b) => {
      const g = t.account_seq === p,
        N = Kt.get(t.account_seq) ?? 0,
        ue = g ? l?.name || t.name || t.email : D[t.account_seq]?.name || t.nickname || t.name || t.email,
        F = g ? ue : T[t.account_seq] || ue,
        z = String(ie.byAccount.get(t.account_seq)?.position || t.position || "").trim(),
        J = Fn(g ? Qt : Jt.get(t.account_seq)),
        rt = !n && !g;
      return e.jsxs(d, {
        role: "button",
        "data-keep-drawer": "",
        onClick: ce => sn({
          ...t,
          position: z
        }, ce.currentTarget),
        onContextMenu: ce => {
          ce.preventDefault(), st(t, ce.clientX, ce.clientY);
        },
        onPointerDown: ce => tn(ce, t),
        onPointerMove: nn,
        onPointerUp: fe,
        onPointerCancel: fe,
        onPointerLeave: fe,
        draggable: rt,
        onDragStart: rt ? ce => Zs(ce, {
          account_seq: t.account_seq,
          name: F
        }) : void 0,
        sx: {
          ...We,
          pl: De(b)
        },
        children: [e.jsx(Ln, {
          badgeContent: N,
          color: "error",
          max: 99,
          overlap: "circular",
          invisible: N === 0,
          children: e.jsx(so, {
            member: t,
            size: o ? 36 : 28,
            avatarOverride: g ? r : D[t.account_seq]?.avatar
          })
        }), e.jsxs(d, {
          sx: {
            minWidth: 0,
            flex: 1
          },
          children: [e.jsxs(C, {
            noWrap: !0,
            sx: {
              fontSize: o ? U : "0.9rem",
              fontWeight: N > 0 ? 700 : 500,
              minWidth: 0
            },
            children: [F, z && !F.includes(z) ? e.jsx(d, {
              component: "span",
              sx: {
                ml: .75,
                color: j[500],
                fontWeight: 400
              },
              children: z
            }) : null, g ? e.jsxs(d, {
              component: "span",
              sx: {
                ml: .5,
                color: j[500],
                fontWeight: 400
              },
              children: ["(", s("chat.selfChat"), ")"]
            }) : null]
          }), J ? e.jsx(C, {
            noWrap: !0,
            sx: {
              fontSize: "0.8125rem",
              color: j[500]
            },
            children: J
          }) : null]
        }), H === t.account_seq ? e.jsx(xe, {
          size: 16
        }) : null]
      }, t.account_seq);
    },
    at = (t, b) => {
      const g = ee[t.seq] ?? !0,
        N = se.byUnit.get(t.seq) ?? [],
        ue = se.childrenOf(t.seq),
        F = z => [...(se.byUnit.get(z) ?? []).map(J => J.account_seq), ...se.childrenOf(z).flatMap(J => F(J.seq))];
      return e.jsxs(d, {
        children: [e.jsxs(d, {
          onClick: () => K(z => ({
            ...z,
            [t.seq]: !g
          })),
          onContextMenu: tt(t.name, F(t.seq)),
          "data-keep-drawer": "",
          sx: {
            ...We,
            pl: De(b),
            color: ft[700]
          },
          children: [e.jsx(Dn, {
            sx: {
              fontSize: 18,
              color: j[500]
            }
          }), e.jsx(C, {
            noWrap: !0,
            sx: {
              fontSize: o ? k : "0.875rem",
              fontWeight: 600,
              flex: 1,
              minWidth: 0
            },
            children: t.name
          }), g ? e.jsx(xt, {
            sx: {
              fontSize: 18,
              color: "text.secondary"
            }
          }) : e.jsx(mt, {
            sx: {
              fontSize: 18,
              color: "text.secondary"
            }
          })]
        }), e.jsxs(gt, {
          in: g,
          timeout: bt,
          unmountOnExit: !0,
          children: [N.map(z => Le(z, b + 1)), ue.map(z => at(z, b + 1))]
        })]
      }, t.seq);
    },
    on = t => {
      const b = Xt[t.workspace_seq] ?? !1;
      return e.jsxs(d, {
        children: [e.jsxs(d, {
          onClick: () => Yt(g => ({
            ...g,
            [t.workspace_seq]: !b
          })),
          onContextMenu: tt(t.name, t.members.map(g => g.account_seq)),
          "data-keep-drawer": "",
          sx: {
            ...We,
            pl: De(0),
            color: ft[700]
          },
          children: [e.jsx(ms, {
            sx: {
              fontSize: 18,
              color: j[500]
            }
          }), e.jsxs(C, {
            noWrap: !0,
            sx: {
              fontSize: o ? k : "0.875rem",
              fontWeight: 600,
              flex: 1,
              minWidth: 0
            },
            children: [t.name, t.org_name ? e.jsx(d, {
              component: "span",
              sx: {
                ml: .75,
                color: j[500],
                fontWeight: 400
              },
              children: t.org_name
            }) : null]
          }), b ? e.jsx(xt, {
            sx: {
              fontSize: 18,
              color: "text.secondary"
            }
          }) : e.jsx(mt, {
            sx: {
              fontSize: 18,
              color: "text.secondary"
            }
          })]
        }), e.jsx(gt, {
          in: b,
          timeout: bt,
          unmountOnExit: !0,
          children: t.members.map(g => Le({
            ...g,
            email: "",
            nickname: ""
          }, 1))
        })]
      }, `ws-${t.workspace_seq}`);
    };
  return e.jsxs(d, {
    "data-keep-drawer": !0,
    sx: {
      width: n ? "100%" : no,
      boxSizing: "border-box",
      ...(o ? {
        bgcolor: "#fff",
        pt: se.roots.length ? 0 : 1.5,
        pb: 1.5
      } : {
        px: 1,
        pt: 1.5,
        pb: 1
      })
    },
    children: [!E || !Vt ? e.jsx(d, {
      sx: {
        display: "flex",
        justifyContent: "center",
        py: 3
      },
      children: e.jsx(xe, {
        size: 22
      })
    }) : q.length === 0 && et.length === 0 ? e.jsx(C, {
      sx: {
        px: 1.5,
        py: 2,
        fontSize: "0.875rem",
        color: "text.secondary"
      },
      children: s("chat.noMembersYet")
    }) : e.jsxs(e.Fragment, {
      children: [se.roots.map(t => at(t, 0)), se.unassigned.length > 0 ? e.jsxs(d, {
        sx: {
          mt: se.roots.length && !o ? 1 : 0
        },
        children: [se.roots.length ? e.jsx(C, {
          sx: {
            px: o ? 2 : 1.5,
            py: o ? 1 : .5,
            fontSize: o ? "0.875rem" : "0.75rem",
            fontWeight: 600,
            color: j[500]
          },
          children: s("chat.noDepartment")
        }) : null, se.unassigned.map(t => Le(t, 0))]
      }) : null, et.map(on)]
    }), L ? e.jsx(yt, {
      open: w !== null,
      onClose: () => _(null),
      items: ot
    }) : e.jsx(ut, {
      open: !!w?.position,
      onClose: () => _(null),
      anchorReference: "anchorPosition",
      anchorPosition: w?.position ?? void 0,
      transitionDuration: 0,
      onContextMenu: t => t.preventDefault(),
      children: ot.map(t => e.jsxs(ht, {
        onClick: t.onSelect,
        disableRipple: !0,
        sx: {
          fontSize: 14
        },
        children: [e.jsx(dt, {
          sx: {
            "& .MuiSvgIcon-root": {
              fontSize: 20
            }
          },
          children: t.icon
        }), e.jsx(pt, {
          primary: t.label,
          slotProps: {
            primary: {
              sx: {
                fontSize: 14
              }
            }
          }
        })]
      }, t.key))
    }), L ? e.jsx(yt, {
      open: M !== null,
      onClose: () => O(null),
      items: nt
    }) : e.jsx(ut, {
      open: !!M?.position,
      onClose: () => O(null),
      anchorReference: "anchorPosition",
      anchorPosition: M?.position ?? void 0,
      transitionDuration: 0,
      onContextMenu: t => t.preventDefault(),
      children: nt.map(t => e.jsxs(ht, {
        onClick: t.onSelect,
        disabled: t.key === "group-chat-none",
        disableRipple: !0,
        sx: {
          fontSize: 14
        },
        children: [e.jsx(dt, {
          sx: {
            "& .MuiSvgIcon-root": {
              fontSize: 20
            }
          },
          children: t.icon
        }), e.jsx(pt, {
          primary: t.label,
          slotProps: {
            primary: {
              sx: {
                fontSize: 14
              }
            }
          }
        })]
      }, t.key))
    }), e.jsx(Lt, {
      open: !!V,
      anchorEl: V?.anchor ?? null,
      title: V ? P("chat.groupChatConfirm", {
        name: V.name,
        count: V.seqs.length + 1
      }) : "",
      confirmText: P("chat.groupChatCreateButton"),
      cancelText: P("common.cancel"),
      placement: "right",
      minWidth: 260,
      maxWidth: 360,
      zIndex: 1401,
      onCancel: () => ne(null),
      onConfirm: () => {
        const t = V;
        ne(null), t && Zt(t.seqs);
      }
    }), e.jsx(fs, {
      controller: c,
      units: R,
      members: q
    })]
  });
}
export { Oo as C, vs as N, Gt as R, Eo as a, ks as b, eo as c, Us as d, It as e, Bs as f, Ao as g, zo as h, Po as i, Rs as j, To as p, ws as r, to as u };