import { r as n, j as r } from "./react-CjxcGQav.js";
import { bM as $e, bT as m, e as Ke, ak as He, bO as ne, bx as ke, bv as ie, D as Te, cI as Ge, c4 as Ye, L as Q, bQ as Ie, fL as Qe, cz as Xe, dv as Je, c2 as Ze, B as c, cY as et, s as _, bH as tt, lr as rt, d8 as st } from "../js.d/main-Cm9wS5wt.js";
import { u as ot, E as nt, c as it } from "./compactColumns-B2uraD04.js";
import { S as at } from "./SplitDockSlot-B6Q4iP8T.js";
import { L as ct } from "./ListViewModeToggle-NcYQu7vy.js";
import { u as lt } from "./listViewMode-iTl-2ucA.js";
import { S as dt } from "./selectedRow-CBnSZEGB.js";
import { a as ut } from "./EdgeTabs-Ccbggjn6.js";
import { u as pt } from "./mobileSearchOverlay-DYWcMOOb.js";
import { l as se, d as Ne, a as Le } from "./career-DNUE6AFa.js";
import { e as Se, m as mt, R as ht, S as ft, f as oe, h as be } from "./employeeApi-CdGzOYcj.js";
import { t as gt, E as xt } from "./EmployeePickField-CDJRGgup.js";
import { E as yt, D as _t } from "./EmployeeRecordsDialog-Cu-T1ysd.js";
import { u as St, b as bt, a as Ct } from "./MobileCardListLayout-D5_p2Xer.js";
import { T as jt } from "./tableScrollbars-C9bhlJjO.js";
import { u as wt } from "./useColumnWidths-DSAca5rC.js";
import { u as Rt } from "./useClientSort-CdwrAOWp.js";
import { c as Et } from "./orgTree-Dh5HFjBo.js";
import { h as vt } from "./types-CVhETUvu.js";
import "./stylis-DdLD6a3t.js";
import "./useFormModified-cVB1R-yN.js";
import "./useFileViewer-B-2ewnr3.js";
import "./documentViewerStore-BlSjH3BG.js";
import "./trainingApi-DT4unjOR.js";
import "./training-Bx0zycZu.js";
import "./i18nLabels-BNTLL7cu.js";
import "./LogoutOutlined-DeC1rT68.js";
import "./WorkOutlineOutlined-D5AzVFs6.js";
import "./useThemeProps-CIcPyl2F.js";
import "./HorizontalSplitOutlined-MKxJhLKp.js";
import "./OptionToggleGroup-Cvm2wRyq.js";
import "./profileApi-Btafs-pM.js";
import "./propertySections-Bwsl7OH-.js";
import "./FormValue-CAMilU-0.js";
import "./RepeatRowCard-CW6Yl_Xr.js";
import "./CategoryOutlined-DcAqxAdD.js";
import "./EventBusyOutlined-DqcCaRMs.js";
import "./LocalLibraryOutlined-DXLWZCv4.js";
import "./PaidOutlined-Cy1uVjW3.js";
import "./ToggleOnOutlined-5BVdqdOm.js";
import "./PropertyFields-TuJTG5XK.js";
const Ce = "/v1/hr/records/summary";
function kt(s, t) {
  if (!s || s.ok === !1) throw new Error(s?.message || t);
  return s.data;
}
function C(s) {
  return typeof s == "string" ? s : s == null ? "" : String(s);
}
function b(s) {
  const t = Number(s ?? 0);
  return Number.isFinite(t) ? t : 0;
}
function re(s) {
  const t = C(s).slice(0, 10);
  return /^\d{4}-\d{2}-\d{2}$/.test(t) && t !== "0000-00-00" ? t : "";
}
function Y(s) {
  return s && typeof s == "object" && !Array.isArray(s) ? s : null;
}
const Tt = new Set(["active", "leave", "resigned"]);
function It(s) {
  const t = Y(s) ?? {},
    p = Y(t.employee) ?? {},
    o = Y(t.counts) ?? {},
    i = Y(t.last_school),
    x = Y(t.cert_expiry),
    h = Y(t.next_training),
    S = C(p.status);
  return {
    employee: {
      seq: b(p.seq),
      name: C(p.name),
      unit_seq: b(p.unit_seq),
      position: C(p.position),
      task: C(p.task),
      status: Tt.has(S) ? S : "active"
    },
    counts: {
      school: b(o.school),
      career: b(o.career),
      cert: b(o.cert),
      reward: b(o.reward),
      discipline: b(o.discipline),
      training: b(o.training)
    },
    last_school: i ? {
      title: C(i.title),
      degree: C(i.degree),
      major: C(i.major),
      status: C(i.status)
    } : null,
    certs: Array.isArray(t.certs) ? t.certs.map(C).filter(Boolean) : [],
    cert_expiry: x && re(x.date) ? {
      title: C(x.title),
      date: re(x.date),
      days_left: b(x.days_left)
    } : null,
    total_career_days: b(t.total_career_days),
    same_industry_days: b(t.same_industry_days),
    next_training: h && re(h.date) ? {
      name: C(h.name),
      date: re(h.date),
      days_left: b(h.days_left)
    } : null
  };
}
const Nt = {
    summary: async (s = {}) => {
      const t = new URLSearchParams();
      s.search && t.set("search", s.search), s.cert && t.set("cert", s.cert), s.school && t.set("school", s.school), s.includeResigned && t.set("include_resigned", "1");
      const p = t.toString(),
        o = await $e.http.get(p ? `${Ce}?${p}` : Ce),
        i = kt(o, m("hr.errLoadCareers"));
      return {
        today: re(i.today),
        items: (i.items ?? []).map(It)
      };
    }
  },
  je = 200;
function Lt({
  career: s,
  kinds: t,
  docLabel: p
}) {
  const o = Ke({
      modalId: "career-import-pick"
    }),
    [i, x] = n.useState("idle"),
    [h, S] = n.useState({
      index: 0,
      total: 0,
      fileName: ""
    }),
    [W, j] = n.useState(null),
    [X, w] = n.useState([]),
    [v, M] = n.useState(!1),
    I = n.useRef([]),
    D = n.useRef(0),
    N = n.useRef("idle"),
    U = n.useRef(null),
    L = n.useRef([]),
    $ = n.useRef(s);
  $.current = s;
  const A = n.useRef(o);
  A.current = o;
  const F = l => {
      N.current = l, x(l);
    },
    K = He({
      formId: "hr-career-import-pick",
      initialValues: {
        employee_seq: 0
      },
      onValidate: async l => Number(l.employee_seq) > 0 ? !0 : (ne(m("hr.attSetErrPickEmployee")), !1),
      onSubmit: async l => {
        const f = U.current,
          d = Number(l.employee_seq) || 0;
        if (!f || !d) return !1;
        const g = L.current.find(R => R.seq === d)?.name ?? f.candidates.find(R => R.seq === d)?.name ?? "";
        return F("review"), A.current.close(), await q(d, g, f), !0;
      }
    }),
    ae = async () => {
      if (!(L.current.length > 0 || v)) {
        M(!0);
        try {
          const l = [];
          for (let f = 1; f <= 50; f += 1) {
            const d = await Se.list({
              page: f,
              limit: je,
              sort: "name",
              dir: "asc"
            });
            if (l.push(...d.items.map(gt)), d.items.length < je) break;
          }
          L.current = l, w(l);
        } catch (l) {
          ne(l instanceof Error ? l.message : m("hr.errLoadEmployees"));
        } finally {
          M(!1);
        }
      }
    },
    V = () => {
      I.current = [], D.current = 0, U.current = null, j(null), S({
        index: 0,
        total: 0,
        fileName: ""
      }), F("idle");
    },
    B = async l => {
      const f = I.current;
      if (l >= f.length) {
        V();
        return;
      }
      const d = f[l];
      D.current = l, S({
        index: l,
        total: f.length,
        fileName: d.name
      }), F("reading");
      let g;
      try {
        g = await Se.extractRecordsForOrg(d);
      } catch (E) {
        ne(m("hr.recordFileError", {
          file: d.name,
          message: E instanceof Error ? E.message : m("hr.errReadCertificateFile")
        })), B(l + 1);
        return;
      }
      U.current = g;
      const R = g.candidates.find(E => E.seq === g.matched_seq);
      if (g.matched_seq > 0 && R) {
        F("review"), await q(R.seq, R.name, g);
        return;
      }
      j({
        name: g.name,
        match: g.match,
        candidates: g.candidates,
        fileName: d.name
      }), K.setFormValues({
        employee_seq: g.match === "birth_mismatch" ? g.candidates[0]?.seq ?? 0 : 0
      }), g.match !== "many" && ae(), F("pick"), A.current.open();
    },
    q = async (l, f, d) => {
      const g = $.current;
      if (!(await g.loadForEmployee(l, f))) {
        B(D.current + 1);
        return;
      }
      const {
          form: E
        } = g,
        P = [];
      for (const y of t) {
        const J = E.getFormValue(y) ?? [],
          Z = mt(J, d[y]);
        E.setFormValue(y, Z);
        const k = Z.length - J.filter(H => H.title.trim() || H.start_date || H.end_date).length;
        k > 0 && P.push(m("hr.recordKindCount", {
          kind: ht[y],
          count: k
        }));
      }
      g.modals.records.open(), ke({
        message: P.length ? m("hr.recordImportedFor", {
          name: f,
          list: P.join(" · ")
        }) : m("hr.recordNothingAddedFor", {
          name: f
        }),
        delay: 2500
      });
    },
    ce = l => {
      N.current !== "idle" || l.length === 0 || (I.current = l, B(0));
    },
    z = s.modals.records.isOpen;
  n.useEffect(() => {
    !z && N.current === "review" && B(D.current + 1);
  }, [z]);
  const O = o.isOpen;
  return n.useEffect(() => {
    !O && N.current === "pick" && (j(null), B(D.current + 1));
  }, [O]), {
    docLabel: p,
    phase: i,
    busy: i !== "idle",
    reading: i === "reading",
    progress: h,
    progressText: h.total > 1 ? `${h.index + 1}/${h.total}` : "",
    pending: W,
    employees: X,
    loadingEmployees: v,
    pickForm: K,
    pickModal: o,
    start: ce
  };
}
function qt(s, t, p) {
  const o = s ? m("hr.recordWhoNamed", {
    name: s
  }) : m("hr.recordWhoDoc");
  return t === "many" ? m("hr.recordPickMany", {
    count: p
  }) : t === "birth_mismatch" ? m("hr.recordPickBirth", {
    who: o
  }) : s ? m("hr.recordPickNotFound", {
    who: o
  }) : m("hr.recordPickNoName");
}
function Ot({
  controller: s
}) {
  const t = ie(),
    {
      pickModal: p,
      pickForm: o,
      pending: i,
      employees: x,
      loadingEmployees: h,
      progressText: S,
      docLabel: W
    } = s,
    j = Te(),
    X = Number(o.useFormValue("employee_seq")) || 0,
    w = i?.match === "many",
    v = n.useMemo(() => w ? i?.candidates ?? [] : x, [w, i, x]);
  return r.jsx(Ge, {
    open: p.isOpen,
    onClose: p.close,
    title: S ? t("hr.recordPickTitleProgress", {
      doc: W,
      progress: S
    }) : t("hr.recordPickTitle", {
      doc: W
    }),
    width: "560px",
    fullScreen: j,
    mobilePresentation: j ? "slide" : "dialog",
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
      right: r.jsx(Ie, {
        variant: "contained",
        disableElevation: !0,
        onClick: () => {
          o.submit();
        },
        disabled: !X,
        children: t("hr.recordPutToEmployee")
      })
    },
    sections: [{
      id: "career-import-pick",
      title: i?.fileName ?? "",
      children: r.jsxs(Ye, {
        spacing: 2,
        children: [r.jsx(Q, {
          variant: "body2",
          color: "text.secondary",
          children: qt(i?.name ?? "", i?.match ?? "none", i?.candidates.length ?? 0)
        }), r.jsx(xt, {
          value: X,
          onPick: M => o.setFormValue("employee_seq", M),
          employees: v,
          loading: !w && h
        })]
      })
    }]
  });
}
const Pt = 52,
  Mt = "#9b9a97",
  Dt = 300,
  we = 2,
  te = "__none",
  At = {
    career: new Set(["no", "name", "unit", "career"]),
    qualification: new Set(["no", "name", "unit", "last_school"])
  };
function Re({
  filtering: s
}) {
  const t = ie();
  return r.jsx(c, {
    sx: {
      py: 6,
      px: 2,
      textAlign: "center",
      color: Mt,
      fontSize: 14,
      wordBreak: "keep-all"
    },
    children: t(s ? "hr.recordNoMatch" : "hr.employeeNoneRegistered")
  });
}
function Ee({
  certs: s,
  onOpen: t
}) {
  const p = ie();
  if (s.length === 0) return r.jsx(c, {
    component: "span",
    sx: {
      color: _[300]
    },
    children: "–"
  });
  const o = s.slice(0, we),
    i = s.length - o.length;
  return r.jsxs(c, {
    sx: {
      display: "flex",
      alignItems: "center",
      gap: 1,
      minWidth: 0,
      overflow: "hidden"
    },
    children: [o.map((x, h) => r.jsx(c, {
      component: "span",
      title: x,
      role: t ? "button" : void 0,
      onClick: t ? S => {
        S.stopPropagation(), t();
      } : void 0,
      sx: {
        cursor: t ? "pointer" : void 0,
        "&:hover": t ? {
          bgcolor: _[200]
        } : void 0,
        px: .75,
        py: .25,
        borderRadius: 1,
        fontSize: 14,
        bgcolor: _[100],
        color: _[700],
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: 110
      },
      children: x
    }, `${x}-${h}`)), i > 0 ? r.jsx(c, {
      component: "span",
      title: s.slice(we).join(", "),
      onClick: t ? x => {
        x.stopPropagation(), t();
      } : void 0,
      sx: {
        fontSize: 14,
        color: _[500],
        whiteSpace: "nowrap",
        cursor: t ? "pointer" : void 0
      },
      children: p("hr.recordMoreN", {
        count: i
      })
    }) : null]
  });
}
function Ft({
  date: s,
  daysLeft: t
}) {
  return r.jsxs(c, {
    sx: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      lineHeight: 1.25
    },
    children: [r.jsx(c, {
      component: "span",
      sx: {
        fontSize: 14
      },
      children: s
    }), r.jsx(c, {
      component: "span",
      sx: {
        fontSize: 14,
        fontWeight: 600,
        color: Le(t)
      },
      children: Ne(t)
    })]
  });
}
const T = () => r.jsx(c, {
  component: "span",
  sx: {
    color: _[300]
  },
  children: "–"
});
function ve(s) {
  const t = s.counts.discipline,
    p = s.counts.reward - t;
  return [p > 0 ? m("hr.recordPraiseN", {
    count: p
  }) : "", t > 0 ? m("hr.recordDisciplineN", {
    count: t
  }) : ""].filter(Boolean).join(" · ");
}
const Vt = {
  career: {
    kinds: ["career", "reward"],
    get title() {
      return m("hr.recordCareerRewardTitle");
    },
    get note() {
      return m("hr.recordTrainingNote");
    },
    get listName() {
      return m("hr.recordKindCareer");
    }
  },
  qualification: {
    kinds: ["school", "cert"],
    get title() {
      return m("hr.recordSchoolCertTitle");
    },
    note: null,
    get listName() {
      return m("hr.recordSchoolCertTitle");
    }
  }
};
function Tr({
  variant: s = "career"
}) {
  const t = ie(),
    p = Qe("hr"),
    o = s === "career",
    i = Vt[s],
    x = wt(o ? "hr.career" : "hr.qualification"),
    h = Te(),
    [S, W] = lt(s),
    j = !h && S !== "list",
    w = Xe()?.seq ?? 0,
    [v, M] = n.useState([]),
    [I, D] = n.useState([]),
    [N, U] = n.useState(!1),
    [L, $] = n.useState(""),
    [A, F] = n.useState({
      search: ""
    }),
    [K, ae] = n.useState(!1),
    [V, B] = n.useState([]),
    [q, ce] = n.useState([]),
    z = n.useRef(0);
  n.useEffect(() => {
    const e = setTimeout(() => {
      const u = L.trim();
      F(a => a.search === u ? a : {
        search: u
      });
    }, Dt);
    return () => clearTimeout(e);
  }, [L]);
  const O = pt(),
    l = !!O.useValue("open");
  n.useEffect(() => {
    if (h) return O.setValue("active", !0), () => {
      O.setValue("active", !1), O.setValue("open", !1);
    };
  }, [h, O]), n.useEffect(() => {
    h && !l && $("");
  }, [h, l]);
  const f = n.useCallback(async (e = !1) => {
    if (!w) {
      M([]);
      return;
    }
    const u = ++z.current;
    e || U(!0);
    try {
      const a = await Nt.summary({
        ...A,
        includeResigned: K
      });
      u === z.current && M(a.items);
    } catch (a) {
      u === z.current && !e && ne(a instanceof Error ? a.message : m("hr.recordListLoadFailed", {
        name: i.listName
      }));
    } finally {
      u === z.current && U(!1);
    }
  }, [w, A, K]);
  n.useEffect(() => {
    f();
  }, [f]), Je(["employee", "hr_employee_record", "hr_training"], () => {
    f(!0);
  });
  const d = ot({
      onRecordsSaved: e => {
        ke({
          message: e ? m("hr.recordSavedWith", {
            note: e
          }) : m("hr.saved"),
          delay: e ? 2500 : 500
        }), f();
      }
    }),
    {
      opening: g,
      openRecords: R
    } = d,
    E = Number(d.form.useFormValue("seq")) || 0,
    P = t(o ? "hr.certificateCareer" : "hr.recordGradCertDocs"),
    y = Lt({
      career: d,
      kinds: o ? ["career", "training"] : ["school", "cert"],
      docLabel: P
    }),
    J = n.useRef(null),
    Z = r.jsxs(r.Fragment, {
      children: [r.jsx(Ie, {
        style: p.canWrite ? void 0 : {
          display: "none"
        },
        variant: "contained",
        disableElevation: !0,
        startIcon: r.jsx(st, {}),
        onClick: () => J.current?.click(),
        disabled: y.busy,
        children: P
      }), r.jsx("input", {
        ref: J,
        type: "file",
        hidden: !0,
        multiple: !0,
        accept: _t,
        onChange: e => {
          const u = Array.from(e.target.files ?? []);
          e.target.value = "", y.start(u);
        }
      })]
    }),
    [k, H] = n.useState(!1),
    ue = e => {
      if (j && d.modals.records.isOpen && E === e.employee.seq) {
        d.modals.records.close();
        return;
      }
      H(!1), R(e);
    },
    pe = e => {
      H(!0), R(e);
    },
    qe = Et();
  n.useEffect(() => {
    if (!w) return;
    let e = !0;
    return Ze.getTree(w).then(u => {
      e && D(u.units ?? []);
    }).catch(() => {}), () => {
      e = !1;
    };
  }, [w, qe]);
  const G = n.useMemo(() => {
      const e = new Map();
      for (const u of I) e.set(u.seq, u.name);
      return e;
    }, [I]),
    me = e => e.employee.unit_seq && G.has(e.employee.unit_seq) ? String(e.employee.unit_seq) : te,
    Oe = e => e.last_school?.degree || te,
    Pe = n.useMemo(() => v.filter(e => (V.length === 0 || V.includes(me(e))) && (o || q.length === 0 || q.includes(Oe(e)))), [v, V, q, G, o]),
    {
      rows: ee,
      tableSort: Me
    } = Rt(Pe, {
      name: e => e.employee.name,
      unit: e => G.get(e.employee.unit_seq) ?? "",
      position: e => e.employee.position,
      last_school: e => e.last_school ? se(e.last_school) : "",
      cert_expiry: e => e.cert_expiry?.date ?? "",
      career: e => e.total_career_days || "",
      same_career: e => e.same_industry_days || "",
      school_count: e => e.counts.school,
      career_count: e => e.counts.career,
      cert_count: e => e.counts.cert,
      reward_count: e => e.counts.reward
    }, o ? null : {
      by: "name",
      dir: "asc"
    }),
    De = n.useMemo(() => {
      const e = new Set(v.map(me)),
        u = I.filter(a => e.has(String(a.seq))).map(a => ({
          value: String(a.seq),
          label: a.name
        }));
      return e.has(te) && u.push({
        value: te,
        label: t("hr.attAdminNoUnit")
      }), u;
    }, [v, I, G, t]),
    Ae = [...ft.map(e => ({
      value: e,
      label: vt(e)
    })), {
      value: te,
      label: t("hr.recordNoSchool")
    }],
    he = !!A.search || V.length > 0 || !o && q.length > 0,
    Fe = e => [G.get(e.employee.unit_seq), e.employee.position].filter(Boolean).join(" · "),
    fe = r.jsx(c, {
      sx: {
        display: "flex",
        alignItems: "center",
        whiteSpace: "nowrap"
      },
      children: r.jsx(et, {
        label: t("hr.recordIncludeResigned"),
        size: "small",
        checked: K,
        onChange: (e, u) => ae(u)
      })
    }),
    ge = r.jsxs(r.Fragment, {
      children: [g || y.reading ? r.jsxs(c, {
        sx: {
          position: "fixed",
          inset: 0,
          zIndex: 1200,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          "@keyframes career-spin": {
            to: {
              transform: "rotate(360deg)"
            }
          }
        },
        children: [r.jsx(c, {
          role: "progressbar",
          "aria-label": y.reading ? t("hr.recordReadingDoc", {
            doc: P
          }) : t("hr.recordLoading"),
          sx: {
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: `3px solid ${_[200]}`,
            borderTopColor: _[600],
            animation: "career-spin 0.8s linear infinite"
          }
        }), y.reading ? r.jsx(Q, {
          variant: "body2",
          sx: {
            mt: 1.5,
            px: 2,
            py: 1,
            borderRadius: 1,
            bgcolor: "background.paper",
            boxShadow: 1,
            color: "text.secondary"
          },
          children: t("hr.recordReadingDocProgress", {
            doc: P,
            progress: y.progressText ? ` (${y.progressText})` : "",
            file: y.progress.fileName
          })
        }) : null]
      }) : null, r.jsx(yt, {
        controller: d,
        drawer: !0,
        docked: j,
        kinds: k ? ["cert"] : i.kinds,
        title: k ? t("hr.employeeKindCert") : y.progressText ? `${i.title} (${y.progressText})` : i.title,
        note: k ? null : i.note,
        onImportFile: k ? void 0 : d.importDocument,
        importing: d.importing,
        readOnly: !p.canWrite,
        onPrint: () => {
          d.printRecords(k ? ["cert"] : i.kinds, k ? t("hr.employeeKindCert") : i.title);
        }
      }), r.jsx(nt, {
        controller: d
      }), r.jsx(Ot, {
        controller: y
      })]
    }),
    xe = St(N);
  if (h) {
    const e = a => r.jsxs(c, {
        role: "button",
        tabIndex: 0,
        onClick: () => ue(a),
        sx: {
          p: 1.5,
          cursor: "pointer",
          userSelect: "none",
          "&:active": {
            bgcolor: "#f8f8f7"
          }
        },
        children: [r.jsxs(c, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: .75,
            flexWrap: "wrap"
          },
          children: [r.jsx(Q, {
            sx: {
              fontSize: 15,
              fontWeight: 600
            },
            children: a.employee.name
          }), r.jsx(Q, {
            sx: {
              fontSize: 14,
              color: _[500]
            },
            children: Fe(a)
          }), a.employee.status === "resigned" && r.jsx(Q, {
            sx: {
              fontSize: 14,
              color: _[400]
            },
            children: t("hr.employeeStatusResigned")
          })]
        }), !o && a.last_school ? r.jsx(Q, {
          sx: {
            fontSize: 14,
            color: "text.secondary",
            mt: .5
          },
          children: se(a.last_school)
        }) : null, o ? null : r.jsx(c, {
          sx: {
            mt: .5
          },
          children: r.jsx(Ee, {
            certs: a.certs,
            onOpen: () => pe(a)
          })
        }), r.jsxs(c, {
          sx: {
            display: "flex",
            gap: 1.25,
            fontSize: 14,
            color: "text.secondary",
            mt: .5,
            flexWrap: "wrap"
          },
          children: [o ? r.jsxs(c, {
            component: "span",
            sx: {
              whiteSpace: "nowrap"
            },
            children: [t("hr.recordCareerTotal", {
              total: oe(a.total_career_days)
            }), a.total_career_days > 0 ? `(${t("hr.employeeMonthsN", {
              count: be(a.total_career_days)
            })})` : "", " ·", " ", t("hr.recordSameIndustry", {
              days: oe(a.same_industry_days)
            })]
          }) : null, o && a.counts.reward > 0 ? r.jsx(c, {
            component: "span",
            sx: {
              whiteSpace: "nowrap"
            },
            children: ve(a)
          }) : null, !o && a.cert_expiry ? r.jsx(c, {
            component: "span",
            sx: {
              color: Le(a.cert_expiry.days_left),
              fontWeight: 600
            },
            children: t("hr.recordCertExpiry", {
              due: Ne(a.cert_expiry.days_left)
            })
          }) : null]
        })]
      }, a.employee.seq),
      u = [r.jsxs(c, {
        children: [r.jsx(ut, {
          open: l,
          value: L,
          onChange: $,
          placeholder: t("hr.recordSearchPlaceholder")
        }), r.jsxs(c, {
          sx: {
            p: 1.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1
          },
          children: [fe, Z]
        })]
      }, "head"), ...ee.map(e)];
    return xe && ee.length === 0 && u.push(r.jsx(Re, {
      filtering: he
    }, "empty")), xe || u.push(r.jsx(Ct, {}, "loading")), r.jsxs(r.Fragment, {
      children: [r.jsx(bt, {
        attachHead: !0,
        children: u
      }), ge]
    });
  }
  const le = e => e > 0 ? e : r.jsx(T, {}),
    Ve = new Map(ee.map((e, u) => [e.employee.seq, u + 1])),
    Be = [{
      id: "no",
      text: t("hr.employeeColNo"),
      width: 64,
      align: "center",
      render: e => r.jsx(c, {
        component: "span",
        sx: {
          fontSize: 14,
          color: _[500]
        },
        children: Ve.get(e.employee.seq)
      })
    }, {
      id: "name",
      sortable: !0,
      text: t("hr.name"),
      width: 140,
      render: e => r.jsxs(c, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: .75,
          minWidth: 0
        },
        children: [r.jsx(c, {
          component: "span",
          sx: {
            fontSize: 15,
            fontWeight: 500,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          },
          children: e.employee.name
        }), e.employee.status === "resigned" && r.jsx(c, {
          component: "span",
          sx: {
            fontSize: 14,
            color: _[400],
            flexShrink: 0
          },
          children: t("hr.employeeStatusResigned")
        })]
      })
    }, {
      id: "unit",
      sortable: !0,
      text: t("hr.attAdminUnit"),
      width: 120,
      align: "center",
      filterOptions: De,
      filterValues: V,
      onFilterChange: B,
      render: e => G.get(e.employee.unit_seq) || r.jsx(T, {})
    }, {
      id: "position",
      sortable: !0,
      text: t("hr.employeePosition"),
      width: 100,
      align: "center",
      render: e => e.employee.position || r.jsx(T, {})
    }, {
      id: "task",
      text: t("hr.employeeTask"),
      render: e => e.employee.task ? r.jsx(tt, {
        title: e.employee.task,
        disableInteractive: !0,
        children: r.jsx(c, {
          component: "span",
          sx: {
            display: "block",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          },
          children: e.employee.task
        })
      }) : r.jsx(T, {})
    }, {
      id: "last_school",
      sortable: !0,
      text: t("hr.recordLastSchool"),
      width: "13%",
      filterOptions: Ae,
      filterValues: q,
      onFilterChange: ce,
      render: e => e.last_school ? r.jsx(c, {
        component: "span",
        title: se(e.last_school),
        sx: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          fontSize: 14
        },
        children: se(e.last_school)
      }) : r.jsx(T, {})
    }, {
      id: "certs",
      text: t("hr.employeeKindCert"),
      render: e => r.jsx(Ee, {
        certs: e.certs,
        onOpen: () => pe(e)
      })
    }, {
      id: "cert_expiry",
      sortable: !0,
      text: t("hr.recordCertExpiryCol"),
      width: 112,
      align: "center",
      render: e => e.cert_expiry ? r.jsx(Ft, {
        date: e.cert_expiry.date,
        daysLeft: e.cert_expiry.days_left
      }) : r.jsx(T, {})
    }, {
      id: "career",
      sortable: !0,
      text: t("hr.employeeTotalCareer"),
      width: 200,
      align: "left",
      render: e => e.total_career_days > 0 ? r.jsxs(c, {
        component: "span",
        sx: {
          whiteSpace: "nowrap"
        },
        children: [oe(e.total_career_days), r.jsxs(c, {
          component: "span",
          sx: {
            color: _[500],
            ml: .5
          },
          children: ["(", t("hr.employeeMonthsN", {
            count: be(e.total_career_days)
          }), ")"]
        })]
      }) : r.jsx(T, {})
    }, {
      id: "same_career",
      sortable: !0,
      text: t("hr.recordSameIndustryCol"),
      width: 160,
      align: "left",
      render: e => e.same_industry_days > 0 ? r.jsx(c, {
        component: "span",
        sx: {
          whiteSpace: "nowrap"
        },
        children: oe(e.same_industry_days)
      }) : r.jsx(T, {})
    }, {
      id: "school_count",
      sortable: !0,
      text: t("hr.employeeKindSchool"),
      width: 72,
      align: "center",
      render: e => le(e.counts.school)
    }, {
      id: "career_count",
      sortable: !0,
      text: t("hr.recordKindCareer"),
      width: 72,
      align: "center",
      render: e => le(e.counts.career)
    }, {
      id: "cert_count",
      sortable: !0,
      text: t("hr.recordCertShort"),
      width: 72,
      align: "center",
      render: e => le(e.counts.cert)
    }, {
      id: "reward_count",
      sortable: !0,
      text: t("hr.recordKindReward"),
      width: 140,
      align: "center",
      render: e => e.counts.reward > 0 ? ve(e) : r.jsx(T, {})
    }],
    ye = {
      career: ["no", "name", "unit", "position", "task", "career", "same_career", "career_count", "reward_count"],
      qualification: ["no", "name", "unit", "position", "last_school", "certs", "cert_expiry", "school_count", "cert_count"]
    }[s].map(e => Be.find(u => u.id === e)).filter(e => !!e).map(e => !o && e.id === "last_school" ? {
      ...e,
      width: "22%"
    } : e),
    de = j && d.modals.records.isOpen,
    ze = de,
    _e = de ? E : 0,
    We = r.jsx(at, {
      onEscape: d.modals.records.close
    }),
    Ue = {
      left: Z,
      right: r.jsx(ct, {
        value: j ? "split" : "list",
        onChange: W
      }),
      filter: {
        stateId: o ? "career-filters" : "qualification-filters",
        showChips: !1,
        groups: [{
          filters: [{
            type: "custom",
            name: "career-filter-inputs",
            node: fe
          }]
        }]
      },
      showSearch: !0,
      searchValue: L,
      searchPlaceholder: t("hr.recordSearchPlaceholder"),
      onSearchChange: $,
      searchLoading: N,
      collapsible: !1,
      showCollapseButton: !1,
      showClearIcon: !1
    };
  return r.jsxs(r.Fragment, {
    children: [r.jsx(c, {
      sx: {
        position: "relative",
        height: "100%",
        minHeight: 0,
        display: "flex",
        flexDirection: "column"
      },
      children: r.jsx(rt, {
        flat: !h,
        storageKey: `${s}-split`,
        header: Ue,
        resizable: !0,
        rightPanel: We,
        rightConfig: {
          visible: de,
          ratio: .5,
          minWidth: 420
        },
        leftConfig: {
          minWidth: 360
        },
        tableProps: {
          ...x,
          scrollbars: jt,
          mobile: !0,
          variant: "notion",
          columns: ze ? it(ye, At[s], o ? "name" : "last_school") : ye,
          data: ee,
          totalCount: ee.length,
          ...Me,
          getRowId: e => String(e.employee.seq),
          rowHeight: Pt,
          onRowClick: ue,
          selectedRowId: _e ? String(_e) : null,
          selectedRowSx: dt,
          loading: N,
          emptyMessage: r.jsx(Re, {
            filtering: he
          })
        }
      })
    }), ge]
  });
}
export { Tr as default };