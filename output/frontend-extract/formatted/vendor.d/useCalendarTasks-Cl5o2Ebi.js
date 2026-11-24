import { r as t } from "./react-CjxcGQav.js";
import { mE as f, mF as b, mG as d, mH as v, mI as k, mJ as y, mK as m, mL as h, mM as q, d3 as T } from "../js.d/main-Cm9wS5wt.js";
import { E as w, b as B } from "./taskboxApi-BuYlRWHe.js";
import { r as S } from "./resolveAssetPreviewSrc-CLlbOCzq.js";
import { u as N } from "./FeedProfileAvatar-B6gqXpYU.js";
function L(e) {
  return [...v, ...k, ...y].find(s => s.key === e)?.key ?? "not_started";
}
const E = "custom-status-";
function p(e) {
  return e > 0 ? `${d}${e}` : "";
}
function G(e) {
  if (!b(e)) return 0;
  const o = Number(e.slice(d.length));
  return Number.isInteger(o) && o > 0 ? o : 0;
}
function F(e) {
  return `${E}${e}`;
}
function I(e, o) {
  return {
    seq: e.seq,
    title: e.title,
    status: L(e.status),
    label_keys: e.label_keys ?? [],
    start_date: e.start_date,
    due_date: e.due_date,
    manager_name: e.manager_name,
    manager_account_seq: e.manager_account_seq || void 0,
    receiver_names: e.receiver_names ?? [],
    receiver_account_seqs: e.receiver_account_seqs ?? [],
    is_notice: !!e.is_notice,
    is_event: !!e.is_event,
    is_post: !!e.is_post,
    is_talk: !!(e.is_post && e.is_talk),
    ...(e.reactions ? {
      reactions: e.reactions
    } : {}),
    is_poll: !!e.is_poll,
    ...(e.is_poll && e.poll ? {
      poll: e.poll
    } : {}),
    ...(e.is_post || e.is_poll ? {
      likes: Array.isArray(e.likes) ? e.likes.map(Number).filter(s => s > 0) : []
    } : {}),
    has_password: !!e.has_password || void 0,
    locked: !!e.locked || void 0,
    is_bug: !!e.is_bug,
    ticket_no: String(e.ticket_no ?? ""),
    is_support: !!e.is_support,
    support_type: e.support_type ?? "",
    origin_license_seq: Number(e.origin_license_seq) || 0,
    origin_license_name: e.origin_license_name ?? "",
    origin_account_seq: Number(e.origin_account_seq) || 0,
    origin_author_name: e.origin_author_name ?? "",
    origin_author_avatar: e.origin_author_avatar ? S(e.origin_author_avatar, "sm") : "",
    origin_contact_phone: e.origin_contact_phone ?? "",
    origin_contact_email: e.origin_contact_email ?? "",
    origin_source: e.origin_source ?? "",
    consult_seq: Number(e.consult_seq) || 0,
    customer_seq: Number(e.customer_seq) || 0,
    period_month: e.period_month ?? "",
    subject_name: e.subject_name ?? "",
    amount: Number(e.amount) || 0,
    custom_values: e.custom_values ?? {},
    round_no: Number(e.round_no) || 0,
    round_total: Number(e.round_total) || 0,
    round_group_key: Number(e.round_group_key) || 0,
    doc_requests: e.doc_requests ?? [],
    answerer_names: e.answerer_names ?? [],
    author_name: e.author_name,
    sprint_seq: Number(e.sprint_seq) || 0,
    story_points: Number(e.story_points) || 0,
    is_open: !!e.is_open,
    visibility: e.visibility ?? void 0,
    visibility_group_seq: Number(e.visibility_group_seq) || 0,
    repeat_rule: e.repeat_rule ?? "",
    repeat_until: String(e.repeat_until ?? ""),
    repeat_group_key: Number(e.repeat_group_key) || 0,
    relations: Array.isArray(e.relations) ? e.relations : [],
    linked_only: !!e.linked_only,
    bug_repro: e.bug_repro ?? "",
    bug_device: e.bug_device ?? "",
    bug_where: e.bug_where ?? "",
    bug_version: e.bug_version ?? "",
    resolution: e.resolution ?? "",
    resolution_note: e.resolution_note ?? "",
    reopen_count: e.reopen_count || 0,
    event_time: e.event_time ?? "",
    event_place: e.event_place ?? "",
    event_address: e.event_address ?? "",
    target_names: e.target_names ?? [],
    target_account_seqs: e.target_account_seqs ?? [],
    acks: e.acks ?? [],
    reminders: e.reminders ?? [],
    sort_no: e.sort_no || 0,
    timeline_sort_no: e.timeline_sort_no || 0,
    content_height: e.content_height || 0,
    group_sort_no: e.group_sort_no || 0,
    tab_key: p(e.group_seq),
    workspace_seq: e.workspace_seq ?? 0,
    priority: e.priority || "medium",
    icon: e.icon,
    icon_color: e.icon_color || void 0,
    estimated_time: e.estimated_time,
    checklist: e.checklist ?? [],
    attachments: e.attachments ?? [],
    comments: e.comments,
    comment_count: e.comment_count,
    note: e.note,
    content: e.content,
    created_by: e.author_name,
    author_account_seq: e.author_account_seq || void 0,
    created_time: e.created_time,
    updated_time: e.updated_time || void 0,
    owner: e.author_account_seq > 0 && e.author_account_seq === o ? "my" : "received",
    completed: !!e.completed,
    completed_by: e.completed_by || void 0,
    completed_by_account: Number(e.completed_by_account ?? 0) || void 0,
    review_pending: !!e.review_pending || void 0,
    completed_time: e.completed_time || void 0,
    archived: !!e.archived,
    deleted: !!e.deleted || void 0
  };
}
function R(e) {
  return {
    key: p(e.seq),
    label: e.name,
    icon: e.icon,
    archived: !!e.archived,
    useSprints: !!e.use_sprints
  };
}
function O(e) {
  return {
    key: F(e.seq),
    name: e.name,
    ...f(e.color)
  };
}
const x = {
    tasksById: {},
    taskSeqs: [],
    activeTab: "my",
    viewModeByTab: {},
    lastViewMode: "list",
    viewModeOverride: null,
    customTabs: [],
    statusOptions: [{
      key: "urgent",
      name: "긴급",
      bg: "#fdebec",
      fg: "#c4554d",
      dot: "#e5484d"
    }, {
      key: "planning",
      name: "기획",
      bg: "#f3e3f7",
      fg: "#6d2f80",
      dot: "#a355c0"
    }, {
      key: "routine",
      name: "반복업무",
      bg: "#e3eefb",
      fg: "#1d4f91",
      dot: "#2f80ed"
    }, {
      key: "improve",
      name: "개선",
      bg: "#dcf2e3",
      fg: "#1f6b3a",
      dot: "#2f9e5b"
    }, {
      key: "meeting",
      name: "회의",
      bg: "#fbeee0",
      fg: "#8a5a2b",
      dot: "#d9730d"
    }, {
      key: "complaint",
      name: "민원",
      bg: "#fde7ef",
      fg: "#ad1a72",
      dot: "#e255a1"
    }, {
      key: "purchase",
      name: "발주",
      bg: "#e0f4f5",
      fg: "#0f6b6b",
      dot: "#0fa3a3"
    }, {
      key: "education",
      name: "교육",
      bg: "#e7e9fb",
      fg: "#3d3db8",
      dot: "#6e79d6"
    }, {
      key: "document",
      name: "문서",
      bg: "#efefed",
      fg: "#57564f",
      dot: "#9a9a97"
    }],
    groupBy: "manager",
    groupByByTab: {},
    collapsedGroupKeys: [],
    hideCompleted: !1,
    filters: {
      ackFilter: "all",
      searchText: "",
      statusKeys: [],
      managerFilter: {
        accountSeqs: [],
        names: []
      },
      receiverFilter: {
        accountSeqs: [],
        names: []
      },
      projectKeys: [],
      priorityKeys: [],
      authorNames: [],
      answererNames: [],
      labelKeys: [],
      sortBy: "due_date",
      sortDirection: "asc",
      ...m()
    },
    readTaskSeqs: [],
    taskAudits: {},
    auditLoadingTaskSeq: 0,
    followUpOriginSeq: 0,
    detailLoadingTaskSeq: 0,
    calendarFeed: {
      subscribed: !1,
      enabled: !1,
      token: ""
    },
    calendarImports: [],
    googleEvents: [],
    gcalLink: w,
    gcalBusy: !1,
    viewAllTasks: !1,
    loadingList: !1,
    isLoaded: !1,
    loadedTeamVersion: 0,
    teamEpoch: 0,
    serverPrefs: null,
    pagedSeqs: [],
    pagedTotal: 0,
    archiveSearchSeqs: [],
    archiveSearchTotal: 0,
    pagedPage: 0,
    pagedLoading: !1,
    uploadMaxMb: 50,
    sprints: [],
    contentTemplates: [],
    taskTemplates: [],
    sprintFilterSeq: 0,
    reports: [],
    reportsLoaded: !1,
    reportTotal: 0,
    reportPage: 0,
    reportSearch: "",
    reportFilters: {
      authorAccountSeqs: [],
      authorNames: [],
      status: "",
      fromDate: "",
      toDate: ""
    },
    reportLoading: !1,
    editingReport: null
  },
  V = {
    title: "",
    icon: h,
    icon_color: "",
    manager_name: "",
    manager_account_seq: 0,
    receiver_names: [],
    receiver_account_seqs: [],
    is_notice: !1,
    is_event: !1,
    is_bug: !1,
    visibility: "involved",
    visibility_group_seq: 0,
    repeat_rule: "",
    repeat_until: "",
    bug_repro: "",
    bug_device: "",
    bug_where: "",
    bug_version: "",
    sprint_seq: 0,
    story_points: 0,
    event_time: "",
    event_place: "",
    event_address: "",
    target_names: [],
    target_account_seqs: [],
    start_date: "",
    due_date: "",
    reminders: [],
    priority: "medium",
    label_keys: [],
    note: "",
    content: "",
    checklist: [],
    tab_key: "",
    is_post: !1,
    is_talk: !1,
    workspace_seq: 0,
    is_poll: !1,
    period_month: "",
    subject_name: "",
    amount: "",
    custom_values: {},
    customer_seq: 0,
    round_count: "",
    round_every: "",
    round_plan_ids: [],
    round_plans: {},
    round_plan_keys: {
      period: "",
      amount: ""
    }
  },
  g = x.statusOptions;
let i = {
    tasks: [],
    statusOptions: g,
    loaded: !1
  },
  r = null;
const l = new Set();
function c() {
  l.forEach(e => e());
}
function K(e) {
  return l.add(e), () => l.delete(e);
}
function u(e) {
  return r || (r = B().then(o => {
    i = {
      tasks: (o.tasks ?? []).map(n => I(n, e)).filter(n => !n.linked_only),
      statusOptions: [...g, ...(o.statuses ?? []).map(O)],
      loaded: !0
    }, c();
  }).catch(() => {
    i = {
      ...i,
      loaded: !0
    }, c();
  }).finally(() => {
    r = null;
  }), r);
}
function $(e) {
  t.useEffect(() => {
    e > 0 && u(e);
  }, [e]), t.useEffect(() => {
    if (!(e <= 0)) return q(() => {
      const a = r;
      a ? a.then(() => u(e)) : u(e);
    });
  }, [e]);
  const o = t.useRef(null);
  N(() => {
    e <= 0 || (o.current && window.clearTimeout(o.current), o.current = window.setTimeout(() => {
      o.current = null;
      const a = r;
      a ? a.then(() => u(e)) : u(e);
    }, 500));
  }), t.useEffect(() => () => {
    o.current && window.clearTimeout(o.current);
  }, []);
  const s = t.useSyncExternalStore(K, () => i),
    {
      items: n
    } = T();
  return t.useMemo(() => {
    const a = new Set(n.filter(_ => _.is_sample).map(_ => _.seq));
    return a.size === 0 ? s : {
      ...s,
      tasks: s.tasks.filter(_ => !a.has(Number(_.workspace_seq ?? 0)))
    };
  }, [s, n]);
}
export { p as a, R as b, O as c, x as d, V as e, G as g, F as s, I as t, $ as u };