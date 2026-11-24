import { r as d, j as e } from "./react-CjxcGQav.js";
import { rr as xe, g6 as me, d3 as fe, rw as be, rx as ke, bv as ne, mB as le, fj as $, B as a, cn as he, ry as U, cO as J, al as ge, bI as ee, go as te, cj as z, d8 as je, dy as Se, cY as R, C as ye, bB as Fe, T as _e, fB as we, fw as ve, gy as se, ck as Ve, rz as Ce, qY as Oe, fZ as Pe, rb as Te, kp as De, a1 as Ie, cI as qe, bQ as Ee, M as We, w as Be } from "../js.d/main-Cm9wS5wt.js";
import { m as Me, r as H, E as N, G as Re } from "./BoardPostDetail-CniIF2a7.js";
import { u as ze } from "./workspaceCandidates-BzY4iDjW.js";
import { c as oe, p as Ae } from "./TaskMonthlyFields-B0lhyzjQ.js";
import { H as Ke } from "./ReplayOutlined-BZwnvaIm.js";
import { u as Le } from "./TaskBoxCreateDrawer-DKt1HWkq.js";
function He() {
  return {
    kind: "text",
    description: "",
    options: ["", ""],
    deadline_date: "",
    deadline_time: "",
    multiple: !1,
    anonymous: !1,
    allow_add: !1,
    result_private: !1,
    reveal: "live"
  };
}
const Ne = 30;
function ot({
  controller: b,
  pickerEmployees: s,
  externalCandidates: w,
  me: n
}) {
  const {
      form: t,
      modals: y
    } = b,
    j = y.postComposer,
    V = xe(),
    p = me(),
    {
      items: x
    } = fe(),
    [F, m] = d.useState(0),
    r = !!t.useFormValue("is_post"),
    S = !!t.useFormValue("is_event"),
    f = !!t.useFormValue("is_poll"),
    k = String(t.useFormValue("title") ?? ""),
    c = String(t.useFormValue("content") ?? ""),
    C = !k.trim() && !c.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim(),
    q = !!t.useFormValue("is_talk"),
    T = f ? "poll" : r ? q ? "talk" : "post" : S ? "event" : "task",
    O = V.useValue("createSubmitting") ?? !1,
    v = d.useMemo(() => x.filter(Me), [x]),
    u = Number(t.useFormValue("workspace_seq") ?? 0) || p,
    P = x.find(o => o.seq === u) ?? null,
    E = u !== p,
    _ = H(P?.settings),
    A = N(_.kind),
    K = Re(_),
    D = _.kind,
    W = (o, i) => {
      const g = x.find(ue => ue.seq === o),
        I = N(H(g?.settings).kind);
      t.setFormValue("period_month", I ? oe() : ""), t.setFormValue("subject_name", ""), t.setFormValue("amount", ""), t.setFormValue("custom_values", {}), t.setFormValue("round_count", ""), t.setFormValue("round_every", ""), t.setFormValue("round_plan_ids", []), t.setFormValue("round_plans", {});
    },
    l = ze(s, u),
    h = w ?? l,
    L = () => {
      t.setFormValue("visibility", "all"), t.setFormValue("manager_name", ""), t.setFormValue("manager_account_seq", 0), t.setFormValue("receiver_names", []), t.setFormValue("receiver_account_seqs", []);
    },
    B = d.useCallback(o => {
      be(t, V, {}), t.setFormValue("is_post", o !== "task"), t.setFormValue("is_talk", o !== "task" && o !== "post"), t.setFormValue("is_poll", !1), t.setFormValue("poll", He()), t.setFormValue("post_password", ""), o !== "task" && L();
      const i = v.some(g => g.seq === p) ? p : v[0]?.seq ?? p;
      t.setFormValue("workspace_seq", i === p ? 0 : i), W(i), m(g => g + 1), j.open();
    }, [v, p, x, n?.accountSeq, n?.name]),
    ae = d.useCallback(o => {
      B("task"), t.setFormValue("period_month", o);
    }, [B]),
    ie = d.useCallback(o => {
      const i = !!(t.getFormValue("is_post") || t.getFormValue("is_poll"));
      ke(t, o === "event" ? "event" : "task"), i && (o === "task" || o === "event") && (t.setFormValue("visibility", "involved"), t.setFormValue("visibility_group_seq", 0)), t.setFormValue("is_post", o === "post" || o === "talk"), t.setFormValue("is_talk", o === "talk"), t.setFormValue("is_poll", o === "poll"), (o === "post" || o === "talk") && L();
    }, [n?.accountSeq, n?.name]),
    G = d.useCallback(o => {
      t.setFormValue("workspace_seq", o === p ? 0 : o), o !== p && t.setFormValue("tab_key", "");
      const i = x.find(g => g.seq === o);
      N(H(i?.settings).kind) ? t.getFormValue("period_month") || t.setFormValue("period_month", oe()) : W(o), t.setFormValue("manager_name", ""), t.setFormValue("manager_account_seq", 0), t.setFormValue("receiver_names", []), t.setFormValue("receiver_account_seqs", []), t.getFormValue("is_post") && L();
    }, [p, x, n?.accountSeq, n?.name]),
    Z = t.useFormValue("poll"),
    M = Z?.kind ?? "text",
    Q = d.useRef(M);
  d.useEffect(() => {
    if (Q.current === M) return;
    Q.current = M;
    const o = Math.max(2, t.getFormValue("poll.options")?.length ?? 2);
    t.setFormValue("poll.options", Array.from({
      length: o
    }, () => ""));
  }, [M]);
  const re = d.useCallback(() => {
      const o = t.getFormValue("poll.options") ?? [];
      return o.length >= Ne ? -1 : (t.setFormValue("poll.options", [...o, ""]), o.length);
    }, []),
    ce = d.useCallback(o => {
      const i = t.getFormValue("poll.options") ?? [];
      i.length <= 2 || t.setFormValue("poll.options", i.filter((g, I) => I !== o));
    }, []),
    de = d.useCallback(o => {
      if (!o) {
        t.setFormValue("poll.deadline_date", ""), t.setFormValue("poll.deadline_time", "");
        return;
      }
      const i = new Date();
      i.setDate(i.getDate() + 7);
      const g = I => String(I).padStart(2, "0");
      t.setFormValue("poll.deadline_date", `${i.getFullYear()}-${g(i.getMonth() + 1)}-${g(i.getDate())}`), t.setFormValue("poll.deadline_time", "18:00");
    }, []),
    pe = o => {
      B("task"), o.workspaceSeq > 0 && v.some(i => i.seq === o.workspaceSeq) && G(o.workspaceSeq), t.setFormValue("title", o.title), t.setFormValue("content", o.content);
    };
  return {
    isOpen: j.isOpen,
    open: B,
    openTaskFrom: pe,
    close: j.close,
    submit: t.submit,
    submitting: O,
    isBlank: C,
    tab: T,
    selectTab: ie,
    openCount: F,
    workspace: P,
    workspaceSeq: u,
    writableSpaces: v,
    selectWorkspace: G,
    otherSpace: E,
    monthlySpace: A,
    spaceFields: K,
    spaceKind: D,
    roundsEnabled: _.features.rounds,
    pollsEnabled: _.features.polls,
    openMonthly: ae,
    memberCandidates: h,
    pollDraft: Z,
    addPollOptionRow: re,
    removePollOptionRow: ce,
    setPollDeadlineEnabled: de
  };
}
const $e = 60;
function Xe({
  composer: b,
  form: s,
  titleRow: w
}) {
  const n = ne(),
    {
      colors: t
    } = le(),
    y = b.pollDraft,
    j = y?.options ?? [],
    V = y?.kind ?? "text",
    p = !!y?.deadline_date,
    [x, F] = d.useState(null),
    m = d.useRef(null);
  d.useEffect(() => {
    if (x === null) return;
    m.current?.querySelectorAll("input")[x]?.focus(), F(null);
  }, [x, j.length]);
  const r = k => c => {
      if (c.key !== "Enter" || c.nativeEvent.isComposing) return;
      if (c.preventDefault(), k < j.length - 1) {
        F(k + 1);
        return;
      }
      const C = b.addPollOptionRow();
      C >= 0 && F(C);
    },
    S = {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 2,
      minHeight: 44
    },
    f = {
      fontSize: 15,
      color: t.textPrimary
    };
  return e.jsxs(e.Fragment, {
    children: [w, e.jsx($, {
      sx: {
        borderColor: t.border
      }
    }), e.jsxs(a, {
      sx: {
        display: "flex",
        flexDirection: "column",
        gap: 2,
        px: 2,
        pt: 2,
        pb: 2
      },
      children: [e.jsx(he, {
        form: s,
        name: "poll.description",
        label: n("taskbox.descriptionOptional"),
        minRows: 2,
        fullWidth: !0
      }), e.jsx(U, {
        form: s,
        name: "poll.kind",
        row: !0,
        options: [{
          value: "text",
          label: n("taskbox.text")
        }, {
          value: "date",
          label: n("taskbox.date")
        }]
      }), e.jsxs(a, {
        ref: m,
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: 1
        },
        children: [j.map((k, c) => e.jsxs(a, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: .5
          },
          children: [V === "date" ? e.jsx(J, {
            form: s,
            name: `poll.options.${c}`,
            label: n("taskbox.optionNth", {
              n: c + 1
            }),
            fullWidth: !0
          }) : e.jsx(ge, {
            form: s,
            name: `poll.options.${c}`,
            label: n("taskbox.optionNth", {
              n: c + 1
            }),
            fullWidth: !0,
            onKeyDown: r(c),
            slotProps: {
              htmlInput: {
                maxLength: $e
              }
            }
          }), e.jsx(ee, {
            "aria-label": n("taskbox.removeOption"),
            disabled: j.length <= 2,
            onClick: () => b.removePollOptionRow(c),
            sx: {
              color: t.textMuted
            },
            children: e.jsx(te, {
              sx: {
                fontSize: 20
              }
            })
          })]
        }, c)), e.jsxs(z, {
          onClick: () => {
            const k = b.addPollOptionRow();
            k >= 0 && F(k);
          },
          sx: {
            alignSelf: "flex-start",
            gap: .5,
            px: 1,
            py: .75,
            borderRadius: 1,
            fontSize: 15,
            fontWeight: 600,
            color: t.accentOnSurface
          },
          children: [e.jsx(je, {
            sx: {
              fontSize: 20
            }
          }), n("taskbox.addPollOption")]
        })]
      })]
    }), e.jsx($, {
      sx: {
        borderColor: t.border
      }
    }), e.jsxs(a, {
      sx: {
        display: "flex",
        flexDirection: "column",
        px: 2,
        py: 1
      },
      children: [e.jsxs(a, {
        sx: S,
        children: [e.jsx(a, {
          component: "span",
          sx: f,
          children: n("taskbox.pollDeadline")
        }), p ? e.jsx(ee, {
          "aria-label": n("taskbox.removeDeadline"),
          onClick: () => b.setPollDeadlineEnabled(!1),
          sx: {
            color: t.textMuted
          },
          children: e.jsx(te, {
            sx: {
              fontSize: 20
            }
          })
        }) : e.jsx(z, {
          onClick: () => b.setPollDeadlineEnabled(!0),
          sx: {
            px: 1,
            py: .75,
            borderRadius: 1,
            fontSize: 15,
            fontWeight: 600,
            color: t.accentOnSurface
          },
          children: n("taskbox.addDeadline")
        })]
      }), p ? e.jsxs(a, {
        sx: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 1,
          pb: 1
        },
        children: [e.jsx(J, {
          form: s,
          name: "poll.deadline_date",
          label: n("taskbox.deadlineDate"),
          fullWidth: !0
        }), e.jsx(Se, {
          form: s,
          name: "poll.deadline_time",
          label: n("taskbox.deadlineTime"),
          fullWidth: !0
        })]
      }) : null, e.jsxs(a, {
        sx: S,
        children: [e.jsx(a, {
          component: "span",
          sx: f,
          children: n("taskbox.multipleChoice")
        }), e.jsx(R, {
          form: s,
          name: "poll.multiple"
        })]
      }), e.jsxs(a, {
        sx: S,
        children: [e.jsx(a, {
          component: "span",
          sx: f,
          children: n("taskbox.anonymousVote")
        }), e.jsx(R, {
          form: s,
          name: "poll.anonymous"
        })]
      }), e.jsxs(a, {
        sx: S,
        children: [e.jsx(a, {
          component: "span",
          sx: f,
          children: n("taskbox.anyoneAddOptions")
        }), e.jsx(R, {
          form: s,
          name: "poll.allow_add"
        })]
      }), e.jsxs(a, {
        sx: S,
        children: [e.jsx(a, {
          component: "span",
          sx: f,
          children: n("taskbox.resultsOnlyMe")
        }), e.jsx(R, {
          form: s,
          name: "poll.result_private"
        })]
      }), e.jsxs(a, {
        sx: {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start"
        },
        children: [e.jsx(a, {
          component: "span",
          sx: {
            ...f,
            minHeight: 44,
            display: "flex",
            alignItems: "center"
          },
          children: n("taskbox.resultsTiming")
        }), e.jsx(U, {
          form: s,
          name: "poll.reveal",
          row: !0,
          disabled: !!y?.result_private,
          options: [{
            value: "live",
            label: n("taskbox.live")
          }, {
            value: "after_close",
            label: n("taskbox.afterClose")
          }]
        })]
      })]
    })]
  });
}
const Ye = [{
    value: "talk",
    labelKey: "taskbox.kindTalk",
    icon: e.jsx(ye, {
      sx: {
        fontSize: 18
      }
    })
  }, {
    value: "post",
    labelKey: "taskbox.kindPost",
    icon: e.jsx(Fe, {
      sx: {
        fontSize: 18
      }
    })
  }, {
    value: "task",
    labelKey: "taskbox.kindTask",
    icon: e.jsx(_e, {
      sx: {
        fontSize: 18
      }
    })
  }, {
    value: "event",
    labelKey: "taskbox.kindEvent",
    icon: e.jsx(we, {
      sx: {
        fontSize: 18
      }
    })
  }, {
    value: "poll",
    labelKey: "taskbox.poll",
    icon: e.jsx(Ke, {
      sx: {
        fontSize: 18
      }
    })
  }],
  Ge = {
    talk: "taskbox.enterTitle",
    post: "taskbox.enterTitle",
    task: "taskbox.enterTaskTitle",
    event: "taskbox.enterEventTitle",
    poll: "taskbox.enterPollTitle"
  };
function nt({
  taskTitlePlaceholder: b,
  composer: s,
  controller: w,
  mobile: n,
  customTabs: t,
  sprints: y,
  avatarSrcByName: j,
  pickerEmployees: V,
  myAccountSeq: p,
  onAddProject: x,
  postOnly: F = !1
}) {
  const m = ne(),
    {
      colors: r
    } = le(),
    {
      current: S
    } = ve(),
    {
      bodyProps: f,
      memberDialog: k
    } = Le({
      controller: w,
      memberCandidates: s.memberCandidates,
      myAccountSeq: p,
      officeOpen: w.modals.postComposer.isOpen
    }),
    {
      form: c
    } = f,
    C = c.useFormValue("title") ?? "",
    [q, T] = d.useState(null),
    [X, O] = d.useState(!1),
    [v, Y] = d.useState(s.isOpen);
  v !== s.isOpen && (Y(s.isOpen), s.isOpen || O(!1));
  const {
      tab: u,
      workspace: P
    } = s,
    E = s.writableSpaces.filter(l => !l.is_sample || l.seq === s.workspaceSeq),
    _ = e.jsxs(e.Fragment, {
      children: [e.jsx(se, {
        icon: P?.icon,
        color: P?.color || void 0,
        fontSize: 18
      }), e.jsx(a, {
        component: "span",
        sx: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        },
        children: P?.name ?? m("taskbox.workspace")
      })]
    }),
    A = e.jsx(a, {
      component: "span",
      sx: {
        display: "inline-flex",
        alignItems: "center",
        gap: 1.5,
        minWidth: 0
      },
      children: E.length > 1 ? e.jsxs(z, {
        onClick: l => {
          l.stopPropagation(), T(l.currentTarget);
        },
        sx: {
          display: "inline-flex",
          alignItems: "center",
          gap: .75,
          minWidth: 0,
          maxWidth: 260,
          px: .75,
          py: .25,
          borderRadius: 1,
          font: "inherit",
          fontWeight: 500,
          color: r.textPrimary,
          "&:hover": {
            bgcolor: r.surfaceHover
          }
        },
        children: [_, e.jsx(Ve, {
          sx: {
            fontSize: 20,
            color: r.textMuted,
            ml: -.5
          }
        })]
      }) : e.jsx(a, {
        component: "span",
        sx: {
          display: "inline-flex",
          alignItems: "center",
          gap: .75,
          minWidth: 0,
          maxWidth: 260,
          fontWeight: 500,
          color: r.textPrimary
        },
        children: _
      })
    }),
    K = e.jsx(a, {
      sx: {
        display: "flex",
        gap: n ? 0 : .5,
        px: 1,
        borderBottom: `1px solid ${r.border}`
      },
      children: Ye.filter(l => l.value !== "poll" || s.pollsEnabled).map(l => {
        const h = l.value === u;
        return e.jsxs(z, {
          onClick: () => s.selectTab(l.value),
          sx: {
            display: "inline-flex",
            alignItems: "center",
            gap: .75,
            px: n ? 0 : 1.5,
            py: 1.25,
            ...(n ? {
              flex: "1 1 0",
              minWidth: 0,
              justifyContent: "center",
              whiteSpace: "nowrap"
            } : {}),
            fontSize: 15,
            fontWeight: h ? 700 : 500,
            color: h ? r.textStrong : r.textMuted,
            mb: "-1px",
            borderBottom: `2px solid ${h ? r.textStrong : "transparent"}`,
            "&:hover": {
              color: r.textStrong
            }
          },
          children: [n ? null : l.icon, m(l.labelKey)]
        }, l.value);
      })
    }),
    D = e.jsx(a, {
      sx: {
        px: 2,
        py: 1.5
      },
      children: e.jsx(a, {
        component: "input",
        spellCheck: !1,
        value: C,
        placeholder: u === "task" && b ? b : m(Ge[u]),
        onChange: l => c.setFormValue("title", l.target.value),
        sx: {
          width: "100%",
          border: "none",
          outline: "none",
          background: "transparent",
          font: "inherit",
          fontSize: n ? 19 : 18,
          fontWeight: 600,
          color: r.textStrong,
          p: 0,
          m: 0,
          "&::placeholder": {
            color: r.textMuted,
            fontWeight: 400
          }
        }
      })
    }),
    W = u === "poll" ? e.jsx(Xe, {
      composer: s,
      form: w.form,
      titleRow: D
    }) : e.jsx(Ce, {
      ...f,
      customTabs: t,
      sprints: y,
      avatarSrcByName: j,
      hideTypeToggle: !0,
      postMode: u === "post" || u === "talk",
      hideProject: f.hideProject || s.otherSpace,
      employees: V,
      myAccountSeq: p,
      onAddProject: x ? (l, h) => x(l, h) : void 0,
      leadingRow: u === "talk" ? void 0 : s.spaceFields.length > 0 && u !== "post" ? e.jsxs(e.Fragment, {
        children: [D, e.jsx($, {
          sx: {
            borderColor: r.border,
            mb: 1.5
          }
        }), e.jsx(Ae, {
          form: c,
          mobile: n,
          fields: s.spaceFields,
          workspaceSeq: s.workspaceSeq,
          showRounds: s.spaceKind === "monthly_planned" && s.roundsEnabled && s.tab === "task"
        })]
      }) : e.jsx(e.Fragment, {
        children: D
      }),
      afterProject: e.jsx(e.Fragment, {
        children: (u === "post" || u === "talk") && !S ? e.jsx(a, {
          onKeyDownCapture: l => {
            l.target instanceof HTMLInputElement && (l.target.readOnly = !1), O(!0);
          },
          onPointerDownCapture: () => O(!0),
          children: e.jsx(Oe, {
            icon: e.jsx(Ie, {
              sx: {
                fontSize: 17
              }
            }),
            label: m("taskbox.postPassword"),
            onClick: l => {
              const h = l.querySelector("input");
              h && (h.readOnly = !1, O(!0), h.focus());
            },
            children: e.jsx(Pe, {
              form: c,
              name: "post_password",
              type: "password",
              readOnly: !X,
              autoComplete: "new-password",
              maxLength: De,
              placeholder: m("taskbox.postPasswordNone"),
              appearance: Te,
              escapeReverts: !1,
              sx: {
                color: r.textPrimary,
                caretColor: r.textPrimary
              }
            })
          })
        }) : null
      }),
      contentSyncKey: `composer-${s.openCount}`
    });
  return e.jsxs(e.Fragment, {
    children: [e.jsx(qe, {
      open: s.isOpen,
      onClose: s.close,
      sideDrawer: !n,
      backdropClick: !n && s.isBlank,
      title: {
        text: A
      },
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
      fullScreen: n,
      mobilePresentation: n ? "slide" : "dialog",
      maxWidth: "md",
      tabs: {
        visible: !1
      },
      actions: {
        showCancelButton: !0,
        right: e.jsx(Ee, {
          variant: "contained",
          disableElevation: !0,
          disabled: s.submitting,
          onClick: s.submitting ? void 0 : s.submit,
          children: s.submitting ? m("taskbox.submitting") : m("taskbox.submit")
        })
      },
      contentTopPadding: 0,
      contentPaddingX: 0,
      sectionsPaddingTop: 0,
      sectionContentPaddingTop: 0,
      contentBottomPadding: 0,
      scrollPastLastSection: !1,
      overlayScrollbar: {
        enabled: !0,
        contentStyle: {
          minWidth: 0
        }
      },
      sections: [{
        id: "post-composer",
        title: "",
        showTitle: !1,
        children: e.jsxs(a, {
          sx: {
            width: "100%",
            minWidth: 0,
            display: "flex",
            flexDirection: "column"
          },
          children: [F ? null : K, W]
        })
      }]
    }), e.jsx(We, {
      anchorEl: q,
      open: !!q,
      onClose: () => T(null),
      children: E.map(l => e.jsxs(Be, {
        selected: l.seq === s.workspaceSeq,
        onClick: () => {
          s.selectWorkspace(l.seq), T(null);
        },
        sx: {
          gap: 1,
          fontSize: 14,
          minWidth: 200
        },
        children: [e.jsx(se, {
          icon: l.icon,
          color: l.color || void 0,
          fontSize: 18
        }), l.name]
      }, l.seq))
    }), k]
  });
}
export { Ye as P, nt as T, ot as u };