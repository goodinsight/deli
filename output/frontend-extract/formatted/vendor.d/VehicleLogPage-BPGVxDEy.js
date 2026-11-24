import { r as a, j as t } from "./react-CjxcGQav.js";
import { bv as K, D as X, cz as Z, k3 as ee, fL as te, k4 as oe, k7 as R, bO as P, bT as k, dv as se, ce as q, cf as N, B as i, aB as ie, L as c, F as ne, d8 as W, bQ as A, ks as ae, lr as re, j9 as ce } from "../js.d/main-Cm9wS5wt.js";
import { u as le } from "./useColumnWidths-DSAca5rC.js";
import { T as de } from "./tableScrollbars-C9bhlJjO.js";
import { u as fe, a as he, b as ue } from "./MobileCardListLayout-D5_p2Xer.js";
import { c as F } from "./AttendanceParts-mHb1cK0h.js";
import { u as xe, V as me } from "./VehicleLogDialog-BPXUMXE7.js";
import "./stylis-DdLD6a3t.js";
import "./profileApi-Btafs-pM.js";
import "./mobileSearchOverlay-DYWcMOOb.js";
import "./attendanceMgmt-B_e3bPBn.js";
import "./i18nLabels-BNTLL7cu.js";
const V = "#9b9a97",
  y = "all";
function L(o, l) {
  const [u, _] = o.split("-").map(Number),
    x = new Date(u, _ - 1 + l, 1);
  return `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, "0")}`;
}
const ge = (o, l) => o ? l("office.wonAmount", {
    amount: o.toLocaleString(q(N()))
  }) : "",
  h = o => o ? `${o.toLocaleString()}` : "";
function Te() {
  const o = K(),
    l = X(),
    u = Z()?.seq ?? 0,
    _ = le("office.vehicleLogs"),
    {
      data: x
    } = ee(),
    w = te("office").canWrite,
    m = x.resources.filter(e => e.kind === "vehicle"),
    [r, g] = a.useState(() => oe().slice(0, 7)),
    [C, $] = a.useState(y),
    [n, H] = a.useState([]),
    [E, T] = a.useState(!1),
    p = a.useRef(0),
    d = C === y ? 0 : Number(C),
    b = a.useCallback(async (e = !1) => {
      if (!u) return;
      const s = ++p.current;
      e || T(!0);
      try {
        const v = await R.vehicleLogs(r, d);
        s === p.current && H(v);
      } catch (v) {
        s === p.current && !e && P(v instanceof Error ? v.message : k("office.logLoadFailed"));
      } finally {
        s === p.current && T(!1);
      }
    }, [u, r, d]);
  a.useEffect(() => {
    b();
  }, [b]), se(["vehicle_log"], () => {
    b(!0);
  });
  const f = xe({
      onChanged: () => {
        b(!0);
      }
    }),
    [Y, I] = a.useState(!1),
    Q = async () => {
      I(!0);
      try {
        await ce(await R.exportVehicleLogs(r, d), k("office.vehicleLogFileName", {
          month: r
        }));
      } catch (e) {
        P(e instanceof Error ? e.message : k("office.excelFailed"));
      } finally {
        I(!1);
      }
    },
    S = a.useMemo(() => ({
      distance: n.reduce((e, s) => e + s.distance, 0),
      business: n.reduce((e, s) => e + s.business_km, 0),
      cost: n.reduce((e, s) => e + s.fuel_cost + s.toll_cost + s.etc_cost, 0)
    }), [n]),
    j = q(N()),
    U = {
      count: n.length,
      distance: S.distance.toLocaleString(j),
      business: S.business.toLocaleString(j),
      cost: S.cost.toLocaleString(j)
    },
    M = o(S.cost ? "office.logSummaryWithCost" : "office.logSummary", U),
    O = new Date(Number(r.slice(0, 4)), Number(r.slice(5, 7)) - 1, 1).toLocaleDateString(j, {
      year: "numeric",
      month: "long"
    }),
    z = t.jsx(i, {
      sx: {
        minWidth: 180
      },
      children: t.jsx(ie, {
        label: o("office.kindVehicle"),
        size: "small",
        value: C,
        options: [{
          value: y,
          label: o("office.allVehicles")
        }, ...m.map(e => ({
          value: String(e.seq),
          label: e.name
        }))],
        showEmptyOption: !1,
        onChange: e => $(String(e.target.value ?? y)),
        fullWidth: !0
      })
    }),
    B = t.jsx(me, {
      controller: f,
      vehicles: m
    }),
    D = fe(E);
  if (l) {
    const e = [t.jsxs(i, {
      sx: {
        p: 1.5,
        display: "flex",
        flexDirection: "column",
        gap: 1
      },
      children: [t.jsx(i, {
        sx: {
          display: "flex",
          justifyContent: "center"
        },
        children: t.jsx(F, {
          label: O,
          onPrev: () => g(s => L(s, -1)),
          onNext: () => g(s => L(s, 1))
        })
      }), z, t.jsx(c, {
        sx: {
          fontSize: 14,
          color: "text.secondary"
        },
        children: M
      })]
    }, "head"), ...n.map(s => t.jsxs(i, {
      role: "button",
      tabIndex: 0,
      onClick: () => f.openEdit(s),
      sx: {
        p: 1.5,
        cursor: "pointer",
        "&:active": {
          bgcolor: "#f8f8f7"
        }
      },
      children: [t.jsxs(i, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: .75
        },
        children: [t.jsx(c, {
          sx: {
            fontSize: 15,
            fontWeight: 600
          },
          children: s.resource_name
        }), t.jsx(c, {
          sx: {
            fontSize: 14,
            color: "text.secondary"
          },
          children: s.driver_name
        }), t.jsx(c, {
          sx: {
            fontSize: 14,
            color: "text.secondary",
            ml: "auto"
          },
          children: s.use_date
        })]
      }), t.jsx(c, {
        sx: {
          fontSize: 14,
          color: "text.secondary",
          mt: .5
        },
        children: [`${s.distance.toLocaleString()}km`, s.destination, s.purpose].filter(Boolean).join(" · ")
      })]
    }, s.seq))];
    return D && n.length === 0 && e.push(t.jsx(i, {
      sx: {
        py: 6,
        px: 2,
        textAlign: "center",
        color: V,
        fontSize: 14
      },
      children: o("office.noTripsThisMonth")
    }, "empty")), D || e.push(t.jsx(he, {}, "loading")), t.jsxs(t.Fragment, {
      children: [t.jsx(ue, {
        attachHead: !0,
        children: e
      }), m.length > 0 && w ? t.jsx(ne, {
        color: "primary",
        "aria-label": o("office.addTripRecord"),
        onClick: () => f.openCreate(d),
        sx: {
          position: "fixed",
          right: 24,
          bottom: "calc(24px + var(--taskbox-fab-lift, 0px))",
          zIndex: 40
        },
        children: t.jsx(W, {})
      }) : null, B]
    });
  }
  const G = [{
      id: "use_date",
      text: o("office.useDate"),
      width: 104,
      align: "center"
    }, {
      id: "resource_name",
      text: o("office.kindVehicle"),
      width: 160,
      render: e => t.jsx(i, {
        component: "span",
        title: e.resource_name,
        sx: {
          display: "block",
          fontWeight: 500,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        },
        children: e.resource_name
      })
    }, {
      id: "driver_name",
      text: o("office.driver"),
      width: 88,
      align: "center"
    }, {
      id: "odo_start",
      text: o("office.colOdoStart"),
      width: 88,
      align: "right",
      render: e => h(e.odo_start)
    }, {
      id: "odo_end",
      text: o("office.colOdoEnd"),
      width: 88,
      align: "right",
      render: e => h(e.odo_end)
    }, {
      id: "distance",
      text: o("office.colDistance"),
      width: 84,
      align: "right",
      render: e => h(e.distance)
    }, {
      id: "commute_km",
      text: o("office.colCommute"),
      width: 72,
      align: "right",
      render: e => h(e.commute_km)
    }, {
      id: "business_km",
      text: o("office.colBusiness"),
      width: 72,
      align: "right",
      render: e => h(e.business_km)
    }, {
      id: "destination",
      text: o("office.colDestinationPurpose"),
      minWidth: 160,
      render: e => {
        const s = [e.destination, e.purpose].filter(Boolean).join(" · ");
        return t.jsx(i, {
          component: "span",
          title: s,
          sx: {
            display: "block",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          },
          children: s
        });
      }
    }, {
      id: "cost",
      text: o("office.colCost"),
      width: 100,
      align: "right",
      render: e => ge(e.fuel_cost + e.toll_cost + e.etc_cost, o)
    }, {
      id: "writer_name",
      text: o("office.colWriter"),
      width: 88,
      align: "center"
    }],
    J = {
      left: t.jsxs(i, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 2
        },
        children: [w ? t.jsx(A, {
          variant: "contained",
          disableElevation: !0,
          startIcon: t.jsx(W, {}),
          onClick: () => f.openCreate(d),
          disabled: m.length === 0,
          children: o("office.addTripRecord")
        }) : null, t.jsx(F, {
          label: O,
          onPrev: () => g(e => L(e, -1)),
          onNext: () => g(e => L(e, 1))
        }), z, t.jsx(c, {
          sx: {
            fontSize: 14,
            color: "text.secondary",
            whiteSpace: "nowrap"
          },
          children: M
        })]
      }),
      right: t.jsx(A, {
        variant: "outlined",
        startIcon: t.jsx(ae, {}),
        onClick: () => {
          Q();
        },
        disabled: Y || n.length === 0,
        children: o("office.vehicleLogExcel")
      }),
      showSearch: !1,
      collapsible: !1,
      showCollapseButton: !1,
      showClearIcon: !1
    };
  return t.jsxs(t.Fragment, {
    children: [t.jsx(i, {
      sx: {
        position: "relative",
        height: "100%",
        minHeight: 0,
        display: "flex",
        flexDirection: "column"
      },
      children: t.jsx(re, {
        header: J,
        tableProps: {
          ..._,
          scrollbars: de,
          mobile: !0,
          variant: "notion",
          columns: G,
          data: n,
          totalCount: n.length,
          getRowId: e => String(e.seq),
          onRowClick: e => f.openEdit(e),
          loading: E,
          emptyMessage: t.jsx(i, {
            sx: {
              py: 6,
              px: 2,
              textAlign: "center",
              color: V,
              fontSize: 14
            },
            children: o("office.noTripsThisMonthHint")
          })
        }
      })
    }), B]
  });
}
export { Te as default };