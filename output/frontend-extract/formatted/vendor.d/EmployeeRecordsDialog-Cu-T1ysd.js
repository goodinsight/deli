import { j as e, r as L } from "./react-CjxcGQav.js";
import { c as Q, bv as w, B as C, L as _, bQ as V, d8 as H, al as B, cY as Z, aB as ee, cm as re, cO as te, fC as T, fO as ae, av as oe, cD as ne, mC as P, b7 as se, cC as le, bH as ce, bI as ie, cP as de, fJ as he, fK as ue, fB as me, cG as pe, bT as O, m as xe, dK as ge, aI as je, q as z, j as fe, b1 as ye, s as $, b as be, K as ve, aO as De, D as Ie, cI as Ce } from "../js.d/main-Cm9wS5wt.js";
import { P as Se } from "./propertySections-Bwsl7OH-.js";
import { u as K, s as Oe } from "./FormValue-CAMilU-0.js";
import { R as E, n as Y, S as q, c as U, d as Ee, f as M, g as Re } from "./employeeApi-CdGzOYcj.js";
import { R as G } from "./RepeatRowCard-CW6Yl_Xr.js";
import { C as Le } from "./CategoryOutlined-DcAqxAdD.js";
import { E as Te } from "./EventBusyOutlined-DqcCaRMs.js";
import { L as Fe } from "./LocalLibraryOutlined-DXLWZCv4.js";
import { P as $e, M as Ae, N as _e } from "./PaidOutlined-Cy1uVjW3.js";
import { T as we } from "./ToggleOnOutlined-5BVdqdOm.js";
import { W as Ne } from "./WorkOutlineOutlined-D5AzVFs6.js";
import { I as A, b as Be } from "./PropertyFields-TuJTG5XK.js";
import { h as Ke } from "./types-CVhETUvu.js";
const Ve = Q(e.jsx("path", {
    d: "M12 7V3H2v18h20V7zM6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm0-4H4V5h2zm4 12H8v-2h2zm0-4H8v-2h2zm0-4H8V9h2zm0-4H8V5h2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8zm-2-8h-2v2h2zm0 4h-2v2h2z"
  })),
  We = 50;
function J(r, a) {
  const m = K(r, [a], () => (r.getFormValue(a) ?? []).map(c => c.key).join(`
`));
  return m ? m.split(`
`) : [];
}
const ze = {
    school: "hr.recordSchoolName",
    career: "hr.recordCompanyName",
    cert: "hr.recordCertName",
    training: "hr.recordTrainingName",
    reward: "hr.recordRewardName"
  },
  Me = {
    school: ["hr.recordDateEnter", "hr.recordDateGraduate"],
    career: ["hr.employeeJoinDate", "hr.recordDateLeave"],
    cert: ["hr.recordDateAcquired", "hr.recordDateExpiry"],
    training: ["hr.recordDateStart", "hr.recordDateEnd"],
    reward: ["hr.recordDateOn", null]
  };
function ke({
  kind: r,
  form: a,
  isMobile: m,
  disabled: c
}) {
  const o = w(),
    u = J(a, r),
    s = () => a.getFormValue(r) ?? [],
    i = (t, x, d, g = 100) => e.jsx(B, {
      form: a,
      name: `${r}.${t}.data.${x}`,
      label: d,
      disabled: c,
      fullWidth: !0,
      slotProps: {
        htmlInput: {
          maxLength: g
        }
      }
    }),
    p = (t, x, d, g = {}) => e.jsx(re, {
      form: a,
      name: `${r}.${t}.data.${x}`,
      label: d,
      disabled: c,
      fullWidth: !0,
      min: 0,
      decimalLength: g.decimalLength,
      suffix: g.suffix
    }),
    f = (t, x, d, g, D = !0) => e.jsx(ee, {
      form: a,
      name: `${r}.${t}.data.${x}`,
      label: d,
      options: g,
      showEmptyOption: D,
      emptyLabel: o("hr.employeeNotSelected"),
      disabled: c,
      fullWidth: !0
    }),
    n = (t, x, d) => e.jsx(te, {
      form: a,
      name: `${r}.${t}.${x}`,
      label: d,
      disabled: c,
      fullWidth: !0
    }),
    h = t => {
      const [x, d] = Me[r],
        g = o(x),
        D = d ? o(d) : null,
        y = e.jsx(B, {
          form: a,
          name: `${r}.${t}.title`,
          label: o(ze[r]),
          disabled: c,
          fullWidth: !0,
          slotProps: {
            htmlInput: {
              maxLength: 100
            }
          }
        }),
        S = n(t, "start_date", g),
        l = D ? n(t, "end_date", D) : null,
        b = I => I.map(v => ({
          value: v,
          label: v
        }));
      switch (r) {
        case "school":
          return e.jsxs(e.Fragment, {
            children: [y, i(t, "major", o("hr.recordMajor")), f(t, "degree", o("hr.recordDegree"), b(q)), S, l, f(t, "status", o("hr.myAttColStatus"), b(U))]
          });
        case "career":
          return e.jsxs(e.Fragment, {
            children: [y, i(t, "role", o("hr.recordRole")), i(t, "job", o("hr.employeeTask")), S, l, e.jsx(Z, {
              form: a,
              name: `${r}.${t}.data.same_industry`,
              label: o("hr.employeeSameIndustry"),
              disabled: c
            })]
          });
        case "cert":
          return e.jsxs(e.Fragment, {
            children: [y, i(t, "level", o("hr.recordLevel")), i(t, "issuer", o("hr.recordIssuer")), S, l, i(t, "number", o("hr.recordCertNumber"), 50)]
          });
        case "training":
          return e.jsxs(e.Fragment, {
            children: [y, i(t, "institution", o("hr.recordInstitution")), p(t, "hours", o("hr.recordHours"), {
              decimalLength: 1
            }), S, l]
          });
        case "reward":
          return e.jsxs(e.Fragment, {
            children: [f(t, "type", o("hr.attAdminKind"), [{
              value: "reward",
              label: o("hr.employeeKindReward")
            }, {
              value: "discipline",
              label: o("hr.employeeKindDiscipline")
            }], !1), y, S, p(t, "amount", o("hr.recordAmount"), {
              suffix: o("hr.attSetWonSuffix")
            }), e.jsx(C, {
              sx: {
                gridColumn: m ? void 0 : "span 2",
                minWidth: 0
              },
              children: e.jsx(B, {
                form: a,
                name: `${r}.${t}.data.reason`,
                label: o("hr.reason"),
                onChange: () => a.setFormValue(`${r}.${t}.data.content`, ""),
                disabled: c,
                fullWidth: !0,
                slotProps: {
                  htmlInput: {
                    maxLength: 1e3
                  }
                }
              })
            })]
          });
      }
    };
  return e.jsxs(C, {
    sx: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    },
    children: [u.length === 0 && e.jsx(_, {
      variant: "body2",
      color: "text.secondary",
      children: o("hr.recordNoneOfKind", {
        kind: E[r]
      })
    }), u.map((t, x) => e.jsx(G, {
      onRemove: () => a.setFormValue(r, s().filter(d => d.key !== t)),
      removeAriaLabel: o("hr.recordDeleteRowOf", {
        kind: E[r]
      }),
      disabled: c,
      sx: {
        p: 2.5,
        pb: 1.5,
        borderRadius: 1
      },
      children: e.jsx(C, {
        sx: {
          display: "grid",
          gridTemplateColumns: m ? "minmax(0, 1fr)" : "repeat(3, minmax(0, 1fr))",
          gap: 2,
          alignItems: "center"
        },
        children: h(x)
      })
    }, t)), e.jsx(C, {
      children: e.jsx(V, {
        size: "small",
        startIcon: e.jsx(H, {}),
        onClick: () => a.setFormValue(r, [...s(), Y(r)]),
        disabled: c || u.length >= We,
        children: o("hr.recordAddKind", {
          kind: E[r]
        })
      })
    })]
  });
}
const He = 50,
  Pe = {
    school: {
      get label() {
        return O("hr.recordSchoolName");
      },
      icon: e.jsx(je, {})
    },
    career: {
      get label() {
        return O("hr.recordCompanyName");
      },
      icon: e.jsx(Ve, {})
    },
    cert: {
      get label() {
        return O("hr.recordCertName");
      },
      icon: e.jsx(P, {})
    },
    training: {
      get label() {
        return O("hr.recordTrainingName");
      },
      icon: e.jsx(Fe, {})
    },
    reward: {
      get label() {
        return O("hr.recordRewardName");
      },
      icon: e.jsx(ge, {})
    }
  },
  Ye = {
    school: ["hr.recordDateEnter", "hr.recordDateGraduate"],
    career: ["hr.employeeJoinDate", "hr.recordDateLeave"],
    cert: ["hr.recordDateAcquired", "hr.recordDateExpiry"],
    training: ["hr.recordDateStart", "hr.recordDateEnd"],
    reward: ["hr.recordDateOn", null]
  },
  k = r => r.map(a => ({
    value: a,
    label: Ke(a)
  })),
  qe = [{
    value: "reward",
    get label() {
      return O("hr.employeeKindReward");
    }
  }, {
    value: "discipline",
    get label() {
      return O("hr.employeeKindDiscipline");
    }
  }];
function Ue({
  kind: r,
  form: a,
  disabled: m
}) {
  const c = w(),
    o = J(a, r),
    u = L.useCallback(() => a.getFormValue(r) ?? [], [a, r]),
    s = L.useCallback((n, h) => a.setFormValue(r, u().map(t => t.key === n ? h(t) : t)), [a, r, u]),
    i = L.useCallback((n, h, t) => s(n, x => ({
      ...x,
      [h]: t
    })), [s]),
    p = L.useCallback((n, h) => s(n, t => ({
      ...t,
      data: {
        ...t.data,
        ...h
      }
    })), [s]),
    f = L.useCallback(n => a.setFormValue(r, u().filter(h => h.key !== n)), [a, r, u]);
  return e.jsxs(C, {
    "aria-disabled": m,
    sx: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      ...(m ? {
        pointerEvents: "none",
        opacity: .6
      } : {})
    },
    children: [o.length === 0 && e.jsx(_, {
      variant: "body2",
      color: "text.secondary",
      children: c("hr.recordNoneOfKind", {
        kind: E[r]
      })
    }), o.map((n, h) => e.jsx(G, {
      children: e.jsx(Ge, {
        kind: r,
        form: a,
        index: h,
        setTop: i,
        setData: p,
        disabled: m,
        removeRow: f
      })
    }, n)), e.jsx(C, {
      children: e.jsx(V, {
        size: "small",
        startIcon: e.jsx(H, {}),
        onClick: () => a.setFormValue(r, [...u(), Y(r)]),
        disabled: m || o.length >= He,
        children: c("hr.recordAddKind", {
          kind: E[r]
        })
      })
    })]
  });
}
const Ge = L.memo(function ({
  form: a,
  index: m,
  removeRow: c,
  ...o
}) {
  const u = a.useFormValue(`${o.kind}.${m}`);
  return u ? e.jsx(Je, {
    ...o,
    row: u,
    onRemove: () => c(u.key)
  }) : null;
});
function Je({
  kind: r,
  row: a,
  setTop: m,
  setData: c,
  disabled: o,
  onRemove: u
}) {
  const s = w(),
    i = l => String(a.data[l] ?? ""),
    p = (l, b, I, v = 100) => e.jsx(T, {
      icon: I,
      label: b,
      children: e.jsx(A, {
        value: i(l),
        maxLength: v,
        onCommit: R => c(a.key, {
          [l]: R
        })
      })
    }, l),
    f = (l, b, I) => e.jsx(T, {
      icon: I,
      label: b,
      children: e.jsx(Be, {
        value: a[l],
        placeholder: "YYYY-MM-DD",
        inputMode: "numeric",
        maxLength: 10,
        onCommit: v => {
          const R = he(v);
          if (!ue(R)) return !1;
          m(a.key, l, R);
        }
      })
    }, l),
    n = (l, b, I, v, R = O("hr.employeeNotSelected")) => e.jsx(pe, {
      icon: I,
      label: b,
      value: i(l),
      options: v,
      emptyLabel: R ?? void 0,
      onChange: N => c(a.key, {
        [l]: String(N)
      })
    }, l),
    [h, t] = Ye[r],
    x = s(h),
    d = t ? s(t) : null,
    g = f("start_date", x, e.jsx(me, {})),
    D = d ? f("end_date", d, r === "school" ? e.jsx(xe, {}) : e.jsx(Te, {})) : null;
  let y;
  switch (r) {
    case "school":
      y = e.jsxs(e.Fragment, {
        children: [p("major", s("hr.recordMajor"), e.jsx(ye, {})), n("degree", s("hr.recordDegree"), e.jsx(P, {}), k(q)), g, D, n("status", s("hr.myAttColStatus"), e.jsx(se, {}), k(U))]
      });
      break;
    case "career":
      y = e.jsxs(e.Fragment, {
        children: [p("role", s("hr.recordRole"), e.jsx(fe, {})), p("job", s("hr.employeeTask"), e.jsx(Ne, {})), g, D, e.jsx(ne, {
          icon: e.jsx(we, {}),
          label: s("hr.employeeSameIndustry"),
          checked: a.data.same_industry === !0,
          onChange: l => c(a.key, {
            same_industry: l
          })
        })]
      });
      break;
    case "cert":
      y = e.jsxs(e.Fragment, {
        children: [p("level", s("hr.recordLevel"), e.jsx(Ae, {})), p("number", s("hr.recordCertNumber"), e.jsx(_e, {}), 50), g, D, p("issuer", s("hr.recordIssuer"), e.jsx(z, {}))]
      });
      break;
    case "training":
      y = e.jsxs(e.Fragment, {
        children: [p("institution", s("hr.recordInstitution"), e.jsx(z, {})), e.jsx(T, {
          icon: e.jsx(oe, {}),
          label: s("hr.recordHours"),
          children: e.jsx(A, {
            value: i("hours"),
            inputMode: "decimal",
            maxLength: 6,
            onCommit: l => {
              if (l && !/^\d+(\.\d)?$/.test(l)) return !1;
              c(a.key, {
                hours: l
              });
            }
          })
        }), g, D]
      });
      break;
    case "reward":
      y = e.jsxs(e.Fragment, {
        children: [n("type", s("hr.attAdminKind"), e.jsx(Le, {}), qe, null), g, e.jsxs(T, {
          icon: e.jsx($e, {}),
          label: s("hr.recordAmount"),
          children: [e.jsx(A, {
            value: i("amount"),
            format: "number",
            inputMode: "numeric",
            maxLength: 15,
            onCommit: l => {
              const b = l.replace(/[^\d]/g, "");
              if (l.trim() && !b || b === i("amount")) return !1;
              c(a.key, {
                amount: b
              });
            }
          }), i("amount") ? e.jsx(C, {
            component: "span",
            sx: {
              color: "text.secondary",
              flexShrink: 0
            },
            children: s("hr.attSetWonSuffix")
          }) : null]
        }), e.jsx(T, {
          icon: e.jsx(ae, {}),
          label: s("hr.reason"),
          wide: !0,
          children: e.jsx(A, {
            value: i("reason"),
            maxLength: 1e3,
            onCommit: l => c(a.key, {
              reason: l,
              content: ""
            })
          })
        })]
      });
      break;
  }
  const S = Pe[r];
  return e.jsxs(le, {
    children: [e.jsx(T, {
      icon: S.icon,
      label: S.label,
      full: !0,
      children: e.jsxs(C, {
        sx: {
          display: "flex",
          alignItems: "center",
          flex: 1,
          minWidth: 0
        },
        children: [e.jsx(C, {
          sx: {
            display: "flex",
            flex: 1,
            minWidth: 0,
            fontWeight: 600
          },
          children: e.jsx(A, {
            value: a.title,
            maxLength: 100,
            onCommit: l => m(a.key, "title", l)
          })
        }), e.jsx(ce, {
          title: s("hr.delete"),
          disableInteractive: !0,
          children: e.jsx(ie, {
            size: "small",
            "aria-label": s("hr.recordDeleteRowOf", {
              kind: E[r]
            }),
            onClick: u,
            disabled: o,
            sx: {
              flexShrink: 0,
              my: -.5,
              color: "error.main"
            },
            children: e.jsx(de, {
              fontSize: "small"
            })
          })
        })]
      })
    }), y]
  });
}
const Xe = "application/pdf,image/jpeg,image/png,image/webp,image/heic,image/heif,.pdf,.jpg,.jpeg,.png,.webp,.heic,.heif";
function Qe({
  busy: r,
  reading: a = r,
  targetLabel: m,
  documentLabel: c = O("hr.certificateCareer"),
  touch: o = !1,
  onFile: u
}) {
  const s = w(),
    [i, p] = L.useState(!1),
    f = L.useRef(null);
  return e.jsxs(C, {
    role: "button",
    tabIndex: r ? -1 : 0,
    "aria-label": s("hr.recordUploadDoc", {
      doc: c
    }),
    "aria-disabled": r,
    onClick: () => !r && f.current?.click(),
    onKeyDown: n => {
      (n.key === "Enter" || n.key === " ") && !r && (n.preventDefault(), f.current?.click());
    },
    onDragOver: n => {
      n.preventDefault(), r || p(!0);
    },
    onDragLeave: () => p(!1),
    onDrop: n => {
      n.preventDefault(), p(!1);
      const h = n.dataTransfer.files?.[0];
      h && !r && u(h);
    },
    sx: {
      py: 2.5,
      px: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 1,
      border: "1.5px dashed",
      borderColor: i ? "primary.main" : $[300],
      borderRadius: 1.5,
      bgcolor: i ? be[50] : "transparent",
      color: $[600],
      fontSize: "0.9375rem",
      cursor: r ? "default" : "pointer",
      opacity: r && !a ? .6 : 1,
      textAlign: "center",
      wordBreak: "keep-all",
      transition: "background-color 0.15s, border-color 0.15s",
      "@media (hover: hover)": {
        "&:hover": r || i ? {} : {
          bgcolor: $[50],
          borderColor: $[400]
        }
      }
    },
    children: [a ? e.jsx(ve, {
      size: 18
    }) : e.jsx(De, {
      sx: {
        fontSize: 20,
        color: $[500],
        flexShrink: 0
      }
    }), a ? s("hr.recordReadingDocs") : s(o ? "hr.recordTapHint" : "hr.recordDropHint", {
      doc: c,
      target: m
    }), e.jsx("input", {
      ref: f,
      type: "file",
      accept: Xe,
      hidden: !0,
      onChange: n => {
        const h = n.target.files?.[0];
        n.target.value = "", h && u(h);
      }
    })]
  });
}
function Ze() {
  const r = new Date();
  return `${r.getFullYear()}-${String(r.getMonth() + 1).padStart(2, "0")}-${String(r.getDate()).padStart(2, "0")}`;
}
function pr({
  controller: r,
  drawer: a,
  docked: m = !1,
  kinds: c = Ee,
  title: o = O("hr.recordDialogTitle"),
  note: u = O("hr.recordTrainingNote"),
  onImportFile: s,
  importing: i = !1,
  onPrint: p,
  readOnly: f = !1
}) {
  const n = w(),
    h = f ? void 0 : s,
    {
      form: t,
      modals: x
    } = r,
    d = Ie(),
    g = !d,
    D = Number(t.useFormValue("seq")) || 0,
    y = String(t.useFormValue("name") ?? ""),
    S = K(t, ["career"], () => Re(t.getFormValue("career") ?? [], Ze()), Oe),
    l = K(t, ["training"], () => (t.getFormValue("training") ?? []).length > 0),
    b = t.isSubmitting,
    I = !D || b || i,
    v = [...c.filter(j => j !== "reward" && j !== "training"), ...(c.includes("career") ? ["training"] : [])],
    R = v.map(j => E[j]).join(" · "),
    N = v.includes("career") ? n("hr.certificateCareer") : n("hr.recordGradCertDocs"),
    W = j => g ? e.jsx(Ue, {
      kind: j,
      form: t,
      disabled: I
    }) : e.jsx(ke, {
      kind: j,
      form: t,
      isMobile: d,
      disabled: I
    }),
    F = c.map(j => ({
      id: `career-record-${j}`,
      title: j === "career" ? e.jsxs(C, {
        sx: {
          display: "flex",
          alignItems: "baseline",
          gap: 1.5,
          flexWrap: "wrap"
        },
        children: [e.jsx("span", {
          children: E.career
        }), e.jsx(_, {
          component: "span",
          variant: "body2",
          color: "text.secondary",
          children: n("hr.recordTotalAndSame", {
            total: M(S.total_career_days),
            same: M(S.same_industry_days)
          })
        })]
      }) : E[j],
      children: W(j)
    }));
  if (h && l) {
    const j = F.findIndex(X => X.id === "career-record-career");
    F.splice(j < 0 ? F.length : j + 1, 0, {
      id: "career-record-training",
      title: e.jsxs(C, {
        sx: {
          display: "flex",
          alignItems: "baseline",
          gap: 1.5,
          flexWrap: "wrap"
        },
        children: [e.jsx("span", {
          children: E.training
        }), e.jsx(_, {
          component: "span",
          variant: "body2",
          color: "text.secondary",
          children: n("hr.recordReadFromCert")
        })]
      }),
      children: W("training")
    });
  }
  return h && v.length > 0 && F.unshift({
    id: "career-record-certificate",
    title: N,
    children: e.jsx(Qe, {
      busy: I,
      reading: i,
      targetLabel: R,
      documentLabel: N,
      touch: d,
      onFile: j => {
        h(j, v);
      }
    })
  }), e.jsx(Ce, {
    open: x.records.isOpen,
    onClose: x.records.close,
    title: y ? `${y} — ${o}` : o,
    maxWidth: "md",
    backdropClick: r.formDirty === !1,
    scrollPastLastSection: !1,
    fullScreen: d,
    mobilePresentation: d ? "slide" : "dialog",
    sideDrawer: !d && !!a && !m,
    splitDock: !d && m,
    titleIcons: {
      print: {
        visible: !!p && D > 0,
        onClick: () => p?.()
      },
      share: {
        visible: !1
      },
      delete: {
        visible: !1
      }
    },
    tabs: {
      visible: !g
    },
    sx: g ? {
      DialogContent: Se
    } : void 0,
    actions: {
      showCancelButton: !0,
      left: d || !u ? void 0 : e.jsx(_, {
        variant: "body2",
        color: "text.secondary",
        children: u
      }),
      right: f ? void 0 : e.jsx(V, {
        variant: "contained",
        disableElevation: !0,
        onClick: () => {
          t.submit();
        },
        disabled: I,
        children: n(b ? "hr.employeeSaving" : "hr.save")
      })
    },
    sections: F
  });
}
export { Xe as D, pr as E };