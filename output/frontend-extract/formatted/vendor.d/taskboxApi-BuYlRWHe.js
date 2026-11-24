import { bM as s, jD as n, lv as i, lw as y, lx as k, ly as f, lz as m, lA as w, lB as h, lC as b, bT as x, lD as v, km as A } from "../js.d/main-Cm9wS5wt.js";
const o = {
  autoAbortKey: !1
};
async function $(t = !1) {
  const a = await s.http.post("/v1/taskbox/bootstrap", t ? {
    all_tasks: !0
  } : {}, !0, n(), o);
  return {
    tasks: a?.data?.tasks ?? [],
    groups: a?.data?.groups ?? [],
    statuses: a?.data?.statuses ?? [],
    sprints: a?.data?.sprints ?? [],
    readTaskSeqs: a?.data?.read_task_seqs ?? [],
    calendarFeed: a?.data?.calendar_feed ?? {
      subscribed: !1,
      enabled: !1,
      token: ""
    },
    calendarImports: a?.data?.calendar_import?.imports ?? [],
    gcalLink: a?.data?.gcal ?? l,
    uploadMaxMb: Number(a?.data?.upload_max_mb) || 50,
    prefs: a?.data?.prefs ?? null,
    contentTemplates: Array.isArray(a?.data?.content_templates) ? a.data.content_templates : null,
    taskTemplates: Array.isArray(a?.data?.task_templates) ? a.data.task_templates : null
  };
}
async function C(t) {
  await s.http.patch("/v1/taskbox/prefs", t, !0, n());
}
async function F(t) {
  const a = await s.http.post("/v1/taskbox/calendar-import", {
    url: t
  }, !0, n(), o);
  return {
    imports: a?.data?.imports ?? [],
    name: a?.data?.name ?? ""
  };
}
async function P(t) {
  return (await s.http.delete(`/v1/taskbox/calendar-import/${t}`, void 0, !0, n(), o))?.data?.imports ?? [];
}
async function U() {
  return (await s.http.post("/v1/taskbox/gcal/events", {}, !0, n(), o))?.data?.events ?? [];
}
async function S(t, a) {
  return (await s.http.patch(`/v1/taskbox/gcal/events/${encodeURIComponent(t)}`, a, !0, n(), o))?.data?.event ?? null;
}
async function D(t) {
  await s.http.delete(`/v1/taskbox/gcal/events/${encodeURIComponent(t)}`, void 0, !0, n(), o);
}
const l = {
  configured: !1,
  linked: !1,
  google_email: "",
  export_enabled: !1,
  import_enabled: !1,
  linked_time: "",
  last_export_time: "",
  last_error: ""
};
async function E() {
  return (await s.http.get("/v1/taskbox/gcal", !0, n(), o))?.data ?? l;
}
async function G(t, a) {
  const e = await s.http.get(`/v1/taskbox/gcal/auth-url?return=${encodeURIComponent(t)}&name=${encodeURIComponent(a)}`, !0, n(), o);
  return String(e?.data?.url ?? "");
}
async function R(t) {
  return (await s.http.patch("/v1/taskbox/gcal", t, !0, n(), o))?.data ?? l;
}
async function L() {
  return (await s.http.delete("/v1/taskbox/gcal", void 0, !0, n(), o))?.data ?? l;
}
async function I() {
  const t = await s.http.post("/v1/taskbox/gcal/resync", {}, !0, n(), o);
  return Number(t?.data?.count ?? 0);
}
async function N() {
  return (await s.http.post("/v1/taskbox/calendar-feed", {}, !0, n(), o))?.data ?? {
    subscribed: !1,
    enabled: !1,
    token: ""
  };
}
async function M(t) {
  await s.http.patch("/v1/taskbox/calendar-feed", {
    enabled: t
  }, !0, n(), o);
}
async function B(t) {
  const a = await s.http.post("/v1/taskbox/task/list", {
    tab: t.tab,
    search: t.search,
    order_by: t.orderBy,
    order_dir: t.orderDir,
    page: t.page,
    limit: 50,
    ...(t.allTasks ? {
      all_tasks: !0
    } : {}),
    ...(t.fromDate ? {
      from_date: t.fromDate
    } : {}),
    ...(t.toDate ? {
      to_date: t.toDate
    } : {}),
    ...(t.kind ? {
      kind: t.kind
    } : {}),
    ...(t.workspaceSeq ? {
      workspace_seq: t.workspaceSeq
    } : {})
  }, !0, n(), o);
  return {
    items: a?.data?.items ?? [],
    total: Number(a?.data?.total) || 0,
    page: Number(a?.data?.page) || t.page
  };
}
async function K(t) {
  const a = await s.http.post("/v1/taskbox/task", t, !0, n(), o),
    e = a?.data?.item ?? null,
    r = a?.data?.items ?? (e ? [e] : []);
  return {
    item: e,
    items: r
  };
}
async function z(t, a) {
  const e = s.http.patch(`/v1/taskbox/task/${t}`, a, !0, {
    ...n(),
    ...i("task", t)
  }, o);
  return T(t, e), (await e)?.data?.item ?? null;
}
async function H(t, a, e) {
  const r = await s.http.patch(`/v1/taskbox/task/${t}`, a, !0, {
      ...n(),
      ...i("task", t)
    }, o),
    c = r?.data?.item ?? null,
    p = String(r?.data?.unlock_token ?? "");
  return e && p && c ? v("task", t, p, k(c)) : e || A("task", t), e ? c : c ? {
    ...c,
    ...(p ? g : {})
  } : null;
}
const g = {
    locked: !0,
    content: "",
    note: "",
    comments: [],
    comment_count: 0,
    attachments: [],
    checklist: [],
    likes: []
  },
  u = new Map();
function T(t, a) {
  const e = u.get(t) ?? new Set();
  e.add(a), u.set(t, e), a.catch(() => {}).finally(() => {
    e.delete(a), e.size === 0 && u.delete(t);
  });
}
async function j(t) {
  const a = u.get(t);
  a && a.size > 0 && (await Promise.allSettled([...a]));
  try {
    await s.http.post(`/v1/taskbox/task/${t}/notify-flush`, {}, !0, {
      ...n(),
      ...i("task", t)
    }, o);
  } catch {}
}
async function O(t, a, e) {
  const r = await s.http.post(`/v1/taskbox/task/${t}/repeat`, {
    repeat_rule: a,
    repeat_until: e
  }, !0, {
    ...n(),
    ...i("task", t)
  }, o);
  return {
    items: r?.data?.items ?? [],
    deletedSeqs: (r?.data?.deleted_seqs ?? []).map(c => Number(c)).filter(c => c > 0)
  };
}
async function Q(t) {
  await s.http.post(`/v1/taskbox/task/${t}/restore`, {}, !0, {
    ...n(),
    ...i("task", t)
  }, o);
}
async function Y(t) {
  await s.http.delete(`/v1/taskbox/task/${t}/purge`, void 0, !0, {
    ...n(),
    ...i("task", t)
  }, o);
}
async function J(t, a = "one") {
  const r = ((await s.http.delete(`/v1/taskbox/task/${t}${a === "series" ? "?scope=series" : ""}`, void 0, !0, {
    ...n(),
    ...i("task", t)
  }, o))?.data?.deleted_seqs ?? []).map(c => Number(c)).filter(c => c > 0);
  return r.length > 0 ? r : [t];
}
async function V(t, a, e) {
  const r = new FormData();
  return r.append("file", a, a.name), (await s.requestForm("POST", h(`/v1/taskbox/task/${t}/files`, b("task", t)), r, !0, (p, d) => e(d > 0 ? Math.round(p / d * 100) : 0)))?.data?.item ?? null;
}
async function W(t, a) {
  const e = new FormData();
  return e.append("file", a, a.name), (await s.requestForm("POST", h(`/v1/taskbox/task/${t}/comment-files`, b("task", t)), e, !0))?.data?.file ?? null;
}
async function X(t) {
  const e = (await s.http.get(`/v1/taskbox/task/${t}`, !0, i("task", t)))?.data?.item ?? null;
  e && !e.locked && y("task", t, k(e));
  const r = f();
  return e && r && (m(e), typeof e.content == "string") ? {
    ...e,
    content: w(e.content, r.origin)
  } : e;
}
async function Z(t) {
  const a = new FormData();
  return a.append("file", t, t.name), (await s.requestForm("POST", "/v1/taskbox/content-images", a, !0))?.data?.file ?? null;
}
async function q(t, a) {
  return (await s.http.delete(`/v1/taskbox/task/${t}/files/${encodeURIComponent(a)}`, void 0, !0, {
    ...n(),
    ...i("task", t)
  }, o))?.data?.item ?? null;
}
async function tt(t) {
  return (await s.http.post(`/v1/taskbox/task/${t}/duplicate`, {}, !0, {
    ...n(),
    ...i("task", t)
  }, o))?.data?.item ?? null;
}
async function at(t, a) {
  return (await s.http.post(`/v1/taskbox/task/${t}/return`, {
    reason: a
  }, !0, {
    ...n(),
    ...i("task", t)
  }, o))?.data?.item ?? null;
}
async function et(t) {
  return (await s.http.post(`/v1/taskbox/task/${t}/review-done`, {}, !0, {
    ...n(),
    ...i("task", t)
  }, o))?.data?.item ?? null;
}
async function st(t) {
  return (await s.http.post(`/v1/taskbox/task/${t}/to-post`, {}, !0, {
    ...n(),
    ...i("task", t)
  }, o))?.data?.item ?? null;
}
async function nt(t) {
  return (await s.http.post(`/v1/taskbox/task/${t}/ack`, {}, !0, {
    ...n(),
    ...i("task", t)
  }, o))?.data?.item ?? null;
}
async function ot(t) {
  return (await s.http.post(`/v1/taskbox/task/${t}/claim`, {}, !0, {
    ...n(),
    ...i("task", t)
  }, o))?.data?.item ?? null;
}
async function rt(t, a, e = "") {
  return (await s.http.post(`/v1/taskbox/task/${t}/bug-verify`, {
    approved: a,
    note: e
  }, !0, {
    ...n(),
    ...i("task", t)
  }, o))?.data?.item ?? null;
}
async function it(t) {
  await s.http.post(`/v1/taskbox/task/${t}/read`, {}, !0, {
    ...n(),
    ...i("task", t)
  }, o);
}
async function ct(t) {
  return (await s.http.get(`/v1/taskbox/task/${t}/audit`, !0, i("task", t)))?.data?.items ?? [];
}
async function pt(t) {
  return (await s.http.post(`/v1/taskbox/task/${t}/request-confirm`, {}, !0, {
    ...n(),
    ...i("task", t)
  }, o))?.data?.item ?? null;
}
async function ut(t, a, e) {
  const c = (await s.http.post(`/v1/taskbox/task/${t}/comments`, {
    text: a,
    ...(e && e.length > 0 ? {
      attachments: e
    } : {})
  }, !0, {
    ...n(),
    ...i("task", t)
  }, o))?.data?.item ?? null;
  return c && f() && m(c), c;
}
async function lt(t, a, e, r) {
  await s.http.patch(`/v1/taskbox/task/${t}/comments`, {
    index: a,
    text: e,
    ...(r ? {
      attachments: r
    } : {})
  }, !0, {
    ...n(),
    ...i("task", t)
  }, o);
}
async function kt(t, a) {
  await s.http.post(`/v1/taskbox/task/${t}/comments/delete`, {
    index: a
  }, !0, {
    ...n(),
    ...i("task", t)
  }, o);
}
async function dt(t, a, e) {
  await s.http.post(`/v1/taskbox/task/${t}/relations`, {
    target_seq: a,
    type: e
  }, !0, {
    ...n(),
    ...i("task", t)
  }, o);
}
async function ft(t, a, e) {
  await s.http.post(`/v1/taskbox/task/${t}/relations/delete`, {
    target_seq: a,
    type: e
  }, !0, {
    ...n(),
    ...i("task", t)
  }, o);
}
async function mt(t) {
  t.length !== 0 && (await s.http.post("/v1/taskbox/reorder", {
    items: t
  }, !0, n(), o));
}
async function ht(t, a) {
  const e = await s.http.post("/v1/taskbox/group", {
    name: t,
    icon: a
  }, !0, n(), o);
  return Number(e?.data?.seq) || 0;
}
async function bt(t, a) {
  await s.http.patch(`/v1/taskbox/group/${t}`, a, !0, n(), o);
}
async function vt(t) {
  await s.http.delete(`/v1/taskbox/group/${t}`, void 0, !0, n(), o);
}
async function yt(t) {
  t.length !== 0 && (await s.http.post("/v1/taskbox/group/reorder", {
    seqs: t
  }, !0, n(), o));
}
async function wt(t, a) {
  const e = await s.http.post("/v1/taskbox/status", {
    name: t,
    color: a
  }, !0, n(), o);
  return Number(e?.data?.seq) || 0;
}
async function xt(t, a, e) {
  return (await s.http.post(`/v1/taskbox/task/${t}/comments/reaction`, {
    index: a,
    kind: e
  }, !0, {
    ...n(),
    ...i("task", t)
  }, o))?.data?.item ?? null;
}
async function At(t, a) {
  const e = await s.http.post(`/v1/taskbox/task/${t}/unlock`, a, !0, void 0, o),
    r = e?.data?.item,
    c = String(e?.data?.unlock_token ?? "");
  if (e?.ok === !1 || !r || !c) throw new Error(e?.message || x("taskbox.postUnlockFailed"));
  return v("task", t, c, k(r)), r;
}
export { et as A, at as B, nt as C, dt as D, l as E, q as F, V as G, xt as H, kt as I, W as J, lt as K, ut as L, wt as M, tt as N, Y as O, Q as P, J as Q, bt as R, vt as S, yt as T, ht as U, B as V, ft as W, C as X, At as Y, H as Z, j as a, $ as b, K as c, st as d, pt as e, X as f, ct as g, D as h, S as i, I as j, E as k, L as l, it as m, R as n, U as o, z as p, G as q, mt as r, O as s, P as t, Z as u, F as v, M as w, N as x, rt as y, ot as z };