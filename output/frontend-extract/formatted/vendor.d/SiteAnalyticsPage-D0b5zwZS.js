import { r as p, j as e, N as D } from "./react-CjxcGQav.js";
import { R as B } from "./Refresh-xoMt5L00.js";
import { bM as E, bT as N, bv as P, D as O, u as F, n7 as G, B as r, bH as W, bI as L, K as H, L as m, cJ as _, b as z, s as K, jo as V, jp as q, jq as M, jr as I, js as U } from "../js.d/main-Cm9wS5wt.js";
import { O as J } from "./OptionToggleGroup-Cvm2wRyq.js";
import { u as X, S as R, b as c } from "./AttendanceParts-mHb1cK0h.js";
import "./stylis-DdLD6a3t.js";
import "./attendanceMgmt-B_e3bPBn.js";
import "./i18nLabels-BNTLL7cu.js";
const Y = {
    summary: async s => {
      const i = await E.http.get(`/v1/site-analytics?days=${s}`);
      if (!i?.ok || !i.data) throw new Error(i?.error || i?.message || N("siteAnalytics.loadFailed"));
      return i.data;
    }
  },
  Q = [7, 28, 90],
  d = s => Math.round(s).toLocaleString("ko-KR"),
  v = s => `${Math.round(s).toLocaleString("ko-KR")}원`,
  Z = s => `${(s * 100).toFixed(1)}%`;
function ss(s, i) {
  const x = Math.floor(s / 60),
    a = Math.round(s % 60);
  return x ? i("siteAnalytics.minSec", {
    m: x,
    s: a
  }) : i("siteAnalytics.sec", {
    s: a
  });
}
function g({
  title: s,
  action: i,
  children: x,
  grow: a
}) {
  return e.jsxs(_, {
    sx: {
      p: 2,
      minWidth: 0,
      ...(a ? {
        flex: 1
      } : {})
    },
    children: [e.jsxs(r, {
      sx: {
        display: "flex",
        alignItems: "center",
        gap: 1,
        mb: 1.5
      },
      children: [e.jsx(m, {
        sx: {
          fontSize: 16,
          fontWeight: 700,
          flex: 1
        },
        children: s
      }), i]
    }), x]
  });
}
function f({
  head: s,
  rows: i,
  empty: x
}) {
  return i.length ? e.jsx(r, {
    sx: {
      overflowX: "auto"
    },
    children: e.jsxs(V, {
      size: "small",
      sx: {
        "& td, & th": {
          fontSize: 14,
          px: 1,
          whiteSpace: "nowrap"
        },
        "& th": {
          color: "text.secondary",
          fontWeight: 500
        }
      },
      children: [e.jsx(q, {
        children: e.jsx(M, {
          children: s.map((a, l) => e.jsx(I, {
            align: l === 0 ? "left" : "right",
            children: a
          }, a))
        })
      }), e.jsx(U, {
        children: i.map((a, l) => e.jsx(M, {
          children: a.map((o, y) => e.jsx(I, {
            align: y === 0 ? "left" : "right",
            sx: y === 0 ? {
              maxWidth: 360,
              overflow: "hidden",
              textOverflow: "ellipsis"
            } : void 0,
            children: typeof o == "number" ? d(o) : o
          }, y))
        }, l))
      })]
    })
  }) : e.jsx(m, {
    sx: {
      fontSize: 14,
      color: "text.secondary",
      py: 2,
      textAlign: "center"
    },
    children: x
  });
}
function es({
  daily: s,
  t: i
}) {
  if (!s.length) return e.jsx(m, {
    sx: {
      fontSize: 14,
      color: "text.secondary",
      py: 2,
      textAlign: "center"
    },
    children: i("siteAnalytics.empty")
  });
  const x = Math.max(1, ...s.map(l => l.users)),
    a = l => `${Number(l.slice(4, 6))}/${Number(l.slice(6, 8))}`;
  return e.jsxs(r, {
    children: [e.jsx(r, {
      sx: {
        display: "flex",
        alignItems: "flex-end",
        gap: "2px",
        height: 140
      },
      children: s.map(l => e.jsx(W, {
        title: i("siteAnalytics.dayTip", {
          day: a(l.date),
          users: d(l.users),
          views: d(l.page_views)
        }),
        disableInteractive: !0,
        children: e.jsx(r, {
          sx: {
            flex: 1,
            minWidth: 2,
            height: `${Math.max(2, l.users / x * 100)}%`,
            bgcolor: z[500],
            borderRadius: "2px 2px 0 0",
            "&:hover": {
              bgcolor: z[700]
            }
          }
        })
      }, l.date))
    }), e.jsxs(r, {
      sx: {
        display: "flex",
        justifyContent: "space-between",
        mt: .75,
        fontSize: 12,
        color: K[500]
      },
      children: [e.jsx("span", {
        children: a(s[0].date)
      }), e.jsx("span", {
        children: a(s[s.length - 1].date)
      })]
    })]
  });
}
function xs() {
  const s = P(),
    i = O(),
    x = F().useValue("account"),
    [a, l] = p.useState(28),
    [o, y] = p.useState(null),
    [w, S] = p.useState(!0),
    [T, k] = p.useState(""),
    $ = X(!i),
    j = p.useRef(0),
    A = p.useCallback(async t => {
      const b = ++j.current;
      S(!0), k("");
      try {
        const h = await Y.summary(t);
        b === j.current && y(h);
      } catch (h) {
        b === j.current && k(h instanceof Error ? h.message : String(h));
      } finally {
        b === j.current && S(!1);
      }
    }, []);
  if (p.useEffect(() => {
    A(a);
  }, [a, A]), x && !G(x)) return e.jsx(D, {
    to: "/dashboard",
    replace: !0
  });
  const u = o?.total,
    n = o?.ads,
    C = i ? "repeat(2, minmax(0, 1fr))" : "repeat(6, minmax(0, 1fr))";
  return e.jsxs(r, {
    sx: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      minWidth: 0
    },
    children: [e.jsxs(r, {
      sx: {
        display: "flex",
        alignItems: "center",
        gap: 2,
        flexWrap: "wrap"
      },
      children: [e.jsx(r, {
        sx: {
          "& .MuiToggleButtonGroup-root": {
            height: 40,
            flexWrap: "nowrap"
          }
        },
        children: e.jsx(J, {
          size: "medium",
          value: a,
          onChange: t => t && l(Number(t)),
          options: Q.map(t => ({
            value: t,
            label: s("siteAnalytics.days", {
              days: t
            })
          })),
          sx: {
            "& .MuiToggleButtonGroup-grouped": {
              minWidth: 56,
              px: 1.5,
              fontSize: 13
            }
          }
        })
      }), e.jsx(W, {
        title: s("siteAnalytics.refresh"),
        children: e.jsx("span", {
          children: e.jsx(L, {
            onClick: () => {
              A(a);
            },
            disabled: w,
            "aria-label": s("siteAnalytics.refresh"),
            children: w ? e.jsx(H, {
              size: 20
            }) : e.jsx(B, {})
          })
        })
      }), e.jsx(m, {
        sx: {
          fontSize: 14,
          color: "text.secondary",
          flex: "1 1 280px"
        },
        children: s("siteAnalytics.note")
      })]
    }), T ? e.jsx(_, {
      sx: {
        p: 2
      },
      children: e.jsx(m, {
        sx: {
          fontSize: 14,
          color: "error.main"
        },
        children: T
      })
    }) : null, e.jsxs(g, {
      title: s("siteAnalytics.visits"),
      children: [e.jsxs(r, {
        sx: {
          display: "grid",
          gridTemplateColumns: C,
          gap: R
        },
        children: [e.jsx(c, {
          tone: "work",
          label: s("siteAnalytics.realtime"),
          value: o ? d(o.realtime_users) : "-"
        }), e.jsx(c, {
          label: s("siteAnalytics.users"),
          value: u ? d(u.users) : "-"
        }), e.jsx(c, {
          label: s("siteAnalytics.newUsers"),
          value: u ? d(u.new_users) : "-"
        }), e.jsx(c, {
          label: s("siteAnalytics.sessions"),
          value: u ? d(u.sessions) : "-"
        }), e.jsx(c, {
          label: s("siteAnalytics.pageViews"),
          value: u ? d(u.page_views) : "-"
        }), e.jsx(c, {
          label: s("siteAnalytics.avgTime"),
          value: u ? ss(u.avg_engagement_sec, s) : "-"
        })]
      }), e.jsx(r, {
        sx: {
          mt: 2
        },
        children: o ? e.jsx(es, {
          daily: o.daily,
          t: s
        }) : null
      })]
    }), e.jsx(g, {
      title: s("siteAnalytics.ads"),
      children: n === null ? e.jsx(m, {
        sx: {
          fontSize: 14,
          color: "text.secondary"
        },
        children: s("siteAnalytics.adsUnavailable")
      }) : e.jsxs(e.Fragment, {
        children: [e.jsxs(r, {
          sx: {
            display: "grid",
            gridTemplateColumns: C,
            gap: R
          },
          children: [e.jsx(c, {
            tone: "extra",
            label: s("siteAnalytics.adCost"),
            value: n ? v(n.total.cost) : "-"
          }), e.jsx(c, {
            label: s("siteAnalytics.impressions"),
            value: n ? d(n.total.impressions) : "-"
          }), e.jsx(c, {
            label: s("siteAnalytics.clicks"),
            value: n ? d(n.total.clicks) : "-"
          }), e.jsx(c, {
            label: s("siteAnalytics.ctr"),
            value: n && n.total.impressions ? Z(n.total.clicks / n.total.impressions) : "-"
          }), e.jsx(c, {
            label: s("siteAnalytics.cpc"),
            value: n && n.total.clicks ? v(n.total.cost / n.total.clicks) : "-"
          }), e.jsx(c, {
            tone: "leave",
            label: s("siteAnalytics.conversions"),
            value: n ? d(n.total.conversions) : "-"
          })]
        }), e.jsx(r, {
          sx: {
            mt: 2
          },
          children: e.jsx(f, {
            head: [s("siteAnalytics.colCampaign"), s("siteAnalytics.impressions"), s("siteAnalytics.clicks"), s("siteAnalytics.adCost"), s("siteAnalytics.adSessions"), s("siteAnalytics.conversions")],
            rows: (n?.campaigns ?? []).map(t => [t.campaign, t.impressions, t.clicks, v(t.cost), t.sessions, t.conversions]),
            empty: s("siteAnalytics.adsEmpty")
          })
        })]
      })
    }), e.jsxs(r, {
      ref: $,
      sx: {
        display: "grid",
        gridTemplateColumns: i ? "minmax(0, 1fr)" : "minmax(0, 3fr) minmax(0, 2fr)",
        gap: 2,
        alignItems: "stretch"
      },
      children: [e.jsx(g, {
        title: s("siteAnalytics.pages"),
        children: e.jsx(f, {
          head: [s("siteAnalytics.colPage"), s("siteAnalytics.pageViews"), s("siteAnalytics.users")],
          rows: (o?.pages ?? []).map(t => [t.title ? `${t.title} (${t.path})` : t.path, t.page_views, t.users]),
          empty: s("siteAnalytics.empty")
        })
      }), e.jsxs(r, {
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: 2,
          minWidth: 0
        },
        children: [e.jsx(g, {
          title: s("siteAnalytics.sources"),
          grow: !0,
          children: e.jsx(f, {
            head: [s("siteAnalytics.colSource"), s("siteAnalytics.sessions"), s("siteAnalytics.users")],
            rows: (o?.sources ?? []).map(t => [t.source, t.sessions, t.users]),
            empty: s("siteAnalytics.empty")
          })
        }), e.jsx(g, {
          title: s("siteAnalytics.devices"),
          children: e.jsx(f, {
            head: [s("siteAnalytics.colDevice"), s("siteAnalytics.users"), s("siteAnalytics.sessions")],
            rows: (o?.devices ?? []).map(t => [["desktop", "mobile", "tablet"].includes(t.device) ? s(`siteAnalytics.device_${t.device}`) : t.device, t.users, t.sessions]),
            empty: s("siteAnalytics.empty")
          })
        })]
      })]
    })]
  });
}
export { xs as default };