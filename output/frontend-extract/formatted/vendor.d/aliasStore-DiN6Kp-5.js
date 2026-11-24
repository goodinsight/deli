import { r as N } from "./react-CjxcGQav.js";
import { bM as u, bT as i } from "../js.d/main-Cm9wS5wt.js";
const x = new TextEncoder(),
  _t = new TextDecoder(),
  Se = 6e5;
function Ve() {
  return typeof crypto < "u" && !!crypto.subtle;
}
function R(e) {
  const t = e instanceof Uint8Array ? e : new Uint8Array(e);
  let s = "";
  for (let a = 0; a < t.length; a += 32768) s += String.fromCharCode(...t.subarray(a, a + 32768));
  return btoa(s);
}
function $(e) {
  const t = atob(e),
    s = new Uint8Array(t.length);
  for (let a = 0; a < t.length; a++) s[a] = t.charCodeAt(a);
  return s;
}
function C(e) {
  return crypto.getRandomValues(new Uint8Array(e));
}
async function We(e, t, s) {
  const a = await crypto.subtle.importKey("raw", x.encode(e), "PBKDF2", !1, ["deriveKey"]);
  return crypto.subtle.deriveKey({
    name: "PBKDF2",
    hash: "SHA-256",
    salt: t,
    iterations: s
  }, a, {
    name: "AES-GCM",
    length: 256
  }, !1, ["encrypt", "decrypt"]);
}
async function Je(e, t, s) {
  const a = C(16),
    n = C(12),
    o = await We(t, a, Se),
    r = await crypto.subtle.encrypt({
      name: "AES-GCM",
      iv: n,
      additionalData: x.encode(s)
    }, o, e);
  return {
    wrapped_key: R(r),
    wrap_iv: R(n),
    kdf_salt: R(a),
    kdf_iter: Se
  };
}
async function wt(e, t, s) {
  const a = await We(t, $(e.kdf_salt), e.kdf_iter),
    n = await crypto.subtle.decrypt({
      name: "AES-GCM",
      iv: $(e.wrap_iv),
      additionalData: x.encode(s)
    }, a, $(e.wrapped_key));
  return new Uint8Array(n);
}
async function vt(e, t, s) {
  const a = C(12),
    n = await crypto.subtle.encrypt({
      name: "AES-GCM",
      iv: a,
      additionalData: x.encode(s)
    }, await L(t), e);
  return {
    wrapped_key: R(n),
    wrap_iv: R(a)
  };
}
async function gt(e, t, s) {
  const a = await crypto.subtle.decrypt({
    name: "AES-GCM",
    iv: $(e.wrap_iv),
    additionalData: x.encode(s)
  }, await L(t), $(e.wrapped_key));
  return new Uint8Array(a);
}
function L(e) {
  return crypto.subtle.importKey("raw", e, "AES-GCM", !1, ["encrypt", "decrypt"]);
}
async function kt(e, t, s) {
  const a = C(12),
    n = await crypto.subtle.encrypt({
      name: "AES-GCM",
      iv: a,
      additionalData: x.encode(s)
    }, e, x.encode(t));
  return {
    iv: R(a),
    ct: R(n)
  };
}
async function bt(e, t, s, a) {
  const n = await crypto.subtle.decrypt({
    name: "AES-GCM",
    iv: $(t),
    additionalData: x.encode(a)
  }, e, $(s));
  return _t.decode(n);
}
async function As(e) {
  const t = C(32),
    s = C(12);
  return {
    sealed: await crypto.subtle.encrypt({
      name: "AES-GCM",
      iv: s
    }, await L(t), e),
    key: R(t),
    iv: R(s)
  };
}
async function Et(e, t, s) {
  return crypto.subtle.decrypt({
    name: "AES-GCM",
    iv: $(s)
  }, await L($(t)), e);
}
function Rt() {
  return crypto.subtle.generateKey({
    name: "ECDH",
    namedCurve: "P-256"
  }, !1, ["deriveBits"]);
}
async function Mt(e) {
  return R(await crypto.subtle.exportKey("raw", e));
}
async function Xe(e, t, s) {
  const a = await crypto.subtle.importKey("raw", $(t), {
      name: "ECDH",
      namedCurve: "P-256"
    }, !1, []),
    n = await crypto.subtle.deriveBits({
      name: "ECDH",
      public: a
    }, e, 256),
    o = await crypto.subtle.importKey("raw", n, "HKDF", !1, ["deriveKey"]);
  return crypto.subtle.deriveKey({
    name: "HKDF",
    hash: "SHA-256",
    salt: new Uint8Array(0),
    info: x.encode(s)
  }, o, {
    name: "AES-GCM",
    length: 256
  }, !1, ["encrypt", "decrypt"]);
}
async function $t(e, t, s, a) {
  const n = C(12),
    o = await Xe(t, s, a),
    r = await crypto.subtle.encrypt({
      name: "AES-GCM",
      iv: n,
      additionalData: x.encode(a)
    }, o, e);
  return {
    wrapped_key: R(r),
    wrap_iv: R(n)
  };
}
async function At(e, t, s, a) {
  const n = await Xe(t, s, a),
    o = await crypto.subtle.decrypt({
      name: "AES-GCM",
      iv: $(e.wrap_iv),
      additionalData: x.encode(a)
    }, n, $(e.wrapped_key));
  return new Uint8Array(o);
}
const G = "/v1/chat";
function H(e, t) {
  if (!e || e.ok === !1) throw new Error(e?.message || t);
  return e.data;
}
const P = {
    putDevice: async (e, t, s) => {
      const a = await u.http.put(`${G}/e2e/device`, {
        device_id: e,
        public_key: t,
        label: s
      });
      H(a, i("chat.deviceKeySaveFailed"));
    },
    getDeviceKeys: async (e, t) => {
      const s = await u.http.get(`${G}/rooms/${e}/device-keys?device_id=${encodeURIComponent(t)}`),
        a = H(s, i("chat.roomKeysLoadFailed"));
      return {
        epoch: Number(a?.epoch ?? 0) || 0,
        device_seq: Number(a?.device_seq ?? 0) || 0,
        envelopes: Array.isArray(a?.envelopes) ? a.envelopes : [],
        devices: Array.isArray(a?.devices) ? a.devices : []
      };
    },
    postDeviceKeys: async (e, t, s, a) => {
      const n = await u.http.post(`${G}/rooms/${e}/device-keys`, {
        device_id: t,
        epoch: s,
        envelopes: a
      });
      H(n, i("chat.roomKeysSaveFailed"));
    },
    getRoomSecret: async e => {
      const t = await u.http.get(`${G}/rooms/${e}/secret`),
        s = H(t, i("chat.roomKeyLoadFailed"));
      return {
        mode: s?.mode === "password" ? "password" : "device",
        epoch: Number(s?.epoch ?? 0) || 0,
        rows: Array.isArray(s?.rows) ? s.rows : []
      };
    },
    putRoomSecret: async (e, t, s, a) => {
      const n = await u.http.put(`${G}/rooms/${e}/secret`, {
        epoch: t,
        head: s,
        prev: a
      });
      H(n, i("chat.roomPasswordSaveFailed"));
    }
  },
  Ft = "taskham-chat-e2e",
  ye = "room-keys",
  Q = "device";
function xt() {
  return new Promise((e, t) => {
    const s = indexedDB.open(Ft, 3);
    s.onupgradeneeded = () => {
      const a = s.result;
      a.objectStoreNames.contains("identity") && a.deleteObjectStore("identity"), a.objectStoreNames.contains(ye) || a.createObjectStore(ye), a.objectStoreNames.contains(Q) || a.createObjectStore(Q);
    }, s.onsuccess = () => e(s.result), s.onerror = () => t(s.error);
  });
}
async function se(e, t, s) {
  try {
    const a = await xt();
    return await new Promise((n, o) => {
      const r = s(a.transaction(e, t).objectStore(e));
      r.onsuccess = () => n(r.result), r.onerror = () => o(r.error);
    });
  } catch {
    return;
  }
}
let Qe = null;
function Fs(e) {
  Qe = e ? new Map(e.map(t => [String(t.device_id ?? ""), String(t.public_key ?? "")])) : null;
}
function Ct(e, t) {
  return Qe?.get(e) === t;
}
const me = new Map(),
  pe = new Map(),
  Nt = e => `account:${e}`;
function Dt() {
  const e = navigator.userAgent,
    t = /Android/.test(e) ? "Android" : /iPhone|iPad/.test(e) ? "iOS" : /Windows/.test(e) ? "Windows" : /Mac OS X/.test(e) ? "macOS" : /Linux/.test(e) ? "Linux" : "",
    s = /Edg\//.test(e) ? "Edge" : /Whale\//.test(e) ? "Whale" : /Chrome\//.test(e) ? "Chrome" : /Firefox\//.test(e) ? "Firefox" : /Safari\//.test(e) ? "Safari" : "";
  return [t, s].filter(Boolean).join(" · ");
}
async function Pt(e) {
  const t = Nt(e),
    s = await se(Q, "readonly", r => r.get(t));
  if (s?.deviceId && s.privateKey) return s;
  const a = await Rt(),
    n = {
      deviceId: R(C(18)).replace(/\+/g, "-").replace(/\//g, "_"),
      privateKey: a.privateKey,
      publicKey: await Mt(a.publicKey)
    };
  await se(Q, "readwrite", r => r.put(n, t));
  const o = await se(Q, "readonly", r => r.get(t));
  return o?.deviceId && o.privateKey ? o : n;
}
function Ye(e) {
  let t = me.get(e);
  return t || (t = Pt(e), me.set(e, t), t.catch(() => me.delete(e))), t;
}
function Ze(e) {
  let t = pe.get(e);
  return t || (t = Ye(e).then(s => Ct(s.deviceId, s.publicKey) ? void 0 : P.putDevice(s.deviceId, s.publicKey, Dt())), pe.set(e, t), t.catch(() => pe.delete(e))), t;
}
const xs = 8,
  ie = new Set(),
  D = new Map(),
  ae = new Map(),
  _e = new Set(),
  we = new Set();
let S = 0,
  ve = 0;
function et(e, t) {
  const s = D.get(e)?.status;
  D.set(e, t), ve += 1, _e.forEach(a => a()), t.status === "ready" && s !== "ready" && we.forEach(a => a(e));
}
function qt(e) {
  if (e !== S && (S = e, D.clear(), !(!e || !Ve()))) {
    Ze(e).catch(() => {});
    for (const t of ie) z(t);
  }
}
function tt() {
  return S;
}
function Ot(e, t) {
  !t || ie.has(e) || (ie.add(e), S && queueMicrotask(() => {
    z(e);
  }));
}
function Ie(e) {
  return ie.has(e);
}
function U(e, t) {
  return `taskham-chat-room-key|room:${e}|epoch:${t}`;
}
function Ne(e, t) {
  return se(ye, e, t);
}
const De = e => `account:${S}|room:${e}`;
async function ge(e, t) {
  await Ne("readwrite", s => s.put({
    epoch: t.epoch,
    keys: [...t.keys]
  }, De(e)));
}
async function Tt(e) {
  if (!Ve()) return {
    status: "unsupported",
    mode: "device",
    epoch: 0,
    keys: new Map()
  };
  const t = await P.getRoomSecret(e);
  if (t.mode === "device") return Lt(e);
  const s = D.get(e);
  if (s?.status === "ready" && s.epoch === t.epoch) return s;
  const a = await Ne("readonly", o => o.get(De(e))),
    n = new Map(a?.keys ?? []);
  return {
    status: n.has(t.epoch) ? "ready" : "locked",
    mode: "password",
    epoch: t.epoch,
    keys: n
  };
}
function st(e, t, s) {
  return `${U(e, t)}|device:${s}`;
}
async function Kt(e, t, s) {
  const a = new Map();
  for (const n of t.envelopes) {
    const o = Number(n.epoch) || 0;
    try {
      a.set(o, await At(n, s.privateKey, n.from_public_key, st(e, o, t.device_seq)));
    } catch {}
  }
  return a;
}
async function Be(e, t, s, a) {
  for (const [n, o] of a) {
    const r = t.devices.filter(m => m.public_key && !m.epochs.includes(n));
    if (r.length === 0) continue;
    const l = [];
    for (const m of r) try {
      l.push({
        device_seq: m.seq,
        ...(await $t(o, s.privateKey, m.public_key, st(e, n, m.seq)))
      });
    } catch {}
    l.length > 0 && (await P.postDeviceKeys(e, s.deviceId, n, l));
  }
}
async function Lt(e) {
  const t = await Ye(S);
  await Ze(S);
  let s = await P.getDeviceKeys(e, t.deviceId);
  if (s.epoch === 0 && s.device_seq > 0) {
    const m = C(32);
    if (await Be(e, {
      ...s,
      devices: s.devices.map(p => ({
        ...p,
        epochs: []
      }))
    }, t, new Map([[1, m]])).then(() => !0, () => !1)) {
      const p = {
        status: "ready",
        mode: "device",
        epoch: 1,
        keys: new Map([[1, await L(m)]])
      };
      return await ge(e, p), p;
    }
    s = await P.getDeviceKeys(e, t.deviceId);
  }
  if (s.epoch === 0) return {
    status: "unknown",
    mode: "device",
    epoch: 0,
    keys: new Map()
  };
  const a = await Ne("readonly", m => m.get(De(e))),
    n = new Map(a?.keys ?? []),
    o = s.devices.some(m => m.public_key && !m.epochs.includes(s.epoch));
  if (n.has(s.epoch) && !o) return {
    status: "ready",
    mode: "device",
    epoch: s.epoch,
    keys: n
  };
  const r = await Kt(e, s, t);
  for (const [m, f] of r) n.has(m) || n.set(m, await L(f));
  if (!n.has(s.epoch)) return {
    status: "waiting",
    mode: "device",
    epoch: s.epoch,
    keys: n
  };
  const l = {
    status: "ready",
    mode: "device",
    epoch: s.epoch,
    keys: n
  };
  return await ge(e, l), o && r.size > 0 && Be(e, s, t, r).catch(() => {}), l;
}
function z(e, t = !1) {
  const s = D.get(e);
  if (!t && s && s.status !== "unknown") return Promise.resolve(s);
  const a = ae.get(e);
  if (a) return a;
  const n = Tt(e).then(o => (et(e, o), o)).catch(() => s ?? {
    status: "unknown",
    mode: "device",
    epoch: 0,
    keys: new Map()
  }).finally(() => ae.delete(e));
  return ae.set(e, n), n;
}
async function at(e, t, s) {
  const a = new Map(t.rows.map(r => [Number(r.epoch), r])),
    n = a.get(t.epoch);
  if (!n) throw new Error(i("chat.roomKeyNotFound"));
  const o = new Map();
  try {
    o.set(t.epoch, await wt(n, s, U(e, t.epoch)));
  } catch {
    throw new Error(i("chat.wrongRoomPassword"));
  }
  for (let r = t.epoch - 1; r >= 1; r--) {
    const l = a.get(r),
      m = o.get(r + 1);
    if (!l || !m) break;
    try {
      o.set(r, await gt(l, m, U(e, r)));
    } catch {
      break;
    }
  }
  return o;
}
async function Pe(e, t, s) {
  const a = new Map(D.get(e)?.keys ?? []);
  for (const [o, r] of s) a.set(o, await L(r));
  const n = {
    status: "ready",
    mode: "password",
    epoch: t,
    keys: a
  };
  await ge(e, n), et(e, n);
}
async function Cs(e, t) {
  const s = C(32);
  await P.putRoomSecret(e, 1, await Je(s, t, U(e, 1))), await Pe(e, 1, new Map([[1, s]]));
}
async function Ns(e, t) {
  const s = await P.getRoomSecret(e);
  if (s.epoch === 0) throw new Error(i("chat.roomPasswordNotSet"));
  await Pe(e, s.epoch, await at(e, s, t));
}
async function Ds(e, t, s) {
  const a = await P.getRoomSecret(e);
  if (a.epoch === 0) throw new Error(i("chat.roomPasswordNotSet"));
  const n = await at(e, a, t).catch(() => {
      throw new Error(i("chat.wrongCurrentRoomPassword"));
    }),
    o = n.get(a.epoch),
    r = a.epoch + 1,
    l = C(32);
  await P.putRoomSecret(e, r, await Je(l, s, U(e, r)), await vt(o, l, U(e, a.epoch))), n.set(r, l), await Pe(e, r, n);
}
async function St(e, t) {
  return (await z(e)).keys.get(t) ?? null;
}
async function It(e, t = !1) {
  const s = await z(e, t),
    a = s.status === "ready" ? s.keys.get(s.epoch) : void 0;
  if (!a) throw s.mode === "device" ? new Error(i("chat.roomKeyPendingAlert")) : new Error(s.status === "unset" ? i("chat.setRoomPasswordFirst") : i("chat.enterRoomPasswordToSend"));
  return {
    epoch: s.epoch,
    key: a
  };
}
function Bt(e) {
  return we.add(e), () => we.delete(e);
}
function Ut(e) {
  return _e.add(e), () => _e.delete(e);
}
function zt(e, t) {
  if (N.useSyncExternalStore(Ut, () => ve, () => ve), !t || e <= 0) return "unknown";
  const s = D.get(e);
  return !s && !ae.has(e) && z(e), s?.status ?? "unknown";
}
function Gt(e) {
  return D.get(e)?.status ?? "unknown";
}
function Ps(e, t) {
  zt(e, t);
  const s = D.get(e);
  return !!(t && s && s.status !== "unknown" && s.mode === "password");
}
function qs(e) {
  const t = D.get(e);
  return !!(t && t.status !== "unknown" && t.mode === "password");
}
let nt = null;
function Os(e) {
  nt = e;
}
const Ht = "taskham:chat-room-close-request";
function Ts(e) {
  window.dispatchEvent(new CustomEvent(Ht, {
    detail: {
      roomSeq: e
    }
  }));
}
function Ks(e, t = !1) {
  nt?.(e, t);
}
const jt = 30 * 1024 * 1024,
  Ls = "data:,",
  I = new Map(),
  ke = new Set(),
  be = [];
let fe = 0;
function Vt(e) {
  return ke.add(e), () => ke.delete(e);
}
function ot(e) {
  return I.has(e);
}
function Wt(e) {
  return I.get(e)?.url ?? "";
}
function Jt(e) {
  const t = I.get(e);
  return t ? {
    key: t.key,
    iv: t.iv,
    name: t.name,
    mime: t.mime
  } : null;
}
function rt() {
  for (; fe < 2 && be.length > 0;) {
    const e = be.shift();
    fe += 1, it(e).catch(() => {}).finally(() => {
      fe -= 1, rt();
    });
  }
}
function Xt(e, t, s = "") {
  !e || I.has(e) || (I.set(e, {
    ...t,
    url: s || void 0
  }), !s && t.size <= jt && (be.push(e), rt()));
}
function it(e) {
  const t = I.get(e);
  return t ? t.url ? Promise.resolve(t.url) : (t.pending || (t.pending = (async () => {
    const s = await fetch(`/api/v1/files/${e}`, {
      credentials: "include"
    });
    if (!s.ok) throw new Error(i("chat.attachDownloadFailed"));
    const a = await Et(await s.arrayBuffer(), t.key, t.iv),
      n = URL.createObjectURL(new Blob([a], {
        type: t.mime || "application/octet-stream"
      }));
    return t.url = n, ke.forEach(o => o(e, n)), n;
  })().finally(() => {
    t.pending = void 0;
  })), t.pending) : Promise.reject(new Error(i("chat.attachNotFound")));
}
async function Qt(e) {
  const t = I.get(e);
  if (!t) throw new Error(i("chat.attachNotFound"));
  const s = await (await fetch(await it(e))).blob();
  return new File([s], t.name || i("chat.attachment"), {
    type: t.mime || "application/octet-stream"
  });
}
const Ue = () => i("chat.lockedMessage");
function ct(e, t) {
  return `room:${e}|from:${t}`;
}
async function Ee(e, t, s, a = !1) {
  const {
      epoch: n,
      key: o
    } = await It(e, a),
    {
      iv: r,
      ct: l
    } = await kt(o, JSON.stringify(s), ct(e, t));
  return {
    cipher: JSON.stringify({
      v: 1,
      e: n,
      iv: r,
      ct: l
    }),
    epoch: n
  };
}
function dt(e) {
  const t = e.attachment_uuid ? Jt(e.attachment_uuid) : null;
  return {
    d: e.description,
    rn: e.reply_to_worker_name || void 0,
    rd: e.reply_to_description || void 0,
    an: e.attachment_name || void 0,
    am: e.attachment_mime_type || void 0,
    ak: t?.key,
    ai: t?.iv
  };
}
async function Yt(e, t, s) {
  const a = tt();
  if (!a) throw new Error(i("chat.loginCheckFailed"));
  const n = dt(t),
    o = {
      reply_to_seq: t.reply_to_seq,
      attachment_uuid: t.attachment_uuid,
      attachment_size: t.attachment_size,
      album_key: t.album_key,
      album_index: t.album_index,
      album_total: t.album_total
    },
    r = await Ee(e, a, n);
  try {
    return await s({
      cipher: r.cipher,
      ...o
    });
  } catch (l) {
    const m = await Ee(e, a, n, !0);
    if (m.epoch === r.epoch) throw l;
    return s({
      cipher: m.cipher,
      ...o
    });
  }
}
async function Zt(e, t) {
  const s = tt();
  if (!s) throw new Error(i("chat.loginCheckFailed"));
  const a = dt({
    description: t,
    reply_to_worker_name: e.reply_to_worker_name,
    reply_to_description: e.reply_to_description,
    attachment_name: e.attachment_name,
    attachment_mime_type: e.attachment_mime_type,
    attachment_uuid: e.attachment_uuid
  });
  return (await Ee(e.room_seq, s, a)).cipher;
}
async function Y(e) {
  if (!e.cipher || e.deleted) return e;
  try {
    const t = JSON.parse(e.cipher),
      s = await St(e.room_seq, Number(t.e) || 0);
    if (!s) return {
      ...e,
      locked: !0,
      description: Ue()
    };
    const a = JSON.parse(await bt(s, String(t.iv ?? ""), String(t.ct ?? ""), ct(e.room_seq, e.account_seq))),
      n = a.am ?? "",
      o = e.attachment_uuid;
    let r = "";
    return o && a.ak && a.ai ? (Xt(o, {
      key: a.ak,
      iv: a.ai,
      name: a.an ?? "",
      mime: n,
      size: e.attachment_size
    }), n.startsWith("image/") && (r = Wt(o))) : o && n.startsWith("image/") && !ot(o) && (r = `/api/v1/files/${o}?thumb=md`), {
      ...e,
      locked: !1,
      description: a.d ?? "",
      reply_to_worker_name: a.rn ?? "",
      reply_to_description: a.rd ?? "",
      attachment_name: a.an ?? "",
      attachment_mime_type: n,
      attachment_preview_url: r
    };
  } catch {
    return {
      ...e,
      locked: !0,
      description: Ue()
    };
  }
}
function ze(e) {
  return Promise.all(e.map(Y));
}
const y = "/v1/chat";
function _(e, t) {
  if (!e || e.ok === !1) throw new Error(e?.message || t);
  return e.data;
}
function h(e) {
  const t = Number(e ?? 0);
  return Number.isFinite(t) ? t : 0;
}
function c(e) {
  return typeof e == "string" ? e : e == null ? "" : String(e);
}
function ce(e) {
  return e === !0 || e === 1 || e === "1" || e === "true";
}
function O(e) {
  const t = e ?? {};
  return {
    seq: h(t.seq),
    room_seq: h(t.room_seq),
    account_seq: h(t.account_seq),
    worker_name: c(t.worker_name),
    description: c(t.description),
    cipher: c(t.cipher),
    reply_to_seq: h(t.reply_to_seq) || null,
    reply_to_worker_name: c(t.reply_to_worker_name),
    reply_to_description: c(t.reply_to_description),
    reply_to_deleted: ce(t.reply_to_deleted),
    attachment_name: c(t.attachment_name),
    attachment_preview_url: c(t.attachment_preview_url),
    attachment_uuid: c(t.attachment_uuid),
    attachment_mime_type: c(t.attachment_mime_type),
    attachment_size: h(t.attachment_size),
    attachment_expired: c(t.attachment_expired) === "hidden" ? "hidden" : c(t.attachment_expired) === "gone" ? "gone" : "",
    album_key: c(t.album_key),
    album_index: h(t.album_index),
    album_total: h(t.album_total),
    transcript: c(t.transcript),
    transcript_state: c(t.transcript_state),
    edit_count: h(t.edit_count),
    deleted: ce(t.deleted),
    kind: ["system", "call", "call_summary", "ai_summary"].find(s => s === c(t.kind)) ?? "",
    payload: t.payload && typeof t.payload == "object" && !Array.isArray(t.payload) ? t.payload : void 0,
    created_time: c(t.created_time),
    updated_time: c(t.updated_time)
  };
}
function T(e) {
  const t = e ?? {};
  Ot(h(t.seq), ce(t.secret));
  const s = Array.isArray(t.peers) ? t.peers : [];
  return {
    seq: h(t.seq),
    org_seq: h(t.org_seq),
    kind: c(t.kind) === "group" ? "group" : "direct",
    name: c(t.name),
    avatar: c(t.avatar),
    peers: s.map(a => {
      const n = a ?? {};
      return {
        account_seq: h(n.account_seq),
        name: c(n.name),
        avatar: c(n.avatar),
        last_read_seq: h(n.last_read_seq),
        position: typeof n.position == "string" ? n.position : ""
      };
    }),
    last_message_seq: h(t.last_message_seq),
    last_message_text: c(t.last_message_text),
    last_message_time: c(t.last_message_time),
    last_read_seq: h(t.last_read_seq),
    unread: h(t.unread),
    muted: t.muted === !0,
    bg_color: c(t.bg_color),
    bg_pattern: c(t.bg_pattern),
    notice_text: c(t.notice_text),
    notice_by: h(t.notice_by),
    notice_name: c(t.notice_name),
    notice_time: c(t.notice_time),
    secret: ce(t.secret)
  };
}
function Ss(e) {
  const t = n => {
      const o = n?.items;
      return Array.isArray(o) ? o : null;
    },
    s = t(e.rooms),
    a = t(e.aliases);
  return {
    rooms: s ? s.map(T) : null,
    aliases: a ? a.map(n => {
      const o = n ?? {};
      return {
        account_seq: h(o.account_seq),
        alias: c(o.alias)
      };
    }) : null
  };
}
const b = {
  listRooms: async () => {
    const e = await u.http.get(`${y}/rooms`);
    return (_(e, i("chat.roomListFailed")).items ?? []).map(T);
  },
  roomBootstrap: async e => {
    const t = await u.http.get(`${y}/rooms/${e}/bootstrap`),
      s = _(t, i("chat.roomLoadFailed")),
      a = m => {
        const f = m?.items;
        return Array.isArray(f) ? f : null;
      },
      n = a(s.rooms),
      o = a(s.messages),
      r = a(s.reactions),
      l = a(s.aliases);
    return {
      rooms: n ? n.map(T) : null,
      messages: o ? {
        items: await ze(o.map(O)),
        hasMore: s.messages.has_more === !0
      } : null,
      reactions: r ? r.map(m => {
        const f = m ?? {};
        return {
          message_seq: h(f.message_seq),
          account_seq: h(f.account_seq),
          kind: c(f.kind)
        };
      }) : null,
      aliases: l ? l.map(m => {
        const f = m ?? {};
        return {
          account_seq: h(f.account_seq),
          alias: c(f.alias)
        };
      }) : null
    };
  },
  getRoom: async e => {
    const t = await u.http.get(`${y}/rooms/${e}`);
    return T(_(t, i("chat.roomLoadFailed")));
  },
  openDirect: async (e, t = !1) => {
    const s = await u.http.post(`${y}/rooms/direct`, {
      account_seq: e,
      ...(t ? {
        secret: !0
      } : {})
    });
    return T(_(s, i("chat.openRoomFailed")));
  },
  createGroup: async (e, t = !1) => {
    const s = await u.http.post(`${y}/rooms/group`, {
      account_seqs: e,
      ...(t ? {
        secret: !0
      } : {})
    });
    return T(_(s, i("chat.createRoomFailed")));
  },
  markRead: async (e, t = 0) => {
    const s = await u.http.post(`${y}/rooms/${e}/read`, {
      last_read_seq: t
    });
    _(s, i("chat.readSaveFailed"));
  },
  invite: async (e, t) => {
    const s = await u.http.post(`${y}/rooms/${e}/invite`, {
      account_seqs: t
    });
    return T(_(s, i("chat.inviteFailed")));
  },
  leave: async e => {
    const t = await u.http.post(`${y}/rooms/${e}/leave`, {});
    _(t, i("chat.leaveFailed"));
  },
  buildTaskDraft: async (e, t) => {
    const s = await u.http.post(`${y}/rooms/${e}/task-draft`, {
        kind: t
      }),
      a = _(s, i("chat.draftFailed")) ?? {};
    return {
      title: c(a.title),
      description: c(a.description),
      due_date: c(a.due_date),
      event_date: c(a.event_date),
      event_time: c(a.event_time),
      last_message_seq: h(a.last_message_seq),
      source_count: h(a.source_count)
    };
  },
  previewRoomSummary: async (e, t) => {
    const s = await u.http.post(`${y}/rooms/${e}/summary/preview`, {
        lang: t
      }),
      a = _(s, i("chat.summarizeFailed")) ?? {},
      n = a.draft ?? null;
    return a.created !== !0 || !n ? {
      draft: null
    } : {
      draft: {
        draft_id: c(n.draft_id),
        description: c(n.description),
        count: h(n.count),
        from_time: c(n.from_time),
        to_time: c(n.to_time)
      }
    };
  },
  commitRoomSummary: async (e, t) => {
    const s = await u.http.post(`${y}/rooms/${e}/summary/commit`, {
        draft_id: t
      }),
      a = _(s, i("chat.summarizeFailed")) ?? {};
    return a.message ? O(a.message) : null;
  },
  commitTaskPoint: async (e, t) => {
    const s = await u.http.post(`${y}/rooms/${e}/task-draft`, {
      commit: !0,
      last_message_seq: t
    });
    _(s, i("chat.markSaveFailed"));
  },
  listReactions: async e => {
    const t = await u.http.get(`${y}/rooms/${e}/reactions`),
      s = _(t, i("chat.reactionsLoadFailed"));
    return (Array.isArray(s?.items) ? s.items : []).map(n => {
      const o = n ?? {};
      return {
        message_seq: h(o.message_seq),
        account_seq: h(o.account_seq),
        kind: c(o.kind)
      };
    });
  },
  toggleReaction: async (e, t, s) => {
    const a = await u.http.post(`${y}/messages/${t}/reactions`, {
      kind: s,
      room_seq: e
    });
    _(a, i("chat.reactionSaveFailed"));
  },
  setNotice: async (e, t) => {
    const s = await u.http.post(`${y}/rooms/${e}/notice`, {
      text: t
    });
    _(s, i("chat.noticeSaveFailed"));
  },
  setMuted: async (e, t) => {
    const s = await u.http.post(`${y}/rooms/${e}/mute`, {
      muted: t
    });
    _(s, i("chat.notifySaveFailed"));
  },
  renameRoom: async (e, t) => {
    const s = await u.http.post(`${y}/rooms/${e}/name`, {
      name: t
    });
    _(s, i("chat.roomNameSaveFailed"));
  },
  setRoomAvatar: async (e, t) => {
    const s = await u.http.post(`${y}/rooms/${e}/avatar`, {
        image: t
      }),
      a = _(s, i("chat.photoChangeFailed"));
    return c(a?.avatar);
  },
  setBackground: async (e, t) => {
    const s = await u.http.post(`${y}/rooms/${e}/background`, t);
    _(s, i("chat.backgroundSaveFailed"));
  },
  translateMessages: async (e, t, s) => {
    const a = await u.http.post(`${y}/rooms/${e}/translate`, {
        target: t,
        items: s
      }),
      n = _(a, i("chat.translateFailed"));
    return (Array.isArray(n?.items) ? n.items : []).map(r => {
      const l = r ?? {};
      return {
        seq: h(l.seq),
        text: c(l.text),
        source: c(l.source),
        same: l.same === !0,
        limited: l.limited === !0,
        limitReason: c(l.limit_reason)
      };
    });
  },
  listAliases: async () => {
    const e = await u.http.get(`${y}/aliases`),
      t = _(e, i("chat.aliasesLoadFailed"));
    return (Array.isArray(t?.items) ? t.items : []).map(a => {
      const n = a ?? {};
      return {
        account_seq: h(n.account_seq),
        alias: c(n.alias)
      };
    });
  },
  listWorkspaceFriends: async e => {
    const t = await u.http.get(`${y}/workspace-friends?org_seq=${e}`),
      s = _(t, i("chat.workspaceFriendsLoadFailed"));
    return (Array.isArray(s?.groups) ? s.groups : []).map(n => {
      const o = n ?? {},
        r = Array.isArray(o.members) ? o.members : [];
      return {
        workspace_seq: h(o.workspace_seq),
        name: c(o.name),
        org_seq: h(o.org_seq),
        org_name: c(o.org_name),
        kind: o.kind === "guest" ? "guest" : "external",
        members: r.map(l => {
          const m = l ?? {};
          return {
            account_seq: h(m.account_seq),
            name: c(m.name),
            avatar: c(m.avatar),
            position: c(m.position)
          };
        })
      };
    });
  },
  setAlias: async (e, t) => {
    const s = await u.http.put(`${y}/aliases/${e}`, {
      alias: t
    });
    _(s, i("chat.aliasSaveFailed"));
  },
  presence: async (e, t) => {
    const s = await u.http.post(`${y}/rooms/${e}/presence`, {
      active: t
    });
    _(s, i("chat.statusSaveFailed"));
  },
  listMessages: async (e, t = 0) => {
    const s = t > 0 ? `?before=${t}` : "",
      a = await u.http.get(`${y}/rooms/${e}/messages${s}`),
      n = _(a, i("chat.messagesLoadFailed"));
    return {
      items: await ze((n.items ?? []).map(O)),
      hasMore: n.has_more === !0
    };
  },
  send: async (e, t) => {
    const s = async a => O(_(await u.http.post(`${y}/rooms/${e}/messages`, a), i("chat.messageSendFailed")));
    if (Ie(e)) return Y(await Yt(e, t, s));
    if (t.attachment_uuid && ot(t.attachment_uuid)) {
      const a = await Qt(t.attachment_uuid),
        n = await b.uploadAttachment(e, a);
      return s({
        ...t,
        attachment_uuid: n.uuid,
        attachment_preview_url: a.type.startsWith("image/") ? `/api/v1/files/${n.uuid}?thumb=md` : ""
      });
    }
    return s(t);
  },
  update: async (e, t, s) => {
    const n = (s ? Ie(s.room_seq) : !1) && s ? {
        cipher: await Zt(s, t)
      } : {
        description: t
      },
      o = await u.http.patch(`${y}/messages/${e}`, n);
    return Y(O(_(o, i("chat.messageEditFailed"))));
  },
  softDelete: async e => {
    const t = await u.http.patch(`${y}/messages/${e}/delete`, {});
    return O(_(t, i("chat.messageDeleteFailed")));
  },
  uploadVideo: async (e, t) => {
    const s = new FormData();
    s.append("file", t, t.name);
    const a = await u.requestForm("POST", `${y}/rooms/${e}/video`, s, !0),
      n = _(a, i("chat.videoUploadFailed"));
    return {
      uuid: c(n.uuid),
      name: c(n.name) || t.name,
      mime_type: c(n.mime_type) || "video/mp4",
      size: h(n.size) || t.size
    };
  },
  uploadLargeFile: async (e, t, s, a) => {
    const n = new FormData();
    n.append("file", t, s);
    const o = await u.requestForm("POST", `${y}/rooms/${e}/large-files`, n, !0, (l, m) => a(m > 0 ? Math.min(100, Math.round(l / m * 100)) : 0)),
      r = _(o, i("chat.fileUploadFailed"));
    if (!r.token) throw new Error(i("chat.fileUploadFailed"));
    return {
      token: String(r.token),
      expires_at: String(r.expires_at ?? ""),
      size: Number(r.size ?? 0) || 0
    };
  },
  largeFileTicket: async e => {
    const t = await u.http.post(`${y}/large-files/${e}/ticket`, {}),
      s = _(t, i("chat.filePrepareFailed"));
    if (!s.url) throw new Error(i("chat.filePrepareFailed"));
    return {
      url: String(s.url)
    };
  },
  uploadAttachment: async (e, t) => {
    const s = new FormData();
    s.append("file", t, t.name);
    const a = await u.requestForm("POST", `${y}/rooms/${e}/attachments`, s, !0),
      n = _(a, i("chat.attachUploadFailed"));
    return {
      uuid: c(n.uuid),
      name: c(n.name) || t.name,
      mime_type: c(n.mime_type) || t.type,
      size: h(n.size) || t.size
    };
  }
};
let B = {};
const ne = new Set(),
  Re = new Set();
function Z(e) {
  B = e, Re.forEach(t => t());
}
function es(e) {
  return Re.add(e), () => Re.delete(e);
}
function Me(e, t, s, a, n) {
  const o = {
      ...(B[e] ?? {})
    },
    r = {
      ...(o[t] ?? {})
    },
    l = new Set(r[s] ?? []);
  return n ? l.add(a) : l.delete(a), r[s] = [...l], o[t] = r, {
    ...B,
    [e]: o
  };
}
function Is(e, t) {
  if (e <= 0) return;
  const s = {};
  for (const a of t) {
    const n = s[a.message_seq] ?? (s[a.message_seq] = {});
    (n[a.kind] ?? (n[a.kind] = [])).push(a.account_seq);
  }
  ne.add(e), Z({
    ...B,
    [e]: s
  });
}
function ts(e) {
  e <= 0 || ne.has(e) || (ne.add(e), b.listReactions(e).then(t => {
    const s = {};
    for (const a of t) {
      const n = s[a.message_seq] ?? (s[a.message_seq] = {});
      (n[a.kind] ?? (n[a.kind] = [])).push(a.account_seq);
    }
    Z({
      ...B,
      [e]: s
    });
  }).catch(() => {
    ne.delete(e);
  }));
}
function ss(e, t, s, a, n) {
  e <= 0 || t <= 0 || s <= 0 || Z(Me(e, t, a, s, n));
}
async function Bs(e, t, s, a) {
  const n = (B[e]?.[t]?.[s] ?? []).includes(a);
  Z(Me(e, t, s, a, !n));
  try {
    await b.toggleReaction(e, t, s);
  } catch {
    Z(Me(e, t, s, a, n));
  }
}
function Us(e) {
  const t = N.useSyncExternalStore(es, () => B);
  return N.useEffect(() => {
    ts(e);
  }, [e]), t[e] ?? {};
}
function ut(e, t) {
  if (t && typeof t == "object") return t;
  const s = String(e ?? "").trim();
  if (!s.startsWith("{")) return null;
  try {
    const a = JSON.parse(s);
    return a && typeof a == "object" ? a : null;
  } catch {
    return null;
  }
}
function as(e) {
  const t = String(e.status ?? ""),
    s = Array.isArray(e.participants) ? e.participants.map(a => typeof a == "string" ? a : String(a?.name ?? "")).filter(Boolean) : [];
  return {
    code: String(e.code ?? ""),
    status: t === "ended" || t === "missed" || t === "declined" ? t : "started",
    video: e.video === !0 || e.video === 1 || e.video === "1",
    duration_s: Number(e.duration_s ?? e.duration ?? 0) || 0,
    participants: s,
    dnd: e.dnd === !0 || e.dnd === 1 || e.dnd === "1"
  };
}
function lt(e) {
  const t = String(e.status ?? "");
  return {
    code: String(e.code ?? ""),
    status: t === "done" || t === "failed" ? t : "summarizing",
    text: String(e.text ?? ""),
    meeting_seq: Number(e.meeting_seq ?? 0) || 0,
    discarded: e.recording_state === "discarded" || e.discarded === !0
  };
}
function zs(e, t) {
  const s = ut(e, t);
  if (!s) return "";
  const a = lt(s);
  return a.status === "done" ? a.text.trim() : "";
}
function ns(e) {
  if (e < 60) return i("videoMeeting.seconds", {
    seconds: Math.max(0, Math.round(e))
  });
  const t = Math.floor(e / 3600),
    s = Math.round(e % 3600 / 60);
  return t === 0 ? i("videoMeeting.minutes", {
    minutes: s
  }) : s > 0 ? i("videoMeeting.hoursMinutes", {
    hours: t,
    minutes: s
  }) : i("videoMeeting.hours", {
    hours: t
  });
}
function os(e, t, s, a) {
  const n = t ? "Video" : "Voice";
  return e === "started" ? i(`videoMeeting.call${n}Started`) : e === "missed" ? i(s && a ? `videoMeeting.call${n}MissedDnd` : `videoMeeting.call${n}Missed`) : e === "declined" ? i(`videoMeeting.call${n}Declined`) : i(`videoMeeting.call${n}Ended`);
}
function rs(e, t) {
  const s = ut(t);
  if (!s) return e === "call_summary" ? i("videoMeeting.callSummary") : i("videoMeeting.call");
  if (e === "call_summary") {
    const n = lt(s);
    return n.status === "done" ? i("videoMeeting.callSummaryPreview", {
      text: n.text.split(/\r?\n/)[0] ?? ""
    }).trim() : n.status === "failed" ? i("videoMeeting.callSummaryFailed") : i("videoMeeting.callSummarizing");
  }
  const a = as(s);
  return a.status !== "ended" ? os(a.status, a.video, a.dnd, !0) : i(a.video ? "videoMeeting.callVideoDuration" : "videoMeeting.callVoiceDuration", {
    duration: ns(a.duration_s)
  });
}
const is = "chat.message",
  cs = "chat.read",
  ds = "chat.reaction",
  us = "chat.notice",
  ls = "chat.room",
  ms = "chat.e2e",
  ps = "비밀 메시지";
let d = {
  rooms: [],
  roomsLoaded: !1,
  messages: {},
  activeRoomSeqs: []
};
const $e = new Set();
let j = null,
  Ge = !1;
function v(e) {
  d = e, $e.forEach(t => t());
}
function k(e) {
  return d.messages[e] ?? {
    items: [],
    hasMore: !1,
    loaded: !1,
    loading: !1
  };
}
function M(e, t) {
  v({
    ...d,
    messages: {
      ...d.messages,
      [e]: {
        ...k(e),
        ...t
      }
    }
  });
}
function q(e, t) {
  const s = t.seq > 0 ? e.findIndex(a => a.seq === t.seq) : -1;
  if (s >= 0) {
    const a = [...e];
    return a[s] = {
      ...e[s],
      ...t,
      client_key: e[s].client_key
    }, a;
  }
  if (t.client_key) {
    const a = e.findIndex(n => n.client_key === t.client_key);
    if (a >= 0) {
      const n = [...e];
      return n[a] = {
        ...t
      }, n;
    }
  }
  return [...e, t];
}
const oe = new Map();
function qe(e) {
  if (oe.size === 0) return e;
  const t = [];
  for (const [s, a] of oe) e.some(n => n.seq === s) ? oe.delete(s) : t.push(a);
  return t.length > 0 ? [...t, ...e] : e;
}
const he = new Map();
function Gs(e) {
  if (d.rooms.some(a => a.seq === e)) return Promise.resolve(!0);
  const t = he.get(e);
  if (t) return t;
  const s = b.getRoom(e).then(a => (fs(a), !0)).catch(() => !1).finally(() => he.delete(e));
  return he.set(e, s), s;
}
function fs(e) {
  oe.set(e.seq, e), d.rooms.some(t => t.seq === e.seq) || v({
    ...d,
    rooms: [e, ...d.rooms]
  });
}
function ee() {
  return j || (j = b.listRooms().then(e => v({
    ...d,
    rooms: qe(e),
    roomsLoaded: !0
  })).catch(() => v({
    ...d,
    roomsLoaded: !0
  })).finally(() => {
    j = null;
  }), j);
}
function Hs(e, t, s) {
  let a = d;
  if (t && (a = {
    ...a,
    rooms: qe(t),
    roomsLoaded: !0
  }), s) {
    let n = s.items;
    for (const o of k(e).items) n = q(n, o);
    a = {
      ...a,
      messages: {
        ...a.messages,
        [e]: {
          items: n,
          hasMore: s.hasMore,
          loaded: !0,
          loading: !1
        }
      }
    };
  }
  a !== d && v(a);
}
async function hs(e) {
  if (!k(e).loading) {
    M(e, {
      loading: !0
    });
    try {
      const {
        items: s,
        hasMore: a
      } = await b.listMessages(e);
      let n = s;
      for (const o of k(e).items) n = q(n, o);
      M(e, {
        items: n,
        hasMore: a,
        loaded: !0,
        loading: !1
      });
    } catch {
      M(e, {
        loaded: !0,
        loading: !1
      });
    }
  }
}
async function js(e) {
  const t = k(e);
  if (t.loading || !t.hasMore || t.items.length === 0) return;
  const s = t.items.reduce((a, n) => n.seq > 0 && n.seq < a ? n.seq : a, Number.MAX_SAFE_INTEGER);
  M(e, {
    loading: !0
  });
  try {
    const {
        items: a,
        hasMore: n
      } = await b.listMessages(e, s),
      o = k(e).items,
      r = new Set(o.map(l => l.seq));
    M(e, {
      items: [...a.filter(l => !r.has(l.seq)), ...o],
      hasMore: n,
      loading: !1
    });
  } catch {
    M(e, {
      loading: !1
    });
  }
}
function Vs(e, t) {
  M(e, {
    items: q(k(e).items, t)
  });
}
function Ws(e, t, s) {
  const a = k(e).items;
  if (!s) {
    M(e, {
      items: a.filter(n => n.client_key !== t)
    });
    return;
  }
  M(e, {
    items: q(a, {
      ...s,
      client_key: t
    })
  }), mt(s);
}
function Js(e, t) {
  M(e, {
    items: q(k(e).items, t)
  });
}
function mt(e, t = 0) {
  const s = d.rooms.map(a => a.seq === e.room_seq ? {
    ...a,
    last_message_seq: Math.max(a.last_message_seq, e.seq),
    last_message_text: e.deleted ? "삭제된 메시지" : a.secret && !e.kind ? ps : e.kind === "call" || e.kind === "call_summary" ? rs(e.kind, e.description) : e.kind === "ai_summary" ? i("chat.aiSummaryPreview", {
      text: e.description.split(/\r?\n/)[0] ?? ""
    }) : e.description || e.attachment_name || "첨부",
    last_message_time: e.created_time || a.last_message_time,
    unread: Math.max(0, a.unread + t)
  } : a);
  s.sort((a, n) => n.last_message_time.localeCompare(a.last_message_time)), v({
    ...d,
    rooms: s
  });
}
function Oe() {
  return typeof document > "u" || document.visibilityState === "visible";
}
const ys = 30 * 1e3;
let V = null;
const K = new Set();
let He = !1;
function re(e, t) {
  e && b.presence(e, t).catch(() => {});
}
function Ae() {
  const e = new Set(Oe() ? d.activeRoomSeqs.filter(t => t > 0) : []);
  for (const t of [...K]) e.has(t) || (re(t, !1), K.delete(t));
  for (const t of e) K.has(t) || (re(t, !0), K.add(t));
  K.size > 0 ? V || (V = setInterval(() => {
    for (const t of K) re(t, !0);
  }, ys)) : V && (clearInterval(V), V = null);
}
let Fe = 0;
function xe() {
  const e = Date.now();
  if (!(e - Fe < 3e3)) {
    Fe = e, d.roomsLoaded && ee();
    for (const [t, s] of Object.entries(d.messages)) {
      const a = Number(t);
      !s.loaded || s.loading || !(a > 0) || b.listMessages(a).then(({
        items: n
      }) => {
        let o = k(a).items;
        for (const r of n) o = q(o, r);
        M(a, {
          items: o
        });
      }).catch(() => {});
    }
  }
}
function pt() {
  He || typeof document > "u" || (He = !0, document.addEventListener("visibilitychange", () => {
    if (Ae(), Oe()) {
      xe();
      for (const e of d.activeRoomSeqs) _s(e);
    }
  }), window.addEventListener("pagehide", () => {
    for (const e of K) re(e, !1);
  }));
}
const W = new Map();
function Xs(e) {
  return e > 0 ? (W.set(e, (W.get(e) ?? 0) + 1), d.activeRoomSeqs.includes(e) || v({
    ...d,
    activeRoomSeqs: [...d.activeRoomSeqs, e]
  }), pt(), Ae(), () => {
    const t = (W.get(e) ?? 1) - 1;
    if (t > 0) {
      W.set(e, t);
      return;
    }
    W.delete(e), v({
      ...d,
      activeRoomSeqs: d.activeRoomSeqs.filter(s => s !== e)
    }), Ae();
  }) : () => {};
}
function _s(e, t) {
  const s = d.rooms.find(r => r.seq === e),
    n = k(e).items.reduce((r, l) => l.seq > r ? l.seq : r, 0),
    o = Math.max(n, s?.last_message_seq ?? 0);
  s && s.unread > 0 && v({
    ...d,
    rooms: d.rooms.map(r => r.seq === e ? {
      ...r,
      unread: 0,
      last_read_seq: o
    } : r)
  }), (!s || o > s.last_read_seq || s.unread > 0) && b.markRead(e, o).catch(() => {});
}
function ws(e) {
  d.rooms.some(t => t.seq === e) || ee();
}
async function vs(e = 0) {
  const t = e > 0 ? [e] : Object.keys(d.messages).map(Number);
  for (const s of t) {
    const a = k(s).items.filter(r => r.locked);
    if (a.length === 0) continue;
    const n = await Promise.all(a.map(Y));
    let o = k(s).items;
    for (const r of n) r.locked || (o = q(o, r));
    M(s, {
      items: o
    });
  }
}
function gs(e, t) {
  const s = {
    ...d.messages
  };
  let a = !1;
  for (const [n, o] of Object.entries(d.messages)) o.items.some(r => r.attachment_uuid === e) && (a = !0, s[Number(n)] = {
    ...o,
    items: o.items.map(r => r.attachment_uuid === e ? {
      ...r,
      attachment_preview_url: r.attachment_mime_type.startsWith("image/") ? t : r.attachment_preview_url
    } : r)
  });
  a && v({
    ...d,
    messages: s
  });
}
const je = new Map();
function ft(e) {
  if (Ge) return;
  Ge = !0, qt(e), Bt(f => {
    vs(f);
  }), Vt(gs);
  const t = async (f, p) => {
      const g = O(p.message),
        w = await Y(g),
        A = w.account_seq === e,
        F = k(f),
        E = A && p.action === "created" ? F.items.find(te => !te.seq || te.seq === 0) : void 0,
        ht = q(F.items, E ? {
          ...w,
          client_key: E.client_key
        } : w);
      M(f, {
        items: ht
      });
      const Ke = p.action === "created" && !A,
        Le = d.activeRoomSeqs.includes(f) && Oe();
      mt(w, Ke && !Le ? 1 : 0), ws(f), w.kind === "system" && p.action === "created" && b.getRoom(f).then(te => {
        d.rooms.some(yt => yt.seq === f) && ks(te);
      }).catch(() => {}), Ke && Le && b.markRead(f, w.seq).catch(() => {});
    },
    s = f => {
      const p = f?.data ?? {},
        g = Number(p.room_seq ?? 0) || 0;
      if (!g || !p.message) return;
      const w = (je.get(g) ?? Promise.resolve()).then(() => t(g, p)).catch(() => {});
      je.set(g, w);
    };
  u.addRealtimeEventListener(is, s);
  let a = !1;
  u.addRealtimeStatusListener(f => {
    f.status !== "open" || f.previousStatus === "open" || (a && xe(), a = !0);
  }), pt(), typeof window < "u" && window.addEventListener("focus", () => {
    Date.now() - Fe > 3e4 && xe();
  });
  const n = f => {
    const p = Number(f?.data?.room_seq ?? 0) || 0;
    p && (f?.data?.want === !0 && Gt(p) !== "ready" || z(p, !0));
  };
  u.addRealtimeEventListener(ms, n);
  const o = f => {
    const p = f?.data ?? {},
      g = Number(p.room_seq ?? 0) || 0,
      w = Number(p.account_seq ?? 0) || 0,
      A = Number(p.last_read_seq ?? 0) || 0;
    if (!(!g || !w)) {
      if (w === e) {
        const F = d.rooms.find(E => E.seq === g);
        if (!F || A <= F.last_read_seq) return;
        A >= F.last_message_seq ? v({
          ...d,
          rooms: d.rooms.map(E => E.seq === g ? {
            ...E,
            unread: 0,
            last_read_seq: A
          } : E)
        }) : ee();
        return;
      }
      v({
        ...d,
        rooms: d.rooms.map(F => F.seq === g ? {
          ...F,
          peers: F.peers.map(E => E.account_seq === w ? {
            ...E,
            last_read_seq: Math.max(E.last_read_seq, A)
          } : E)
        } : F)
      });
    }
  };
  u.addRealtimeEventListener(cs, o);
  const r = f => {
    const p = f?.data ?? {};
    ss(Number(p.room_seq ?? 0) || 0, Number(p.message_seq ?? 0) || 0, Number(p.account_seq ?? 0) || 0, String(p.kind ?? ""), p.on === !0);
  };
  u.addRealtimeEventListener(ds, r);
  const l = f => {
    const p = f?.data ?? {},
      g = Number(p.room_seq ?? 0) || 0;
    g && v({
      ...d,
      rooms: d.rooms.map(w => w.seq === g ? {
        ...w,
        notice_text: String(p.notice_text ?? ""),
        notice_by: Number(p.notice_by ?? 0) || 0,
        notice_name: String(p.notice_name ?? ""),
        notice_time: String(p.notice_time ?? "")
      } : w)
    });
  };
  u.addRealtimeEventListener(us, l);
  const m = f => {
    const p = f?.data ?? {},
      g = Number(p.room_seq ?? 0) || 0;
    if (!g) return;
    const w = {};
    typeof p.name == "string" && (w.name = p.name), typeof p.avatar == "string" && (w.avatar = p.avatar), Object.keys(w).length && v({
      ...d,
      rooms: d.rooms.map(A => A.seq === g ? {
        ...A,
        ...w
      } : A)
    });
  };
  u.addRealtimeEventListener(ls, m), u.connectRealtime?.().catch(() => {});
}
function Te(e) {
  return $e.add(e), () => $e.delete(e);
}
let X = 0;
function Qs(e, t) {
  e && (X = e, v({
    ...d,
    rooms: qe(t),
    roomsLoaded: !0
  }));
}
function Ys(e, t) {
  const s = N.useSyncExternalStore(Te, () => d, () => d);
  return N.useEffect(() => {
    if (e > 0 && ft(e), !!t) {
      if (X && X !== t) {
        X = t, bs();
        return;
      }
      X = t, d.roomsLoaded || ee();
    }
  }, [e, t]), {
    rooms: s.rooms,
    loaded: s.roomsLoaded
  };
}
function Zs(e, t) {
  const s = N.useSyncExternalStore(Te, () => d, () => d);
  return N.useEffect(() => {
    t > 0 && ft(t), e > 0 && !k(e).loaded && hs(e);
  }, [e, t]), s.messages[e] ?? {
    items: [],
    hasMore: !1,
    loaded: !1,
    loading: !1
  };
}
function ea() {
  return N.useSyncExternalStore(Te, () => d, () => d).rooms.reduce((t, s) => t + s.unread, 0);
}
function ks(e) {
  const t = d.rooms.some(s => s.seq === e.seq);
  v({
    ...d,
    rooms: t ? d.rooms.map(s => s.seq === e.seq ? e : s) : [e, ...d.rooms]
  });
}
function ta(e) {
  const t = {
    ...d.messages
  };
  delete t[e], v({
    ...d,
    rooms: d.rooms.filter(s => s.seq !== e),
    messages: t,
    activeRoomSeqs: d.activeRoomSeqs.filter(s => s !== e)
  });
}
function bs() {
  v({
    rooms: [],
    roomsLoaded: !1,
    messages: {},
    activeRoomSeqs: []
  }), ee();
}
let de = {},
  ue = !1,
  J = null;
const Ce = new Set();
function le(e) {
  de = e, Ce.forEach(t => t());
}
function Es(e) {
  return Ce.add(e), () => Ce.delete(e);
}
function sa(e) {
  const t = {};
  for (const s of e) s.account_seq > 0 && s.alias && (t[s.account_seq] = s.alias);
  ue = !0, le(t);
}
function Rs() {
  return J || (J = b.listAliases().then(e => {
    const t = {};
    for (const s of e) s.account_seq > 0 && s.alias && (t[s.account_seq] = s.alias);
    ue = !0, le(t);
  }).catch(() => {
    ue = !0;
  }).finally(() => {
    J = null;
  }), J);
}
async function aa(e, t) {
  const s = t.trim().slice(0, 50),
    a = de,
    n = {
      ...de
    };
  s ? n[e] = s : delete n[e], le(n);
  try {
    await b.setAlias(e, s);
  } catch (o) {
    throw le(a), o;
  }
}
function na() {
  const e = N.useSyncExternalStore(Es, () => de);
  return N.useEffect(() => {
    ue || Rs();
  }, []), e;
}
export { Rs as $, ut as A, as as B, os as C, ns as D, lt as E, Js as F, zs as G, Us as H, Xs as I, _s as J, Vs as K, Ws as L, Bs as M, As as N, Xt as O, ot as P, Wt as Q, xs as R, Ls as S, Jt as T, it as U, Et as V, qs as W, z as X, Gs as Y, Is as Z, Hs as _, sa as a, Fs as b, Ys as c, na as d, Ns as e, Ds as f, Cs as g, Os as h, Ts as i, zt as j, Ps as k, Ks as l, b as m, fs as n, ks as o, Ss as p, aa as q, Gt as r, Qs as s, Zs as t, ea as u, js as v, ta as w, Ie as x, Ht as y, ee as z };