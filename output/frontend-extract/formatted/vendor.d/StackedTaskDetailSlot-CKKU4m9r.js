import { j as o, r as u, u as xe } from "./react-CjxcGQav.js";
import { E as me } from "./EventSeatOutlined-59UM_j63.js";
import { bv as q, B as p, fj as D, qY as U, cz as be, dC as pe, dN as he, bO as G, bT as O, bM as F, lv as N, jD as L, mB as ge, jA as B, dz as ke, dA as ye, qZ as we, nm as Se, cj as A, gR as ve, bH as K, fM as je, ce as Z, cf as X, q_ as Ce, q$ as Te, r0 as _e, r1 as qe, r2 as Ee, r3 as Pe, r4 as Ie, r5 as Be, r6 as Oe, d3 as J, cZ as ee, D as te, h6 as Ae, bI as oe, jl as Me, r7 as Re, r8 as De, r9 as Fe, fQ as Ne, I as Le, ra as ze, ku as Ve, w as He, fp as $e, bB as se, d5 as We, cW as ne, bx as Ue, iK as Ge, rb as Ke, a1 as Ye, pG as Qe, fw as Ze, rc as Xe, qb as Je, bQ as et, S as tt, fx as ot } from "../js.d/main-Cm9wS5wt.js";
import { O as st, b as nt, p as rt } from "./ApprovalDetailDialog-v7PUkzWr.js";
import { S as re } from "./TaskMonthlyFields-B0lhyzjQ.js";
import { videoMeetingApi as at, conflictMeetingCode as it } from "./videoMeetingApi-BCL1yHsp.js";
import { s as lt } from "./videoLink-BfLN3LRj.js";
import { V as ct } from "./ChatCallButtons-TGIgJ8cF.js";
import { V as ut } from "./MeetingRecordScreen-XaBBkFFb.js";
import { H as dt } from "./ReplayOutlined-BZwnvaIm.js";
import { O as ft, J as xt, L as mt } from "./BoardPostDetail-CniIF2a7.js";
import { v as bt, u as pt } from "./types-B1OAKh4b.js";
import { D as ht, a as gt } from "./DictationButton-9kid6hUO.js";
import { u as kt } from "./useFileViewer-B-2ewnr3.js";
import { i as yt } from "./filePreview-B-5SZXbS.js";
import { z as wt } from "./bootstrapController-BMV_i07c.js";
import { i as St } from "./taskboxProviderConfig-DZSmb5uq.js";
import { u as vt } from "./listViewMode-iTl-2ucA.js";
import { T as ae } from "./TaskBookmarkButton-0oVnbzsT.js";
import { d as jt } from "./taskboxApi-BuYlRWHe.js";
function ao({
  task: e
}) {
  const t = q();
  return !e.seq || e.is_notice || e.is_bug || e.is_post || e.is_poll ? null : o.jsx(st, {
    link: {
      task_seq: e.seq
    },
    prefill: {
      title: e.title
    },
    scope: "task",
    renderRow: s => o.jsxs(p, {
      sx: {
        px: 2
      },
      children: [o.jsx(D, {
        sx: {
          ...re,
          mx: -2
        }
      }), o.jsx(U, {
        icon: o.jsx(me, {}),
        label: t("taskbox.sharedResources"),
        children: s
      })]
    })
  });
}
function io({
  task: e
}) {
  const t = q(),
    s = be(),
    i = String(e.video_meeting_code ?? ""),
    [n, l] = u.useState(i),
    [r, c] = u.useState(!1);
  if (u.useEffect(() => {
    i && l(i);
  }, [i]), !e.seq || !e.is_event || e.is_notice || e.is_post || e.is_poll || !s || !pe(s, ct)) return null;
  const d = async () => {
    c(!0);
    try {
      const b = lt(String(e.due_date ?? ""), String(e.event_time ?? "")),
        x = await at.create({
          mode: "meeting",
          source: "calendar",
          source_seq: e.seq,
          title: e.title,
          video: !0,
          ...(b ? {
            scheduled_time: b
          } : {})
        });
      l(x.meeting.code);
    } catch (b) {
      const x = it(b);
      x ? l(x) : G(b instanceof Error ? b.message : O("videoMeeting.createLinkFailed"));
    } finally {
      c(!1);
    }
  };
  return o.jsxs(p, {
    sx: {
      px: 2
    },
    children: [o.jsx(D, {
      sx: {
        ...re,
        mx: -2
      }
    }), o.jsx(U, {
      icon: o.jsx(he, {}),
      label: t("videoMeeting.videoMeeting"),
      children: o.jsx(ut, {
        code: n,
        source: "calendar",
        sourceSeq: e.seq,
        onCreate: d,
        creating: r
      })
    })]
  });
}
const z = {
  autoAbortKey: !1
};
async function Ct(e) {
  return (await F.http.get(`/v1/taskbox/task/${e}/poll`, !0, {
    ...L(),
    ...N("task", e)
  }, z))?.data?.poll ?? null;
}
async function Q(e, t) {
  return (await F.http.post(`/v1/taskbox/task/${e}/poll/vote`, {
    option_ids: t
  }, !0, {
    ...L(),
    ...N("task", e)
  }, z))?.data?.poll ?? null;
}
async function Tt(e, t) {
  return (await F.http.post(`/v1/taskbox/task/${e}/poll/option`, {
    label: t
  }, !0, {
    ...L(),
    ...N("task", e)
  }, z))?.data?.poll ?? null;
}
async function _t(e) {
  return (await F.http.post(`/v1/taskbox/task/${e}/poll/close`, {}, !0, {
    ...L(),
    ...N("task", e)
  }, z))?.data?.poll ?? null;
}
function R(e) {
  return t => {
    t instanceof DOMException && t.name === "AbortError" || G(t instanceof Error && t.message ? t.message : e);
  };
}
function qt() {
  const e = new Date(),
    t = s => String(s).padStart(2, "0");
  return `${e.getFullYear()}-${t(e.getMonth() + 1)}-${t(e.getDate())} ${t(e.getHours())}:${t(e.getMinutes())}`;
}
function Et(e, t) {
  const s = e.poll,
    i = s?.rev ?? 0,
    [n, l] = u.useState(null),
    [r, c] = u.useState([]),
    [d, b] = u.useState(!1),
    [x, h] = u.useState(!1),
    w = u.useRef(null),
    y = u.useCallback(f => {
      f && (l(f), c(f.my_option_ids), b(!1));
    }, []);
  u.useEffect(() => {
    if (!t || !e.seq || w.current === i) return;
    w.current = i;
    let f = !1;
    return Ct(e.seq).then(g => {
      f || !g || (l(g), c(k => d ? k : g.my_option_ids));
    }).catch(() => {
      w.current = null;
    }), () => {
      f = !0;
    };
  }, [t, e.seq, i]);
  const S = !!n?.closed || !!s?.closed || !!s?.deadline && qt() >= String(s?.deadline),
    E = (n?.my_option_ids.length ?? 0) > 0,
    j = !S && (!E || d),
    T = u.useCallback(f => {
      j && c(g => s?.multiple ? g.includes(f) ? g.filter(k => k !== f) : [...g, f] : [f]);
    }, [j, s?.multiple]),
    I = u.useCallback(async () => {
      if (!(x || r.length === 0)) {
        h(!0);
        try {
          y(await Q(e.seq, r));
        } catch (f) {
          R(O("taskbox.voteFailed"))(f);
        } finally {
          h(!1);
        }
      }
    }, [x, r, e.seq, y]),
    v = u.useCallback(async () => {
      if (!x) {
        h(!0);
        try {
          y(await Q(e.seq, []));
        } catch (f) {
          R(O("taskbox.voteCancelFailed"))(f);
        } finally {
          h(!1);
        }
      }
    }, [x, e.seq, y]),
    a = u.useCallback(() => b(!0), []),
    m = u.useCallback(() => {
      b(!1), c(n?.my_option_ids ?? []);
    }, [n]),
    C = u.useCallback(async f => {
      const g = f.trim();
      if (x || !g) return !1;
      h(!0);
      try {
        const k = await Tt(e.seq, g);
        return k && l(k), !0;
      } catch (k) {
        return R(O("taskbox.optionAddFailed"))(k), !1;
      } finally {
        h(!1);
      }
    }, [x, e.seq]),
    _ = u.useCallback(async () => {
      if (!x) {
        h(!0);
        try {
          y(await _t(e.seq));
        } catch (f) {
          R(O("taskbox.pollCloseFailed"))(f);
        } finally {
          h(!1);
        }
      }
    }, [x, e.seq, y]);
  return {
    config: s,
    view: n,
    selected: r,
    closed: S,
    voted: E,
    choosing: j,
    editing: d,
    busy: x,
    toggleOption: T,
    submitVote: I,
    cancelVote: v,
    startEdit: a,
    stopEdit: m,
    addOption: C,
    closePoll: _
  };
}
const Pt = 60;
function It(e) {
  const [t, s, i] = e.split("-").map(Number);
  return !t || !s || !i ? e : new Intl.DateTimeFormat(Z(X()), {
    month: "long",
    day: "numeric",
    weekday: "short"
  }).format(new Date(t, s - 1, i));
}
function Bt(e) {
  const [t, s] = e.split(" "),
    [i, n, l] = t.split("-").map(Number);
  return !n || !l ? e : `${new Intl.DateTimeFormat(Z(X()), {
    month: "long",
    day: "numeric"
  }).format(new Date(i || 2e3, n - 1, l))} ${s ?? ""}`.trim();
}
function lo({
  task: e
}) {
  const t = q(),
    {
      colors: s
    } = ge(),
    i = u.useRef(null),
    [n, l] = u.useState(!1);
  u.useEffect(() => {
    const a = i.current;
    if (!a || typeof IntersectionObserver > "u") {
      l(!0);
      return;
    }
    const m = new IntersectionObserver(C => {
      C.some(_ => _.isIntersecting) && (m.disconnect(), l(!0));
    }, {
      rootMargin: "400px 0px"
    });
    return m.observe(a), () => m.disconnect();
  }, []);
  const r = Et(e, n),
    {
      config: c,
      view: d
    } = r,
    [b, x] = u.useState("");
  if (!c) return null;
  const h = !!d?.is_author,
    w = d?.options ?? c.options.map(a => ({
      id: a.id,
      label: a.label
    })),
    y = !!d?.results_visible && !r.choosing,
    S = w.reduce((a, m) => a + (m.count ?? 0), 0),
    E = !r.closed && (c.allow_add || h),
    j = [c.multiple ? t("taskbox.multipleChoice") : "", c.anonymous ? t("taskbox.anonymous") : "", r.closed ? t("taskbox.pollClosedShort") : c.deadline ? t("taskbox.closesAt", {
      when: Bt(c.deadline)
    }) : "", d?.voter_count !== void 0 ? t("taskbox.votersCount", {
      count: d.voter_count
    }) : ""].filter(Boolean),
    T = d && !d.results_visible ? d.hidden_reason === "private" ? t("taskbox.resultsAuthorOnly") : t("taskbox.resultsAfterClose") : "",
    I = a => {
      a.key !== "Enter" || a.nativeEvent.isComposing || (a.preventDefault(), r.addOption(b).then(m => {
        m && x("");
      }));
    },
    v = a => ({
      px: 1.5,
      py: .5,
      borderRadius: 1,
      fontSize: B(14),
      fontWeight: 600,
      ...(a ? {
        bgcolor: s.accent,
        color: s.accentContrast,
        "&.Mui-disabled": {
          opacity: .5
        }
      } : {
        border: `1px solid ${s.border}`,
        color: s.textSecondary,
        "&:hover": {
          bgcolor: s.surfaceHover
        }
      })
    });
  return o.jsxs(p, {
    ref: i,
    sx: {
      mx: 2,
      mt: 1.5,
      p: 1.5,
      border: `1px solid ${s.border}`,
      borderRadius: 2
    },
    children: [o.jsxs(p, {
      sx: {
        display: "flex",
        alignItems: "center",
        gap: .75,
        fontSize: B(14),
        color: s.textSecondary,
        flexWrap: "wrap"
      },
      children: [o.jsx(dt, {
        sx: {
          fontSize: 18,
          color: r.closed ? s.textMuted : s.accentOnSurface
        }
      }), o.jsx(p, {
        component: "span",
        sx: {
          fontWeight: 700,
          color: r.closed ? s.textMuted : s.textPrimary
        },
        children: r.closed ? t("taskbox.closedPoll") : t("taskbox.poll")
      }), j.length > 0 ? o.jsxs(p, {
        component: "span",
        children: ["· ", j.join(" · ")]
      }) : null]
    }), c.description.trim() ? o.jsx(p, {
      sx: {
        mt: 1,
        fontSize: B(15),
        lineHeight: 1.6,
        color: s.textPrimary,
        whiteSpace: "pre-wrap",
        wordBreak: "break-word"
      },
      children: c.description
    }) : null, o.jsx(p, {
      sx: {
        display: "flex",
        flexDirection: "column",
        mt: 1.5,
        border: `1px solid ${s.border}`,
        borderRadius: 1,
        overflow: "hidden"
      },
      children: w.map(a => {
        const m = c.kind === "date" ? It(a.label) : a.label,
          C = r.selected.includes(a.id),
          _ = (d?.my_option_ids ?? []).includes(a.id),
          f = a.count ?? 0,
          g = S > 0 ? Math.round(f / S * 100) : 0,
          k = (a.voters ?? []).map($ => $.name).join(", "),
          H = c.multiple ? C ? ke : ye : C ? we : Se;
        return o.jsxs(A, {
          disabled: !r.choosing || r.busy,
          onClick: () => r.toggleOption(a.id),
          sx: {
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: 1,
            width: "100%",
            minHeight: 44,
            px: 1.5,
            overflow: "hidden",
            textAlign: "left",
            "&:not(:last-of-type)": {
              borderBottom: `1px solid ${s.border}`
            },
            boxShadow: C && r.choosing ? `inset 0 0 0 1px ${s.accent}` : "none",
            bgcolor: s.surface,
            "&.Mui-disabled": {
              color: "inherit"
            }
          },
          children: [y ? o.jsx(p, {
            sx: {
              position: "absolute",
              inset: 0,
              width: `${g}%`,
              bgcolor: _ ? s.accentSoft : s.surfaceHoverStrong
            }
          }) : null, o.jsxs(p, {
            sx: {
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: 1,
              flex: 1,
              minWidth: 0
            },
            children: [r.choosing ? o.jsx(H, {
              sx: {
                fontSize: 20,
                color: C ? s.accent : s.textMuted,
                flexShrink: 0
              }
            }) : _ ? o.jsx(ve, {
              sx: {
                fontSize: 20,
                color: s.accent,
                flexShrink: 0
              }
            }) : null, o.jsx(p, {
              component: "span",
              sx: {
                fontSize: B(15),
                color: s.textPrimary,
                fontWeight: _ ? 600 : 400,
                wordBreak: "break-word"
              },
              children: m
            })]
          }), y ? o.jsx(K, {
            title: k,
            disableInteractive: !0,
            disableHoverListener: !k,
            disableTouchListener: !k,
            children: o.jsxs(p, {
              component: "span",
              sx: {
                position: "relative",
                flexShrink: 0,
                fontSize: B(14),
                color: s.textSecondary,
                fontWeight: 600
              },
              children: [f, "표 · ", g, "%"]
            })
          }) : null]
        }, a.id);
      })
    }), T && !r.choosing ? o.jsx(p, {
      sx: {
        mt: 1,
        fontSize: B(14),
        color: s.textMuted
      },
      children: T
    }) : null, E ? o.jsx(p, {
      sx: {
        mt: 1
      },
      children: o.jsx(je, {
        value: b,
        placeholder: c.kind === "date" ? t("taskbox.addDateOptionHint") : t("taskbox.addOptionHint"),
        onChange: a => x(a.target.value.slice(0, Pt)),
        onKeyDown: I,
        disabled: r.busy,
        fullWidth: !0,
        size: "small",
        sx: {
          "& .MuiInputBase-root": {
            bgcolor: s.surface,
            fontSize: B(15)
          }
        }
      })
    }) : null, o.jsxs(p, {
      sx: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 1,
        mt: 1.5
      },
      children: [r.choosing ? o.jsxs(o.Fragment, {
        children: [o.jsx(A, {
          disabled: r.selected.length === 0 || r.busy,
          onClick: () => {
            r.submitVote();
          },
          sx: v(!0),
          children: r.editing ? t("taskbox.revote") : t("taskbox.vote")
        }), r.editing ? o.jsx(A, {
          onClick: r.stopEdit,
          sx: v(!1),
          children: t("taskbox.cancelEdit")
        }) : null]
      }) : !r.closed && r.voted ? o.jsxs(o.Fragment, {
        children: [o.jsx(A, {
          disabled: r.busy,
          onClick: r.startEdit,
          sx: v(!1),
          children: t("taskbox.changeVote")
        }), o.jsx(A, {
          disabled: r.busy,
          onClick: () => {
            r.cancelVote();
          },
          sx: v(!1),
          children: t("taskbox.cancelVote")
        })]
      }) : null, h && !r.closed ? o.jsx(A, {
        disabled: r.busy,
        onClick: () => {
          r.closePoll();
        },
        sx: {
          ...v(!1),
          ml: "auto"
        },
        children: t("taskbox.closePoll")
      }) : null]
    })]
  });
}
function co(e) {
  return e ? typeof e.content == "string" && Array.isArray(e.comments) : !1;
}
function uo({
  seq: e,
  task: t,
  onCancel: s,
  applyServerTask: i,
  relockTask: n
}) {
  const l = e !== null && !!(t && t.seq === e && t.locked),
    r = u.useRef({
      onCancel: s,
      applyServerTask: i,
      relockTask: n
    });
  r.current = {
    onCancel: s,
    applyServerTask: i,
    relockTask: n
  };
  const c = String(t?.title ?? "");
  return u.useEffect(() => {
    !l || e === null || ft({
      seq: e,
      title: c,
      onUnlocked: d => r.current.applyServerTask(d),
      onCancel: () => r.current.onCancel()
    });
  }, [l, e, c]), u.useEffect(() => {
    if (e !== null) return () => r.current.relockTask(e);
  }, [e]), l;
}
function fo({
  open: e,
  spinnerId: t = "codeshop-print-loading",
  ariaLabelledBy: s = "codeshop-print-loading"
}) {
  return o.jsx(Ce, {
    open: e,
    hideBackdrop: !0,
    disableAutoFocus: !0,
    disableEnforceFocus: !0,
    disableRestoreFocus: !0,
    "aria-labelledby": s,
    children: o.jsx(p, {
      sx: {
        position: "fixed",
        inset: 0,
        zIndex: i => i.zIndex.modal,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        animation: "codeshop-print-overlay-fade-in 0.16s ease-out",
        "@keyframes codeshop-print-overlay-fade-in": {
          "0%": {
            opacity: 0
          },
          "100%": {
            opacity: 1
          }
        }
      },
      children: o.jsx(p, {
        id: t,
        sx: {
          width: 50,
          height: 50,
          borderRadius: "50%",
          border: "3.5px solid rgba(28, 64, 125, 0.16)",
          borderTopColor: "#1c407d",
          boxShadow: "0 10px 26px rgba(15, 23, 42, 0.08)",
          animation: "codeshop-print-spinner 0.72s linear infinite",
          "@keyframes codeshop-print-spinner": {
            "0%": {
              transform: "rotate(0deg)"
            },
            "100%": {
              transform: "rotate(360deg)"
            }
          }
        }
      })
    })
  });
}
const Ot = 2;
async function V(e, t) {
  const s = await nt(e, {
    pageWidth: t ? Be : Oe,
    pageHeight: t ? Pe : Ie,
    renderScale: Ot,
    loadImageErrorMessage: O("taskbox.printImageFailed"),
    canvasErrorMessage: O("taskbox.printCanvasFailed")
  });
  await rt(s);
}
async function xo(e, t) {
  await V(await Te(e, t), !0);
}
async function mo(e, t) {
  await V(await Ee(e, t), !1);
}
async function bo(e, t, s) {
  await V(await _e(e, t, s), !0);
}
async function po(e, t, s) {
  await V(await qe(e, t, s), !1);
}
function At(e) {
  const {
      items: t
    } = J(),
    {
      groups: s
    } = ee();
  if (!(e > 0)) return !1;
  const i = t.find(n => n.seq === e)?.team_seq ?? 0;
  return i > 0 && s.some(n => n.seq === i && n.task_contribution === !0);
}
function ie({
  taskSeq: e,
  onOpened: t
}) {
  const s = q();
  return te() || Ae() || !e ? null : o.jsx(K, {
    title: s("taskbox.openInNewWindow"),
    arrow: !0,
    disableInteractive: !0,
    children: o.jsx(oe, {
      "aria-label": s("taskbox.openInNewWindow"),
      onClick: () => {
        Re(e) && t?.();
      },
      sx: {
        color: "#6b7280",
        "&:hover": {
          color: "#37352f"
        }
      },
      children: o.jsx(Me, {
        sx: {
          fontSize: 20
        }
      })
    })
  });
}
function Mt({
  open: e,
  task: t,
  onClose: s,
  onAddComment: i,
  onSaveFields: n,
  presentation: l,
  myAccountSeq: r = 0,
  onToggleCompleted: c,
  onChangeTitle: d,
  onChangeIcon: b,
  onChangeIconColor: x,
  activityItems: h,
  activityLoading: w,
  onLoadActivity: y,
  onPrint: S,
  onDelete: E,
  canDelete: j,
  headerExtra: T,
  titleStart: I,
  menuExtra: v,
  ...a
}) {
  const [m] = vt("task"),
    C = m === "split" ? 1 : 2,
    {
      baseTask: _,
      task: f,
      stagedBodyProps: g,
      changeTitle: k,
      changeIcon: H,
      changeIconColor: $
    } = De({
      open: e,
      task: t,
      isMobile: !1,
      bodyProps: a,
      onSaveFields: n,
      onChangeTitle: d,
      onChangeIcon: b,
      onChangeIconColor: x
    }),
    M = u.useRef(null);
  u.useEffect(() => {
    M.current?.scrollTo({
      top: 0
    });
  }, [t?.seq]);
  const Y = () => {
      const P = M.current?.getScrollContainer();
      P && M.current?.scrollTo({
        top: P.scrollHeight,
        behavior: "smooth"
      });
    },
    W = u.useRef(!1),
    de = f?.comments?.length ?? 0;
  return u.useEffect(() => {
    W.current && (W.current = !1, requestAnimationFrame(Y));
  }, [de]), !_ || !f ? null : o.jsxs(p, {
    sx: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      minHeight: 0,
      userSelect: "none"
    },
    children: [o.jsx(Fe, {
      task: f,
      displayTitle: a.displayTitle,
      myAccountSeq: r,
      onToggleCompleted: c,
      hideCompleted: !!(a.hideProperties || a.postMode),
      onChangeTitle: d,
      onChangeIcon: b,
      onChangeIconColor: x,
      onClose: s,
      activityItems: h,
      activityLoading: w,
      onLoadActivity: y,
      titleStart: I ?? (P => o.jsx(ae, {
        taskSeq: P.seq
      })),
      headerExtra: T ?? (P => o.jsx(ie, {
        taskSeq: P.seq,
        onOpened: s
      })),
      menuExtra: v,
      onPrint: S,
      onDelete: E,
      canDelete: j
    }), o.jsx(D, {
      sx: {
        borderColor: Ne
      }
    }), o.jsx(p, {
      sx: {
        flex: 1,
        minHeight: 0
      },
      children: o.jsx(Le, {
        ref: M,
        style: {
          height: "100%"
        },
        contentStyle: {
          minWidth: 0
        },
        thumb: {
          width: 6
        },
        children: o.jsx(ze, {
          ...g,
          headerless: !1,
          task: f,
          myAccountSeq: r,
          onChangeTitle: k,
          onToggleCompleted: c,
          onChangeIcon: H,
          onChangeIconColor: $,
          showTitle: !1
        })
      })
    }), o.jsx(D, {
      sx: {
        borderColor: "#37352f"
      }
    }), o.jsx(p, {
      sx: {
        flexShrink: 0
      },
      children: o.jsx(Ve, {
        rows: C,
        onSubmit: (P, fe) => {
          W.current = !0, i(f.seq, P, fe), requestAnimationFrame(Y);
        }
      }, f.seq)
    })]
  });
}
function le(e, t, s = !1) {
  return !(!e.seq || t <= 0 || Number(e.author_account_seq ?? 0) !== t && !s || e.is_post || e.is_notice || e.is_event || e.is_bug || e.is_poll || Number(e.repeat_group_key ?? 0) > 0 || Number(e.round_group_key ?? 0) > 0 || e.repeat_rule);
}
function ce(e) {
  const {
      groups: t,
      currentOrgSeq: s,
      myOrgSeq: i
    } = ee(),
    {
      items: n
    } = J(),
    l = Number(e.workspace_seq ?? 0) || 0,
    r = l > 0 ? n.find(d => d.seq === l)?.team_seq ?? 0 : s || i,
    c = String(t.find(d => d.seq === r)?.role ?? "").toLowerCase();
  return c === "owner" || c === "admin";
}
function ue(e, t) {
  const s = q(),
    [i, n] = u.useState(!1);
  return {
    busy: i,
    run: () => {
      n(!0), jt(e.seq).then(() => {
        Ue(s("taskbox.convertedToPost")), t?.(), Ge();
      }).catch(r => G(r instanceof Error ? r.message : s("taskbox.convertToPostFailed"))).finally(() => n(!1));
    }
  };
}
function Rt({
  task: e,
  myAccountSeq: t,
  onConverted: s,
  anchorEl: i,
  closeMenu: n
}) {
  const l = q(),
    [r, c] = u.useState(null),
    d = ce(e),
    {
      busy: b,
      run: x
    } = ue(e, s);
  return le(e, t, d) ? o.jsxs(o.Fragment, {
    children: [o.jsxs(He, {
      disabled: b,
      onClick: () => {
        n(), c(i);
      },
      children: [o.jsx($e, {
        children: o.jsx(se, {
          sx: {
            fontSize: 20
          }
        })
      }), o.jsx(We, {
        children: l("taskbox.convertToPost")
      })]
    }), o.jsx(ne, {
      open: !!r,
      anchorEl: r,
      title: l("taskbox.convertToPostConfirm"),
      content: l("taskbox.convertToPostHint"),
      confirmText: l("taskbox.convertToPost"),
      onCancel: () => c(null),
      onConfirm: () => {
        c(null), x();
      }
    })]
  }) : null;
}
function Dt({
  task: e,
  myAccountSeq: t,
  onConverted: s
}) {
  const i = q(),
    [n, l] = u.useState(null),
    r = ce(e),
    {
      busy: c,
      run: d
    } = ue(e, s);
  return le(e, t, r) ? o.jsxs(o.Fragment, {
    children: [o.jsx(K, {
      title: i("taskbox.convertToPost"),
      arrow: !0,
      disableInteractive: !0,
      children: o.jsx(oe, {
        "aria-label": i("taskbox.convertToPost"),
        disabled: c,
        onClick: b => l(b.currentTarget),
        sx: {
          color: "#6b7280",
          "&:hover": {
            color: "#37352f"
          }
        },
        children: o.jsx(se, {
          sx: {
            fontSize: 20
          }
        })
      })
    }), o.jsx(ne, {
      open: !!n,
      anchorEl: n,
      title: i("taskbox.convertToPostConfirm"),
      content: i("taskbox.convertToPostHint"),
      confirmText: i("taskbox.convertToPost"),
      onCancel: () => l(null),
      onConfirm: () => {
        l(null), d();
      }
    })]
  }) : null;
}
function Ft({
  task: e,
  myAccountSeq: t,
  external: s,
  onSaved: i
}) {
  const n = q();
  if (!e.is_post || e.deleted || s) return null;
  const l = !!e.has_password,
    r = t > 0 && Number(e.author_account_seq ?? 0) === t;
  return !r && !l ? null : o.jsx(U, {
    icon: l ? o.jsx(mt, {
      sx: {
        fontSize: 17
      }
    }) : o.jsx(Ye, {
      sx: {
        fontSize: 17
      }
    }),
    label: n("taskbox.postPassword"),
    onClick: r ? c => xt({
      seq: e.seq,
      title: String(e.title ?? ""),
      hasPassword: l,
      anchor: c,
      keepOpen: !0,
      onSaved: i
    }) : void 0,
    children: l ? n("taskbox.postPasswordOn") : o.jsx(p, {
      component: "span",
      sx: {
        color: Ke.placeholderColor
      },
      children: n("taskbox.postPasswordNone")
    })
  });
}
function Nt(e, t) {
  return {
    previewUrl: t,
    name: e.name,
    table_name: "taskbox_task",
    uuid: e.uuid,
    seq: 0,
    user_seq: 0,
    user_name: "",
    size: e.size ?? 0,
    created_time: ""
  };
}
function ho({
  pickerEmployees: e = [],
  onAddProject: t,
  onAddComment: s,
  presentation: i = "auto",
  ...n
}) {
  const l = q(),
    r = te(),
    c = i === "dock" ? Mt : Xe,
    d = String(n.task?.author_name || n.task?.created_by || "").trim(),
    b = n.task?.is_post && n.task?.is_talk ? l("taskbox.talkTitleOf", {
      name: d || l("taskbox.thisPerson")
    }) : void 0,
    x = xe(),
    h = Number(n.task?.consult_seq ?? 0) || 0,
    w = Qe(),
    {
      state: y
    } = wt(),
    S = St(Number(n.task?.workspace_seq ?? 0) || 0),
    E = kt(),
    j = At(Number(n.task?.workspace_seq ?? 0) || 0),
    {
      onSaveFields: T
    } = n,
    {
      current: I
    } = Ze(),
    v = y.useValue("data.groups");
  return o.jsx(c, {
    ...n,
    presentation: i === "dock" ? void 0 : i,
    displayTitle: b,
    titleStart: a => o.jsx(ae, {
      taskSeq: a.seq
    }),
    headerExtra: a => o.jsxs(o.Fragment, {
      children: [o.jsx(ie, {
        taskSeq: a.seq,
        onOpened: n.onClose
      }), r ? o.jsx(Dt, {
        task: a,
        myAccountSeq: Number(n.myAccountSeq ?? 0),
        onConverted: n.onClose
      }) : null]
    }),
    menuExtra: (a, m) => o.jsx(Rt, {
      task: a,
      myAccountSeq: Number(n.myAccountSeq ?? 0),
      onConverted: n.onClose,
      anchorEl: m.anchorEl,
      closeMenu: m.closeMenu
    }),
    propertyExtra: n.task && n.onPostPasswordSaved ? o.jsx(Ft, {
      task: n.task,
      myAccountSeq: Number(n.myAccountSeq ?? 0),
      external: !!I,
      onSaved: n.onPostPasswordSaved
    }) : null,
    contentTitleExtra: o.jsxs(o.Fragment, {
      children: [n.task && n.myAccountSeq && Je(n.task, n.myAccountSeq) ? o.jsx(ht, {
        onText: a => {
          const m = n.task;
          m && n.onChangeContent(m.seq, gt(String(m.content ?? ""), a));
        }
      }) : null, h > 0 ? o.jsx(et, {
        size: "small",
        startIcon: o.jsx(tt, {
          sx: {
            fontSize: 18
          }
        }),
        onClick: () => {
          n.onClose?.(), x(`${bt}?${pt}=${h}`);
        },
        sx: {
          fontSize: "0.875rem",
          flexShrink: 0,
          whiteSpace: "nowrap"
        },
        children: l("taskbox.openConsultRecord")
      }) : null]
    }),
    contentLoading: !!n.task && typeof n.task?.content != "string",
    departments: (v ?? []).map(a => ({
      seq: a.seq,
      name: a.name
    })),
    hideProject: !S.show_project,
    hideLabel: !S.show_label,
    hideSprint: !S.show_sprint,
    contributionEnabled: j && !!T,
    onChangeContributions: (a, m) => T?.(a, {
      contributions: m
    }),
    employees: e,
    onAddProject: t ? (a, m) => t(a, m) : void 0,
    onAddComment: s,
    onPreview: a => {
      if (a.uuid && yt(a.name)) {
        E.open(Nt(a, w(a.uuid ?? "")));
        return;
      }
      window.open(w(a.uuid ?? ""), "_blank", "noopener,noreferrer");
    }
  });
}
function go({
  open: e,
  onClose: t,
  children: s
}) {
  const {
    requestClose: i
  } = ot({
    open: e,
    onClose: e ? t : () => {}
  });
  return o.jsx(o.Fragment, {
    children: s(i)
  });
}
export { fo as P, go as S, lo as T, bo as a, po as b, mo as c, ho as d, ao as e, io as f, co as i, xo as p, uo as u };