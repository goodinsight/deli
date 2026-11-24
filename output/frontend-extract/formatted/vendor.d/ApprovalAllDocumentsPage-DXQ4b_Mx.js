import { r as s, j as i } from "./react-CjxcGQav.js";
import { bv as N, D as z, pw as K, B as I, lr as X } from "../js.d/main-Cm9wS5wt.js";
import { O as J } from "./OptionToggleGroup-Cvm2wRyq.js";
import { c as L, A as Q } from "./periodRange-CKwTiAVI.js";
import { u as U, a as Y, b as Z, i as $, A as ee } from "./ApprovalMobileList-BRKomjgP.js";
import { b as te, w as oe } from "./ReferenceList-mhfbKusm.js";
import { A as ae } from "./ApprovalDetailDialog-v7PUkzWr.js";
import { u as se } from "./FileUploadBox-crZW1mG0.js";
import { d as re, e as le, f as ie } from "./MobileCardListLayout-D5_p2Xer.js";
import { u as ne } from "./mobileSearchOverlay-DYWcMOOb.js";
import { T as pe } from "./tableScrollbars-C9bhlJjO.js";
import { u as ce } from "./useColumnWidths-DSAca5rC.js";
import "./stylis-DdLD6a3t.js";
import "./formPermission-dS9nHLBQ.js";
import "./useTeamApprovalSettings-C0SRRQJg.js";
import "./bootstrapController-BMV_i07c.js";
import "./profileEcho-q2FaD_03.js";
import "./teamMembers-0yRsmqL6.js";
import "./pendingRecordings-DpKJ8Y2R.js";
import "./meetingsApi-CCkjq69B.js";
import "./orgTree-Dh5HFjBo.js";
import "./mxApi-R6g9QtQq.js";
import "./aliasStore-DiN6Kp-5.js";
import "./profileApi-Btafs-pM.js";
import "./printDocChrome-BMZLbM8A.js";
import "./index.esm-BLbQfyP0.js";
import "./FileViewer-D5PyYcLh.js";
import "./RotateRight-DbtMfjGZ.js";
import "./tiny-invariant-CopsF_GD.js";
import "./Snackbar-DxIDGM8-.js";
import "./Refresh-xoMt5L00.js";
import "./date_utils-CYURFdnX.js";
import "./resolveAssetPreviewSrc-CLlbOCzq.js";
import "./ReservationDialog-DnyeBFBI.js";
import "./ToneChip-BFljqlNi.js";
import "./VehicleLogDialog-BPXUMXE7.js";
import "./Send-yl2RzZF4.js";
import "./ZoomIn-B3VGPGla.js";
import "./printSvgDocument-DHC1JJCG.js";
import "./Image-BpXScS6T.js";
import "./documentViewerStore-BlSjH3BG.js";
import "./useFileViewer-B-2ewnr3.js";
import "./AccountAvatar-DtrhoS_d.js";
import "./Person-DnoEHesw.js";
import "./uploadGuard-BK1B6cyC.js";
function ot() {
  const n = N(),
    w = ce("approval.allDocuments"),
    g = s.useRef(!0),
    l = z(),
    p = ne(),
    O = p.useValue("open");
  s.useEffect(() => {
    if (l) return p.setValue("active", !0), () => {
      p.setValue("active", !1), p.setValue("open", !1);
    };
  }, [l, p]);
  const {
      state: e,
      modals: c
    } = te({
      stateId: "approval-all-state",
      modalId: "approval-all-detail-dialog"
    }),
    {
      account: k
    } = se(),
    D = e.useValue("selectedDocument"),
    u = e.useValue("items") || [],
    m = e.useValue("total") ?? u.length,
    C = !!e.useValue("loadingMore"),
    d = !!e.useValue("listLoading"),
    B = !!e.useValue("listLoaded"),
    a = e.useValue("filters"),
    [T, h] = s.useState(a.keyword || ""),
    [v, P] = s.useState("1y"),
    b = s.useCallback(() => {
      e.actions.loadMoreAll();
    }, [e]),
    j = s.useCallback(() => {
      const t = e.getValue("filters");
      e.actions.loadItems({
        ...t,
        source: "all"
      });
    }, [e]);
  oe({
    currentAccountSeq: Number(k?.seq ?? 0),
    onRefresh: j
  }), s.useEffect(() => {
    h(a.keyword || "");
  }, [a.keyword]), s.useEffect(() => {
    if (!g.current) return;
    g.current = !1;
    const t = {
      type: "",
      status: [],
      importance: "",
      keyword: "",
      dateRange: L("1y"),
      source: "all"
    };
    e.setValue("filters", t), h(""), e.actions.loadItems(t);
  }, [e]);
  const F = s.useCallback(t => {
      const o = {
        ...a,
        dateRange: t.start || t.end ? t : null,
        source: "all"
      };
      e.setValue("filters", o), e.actions.loadItems(o);
    }, [e, a]),
    f = U(a.dateRange, F, !1, !1),
    x = Y(),
    E = s.useCallback(t => h(t), []),
    G = s.useCallback(t => {
      const o = {
        ...a,
        keyword: t,
        source: "all"
      };
      e.setValue("filters", o), e.actions.loadItems(o);
    }, [e, a]),
    W = s.useCallback(t => {
      const o = {
        ...a,
        status: l ? t.status || [] : a.status ?? [],
        type: l ? t.type || [] : a.type ?? [],
        importance: l ? t.importance || [] : a.importance ?? [],
        dateRange: t.dateRange || null,
        source: "all"
      };
      e.setValue("filters", o), e.actions.loadItems(o);
    }, [e, a, l]),
    y = s.useCallback(t => {
      P(t);
      const o = {
        ...a,
        dateRange: L(t),
        source: "all"
      };
      e.setValue("filters", o), e.actions.loadItems(o);
    }, [e, a]),
    R = s.useMemo(() => {
      const t = i.jsx(I, {
        sx: {
          maxWidth: "100%",
          overflowX: "auto",
          "&::-webkit-scrollbar": {
            display: "none"
          },
          scrollbarWidth: "none",
          "& .MuiToggleButtonGroup-root": {
            height: 40,
            flexWrap: "nowrap",
            width: "max-content"
          },
          "& .MuiToggleButtonGroup-grouped": {
            whiteSpace: "nowrap"
          }
        },
        children: i.jsx(J, {
          size: "medium",
          value: v,
          onChange: o => o && y(o),
          options: Q,
          sx: {
            "& .MuiToggleButtonGroup-grouped": {
              minWidth: 56,
              px: 1.5
            }
          }
        })
      });
      return f.map((o, r) => r === f.length - 1 ? {
        ...o,
        filters: [...o.filters, {
          type: "custom",
          name: "approval-period",
          node: t
        }]
      } : o);
    }, [f, v, y, n]),
    _ = a.sortDir || "desc",
    H = s.useCallback((t, o) => {
      if (t !== "created_time") return;
      const r = {
        ...a,
        sortDir: o,
        source: "all"
      };
      e.setValue("filters", r), e.actions.loadItems(r);
    }, [e, a]),
    S = s.useMemo(() => {
      if (l) return;
      const t = r => Array.isArray(r) ? r.map(String) : r ? [String(r)] : [],
        o = r => {
          const M = {
            ...a,
            ...r,
            source: "all"
          };
          e.setValue("filters", M), e.actions.loadItems(M);
        };
      return {
        type: {
          options: x,
          values: t(a.type),
          onChange: r => o({
            type: r
          })
        },
        importance: {
          options: $(n),
          values: t(a.importance),
          onChange: r => o({
            importance: r
          })
        },
        status: {
          options: Z(n),
          values: t(a.status),
          onChange: r => o({
            status: r
          })
        }
      };
    }, [l, a, e, n, x]),
    q = s.useMemo(() => K(m, void 0, S), [m, S, n]),
    A = s.useCallback(t => {
      e.setValue("selectedDocument", t), c.detail.open();
    }, [e, c.detail]),
    V = {
      showSearch: !0,
      collapsible: !1,
      showClearIcon: !1,
      showCollapseButton: !1,
      searchValue: T,
      searchPlaceholder: n("approval.enterSearchTerm"),
      searchWidth: l ? ie : void 0,
      onSearchChange: E,
      onSearch: G,
      searchMinLength: 2,
      searchLoading: d,
      filter: {
        stateId: "approval-all-filters-v1",
        groups: l ? re(R, "approval-all") : R,
        onChange: W,
        showChips: !1
      },
      right: void 0
    };
  return i.jsxs(i.Fragment, {
    children: [l ? i.jsx(le, {
      header: V,
      searchOverlayOpen: O,
      storageKey: "approval-all-mobile-list",
      children: i.jsx(ee, {
        items: u,
        loading: d || !B,
        loadingMore: C,
        onRowClick: A,
        onLoadMore: b,
        emptyText: n("approval.noDocuments"),
        attachHead: !0
      })
    }) : i.jsx(I, {
      sx: {
        position: "relative",
        height: "100%",
        minHeight: 0,
        display: "flex",
        flexDirection: "column"
      },
      children: i.jsx(X, {
        header: V,
        tableProps: {
          ...w,
          scrollbars: pe,
          mobile: !0,
          variant: "notion",
          columns: q,
          data: u,
          totalCount: m,
          getRowId: t => String(t.seq ?? ""),
          rowHeight: 48,
          onRowClick: A,
          onLoadMore: b,
          onSort: H,
          sortBy: "created_time",
          sortDirection: _,
          loading: d || C
        }
      })
    }), i.jsx(ae, {
      open: c.detail.isOpen,
      onClose: c.detail.close,
      document: D
    })]
  });
}
export { ot as default };