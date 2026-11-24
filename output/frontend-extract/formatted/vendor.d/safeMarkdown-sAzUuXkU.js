import { cg as g, bT as n, fv as p, bM as $, mA as T } from "../js.d/main-Cm9wS5wt.js";
const i = "/v1/meetings",
  y = "/v1/public/meeting-share",
  l = async (e, t) => p(await $.http.get(e), t),
  h = async (e, t, a) => p(await $.http.post(e, t), a),
  F = async (e, t) => p(await $.http.delete(e), t),
  u = e => ({
    expire_time: e.expire_date || "",
    password: e.password || "",
    allow_download: !!e.allow_download,
    allow_comment: e.allow_comment !== !1
  }),
  b = {
    listForMeeting: e => l(`${i}/${e}/shares`, n("meetings.shareLoadFailed")),
    listForFolder: e => l(`${i}/folders/${e}/shares`, n("meetings.shareLoadFailed")),
    createForMeeting: (e, t) => h(`${i}/${e}/shares`, u(t), n("meetings.shareCreateFailed")),
    createForFolder: (e, t) => h(`${i}/folders/${e}/shares`, u(t), n("meetings.shareCreateFailed")),
    revoke: e => F(`${i}/shares/${e}`, n("meetings.revokeFailed")),
    comments: async e => (await l(`${i}/${e}/share-comments`, n("meetings.externalCommentsFailed"))).items,
    shareToGuests: e => h(`${i}/${e}/share-to-guests`, {}, n("meetings.guestsSendFailed"))
  };
class A extends Error {
  status;
  head;
  constructor(t, a, o = null) {
    super(t), this.status = a, this.head = o;
  }
}
const L = () => new URL(g, window.location.origin).toString().replace(/\/+$/, "");
async function c(e, t, a) {
  const {
      key: o,
      ...d
    } = t,
    m = await fetch(`${L()}${e}`, {
      ...d,
      credentials: "include",
      headers: {
        Accept: "application/json",
        ...(d.body ? {
          "Content-Type": "application/json"
        } : {}),
        ...(o ? {
          "X-Share-Key": o
        } : {}),
        ...(d.headers ?? {})
      }
    });
  let s = {};
  try {
    s = await m.json();
  } catch {}
  if (!m.ok || s.ok === !1) {
    const w = m.status === 401 && s.data && typeof s.data == "object" ? s.data : null;
    throw new A(s.message || s.error || a, m.status, w);
  }
  return s.data ?? s;
}
const r = e => `${y}/${encodeURIComponent(e)}`,
  U = {
    info: (e, t = "") => c(r(e), {
      method: "GET",
      key: t
    }, n("meetings.shareLoadFailed")),
    unlock: (e, t) => c(`${r(e)}/unlock`, {
      method: "POST",
      body: JSON.stringify({
        password: t
      })
    }, n("meetings.unlockFailed")),
    meeting: async (e, t, a = "") => (await c(`${r(e)}/meetings/${t}`, {
      method: "GET",
      key: a
    }, n("meetings.loadFailed"))).meeting,
    transcript: (e, t, a = "") => c(`${r(e)}/transcript/${t}`, {
      method: "GET",
      key: a
    }, n("meetings.transcriptLoadFailed")),
    comments: async (e, t, a = "") => (await c(`${r(e)}/comments?meeting=${t}`, {
      method: "GET",
      key: a
    }, n("meetings.commentsLoadFailed"))).items,
    addComment: async (e, t, a = "") => (await c(`${r(e)}/comments`, {
      method: "POST",
      body: JSON.stringify(t),
      key: a
    }, n("meetings.commentFailed"))).item,
    recordingUrl: (e, t, a = "", o = !1) => `${g}${r(e)}/recording/${t}${o || a ? `?${[o ? "download=1" : "", a ? `key=${encodeURIComponent(a)}` : ""].filter(Boolean).join("&")}` : ""}`,
    fileUrl: (e, t, a = "") => `${g}${r(e)}/files/${encodeURIComponent(t)}${a ? `?key=${encodeURIComponent(a)}` : ""}`
  },
  S = new Set(["P", "BR", "STRONG", "B", "EM", "I", "S", "DEL", "U", "CODE", "PRE", "BLOCKQUOTE", "UL", "OL", "LI", "H1", "H2", "H3", "H4", "H5", "H6", "HR", "A", "TABLE", "THEAD", "TBODY", "TR", "TH", "TD", "INPUT"]);
function f(e) {
  for (const t of Array.from(e.children)) {
    if (!S.has(t.tagName)) {
      t.tagName === "SCRIPT" || t.tagName === "STYLE" ? t.remove() : t.replaceWith(...Array.from(t.childNodes));
      continue;
    }
    for (const a of Array.from(t.attributes)) t.tagName === "A" && a.name === "href" && /^(https?:|mailto:)/i.test(a.value.trim()) || t.tagName === "INPUT" && (a.name === "type" || a.name === "checked" || a.name === "disabled") || t.removeAttribute(a.name);
    t.tagName === "INPUT" && t.getAttribute("type") !== "checkbox" && t.remove(), t.tagName === "A" && (t.setAttribute("target", "_blank"), t.setAttribute("rel", "noopener noreferrer")), f(t);
  }
}
function k(e) {
  const a = document.implementation.createHTMLDocument("").createElement("div");
  return a.innerHTML = T(String(e ?? "")), f(a), a.innerHTML;
}
export { A as S, b as m, U as p, k as s };