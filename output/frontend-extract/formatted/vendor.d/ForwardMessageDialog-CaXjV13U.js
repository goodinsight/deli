import { r as p, j as a } from "./react-CjxcGQav.js";
import { S as E } from "./squircle-CQM8EvXm.js";
import { bT as f, ce as Y, cf as V, bv as X, D as J, u as Z, cz as tt, c2 as et, fq as nt, fr as rt, bI as at, go as ot, B as T, d4 as it, d1 as ct, dq as st, s as m, fs as lt, L as _, aD as O, fm as P, a_ as ut, ft as dt, bQ as ht, K as mt, bO as ft, bx as pt } from "../js.d/main-Cm9wS5wt.js";
import { P as B } from "./Person-DnoEHesw.js";
import { c as xt, d as St, m as K, n as _t } from "./aliasStore-DiN6Kp-5.js";
const bt = 120 * 1e3;
function b(t) {
  if (!t) return null;
  const e = String(t).trim().match(/^(\d{4})-(\d{2})-(\d{2})[T\s](\d{2}):(\d{2})/);
  return e ? {
    year: +e[1],
    month: +e[2],
    day: +e[3],
    hour: +e[4],
    minute: +e[5]
  } : null;
}
function yt(t) {
  return new Date(t.year, t.month - 1, t.day, t.hour, t.minute).getTime();
}
function z(t) {
  return `${String(t.hour).padStart(2, "0")}:${String(t.minute).padStart(2, "0")}`;
}
function $t(t = new Date()) {
  const e = r => String(r).padStart(2, "0");
  return `${t.getFullYear()}-${e(t.getMonth() + 1)}-${e(t.getDate())} ${e(t.getHours())}:${e(t.getMinutes())}:${e(t.getSeconds())}`;
}
function U(t) {
  const e = b(t);
  return e ? Math.abs(Date.now() - yt(e)) <= bt ? f("chat.justNow") : z(e) : "--:--";
}
function vt(t, e) {
  const r = Number(e ?? 0);
  if (!Number.isFinite(r) || r <= 0) return "";
  const i = f("chat.editedCount", {
      count: Math.floor(r)
    }),
    o = b(t);
  return o ? `${z(o)} ${i}` : i;
}
function wt(t) {
  const e = b(t);
  return e ? `${String(e.month).padStart(2, "0")}.${String(e.day).padStart(2, "0")}` : f("chat.unknownDate");
}
function gt(t) {
  const e = b(t);
  return e ? new Intl.DateTimeFormat(Y(V()), {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long"
  }).format(new Date(e.year, e.month - 1, e.day)) : f("chat.unknownDate");
}
function Mt(t) {
  const e = b(t);
  if (!e) return "";
  const r = new Date();
  return e.year === r.getFullYear() && e.month === r.getMonth() + 1 && e.day === r.getDate() ? z(e) : `${e.month}.${e.day}`;
}
function H(t, e = "sm") {
  const r = String(t ?? "").trim();
  return r ? `/api/v1/files/${r}?thumb=${e}` : "";
}
function jt(t, e, r = {}) {
  const i = t.deleted === !0;
  return {
    id: t.client_key ?? String(t.seq),
    seq: t.seq,
    accountSeq: t.account_seq,
    avatarSrc: e.get(t.account_seq) || void 0,
    timeLabel: U(t.created_time),
    createdTime: t.created_time,
    updatedTime: t.updated_time,
    editedTimeLabel: i ? U(t.updated_time) : vt(t.updated_time, t.edit_count),
    editCount: t.edit_count,
    deleted: i,
    dateLabel: wt(t.created_time),
    fullDateLabel: gt(t.created_time),
    description: t.description,
    replyToSeq: t.reply_to_seq && t.reply_to_seq > 0 ? t.reply_to_seq : void 0,
    replyToWorkerName: t.reply_to_worker_name || void 0,
    replyToDescription: t.reply_to_description || void 0,
    replyToDeleted: t.reply_to_deleted === !0 || void 0,
    attachmentName: t.attachment_name || void 0,
    attachmentPreviewUrl: t.attachment_preview_url || void 0,
    attachmentUuid: t.attachment_uuid || void 0,
    attachmentMimeType: t.attachment_mime_type || void 0,
    attachmentSize: t.attachment_size > 0 ? t.attachment_size : void 0,
    attachmentExpired: t.attachment_expired || void 0,
    albumKey: t.album_key || void 0,
    albumIndex: t.album_index ?? 0,
    albumTotal: t.album_total ?? 0,
    transcript: t.transcript || void 0,
    transcriptState: t.transcript_state || void 0,
    workerName: r[t.account_seq] || t.worker_name,
    kind: t.kind === "system" || t.kind === "call" || t.kind === "call_summary" || t.kind === "ai_summary" ? t.kind : void 0,
    payload: t.payload
  };
}
function Wt(t, e, r = {}) {
  return [...t].sort((i, o) => {
    const d = i.created_time ? new Date(i.created_time.replace(" ", "T")).getTime() : NaN,
      l = o.created_time ? new Date(o.created_time.replace(" ", "T")).getTime() : NaN;
    return Number.isFinite(d) && Number.isFinite(l) && d !== l ? d - l : i.seq - o.seq;
  }).map(i => jt(i, e, r)).reduce(qt, []);
}
function qt(t, e) {
  if (!e.albumKey || e.deleted || !e.attachmentPreviewUrl) return [...t, e];
  const r = t.find(o => o.albumKey === e.albumKey && o.accountSeq === e.accountSeq && !o.deleted && o.album);
  if (!r) return [...t, {
    ...e,
    album: [e]
  }];
  const i = [...(r.album ?? []), e].sort((o, d) => (o.albumIndex ?? 0) - (d.albumIndex ?? 0));
  return t.map(o => o === r ? {
    ...r,
    album: i
  } : o);
}
function Dt(t, e, r) {
  if (t.name) return t.name;
  const i = t.peers.map(o => e[o.account_seq] || o.name).filter(Boolean);
  return i.length > 0 ? i.join(", ") : r || f("chat.conversation");
}
function At({
  open: t,
  onClose: e,
  payload: r,
  currentRoomSeq: i = 0,
  title: o,
  sendTo: d
}) {
  const l = X(),
    w = J(),
    k = Z().useValue("account"),
    g = Number(k?.seq ?? 0) || 0,
    L = String(k?.name ?? ""),
    y = tt()?.seq ?? 0,
    {
      rooms: C
    } = xt(g, y),
    v = St(),
    [I, G] = p.useState([]),
    [N, $] = p.useState(""),
    [h, M] = p.useState(new Set()),
    [S, j] = p.useState(!1);
  p.useEffect(() => {
    if (!t || ($(""), M(new Set()), j(!1), !y)) return;
    let n = !0;
    return et.listMembers(y).then(c => {
      n && G(c.members);
    }).catch(() => {}), () => {
      n = !1;
    };
  }, [t, y]);
  const x = N.trim().toLowerCase(),
    q = p.useMemo(() => C.filter(n => n.seq !== i).map(n => ({
      key: `room-${n.seq}`,
      room: n,
      label: Dt(n, v, L)
    })).filter(n => !x || n.label.toLowerCase().includes(x)), [C, i, v, L, x]),
    D = p.useMemo(() => I.filter(n => n.account_seq !== g).map(n => ({
      key: `member-${n.account_seq}`,
      member: n,
      label: v[n.account_seq] || n.nickname || n.name || n.email
    })).filter(n => !x || n.label.toLowerCase().includes(x)), [I, g, v, x]),
    W = n => M(c => {
      const s = new Set(c);
      return s.has(n) ? s.delete(n) : s.add(n), s;
    }),
    Q = async () => {
      if (!r && !d || S || h.size === 0) return;
      j(!0);
      const n = new Set();
      let c = 0;
      for (const u of h) u.startsWith("room-") && n.add(Number(u.slice(5)));
      for (const u of h) if (u.startsWith("member-")) try {
        const R = await K.openDirect(Number(u.slice(7)));
        _t(R), n.add(R.seq);
      } catch {
        c += 1;
      }
      let s = 0;
      for (const u of n) try {
        d ? await d(u) : r && (await K.send(u, r)), s += 1;
      } catch {
        c += 1;
      }
      j(!1), c > 0 ? ft(s > 0 ? f("chat.forwardPartial", {
        sent: s,
        failed: c
      }) : f("chat.sendFailed")) : pt(f("chat.forwardSent", {
        count: s
      })), e();
    },
    A = {
      display: "flex",
      alignItems: "center",
      gap: 1.25,
      px: 1,
      py: .75,
      borderRadius: 2,
      cursor: "pointer",
      "&:active": {
        bgcolor: m[100]
      }
    },
    F = {
      px: 1,
      pt: 1.5,
      pb: .5,
      fontSize: "0.8125rem",
      fontWeight: 700,
      color: m[500]
    };
  return a.jsxs(nt, {
    open: t,
    onClose: S ? void 0 : e,
    fullScreen: w,
    fullWidth: !0,
    maxWidth: "xs",
    slotProps: {
      paper: {
        sx: w ? {} : {
          height: "min(640px, 80vh)",
          borderRadius: 3
        }
      }
    },
    children: [a.jsx(rt, {
      sx: {
        fontSize: "1.0625rem",
        fontWeight: 700,
        pr: 7
      },
      children: o || l("chat.send")
    }), a.jsx(at, {
      onClick: e,
      disabled: S,
      "aria-label": l("chat.close"),
      size: "small",
      sx: {
        position: "absolute",
        top: 12,
        right: 12
      },
      children: a.jsx(ot, {})
    }), a.jsx(T, {
      sx: {
        px: 3,
        pb: 1
      },
      children: a.jsx(it, {
        fullWidth: !0,
        size: "medium",
        value: N,
        onChange: n => $(n.target.value),
        placeholder: l("chat.searchNameRoom"),
        slotProps: {
          input: {
            startAdornment: a.jsx(ct, {
              position: "start",
              children: a.jsx(st, {
                sx: {
                  fontSize: 22,
                  color: m[500]
                }
              })
            }),
            sx: {
              fontSize: "1rem"
            }
          }
        }
      })
    }), a.jsxs(lt, {
      sx: {
        px: 2,
        pt: 0
      },
      children: [q.length > 0 ? a.jsx(_, {
        sx: F,
        children: l("chat.rooms")
      }) : null, q.map(({
        key: n,
        room: c,
        label: s
      }) => {
        const u = c.peers[0];
        return a.jsxs(T, {
          role: "button",
          onClick: () => W(n),
          sx: A,
          children: [a.jsx(O, {
            checked: h.has(n),
            sx: {
              p: .5,
              "& .MuiSvgIcon-root": {
                fontSize: 26
              }
            },
            tabIndex: -1
          }), a.jsx(P, {
            src: c.peers.length === 1 && u?.avatar ? H(u.avatar) : void 0,
            sx: {
              width: 34,
              height: 34,
              bgcolor: m[200],
              color: m[500],
              ...E
            },
            children: c.peers.length > 1 ? a.jsx(ut, {
              fontSize: "small"
            }) : a.jsx(B, {
              fontSize: "small"
            })
          }), a.jsx(_, {
            noWrap: !0,
            sx: {
              flex: 1,
              minWidth: 0,
              fontSize: "0.9375rem",
              fontWeight: 500
            },
            children: s
          })]
        }, n);
      }), D.length > 0 ? a.jsx(_, {
        sx: F,
        children: l("chat.friends")
      }) : null, D.map(({
        key: n,
        member: c,
        label: s
      }) => a.jsxs(T, {
        role: "button",
        onClick: () => W(n),
        sx: A,
        children: [a.jsx(O, {
          checked: h.has(n),
          sx: {
            p: .5,
            "& .MuiSvgIcon-root": {
              fontSize: 26
            }
          },
          tabIndex: -1
        }), a.jsx(P, {
          src: c.avatar ? H(c.avatar) : void 0,
          sx: {
            width: 34,
            height: 34,
            bgcolor: m[200],
            color: m[500],
            ...E
          },
          children: a.jsx(B, {
            fontSize: "small"
          })
        }), a.jsx(_, {
          noWrap: !0,
          sx: {
            flex: 1,
            minWidth: 0,
            fontSize: "0.9375rem",
            fontWeight: 500
          },
          children: s
        })]
      }, n)), q.length === 0 && D.length === 0 ? a.jsx(_, {
        sx: {
          py: 6,
          textAlign: "center",
          fontSize: "0.9375rem",
          color: m[500]
        },
        children: l("chat.nowhereToSend")
      }) : null]
    }), a.jsx(dt, {
      sx: {
        px: 3,
        pb: 2
      },
      children: a.jsx(ht, {
        variant: "contained",
        onClick: () => {
          Q();
        },
        disabled: !r && !d || S || h.size === 0,
        fullWidth: w,
        children: S ? a.jsx(mt, {
          size: 18,
          color: "inherit"
        }) : h.size > 0 ? l("chat.sendWithCount", {
          count: h.size
        }) : l("chat.send")
      })
    })]
  });
}
export { At as F, H as a, gt as b, Mt as f, $t as n, Wt as t };