import { r as l, j as s, N as Q } from "./react-CjxcGQav.js";
import { R as tt } from "./Refresh-xoMt5L00.js";
import { bM as K, bT as O, bv as z, e as et, bO as A, ce as ot, cf as st, D as nt, d3 as V, B as f, L as k, nv as M, df as at, cI as rt, cz as it, aq as lt, bH as ct, bI as ut, nw as dt, lr as pt } from "../js.d/main-Cm9wS5wt.js";
import { O as G } from "./OptionToggleGroup-Cvm2wRyq.js";
import { u as mt } from "./useClientSort-CdwrAOWp.js";
import { u as bt } from "./useColumnWidths-DSAca5rC.js";
import { T as Y } from "./tableScrollbars-C9bhlJjO.js";
import { c as ht } from "./AttendanceParts-mHb1cK0h.js";
import { u as ft } from "./useFileViewer-B-2ewnr3.js";
import { o as kt } from "./taskDetailHost-C45bt_tL.js";
import { r as xt } from "./rowNoColumn-B_tyJFB_.js";
import "./stylis-DdLD6a3t.js";
import "./profileApi-Btafs-pM.js";
import "./attendanceMgmt-B_e3bPBn.js";
import "./i18nLabels-BNTLL7cu.js";
import "./documentViewerStore-BlSjH3BG.js";
const H = {
    report: async o => {
      const t = new URLSearchParams({
        basis: o.basis
      });
      o.from && o.to && (t.set("from", o.from), t.set("to", o.to)), o.workspaceSeq > 0 && t.set("workspace_seq", String(o.workspaceSeq));
      const r = await K.http.get(`/v1/taskbox/contribution-report?${t.toString()}`);
      if (!r?.ok || !r.data) throw new Error(r?.message || O("taskContribution.loadFailed"));
      return r.data;
    },
    detailPdf: async o => {
      try {
        const t = await K.requestBinary("POST", "/v1/taskbox/contribution-report/pdf", o);
        return new Blob([t], {
          type: "application/pdf"
        });
      } catch (t) {
        const r = t instanceof Error ? t.message.replace(/^HTTP \d+:\s*/, "") : "";
        let i = O("taskContribution.pdfFailed");
        try {
          const u = JSON.parse(r);
          typeof u.message == "string" && u.message && (i = u.message);
        } catch {}
        throw new Error(i);
      }
    }
  },
  Ct = [{
    value: "completed",
    labelKey: "taskContribution.basisCompleted"
  }, {
    value: "due",
    labelKey: "taskContribution.basisDue"
  }],
  gt = [{
    value: "month",
    labelKey: "taskContribution.unitMonth"
  }, {
    value: "year",
    labelKey: "taskContribution.unitYear"
  }, {
    value: "all",
    labelKey: "taskContribution.unitAll"
  }];
function E(o, t, r) {
  return new Date(Date.UTC(o, t - 1, 1)).toLocaleDateString(ot(st()), {
    ...r,
    timeZone: "UTC"
  });
}
const B = o => o.length === 7 ? E(Number(o.slice(0, 4)), Number(o.slice(5, 7)), {
  year: "numeric",
  month: "long"
}) : E(Number(o), 1, {
  year: "numeric"
});
function yt() {
  const o = new Date();
  return `${o.getFullYear()}-${String(o.getMonth() + 1).padStart(2, "0")}`;
}
function St(o, t) {
  const r = Number(o.slice(0, 4)) * 12 + Number(o.slice(5, 7)) - 1 + t;
  return `${Math.floor(r / 12)}-${String(r % 12 + 1).padStart(2, "0")}`;
}
function q(o, t) {
  const r = {
    share: 0,
    count: 0,
    items: []
  };
  for (const i of Object.keys(o.cells).sort()) {
    if (!i.startsWith(t)) continue;
    const u = o.cells[i];
    r.share += u.share, r.count += u.count, r.items.push(...u.items);
  }
  return r.share = Math.round(r.share * 100) / 100, r;
}
function wt() {
  const o = z(),
    [t, r] = l.useState("year"),
    [i, u] = l.useState(yt),
    [x, w] = l.useState("completed"),
    [p, T] = l.useState(0),
    [d, C] = l.useState(null),
    [m, j] = l.useState(!0),
    [b, v] = l.useState(null),
    g = {
      detail: et({
        modalId: "task-contribution-detail-dialog"
      })
    },
    n = l.useRef(0),
    h = l.useCallback(async () => {
      const c = ++n.current;
      j(!0);
      try {
        const a = i.slice(0, 4),
          S = t === "month" ? {
            from: i,
            to: i
          } : t === "year" ? {
            from: `${a}-01`,
            to: `${a}-12`
          } : {
            from: "",
            to: ""
          },
          R = await H.report({
            ...S,
            basis: x,
            workspaceSeq: p
          });
        c === n.current && C(R);
      } catch (a) {
        c === n.current && (C(null), A({
          message: a instanceof Error ? a.message : O("taskContribution.loadFailed")
        }));
      } finally {
        c === n.current && j(!1);
      }
    }, [t, i, x, p]);
  l.useEffect(() => {
    h();
  }, [h]);
  const _ = l.useMemo(() => new Map((d?.tasks ?? []).map(c => [c.seq, c])), [d]),
    D = t === "month" ? B(i) : t === "year" ? B(i.slice(0, 4)) : o("taskContribution.periodAll"),
    W = l.useCallback(c => u(a => St(a, t === "year" ? c * 12 : c)), [t]),
    $ = l.useMemo(() => {
      const c = d?.months ?? [];
      return t === "year" ? c.map(a => ({
        key: a,
        label: E(Number(a.slice(0, 4)), Number(a.slice(5, 7)), {
          month: "short"
        })
      })) : t === "all" ? [...new Set(c.map(a => a.slice(0, 4)))].map(a => ({
        key: a,
        label: B(a)
      })) : [];
    }, [d, t, o]),
    e = l.useMemo(() => {
      const c = d?.people ?? [],
        a = c.reduce((S, R) => S + R.total_share, 0);
      return c.map(S => ({
        ...S,
        ratio: a > 0 ? Math.round(S.total_share / a * 1e3) / 10 : 0
      }));
    }, [d]),
    y = l.useMemo(() => {
      if (!b) return 0;
      const a = (d?.people ?? []).reduce((R, Z) => R + q(Z, b.key).share, 0),
        S = q(b.person, b.key).share;
      return a > 0 ? Math.round(S / a * 1e3) / 10 : 0;
    }, [b, d]),
    N = ft(),
    [L, U] = l.useState(!1),
    J = l.useCallback(async c => {
      if (!L) {
        U(!0);
        try {
          const a = await H.detailPdf(c);
          N.open({
            seq: 0,
            table_name: "",
            user_seq: 0,
            user_name: "",
            created_time: "",
            name: `${O("taskContribution.pdfFileName", {
              title: c.title.replace(/\s*·\s*/g, "_")
            })}.pdf`,
            size: a.size,
            mimeType: "application/pdf",
            blob: a
          });
        } catch (a) {
          A({
            message: a instanceof Error ? a.message : O("taskContribution.pdfFailed")
          });
        } finally {
          U(!1);
        }
      }
    }, [L, N]),
    F = l.useRef(g.detail.open);
  F.current = g.detail.open;
  const X = l.useCallback((c, a = "") => {
    v({
      person: c,
      key: a,
      label: a ? B(a) : D
    }), F.current();
  }, [D]);
  return {
    unit: t,
    setUnit: r,
    periodLabel: D,
    shiftPeriod: W,
    basis: x,
    setBasis: w,
    workspaceSeq: p,
    setWorkspaceSeq: T,
    report: d,
    rows: e,
    buckets: $,
    loading: m,
    reload: h,
    taskBySeq: _,
    detail: b,
    detailRatio: y,
    printDetail: J,
    printing: L,
    openDetail: X,
    modals: g
  };
}
function I({
  text: o,
  muted: t = !1
}) {
  return s.jsx(k, {
    sx: {
      fontSize: 14,
      color: t ? "text.secondary" : "text.primary",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    },
    children: o || "-"
  });
}
function jt({
  controller: o
}) {
  const t = z(),
    r = nt(),
    {
      detail: i,
      detailRatio: u,
      printDetail: x,
      taskBySeq: w,
      basis: p,
      modals: T
    } = o,
    {
      items: d
    } = V(),
    C = l.useMemo(() => new Map(d.map(n => [n.seq, n.name])), [d]),
    m = l.useMemo(() => {
      if (!i) return [];
      const n = [];
      for (const h of q(i.person, i.key).items) {
        const _ = w.get(h.task_seq);
        _ && n.push({
          task: _,
          percent: h.percent
        });
      }
      return n;
    }, [i, w]),
    j = m.reduce((n, h) => n + h.percent / 100, 0),
    b = [{
      id: "title",
      text: t("taskContribution.colTask"),
      minWidth: 200,
      primary: !0,
      render: n => s.jsx(I, {
        text: n.task.title
      })
    }, {
      id: "percent",
      text: t("taskContribution.colPercent"),
      width: 130,
      align: "right",
      mobile: "badge",
      render: n => s.jsx(I, {
        text: n.task.defaulted ? t("taskContribution.percentDefault", {
          percent: n.percent
        }) : `${n.percent}%`,
        muted: n.task.defaulted
      })
    }, {
      id: "date",
      text: t(p === "completed" ? "taskContribution.basisCompleted" : "taskContribution.basisDue"),
      width: 120,
      render: n => s.jsx(I, {
        text: (p === "completed" ? n.task.completed_time : n.task.due_date).slice(0, 10),
        muted: !0
      })
    }, {
      id: "workspace",
      text: t("taskContribution.colWorkspace"),
      width: 140,
      render: n => s.jsx(I, {
        text: C.get(n.task.workspace_seq) ?? "",
        muted: !0
      })
    }],
    v = [{
      id: "task-contribution-detail",
      showTitle: !1,
      children: s.jsxs(f, {
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: 1,
          minWidth: 0
        },
        children: [s.jsx(k, {
          sx: {
            fontSize: 15,
            color: "text.secondary"
          },
          children: t("taskContribution.detailSummary", {
            count: m.length,
            share: M(j)
          })
        }), s.jsx(f, {
          sx: {
            minWidth: 0
          },
          children: s.jsx(at, {
            scrollbars: Y,
            variant: "notion",
            showPaper: !1,
            paddingX: 0,
            autoHeight: !0,
            mobile: !0,
            columns: b,
            data: m,
            totalCount: m.length,
            getRowId: n => n.task.seq,
            onRowClick: n => kt(n.task.seq),
            emptyMessage: t("taskContribution.emptyTasks")
          })
        })]
      })
    }],
    g = i ? `${i.person.name} · ${i.label}` : t("taskContribution.title");
  return s.jsx(rt, {
    open: T.detail.isOpen,
    onClose: T.detail.close,
    title: g,
    sideDrawer: !r,
    fullScreen: r,
    mobilePresentation: r ? "slide" : "dialog",
    titleIcons: {
      delete: {
        visible: !1
      },
      print: {
        visible: m.length > 0,
        onClick: () => {
          x({
            title: g,
            meta: [{
              label: t("taskContribution.metaEmployee"),
              value: i ? [i.person.name, i.person.unit_name].filter(Boolean).join(" · ") : ""
            }, {
              label: t("taskContribution.metaPeriod"),
              value: i?.label ?? ""
            }, {
              label: t("taskContribution.metaBasis"),
              value: t(p === "completed" ? "taskContribution.basisCompleted" : "taskContribution.basisDue")
            }],
            summary: [{
              label: t("taskContribution.summaryTotal"),
              value: t("taskContribution.taskCount", {
                count: m.length
              })
            }, {
              label: t("taskContribution.colShare"),
              value: t("taskContribution.shareCount", {
                share: M(j)
              })
            }, {
              label: t("taskContribution.colRatio"),
              value: `${M(u)}%`
            }],
            date_label: t(p === "completed" ? "taskContribution.basisCompleted" : "taskContribution.basisDue"),
            rows: m.map(n => ({
              title: n.task.title,
              percent: n.task.defaulted ? t("taskContribution.percentDefault", {
                percent: n.percent
              }) : `${n.percent}%`,
              date: (p === "completed" ? n.task.completed_time : n.task.due_date).slice(0, 10),
              workspace: C.get(n.task.workspace_seq) ?? ""
            }))
          });
        }
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
      showCancelButton: !0
    },
    sections: v
  });
}
function P() {
  return s.jsx(k, {
    sx: {
      fontSize: 14,
      color: "text.disabled"
    },
    children: "-"
  });
}
function vt({
  share: o,
  count: t
}) {
  const r = z();
  return t ? s.jsxs(k, {
    component: "span",
    sx: {
      fontSize: 14
    },
    children: [r("taskContribution.shareCount", {
      share: M(o)
    }), s.jsxs(f, {
      component: "span",
      sx: {
        color: "text.secondary",
        ml: .5
      },
      children: ["(", t, ")"]
    })]
  }) : s.jsx(P, {});
}
function Ut() {
  const o = z(),
    t = it(),
    r = wt(),
    {
      rows: i,
      buckets: u,
      loading: x,
      unit: w,
      setUnit: p,
      periodLabel: T,
      shiftPeriod: d,
      basis: C,
      setBasis: m,
      workspaceSeq: j,
      setWorkspaceSeq: b,
      openDetail: v
    } = r,
    g = bt("task-contribution.people"),
    {
      items: n
    } = V(),
    h = l.useMemo(() => n.filter(e => e.team_seq === (t?.seq ?? 0)).map(e => ({
      value: e.seq,
      label: e.name
    })), [n, t?.seq]),
    {
      rows: _,
      tableSort: D
    } = mt(i, {
      count: e => e.total_count,
      share: e => e.total_share,
      ...Object.fromEntries(u.map(e => [`p-${e.key}`, y => q(y, e.key).share]))
    }, {
      by: "ratio",
      dir: "desc"
    }),
    W = l.useMemo(() => [xt({
      pinned: !0
    }), {
      id: "name",
      text: o("taskContribution.colName", {
        count: i.length
      }),
      width: 180,
      pinned: "left",
      primary: !0,
      sortable: !0,
      render: e => s.jsxs(f, {
        sx: {
          minWidth: 0
        },
        children: [s.jsx(k, {
          component: "span",
          sx: {
            fontSize: "inherit"
          },
          children: e.name
        }), e.unit_name ? s.jsx(k, {
          component: "span",
          sx: {
            fontSize: 14,
            color: "text.secondary",
            ml: 1
          },
          children: e.unit_name
        }) : null]
      })
    }, {
      id: "ratio",
      text: o("taskContribution.colRatio"),
      width: 120,
      align: "right",
      sortable: !0,
      mobile: "badge",
      render: e => e.total_count ? s.jsxs(k, {
        sx: {
          fontSize: 14,
          fontWeight: 600
        },
        children: [M(e.ratio), "%"]
      }) : s.jsx(P, {})
    }, {
      id: "share",
      text: o("taskContribution.colShare"),
      width: 110,
      align: "right",
      sortable: !0,
      render: e => e.total_count ? s.jsx(k, {
        sx: {
          fontSize: 14
        },
        children: o("taskContribution.shareCount", {
          share: M(e.total_share)
        })
      }) : s.jsx(P, {})
    }, {
      id: "count",
      text: o("taskContribution.colCount"),
      width: 110,
      align: "right",
      sortable: !0,
      render: e => e.total_count ? s.jsx(k, {
        sx: {
          fontSize: 14,
          color: "text.secondary"
        },
        children: o("taskContribution.taskCount", {
          count: e.total_count
        })
      }) : s.jsx(P, {})
    }, ...u.map(e => ({
      id: `p-${e.key}`,
      text: e.label,
      width: 110,
      align: "right",
      sortable: !0,
      mobile: !1,
      render: y => {
        const N = q(y, e.key);
        return s.jsx(vt, {
          share: N.share,
          count: N.count
        });
      },
      onCellClick: y => {
        q(y, e.key).count && v(y, e.key);
      }
    }))], [i.length, u, v, o]),
    $ = {
      show: !0,
      left: s.jsxs(f, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          flexWrap: "wrap"
        },
        children: [s.jsx(f, {
          sx: {
            "& .MuiToggleButtonGroup-root": {
              height: 40
            }
          },
          children: s.jsx(G, {
            size: "medium",
            value: w,
            onChange: e => e && p(e),
            options: gt.map(e => ({
              value: e.value,
              label: o(e.labelKey)
            }))
          })
        }), w !== "all" ? s.jsx(ht, {
          label: T,
          onPrev: () => d(-1),
          onNext: () => d(1)
        }) : null, s.jsx(f, {
          sx: {
            "& .MuiToggleButtonGroup-root": {
              height: 40
            }
          },
          children: s.jsx(G, {
            size: "medium",
            value: C,
            onChange: e => e && m(e),
            options: Ct.map(e => ({
              value: e.value,
              label: o(e.labelKey)
            }))
          })
        }), s.jsx(f, {
          sx: {
            width: 200,
            "& .MuiInputBase-root": {
              height: 40
            }
          },
          children: s.jsx(lt, {
            size: "small",
            value: j || "",
            onChange: e => b(Number(e.target.value) || 0),
            options: h,
            emptyLabel: o("taskContribution.allWorkspaces"),
            fullWidth: !0
          })
        }), s.jsx(ct, {
          title: o("taskContribution.refresh"),
          children: s.jsx("span", {
            children: s.jsx(ut, {
              onClick: () => {
                r.reload();
              },
              disabled: x,
              "aria-label": o("taskContribution.refresh"),
              children: s.jsx(tt, {})
            })
          })
        })]
      }),
      showSearch: !1
    };
  return t && !dt(t) ? s.jsx(Q, {
    to: "/dashboard",
    replace: !0
  }) : s.jsxs(f, {
    sx: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      height: 0,
      minHeight: 520
    },
    children: [s.jsx(pt, {
      header: $,
      tableProps: {
        ...g,
        scrollbars: Y,
        mobile: !0,
        variant: "notion",
        data: _,
        totalCount: _.length,
        ...D,
        loading: x,
        columns: W,
        getRowId: e => e.account_seq,
        emptyMessage: o(C === "completed" ? "taskContribution.emptyCompleted" : "taskContribution.emptyDue"),
        onRowClick: e => v(e)
      }
    }), s.jsx(jt, {
      controller: r
    })]
  });
}
export { Ut as default };