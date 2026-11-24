import { r as l, l as Ge, j as t, u as Ue } from "./react-CjxcGQav.js";
import { bv as Re, fL as Ye, D as Ke, cz as Ve, nG as Qe, bO as Xe, bT as $e, dv as Ze, db as pe, aq as fe, B as i, fo as Je, gZ as z, bA as et, k as tt, bQ as ot, F as st, d8 as nt, nD as rt, nE as lt, lr as at, h0 as it, cO as ct, L as N } from "../js.d/main-Cm9wS5wt.js";
import { F as ut } from "./FolderOffOutlined-B0Ny3dYE.js";
import { S as dt } from "./selectedRow-CBnSZEGB.js";
import { O as he } from "./OptionToggleGroup-Cvm2wRyq.js";
import { S as mt } from "./SplitDockSlot-B6Q4iP8T.js";
import { u as pt } from "./useCloseOnChange-Cdlg7Hw5.js";
import { H as xe, o as ft } from "./HeadFilter-Byax-_oc.js";
import { L as ht } from "./ListViewModeToggle-NcYQu7vy.js";
import { u as xt } from "./useScrollRowIntoView-_Wt5tTDd.js";
import { u as gt, a as St, b as Ct } from "./MobileCardListLayout-D5_p2Xer.js";
import { A as ge, c as Se } from "./periodRange-CKwTiAVI.js";
import { u as _t, c as bt } from "./customerMetaStore-Bj9KdRyn.js";
import { u as wt, C as vt, c as Ce } from "./ConsultHistoryPanel-X3hMdgAl.js";
import { u as jt, a as Et, F as yt } from "./FolderDialog-CQcho59p.js";
import { u as Ot } from "./listViewMode-iTl-2ucA.js";
import { u as _e, i as be, g as L, n as Rt } from "./types-B1OAKh4b.js";
import { F as kt } from "./FolderPickRow-Dqfs_lvL.js";
import { T as Tt } from "./tableScrollbars-C9bhlJjO.js";
import { u as Lt } from "./useColumnWidths-DSAca5rC.js";
import { u as Ft } from "./sidebarAction-Z0aCDENX.js";
import "./stylis-DdLD6a3t.js";
import "./HorizontalSplitOutlined-MKxJhLKp.js";
import "./mobileSearchOverlay-DYWcMOOb.js";
import "./taskDetailHost-C45bt_tL.js";
import "./PropertyContentEditor-DIsouMXi.js";
import "./propertySections-Bwsl7OH-.js";
import "./AltRouteOutlined-BY5W7vtA.js";
import "./CategoryOutlined-DcAqxAdD.js";
import "./Title-WCY0exuZ.js";
import "./RecordVoiceOverOutlined-C838alHh.js";
import "./ForwardOutlined-L-S9T4to.js";
import "./dealApi-CnzQt6qM.js";
import "./deal-B3IQ_ej7.js";
import "./PropertyFields-TuJTG5XK.js";
import "./FormValue-CAMilU-0.js";
import "./profileApi-Btafs-pM.js";
const we = 50,
  ve = 48,
  qt = "#9b9a97",
  Dt = "#f8f8f7",
  C = 40,
  je = 2,
  T = 2,
  G = 150,
  Mt = G,
  Ee = o => /^\d{4}-\d{2}-\d{2}$/.test(o),
  ye = o => [{
    value: "",
    label: o("customer.all")
  }, {
    value: "open",
    label: o(L.open)
  }, {
    value: "done",
    label: o(L.done)
  }];
function Oe({
  inFolder: o
}) {
  const h = Re();
  return t.jsx(i, {
    sx: {
      py: 6,
      px: 2,
      textAlign: "center",
      color: qt,
      fontSize: 14,
      wordBreak: "keep-all"
    },
    children: h(o ? "customer.noConsultsInFolder" : "customer.noConsults")
  });
}
function bo() {
  const o = Re(),
    h = Ye("customer").canWrite,
    ke = Lt("customer.consult"),
    n = Ke(),
    _ = Ve()?.seq ?? 0,
    c = _t(),
    [F, Te] = Ot("consult"),
    q = !n && F === "split",
    b = !n && F === "split_bottom",
    D = q || b,
    [m, U] = l.useState([]),
    [Y, K] = l.useState(0),
    [w, V] = l.useState(!1),
    [S, Q] = l.useState(""),
    [v, X] = l.useState(0),
    [j, $] = l.useState(0),
    [M, Le] = l.useState("desc"),
    [E, Z] = l.useState(""),
    [y, J] = l.useState(""),
    ee = Ee(E) ? E : "",
    te = Ee(y) ? y : "",
    oe = l.useRef(() => {}),
    u = jt("consult", {
      onMoved: () => oe.current()
    }),
    I = Qe(u.pick);
  Et(u);
  const P = l.useRef(1),
    O = l.useRef(0),
    x = l.useCallback(async e => {
      if (!_) {
        U([]), K(0);
        return;
      }
      const s = ++O.current,
        r = e === "refresh",
        d = e === "more" ? P.current + 1 : 1;
      r || V(!0);
      try {
        const g = await bt.listConsults({
          status: S,
          categorySeq: v,
          handlerAccountSeq: j,
          from: ee,
          to: te,
          sortBy: "consulted_at",
          sortDir: M,
          folder: I,
          page: d,
          limit: r ? Math.max(1, P.current) * we : we
        });
        if (s !== O.current) return;
        r || (P.current = d), U(Ne => e === "more" ? [...Ne, ...g.items] : g.items), K(g.total);
      } catch (g) {
        if (s !== O.current || r) return;
        Xe(g instanceof Error ? g.message : $e("customer.loadConsultsFailed"));
      } finally {
        s === O.current && V(!1);
      }
    }, [_, S, v, j, ee, te, M, I]);
  oe.current = () => {
    x("reload");
  }, l.useEffect(() => {
    x("reload");
  }, [x]);
  const a = wt({
    onChanged: () => {
      x("reload"), u.reload();
    },
    defaultFolderSeq: () => typeof u.pick == "number" ? u.pick : 0
  });
  Ze(["consult", "customer", "customer_folder"], e => {
    x("refresh"), it(e, "consult", "customer_folder") && u.reload();
  }), pt(I, () => {
    a.modals.form.isOpen && a.modals.form.close();
  });
  const [Fe, se] = Ge(),
    W = Number(Fe.get(_e)) || 0,
    ne = l.useRef(a.openBySeq);
  ne.current = a.openBySeq, l.useEffect(() => {
    !W || !_ || !c.loaded || (ne.current(W), se(e => {
      const s = new URLSearchParams(e);
      return s.delete(_e), s;
    }, {
      replace: !0
    }));
  }, [W, _, c.loaded, se]);
  const B = l.useMemo(() => new Map(c.consult_categories.map(e => [e.seq, e.name])), [c.consult_categories]),
    re = m.length < Y,
    le = () => {
      !w && re && x("more");
    },
    qe = t.jsx(he, {
      size: "medium",
      value: S,
      onChange: e => Q(e ?? ""),
      options: ye(o),
      sx: n ? {
        flexWrap: "nowrap",
        flexShrink: 0,
        "& .MuiToggleButtonGroup-grouped": {
          minWidth: 64,
          flex: 1
        },
        ...pe
      } : {
        flexWrap: "nowrap",
        flexShrink: 0,
        height: C,
        "& .MuiToggleButtonGroup-grouped": {
          minWidth: 64,
          px: 1.5
        }
      }
    }),
    De = c.consult_categories.length > 0 ? t.jsx(fe, {
      value: v || "",
      options: c.consult_categories.map(e => ({
        value: e.seq,
        label: e.name
      })),
      emptyLabel: o("customer.allCategories"),
      onChange: e => X(Number(e.target.value) || 0),
      fullWidth: n,
      size: n ? void 0 : "small",
      formControlProps: {
        sx: {
          width: n ? "100%" : G,
          flexShrink: 0
        }
      },
      sx: n ? void 0 : {
        height: C
      }
    }) : null,
    Me = c.members.length > 1 ? t.jsx(fe, {
      value: j || "",
      options: c.members.map(e => ({
        value: e.account_seq,
        label: e.name
      })),
      emptyLabel: o("customer.allStaff"),
      onChange: e => $(Number(e.target.value) || 0),
      fullWidth: n,
      size: n ? void 0 : "small",
      formControlProps: {
        sx: {
          width: n ? "100%" : G,
          flexShrink: 0
        }
      },
      sx: n ? void 0 : {
        height: C
      }
    }) : null,
    Ie = ge.find(e => {
      const s = Se(e.value);
      return s.start === E && s.end === y;
    })?.value ?? null,
    ae = (e, s, r) => t.jsx(ct, {
      value: s,
      onChange: d => r(String(d.target.value ?? "")),
      placeholder: e,
      "aria-label": e,
      size: n ? void 0 : "small",
      fullWidth: n,
      sx: n ? {
        flex: 1,
        minWidth: 0
      } : {
        width: Mt,
        flexShrink: 0,
        "& .MuiInputBase-root": {
          height: C
        }
      }
    }),
    Pe = t.jsxs(i, {
      sx: {
        display: "flex",
        flexDirection: n ? "column" : "row",
        alignItems: n ? "stretch" : "center",
        gap: n ? T : je,
        minWidth: 0
      },
      children: [t.jsxs(i, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 1
        },
        children: [ae(o("customer.startDate"), E, Z), t.jsx(i, {
          component: "span",
          sx: {
            color: "text.secondary",
            flexShrink: 0
          },
          children: "~"
        }), ae(o("customer.endDate"), y, J)]
      }), t.jsx(he, {
        size: "medium",
        value: Ie,
        allowDeselect: !0,
        onChange: e => {
          const s = e ? Se(e) : {
            start: "",
            end: ""
          };
          Z(s.start), J(s.end);
        },
        options: ge,
        sx: n ? {
          flexWrap: "nowrap",
          "& .MuiToggleButtonGroup-grouped": {
            flex: 1,
            minWidth: 0,
            px: .5
          },
          ...pe
        } : {
          flexWrap: "nowrap",
          flexShrink: 0,
          height: C,
          "& .MuiToggleButtonGroup-grouped": {
            minWidth: 56,
            px: 1.5
          }
        }
      })]
    }),
    ie = t.jsxs(i, {
      sx: {
        display: "flex",
        flexDirection: n ? "column" : "row",
        alignItems: "stretch",
        flexWrap: n ? "nowrap" : "wrap",
        gap: n ? T : je
      },
      children: [n ? t.jsx(kt, {
        controller: u,
        gap: T
      }) : null, qe, n ? De : null, n ? Me : null, Pe, n ? null : t.jsx(i, {
        sx: {
          marginLeft: "auto",
          flexShrink: 0
        },
        children: t.jsx(ht, {
          value: F,
          onChange: Te,
          withBottom: !0
        })
      })]
    }),
    [p, A] = l.useState(null),
    H = e => {
      const s = p?.row;
      A(null), s && e(s);
    },
    We = Ue(),
    ce = t.jsxs(t.Fragment, {
      children: [t.jsx(vt, {
        controller: a,
        meta: c,
        rows: m,
        presentation: D ? "dock" : "drawer",
        wide: b
      }), t.jsxs(Je, {
        open: !!p,
        onClose: () => A(null),
        point: p,
        children: [t.jsx(z, {
          icon: t.jsx(et, {}),
          onClick: () => H(e => a.openEdit(e)),
          children: o("customer.openConsult")
        }), p && p.row.customer_seq > 0 ? t.jsx(z, {
          icon: t.jsx(tt, {}),
          onClick: () => H(e => We(`/dashboard/customer?${Rt}=${e.customer_seq}`)),
          children: o("customer.openCustomerInfo")
        }) : null, p && p.row.folder_seq > 0 && h ? t.jsx(z, {
          icon: t.jsx(ut, {}),
          onClick: () => H(e => {
            u.moveItems([e.seq], 0);
          }),
          children: o("customer.removeFromFolder")
        }) : null]
      }), t.jsx(yt, {
        controller: u
      })]
    }),
    ue = gt(w),
    Be = a.ui.useValue("target"),
    f = a.modals.form.isOpen ? Be?.seq ?? 0 : 0,
    de = l.useRef(null);
  xt(de, f ? String(f) : "", f ? m.findIndex(e => e.seq === f) : -1, ve);
  const R = D && a.modals.form.isOpen,
    k = q && R,
    Ae = e => {
      if (D && e.seq === f) {
        a.modals.form.close();
        return;
      }
      a.openEdit(e);
    };
  if (Ft(!n && h ? {
    label: o("customer.recordConsult"),
    onClick: () => a.openCreateBlank(),
    fab: !R
  } : null), n) {
    const e = r => t.jsxs(i, {
        role: "button",
        tabIndex: 0,
        onClick: () => a.openEdit(r),
        onKeyDown: d => {
          (d.key === "Enter" || d.key === " ") && (d.preventDefault(), a.openEdit(r));
        },
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: .5,
          px: 2,
          py: 1.5,
          cursor: "pointer",
          userSelect: "none",
          "&:active": {
            bgcolor: Dt
          }
        },
        children: [t.jsxs(i, {
          sx: {
            display: "flex",
            alignItems: "baseline",
            gap: 1
          },
          children: [t.jsx(N, {
            sx: {
              fontSize: 15,
              fontWeight: 600
            },
            children: r.customer_name
          }), r.status === "open" ? t.jsx(N, {
            sx: {
              fontSize: 14,
              color: "warning.dark",
              fontWeight: 600
            },
            children: o(L.open)
          }) : null]
        }), t.jsx(N, {
          sx: {
            fontSize: 14,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          },
          children: Ce(r)
        }), t.jsxs(i, {
          sx: {
            display: "flex",
            flexWrap: "wrap",
            columnGap: 1.25,
            fontSize: 14,
            color: "text.secondary"
          },
          children: [t.jsx("span", {
            children: r.consulted_at
          }), t.jsx("span", {
            children: o(be[r.channel])
          }), B.get(r.category_seq) ? t.jsx("span", {
            children: B.get(r.category_seq)
          }) : null, r.handler_name ? t.jsx("span", {
            children: r.handler_name
          }) : null]
        })]
      }, r.seq),
      s = [t.jsx(i, {
        sx: {
          p: T
        },
        children: ie
      }, "filters"), ...m.map(e)];
    return ue && m.length === 0 && s.push(t.jsx(Oe, {
      inFolder: u.pick !== "all"
    }, "empty")), ue || s.push(t.jsx(St, {}, "loading")), re && s.push(t.jsx(i, {
      sx: {
        display: "flex",
        justifyContent: "center",
        py: .5
      },
      children: t.jsx(ot, {
        fullWidth: !0,
        onClick: le,
        disabled: w,
        children: o("customer.loadMore")
      })
    }, "more")), t.jsxs(t.Fragment, {
      children: [t.jsx(Ct, {
        attachHead: !0,
        children: s
      }), h ? t.jsx(st, {
        color: "primary",
        "aria-label": o("customer.recordConsult"),
        onClick: () => a.openCreateBlank(),
        sx: {
          position: "fixed",
          right: 24,
          bottom: "calc(24px + var(--taskbox-fab-lift, 0px))",
          zIndex: 40
        },
        children: t.jsx(nt, {})
      }) : null, ce]
    });
  }
  const He = [{
      id: "consulted_at",
      text: o("customer.consultedAt"),
      width: 150,
      align: "center",
      sortable: !0
    }, {
      id: "customer_name",
      text: o("customer.kindCustomer"),
      ...(k ? {} : {
        width: 140
      }),
      style: {
        fontSize: 14
      },
      render: e => t.jsx(i, {
        component: "span",
        draggable: !0,
        onDragStart: s => s.dataTransfer.setData(rt.consult, String(e.seq)),
        sx: {
          fontWeight: 600,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        },
        children: e.customer_name
      })
    }, {
      id: "channel",
      text: o("customer.channel"),
      width: 110,
      align: "center",
      render: e => o(be[e.channel])
    }, ...(k ? [] : [{
      id: "category_seq",
      text: c.consult_categories.length > 0 ? t.jsx(xe, {
        label: o("customer.category"),
        value: v,
        options: c.consult_categories.map(e => ({
          value: e.seq,
          label: e.name
        })),
        onChange: e => X(e ?? 0)
      }) : o("customer.category"),
      width: 110,
      align: "center",
      render: e => B.get(e.category_seq) ?? ""
    }, {
      id: "content",
      text: o("customer.content"),
      render: e => t.jsx(i, {
        component: "span",
        sx: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        },
        children: Ce(e)
      })
    }]), ...(u.folders.length > 0 && !k ? [{
      id: "folder_seq",
      text: o("customer.folder"),
      width: 150,
      render: e => t.jsx(i, {
        component: "span",
        sx: {
          display: "block",
          color: "text.secondary",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        },
        children: lt(u.folders, e.folder_seq)
      })
    }] : []), ...(k ? [] : [{
      id: "handler_name",
      text: c.members.length > 1 ? t.jsx(xe, {
        label: o("customer.consultStaff"),
        value: j,
        options: c.members.map(e => ({
          value: e.account_seq,
          label: e.name
        })),
        onChange: e => $(e ?? 0)
      }) : o("customer.consultStaff"),
      width: 110,
      align: "center"
    }]), {
      id: "status",
      text: o("customer.status"),
      width: 90,
      align: "center",
      filterOptions: ye(o).filter(e => e.value !== ""),
      filterValues: S ? [S] : [],
      filterMultiple: !1,
      onFilterChange: e => Q(e[0] ?? ""),
      render: e => t.jsx(i, {
        component: "span",
        sx: e.status === "open" ? {
          color: "warning.dark",
          fontWeight: 600
        } : void 0,
        children: o(L[e.status])
      })
    }],
    ze = {
      filter: {
        stateId: "consult-filters",
        showChips: !1,
        groups: [{
          filters: [{
            type: "custom",
            name: "consult-filters",
            node: ie
          }]
        }]
      },
      showSearch: !1,
      collapsible: !1,
      showCollapseButton: !1,
      showClearIcon: !1
    },
    me = t.jsx(mt, {
      onEscape: a.modals.form.close
    });
  return t.jsxs(t.Fragment, {
    children: [t.jsx(i, {
      ref: de,
      sx: {
        position: "relative",
        height: "100%",
        minHeight: 0,
        display: "flex",
        flexDirection: "column"
      },
      onContextMenu: e => {
        const s = e.target.closest?.("tr[data-row-id]")?.getAttribute("data-row-id"),
          r = s ? m.find(d => String(d.seq) === s) : void 0;
        r && (e.preventDefault(), A({
          x: e.clientX,
          y: e.clientY,
          row: r
        }));
      },
      children: t.jsx(at, {
        storageKey: "consult-split",
        header: ze,
        resizable: !0,
        rightPanel: b ? void 0 : me,
        bottomPanel: b ? me : void 0,
        bottomConfig: {
          visible: R,
          ratio: .55,
          minHeight: 320
        },
        bottomResizable: !0,
        rightConfig: {
          visible: q && R,
          ratio: .5,
          minWidth: 420
        },
        leftConfig: {
          minWidth: 360
        },
        tableProps: {
          ...ke,
          scrollbars: Tt,
          mobile: !0,
          variant: "notion",
          columns: He,
          data: m,
          totalCount: Y,
          getRowId: e => String(e.seq),
          rowHeight: ve,
          sortBy: "consulted_at",
          sortDirection: M,
          onSort: (e, s) => Le(s),
          onHeaderContextMenu: ft,
          onRowClick: Ae,
          selectedRowId: f ? String(f) : null,
          selectedRowSx: dt,
          onLoadMore: le,
          loading: w,
          emptyMessage: t.jsx(Oe, {
            inFolder: u.pick !== "all"
          })
        }
      })
    }), ce]
  });
}
export { bo as default };