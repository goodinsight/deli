import { r as c, j as i } from "./react-CjxcGQav.js";
import { F as T, v as _ } from "./index-Bv1O5rNh.js";
import { bT as w, bv as D, bO as v, cI as W, bQ as q, kY as z, c4 as O, B as E, K as U } from "../js.d/main-Cm9wS5wt.js";
import { R as X, a as B } from "./RotateRight-DbtMfjGZ.js";
import "./stylis-DdLD6a3t.js";
const H = 2048;
function Q(e) {
  if (!/^https?:\/\//i.test(e)) return !1;
  try {
    return new URL(e).origin !== window.location.origin;
  } catch {
    return !1;
  }
}
function K(e) {
  return new Promise((a, s) => {
    const o = new Image();
    Q(e) && (o.crossOrigin = "anonymous"), o.onload = () => a(o), o.onerror = () => s(new Error(w("utils.imageLoadFailed"))), o.src = e;
  });
}
async function Y(e, {
  background: a = "#ffffff",
  maxSide: s = H,
  quality: o = .95
} = {}) {
  const u = await K(e),
    f = u.naturalWidth,
    t = u.naturalHeight;
  if (!f || !t) throw new Error(w("utils.imageSizeFailed"));
  const r = Math.max(f, t);
  if (f === t && r <= s) return e;
  const d = Math.min(r, s),
    m = d / r,
    x = Math.round(f * m),
    g = Math.round(t * m),
    p = document.createElement("canvas");
  p.width = d, p.height = d;
  const h = p.getContext("2d");
  if (!h) throw new Error(w("utils.canvasFailed"));
  return h.fillStyle = a, h.fillRect(0, 0, d, d), h.drawImage(u, Math.round((d - x) / 2), Math.round((d - g) / 2), x, g), p.toDataURL("image/jpeg", o);
}
const A = .92,
  V = 520,
  Z = 2e3;
function G(e, a) {
  return new Promise(s => {
    const o = new Image();
    o.onload = () => {
      const {
        naturalWidth: u,
        naturalHeight: f
      } = o;
      if (!u || !f || u <= a) {
        s(e);
        return;
      }
      const t = document.createElement("canvas");
      t.width = a, t.height = Math.round(f * a / u);
      const r = t.getContext("2d");
      if (!r) {
        s(e);
        return;
      }
      r.imageSmoothingQuality = "high", r.drawImage(o, 0, 0, t.width, t.height), s(t.toDataURL("image/jpeg", A));
    }, o.onerror = () => s(e), o.src = e;
  });
}
function ot({
  open: e,
  src: a,
  aspect: s = 1,
  outputWidth: o,
  onClose: u,
  onApply: f
}) {
  const t = c.useRef(null),
    r = D(),
    [d, m] = c.useState(!1),
    [x, g] = c.useState(!0),
    [p, h] = c.useState(""),
    R = c.useRef(null),
    C = c.useRef("");
  c.useEffect(() => {
    e && (m(!1), g(!0), h(""));
  }, [e, a]), c.useEffect(() => {
    if (!e || !a) return;
    let n = !0;
    return Y(a).then(l => {
      n && (C.current = l, h(l));
    }).catch(() => {
      n && (g(!1), v(w("profile.photoLoadFailed")));
    }), () => {
      n = !1;
    };
  }, [e, a]);
  const b = c.useCallback(() => {
      let l = 0;
      const I = () => {
        const S = t.current?.getCanvas(),
          P = !!S && S.width > 0 && S.width === S.height;
        if (l += 1, !P && l < 30) {
          window.requestAnimationFrame(I);
          return;
        }
        t.current?.startCrop(), t.current?.setCropAspect(s), m(!0);
      };
      window.requestAnimationFrame(I);
    }, [s]),
    L = c.useCallback(() => {
      g(!1), b();
    }, [b]),
    F = c.useCallback(n => {
      h(n);
      const l = R.current;
      R.current = null, l?.(n);
    }, []),
    j = n => {
      n(), b();
    },
    M = () => {
      if (t.current?.reset(), C.current && C.current !== p) {
        h(C.current);
        return;
      }
      b();
    },
    k = async () => {
      let n = null;
      if (d && (n = await new Promise(l => {
        R.current = l, t.current?.applyCrop(), window.setTimeout(() => {
          R.current === l && (R.current = null, l(null));
        }, Z);
      }), m(!1)), n || (n = t.current?.toDataURL("image/jpeg", A) ?? null), !n) {
        v(w("profile.photoExportFailed"));
        return;
      }
      f(o ? await G(n, o) : n);
    },
    y = [{
      id: "photo-edit",
      showTitle: !1,
      children: i.jsx(O, {
        spacing: 1.5,
        children: i.jsx(E, {
          sx: {
            width: "100%"
          },
          children: i.jsxs(E, {
            sx: {
              position: "relative",
              width: "100%",
              maxWidth: V,
              aspectRatio: "1 / 1",
              mx: "auto",
              bgcolor: "#111",
              borderRadius: 1,
              overflow: "hidden"
            },
            children: [p ? i.jsx(E, {
              sx: {
                position: "absolute",
                inset: 0
              },
              children: i.jsx(_, {
                ref: t,
                src: p,
                width: "100%",
                height: "100%",
                background: "#111",
                faceAware: !1,
                personSegment: !1,
                poseAware: !1,
                zoomable: !0,
                onLoad: L,
                onCrop: F,
                onError: () => {
                  g(!1), v(w("profile.photoLoadFailed"));
                }
              })
            }) : null, x ? i.jsx(E, {
              sx: {
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: i.jsx(U, {
                size: 28,
                sx: {
                  color: "#fff"
                }
              })
            }) : null]
          })
        })
      })
    }];
  return i.jsx(W, {
    fontScaleKey: "PhotoEditDialog",
    locale: "ko",
    open: e,
    onClose: u,
    title: r("profile.editPhoto"),
    maxWidth: "sm",
    titleIcons: {
      delete: {
        visible: !1
      },
      print: {
        visible: !1
      },
      share: {
        visible: !1
      },
      custom: [{
        icon: i.jsx(X, {}),
        tooltip: r("profile.rotateLeft"),
        onClick: () => j(() => t.current?.rotate(-90))
      }, {
        icon: i.jsx(B, {}),
        tooltip: r("profile.rotateRight"),
        onClick: () => j(() => t.current?.rotate(90))
      }, {
        icon: i.jsx(T, {}),
        tooltip: r("profile.flipHorizontal"),
        onClick: () => j(() => t.current?.flip("horizontal"))
      }, {
        icon: i.jsx(z, {}),
        tooltip: r("profile.reset"),
        onClick: M
      }]
    },
    fontScale: {
      enabled: !1
    },
    tabs: {
      visible: !1
    },
    scrollPastLastSection: !1,
    sections: y,
    actions: {
      visible: !0,
      showCancelButton: !0,
      right: i.jsx(q, {
        variant: "contained",
        onClick: () => {
          k();
        },
        disabled: x,
        children: r("profile.apply")
      })
    }
  });
}
export { ot as default };