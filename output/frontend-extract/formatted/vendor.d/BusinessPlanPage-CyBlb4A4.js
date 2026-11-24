import { j as s, r as y } from "./react-CjxcGQav.js";
import { c as Te, bM as R, bT as w, bO as C, bx as ie, c8 as le, ak as U, z as ve, e as Ve, bv as _, B as d, L as g, cM as _e, eO as ke, eP as De, h3 as Ie, bQ as D, d8 as Ae, fj as Q, eM as Le, eN as qe, eK as Ce, eU as Fe, eV as Re, eL as We, eW as Be, du as ze, eX as Ee, kR as $e, kS as He, D as Me, cI as Ne, c4 as M, al as oe, cc as ae, cn as ce, gn as Oe, bH as de, bI as ue, go as Qe, I as fe, K as Ke, dd as Ue, iH as Ge, cQ as Je, cJ as ee } from "../js.d/main-Cm9wS5wt.js";
import { R as Xe } from "./Refresh-xoMt5L00.js";
import { S as Ye } from "./Send-yl2RzZF4.js";
import { M as Ze } from "./index-DC9lEI6V.js";
import "./stylis-DdLD6a3t.js";
const te = Te(s.jsx("path", {
  d: "M7.5 5.6 10 7 8.6 4.5 10 2 7.5 3.4 5 2l1.4 2.5L5 7zm12 9.8L17 14l1.4 2.5L17 19l2.5-1.4L22 19l-1.4-2.5L22 14zM22 2l-2.5 1.4L17 2l1.4 2.5L17 7l2.5-1.4L22 7l-1.4-2.5zm-7.63 5.29a.996.996 0 0 0-1.41 0L1.29 18.96c-.39.39-.39 1.02 0 1.41l2.34 2.34c.39.39 1.02.39 1.41 0L16.7 11.05c.39-.39.39-1.02 0-1.41zm-1.03 5.49-2.12-2.12 2.44-2.44 2.12 2.12z"
}));
function A(e) {
  return e == null ? "" : String(e).trim();
}
function et(e) {
  if (!e || typeof e != "object" || Array.isArray(e)) return {};
  const t = {};
  for (const [n, i] of Object.entries(e)) t[n] = A(i);
  return t;
}
function tt(e) {
  return Array.isArray(e) ? e.map(t => Array.isArray(t) ? t.map(n => A(n)) : []) : [];
}
function st(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function nt(e) {
  return {
    seq: Number(e.seq ?? 0) || 0,
    title: A(e.title),
    program: A(e.program),
    status: A(e.status) || "draft",
    sort_order: st(e.sort_order),
    title_parts: tt(e.title_parts),
    answers: et(e.answers),
    updated_time: A(e.updated_time)
  };
}
function rt(e) {
  const t = e.filter(i => i.sort_order === null),
    n = e.filter(i => i.sort_order !== null).sort((i, r) => i.sort_order - r.sort_order);
  return [...t, ...n];
}
const q = {
    list: async () => {
      const t = (await R.list("business_plan", {
        fields: ["*"],
        limit: 200,
        orderBy: "created_time",
        orderDir: "DESC"
      }))?.data?.items ?? [];
      return rt(t.map(nt));
    },
    save: async e => {
      const t = {
        title: e.title,
        program: e.program,
        status: e.status,
        sort_order: e.sort_order,
        title_parts: e.title_parts,
        answers: e.answers
      };
      e.seq > 0 && (t.seq = e.seq);
      const i = (await R.submit("business_plan", t))?.data?.seq;
      return Number(i ?? e.seq) || e.seq;
    },
    reorder: async e => {
      await Promise.all(e.map(t => R.submit("business_plan", t)));
    },
    remove: async e => {
      await R.delete("business_plan", e);
    }
  },
  pe = {
    generate: async e => {
      const t = await R.http.post("/v1/business-plan-ai/generate", {
          tool: e.tool,
          title: e.title,
          question_label: e.questionLabel,
          current_text: e.currentText,
          context_answers: e.contextAnswers,
          history: e.history
        }),
        n = t?.data?.content ?? "";
      if (!t?.ok || n.trim() === "") throw new Error(t?.error || w("businessPlan.aiNoResponse"));
      return n;
    }
  },
  it = "새 사업계획서",
  me = () => w("businessPlan.defaultTitle");
function lt() {
  return {
    seq: 0,
    title: me(),
    program: "",
    status: "draft",
    sort_order: null,
    title_parts: [],
    answers: {},
    updated_time: ""
  };
}
const $ = {
    open: !1,
    questionId: "",
    tool: "",
    toolLabel: "",
    questionLabel: "",
    title: "",
    currentText: "",
    contextAnswers: [],
    loading: !1,
    content: "",
    messages: [],
    error: ""
  },
  ot = {
    plans: [],
    listLoaded: !1,
    editingSeq: 0,
    saving: !1,
    aiDrawer: $
  };
function se() {
  return lt();
}
const at = () => async e => {
    try {
      e.setValue("plans", await q.list());
    } catch (t) {
      C(t instanceof Error ? t.message : w("businessPlan.loadFailed")), e.setValue("plans", []);
    } finally {
      e.setValue("listLoaded", !0);
    }
  },
  ct = () => async (e, t) => {
    e.setValue("saving", !0);
    try {
      const n = await q.save(t);
      return e.setValue("plans", await q.list()), e.setValue("editingSeq", n), ie(w("businessPlan.saved")), n;
    } catch (n) {
      return C(n instanceof Error ? n.message : w("businessPlan.saveFailed")), 0;
    } finally {
      e.setValue("saving", !1);
    }
  },
  dt = () => async (e, t) => {
    const n = e.getValue("plans"),
      i = t.flatMap((r, l) => {
        const o = n.find(c => c.seq === r);
        return o ? [{
          ...o,
          sort_order: l
        }] : [];
      });
    if (i.length === n.length) {
      e.setValue("plans", i);
      try {
        await q.reorder(i.map(r => ({
          seq: r.seq,
          sort_order: r.sort_order
        })));
      } catch (r) {
        e.setValue("plans", n), C(r instanceof Error ? r.message : w("businessPlan.reorderFailed"));
      }
    }
  },
  ut = () => async (e, t) => {
    const {
        force: n,
        ...i
      } = t,
      r = e.getValue("aiDrawer");
    if (!n && r.questionId === i.questionId && r.tool === i.tool && r.content !== "") {
      e.setValue("aiDrawer.open", !0);
      return;
    }
    e.setValue("aiDrawer", {
      ...$,
      ...i,
      open: !0,
      loading: !0
    });
    try {
      const l = await pe.generate({
        tool: i.tool,
        title: i.title,
        questionLabel: i.questionLabel,
        currentText: i.currentText,
        contextAnswers: i.contextAnswers,
        history: []
      });
      e.setValue("aiDrawer.content", l), e.setValue("aiDrawer.messages", [{
        role: "assistant",
        content: l
      }]);
    } catch (l) {
      e.setValue("aiDrawer.error", l instanceof Error ? l.message : w("businessPlan.aiFailed"));
    } finally {
      e.setValue("aiDrawer.loading", !1);
    }
  },
  ft = () => async (e, t) => {
    const n = e.getValue("aiDrawer");
    if (!n.open || n.loading) return;
    const i = [...n.messages, {
      role: "user",
      content: t
    }];
    e.setValue("aiDrawer.messages", i), e.setValue("aiDrawer.loading", !0), e.setValue("aiDrawer.error", "");
    try {
      const r = await pe.generate({
        tool: n.tool,
        title: n.title,
        questionLabel: n.questionLabel,
        currentText: n.currentText,
        contextAnswers: n.contextAnswers,
        history: i
      });
      e.setValue("aiDrawer.content", r), e.setValue("aiDrawer.messages", [...i, {
        role: "assistant",
        content: r
      }]);
    } catch (r) {
      e.setValue("aiDrawer.error", r instanceof Error ? r.message : w("businessPlan.aiFailed"));
    } finally {
      e.setValue("aiDrawer.loading", !1);
    }
  },
  pt = () => e => {
    e.setValue("aiDrawer.open", !1);
  },
  mt = () => async (e, t) => {
    try {
      await q.remove(t);
      const n = await q.list();
      return e.setValue("plans", n), ie(w("businessPlan.deleted")), n[0]?.seq ?? 0;
    } catch (n) {
      return C(n instanceof Error ? n.message : w("businessPlan.deleteFailed")), t;
    }
  },
  V = [{
    key: "problem",
    step: "P",
    title: "문제 인식 (Problem)",
    description: "창업 아이템을 왜 시작했는지 — 배경과 해결하려는 문제, 그리고 목표 시장을 적습니다.",
    questions: [{
      id: "problem_background",
      label: "창업 배경",
      placeholder: "이 아이템이 등장하게 된 시장·산업 동향과 정책 흐름을 적습니다.",
      aiTools: [{
        key: "background_research",
        label: "배경조사"
      }]
    }, {
      id: "problem_motivation",
      label: "창업 동기",
      placeholder: "왜 이 문제를 우리가, 지금 해결하려 하는지 — 계기와 문제의식을 적습니다.",
      aiTools: [{
        key: "motivation_draft",
        label: "동기작성"
      }]
    }, {
      id: "problem_social_issue",
      label: "사회적 이슈 및 갈등",
      placeholder: "이 아이템과 맞닿아 있는 사회적 이슈·갈등이 무엇이고, 왜 지금 주목받는지 적습니다.",
      aiTools: [{
        key: "draft",
        label: "초안작성"
      }]
    }, {
      id: "problem_definition",
      label: "해결하려는 문제",
      placeholder: "고객이 겪는 불편·결핍이 무엇이고, 기존 방식으로는 왜 해결되지 않는지 적습니다.",
      aiTools: [{
        key: "draft",
        label: "초안작성"
      }]
    }, {
      id: "problem_target",
      label: "목표 시장 및 고객",
      placeholder: "누구의 문제인지(고객군), 시장 규모와 그 근거를 적습니다.",
      aiTools: [{
        key: "draft",
        label: "초안작성"
      }]
    }]
  }, {
    key: "solution",
    step: "S",
    title: "실현 가능성 (Solution)",
    description: "문제를 어떻게 해결하는지 — 아이템의 내용과 차별성, 개발 방법과 준비 정도를 적습니다.",
    questions: [{
      id: "solution_item",
      label: "창업 아이템 소개",
      placeholder: "제품·서비스가 무엇이고 어떻게 동작하는지, 핵심 기능을 적습니다.",
      aiTools: [{
        key: "draft",
        label: "초안작성"
      }]
    }, {
      id: "solution_differentiation",
      label: "경쟁사 대비 차별성",
      placeholder: "경쟁 제품·서비스와 비교해 우리가 나은 점과 그것을 뒷받침하는 근거를 적습니다.",
      aiTools: [{
        key: "draft",
        label: "초안작성"
      }]
    }, {
      id: "solution_progress",
      label: "개발 방안 및 준비 현황",
      placeholder: "현재 어디까지 만들었고(시제품·특허·실증 등) 앞으로 무엇을 개발할지 적습니다.",
      aiTools: [{
        key: "draft",
        label: "초안작성"
      }]
    }]
  }, {
    key: "scaleup",
    step: "S",
    title: "성장 전략 (Scale-up)",
    description: "어떻게 팔고 키울지 — 시장 진입 전략과 수익 모델, 자금 계획과 목표를 적습니다.",
    questions: [{
      id: "scaleup_go_to_market",
      label: "시장 진입 전략",
      placeholder: "어떤 경로로 목표 시장에 들어가고 초기 고객을 확보할지 적습니다.",
      aiTools: [{
        key: "draft",
        label: "초안작성"
      }]
    }, {
      id: "scaleup_sales",
      label: "판매 전략",
      placeholder: "어떤 채널로 팔고, 고객을 어떻게 늘려갈지(마케팅·영업 계획) 적습니다.",
      aiTools: [{
        key: "draft",
        label: "초안작성"
      }]
    }, {
      id: "scaleup_revenue",
      label: "수익 모델",
      placeholder: "무엇으로 돈을 버는지(가격·과금 구조)와 손익 구조를 적습니다.",
      aiTools: [{
        key: "draft",
        label: "초안작성"
      }]
    }, {
      id: "scaleup_funding",
      label: "자금 소요 및 조달 계획",
      placeholder: "사업비를 어디에 쓰고(항목별), 정부지원금 외 자금은 어떻게 조달할지 적습니다.",
      aiTools: [{
        key: "draft",
        label: "초안작성"
      }]
    }, {
      id: "scaleup_milestone",
      label: "추진 일정 및 목표",
      placeholder: "협약 기간 안의 단계별 일정과 달성 목표(매출·사용자 등)를 적습니다.",
      aiTools: [{
        key: "draft",
        label: "초안작성"
      }]
    }]
  }, {
    key: "team",
    step: "T",
    title: "팀 구성 (Team)",
    description: "누가 실행하는지 — 대표자와 팀원의 역량, 부족한 부분을 메우는 방법을 적습니다.",
    questions: [{
      id: "team_ceo",
      label: "대표자 역량",
      placeholder: "이 아이템을 해낼 수 있는 대표자의 경력·전문성·성과를 적습니다.",
      aiTools: [{
        key: "draft",
        label: "초안작성"
      }]
    }, {
      id: "team_members",
      label: "팀원 구성 및 역할",
      placeholder: "팀원별 담당 업무와 관련 경력, 채용 계획을 적습니다.",
      aiTools: [{
        key: "draft",
        label: "초안작성"
      }]
    }, {
      id: "team_partners",
      label: "외부 협력 및 보유 자원",
      placeholder: "협력기관·멘토·외주 등 부족한 역량을 메우는 방법과 보유 자원을 적습니다.",
      aiTools: [{
        key: "draft",
        label: "초안작성"
      }]
    }]
  }],
  xt = V.reduce((e, t) => e + t.questions.length, 0),
  G = e => e.replace(/_(\w)/g, (t, n) => n.toUpperCase()),
  J = e => e.charAt(0).toUpperCase() + e.slice(1),
  ht = e => `businessPlan.section${J(e.key)}Title`,
  gt = e => `businessPlan.section${J(e.key)}Description`,
  X = e => `businessPlan.${G(e.id)}Label`,
  bt = e => `businessPlan.${G(e.id)}Placeholder`,
  ne = e => `businessPlan.tool${J(G(e.key))}`;
function yt(e) {
  for (const t of V) {
    const n = t.questions.find(i => i.id === e);
    if (n) return n;
  }
}
function xe(e) {
  return (e ?? "").trim() !== "";
}
function H(e) {
  const t = (e ?? "").trim();
  return t !== "" && t !== it && t !== me();
}
function wt(e) {
  return V.reduce((t, n) => t + n.questions.filter(i => xe(e[i.id])).length, 0);
}
const L = [{
    key: "tech",
    label: "핵심기술",
    placeholder: "인공지능"
  }, {
    key: "performance",
    label: "주요성능",
    placeholder: "120ton급 진지형"
  }, {
    key: "field",
    label: "적용분야",
    placeholder: "건설 현장"
  }, {
    key: "benefit",
    label: "고객혜택",
    placeholder: "완전 방수"
  }, {
    key: "result",
    label: "과제결과물",
    placeholder: "크레인"
  }],
  he = e => e.charAt(0).toUpperCase() + e.slice(1),
  jt = e => `businessPlan.titlePart${he(e.key)}Label`,
  St = e => `businessPlan.titlePart${he(e.key)}Placeholder`,
  Pt = 3;
function ge(e) {
  const t = Array.isArray(e) ? e : [];
  return Array.from({
    length: Pt
  }, (n, i) => L.map((r, l) => {
    const o = t[i],
      c = Array.isArray(o) ? o[l] : "";
    return typeof c == "string" ? c : "";
  }));
}
const be = "businessPlanState",
  ye = "businessPlanForm";
function B() {
  return le({
    stateId: be
  });
}
function k() {
  return U({
    formId: ye
  });
}
function Tt() {
  const e = le({
      stateId: be,
      initialValues: ot,
      actions: {
        loadPlans: at(),
        savePlan: ct(),
        removePlan: mt(),
        reorderPlans: dt(),
        openAiTool: ut(),
        refineAiDraft: ft(),
        closeAiDrawer: pt()
      }
    }),
    t = U({
      formId: ye,
      initialValues: se(),
      onValidate: l => String(l.title ?? "").trim() ? !0 : (C(w("businessPlan.titleRequired")), !1),
      onSubmit: async l => {
        const o = await e.actions.savePlan(l);
        if (!o) return;
        const x = e.getValue("plans").find(m => m.seq === o);
        t.setFormValues(x ?? {
          ...l,
          seq: o
        });
      }
    }),
    n = l => {
      t.setFormValues(l), e.setValue("editingSeq", l.seq), e.setValue("aiDrawer", $);
    },
    i = () => {
      t.setFormValues(se()), e.setValue("editingSeq", 0), e.setValue("aiDrawer", $);
    };
  return y.useEffect(() => {
    e.getValue("listLoaded") || (async () => {
      await e.actions.loadPlans();
      const l = e.getValue("plans");
      l.length > 0 && n(l[0]);
    })();
  }, []), {
    state: e,
    form: t,
    selectPlan: n,
    createPlan: i,
    deletePlan: async () => {
      const l = e.getValue("editingSeq");
      if (!l) {
        i();
        return;
      }
      const o = String(t.getFormValue("title") ?? "");
      if (!(await ve({
        title: w("businessPlan.deleteTitle"),
        message: w("businessPlan.deleteConfirm", {
          title: o || w("businessPlan.untitled")
        }),
        confirmText: w("businessPlan.delete"),
        cancelText: w("businessPlan.cancel")
      }))) return;
      const x = await e.actions.removePlan(l),
        h = e.getValue("plans").find(b => b.seq === x);
      h ? n(h) : i();
    }
  };
}
function vt() {
  const e = k(),
    t = {
      titleBuilder: Ve({
        modalId: "business-plan-title-builder-dialog"
      })
    },
    n = U({
      formId: "business-plan-title-builder-form",
      initialValues: {
        draft: ""
      },
      onValidate: r => String(r.draft ?? "").trim() !== "",
      onSubmit: async r => (e.setFormValue("title", String(r.draft ?? "").trim()), t.titleBuilder.close(), !0)
    });
  return {
    planForm: e,
    form: n,
    modals: t,
    openTitleBuilder: () => {
      const r = e.getFormValue("title"),
        l = typeof r == "string" ? r.trim() : "";
      e.setFormValue("title_parts", ge(e.getFormValue("title_parts"))), n.setFormValues({
        draft: H(l) ? l : ""
      }), t.titleBuilder.open();
    }
  };
}
const K = e => t => _e(t.palette.primary.main, e);
function Vt(e) {
  if (!e) return w("businessPlan.notSaved");
  const [t] = e.split(" "),
    [n, i, r] = (t ?? "").split("-");
  return n && i && r ? `${n.slice(2)}.${i}.${r}` : e;
}
function _t({
  index: e,
  onSelect: t,
  dragHandle: n
}) {
  const i = _(),
    r = B(),
    l = r.useValue(`plans.${e}.seq`),
    o = typeof l == "number" ? l : 0,
    c = r.useValue(`plans.${e}.title`),
    x = typeof c == "string" ? c : "",
    m = r.useValue(`plans.${e}.program`),
    h = typeof m == "string" ? m : "",
    b = r.useValue(`plans.${e}.updated_time`),
    a = typeof b == "string" ? b : "",
    u = r.useValue("editingSeq"),
    p = o !== 0 && o === (typeof u == "number" ? u : 0);
  return s.jsxs(d, {
    onClick: () => t(r.getValue(`plans.${e}`)),
    sx: {
      display: "flex",
      alignItems: "center",
      gap: 1,
      px: 2,
      py: 1.5,
      cursor: "pointer",
      borderBottom: "1px solid",
      borderColor: "divider",
      bgcolor: p ? K(.08) : "transparent",
      "&:hover": {
        bgcolor: p ? K(.12) : "action.hover"
      }
    },
    children: [n, s.jsxs(d, {
      sx: {
        flex: 1,
        minWidth: 0
      },
      children: [s.jsx(g, {
        sx: {
          fontSize: "0.9375rem",
          fontWeight: 500,
          overflowWrap: "anywhere"
        },
        children: x || i("businessPlan.untitled")
      }), s.jsx(g, {
        sx: {
          mt: .25,
          fontSize: "0.8125rem",
          color: "text.secondary"
        },
        children: [h, Vt(a)].filter(Boolean).join(" · ")
      })]
    })]
  });
}
function kt() {
  const e = _(),
    n = k().useFormValue("title"),
    i = typeof n == "string" ? n : "";
  return s.jsxs(d, {
    sx: {
      px: 2,
      py: 1.5,
      borderBottom: "1px solid",
      borderColor: "divider",
      bgcolor: K(.08)
    },
    children: [s.jsx(g, {
      sx: {
        fontSize: "0.9375rem",
        fontWeight: 500,
        overflowWrap: "anywhere"
      },
      children: i || e("businessPlan.untitled")
    }), s.jsx(g, {
      sx: {
        fontSize: "0.8125rem",
        color: "text.secondary"
      },
      children: e("businessPlan.notSavedYet")
    })]
  });
}
function Dt({
  seq: e,
  index: t,
  onSelect: n
}) {
  const {
    attributes: i,
    listeners: r,
    setNodeRef: l,
    transform: o,
    transition: c,
    isDragging: x
  } = Be({
    id: e
  });
  return s.jsx(d, {
    ref: l,
    style: {
      transform: Ee.Transform.toString(o),
      transition: c
    },
    sx: x ? {
      opacity: .6,
      position: "relative",
      zIndex: 1
    } : void 0,
    children: s.jsx(_t, {
      index: t,
      onSelect: n,
      dragHandle: s.jsx(d, {
        ...i,
        ...r,
        sx: {
          display: "flex",
          alignItems: "center",
          flexShrink: 0,
          color: "text.secondary",
          cursor: "grab",
          "&:active": {
            cursor: "grabbing"
          }
        },
        children: s.jsx(ze, {
          fontSize: "small"
        })
      })
    })
  });
}
function It({
  onSelect: e,
  onCreate: t
}) {
  const n = _(),
    i = B(),
    r = i.useValue("plans"),
    l = Array.isArray(r) ? r : [],
    o = i.useValue("editingSeq"),
    x = (typeof o == "number" ? o : 0) === 0,
    m = l.map(a => a.seq),
    h = ke(De(Ie, {
      activationConstraint: {
        distance: 6
      }
    })),
    b = a => {
      const {
        active: u,
        over: f
      } = a;
      if (!f || u.id === f.id) return;
      const p = m.indexOf(Number(u.id)),
        j = m.indexOf(Number(f.id));
      p < 0 || j < 0 || i.actions.reorderPlans(We(m, p, j));
    };
  return s.jsxs(d, {
    sx: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      minWidth: 0,
      minHeight: 0,
      userSelect: "none"
    },
    children: [s.jsx(d, {
      sx: {
        p: 2,
        pb: 1.5
      },
      children: s.jsx(D, {
        fullWidth: !0,
        variant: "contained",
        startIcon: s.jsx(Ae, {}),
        onClick: t,
        children: n("businessPlan.newPlan")
      })
    }), s.jsx(Q, {}), s.jsxs(d, {
      sx: {
        flex: 1,
        minHeight: 0,
        overflowY: "auto"
      },
      children: [x && s.jsx(kt, {}), s.jsx(Le, {
        sensors: h,
        collisionDetection: Ce,
        modifiers: [qe],
        onDragEnd: b,
        children: s.jsx(Fe, {
          items: m,
          strategy: Re,
          children: l.map((a, u) => s.jsx(Dt, {
            seq: a.seq,
            index: u,
            onSelect: e
          }, a.seq))
        })
      }), l.length === 0 && !x && s.jsx(g, {
        sx: {
          py: 4,
          textAlign: "center",
          fontSize: "0.9375rem"
        },
        children: n("businessPlan.emptyList")
      })]
    })]
  });
}
const At = 180;
function Lt({
  name: e,
  label: t,
  placeholder: n,
  action: i
}) {
  const r = k(),
    l = y.useRef(null),
    o = y.useRef(""),
    c = y.useRef(null),
    x = r.useFormValue(e),
    m = typeof x == "string" ? x : "",
    h = y.useRef(null);
  h.current === null && (h.current = m, o.current = m), y.useEffect(() => {
    m !== o.current && (o.current = m, l.current?.setMarkdown(m));
  }, [m]);
  const b = () => {
      const f = l.current;
      if (!f) return;
      const p = f.getMarkdown();
      p !== o.current && (o.current = p, r.setFormValue(e, p));
    },
    a = () => {
      c.current && window.clearTimeout(c.current), c.current = window.setTimeout(b, 300);
    },
    u = () => {
      c.current && (window.clearTimeout(c.current), c.current = null), b();
    };
  return y.useEffect(() => () => {
    c.current && window.clearTimeout(c.current);
  }, []), s.jsxs(d, {
    children: [s.jsxs(d, {
      sx: {
        display: "flex",
        alignItems: "flex-end",
        gap: 2,
        mb: 1.5,
        minHeight: 36.5
      },
      children: [s.jsx(g, {
        sx: {
          flex: 1,
          minWidth: 0,
          fontSize: "1.125rem",
          fontWeight: 500
        },
        children: t
      }), i]
    }), s.jsx($e, {
      ref: l,
      defaultValue: h.current,
      defaultFormat: "markdown",
      toolbarOptions: He,
      minHeight: At,
      locale: "ko",
      placeholder: n,
      focusBorder: !0,
      onChange: a,
      onBlur: u
    })]
  });
}
const W = "title";
function we({
  label: e,
  order: t,
  done: n,
  active: i,
  onJump: r
}) {
  return s.jsxs(d, {
    onClick: r,
    sx: {
      display: "flex",
      alignItems: "center",
      gap: 1,
      px: .75,
      py: .5,
      borderRadius: 1,
      cursor: "pointer",
      "&:hover": {
        bgcolor: "action.hover"
      }
    },
    children: [s.jsx(d, {
      sx: {
        width: 24,
        height: 24,
        flexShrink: 0,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "0.75rem",
        fontWeight: 700,
        lineHeight: 1,
        border: "1.5px solid",
        borderColor: n || i ? "primary.main" : "divider",
        bgcolor: n ? "primary.main" : "transparent",
        color: n ? "primary.contrastText" : i ? "primary.main" : "text.secondary"
      },
      children: t
    }), s.jsx(g, {
      noWrap: !0,
      sx: {
        fontSize: "1rem",
        fontWeight: i ? 700 : 400,
        color: i ? "primary.main" : n ? "text.primary" : "text.secondary",
        minWidth: 0
      },
      children: e
    })]
  });
}
function qt({
  order: e,
  active: t,
  onJump: n
}) {
  const i = _(),
    l = k().useFormValue("title"),
    o = H(typeof l == "string" ? l : "");
  return s.jsx(we, {
    label: i("businessPlan.stepTitle"),
    order: e,
    done: o,
    active: t,
    onJump: n
  });
}
function Ct({
  questionId: e,
  label: t,
  order: n,
  active: i,
  onJump: r
}) {
  const o = k().useFormValue(`answers.${e}`),
    c = xe(o);
  return s.jsx(we, {
    label: t,
    order: n,
    done: c,
    active: i,
    onJump: r
  });
}
function Ft({
  activeQuestionId: e,
  onJump: t
}) {
  const n = _(),
    i = V.flatMap((l, o) => l.questions.map(c => ({
      question: c,
      sectionIndex: o
    }))),
    r = s.jsx(d, {
      sx: {
        width: "1px",
        height: 14,
        bgcolor: "divider",
        ml: "17.5px",
        my: -.5
      }
    });
  return s.jsxs(d, {
    sx: {
      display: "flex",
      flexDirection: "column",
      userSelect: "none"
    },
    children: [s.jsx(qt, {
      order: 1,
      active: e === W,
      onJump: () => t(-1, W)
    }), i.map(({
      question: l,
      sectionIndex: o
    }, c) => s.jsxs(d, {
      children: [r, s.jsx(Ct, {
        questionId: l.id,
        label: n(X(l)),
        order: c + 2,
        active: l.id === e,
        onJump: () => t(o, l.id)
      })]
    }, l.id))]
  });
}
function je(e, t) {
  const n = [];
  for (const i of V) for (const r of i.questions) {
    if (r.id === t) return n;
    const l = (e[r.id] ?? "").trim();
    l !== "" && n.push({
      label: r.label,
      text: l
    });
  }
  return n;
}
function Rt(e, t) {
  return e.map(n => (n[t] ?? "").trim()).filter(n => n !== "");
}
function N(e) {
  return e.map(t => (t || "").trim()).filter(t => t !== "").join(" ");
}
function Wt(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Bt(e, t) {
  const n = Array.from(new Set(t.filter(r => r !== ""))).sort((r, l) => l.length - r.length);
  if (n.length === 0) return e;
  const i = new RegExp(`(${n.map(Wt).join("|")})`, "g");
  return e.split(i).map((r, l) => n.includes(r) ? s.jsx(d, {
    component: "span",
    sx: {
      color: "error.main",
      fontWeight: 700
    },
    children: r
  }, `${r}-${l}`) : r);
}
const O = [({
  tech: e,
  performance: t,
  field: n,
  item: i
}) => N([e && `${e} 기술이 적용된`, t, n && `${n}용`, i]), ({
  tech: e,
  performance: t,
  benefit: n,
  item: i
}) => N([e && `${e} 기반`, t, n, i]), ({
  tech: e,
  benefit: t,
  field: n,
  item: i
}) => N([e && `${e} 기술이 적용된`, t, n && `${n}용`, i])];
function zt(e) {
  const t = L.map((r, l) => Rt(e, l)[0] ?? ""),
    n = e.filter(r => r.some(l => l.trim() !== "")),
    i = n.flatMap((r, l) => {
      const [o, c, x, m, h] = L.map((a, u) => (r[u] ?? "").trim() || t[u]),
        b = {
          tech: o,
          performance: c,
          field: x,
          benefit: m,
          item: h
        };
      return n.length === 1 ? O.map(a => a(b)) : [O[l % O.length](b)];
    });
  return Array.from(new Set(i)).filter(r => r.trim() !== "");
}
function Et({
  controller: e
}) {
  const t = _(),
    n = Me(),
    i = e.modals.titleBuilder,
    r = e.form,
    l = e.planForm,
    o = l.useFormValue("title_parts"),
    c = y.useMemo(() => ge(o), [o]),
    x = String(r.useFormValue("draft") ?? ""),
    m = y.useMemo(() => zt(c), [c]),
    h = y.useMemo(() => c.flat().map(a => a.trim()).filter(a => a !== ""), [c]),
    b = x.trim() !== "";
  return s.jsx(Ne, {
    fontScaleKey: "TitleBuilderDialog",
    open: i.isOpen,
    onClose: i.close,
    title: t("businessPlan.titleBuilder"),
    maxWidth: "lg",
    fullScreen: n,
    mobilePresentation: n ? "slide" : "dialog",
    backdropClick: !1,
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
      showCancelButton: !0,
      right: s.jsx(D, {
        variant: "contained",
        onClick: () => {
          r.submit();
        },
        disabled: !b,
        children: t("businessPlan.applyTitle")
      })
    },
    sections: [{
      id: "title-parts",
      title: t("businessPlan.titleBuilderStep1"),
      children: s.jsxs(M, {
        spacing: 2,
        children: [s.jsx(g, {
          sx: {
            fontSize: "0.9375rem"
          },
          children: t("businessPlan.titleBuilderStep1Help")
        }), s.jsx(d, {
          sx: {
            overflowX: "auto"
          },
          children: s.jsxs(d, {
            sx: {
              minWidth: 720,
              display: "grid",
              gridTemplateColumns: `repeat(${L.length}, 1fr)`,
              gap: 1
            },
            children: [L.map(a => s.jsx(g, {
              sx: {
                fontSize: "0.9375rem",
                fontWeight: 700,
                textAlign: "center",
                py: .5,
                bgcolor: "#dff0d8",
                borderRadius: .5
              },
              children: t(jt(a))
            }, a.key)), c.map((a, u) => L.map((f, p) => s.jsx(oe, {
              form: l,
              name: `title_parts.${u}.${p}`,
              placeholder: u === 0 ? t(St(f)) : "",
              fullWidth: !0,
              size: "small"
            }, `${f.key}-${u}`)))]
          })
        })]
      })
    }, {
      id: "title-candidates",
      title: t("businessPlan.titleBuilderStep2"),
      children: s.jsxs(M, {
        spacing: 1.5,
        children: [s.jsx(g, {
          sx: {
            fontSize: "0.9375rem"
          },
          children: t("businessPlan.titleBuilderStep2Help")
        }), m.length === 0 ? s.jsx(g, {
          sx: {
            py: 2,
            fontSize: "0.9375rem"
          },
          children: t("businessPlan.titleBuilderNoCandidates")
        }) : m.map((a, u) => s.jsxs(d, {
          onClick: () => r.setFormValue("draft", a),
          sx: {
            display: "flex",
            alignItems: "flex-start",
            gap: 1.5,
            p: 1.5,
            borderRadius: 1,
            border: "1px solid",
            borderColor: x === a ? "primary.main" : "divider",
            cursor: "pointer",
            "&:hover": {
              borderColor: "primary.main"
            }
          },
          children: [s.jsx(ae, {
            size: "small",
            label: u + 1,
            sx: {
              flexShrink: 0,
              width: 24,
              height: 24,
              borderRadius: .5,
              fontWeight: 700,
              "& .MuiChip-label": {
                px: 0
              }
            }
          }), s.jsx(g, {
            sx: {
              fontSize: "0.9375rem"
            },
            children: Bt(a, h)
          })]
        }, a))]
      })
    }, {
      id: "title-draft",
      title: t("businessPlan.titleBuilderStep3"),
      children: s.jsxs(M, {
        spacing: 1.5,
        children: [s.jsx(ce, {
          form: r,
          name: "draft",
          label: t("businessPlan.projectTitle"),
          placeholder: t("businessPlan.titleDraftPlaceholder"),
          minRows: 2,
          fullWidth: !0
        }), s.jsx(g, {
          sx: {
            fontSize: "0.9375rem"
          },
          children: t("businessPlan.titleDraftHelp")
        })]
      })
    }]
  });
}
const $t = 720;
function Ht() {
  const e = _(),
    t = B(),
    n = k(),
    r = t.useValue("aiDrawer.open") === !0,
    o = t.useValue("aiDrawer.loading") === !0,
    c = t.useValue("aiDrawer.content"),
    x = typeof c == "string" ? c : "",
    m = t.useValue("aiDrawer.error"),
    h = typeof m == "string" ? m : "",
    b = t.useValue("aiDrawer.toolLabel"),
    a = typeof b == "string" ? b : "",
    u = t.useValue("aiDrawer.questionLabel"),
    f = typeof u == "string" ? u : "",
    p = t.useValue("aiDrawer.questionId"),
    j = typeof p == "string" ? yt(p) : void 0,
    P = j ? e(X(j)) : f,
    [v, T] = y.useState(""),
    I = () => t.actions.closeAiDrawer(),
    z = () => {
      const S = v.trim();
      S === "" || o || (T(""), t.actions.refineAiDraft(S));
    },
    F = () => {
      if (o) return;
      const S = t.getValue("aiDrawer.questionId"),
        E = t.getValue("aiDrawer.tool");
      if (!S || !E) return;
      const Y = n.getFormValue("title"),
        Z = n.getFormValue(`answers.${S}`),
        Pe = n.getFormValue("answers") ?? {};
      t.actions.openAiTool({
        questionId: S,
        tool: E,
        toolLabel: a,
        questionLabel: f,
        title: typeof Y == "string" ? Y.trim() : "",
        currentText: typeof Z == "string" ? Z : "",
        contextAnswers: je(Pe, S),
        force: !0
      });
    },
    Se = () => {
      const S = t.getValue("aiDrawer.questionId");
      !S || x.trim() === "" || (n.setFormValue(`answers.${S}`, x), I());
    };
  return s.jsx(Oe, {
    anchor: "right",
    open: r,
    onClose: (S, E) => {
      E !== "backdropClick" && I();
    },
    children: s.jsxs(d, {
      sx: {
        width: $t,
        maxWidth: "100vw",
        height: "100%",
        display: "flex",
        flexDirection: "column"
      },
      children: [s.jsxs(d, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 1,
          px: 2.5,
          py: 2,
          flexShrink: 0
        },
        children: [s.jsxs(d, {
          sx: {
            minWidth: 0,
            flex: 1,
            display: "flex",
            alignItems: "baseline",
            gap: 1.5
          },
          children: [s.jsxs(g, {
            sx: {
              fontSize: "1.5rem",
              fontWeight: 500,
              whiteSpace: "nowrap"
            },
            children: ["AI ", a]
          }), s.jsx(g, {
            noWrap: !0,
            sx: {
              fontSize: "0.9375rem",
              color: "text.secondary",
              minWidth: 0
            },
            children: P
          })]
        }), s.jsx(de, {
          title: e("businessPlan.close"),
          children: s.jsx(ue, {
            onClick: I,
            "aria-label": e("businessPlan.close"),
            children: s.jsx(Qe, {})
          })
        })]
      }), s.jsx(d, {
        sx: {
          flex: 1,
          minHeight: 0,
          borderTop: "1px solid",
          borderColor: "divider"
        },
        children: s.jsx(fe, {
          style: {
            height: "100%"
          },
          children: s.jsx(d, {
            sx: {
              px: 2.5,
              py: 2
            },
            children: o ? s.jsxs(d, {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 1.5
              },
              children: [s.jsx(Ke, {
                size: 22
              }), s.jsx(g, {
                children: e("businessPlan.generating")
              })]
            }) : h !== "" ? s.jsx(g, {
              sx: {
                color: "error.main"
              },
              children: h
            }) : s.jsx(d, {
              sx: {
                lineHeight: 1.7,
                "& > :first-of-type": {
                  mt: 0
                },
                "& > :last-child": {
                  mb: 0
                },
                "& p": {
                  my: 1
                },
                "& h1, & h2, & h3, & h4": {
                  mt: 2.5,
                  mb: 1,
                  fontWeight: 600
                },
                "& h1": {
                  fontSize: "1.25rem"
                },
                "& h2": {
                  fontSize: "1.125rem"
                },
                "& h3, & h4": {
                  fontSize: "1rem"
                },
                "& ul, & ol": {
                  my: 1,
                  pl: 3
                },
                "& li": {
                  my: .25
                },
                "& blockquote": {
                  my: 1,
                  pl: 1.5,
                  borderLeft: "3px solid",
                  borderColor: "divider"
                }
              },
              children: s.jsx(Ze, {
                children: x
              })
            })
          })
        })
      }), s.jsxs(d, {
        sx: {
          p: 2.5,
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          gap: 2.5,
          borderTop: "1px solid",
          borderColor: "divider"
        },
        children: [s.jsx(ce, {
          placeholder: e("businessPlan.refinePlaceholder"),
          value: v,
          onChange: S => T(S.target.value),
          minRows: 4,
          fullWidth: !0
        }), s.jsxs(d, {
          sx: {
            display: "flex",
            gap: 2.5
          },
          children: [s.jsx(D, {
            variant: "outlined",
            startIcon: s.jsx(Ye, {}),
            onClick: z,
            disabled: o || v.trim() === "",
            children: e("businessPlan.request")
          }), s.jsx(D, {
            variant: "outlined",
            startIcon: s.jsx(Xe, {}),
            onClick: F,
            disabled: o,
            children: e("businessPlan.regenerate")
          }), s.jsx(d, {
            sx: {
              flex: 1
            }
          }), s.jsx(D, {
            variant: "contained",
            onClick: Se,
            disabled: o || x.trim() === "",
            children: e("businessPlan.apply")
          })]
        })]
      })]
    })
  });
}
const Mt = 280;
function Nt({
  step: e
}) {
  return s.jsx(ae, {
    label: e,
    size: "small",
    color: "primary",
    sx: {
      width: 34,
      height: 34,
      flexShrink: 0,
      borderRadius: .5,
      fontSize: "0.9375rem",
      fontWeight: 700,
      "& .MuiChip-label": {
        px: 0
      }
    }
  });
}
function Ot() {
  const e = _(),
    t = k(),
    n = y.useRef(null),
    i = y.useRef([]),
    r = y.useRef({}),
    l = vt(),
    o = B(),
    c = (a, u) => {
      const f = t.getFormValue("title"),
        p = typeof f == "string" ? f.trim() : "";
      if (!H(p)) {
        C(e("businessPlan.aiNeedsTitle"));
        return;
      }
      const j = t.getFormValue(`answers.${a.id}`),
        P = t.getFormValue("answers") ?? {};
      o.actions.openAiTool({
        questionId: a.id,
        tool: u.key,
        toolLabel: e(ne(u)),
        questionLabel: a.label,
        title: p,
        currentText: typeof j == "string" ? j : "",
        contextAnswers: je(P, a.id)
      });
    },
    [x, m] = y.useState(W),
    h = y.useRef(null);
  y.useEffect(() => {
    const a = n.current?.getScrollContainer() ?? null;
    if (!a) return;
    const u = () => {
      const f = h.current;
      if (f) {
        m(f);
        return;
      }
      const p = a.scrollTop + 24;
      let j = W;
      for (const P of V) for (const v of P.questions) {
        const T = r.current[v.id];
        T && T.offsetTop <= p && (j = v.id);
      }
      if (a.scrollTop + a.clientHeight >= a.scrollHeight - 4) {
        const P = V[V.length - 1].questions;
        j = P[P.length - 1].id;
      }
      m(j);
    };
    return u(), a.addEventListener("scroll", u, {
      passive: !0
    }), () => a.removeEventListener("scroll", u);
  }, []);
  const b = (a, u) => {
    const f = n.current?.getScrollContainer() ?? null;
    if (!f) return;
    let p;
    if (u === W) p = 0;else {
      const T = r.current[u],
        I = i.current[a],
        z = V[a]?.questions[0]?.id === u,
        F = z ? I : T;
      if (!F) return;
      p = z ? F.offsetTop : Math.max(0, F.offsetTop - 12);
    }
    h.current = u, m(u), f.scrollTo({
      top: p,
      behavior: "smooth"
    });
    let j = -1,
      P = 0;
    const v = window.setInterval(() => {
      if (h.current !== u) {
        window.clearInterval(v);
        return;
      }
      const T = f.scrollTop,
        I = T + f.clientHeight >= f.scrollHeight - 2;
      Math.abs(T - p) <= 2 || I || T === j ? P += 1 : P = 0, j = T, P >= 2 && (h.current = null, window.clearInterval(v));
    }, 80);
    window.setTimeout(() => {
      h.current === u && (h.current = null), window.clearInterval(v);
    }, 1200);
  };
  return s.jsxs(d, {
    sx: {
      display: "flex",
      flex: 1,
      minWidth: 0,
      minHeight: 0
    },
    children: [s.jsxs(fe, {
      ref: n,
      style: {
        flex: "1 1 0%",
        minWidth: 0,
        minHeight: 0
      },
      containerStyle: {
        position: "relative"
      },
      children: [s.jsxs(d, {
        sx: {
          px: 2.5,
          py: 2.5
        },
        children: [s.jsx(g, {
          sx: {
            fontSize: "1.5rem",
            fontWeight: 500
          },
          children: e("businessPlan.titleHeading")
        }), s.jsxs(d, {
          sx: {
            mt: 2,
            display: "flex",
            alignItems: "center",
            gap: 2
          },
          children: [s.jsx(oe, {
            form: t,
            name: "title",
            placeholder: e("businessPlan.titlePlaceholder"),
            fullWidth: !0
          }), s.jsx(D, {
            variant: "outlined",
            startIcon: s.jsx(te, {}),
            onClick: l.openTitleBuilder,
            sx: {
              flexShrink: 0,
              whiteSpace: "nowrap",
              height: 56,
              px: 3
            },
            children: e("businessPlan.titleBuilder")
          })]
        })]
      }), s.jsx(Q, {}), V.map((a, u) => s.jsxs(d, {
        ref: f => {
          i.current[u] = f;
        },
        children: [u > 0 && s.jsx(Q, {}), s.jsxs(d, {
          sx: {
            px: 2.5,
            pt: 3,
            pb: 4.5
          },
          children: [s.jsxs(d, {
            sx: {
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              minWidth: 0
            },
            children: [s.jsx(Nt, {
              step: a.step
            }), s.jsxs(d, {
              sx: {
                display: "flex",
                alignItems: "baseline",
                gap: 1.5,
                minWidth: 0,
                flexWrap: "wrap"
              },
              children: [s.jsx(g, {
                sx: {
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  whiteSpace: "nowrap"
                },
                children: e(ht(a))
              }), s.jsx(g, {
                sx: {
                  fontSize: "0.9375rem"
                },
                children: e(gt(a))
              })]
            })]
          }), s.jsx(d, {
            sx: {
              mt: 2,
              display: "flex",
              flexDirection: "column",
              gap: 4
            },
            children: a.questions.map(f => s.jsx(d, {
              ref: p => {
                r.current[f.id] = p;
              },
              children: s.jsx(Lt, {
                name: `answers.${f.id}`,
                label: e(X(f)),
                placeholder: e(bt(f)),
                action: f.aiTools?.map(p => s.jsx(D, {
                  variant: "outlined",
                  startIcon: s.jsx(te, {}),
                  onClick: () => c(f, p),
                  sx: {
                    py: .5
                  },
                  children: e(ne(p))
                }, p.key))
              })
            }, f.id))
          })]
        })]
      }, `${a.key}-${a.step}`))]
    }), s.jsx(d, {
      sx: {
        width: Mt,
        flex: "0 0 auto",
        minHeight: 0,
        overflowY: "auto",
        px: 1.5,
        py: 2
      },
      children: s.jsx(Ft, {
        activeQuestionId: x,
        onJump: b
      })
    }), s.jsx(Et, {
      controller: l
    }), s.jsx(Ht, {})]
  });
}
const re = xt + 1;
function Qt() {
  const e = k(),
    t = _(),
    i = e.useFormValue("answers") ?? {},
    r = e.useFormValue("title"),
    l = H(typeof r == "string" ? r : ""),
    o = wt(i) + (l ? 1 : 0),
    c = Math.round(o / re * 100);
  return s.jsxs(d, {
    sx: {
      display: "flex",
      alignItems: "center",
      gap: 1.5,
      width: 260,
      flexShrink: 0
    },
    children: [s.jsx(Ue, {
      variant: "determinate",
      value: c,
      sx: {
        flex: 1,
        height: 10,
        borderRadius: 5,
        bgcolor: "action.hover"
      }
    }), s.jsx(g, {
      sx: {
        flexShrink: 0,
        whiteSpace: "nowrap"
      },
      children: t("businessPlan.progressSteps", {
        filled: o,
        total: re
      })
    })]
  });
}
function Kt({
  onSave: e,
  onDelete: t
}) {
  const n = _(),
    i = B(),
    r = k(),
    o = i.useValue("saving") === !0,
    c = r.useFormValue("title"),
    x = String(c ?? "").trim() !== "";
  return s.jsxs(d, {
    sx: {
      display: "flex",
      alignItems: "center",
      gap: 1,
      px: 2.5,
      py: 1.5,
      flexShrink: 0,
      borderTop: "1px solid",
      borderColor: "common.black"
    },
    children: [s.jsx(Qt, {}), s.jsx(d, {
      sx: {
        flex: 1,
        minWidth: 0
      }
    }), s.jsx(de, {
      title: n("businessPlan.delete"),
      children: s.jsx(ue, {
        color: "error",
        onClick: t,
        "aria-label": n("businessPlan.delete"),
        children: s.jsx(Ge, {})
      })
    }), s.jsx(D, {
      variant: "contained",
      onClick: e,
      disabled: o || !x,
      children: n(o ? "businessPlan.saving" : "businessPlan.save")
    })]
  });
}
const Ut = 360;
function ts() {
  const {
    state: e,
    form: t,
    selectPlan: n,
    createPlan: i,
    deletePlan: r
  } = Tt();
  return e.useValue("listLoaded") === !0 ? s.jsxs(d, {
    sx: {
      display: "flex",
      gap: 3,
      flexGrow: 1,
      minHeight: 520
    },
    children: [s.jsx(ee, {
      sx: {
        width: Ut,
        flex: "0 0 auto",
        display: "flex",
        overflow: "hidden"
      },
      children: s.jsx(It, {
        onSelect: n,
        onCreate: i
      })
    }), s.jsx(ee, {
      sx: {
        flex: 1,
        minWidth: 0,
        display: "flex",
        overflow: "hidden"
      },
      children: s.jsxs(d, {
        sx: {
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minWidth: 0,
          minHeight: 0
        },
        children: [s.jsx(Ot, {}), s.jsx(Kt, {
          onSave: () => {
            t.submit();
          },
          onDelete: () => {
            r();
          }
        })]
      })
    })]
  }) : s.jsx(Je, {
    overlay: !1
  });
}
export { ts as default };