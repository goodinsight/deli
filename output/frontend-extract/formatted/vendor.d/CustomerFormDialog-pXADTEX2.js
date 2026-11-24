import { r as O, j as e } from "./react-CjxcGQav.js";
import { e as Me, c8 as Ae, ak as ze, dv as Ue, fA as Ne, bO as v, bT as b, cL as Ge, dE as $e, z as we, bx as N, kM as Ke, dC as Ve, cK as He, bv as M, B as d, s as R, L as V, bI as Le, bQ as B, d8 as De, K as w, aO as Xe, M as Ye, w as Qe, aw as Je, cP as Ze, d3 as et, D as Ee, lN as Fe, ca as Re, lR as tt, al as pe, cY as Te, cT as st, db as nt, aq as $, an as fe, cO as ee, lS as rt, cm as he, cn as ot, ce as be, cf as ye, fL as _e, cz as at, lJ as it, lO as lt, ao as ct, cS as ut, lK as dt, lP as mt, lM as pt, cC as ft, cI as xt } from "../js.d/main-Cm9wS5wt.js";
import { a as gt, b as ht } from "./ConsultHistoryPanel-X3hMdgAl.js";
import { g as xe, c as S, r as je, u as bt } from "./customerMetaStore-Bj9KdRyn.js";
import { d as yt } from "./dealApi-CnzQt6qM.js";
import { j as Z, k as _t, l as Ce, m as qe, a as jt, C as Ct, c as le } from "./types-B1OAKh4b.js";
import { o as qt } from "./taskDetailHost-C45bt_tL.js";
import { b as St } from "./bookingApi-DC6gLfSO.js";
import { P as kt, S as ce } from "./SectionCreateButton-DLuyExHb.js";
import { S as vt } from "./StopCircleOutlined-vWHA8Xrv.js";
import { M as It } from "./MeetingRecordingPlayer-vear-u6W.js";
import { D as Vt, f as Lt } from "./deal-B3IQ_ej7.js";
import { u as Dt } from "./useFileViewer-B-2ewnr3.js";
import { C as Et, c as ue } from "./DealFormDialog-Dw6MXJZk.js";
import { u as Ft, P as Rt } from "./PropertyContentEditor-DIsouMXi.js";
import { P as Tt } from "./propertySections-Bwsl7OH-.js";
import { j as Wt } from "./types-CVXtrYKe.js";
const We = "__manage__",
  Ot = 2,
  Q = 100;
let Se = 0;
function Pt() {
  return Se += 1, `p${Date.now().toString(36)}${Se}`;
}
function Oe(t) {
  return t.field_type === "bool" ? !1 : t.field_type === "multiselect" ? [] : "";
}
function G(t, a) {
  const p = {};
  for (const i of xe().fields) {
    const o = t?.extra?.[i.field_key];
    p[i.field_key] = o ?? Oe(i);
  }
  const n = [...a, ...Array(Math.max(0, Ot - a.length)).fill("")],
    f = n.map(() => Pt());
  return {
    name: t?.name ?? "",
    category_seq: t?.category_seq || "",
    folder_seq: t?.folder_seq || "",
    manager_account_seq: t?.manager_account_seq || "",
    email: t?.email ?? "",
    address: t?.address ?? "",
    address_detail: t?.address_detail ?? "",
    birth_date: t?.birth_date ?? "",
    memo: t?.memo ?? "",
    marketing_agree: t?.marketing_agree ?? !1,
    phoneIds: f,
    phones: Object.fromEntries(f.map((i, o) => [i, n[o]])),
    extra: p
  };
}
function ke(t) {
  const a = {};
  for (const p of xe().fields) {
    const n = t.extra?.[p.field_key];
    a[p.field_key] = n ?? Oe(p);
  }
  return {
    name: String(t.name ?? "").trim(),
    category_seq: Number(t.category_seq) || 0,
    folder_seq: Number(t.folder_seq) || 0,
    manager_account_seq: Number(t.manager_account_seq) || 0,
    email: String(t.email ?? "").trim(),
    address: String(t.address ?? ""),
    address_detail: String(t.address_detail ?? ""),
    birth_date: String(t.birth_date ?? ""),
    memo: String(t.memo ?? ""),
    marketing_agree: t.marketing_agree === !0,
    extra: a,
    phones: (t.phoneIds ?? []).map(p => String(t.phones?.[p] ?? "").trim()).filter(Boolean).map(p => ({
      phone: p
    }))
  };
}
function ps(t = {}) {
  const a = O.useRef(t);
  a.current = t;
  const p = O.useRef(""),
    n = O.useRef(0),
    f = O.useRef(null),
    i = O.useRef(null),
    o = {
      form: Me({
        modalId: `${t.idPrefix ?? ""}customer-form`
      })
    },
    s = Ae({
      stateId: `${t.idPrefix ?? ""}customer-form-ui`,
      initialValues: {
        target: null,
        consults: [],
        consultsLoading: !1,
        calls: [],
        deals: [],
        dealsLoading: !1,
        tasks: [],
        tasksLoading: !1,
        bookings: [],
        bookingsLoading: !1,
        documents: [],
        documentsLoading: !1,
        documentUploading: !1,
        registerReading: !1
      }
    }),
    g = ze({
      formId: `${t.idPrefix ?? ""}customer-form`,
      initialValues: G(null, []),
      onValidate: r => {
        if (!String(r.name ?? "").trim()) return v(b("customer.enterCustomerName")), !1;
        for (const l of xe().fields) {
          if (!l.required || l.field_type === "bool") continue;
          const u = r.extra?.[l.field_key];
          if (u == null || u === "" || Array.isArray(u) && u.length === 0) return v(b("customer.enterFieldValue", {
            label: l.label
          })), !1;
        }
        return !0;
      },
      onSubmit: async r => {
        const l = s.getValue("target"),
          u = ke(r);
        try {
          if (l) await S.update(l.seq, u);else {
            const j = await S.create(u),
              x = f.current;
            f.current = null, x && j && (await S.uploadDocument(j, x.file, x.kind).catch(() => v(b("customer.registerUploadAfterCreateFailed"))));
          }
          return o.form.close(), N({
            message: b("customer.saved"),
            delay: 500
          }), a.current.onChanged?.(), !0;
        } catch (j) {
          return v(j instanceof Error ? j.message : b("customer.saveCustomerFailed")), !1;
        }
      }
    }),
    h = async () => {
      const r = s.getValue("target");
      if (!r) return;
      const l = n.current;
      s.setValue("consultsLoading", !0);
      try {
        const u = await S.listConsults({
          customerSeq: r.seq,
          limit: Q
        });
        l === n.current && s.setValue("consults", u.items);
      } catch (u) {
        if (l !== n.current) return;
        s.setValue("consults", []), v(u instanceof Error ? u.message : b("customer.loadConsultHistoryFailed"));
      } finally {
        l === n.current && s.setValue("consultsLoading", !1);
      }
    },
    C = async () => {
      const r = s.getValue("target");
      if (!r) return;
      const l = n.current;
      s.setValue("tasksLoading", !0);
      try {
        const u = await S.tasks(r.seq);
        l === n.current && s.setValue("tasks", u);
      } catch {
        l === n.current && s.setValue("tasks", []);
      } finally {
        l === n.current && s.setValue("tasksLoading", !1);
      }
    },
    _ = async () => {
      const r = s.getValue("target");
      if (!r || !Ve(He(), "booking")) return;
      const l = n.current;
      s.setValue("bookingsLoading", !0);
      try {
        const u = await St.list({
          customerSeq: r.seq,
          desc: !0,
          limit: Q
        });
        l === n.current && s.setValue("bookings", u.items);
      } catch {
        l === n.current && s.setValue("bookings", []);
      } finally {
        l === n.current && s.setValue("bookingsLoading", !1);
      }
    },
    A = () => {
      const r = s.getValue("target");
      r && Ke({
        customer: {
          seq: r.seq,
          name: r.name
        },
        onCreated: () => {
          C();
        }
      });
    },
    c = async () => {
      const r = s.getValue("target");
      if (!r) return;
      const l = n.current;
      s.setValue("dealsLoading", !0);
      try {
        const u = await yt.list({
          customerSeq: r.seq,
          limit: Q
        });
        l === n.current && s.setValue("deals", u.items);
      } catch (u) {
        if (l !== n.current) return;
        s.setValue("deals", []), v(u instanceof Error ? u.message : b("customer.loadDealsFailed"));
      } finally {
        l === n.current && s.setValue("dealsLoading", !1);
      }
    },
    L = async () => {
      const r = s.getValue("target");
      if (!r) return;
      const l = n.current;
      s.setValue("documentsLoading", !0);
      try {
        const u = await S.listDocuments(r.seq);
        l === n.current && s.setValue("documents", u);
      } catch (u) {
        if (l !== n.current) return;
        s.setValue("documents", []), v(u instanceof Error ? u.message : b("customer.loadDocumentsFailed"));
      } finally {
        l === n.current && s.setValue("documentsLoading", !1);
      }
    },
    F = async (r, l) => {
      const u = s.getValue("target");
      if (!u) return;
      const j = n.current;
      s.setValue("documentUploading", !0);
      try {
        const x = await S.uploadDocument(u.seq, r, l);
        if (j !== n.current) return;
        if (L(), Z(l)) {
          if (x.read_error) v(x.read_error);else if (x.filled.length > 0) {
            await je();
            const y = await S.detail(u.seq);
            if (j !== n.current) return;
            const E = G(y, y.phones);
            g.setFormValues({
              address: E.address,
              extra: E.extra
            }), s.setValue("target", {
              ...u,
              address: y.address,
              extra: y.extra
            }), a.current.onChanged?.(), N({
              message: b("customer.registerFilled", {
                count: x.filled.length,
                fields: x.filled.join(", ")
              }),
              delay: 2500
            });
          } else N({
            message: b("customer.registerNothingChanged"),
            delay: 2e3
          });
        } else N({
          message: b("customer.uploaded"),
          delay: 500
        });
      } catch (x) {
        v(x instanceof Error ? x.message : b("customer.uploadDocumentFailedPlain"));
      } finally {
        j === n.current && s.setValue("documentUploading", !1);
      }
    },
    D = async r => {
      if (await we({
        title: b("customer.deleteDocument"),
        message: b("customer.deleteDocumentConfirm", {
          name: r.name
        }),
        confirmText: b("customer.delete"),
        cancelText: b("customer.cancel")
      })) try {
        await S.removeDocument(r.seq), s.setValue("documents", (s.getValue("documents") ?? []).filter(u => u.seq !== r.seq));
      } catch (u) {
        v(u instanceof Error ? u.message : b("customer.deleteDocumentFailed"));
      }
    },
    T = r => {
      const l = ++n.current,
        u = G(r, r?.phone ? [r.phone] : []);
      r || (u.folder_seq = a.current.defaultFolderSeq?.() || ""), p.current = u.category_seq, g.setFormValues(u), i.current = u;
      const j = !!r && o.form.isOpen && !!s.getValue("target");
      s.setValues(j ? {
        target: r,
        consultsLoading: !0,
        dealsLoading: !0,
        tasksLoading: !0,
        bookingsLoading: !0,
        documentsLoading: !0,
        documentUploading: !1
      } : {
        target: r,
        consults: [],
        consultsLoading: !!r,
        calls: [],
        deals: [],
        dealsLoading: !!r,
        tasks: [],
        tasksLoading: !!r,
        bookings: [],
        bookingsLoading: !!r,
        documents: [],
        documentsLoading: !!r,
        documentUploading: !1
      }), f.current = null, o.form.open(), r && (S.detail(r.seq).then(x => {
        if (l !== n.current) return;
        const y = G(x, x.phones);
        g.setFormValues({
          phoneIds: y.phoneIds,
          phones: y.phones
        }), i.current = {
          ...(i.current ?? y),
          phoneIds: y.phoneIds,
          phones: y.phones
        };
      }).catch(() => {}), h(), c(), C(), _(), L(), S.listCalls({
        customerSeq: r.seq,
        limit: Q
      }).then(x => {
        l === n.current && s.setValue("calls", x.items);
      }).catch(() => {
        l === n.current && s.setValue("calls", []);
      }));
    },
    te = () => T(null),
    K = r => {
      T(null);
      const l = g.getFormValues(),
        u = l.phoneIds?.[0];
      u && g.setFormValues({
        phones: {
          ...(l.phones ?? {}),
          [u]: r
        }
      });
    },
    H = async r => {
      s.setValue("registerReading", !0);
      try {
        const l = await S.readRegister(r);
        await je(), T(null);
        const u = {
          ...(g.getFormValues().extra ?? {})
        };
        for (const [j, x] of Object.entries(l.extra)) j in u && (u[j] = x);
        g.setFormValues({
          name: l.name,
          address: l.address,
          extra: u
        }), f.current = {
          file: r,
          kind: l.doc_type === "facility_register" ? "facility_register" : "building_register"
        }, l.doc_type === "unknown" && v(b("customer.registerNotRecognized"));
      } catch (l) {
        v(l instanceof Error ? l.message : b("customer.readRegisterFailed"));
      } finally {
        s.setValue("registerReading", !1);
      }
    },
    se = r => T(r),
    X = async r => {
      try {
        T(await S.detail(r));
      } catch (l) {
        v(l instanceof Error ? l.message : b("customer.loadCustomerFailed"));
      }
    },
    ne = async (r, l) => {
      const u = s.getValue("target");
      if (!u) return !1;
      const j = g.getFormValues(),
        x = {
          ...j,
          ...r
        };
      if ("name" in r && !String(x.name ?? "").trim()) return v(b("customer.enterCustomerName")), !1;
      g.setFormValues(r);
      const y = ke(x),
        E = Object.fromEntries(l.map(k => [k, y[k]]));
      try {
        await S.update(u.seq, E);
        const k = {};
        for (const I of l) I !== "phones" && I in y && (k[I] = y[I]);
        return l.includes("phones") && (k.phone = y.phones?.[0]?.phone ?? ""), s.setValue("target", {
          ...u,
          ...k
        }), i.current && (i.current = {
          ...i.current,
          ...r
        }), a.current.onChanged?.(), !0;
      } catch (k) {
        return g.setFormValues(Object.fromEntries(Object.keys(r).map(I => [I, j[I]]))), v(k instanceof Error ? k.message : b("customer.saveCustomerFailed")), !1;
      }
    },
    re = async () => {
      const r = s.getValue("target");
      if (r) try {
        await S.remove(r.seq), o.form.close(), N({
          message: b("customer.deleted"),
          delay: 500
        }), a.current.onChanged?.();
      } catch (l) {
        v(l instanceof Error ? l.message : b("customer.deleteCustomerFailed"));
      }
    },
    oe = r => {
      if (r === We) {
        g.setFormValue("category_seq", p.current), $e();
        return;
      }
      p.current = Number(r) || "";
    },
    ae = async r => {
      const l = s.getValue("target");
      if (!l || !o.form.isOpen) return;
      const u = x => r.resync || r.changes.some(y => y.entity === x && (!y.customer_seq || y.customer_seq === l.seq)),
        j = Ne(r, "customer", l.seq);
      if (j?.action === "delete") {
        o.form.close(), v(b("customer.customerDeletedByOther")), a.current.onChanged?.();
        return;
      }
      if (j || u("customer_phone")) {
        const x = n.current;
        try {
          const y = await S.detail(l.seq);
          if (x !== n.current) return;
          const E = G(y, y.phones),
            k = g.getFormValues(),
            I = i.current ?? k,
            {
              patch: P
            } = Ge(k, I, E, {
              nested: ["extra"],
              skip: ["phoneIds", "phones"]
            }),
            W = z => (z.phoneIds ?? []).map(Y => z.phones?.[Y] ?? "").filter(Boolean).join(",");
          W(k) === W(I) && W(k) !== W(E) && Object.assign(P, {
            phoneIds: E.phoneIds,
            phones: E.phones
          }), i.current = E, Object.keys(P).length > 0 && g.setFormValues(P), s.setValue("target", {
            ...l,
            ...y
          });
        } catch {}
      }
      u("consult") && h(), u("partner_deal") && c(), u("customer_document") && L(), u("booking") && _();
    };
  return Ue(["customer", "customer_phone", "consult", "partner_deal", "customer_document", "booking"], r => {
    ae(r);
  }, {
    enabled: o.form.isOpen
  }), {
    form: g,
    modals: o,
    ui: s,
    openCreate: te,
    openCreateWithPhone: K,
    openCreateFromRegister: H,
    openEdit: se,
    openBySeq: X,
    remove: re,
    reloadConsults: h,
    reloadDeals: c,
    reloadTasks: C,
    createTask: A,
    openTask: r => qt(r),
    reloadDocuments: L,
    uploadDocument: F,
    removeDocument: D,
    changeCategory: oe,
    saveField: ne
  };
}
const ve = new Set(["missed", "rejected"]);
function Bt({
  calls: t,
  onOpen: a
}) {
  const p = M(),
    [n, f] = O.useState(0);
  return e.jsx(d, {
    component: "ul",
    sx: {
      listStyle: "none",
      m: 0,
      p: 0,
      border: 1,
      borderColor: "divider",
      borderRadius: 1.5
    },
    children: t.map((i, o) => e.jsxs(d, {
      component: "li",
      role: "button",
      tabIndex: 0,
      onClick: () => a(i),
      onKeyDown: s => {
        (s.key === "Enter" || s.key === " ") && (s.preventDefault(), a(i));
      },
      sx: {
        px: 2,
        py: 1.5,
        cursor: "pointer",
        borderTop: o === 0 ? 0 : 1,
        borderColor: "divider",
        display: "flex",
        flexDirection: "column",
        gap: .5,
        "&:hover": {
          bgcolor: R[50]
        }
      },
      children: [e.jsxs(d, {
        sx: {
          display: "flex",
          flexWrap: "wrap",
          columnGap: 1.25,
          fontSize: "0.875rem",
          color: "text.secondary"
        },
        children: [e.jsx("span", {
          children: i.started_at.slice(0, 16)
        }), i.stt_status === "pending" ? e.jsx("span", {
          children: p("customer.summarizing")
        }) : i.consult_seq ? e.jsx(d, {
          component: "span",
          sx: {
            color: "primary.main"
          },
          children: p("customer.recordedToConsult")
        }) : null, e.jsx("span", {
          children: i.remote_number
        })]
      }), e.jsxs(d, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 1
        },
        children: [e.jsxs(V, {
          sx: {
            flex: 1,
            minWidth: 0,
            fontSize: "0.9375rem",
            color: ve.has(i.result) ? "warning.dark" : "text.primary",
            fontWeight: ve.has(i.result) ? 600 : 400
          },
          children: [_t(i), Ce(i.duration_sec) ? ` · ${Ce(i.duration_sec)}` : ""]
        }), i.recording_token ? e.jsx(Le, {
          size: "small",
          "aria-label": n === i.seq ? p("customer.closeRecording") : p("customer.playRecording"),
          onClick: s => {
            s.stopPropagation(), f(g => g === i.seq ? 0 : i.seq);
          },
          sx: {
            my: -.5,
            color: "primary.main"
          },
          children: n === i.seq ? e.jsx(vt, {}) : e.jsx(kt, {})
        }) : null]
      }), n === i.seq && i.recording_token ? e.jsx(d, {
        onClick: s => s.stopPropagation(),
        onKeyDown: s => s.stopPropagation(),
        sx: {
          cursor: "default"
        },
        children: e.jsx(It, {
          src: S.callRecordingUrl(i.recording_token),
          name: p("customer.callRecording"),
          seconds: i.duration_sec
        })
      }) : null]
    }, i.seq))
  });
}
function Ie(t) {
  return t.stage === "contract" ? t.start_date || t.end_date ? `${t.start_date || "?"} ~ ${t.end_date || "?"}` : "" : t.valid_until ? b("customer.validUntil", {
    date: t.valid_until
  }) : "";
}
function Mt({
  deals: t,
  loading: a,
  onCreate: p,
  onOpen: n
}) {
  const f = M();
  return e.jsxs(d, {
    sx: {
      display: "flex",
      flexDirection: "column",
      gap: 1.5
    },
    children: [t.length === 0 && p ? e.jsx(d, {
      children: e.jsx(B, {
        variant: "outlined",
        startIcon: e.jsx(De, {}),
        onClick: p,
        children: f("customer.createQuote")
      })
    }) : null, a && t.length === 0 ? e.jsx(d, {
      sx: {
        display: "flex",
        justifyContent: "center",
        py: 3
      },
      children: e.jsx(w, {
        size: 28
      })
    }) : null, !a && t.length === 0 ? e.jsx(V, {
      sx: {
        py: 2,
        color: R[500],
        fontSize: "0.875rem"
      },
      children: f("customer.noDeals")
    }) : null, t.length > 0 ? e.jsx(d, {
      component: "ul",
      sx: {
        listStyle: "none",
        m: 0,
        p: 0,
        border: 1,
        borderColor: "divider",
        borderRadius: 1.5
      },
      children: t.map((i, o) => e.jsxs(d, {
        component: "li",
        role: "button",
        tabIndex: 0,
        onClick: () => n(i),
        onKeyDown: s => {
          (s.key === "Enter" || s.key === " ") && (s.preventDefault(), n(i));
        },
        sx: {
          px: 2,
          py: 1.5,
          cursor: "pointer",
          borderTop: o === 0 ? 0 : 1,
          borderColor: "divider",
          display: "flex",
          flexDirection: "column",
          gap: .5,
          "&:hover": {
            bgcolor: R[50]
          }
        },
        children: [e.jsxs(d, {
          sx: {
            display: "flex",
            flexWrap: "wrap",
            columnGap: 1.25,
            fontSize: "0.875rem",
            color: "text.secondary"
          },
          children: [e.jsx(d, {
            component: "span",
            sx: i.stage === "contract" ? {
              color: "primary.main",
              fontWeight: 600
            } : void 0,
            children: Vt[i.stage]
          }), e.jsx("span", {
            children: i.deal_date
          }), i.deal_no ? e.jsx("span", {
            children: i.deal_no
          }) : null, Ie(i) ? e.jsx("span", {
            children: Ie(i)
          }) : null]
        }), e.jsxs(d, {
          sx: {
            display: "flex",
            alignItems: "baseline",
            gap: 1.5,
            minWidth: 0
          },
          children: [e.jsx(V, {
            sx: {
              flex: 1,
              minWidth: 0,
              fontSize: "0.9375rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: i.title
          }), e.jsx(V, {
            sx: {
              flexShrink: 0,
              fontSize: "0.9375rem",
              fontWeight: 600,
              fontVariantNumeric: "tabular-nums"
            },
            children: f("customer.wonAmount", {
              amount: Lt(i.total_amount)
            })
          })]
        })]
      }, i.seq))
    }) : null]
  });
}
const At = ["building_register", "facility_register", "quote", "contract", "report", "etc"];
function zt(t) {
  return t >= 1024 * 1024 ? `${(t / 1024 / 1024).toFixed(1)}MB` : t >= 1024 ? `${Math.round(t / 1024)}KB` : `${t}B`;
}
function Ut({
  documents: t,
  loading: a,
  uploading: p,
  onUpload: n,
  onRemove: f
}) {
  const i = M(),
    o = Dt(),
    s = O.useRef(null),
    [g, h] = O.useState(null),
    C = O.useRef("etc"),
    _ = c => {
      h(null), C.current = c, s.current && (s.current.accept = Z(c) ? "application/pdf,image/*" : ""), s.current?.click();
    },
    A = c => o.open({
      previewUrl: S.documentFileUrl(c.file_uuid),
      name: c.name,
      table_name: "customer_document",
      uuid: c.file_uuid,
      seq: c.seq,
      user_seq: c.uploaded_by,
      user_name: c.uploaded_by_name,
      size: c.size,
      created_time: c.created_time
    });
  return e.jsxs(d, {
    sx: {
      display: "flex",
      flexDirection: "column",
      gap: 1.5
    },
    children: [e.jsxs(d, {
      sx: {
        display: "flex",
        alignItems: "center",
        gap: 1.5
      },
      children: [e.jsx(B, {
        variant: "outlined",
        startIcon: e.jsx(Xe, {}),
        disabled: p,
        onClick: c => h(c.currentTarget),
        children: i("customer.uploadDocument")
      }), p ? e.jsxs(d, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 1,
          color: "text.secondary",
          fontSize: "0.875rem"
        },
        children: [e.jsx(w, {
          size: 18
        }), i("customer.uploadingRegisterHint")]
      }) : null, e.jsx("input", {
        ref: s,
        type: "file",
        hidden: !0,
        onChange: c => {
          const L = c.target.files?.[0];
          c.target.value = "", L && n(L, C.current);
        }
      }), e.jsx(Ye, {
        anchorEl: g,
        open: !!g,
        onClose: () => h(null),
        children: At.map(c => e.jsxs(Qe, {
          onClick: () => _(c),
          children: [i(qe[c]), Z(c) ? e.jsx(d, {
            component: "span",
            sx: {
              ml: 1,
              color: "text.secondary"
            },
            children: i("customer.fillCustomerInfoSuffix")
          }) : null]
        }, c))
      })]
    }), a && t.length === 0 ? e.jsx(d, {
      sx: {
        display: "flex",
        justifyContent: "center",
        py: 3
      },
      children: e.jsx(w, {
        size: 28
      })
    }) : null, !a && t.length === 0 ? e.jsx(V, {
      sx: {
        py: 2,
        color: R[500],
        fontSize: "0.875rem"
      },
      children: i("customer.noDocuments")
    }) : null, t.length > 0 ? e.jsx(d, {
      component: "ul",
      sx: {
        listStyle: "none",
        m: 0,
        p: 0,
        border: 1,
        borderColor: "divider",
        borderRadius: 1.5
      },
      children: t.map((c, L) => e.jsxs(d, {
        component: "li",
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          pl: 2,
          pr: 1,
          py: 1.25,
          borderTop: L === 0 ? 0 : 1,
          borderColor: "divider",
          "&:hover": {
            bgcolor: R[50]
          }
        },
        children: [e.jsxs(d, {
          role: "button",
          tabIndex: 0,
          onClick: () => A(c),
          onKeyDown: F => {
            (F.key === "Enter" || F.key === " ") && (F.preventDefault(), A(c));
          },
          sx: {
            flex: 1,
            minWidth: 0,
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            cursor: "pointer"
          },
          children: [e.jsx(Je, {
            sx: {
              color: R[400],
              flexShrink: 0
            }
          }), e.jsxs(d, {
            sx: {
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              gap: .25
            },
            children: [e.jsx(V, {
              sx: {
                fontSize: "0.9375rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              },
              children: c.name
            }), e.jsxs(d, {
              sx: {
                display: "flex",
                flexWrap: "wrap",
                columnGap: 1.25,
                fontSize: "0.875rem",
                color: "text.secondary"
              },
              children: [e.jsx(d, {
                component: "span",
                sx: Z(c.kind) ? {
                  color: "primary.main",
                  fontWeight: 600
                } : void 0,
                children: i(qe[c.kind])
              }), e.jsx("span", {
                children: c.uploaded_by_name || i("customer.noName")
              }), e.jsx("span", {
                children: c.created_time.slice(0, 16)
              }), e.jsx("span", {
                children: zt(c.size)
              })]
            })]
          })]
        }), e.jsx(Le, {
          "aria-label": i("customer.deleteDocument"),
          onClick: () => f(c),
          sx: {
            color: R[400],
            flexShrink: 0
          },
          children: e.jsx(Ze, {})
        })]
      }, c.seq))
    }) : null]
  });
}
function Nt({
  tasks: t,
  loading: a,
  onCreate: p,
  onOpen: n
}) {
  const f = M(),
    {
      items: i
    } = et(),
    o = new Map(i.map(s => [s.seq, s.name]));
  return e.jsxs(d, {
    sx: {
      display: "flex",
      flexDirection: "column",
      gap: 1.5
    },
    children: [t.length === 0 ? e.jsx(d, {
      children: e.jsx(B, {
        variant: "outlined",
        startIcon: e.jsx(De, {}),
        onClick: p,
        children: f("customer.createTask")
      })
    }) : null, a && t.length === 0 ? e.jsx(d, {
      sx: {
        display: "flex",
        justifyContent: "center",
        py: 3
      },
      children: e.jsx(w, {
        size: 28
      })
    }) : null, !a && t.length === 0 ? e.jsx(V, {
      sx: {
        py: 2,
        color: R[500],
        fontSize: "0.875rem"
      },
      children: f("customer.noTasks")
    }) : null, t.length > 0 ? e.jsx(d, {
      component: "ul",
      sx: {
        listStyle: "none",
        m: 0,
        p: 0,
        border: 1,
        borderColor: "divider",
        borderRadius: 1.5
      },
      children: t.map((s, g) => e.jsxs(d, {
        component: "li",
        role: "button",
        tabIndex: 0,
        onClick: () => n(s.seq),
        onKeyDown: h => {
          (h.key === "Enter" || h.key === " ") && (h.preventDefault(), n(s.seq));
        },
        sx: {
          px: 2,
          py: 1.5,
          cursor: "pointer",
          borderTop: g === 0 ? 0 : 1,
          borderColor: "divider",
          display: "flex",
          flexDirection: "column",
          gap: .5,
          "&:hover": {
            bgcolor: R[50]
          }
        },
        children: [e.jsxs(d, {
          sx: {
            display: "flex",
            flexWrap: "wrap",
            columnGap: 1.25,
            fontSize: "0.875rem",
            color: "text.secondary"
          },
          children: [e.jsx(d, {
            component: "span",
            sx: s.completed ? {
              color: "success.main",
              fontWeight: 600
            } : {
              color: "primary.main",
              fontWeight: 600
            },
            children: s.completed ? f("customer.taskDone") : f("customer.taskInProgress")
          }), e.jsx("span", {
            children: o.get(s.workspace_seq) ?? f("customer.taskbox")
          }), s.due_date ? e.jsx("span", {
            children: f("customer.dueOn", {
              date: s.due_date.slice(0, 10)
            })
          }) : null, s.manager_name ? e.jsx("span", {
            children: s.manager_name
          }) : null]
        }), e.jsx(V, {
          sx: {
            fontSize: "0.9375rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            ...(s.completed ? {
              color: "text.secondary"
            } : {})
          },
          children: s.title
        })]
      }, s.seq))
    }) : null]
  });
}
function Gt({
  form: t,
  name: a,
  label: p,
  required: n
}) {
  const f = M(),
    i = String(t.useFormValue(a) ?? ""),
    [o = "", s = ""] = i.split("~"),
    g = (h, C) => t.setFormValue(a, h || C ? `${h}~${C}` : "");
  return e.jsxs(d, {
    sx: {
      display: "flex",
      alignItems: "center",
      gap: 1
    },
    children: [e.jsx(ee, {
      label: f("customer.periodStart", {
        label: p
      }),
      value: o,
      required: n,
      onChange: h => g(String(h.target.value ?? ""), s),
      fullWidth: !0
    }), e.jsx(d, {
      component: "span",
      sx: {
        color: "text.secondary"
      },
      children: "~"
    }), e.jsx(ee, {
      label: f("customer.periodEnd"),
      value: s,
      onChange: h => g(o, String(h.target.value ?? "")),
      fullWidth: !0
    })]
  });
}
const $t = {
    typography: "body1",
    color: "text.primary"
  },
  wt = {
    flexWrap: "wrap",
    ...nt
  };
function Kt(t) {
  return t.field_type === "textarea" || t.field_type === "multiselect" || t.field_type === "period";
}
function Ht({
  form: t,
  field: a
}) {
  const p = M(),
    n = `extra.${a.field_key}`,
    f = bt().members.map(o => ({
      value: o.account_seq,
      label: o.name
    })),
    i = a.options.map(o => ({
      value: o,
      label: o
    }));
  switch (a.field_type) {
    case "textarea":
      return e.jsx(ot, {
        form: t,
        name: n,
        label: a.required ? p("customer.requiredLabel", {
          label: a.label
        }) : a.label,
        fullWidth: !0,
        minRows: 2,
        slotProps: {
          htmlInput: {
            maxLength: 2e3
          }
        }
      });
    case "number":
      return e.jsx(he, {
        form: t,
        name: n,
        label: a.label,
        required: a.required,
        fullWidth: !0
      });
    case "money":
      return e.jsx(he, {
        form: t,
        name: n,
        label: a.label,
        required: a.required,
        suffix: p("customer.wonSuffix"),
        showSuffix: "hasValue",
        fullWidth: !0
      });
    case "month":
      return e.jsx(rt, {
        form: t,
        name: n,
        label: a.label,
        required: a.required,
        fullWidth: !0
      });
    case "period":
      return e.jsx(Gt, {
        form: t,
        name: n,
        label: a.label,
        required: a.required
      });
    case "person":
      return e.jsx($, {
        form: t,
        name: n,
        label: a.label,
        required: a.required,
        options: f,
        emptyLabel: p("customer.notAssigned"),
        fullWidth: !0
      });
    case "date":
      return e.jsx(ee, {
        form: t,
        name: n,
        label: a.label,
        required: a.required,
        fullWidth: !0
      });
    case "phone":
      return e.jsx(fe, {
        form: t,
        name: n,
        label: a.label,
        required: a.required,
        includeDash: !0,
        fullWidth: !0
      });
    case "select":
      return e.jsx($, {
        form: t,
        name: n,
        label: a.label,
        required: a.required,
        options: i,
        emptyLabel: p("customer.notAssigned"),
        fullWidth: !0
      });
    case "multiselect":
      return e.jsxs(d, {
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: 1
        },
        children: [e.jsx(V, {
          sx: $t,
          children: a.required ? p("customer.requiredLabel", {
            label: a.label
          }) : a.label
        }), e.jsx(st, {
          form: t,
          name: n,
          options: i,
          exclusive: !1,
          sx: wt
        })]
      });
    case "bool":
      return e.jsx(Te, {
        form: t,
        name: n,
        label: a.label
      });
    default:
      return e.jsx(pe, {
        form: t,
        name: n,
        label: a.label,
        required: a.required,
        fullWidth: !0,
        slotProps: {
          htmlInput: {
            maxLength: 200
          }
        }
      });
  }
}
function de({
  form: t,
  fields: a
}) {
  const p = Ee();
  return e.jsx(d, {
    sx: Fe,
    children: e.jsx(d, {
      sx: {
        display: "grid",
        gridTemplateColumns: p ? "minmax(0, 1fr)" : "repeat(2, minmax(0, 1fr))",
        gap: Re,
        alignItems: "center",
        [tt]: {
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))"
        }
      },
      children: a.map(n => e.jsx(d, {
        sx: {
          minWidth: 0,
          gridColumn: Kt(n) && !p ? "1 / -1" : void 0
        },
        children: e.jsx(Ht, {
          form: t,
          field: n
        })
      }, n.seq))
    })
  });
}
function me({
  label: t,
  value: a
}) {
  return e.jsxs(d, {
    sx: {
      flex: 1,
      minWidth: 0
    },
    children: [e.jsx(V, {
      sx: {
        fontSize: "0.875rem",
        color: "text.secondary"
      },
      children: t
    }), e.jsx(V, {
      sx: {
        fontSize: "0.9375rem",
        fontWeight: 600,
        fontVariantNumeric: "tabular-nums"
      },
      children: a
    })]
  });
}
function Xt({
  customer: t,
  bookings: a,
  loading: p
}) {
  const n = M();
  return e.jsxs(d, {
    sx: {
      display: "flex",
      flexDirection: "column",
      gap: 1.5
    },
    children: [e.jsxs(d, {
      sx: {
        display: "flex",
        gap: 2,
        px: 2,
        py: 1.5,
        border: 1,
        borderColor: "divider",
        borderRadius: 1.5
      },
      children: [e.jsx(me, {
        label: n("customer.visits"),
        value: n("customer.visitCount", {
          count: t.visit_count
        })
      }), e.jsx(me, {
        label: n("customer.salesTotal"),
        value: n("customer.wonAmount", {
          amount: t.sales_total.toLocaleString(be(ye()))
        })
      }), e.jsx(me, {
        label: n("customer.lastVisit"),
        value: t.last_visit_at || "-"
      })]
    }), p && a.length === 0 ? e.jsx(d, {
      sx: {
        display: "flex",
        justifyContent: "center",
        py: 3
      },
      children: e.jsx(w, {
        size: 28
      })
    }) : null, !p && a.length === 0 ? e.jsx(V, {
      sx: {
        py: 2,
        color: R[500],
        fontSize: "0.875rem"
      },
      children: n("customer.noBookings")
    }) : null, a.length > 0 ? e.jsx(d, {
      component: "ul",
      sx: {
        listStyle: "none",
        m: 0,
        p: 0,
        border: 1,
        borderColor: "divider",
        borderRadius: 1.5
      },
      children: a.map((f, i) => {
        const o = f.status === "done",
          s = f.status === "canceled" || f.status === "no_show",
          g = f.items.map(h => h.qty > 1 ? `${h.name} × ${h.qty}` : h.name).join(", ") || n("customer.booking");
        return e.jsxs(d, {
          component: "li",
          sx: {
            px: 2,
            py: 1.5,
            borderTop: i === 0 ? 0 : 1,
            borderColor: "divider",
            display: "flex",
            flexDirection: "column",
            gap: .5
          },
          children: [e.jsxs(d, {
            sx: {
              display: "flex",
              flexWrap: "wrap",
              columnGap: 1.25,
              fontSize: "0.875rem",
              color: "text.secondary"
            },
            children: [e.jsx(d, {
              component: "span",
              sx: o ? {
                color: "primary.main",
                fontWeight: 600
              } : void 0,
              children: Wt[f.status]
            }), e.jsx("span", {
              children: f.start_at
            }), f.handler_name ? e.jsx("span", {
              children: f.handler_name
            }) : null]
          }), e.jsxs(d, {
            sx: {
              display: "flex",
              alignItems: "baseline",
              gap: 1.5,
              minWidth: 0
            },
            children: [e.jsx(V, {
              sx: {
                flex: 1,
                minWidth: 0,
                fontSize: "0.9375rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                ...(s ? {
                  color: "text.secondary"
                } : {})
              },
              children: g
            }), f.price > 0 ? e.jsx(V, {
              sx: {
                flexShrink: 0,
                fontSize: "0.9375rem",
                fontWeight: 600,
                fontVariantNumeric: "tabular-nums",
                ...(s ? {
                  color: "text.secondary",
                  textDecoration: "line-through",
                  fontWeight: 400
                } : {})
              },
              children: n("customer.wonAmount", {
                amount: f.price.toLocaleString(be(ye()))
              })
            }) : null]
          })]
        }, f.seq);
      })
    }) : null]
  });
}
const J = t => t.field_type === "textarea";
function fs({
  controller: t,
  consultController: a,
  dealController: p,
  meta: n,
  rows: f,
  docked: i
}) {
  const o = M(),
    s = _e("customer").canWrite,
    g = _e("partner").canWrite,
    h = s || g,
    C = Ee(),
    {
      form: _,
      modals: A
    } = t,
    c = t.ui.useValue("target"),
    L = gt(),
    F = c && f ? f.findIndex(m => m.seq === c.seq) : -1,
    D = f && F >= 0 ? {
      hasPrev: F > 0,
      hasNext: F < f.length - 1,
      prev: () => L.run(() => t.openEdit(f[F - 1])),
      next: () => L.run(() => t.openEdit(f[F + 1]))
    } : null,
    T = t.ui.useValue("consults") ?? [],
    te = !!t.ui.useValue("consultsLoading"),
    K = t.ui.useValue("calls") ?? [],
    H = t.ui.useValue("deals") ?? [],
    se = !!t.ui.useValue("dealsLoading"),
    X = t.ui.useValue("tasks") ?? [],
    ne = !!t.ui.useValue("tasksLoading"),
    re = t.ui.useValue("bookings") ?? [],
    oe = !!t.ui.useValue("bookingsLoading"),
    ae = Ve(at(), "booking"),
    r = t.ui.useValue("documents") ?? [],
    l = !!t.ui.useValue("documentsLoading"),
    u = !!t.ui.useValue("documentUploading"),
    j = _.useFormValue("phoneIds") ?? [],
    x = _.isSubmitting,
    y = [...n.categories.map(m => ({
      value: m.seq,
      label: m.name
    })), ...(n.can_manage ? [{
      value: We,
      label: e.jsx(d, {
        component: "span",
        sx: {
          color: "primary.main"
        },
        children: o("customer.manageCategories")
      })
    }] : [])],
    E = n.members.map(m => ({
      value: m.account_seq,
      label: m.name
    })),
    k = it("customer").folders,
    I = (m, q) => e.jsxs(d, {
      sx: {
        display: "flex",
        gap: Re,
        flexDirection: C ? "column" : "row",
        alignItems: C ? "stretch" : "center"
      },
      children: [e.jsx(d, {
        sx: {
          flex: 1,
          minWidth: 0
        },
        children: m
      }), e.jsx(d, {
        sx: {
          flex: 1,
          minWidth: 0
        },
        children: q
      })]
    }),
    P = n.fields.filter(m => m.tab_name === jt),
    W = n.fields.filter(m => !m.tab_name),
    z = !C && !!c,
    Y = String(_.useFormValue("memo") ?? ""),
    ie = Ft(),
    ge = [{
      id: "customer-basic",
      title: o("customer.tabBasic"),
      children: e.jsx(d, {
        sx: Fe,
        children: e.jsxs(d, {
          sx: lt,
          children: [I(e.jsx(pe, {
            form: _,
            name: "name",
            label: o("customer.customerName"),
            fullWidth: !0,
            required: !0,
            autoFocus: !C && !c,
            slotProps: {
              htmlInput: {
                maxLength: 100
              }
            }
          }), e.jsx($, {
            form: _,
            name: "category_seq",
            label: o("customer.category"),
            options: y,
            emptyLabel: n.categories.length === 0 ? o("customer.notAssignedSetInSettings") : o("customer.notAssigned"),
            onChange: m => t.changeCategory(m.target.value),
            fullWidth: !0
          })), j.filter((m, q) => q % 2 === 0).map((m, q) => {
            const U = j[q * 2 + 1];
            return e.jsx(d, {
              children: I(e.jsx(fe, {
                form: _,
                name: `phones.${m}`,
                label: o(q === 0 ? "customer.mainPhone" : "customer.extraPhone"),
                includeDash: !0,
                fullWidth: !0
              }), U ? e.jsx(fe, {
                form: _,
                name: `phones.${U}`,
                label: o("customer.extraPhone"),
                includeDash: !0,
                fullWidth: !0
              }) : null)
            }, m);
          }), I(e.jsx($, {
            form: _,
            name: "manager_account_seq",
            label: o("customer.manager"),
            options: E,
            emptyLabel: o("customer.notAssigned"),
            fullWidth: !0
          }), e.jsx(ct, {
            form: _,
            name: "email",
            label: o("customer.email"),
            fullWidth: !0
          })), I(e.jsx(ut, {
            form: _,
            name: "address",
            label: o("customer.address"),
            fullWidth: !0
          }), e.jsx(pe, {
            form: _,
            name: "address_detail",
            label: o("customer.addressDetail"),
            fullWidth: !0,
            slotProps: {
              htmlInput: {
                maxLength: 200
              }
            }
          })), I(e.jsx(ee, {
            form: _,
            name: "birth_date",
            label: o("customer.birthDate"),
            fullWidth: !0
          }), e.jsx(Te, {
            form: _,
            name: "marketing_agree",
            label: o("customer.marketingConsentLong")
          })), k.length > 0 ? e.jsx($, {
            form: _,
            name: "folder_seq",
            label: o("customer.folder"),
            options: dt(k),
            emptyLabel: o("customer.noFolder"),
            fullWidth: !0
          }) : null, P.length > 0 ? e.jsx(d, {
            sx: mt,
            children: e.jsx(de, {
              form: _,
              fields: P
            })
          }) : null]
        })
      })
    }, ...(W.length > 0 ? [{
      id: "customer-extra",
      title: o(Ct),
      children: e.jsx(de, {
        form: _,
        fields: W
      })
    }] : []), ...le(n.fields).map((m, q) => ({
      id: `customer-tab-${q}`,
      title: m,
      children: e.jsx(de, {
        form: _,
        fields: n.fields.filter(U => U.tab_name === m)
      })
    })), {
      id: "customer-memo",
      title: o("customer.tabMemo"),
      children: e.jsx(pt, {
        syncKey: c?.seq ?? "new",
        value: Y,
        onChange: m => _.setFormValue("memo", m)
      })
    }, ...(c ? [{
      id: "customer-consults",
      title: o("customer.tabConsultHistory"),
      endIcon: T.length > 0 && s ? e.jsx(ce, {
        label: o("customer.recordConsult"),
        onClick: () => a.openCreate({
          seq: c.seq,
          name: c.name
        })
      }) : void 0,
      children: e.jsx(ht, {
        consults: T,
        loading: te,
        categories: n.consult_categories,
        onCreate: s ? () => a.openCreate({
          seq: c.seq,
          name: c.name
        }) : void 0,
        onOpen: a.openEdit
      })
    }] : []), ...(c ? [{
      id: "customer-deals",
      title: o("customer.quoteContract"),
      endIcon: H.length > 0 && h ? e.jsx(ce, {
        label: o("customer.createQuote"),
        onClick: () => p.openCreateForCustomer({
          seq: c.seq,
          name: c.name
        })
      }) : void 0,
      children: e.jsx(Mt, {
        deals: H,
        loading: se,
        onCreate: h ? () => p.openCreateForCustomer({
          seq: c.seq,
          name: c.name
        }) : void 0,
        onOpen: p.openEdit
      })
    }] : []), ...(c && ae ? [{
      id: "customer-bookings",
      title: o("customer.bookingsSales"),
      children: e.jsx(Xt, {
        customer: c,
        bookings: re,
        loading: oe
      })
    }] : []), ...(c ? [{
      id: "customer-tasks",
      title: o("customer.tasks"),
      endIcon: X.length > 0 ? e.jsx(ce, {
        label: o("customer.createTask"),
        onClick: t.createTask
      }) : void 0,
      children: e.jsx(Nt, {
        tasks: X,
        loading: ne,
        onCreate: t.createTask,
        onOpen: t.openTask
      })
    }] : []), ...(c ? [{
      id: "customer-documents",
      title: o("customer.documents"),
      children: e.jsx(Ut, {
        documents: r,
        loading: l,
        uploading: u,
        onUpload: (m, q) => {
          t.uploadDocument(m, q);
        },
        onRemove: m => {
          t.removeDocument(m);
        }
      })
    }] : []), ...(c && K.length > 0 ? [{
      id: "customer-calls",
      title: o("customer.callRecords"),
      children: e.jsx(Bt, {
        calls: K,
        onOpen: m => {
          const q = m.consult_seq ? T.find(U => U.seq === m.consult_seq) : void 0;
          if (q) return a.openEdit(q);
          a.openCreate({
            seq: c.seq,
            name: c.name
          }, {
            consulted_at: m.started_at.slice(0, 16),
            channel: m.direction === "out" ? "call_out" : "call_in"
          }, {
            callLogSeq: m.seq
          });
        }
      })
    }] : [])],
    Pe = ["customer-consults", "customer-deals", "customer-bookings", "customer-tasks", "customer-documents", "customer-calls"],
    Be = z ? [{
      id: "customer-properties",
      showTitle: !1,
      children: e.jsxs(ft, {
        sx: s ? void 0 : {
          pointerEvents: "none"
        },
        children: [e.jsx(Et, {
          controller: t,
          meta: n,
          basicFields: P.filter(m => !J(m))
        }), e.jsx(ue, {
          controller: t,
          fields: W.filter(m => !J(m))
        }), le(n.fields).map(m => e.jsx(ue, {
          controller: t,
          fields: n.fields.filter(q => q.tab_name === m && !J(q))
        }, m)), e.jsx(ue, {
          controller: t,
          fields: [...P, ...W, ...le(n.fields).flatMap(m => n.fields.filter(q => q.tab_name === m))].filter(J)
        })]
      })
    }, {
      id: "customer-memo-editor",
      title: o("customer.tabMemo"),
      endIcon: ie.doneButton,
      children: e.jsx(Rt, {
        syncKey: c?.seq ?? 0,
        value: Y,
        editing: ie.editing,
        onEditingChange: ie.setEditing,
        onSave: m => t.saveField({
          memo: m
        }, ["memo"])
      })
    }, ...ge.filter(m => Pe.includes(m.id))] : ge;
  return e.jsx(xt, {
    readOnly: !s,
    open: A.form.isOpen,
    onClose: A.form.close,
    title: c ? c.name : o("customer.registerCustomer"),
    maxWidth: "md",
    backdropClick: !C,
    fullScreen: C,
    mobilePresentation: C ? "slide" : "dialog",
    sideDrawer: !C && !i,
    splitDock: !C && !!i,
    sx: {
      DialogContent: {
        ...L.sx,
        ...(z ? Tt : {})
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
        visible: !!(c && n.can_manage && s),
        confirmConfig: {
          title: o("customer.deleteCustomer"),
          message: o("customer.deleteCustomerMessage"),
          confirmText: o("customer.delete"),
          cancelText: o("customer.cancel")
        }
      }
    },
    onDelete: t.remove,
    tabs: {
      visible: !z
    },
    scrollPastLastSection: !1,
    actions: z ? {
      visible: !!D,
      showCancelButton: !1,
      right: D ? e.jsxs(e.Fragment, {
        children: [e.jsx(B, {
          variant: "outlined",
          onClick: D.prev,
          disabled: !D.hasPrev,
          children: o("customer.previous")
        }), e.jsx(B, {
          variant: "outlined",
          onClick: D.next,
          disabled: !D.hasNext,
          children: o("customer.next")
        })]
      }) : null
    } : {
      showCancelButton: !0,
      right: e.jsxs(e.Fragment, {
        children: [D ? e.jsxs(e.Fragment, {
          children: [e.jsx(B, {
            variant: "outlined",
            onClick: D.prev,
            disabled: x || !D.hasPrev,
            children: o("customer.previous")
          }), e.jsx(B, {
            variant: "outlined",
            onClick: D.next,
            disabled: x || !D.hasNext,
            children: o("customer.next")
          })]
        }) : null, s ? e.jsx(B, {
          variant: "contained",
          onClick: () => {
            _.submit();
          },
          disabled: x,
          children: o(x ? "customer.saving" : "customer.save")
        }) : null]
      })
    },
    sections: Be
  });
}
export { fs as C, ps as u };