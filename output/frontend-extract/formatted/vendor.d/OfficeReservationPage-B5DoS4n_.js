import { r as b, j as e, l as Te } from "./react-CjxcGQav.js";
import { bv as T, oe as U, k7 as P, dv as Ae, k4 as I, B as r, L as y, I as $e, k5 as ne, of as G, ce as Oe, cf as ze, e as me, ak as Be, bO as L, bT as _, bx as pe, os as Y, s as R, bH as oe, mb as Ve, mc as Fe, D as se, md as ie, al as D, cO as ge, cm as be, cn as Me, cY as Ie, cI as ke, bQ as N, K as He, df as Ye, d8 as K, cz as Ke, k3 as Ue, fL as ve, bI as H, ci as Ge, cj as Xe, ot as Qe, fR as Je, cl as Ze, dL as et, F as tt, lr as ot, k8 as je } from "../js.d/main-Cm9wS5wt.js";
import { V as nt } from "./ViewAgendaOutlined-DQGfh6be.js";
import { R as Ee, u as st, a as it } from "./ReservationDialog-DnyeBFBI.js";
import { u as at, a as rt, b as lt } from "./MobileCardListLayout-D5_p2Xer.js";
import { u as ct, V as ft } from "./VehicleLogDialog-BPXUMXE7.js";
import { T as dt } from "./tableScrollbars-C9bhlJjO.js";
import "./stylis-DdLD6a3t.js";
import "./ToneChip-BFljqlNi.js";
import "./mobileSearchOverlay-DYWcMOOb.js";
const ht = 14;
function J(n) {
  const [s, l, u] = n.split("-").map(Number),
    o = new Date(s, l - 1, u).toLocaleDateString(Oe(ze()), {
      weekday: "short"
    });
  return `${l}/${u} (${o})`;
}
function ut({
  kind: n,
  from: s,
  onOpen: l
}) {
  const u = T(),
    [o, h] = b.useState([]),
    [p, v] = b.useState(!1),
    a = b.useRef(0),
    f = U(s, ht - 1),
    x = b.useCallback(async () => {
      const i = ++a.current;
      try {
        const g = await P.reservations({
          from: `${s} 00:00`,
          to: `${f} 23:59`,
          kind: n
        });
        i === a.current && h(g);
      } catch {
        i === a.current && h([]);
      } finally {
        i === a.current && v(!0);
      }
    }, [s, f, n]);
  b.useEffect(() => {
    x();
  }, [x]), Ae(["office_reservation"], () => {
    x();
  });
  const t = [];
  for (let i = s; i <= f; i = U(i, 1)) {
    const g = o.filter(m => m.start_at.slice(0, 10) <= i && m.end_at.slice(0, 10) >= i);
    g.length > 0 && t.push({
      day: i,
      list: g
    });
  }
  const j = I().slice(0, 10),
    S = I();
  return e.jsx(r, {
    sx: {
      position: "relative",
      height: "100%",
      minHeight: 0
    },
    children: e.jsxs(r, {
      sx: {
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column"
      },
      children: [e.jsx(r, {
        sx: {
          px: 2,
          pt: 1.5,
          pb: 1,
          flexShrink: 0
        },
        children: e.jsxs(y, {
          sx: {
            fontSize: "1rem",
            fontWeight: 700,
            textAlign: "center"
          },
          children: [J(s), " ~ ", J(f)]
        })
      }), e.jsx($e, {
        style: {
          flex: 1,
          minHeight: 0
        },
        track: {
          alignment: "outside"
        },
        scrollTopFab: {
          position: "right",
          offset: 16,
          offsetBottom: 16,
          size: 40,
          threshold: 200
        },
        children: e.jsx(r, {
          sx: {
            px: 2,
            pb: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2
          },
          children: p ? t.length === 0 ? e.jsx(y, {
            sx: {
              fontSize: "0.875rem",
              color: "text.secondary"
            },
            children: u("office.agendaEmpty")
          }) : t.map(({
            day: i,
            list: g
          }) => e.jsxs(r, {
            sx: {
              display: "flex",
              flexDirection: "column",
              gap: .75
            },
            children: [e.jsxs(y, {
              sx: {
                fontSize: "0.875rem",
                fontWeight: 700,
                color: "primary.main"
              },
              children: [J(i), i === j ? ` · ${u("office.today")}` : ""]
            }), g.map(m => e.jsxs(r, {
              role: "button",
              tabIndex: 0,
              onClick: () => l(m),
              sx: {
                display: "flex",
                flexDirection: "column",
                gap: .25,
                px: 1,
                py: .75,
                borderRadius: 1,
                cursor: "pointer",
                "&:hover": {
                  bgcolor: "#f7f7f5"
                }
              },
              children: [e.jsxs(r, {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  gap: .75,
                  minWidth: 0
                },
                children: [e.jsx(Ee, {
                  phase: ne(m, S)
                }), e.jsx(r, {
                  component: "span",
                  sx: {
                    fontSize: 14,
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  },
                  children: m.resource_name
                }), e.jsx(r, {
                  component: "span",
                  sx: {
                    fontSize: 14,
                    color: "text.secondary",
                    ml: "auto",
                    flexShrink: 0
                  },
                  children: G(m.start_at, m.end_at)
                })]
              }), e.jsx(r, {
                sx: {
                  fontSize: 14,
                  color: "text.secondary",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: [m.user_name || m.booker_name, m.title].filter(Boolean).join(" · ")
              })]
            }, `${i}-${m.seq}`))]
          }, i)) : null
        })
      })]
    })
  });
}
const ye = {
  room: ["capacity", "location", "equipment"],
  vehicle: ["plate_no", "model", "fuel", "insurance_expire", "inspection_expire", "manager_name", "odometer"]
};
function Z(n) {
  return {
    seq: 0,
    kind: n,
    name: "",
    enabled: !0,
    memo: "",
    capacity: "",
    location: "",
    equipment: "",
    plate_no: "",
    model: "",
    fuel: "",
    insurance_expire: "",
    inspection_expire: "",
    manager_name: "",
    odometer: ""
  };
}
function ee(n, s) {
  return n instanceof Error && n.message ? n.message : s;
}
function xt(n) {
  const s = b.useRef(n);
  s.current = n;
  const l = {
      list: me({
        modalId: `office-resource-list-${n.kind}`
      }),
      form: me({
        modalId: `office-resource-form-${n.kind}`
      })
    },
    u = Be({
      formId: `office-resource-${n.kind}`,
      initialValues: Z(n.kind),
      onValidate: a => a.name.trim() ? !0 : (L(a.kind === "vehicle" ? _("office.vehicleNameRequired") : _("office.roomNameRequired")), !1),
      onSubmit: async a => {
        const f = {};
        for (const x of ye[a.kind]) {
          const t = String(a[x] ?? "").trim();
          t && (f[x] = t);
        }
        try {
          await P.upsertResource({
            ...(a.seq ? {
              seq: a.seq
            } : {
              kind: a.kind
            }),
            name: a.name.trim(),
            enabled: a.enabled,
            memo: a.memo,
            data: f
          });
        } catch (x) {
          return L(ee(x, _("office.saveFailed"))), !1;
        }
        return pe({
          message: _("office.saved"),
          delay: 500
        }), l.form.close(), s.current.onChanged(), !0;
      }
    });
  return {
    form: u,
    modals: l,
    openCreate: () => {
      u.setFormValues(Z(s.current.kind)), l.form.open();
    },
    openEdit: a => {
      const f = Z(a.kind);
      for (const x of ye[a.kind]) {
        const t = a.data[x];
        f[x] = t == null ? "" : String(t);
      }
      u.setFormValues({
        ...f,
        seq: a.seq,
        name: a.name,
        enabled: a.enabled,
        memo: a.memo
      }), l.form.open();
    },
    remove: async () => {
      const a = Number(u.getFormValue("seq")) || 0;
      if (a) try {
        await P.removeResource(a), pe({
          message: _("office.deleted"),
          delay: 500
        }), l.form.close(), s.current.onChanged();
      } catch (f) {
        L(ee(f, _("office.deleteFailed")));
      }
    },
    saveVehicleApproval: async a => {
      try {
        await P.saveSettings({
          vehicle_approval: a
        }), s.current.onChanged();
      } catch (f) {
        L(ee(f, _("office.settingsSaveFailed")));
      }
    }
  };
}
const A = 420,
  q = 1320,
  te = q - A,
  Se = 180,
  mt = 56,
  pt = 32;
function Re(n, s, l) {
  return n.slice(0, 10) < s ? 0 : n.slice(0, 10) > s ? l : Y(n);
}
function gt({
  date: n,
  resources: s,
  items: l,
  onSlotClick: u,
  onItemClick: o
}) {
  const h = T(),
    [p, v] = b.useState(I);
  b.useEffect(() => {
    const t = window.setInterval(() => v(I()), 6e4);
    return () => window.clearInterval(t);
  }, []);
  const a = t => `${(Math.min(Math.max(t, A), q) - A) / te * 100}%`,
    f = Array.from({
      length: (q - A) / 60 + 1
    }, (t, j) => A / 60 + j),
    x = p.slice(0, 10) === n && Y(p) >= A && Y(p) <= q;
  return e.jsxs(r, {
    sx: {
      border: 1,
      borderColor: R[300],
      borderRadius: 1,
      overflow: "hidden",
      bgcolor: "background.paper"
    },
    children: [e.jsxs(r, {
      sx: {
        display: "flex",
        height: pt,
        borderBottom: 1,
        borderColor: R[200],
        bgcolor: R[50]
      },
      children: [e.jsx(r, {
        sx: {
          width: Se,
          flexShrink: 0,
          borderRight: 1,
          borderColor: R[200]
        }
      }), e.jsx(r, {
        sx: {
          position: "relative",
          flex: 1
        },
        children: f.map(t => e.jsx(y, {
          component: "span",
          sx: {
            position: "absolute",
            left: a(t * 60),
            top: 7,
            transform: t === A / 60 ? "none" : t === q / 60 ? "translateX(-100%)" : "translateX(-50%)",
            fontSize: 13,
            color: R[500],
            px: .5
          },
          children: t
        }, t))
      })]
    }), s.map((t, j) => {
      const S = l.filter(i => i.resource_seq === t.seq && i.start_at.slice(0, 10) <= n && i.end_at.slice(0, 10) >= n);
      return e.jsxs(r, {
        sx: {
          display: "flex",
          height: mt,
          borderTop: j === 0 ? 0 : 1,
          borderColor: R[200]
        },
        children: [e.jsxs(r, {
          sx: {
            width: Se,
            flexShrink: 0,
            borderRight: 1,
            borderColor: R[200],
            px: 1.5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minWidth: 0
          },
          children: [e.jsx(y, {
            sx: {
              fontSize: 15,
              fontWeight: 500,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: t.name
          }), t.kind === "vehicle" && t.data.plate_no ? e.jsx(y, {
            sx: {
              fontSize: 14,
              color: "text.secondary"
            },
            children: String(t.data.plate_no)
          }) : t.kind === "room" && t.data.capacity ? e.jsx(y, {
            sx: {
              fontSize: 14,
              color: "text.secondary"
            },
            children: h("office.capacityPeople", {
              count: Number(t.data.capacity) || 0
            })
          }) : null]
        }), e.jsxs(r, {
          role: "button",
          "aria-label": h("office.reserveResource", {
            name: t.name
          }),
          onClick: i => {
            const g = i.currentTarget.getBoundingClientRect(),
              m = (i.clientX - g.left) / g.width,
              w = A + Math.floor(m * te / 30) * 30;
            u(t, w);
          },
          sx: {
            position: "relative",
            flex: 1,
            cursor: "pointer",
            backgroundImage: `repeating-linear-gradient(to right, ${R[100]} 0, ${R[100]} 1px, transparent 1px, transparent calc(100% / ${te / 60}))`,
            "&:hover": {
              bgcolor: "rgba(0,0,0,0.02)"
            }
          },
          children: [S.map(i => {
            const g = Re(i.start_at, n, q),
              m = Re(i.end_at, n, q),
              w = ne(i, p),
              k = Ve[w],
              $ = a(g),
              O = `calc(${a(m)} - ${$})`;
            return e.jsx(oe, {
              placement: "top",
              disableInteractive: !0,
              title: e.jsxs(r, {
                sx: {
                  fontSize: 14,
                  lineHeight: 1.5
                },
                children: [e.jsxs(r, {
                  sx: {
                    fontWeight: 600
                  },
                  children: [h(Fe[w]), " · ", G(i.start_at, i.end_at)]
                }), e.jsx(r, {
                  children: [i.user_name || i.booker_name, i.title].filter(Boolean).join(" · ")
                })]
              }),
              children: e.jsx(r, {
                role: "button",
                "aria-label": `${i.user_name || i.booker_name} ${G(i.start_at, i.end_at)}`,
                onClick: z => {
                  z.stopPropagation(), o(i);
                },
                sx: {
                  position: "absolute",
                  top: 12,
                  bottom: 12,
                  left: $,
                  width: O,
                  minWidth: 8,
                  bgcolor: k.bg,
                  borderLeft: 3,
                  borderColor: k.color,
                  borderRadius: .75,
                  cursor: "pointer",
                  "&:hover": {
                    filter: "brightness(0.95)"
                  }
                }
              })
            }, i.seq);
          }), x ? e.jsx(r, {
            sx: {
              position: "absolute",
              top: 0,
              bottom: 0,
              left: a(Y(p)),
              width: 2,
              bgcolor: "error.main",
              pointerEvents: "none"
            }
          }) : null]
        })]
      }, t.seq);
    })]
  });
}
function bt({
  kind: n,
  controller: s
}) {
  const {
      form: l,
      modals: u
    } = s,
    o = T(),
    h = se(),
    p = Number(l.useFormValue("seq")) || 0,
    v = o(ie[n]),
    a = l.isSubmitting,
    f = {
      display: "grid",
      gridTemplateColumns: h ? "1fr" : "repeat(2, minmax(0, 1fr))",
      gap: 2
    },
    x = [{
      id: "office-resource-basic",
      title: o("office.basic"),
      children: e.jsxs(r, {
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: 2
        },
        children: [e.jsx(D, {
          form: l,
          name: "name",
          label: o(n === "vehicle" ? "office.vehicleName" : "office.roomName"),
          placeholder: o(n === "vehicle" ? "office.vehicleNamePlaceholder" : "office.roomNamePlaceholder"),
          required: !0,
          fullWidth: !0,
          slotProps: {
            htmlInput: {
              maxLength: 100
            }
          }
        }), n === "vehicle" ? e.jsxs(r, {
          sx: f,
          children: [e.jsx(D, {
            form: l,
            name: "plate_no",
            label: o("office.plateNo"),
            fullWidth: !0
          }), e.jsx(D, {
            form: l,
            name: "model",
            label: o("office.model"),
            fullWidth: !0
          }), e.jsx(D, {
            form: l,
            name: "fuel",
            label: o("office.fuel"),
            placeholder: o("office.fuelPlaceholder"),
            fullWidth: !0
          }), e.jsx(D, {
            form: l,
            name: "manager_name",
            label: o("office.manager"),
            fullWidth: !0
          }), e.jsx(ge, {
            form: l,
            name: "insurance_expire",
            label: o("office.insuranceExpire"),
            fullWidth: !0
          }), e.jsx(ge, {
            form: l,
            name: "inspection_expire",
            label: o("office.inspectionExpire"),
            fullWidth: !0
          }), e.jsx(be, {
            form: l,
            name: "odometer",
            label: o("office.currentOdometer"),
            suffix: "km",
            thousandSeparator: !0,
            decimalLength: 0,
            fullWidth: !0
          })]
        }) : e.jsxs(r, {
          sx: f,
          children: [e.jsx(D, {
            form: l,
            name: "location",
            label: o("office.location"),
            fullWidth: !0
          }), e.jsx(be, {
            form: l,
            name: "capacity",
            label: o("office.capacity"),
            suffix: o("office.peopleSuffix"),
            decimalLength: 0,
            fullWidth: !0
          }), e.jsx(r, {
            sx: {
              gridColumn: "1 / -1"
            },
            children: e.jsx(D, {
              form: l,
              name: "equipment",
              label: o("office.equipment"),
              placeholder: o("office.equipmentPlaceholder"),
              fullWidth: !0
            })
          })]
        }), e.jsx(Me, {
          form: l,
          name: "memo",
          label: o("office.remarks"),
          minRows: 2,
          fullWidth: !0
        }), e.jsx(Ie, {
          form: l,
          name: "enabled",
          label: o("office.enabledSwitch")
        })]
      })
    }];
  return e.jsx(ke, {
    open: u.form.isOpen,
    onClose: u.form.close,
    title: p ? o("office.editResource", {
      label: v
    }) : o("office.addResource", {
      label: v
    }),
    maxWidth: "sm",
    fullScreen: h,
    mobilePresentation: h ? "slide" : "dialog",
    draggable: !0,
    backdropClick: !1,
    titleIcons: {
      delete: {
        visible: !!p,
        confirmConfig: {
          title: o("office.deleteResource", {
            label: v
          }),
          message: o(n === "vehicle" ? "office.deleteVehicleConfirm" : "office.deleteRoomConfirm"),
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
    onDelete: s.remove,
    tabs: {
      visible: !1
    },
    scrollPastLastSection: !1,
    actions: {
      visible: !0,
      showCancelButton: !0,
      right: e.jsx(N, {
        variant: "contained",
        onClick: () => {
          l.submit();
        },
        disabled: a,
        sx: {
          minWidth: 80
        },
        children: a ? e.jsx(He, {
          size: 20,
          color: "inherit"
        }) : o("office.save")
      })
    },
    sections: x
  });
}
function Ce(n) {
  const s = String(n ?? "").slice(0, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return {
    text: "",
    soon: !1
  };
  const l = Math.round((Date.parse(`${s}T00:00:00`) - Date.now()) / 864e5);
  return {
    text: s,
    soon: l <= 30
  };
}
function vt({
  kind: n,
  controller: s,
  resources: l,
  settings: u
}) {
  const o = T(),
    h = se(),
    p = o(ie[n]),
    v = l.filter(t => t.kind === n),
    a = t => t.enabled ? void 0 : {
      color: R[400]
    },
    f = n === "vehicle" ? [{
      id: "name",
      text: o("office.kindVehicle"),
      render: t => e.jsx(r, {
        component: "span",
        sx: a(t),
        children: t.name
      })
    }, {
      id: "plate_no",
      text: o("office.plateNo"),
      width: 120,
      align: "center",
      render: t => String(t.data.plate_no ?? "")
    }, {
      id: "insurance",
      text: o("office.insuranceExpire"),
      width: 120,
      align: "center",
      render: t => {
        const {
          text: j,
          soon: S
        } = Ce(t.data.insurance_expire);
        return e.jsx(r, {
          component: "span",
          sx: {
            color: S ? "error.main" : void 0
          },
          children: j
        });
      }
    }, {
      id: "inspection",
      text: o("office.inspectionExpire"),
      width: 120,
      align: "center",
      render: t => {
        const {
          text: j,
          soon: S
        } = Ce(t.data.inspection_expire);
        return e.jsx(r, {
          component: "span",
          sx: {
            color: S ? "error.main" : void 0
          },
          children: j
        });
      }
    }, {
      id: "enabled",
      text: o("office.inUse"),
      width: 72,
      align: "center",
      render: t => t.enabled ? o("office.inUse") : o("office.off")
    }] : [{
      id: "name",
      text: o("office.kindRoom"),
      render: t => e.jsx(r, {
        component: "span",
        sx: a(t),
        children: t.name
      })
    }, {
      id: "location",
      text: o("office.location"),
      width: 160,
      render: t => String(t.data.location ?? "")
    }, {
      id: "capacity",
      text: o("office.headcount"),
      width: 80,
      align: "center",
      render: t => t.data.capacity ? o("office.capacityPeople", {
        count: Number(t.data.capacity) || 0
      }) : ""
    }, {
      id: "enabled",
      text: o("office.inUse"),
      width: 72,
      align: "center",
      render: t => t.enabled ? o("office.inUse") : o("office.off")
    }],
    x = [...(n === "vehicle" ? [{
      id: "office-vehicle-settings",
      title: o("office.reservationMethod"),
      children: e.jsx(Ie, {
        label: o("office.vehicleApprovalSwitch"),
        checked: u.vehicle_approval,
        onChange: (t, j) => {
          s.saveVehicleApproval(j);
        }
      })
    }] : []), {
      id: "office-resource-list",
      title: o("office.resourceList", {
        label: p
      }),
      endIcon: e.jsx(N, {
        size: "small",
        startIcon: e.jsx(K, {}),
        onClick: s.openCreate,
        children: o("office.addResource", {
          label: p
        })
      }),
      children: e.jsx(Ye, {
        scrollbars: dt,
        variant: "notion",
        mobile: !0,
        autoHeight: !0,
        showPaper: !1,
        paddingX: 0,
        columns: f,
        data: v,
        totalCount: v.length,
        getRowId: t => String(t.seq),
        onRowClick: t => s.openEdit(t),
        emptyMessage: o(n === "vehicle" ? "office.noVehicles" : "office.noRooms")
      })
    }];
  return e.jsx(ke, {
    open: s.modals.list.isOpen,
    onClose: s.modals.list.close,
    title: o("office.resourceSettings", {
      label: p
    }),
    maxWidth: "md",
    fullScreen: h,
    mobilePresentation: h ? "slide" : "dialog",
    draggable: !0,
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
      visible: !1
    },
    sections: x
  });
}
const _e = "#9b9a97",
  we = "taskham-office-agenda-open";
function De({
  kind: n
}) {
  const s = T(),
    l = se(),
    u = Ke()?.seq ?? 0,
    o = s(ie[n]),
    {
      data: h,
      loaded: p,
      reload: v
    } = Ue(),
    a = h.resources.filter(c => c.kind === n),
    f = a.filter(c => c.enabled),
    x = n === "vehicle" && h.vehicle_approval_required,
    t = ve("office"),
    j = ve("approval"),
    S = t.canWrite && (!x || j.canWrite),
    [i, g] = b.useState(() => I().slice(0, 10)),
    [m, w] = b.useState(null),
    [k, $] = b.useState([]),
    [O, z] = b.useState(!1),
    B = b.useRef(0),
    W = b.useCallback(async (c = !1) => {
      if (!u) return;
      const d = ++B.current;
      c || z(!0);
      try {
        const C = await P.reservations({
          from: `${i} 00:00`,
          to: `${i} 23:59`,
          kind: n
        });
        d === B.current && $(C);
      } catch (C) {
        d === B.current && !c && L(C instanceof Error ? C.message : _("office.reservationLoadFailed"));
      } finally {
        d === B.current && z(!1);
      }
    }, [u, i, n]);
  b.useEffect(() => {
    W();
  }, [W]), Ae(["office_reservation"], () => {
    W(!0);
  });
  const E = st({
      kind: n,
      onChanged: () => {
        W(!0);
      }
    }),
    ae = ct({
      onChanged: () => {
        W(!0);
      }
    }),
    [re, qe] = Te(),
    X = Number(re.get("reservation")) || 0;
  b.useEffect(() => {
    if (!X || !u) return;
    let c = !0;
    return P.reservation(X).then(d => {
      c && (g(d.start_at.slice(0, 10)), E.openEdit(d));
    }).catch(d => L(d instanceof Error ? d.message : _("office.reservationLoadFailed"))).finally(() => {
      const d = new URLSearchParams(re);
      d.delete("reservation"), d.delete("t"), qe(d, {
        replace: !0
      });
    }), () => {
      c = !1;
    };
  }, [X, u]);
  const V = xt({
      kind: n,
      onChanged: () => {
        v();
      }
    }),
    Q = (c, d) => {
      if (!S) return;
      const C = d ?? Math.min(Math.ceil((Number(I().slice(11, 13)) * 60 + Number(I().slice(14, 16))) / 30) * 30, 1380),
        ue = `${i} ${je(C)}`,
        xe = `${i} ${je(Math.min(C + 60, 1439))}`;
      if (x) {
        E.openVehicleRequest({
          vehicleSeq: c?.seq,
          vehicleName: c?.name,
          start: ue,
          end: xe
        });
        return;
      }
      E.openCreate({
        resource_seq: c?.seq ?? f[0]?.seq ?? 0,
        start_at: ue,
        end_at: xe
      });
    },
    le = I().slice(0, 10),
    [F, Le] = b.useState(() => {
      try {
        return window.localStorage.getItem(we) !== "0";
      } catch {
        return !0;
      }
    }),
    Pe = () => Le(c => {
      try {
        window.localStorage.setItem(we, c ? "0" : "1");
      } catch {}
      return !c;
    }),
    ce = e.jsxs(r, {
      sx: {
        display: "flex",
        alignItems: "center",
        gap: .5
      },
      children: [e.jsx(H, {
        "aria-label": s("office.prevDay"),
        onClick: () => g(c => U(c, -1)),
        children: e.jsx(Ge, {})
      }), e.jsx(Xe, {
        "aria-label": s("office.pickDate"),
        onClick: c => w(c.currentTarget),
        sx: {
          borderRadius: 1,
          px: 1,
          py: .5,
          "&:hover": {
            bgcolor: "action.hover"
          }
        },
        children: e.jsx(y, {
          sx: {
            fontSize: 16,
            fontWeight: 600,
            minWidth: 128,
            textAlign: "center"
          },
          children: Qe(i)
        })
      }), e.jsx(Je, {
        open: !!m,
        anchorEl: m,
        onClose: () => w(null),
        selectedDate: new Date(Number(i.slice(0, 4)), Number(i.slice(5, 7)) - 1, Number(i.slice(8, 10))),
        autoApply: !0,
        showFooter: !1,
        onDateChange: c => {
          g(`${c.getFullYear()}-${String(c.getMonth() + 1).padStart(2, "0")}-${String(c.getDate()).padStart(2, "0")}`), w(null);
        }
      }), e.jsx(H, {
        "aria-label": s("office.nextDay"),
        onClick: () => g(c => U(c, 1)),
        children: e.jsx(Ze, {})
      }), i !== le ? e.jsx(N, {
        size: "small",
        onClick: () => g(le),
        children: s("office.today")
      }) : null]
    }),
    fe = h.manage ? e.jsx(oe, {
      title: s("office.resourceSettings", {
        label: o
      }),
      children: e.jsx(H, {
        "aria-label": s("office.resourceSettings", {
          label: o
        }),
        onClick: V.modals.list.open,
        children: e.jsx(et, {})
      })
    }) : null,
    de = e.jsxs(e.Fragment, {
      children: [e.jsx(it, {
        controller: E,
        resources: a,
        manage: h.manage,
        onReturn: n === "vehicle" && t.canWrite ? ae.openReturn : void 0
      }), n === "vehicle" ? e.jsx(ft, {
        controller: ae,
        vehicles: a
      }) : null, h.manage ? e.jsxs(e.Fragment, {
        children: [e.jsx(vt, {
          kind: n,
          controller: V,
          resources: h.resources,
          settings: h.settings
        }), e.jsx(bt, {
          kind: n,
          controller: V
        })]
      }) : null]
    }),
    M = p && f.length === 0 && e.jsxs(r, {
      sx: {
        py: 6,
        px: 2,
        textAlign: "center",
        color: _e,
        fontSize: 14,
        wordBreak: "keep-all"
      },
      children: [e.jsx(r, {
        sx: {
          mb: h.manage ? 1.5 : 0
        },
        children: h.manage ? s(n === "vehicle" ? "office.noVehicles" : "office.noRooms") : s(n === "vehicle" ? "office.noVehiclesAskAdmin" : "office.noRoomsAskAdmin")
      }), h.manage ? e.jsx(N, {
        variant: "outlined",
        startIcon: e.jsx(K, {}),
        onClick: V.openCreate,
        children: s("office.addResource", {
          label: o
        })
      }) : null]
    }),
    We = x ? e.jsx(y, {
      sx: {
        fontSize: 14,
        color: "text.secondary"
      },
      children: s("office.vehicleViaApprovalNote")
    }) : null,
    he = at(O);
  if (l) {
    const c = [e.jsxs(r, {
      sx: {
        p: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      },
      children: [ce, fe]
    }, "head")];
    if (M) c.push(e.jsx(r, {
      children: M
    }, "none"));else {
      for (const d of k) {
        const C = ne(d);
        c.push(e.jsxs(r, {
          role: "button",
          tabIndex: 0,
          onClick: () => E.openEdit(d),
          sx: {
            p: 1.5,
            cursor: "pointer",
            userSelect: "none",
            "&:active": {
              bgcolor: "#f8f8f7"
            }
          },
          children: [e.jsxs(r, {
            sx: {
              display: "flex",
              alignItems: "center",
              gap: .75,
              minWidth: 0
            },
            children: [e.jsx(Ee, {
              phase: C
            }), e.jsx(y, {
              sx: {
                fontSize: 15,
                fontWeight: 600,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              },
              children: d.resource_name
            }), e.jsx(y, {
              sx: {
                fontSize: 14,
                color: "text.secondary",
                ml: "auto",
                flexShrink: 0
              },
              children: G(d.start_at, d.end_at)
            })]
          }), e.jsx(y, {
            sx: {
              fontSize: 14,
              color: "text.secondary",
              mt: .5
            },
            children: [d.user_name || d.booker_name, d.title].filter(Boolean).join(" · ")
          })]
        }, d.seq));
      }
      he && k.length === 0 && c.push(e.jsx(r, {
        sx: {
          py: 6,
          px: 2,
          textAlign: "center",
          color: _e,
          fontSize: 14
        },
        children: s(n === "vehicle" ? "office.noVehicleReservationsToday" : "office.noRoomReservationsToday")
      }, "empty")), he || c.push(e.jsx(rt, {}, "loading"));
    }
    return e.jsxs(e.Fragment, {
      children: [e.jsx(lt, {
        attachHead: !0,
        children: c
      }), f.length > 0 && S ? e.jsx(tt, {
        color: "primary",
        "aria-label": s("office.resourceReservation", {
          label: o
        }),
        onClick: () => Q(),
        sx: {
          position: "fixed",
          right: 24,
          bottom: "calc(24px + var(--taskbox-fab-lift, 0px))",
          zIndex: 40
        },
        children: e.jsx(K, {})
      }) : null, de]
    });
  }
  const Ne = {
    left: e.jsxs(r, {
      sx: {
        display: "flex",
        alignItems: "center",
        gap: 2
      },
      children: [S ? e.jsx(N, {
        variant: "contained",
        disableElevation: !0,
        startIcon: e.jsx(K, {}),
        onClick: () => Q(),
        disabled: f.length === 0,
        children: x ? s("office.vehicleRequestButton") : s("office.resourceReservation", {
          label: o
        })
      }) : null, ce, We]
    }),
    right: e.jsxs(r, {
      sx: {
        display: "flex",
        alignItems: "center",
        gap: .5
      },
      children: [fe, e.jsx(oe, {
        title: s(F ? "office.closeAgenda" : "office.openAgenda"),
        disableInteractive: !0,
        children: e.jsx(H, {
          "aria-label": s(F ? "office.closeAgenda" : "office.openAgenda"),
          onClick: Pe,
          sx: {
            color: F ? "primary.main" : "text.secondary"
          },
          children: e.jsx(nt, {})
        })
      })]
    }),
    showSearch: !1,
    collapsible: !1,
    showCollapseButton: !1,
    showClearIcon: !1
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(r, {
      sx: {
        position: "relative",
        height: "100%",
        minHeight: 0,
        display: "flex",
        flexDirection: "column"
      },
      children: e.jsx(ot, {
        header: Ne,
        rightPanel: F ? e.jsx(ut, {
          kind: n,
          from: i,
          onOpen: E.openEdit
        }) : void 0,
        rightConfig: {
          ratio: .28,
          minWidth: 300,
          selfScroll: !0
        },
        storageKey: `office-agenda-${n}`,
        leftPanel: e.jsxs(r, {
          sx: {
            minHeight: 0,
            boxSizing: "border-box",
            p: 1.5,
            display: "flex",
            flexDirection: "column",
            gap: 1.25
          },
          children: [M || e.jsx(gt, {
            date: i,
            resources: f,
            items: k,
            onSlotClick: (c, d) => Q(c, d),
            onItemClick: E.openEdit
          }), !M && !O && k.length === 0 ? e.jsx(y, {
            sx: {
              fontSize: 14,
              color: R[500]
            },
            children: s(n === "vehicle" ? "office.noVehicleReservationsTodayHint" : "office.noRoomReservationsTodayHint")
          }) : null]
        })
      })
    }), de]
  });
}
function Et() {
  return e.jsx(De, {
    kind: "room"
  });
}
function Dt() {
  return e.jsx(De, {
    kind: "vehicle"
  });
}
export { Et as RoomReservationPage, Dt as VehicleReservationPage, De as default };