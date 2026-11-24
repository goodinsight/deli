import { x as u, N as x, m as l, O as b, P as y, S as T, Q as F, T as v, U as E, V as C } from "./aliasStore-DiN6Kp-5.js";
import { bT as c, z as k, ce as L, cf as M } from "../js.d/main-Cm9wS5wt.js";
const z = "/api";
function I(t) {
  const e = t.split(".").pop()?.toLowerCase() || "";
  return ["jpg", "jpeg", "png", "gif", "bmp", "webp", "svg"].includes(e) ? "image" : e === "pdf" ? "pdf" : ["txt", "json", "xml", "log", "md", "markdown"].includes(e) ? "text" : ["csv", "xls", "xlsx"].includes(e) ? "spreadsheet" : ["html", "htm"].includes(e) ? "html" : ["js", "jsx", "ts", "tsx", "css", "scss", "sass", "less", "php", "py", "java", "c", "cpp", "h", "hpp", "cs", "go", "rs", "rb", "swift", "kt", "scala", "sql", "sh", "bash", "bat", "ps1", "yml", "yaml", "toml", "ini", "conf"].includes(e) ? "code" : ["mp4", "avi", "mov", "wmv", "flv", "webm"].includes(e) ? "video" : ["mp3", "wav", "ogg", "m4a", "aac"].includes(e) ? "audio" : "unsupported";
}
function W(t) {
  return ["image", "pdf", "text", "spreadsheet", "html", "code", "video", "audio"].includes(I(t));
}
function j(t) {
  const e = String(t ?? "").trim();
  return e ? y(e) ? F(e) || T : `${z}/v1/files/${e}` : "";
}
async function Y(t) {
  const e = String(t ?? "").trim();
  return e && y(e) ? E(e) : j(e);
}
function Z(t) {
  const e = String(t ?? "").trim(),
    a = e ? v(e) : null;
  return a ? (E(e).then(n => {
    const i = document.createElement("a");
    i.href = n, i.download = a.name || c("chat.attachment"), i.click();
  }).catch(() => {}), !0) : !1;
}
const R = "image/png,image/jpeg,image/webp,image/gif",
  J = "image/*",
  N = ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.md,.markdown,.csv,.json,.xml,.log,.zip,.hwp,.hwpx";
function S(t) {
  return R.split(",").includes(t.type);
}
function q(t) {
  if (S(t)) return !0;
  if (!t.name.includes(".")) return !1;
  const e = `.${t.name.split(".").pop()?.toLowerCase() ?? ""}`;
  return N.split(",").includes(e);
}
const ee = "video/*",
  _ = 300;
async function te(t, e) {
  if (u(t)) throw new Error(c("chat.secretNoVideo"));
  if (e.size > _ * 1024 * 1024) throw new Error(c("chat.videoMaxMb", {
    mb: _
  }));
  const a = await l.uploadVideo(t, e);
  return {
    attachment_name: a.name,
    attachment_preview_url: "",
    attachment_uuid: a.uuid,
    attachment_mime_type: a.mime_type,
    attachment_size: a.size
  };
}
const w = 1024,
  O = .9;
async function U(t) {
  if (!["image/jpeg", "image/png", "image/webp"].includes(t.type)) return t;
  try {
    const e = await createImageBitmap(t, {
        imageOrientation: "from-image"
      }),
      a = Math.max(e.width, e.height);
    if (a <= w) return e.close(), t;
    const n = w / a,
      i = document.createElement("canvas");
    i.width = Math.round(e.width * n), i.height = Math.round(e.height * n);
    const s = i.getContext("2d");
    if (!s) return t;
    s.imageSmoothingQuality = "high", s.drawImage(e, 0, 0, i.width, i.height), e.close();
    const r = t.type === "image/png" ? "image/png" : "image/jpeg",
      m = await new Promise(o => i.toBlob(o, r, O));
    if (!m || m.size >= t.size) return t;
    const p = r === "image/jpeg" ? t.name.replace(/\.[^.]+$/, "") + ".jpg" : t.name;
    return new File([m], p || t.name, {
      type: r
    });
  } catch {
    return t;
  }
}
async function ae(t, e, a = !1) {
  const n = a ? e : await U(e);
  if (u(t)) {
    const {
        sealed: r,
        key: m,
        iv: p
      } = await x(await n.arrayBuffer()),
      o = n.type || "application/octet-stream",
      g = await l.uploadAttachment(t, new File([r], "secret.bin", {
        type: "application/octet-stream"
      })),
      f = URL.createObjectURL(n);
    return b(g.uuid, {
      key: m,
      iv: p,
      name: n.name,
      mime: o,
      size: n.size
    }, f), {
      attachment_name: n.name,
      attachment_preview_url: o.startsWith("image/") ? f : "",
      attachment_uuid: g.uuid,
      attachment_mime_type: o,
      attachment_size: n.size
    };
  }
  const i = await l.uploadAttachment(t, n),
    s = n.type || "application/octet-stream";
  return {
    attachment_name: n.name,
    attachment_preview_url: s.startsWith("image/") ? `/api/v1/files/${i.uuid}?thumb=md` : "",
    attachment_uuid: i.uuid,
    attachment_mime_type: s,
    attachment_size: n.size
  };
}
const B = 50,
  $ = 500,
  P = 200,
  ne = 3,
  ie = 100,
  D = new Set(["php", "php3", "php4", "php5", "php7", "phtml", "phar", "phps", "jsp", "jspx", "jspf", "asp", "aspx", "ashx", "asmx", "cer", "cgi", "fcgi", "htaccess", "htpasswd", "shtml"]),
  H = new Set(["exe", "msi", "bat", "cmd", "com", "scr", "pif", "cpl", "dll", "sys", "lnk", "reg", "hta", "vbs", "vbe", "js", "jse", "wsf", "wsh", "ps1", "psm1", "sh", "command", "apk", "ipa", "dmg", "pkg", "app", "deb", "rpm", "jar", "iso", "img"]),
  A = t => t.toLowerCase().split(".").slice(1).map(e => e.trim()),
  G = t => A(t).some(e => D.has(e)),
  X = t => H.has(A(t).pop() ?? ""),
  h = /^\s*\[\[file:([A-Za-z0-9_-]{20,64})\|(\d+)\|([^|\]]*)\|([^|\]]*)\|([^|\]]*)\|([^|\]]*)\]\]\s*$/,
  d = "📦 ";
function V(t, e) {
  const a = i => i.replace(/[|\]\r\n]/g, " ").trim(),
    n = `[[file:${e.token}|${e.size}|${a(e.expiresAt)}|${a(e.mime)}|${e.key}|${e.iv}]]`;
  return [t.trim(), `${d}${a(e.name)}`, n].filter(Boolean).join(`
`);
}
function se(t) {
  if (!t.includes("[[file:")) return null;
  const e = t.split(/\r?\n/),
    a = e.findIndex(s => h.test(s));
  if (a < 0) return null;
  const n = h.exec(e[a]);
  if (!n) return null;
  const i = a > 0 && e[a - 1].startsWith(d) ? a - 1 : -1;
  return {
    text: e.filter((s, r) => r !== a && r !== i).join(`
`).trim(),
    name: i >= 0 ? e[i].slice(d.length).trim() : c("chat.file"),
    token: n[1],
    size: Number(n[2]) || 0,
    expiresAt: n[3],
    mime: n[4],
    key: n[5],
    iv: n[6]
  };
}
function re(t) {
  return t.includes("[[file:") ? t.split(/\r?\n/).filter(e => !h.test(e)).join(`
`).trim() : t;
}
function ce(t, e = Date.now()) {
  const a = new Date(`${t.replace(" ", "T")}+09:00`).getTime();
  return Number.isFinite(a) && a < e;
}
function oe(t) {
  const e = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})/.exec(t);
  if (!e) return t;
  const [, a, n, i, s, r] = e.map(Number);
  return new Intl.DateTimeFormat(L(M()), {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1,
    timeZone: "UTC"
  }).format(new Date(Date.UTC(a, n - 1, i, s, r)));
}
function me(t, e) {
  return t.size > B * 1024 * 1024 || !e;
}
async function pe(t, e) {
  if (G(t.name)) return c("chat.blockedFileType");
  const a = u(e),
    n = a ? P : $;
  return t.size > n * 1024 * 1024 ? a ? c("chat.secretFileMaxMb", {
    mb: n
  }) : c("chat.fileMaxMb", {
    mb: n
  }) : X(t.name) && !(await k({
    title: c("chat.execFileTitle"),
    message: c("chat.execFileMessage", {
      name: t.name
    }),
    confirmText: c("chat.send"),
    cancelText: c("chat.cancel")
  })) ? "cancel" : "";
}
async function le(t, e, a, n) {
  const i = u(t);
  let s = e,
    r = "",
    m = "";
  if (i) {
    const o = await x(await e.arrayBuffer());
    s = new Blob([o.sealed], {
      type: "application/octet-stream"
    }), r = o.key, m = o.iv;
  }
  const p = await l.uploadLargeFile(t, s, i ? "secret.bin" : e.name, n);
  return V(a, {
    token: p.token,
    name: e.name,
    size: e.size,
    expiresAt: p.expires_at,
    mime: e.type || "application/octet-stream",
    key: r,
    iv: m
  });
}
async function ue(t) {
  const {
    url: e
  } = await l.largeFileTicket(t.token);
  if (!t.key) return {
    url: e
  };
  const a = await fetch(e);
  if (!a.ok) throw new Error(c("chat.fileDownloadFailed"));
  const n = await C(await a.arrayBuffer(), t.key, t.iv);
  return {
    blob: new Blob([n], {
      type: t.mime || "application/octet-stream"
    })
  };
}
export { w as C, ie as L, P as S, le as a, te as b, j as c, Z as d, J as e, ee as f, ne as g, R as h, _ as i, q as j, pe as k, ce as l, X as m, me as n, oe as o, ue as p, I as q, Y as r, W as s, se as t, ae as u, re as v, G as w, $ as x };