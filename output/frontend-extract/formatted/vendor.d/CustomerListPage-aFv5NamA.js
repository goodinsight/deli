import { r as s, l as at, j as t } from "./react-CjxcGQav.js";
import { bv as He, fL as it, D as lt, cz as ct, nG as ut, bO as mt, bT as dt, dv as pt, aq as ft, B as m, bQ as ve, F as gt, d8 as we, dC as ht, ce as Fe, cf as Oe, nD as xt, nE as Ct, bH as _t, K as St, lr as yt, s as Me, k as bt, L as ee, fo as Rt, gZ as T, bA as jt, S as Et, bJ as vt, h0 as ke, bx as wt } from "../js.d/main-Cm9wS5wt.js";
import { F as Ft } from "./FolderOffOutlined-B0Ny3dYE.js";
import { S as Ot } from "./selectedRow-CBnSZEGB.js";
import { S as Mt } from "./SplitDockSlot-B6Q4iP8T.js";
import { u as kt } from "./useCloseOnChange-Cdlg7Hw5.js";
import { H as te, o as Lt } from "./HeadFilter-Byax-_oc.js";
import { H as Le } from "./HeadSortFilter-BqVEEiod.js";
import { h as qt } from "./headLabelWidth-Dy3URWDw.js";
import { L as It } from "./ListViewModeToggle-NcYQu7vy.js";
import { u as Tt } from "./useScrollRowIntoView-_Wt5tTDd.js";
import { u as Pt, a as Dt, b as Bt } from "./MobileCardListLayout-D5_p2Xer.js";
import { M as At } from "./MobileListTitleBar-tZ34p2gY.js";
import { u as Ut, c as qe } from "./customerMetaStore-Bj9KdRyn.js";
import { u as Wt, C as Nt } from "./ConsultHistoryPanel-X3hMdgAl.js";
import { u as Ht, C as Yt } from "./CustomerFormDialog-pXADTEX2.js";
import { u as zt, a as Vt, F as Kt } from "./FolderDialog-CQcho59p.js";
import { u as Qt, e as $t, f as Gt, D as Xt } from "./DealFormDialog-Dw6MXJZk.js";
import { u as Jt } from "./listViewMode-iTl-2ucA.js";
import { n as Ie, o as Te, p as Pe, q as De, r as Zt, b as eo, s as Be, t as oe, f as to, d as oo } from "./types-B1OAKh4b.js";
import { F as ro } from "./FolderPickRow-Dqfs_lvL.js";
import { T as so } from "./tableScrollbars-C9bhlJjO.js";
import { u as no } from "./useColumnWidths-DSAca5rC.js";
import { u as ao } from "./sidebarAction-Z0aCDENX.js";
import "./stylis-DdLD6a3t.js";
import "./HorizontalSplitOutlined-MKxJhLKp.js";
import "./OptionToggleGroup-Cvm2wRyq.js";
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
import "./bookingApi-DC6gLfSO.js";
import "./profileApi-Btafs-pM.js";
import "./types-CVXtrYKe.js";
import "./SectionCreateButton-DLuyExHb.js";
import "./StopCircleOutlined-vWHA8Xrv.js";
import "./MeetingRecordingPlayer-vear-u6W.js";
import "./meetingsApi-CCkjq69B.js";
import "./nativeRecordingSync-CMpETFg9.js";
import "./pendingRecordings-DpKJ8Y2R.js";
import "./useFileViewer-B-2ewnr3.js";
import "./documentViewerStore-BlSjH3BG.js";
import "./partnerApi-Dqdgl0Fn.js";
import "./EventBusyOutlined-DqcCaRMs.js";
import "./TagOutlined-Cfq6rbok.js";
import "./Notes-i9IHZW02.js";
import "./PhoneOutlined-Bjc_e42S.js";
import "./PhoneAndroidOutlined-DafU-b-9.js";
import "./ChecklistOutlined-PwlgFlaS.js";
import "./GroupOutlined-CA-gNtcg.js";
import "./ItemLineFields-DmS0gZQx.js";
const Ae = {
    서울: "서울",
    서울특별시: "서울",
    서울시: "서울",
    부산: "부산",
    부산광역시: "부산",
    부산시: "부산",
    대구: "대구",
    대구광역시: "대구",
    대구시: "대구",
    인천: "인천",
    인천광역시: "인천",
    인천시: "인천",
    광주: "광주",
    광주광역시: "광주",
    대전: "대전",
    대전광역시: "대전",
    대전시: "대전",
    울산: "울산",
    울산광역시: "울산",
    울산시: "울산",
    세종: "세종",
    세종특별자치시: "세종",
    세종시: "세종"
  },
  io = new Set(["경기", "경기도", "강원", "강원도", "강원특별자치도", "충북", "충청북도", "충남", "충청남도", "전북", "전라북도", "전북특별자치도", "전남", "전라남도", "경북", "경상북도", "경남", "경상남도", "제주", "제주도", "제주특별자치도"]);
function lo(o) {
  const p = String(o ?? "").replace(/^\s*[([]?\d{5}[)\]]?\s*/, "").trim().split(/\s+/).filter(Boolean),
    [u, d] = p;
  return u ? Ae[u] ? Ae[u] : io.has(u) ? d && /[시군]$/.test(d) && d.length >= 2 ? d.slice(0, -1) : u.replace(/(특별자치도|도)$/, "") || u : /[시군]$/.test(u) && u.length >= 3 ? u.slice(0, -1) : "" : "";
}
const co = ["select", "multiselect", "person", "bool"],
  Ue = 50,
  uo = 300,
  We = 48,
  mo = "#9b9a97",
  po = "#f8f8f7";
function Ne({
  searching: o,
  inFolder: p
}) {
  const u = He();
  return t.jsx(m, {
    sx: {
      py: 6,
      px: 2,
      textAlign: "center",
      color: mo,
      fontSize: 14,
      wordBreak: "keep-all"
    },
    children: u(o ? "customer.noCustomerFoundPeriod" : p ? "customer.noCustomersInFolder" : "customer.noCustomers")
  });
}
function fo(o) {
  if (o.field_type !== "select" && o.field_type !== "multiselect") return 110;
  const p = Array.isArray(o.options) ? o.options.map(String) : [];
  if (p.length === 0) return 140;
  const u = Math.max(...p.map(d => [...d].reduce((E, f) => E + (/[ㄱ-힝]/.test(f) ? 15 : 9), 0)));
  return Math.min(140, Math.ceil(u + 16 + 28));
}
function yr() {
  const o = He(),
    p = it("customer").canWrite,
    u = no("customer.list"),
    d = lt(),
    E = ct(),
    f = E?.seq ?? 0,
    i = Ut(),
    [P, Ye] = Jt("customer"),
    R = !d && P === "split",
    D = !d && P === "split_bottom",
    B = R || D,
    [h, re] = s.useState([]),
    [A, se] = s.useState(0),
    [j, ne] = s.useState(!1),
    [v, ae] = s.useState(""),
    [w, ze] = s.useState(""),
    [F, ie] = s.useState(0),
    [U, Ve] = s.useState(0),
    [W, Ke] = s.useState(""),
    [le, ce] = s.useState({}),
    [N, Qe] = s.useState({}),
    [H, $e] = s.useState([]),
    [Ge, ue] = s.useState([]),
    [x, me] = s.useState({
      by: "created_time",
      dir: "desc"
    }),
    de = s.useRef(() => {}),
    g = zt("customer", {
      onMoved: () => de.current()
    }),
    Y = ut(g.pick);
  Vt(g);
  const z = s.useRef(1),
    O = s.useRef(0);
  s.useEffect(() => {
    const e = setTimeout(() => ze(v.trim()), uo);
    return () => clearTimeout(e);
  }, [v]);
  const S = s.useCallback(async e => {
    if (!f) {
      re([]), se(0);
      return;
    }
    const r = ++O.current,
      n = e === "refresh",
      a = e === "more" ? z.current + 1 : 1;
    n || ne(!0);
    try {
      const c = await qe.list({
        categorySeq: F,
        managerAccountSeq: U,
        sortBy: x.by,
        sortDir: x.dir,
        folder: Y,
        search: w,
        deal: W,
        ranges: le,
        fields: N,
        regions: H,
        page: a,
        limit: n ? Math.max(1, z.current) * Ue : Ue
      });
      if (r !== O.current) return;
      n || (z.current = a), re(nt => e === "more" ? [...nt, ...c.items] : c.items), se(c.total);
    } catch (c) {
      if (r !== O.current || n) return;
      mt(c instanceof Error ? c.message : dt("customer.loadListFailed"));
    } finally {
      r === O.current && ne(!1);
    }
  }, [f, w, F, U, x, Y, W, le, N, H]);
  de.current = () => {
    S("reload");
  };
  const M = s.useCallback(async () => {
    if (!f) {
      ue([]);
      return;
    }
    try {
      ue(await qe.regions());
    } catch {}
  }, [f]);
  s.useEffect(() => {
    M();
  }, [M]), s.useEffect(() => {
    S("reload");
  }, [S]);
  const l = Ht({
      onChanged: () => {
        S("reload"), g.reload(), M();
      },
      defaultFolderSeq: () => typeof g.pick == "number" ? g.pick : 0
    }),
    pe = s.useRef(null),
    V = !!l.ui.useValue("registerReading"),
    C = Wt({
      onChanged: () => {
        l.reloadConsults();
      }
    }),
    k = Qt({
      onSaved: () => {
        l.reloadDeals();
      }
    });
  pt(["customer", "customer_phone", "consult", "partner_deal", "customer_folder"], e => {
    S("refresh"), ke(e, "customer", "customer_folder") && g.reload(), ke(e, "customer") && M();
  }), kt(Y, () => {
    l.modals.form.isOpen && l.modals.form.close(), C.modals.form.isOpen && C.modals.form.close(), k.modals.form.isOpen && k.modals.form.close();
  });
  const [L, y] = at(),
    K = Number(L.get(Ie)) || 0,
    fe = s.useRef(l.openBySeq);
  fe.current = l.openBySeq, s.useEffect(() => {
    !K || !f || !i.loaded || (fe.current(K), y(e => {
      const r = new URLSearchParams(e);
      return r.delete(Ie), r;
    }, {
      replace: !0
    }));
  }, [K, f, i.loaded, y]);
  const Q = L.get(Te) ?? "",
    ge = s.useRef(l.openCreateWithPhone);
  ge.current = l.openCreateWithPhone, s.useEffect(() => {
    !Q || !f || !i.loaded || (ge.current(Q), y(e => {
      const r = new URLSearchParams(e);
      return r.delete(Te), r;
    }, {
      replace: !0
    }));
  }, [Q, f, i.loaded, y]);
  const $ = L.get(Pe),
    he = L.get(De) ?? "",
    G = s.useRef(C);
  G.current = C, s.useEffect(() => {
    if ($ === null || !f || !i.loaded) return;
    const e = Number($) || 0;
    e ? G.current.openCreate({
      seq: e,
      name: he
    }, {
      channel: "call_in"
    }) : G.current.openCreateBlank(), y(r => {
      const n = new URLSearchParams(r);
      return n.delete(Pe), n.delete(De), n;
    }, {
      replace: !0
    });
  }, [$, he, f, i.loaded, y]);
  const X = s.useMemo(() => new Map(i.categories.map(e => [e.seq, e.name])), [i.categories]),
    J = s.useMemo(() => new Map(i.members.map(e => [e.account_seq, e.name])), [i.members]),
    xe = s.useMemo(() => i.fields.filter(e => e.show_in_list), [i.fields]),
    Ce = i.fields.some(e => e.field_key === Zt && e.enabled),
    _e = h.length < A,
    Se = () => {
      !j && _e && S("more");
    },
    Xe = i.categories.length > 0 ? t.jsx(ft, {
      size: d ? void 0 : "small",
      value: F || "",
      options: i.categories.map(e => ({
        value: e.seq,
        label: e.name
      })),
      emptyLabel: o("customer.allCategories"),
      onChange: e => ie(Number(e.target.value) || 0),
      fullWidth: d,
      formControlProps: {
        sx: {
          width: d ? "100%" : 140,
          flexShrink: 0
        }
      },
      sx: d ? void 0 : {
        height: 40
      }
    }) : null,
    ye = t.jsxs(t.Fragment, {
      children: [t.jsx(Yt, {
        controller: l,
        consultController: C,
        dealController: k,
        meta: i,
        rows: h,
        docked: B
      }), t.jsx(Nt, {
        controller: C,
        meta: i,
        presentation: R ? "dialog" : "drawer"
      }), t.jsx(Xt, {
        controller: k,
        presentation: R ? "dialog" : "drawer"
      }), t.jsx(Kt, {
        controller: g
      })]
    }),
    be = Pt(j),
    Je = l.ui.useValue("target"),
    _ = l.modals.form.isOpen ? Je?.seq ?? 0 : 0,
    Re = s.useRef(null);
  Tt(Re, _ ? String(_) : "", _ ? h.findIndex(e => e.seq === _) : -1, We);
  const q = B && l.modals.form.isOpen,
    je = R && q,
    Ze = e => {
      if (B && e.seq === _) {
        l.modals.form.close();
        return;
      }
      l.openEdit(e);
    },
    [b, Z] = s.useState(null),
    I = e => {
      const r = b?.row;
      Z(null), r && e(r);
    };
  if (ao(!d && p ? {
    label: o("customer.registerCustomer"),
    onClick: () => l.openCreate(),
    fab: !q
  } : null), d) {
    const e = n => t.jsxs(m, {
        role: "button",
        tabIndex: 0,
        onClick: () => l.openEdit(n),
        onKeyDown: a => {
          (a.key === "Enter" || a.key === " ") && (a.preventDefault(), l.openEdit(n));
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
            bgcolor: po
          }
        },
        children: [t.jsxs(m, {
          sx: {
            display: "flex",
            alignItems: "baseline",
            gap: 1
          },
          children: [t.jsx(ee, {
            sx: {
              fontSize: 15,
              fontWeight: 600
            },
            children: n.name
          }), X.get(n.category_seq) ? t.jsx(ee, {
            sx: {
              fontSize: 14,
              color: "text.secondary"
            },
            children: X.get(n.category_seq)
          }) : null]
        }), t.jsxs(m, {
          sx: {
            display: "flex",
            flexWrap: "wrap",
            columnGap: 1.25,
            fontSize: 14,
            color: "text.secondary"
          },
          children: [n.phone ? t.jsx("span", {
            children: n.phone
          }) : null, J.get(n.manager_account_seq) ? t.jsx("span", {
            children: o("customer.managerWithName", {
              name: J.get(n.manager_account_seq)
            })
          }) : null, xe.map(a => {
            const c = to(a, n.extra[a.field_key], i.members);
            return c ? t.jsxs("span", {
              children: [a.label, " ", c]
            }, a.seq) : null;
          })]
        })]
      }, n.seq),
      r = [t.jsx(At, {
        searchValue: v,
        onSearchChange: ae,
        searchPlaceholder: o("customer.searchPlaceholder"),
        below: t.jsxs(m, {
          sx: {
            display: "flex",
            flexDirection: "column",
            gap: 2
          },
          children: [t.jsx(ro, {
            controller: g
          }), Xe]
        })
      }, "title"), ...h.map(e)];
    return be && h.length === 0 && r.push(t.jsx(Ne, {
      searching: !!w,
      inFolder: g.pick !== "all"
    }, "empty")), be || r.push(t.jsx(Dt, {}, "loading")), _e && r.push(t.jsx(m, {
      sx: {
        display: "flex",
        justifyContent: "center",
        py: .5
      },
      children: t.jsx(ve, {
        fullWidth: !0,
        onClick: Se,
        disabled: j,
        children: o("customer.loadMore")
      })
    }, "more")), t.jsxs(t.Fragment, {
      children: [t.jsx(Bt, {
        attachHead: !0,
        children: r
      }), p ? t.jsx(gt, {
        color: "primary",
        "aria-label": o("customer.registerCustomer"),
        onClick: l.openCreate,
        sx: {
          position: "fixed",
          right: 24,
          bottom: "calc(24px + var(--taskbox-fab-lift, 0px))",
          zIndex: 40
        },
        children: t.jsx(we, {})
      }) : null, ye]
    });
  }
  const et = new Set(eo.filter(e => e.feature && !ht(E, e.feature)).map(e => e.id)),
    tt = e => {
      const r = oo(i.fields.map(a => a.field_key), i.list_column_order),
        n = new Map(r.map((a, c) => [a, c]));
      return e.map((a, c) => ({
        column: a,
        key: n.get(String(a.id)) ?? r.length + c
      })).sort((a, c) => a.key - c.key).map(a => a.column);
    },
    ot = [{
      id: "region",
      text: t.jsx(Le, {
        label: o("customer.region"),
        menuId: "region",
        filter: {
          options: Ge.map(e => ({
            value: e.region,
            label: e.region || o("customer.noRegion"),
            count: e.count
          })),
          value: H,
          onChange: $e
        }
      }),
      width: 90,
      align: "center",
      render: e => e.region || lo(e.address)
    }, {
      id: "manager_account_seq",
      text: i.members.length > 1 ? t.jsx(te, {
        label: o("customer.manager"),
        value: U,
        options: i.members.map(e => ({
          value: e.account_seq,
          label: e.name
        })),
        onChange: e => Ve(e ?? 0)
      }) : o("customer.manager"),
      width: 110,
      align: "center",
      render: e => J.get(e.manager_account_seq) ?? ""
    }, ...xe.map(e => ({
      id: `extra-${e.field_key}`,
      text: t.jsx(Le, {
        label: e.label,
        menuId: e.field_key,
        sort: {
          active: x.by === `extra:${e.field_key}` ? x.dir : null,
          onChange: r => me(r ? {
            by: `extra:${e.field_key}`,
            dir: r
          } : {
            by: "created_time",
            dir: "desc"
          })
        },
        filter: co.includes(e.field_type) ? {
          options: [...Gt(e, i.members), {
            value: "",
            label: o("customer.empty")
          }],
          value: N[e.field_key] ?? [],
          onChange: r => Qe(n => ({
            ...n,
            [e.field_key]: r
          }))
        } : void 0
      }),
      width: Math.max(fo(e), qt(e.label, 2)),
      align: "center",
      render: r => t.jsx($t, {
        field: e,
        value: r.extra[e.field_key],
        members: i.members
      })
    })), {
      id: "deal_count",
      text: t.jsx(te, {
        label: o("customer.deal"),
        value: W,
        options: Object.keys(Be).map(e => ({
          value: e,
          label: o(Be[e])
        })),
        onChange: e => Ke(e ?? "")
      }),
      width: 90,
      align: "center",
      render: e => e.contract_count > 0 ? t.jsx(m, {
        component: "span",
        sx: {
          color: "primary.main",
          fontWeight: 600
        },
        children: o("customer.contractCount", {
          count: e.contract_count
        })
      }) : e.deal_count > 0 ? t.jsx(m, {
        component: "span",
        sx: {
          color: "text.secondary"
        },
        children: o("customer.quoteCount", {
          count: e.deal_count
        })
      }) : ""
    }, {
      id: "last_consult_at",
      text: o("customer.lastConsult"),
      width: 110,
      align: "center",
      render: e => t.jsx(m, {
        component: "span",
        sx: {
          color: "text.secondary"
        },
        children: e.last_consult_at.slice(0, 10)
      })
    }, {
      id: "created_time",
      text: o("customer.createdDate"),
      width: 120,
      align: "center",
      sortable: !0,
      render: e => t.jsx(m, {
        component: "span",
        sx: {
          color: "text.secondary"
        },
        children: e.created_time.slice(0, 10)
      })
    }, {
      id: "visit_count",
      text: o("customer.visits"),
      width: 80,
      align: "center",
      render: e => e.visit_count > 0 ? o("customer.visitCount", {
        count: e.visit_count
      }) : ""
    }, {
      id: "sales_total",
      text: o("customer.salesTotal"),
      width: 120,
      align: "right",
      render: e => e.sales_total > 0 ? o("customer.wonAmount", {
        amount: e.sales_total.toLocaleString(Fe(Oe()))
      }) : ""
    }, {
      id: "last_visit_at",
      text: o("customer.lastVisit"),
      width: 110,
      align: "center",
      render: e => t.jsx(m, {
        component: "span",
        sx: {
          color: "text.secondary"
        },
        children: e.last_visit_at
      })
    }],
    rt = [{
      id: "no",
      text: o("customer.rowNo"),
      width: 64,
      align: "center",
      render: (e, r) => t.jsx(m, {
        component: "span",
        sx: {
          color: "text.secondary"
        },
        children: r + 1
      })
    }, {
      id: "name",
      text: o("customer.customerNameWithTotal", {
        total: A.toLocaleString(Fe(Oe()))
      }),
      width: 180,
      sortable: !0,
      style: {
        fontSize: 15
      },
      render: e => t.jsx(m, {
        component: "span",
        draggable: !0,
        onDragStart: r => r.dataTransfer.setData(xt.customer, String(e.seq)),
        sx: {
          fontWeight: 600,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        },
        children: e.name
      })
    }, ...(g.folders.length > 0 && !je ? [{
      id: "folder_seq",
      text: o("customer.folder"),
      width: 160,
      render: e => t.jsx(m, {
        component: "span",
        sx: {
          color: "text.secondary",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        },
        children: Ct(g.folders, e.folder_seq)
      })
    }] : []), {
      id: "category_seq",
      text: i.categories.length > 0 ? t.jsx(te, {
        label: o("customer.category"),
        value: F,
        options: i.categories.map(e => ({
          value: e.seq,
          label: e.name
        })),
        onChange: e => ie(e ?? 0)
      }) : o("customer.category"),
      width: 120,
      align: "center",
      render: e => X.get(e.category_seq) ?? ""
    }, ...tt([{
      id: "phone",
      text: o("customer.phone"),
      width: 150,
      align: "center"
    }, ...(je ? [] : ot)])].filter(e => !i.list_hidden_columns.includes(String(e.id)) && !et.has(String(e.id))),
    st = {
      right: t.jsx(It, {
        value: P,
        onChange: Ye,
        withBottom: !0
      }),
      left: Ce && p ? t.jsxs(m, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 2
        },
        children: [Ce && p ? t.jsx(_t, {
          title: o("customer.registerUploadTooltip"),
          arrow: !0,
          disableInteractive: !0,
          children: t.jsx(ve, {
            variant: "outlined",
            startIcon: V ? t.jsx(St, {
              size: 18
            }) : t.jsx(we, {}),
            disabled: V,
            onClick: () => pe.current?.click(),
            children: o(V ? "customer.readingRegister" : "customer.buildingFacilityRegister")
          })
        }) : null, t.jsx("input", {
          ref: pe,
          type: "file",
          hidden: !0,
          accept: "application/pdf,image/*",
          onChange: e => {
            const r = e.target.files?.[0];
            e.target.value = "", r && l.openCreateFromRegister(r);
          }
        })]
      }) : void 0,
      filter: {
        stateId: "customer-filters",
        showChips: !1,
        groups: [{
          filters: [...Object.keys(oe).map(e => ({
            name: `${e}_range`,
            title: o(oe[e]),
            type: "date-range",
            showBadge: !0
          }))]
        }],
        onChange: e => {
          const r = {};
          for (const n of Object.keys(oe)) {
            const a = e[`${n}_range`],
              c = Array.isArray(a) ? a[0] : a;
            (c?.min || c?.max) && (r[n] = {
              from: c.min || void 0,
              to: c.max || void 0
            });
          }
          ce(r);
        },
        onReset: () => ce({})
      },
      showSearch: !0,
      searchValue: v,
      searchPlaceholder: o("customer.searchPlaceholder"),
      onSearchChange: ae,
      searchLoading: j,
      collapsible: !1,
      showCollapseButton: !1,
      showClearIcon: !0
    },
    Ee = t.jsx(Mt, {
      onEscape: l.modals.form.close
    });
  return t.jsxs(t.Fragment, {
    children: [t.jsxs(m, {
      ref: Re,
      sx: {
        position: "relative",
        height: "100%",
        minHeight: 0,
        display: "flex",
        flexDirection: "column"
      },
      onContextMenu: e => {
        const r = e.target.closest?.("tr[data-row-id]")?.getAttribute("data-row-id"),
          n = r ? h.find(a => String(a.seq) === r) : void 0;
        n && (e.preventDefault(), Z({
          x: e.clientX,
          y: e.clientY,
          row: n
        }));
      },
      children: [t.jsx(yt, {
        storageKey: "customer-split",
        header: st,
        resizable: !0,
        rightPanel: D ? void 0 : Ee,
        bottomPanel: D ? Ee : void 0,
        bottomConfig: {
          visible: q,
          ratio: .55,
          minHeight: 320
        },
        bottomResizable: !0,
        rightConfig: {
          visible: R && q,
          ratio: .5,
          minWidth: 420
        },
        leftConfig: {
          minWidth: 360
        },
        tableProps: {
          ...u,
          scrollbars: so,
          mobile: !0,
          variant: "notion",
          columns: rt,
          data: h,
          totalCount: A,
          getRowId: e => String(e.seq),
          rowHeight: We,
          sortBy: x.by,
          sortDirection: x.dir,
          onSort: (e, r) => me({
            by: e === "name" ? "name" : "created_time",
            dir: r
          }),
          onHeaderContextMenu: Lt,
          onRowClick: Ze,
          selectedRowId: _ ? String(_) : null,
          selectedRowSx: Ot,
          onLoadMore: Se,
          loading: j,
          emptyMessage: t.jsx(Ne, {
            searching: !!w,
            inFolder: g.pick !== "all"
          })
        }
      }), f ? null : t.jsxs(m, {
        sx: {
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          color: Me[500],
          bgcolor: "background.paper",
          "& .MuiSvgIcon-root": {
            fontSize: 48,
            color: Me[300]
          }
        },
        children: [t.jsx(bt, {}), t.jsx(ee, {
          sx: {
            fontSize: "0.9rem"
          },
          children: o("customer.createOrgFirst")
        })]
      })]
    }), ye, t.jsxs(Rt, {
      open: !!b,
      onClose: () => Z(null),
      point: b,
      children: [t.jsx(T, {
        icon: t.jsx(jt, {}),
        onClick: () => I(e => l.openEdit(e)),
        children: o("customer.openCustomerInfo")
      }), p ? t.jsx(T, {
        icon: t.jsx(Et, {}),
        onClick: () => I(e => C.openCreate({
          seq: e.seq,
          name: e.name
        })),
        children: o("customer.recordConsult")
      }) : null, b?.row.phone ? t.jsx(T, {
        icon: t.jsx(vt, {}),
        onClick: () => I(e => {
          navigator.clipboard?.writeText(e.phone), wt({
            message: o("customer.phoneCopied"),
            delay: 800
          });
        }),
        children: o("customer.copyPhone")
      }) : null, b && b.row.folder_seq > 0 && p ? t.jsx(T, {
        icon: t.jsx(Ft, {}),
        onClick: () => I(e => {
          g.moveItems([e.seq], 0);
        }),
        children: o("customer.removeFromFolder")
      }) : null]
    })]
  });
}
export { yr as default };