import { r as k, j as i } from "./react-CjxcGQav.js";
import { B as b } from "./Bookmark-D9hRs62u.js";
import { B as p } from "./BookmarkBorder-D_zgRRjF.js";
import { bM as u, bO as x, bT as B, bv as h, bH as w, bI as g } from "../js.d/main-Cm9wS5wt.js";
async function S(o, t = "") {
  const a = t.trim() ? `&q=${encodeURIComponent(t.trim())}` : "",
    e = await u.http.get(`/v1/taskbox/bookmarks?page=${o}${a}`, !0);
  return {
    items: e?.data?.items ?? [],
    hasMore: !!e?.data?.has_more
  };
}
async function T() {
  return (await u.http.get("/v1/taskbox/bookmarks/seqs", !0))?.data?.seqs ?? [];
}
async function v(o) {
  const t = await u.http.post("/v1/taskbox/bookmarks/toggle", {
    task_seq: o
  }, !0);
  if (!t || t.ok === !1) throw new Error(t?.error || "bookmark");
  return !!t?.data?.bookmarked;
}
async function _(o) {
  const t = o > 0 ? `?workspace_seq=${o}` : "";
  return (await u.http.get(`/v1/taskbox/bookmarks/tasks${t}`, !0))?.data?.items ?? [];
}
let s = new Set(),
  l = null;
const n = new Set(),
  c = () => n.forEach(o => o());
function m() {
  l || (l = T().then(o => {
    s = new Set(o), c();
  }).catch(() => {
    l = null;
  }));
}
function E(o) {
  return k.useEffect(m, []), k.useSyncExternalStore(t => (n.add(t), () => n.delete(t)), () => s.has(o));
}
function C() {
  return k.useEffect(m, []), k.useSyncExternalStore(o => (n.add(o), () => n.delete(o)), () => s);
}
async function y(o) {
  const t = s.has(o),
    a = new Set(s);
  t ? a.delete(o) : a.add(o), s = a, c();
  try {
    const e = await v(o);
    if (e !== !t) {
      const r = new Set(s);
      e ? r.add(o) : r.delete(o), s = r, c();
    }
    return e;
  } catch {
    const e = new Set(s);
    return t ? e.add(o) : e.delete(o), s = e, c(), x(B("taskbox.bookmarkFailed")), t;
  }
}
function M({
  taskSeq: o,
  size: t = 20,
  color: a = "#6b7280"
}) {
  const e = h(),
    r = E(o),
    d = e(r ? "taskbox.unbookmark" : "taskbox.bookmark");
  return o ? i.jsx(w, {
    title: d,
    arrow: !0,
    disableInteractive: !0,
    children: i.jsx(g, {
      "aria-label": d,
      "aria-pressed": r,
      onClick: f => {
        f.stopPropagation(), y(o);
      },
      sx: {
        color: r ? "#2563eb" : a,
        "&:hover": {
          color: r ? "#1d4ed8" : "#37352f"
        }
      },
      children: r ? i.jsx(b, {
        sx: {
          fontSize: t
        }
      }) : i.jsx(p, {
        sx: {
          fontSize: t
        }
      })
    })
  }) : null;
}
export { M as T, C as a, _ as b, S as l, E as u };