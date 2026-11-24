import { r as f, j as e, u as h, k as u } from "./react-CjxcGQav.js";
import { bv as x, B as r, K as g, cj as p, ci as y, L as n } from "../js.d/main-Cm9wS5wt.js";
import { P as S } from "./publicPageSx-9Lwcd6Z3.js";
import { s as N } from "./siteNoticeApi-BBEKF3sl.js";
import { S as z } from "./SiteNoticeBody-B0nqE-w_.js";
import "./stylis-DdLD6a3t.js";
import "./resolveAssetPreviewSrc-CLlbOCzq.js";
import "./html-d5LenlcH.js";
const m = s => (s.start_at || s.created_time).slice(0, 10);
function j({
  place: s,
  seq: c,
  onOpen: o
}) {
  const i = x(),
    [l, d] = f.useState(null);
  if (f.useEffect(() => {
    let t = !1;
    return N.listPublic(s).then(b => !t && d(b)).catch(() => !t && d([])), () => {
      t = !0;
    };
  }, [s]), !l) return e.jsx(r, {
    sx: {
      display: "flex",
      justifyContent: "center",
      py: 6
    },
    children: e.jsx(g, {
      size: 24
    })
  });
  const a = c ? l.find(t => t.seq === c) : void 0;
  return a ? e.jsxs(r, {
    children: [e.jsxs(p, {
      onClick: () => o(0),
      sx: {
        display: "inline-flex",
        alignItems: "center",
        gap: .5,
        color: "text.secondary",
        fontSize: 15,
        mb: 2
      },
      children: [e.jsx(y, {
        sx: {
          fontSize: 20
        }
      }), i("siteNotice.backToList")]
    }), e.jsx(n, {
      component: "h1",
      sx: {
        fontSize: 22,
        fontWeight: 700
      },
      children: a.title
    }), e.jsx(n, {
      sx: {
        fontSize: 14,
        color: "text.secondary",
        mt: .5,
        mb: 3
      },
      children: m(a)
    }), e.jsx(z, {
      notice: a
    })]
  }) : l.length === 0 ? e.jsx(n, {
    sx: {
      py: 6,
      textAlign: "center",
      color: "text.secondary",
      fontSize: 15
    },
    children: i("siteNotice.empty")
  }) : e.jsx(r, {
    component: "ul",
    sx: {
      listStyle: "none",
      m: 0,
      p: 0,
      borderTop: "1px solid #e2e8f0"
    },
    children: l.map(t => e.jsx(r, {
      component: "li",
      sx: {
        borderBottom: "1px solid #e2e8f0"
      },
      children: e.jsxs(p, {
        onClick: () => o(t.seq),
        sx: {
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
          px: 1,
          py: 2,
          textAlign: "left",
          "&:hover": {
            bgcolor: "#f8fafc"
          }
        },
        children: [e.jsx(n, {
          sx: {
            fontSize: 16,
            fontWeight: 500,
            minWidth: 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          },
          children: t.title
        }), e.jsx(n, {
          sx: {
            fontSize: 14,
            color: "text.secondary",
            flexShrink: 0
          },
          children: m(t)
        })]
      })
    }, t.seq))
  });
}
function A() {
  const s = x(),
    c = h(),
    o = Number(u().seq ?? 0) || 0;
  return e.jsxs(r, {
    sx: {
      ...S,
      py: {
        xs: 4,
        md: 8
      },
      maxWidth: 880
    },
    children: [o ? null : e.jsx(n, {
      component: "h1",
      sx: {
        fontSize: {
          xs: 26,
          md: 32
        },
        fontWeight: 800,
        mb: 3
      },
      children: s("siteNotice.title")
    }), e.jsx(j, {
      place: "homepage",
      seq: o,
      onOpen: i => c(i ? `/notices/${i}` : "/notices")
    })]
  });
}
function E() {
  const s = x(),
    c = h(),
    o = Number(u().seq ?? 0) || 0;
  return e.jsx(r, {
    sx: {
      p: {
        xs: 2,
        md: 3
      },
      maxWidth: 880,
      width: "100%",
      mx: "auto"
    },
    children: e.jsxs(r, {
      sx: {
        bgcolor: "#ffffff",
        borderRadius: 2,
        p: {
          xs: 2,
          md: 3
        },
        border: "1px solid #e2e8f0"
      },
      children: [o ? null : e.jsx(n, {
        component: "h1",
        sx: {
          fontSize: 20,
          fontWeight: 700,
          mb: 2
        },
        children: s("siteNotice.title")
      }), e.jsx(j, {
        place: "dashboard",
        seq: o,
        onOpen: i => c(i ? `/dashboard/notices/${i}` : "/dashboard/notices")
      })]
    })
  });
}
export { E as DashboardNoticesPage, A as HomeNoticesPage };