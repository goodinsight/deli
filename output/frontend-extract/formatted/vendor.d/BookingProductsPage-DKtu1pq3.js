import { r as w, j as t } from "./react-CjxcGQav.js";
import { e as Z, c8 as ee, ak as te, dv as H, fA as oe, bO as V, bT as C, cL as ne, bx as ie, bv as G, D as $, cI as re, B as g, ca as O, al as W, cm as q, aq as ae, L as K, cn as se, cY as le, bQ as U, cz as ce, fL as de, F as ue, d8 as R, cJ as B, lr as me, ce as ge, cf as be, h0 as N } from "../js.d/main-Cm9wS5wt.js";
import { b as pe } from "./MobileCardListLayout-D5_p2Xer.js";
import { M as fe } from "./MobileListTitleBar-tZ34p2gY.js";
import { b as y, g as M, s as A, u as J, a as xe } from "./bookingApi-DC6gLfSO.js";
import { l as f, t as z } from "./types-CVXtrYKe.js";
import { T as he } from "./Trans-CU1vl0TZ.js";
import { T as ke } from "./tableScrollbars-C9bhlJjO.js";
import { u as ye } from "./useColumnWidths-DSAca5rC.js";
import { N as D } from "./newBookingSidebarAction-cymKHTSc.js";
import "./stylis-DdLD6a3t.js";
import "./mobileSearchOverlay-DYWcMOOb.js";
import "./profileApi-Btafs-pM.js";
import "./sidebarAction-Z0aCDENX.js";
import "./BookingFormDialog-EC3RsN2H.js";
import "./OptionToggleGroup-Cvm2wRyq.js";
function P(r) {
  return {
    name: r?.name ?? "",
    category_name: r?.category_name ?? "",
    price: r?.price || "",
    cost: r?.cost || "",
    duration_minutes: r?.duration_minutes || "",
    tax_type: r?.tax_type ?? "taxable",
    description: r?.description ?? "",
    enabled: r?.enabled ?? !0
  };
}
function Se() {
  const r = {
      form: Z({
        modalId: "booking-product-form"
      })
    },
    c = ee({
      stateId: "booking-product-ui",
      initialValues: {
        target: null
      }
    }),
    n = te({
      formId: "booking-product-form",
      initialValues: P(null),
      onValidate: i => String(i.name ?? "").trim() ? !0 : (V(C("booking.errNameRequired")), !1),
      onSubmit: async i => {
        const a = c.getValue("target"),
          b = {
            name: String(i.name ?? "").trim(),
            category_name: String(i.category_name ?? "").trim(),
            price: Number(i.price) || 0,
            cost: Number(i.cost) || 0,
            duration_minutes: Number(i.duration_minutes) || 0,
            tax_type: i.tax_type,
            description: String(i.description ?? "").trim(),
            enabled: i.enabled !== !1
          };
        try {
          const s = a ? await y.updateProduct(a.seq, b) : await y.createProduct(b),
            d = M();
          return A(a ? d.map(u => u.seq === s.seq ? s : u) : [...d, s]), r.form.close(), ie({
            message: C("booking.saved"),
            delay: 500
          }), !0;
        } catch (s) {
          return V(s instanceof Error ? s.message : C("booking.errSave")), !1;
        }
      }
    }),
    o = w.useRef(null),
    p = () => {
      o.current = null, n.setFormValues(P(null)), c.setValue("target", null), r.form.open();
    },
    l = i => {
      o.current = P(i), n.setFormValues(P(i)), c.setValue("target", i), r.form.open();
    },
    S = async () => {
      const i = c.getValue("target");
      if (i) try {
        await y.removeProduct(i.seq), A(M().filter(a => a.seq !== i.seq)), r.form.close();
      } catch (a) {
        V(a instanceof Error ? a.message : C("booking.errDelete"));
      }
    };
  return H(["booking_product"], i => {
    const a = c.getValue("target");
    if (!a || !o.current || !r.form.isOpen) return;
    const b = oe(i, "booking_product", a.seq);
    if (!(!b && !i.resync)) {
      if (b?.action === "delete") {
        o.current = null, r.form.close(), V(C("booking.productDeletedByOther"));
        return;
      }
      y.meta().then(s => {
        const d = c.getValue("target"),
          u = s.products.find(x => x.seq === a.seq);
        if (!u || d?.seq !== u.seq || !o.current || !r.form.isOpen) return;
        const _ = n.getFormValues(),
          {
            patch: h,
            baseline: j
          } = ne(_, o.current, P(u));
        o.current = j, Object.keys(h).length > 0 && n.setFormValues(h), c.setValue("target", u);
      }).catch(() => {});
    }
  }, {
    enabled: r.form.isOpen
  }), {
    form: n,
    modals: r,
    ui: c,
    openCreate: p,
    openEdit: l,
    remove: S
  };
}
const je = [{
  value: "taxable",
  labelKey: "booking.taxableInclusive"
}, {
  value: "free",
  labelKey: "booking.taxFree"
}];
function ve({
  controller: r,
  canManage: c
}) {
  const n = G(),
    o = $(),
    p = J(),
    {
      form: l,
      modals: S,
      ui: i
    } = r,
    a = i.useValue("target"),
    b = l.isSubmitting,
    s = !c || b,
    d = Number(l.useFormValue("price")) || 0,
    u = Number(l.useFormValue("cost")) || 0,
    h = l.useFormValue("tax_type") === "free" ? 0 : Math.floor(d / 11),
    j = d - h - u,
    x = (v, k) => t.jsxs(g, {
      sx: {
        display: "flex",
        gap: O,
        "& > *": {
          flex: 1,
          minWidth: 0
        }
      },
      children: [v, k]
    });
  return t.jsx(re, {
    open: S.form.isOpen,
    onClose: S.form.close,
    title: a ? a.name : n("booking.newProduct", {
      product: p.product
    }),
    maxWidth: "sm",
    backdropClick: !1,
    scrollPastLastSection: !1,
    fullScreen: o,
    mobilePresentation: o ? "slide" : "dialog",
    titleIcons: {
      print: {
        visible: !1
      },
      share: {
        visible: !1
      },
      delete: {
        visible: !!(a && c),
        confirmConfig: {
          title: n("booking.deleteProduct", {
            product: p.product
          }),
          message: n("booking.deleteProductConfirm"),
          confirmText: n("booking.delete"),
          cancelText: n("booking.cancel")
        }
      }
    },
    onDelete: r.remove,
    tabs: {
      visible: !1
    },
    actions: {
      showCancelButton: !0,
      right: c ? t.jsx(U, {
        variant: "contained",
        onClick: () => {
          l.submit();
        },
        disabled: b,
        children: n(b ? "booking.saving" : "booking.save")
      }) : void 0
    },
    sections: [{
      id: "booking-product-main",
      showTitle: !1,
      children: t.jsxs(g, {
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: O
        },
        children: [x(t.jsx(W, {
          form: l,
          name: "name",
          label: n("booking.colName"),
          required: !0,
          disabled: s,
          fullWidth: !0,
          autoFocus: !o && !a,
          slotProps: {
            htmlInput: {
              maxLength: 80
            }
          }
        }), t.jsx(W, {
          form: l,
          name: "category_name",
          label: n("booking.colCategory"),
          disabled: s,
          fullWidth: !0,
          slotProps: {
            htmlInput: {
              maxLength: 40
            }
          }
        })), x(t.jsx(q, {
          form: l,
          name: "price",
          label: n("booking.salePriceVatIncl"),
          suffix: n("booking.wonSuffix"),
          min: 0,
          disabled: s,
          fullWidth: !0
        }), t.jsx(q, {
          form: l,
          name: "cost",
          label: n("booking.colCost"),
          suffix: n("booking.wonSuffix"),
          min: 0,
          disabled: s,
          fullWidth: !0
        })), x(t.jsx(q, {
          form: l,
          name: "duration_minutes",
          label: n("booking.duration"),
          suffix: n("booking.minuteSuffix"),
          min: 0,
          disabled: s,
          fullWidth: !0
        }), t.jsx(ae, {
          form: l,
          name: "tax_type",
          label: n("booking.colVat"),
          options: je.map(({
            value: v,
            labelKey: k
          }) => ({
            value: v,
            label: n(k)
          })),
          showEmptyOption: !1,
          disabled: s,
          fullWidth: !0
        })), d > 0 ? t.jsx(K, {
          sx: {
            fontSize: "0.875rem",
            color: "text.secondary"
          },
          children: t.jsx(he, {
            i18nKey: "booking.marginPreview",
            values: {
              vat: f(h),
              cost: f(u),
              margin: f(j)
            },
            components: {
              b: t.jsx(g, {
                component: "span",
                sx: {
                  fontWeight: 600,
                  color: j >= 0 ? "text.primary" : "error.main"
                }
              })
            }
          })
        }) : null, t.jsx(se, {
          form: l,
          name: "description",
          label: n("booking.description"),
          fullWidth: !0,
          minRows: 2,
          disabled: s,
          slotProps: {
            htmlInput: {
              maxLength: 500
            }
          }
        }), t.jsx(le, {
          form: l,
          name: "enabled",
          label: n("booking.sellingSwitch"),
          disabled: s
        })]
      })
    }]
  });
}
const we = 48,
  I = r => r.price - (r.tax_type === "free" ? 0 : Math.floor(r.price / 11)) - r.cost;
function Ae() {
  const r = ye("booking.products"),
    c = $(),
    n = ce()?.seq ?? 0,
    o = G(),
    p = J(),
    l = e => e.toLocaleString(ge(be())),
    S = xe(),
    i = Se(),
    [a, b] = w.useState(!1),
    s = de("booking").canWrite,
    d = a && s,
    [u, _] = w.useState({}),
    [h, j] = w.useState(!0),
    [x, v] = w.useState(""),
    k = x.trim().toLowerCase(),
    F = k ? S.filter(e => `${e.name} ${e.category_name}`.toLowerCase().includes(k)) : S,
    E = o("booking.searchProduct", {
      product: p.product
    });
  w.useEffect(() => {
    if (!n) return;
    let e = !0;
    return j(!0), y.meta().then(m => e && b(m.can_manage)).catch(() => {}).finally(() => e && j(!1)), y.productSales().then(m => e && _(m)).catch(() => {}), () => {
      e = !1;
    };
  }, [n]), H(["booking_product", "booking"], e => {
    N(e, "booking_product") && y.meta().then(m => b(m.can_manage)).catch(() => {}), N(e, "booking") && y.productSales().then(_).catch(() => {});
  }, {
    enabled: n > 0
  });
  const T = t.jsxs(K, {
      sx: {
        py: 6,
        textAlign: "center",
        fontSize: "0.9375rem",
        color: "text.secondary",
        wordBreak: "keep-all"
      },
      children: [k ? o("booking.productNotFound", {
        product: p.product
      }) : o("booking.productEmpty", {
        product: p.product
      }), d && !k ? ` ${o("booking.productEmptyHint", {
        product: p.product
      })}` : ""]
    }),
    L = t.jsx(ve, {
      controller: i,
      canManage: d
    }),
    Q = d ? t.jsx(ue, {
      color: "primary",
      "aria-label": o("booking.newProduct", {
        product: p.product
      }),
      onClick: i.openCreate,
      sx: {
        position: "fixed",
        right: 24,
        bottom: "calc(24px + var(--taskbox-fab-lift, 0px))",
        zIndex: 40
      },
      children: t.jsx(R, {})
    }) : null;
  if (c) return t.jsxs(t.Fragment, {
    children: [t.jsxs(pe, {
      attachHead: !0,
      children: [t.jsx(B, {
        elevation: 0,
        children: t.jsx(fe, {
          searchValue: x,
          onSearchChange: v,
          searchPlaceholder: E
        })
      }), F.length === 0 && !h ? t.jsx(B, {
        elevation: 0,
        children: T
      }) : null, F.map(e => t.jsxs(B, {
        elevation: 0,
        onClick: () => i.openEdit(e),
        sx: {
          p: 2,
          cursor: "pointer",
          opacity: e.enabled ? 1 : .55
        },
        children: [t.jsxs(g, {
          sx: {
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 2
          },
          children: [t.jsx(g, {
            sx: {
              minWidth: 0,
              fontSize: "1rem",
              fontWeight: 600,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: e.name
          }), t.jsx(g, {
            sx: {
              flexShrink: 0,
              fontSize: "1rem",
              fontWeight: 600,
              fontVariantNumeric: "tabular-nums"
            },
            children: f(e.price)
          })]
        }), t.jsx(g, {
          sx: {
            mt: .5,
            fontSize: "0.875rem",
            color: "text.secondary",
            wordBreak: "keep-all"
          },
          children: [e.category_name, e.duration_minutes > 0 ? z(e.duration_minutes) : "", o("booking.costAmount", {
            amount: f(e.cost)
          }), o("booking.marginAmount", {
            amount: f(I(e))
          }), o("booking.soldCount", {
            n: l(u[String(e.seq)]?.qty ?? 0)
          }), e.enabled ? "" : o("booking.notSelling")].filter(Boolean).join(" · ")
        })]
      }, e.seq))]
    }), Q, t.jsx(D, {}), L]
  });
  const X = [{
      id: "no",
      text: o("booking.colNo"),
      width: 64,
      align: "center",
      render: (e, m) => t.jsx(g, {
        component: "span",
        sx: {
          color: "text.secondary"
        },
        children: m + 1
      })
    }, {
      id: "name",
      text: o("booking.colName"),
      style: {
        fontSize: 15
      },
      render: e => t.jsx(g, {
        component: "span",
        sx: {
          fontWeight: 600,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        },
        children: e.name
      })
    }, {
      id: "category_name",
      text: o("booking.colCategory"),
      width: 140,
      align: "center"
    }, {
      id: "price",
      text: o("booking.colSalePrice"),
      width: 130,
      align: "right",
      render: e => f(e.price)
    }, {
      id: "cost",
      text: o("booking.colCost"),
      width: 130,
      align: "right",
      render: e => e.cost > 0 ? f(e.cost) : ""
    }, {
      id: "margin",
      text: o("booking.colMargin"),
      width: 130,
      align: "right",
      render: e => t.jsx(g, {
        component: "span",
        sx: I(e) < 0 ? {
          color: "error.main"
        } : void 0,
        children: f(I(e))
      })
    }, {
      id: "duration_minutes",
      text: o("booking.colTime"),
      width: 90,
      align: "center",
      render: e => e.duration_minutes > 0 ? z(e.duration_minutes) : ""
    }, {
      id: "tax_type",
      text: o("booking.colVat"),
      width: 90,
      align: "center",
      render: e => e.tax_type === "free" ? o("booking.taxFree") : o("booking.taxable")
    }, {
      id: "sales",
      text: o("booking.colTotalSales"),
      width: 150,
      align: "right",
      render: e => {
        const m = u[String(e.seq)];
        return m && m.qty > 0 ? `${o("booking.countUnit", {
          count: m.qty,
          n: l(m.qty)
        })} · ${f(m.amount)}` : t.jsx(g, {
          component: "span",
          sx: {
            color: "text.secondary"
          },
          children: o("booking.countUnit", {
            count: 0,
            n: "0"
          })
        });
      }
    }, {
      id: "enabled",
      text: o("booking.colSelling"),
      width: 90,
      align: "center",
      render: e => t.jsx(g, {
        component: "span",
        sx: {
          color: e.enabled ? "text.primary" : "text.secondary"
        },
        children: e.enabled ? o("booking.selling") : o("booking.notSellingShort")
      })
    }],
    Y = {
      left: d ? t.jsx(U, {
        variant: "contained",
        disableElevation: !0,
        startIcon: t.jsx(R, {}),
        onClick: i.openCreate,
        children: o("booking.newProduct", {
          product: p.product
        })
      }) : void 0,
      showSearch: !0,
      searchValue: x,
      searchPlaceholder: E,
      onSearchChange: v,
      collapsible: !1,
      showCollapseButton: !1,
      showClearIcon: !1
    };
  return t.jsxs(t.Fragment, {
    children: [t.jsx(g, {
      sx: {
        position: "relative",
        height: "100%",
        minHeight: 0,
        display: "flex",
        flexDirection: "column"
      },
      children: t.jsx(me, {
        header: Y,
        tableProps: {
          ...r,
          scrollbars: ke,
          mobile: !0,
          variant: "notion",
          columns: X,
          data: F,
          totalCount: F.length,
          getRowId: e => String(e.seq),
          rowHeight: we,
          onRowClick: i.openEdit,
          loading: h,
          emptyMessage: T
        }
      })
    }), t.jsx(D, {}), L]
  });
}
export { Ae as default };