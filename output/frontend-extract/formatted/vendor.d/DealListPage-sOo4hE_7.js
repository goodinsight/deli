import { j as t, r as s, l as qe } from "./react-CjxcGQav.js";
import { bv as ye, fL as de, D as Ie, nG as We, cz as Ae, bO as H, dv as ze, fo as Ge, w as T, fj as He, B as i, bQ as Ve, F as Ne, d8 as Ye, nD as Qe, nE as $e, lr as Ue, s as C, bf as Ke, L as pe, j9 as Xe, z as Je, bx as ue, fi as Ze } from "../js.d/main-Cm9wS5wt.js";
import { F as et } from "./FolderPickRow-Dqfs_lvL.js";
import { S as tt } from "./selectedRow-CBnSZEGB.js";
import { S as me } from "./SplitDockSlot-B6Q4iP8T.js";
import { u as rt } from "./listViewMode-iTl-2ucA.js";
import { L as ot } from "./ListViewModeToggle-NcYQu7vy.js";
import { H as at } from "./HeadSortFilter-BqVEEiod.js";
import { h as nt } from "./headLabelWidth-Dy3URWDw.js";
import { o as st } from "./HeadFilter-Byax-_oc.js";
import { O as it } from "./OptionToggleGroup-Cvm2wRyq.js";
import { u as lt } from "./useCloseOnChange-Cdlg7Hw5.js";
import { M as ct } from "./MobileListTitleBar-tZ34p2gY.js";
import { d as V, a as dt } from "./dealApi-CnzQt6qM.js";
import { p as pt, b as N, c as fe, w as he, e as ut, D as mt } from "./deal-B3IQ_ej7.js";
import { u as ft, e as ht, f as xt, D as gt } from "./DealFormDialog-Dw6MXJZk.js";
import { u as bt, c as yt } from "./customerMetaStore-Bj9KdRyn.js";
import { u as St, b as _t, a as Ct } from "./MobileCardListLayout-D5_p2Xer.js";
import { T as jt } from "./tableScrollbars-C9bhlJjO.js";
import { u as wt } from "./useColumnWidths-DSAca5rC.js";
import { u as Et } from "./sidebarAction-Z0aCDENX.js";
import "./stylis-DdLD6a3t.js";
import "./profileApi-Btafs-pM.js";
import "./HorizontalSplitOutlined-MKxJhLKp.js";
import "./partnerApi-Dqdgl0Fn.js";
import "./FormValue-CAMilU-0.js";
import "./PropertyContentEditor-DIsouMXi.js";
import "./Title-WCY0exuZ.js";
import "./EventBusyOutlined-DqcCaRMs.js";
import "./TagOutlined-Cfq6rbok.js";
import "./Notes-i9IHZW02.js";
import "./PropertyFields-TuJTG5XK.js";
import "./CategoryOutlined-DcAqxAdD.js";
import "./PhoneOutlined-Bjc_e42S.js";
import "./PhoneAndroidOutlined-DafU-b-9.js";
import "./ChecklistOutlined-PwlgFlaS.js";
import "./GroupOutlined-CA-gNtcg.js";
import "./types-B1OAKh4b.js";
import "./ItemLineFields-DmS0gZQx.js";
import "./propertySections-Bwsl7OH-.js";
import "./mobileSearchOverlay-DYWcMOOb.js";
const xe = 50,
  Dt = 300,
  vt = 48,
  Lt = "#9b9a97",
  Ft = "#f8f8f7",
  Mt = ["select", "multiselect", "person", "bool"];
function ge({
  stage: d
}) {
  const n = d === "contract";
  return t.jsx(i, {
    component: "span",
    sx: {
      display: "inline-flex",
      alignItems: "center",
      px: 1,
      height: 22,
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 600,
      color: n ? "primary.main" : C[600],
      bgcolor: n ? "rgba(37, 99, 235, 0.10)" : C[100],
      whiteSpace: "nowrap"
    },
    children: mt[d]
  });
}
function be({
  searching: d,
  inFolder: n
}) {
  const h = ye();
  return t.jsx(i, {
    sx: {
      py: 6,
      px: 2,
      textAlign: "center",
      color: Lt,
      fontSize: 14,
      wordBreak: "keep-all"
    },
    children: h(d ? "partner.dealSearchEmpty" : n ? "partner.dealFolderEmpty" : "partner.dealListEmpty")
  });
}
function Sr() {
  return t.jsx(kt, {
    party: "partner",
    folders: null
  });
}
function kt({
  party: d,
  folders: n,
  reloadRef: h
}) {
  const a = ye(),
    Se = de("customer"),
    _e = de("partner"),
    x = Se.canWrite || _e.canWrite,
    Ce = wt(`deal.${d}`),
    b = d === "customer",
    j = Ie(),
    [O, je] = rt("deal"),
    P = b && !j && O === "split",
    w = b && !j && O === "split_bottom",
    E = P || w,
    B = n ? We(n.pick) : "all",
    Y = !!(n && n.pick !== "all"),
    D = Ae()?.seq ?? 0,
    [y, Q] = s.useState([]),
    [$, U] = s.useState(0),
    [S, K] = s.useState(!1),
    [v, X] = s.useState(""),
    [L, we] = s.useState(""),
    [Ee, De] = qe(),
    _ = pt(Ee.get(N)),
    J = e => De(r => {
      const o = new URLSearchParams(r);
      return e ? o.set(N, e) : o.delete(N), o;
    }, {
      replace: !0
    }),
    [l, u] = s.useState(null),
    c = ft({
      onSaved: () => Me(),
      defaultFolderSeq: () => n && typeof n.pick == "number" ? n.pick : 0
    }),
    q = s.useRef(1),
    F = s.useRef(0),
    [Z, ee] = s.useState([]),
    ve = s.useMemo(() => Z.filter(e => e.show_in_list), [Z]),
    [I, Le] = s.useState({}),
    [W, te] = s.useState({}),
    [m, A] = s.useState(null),
    {
      members: re
    } = bt();
  s.useEffect(() => {
    let e = !0;
    return yt.dealFields().then(r => e && ee(r)).catch(() => e && ee([])), () => {
      e = !1;
    };
  }, [D]), s.useEffect(() => {
    const e = setTimeout(() => we(v.trim()), Dt);
    return () => clearTimeout(e);
  }, [v]);
  const f = s.useCallback(async e => {
    if (!D) {
      Q([]), U(0);
      return;
    }
    const r = ++F.current,
      o = e === "refresh",
      p = e === "more" ? q.current + 1 : 1;
    o || K(!0);
    try {
      const g = await V.list({
        stage: _,
        search: L,
        party: d,
        folder: B,
        fields: I,
        from: W.from,
        to: W.to,
        sortBy: m?.by,
        sortDir: m?.dir,
        page: p,
        limit: o ? Math.max(1, q.current) * xe : xe
      });
      if (r !== F.current) return;
      o || (q.current = p), Q(Be => e === "more" ? [...Be, ...g.items] : g.items), U(g.total);
    } catch (g) {
      if (r !== F.current || o) return;
      H(g instanceof Error ? g.message : a("partner.dealListLoadFailed"));
    } finally {
      r === F.current && K(!1);
    }
  }, [D, L, _, d, B, I, W, m]);
  h && (h.current = () => {
    f("reload");
  }), ze(["partner_deal", "partner", "customer", "customer_folder"], () => {
    f("refresh"), n?.reload();
  }), lt(B, () => {
    c.modals.form.isOpen && c.modals.form.close();
  }), s.useEffect(() => {
    f("reload");
  }, [f]);
  const oe = y.length < $,
    ae = () => {
      !S && oe && f("more");
    },
    ne = () => b ? c.openCreatePickCustomer() : c.openCreate(),
    se = c.modals.form.isOpen,
    Fe = Number(c.ui.useValue("dealSeq")) || 0,
    z = se ? Fe : 0,
    M = E && se,
    k = P && M,
    R = e => {
      if (E && e.seq === z) {
        c.modals.form.close();
        return;
      }
      c.openEdit(e);
    },
    Me = () => {
      ue({
        message: a("partner.saved"),
        delay: 500
      }), f("reload"), n?.reload();
    },
    ke = async e => {
      if (await Je({
        message: a(`partner.${e.stage}DeleteConfirm`, {
          title: e.title
        }),
        confirmText: a("partner.delete")
      })) try {
        await V.remove(e.seq), ue({
          message: a("partner.deleted"),
          delay: 500
        }), f("reload"), n?.reload();
      } catch (o) {
        H(o instanceof Error ? o.message : a("partner.dealDeleteFailed"));
      }
    },
    Re = async e => {
      try {
        await Xe(await V.pdf(e.seq), dt(e));
      } catch (r) {
        H(r instanceof Error ? r.message : a("partner.quotePdfDownloadFailed"));
      }
    },
    G = t.jsx(i, {
      sx: {
        "& .MuiToggleButtonGroup-root": {
          height: 40,
          flexWrap: "nowrap"
        }
      },
      children: t.jsx(it, {
        size: "medium",
        value: _,
        onChange: e => J(e ?? ""),
        options: fe,
        sx: {
          "& .MuiToggleButtonGroup-grouped": {
            minWidth: 56,
            px: 1.5
          }
        }
      })
    }),
    ie = t.jsxs(Ge, {
      open: !!l,
      point: l?.point ?? null,
      onClose: () => u(null),
      transitionDuration: 0,
      children: [t.jsx(T, {
        onClick: () => {
          l && R(l.row), u(null);
        },
        children: a(x ? "partner.edit" : "partner.open")
      }), t.jsx(T, {
        onClick: () => {
          l && Re(l.row), u(null);
        },
        children: a("partner.quotePdf")
      }), n && l && l.row.folder_seq > 0 && x ? t.jsx(T, {
        onClick: () => {
          l && n.moveItems([l.row.seq], 0), u(null);
        },
        children: a("partner.removeFromFolder")
      }) : null, x ? t.jsx(He, {}) : null, x ? t.jsx(T, {
        onClick: () => {
          l && ke(l.row), u(null);
        },
        sx: {
          color: "error.main"
        },
        children: a("partner.delete")
      }) : null]
    }),
    le = t.jsx(gt, {
      controller: c,
      presentation: E ? "dock" : "drawer"
    }),
    Te = e => t.jsx(i, {
      component: "button",
      "aria-label": a("partner.dealMenu"),
      onClick: r => {
        r.stopPropagation();
        const o = r.currentTarget.getBoundingClientRect();
        u({
          point: {
            x: o.left,
            y: o.bottom + 2
          },
          row: e
        });
      },
      sx: {
        border: 0,
        bgcolor: "transparent",
        p: .5,
        cursor: "pointer",
        color: C[500],
        display: "flex"
      },
      children: t.jsx(Ze, {
        fontSize: "small"
      })
    }),
    ce = St(S);
  if (Et(!j && x ? {
    label: a("partner.quoteCreate"),
    onClick: () => ne(),
    fab: !M
  } : null), j) {
    const e = o => t.jsxs(i, {
        role: "button",
        tabIndex: 0,
        onClick: () => R(o),
        onKeyDown: p => {
          (p.key === "Enter" || p.key === " ") && (p.preventDefault(), R(o));
        },
        sx: {
          display: "flex",
          alignItems: "flex-start",
          gap: 1,
          px: 2,
          py: 1.5,
          cursor: "pointer",
          userSelect: "none",
          "&:active": {
            bgcolor: Ft
          }
        },
        children: [t.jsxs(i, {
          sx: {
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: .5
          },
          children: [t.jsxs(i, {
            sx: {
              display: "flex",
              alignItems: "center",
              gap: .75,
              minWidth: 0
            },
            children: [t.jsx(ge, {
              stage: o.stage
            }), t.jsx(pe, {
              noWrap: !0,
              sx: {
                fontSize: 15,
                fontWeight: 600,
                minWidth: 0
              },
              children: o.title
            })]
          }), t.jsxs(i, {
            sx: {
              display: "flex",
              gap: 1.25,
              fontSize: 14,
              color: "text.secondary",
              flexWrap: "wrap"
            },
            children: [t.jsx("span", {
              children: ut(o)
            }), t.jsx("span", {
              children: o.deal_date
            }), t.jsx(i, {
              component: "span",
              sx: {
                fontWeight: 600,
                color: "text.primary"
              },
              children: he(o.total_amount)
            })]
          })]
        }), Te(o)]
      }, o.seq),
      r = [t.jsx(ct, {
        searchValue: v,
        onSearchChange: X,
        searchPlaceholder: a("partner.searchDealTitle"),
        below: n ? t.jsxs(i, {
          sx: {
            display: "flex",
            flexDirection: "column",
            gap: 2
          },
          children: [t.jsx(et, {
            controller: n
          }), G]
        }) : t.jsx(i, {
          children: G
        })
      }, "title"), ...y.map(e)];
    return ce && y.length === 0 && r.push(t.jsx(be, {
      searching: !!L,
      inFolder: Y
    }, "empty")), ce || r.push(t.jsx(Ct, {}, "loading")), oe && r.push(t.jsx(i, {
      sx: {
        display: "flex",
        justifyContent: "center",
        py: .5
      },
      children: t.jsx(Ve, {
        fullWidth: !0,
        onClick: ae,
        disabled: S,
        children: a("partner.loadMore")
      })
    }, "more")), t.jsxs(t.Fragment, {
      children: [t.jsx(_t, {
        attachHead: !0,
        children: r
      }), x ? t.jsx(Ne, {
        color: "primary",
        "aria-label": a("partner.quoteCreate"),
        onClick: ne,
        sx: {
          position: "fixed",
          right: 24,
          bottom: "calc(24px + var(--taskbox-fab-lift, 0px))",
          zIndex: 40
        },
        children: t.jsx(Ye, {})
      }) : null, ie, le]
    });
  }
  const Oe = [...(k ? [] : [{
      id: "deal_no",
      text: a("partner.contractNo"),
      width: 140,
      sortable: !0,
      align: "center",
      render: e => t.jsx(i, {
        component: "span",
        sx: {
          whiteSpace: "nowrap",
          fontVariantNumeric: "tabular-nums"
        },
        children: e.deal_no
      })
    }]), {
      id: "stage",
      text: a("partner.stage"),
      width: 80,
      align: "center",
      filterOptions: fe.filter(e => e.value !== ""),
      filterValues: _ ? [_] : [],
      filterMultiple: !1,
      onFilterChange: e => J(e[0] ?? ""),
      render: e => t.jsx(ge, {
        stage: e.stage
      })
    }, {
      id: "title",
      text: a("partner.dealTitle"),
      sortable: !0,
      minWidth: 200,
      style: {
        fontSize: 14
      },
      render: e => t.jsx(i, {
        component: "span",
        draggable: !!n,
        onDragStart: n ? r => r.dataTransfer.setData(Qe.deal, String(e.seq)) : void 0,
        title: e.title,
        sx: {
          display: "block",
          minWidth: 0,
          fontWeight: 600,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        },
        children: e.title
      })
    }, b ? {
      id: "customer_name",
      text: a("partner.customer"),
      width: 180,
      align: "center",
      sortable: !0
    } : {
      id: "partner_name",
      text: a("partner.partner"),
      width: 180,
      align: "center",
      sortable: !0
    }, ...(n && n.folders.length > 0 && !k ? [{
      id: "folder_seq",
      text: a("partner.folder"),
      width: 150,
      render: e => t.jsx(i, {
        component: "span",
        sx: {
          color: "text.secondary",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        },
        children: $e(n.folders, e.folder_seq)
      })
    }] : []), ...(k ? [] : [{
      id: "deal_date",
      text: a("partner.date"),
      width: 120,
      align: "center",
      sortable: !0
    }]), ...ve.map(e => ({
      id: `extra-${e.field_key}`,
      text: t.jsx(at, {
        label: e.label,
        menuId: e.field_key,
        sort: {
          active: m?.by === `extra:${e.field_key}` ? m.dir : null,
          onChange: r => A(r ? {
            by: `extra:${e.field_key}`,
            dir: r
          } : null)
        },
        filter: Mt.includes(e.field_type) ? {
          options: [...xt(e, re), {
            value: "",
            label: a("partner.empty")
          }],
          value: I[e.field_key] ?? [],
          onChange: r => Le(o => ({
            ...o,
            [e.field_key]: r
          }))
        } : void 0
      }),
      width: Math.max(e.field_type === "select" || e.field_type === "multiselect" || e.field_type === "money" ? 140 : 110, nt(e.label, 2)),
      align: e.field_type === "money" ? "right" : "center",
      render: r => t.jsx(ht, {
        field: e,
        value: r.extra[e.field_key],
        members: re
      })
    })), {
      id: "total_amount",
      text: a("partner.total"),
      width: 140,
      sortable: !0,
      align: "right",
      render: e => e.total_amount ? he(e.total_amount) : ""
    }, ...(k ? [] : [{
      id: "created_by_name",
      text: a("partner.author"),
      width: 100,
      align: "center"
    }])],
    Pe = {
      filter: {
        stateId: "partner-deal-filters",
        showChips: !1,
        groups: [{
          filters: [{
            type: "custom",
            name: "deal-stage",
            node: G
          }, {
            name: "deal_date_range",
            title: a("partner.date"),
            type: "date-range",
            showBadge: !0
          }]
        }],
        onChange: e => {
          const r = e.deal_date_range,
            o = Array.isArray(r) ? r[0] : r;
          te({
            from: o?.min || void 0,
            to: o?.max || void 0
          });
        },
        onReset: () => te({})
      },
      ...(b ? {
        right: t.jsx(ot, {
          value: O,
          onChange: je,
          withBottom: !0
        })
      } : {}),
      showSearch: !0,
      searchValue: v,
      searchPlaceholder: a("partner.searchDealTitle"),
      onSearchChange: X,
      searchLoading: S,
      collapsible: !1,
      showCollapseButton: !1,
      showClearIcon: !1
    };
  return t.jsxs(t.Fragment, {
    children: [t.jsxs(i, {
      sx: {
        position: "relative",
        height: "100%",
        minHeight: 0,
        display: "flex",
        flexDirection: "column"
      },
      onContextMenu: e => {
        const r = e.target.closest?.("tr[data-row-id]")?.getAttribute("data-row-id"),
          o = r ? y.find(p => String(p.seq) === r) : void 0;
        o && (e.preventDefault(), u({
          point: {
            x: e.clientX,
            y: e.clientY
          },
          row: o
        }));
      },
      children: [t.jsx(Ue, {
        storageKey: "deal-split",
        header: Pe,
        resizable: !0,
        rightPanel: E && !w ? t.jsx(me, {
          onEscape: c.modals.form.close
        }) : void 0,
        bottomPanel: w ? t.jsx(me, {
          onEscape: c.modals.form.close
        }) : void 0,
        rightConfig: {
          visible: P && M,
          ratio: .5,
          minWidth: 420
        },
        bottomConfig: {
          visible: w && M,
          ratio: .55,
          minHeight: 320
        },
        bottomResizable: !0,
        leftConfig: {
          minWidth: 360
        },
        tableProps: {
          ...Ce,
          scrollbars: jt,
          mobile: !0,
          variant: "notion",
          columns: Oe,
          data: y,
          totalCount: $,
          getRowId: e => String(e.seq),
          rowHeight: vt,
          sortBy: m?.by,
          sortDirection: m?.dir,
          onSort: (e, r) => A({
            by: e,
            dir: r
          }),
          onSortClear: () => A(null),
          onHeaderContextMenu: st,
          onRowClick: R,
          selectedRowId: z ? String(z) : null,
          selectedRowSx: tt,
          onLoadMore: ae,
          loading: S,
          emptyMessage: t.jsx(be, {
            searching: !!L,
            inFolder: Y
          })
        }
      }), D ? null : t.jsxs(i, {
        sx: {
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          color: C[500],
          bgcolor: "background.paper",
          "& .MuiSvgIcon-root": {
            fontSize: 48,
            color: C[300]
          }
        },
        children: [t.jsx(Ke, {}), t.jsx(pe, {
          sx: {
            fontSize: "0.9rem"
          },
          children: a("partner.quoteNeedOrg")
        })]
      })]
    }), ie, le]
  });
}
export { kt as DealListView, Sr as default };