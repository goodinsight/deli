import { r as l, j as t } from "./react-CjxcGQav.js";
import { bM as B, bO as E, bT as u, bv as w, D as W, B as n, L as y, bQ as S, d6 as G, d7 as C, K as O, cj as z, aR as P, oP as N, oS as q } from "../js.d/main-Cm9wS5wt.js";
import { A as H } from "./AccountAvatar-DtrhoS_d.js";
import { O as $ } from "./OptionToggleGroup-Cvm2wRyq.js";
import { S as U } from "./squircle-CQM8EvXm.js";
import { a as K } from "./MobileCardListLayout-D5_p2Xer.js";
import { z as Y } from "./bootstrapController-BMV_i07c.js";
import { u as X } from "./teamMembers-0yRsmqL6.js";
import { o as Q } from "./taskDetailHost-C45bt_tL.js";
import { b as V } from "./employeeAvatars-DaG0jIhW.js";
import { F as Z, a as J, b as ee, c as te, d as se, e as oe } from "./feedTokens-DSnLc6XG.js";
import "./stylis-DdLD6a3t.js";
import "./Person-DnoEHesw.js";
import "./mobileSearchOverlay-DYWcMOOb.js";
import "./profileEcho-q2FaD_03.js";
import "./pendingRecordings-DpKJ8Y2R.js";
import "./meetingsApi-CCkjq69B.js";
import "./orgTree-Dh5HFjBo.js";
import "./mxApi-R6g9QtQq.js";
import "./aliasStore-DiN6Kp-5.js";
import "./profileApi-Btafs-pM.js";
import "./resolveAssetPreviewSrc-CLlbOCzq.js";
async function v(e) {
  const i = await B.http.get(`/v1/taskbox/mentions?page=${e}`, !0);
  return {
    items: i?.data?.items ?? [],
    hasMore: !!i?.data?.has_more
  };
}
async function D(e) {
  await B.http.post("/v1/taskbox/mentions/read", e ? {
    task_seq: e
  } : {}, !0);
}
function ae(e) {
  const s = (a => new Date(a.getFullYear(), a.getMonth(), a.getDate()).getTime())(new Date()),
    p = a => {
      const d = /^(\d{4})-(\d{2})-(\d{2})/.exec(a);
      if (!d) return u("taskbox.earlier");
      const x = Math.round((s - new Date(Number(d[1]), Number(d[2]) - 1, Number(d[3])).getTime()) / 864e5);
      return x <= 0 ? u("taskbox.today") : x === 1 ? u("taskbox.yesterday") : x < 7 ? u("taskbox.thisWeek") : u("taskbox.earlier");
    },
    c = [];
  for (const a of e) {
    const d = p(a.created_time),
      x = c[c.length - 1];
    x && x.label === d ? x.items.push(a) : c.push({
      label: d,
      items: [a]
    });
  }
  return c;
}
function ne() {
  const [e, i] = l.useState([]),
    [s, p] = l.useState(1),
    [c, a] = l.useState(!1),
    [d, x] = l.useState(!1),
    [m, g] = l.useState(!1),
    [f, _] = l.useState("all"),
    r = l.useCallback(async () => {
      try {
        const o = await v(1);
        i(o.items), a(o.hasMore), p(1);
      } catch (o) {
        E(o instanceof Error ? o.message : u("taskbox.mentionsLoadFailed"));
      } finally {
        x(!0);
      }
    }, []);
  l.useEffect(() => {
    r();
  }, [r]);
  const b = l.useCallback(async () => {
      if (!(m || !c)) {
        g(!0);
        try {
          const o = await v(s + 1);
          i(h => [...h, ...o.items.filter(k => !h.some(F => F.seq === k.seq))]), a(o.hasMore), p(s + 1);
        } catch (o) {
          E(o instanceof Error ? o.message : u("taskbox.mentionsLoadFailed"));
        } finally {
          g(!1);
        }
      }
    }, [c, m, s]),
    I = l.useCallback(o => {
      i(h => h.map(k => k.task_seq === o.task_seq ? {
        ...k,
        is_read: !0
      } : k)), D(o.task_seq).catch(() => {}), Q(o.task_seq);
    }, []),
    A = l.useCallback(async () => {
      i(o => o.map(h => ({
        ...h,
        is_read: !0
      })));
      try {
        await D();
      } catch (o) {
        E(o instanceof Error ? o.message : u("taskbox.markReadFailed")), r();
      }
    }, [r]),
    L = e.filter(o => !o.is_read).length,
    M = l.useMemo(() => f === "unread" ? e.filter(o => !o.is_read) : e, [f, e]),
    R = l.useMemo(() => ae(M), [M]);
  return {
    items: e,
    visible: M,
    sections: R,
    loaded: d,
    hasMore: c,
    loadingMore: m,
    unreadCount: L,
    filter: f,
    setFilter: _,
    loadMore: b,
    open: I,
    readAll: A
  };
}
const j = {
    fontSize: "0.875rem",
    color: "text.secondary"
  },
  re = "#9b9a97",
  T = "#2563eb",
  ie = "#fafaf9",
  le = [{
    value: "all",
    labelKey: "taskbox.all"
  }, {
    value: "unread",
    labelKey: "taskbox.unread"
  }];
function ce({
  item: e,
  avatarSrc: i,
  names: s,
  mobile: p,
  onOpen: c
}) {
  const a = w();
  return t.jsxs(z, {
    onClick: c,
    sx: {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      gap: 1.25,
      width: "100%",
      p: 2,
      textAlign: "left",
      bgcolor: "background.paper",
      ...(p ? {} : {
        border: `1px solid ${oe}`,
        borderRadius: 2
      }),
      boxShadow: e.is_read ? "none" : `inset 3px 0 0 ${T}`,
      overflow: "hidden",
      "&:hover": {
        bgcolor: "#fcfcfb"
      }
    },
    children: [t.jsxs(n, {
      sx: {
        display: "flex",
        alignItems: "center",
        gap: .75,
        minWidth: 0,
        color: "text.secondary"
      },
      children: [t.jsx(P, {
        sx: {
          fontSize: 18,
          flexShrink: 0
        }
      }), t.jsxs(y, {
        sx: {
          ...j,
          minWidth: 0
        },
        noWrap: !0,
        children: [e.workspace_name ? `${e.workspace_name} › ` : "", t.jsx(n, {
          component: "span",
          sx: {
            color: "text.primary",
            fontWeight: 600
          },
          children: e.task_title || a("taskbox.untitledTask")
        })]
      })]
    }), t.jsxs(n, {
      sx: {
        display: "flex",
        alignItems: "center",
        gap: 1.25,
        minWidth: 0
      },
      children: [t.jsx(H, {
        src: i,
        avatarSx: {
          width: 36,
          height: 36,
          flexShrink: 0,
          ...U
        },
        iconFontSize: 22
      }), t.jsxs(y, {
        sx: {
          fontSize: 15,
          minWidth: 0
        },
        noWrap: !0,
        children: [t.jsx(n, {
          component: "span",
          sx: {
            fontWeight: 700
          },
          children: e.actor_name || a("taskbox.employee")
        }), t.jsx(n, {
          component: "span",
          sx: {
            color: "text.secondary"
          },
          children: a(e.source === "comment" ? "taskbox.mentionedInComment" : "taskbox.mentionedInPost")
        })]
      }), e.is_read ? null : t.jsx(n, {
        "aria-label": a("taskbox.unread"),
        sx: {
          width: 8,
          height: 8,
          borderRadius: "50%",
          bgcolor: T,
          flexShrink: 0
        }
      }), t.jsx(n, {
        sx: {
          flex: 1
        }
      }), t.jsx(y, {
        sx: {
          ...j,
          flexShrink: 0
        },
        children: N(e.created_time)
      })]
    }), e.snippet ? t.jsx(n, {
      sx: {
        ml: p ? 0 : "48px",
        px: 1.5,
        py: 1.25,
        borderRadius: 2,
        bgcolor: ie,
        fontSize: 15,
        lineHeight: 1.6,
        color: "text.primary",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        display: "-webkit-box",
        WebkitLineClamp: 4,
        WebkitBoxOrient: "vertical",
        overflow: "hidden"
      },
      children: q(e.snippet, s, `m${e.seq}`)
    }) : null]
  });
}
function Ie() {
  const e = w(),
    i = W(),
    s = ne(),
    {
      state: p
    } = Y(),
    c = p.useValue("data.employee"),
    a = l.useMemo(() => V(c), [c]),
    {
      members: d
    } = X(),
    x = l.useMemo(() => d.map(r => String(r.name ?? "").trim()).filter(Boolean), [d]),
    m = s.loaded && s.visible.length === 0 ? t.jsx(n, {
      sx: {
        py: 6,
        px: 2,
        textAlign: "center",
        color: re,
        fontSize: 14,
        wordBreak: "keep-all"
      },
      children: s.filter === "unread" ? e("taskbox.noUnreadMentions") : e("taskbox.noMentions")
    }) : null,
    g = t.jsxs(n, {
      sx: {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 1.5
      },
      children: [t.jsx(y, {
        component: "h1",
        sx: {
          fontSize: "1rem",
          fontWeight: 600
        },
        children: e("taskbox.mentionsTitle")
      }), t.jsx($, {
        options: le.map(r => ({
          value: r.value,
          label: r.value === "unread" && s.unreadCount > 0 ? e("taskbox.unreadCount", {
            count: s.unreadCount
          }) : e(r.labelKey)
        })),
        value: s.filter,
        onChange: r => r && s.setFilter(r),
        sx: {
          bgcolor: "background.paper",
          "& .MuiToggleButtonGroup-grouped": {
            px: 1.5,
            py: "3px",
            fontSize: 14,
            lineHeight: 1.75,
            minHeight: 34
          }
        }
      }), t.jsx(n, {
        sx: {
          flex: 1
        }
      }), s.unreadCount > 0 ? t.jsx(S, {
        size: "small",
        onClick: () => {
          s.readAll();
        },
        sx: {
          fontSize: 14
        },
        children: e("taskbox.markAllRead")
      }) : null]
    }),
    f = s.sections.map(r => t.jsxs(n, {
      sx: {
        display: "flex",
        flexDirection: "column",
        gap: i ? G : 1.5
      },
      children: [t.jsx(y, {
        sx: {
          ...j,
          fontWeight: 600,
          ...(i ? {
            px: `${C}px`
          } : {})
        },
        children: r.label
      }), r.items.map(b => t.jsx(ce, {
        item: b,
        avatarSrc: a.get(b.actor_name) ?? "",
        names: x,
        mobile: i,
        onOpen: () => s.open(b)
      }, b.seq))]
    }, r.label)),
    _ = s.hasMore ? t.jsx(n, {
      sx: {
        display: "flex",
        justifyContent: "center",
        py: 1
      },
      children: t.jsx(S, {
        onClick: () => {
          s.loadMore();
        },
        disabled: s.loadingMore,
        sx: {
          fontSize: 14
        },
        children: s.loadingMore ? e("taskbox.loading") : e("taskbox.loadMore")
      })
    }) : null;
  return i ? t.jsxs(n, {
    sx: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    },
    children: [g, s.loaded ? null : t.jsx(K, {}), m, t.jsx(n, {
      sx: {
        mx: `-${C}px`,
        display: "flex",
        flexDirection: "column",
        gap: 2
      },
      children: f
    }), _]
  }) : t.jsx(n, {
    sx: {
      minHeight: "calc(100dvh - 140px)",
      borderRadius: 2,
      py: 3,
      px: 2,
      bgcolor: te,
      backgroundImage: ee,
      backgroundSize: J,
      backgroundRepeat: Z,
      backgroundAttachment: "fixed, fixed"
    },
    children: t.jsxs(n, {
      sx: {
        display: "flex",
        flexDirection: "column",
        gap: 3,
        maxWidth: se,
        mx: "auto",
        width: "100%"
      },
      children: [g, s.loaded ? null : t.jsx(n, {
        sx: {
          display: "flex",
          justifyContent: "center",
          py: 6
        },
        children: t.jsx(O, {
          size: 28
        })
      }), m, f, _]
    })
  });
}
export { Ie as default };