import { r as a, u as be, i as ge, j as l } from "./react-CjxcGQav.js";
import { bv as xe, D as ve, fL as ye, pw as Ce, B as X, d6 as Se, d7 as K, F as Ae, d8 as Me } from "../js.d/main-Cm9wS5wt.js";
import { r as Ve, A as De, a as Ie, b as Te } from "./ApprovalTypeSelect-C3LZlstk.js";
import { u as Re, a as ke } from "./EdgeTabs-Ccbggjn6.js";
import { o as we } from "./approvalDetailHost-CFvt90Au.js";
import { O as Oe } from "./OptionToggleGroup-Cvm2wRyq.js";
import { c as U, A as Be } from "./periodRange-CKwTiAVI.js";
import { u as Le, a as Pe, b as _e, i as je, A as qe } from "./ApprovalMobileList-BRKomjgP.js";
import { c as Ee } from "./closeModalThenNavigate-E6PLv0o1.js";
import { b as Fe, w as Ne } from "./ReferenceList-mhfbKusm.js";
import { A as Ge } from "./ApprovalDetailDialog-v7PUkzWr.js";
import { u as We } from "./FileUploadBox-crZW1mG0.js";
import { z as He } from "./bootstrapController-BMV_i07c.js";
import { d as $e, e as ze, f as Xe } from "./MobileCardListLayout-D5_p2Xer.js";
import { u as Ke } from "./mobileSearchOverlay-DYWcMOOb.js";
import { u as Ue } from "./notificationIntent-BMq5F2BF.js";
import { u as Je } from "./useAppBasePath-BVB_xO8H.js";
import { u as Qe } from "./useApprovalHandleScope-yUR3-cMk.js";
import "./stylis-DdLD6a3t.js";
import "./tableScrollbars-C9bhlJjO.js";
import "./formPermission-dS9nHLBQ.js";
import "./useTeamApprovalSettings-C0SRRQJg.js";
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
import "./profileEcho-q2FaD_03.js";
import "./teamMembers-0yRsmqL6.js";
import "./pendingRecordings-DpKJ8Y2R.js";
import "./meetingsApi-CCkjq69B.js";
import "./orgTree-Dh5HFjBo.js";
import "./mxApi-R6g9QtQq.js";
import "./aliasStore-DiN6Kp-5.js";
import "./profileApi-Btafs-pM.js";
function m(i) {
  return i === "done" || i === "handle" ? i : "todo";
}
function Ut() {
  const i = xe(),
    R = a.useRef(!0),
    c = ve(),
    f = Ke(),
    x = f.useValue("open");
  a.useEffect(() => {
    if (c) return f.setValue("active", !0), () => {
      f.setValue("active", !1), f.setValue("open", !1);
    };
  }, [c, f]);
  const {
      state: t,
      modals: p,
      loading: k,
      decisions: u
    } = Fe({
      stateId: "approval-box-state",
      modalId: "approval-box-detail-dialog"
    }),
    {
      account: v
    } = We(),
    n = t.useValue("selectedDocument"),
    h = t.useValue("items") || [],
    y = t.useValue("total") ?? h.length,
    w = !!t.useValue("loadingMore"),
    C = !!t.useValue("listLoading"),
    S = !!t.useValue("listLoaded"),
    s = t.useValue("filters"),
    [A, b] = a.useState(s.keyword || ""),
    [O, J] = a.useState("1y"),
    B = a.useCallback(() => {
      t.actions.loadMoreBox();
    }, [t]),
    Q = a.useCallback(() => {
      const e = t.getValue("filters");
      t.actions.loadItems({
        ...e,
        source: "box"
      });
    }, [t]);
  Ne({
    currentAccountSeq: Number(v?.seq ?? 0),
    onRefresh: Q
  });
  const M = be(),
    Y = ye("approval"),
    L = ge(),
    d = new URLSearchParams(L.search).get("scope") ?? "",
    P = a.useRef(d);
  P.current = d;
  const _ = Je(),
    Z = (n?.status === "cancelled" || n?.status === "rejected") && String(n?.type) === "fund_report" && Number(n?.account_seq ?? 0) === Number(v?.seq ?? 0),
    ee = a.useCallback(() => {
      const e = t.getValue("selectedDocument");
      if (!e) return;
      const o = /(\d{4}-\d{2}-\d{2})/.exec(String(e.title ?? ""));
      Ee(() => p.detail.close(), () => M(`${_}/daily-report`, o ? {
        state: {
          targetDate: o[1]
        }
      } : void 0));
    }, [t, p.detail, M]);
  a.useEffect(() => {
    b(s.keyword || "");
  }, [s.keyword]);
  const te = a.useCallback(e => {
      const o = {
        ...s,
        dateRange: e.start || e.end ? e : null,
        source: "box"
      };
      t.setValue("filters", o), t.actions.loadItems(o);
    }, [t, s]),
    V = Le(s.dateRange, te, !1, !0),
    {
      state: oe
    } = He(),
    D = Pe(),
    j = oe.useValue("data.approval_counts"),
    I = j?.pendingMyTurnByType,
    q = Number(j?.pendingMyTurn ?? 0),
    {
      handleCount: se
    } = Qe(),
    E = Number(v?.seq ?? 0);
  a.useEffect(() => {
    if (!R.current) return;
    R.current = !1;
    const e = {
      type: "",
      status: [],
      importance: "",
      keyword: "",
      dateRange: U("1y"),
      source: "box",
      boxScope: m(Ve(L.state) || P.current)
    };
    t.setValue("filters", e), b(""), t.actions.loadItems(e);
  }, [t]);
  const ae = a.useCallback(e => b(e), []);
  Re(c ? A : "", e => c && F(e), 2), a.useEffect(() => {
    c && !x && b("");
  }, [c, x]);
  const T = m(s.boxScope);
  a.useEffect(() => {
    if (!d || m(d) === m(t.getValue("filters")?.boxScope)) return;
    const e = {
      ...t.getValue("filters"),
      source: "box",
      boxScope: m(d)
    };
    t.setValue("filters", e), t.actions.loadItems(e);
  }, [d, t]);
  const re = a.useCallback(e => {
      const o = {
        ...s,
        source: "box",
        boxScope: e
      };
      t.setValue("filters", o), t.actions.loadItems(o);
    }, [t, s]),
    F = a.useCallback(e => {
      const o = {
        ...s,
        keyword: e,
        source: "box"
      };
      t.setValue("filters", o), t.actions.loadItems(o);
    }, [t, s]),
    ne = a.useCallback(e => {
      const o = {
        ...s,
        status: c ? e.status || [] : s.status ?? [],
        type: s.type ?? [],
        importance: c ? e.importance || [] : s.importance ?? [],
        dateRange: e.dateRange || null,
        source: "box"
      };
      t.setValue("filters", o), t.actions.loadItems(o);
    }, [t, s, c]),
    le = a.useMemo(() => {
      const e = Array.isArray(s.type) ? s.type : s.type ? [s.type] : [];
      return e.length === 1 ? String(e[0]) : null;
    }, [s.type]),
    ie = a.useCallback(e => {
      const o = {
        ...s,
        type: e ? [e] : [],
        source: "box"
      };
      t.setValue("filters", o), t.actions.loadItems(o);
    }, [t, s]),
    N = a.useCallback(e => {
      J(e);
      const o = {
        ...s,
        dateRange: U(e),
        source: "box"
      };
      t.setValue("filters", o), t.actions.loadItems(o);
    }, [t, s]),
    G = a.useMemo(() => {
      const e = l.jsx(X, {
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
        children: l.jsx(Oe, {
          size: "medium",
          value: O,
          onChange: o => o && N(o),
          options: Be,
          sx: {
            "& .MuiToggleButtonGroup-grouped": {
              minWidth: 56,
              px: 1.5
            }
          }
        })
      });
      return V.map((o, r) => r === V.length - 1 ? {
        ...o,
        filters: [...o.filters, {
          type: "custom",
          name: "approval-period",
          node: e
        }]
      } : o);
    }, [V, O, N, i]),
    ce = s.sortDir || "desc",
    pe = a.useCallback((e, o) => {
      if (e !== "created_time") return;
      const r = {
        ...s,
        sortDir: o,
        source: "box"
      };
      t.setValue("filters", r), t.actions.loadItems(r);
    }, [t, s]),
    W = a.useMemo(() => {
      if (c) return;
      const e = r => Array.isArray(r) ? r.map(String) : r ? [String(r)] : [],
        o = r => {
          const z = {
            ...s,
            ...r,
            source: "box"
          };
          t.setValue("filters", z), t.actions.loadItems(z);
        };
      return {
        type: {
          options: D.map(r => ({
            ...r,
            count: I?.[r.value] || void 0
          })),
          values: e(s.type),
          onChange: r => o({
            type: r
          })
        },
        importance: {
          options: je(i),
          values: e(s.importance),
          onChange: r => o({
            importance: r
          })
        },
        status: {
          options: _e(i),
          values: e(s.status),
          onChange: r => o({
            status: r
          })
        }
      };
    }, [c, s, t, i, I, D]),
    ue = a.useMemo(() => Ce(y, void 0, W), [y, W, i]),
    g = a.useCallback(e => {
      t.setValue("selectedDocument", e), p.detail.open();
    }, [t, p.detail]);
  Ue(["approval_my_turn", "approval_commented"], e => {
    const o = h.find(r => Number(r.seq) === e.seq);
    return o ? (g(o), !0) : !S || C ? !1 : (we(e.seq), !0);
  }, [h, g, S, C]);
  const de = a.useCallback(async e => {
      !n?.seq || !(await u.approve({
        seq: n.seq,
        title: n.title
      }, e)) || (p.detail.close(), t.setValue("selectedDocument", null));
    }, [n, u, p.detail, t]),
    me = a.useCallback(async (e, o) => {
      !n?.seq || !(await u.reject({
        seq: n.seq,
        title: n.title
      }, e, o)) || (p.detail.close(), t.setValue("selectedDocument", null));
    }, [n, u, p.detail, t]),
    H = !!n?._isMyTurn,
    fe = E > 0 && Number(n?.handler_account_seq ?? 0) === E && n?.status === "approved" && !String(n?.handled_time ?? "").trim(),
    he = a.useCallback(async () => {
      !n?.seq || !(await u.handle({
        seq: n.seq,
        title: n.title
      })) || (p.detail.close(), t.setValue("selectedDocument", null));
    }, [n, u, p.detail, t]),
    $ = {
      showSearch: !0,
      collapsible: !1,
      showClearIcon: !1,
      showCollapseButton: !1,
      searchValue: A,
      searchPlaceholder: i("approval.enterSearchTerm"),
      searchWidth: c ? Xe : void 0,
      onSearchChange: ae,
      onSearch: F,
      searchMinLength: 2,
      searchLoading: k.list,
      filter: {
        stateId: "approval-box-filters-v1",
        groups: c ? $e(G, "approval-box") : G,
        onChange: ne,
        showChips: !1
      },
      right: void 0
    };
  return l.jsxs(l.Fragment, {
    children: [c ? l.jsxs(ze, {
      header: $,
      searchOverlayOpen: !1,
      storageKey: "approval-box-mobile-list",
      children: [l.jsx(De, {
        active: T,
        pendingCount: q,
        handleCount: se,
        onSamePage: e => re(m(e)),
        above: l.jsx(ke, {
          open: x,
          value: A,
          onChange: b,
          placeholder: i("approval.searchTitleDocNoDrafter")
        })
      }), l.jsx(l.Fragment, {
        children: l.jsx(X, {
          sx: {
            mx: `-${K}px`,
            mt: `-${K}px`,
            mb: Se,
            p: 2,
            bgcolor: "#fff",
            "& .MuiSelect-select.MuiOutlinedInput-input": {
              paddingTop: "13px",
              paddingBottom: "13px"
            }
          },
          children: l.jsx(Ie, {
            options: D,
            selected: le,
            onSelect: ie,
            counts: I,
            totalCount: q
          })
        })
      }), l.jsx(qe, {
        items: h,
        loading: C || !S,
        loadingMore: w,
        onRowClick: g,
        onLoadMore: B,
        emptyText: i(T === "todo" ? "approval.noDocumentsToApprove" : T === "handle" ? "approval.noDocumentsToHandle" : "approval.noApprovedDocuments")
      })]
    }) : l.jsx(Te, {
      header: $,
      columns: ue,
      items: h,
      total: y,
      loading: k.list || w,
      onRowClick: g,
      onLoadMore: B,
      onSort: pe,
      sortBy: "created_time",
      sortDirection: ce
    }), l.jsx(Ge, {
      open: p.detail.isOpen,
      onClose: p.detail.close,
      document: n,
      onApprove: H ? de : void 0,
      onReject: H ? me : void 0,
      onEdit: Z ? ee : void 0,
      onHandle: fe ? he : void 0
    }), c && Y.canWrite ? l.jsx(Ae, {
      color: "primary",
      "aria-label": i("approval.requestApproval"),
      onClick: () => M(`${_}/approval/create`),
      sx: {
        position: "fixed",
        right: 24,
        bottom: "calc(24px + var(--taskbox-fab-lift, 0px))",
        zIndex: 40
      },
      children: l.jsx(Me, {})
    }) : null]
  });
}
export { Ut as default };