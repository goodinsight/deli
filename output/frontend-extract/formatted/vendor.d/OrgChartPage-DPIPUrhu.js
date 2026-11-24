import { j as n, r as a } from "./react-CjxcGQav.js";
import { M as Hn, u as It, a as Et, b as Tt, I as Ot, c as Wt, d as Pt } from "./EmployeeFormDialog-BHKK47Dg.js";
import { c as $n, c4 as z, B as c, L as d, bv as an, D as Yn, ar as Rt, cI as Dt, bQ as B, K as Lt, e as At, c8 as Bt, ak as Ut, c2 as k, bT as ae, bx as ie, cZ as Xn, cz as Kn, b$ as Gt, bO as T, u as Ft, eY as qn, dv as Nt, bI as R, fi as Ee, y as Mn, d4 as _n, cJ as kn, s as D, bH as Q, d8 as pe, a_ as Cn, fj as oe, b as I, fk as Vt, fl as Ht, c_ as $t, cc as Yt, d1 as Xt, dq as Kt, ba as Qt, d7 as Jt, d6 as zn, df as Zt, fm as es, fn as on, aU as ns, cP as In, a1 as ts, bK as En, aR as Tn, fo as Je, w as L, fp as N, bh as ss, d5 as A, dO as os, j as rs, cW as is, fq as On, fr as Wn, fs as Pn, aq as as, ft as Rn, dj as ls, z as Dn, c6 as re, eG as cs } from "../js.d/main-Cm9wS5wt.js";
import { f as Qn } from "./index.esm-gjRImBGa.js";
import { P as us } from "./Person-DnoEHesw.js";
import { P as ds } from "./PersonRemoveOutlined-CyeIj2nP.js";
import { G as ps } from "./GroupAddOutlined-DigKoBGv.js";
import { I as Jn } from "./InlineErrorAlert-D9ICJPt7.js";
import { u as ms } from "./mobileTitlePicker-u2JmU445.js";
import { f as Ie } from "./mxApi-R6g9QtQq.js";
import { u as xs, r as Ln } from "./teamMembers-0yRsmqL6.js";
import { x as fs, y as hs } from "./bootstrapController-BMV_i07c.js";
import { f as Zn, u as gs, a as An, b as rn } from "./orgTree-Dh5HFjBo.js";
import { e as Bn } from "./employeeApi-CdGzOYcj.js";
import { a as Un } from "./types-CVhETUvu.js";
import { T as js } from "./tableScrollbars-C9bhlJjO.js";
const bs = $n(n.jsx("path", {
    d: "m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z"
  })),
  Ss = $n(n.jsx("path", {
    d: "M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5M9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5 6 6.34 6 8s1.34 3 3 3m7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75M9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13"
  }));
function vs({
  member: l
}) {
  const t = l.nickname || l.name || l.email;
  return n.jsxs(z, {
    direction: "row",
    alignItems: "center",
    spacing: 1.5,
    sx: {
      pb: .5,
      minWidth: 0
    },
    children: [n.jsx(Hn, {
      member: l,
      size: 44
    }), n.jsxs(c, {
      sx: {
        minWidth: 0
      },
      children: [n.jsxs(d, {
        sx: {
          fontSize: 17,
          fontWeight: 600,
          lineHeight: 1.3
        },
        noWrap: !0,
        children: [t, l.nickname && l.name && n.jsx(c, {
          component: "span",
          sx: {
            ml: .75,
            fontSize: 14,
            fontWeight: 400,
            color: "text.secondary"
          },
          children: l.name
        })]
      }), t !== l.email && n.jsx(d, {
        sx: {
          fontSize: 14,
          color: "text.secondary"
        },
        noWrap: !0,
        children: l.email
      })]
    })]
  });
}
function ys({
  controller: l
}) {
  const t = an(),
    i = Yn(),
    {
      form: g,
      modals: q,
      ui: C
    } = l,
    E = C.useValue("member"),
    _ = String(C.useValue("error") ?? ""),
    m = g.isSubmitting,
    y = a.useMemo(() => Zn(l.units), [l.units]);
  if (!E) return null;
  const p = [{
    id: "member-unit",
    showTitle: !1,
    children: n.jsxs(z, {
      spacing: 1.5,
      children: [n.jsx(vs, {
        member: E
      }), y.length === 0 ? n.jsx(d, {
        sx: {
          fontSize: "15px",
          color: "text.secondary"
        },
        children: t("groups.noGroupsYet")
      }) : n.jsx(c, {
        sx: {
          display: "flex",
          flexDirection: "column"
        },
        children: y.map(({
          unit: r,
          depth: O
        }) => n.jsx(c, {
          sx: {
            "& .MuiFormControlLabel-root": {
              ml: O * 3,
              mr: 0
            },
            "& .MuiFormControlLabel-label": {
              fontSize: "15px"
            },
            "& .MuiCheckbox-root": {
              py: .5
            }
          },
          children: n.jsx(Rt, {
            form: g,
            name: `units.u${r.seq}`,
            label: r.name,
            onChange: ($, j) => l.pickUnit(r.seq, j),
            disabled: m
          })
        }, r.seq))
      }), n.jsx(d, {
        sx: {
          fontSize: "0.875rem",
          color: "text.secondary"
        },
        children: t("groups.oneGroupPerMember")
      }), _ && n.jsx(Jn, {
        message: _
      })]
    })
  }];
  return n.jsx(Dt, {
    open: q.form.isOpen,
    onClose: q.form.close,
    title: t("groups.groupSettings"),
    width: "420px",
    fullScreen: i,
    mobilePresentation: i ? "slide" : "dialog",
    draggable: !0,
    backdropClick: !1,
    titleIcons: {
      delete: {
        visible: !1
      },
      print: {
        visible: !1
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
      showCancelButton: !0,
      right: n.jsx(B, {
        variant: "contained",
        onClick: () => {
          g.submit();
        },
        disabled: m,
        sx: {
          minWidth: 80
        },
        children: m ? n.jsx(Lt, {
          size: 20,
          color: "inherit"
        }) : t("groups.save")
      })
    },
    sections: p
  });
}
function et(l) {
  return `u${l}`;
}
function Gn(l, t) {
  return Object.fromEntries(l.map(i => [et(i.seq), i.seq === t]));
}
function ws(l) {
  const t = a.useRef(l);
  t.current = l;
  const i = {
      form: At({
        modalId: "groups-member-unit-dialog"
      })
    },
    g = Bt({
      stateId: "groups-member-unit-ui",
      initialValues: {
        orgSeq: 0,
        member: null,
        error: ""
      }
    }),
    q = Ut({
      formId: "groups-member-unit-form",
      initialValues: {
        units: {}
      },
      onSubmit: async _ => {
        const m = Number(g.getValue("orgSeq")) || 0,
          y = g.getValue("member");
        if (!m || !y) return !1;
        const {
            units: p
          } = t.current,
          r = y.account_seq,
          O = p.find(S => _.units?.[et(S.seq)])?.seq ?? 0,
          $ = p.filter(S => S.account_seqs.includes(r) && S.seq !== O),
          j = p.find(S => S.seq === O && !S.account_seqs.includes(r)) ?? null;
        if ($.length === 0 && !j) return i.form.close(), !0;
        g.setValue("error", "");
        try {
          for (const S of $) await k.setUnitMembers(m, S.seq, S.account_seqs.filter(me => me !== r));
          j && (await k.setUnitMembers(m, j.seq, [...j.account_seqs, r]));
        } catch (S) {
          return g.setValue("error", S instanceof Error ? S.message : ae("groups.groupSaveFailed")), !1;
        }
        return ie({
          message: ae("groups.groupSaved"),
          delay: 500
        }), t.current.onSaved?.(), i.form.close(), !0;
      }
    }),
    C = (_, m) => {
      g.setValues({
        orgSeq: _,
        member: m,
        error: ""
      }), q.setFormValues({
        units: Gn(t.current.units, m.unit_seqs[0] ?? 0)
      }), i.form.open();
    },
    E = (_, m) => {
      m && q.setFormValue("units", Gn(t.current.units, _));
    };
  return {
    form: q,
    modals: i,
    ui: g,
    units: l.units,
    open: C,
    pickUnit: E
  };
}
function qs({
  readonlyNotice: l,
  bottomGap: t = 2.5,
  inline: i = !1,
  showButtons: g = !0
}) {
  const {
      groups: q
    } = Xn(),
    C = Kn(),
    E = C?.seq ?? 0,
    _ = q.filter(p => p.role === "owner" || p.role === "admin"),
    [m, y] = a.useState(0);
  return n.jsxs(n.Fragment, {
    children: [g && _.length > 1 && n.jsx(z, {
      direction: "row",
      spacing: 1.5,
      useFlexGap: !0,
      flexWrap: i ? "nowrap" : "wrap",
      sx: {
        mb: i ? 0 : t
      },
      children: _.map(p => {
        const r = p.seq === E;
        return n.jsx(B, {
          variant: r ? "contained" : "outlined",
          disableElevation: !0,
          disabled: m > 0 && m !== p.seq,
          sx: r ? void 0 : {
            bgcolor: "#fff",
            "&:hover, &:active": {
              bgcolor: "#fff"
            }
          },
          onClick: () => {
            r || m || (y(p.seq), Gt(p.seq).catch(O => T(O instanceof Error ? O.message : ae("groups.orgSwitchFailed"))).finally(() => y(0)));
          },
          children: p.name
        }, p.seq);
      })
    }), !i && C && !_.some(p => p.seq === E) && n.jsxs(d, {
      sx: {
        fontSize: "0.9375rem",
        color: "text.secondary",
        mb: 2
      },
      children: [C.name, " — ", l]
    })]
  });
}
const Ze = "application/x-taskham-member",
  W = 0,
  Ms = {
    overflow: "hidden"
  },
  _s = 5,
  Fn = 260;
function Nn(l, t) {
  const i = rn(l, t),
    g = new Set();
  for (const q of l) if (i.has(q.seq)) for (const C of q.account_seqs) g.add(C);
  return g.size;
}
const en = {
    "& .MuiListItemText-primary": {
      fontSize: 15
    }
  },
  nn = {
    px: 2,
    py: 1.25,
    borderBottom: `1px solid ${D[200]}`,
    minHeight: 76
  };
function Vn({
  role: l,
  onClick: t,
  compact: i = !1
}) {
  const g = l === "owner" ? {
      background: I[600],
      color: "#fff"
    } : l === "admin" ? {
      background: I[50],
      color: I[700]
    } : {
      background: D[100],
      color: D[700]
    },
    q = n.jsx(Qn, {
      label: on(l),
      size: i ? "sm" : "lg",
      variant: "soft",
      weight: 600,
      ...g,
      style: i ? {
        fontSize: 12,
        paddingLeft: 8,
        paddingRight: 8
      } : {
        fontSize: 13,
        paddingLeft: 12,
        paddingRight: 12
      }
    });
  return t ? n.jsx(c, {
    component: "span",
    onClick: C => t(C.currentTarget),
    sx: {
      display: "inline-flex",
      cursor: "pointer"
    },
    children: q
  }) : q;
}
function tn({
  label: l,
  depth: t,
  count: i,
  selected: g,
  icon: q,
  onClick: C,
  onMenu: E,
  onContextMenu: _,
  roomy: m = !1
}) {
  const y = an();
  return n.jsxs(z, {
    direction: "row",
    alignItems: "center",
    onClick: C,
    onContextMenu: _ ? p => {
      p.preventDefault(), _({
        top: p.clientY,
        left: p.clientX
      });
    } : void 0,
    sx: {
      pl: 1.5 + t * 2,
      pr: .75,
      py: m ? 1.25 : .75,
      mx: 1,
      borderRadius: 1.5,
      cursor: "pointer",
      color: g ? I[700] : "text.primary",
      bgcolor: g ? I[50] : "transparent",
      "&:hover .unit-more": {
        opacity: 1
      }
    },
    children: [n.jsx(c, {
      sx: {
        display: "flex",
        alignItems: "center",
        color: g ? I[600] : "action.active",
        mr: 1
      },
      children: q
    }), n.jsx(d, {
      sx: {
        flex: 1,
        minWidth: 0,
        fontSize: m ? "1.0625rem" : "0.9375rem",
        fontWeight: g ? 600 : m ? 500 : 400
      },
      noWrap: !0,
      children: l
    }), n.jsx(d, {
      sx: {
        fontSize: m ? "0.9375rem" : "0.8125rem",
        color: g ? I[600] : "text.secondary",
        mr: 1.5
      },
      children: i
    }), E && n.jsx(R, {
      className: "unit-more",
      size: "small",
      "aria-label": y("groups.groupMenu"),
      onClick: p => {
        p.stopPropagation(), E(p.currentTarget);
      },
      sx: {
        opacity: m ? 1 : 0,
        transition: "opacity 120ms",
        p: .25
      },
      children: n.jsx(Ee, {
        sx: {
          fontSize: m ? 20 : 18
        }
      })
    })]
  });
}
const sn = {
  mx: `-${Jt}px`,
  borderRadius: 0,
  boxShadow: "none"
};
function Fs({
  flatPage: l = !1
} = {}) {
  const t = an(),
    i = Yn(),
    q = Ft().useValue("account"),
    C = Number(q?.seq ?? 0) || 0,
    {
      myOrgSeq: E,
      loaded: _
    } = Xn(),
    m = Kn(),
    y = xs(),
    p = gs(),
    r = m?.seq ?? E,
    [O, $] = a.useState(null),
    [j, S] = a.useState(W),
    me = fs(),
    [ln, cn] = a.useState(""),
    [xe, nt] = a.useState(""),
    [w, U] = a.useState(null),
    [G, fe] = a.useState(null),
    V = ms(),
    tt = !!V.useValue("open"),
    [Y, un] = a.useState(!1),
    [Te, Oe] = a.useState(null),
    [b, H] = a.useState(null),
    he = It({
      idSuffix: "org",
      onDeleted: () => {
        ie({
          message: ae("groups.employeeDeleted"),
          delay: 500
        }), Ce();
      },
      onSaved: () => {
        ie({
          message: ae("groups.employeeSaved"),
          delay: 500
        }), Ce();
      }
    }),
    [J, We] = a.useState(new Map()),
    [ge, Pe] = a.useState(null),
    [je, Re] = a.useState(null),
    [P, be] = a.useState(null),
    [De, Se] = a.useState(""),
    [Z, ve] = a.useState(null),
    [dn, pn] = a.useState(0),
    [Le, Ae] = a.useState([]),
    [st, le] = a.useState(!1),
    M = r > 0 && r === E,
    ye = a.useRef(0),
    X = a.useCallback(async (e, s = !1) => {
      try {
        const [o, u] = await Promise.all([k.listMembers(e), k.getTree(e)]);
        $(h => e !== ye.current ? h : {
          orgSeq: e,
          members: o.members,
          units: u.units,
          canManage: o.can_manage
        });
      } catch (o) {
        if (e !== ye.current || s) return;
        cn(o instanceof Error ? o.message : ae("groups.membersLoadFailed")), $({
          orgSeq: e,
          members: [],
          units: [],
          canManage: !1
        });
      }
    }, []);
  a.useEffect(() => {
    if (S(W), cn(""), ye.current = r, !r || M) {
      $(null);
      return;
    }
    X(r);
  }, [r, M, X]), a.useEffect(() => {
    M && ((!y.loaded || y.groupSeq && y.groupSeq !== r) && Ln(), (!p.loaded || p.orgSeq && p.orgSeq !== r) && An());
  }, [M, r, y.loaded, y.groupSeq, p.loaded, p.orgSeq]), a.useEffect(() => {
    const e = () => {
      r && !M && X(r);
    };
    return window.addEventListener(qn, e), () => window.removeEventListener(qn, e);
  }, [r, M, X]), Nt(["org_unit", "org_unit_member"], () => {
    r && !M && X(r, !0);
  });
  const mn = M ? y.loaded && p.loaded : O?.orgSeq === r,
    ce = r > 0 && !mn,
    Be = M ? y.members : O?.members ?? [],
    Ue = M ? p.units : O?.units ?? [],
    Ge = M ? y.canManage : !!O?.canManage,
    xn = a.useRef({
      members: Be,
      units: Ue,
      canManage: Ge
    });
  ce || (xn.current = {
    members: Be,
    units: Ue,
    canManage: Ge
  });
  const ue = ce ? xn.current : {
      members: Be,
      units: Ue,
      canManage: Ge
    },
    K = a.useMemo(() => ue.members, [ue]),
    v = a.useMemo(() => ue.units, [ue]),
    x = ue.canManage,
    ee = mn || ce,
    [fn, we] = a.useState({
      orgSeq: 0,
      items: []
    }),
    ne = a.useCallback(async () => {
      if (M) {
        we({
          orgSeq: r,
          items: []
        });
        return;
      }
      if (!r || !x) {
        we({
          orgSeq: r,
          items: []
        });
        return;
      }
      const e = await k.listInvites(r).catch(() => []);
      r === ye.current && we({
        orgSeq: r,
        items: e
      });
    }, [M, r, x]);
  a.useEffect(() => {
    ne();
  }, [ne]);
  const ot = M ? me.loaded : fn.orgSeq === r,
    Fe = M ? me.invites : fn.items,
    hn = a.useRef(Fe),
    gn = r > 0 && (ce || !ot);
  gn || (hn.current = Fe);
  const jn = gn ? hn.current : Fe,
    F = a.useCallback(async () => {
      M ? await Promise.all([Ln(), An()]) : r && (await X(r)), await ne();
    }, [M, r, X, ne]),
    Ne = Et({
      idSuffix: "org",
      onInvited: () => {
        ne();
      }
    }),
    Ve = ws({
      units: v,
      onSaved: () => {
        F(), re({
          team_context: !0
        });
      }
    }),
    te = a.useMemo(() => Zn(v), [v]),
    rt = a.useMemo(() => v.map(e => ({
      id: String(e.seq),
      label: e.name,
      remark: String(Nn(v, e.seq)),
      parentId: e.parent_seq > 0 ? String(e.parent_seq) : void 0,
      ...(x ? {
        endIcon: n.jsx(R, {
          size: "small",
          "aria-label": t("groups.groupMenu"),
          sx: {
            p: .25
          },
          onClick: s => {
            s.stopPropagation(), U({
              anchor: s.currentTarget,
              unit: e
            });
          },
          children: n.jsx(Ee, {
            sx: {
              fontSize: 18
            }
          })
        })
      } : {})
    })), [v, x, t]),
    He = a.useRef(!1),
    [it, at] = a.useState(1);
  a.useEffect(() => at(e => e + 1), [j]), a.useEffect(() => {
    He.current || !ee || un(v.length >= _s);
  }, [ee, v.length]);
  const qe = a.useCallback(e => v.find(s => s.seq === e)?.name ?? "", [v]),
    de = a.useMemo(() => {
      let e = K;
      if (j !== W) {
        const u = rn(v, j),
          h = new Set();
        for (const se of v) if (u.has(se.seq)) for (const zt of se.account_seqs) h.add(zt);
        e = e.filter(se => h.has(se.account_seq));
      }
      const s = xe.trim().toLowerCase();
      s && (e = e.filter(u => [u.name, u.nickname, u.email, ...u.unit_seqs.map(qe)].join(" ").toLowerCase().includes(s)));
      const o = u => u === "owner" ? 0 : u === "admin" ? 1 : 2;
      return [...e].sort((u, h) => o(u.role) - o(h.role) || (u.nickname || u.name || u.email).localeCompare(h.nickname || h.name || h.email, "ko"));
    }, [K, v, j, xe, qe]),
    lt = e => Nn(v, e.seq),
    f = v.find(e => e.seq === j) ?? null,
    ct = e => v.filter(s => s.head_account_seq === e.account_seq),
    $e = (e, s) => {
      Se(""), be({
        mode: "create",
        parent: e
      }), Oe(s);
    },
    Ye = () => {
      be(null), Oe(null);
    },
    bn = async () => {
      const e = De.trim();
      if (!(!e || !P)) try {
        P.mode === "create" ? await k.createUnit(r, {
          name: e,
          parent_seq: P.parent
        }) : await k.patchUnit(r, P.unit.seq, {
          name: e
        }), Ye(), Se(""), await F();
      } catch (s) {
        T(s instanceof Error ? s.message : t("groups.groupSaveFailed"));
      }
    },
    ut = async e => {
      if (U(null), !!(await Dn({
        title: t("groups.deleteGroupTitle"),
        message: t("groups.deleteGroupConfirm", {
          name: e.name
        }),
        confirmText: t("groups.delete"),
        cancelText: t("groups.cancel")
      }))) try {
        await k.deleteUnit(r, e.seq), j === e.seq && S(W), await F(), re({
          team_context: !0
        });
      } catch (o) {
        T(o instanceof Error ? o.message : t("groups.groupDeleteFailed"));
      }
    },
    dt = async () => {
      if (Z) try {
        await k.patchUnit(r, Z.seq, {
          parent_seq: dn
        }), ve(null), await F(), re({
          team_context: !0
        });
      } catch (e) {
        T(e instanceof Error ? e.message : t("groups.groupMoveFailed"));
      }
    },
    pt = async (e, s) => {
      try {
        await k.patchUnit(r, e.seq, {
          head_account_seq: s
        }), await F();
      } catch (o) {
        T(o instanceof Error ? o.message : t("groups.headSaveFailed"));
      }
    },
    Sn = async (e, s) => {
      try {
        await k.setUnitMembers(r, e.seq, s), await F(), re({
          team_context: !0
        });
      } catch (o) {
        T(o instanceof Error ? o.message : t("groups.groupMembershipSaveFailed"));
      }
    },
    mt = (e, s) => Sn(e, e.account_seqs.filter(o => o !== s)),
    xt = async (e, s) => {
      const o = v.find(h => h.seq === s);
      if (!o) return;
      const u = v.filter(h => h.seq !== s && h.account_seqs.includes(e));
      if (!(u.length === 0 && o.account_seqs.includes(e))) try {
        for (const h of u) await k.setUnitMembers(r, h.seq, h.account_seqs.filter(se => se !== e));
        o.account_seqs.includes(e) || (await k.setUnitMembers(r, o.seq, [...o.account_seqs, e])), await F(), re({
          team_context: !0
        });
      } catch (h) {
        T(h instanceof Error ? h.message : t("groups.groupMembershipSaveFailed"));
      }
    },
    [Me, _e] = a.useState(0),
    ft = async (e, s) => {
      try {
        await k.updateMember(r, e.account_seq, s), await F();
      } catch (o) {
        T(o instanceof Error ? o.message : t("groups.memberSettingsSaveFailed"));
      }
    },
    ht = async e => {
      const s = await Dn({
        title: t("groups.removeMemberTitle"),
        message: t("groups.removeMemberConfirm", {
          name: e.name || e.email
        }),
        confirmText: t("groups.alsoCloseWorkspaces"),
        cancelText: t("groups.contactsOnly")
      });
      try {
        await k.removeMember(r, e.account_seq, s === !0), ie({
          message: t("groups.memberRemoved"),
          delay: 500
        }), await F(), re({
          team_context: !0
        });
      } catch (o) {
        T(o instanceof Error ? o.message : t("groups.contactRemoveFailed"));
      }
    },
    gt = async e => {
      try {
        await k.cancelInvite(e), M ? hs(e) : we(s => ({
          ...s,
          items: s.items.filter(o => o.seq !== e)
        }));
      } catch (s) {
        T(s instanceof Error ? s.message : t("groups.inviteCancelFailed"));
      }
    },
    jt = async e => {
      try {
        const s = await k.reissueInviteLink(e.seq);
        (await Wt(Pt(s, e.email))) ? ie({
          message: t("groups.newInviteLinkCopied"),
          delay: 900
        }) : T(t("groups.copyBlockedShareLink", {
          url: s.invite_url
        })), ne();
      } catch (s) {
        T(s instanceof Error ? s.message : t("groups.inviteLinkCreateFailed"));
      }
    },
    Xe = (e, s = !1) => {
      const o = e.account_seq === C,
        u = ct(e);
      return n.jsxs(z, {
        direction: "row",
        alignItems: "center",
        spacing: 1.5,
        sx: {
          minWidth: 0,
          py: s ? 0 : 1,
          cursor: x && !i ? "grab" : void 0
        },
        draggable: x && !i,
        onDragStart: h => {
          h.dataTransfer.setData(Ze, String(e.account_seq)), h.dataTransfer.effectAllowed = "move";
        },
        onDragEnd: () => _e(0),
        children: [n.jsx(Hn, {
          member: e
        }), n.jsxs(c, {
          sx: {
            minWidth: 0
          },
          children: [n.jsxs(z, {
            direction: "row",
            alignItems: "center",
            spacing: .75,
            sx: {
              minWidth: 0
            },
            children: [n.jsx(d, {
              sx: {
                fontSize: i ? 17 : "0.9375rem",
                fontWeight: 600
              },
              noWrap: !0,
              children: e.nickname || e.name || e.email
            }), s && n.jsx(c, {
              component: "span",
              sx: {
                flexShrink: 0,
                display: "inline-flex"
              },
              children: n.jsx(Vn, {
                role: e.role,
                compact: !0
              })
            }), e.nickname && e.name && n.jsx(d, {
              sx: {
                fontSize: "0.8125rem",
                color: "text.secondary"
              },
              noWrap: !0,
              children: e.name
            }), o && n.jsx(d, {
              sx: {
                fontSize: "0.8125rem",
                color: "text.disabled",
                flexShrink: 0
              },
              children: t("groups.me")
            })]
          }), u.length > 0 && n.jsx(d, {
            sx: {
              fontSize: "0.75rem",
              color: I[700],
              fontWeight: 600
            },
            noWrap: !0,
            children: t("groups.headOf", {
              names: u.map(h => h.name).join(" · ")
            })
          }), i && yt(e)]
        })]
      });
    },
    vn = e => n.jsxs(c, {
      sx: {
        minWidth: 0
      },
      children: [n.jsx(d, {
        sx: {
          fontSize: i ? 15 : "0.875rem"
        },
        noWrap: !0,
        children: e.email
      }), i && e.mailbox && n.jsxs(c, {
        sx: {
          mt: .75,
          px: 1.25,
          py: .75,
          borderRadius: 1.5,
          bgcolor: I[50],
          minWidth: 0,
          display: "flex",
          alignItems: "center",
          gap: 1.25
        },
        children: [n.jsx(cs, {
          sx: {
            fontSize: 22,
            color: I[700],
            flexShrink: 0
          }
        }), n.jsxs(c, {
          sx: {
            minWidth: 0
          },
          children: [n.jsx(d, {
            sx: {
              fontSize: 15,
              color: I[700],
              fontWeight: 500
            },
            noWrap: !0,
            children: e.mailbox.email
          }), n.jsxs(d, {
            sx: {
              fontSize: 14,
              color: "text.secondary"
            },
            noWrap: !0,
            children: [Ie(e.mailbox.used_bytes), e.mailbox.quota_mb > 0 ? ` / ${Ie(e.mailbox.quota_mb * 1024 * 1024)}` : ""]
          })]
        })]
      })]
    }),
    bt = e => e.mailbox ? n.jsx(d, {
      sx: {
        fontSize: "0.875rem",
        minWidth: 0
      },
      noWrap: !0,
      children: e.mailbox.email
    }) : n.jsx(d, {
      sx: {
        fontSize: 13,
        color: "text.disabled"
      },
      children: "—"
    }),
    St = e => e.mailbox ? n.jsxs(d, {
      sx: {
        fontSize: "0.8125rem",
        whiteSpace: "nowrap"
      },
      children: [Ie(e.mailbox.used_bytes), e.mailbox.quota_mb > 0 ? ` / ${Ie(e.mailbox.quota_mb * 1024 * 1024)}` : ""]
    }) : n.jsx(d, {
      sx: {
        fontSize: 13,
        color: "text.disabled"
      },
      children: "—"
    }),
    Ke = (e, s = !1) => {
      const o = e.unit_seqs.map(qe).filter(Boolean);
      return o.length === 0 ? n.jsx(d, {
        onClick: x ? () => Ve.open(r, e) : void 0,
        sx: {
          fontSize: "0.8125rem",
          color: "text.disabled",
          ...(x ? {
            cursor: "pointer",
            "&:hover": {
              color: "text.primary",
              textDecoration: "underline"
            }
          } : {})
        },
        children: t("groups.noGroup")
      }) : n.jsx(z, {
        direction: "row",
        flexWrap: "wrap",
        gap: .5,
        justifyContent: s ? "center" : "flex-start",
        children: o.map(u => n.jsx(Qn, {
          label: u,
          size: "md",
          variant: "outlined",
          background: D[300],
          color: D[700],
          style: {
            fontSize: 12
          }
        }, u))
      });
    },
    vt = e => x && e.role !== "owner",
    ke = !!(m && r === m.seq && m.use_hr),
    Ce = a.useCallback(async () => {
      if (!ke) {
        We(new Map());
        return;
      }
      try {
        const {
            items: e
          } = await Bn.list({
            includeDisabled: !0,
            limit: 200
          }),
          s = new Map();
        for (const o of e) o.account_seq > 0 && s.set(o.account_seq, o);
        We(s);
      } catch {
        We(new Map());
      }
    }, [ke]);
  a.useEffect(() => {
    Ce();
  }, [Ce, r]);
  const yt = e => {
      const s = J.get(e.account_seq);
      if (!s) return null;
      const o = [s.staff_num, s.position, s.job_title, s.status !== "active" ? Un[s.status] : ""].filter(Boolean);
      return n.jsxs(d, {
        sx: {
          fontSize: i ? 13.5 : "0.75rem",
          color: "text.secondary"
        },
        noWrap: !0,
        children: [t("groups.employee"), o.length > 0 ? ` · ${o.join(" · ")}` : ""]
      });
    },
    wt = e => {
      const s = J.get(e.account_seq);
      return n.jsx(d, {
        sx: {
          fontSize: "0.875rem",
          color: s?.staff_num ? "text.primary" : "text.disabled"
        },
        noWrap: !0,
        children: s?.staff_num || "—"
      });
    },
    qt = e => {
      const s = J.get(e.account_seq),
        o = s ? [s.position, s.job_title].filter(Boolean).join(" · ") : "",
        u = s && s.status !== "active" ? Un[s.status] : "";
      return n.jsxs(d, {
        sx: {
          fontSize: "0.875rem",
          color: o ? "text.primary" : "text.disabled"
        },
        noWrap: !0,
        children: [o || "—", u ? n.jsx(c, {
          component: "span",
          sx: {
            ml: .75,
            color: "text.secondary",
            fontSize: "0.8125rem"
          },
          children: u
        }) : null]
      });
    },
    Mt = async e => {
      const s = J.get(e.account_seq);
      if (s) {
        he.openEdit(s);
        return;
      }
      try {
        const u = (await Bn.list({
          accountSeq: e.account_seq,
          includeDisabled: !0,
          limit: 1
        })).items[0] ?? null;
        if (u) {
          ie({
            message: t("groups.alreadyEmployee", {
              name: u.name
            }),
            delay: 800
          }), he.openEdit(u);
          return;
        }
        he.openCreate({
          name: e.nickname || e.name || "",
          email: e.email,
          account_seq: e.account_seq,
          unit_seq: e.unit_seqs[0] ?? 0
        });
      } catch (o) {
        T(o instanceof Error ? o.message : t("groups.employeeLoadFailed"));
      }
    },
    Qe = (e, s) => {
      if (e.anchor && !e.position) {
        const o = e.anchor.getBoundingClientRect();
        H({
          position: {
            top: o.bottom,
            left: o.left
          },
          member: s
        });
        return;
      }
      H({
        ...e,
        member: s
      });
    },
    yn = e => x ? s => {
      s.preventDefault(), Qe({
        position: {
          top: s.clientY,
          left: s.clientX
        }
      }, e);
    } : void 0,
    _t = [{
      id: "identity",
      text: t("groups.colMember"),
      width: "17%",
      render: e => Xe(e)
    }, ...(J.size > 0 ? [{
      id: "staffNum",
      text: t("groups.colStaffNum"),
      width: 104,
      render: e => wt(e)
    }, {
      id: "position",
      text: t("groups.colPosition"),
      width: "11%",
      render: e => qt(e)
    }] : []), {
      id: "contact",
      text: t("groups.colEmail"),
      render: e => vn(e)
    }, ...(x ? [{
      id: "mailbox",
      text: t("groups.companyMail"),
      width: "15%",
      render: e => bt(e)
    }, {
      id: "usage",
      text: t("groups.colStorage"),
      width: 96,
      align: "center",
      render: e => St(e)
    }] : []), {
      id: "units",
      text: t("groups.colGroup"),
      width: "9%",
      align: "center",
      render: e => Ke(e, !0)
    }, {
      id: "role",
      text: t("groups.role"),
      width: 88,
      align: "center",
      style: {
        whiteSpace: "nowrap"
      },
      render: e => n.jsx(Vn, {
        role: e.role,
        onClick: vt(e) && x && e.role !== "owner" ? s => {
          const o = s.getBoundingClientRect();
          Pe({
            position: {
              top: o.bottom,
              left: o.left
            },
            member: e
          });
        } : void 0
      })
    }, {
      id: "more",
      text: "",
      width: 48,
      align: "center",
      cellPadding: 0,
      render: e => x ? n.jsx(R, {
        className: "member-more",
        size: "small",
        "aria-label": t("groups.memberMenu"),
        onClick: s => {
          s.stopPropagation(), Qe({
            anchor: s.currentTarget
          }, e);
        },
        sx: {
          opacity: b?.member.account_seq === e.account_seq ? 1 : 0,
          transition: "opacity 120ms"
        },
        children: n.jsx(Ee, {
          fontSize: "small"
        })
      }) : null
    }],
    kt = f ? f.name : t("groups.memberList");
  a.useEffect(() => {
    if (i) return V.setValue("active", !0), V.setValue("title", f ? f.name : ""), () => {
      V.setValue("active", !1), V.setValue("open", !1), V.setValue("title", "");
    };
  }, [i, V, f]);
  const ze = !i && Y,
    Ct = x && P && n.jsx(Mn, {
      open: !0,
      anchorReference: i ? "none" : Te?.position ? "anchorPosition" : "anchorEl",
      anchorEl: i ? null : Te?.anchor ?? null,
      anchorPosition: i ? void 0 : Te?.position,
      onClose: Ye,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "left"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "left"
      },
      transitionDuration: 0,
      slotProps: {
        backdrop: {
          invisible: !i,
          sx: i ? {
            bgcolor: "rgba(0,0,0,0.4)"
          } : {}
        },
        paper: {
          sx: {
            width: 280,
            maxWidth: "calc(100vw - 32px)",
            ...(i ? {
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) !important",
              borderRadius: 2.5
            } : {})
          }
        }
      },
      children: n.jsxs(c, {
        sx: {
          p: 1.5
        },
        children: [n.jsx(d, {
          sx: {
            fontSize: "0.75rem",
            color: "text.secondary",
            mb: 1
          },
          children: P.mode === "rename" ? t("groups.renameGroupTitle", {
            name: P.unit.name
          }) : P.parent ? t("groups.newSubgroupTitle", {
            name: qe(P.parent)
          }) : t("groups.newTopGroup")
        }), n.jsxs(z, {
          direction: "row",
          spacing: 1.5,
          children: [n.jsx(_n, {
            size: "small",
            autoFocus: !0,
            fullWidth: !0,
            placeholder: t("groups.groupName"),
            value: De,
            onChange: e => Se(e.target.value.slice(0, 100)),
            onKeyDown: e => {
              e.key === "Enter" && bn(), e.key === "Escape" && Ye();
            },
            sx: {
              "& .MuiOutlinedInput-root": {
                bgcolor: "#fff"
              }
            }
          }), n.jsx(B, {
            size: "small",
            variant: "contained",
            onClick: () => {
              bn();
            },
            disabled: !De.trim(),
            sx: {
              flexShrink: 0
            },
            children: t("groups.ok")
          })]
        })]
      })
    }),
    wn = ee ? xe.trim() ? t("groups.noSearchResults") : t(f ? "groups.noOneInGroup" : "groups.noMembersYet") : t("groups.loading");
  return n.jsxs(c, {
    sx: {
      width: "100%",
      contain: "inline-size",
      ...(l ? {
        minHeight: "100%",
        display: "flex",
        flexDirection: "column"
      } : {})
    },
    children: [ln && n.jsx(Jn, {
      message: ln
    }), n.jsx(qs, {
      readonlyNotice: t("groups.membersAdminOnly"),
      showButtons: !1
    }), _ && !r && n.jsx(d, {
      sx: {
        color: "text.secondary"
      },
      children: t("groups.noOrgYet")
    }), r > 0 && n.jsxs(kn, {
      elevation: i || l ? 0 : void 0,
      square: l,
      sx: {
        ...Ms,
        ...(l ? {
          flex: 1
        } : {}),
        display: "flex",
        alignItems: "stretch",
        ...(i ? {
          bgcolor: "transparent",
          overflow: "visible"
        } : {})
      },
      children: [!i && n.jsx(c, {
        sx: {
          width: Y ? Fn : 0,
          flexShrink: 0,
          overflow: "hidden",
          ...(Y ? {} : {
            height: 0
          }),
          borderRight: Y ? `1px solid ${D[200]}` : "none",
          transition: e => He.current ? e.transitions.create("width", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeInOut
          }) : "none",
          "@media (prefers-reduced-motion: reduce)": {
            transition: "none"
          }
        },
        children: n.jsxs(c, {
          sx: {
            width: Fn,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            minHeight: 0
          },
          children: [n.jsxs(z, {
            direction: "row",
            alignItems: "center",
            spacing: 1,
            sx: nn,
            children: [n.jsx(d, {
              sx: {
                flex: 1,
                fontSize: "0.9375rem",
                fontWeight: 700
              },
              children: t("groups.colGroup")
            }), x && n.jsx(Q, {
              title: f ? t("groups.addSubgroup", {
                name: f.name
              }) : t("groups.addGroup"),
              children: n.jsx(R, {
                size: "small",
                "aria-label": t("groups.addGroup"),
                onClick: e => $e(j === W ? 0 : j, {
                  anchor: e.currentTarget
                }),
                children: n.jsx(pe, {
                  fontSize: "small"
                })
              })
            })]
          }), n.jsxs(c, {
            sx: {
              flex: 1,
              minHeight: 0,
              overflowY: "auto",
              py: 1
            },
            children: [n.jsx(tn, {
              label: t("groups.allMembers"),
              depth: 0,
              count: K.length,
              selected: j === W,
              icon: n.jsx(Cn, {
                fontSize: "small"
              }),
              onClick: () => S(W)
            }), te.length > 0 && n.jsx(oe, {
              sx: {
                my: .75,
                mx: 2
              }
            }), n.jsx(c, {
              onDragOver: e => {
                if (!x || !e.dataTransfer.types.includes(Ze)) return;
                const s = e.target.closest("[data-item-id]"),
                  o = Number(s?.getAttribute("data-item-id")) || 0;
                o && e.preventDefault(), o !== Me && _e(o);
              },
              onDragLeave: e => {
                e.currentTarget.contains(e.relatedTarget) || _e(0);
              },
              onDrop: e => {
                const s = Number(e.dataTransfer.getData(Ze)) || 0,
                  o = Me;
                _e(0), !(!s || !o) && (e.preventDefault(), xt(s, o));
              },
              sx: Me ? {
                [`& .tree-node[data-item-id="${Me}"] > .tree-item`]: {
                  outline: `2px dashed ${I[400]}`,
                  outlineOffset: "-2px",
                  bgcolor: I[50],
                  borderRadius: 1
                }
              } : void 0,
              children: n.jsx(Vt, {
                items: rt,
                defaultExpanded: !0,
                showSearch: !1,
                showTreeLines: !0,
                selectable: !0,
                checkbox: !1,
                showHover: !1,
                showSelection: !0,
                showEndIconOnHover: !0,
                initialSelections: f ? [f.name] : [],
                resetTrigger: it,
                onNodeClick: e => S(Number(e.id) || W),
                onNodeContextMenu: x ? (e, s) => {
                  const o = v.find(u => u.seq === Number(e.id));
                  o && (s.preventDefault(), U({
                    position: {
                      top: s.clientY,
                      left: s.clientX
                    },
                    unit: o
                  }));
                } : void 0,
                styles: {
                  border: "none",
                  borderRadius: "0",
                  backgroundColor: "transparent"
                },
                itemStyles: {
                  fontSize: 15
                }
              })
            }), te.length === 0 && ee && !P && n.jsx(d, {
              sx: {
                fontSize: "0.8125rem",
                color: "text.secondary",
                px: 2.5,
                pt: 1.5
              },
              children: t("groups.noGroupsHint")
            })]
          })]
        })
      }), n.jsxs(c, {
        sx: {
          flex: 1,
          minWidth: 0,
          ...(ce ? {
            opacity: .55,
            transition: "opacity 120ms"
          } : {})
        },
        children: [n.jsxs(z, {
          direction: "row",
          alignItems: "center",
          spacing: 1,
          sx: {
            ...nn,
            ...(i ? {
              flexWrap: "wrap",
              rowGap: 1,
              bgcolor: "transparent",
              borderRadius: 0,
              border: "none",
              boxShadow: "none",
              mb: 2.5,
              px: 0,
              pt: 0,
              pb: 0,
              minHeight: 0,
              "& > .MuiButtonBase-root:first-of-type": {
                ml: "-6px"
              },
              "& > .MuiButtonBase-root:last-of-type": {
                mr: "-5px"
              },
              "& > .MuiBox-root:last-child": {
                ml: 0
              }
            } : {})
          },
          children: [!i && n.jsx(Q, {
            title: t(Y ? "groups.collapseGroupPanel" : "groups.expandGroupPanel"),
            children: n.jsx(R, {
              size: "small",
              "aria-label": t(Y ? "groups.collapseGroupPanel" : "groups.expandGroupPanel"),
              onClick: () => {
                He.current = !0, un(e => !e);
              },
              sx: {
                ml: -.5
              },
              children: n.jsx(Ht, {
                fontSize: "small",
                sx: {
                  transform: Y ? "none" : "rotate(180deg)"
                }
              })
            })
          }), n.jsx(B, {
            color: "inherit",
            disableRipple: ze,
            onClick: ze ? void 0 : e => fe(e.currentTarget),
            style: i ? {
              display: "none"
            } : void 0,
            startIcon: n.jsx(Ss, {}),
            endIcon: ze ? void 0 : n.jsx($t, {}),
            sx: {
              height: 40,
              px: 1.25,
              fontSize: "19px",
              fontWeight: 700,
              textTransform: "none",
              whiteSpace: "nowrap",
              minWidth: 0,
              "& .MuiButton-startIcon > *": {
                fontSize: 24
              },
              ...(ze ? {
                cursor: "default",
                "&:hover": {
                  bgcolor: "transparent"
                }
              } : {})
            },
            children: n.jsx(c, {
              component: "span",
              sx: {
                overflow: "hidden",
                textOverflow: "ellipsis"
              },
              children: kt
            })
          }), n.jsx(Yt, {
            label: de.length,
            size: "small",
            sx: {
              height: 20,
              fontSize: 12,
              fontWeight: 600,
              bgcolor: D[100],
              ...(i ? {
                display: "none"
              } : {})
            }
          }), n.jsx(c, {
            sx: {
              flex: 1
            }
          }), n.jsxs(c, {
            sx: {
              display: "flex",
              alignItems: "center",
              gap: 2,
              ...(i ? {
                order: 10,
                width: "100%",
                gap: 1.5,
                minWidth: 0
              } : {})
            },
            children: [n.jsx(_n, {
              size: "small",
              placeholder: t("groups.searchMembers"),
              value: xe,
              onChange: e => nt(e.target.value),
              slotProps: {
                input: {
                  startAdornment: n.jsx(Xt, {
                    position: "start",
                    children: n.jsx(Kt, {
                      sx: {
                        fontSize: 20,
                        color: "action.active"
                      }
                    })
                  })
                }
              },
              sx: {
                width: i ? "100%" : 300,
                ...(i ? {
                  flex: 1,
                  minWidth: 0,
                  "& .MuiInputBase-root": {
                    minWidth: 0,
                    bgcolor: "#fff"
                  },
                  "& .MuiInputBase-input": {
                    minWidth: 0
                  }
                } : {})
              }
            }), x && f && i && n.jsx(Q, {
              title: t("groups.addPeople"),
              children: n.jsx(R, {
                size: "small",
                "aria-label": t("groups.addPeople"),
                onClick: () => {
                  Ae(f.account_seqs), le(!0);
                },
                sx: {
                  flexShrink: 0
                },
                children: n.jsx(ps, {
                  fontSize: "small"
                })
              })
            }), x && i && n.jsx(R, {
              size: "small",
              "aria-label": t("groups.inviteMember"),
              color: "primary",
              onClick: () => Ne.open({
                kind: "org",
                orgSeq: r
              }),
              sx: {
                flexShrink: 0
              },
              children: n.jsx(Qt, {
                fontSize: "small"
              })
            }), x && f && !i && n.jsx(B, {
              size: "small",
              variant: "outlined",
              startIcon: n.jsx(pe, {}),
              onClick: () => {
                Ae(f.account_seqs), le(!0);
              },
              sx: {
                whiteSpace: "nowrap",
                height: 40
              },
              children: t("groups.addPeople")
            }), x && !i && n.jsx(B, {
              size: "small",
              variant: "contained",
              disableElevation: !0,
              startIcon: n.jsx(pe, {}),
              onClick: () => Ne.open({
                kind: "org",
                orgSeq: r
              }),
              sx: {
                whiteSpace: "nowrap",
                height: 40
              },
              children: t("groups.invite")
            })]
          })]
        }), i && de.length === 0 ? n.jsx(d, {
          sx: {
            px: 2.5,
            py: 4,
            textAlign: "center",
            color: "text.secondary",
            ...(i ? {
              ...sn,
              bgcolor: "#fff"
            } : {})
          },
          children: wn
        }) : i ? n.jsx(z, {
          sx: {
            gap: zn
          },
          children: de.map(e => n.jsxs(c, {
            onContextMenu: yn(e),
            component: kn,
            elevation: 0,
            sx: {
              px: 2,
              py: 1.5,
              ...sn
            },
            children: [n.jsxs(z, {
              direction: "row",
              alignItems: "center",
              spacing: 1,
              children: [n.jsx(c, {
                sx: {
                  flex: 1,
                  minWidth: 0
                },
                children: Xe(e, !0)
              }), x && n.jsx(R, {
                size: "small",
                "aria-label": t("groups.memberMenu"),
                onClick: s => Qe({
                  anchor: s.currentTarget
                }, e),
                children: n.jsx(Ee, {
                  fontSize: "small"
                })
              })]
            }), n.jsxs(c, {
              sx: {
                mt: 1,
                pl: 6
              },
              children: [vn(e), n.jsx(c, {
                sx: {
                  mt: .75
                },
                children: Ke(e)
              })]
            })]
          }, e.account_seq))
        }) : n.jsx(c, {
          sx: {
            "& tbody tr:hover .member-more": {
              opacity: 1
            }
          },
          children: n.jsx(Zt, {
            scrollbars: js,
            variant: "notion",
            framed: !1,
            showPaper: !1,
            autoHeight: !0,
            rowHeightMode: "auto",
            columns: _t,
            data: de,
            totalCount: de.length,
            getRowId: e => e.account_seq,
            emptyMessage: wn,
            onRowContextMenu: x ? (e, s, o) => yn(e)?.(o) : void 0
          })
        }), x && j === W && jn.length > 0 && n.jsxs(c, {
          sx: {
            borderTop: `1px solid ${D[200]}`,
            bgcolor: D[50],
            pt: 1,
            ...(i ? {
              mt: zn,
              pb: 1,
              ...sn,
              borderTop: 0
            } : {})
          },
          children: [jn.map(e => n.jsxs(z, {
            direction: "row",
            alignItems: "center",
            spacing: 1.5,
            sx: {
              px: 2,
              py: .75,
              ...(i ? {
                flexWrap: "wrap",
                rowGap: .5
              } : {}),
              ...(e.expired ? {
                bgcolor: "#fef2f2"
              } : {})
            },
            children: [n.jsx(es, {
              sx: {
                width: 32,
                height: 32,
                bgcolor: "#fff",
                border: `1px dashed ${D[400]}`,
                color: D[400]
              },
              children: n.jsx(us, {
                sx: {
                  fontSize: 18
                }
              })
            }), n.jsxs(c, {
              sx: {
                minWidth: 0,
                flex: 1
              },
              children: [n.jsx(d, {
                sx: {
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "text.primary"
                },
                noWrap: !0,
                children: e.email
              }), n.jsxs(d, {
                sx: {
                  fontSize: 14,
                  color: "text.secondary"
                },
                children: [on(e.role), " ·", " ", e.expired ? n.jsx(c, {
                  component: "span",
                  sx: {
                    color: "#dc2626",
                    fontWeight: 600
                  },
                  children: t("groups.expired")
                }) : t("groups.until", {
                  date: e.expire_time
                })]
              })]
            }), (() => {
              const s = n.jsxs(n.Fragment, {
                children: [n.jsx(Q, {
                  title: t("groups.copyInviteLink"),
                  children: n.jsx(R, {
                    size: "small",
                    "aria-label": t("groups.copyInviteLink"),
                    onClick: () => {
                      jt(e);
                    },
                    sx: {
                      flexShrink: 0
                    },
                    children: n.jsx(ns, {
                      fontSize: "small"
                    })
                  })
                }), n.jsx(c, {
                  sx: {
                    width: 48,
                    flexShrink: 0,
                    display: "flex",
                    justifyContent: "center",
                    mr: i ? -1 : -2
                  },
                  children: n.jsx(Q, {
                    title: t("groups.cancelInvite"),
                    children: n.jsx(R, {
                      size: "small",
                      "aria-label": t("groups.cancelInvite"),
                      onClick: o => Re({
                        anchor: o.currentTarget,
                        invite: e
                      }),
                      children: n.jsx(In, {
                        fontSize: "small"
                      })
                    })
                  })
                })]
              });
              return i ? n.jsx(c, {
                sx: {
                  flexBasis: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  "&&": {
                    ml: 0
                  }
                },
                children: s
              }) : s;
            })()]
          }, e.seq)), n.jsx(c, {
            sx: {
              height: 8
            }
          })]
        })]
      })]
    }), n.jsxs(Mn, {
      open: !!G || tt,
      anchorEl: G,
      anchorReference: G ? "anchorEl" : "none",
      onClose: () => {
        fe(null), be(null), V.setValue("open", !1);
      },
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "left"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "left"
      },
      transitionDuration: 0,
      slotProps: {
        backdrop: {
          invisible: !!G,
          sx: G ? {} : {
            bgcolor: "rgba(0,0,0,0.4)"
          }
        },
        paper: {
          sx: {
            width: 320,
            maxWidth: "calc(100vw - 32px)",
            maxHeight: "70vh",
            ...(G ? {} : {
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) !important",
              borderRadius: 2.5
            })
          }
        }
      },
      children: [n.jsxs(z, {
        direction: "row",
        alignItems: "center",
        sx: {
          ...nn,
          minHeight: 48,
          py: .75
        },
        children: [n.jsx(d, {
          sx: {
            fontSize: "0.9375rem",
            fontWeight: 700
          },
          children: t("groups.colGroup")
        }), n.jsx(c, {
          sx: {
            flex: 1
          }
        }), !x && ee && n.jsx(Q, {
          title: t("groups.viewOnly"),
          children: n.jsx(ts, {
            sx: {
              fontSize: 16,
              color: "text.disabled"
            }
          })
        }), x && n.jsx(Q, {
          title: f ? t("groups.addSubgroup", {
            name: f.name
          }) : t("groups.addGroup"),
          children: n.jsx(R, {
            size: "small",
            "aria-label": t("groups.addGroup"),
            onClick: e => $e(j === W ? 0 : j, {
              anchor: e.currentTarget
            }),
            sx: {
              mr: -.75
            },
            children: n.jsx(pe, {
              fontSize: "small"
            })
          })
        })]
      }), n.jsxs(c, {
        sx: {
          py: G ? 1 : 1.5
        },
        children: [n.jsx(tn, {
          label: t("groups.allMembers"),
          depth: 0,
          count: K.length,
          selected: j === W,
          icon: n.jsx(Cn, {
            fontSize: "small"
          }),
          roomy: !G,
          onClick: () => {
            S(W), fe(null);
          }
        }), te.length > 0 && n.jsx(oe, {
          sx: {
            my: .75,
            mx: 2
          }
        }), te.map(({
          unit: e,
          depth: s
        }) => n.jsx(tn, {
          label: e.name,
          depth: s,
          count: lt(e),
          selected: j === e.seq,
          icon: j === e.seq ? n.jsx(En, {
            fontSize: "small"
          }) : n.jsx(Tn, {
            fontSize: "small"
          }),
          roomy: !G,
          onClick: () => {
            S(e.seq), fe(null);
          },
          onMenu: x ? o => U({
            anchor: o,
            unit: e
          }) : void 0,
          onContextMenu: x ? o => U({
            position: o,
            unit: e
          }) : void 0
        }, e.seq)), te.length === 0 && ee && !P && n.jsx(d, {
          sx: {
            fontSize: "0.8125rem",
            color: "text.secondary",
            px: 2.5,
            pt: 1.5,
            pb: 1
          },
          children: t("groups.noGroupsHint")
        })]
      })]
    }), Ct, n.jsxs(Je, {
      transitionDuration: 0,
      open: !!w,
      anchorReference: w?.position ? "anchorPosition" : "anchorEl",
      anchorEl: w?.anchor ?? null,
      anchorPosition: w?.position,
      onClose: () => U(null),
      slotProps: {
        list: {
          sx: en
        }
      },
      children: [n.jsxs(L, {
        onClick: () => {
          w && (Se(w.unit.name), be({
            mode: "rename",
            unit: w.unit
          }), Oe({
            anchor: w.anchor,
            position: w.position
          }), U(null));
        },
        children: [n.jsx(N, {
          children: n.jsx(ss, {
            fontSize: "small"
          })
        }), n.jsx(A, {
          primary: t("groups.rename")
        })]
      }), n.jsxs(L, {
        onClick: () => {
          w && ($e(w.unit.seq, {
            anchor: w.anchor,
            position: w.position
          }), S(w.unit.seq), U(null));
        },
        children: [n.jsx(N, {
          children: n.jsx(pe, {
            fontSize: "small"
          })
        }), n.jsx(A, {
          primary: t("groups.addChildGroup")
        })]
      }), n.jsxs(L, {
        onClick: () => {
          w && (ve(w.unit), pn(w.unit.parent_seq), U(null));
        },
        children: [n.jsx(N, {
          children: n.jsx(os, {
            fontSize: "small"
          })
        }), n.jsx(A, {
          primary: t("groups.move")
        })]
      }), n.jsx(oe, {}), n.jsxs(L, {
        onClick: () => w && void ut(w.unit),
        sx: {
          color: "error.main"
        },
        children: [n.jsx(N, {
          sx: {
            color: "inherit"
          },
          children: n.jsx(In, {
            fontSize: "small"
          })
        }), n.jsx(A, {
          primary: t("groups.delete")
        })]
      })]
    }), n.jsxs(Je, {
      transitionDuration: 0,
      open: !!b,
      anchorReference: b?.position ? "anchorPosition" : "anchorEl",
      anchorEl: b?.anchor ?? null,
      anchorPosition: b?.position,
      onClose: () => H(null),
      slotProps: {
        list: {
          sx: {
            minWidth: 200,
            ...en
          }
        }
      },
      children: [b && f && f.head_account_seq !== b.member.account_seq && n.jsxs(L, {
        onClick: () => {
          const {
            member: e
          } = b;
          H(null), pt(f, e.account_seq);
        },
        children: [n.jsx(N, {
          children: n.jsx(bs, {
            fontSize: "small"
          })
        }), n.jsx(A, {
          primary: t("groups.makeHeadOf", {
            name: f.name
          })
        })]
      }), b && f && f.account_seqs.includes(b.member.account_seq) && n.jsxs(L, {
        onClick: () => {
          const {
            member: e
          } = b;
          H(null), mt(f, e.account_seq);
        },
        children: [n.jsx(N, {
          children: n.jsx(Tn, {
            fontSize: "small"
          })
        }), n.jsx(A, {
          primary: t("groups.removeFromGroup", {
            name: f.name
          })
        })]
      }), b && n.jsxs(L, {
        onClick: () => {
          const {
            member: e
          } = b;
          H(null), Ve.open(r, e);
        },
        children: [n.jsx(N, {
          children: n.jsx(En, {
            fontSize: "small"
          })
        }), n.jsx(A, {
          primary: t("groups.groupSettings")
        })]
      }), b && ke && n.jsx(oe, {}), b && ke && n.jsxs(L, {
        onClick: () => {
          const {
            member: e
          } = b;
          H(null), Mt(e);
        },
        children: [n.jsx(N, {
          children: n.jsx(rs, {
            fontSize: "small"
          })
        }), n.jsx(A, {
          primary: J.has(b.member.account_seq) ? t("groups.employeeInfo") : t("groups.registerAsEmployee")
        })]
      }), b && b.member.role !== "owner" && n.jsx(oe, {}), b && b.member.role !== "owner" && n.jsxs(L, {
        onClick: () => {
          const {
            member: e
          } = b;
          H(null), ht(e);
        },
        sx: {
          color: "error.main"
        },
        children: [n.jsx(N, {
          sx: {
            color: "inherit"
          },
          children: n.jsx(ds, {
            fontSize: "small"
          })
        }), n.jsx(A, {
          primary: t("groups.removeMemberTitle")
        })]
      })]
    }), n.jsx(is, {
      open: !!je,
      anchorEl: je?.anchor ?? null,
      title: t("groups.cancelInviteConfirmTitle"),
      content: n.jsx(d, {
        sx: {
          fontSize: 14,
          color: "text.secondary"
        },
        children: t("groups.cancelInviteConfirm", {
          email: je?.invite.email ?? ""
        })
      }),
      confirmText: t("groups.cancelInvite"),
      placement: "top-end",
      onCancel: () => Re(null),
      onConfirm: () => {
        const e = je;
        Re(null), e && gt(e.invite.seq);
      }
    }), n.jsxs(On, {
      open: !!Z,
      onClose: () => ve(null),
      maxWidth: "xs",
      fullWidth: !0,
      children: [n.jsx(Wn, {
        sx: {
          fontSize: "1.0625rem",
          fontWeight: 700
        },
        children: t("groups.moveGroupTitle", {
          name: Z?.name ?? ""
        })
      }), n.jsx(Pn, {
        children: n.jsx(c, {
          sx: {
            pt: 1
          },
          children: n.jsx(as, {
            label: t("groups.parentGroup"),
            value: dn,
            onChange: e => pn(Number(e.target.value) || 0),
            options: [{
              value: 0,
              label: t("groups.topLevel")
            }, ...(Z ? te.filter(({
              unit: e
            }) => !rn(v, Z.seq).has(e.seq)).map(({
              unit: e,
              depth: s
            }) => ({
              value: e.seq,
              label: `${"　".repeat(s)}${e.name}`
            })) : [])],
            showEmptyOption: !1,
            fullWidth: !0
          })
        })
      }), n.jsxs(Rn, {
        sx: {
          px: 3,
          pb: 2
        },
        children: [n.jsx(B, {
          onClick: () => ve(null),
          children: t("groups.cancel")
        }), n.jsx(B, {
          variant: "contained",
          onClick: () => {
            dt();
          },
          children: t("groups.move")
        })]
      })]
    }), n.jsx(Je, {
      transitionDuration: 0,
      open: !!ge,
      anchorReference: "anchorPosition",
      anchorPosition: ge?.position,
      onClose: () => Pe(null),
      slotProps: {
        list: {
          sx: en
        }
      },
      children: ["member", "admin"].map(e => n.jsx(L, {
        selected: ge?.member.role === e,
        onClick: () => {
          const s = ge;
          Pe(null), s && s.member.role !== e && ft(s.member, {
            role: e
          });
        },
        children: n.jsx(A, {
          primary: on(e)
        })
      }, e))
    }), n.jsx(ys, {
      controller: Ve
    }), n.jsxs(On, {
      open: st && !!f,
      onClose: () => le(!1),
      maxWidth: "sm",
      fullWidth: !0,
      children: [n.jsx(Wn, {
        sx: {
          fontSize: "1.0625rem",
          fontWeight: 700
        },
        children: t("groups.peopleToAdd", {
          name: f?.name ?? ""
        })
      }), n.jsx(Pn, {
        children: K.length === 0 ? n.jsx(d, {
          sx: {
            color: "text.secondary",
            fontSize: "0.9rem"
          },
          children: t("groups.contactsEmpty")
        }) : n.jsx(z, {
          divider: n.jsx(oe, {}),
          sx: {
            mx: -1
          },
          children: K.map(e => {
            const s = Le.includes(e.account_seq);
            return n.jsxs(z, {
              direction: "row",
              alignItems: "center",
              spacing: 1.5,
              onClick: () => Ae(o => s ? o.filter(u => u !== e.account_seq) : [...o, e.account_seq]),
              sx: {
                px: 1,
                py: 1,
                cursor: "pointer",
                borderRadius: 1,
                bgcolor: s ? I[50] : "transparent",
                "&:hover": {
                  bgcolor: s ? I[50] : "action.hover"
                }
              },
              children: [n.jsx(ls, {
                size: "small",
                checked: s,
                readOnly: !0,
                sx: {
                  pointerEvents: "none"
                }
              }), n.jsx(c, {
                sx: {
                  flex: 1,
                  minWidth: 0
                },
                children: Xe(e)
              }), n.jsx(c, {
                sx: {
                  display: {
                    xs: "none",
                    sm: "block"
                  }
                },
                children: Ke(e)
              })]
            }, e.account_seq);
          })
        })
      }), n.jsxs(Rn, {
        sx: {
          px: 3,
          pb: 2
        },
        children: [n.jsx(d, {
          sx: {
            flex: 1,
            fontSize: "0.8125rem",
            color: "text.secondary",
            pl: .5
          },
          children: t("groups.selectedCount", {
            count: Le.length
          })
        }), n.jsx(B, {
          onClick: () => le(!1),
          children: t("groups.cancel")
        }), n.jsx(B, {
          variant: "contained",
          onClick: () => {
            le(!1), f && Sn(f, Le);
          },
          children: t("groups.save")
        })]
      })]
    }), n.jsx(Tt, {
      controller: he,
      units: v,
      members: K
    }), n.jsx(Ot, {
      controller: Ne
    })]
  });
}
export { qs as M, Fs as O };