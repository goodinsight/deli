import { j as e, u as T, r as c, L as W } from "./react-CjxcGQav.js";
import { bT as l, bv as h, bH as A, bI as S, L as d, B as m, c4 as w, cc as j, na as L, I as P, bQ as B, lr as N, bO as y, z as H } from "../js.d/main-Cm9wS5wt.js";
import { u as O, f as $ } from "./newsController-BGsu8k2g.js";
import { R as M } from "./Refresh-xoMt5L00.js";
import { N as _, a as D } from "./constants-Bzad1vkl.js";
import "./stylis-DdLD6a3t.js";
function G(t) {
  return {
    stateId: "favoritesFilter",
    showChips: !0,
    groups: [{
      filters: [{
        name: "categories",
        title: l("favorites.category"),
        type: "checkbox",
        options: _.map(r => ({
          label: r,
          value: r
        }))
      }, {
        name: "premium",
        title: l("favorites.access"),
        type: "checkbox",
        options: D.map(r => ({
          label: r.label,
          value: r.value
        }))
      }]
    }],
    onChange: r => {
      t({
        categories: (r.categories ?? []).map(o => String(o)),
        premium: (r.premium ?? []).map(o => String(o))
      });
    },
    onReset: () => t({
      categories: [],
      premium: []
    })
  };
}
function U({
  count: t,
  loading: r,
  onSearch: o,
  onFilterChange: a,
  onReload: i
}) {
  const n = h();
  return {
    show: !0,
    left: e.jsx(d, {
      sx: {
        fontSize: 15,
        fontWeight: 800,
        whiteSpace: "nowrap"
      },
      children: n("favorites.titleWithCount", {
        count: t
      })
    }),
    right: e.jsx(A, {
      title: n("favorites.refresh"),
      children: e.jsx("span", {
        children: e.jsx(S, {
          onClick: i,
          disabled: r,
          "aria-label": n("favorites.refresh"),
          children: e.jsx(M, {})
        })
      })
    }),
    showSearch: !0,
    searchPlaceholder: n("favorites.searchPlaceholder"),
    searchDebounce: 200,
    onSearch: o,
    filter: G(a)
  };
}
function Q({
  article: t,
  busy: r,
  onOpen: o,
  onRemove: a
}) {
  const i = h();
  return e.jsxs(m, {
    onClick: o,
    sx: {
      display: "flex",
      gap: 2,
      alignItems: "center",
      border: "1px solid",
      borderColor: "divider",
      borderRadius: 2,
      p: 2,
      cursor: "pointer",
      backgroundColor: "background.paper",
      transition: "background-color 0.15s",
      "&:hover": {
        backgroundColor: "action.hover"
      }
    },
    children: [e.jsx(m, {
      component: "img",
      src: t.imageUrl || `/news-images/${t.id}.jpg`,
      alt: "",
      sx: {
        width: 96,
        height: 64,
        objectFit: "cover",
        borderRadius: 1,
        flexShrink: 0
      }
    }), e.jsxs(m, {
      sx: {
        minWidth: 0,
        flex: 1
      },
      children: [e.jsxs(w, {
        direction: "row",
        spacing: 1,
        alignItems: "center",
        sx: {
          mb: .5
        },
        children: [e.jsx(j, {
          size: "small",
          label: t.category
        }), t.premium && e.jsx(j, {
          size: "small",
          variant: "outlined",
          label: i("favorites.premium")
        }), e.jsx(d, {
          sx: {
            fontSize: 12,
            color: "text.secondary"
          },
          children: t.date
        })]
      }), e.jsx(d, {
        sx: {
          fontSize: 15,
          fontWeight: 800,
          lineHeight: 1.35
        },
        children: t.title
      }), e.jsx(d, {
        sx: {
          mt: .5,
          fontSize: 13,
          color: "text.secondary",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical"
        },
        children: t.summary
      })]
    }), e.jsx(S, {
      "aria-label": i("favorites.remove"),
      color: "error",
      disabled: r,
      onClick: n => {
        n.stopPropagation(), a();
      },
      children: e.jsx(L, {})
    })]
  });
}
function Y(t, r, o) {
  const a = r.trim().toLowerCase();
  return t.filter(i => {
    if (o.categories.length > 0 && !o.categories.includes(i.category)) return !1;
    if (o.premium.length > 0) {
      const n = i.premium ? "premium" : "free";
      if (!o.premium.includes(n)) return !1;
    }
    return a ? `${i.title} ${i.author}`.toLowerCase().includes(a) : !0;
  });
}
function te() {
  const {
      state: t
    } = O(),
    r = T(),
    o = h(),
    [a, i] = c.useState([]),
    [n, p] = c.useState(!0),
    [C, g] = c.useState(""),
    [x, k] = c.useState(""),
    [v, F] = c.useState({
      categories: [],
      premium: []
    }),
    b = async () => {
      p(!0);
      try {
        i(await $.list());
      } catch (s) {
        y(s instanceof Error ? s.message : l("favorites.loadFailed"));
      } finally {
        p(!1);
      }
    };
  c.useEffect(() => {
    b();
  }, []);
  const E = async s => {
      if (await H({
        title: l("favorites.remove"),
        message: l("favorites.removeConfirm", {
          title: s.title
        }),
        confirmText: l("favorites.removeShort"),
        cancelText: l("common.cancel")
      })) {
        g(s.id);
        try {
          await t.actions.toggleFavorite(s.id), i(u => u.filter(z => z.id !== s.id));
        } catch (u) {
          y(u instanceof Error ? u.message : l("favorites.removeFailed"));
        } finally {
          g("");
        }
      }
    },
    f = c.useMemo(() => Y(a, x, v), [a, x, v]),
    R = U({
      count: f.length,
      loading: n,
      onSearch: k,
      onFilterChange: F,
      onReload: () => {
        b();
      }
    }),
    I = e.jsx(P, {
      style: {
        height: "100%",
        width: "100%"
      },
      children: !n && f.length === 0 ? e.jsxs(m, {
        sx: {
          py: 8,
          textAlign: "center",
          border: "1px dashed",
          borderColor: "divider",
          borderRadius: 2
        },
        children: [e.jsx(d, {
          sx: {
            fontSize: 14,
            color: "text.secondary"
          },
          children: a.length === 0 ? o("favorites.empty") : o("favorites.noMatch")
        }), a.length === 0 && e.jsx(B, {
          component: W,
          to: "/news",
          sx: {
            mt: 1.5
          },
          variant: "outlined",
          children: o("favorites.goNews")
        })]
      }) : e.jsx(w, {
        spacing: 1.5,
        children: f.map(s => e.jsx(Q, {
          article: s,
          busy: C === s.id,
          onOpen: () => r(`/news/${s.id}`),
          onRemove: () => {
            E(s);
          }
        }, s.id))
      })
    });
  return e.jsx(m, {
    sx: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      height: 0,
      minHeight: 520
    },
    children: e.jsx(N, {
      header: R,
      viewMode: "card",
      cardPanel: I,
      leftPaper: !1
    })
  });
}
export { te as default };