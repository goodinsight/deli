import { j as i, r as g } from "./react-CjxcGQav.js";
import { e as v, c8 as L, bO as R, bT as x, bv as A, D as $, B as f, K as P, L as M, cI as C, bX as B, l2 as V } from "../js.d/main-Cm9wS5wt.js";
import { L as w } from "./leaflet-CcRL-kL8.js";
import { C as H } from "./AttendanceParts-mHb1cK0h.js";
import { s as k } from "./attendanceMgmt-B_e3bPBn.js";
function J(a, t) {
  const e = v({
      modalId: `${a}-dialog`
    }),
    n = L({
      stateId: a,
      initialValues: {
        name: "",
        date: "",
        data: null,
        loading: !1
      }
    }),
    r = async (o, c = "", l = 0) => {
      n.setValues({
        name: c,
        date: o,
        data: null,
        loading: !0
      }), e.open();
      try {
        n.setValues({
          data: await t(o, l),
          loading: !1
        });
      } catch (u) {
        n.setValue("loading", !1), R(u instanceof Error ? u.message : x("hr.errLoadOutingTrack"));
      }
    };
  return {
    modal: e,
    ui: n,
    open: (o, c = "", l = 0) => {
      r(o, c, l);
    }
  };
}
const I = {
    color: "#6d28d9",
    bg: "#ede9fe"
  },
  _ = {
    color: "#1d4ed8",
    bg: "#dbeafe"
  },
  z = "calc(100vh - 210px)",
  E = {
    width: "100%",
    flex: 1,
    minHeight: 320,
    overflow: "hidden"
  },
  N = "/taskham/kakao-route.html",
  U = () => B() ? new URL(V).origin : window.location.origin;
function D({
  points: a,
  onFail: t
}) {
  const e = g.useRef(null),
    n = "a7c7e3d2e8fddc4b152dfbb5fce97a7a".trim(),
    r = U();
  if (g.useEffect(() => {
    if (!n) {
      t();
      return;
    }
    const c = a.map((s, h) => ({
        lat: s.lat,
        lng: s.lng,
        kind: h === 0 ? "start" : h === a.length - 1 ? "end" : "mid",
        label: h === 0 ? x("hr.myAttTrackStart", {
          time: s.at.slice(11, 16)
        }) : h === a.length - 1 ? x("hr.myAttTrackLast", {
          time: s.at.slice(11, 16)
        }) : s.at.slice(11, 16)
      })),
      l = s => {
        s.origin !== r || s.source !== e.current?.contentWindow || s.data?.source === "taskham-kakao-route" && (s.data.type === "error" && t(), s.data.type === "ready" && e.current?.contentWindow?.postMessage({
          source: "taskham-outing-track",
          points: c
        }, r));
      };
    window.addEventListener("message", l);
    const u = window.setTimeout(() => t(), 1e4),
      m = s => {
        s.origin === r && s.data?.source === "taskham-kakao-route" && s.data.type === "drawn" && window.clearTimeout(u);
      };
    return window.addEventListener("message", m), () => {
      window.removeEventListener("message", l), window.removeEventListener("message", m), window.clearTimeout(u);
    };
  }, [a, n, r, t]), !n) return null;
  const o = `${r}${N}?${new URLSearchParams({
    key: n,
    parent: window.location.origin
  }).toString()}`;
  return i.jsx(f, {
    sx: E,
    children: i.jsx(f, {
      component: "iframe",
      ref: e,
      src: o,
      title: x("hr.myAttTrackTitle"),
      sx: {
        width: "100%",
        height: "100%",
        border: 0,
        display: "block"
      }
    })
  });
}
function G({
  points: a
}) {
  const [t, e] = g.useState(!1),
    n = g.useRef(() => e(!0)).current;
  return t ? i.jsx(W, {
    points: a
  }) : i.jsx(D, {
    points: a,
    onFail: n
  });
}
function W({
  points: a
}) {
  const t = g.useRef(null);
  return g.useEffect(() => {
    if (!t.current || a.length === 0) return;
    const e = w.map(t.current, {
      zoomControl: !0,
      attributionControl: !0
    });
    w.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap"
    }).addTo(e);
    const n = a.map(o => [o.lat, o.lng]);
    w.polyline(n, {
      color: "#2563eb",
      weight: 4,
      opacity: .7
    }).addTo(e), a.forEach((o, c) => {
      const l = c === 0,
        u = c === a.length - 1;
      w.circleMarker([o.lat, o.lng], {
        radius: l || u ? 8 : 5,
        color: "#fff",
        weight: 2,
        fillColor: l ? "#16a34a" : u ? "#dc2626" : "#2563eb",
        fillOpacity: 1
      }).bindTooltip(l ? x("hr.myAttTrackStart", {
        time: o.at.slice(11, 16)
      }) : u ? x("hr.myAttTrackLast", {
        time: o.at.slice(11, 16)
      }) : o.at.slice(11, 16)).addTo(e);
    }), e.fitBounds(w.latLngBounds(n).pad(.2), {
      maxZoom: 16
    });
    const r = window.setTimeout(() => e.invalidateSize(), 200);
    return () => {
      window.clearTimeout(r), e.remove();
    };
  }, [a]), i.jsx(f, {
    ref: t,
    sx: E
  });
}
function Q({
  track: a
}) {
  const t = A(),
    {
      modal: e,
      ui: n
    } = a,
    r = $(),
    o = String(n.useValue("name") ?? ""),
    c = String(n.useValue("date") ?? ""),
    l = n.useValue("data"),
    u = !!n.useValue("loading"),
    m = l?.points ?? [],
    s = l ? [...l.outings.map((d, T) => ({
      key: `outing-${T}`,
      label: `${t("hr.myAttTrackOuting", {
        range: `${d.start}~${d.end || "…"}`,
        place: d.place
      })}${d.reason ? `(${d.reason})` : ""}`,
      tone: I
    })), ...(m.length > 0 ? [{
      key: "points",
      label: t("hr.myAttTrackPoints", {
        count: m.length,
        range: `${m[0].at.slice(11, 16)}~${m[m.length - 1].at.slice(11, 16)}`
      }),
      tone: _
    }] : [])] : [],
    h = s.length > 0 ? i.jsx(f, {
      component: "span",
      sx: {
        display: "flex",
        flexWrap: "wrap",
        gap: 1.5,
        minWidth: 0,
        alignSelf: "center"
      },
      children: s.map(d => i.jsx(H, {
        label: d.label,
        tone: d.tone
      }, d.key))
    }) : null,
    S = o ? t("hr.myAttTrackTitleOf", {
      name: o,
      date: c ? k(c) : ""
    }) : c ? `${t("hr.myAttTrackTitle")} · ${k(c)}` : t("hr.myAttTrackTitle"),
    y = g.useRef(null),
    [b, O] = g.useState(0);
  g.useEffect(() => {
    if (!r || !e.isOpen) return;
    const d = () => {
        const p = y.current?.getBoundingClientRect().top ?? 0;
        p > 0 && O(Math.max(320, window.innerHeight - p));
      },
      T = [0, 150, 400].map(p => window.setTimeout(d, p));
    return window.addEventListener("resize", d), () => {
      T.forEach(p => window.clearTimeout(p)), window.removeEventListener("resize", d);
    };
  }, [r, e.isOpen, u]);
  const j = [{
    id: "outing-track",
    showTitle: !1,
    children: i.jsxs(f, {
      ref: y,
      sx: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: r ? b ? `${b}px` : "calc(100dvh - 90px)" : z
      },
      children: [r && h ? i.jsx(f, {
        sx: {
          px: 2,
          py: 1.5,
          borderBottom: "1px solid",
          borderColor: "divider",
          flexShrink: 0
        },
        children: h
      }) : null, u ? i.jsx(f, {
        sx: {
          display: "flex",
          justifyContent: "center",
          py: 6
        },
        children: i.jsx(P, {
          size: 28
        })
      }) : m.length === 0 ? i.jsx(M, {
        sx: {
          fontSize: 15,
          color: "text.secondary",
          py: 3,
          textAlign: "center"
        },
        children: t("hr.myAttTrackEmpty")
      }) : i.jsx(G, {
        points: m
      })]
    })
  }];
  return i.jsx(C, {
    open: e.isOpen,
    onClose: e.close,
    title: i.jsxs(f, {
      sx: {
        display: "flex",
        alignItems: "center",
        columnGap: 2,
        minWidth: 0
      },
      children: [i.jsx(f, {
        component: "span",
        sx: {
          flexShrink: 0
        },
        children: S
      }), r ? null : h]
    }),
    width: "1600px",
    fullScreen: r,
    mobilePresentation: r ? "slide" : "dialog",
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
      visible: !1
    },
    contentPaddingX: 0,
    contentTopPadding: 0,
    contentBottomPadding: 0,
    sectionsPaddingTop: 0,
    sections: j
  });
}
export { Q as O, J as u };