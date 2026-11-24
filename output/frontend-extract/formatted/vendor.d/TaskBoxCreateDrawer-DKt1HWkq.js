import { r as y, j as e } from "./react-CjxcGQav.js";
import { by as G, bT as K, bv as O, mB as Q, cj as H, gy as A, B as j, ck as U, M as Z, w as $, D as J, md as X, lQ as I, L as ee, qZ as oe, nm as se, cI as te, bQ as z, K as ae, k3 as ne, b4 as re, fE as ie, fw as Y, g6 as le, d3 as ce, rv as me } from "../js.d/main-Cm9wS5wt.js";
import { b as ue, c as de, d as pe, p as N, e as fe, D as xe, a as ge } from "./DictationButton-9kid6hUO.js";
import { E as be } from "./EmployeeSelectDialog-Cdnxeoz9.js";
import { t as ke } from "./utils-B6Q5_urv.js";
import { i as he } from "./taskboxProviderConfig-DZSmb5uq.js";
import { z as _e } from "./bootstrapController-BMV_i07c.js";
import { m as ve } from "./BoardPostDetail-CniIF2a7.js";
import { u as Ve } from "./workspaceCandidates-BzY4iDjW.js";
function Se(s) {
  const [d, r] = y.useState(null),
    m = a => r({
      field: a,
      open: !0
    }),
    u = () => r(a => a ? {
      ...a,
      open: !1
    } : null),
    l = (a, t) => {
      if (a === "manager") {
        const i = t[0];
        if (!i) return;
        const f = Number(i.account_seq ?? 0);
        s.setFormValue("manager_name", i.name), s.setFormValue("manager_account_seq", f);
        const _ = s.getFormValue("receiver_account_seqs") ?? [];
        if (f > 0 && _.includes(f)) {
          const k = s.getFormValue("receiver_names") ?? [],
            v = _.map((p, x) => ({
              seq: p,
              name: k[x] ?? ""
            })).filter(p => p.seq !== f);
          s.setFormValue("receiver_account_seqs", v.map(p => p.seq)), s.setFormValue("receiver_names", v.map(p => p.name));
        }
      } else a === "targets" ? (s.setFormValue("target_names", t.map(i => i.name)), s.setFormValue("target_account_seqs", t.map(i => Number(i.account_seq ?? 0)))) : (s.setFormValue("receiver_names", t.map(i => i.name)), s.setFormValue("receiver_account_seqs", t.map(i => Number(i.account_seq ?? 0))));
    };
  return {
    memberDialog: d,
    openMemberDialog: m,
    closeMemberDialog: u,
    applyMembers: a => {
      if (a.length === 0 && d?.field !== "targets") {
        G(K("taskbox.loginLinkedOnly"));
        return;
      }
      d && l(d.field, a), u();
    }
  };
}
function je({
  spaces: s,
  value: d,
  onChange: r
}) {
  const m = O(),
    {
      colors: u
    } = Q(),
    [l, o] = y.useState(null),
    a = s.find(t => t.seq === d) ?? null;
  return e.jsxs(e.Fragment, {
    children: [e.jsxs(H, {
      onClick: t => {
        t.stopPropagation(), o(t.currentTarget);
      },
      sx: {
        display: "inline-flex",
        alignItems: "center",
        gap: .75,
        minWidth: 0,
        maxWidth: 220,
        px: .75,
        py: .25,
        borderRadius: 1,
        fontSize: 14,
        fontWeight: 600,
        color: u.textPrimary,
        "&:hover": {
          bgcolor: u.surfaceHover
        }
      },
      children: [e.jsx(A, {
        icon: a?.icon,
        color: a?.color || void 0,
        fontSize: 18
      }), e.jsx(j, {
        component: "span",
        sx: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        },
        children: a?.name ?? m("taskbox.pickWorkspace")
      }), e.jsx(U, {
        sx: {
          fontSize: 20,
          color: u.textMuted,
          ml: -.5
        }
      })]
    }), e.jsx(Z, {
      anchorEl: l,
      open: !!l,
      onClose: () => o(null),
      onClick: t => t.stopPropagation(),
      children: s.map(t => e.jsxs($, {
        selected: t.seq === d,
        onClick: () => {
          r(t.seq), o(null);
        },
        sx: {
          gap: 1,
          fontSize: 14,
          minWidth: 200
        },
        children: [e.jsx(A, {
          icon: t.icon,
          color: t.color || void 0,
          fontSize: 18
        }), t.name]
      }, t.seq))
    })]
  });
}
function Fe(s, d) {
  const r = s.data ?? {};
  if (s.kind === "vehicle") return String(r.plate_no ?? "");
  const m = Number(r.capacity) || 0;
  return [String(r.location ?? ""), m ? d("office.capacityPeople", {
    count: m
  }) : ""].filter(Boolean).join(" · ");
}
function qe({
  controller: s,
  resources: d
}) {
  const {
      form: r,
      modals: m,
      ui: u,
      picks: l
    } = s,
    o = O(),
    a = J(),
    t = r.useFormValue("kind") ?? "room",
    i = Number(r.useFormValue("resource_seq")) || 0,
    f = r.useFormValue("start_at") ?? "",
    _ = r.useFormValue("end_at") ?? "",
    k = u.useValue("derived"),
    v = !!u.useValue("approval"),
    p = l.useValue(t),
    x = o(X[t]),
    B = d.filter(n => n.kind === t && n.enabled),
    V = ue(t, f, _, m.pick.isOpen),
    w = i ? V.busy.get(i) : void 0,
    D = {
      display: "grid",
      gridTemplateColumns: a ? "1fr" : "repeat(2, minmax(0, 1fr))",
      gap: 2
    },
    F = [{
      id: "task-create-office-pick",
      title: o("office.resourceAndTime", {
        label: x
      }),
      children: e.jsxs(j, {
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: 2
        },
        children: [!k || v ? e.jsxs(j, {
          component: "ul",
          sx: {
            m: 0,
            pl: 2.5,
            fontSize: 14,
            color: "text.secondary",
            display: "flex",
            flexDirection: "column",
            gap: .5
          },
          children: [k ? null : e.jsx("li", {
            children: o("office.pickNoTaskTime")
          }), v ? e.jsx("li", {
            children: o("office.pickApprovalHint")
          }) : null]
        }) : null, e.jsxs(j, {
          sx: D,
          children: [e.jsx(I, {
            form: r,
            name: "start_at",
            label: o("office.start"),
            format: "YYYY-MM-DD HH:mm",
            minuteStep: 10,
            fullWidth: !0
          }), e.jsx(I, {
            form: r,
            name: "end_at",
            label: o("office.end"),
            format: "YYYY-MM-DD HH:mm",
            minuteStep: 10,
            fullWidth: !0
          })]
        }), e.jsxs(j, {
          sx: {
            display: "flex",
            flexDirection: "column",
            gap: .5
          },
          role: "radiogroup",
          "aria-label": x,
          children: [V.error ? e.jsx(ee, {
            sx: {
              fontSize: 14,
              color: "error.main"
            },
            children: V.error
          }) : null, B.map(n => {
            const b = V.busy.get(n.seq),
              h = n.seq === i,
              q = Fe(n, o);
            return e.jsxs(H, {
              role: "radio",
              "aria-checked": h,
              disabled: !!b && !h,
              onClick: () => r.setFormValue("resource_seq", n.seq),
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 1,
                width: "100%",
                minHeight: 44,
                px: 1.5,
                py: .75,
                borderRadius: 1,
                border: "1px solid",
                borderColor: h ? "primary.main" : "divider",
                textAlign: "left",
                fontSize: 14,
                opacity: b && !h ? .55 : 1,
                "&:hover": {
                  bgcolor: "#f7f7f5"
                }
              },
              children: [h ? e.jsx(oe, {
                sx: {
                  fontSize: 20,
                  color: "primary.main"
                }
              }) : e.jsx(se, {
                sx: {
                  fontSize: 20,
                  color: "text.disabled"
                }
              }), e.jsxs(j, {
                sx: {
                  flex: 1,
                  minWidth: 0,
                  display: "flex",
                  flexDirection: "column"
                },
                children: [e.jsxs(j, {
                  component: "span",
                  sx: {
                    display: "block",
                    fontWeight: 500,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  },
                  children: [n.name, q ? e.jsx(j, {
                    component: "span",
                    sx: {
                      fontWeight: 400,
                      color: "text.secondary"
                    },
                    children: ` · ${q}`
                  }) : null]
                }), e.jsx(j, {
                  component: "span",
                  sx: {
                    display: "block",
                    color: b ? "error.main" : "text.secondary",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  },
                  children: V.loading ? o("office.checking") : b ? o("office.busyWith", {
                    detail: de(b, o)
                  }) : o("office.available")
                })]
              })]
            }, n.seq);
          })]
        })]
      })
    }];
  return e.jsx(te, {
    open: m.pick.isOpen,
    onClose: m.pick.close,
    title: o("office.pickResource", {
      label: x
    }),
    maxWidth: "sm",
    fullScreen: a,
    mobilePresentation: a ? "slide" : "dialog",
    draggable: !0,
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
      left: p ? e.jsx(z, {
        variant: "outlined",
        onClick: () => s.clearPick(t),
        children: o("office.clearPick")
      }) : void 0,
      right: e.jsx(z, {
        variant: "contained",
        onClick: () => {
          r.submit();
        },
        disabled: r.isSubmitting || V.loading || !!w,
        sx: {
          minWidth: 80
        },
        children: r.isSubmitting ? e.jsx(ae, {
          size: 20,
          color: "inherit"
        }) : o("office.pick")
      })
    },
    sections: F
  });
}
function P({
  children: s
}) {
  return e.jsx(j, {
    component: "span",
    sx: {
      color: "#9a9a97"
    },
    children: s
  });
}
function ye({
  open: s,
  disabled: d,
  getTaskValues: r
}) {
  const m = O(),
    u = s && !d,
    {
      data: l
    } = ne({
      enabled: u
    }),
    o = pe({
      getTaskValues: r
    }),
    a = o.picks.useValue("room"),
    t = o.picks.useValue("vehicle"),
    i = y.useRef(!1);
  y.useEffect(() => {
    s && !i.current && o.reset(), i.current = s;
  }, [s]);
  const f = p => l.resources.some(x => x.kind === p && x.enabled),
    _ = l.vehicle_approval_required,
    k = [];
  u && f("room") && k.push({
    key: "office-room",
    icon: e.jsx(re, {
      sx: {
        fontSize: 17,
        ...(a ? {
          color: "#2f80ed"
        } : {})
      }
    }),
    label: m("office.kindRoom"),
    value: a ? N(a) : e.jsx(P, {
      children: m("office.none")
    }),
    filled: !!a,
    onClick: () => o.openPick("room", l.resources, !1)
  }), u && f("vehicle") && k.push({
    key: "office-vehicle",
    icon: e.jsx(ie, {
      sx: {
        fontSize: 17,
        ...(t ? {
          color: "#2f80ed"
        } : {})
      }
    }),
    label: m("office.kindVehicle"),
    value: t ? e.jsxs(j, {
      component: "span",
      children: [N(t), t.approval ? e.jsxs(P, {
        children: [" · ", m("office.approvalAfterCreate")]
      }) : null]
    }) : e.jsx(P, {
      children: m("office.none")
    }),
    filled: !!t,
    onClick: () => o.openPick("vehicle", l.resources, _)
  });
  const v = u ? e.jsx(qe, {
    controller: o,
    resources: l.resources
  }) : null;
  return {
    extraRows: k,
    dialog: v
  };
}
function Ee({
  controller: s,
  customTabs: d,
  sprints: r = [],
  avatarSrcByName: m,
  presetTitle: u = "",
  presetContent: l = "",
  presetVisibility: o,
  presetVisibilityGroupSeq: a = 0,
  presetDueDate: t = "",
  presetTabKey: i = "",
  presetManager: f = null,
  excludeSelfAsManager: _ = !1,
  onAddProject: k,
  isNotice: v = !1,
  defaultBug: p = !1,
  pickerEmployees: x = [],
  memberCandidates: B,
  workspaceName: V = "",
  myAccountSeq: w = 0,
  defaultWorkspaceSeq: D = 0,
  avoidSampleSpace: F = !1
}) {
  const {
      modals: n
    } = s,
    {
      current: b
    } = Y(),
    h = le(),
    {
      items: q
    } = ce(),
    C = y.useMemo(() => q.filter(ve), [q]),
    M = !b && C.length > 0,
    T = Number(s.form.useFormValue("workspace_seq") ?? 0) || h,
    g = Ve(x, T),
    {
      bodyProps: c,
      memberDialog: L
    } = we({
      controller: s,
      memberCandidates: b || !M ? B : g,
      myAccountSeq: w,
      excludeSelfAsManager: _,
      officeOpen: n.form.isOpen
    });
  return y.useEffect(() => {
    if (!n.form.isOpen) return;
    c.form.setFormValue("is_post", !1), c.form.setFormValue("is_poll", !1);
    const S = D || h,
      R = C.find(W => W.seq === S),
      E = R && !(F && R.is_sample) ? S : C.find(W => !W.is_sample)?.seq ?? R?.seq ?? 0;
    c.form.setFormValue("workspace_seq", !M || E === h ? 0 : E), c.form.setFormValue("period_month", ""), c.form.setFormValue("subject_name", ""), c.form.setFormValue("amount", ""), c.form.setFormValue("custom_values", {}), c.form.setFormValue("customer_seq", 0), c.form.setFormValue("round_count", ""), c.form.setFormValue("round_every", ""), c.form.setFormValue("round_plan_ids", []), c.form.setFormValue("round_plans", {});
  }, [n.form.isOpen]), e.jsxs(e.Fragment, {
    children: [e.jsx(me, {
      ...c,
      open: n.form.isOpen,
      onClose: n.form.close,
      customTabs: d,
      sprints: r,
      avatarSrcByName: m,
      workspaceName: V,
      workspaceSlot: M ? e.jsx(je, {
        spaces: C.filter(S => !S.is_sample || S.seq === T),
        value: T,
        onChange: S => {
          S !== T && (c.form.setFormValue("workspace_seq", S === h ? 0 : S), c.form.setFormValue("tab_key", ""), c.form.setFormValue("manager_name", ""), c.form.setFormValue("manager_account_seq", 0));
        }
      }) : void 0,
      presetTitle: u,
      presetContent: l,
      presetVisibility: o,
      presetVisibilityGroupSeq: a,
      presetDueDate: t,
      presetTabKey: i,
      presetManager: f,
      excludeSelfAsManager: _,
      isNotice: v,
      defaultBug: p,
      employees: x,
      myAccountSeq: w,
      onAddProject: k ? (S, R) => k(S, R) : void 0
    }), L]
  });
}
function we({
  controller: s,
  memberCandidates: d,
  myAccountSeq: r,
  excludeSelfAsManager: m = !1,
  officeOpen: u = !1
}) {
  const l = O(),
    {
      form: o
    } = s,
    {
      current: a
    } = Y(),
    t = ye({
      open: u,
      disabled: !!a,
      getTaskValues: () => ({
        title: o.getFormValue("title"),
        is_event: !!o.getFormValue("is_event"),
        start_date: o.getFormValue("start_date"),
        due_date: o.getFormValue("due_date"),
        event_time: o.getFormValue("event_time")
      })
    }),
    i = fe({
      open: u,
      disabled: !!a,
      form: o
    }),
    f = he(),
    _ = s.state.useValue("statusOptions"),
    v = s.state.useValue("contentTemplates") ?? [],
    {
      state: p
    } = _e(),
    x = p.useValue("data.groups"),
    B = y.useMemo(() => (x ?? []).map(g => ({
      seq: g.seq,
      name: g.name
    })), [x]),
    V = p.useValue("data.employee"),
    w = Number((V ?? []).find(g => Number(g.login_account_seq ?? 0) === r)?.group_seq ?? 0),
    D = (d ?? ke(V)).length <= 1,
    F = Se(o),
    n = F.memberDialog,
    b = o.useFormValue("manager_account_seq"),
    h = o.useFormValue("receiver_account_seqs"),
    q = o.useFormValue("target_account_seqs"),
    C = !!o.useFormValue("is_event"),
    M = {
      form: o,
      statusOptions: _,
      contentTemplates: v,
      onSaveContentTemplate: (g, c) => s.state.actions.saveContentTemplate(g, c),
      onRemoveContentTemplate: g => s.state.actions.removeContentTemplate(g),
      contentTitleExtra: e.jsx(xe, {
        onText: g => o.setFormValue("content", ge(String(o.getFormValue("content") ?? ""), g))
      }),
      hideProject: !f.show_project,
      hideLabel: !f.show_label,
      hideBug: !f.show_bug_tab,
      simple: !0,
      hideMembers: D,
      departments: B,
      myGroupSeq: w,
      onMemberEdit: F.openMemberDialog,
      onAddLabelOption: (g, c) => s.state.actions.addStatusOption(g, c),
      extraRows: [...t.extraRows, ...i.extraRows]
    },
    T = e.jsxs(e.Fragment, {
      children: [t.dialog, e.jsx(be, {
        candidates: d,
        open: !!n?.open,
        singleSelect: n?.field === "manager",
        excludeSelf: m && n?.field === "manager" || n?.field === "targets",
        excludeAccountSeqs: n?.field === "receivers" && b > 0 ? [b] : void 0,
        title: n?.field === "manager" ? l("taskbox.pickManager") : n?.field === "targets" ? l("taskbox.pickTargets") : l(C ? "taskbox.pickAttendees" : "taskbox.pickReferences"),
        hint: n?.field === "manager" ? l("taskbox.singleManagerHint") : n?.field === "targets" ? l("taskbox.targetsHint") : void 0,
        initialAccountSeqs: n?.field === "manager" ? b > 0 ? [b] : [] : n?.field === "targets" ? q : h,
        onClose: F.closeMemberDialog,
        onApply: F.applyMembers
      })]
    });
  return {
    bodyProps: M,
    memberDialog: T
  };
}
export { Ee as T, we as u };