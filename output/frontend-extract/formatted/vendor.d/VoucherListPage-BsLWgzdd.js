import { r as b, j as e, l as we } from "./react-CjxcGQav.js";
import { e as Ce, c8 as Oe, ak as ce, bO as T, bT as V, dv as be, fA as qe, cL as Re, z as De, bv as J, D as _e, fL as le, cI as Te, B as c, K as Pe, aq as oe, al as Se, cO as ie, bQ as ee, d8 as je, cn as Le, ma as Ie, s as w, cm as We, bH as Fe, bI as $e, cP as Me, cz as Ae, cc as Be, F as Ne, lr as ze, ax as ke, L as ue, bx as He } from "../js.d/main-Cm9wS5wt.js";
import { O as Ue } from "./OptionToggleGroup-Cvm2wRyq.js";
import { M as Ge } from "./MobileListTitleBar-tZ34p2gY.js";
import { v as M, V as Q, E as Ye, P as Ee, a as me, b as ne, c as pe } from "./voucherApi-CFpm74z0.js";
import { t as te, k as Z, w as G, l as Ke } from "./deal-B3IQ_ej7.js";
import { p as Qe } from "./partnerApi-Dqdgl0Fn.js";
import { c as de, t as Je } from "./terms-BH45hJsC.js";
import { I as Xe, a as Ze, T as et, b as tt } from "./ItemLineFields-DmS0gZQx.js";
import { u as rt, b as nt, a as at } from "./MobileCardListLayout-D5_p2Xer.js";
import { T as st } from "./tableScrollbars-C9bhlJjO.js";
import { u as ot } from "./useColumnWidths-DSAca5rC.js";
import { u as it } from "./sidebarAction-Z0aCDENX.js";
const ae = {
    name: "",
    spec: "",
    qty: 1,
    unit_price: "",
    note: ""
  },
  lt = {
    title: "",
    partner_seq: "",
    voucher_date: "",
    due_date: "",
    evidence: "tax_invoice",
    vat_mode: "exclusive",
    memo: "",
    itemIds: [],
    items: {}
  },
  ct = {
    pay_date: "",
    amount: "",
    method: "transfer",
    memo: ""
  };
let he = 0;
function se() {
  return he += 1, `v${he}`;
}
function fe(n, t) {
  const o = String(n.title ?? "").trim();
  if (!o) return V("partner.voucherTitleRequired");
  const h = Number(n.partner_seq) || 0;
  if (!h) return V("partner.partnerRequired");
  const i = (n.itemIds ?? []).map(p => n.items?.[p]).filter(p => !!p).map(p => ({
    name: String(p.name ?? "").trim(),
    spec: String(p.spec ?? "").trim(),
    qty: te(p.qty),
    unit_price: te(p.unit_price),
    note: String(p.note ?? "").trim()
  })).filter(p => p.name || Ke(p.qty, p.unit_price) > 0);
  return {
    kind: t,
    title: o,
    partner_seq: h,
    voucher_date: String(n.voucher_date ?? ""),
    due_date: String(n.due_date ?? ""),
    evidence: n.evidence ?? "tax_invoice",
    vat_mode: n.vat_mode === "none" ? "none" : "exclusive",
    memo: String(n.memo ?? ""),
    items: i
  };
}
function ut(n = {}) {
  const t = b.useRef(n);
  t.current = n;
  const o = b.useRef(0),
    h = b.useRef(null),
    i = b.useRef(new Map()),
    p = b.useRef(""),
    g = b.useRef(""),
    _ = {
      form: Ce({
        modalId: "partner-voucher-form"
      })
    },
    d = Oe({
      stateId: "partner-voucher-form-ui",
      initialValues: {
        kind: "sales",
        voucherSeq: 0,
        voucher: null,
        loading: !1,
        partnerOptions: []
      }
    }),
    u = () => d.getValue("kind") === "purchase" ? "purchase" : "sales",
    f = ce({
      formId: "partner-voucher-form",
      initialValues: lt,
      onValidate: a => {
        const s = fe(a, u());
        return typeof s == "string" ? (T(s), !1) : !0;
      },
      onSubmit: async a => {
        const s = fe(a, u());
        if (typeof s == "string") return !1;
        try {
          const l = Number(d.getValue("voucherSeq")) || 0;
          return l ? await M.update(l, s) : await M.create(s), t.current.onChanged?.("saved"), _.form.close(), !0;
        } catch (l) {
          return T(l instanceof Error ? l.message : V("partner.voucherSaveFailed")), !1;
        }
      }
    }),
    E = a => {
      P.setFormValues({
        pay_date: Z(),
        amount: a && a.balance > 0 ? a.balance : "",
        method: "transfer",
        memo: ""
      });
    },
    P = ce({
      formId: "partner-voucher-payment-form",
      initialValues: ct,
      onValidate: a => {
        const s = Q[u()].pay,
          l = d.getValue("voucher"),
          v = Math.round(te(a.amount));
        return v ? l && v > l.balance ? (T(V("partner.paymentExceedsBalance", {
          amount: G(l.balance)
        })), !1) : !0 : (T(V("partner.paymentAmountRequired", {
          word: s
        })), !1);
      },
      onSubmit: async a => {
        const s = Number(d.getValue("voucherSeq")) || 0;
        if (!s) return !1;
        try {
          return await M.createPayment(s, {
            pay_date: String(a.pay_date ?? "") || Z(),
            amount: Math.round(te(a.amount)),
            method: a.method ?? "transfer",
            memo: String(a.memo ?? "").trim()
          }), await C(s), !0;
        } catch (l) {
          return T(l instanceof Error ? l.message : V("partner.paymentCreateFailed")), !1;
        }
      }
    }),
    C = async a => {
      const s = o.current,
        l = await M.detail(a);
      s === o.current && (d.setValue("voucher", l), E(l), t.current.onChanged?.("payment"));
    },
    A = (a, s, l = 0) => {
      const v = ++o.current;
      d.setValues({
        kind: a,
        voucherSeq: s,
        voucher: null,
        loading: !0
      }), _.form.open(), Promise.all([Qe.list({
        tradeType: Q[a].tradeType,
        limit: 200
      }).then(S => S.items).catch(() => []), Je.list(!0).catch(() => []), s ? M.detail(s) : Promise.resolve(null)]).then(([S, y, m]) => {
        if (v !== o.current) return;
        const H = new Map(y.map(r => [r.seq, r]));
        i.current = new Map(S.flatMap(r => {
          const j = H.get(r.terms_seq);
          return j ? [[r.seq, j]] : [];
        }));
        const O = S.map(r => ({
          value: r.seq,
          label: r.name
        }));
        m?.partner_seq && !O.some(r => r.value === m.partner_seq) && O.unshift({
          value: m.partner_seq,
          label: m.partner_name
        }), d.setValue("partnerOptions", O);
        const U = m?.items.length ? m.items : [ae],
          q = U.map(() => se()),
          D = m?.voucher_date || Z(),
          R = m?.partner_seq || (O.some(r => r.value === l) ? l : 0),
          I = m ? void 0 : i.current.get(R),
          N = m ? m.due_date : I ? de(D, I) : "";
        p.current = `${R}|${D}`, g.current = m ? "" : N;
        const X = {
          title: m?.title ?? "",
          partner_seq: R || "",
          voucher_date: D,
          due_date: N,
          evidence: m?.evidence ?? "tax_invoice",
          vat_mode: m?.vat_mode ?? "exclusive",
          memo: m?.memo ?? "",
          itemIds: q,
          items: Object.fromEntries(U.map((r, j) => [q[j], {
            name: r.name,
            spec: r.spec,
            qty: r.qty || (m ? "" : 1),
            unit_price: r.unit_price || "",
            note: r.note
          }]))
        };
        f.setFormValues(X), h.current = X, d.setValue("voucher", m), E(m);
      }).catch(S => {
        v === o.current && T(S instanceof Error ? S.message : V("partner.voucherLoadFailed"));
      }).finally(() => {
        v === o.current && d.setValue("loading", !1);
      });
    },
    L = (a, s = 0) => A(a, 0, s),
    Y = a => A(a.kind, a.seq),
    W = () => {
      const a = Number(f.getFormValue("partner_seq")) || 0,
        s = String(f.getFormValue("voucher_date") ?? ""),
        l = `${a}|${s}`;
      if (l === p.current) return;
      p.current = l;
      const v = String(f.getFormValue("due_date") ?? "");
      if (v && v !== g.current) return;
      const S = i.current.get(a),
        y = S ? de(s, S) : "";
      g.current = y, f.setFormValue("due_date", y);
    },
    z = () => f.getFormValue("itemIds") ?? [],
    K = () => {
      const a = se();
      f.setFormValue(`items.${a}`, {
        ...ae
      }), f.setFormValue("itemIds", [...z(), a]);
    },
    re = a => {
      const s = z();
      s.length > 1 && f.setFormValue("itemIds", s.filter(l => l !== a));
    },
    B = async () => {
      const a = Number(d.getValue("voucherSeq")) || 0;
      if (a) try {
        await M.remove(a), t.current.onChanged?.("removed"), _.form.close();
      } catch (s) {
        T(s instanceof Error ? s.message : V("partner.voucherDeleteFailed"));
      }
    },
    k = async a => {
      const s = Q[u()].pay;
      if (await De({
        message: V("partner.paymentDeleteConfirm", {
          date: a.pay_date,
          amount: G(a.amount),
          word: s
        }),
        confirmText: V("partner.delete")
      })) try {
        await M.removePayment(a.seq), await C(Number(d.getValue("voucherSeq")) || 0);
      } catch (v) {
        T(v instanceof Error ? v.message : V("partner.paymentDeleteFailed"));
      }
    };
  return be(["partner_voucher", "partner_payment"], a => {
    const s = Number(d.getValue("voucherSeq")) || 0;
    if (!s || !_.form.isOpen) return;
    const l = qe(a, "partner_voucher", s),
      v = a.changes.some(y => y.entity === "partner_payment");
    if (!l && !v && !a.resync) return;
    if (l?.action === "delete") {
      _.form.close(), T(V("partner.voucherDeletedByOther"));
      return;
    }
    const S = o.current;
    M.detail(s).then(y => {
      if (S !== o.current || !_.form.isOpen) return;
      const m = f.getFormValues(),
        H = h.current ?? m,
        O = y.items.length ? y.items : [ae],
        U = O.map(() => se()),
        q = {
          ...m,
          title: y.title ?? "",
          partner_seq: y.partner_seq || "",
          voucher_date: y.voucher_date || m.voucher_date,
          due_date: y.due_date,
          evidence: y.evidence ?? "tax_invoice",
          vat_mode: y.vat_mode ?? "exclusive",
          memo: y.memo ?? "",
          itemIds: U,
          items: Object.fromEntries(O.map((I, N) => [U[N], {
            name: I.name,
            spec: I.spec,
            qty: I.qty || "",
            unit_price: I.unit_price || "",
            note: I.note
          }]))
        },
        {
          patch: D
        } = Re(m, H, q, {
          skip: ["itemIds", "items"]
        }),
        R = I => JSON.stringify((I.itemIds ?? []).map(N => I.items?.[N]));
      R(m) === R(H) && R(m) !== R(q) && Object.assign(D, {
        itemIds: q.itemIds,
        items: q.items
      }), h.current = q, Object.keys(D).length > 0 && f.setFormValues(D), d.setValue("voucher", y);
    }).catch(() => {});
  }, {
    enabled: _.form.isOpen
  }), {
    form: f,
    paymentForm: P,
    modals: _,
    ui: d,
    openCreate: L,
    openEdit: Y,
    syncDueDate: W,
    addItem: K,
    removeItem: re,
    remove: B,
    removePayment: k
  };
}
const mt = Ie(Ye),
  pt = Ie(Ee);
function dt({
  form: n,
  onSync: t
}) {
  const o = n.useValue("partner_seq"),
    h = n.useValue("voucher_date");
  return b.useEffect(() => {
    t();
  }, [o, h]), null;
}
function ht({
  controller: n,
  voucher: t,
  kind: o,
  isMobile: h
}) {
  const i = J(),
    p = le("partner").canWrite,
    {
      paymentForm: g
    } = n,
    _ = g.isSubmitting,
    d = (u, f, E = !1) => e.jsxs(c, {
      sx: {
        flex: 1,
        minWidth: 0
      },
      children: [e.jsx(c, {
        sx: {
          fontSize: 12,
          color: w[500]
        },
        children: u
      }), e.jsx(c, {
        sx: {
          fontSize: E ? 17 : 15,
          fontWeight: E ? 700 : 600,
          whiteSpace: "nowrap"
        },
        children: G(f)
      })]
    });
  return e.jsxs(c, {
    sx: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    },
    children: [e.jsxs(c, {
      sx: {
        display: "flex",
        gap: 2,
        bgcolor: w[50],
        borderRadius: 1.5,
        px: 2,
        py: 1.5
      },
      children: [d(i("partner.total"), t.total_amount), d(i(`partner.${o}PaidTotal`), t.paid_amount), d(i("partner.remainingAmount"), t.balance, !0)]
    }), t.balance > 0 && p ? e.jsxs(c, {
      sx: {
        display: "flex",
        gap: 1.5,
        flexDirection: h ? "column" : "row",
        alignItems: h ? "stretch" : "center"
      },
      children: [e.jsx(ie, {
        form: g,
        name: "pay_date",
        label: i(`partner.${o}PayDate`),
        size: "small",
        fullWidth: !0
      }), e.jsx(We, {
        form: g,
        name: "amount",
        label: i("partner.amount"),
        size: "small",
        fullWidth: !0,
        textAlign: "right",
        min: 0
      }), e.jsx(oe, {
        form: g,
        name: "method",
        label: i("partner.method"),
        options: pt,
        showEmptyOption: !1,
        size: "small",
        fullWidth: !0
      }), e.jsx(Se, {
        form: g,
        name: "memo",
        label: i("partner.note"),
        size: "small",
        fullWidth: !0,
        slotProps: {
          htmlInput: {
            maxLength: 200
          }
        }
      }), e.jsx(ee, {
        variant: "outlined",
        onClick: () => {
          g.submit();
        },
        disabled: _,
        sx: {
          flexShrink: 0,
          whiteSpace: "nowrap"
        },
        children: i(_ ? "partner.recording" : `partner.${o}PayRecord`)
      })]
    }) : null, t.payments.length > 0 ? e.jsx(c, {
      sx: {
        display: "flex",
        flexDirection: "column"
      },
      children: t.payments.map(u => e.jsxs(c, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          py: .75,
          fontSize: 14,
          borderTop: `1px solid ${w[100]}`,
          flexWrap: h ? "wrap" : "nowrap"
        },
        children: [e.jsx(c, {
          sx: {
            width: 96,
            flexShrink: 0,
            color: w[600]
          },
          children: u.pay_date
        }), e.jsx(c, {
          sx: {
            width: 120,
            flexShrink: 0,
            textAlign: "right",
            fontWeight: 600
          },
          children: G(u.amount)
        }), e.jsx(c, {
          sx: {
            width: 72,
            flexShrink: 0,
            color: w[600]
          },
          children: Ee[u.method]
        }), e.jsx(c, {
          sx: {
            flex: 1,
            minWidth: 0,
            color: w[600],
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          },
          children: u.memo
        }), e.jsx(Fe, {
          title: i(`partner.${o}PayRecordDelete`),
          children: e.jsx($e, {
            size: "small",
            onClick: () => {
              n.removePayment(u);
            },
            disabled: !p,
            sx: {
              color: w[500],
              ...(p ? {} : {
                visibility: "hidden"
              })
            },
            children: e.jsx(Me, {
              fontSize: "small"
            })
          })
        })]
      }, u.seq))
    }) : e.jsx(c, {
      sx: {
        fontSize: 14,
        color: w[500]
      },
      children: i(`partner.${o}PayEmpty`)
    })]
  });
}
function ft({
  controller: n
}) {
  const t = J(),
    o = _e(),
    h = le("partner").canWrite,
    {
      form: i,
      modals: p,
      ui: g
    } = n,
    _ = tt(i),
    d = i.useFormValue("itemIds") ?? [],
    u = g.useValue("kind") === "purchase" ? "purchase" : "sales",
    f = Number(g.useValue("voucherSeq")) || 0,
    E = g.useValue("voucher"),
    P = !!g.useValue("loading"),
    C = g.useValue("partnerOptions") ?? [],
    A = i.isSubmitting,
    L = Q[u],
    Y = f ? `${t(`partner.${u}Edit`)}${E?.voucher_no ? ` (${E.voucher_no})` : ""}` : t(`partner.${u}Create`),
    W = {
      display: "flex",
      gap: 2,
      flexDirection: o ? "column" : "row"
    };
  return e.jsx(Te, {
    readOnly: !h,
    open: p.form.isOpen,
    onClose: p.form.close,
    title: Y,
    maxWidth: "lg",
    backdropClick: !1,
    scrollPastLastSection: !1,
    fullScreen: o,
    mobilePresentation: o ? "slide" : "dialog",
    titleIcons: {
      delete: {
        visible: !!f && h,
        confirmConfig: {
          title: t(`partner.${u}Delete`),
          message: t(`partner.${u}DeleteConfirm`),
          confirmText: t("partner.delete"),
          cancelText: t("partner.cancel")
        }
      },
      print: {
        visible: !1
      },
      share: {
        visible: !1
      }
    },
    onDelete: n.remove,
    tabs: {
      visible: !1
    },
    actions: {
      showCancelButton: !0,
      right: h ? e.jsx(ee, {
        variant: "contained",
        onClick: () => {
          i.submit();
        },
        disabled: A || P,
        children: t(A ? "partner.saving" : "partner.save")
      }) : void 0
    },
    sections: [{
      id: "voucher-basic",
      title: t("partner.basicInfo"),
      children: P ? e.jsx(c, {
        sx: {
          display: "flex",
          justifyContent: "center",
          py: 4
        },
        children: e.jsx(Pe, {
          size: 28
        })
      }) : e.jsxs(c, {
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: 2
        },
        children: [e.jsx(dt, {
          form: i,
          onSync: n.syncDueDate
        }), e.jsxs(c, {
          sx: W,
          children: [e.jsx(oe, {
            form: i,
            name: "partner_seq",
            label: L.partner,
            options: C,
            emptyLabel: C.length > 0 ? t(`partner.${u}PartnerSelect`) : t(`partner.${u}PartnerEmpty`),
            fullWidth: !0
          }), e.jsx(Se, {
            form: i,
            name: "title",
            label: t("partner.voucherTitle"),
            required: !0,
            fullWidth: !0,
            placeholder: t(`partner.${u}TitlePlaceholder`),
            slotProps: {
              htmlInput: {
                maxLength: 200
              }
            }
          })]
        }), e.jsxs(c, {
          sx: W,
          children: [e.jsx(ie, {
            form: i,
            name: "voucher_date",
            label: t("partner.voucherDate"),
            fullWidth: !0
          }), e.jsx(ie, {
            form: i,
            name: "due_date",
            label: t("partner.dueDate"),
            fullWidth: !0
          }), e.jsx(oe, {
            form: i,
            name: "evidence",
            label: t("partner.evidence"),
            options: mt,
            showEmptyOption: !1,
            fullWidth: !0
          })]
        })]
      })
    }, {
      id: "voucher-items",
      title: t("partner.items"),
      children: e.jsxs(c, {
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: 1
        },
        children: [o ? null : e.jsx(Xe, {}), d.map((z, K) => e.jsx(Ze, {
          id: z,
          index: K,
          form: _,
          isMobile: o,
          canRemove: d.length > 1,
          onRemove: n.removeItem
        }, z)), h ? e.jsx(c, {
          children: e.jsx(ee, {
            startIcon: e.jsx(je, {}),
            onClick: n.addItem,
            disabled: P,
            children: t("partner.addItem")
          })
        }) : null]
      })
    }, {
      id: "voucher-summary",
      title: t("partner.totalAndNote"),
      children: e.jsxs(c, {
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: 2
        },
        children: [e.jsx(et, {
          form: _,
          itemIds: d,
          isMobile: o
        }), e.jsx(Le, {
          form: i,
          name: "memo",
          label: t("partner.note"),
          fullWidth: !0,
          minRows: 2,
          slotProps: {
            htmlInput: {
              maxLength: 1e3
            }
          }
        })]
      })
    }, ...(f && E ? [{
      id: "voucher-payments",
      title: L.pay,
      children: e.jsx(ht, {
        controller: n,
        voucher: E,
        kind: u,
        isMobile: o
      })
    }] : [])]
  });
}
const xe = 50,
  xt = 300,
  gt = 48,
  vt = "#9b9a97",
  yt = "#f8f8f7",
  ge = {
    settled: {
      color: w[600],
      bg: w[100]
    },
    partial: {
      color: "#b45309",
      bg: "rgba(245, 158, 11, 0.14)"
    },
    open: {
      color: "#1d4ed8",
      bg: "rgba(37, 99, 235, 0.10)"
    },
    overdue: {
      color: "#b91c1c",
      bg: "rgba(239, 68, 68, 0.12)"
    }
  };
function ve({
  status: n,
  kind: t
}) {
  const o = J(),
    h = {
      settled: o(`partner.${t}StatusSettled`),
      partial: o(`partner.${t}StatusPartial`),
      open: o(`partner.${t}StatusOpen`),
      overdue: o("partner.statusOverdue")
    }[n];
  return e.jsx(c, {
    component: "span",
    sx: {
      display: "inline-flex",
      alignItems: "center",
      px: 1,
      height: 22,
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 600,
      color: ge[n].color,
      bgcolor: ge[n].bg,
      whiteSpace: "nowrap"
    },
    children: h
  });
}
function ye({
  searching: n,
  kind: t
}) {
  const o = J();
  return e.jsx(c, {
    sx: {
      py: 6,
      px: 2,
      textAlign: "center",
      color: vt,
      fontSize: 14,
      wordBreak: "keep-all"
    },
    children: o(n ? `partner.${t}SearchEmpty` : `partner.${t}ListEmpty`)
  });
}
function Tt({
  kind: n
}) {
  const t = J(),
    o = le("partner").canWrite,
    h = ot(`partner.voucher.${n}`),
    i = _e(),
    g = Ae()?.seq ?? 0,
    _ = Q[n],
    d = Z(),
    [u, f] = b.useState([]),
    [E, P] = b.useState(0),
    [C, A] = b.useState(!1),
    [L, Y] = b.useState(""),
    [W, z] = b.useState(""),
    [K, re] = we(),
    B = Math.max(0, Number(K.get(me)) || 0),
    k = K.get(ne) === "1" ? "unsettled" : "",
    a = r => re(j => {
      const x = new URLSearchParams(j);
      for (const [F, $] of Object.entries(r)) $ ? x.set(F, $) : x.delete(F);
      return x;
    }, {
      replace: !0
    }),
    s = b.useRef(1),
    l = b.useRef(0);
  b.useEffect(() => {
    const r = setTimeout(() => z(L.trim()), xt);
    return () => clearTimeout(r);
  }, [L]);
  const v = b.useCallback(async r => {
    if (!g) {
      f([]), P(0);
      return;
    }
    const j = ++l.current,
      x = r === "refresh",
      F = r === "more" ? s.current + 1 : 1;
    x || A(!0);
    try {
      const $ = await M.list({
        kind: n,
        partnerSeq: B,
        unsettled: k === "unsettled",
        search: W,
        page: F,
        limit: x ? Math.max(1, s.current) * xe : xe
      });
      if (j !== l.current) return;
      x || (s.current = F), f(Ve => r === "more" ? [...Ve, ...$.items] : $.items), P($.total);
    } catch ($) {
      if (j !== l.current || x) return;
      T($ instanceof Error ? $.message : t("partner.voucherListLoadFailed"));
    } finally {
      j === l.current && A(!1);
    }
  }, [g, n, B, k, W]);
  b.useEffect(() => {
    v("reload");
  }, [v]), be(["partner_voucher", "partner_payment", "partner"], () => {
    v("refresh");
  });
  const S = ut({
      onChanged: r => {
        r !== "payment" && He({
          message: t(r === "removed" ? "partner.deleted" : "partner.saved"),
          delay: 500
        }), v("reload");
      }
    }),
    y = u.length < E,
    m = () => {
      !C && y && v("more");
    },
    H = () => S.openCreate(n, B),
    O = r => S.openEdit(r),
    U = B ? u.find(r => r.partner_seq === B)?.partner_name ?? "" : "",
    q = e.jsxs(c, {
      sx: {
        display: "flex",
        alignItems: "center",
        gap: 1,
        "& .MuiToggleButtonGroup-root": {
          height: 40,
          flexWrap: "nowrap"
        }
      },
      children: [e.jsx(Ue, {
        size: "medium",
        value: k,
        onChange: r => a({
          [ne]: r === "unsettled" ? "1" : null
        }),
        options: [{
          value: "",
          label: t("partner.all")
        }, {
          value: "unsettled",
          label: t(`partner.${n}StatusOpen`)
        }],
        sx: {
          "& .MuiToggleButtonGroup-grouped": {
            minWidth: 56,
            px: 1.5
          }
        }
      }), B ? e.jsx(Be, {
        label: U || t("partner.onePartner"),
        onDelete: () => a({
          [me]: null
        }),
        sx: {
          maxWidth: 200
        }
      }) : null]
    }),
    D = e.jsx(ft, {
      controller: S
    }),
    R = rt(C);
  if (it(!i && o ? {
    label: t(`partner.${n}Create`),
    onClick: () => H()
  } : null), i) {
    const r = x => e.jsxs(c, {
        role: "button",
        tabIndex: 0,
        onClick: () => O(x),
        onKeyDown: F => {
          (F.key === "Enter" || F.key === " ") && (F.preventDefault(), O(x));
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
            bgcolor: yt
          }
        },
        children: [e.jsxs(c, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: .75,
            minWidth: 0
          },
          children: [e.jsx(ve, {
            status: pe(x, d),
            kind: n
          }), e.jsx(ue, {
            noWrap: !0,
            sx: {
              fontSize: 15,
              fontWeight: 600,
              minWidth: 0
            },
            children: x.title
          })]
        }), e.jsxs(c, {
          sx: {
            display: "flex",
            gap: 1.25,
            fontSize: 14,
            color: "text.secondary",
            flexWrap: "wrap"
          },
          children: [e.jsx("span", {
            children: x.partner_name
          }), e.jsx("span", {
            children: x.voucher_date
          }), e.jsx(c, {
            component: "span",
            sx: {
              fontWeight: 600,
              color: "text.primary"
            },
            children: G(x.total_amount)
          }), x.balance > 0 && x.balance !== x.total_amount ? e.jsx("span", {
            children: t("partner.remainingWon", {
              amount: G(x.balance)
            })
          }) : null]
        })]
      }, x.seq),
      j = [e.jsx(Ge, {
        searchValue: L,
        onSearchChange: Y,
        searchPlaceholder: t("partner.searchVoucherTitle"),
        below: e.jsx(c, {
          children: q
        })
      }, "title"), ...u.map(r)];
    return R && u.length === 0 && j.push(e.jsx(ye, {
      searching: !!W,
      kind: n
    }, "empty")), R || j.push(e.jsx(at, {}, "loading")), y && j.push(e.jsx(c, {
      sx: {
        display: "flex",
        justifyContent: "center",
        py: .5
      },
      children: e.jsx(ee, {
        fullWidth: !0,
        onClick: m,
        disabled: C,
        children: t("partner.loadMore")
      })
    }, "more")), e.jsxs(e.Fragment, {
      children: [e.jsx(nt, {
        attachHead: !0,
        children: j
      }), o ? e.jsx(Ne, {
        color: "primary",
        "aria-label": t(`partner.${n}Create`),
        onClick: H,
        sx: {
          position: "fixed",
          right: 24,
          bottom: "calc(24px + var(--taskbox-fab-lift, 0px))",
          zIndex: 40
        },
        children: e.jsx(je, {})
      }) : null, D]
    });
  }
  const I = r => G(r),
    N = [{
      id: "voucher_date",
      text: t("partner.voucherDate"),
      width: 110,
      align: "center"
    }, {
      id: "voucher_no",
      text: t("partner.number"),
      width: 100,
      align: "center"
    }, {
      id: "partner_name",
      text: _.partner,
      width: 180,
      align: "center"
    }, {
      id: "title",
      text: t("partner.voucherTitle"),
      style: {
        fontSize: 15
      },
      render: r => e.jsx(c, {
        component: "span",
        sx: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        },
        children: r.title
      })
    }, {
      id: "total_amount",
      text: t("partner.total"),
      width: 130,
      align: "right",
      render: r => I(r.total_amount)
    }, {
      id: "balance",
      text: t("partner.remainingAmount"),
      width: 130,
      align: "right",
      render: r => r.balance > 0 ? I(r.balance) : "-"
    }, {
      id: "due_date",
      text: t("partner.dueDate"),
      width: 110,
      align: "center"
    }, {
      id: "status",
      text: t("partner.status"),
      width: 100,
      align: "center",
      filterOptions: [{
        value: "unsettled",
        label: t(`partner.${n}StatusOpen`)
      }],
      filterValues: k ? [k] : [],
      filterMultiple: !1,
      onFilterChange: r => a({
        [ne]: r[0] === "unsettled" ? "1" : null
      }),
      render: r => e.jsx(ve, {
        status: pe(r, d),
        kind: n
      })
    }],
    X = {
      filter: {
        stateId: `partner-voucher-filters-${n}`,
        showChips: !1,
        groups: [{
          filters: [{
            type: "custom",
            name: "voucher-settle",
            node: q
          }]
        }]
      },
      showSearch: !0,
      searchValue: L,
      searchPlaceholder: t("partner.searchVoucherTitle"),
      onSearchChange: Y,
      searchLoading: C,
      collapsible: !1,
      showCollapseButton: !1,
      showClearIcon: !1
    };
  return e.jsxs(e.Fragment, {
    children: [e.jsxs(c, {
      sx: {
        position: "relative",
        height: "100%",
        minHeight: 0,
        display: "flex",
        flexDirection: "column"
      },
      children: [e.jsx(ze, {
        header: X,
        tableProps: {
          ...h,
          scrollbars: st,
          mobile: !0,
          variant: "notion",
          columns: N,
          data: u,
          totalCount: E,
          getRowId: r => String(r.seq),
          rowHeight: gt,
          onRowClick: O,
          onLoadMore: m,
          loading: C,
          emptyMessage: e.jsx(ye, {
            searching: !!W,
            kind: n
          })
        }
      }), g ? null : e.jsxs(c, {
        sx: {
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          color: w[500],
          bgcolor: "background.paper",
          "& .MuiSvgIcon-root": {
            fontSize: 48,
            color: w[300]
          }
        },
        children: [e.jsx(ke, {}), e.jsx(ue, {
          sx: {
            fontSize: "0.9rem"
          },
          children: t(`partner.${n}NeedOrg`)
        })]
      })]
    }), D]
  });
}
export { Tt as V };