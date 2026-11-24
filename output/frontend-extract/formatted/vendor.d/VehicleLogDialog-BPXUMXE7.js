import { r as I, j as s } from "./react-CjxcGQav.js";
import { e as B, c8 as D, ak as $, k4 as M, k7 as k, bx as F, bT as d, bO as _, bv as O, D as P, B as b, L as y, aB as A, cO as z, al as L, cm as p, ce as R, cf as E, cn as G, cI as K, bQ as H, K as Q } from "../js.d/main-Cm9wS5wt.js";
function S() {
  return {
    mode: "log",
    seq: 0,
    reservation_seq: 0,
    resource_seq: 0,
    use_date: M().slice(0, 10),
    driver_name: "",
    odo_start: "",
    odo_end: "",
    commute_km: "",
    destination: "",
    purpose: "",
    fuel_cost: "",
    toll_cost: "",
    etc_cost: "",
    memo: ""
  };
}
const i = r => Number(r) || 0;
function N(r, u) {
  return r instanceof Error && r.message ? r.message : u;
}
function X(r) {
  const u = I.useRef(r);
  u.current = r;
  const t = {
      form: B({
        modalId: `office-vehicle-log${r.scope ? `-${r.scope}` : ""}`
      })
    },
    f = D({
      stateId: `office-vehicle-log${r.scope ? `-${r.scope}` : ""}-ui`,
      initialValues: {
        canEdit: !0,
        resourceName: ""
      }
    }),
    n = $({
      formId: `office-vehicle-log${r.scope ? `-${r.scope}` : ""}`,
      initialValues: S(),
      onValidate: e => e.resource_seq ? i(e.odo_start) ? i(e.odo_end) ? i(e.odo_start) && i(e.odo_end) < i(e.odo_start) ? (_(d("office.odometerAfterTooSmall")), !1) : !0 : (_(d("office.odometerAfterRequired")), !1) : (_(d("office.odometerBeforeRequired")), !1) : (_(d("office.pickVehicle")), !1),
      onSubmit: async e => {
        const l = {
          odo_start: i(e.odo_start),
          odo_end: i(e.odo_end),
          commute_km: i(e.commute_km),
          destination: e.destination,
          purpose: e.purpose,
          fuel_cost: i(e.fuel_cost),
          toll_cost: i(e.toll_cost),
          etc_cost: i(e.etc_cost),
          memo: e.memo
        };
        try {
          e.mode === "return" ? await k.returnReservation(e.reservation_seq, l) : await k.upsertVehicleLog({
            ...l,
            ...(e.seq ? {
              seq: e.seq
            } : {
              resource_seq: e.resource_seq
            }),
            use_date: e.use_date,
            driver_name: e.driver_name
          });
        } catch (h) {
          return _(N(h, d("office.saveFailed"))), !1;
        }
        return F({
          message: e.mode === "return" ? d("office.returnedAndLogged") : d("office.saved"),
          delay: 600
        }), t.form.close(), u.current.onChanged(), !0;
      }
    }),
    o = async e => {
      if (e) try {
        const l = await k.nextOdometer(e);
        n.setFormValue("odo_start", l || "");
      } catch {}
    };
  return {
    form: n,
    modals: t,
    ui: f,
    openReturn: e => {
      f.setValues({
        canEdit: !0,
        resourceName: e.resource_name
      }), n.setFormValues({
        ...S(),
        mode: "return",
        reservation_seq: e.seq,
        resource_seq: e.resource_seq,
        use_date: (e.actual_start_at || e.start_at).slice(0, 10),
        driver_name: e.user_name || e.booker_name,
        destination: e.purpose.split(`
`)[0] ?? "",
        purpose: e.title
      }), t.form.open(), o(e.resource_seq);
    },
    openCreate: (e = 0) => {
      f.setValues({
        canEdit: !0,
        resourceName: ""
      }), n.setFormValues({
        ...S(),
        resource_seq: e
      }), t.form.open(), o(e);
    },
    openEdit: e => {
      f.setValues({
        canEdit: e.can_edit,
        resourceName: e.resource_name
      }), n.setFormValues({
        ...S(),
        seq: e.seq,
        reservation_seq: e.reservation_seq,
        resource_seq: e.resource_seq,
        use_date: e.use_date,
        driver_name: e.driver_name,
        odo_start: e.odo_start || "",
        odo_end: e.odo_end || "",
        commute_km: e.commute_km || "",
        destination: e.destination,
        purpose: e.purpose,
        fuel_cost: e.fuel_cost || "",
        toll_cost: e.toll_cost || "",
        etc_cost: e.etc_cost || "",
        memo: e.memo
      }), t.form.open();
    },
    remove: async () => {
      const e = Number(n.getFormValue("seq")) || 0;
      if (e) try {
        await k.removeVehicleLog(e), F({
          message: d("office.deleted"),
          delay: 500
        }), t.form.close(), u.current.onChanged();
      } catch (l) {
        _(N(l, d("office.deleteFailed")));
      }
    },
    fillOdometer: o
  };
}
function Y({
  controller: r,
  vehicles: u
}) {
  const {
      form: t,
      modals: f,
      ui: n
    } = r,
    o = O(),
    x = P(),
    C = t.useFormValue("mode"),
    g = Number(t.useFormValue("seq")) || 0,
    q = Number(t.useFormValue("odo_start")) || 0,
    e = Number(t.useFormValue("odo_end")) || 0,
    l = Number(t.useFormValue("commute_km")) || 0,
    h = !!n.useValue("canEdit"),
    W = String(n.useValue("resourceName") ?? ""),
    v = t.isSubmitting,
    a = v || !h,
    m = C === "return",
    V = q && e >= q ? e - q : 0,
    j = c => ({
      display: "grid",
      gridTemplateColumns: x ? "1fr" : `repeat(${c}, minmax(0, 1fr))`,
      gap: 2
    }),
    T = u.filter(c => c.enabled || c.seq === Number(t.getFormValue("resource_seq"))).map(c => ({
      value: c.seq,
      label: c.name
    })),
    w = [{
      id: "office-vehicle-log",
      title: o(m ? "office.return" : "office.trip"),
      children: s.jsxs(b, {
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: 2
        },
        children: [m ? s.jsx(y, {
          sx: {
            fontSize: 14,
            color: "text.secondary"
          },
          children: o("office.returnHint")
        }) : null, m ? null : s.jsxs(b, {
          sx: j(3),
          children: [s.jsx(A, {
            form: t,
            name: "resource_seq",
            label: o("office.kindVehicle"),
            options: T,
            disabled: a || g > 0,
            onChange: c => {
              r.fillOdometer(Number(c.target.value) || 0);
            },
            fullWidth: !0
          }), s.jsx(z, {
            form: t,
            name: "use_date",
            label: o("office.useDate"),
            disabled: a,
            fullWidth: !0
          }), s.jsx(L, {
            form: t,
            name: "driver_name",
            label: o("office.driver"),
            placeholder: o("office.driverPlaceholder"),
            disabled: a,
            fullWidth: !0
          })]
        }), s.jsxs(b, {
          sx: j(3),
          children: [s.jsx(p, {
            form: t,
            name: "odo_start",
            label: o("office.odoStart"),
            suffix: "km",
            thousandSeparator: !0,
            decimalLength: 0,
            disabled: a,
            required: !0,
            fullWidth: !0
          }), s.jsx(p, {
            form: t,
            name: "odo_end",
            label: o("office.odoEnd"),
            suffix: "km",
            thousandSeparator: !0,
            decimalLength: 0,
            disabled: a,
            required: !0,
            fullWidth: !0
          }), s.jsx(p, {
            form: t,
            name: "commute_km",
            label: o("office.commuteKm"),
            suffix: "km",
            thousandSeparator: !0,
            decimalLength: 0,
            disabled: a,
            fullWidth: !0
          })]
        }), V > 0 ? s.jsx(y, {
          sx: {
            fontSize: 14,
            color: "text.secondary"
          },
          children: o("office.distanceSummary", {
            distance: V.toLocaleString(R(E())),
            business: Math.max(0, V - Math.min(l, V)).toLocaleString(R(E()))
          })
        }) : null, s.jsxs(b, {
          sx: j(2),
          children: [s.jsx(L, {
            form: t,
            name: "destination",
            label: o("office.destination"),
            disabled: a,
            fullWidth: !0,
            slotProps: {
              htmlInput: {
                maxLength: 200
              }
            }
          }), s.jsx(L, {
            form: t,
            name: "purpose",
            label: o("office.purpose"),
            disabled: a,
            fullWidth: !0,
            slotProps: {
              htmlInput: {
                maxLength: 200
              }
            }
          })]
        }), s.jsxs(b, {
          sx: j(3),
          children: [s.jsx(p, {
            form: t,
            name: "fuel_cost",
            label: o("office.fuelCost"),
            suffix: o("office.wonSuffix"),
            thousandSeparator: !0,
            decimalLength: 0,
            disabled: a,
            fullWidth: !0
          }), s.jsx(p, {
            form: t,
            name: "toll_cost",
            label: o("office.tollCost"),
            suffix: o("office.wonSuffix"),
            thousandSeparator: !0,
            decimalLength: 0,
            disabled: a,
            fullWidth: !0
          }), s.jsx(p, {
            form: t,
            name: "etc_cost",
            label: o("office.etcCost"),
            suffix: o("office.wonSuffix"),
            thousandSeparator: !0,
            decimalLength: 0,
            disabled: a,
            fullWidth: !0
          })]
        }), s.jsx(G, {
          form: t,
          name: "memo",
          label: o("office.remarks"),
          minRows: 2,
          disabled: a,
          fullWidth: !0
        })]
      })
    }];
  return s.jsx(K, {
    open: f.form.isOpen,
    onClose: f.form.close,
    title: m ? o("office.returnResource", {
      name: W
    }) : o(g ? "office.tripRecord" : "office.addTripRecord"),
    maxWidth: "md",
    fullScreen: x,
    mobilePresentation: x ? "slide" : "dialog",
    draggable: !0,
    backdropClick: !1,
    titleIcons: {
      delete: {
        visible: !m && g > 0 && h,
        confirmConfig: {
          title: o("office.deleteTripRecord"),
          message: o("office.deleteTripRecordConfirm"),
          confirmText: o("office.delete"),
          cancelText: o("office.cancel")
        }
      },
      print: {
        visible: !1
      },
      share: {
        visible: !1
      }
    },
    onDelete: r.remove,
    tabs: {
      visible: !1
    },
    scrollPastLastSection: !1,
    actions: {
      visible: !0,
      showCancelButton: !0,
      right: h ? s.jsx(H, {
        variant: "contained",
        onClick: () => {
          t.submit();
        },
        disabled: v,
        sx: {
          minWidth: 80
        },
        children: v ? s.jsx(Q, {
          size: 20,
          color: "inherit"
        }) : o(m ? "office.return" : "office.save")
      }) : void 0
    },
    sections: w
  });
}
export { Y as V, X as u };