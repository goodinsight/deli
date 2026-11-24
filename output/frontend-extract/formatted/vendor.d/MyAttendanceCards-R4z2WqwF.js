import { j as e, r as y } from "./react-CjxcGQav.js";
import { c as F, bv as S, B as i, L as u, bQ as p, K as D, cW as Z, Y as fe, bT as T } from "../js.d/main-Cm9wS5wt.js";
import { L as pe } from "./Logout-B1FcT8mE.js";
import { F as ye } from "./FreeBreakfastOutlined-DsHDTKlm.js";
import { e as J, m as j, p as X, s as je, i as ge, G as ke, l as H } from "./attendanceMgmt-B_e3bPBn.js";
import { b as _e } from "./attendance-CHHNhWTj.js";
import { P as G, C as z, S as Ae, b as E } from "./AttendanceParts-mHb1cK0h.js";
const ee = F(e.jsx("path", {
    d: "M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"
  })),
  Se = F(e.jsx("path", {
    d: "M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"
  })),
  ve = F(e.jsx("path", {
    d: "M11 7 9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8z"
  })),
  te = "#dc2626",
  be = "#2563eb",
  we = 60;
function Te() {
  const [t, a] = y.useState(0);
  return y.useEffect(() => {
    const s = window.setInterval(() => a(n => n + 1), 6e4);
    return () => window.clearInterval(s);
  }, []), t;
}
const oe = {
  minHeight: 56,
  fontSize: 17,
  fontWeight: 700,
  flex: 1,
  whiteSpace: "nowrap",
  minWidth: "max-content"
};
function A(t, a) {
  const s = n => new Date(`${n.replace(" ", "T")}:00+09:00`).getTime();
  return Math.max(0, Math.round((s(a) - s(t)) / 6e4));
}
function Be() {
  return new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }).format(new Date()).replace("T", " ").slice(0, 16);
}
function Ce(t) {
  return _e[t] ?? t;
}
function Ie(t) {
  const a = Math.max(0, Math.ceil(t / 1e3));
  return `${Math.floor(a / 60)}:${String(a % 60).padStart(2, "0")}`;
}
function De({
  kind: t,
  deadline: a,
  disabled: s,
  onCancel: n
}) {
  const o = S(),
    [l, m] = y.useState(() => Date.now());
  y.useEffect(() => {
    const f = window.setInterval(() => m(Date.now()), 1e3);
    return () => window.clearInterval(f);
  }, []);
  const c = a - l;
  return c <= 0 ? null : e.jsxs(i, {
    sx: {
      display: "flex",
      flexDirection: "column",
      gap: 1
    },
    children: [e.jsx(u, {
      sx: {
        fontSize: 14,
        color: "text.secondary"
      },
      children: o(t === "in" ? "hr.myAttAutoInRecorded" : "hr.myAttAutoOutRecorded")
    }), e.jsxs(i, {
      sx: {
        display: "flex",
        alignItems: "center",
        gap: 1.5
      },
      children: [e.jsx(p, {
        variant: "outlined",
        size: "small",
        disabled: s,
        onClick: n,
        sx: {
          fontSize: 14,
          whiteSpace: "nowrap"
        },
        children: o(t === "in" ? "hr.myAttCancelAutoIn" : "hr.myAttCancelAutoOut")
      }), e.jsx(u, {
        sx: {
          fontSize: 14,
          color: "text.secondary",
          fontVariantNumeric: "tabular-nums"
        },
        "aria-live": "off",
        children: o("hr.myAttTimeLeft", {
          time: Ie(c)
        })
      })]
    })]
  });
}
function ze(t, a) {
  if (a) return T("hr.myAttQrEntered");
  const s = t.methods,
    n = [];
  return s.includes("gps") && n.push(T("hr.myAttWayGps")), s.includes("wifi") && n.push(T("hr.myAttWayWifi")), s.includes("qr") && n.push(T("hr.myAttWayQr")), n.length === 0 ? "" : T("hr.myAttMethodHint", {
    ways: n.join(" · ")
  });
}
function Ee(t, a, s) {
  const {
      today: n
    } = t,
    o = n.clock,
    l = !!(o?.check_in_at && !o.check_out_at),
    m = !!o?.check_out_at,
    c = t.methods.length === 1 && t.methods[0] === "qr" && !a,
    f = n.outing ?? null,
    g = n.away ?? null,
    B = !!t.allow_outside,
    O = c && !f && !g,
    d = n.planned,
    C = l && !f && d.workday && (d.work_type === "fixed" || d.work_type === "shift") && !!(d.start && d.end && d.end > d.start) && o?.check_in_at.slice(0, 10) === n.date && s.slice(11, 16) < d.end && A(s, `${n.date} ${d.end}`) > (d.early_grace ?? 0),
    L = C ? A(s, `${n.date} ${d.end}`) : 0,
    W = l && !f && d.workday && (d.work_type === "fixed" || d.work_type === "shift") && !!(d.start && d.end && d.end > d.start) && o?.check_in_at.slice(0, 10) === n.date && s.slice(0, 10) === n.date && s.slice(11, 16) > d.end && A(`${n.date} ${d.end}`, s) >= we;
  return {
    working: l,
    done: m,
    qrOnly: c,
    outing: f,
    away: g,
    allowOutside: B,
    outBlocked: O,
    planned: d,
    earlyLeave: C,
    earlyMinutes: L,
    lateOut: W
  };
}
function He({
  data: t,
  busy: a,
  qr: s,
  onIn: n,
  offHoursMessage: o,
  onConfirmOffHours: l,
  onCancelOffHours: m,
  onOut: c,
  onLateOut: f,
  onBreak: g,
  onOuting: B,
  onOutingEnd: O,
  onCancelAuto: d,
  deviceNote: C,
  hideButtons: L = !1,
  hideNumbers: W = !1
}) {
  const r = S();
  Te();
  const {
      today: h
    } = t,
    M = y.useMemo(() => h.auto_cancel ? Date.now() + h.auto_cancel.remain_ms : 0, [h.auto_cancel]),
    se = M ? Math.ceil((M - Date.now()) / 6e4) : 0,
    U = new Date(`${h.date}T00:00:00Z`).getUTCDay(),
    ae = U === 0 || t.holidays?.[h.date] ? te : U === 6 ? be : "inherit",
    x = h.clock,
    $ = !!(x?.check_in_at && !x.check_out_at),
    v = !!x?.check_out_at,
    q = ze(t, s),
    b = Be(),
    re = $ && x ? A(x.check_in_at, b) : 0,
    P = x?.breaks.find(Q => Q.start && !Q.end),
    K = P ? A(`${b.slice(0, 10)} ${P.start}`, b) || A(`${x.check_in_at.slice(0, 10)} ${P.start}`, b) : 0,
    {
      qrOnly: ie,
      outing: k,
      away: w,
      allowOutside: I,
      outBlocked: le,
      planned: V,
      earlyLeave: N,
      earlyMinutes: ce,
      lateOut: de
    } = Ee(t, s, b),
    _ = oe,
    [he, R] = y.useState(!1),
    [xe, ue] = y.useState(null),
    [Y, me] = y.useState(null);
  return e.jsx(G, {
    title: e.jsxs(e.Fragment, {
      children: [r("hr.myAttToday"), " ", e.jsx(i, {
        component: "span",
        "data-today-date": "",
        sx: {
          color: ae
        },
        children: je(h.date)
      })]
    }),
    action: e.jsx(i, {
      component: "span",
      sx: {
        display: "inline-flex",
        maxWidth: "100%",
        "& > span": {
          whiteSpace: "normal"
        }
      },
      children: e.jsx(z, {
        label: h.planned.workday ? `${t.policy.name} · ${X(h.planned)}` : e.jsxs(e.Fragment, {
          children: [t.policy.name, " ·", " ", e.jsx(i, {
            component: "span",
            "data-off-label": "",
            sx: {
              color: te
            },
            children: X(h.planned)
          })]
        }),
        tone: {
          color: "#334155",
          bg: "#f1f5f9"
        }
      })
    }),
    column: !0,
    children: e.jsxs(i, {
      sx: {
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
        flex: 1
      },
      children: [!W && e.jsxs(i, {
        sx: {
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          fontSize: 15
        },
        children: [e.jsxs(i, {
          children: [e.jsx(u, {
            sx: {
              fontSize: 14,
              color: "text.secondary"
            },
            children: r("hr.attSetStart")
          }), e.jsx(u, {
            sx: {
              fontSize: 22,
              fontWeight: 700
            },
            children: x?.check_in_at ? J(x.check_in_at, h.date) : "—"
          })]
        }), e.jsxs(i, {
          children: [e.jsx(u, {
            sx: {
              fontSize: 14,
              color: "text.secondary"
            },
            children: r(v ? "hr.myAttActualWork" : "hr.myAttElapsed")
          }), e.jsx(u, {
            sx: {
              fontSize: 22,
              fontWeight: 700
            },
            children: v ? j(x?.work_minutes ?? 0, r("hr.minutesOnly", {
              m: 0
            })) : $ ? j(re, r("hr.minutesOnly", {
              m: 0
            })) : "—"
          })]
        }), e.jsxs(i, {
          children: [e.jsx(u, {
            sx: {
              fontSize: 14,
              color: "text.secondary"
            },
            children: r("hr.attSetEnd")
          }), e.jsx(u, {
            sx: {
              fontSize: 22,
              fontWeight: 700
            },
            children: x?.check_out_at ? J(x.check_out_at, h.date) : "—"
          })]
        })]
      }), (h.on_break || k || w) && e.jsxs(i, {
        sx: {
          display: "flex",
          gap: 1,
          flexWrap: "wrap"
        },
        children: [h.on_break && e.jsx(z, {
          label: K > 0 ? r("hr.myAttOnBreakFor", {
            duration: j(K)
          }) : r("hr.myAttOnBreak"),
          tone: {
            color: "#b45309",
            bg: "#fef3c7"
          }
        }), k && e.jsx(z, {
          label: r("hr.myAttOnOuting", {
            place: k.place
          }),
          tone: {
            color: "#1d4ed8",
            bg: "#dbeafe"
          }
        }), w && !k && e.jsx(z, {
          label: r("hr.myAttAwayApproved", {
            kind: Ce(w.kind)
          }),
          tone: {
            color: "#1d4ed8",
            bg: "#dbeafe"
          }
        })]
      }), !v && !L && e.jsx(i, {
        sx: {
          display: "flex",
          gap: {
            xs: 1.5,
            md: 2
          },
          flexWrap: "wrap",
          mt: "auto",
          containerType: "inline-size",
          "@container (max-width: 260px)": {
            "& .MuiButton-startIcon": {
              display: "none"
            }
          }
        },
        children: $ ? e.jsxs(e.Fragment, {
          children: [k ? e.jsx(p, {
            variant: "outlined",
            startIcon: a === "outing" ? e.jsx(D, {
              size: 20
            }) : e.jsx(Se, {}),
            disabled: !!a,
            onClick: O,
            sx: {
              ..._,
              flex: "1 1 0"
            },
            children: r("hr.myAttReturn")
          }) : e.jsxs(e.Fragment, {
            children: [e.jsx(p, {
              variant: "outlined",
              startIcon: a === "break" ? e.jsx(D, {
                size: 20
              }) : e.jsx(ye, {}),
              disabled: !!a,
              onClick: g,
              sx: {
                ..._,
                flex: I ? "1 1 0" : "0 1 160px"
              },
              children: h.on_break ? r("hr.myAttBreakEnd") : r("hr.myAttBreakStart")
            }), I && e.jsx(p, {
              variant: "outlined",
              startIcon: e.jsx(ee, {}),
              disabled: !!a || h.on_break,
              onClick: () => B("start"),
              sx: {
                ..._,
                flex: "1 1 0"
              },
              children: r("hr.attSetClockMethodOutside")
            })]
          }), e.jsx(p, {
            ref: ue,
            variant: "contained",
            color: "secondary",
            disableElevation: !0,
            startIcon: a === "out" ? e.jsx(D, {
              size: 20,
              color: "inherit"
            }) : e.jsx(pe, {}),
            disabled: !!a || le,
            onClick: () => de ? f(V.end) : R(!0),
            sx: {
              ..._,
              ...(I && !k ? {
                flex: "1 1 100%"
              } : {})
            },
            children: r(N ? "hr.attSetStatEarly" : "hr.attSetDayStatusDone")
          }), e.jsx(Z, {
            open: he,
            anchorEl: xe,
            title: e.jsx(i, {
              component: "span",
              sx: {
                whiteSpace: "pre-line"
              },
              children: N ? r("hr.myAttEarlyConfirm", {
                end: V.end,
                duration: j(ce)
              }) : r("hr.myAttClockOutConfirm")
            }),
            confirmText: r(N ? "hr.attSetStatEarly" : "hr.attSetDayStatusDone"),
            cancelText: r("hr.cancel"),
            placement: "top",
            minWidth: 260,
            zIndex: 1401,
            onCancel: () => R(!1),
            onConfirm: () => {
              R(!1), c();
            }
          })]
        }) : e.jsxs(e.Fragment, {
          children: [I && !w && e.jsx(p, {
            variant: "outlined",
            startIcon: e.jsx(ee, {}),
            disabled: !!a,
            onClick: () => B("checkin"),
            sx: {
              ..._,
              flex: "1 1 0"
            },
            children: r("hr.myAttClockInOutside")
          }), e.jsx(p, {
            ref: me,
            variant: "contained",
            disableElevation: !0,
            startIcon: a === "in" ? e.jsx(D, {
              size: 20,
              color: "inherit"
            }) : e.jsx(ve, {}),
            disabled: !!a || ie && !w,
            onClick: n,
            sx: _,
            children: r("hr.attSetStart")
          }), e.jsx(Z, {
            open: !!o && !!Y,
            anchorEl: Y,
            title: r("hr.myAttOffHoursConfirm", {
              message: o
            }),
            confirmText: r("hr.myAttRecordClockIn"),
            cancelText: r("hr.cancel"),
            placement: "top",
            minWidth: 260,
            zIndex: 1401,
            onCancel: m,
            onConfirm: l
          })]
        })
      }), v && e.jsxs(u, {
        sx: {
          fontSize: 15,
          color: "text.secondary"
        },
        children: [r("hr.myAttDoneToday"), x && x.overtime_minutes > 0 ? ` ${r("hr.myAttOvertimeDuration", {
          duration: j(x.overtime_minutes)
        })}` : ""]
      }), !v && q && e.jsx(u, {
        sx: {
          fontSize: 14,
          color: "text.secondary"
        },
        children: q
      }), C, h.auto_cancel && se > 0 && e.jsx(De, {
        kind: h.auto_cancel.kind,
        deadline: M,
        disabled: !!a,
        onCancel: () => d(h.auto_cancel.kind)
      })]
    })
  });
}
function ne(t) {
  return `${Number(t.slice(5, 7))}/${Number(t.slice(8, 10))}`;
}
function Fe({
  weeks: t,
  today: a,
  limitMinutes: s,
  title: n
}) {
  const o = S(),
    l = t.map(c => ({
      from: c.week_start,
      to: c.week_end,
      minutes: c.minutes
    })).filter(c => c.from <= a);
  if (!l.length) return null;
  const m = s > 0 ? s : 3120;
  return e.jsx(G, {
    title: n ?? o("hr.myAttWeeklyHours"),
    children: e.jsx(i, {
      sx: {
        display: "flex",
        flexDirection: "column",
        gap: 1.5
      },
      children: l.map(c => {
        const f = c.minutes > m,
          g = f ? "#dc2626" : c.minutes > 2400 ? "#d97706" : "#2563eb";
        return e.jsxs(i, {
          children: [e.jsxs(i, {
            sx: {
              display: "flex",
              alignItems: "baseline",
              gap: 1,
              fontSize: 14
            },
            children: [e.jsxs(u, {
              sx: {
                fontSize: 14,
                color: "text.secondary"
              },
              children: [ne(c.from), "~", ne(c.to)]
            }), e.jsx(u, {
              sx: {
                fontSize: 15,
                fontWeight: 600,
                ml: "auto",
                color: f ? "#dc2626" : "text.primary"
              },
              children: j(c.minutes, o("hr.minutesOnly", {
                m: 0
              }))
            }), e.jsxs(u, {
              sx: {
                fontSize: 14,
                color: "text.secondary"
              },
              children: ["/ ", j(m)]
            })]
          }), e.jsx(i, {
            sx: {
              mt: .5,
              height: 8,
              borderRadius: 4,
              bgcolor: "#f1f5f9",
              overflow: "hidden"
            },
            children: e.jsx(i, {
              sx: {
                width: `${Math.min(100, c.minutes / m * 100)}%`,
                height: "100%",
                bgcolor: g,
                borderRadius: 4
              }
            })
          })]
        }, c.from);
      })
    })
  });
}
function Oe({
  promotion: t,
  today: a,
  onPlan: s
}) {
  const n = S(),
    o = t.status === "noticed" && a > t.plan_due,
    l = [n("hr.myAttPromotionExpire", {
      count: t.notice_days,
      date: t.period_end
    })];
  t.status === "designated" ? l.push(n("hr.myAttPromotionDesignated", {
    dates: t.designate_dates.map(H).join(", ")
  })) : t.status === "planned" ? l.push(n("hr.myAttPromotionPlanned", {
    dates: t.plan_dates.map(H).join(", ")
  })) : o ? l.push(n("hr.myAttPromotionOverdue")) : l.push(n("hr.myAttPromotionDue", {
    date: H(t.plan_due)
  }));
  const m = t.status !== "designated";
  return e.jsxs(i, {
    sx: {
      mb: 1.5,
      p: 1.5,
      borderRadius: 1.5,
      bgcolor: "#fffbeb",
      border: "1px solid #fde68a"
    },
    children: [e.jsx(i, {
      component: "ul",
      sx: {
        listStyleType: "disc",
        m: 0,
        pl: 2.5,
        fontSize: 15,
        color: "#92400e"
      },
      children: l.map(c => e.jsx("li", {
        children: c
      }, c))
    }), m && e.jsx(i, {
      sx: {
        mt: 1.5,
        display: "flex",
        justifyContent: "flex-end"
      },
      children: e.jsx(p, {
        variant: t.status === "noticed" ? "contained" : "outlined",
        disableElevation: !0,
        onClick: s,
        children: t.status === "planned" ? n("hr.myAttEditPlan") : n("hr.myAttSubmitPlan")
      })
    })]
  });
}
function Ge({
  data: t,
  onPlan: a,
  onVacation: s
}) {
  const n = S(),
    o = t.leave;
  return o ? e.jsxs(G, {
    title: n("hr.myAttMyLeave"),
    column: !0,
    children: [t.promotion && e.jsx(Oe, {
      promotion: t.promotion,
      today: t.today.date,
      onPlan: a
    }), o.granted === null ? e.jsx(u, {
      sx: {
        fontSize: 15,
        color: "text.secondary"
      },
      children: n("hr.myAttNoHireDate")
    }) : e.jsxs(e.Fragment, {
      children: [e.jsxs(i, {
        sx: {
          display: "grid",
          gridTemplateColumns: `repeat(${o.carry + o.adjust !== 0 ? 4 : 3}, minmax(0, 1fr))`,
          gap: Ae
        },
        children: [e.jsx(E, {
          label: n("hr.myAttGranted"),
          value: n("hr.daysN", {
            count: o.granted ?? 0
          }),
          tone: "leave"
        }), o.carry + o.adjust !== 0 && e.jsx(E, {
          label: n("hr.myAttCarryAdjust"),
          value: n("hr.daysN", {
            count: o.carry + o.adjust
          })
        }), e.jsx(E, {
          label: n("hr.myAttUsed"),
          value: n("hr.daysN", {
            count: o.used
          }),
          tone: "used"
        }), e.jsx(E, {
          label: n("hr.myAttRemaining"),
          value: n("hr.daysN", {
            count: o.remaining ?? 0
          }),
          danger: (o.remaining ?? 0) < 0,
          tone: "remaining"
        })]
      }), e.jsx(u, {
        sx: {
          fontSize: 14,
          color: "text.secondary",
          mt: 1
        },
        children: n("hr.myAttLeavePeriod", {
          start: o.period_start,
          end: o.period_end,
          basis: o.basis === "fiscal_year" ? n("hr.attSetBasisFiscalYear") : n("hr.attSetBasisHireDate")
        })
      }), o.adjustments.length > 0 && e.jsx(i, {
        component: "ul",
        sx: {
          listStyleType: "disc",
          m: 0,
          mt: 1,
          pl: 2.5,
          fontSize: 14,
          color: "text.secondary"
        },
        children: o.adjustments.map(l => e.jsxs("li", {
          children: [l.effective_date, " ", ge[l.kind], " ", l.kind === "expire" ? "−" : l.days > 0 ? "+" : "", n("hr.daysN", {
            count: l.days
          }), " · ", l.memo]
        }, l.seq))
      })]
    }), e.jsx(i, {
      sx: {
        mt: "auto",
        pt: {
          xs: 1.5,
          md: 2
        }
      },
      children: e.jsx(p, {
        variant: "outlined",
        fullWidth: !0,
        startIcon: e.jsx(fe, {}),
        onClick: s,
        sx: oe,
        children: n("hr.myAttRequestLeave")
      })
    })]
  }) : null;
}
function Ue({
  events: t
}) {
  const a = S();
  return e.jsx(i, {
    sx: {
      display: "flex",
      flexDirection: "column",
      gap: .75
    },
    children: t.map(s => e.jsxs(i, {
      sx: {
        display: "flex",
        alignItems: "center",
        gap: 1,
        fontSize: 15,
        lineHeight: 1.25
      },
      children: [e.jsx(i, {
        component: "span",
        sx: {
          fontWeight: 600,
          minWidth: 44
        },
        children: s.at.slice(11, 16)
      }), e.jsx(i, {
        component: "span",
        sx: {
          color: s.kind === "enter" ? "#047857" : "#b45309"
        },
        children: s.kind === "enter" ? a("hr.myAttGeoEnter") : a("hr.myAttGeoExit")
      }), e.jsx(i, {
        component: "span",
        sx: {
          color: "text.secondary",
          minWidth: 0,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        },
        children: [s.place, ke[s.prompt]].filter(Boolean).join(" · ")
      })]
    }, s.seq))
  });
}
export { Ue as G, te as H, ve as L, Ge as M, be as S, He as T, Fe as W, ne as a, Ee as c, Ce as l, A as m, Be as n, Te as u };