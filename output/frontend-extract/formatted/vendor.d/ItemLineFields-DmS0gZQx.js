import { j as e, r as z } from "./react-CjxcGQav.js";
import { bv as f, B as l, s as m, bH as A, bI as L, cP as T, L as S, al as x, cm as h, aq as v, ma as w } from "../js.d/main-Cm9wS5wt.js";
import { u as E, s as _ } from "./FormValue-CAMilU-0.js";
import { d as P, l as y, w as u, f as $, a as W } from "./deal-B3IQ_ej7.js";
function R(t) {
  return t;
}
const D = w(W),
  I = "minmax(0, 1.4fr) minmax(0, 1.4fr) 80px 128px 128px minmax(0, 1fr) 36px",
  b = 1.5,
  j = "14px";
function V() {
  const t = f();
  return e.jsxs(l, {
    sx: {
      display: "grid",
      gridTemplateColumns: I,
      gap: b,
      fontSize: 13,
      fontWeight: 600,
      color: m[600],
      "& > span:nth-of-type(1), & > span:nth-of-type(2), & > span:nth-of-type(6)": {
        pl: j
      },
      "& > span:nth-of-type(3), & > span:nth-of-type(4)": {
        textAlign: "right",
        pr: j
      },
      "& > span:nth-of-type(5)": {
        textAlign: "right",
        pr: .5
      }
    },
    children: [e.jsx("span", {
      children: t("partner.itemName")
    }), e.jsx("span", {
      children: t("partner.itemSpec")
    }), e.jsx("span", {
      children: t("partner.itemQty")
    }), e.jsx("span", {
      children: t("partner.itemUnitPrice")
    }), e.jsx("span", {
      children: t("partner.supplyAmount")
    }), e.jsx("span", {
      children: t("partner.note")
    }), e.jsx("span", {})]
  });
}
function g({
  form: t,
  id: s,
  unit: p = !1
}) {
  const n = t.useValue(`items.${s}.qty`),
    i = t.useValue(`items.${s}.unit_price`),
    r = y(n, i);
  return e.jsx(e.Fragment, {
    children: p ? u(r) : $(r)
  });
}
const B = z.memo(function ({
  id: s,
  index: p,
  form: n,
  isMobile: i,
  canRemove: r,
  onRemove: c
}) {
  const a = f(),
    o = e.jsx(A, {
      title: a("partner.removeLine"),
      children: e.jsx("span", {
        children: e.jsx(L, {
          size: "small",
          onClick: () => c(s),
          disabled: !r,
          sx: {
            color: m[500]
          },
          children: e.jsx(T, {
            fontSize: "small"
          })
        })
      })
    });
  return i ? e.jsxs(l, {
    sx: {
      border: `1px solid ${m[200]}`,
      borderRadius: 2,
      p: 1.5,
      display: "flex",
      flexDirection: "column",
      gap: 1.5
    },
    children: [e.jsxs(l, {
      sx: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      },
      children: [e.jsx(S, {
        sx: {
          fontSize: 13,
          fontWeight: 600,
          color: m[600]
        },
        children: a("partner.itemNumber", {
          n: p + 1
        })
      }), o]
    }), e.jsx(x, {
      form: n,
      name: `items.${s}.name`,
      label: a("partner.itemName"),
      size: "small",
      fullWidth: !0,
      slotProps: {
        htmlInput: {
          maxLength: 100
        }
      }
    }), e.jsx(x, {
      form: n,
      name: `items.${s}.spec`,
      label: a("partner.itemSpec"),
      size: "small",
      fullWidth: !0,
      slotProps: {
        htmlInput: {
          maxLength: 100
        }
      }
    }), e.jsxs(l, {
      sx: {
        display: "flex",
        gap: 1.5
      },
      children: [e.jsx(h, {
        form: n,
        name: `items.${s}.qty`,
        label: a("partner.itemQty"),
        size: "small",
        fullWidth: !0,
        decimalLength: 2,
        textAlign: "right",
        min: 0
      }), e.jsx(h, {
        form: n,
        name: `items.${s}.unit_price`,
        label: a("partner.itemUnitPrice"),
        size: "small",
        fullWidth: !0,
        textAlign: "right",
        min: 0
      })]
    }), e.jsxs(l, {
      sx: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: 14
      },
      children: [e.jsx("span", {
        style: {
          color: m[500]
        },
        children: a("partner.supplyAmount")
      }), e.jsx(l, {
        component: "span",
        sx: {
          fontWeight: 600
        },
        children: e.jsx(g, {
          form: n,
          id: s,
          unit: !0
        })
      })]
    })]
  }) : e.jsxs(l, {
    sx: {
      display: "grid",
      gridTemplateColumns: I,
      gap: b,
      alignItems: "center"
    },
    children: [e.jsx(x, {
      form: n,
      name: `items.${s}.name`,
      size: "small",
      placeholder: a("partner.itemName"),
      clearIcon: !1,
      slotProps: {
        htmlInput: {
          maxLength: 100
        }
      }
    }), e.jsx(x, {
      form: n,
      name: `items.${s}.spec`,
      size: "small",
      placeholder: a("partner.itemSpec"),
      clearIcon: !1,
      slotProps: {
        htmlInput: {
          maxLength: 100
        }
      }
    }), e.jsx(h, {
      form: n,
      name: `items.${s}.qty`,
      size: "small",
      decimalLength: 2,
      textAlign: "right",
      min: 0
    }), e.jsx(h, {
      form: n,
      name: `items.${s}.unit_price`,
      size: "small",
      textAlign: "right",
      min: 0
    }), e.jsx(l, {
      sx: {
        textAlign: "right",
        fontSize: 14,
        fontWeight: 600,
        pr: .5,
        whiteSpace: "nowrap"
      },
      children: e.jsx(g, {
        form: n,
        id: s
      })
    }), e.jsx(x, {
      form: n,
      name: `items.${s}.note`,
      size: "small",
      placeholder: a("partner.note"),
      clearIcon: !1,
      slotProps: {
        htmlInput: {
          maxLength: 100
        }
      }
    }), o]
  });
});
function F({
  form: t,
  itemIds: s,
  isMobile: p
}) {
  const n = t.useValue("vat_mode"),
    i = f(),
    r = E(t, ["items"], () => {
      const a = t.getFormValue("items") ?? {};
      return P(s.map(o => y(a[o]?.qty, a[o]?.unit_price)), n);
    }, _),
    c = (a, o, d = !1) => e.jsxs(l, {
      sx: {
        display: "flex",
        justifyContent: "space-between",
        gap: 2,
        fontSize: d ? 17 : 14,
        fontWeight: d ? 700 : 500
      },
      children: [e.jsx("span", {
        style: {
          color: d ? void 0 : m[600]
        },
        children: a
      }), e.jsx("span", {
        children: o
      })]
    });
  return e.jsxs(l, {
    sx: {
      display: "flex",
      flexDirection: p ? "column" : "row",
      gap: 2,
      alignItems: p ? "stretch" : "flex-start"
    },
    children: [e.jsx(l, {
      sx: {
        width: p ? "100%" : 180,
        flexShrink: 0
      },
      children: e.jsx(v, {
        form: t,
        name: "vat_mode",
        label: i("partner.vat"),
        options: D,
        showEmptyOption: !1,
        size: "small",
        fullWidth: !0
      })
    }), e.jsxs(l, {
      sx: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: .75,
        bgcolor: m[50],
        borderRadius: 1.5,
        px: 2,
        py: 1.5
      },
      children: [c(i("partner.supplyAmount"), u(r.supply)), c(i(n === "none" ? "partner.vatExempt" : "partner.vat"), n === "none" ? "-" : u(r.vat)), c(i("partner.total"), u(r.total), !0)]
    })]
  });
}
export { V as I, F as T, B as a, R as b };