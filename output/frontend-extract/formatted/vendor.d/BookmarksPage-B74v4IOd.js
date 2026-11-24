import { r as a, j as e } from "./react-CjxcGQav.js";
import { bv as v, D, bO as O, fy as R, B as o, d7 as S, L as n, K as z, bQ as L, cj as H, aR as W, oP as q } from "../js.d/main-Cm9wS5wt.js";
import { A as P } from "./AccountAvatar-DtrhoS_d.js";
import { S as F } from "./squircle-CQM8EvXm.js";
import { z as G } from "./bootstrapController-BMV_i07c.js";
import { l as N, u as U, T as X } from "./TaskBookmarkButton-0oVnbzsT.js";
import { o as Q } from "./taskDetailHost-C45bt_tL.js";
import { b as $ } from "./employeeAvatars-DaG0jIhW.js";
import { f as K, e as V } from "./feedTokens-DSnLc6XG.js";
import { T as J } from "./toolbarMetrics-BebpK4UO.js";
import "./stylis-DdLD6a3t.js";
import "./Person-DnoEHesw.js";
import "./profileEcho-q2FaD_03.js";
import "./teamMembers-0yRsmqL6.js";
import "./pendingRecordings-DpKJ8Y2R.js";
import "./meetingsApi-CCkjq69B.js";
import "./orgTree-Dh5HFjBo.js";
import "./mxApi-R6g9QtQq.js";
import "./aliasStore-DiN6Kp-5.js";
import "./profileApi-Btafs-pM.js";
import "./Bookmark-D9hRs62u.js";
import "./BookmarkBorder-D_zgRRjF.js";
import "./resolveAssetPreviewSrc-CLlbOCzq.js";
const Y = 720,
  Z = 300,
  ee = {
    width: 240,
    "& .MuiInputBase-root": {
      height: J,
      bgcolor: "#ffffff"
    },
    "& .MuiInputBase-input": {
      fontSize: 13
    }
  },
  te = {
    "& .MuiInputBase-root": {
      bgcolor: "#ffffff"
    },
    "& .MuiOutlinedInput-input": {
      paddingTop: "13px",
      paddingBottom: "13px"
    }
  };
function se({
  item: t,
  avatarSrc: r,
  mobile: l
}) {
  return U(t.task_seq) ? e.jsxs(o, {
    sx: {
      position: "relative",
      bgcolor: "#ffffff",
      ...(l ? {} : {
        border: `1px solid ${V}`,
        borderRadius: 2,
        boxShadow: K
      })
    },
    children: [e.jsxs(H, {
      onClick: () => Q(t.task_seq),
      sx: {
        width: "100%",
        display: "block",
        textAlign: "left",
        px: 2,
        py: 1.75,
        pr: 6
      },
      children: [t.workspace_name ? e.jsxs(o, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: .5,
          fontSize: 13,
          color: "text.secondary",
          mb: .75,
          minWidth: 0
        },
        children: [e.jsx(W, {
          sx: {
            fontSize: 15,
            flexShrink: 0
          }
        }), e.jsx(o, {
          component: "span",
          sx: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          },
          children: t.workspace_name
        })]
      }) : null, e.jsxs(o, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 1
        },
        children: [e.jsx(P, {
          src: r,
          name: t.author_name,
          avatarSx: {
            width: 32,
            height: 32,
            ...F
          },
          iconFontSize: 20
        }), e.jsxs(o, {
          sx: {
            minWidth: 0
          },
          children: [e.jsx(n, {
            sx: {
              fontSize: 14,
              fontWeight: 600,
              lineHeight: 1.3
            },
            children: t.author_name || "-"
          }), e.jsx(n, {
            sx: {
              fontSize: 13,
              color: "text.secondary",
              lineHeight: 1.3
            },
            children: q(t.task_time)
          })]
        })]
      }), e.jsx(n, {
        sx: {
          fontSize: 16,
          fontWeight: 700,
          mb: t.snippet ? .5 : 0,
          wordBreak: "break-word"
        },
        children: t.task_title
      }), t.snippet ? e.jsx(n, {
        sx: {
          fontSize: 15,
          color: "#37352f",
          lineHeight: 1.6,
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          wordBreak: "break-word"
        },
        children: t.snippet
      }) : null]
    }), e.jsx(o, {
      sx: {
        position: "absolute",
        top: 6,
        right: 6
      },
      children: e.jsx(X, {
        taskSeq: t.task_seq
      })
    })]
  }) : null;
}
function Ce() {
  const t = v(),
    r = D(),
    {
      state: l
    } = G(),
    d = l.useValue("data.employee"),
    j = a.useMemo(() => $(d), [d]),
    [f, y] = a.useState([]),
    [_, B] = a.useState(1),
    [w, C] = a.useState(!1),
    [E, I] = a.useState(!1),
    [m, u] = a.useState(!1),
    [c, h] = a.useState(""),
    [p, k] = a.useState("");
  a.useEffect(() => {
    const s = window.setTimeout(() => k(c.trim()), Z);
    return () => window.clearTimeout(s);
  }, [c]);
  const x = a.useCallback(async s => {
    try {
      const i = await N(s, p);
      y(g => s === 1 ? i.items : [...g, ...i.items.filter(T => !g.some(A => A.seq === T.seq))]), C(i.hasMore), B(s);
    } catch (i) {
      O(i instanceof Error ? i.message : t("taskbox.bookmarksLoadFailed"));
    } finally {
      I(!0), u(!1);
    }
  }, [t, p]);
  a.useEffect(() => {
    x(1);
  }, [x]);
  const M = e.jsx(R, {
      size: r ? "medium" : "small",
      fullWidth: r,
      placeholder: t("taskbox.searchPlaceholder"),
      value: c,
      onChange: s => h(s.target.value),
      onSearch: s => k(s.trim()),
      onClear: () => h(""),
      sx: r ? te : ee
    }),
    b = e.jsxs(e.Fragment, {
      children: [e.jsxs(o, {
        sx: {
          display: "flex",
          alignItems: r ? "stretch" : "center",
          flexDirection: r ? "column" : "row",
          justifyContent: "space-between",
          gap: 1.5,
          ...(r ? {
            px: `${S}px`
          } : {})
        },
        children: [e.jsx(n, {
          component: "h1",
          sx: {
            fontSize: "1rem",
            fontWeight: 600
          },
          children: t("taskbox.bookmarksTitle")
        }), M]
      }), E ? f.length === 0 ? e.jsx(o, {
        sx: {
          py: 6,
          px: 2,
          textAlign: "center",
          color: "#9b9a97",
          fontSize: 14,
          wordBreak: "keep-all"
        },
        children: t(p ? "taskbox.noSearchResults" : "taskbox.noBookmarks")
      }) : f.map(s => e.jsx(se, {
        item: s,
        avatarSrc: j.get(s.author_name) ?? "",
        mobile: r
      }, s.seq)) : e.jsx(o, {
        sx: {
          display: "flex",
          justifyContent: "center",
          py: 6
        },
        children: e.jsx(z, {
          size: 28
        })
      }), w ? e.jsx(o, {
        sx: {
          display: "flex",
          justifyContent: "center",
          py: 1
        },
        children: e.jsx(L, {
          onClick: () => {
            u(!0), x(_ + 1);
          },
          disabled: m,
          sx: {
            fontSize: 14
          },
          children: t(m ? "taskbox.loading" : "taskbox.loadMore")
        })
      }) : null]
    });
  return r ? e.jsx(o, {
    sx: {
      mx: `-${S}px`,
      display: "flex",
      flexDirection: "column",
      gap: 1.5
    },
    children: b
  }) : e.jsx(o, {
    sx: {
      py: 3,
      px: 2
    },
    children: e.jsx(o, {
      sx: {
        display: "flex",
        flexDirection: "column",
        gap: 3,
        maxWidth: Y,
        mx: "auto",
        width: "100%"
      },
      children: b
    })
  });
}
export { Ce as default };