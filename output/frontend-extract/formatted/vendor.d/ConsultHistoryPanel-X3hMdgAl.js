import { r as T, j as t } from "./react-CjxcGQav.js";
import { e as pe, c8 as ge, ak as he, dv as xe, fA as _e, bO as y, bT as q, cL as be, bx as le, kM as Ce, bv as Q, lJ as ce, fC as J, fB as qe, cG as L, S as Se, T as je, fJ as ie, fK as me, m as ve, lK as de, aR as ye, he as Oe, H as Te, D as Fe, fL as Ve, lM as Ee, fN as ke, cI as Ne, B as _, ca as Z, cC as Ie, lN as Re, lO as Le, lP as U, aq as P, lQ as we, al as De, cn as Y, cO as Me, bQ as w, d8 as Ae, K as We, L as ae, s as re } from "../js.d/main-Cm9wS5wt.js";
import { o as Pe } from "./taskDetailHost-C45bt_tL.js";
import { c as O, g as fe } from "./customerMetaStore-Bj9KdRyn.js";
import { u as $e, P as Be } from "./PropertyContentEditor-DIsouMXi.js";
import { P as He } from "./propertySections-Bwsl7OH-.js";
import { A as Ue } from "./AltRouteOutlined-BY5W7vtA.js";
import { C as Ye } from "./CategoryOutlined-DcAqxAdD.js";
import { T as Ke } from "./Title-WCY0exuZ.js";
import { R as Ge } from "./RecordVoiceOverOutlined-C838alHh.js";
import { F as Qe } from "./ForwardOutlined-L-S9T4to.js";
import { d as Xe } from "./dealApi-CnzQt6qM.js";
import { D as ze } from "./deal-B3IQ_ej7.js";
import { I as te, b as Je } from "./PropertyFields-TuJTG5XK.js";
import { F as k } from "./FormValue-CAMilU-0.js";
import { g as K, h as D, i as ne } from "./types-B1OAKh4b.js";
function Ze(e) {
  const s = e ?? "";
  if (!s.trim() || s.trim().startsWith("<")) return s;
  const u = c => c.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return s.split(`
`).map(c => c.trim() ? `<p>${u(c)}</p>` : "<p></p>").join("");
}
function G(e) {
  const s = e ?? "";
  return s.trim().startsWith("<") ? s.replace(/<br\s*\/?>/gi, `
`).replace(/<\/(p|div|li|h[1-6]|blockquote)>/gi, `
`).replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, "&").replace(/\n{3,}/g, `

`).trim() : s;
}
function ue(e) {
  return G(e).trim() ? e : "";
}
const et = 30,
  tt = 300;
function nt() {
  const e = new Date(),
    s = u => String(u).padStart(2, "0");
  return `${e.getFullYear()}-${s(e.getMonth() + 1)}-${s(e.getDate())} ${s(e.getHours())}:${s(e.getMinutes())}`;
}
function $(e, s = 0) {
  return {
    channel: e?.channel ?? "call_in",
    category_seq: e?.category_seq || "",
    folder_seq: e?.folder_seq || s || "",
    consulted_at: e?.consulted_at || nt(),
    handler_account_seq: e?.handler_account_seq || fe().my_account_seq || "",
    title: e?.title ?? "",
    content: e?.content ?? "",
    request: e?.request ?? "",
    action: e?.action ?? "",
    follow_up: e?.follow_up ?? "",
    follow_up_date: e?.follow_up_date ?? "",
    status: e?.status ?? "done",
    deal_seq: e?.deal_seq || ""
  };
}
function ee(e) {
  return {
    channel: e.channel,
    category_seq: Number(e.category_seq) || 0,
    folder_seq: Number(e.folder_seq) || 0,
    consulted_at: String(e.consulted_at ?? ""),
    handler_account_seq: Number(e.handler_account_seq) || 0,
    title: String(e.title ?? "").trim(),
    content: String(e.content ?? ""),
    request: String(e.request ?? ""),
    action: String(e.action ?? ""),
    follow_up: String(e.follow_up ?? ""),
    follow_up_date: String(e.follow_up_date ?? ""),
    status: e.status === "open" ? "open" : "done",
    deal_seq: Number(e.deal_seq) || 0
  };
}
function It(e = {}) {
  const s = T.useRef(e);
  s.current = e;
  const u = T.useRef(null),
    c = {
      form: pe({
        modalId: `${e.idPrefix ?? ""}consult-form`
      })
    },
    r = ge({
      stateId: `${e.idPrefix ?? ""}consult-form-ui`,
      initialValues: {
        target: null,
        customerSeq: 0,
        customerName: "",
        pickingCustomer: !1,
        customerOptions: [],
        customerSearching: !1,
        callRef: null
      }
    }),
    l = () => {
      const o = r.getValue("callRef");
      return {
        ...(o?.callLogSeq ? {
          call_log_seq: o.callLogSeq
        } : {}),
        ...(o?.callSequence ? {
          call_sequence: o.callSequence
        } : {})
      };
    },
    g = o => !r.getValue("target") && !(Number(r.getValue("customerSeq")) > 0) ? (y(q("customer.selectCustomer")), !1) : !String(o.content ?? "").trim() && !String(o.title ?? "").trim() ? (y(q("customer.enterConsultContent")), !1) : /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}/.test(String(o.consulted_at ?? "")) ? !0 : (y(q("customer.enterConsultedAt")), !1),
    n = he({
      formId: `${e.idPrefix ?? ""}consult-form`,
      initialValues: $(null),
      onValidate: o => g(o),
      onSubmit: async o => {
        const i = r.getValue("target"),
          d = ee(o);
        try {
          return i ? await O.updateConsult(i.seq, d) : await O.createConsult({
            ...d,
            customer_seq: Number(r.getValue("customerSeq")) || 0,
            ...l()
          }), c.form.close(), le({
            message: q("customer.saved"),
            delay: 500
          }), s.current.onChanged?.(), !0;
        } catch (h) {
          return y(h instanceof Error ? h.message : q("customer.saveConsultFailed")), !1;
        }
      }
    }),
    a = (o, i, d) => {
      n.setFormValues({
        ...$(null, s.current.defaultFolderSeq?.() ?? 0),
        ...i
      }), r.setValues({
        target: null,
        customerSeq: o.seq,
        customerName: o.name,
        pickingCustomer: !1,
        callRef: d ?? null
      }), c.form.open();
    },
    x = T.useRef(0),
    f = T.useRef(null),
    F = async o => {
      const i = ++x.current;
      r.setValue("customerSearching", !0);
      try {
        const d = await O.list({
          search: o,
          limit: et
        });
        if (i !== x.current) return;
        const h = d.items.map(p => ({
            value: p.seq,
            label: p.phone ? `${p.name} · ${p.phone}` : p.name,
            name: p.name
          })),
          b = Number(r.getValue("customerSeq")) || 0,
          j = (r.getValue("customerOptions") ?? []).find(p => p.value === b);
        j && !h.some(p => p.value === b) && h.unshift(j), r.setValue("customerOptions", h);
      } catch {} finally {
        i === x.current && r.setValue("customerSearching", !1);
      }
    },
    N = o => {
      f.current !== null && clearTimeout(f.current), f.current = setTimeout(() => {
        f.current = null, F(o.trim());
      }, tt);
    },
    I = o => {
      const i = (r.getValue("customerOptions") ?? []).find(d => d.value === o);
      r.setValues({
        customerSeq: i ? o : 0,
        customerName: i?.name ?? ""
      });
    },
    B = (o, i) => {
      n.setFormValues({
        ...$(null, s.current.defaultFolderSeq?.() ?? 0),
        ...i
      }), r.setValues({
        target: null,
        customerSeq: 0,
        customerName: "",
        pickingCustomer: !0,
        customerOptions: [],
        callRef: o ?? null
      }), c.form.open(), F("");
    },
    M = o => {
      u.current = $(o), n.setFormValues(u.current), r.setValues({
        target: o,
        customerSeq: o.customer_seq,
        customerName: o.customer_name,
        pickingCustomer: !1
      }), c.form.open();
    },
    H = async () => {
      const o = r.getValue("target");
      if (o) try {
        await O.removeConsult(o.seq), c.form.close(), le({
          message: q("customer.deleted"),
          delay: 500
        }), s.current.onChanged?.();
      } catch (i) {
        y(i instanceof Error ? i.message : q("customer.deleteConsultFailed"));
      }
    },
    X = async () => {
      let o = r.getValue("target");
      if (!o) {
        if (!g(n.getFormValues())) return;
        try {
          const C = await O.createConsult({
            ...ee(n.getFormValues()),
            customer_seq: Number(r.getValue("customerSeq")) || 0,
            ...l()
          });
          o = await O.consultDetail(C), r.setValues({
            target: o,
            pickingCustomer: !1
          }), s.current.onChanged?.();
        } catch (C) {
          y(C instanceof Error ? C.message : q("customer.saveConsultFailed"));
          return;
        }
      }
      const i = o.seq,
        d = n.getFormValues(),
        h = String(r.getValue("customerName") ?? "").trim(),
        b = C => String(C ?? "").trim(),
        j = C => b(C).split(`
`).find(R => R.trim())?.trim() ?? "",
        p = b(d.content),
        S = j(d.follow_up) || b(d.title) || j(G(p)) || "상담 후속 업무",
        v = C => C.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"),
        m = (C, R) => {
          const oe = b(R);
          return oe ? `<p><strong>${C}</strong><br>${v(oe).replace(/\n/g, "<br>")}</p>` : "";
        },
        E = [m("고객", h), m("상담 일시", d.consulted_at), G(p).trim() ? p.startsWith("<") ? `<p><strong>상담 내용</strong></p>${p}` : m("상담 내용", p) : "", m("고객 요청", d.request), m("조치한 것", d.action), m("후속 조치", [b(d.follow_up), b(d.follow_up_date) ? `예정일 ${b(d.follow_up_date)}` : ""].filter(Boolean).join(`
`))].join(""),
        W = Number(d.handler_account_seq) || 0,
        se = fe().members.find(C => C.account_seq === W)?.name ?? "";
      Ce({
        title: h ? `[${h}] ${S}` : S,
        content: E,
        consultSeq: i,
        ...(W && se ? {
          manager: {
            name: se,
            accountSeq: W
          }
        } : {}),
        onCreated: C => {
          C && O.updateConsult(i, {
            task_seq: C
          }).then(() => {
            const R = r.getValue("target");
            R?.seq === i && r.setValue("target", {
              ...R,
              task_seq: C
            }), s.current.onChanged?.();
          }).catch(() => y(q("customer.taskLinkedConsultFailed")));
        }
      });
    },
    z = () => {
      const o = r.getValue("target");
      o && o.task_seq > 0 && Pe(o.task_seq);
    },
    V = async o => {
      try {
        M(await O.consultDetail(o));
      } catch (i) {
        y(i instanceof Error ? i.message : q("customer.loadConsultFailed"));
      }
    },
    A = async (o, i) => {
      const d = r.getValue("target");
      if (!d) return n.setFormValues(o), !0;
      const h = n.getFormValues(),
        b = {
          ...h,
          ...o
        };
      if (("content" in o || "title" in o) && !String(b.content ?? "").trim() && !String(b.title ?? "").trim()) return y(q("customer.enterConsultContent")), !1;
      n.setFormValues(o);
      const j = ee(b),
        p = Object.fromEntries(i.map(S => [S, j[S]]));
      try {
        return await O.updateConsult(d.seq, p), r.setValue("target", {
          ...d,
          ...p
        }), u.current && (u.current = {
          ...u.current,
          ...o
        }), s.current.onChanged?.(), !0;
      } catch (S) {
        return n.setFormValues(Object.fromEntries(Object.keys(o).map(v => [v, h[v]]))), y(S instanceof Error ? S.message : q("customer.saveConsultFailed")), !1;
      }
    };
  return xe(["consult"], o => {
    const i = r.getValue("target");
    if (!i || !c.form.isOpen) return;
    const d = _e(o, "consult", i.seq);
    if (!(!d && !o.resync)) {
      if (d?.action === "delete") {
        c.form.close(), y(q("customer.consultDeletedByOther"));
        return;
      }
      O.consultDetail(i.seq).then(h => {
        if (r.getValue("target")?.seq !== h.seq || !c.form.isOpen) return;
        const j = $(h),
          p = n.getFormValues(),
          {
            patch: S,
            baseline: v
          } = be(p, u.current ?? p, j);
        u.current = v, Object.keys(S).length > 0 && n.setFormValues(S), r.setValues({
          target: h,
          customerSeq: h.customer_seq,
          customerName: h.customer_name
        });
      }).catch(() => {});
    }
  }, {
    enabled: c.form.isOpen
  }), {
    form: n,
    modals: c,
    ui: r,
    openCreate: a,
    openCreateBlank: B,
    openEdit: M,
    remove: H,
    searchCustomers: N,
    pickCustomer: I,
    toTask: X,
    openTask: z,
    openBySeq: V,
    saveField: A
  };
}
function st(e) {
  const s = /^(\S+)\s+(\d{1,2}):(\d{1,2})$/.exec(e.trim());
  if (!s) return "";
  const u = ie(s[1]);
  if (!me(u)) return "";
  const c = Number(s[2]),
    r = Number(s[3]);
  return c > 23 || r > 59 ? "" : `${u} ${String(c).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}
function ot(e) {
  return (e && !D.includes(e) ? [...D, e] : D).map(u => ({
    value: u,
    label: u === "call_out" ? q("customer.channelCallOut") : q(ne[u])
  }));
}
function lt({
  controller: e,
  meta: s
}) {
  const u = Q(),
    {
      form: c,
      saveField: r
    } = e,
    l = n => String(n ?? ""),
    g = ce("consult").folders;
  return t.jsxs(t.Fragment, {
    children: [t.jsx(J, {
      icon: t.jsx(qe, {}),
      label: u("customer.consultedAt"),
      children: t.jsx(k, {
        form: c,
        name: "consulted_at",
        children: n => t.jsx(te, {
          value: l(n),
          placeholder: "YYYY-MM-DD HH:mm",
          onCommit: a => {
            const x = st(a);
            return x ? r({
              consulted_at: x
            }, ["consulted_at"]) : !1;
          }
        })
      })
    }), t.jsx(k, {
      form: c,
      name: "channel",
      children: n => t.jsx(L, {
        icon: t.jsx(Ue, {}),
        label: u("customer.consultChannel"),
        value: l(n),
        options: ot(l(n)),
        onChange: a => {
          r({
            channel: a
          }, ["channel"]);
        }
      })
    }), t.jsx(k, {
      form: c,
      name: "category_seq",
      children: n => t.jsx(L, {
        icon: t.jsx(Ye, {}),
        label: u("customer.consultCategory"),
        value: Number(n) || "",
        options: s.consult_categories.map(a => ({
          value: a.seq,
          label: a.name
        })),
        emptyLabel: u("customer.notAssigned"),
        onChange: a => {
          r({
            category_seq: a === "" ? "" : Number(a)
          }, ["category_seq"]);
        }
      })
    }), t.jsx(k, {
      form: c,
      name: "handler_account_seq",
      children: n => t.jsx(L, {
        icon: t.jsx(Se, {}),
        label: u("customer.consultStaff"),
        value: Number(n) || "",
        options: s.members.map(a => ({
          value: a.account_seq,
          label: a.name
        })),
        onChange: a => {
          r({
            handler_account_seq: a === "" ? "" : Number(a)
          }, ["handler_account_seq"]);
        }
      })
    }), t.jsx(k, {
      form: c,
      name: "status",
      children: n => t.jsx(L, {
        icon: t.jsx(je, {}),
        label: u("customer.consultStatus"),
        value: l(n),
        options: Object.keys(K).map(a => ({
          value: a,
          label: u(K[a])
        })),
        onChange: a => {
          r({
            status: a
          }, ["status"]);
        }
      })
    }), t.jsx(J, {
      icon: t.jsx(ve, {}),
      label: u("customer.followUpDate"),
      children: t.jsx(k, {
        form: c,
        name: "follow_up_date",
        children: n => t.jsx(Je, {
          value: l(n),
          placeholder: "YYYY-MM-DD",
          onCommit: a => {
            const x = ie(a);
            return x === "" || me(x) ? r({
              follow_up_date: x
            }, ["follow_up_date"]) : !1;
          }
        })
      })
    }), g.length > 0 ? t.jsx(k, {
      form: c,
      name: "folder_seq",
      children: n => t.jsx(L, {
        icon: t.jsx(ye, {}),
        label: u("customer.folder"),
        value: Number(n) || "",
        options: de(g).map(a => ({
          value: Number(a.value),
          label: String(a.label)
        })),
        emptyLabel: u("customer.noFolder"),
        onChange: a => {
          r({
            folder_seq: a === "" ? "" : Number(a)
          }, ["folder_seq"]);
        }
      })
    }) : null, t.jsx(J, {
      icon: t.jsx(Ke, {}),
      label: u("customer.title"),
      wide: !0,
      children: t.jsx(k, {
        form: c,
        name: "title",
        children: n => t.jsx(te, {
          value: l(n),
          maxLength: 200,
          onCommit: a => r({
            title: a
          }, ["title"])
        })
      })
    }), t.jsx(it, {
      controller: e
    })]
  });
}
function at({
  controller: e,
  name: s
}) {
  const {
      form: u,
      saveField: c
    } = e,
    r = String(u.useFormValue(s) ?? "");
  return t.jsx(te, {
    value: r,
    multiline: !0,
    bordered: !0,
    maxLength: 5e3,
    onCommit: l => c({
      [s]: l
    }, [s])
  });
}
const rt = [{
    name: "request",
    titleKey: "customer.customerRequest",
    icon: t.jsx(Ge, {})
  }, {
    name: "action",
    titleKey: "customer.actionTaken",
    icon: t.jsx(Oe, {})
  }, {
    name: "follow_up",
    titleKey: "customer.followUp",
    icon: t.jsx(Qe, {})
  }],
  ut = 100;
function ct(e) {
  return [ze[e.stage], e.deal_no, e.title].filter(Boolean).join(" · ");
}
function it({
  controller: e
}) {
  const s = Q(),
    {
      form: u,
      ui: c,
      saveField: r
    } = e,
    l = Number(c.useValue("customerSeq")) || 0,
    g = Number(u.useFormValue("deal_seq")) || 0,
    [n, a] = T.useState([]);
  if (T.useEffect(() => {
    if (!l) {
      a([]);
      return;
    }
    let f = !0;
    return Xe.list({
      customerSeq: l,
      party: "customer",
      limit: ut
    }).then(F => f && a(F.items)).catch(() => f && a([])), () => {
      f = !1;
    };
  }, [l]), !l) return null;
  const x = n.map(f => ({
    value: f.seq,
    label: ct(f)
  }));
  return g && !x.some(f => f.value === g) && x.unshift({
    value: g,
    label: s("customer.dealNumber", {
      seq: g
    })
  }), t.jsx(L, {
    icon: t.jsx(Te, {}),
    label: s("customer.quoteContract"),
    value: g || "",
    options: x,
    emptyLabel: s("customer.notLinked"),
    onChange: f => {
      r({
        deal_seq: f === "" ? "" : Number(f)
      }, ["deal_seq"]);
    }
  });
}
const mt = {
    "& .MuiInputLabel-root, & .MuiOutlinedInput-notchedOutline legend, & .MuiOutlinedInput-notchedOutline legend > span": {
      transition: "none !important"
    }
  },
  dt = 600;
function ft() {
  const [e, s] = T.useState(!1),
    u = T.useRef(0);
  return T.useEffect(() => () => window.clearTimeout(u.current), []), {
    run: T.useCallback(r => {
      s(!0), window.clearTimeout(u.current), window.requestAnimationFrame(() => {
        r(), u.current = window.setTimeout(() => s(!1), dt);
      });
    }, []),
    sx: e ? mt : void 0
  };
}
function pt(e) {
  return (e && !D.includes(e) ? [...D, e] : D).map(u => ({
    value: u,
    label: u === "call_out" ? q("customer.channelCallOut") : q(ne[u])
  }));
}
const gt = e => Object.keys(K).map(s => ({
  value: s,
  label: e(K[s])
}));
function Rt({
  controller: e,
  meta: s,
  rows: u,
  presentation: c = "drawer",
  wide: r
}) {
  const l = Q(),
    g = Fe(),
    n = Ve("customer").canWrite,
    {
      form: a,
      modals: x
    } = e,
    f = e.ui.useValue("target"),
    F = ft(),
    N = f && u ? u.findIndex(m => m.seq === f.seq) : -1,
    I = u && N >= 0 ? {
      hasPrev: N > 0,
      hasNext: N < u.length - 1,
      prev: () => F.run(() => e.openEdit(u[N - 1])),
      next: () => F.run(() => e.openEdit(u[N + 1]))
    } : null,
    B = String(e.ui.useValue("customerName") ?? ""),
    M = Number(e.ui.useValue("customerSeq")) || 0,
    H = !!e.ui.useValue("pickingCustomer"),
    X = e.ui.useValue("customerOptions") ?? [],
    z = !!e.ui.useValue("customerSearching"),
    V = a.isSubmitting,
    A = !g,
    o = A && !!f,
    i = s.consult_categories.map(m => ({
      value: m.seq,
      label: m.name
    })),
    d = s.members.map(m => ({
      value: m.account_seq,
      label: m.name
    })),
    h = ce("consult").folders,
    b = Ze(String(a.useFormValue("content") ?? "")),
    j = $e(),
    p = t.jsx(Ee, {
      syncKey: f?.seq ?? "new",
      value: b,
      onChange: m => a.setFormValue("content", ue(m))
    }),
    S = t.jsx(ke, {
      label: l("customer.customerPickerLabel"),
      options: X,
      value: M || null,
      onChange: m => e.pickCustomer(Number(m) || 0),
      disableFilter: !0,
      onInputChange: (m, E, W) => {
        W === "input" && (!E.trim() && M && e.pickCustomer(0), e.searchCustomers(E));
      },
      disablePortal: !1,
      loading: z,
      noOptionsText: l("customer.noCustomerFound"),
      fullWidth: !0
    }),
    v = (m, E) => t.jsxs(_, {
      sx: {
        display: "flex",
        gap: Z,
        flexDirection: g ? "column" : "row"
      },
      children: [t.jsx(_, {
        sx: {
          flex: 1,
          minWidth: 0
        },
        children: m
      }), t.jsx(_, {
        sx: {
          flex: 1,
          minWidth: 0
        },
        children: E
      })]
    });
  return t.jsx(Ne, {
    readOnly: !n,
    open: x.form.isOpen,
    onClose: x.form.close,
    title: B ? l("customer.consultRecordOf", {
      name: B
    }) : l("customer.consultRecord"),
    maxWidth: "md",
    backdropClick: !g && c === "drawer",
    scrollPastLastSection: !1,
    fullScreen: g,
    mobilePresentation: g ? "slide" : "dialog",
    sideDrawer: !g && c === "drawer",
    splitDock: !g && c === "dock",
    sx: {
      DialogContent: {
        ...F.sx,
        ...(A ? He : {})
      }
    },
    titleIcons: {
      print: {
        visible: !1
      },
      share: {
        visible: !1
      },
      delete: {
        visible: !!f && n,
        confirmConfig: {
          title: l("customer.deleteConsult"),
          message: l("customer.deleteConsultMessage"),
          confirmText: l("customer.delete"),
          cancelText: l("customer.cancel")
        }
      }
    },
    onDelete: e.remove,
    tabs: {
      visible: !1
    },
    actions: {
      showCancelButton: !o,
      left: f && f.task_seq > 0 ? t.jsx(w, {
        variant: "outlined",
        onClick: e.openTask,
        disabled: V,
        children: l("customer.openLinkedTask")
      }) : n ? t.jsx(w, {
        variant: "outlined",
        onClick: () => {
          e.toTask();
        },
        disabled: V,
        children: l("customer.createAsTask")
      }) : void 0,
      right: t.jsxs(t.Fragment, {
        children: [I ? t.jsxs(t.Fragment, {
          children: [t.jsx(w, {
            variant: "outlined",
            onClick: I.prev,
            disabled: V || !I.hasPrev,
            children: l("customer.previous")
          }), t.jsx(w, {
            variant: "outlined",
            onClick: I.next,
            disabled: V || !I.hasNext,
            children: l("customer.next")
          })]
        }) : null, o || !n ? null : t.jsx(w, {
          variant: "contained",
          onClick: () => {
            a.submit();
          },
          disabled: V,
          children: l(V ? "customer.saving" : "customer.save")
        })]
      })
    },
    sections: A ? [{
      id: "consult-properties",
      showTitle: !1,
      children: t.jsxs(_, {
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: Z
        },
        children: [H ? S : null, t.jsx(Ie, {
          sx: n ? void 0 : {
            pointerEvents: "none"
          },
          children: t.jsx(lt, {
            controller: e,
            meta: s
          })
        })]
      })
    }, {
      id: "consult-content",
      title: l("customer.consultContent"),
      endIcon: f && n ? j.doneButton : void 0,
      children: f ? t.jsx(Be, {
        syncKey: f.seq,
        value: b,
        editing: j.editing,
        onEditingChange: n ? j.setEditing : () => {},
        onSave: m => e.saveField({
          content: ue(m)
        }, ["content"])
      }) : p
    }, ...rt.map(m => ({
      id: `consult-${m.name}`,
      title: l(m.titleKey),
      children: t.jsx(_, {
        sx: n ? void 0 : {
          pointerEvents: "none"
        },
        children: t.jsx(at, {
          controller: e,
          name: m.name
        })
      })
    }))] : [{
      id: "consult-main",
      showTitle: !1,
      children: t.jsx(_, {
        sx: Re,
        children: t.jsxs(_, {
          sx: {
            ...Le,
            alignItems: "start"
          },
          children: [H ? t.jsx(_, {
            sx: U,
            children: S
          }) : null, v(t.jsx(we, {
            form: a,
            name: "consulted_at",
            label: l("customer.consultedAt"),
            format: "YYYY-MM-DD HH:mm",
            fullWidth: !0
          }), t.jsx(P, {
            form: a,
            name: "channel",
            label: l("customer.consultChannel"),
            options: pt(a.useFormValue("channel")),
            showEmptyOption: !1,
            fullWidth: !0
          })), v(t.jsx(P, {
            form: a,
            name: "category_seq",
            label: l("customer.consultCategory"),
            options: i,
            emptyLabel: i.length === 0 ? l("customer.notAssignedSetInSettings") : l("customer.notAssigned"),
            fullWidth: !0
          }), t.jsx(P, {
            form: a,
            name: "handler_account_seq",
            label: l("customer.consultStaff"),
            options: d,
            showEmptyOption: !1,
            fullWidth: !0
          })), h.length > 0 ? t.jsx(P, {
            form: a,
            name: "folder_seq",
            label: l("customer.folder"),
            options: de(h),
            emptyLabel: l("customer.noFolder"),
            fullWidth: !0
          }) : null, t.jsx(_, {
            sx: h.length > 0 ? {} : U,
            children: t.jsx(De, {
              form: a,
              name: "title",
              label: l("customer.title"),
              fullWidth: !0,
              slotProps: {
                htmlInput: {
                  maxLength: 200
                }
              }
            })
          }), t.jsx(_, {
            sx: U,
            children: p
          }), r && !g ? t.jsx(_, {
            sx: {
              ...U,
              display: "flex",
              gap: Z
            },
            children: [["request", l("customer.customerRequest")], ["action", l("customer.actionTaken")], ["follow_up", l("customer.followUp")]].map(([m, E]) => t.jsx(_, {
              sx: {
                flex: 1,
                minWidth: 0
              },
              children: t.jsx(Y, {
                form: a,
                name: m,
                label: E,
                fullWidth: !0,
                minRows: 2
              })
            }, m))
          }) : t.jsxs(t.Fragment, {
            children: [v(t.jsx(Y, {
              form: a,
              name: "request",
              label: l("customer.customerRequest"),
              fullWidth: !0,
              minRows: 2
            }), t.jsx(Y, {
              form: a,
              name: "action",
              label: l("customer.actionTaken"),
              fullWidth: !0,
              minRows: 2
            })), t.jsx(Y, {
              form: a,
              name: "follow_up",
              label: l("customer.followUp"),
              fullWidth: !0,
              minRows: 2
            })]
          }), v(t.jsx(Me, {
            form: a,
            name: "follow_up_date",
            label: l("customer.followUpDate"),
            fullWidth: !0
          }), t.jsx(P, {
            form: a,
            name: "status",
            label: l("customer.consultStatus"),
            options: gt(l),
            showEmptyOption: !1,
            fullWidth: !0
          }))]
        })
      })
    }]
  });
}
function ht(e) {
  return e.title || G(e.content).split(`
`).find(s => s.trim())?.trim() || q("customer.noContent");
}
function Lt({
  consults: e,
  loading: s,
  categories: u,
  onCreate: c,
  onOpen: r
}) {
  const l = Q(),
    g = new Map(u.map(n => [n.seq, n.name]));
  return t.jsxs(_, {
    sx: {
      display: "flex",
      flexDirection: "column",
      gap: 1.5
    },
    children: [e.length === 0 && c ? t.jsx(_, {
      children: t.jsx(w, {
        variant: "outlined",
        startIcon: t.jsx(Ae, {}),
        onClick: c,
        children: l("customer.recordConsult")
      })
    }) : null, s && e.length === 0 ? t.jsx(_, {
      sx: {
        display: "flex",
        justifyContent: "center",
        py: 3
      },
      children: t.jsx(We, {
        size: 28
      })
    }) : null, !s && e.length === 0 ? t.jsx(ae, {
      sx: {
        py: 2,
        color: re[500],
        fontSize: "0.875rem"
      },
      children: l("customer.noConsultHistory")
    }) : null, e.length > 0 ? t.jsx(_, {
      component: "ul",
      sx: {
        listStyle: "none",
        m: 0,
        p: 0,
        border: 1,
        borderColor: "divider",
        borderRadius: 1.5
      },
      children: e.map((n, a) => t.jsxs(_, {
        component: "li",
        role: "button",
        tabIndex: 0,
        onClick: () => r(n),
        onKeyDown: x => {
          (x.key === "Enter" || x.key === " ") && (x.preventDefault(), r(n));
        },
        sx: {
          px: 2,
          py: 1.5,
          cursor: "pointer",
          borderTop: a === 0 ? 0 : 1,
          borderColor: "divider",
          display: "flex",
          flexDirection: "column",
          gap: .5,
          "&:hover": {
            bgcolor: re[50]
          }
        },
        children: [t.jsxs(_, {
          sx: {
            display: "flex",
            flexWrap: "wrap",
            columnGap: 1.25,
            fontSize: "0.875rem",
            color: "text.secondary"
          },
          children: [t.jsx("span", {
            children: n.consulted_at
          }), t.jsx("span", {
            children: l(ne[n.channel])
          }), g.get(n.category_seq) ? t.jsx("span", {
            children: g.get(n.category_seq)
          }) : null, n.handler_name ? t.jsx("span", {
            children: n.handler_name
          }) : null, n.status === "open" ? t.jsx(_, {
            component: "span",
            sx: {
              color: "warning.dark",
              fontWeight: 600
            },
            children: l("customer.consultStatusOpen")
          }) : null]
        }), t.jsx(ae, {
          sx: {
            fontSize: "0.9375rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          },
          children: ht(n)
        })]
      }, n.seq))
    }) : null]
  });
}
export { Rt as C, ft as a, Lt as b, ht as c, It as u };