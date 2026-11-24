import { j as d, r as a } from "./react-CjxcGQav.js";
import { c as ee, bT as v, lb as te, l7 as pe, l8 as ge, l3 as P, l_ as ne, l$ as we, l9 as he, la as ve, m0 as Se, bv as xe, B as re, bI as ae, k$ as Ae, L as ke, m1 as ye, fi as Re, fo as be, w as W, fp as K, ks as Ne, cP as Ee } from "../js.d/main-Cm9wS5wt.js";
import { m as Te } from "./meetingsApi-CCkjq69B.js";
import { subscribeNativeSaved as De } from "./nativeRecordingSync-CMpETFg9.js";
const Me = ee(d.jsx("path", {
    d: "M7 18h2V6H7zm4 4h2V2h-2zm-8-8h2v-4H3zm12 4h2V6h-2zm4-8v4h2v-4z"
  })),
  Ce = ee(d.jsx("path", {
    d: "M6 19h4V5H6zm8-14v14h4V5z"
  })),
  ze = ee(d.jsx("path", {
    d: "M13.05 9.79 10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62M5.69 7.1 4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9M4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89m1.61 6.74C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12"
  })),
  Le = 20,
  Ie = 1e-5,
  je = 5,
  Oe = 30,
  Pe = .012,
  Ve = 15,
  Q = s => s >= 60 ? v("meetings.minutesSeconds", {
    minutes: Math.floor(s / 60),
    seconds: s % 60
  }) : v("meetings.seconds", {
    seconds: s
  }),
  _e = [{
    mime: "audio/webm;codecs=opus",
    ext: "webm"
  }, {
    mime: "audio/webm",
    ext: "webm"
  }, {
    mime: "audio/mp4",
    ext: "m4a"
  }, {
    mime: "audio/ogg;codecs=opus",
    ext: "ogg"
  }];
function ce() {
  return typeof MediaRecorder > "u" ? null : _e.find(s => MediaRecorder.isTypeSupported(s.mime)) ?? null;
}
const Be = 32e3;
function Ue(s) {
  return s.ext === "m4a" ? {
    mimeType: s.mime
  } : {
    mimeType: s.mime,
    audioBitsPerSecond: Be
  };
}
function se() {
  try {
    const s = Number(window.sessionStorage.getItem("meeting-segment-seconds"));
    if (Number.isFinite(s) && s >= 5) return s;
  } catch {}
  return 60;
}
function oe(s) {
  const m = Math.max(0, Math.floor(s)),
    o = N => String(N).padStart(2, "0"),
    b = Math.floor(m / 3600),
    i = Math.floor(m % 3600 / 60);
  return b ? `${b}:${o(i)}:${o(m % 60)}` : `${i}:${o(m % 60)}`;
}
function qe(s) {
  const m = URL.createObjectURL(s),
    o = document.createElement("a");
  o.href = m, o.download = s.name, o.click(), window.setTimeout(() => URL.revokeObjectURL(m), 1e4);
}
function Ye(s) {
  const [m, o] = a.useState("idle"),
    [b, i] = a.useState(0),
    [N, k] = a.useState(0);
  a.useEffect(() => {
    b > 0 && k(b);
  }, [b]);
  const [q, p] = a.useState(""),
    [z, U] = a.useState(!1),
    [j, T] = a.useState(!1),
    S = a.useRef({
      waiting: !1,
      lastVoiceAt: 0
    }),
    y = a.useRef(null),
    $ = a.useRef(null),
    h = a.useRef({
      accumulated: 0,
      startedAt: 0
    }),
    V = a.useRef({
      index: 1,
      startedAtSeconds: 0,
      stamp: ""
    }),
    D = a.useRef(!1),
    I = a.useRef(!1),
    M = a.useRef(null),
    C = a.useRef(null),
    L = a.useRef({
      lastSoundAt: 0,
      warned: !1,
      lastTickAt: 0,
      frozen: 0,
      gapNoticeAt: 0
    }),
    O = a.useRef(new Float32Array(new ArrayBuffer(0))),
    f = a.useRef(s);
  f.current = s;
  const x = a.useRef(null),
    G = a.useRef({
      levels: new Uint8Array(new ArrayBuffer(128)),
      wave: new Uint8Array(new ArrayBuffer(256))
    }),
    Y = ce() !== null && !!navigator.mediaDevices?.getUserMedia,
    _ = () => {
      const e = h.current;
      return e.accumulated + (e.startedAt ? (Date.now() - e.startedAt) / 1e3 : 0);
    };
  a.useEffect(() => {
    if (m !== "recording" || x.current) return;
    const e = se(),
      n = L.current;
    n.lastTickAt = Date.now(), !S.current.waiting && Date.now() - S.current.lastVoiceAt > 1e3 && (n.lastSoundAt = Date.now(), n.warned = !1, S.current.lastVoiceAt = Date.now());
    const g = window.setInterval(() => {
      const u = _();
      i(u);
      const l = (Date.now() - n.lastTickAt) / 1e3;
      n.lastTickAt = Date.now(), l > je && (n.frozen += Math.round(l), n.lastSoundAt = Date.now(), n.gapNoticeAt = Date.now(), p(v("meetings.frozenSpan", {
        span: Q(n.frozen)
      })), f.current.onNotice?.(v("meetings.frozen")));
      const t = C.current;
      if (t && t.context.state === "running") {
        const w = O.current.length === t.analyser.fftSize ? O.current : O.current = new Float32Array(new ArrayBuffer(t.analyser.fftSize * 4));
        t.analyser.getFloatTimeDomainData(w);
        let R = 0;
        for (const me of w) R = Math.max(R, Math.abs(me));
        const A = S.current,
          B = y.current;
        if (R > Pe ? (A.lastVoiceAt = Date.now(), A.waiting && B?.state === "paused" && (B.resume(), h.current = {
          ...h.current,
          startedAt: Date.now()
        }, A.waiting = !1, T(!1))) : !A.waiting && B?.state === "recording" && Date.now() - A.lastVoiceAt > Oe * 1e3 && (B.pause(), h.current = {
          accumulated: _(),
          startedAt: 0
        }, A.waiting = !0, T(!0)), R > Ie) n.warned ? p(v("meetings.micBack")) : n.gapNoticeAt && Date.now() - n.gapNoticeAt > Ve * 1e3 && (n.gapNoticeAt = 0, p("")), n.lastSoundAt = Date.now(), n.warned = !1;else if (!n.warned && Date.now() - n.lastSoundAt > Le * 1e3) {
          n.warned = !0, n.gapNoticeAt = 0, p(v("meetings.micSilentLong")), f.current.onNotice?.(v("meetings.micSilent"));
          try {
            navigator.vibrate?.([300, 150, 300]);
          } catch {}
        }
      }
      const c = y.current;
      c && c.state === "recording" && u - V.current.startedAtSeconds >= e && c.stop();
    }, j ? 100 : 500);
    return () => window.clearInterval(g);
  }, [m, j]), a.useEffect(() => {
    if (m === "idle") return;
    const e = () => {
      if (document.visibilityState !== "visible") return;
      C.current?.context.resume().catch(() => {}), navigator.wakeLock?.request("screen").then(g => {
        M.current = g;
      }).catch(() => {});
    };
    return document.addEventListener("visibilitychange", e), () => document.removeEventListener("visibilitychange", e);
  }, [m]), a.useEffect(() => {
    te({
      type: "MEETING_RECORDING",
      state: m
    });
  }, [m]), a.useEffect(() => () => te({
    type: "MEETING_RECORDING",
    state: "idle"
  }), []);
  const Z = () => {
      M.current?.release().catch(() => {}), M.current = null;
    },
    r = (e, n) => {
      const g = [],
        u = new MediaRecorder(e, Ue(n));
      u.ondataavailable = l => {
        l.data.size > 0 && g.push(l.data);
      }, u.onstop = () => {
        const l = V.current,
          t = _(),
          c = Math.round(t - l.startedAtSeconds),
          w = !D.current,
          R = new File(g, `${f.current.fileNamePrefix} ${l.stamp}.${n.ext}`, {
            type: n.mime.split(";")[0]
          });
        w ? (V.current = {
          ...l,
          index: l.index + 1,
          startedAtSeconds: t
        }, r(e, n), I.current && (I.current = !1, y.current?.pause(), S.current.waiting = !1, T(!1), h.current = {
          accumulated: t,
          startedAt: 0
        }, i(t), o("paused"))) : (e.getTracks().forEach(A => A.stop()), $.current = null, C.current?.context.close().catch(() => {}), C.current = null, Z(), y.current = null, h.current = {
          accumulated: 0,
          startedAt: 0
        }, S.current.waiting = !1, T(!1), o("idle"), i(0)), (R.size > 0 || !w) && f.current.onRecorded({
          file: R,
          seconds: c,
          part: l.index,
          more: w
        });
      }, u.start(1e4), y.current = u;
    },
    E = (e, n, g) => {
      const u = {
          session: e,
          amp: 0,
          handled: new Set(),
          stamp: n,
          screen: g,
          unsubscribe: () => {}
        },
        l = () => {
          u.unsubscribe(), ne(e), x.current === u && (x.current = null), o("idle"), i(0);
        };
      g && (we(e), U(!0)), u.unsubscribe = he(t => {
        if (t.session === e) if (t.event === "level") u.amp = Number(t.amp) || 0, i(Number(t.elapsed) || 0);else if (t.event === "state") (t.state === "recording" || t.state === "paused") && (o(t.state), i(Number(t.elapsed) || 0), t.state === "paused" && (u.amp = 0));else if (t.event === "notice") {
          const c = Number(t.lost_seconds) || 0;
          t.kind === "silenced" ? p(v("meetings.micBlocked")) : t.kind === "restored" ? p(c > 0 ? v("meetings.micBlockedSpan", {
            span: Q(c)
          }) : "") : t.kind === "ended" && f.current.onNotice?.(t.message || v("meetings.recorderStopped"));
        } else if (t.event === "part") {
          const c = Number(t.part) || 0,
            w = t.more !== !1;
          if (u.handled.has(c)) return;
          u.handled.add(c);
          const R = ve(t.data ?? "", `${f.current.fileNamePrefix} ${n}.m4a`);
          if (R.size > 0 || !w) {
            const A = f.current.onRecorded({
              file: R,
              seconds: Number(t.seconds) || 0,
              part: c,
              more: w
            });
            Promise.resolve(A).then(B => {
              B !== !1 && P("ack", {
                session: e,
                part: c
              });
            }).catch(() => {});
          }
          w || l();
        } else if (t.event === "finished") {
          if (!Se(e)) return;
          const c = new File([], t.name || `${f.current.fileNamePrefix} ${n}.m4a`, {
            type: "audio/mp4"
          });
          f.current.onRecorded({
            file: c,
            seconds: Number(t.seconds) || 0,
            part: Number(t.parts) || 1,
            more: !1
          }), P("finished_ack", {
            session: e
          }), l();
        } else t.event === "discarded" && (f.current.onNativeDiscarded?.(), l());
      }), x.current = u, D.current = !1, S.current = {
        waiting: !1,
        lastVoiceAt: Date.now()
      }, T(!1), p(""), i(0), k(0), o("recording");
    },
    F = a.useCallback(async () => {
      U(!1);
      const e = f.current.nativeSession?.() ?? "",
        n = e ? await pe() : null;
      if (e && n?.supported) {
        const t = new Date(Date.now() + 324e5).toISOString().slice(0, 16).replace("T", " ").replace(":", "-");
        let c;
        const w = n.screen ? f.current.nativeScreen?.() : void 0;
        if (w) try {
          const A = await Te.recordingUploadToken(e);
          A.token && (c = {
            api: A.api,
            token: A.token,
            name: `${f.current.fileNamePrefix} ${t}.m4a`,
            context: w
          });
        } catch {
          c = void 0;
        }
        const R = await ge(e, se(), c);
        if (R.ok) {
          E(e, t, R.screen);
          return;
        }
      }
      const g = ce();
      if (!g) {
        f.current.onError(v("meetings.browserNoRecord"));
        return;
      }
      let u;
      try {
        u = await navigator.mediaDevices.getUserMedia({
          audio: !0
        });
      } catch {
        f.current.onError(v("meetings.micDenied"));
        return;
      }
      $.current = u, p("");
      const l = u.getAudioTracks()[0];
      if (l) {
        let t = 0,
          c = 0;
        l.addEventListener("mute", () => {
          t = Date.now(), p(v("meetings.micDisconnected"));
        }), l.addEventListener("unmute", () => {
          t && (c += Math.round((Date.now() - t) / 1e3)), t = 0, p(c > 0 ? v("meetings.micDisconnectedSpan", {
            span: Q(c)
          }) : "");
        }), l.addEventListener("ended", () => {
          if (D.current) return;
          f.current.onNotice?.(v("meetings.micLostEnded")), D.current = !0;
          const w = y.current;
          w && w.state !== "inactive" && w.stop();
        });
      }
      try {
        const t = new AudioContext(),
          c = t.createAnalyser();
        c.fftSize = 256, c.smoothingTimeConstant = .75, t.createMediaStreamSource(u).connect(c), C.current = {
          context: t,
          analyser: c,
          data: new Uint8Array(new ArrayBuffer(c.frequencyBinCount)),
          wave: new Uint8Array(new ArrayBuffer(c.fftSize))
        };
      } catch {
        C.current = null;
      }
      D.current = !1, S.current = {
        waiting: !1,
        lastVoiceAt: Date.now()
      }, T(!1), L.current = {
        lastSoundAt: Date.now(),
        warned: !1,
        lastTickAt: Date.now(),
        frozen: 0,
        gapNoticeAt: 0
      }, h.current = {
        accumulated: 0,
        startedAt: Date.now()
      }, V.current = {
        index: 1,
        startedAtSeconds: 0,
        stamp: new Date(Date.now() + 540 * 60 * 1e3).toISOString().slice(0, 16).replace("T", " ").replace(":", "-")
      }, r(u, g), i(0), k(0), o("recording");
      try {
        const t = navigator.wakeLock;
        M.current = (await t?.request("screen")) ?? null;
      } catch {}
    }, []),
    H = a.useCallback(() => {
      if (x.current) {
        P("pause");
        return;
      }
      const e = y.current;
      if (e) {
        if (S.current.waiting) {
          S.current.waiting = !1, T(!1), o("paused");
          return;
        }
        e.state === "recording" && (e.pause(), h.current = {
          accumulated: _(),
          startedAt: 0
        }, i(h.current.accumulated), o("paused"));
      }
    }, []),
    J = a.useCallback(() => {
      if (x.current) {
        P("resume");
        return;
      }
      const e = y.current;
      !e || e.state !== "paused" || (e.resume(), h.current = {
        ...h.current,
        startedAt: Date.now()
      }, o("recording"));
    }, []),
    ue = a.useCallback(() => {
      if (x.current) {
        P("pause");
        return;
      }
      const e = y.current;
      !e || e.state === "inactive" || (I.current = !0, e.stop());
    }, []),
    le = a.useCallback(() => {
      if (D.current = !0, x.current) {
        P("stop");
        return;
      }
      const e = y.current;
      e && e.state !== "inactive" && e.stop();
    }, []);
  a.useEffect(() => De(() => f.current.onNativeSaved?.()), []), a.useEffect(() => () => {
    D.current = !0;
    const e = x.current;
    if (e?.screen) {
      e.unsubscribe(), ne(e.session), x.current = null;
      return;
    }
    e && P("stop");
    const n = y.current;
    n && n.state !== "inactive" && n.stop();
  }, []);
  const de = a.useCallback(() => {
      const e = x.current;
      if (e) {
        const {
          levels: g
        } = G.current;
        return g.fill(Math.min(255, Math.round(e.amp * 255))), g;
      }
      const n = C.current;
      return n ? (n.analyser.getByteFrequencyData(n.data), n.data) : null;
    }, []),
    fe = a.useCallback(() => {
      const e = x.current;
      if (e) {
        const {
            wave: g
          } = G.current,
          u = Math.min(127, Math.round(e.amp * .35 * 128));
        for (let l = 0; l < g.length; l += 1) g[l] = 128 + (l % 2 ? u : -u);
        return g;
      }
      const n = C.current;
      return n ? (n.analyser.getByteTimeDomainData(n.wave), n.wave) : null;
    }, []);
  return {
    supported: Y,
    state: m,
    elapsed: b,
    lastLength: N,
    micNotice: q,
    waiting: j,
    nativeScreen: z,
    start: F,
    pause: H,
    resume: J,
    cut: ue,
    stop: le,
    readLevels: de,
    readWave: fe
  };
}
const ie = "taskham:recording-even-volume";
function Fe() {
  try {
    return window.localStorage.getItem(ie) !== "0";
  } catch {
    return !0;
  }
}
function $e(s) {
  const m = window.AudioContext ?? window.webkitAudioContext;
  if (!m) return null;
  const o = new m(),
    b = o.createMediaElementSource(s),
    i = o.createDynamicsCompressor();
  i.threshold.value = -45, i.knee.value = 20, i.ratio.value = 6, i.attack.value = .005, i.release.value = .3;
  const N = o.createGain();
  N.gain.value = 3.5;
  const k = o.createDynamicsCompressor();
  return k.threshold.value = -2, k.knee.value = 0, k.ratio.value = 20, k.attack.value = .001, k.release.value = .1, i.connect(N), N.connect(k), k.connect(o.destination), {
    context: o,
    source: b,
    input: i
  };
}
const X = [1, 1.25, 1.5, 1.75, 2];
function Ze({
  src: s,
  name: m,
  seconds: o,
  onRemove: b,
  seekRequest: i,
  onPlaybackChange: N,
  allowDownload: k = !0,
  downloadSrc: q
}) {
  const p = xe(),
    z = a.useRef(null),
    [U, j] = a.useState(!1),
    [T, S] = a.useState(0),
    [y, $] = a.useState(0),
    [h, V] = a.useState(1),
    [D, I] = a.useState(null),
    [M, C] = a.useState(Fe),
    L = a.useRef(null),
    O = o > 0 ? o : y,
    f = r => {
      const E = z.current;
      if (!E) return;
      if (!L.current) {
        if (!r) return;
        try {
          L.current = $e(E);
        } catch {
          L.current = null;
        }
        if (!L.current) return;
      }
      const {
        context: F,
        source: H,
        input: J
      } = L.current;
      H.disconnect(), H.connect(r ? J : F.destination), F.state === "suspended" && F.resume().catch(() => {});
    };
  a.useEffect(() => () => {
    L.current?.context.close().catch(() => {});
  }, []);
  const x = () => {
      const r = z.current;
      r && (r.paused ? (f(M), r.play().catch(() => {})) : r.pause());
    },
    G = () => {
      const r = !M;
      C(r);
      try {
        window.localStorage.setItem(ie, r ? "1" : "0");
      } catch {}
      f(r);
    },
    Y = r => {
      const E = z.current;
      S(r), E && (E.currentTime = r);
    };
  a.useEffect(() => {
    const r = z.current;
    if (!(!i || !r)) {
      if (i.pause) return void r.pause();
      r.currentTime = i.at, S(i.at), f(M), r.play().catch(() => {});
    }
  }, [i?.id]);
  const _ = () => {
      const r = X[(X.indexOf(h) + 1) % X.length];
      V(r), z.current && (z.current.playbackRate = r);
    },
    Z = () => {
      const r = document.createElement("a");
      r.href = q || s, r.download = m, r.click(), I(null);
    };
  return d.jsxs(re, {
    sx: {
      display: "flex",
      alignItems: "center",
      gap: .5,
      minHeight: 40,
      pl: .5,
      pr: .5,
      borderRadius: 20,
      bgcolor: "#f1f3f4"
    },
    children: [d.jsx(re, {
      component: "audio",
      ref: z,
      src: s,
      preload: "none",
      onPlay: r => {
        j(!0), N?.(!0, r.currentTarget.currentTime);
      },
      onPause: r => {
        j(!1), N?.(!1, r.currentTarget.currentTime);
      },
      onEnded: r => {
        j(!1), N?.(!1, r.currentTarget.currentTime);
      },
      onTimeUpdate: r => {
        S(r.currentTarget.currentTime), N?.(!r.currentTarget.paused, r.currentTarget.currentTime);
      },
      onLoadedMetadata: r => {
        const E = r.currentTarget.duration;
        Number.isFinite(E) && $(E), r.currentTarget.playbackRate = h;
      },
      sx: {
        display: "none"
      }
    }), d.jsx(ae, {
      "aria-label": p(U ? "meetings.stop" : "meetings.play"),
      onClick: x,
      sx: {
        color: "text.primary"
      },
      children: U ? d.jsx(Ce, {}) : d.jsx(Ae, {})
    }), d.jsxs(ke, {
      sx: {
        fontSize: 14,
        fontVariantNumeric: "tabular-nums",
        flexShrink: 0
      },
      children: [oe(Math.floor(T)), " / ", oe(Math.floor(O))]
    }), d.jsx(ye, {
      "aria-label": p("meetings.playbackPosition"),
      size: "small",
      min: 0,
      max: Math.max(1, O),
      step: .1,
      value: Math.min(T, Math.max(1, O)),
      onChange: (r, E) => Y(Number(E)),
      sx: {
        flex: 1,
        minWidth: 40,
        mx: 1.5,
        color: "text.primary"
      }
    }), d.jsx(ae, {
      "aria-label": p("meetings.recordingMenu"),
      onClick: r => I(r.currentTarget),
      sx: {
        color: "text.primary"
      },
      children: d.jsx(Re, {})
    }), d.jsxs(be, {
      anchorEl: D,
      open: !!D,
      onClose: () => I(null),
      children: [k && d.jsxs(W, {
        onClick: Z,
        sx: {
          fontSize: 15
        },
        children: [d.jsx(K, {
          children: d.jsx(Ne, {
            fontSize: "small"
          })
        }), p("meetings.downloadShort")]
      }), d.jsxs(W, {
        onClick: _,
        sx: {
          fontSize: 15
        },
        children: [d.jsx(K, {
          children: d.jsx(ze, {
            fontSize: "small"
          })
        }), p("meetings.playbackRateTimes", {
          rate: h
        })]
      }), d.jsxs(W, {
        onClick: G,
        sx: {
          fontSize: 15
        },
        children: [d.jsx(K, {
          children: d.jsx(Me, {
            fontSize: "small",
            color: M ? "primary" : void 0
          })
        }), p(M ? "meetings.evenVolumeOn" : "meetings.evenVolumeOff")]
      }), b ? d.jsxs(W, {
        onClick: () => {
          I(null), b();
        },
        sx: {
          fontSize: 15,
          color: "error.main"
        },
        children: [d.jsx(K, {
          children: d.jsx(Ee, {
            fontSize: "small",
            color: "error"
          })
        }), p("meetings.delete")]
      }) : null]
    })]
  });
}
export { Me as G, Ze as M, Ce as P, oe as f, qe as s, Ye as u };