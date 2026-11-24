import { r as h, j as p } from "./react-CjxcGQav.js";
import { e as B, ak as se, dv as ae, bO as b, bT as i, cL as le, j9 as ce, ds as de, bx as pe, co as _, cp as k, lt as z, cr as M, cs as O, ct as E, L as N, ng as me, bv as ue, D as fe, s as $, B as ge, cc as he, cI as ye, bQ as xe, ce as Te, cf as Ce, b1 as be, dK as W, aA as Re, aI as ve, j as Se } from "../js.d/main-Cm9wS5wt.js";
import { u as je } from "./useFormModified-cVB1R-yN.js";
import { u as we } from "./useFileViewer-B-2ewnr3.js";
import { e as R, m as _e, b as ke, E as Me } from "./employeeApi-CdGzOYcj.js";
import { t as G } from "./trainingApi-DT4unjOR.js";
import { L as Oe } from "./LogoutOutlined-DeC1rT68.js";
import { W as Ee } from "./WorkOutlineOutlined-D5AzVFs6.js";
import { p as A } from "./training-Bx0zycZu.js";
import { u as I } from "./useThemeProps-CIcPyl2F.js";
const Ie = {
  seq: 0,
  name: "",
  school: [],
  career: [],
  cert: [],
  reward: [],
  training: []
};
function V(t) {
  return t.map(e => !e.data.reason && e.data.content ? {
    ...e,
    data: {
      ...e.data,
      reason: e.data.content,
      content: ""
    }
  } : e);
}
const Ne = ["school", "career", "cert", "training"];
function bt({
  onRecordsSaved: t
}) {
  const e = {
      records: B({
        modalId: "career-records"
      }),
      history: B({
        modalId: "career-history"
      })
    },
    [r, n] = h.useState(!1),
    [s, g] = h.useState(null),
    o = h.useRef(t);
  o.current = t;
  const l = h.useRef(null),
    c = se({
      formId: "hr-career-records-form",
      initialValues: Ie,
      onSubmit: async a => {
        const d = await y(a);
        return d.ok ? (o.current(d.note), e.records.close(), !0) : !1;
      }
    });
  async function y(a) {
    if (!a.seq) return {
      ok: !1,
      note: ""
    };
    const d = {
      ...Me,
      school: a.school ?? [],
      career: a.career ?? [],
      cert: a.cert ?? [],
      reward: a.reward ?? []
    };
    try {
      await R.saveRecords(a.seq, ke(d)), l.current = {
        ...a,
        training: []
      };
    } catch (f) {
      return b(f instanceof Error ? f.message : i("hr.errSaveEmployeeRecords")), {
        ok: !1,
        note: ""
      };
    }
    const m = (a.training ?? []).filter(f => f.title.trim());
    let u = "";
    if (m.length > 0) try {
      const f = await G.importForEmployee(a.seq, m.map(C => ({
        title: C.title.trim(),
        institution: String(C.data.institution ?? ""),
        hours: Number(C.data.hours) || 0,
        start_date: C.start_date,
        end_date: C.end_date
      })));
      c.setFormValue("training", []);
      const T = [f.created > 0 ? i("hr.recordNewTrainings", {
        count: f.created
      }) : "", f.joined > 0 ? i("hr.recordJoinedTrainings", {
        count: f.joined
      }) : "", f.skipped > 0 ? i("hr.recordSkippedTrainings", {
        count: f.skipped
      }) : ""].filter(Boolean);
      T.length && (u = i("hr.recordTrainingResult", {
        parts: T.join(" · ")
      }));
    } catch (f) {
      return b(i("hr.recordTrainingImportFailed", {
        message: f instanceof Error ? f.message : i("hr.recordUnknownError")
      })), {
        ok: !1,
        note: ""
      };
    }
    return {
      ok: !0,
      note: u
    };
  }
  const [j, x] = h.useState(!1),
    D = async (a, d) => {
      const m = Number(c.getFormValue("seq")) || 0;
      if (!(!m || j)) {
        x(!0);
        try {
          const u = await R.extractRecords(m, a),
            f = Ne.filter(v => !d || d.includes(v)),
            T = [],
            C = {
              school: i("hr.employeeKindSchool"),
              career: i("hr.recordKindCareer"),
              cert: i("hr.recordCertShort"),
              training: i("hr.employeeKindTraining")
            };
          for (const v of f) {
            const H = c.getFormValue(v) ?? [],
              L = _e(H, u[v]);
            c.setFormValue(v, L);
            const K = L.length - H.filter(q => q.title.trim() || q.start_date || q.end_date).length;
            K > 0 && T.push(i("hr.recordKindCount", {
              kind: C[v],
              count: K
            }));
          }
          u.name_matches || de({
            message: i("hr.recordNameMismatch", {
              name: u.name
            })
          }), pe({
            message: T.length ? i("hr.recordImported", {
              list: T.join(" · ")
            }) : i("hr.recordNothingAdded"),
            delay: 2500
          });
        } catch (u) {
          b(u instanceof Error ? u.message : i("hr.errReadCertificateFile"));
        } finally {
          x(!1);
        }
      }
    },
    Q = async a => {
      if (!r) {
        n(!0);
        try {
          const d = await R.records(a.employee.seq),
            m = {
              seq: a.employee.seq,
              name: a.employee.name,
              school: d.school,
              career: d.career,
              cert: d.cert,
              reward: V(d.reward),
              training: []
            };
          c.setFormValues(m), c.setInitialFormValues(m), l.current = m, e.records.open();
        } catch (d) {
          b(d instanceof Error ? d.message : i("hr.errLoadEmployeeRecords"));
        } finally {
          n(!1);
        }
      }
    },
    X = async a => U(a.employee.seq),
    U = async a => {
      if (!(r || !a)) {
        n(!0);
        try {
          const [d, m, u] = await Promise.all([R.detail(a), R.records(a), G.forEmployee(a)]);
          g({
            employee: d,
            records: m,
            trainings: u
          }), e.history.open();
        } catch (d) {
          b(d instanceof Error ? d.message : i("hr.recordErrLoadHistory"));
        } finally {
          n(!1);
        }
      }
    },
    Z = async a => {
      if (!s) return;
      const d = window.open("", "_blank");
      try {
        const m = await R.historyPdf(s.employee.seq, a),
          u = i("hr.recordHistoryFile", {
            name: s.employee.name
          });
        d ? d.location.href = URL.createObjectURL(m) : await ce(m, u);
      } catch (m) {
        d?.close(), b(m instanceof Error ? m.message : i("hr.errMakeHistoryPdf"));
      }
    },
    ee = we(),
    [te, P] = h.useState(!1),
    oe = async (a, d) => {
      const m = Number(c.getFormValue("seq")) || 0;
      if (!m || te) return;
      const u = String(c.getFormValue("name") ?? "");
      P(!0);
      try {
        const f = await R.cardPdf(m, a.filter(T => T !== "training"));
        ee.open({
          seq: 0,
          table_name: "",
          user_seq: 0,
          user_name: "",
          created_time: "",
          name: `${u}_${d.replace(/[·\s]/g, "")}.pdf`,
          size: f.size,
          mimeType: "application/pdf",
          blob: f
        });
      } catch (f) {
        b(f instanceof Error ? f.message : i("hr.recordErrPrint"));
      } finally {
        P(!1);
      }
    },
    re = async (a, d) => {
      try {
        const m = await R.records(a),
          u = {
            seq: a,
            name: d,
            school: m.school,
            career: m.career,
            cert: m.cert,
            reward: V(m.reward),
            training: []
          };
        return c.setFormValues(u), l.current = u, !0;
      } catch (m) {
        return b(m instanceof Error ? m.message : i("hr.errLoadEmployeeRecords")), !1;
      }
    },
    ne = () => y(c.getFormValues());
  ae(["hr_employee_record", "employee"], a => {
    const d = Number(c.getFormValue("seq")) || 0;
    if (!d || !e.records.isOpen) return;
    const m = a.changes.filter(u => u.employee_seq === d || u.action === "bulk");
    if (m.some(u => u.entity === "employee" && u.action === "delete")) {
      e.records.close(), b(i("hr.employeeDeletedByOther"));
      return;
    }
    !a.resync && !m.some(u => u.entity === "hr_employee_record") || R.records(d).then(u => {
      if (Number(c.getFormValue("seq")) !== d || !e.records.isOpen) return;
      const f = c.getFormValues(),
        T = {
          ...f,
          school: u.school,
          career: u.career,
          cert: u.cert,
          reward: V(u.reward)
        },
        {
          patch: C,
          baseline: v
        } = le(f, l.current ?? f, T, {
          skip: ["seq", "name", "training"]
        });
      l.current = v, Object.keys(C).length > 0 && c.setFormValues(C);
    }).catch(() => {});
  }, {
    enabled: e.records.isOpen
  });
  const ie = je(c);
  return {
    form: c,
    modals: e,
    formDirty: ie,
    opening: r,
    history: s,
    importing: j,
    importDocument: D,
    openRecords: Q,
    openHistory: X,
    openHistoryFor: U,
    printHistory: Z,
    printRecords: oe,
    loadForEmployee: re,
    saveNow: ne
  };
}
const F = h.createContext({});
function Fe(t) {
  return _("MuiTimeline", t);
}
k("MuiTimeline", ["root", "positionLeft", "positionRight", "positionAlternate", "positionAlternateReverse"]);
function S(t) {
  return t === "alternate-reverse" ? "positionAlternateReverse" : `position${z(t)}`;
}
const De = t => {
    const {
        position: e,
        classes: r
      } = t,
      n = {
        root: ["root", e && S(e)]
      };
    return O(n, Fe, r);
  },
  qe = E("ul", {
    name: "MuiTimeline",
    slot: "Root",
    overridesResolver: (t, e) => {
      const {
        ownerState: r
      } = t;
      return [e.root, r.position && e[S(r.position)]];
    }
  })({
    display: "flex",
    flexDirection: "column",
    padding: "6px 16px",
    flexGrow: 1
  }),
  Ae = h.forwardRef(function (e, r) {
    const n = I({
        props: e,
        name: "MuiTimeline"
      }),
      {
        position: s = "right",
        className: g,
        ...o
      } = n,
      l = {
        ...n,
        position: s
      },
      c = De(l),
      y = h.useMemo(() => ({
        position: s
      }), [s]);
    return p.jsx(F.Provider, {
      value: y,
      children: p.jsx(qe, {
        className: M(c.root, g),
        ownerState: l,
        ref: r,
        ...o
      })
    });
  });
function Ve(t) {
  return _("MuiTimelineConnector", t);
}
k("MuiTimelineConnector", ["root"]);
const $e = t => {
    const {
      classes: e
    } = t;
    return O({
      root: ["root"]
    }, Ve, e);
  },
  ze = E("span", {
    name: "MuiTimelineConnector",
    slot: "Root"
  })(({
    theme: t
  }) => ({
    width: 2,
    backgroundColor: (t.vars || t).palette.grey[400],
    flexGrow: 1
  })),
  Ue = h.forwardRef(function (e, r) {
    const n = I({
        props: e,
        name: "MuiTimelineConnector"
      }),
      {
        className: s,
        ...g
      } = n,
      o = n,
      l = $e(o);
    return p.jsx(ze, {
      className: M(l.root, s),
      ownerState: o,
      ref: r,
      ...g
    });
  });
function Pe(t) {
  return _("MuiTimelineContent", t);
}
const He = k("MuiTimelineContent", ["root", "positionLeft", "positionRight", "positionAlternate", "positionAlternateReverse"]),
  Le = t => {
    const {
        position: e,
        classes: r
      } = t,
      n = {
        root: ["root", S(e)]
      };
    return O(n, Pe, r);
  },
  Ke = E(N, {
    name: "MuiTimelineContent",
    slot: "Root",
    overridesResolver: (t, e) => {
      const {
        ownerState: r
      } = t;
      return [e.root, e[S(r.position)]];
    }
  })(({
    ownerState: t
  }) => ({
    flex: 1,
    padding: "6px 16px",
    textAlign: "left",
    ...(t.position === "left" && {
      textAlign: "right"
    })
  })),
  Be = h.forwardRef(function (e, r) {
    const n = I({
        props: e,
        name: "MuiTimelineContent"
      }),
      {
        className: s,
        ...g
      } = n,
      {
        position: o
      } = h.useContext(F),
      l = {
        ...n,
        position: o || "right"
      },
      c = Le(l);
    return p.jsx(Ke, {
      component: "div",
      className: M(c.root, s),
      ownerState: l,
      ref: r,
      ...g
    });
  });
function We(t) {
  return _("MuiTimelineDot", t);
}
k("MuiTimelineDot", ["root", "filled", "outlined", "filledGrey", "outlinedGrey", "filledPrimary", "outlinedPrimary", "filledSecondary", "outlinedSecondary"]);
const Ge = t => {
    const {
        color: e,
        variant: r,
        classes: n
      } = t,
      s = {
        root: ["root", r, e !== "inherit" && `${r}${z(e)}`]
      };
    return O(s, We, n);
  },
  Je = E("span", {
    name: "MuiTimelineDot",
    slot: "Root",
    overridesResolver: (t, e) => {
      const {
        ownerState: r
      } = t;
      return [e.root, e[r.color !== "inherit" && `${r.variant}${z(r.color)}`], e[r.variant]];
    }
  })(({
    ownerState: t,
    theme: e
  }) => ({
    display: "flex",
    alignSelf: "baseline",
    borderStyle: "solid",
    borderWidth: 2,
    padding: 4,
    borderRadius: "50%",
    boxShadow: (e.vars || e).shadows[1],
    margin: "11.5px 0",
    ...(t.variant === "filled" && {
      borderColor: "transparent",
      ...(t.color !== "inherit" && {
        ...(t.color === "grey" ? {
          color: (e.vars || e).palette.grey[50],
          backgroundColor: (e.vars || e).palette.grey[400]
        } : {
          color: (e.vars || e).palette[t.color].contrastText,
          backgroundColor: (e.vars || e).palette[t.color].main
        })
      })
    }),
    ...(t.variant === "outlined" && {
      boxShadow: "none",
      backgroundColor: "transparent",
      ...(t.color !== "inherit" && {
        ...(t.color === "grey" ? {
          borderColor: (e.vars || e).palette.grey[400]
        } : {
          borderColor: (e.vars || e).palette[t.color].main
        })
      })
    })
  })),
  Ye = h.forwardRef(function (e, r) {
    const n = I({
        props: e,
        name: "MuiTimelineDot"
      }),
      {
        className: s,
        color: g = "grey",
        variant: o = "filled",
        ...l
      } = n,
      c = {
        ...n,
        color: g,
        variant: o
      },
      y = Ge(c);
    return p.jsx(Je, {
      className: M(y.root, s),
      ownerState: c,
      ref: r,
      ...l
    });
  });
function Qe(t) {
  return _("MuiTimelineOppositeContent", t);
}
const Xe = k("MuiTimelineOppositeContent", ["root", "positionLeft", "positionRight", "positionAlternate", "positionAlternateReverse"]),
  Ze = t => {
    const {
        position: e,
        classes: r
      } = t,
      n = {
        root: ["root", S(e)]
      };
    return O(n, Qe, r);
  },
  et = E(N, {
    name: "MuiTimelineOppositeContent",
    slot: "Root",
    overridesResolver: (t, e) => {
      const {
        ownerState: r
      } = t;
      return [e.root, e[S(r.position)]];
    }
  })(({
    ownerState: t
  }) => ({
    padding: "6px 16px",
    marginRight: "auto",
    textAlign: "right",
    flex: 1,
    ...(t.position === "left" && {
      textAlign: "left"
    })
  })),
  J = h.forwardRef(function (e, r) {
    const n = I({
        props: e,
        name: "MuiTimelineOppositeContent"
      }),
      {
        className: s,
        ...g
      } = n,
      {
        position: o
      } = h.useContext(F),
      l = {
        ...n,
        position: o || "left"
      },
      c = Ze(l);
    return p.jsx(et, {
      component: "div",
      className: M(c.root, s),
      ownerState: l,
      ref: r,
      ...g
    });
  });
J.muiName = "TimelineOppositeContent";
function tt(t) {
  return _("MuiTimelineItem", t);
}
k("MuiTimelineItem", ["root", "positionLeft", "positionRight", "positionAlternate", "positionAlternateReverse", "missingOppositeContent"]);
const ot = t => {
    const {
        position: e,
        classes: r,
        hasOppositeContent: n
      } = t,
      s = {
        root: ["root", S(e), !n && "missingOppositeContent"]
      };
    return O(s, tt, r);
  },
  rt = E("li", {
    name: "MuiTimelineItem",
    slot: "Root",
    overridesResolver: (t, e) => {
      const {
        ownerState: r
      } = t;
      return [e.root, e[S(r.position)]];
    }
  })(({
    ownerState: t
  }) => ({
    listStyle: "none",
    display: "flex",
    position: "relative",
    minHeight: 70,
    ...(t.position === "left" && {
      flexDirection: "row-reverse"
    }),
    ...((t.position === "alternate" || t.position === "alternate-reverse") && {
      [`&:nth-of-type(${t.position === "alternate" ? "even" : "odd"})`]: {
        flexDirection: "row-reverse",
        [`& .${He.root}`]: {
          textAlign: "right"
        },
        [`& .${Xe.root}`]: {
          textAlign: "left"
        }
      }
    }),
    ...(!t.hasOppositeContent && {
      "&::before": {
        content: '""',
        flex: 1,
        padding: "6px 16px"
      }
    })
  })),
  nt = h.forwardRef(function (e, r) {
    const n = I({
        props: e,
        name: "MuiTimelineItem"
      }),
      {
        position: s,
        className: g,
        ...o
      } = n,
      {
        position: l
      } = h.useContext(F);
    let c = !1;
    h.Children.forEach(n.children, D => {
      me(D, ["TimelineOppositeContent"]) && (c = !0);
    });
    const y = {
        ...n,
        position: s || l || "right",
        hasOppositeContent: c
      },
      j = ot(y),
      x = h.useMemo(() => ({
        position: y.position
      }), [y.position]);
    return p.jsx(F.Provider, {
      value: x,
      children: p.jsx(rt, {
        className: M(j.root, g),
        ownerState: y,
        ref: r,
        ...o
      })
    });
  });
function it(t) {
  return _("MuiTimelineSeparator", t);
}
k("MuiTimelineSeparator", ["root"]);
const st = t => {
    const {
      classes: e
    } = t;
    return O({
      root: ["root"]
    }, it, e);
  },
  at = E("div", {
    name: "MuiTimelineSeparator",
    slot: "Root"
  })({
    display: "flex",
    flexDirection: "column",
    flex: 0,
    alignItems: "center"
  }),
  lt = h.forwardRef(function (e, r) {
    const n = I({
        props: e,
        name: "MuiTimelineSeparator"
      }),
      {
        className: s,
        ...g
      } = n,
      o = n,
      l = st(o);
    return p.jsx(at, {
      className: M(l.root, s),
      ownerState: o,
      ref: r,
      ...g
    });
  }),
  Y = {
    join: {
      get label() {
        return i("hr.employeeKindJoin");
      },
      icon: p.jsx(Se, {
        fontSize: "small"
      }),
      color: "#2563eb"
    },
    resign: {
      get label() {
        return i("hr.employeeStatusResigned");
      },
      icon: p.jsx(Oe, {
        fontSize: "small"
      }),
      color: $[500]
    },
    school: {
      get label() {
        return i("hr.employeeKindSchool");
      },
      icon: p.jsx(ve, {
        fontSize: "small"
      }),
      color: "#7c3aed"
    },
    career: {
      get label() {
        return i("hr.valHireExperienced");
      },
      icon: p.jsx(Ee, {
        fontSize: "small"
      }),
      color: "#0891b2"
    },
    cert: {
      get label() {
        return i("hr.employeeKindCert");
      },
      icon: p.jsx(Re, {
        fontSize: "small"
      }),
      color: "#059669"
    },
    reward: {
      get label() {
        return i("hr.employeeKindReward");
      },
      icon: p.jsx(W, {
        fontSize: "small"
      }),
      color: "#d97706"
    },
    discipline: {
      get label() {
        return i("hr.employeeKindDiscipline");
      },
      icon: p.jsx(W, {
        fontSize: "small"
      }),
      color: "#dc2626"
    },
    training: {
      get label() {
        return i("hr.employeeKindTraining");
      },
      icon: p.jsx(be, {
        fontSize: "small"
      }),
      color: "#4f46e5"
    }
  },
  w = (...t) => t.filter(Boolean).join(" · ");
function ct({
  employee: t,
  records: e,
  trainings: r
}) {
  const n = [],
    s = o => {
      o.date && n.push(o);
    };
  s({
    key: "join",
    kind: "join",
    date: t.join_date,
    dateText: t.join_date,
    title: i("hr.employeeKindJoin"),
    description: w(t.position, t.job_title, t.task)
  }), t.resign_date && s({
    key: "resign",
    kind: "resign",
    date: t.resign_date,
    dateText: t.resign_date,
    title: i("hr.employeeStatusResigned"),
    description: ""
  });
  for (const o of e.school) s({
    key: `school-${o.seq}`,
    kind: "school",
    date: o.end_date || o.start_date,
    dateText: A(o.start_date, o.end_date),
    title: o.title,
    description: w(String(o.data.major ?? ""), String(o.data.degree ?? ""), String(o.data.status ?? ""))
  });
  for (const o of e.career) s({
    key: `career-${o.seq}`,
    kind: "career",
    date: o.end_date || o.start_date,
    dateText: A(o.start_date, o.end_date),
    title: o.title,
    description: w(String(o.data.role ?? ""), String(o.data.job ?? ""), o.data.same_industry === !0 && i("hr.employeeSameIndustry"))
  });
  for (const o of e.cert) s({
    key: `cert-${o.seq}`,
    kind: "cert",
    date: o.start_date,
    dateText: o.start_date,
    title: w(o.title, String(o.data.level ?? "")),
    description: w(String(o.data.issuer ?? ""), o.end_date && i("hr.employeeExpiresOn", {
      date: o.end_date
    }))
  });
  for (const o of e.reward) {
    const l = o.data.type === "discipline",
      c = Number(o.data.amount ?? 0);
    s({
      key: `reward-${o.seq}`,
      kind: l ? "discipline" : "reward",
      date: o.start_date,
      dateText: o.start_date,
      title: o.title,
      description: w(String(o.data.reason || o.data.content || ""), c > 0 && i("hr.wonAmount", {
        amount: c.toLocaleString(Te(Ce()))
      }))
    });
  }
  for (const o of r) s({
    key: `training-${o.seq}`,
    kind: "training",
    date: o.completed_date || o.end_date || o.start_date,
    dateText: A(o.start_date, o.end_date),
    title: o.name,
    description: w(o.hours > 0 && i("hr.hoursOnly", {
      h: o.hours
    }), o.completed ? i("hr.employeeCompleted") : i("hr.employeeNotCompleted"))
  });
  const g = o => o === "join" || o === "resign" ? 0 : 1;
  return n.sort((o, l) => o.date === l.date ? g(o.kind) - g(l.kind) : o.date < l.date ? 1 : -1);
}
function dt(t) {
  return t.map(e => ({
    date_text: e.dateText,
    label: Y[e.kind].label,
    title: e.title,
    description: e.description
  }));
}
function Rt({
  controller: t
}) {
  const e = ue(),
    {
      history: r,
      modals: n
    } = t,
    s = n.history.isOpen,
    g = n.history.close,
    o = fe(),
    l = r ? ct(r) : [],
    c = l.length === 0 ? p.jsx(N, {
      sx: {
        py: 6,
        textAlign: "center",
        fontSize: 14,
        color: "text.secondary"
      },
      children: e("hr.employeeHistoryEmpty")
    }) : p.jsx(Ae, {
      position: o ? "right" : "alternate",
      sx: {
        m: 0,
        p: 0,
        "& .MuiTimelineItem-root:last-of-type": {
          minHeight: 0
        },
        "& .MuiTimelineItem-root:last-of-type .MuiTimelineContent-root": {
          pb: 0
        },
        ...(o ? {
          "& .MuiTimelineItem-root::before": {
            flex: 0,
            padding: 0
          }
        } : {})
      },
      children: l.map((y, j) => {
        const x = Y[y.kind];
        return p.jsxs(nt, {
          children: [!o && p.jsx(J, {
            sx: {
              py: 0,
              pt: "17.5px",
              lineHeight: "20px",
              fontSize: 13,
              fontWeight: 600,
              color: "#2563eb"
            },
            children: y.dateText
          }), p.jsxs(lt, {
            children: [p.jsx(Ye, {
              variant: "outlined",
              sx: {
                borderColor: x.color,
                color: x.color,
                bgcolor: "#fff",
                boxShadow: "none"
              },
              children: x.icon
            }), j < l.length - 1 && p.jsx(Ue, {
              sx: {
                bgcolor: $[200]
              }
            })]
          }), p.jsxs(Be, {
            sx: {
              pt: "10px",
              pb: 2
            },
            children: [p.jsxs(ge, {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 1,
                flexWrap: "wrap",
                justifyContent: !o && j % 2 === 1 ? "flex-end" : "flex-start"
              },
              children: [p.jsx(N, {
                sx: {
                  fontSize: 15,
                  fontWeight: 600
                },
                children: y.title
              }), p.jsx(he, {
                label: x.label,
                size: "small",
                variant: "outlined",
                sx: {
                  height: 22,
                  fontSize: 12,
                  borderColor: x.color,
                  color: x.color
                }
              })]
            }), o && p.jsx(N, {
              sx: {
                fontSize: 12,
                color: $[500],
                mt: .25
              },
              children: y.dateText
            }), y.description ? p.jsx(N, {
              sx: {
                fontSize: 13,
                color: "text.secondary",
                mt: .25
              },
              children: y.description
            }) : null]
          })]
        }, y.key);
      })
    });
  return p.jsx(ye, {
    open: s,
    onClose: g,
    title: r ? e("hr.employeeHistoryTitleOf", {
      name: r.employee.name
    }) : e("hr.employeeHistory"),
    maxWidth: "md",
    sx: {
      DialogTitle: {
        fontSize: "1.375rem",
        fontWeight: 700,
        "& .MuiTypography-root": {
          fontSize: "inherit",
          fontWeight: "inherit"
        }
      }
    },
    fullScreen: o,
    mobilePresentation: o ? "slide" : "dialog",
    draggable: !0,
    titleIcons: {
      delete: {
        visible: !1
      },
      print: {
        visible: !0,
        onClick: () => r && void t.printHistory(dt(l))
      },
      share: {
        visible: !1
      }
    },
    tabs: {
      visible: !1
    },
    scrollPastLastSection: !1,
    contentBottomPadding: 16,
    actions: {
      visible: !0,
      showCancelButton: !1,
      right: p.jsx(xe, {
        variant: "contained",
        color: "primary",
        disableElevation: !0,
        onClick: g,
        children: e("hr.close")
      })
    },
    sections: [{
      id: "employee-history",
      title: e("hr.employeeHistory"),
      showTitle: !1,
      children: c
    }]
  });
}
function vt(t, e, r) {
  return t.filter(n => e.has(String(n.id))).map(n => String(n.id) === r ? {
    ...n,
    width: void 0,
    minWidth: typeof n.width == "number" ? n.width : n.minWidth
  } : n);
}
export { Rt as E, vt as c, bt as u };