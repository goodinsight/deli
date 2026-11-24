import { u as b, i as m, j as a } from "./react-CjxcGQav.js";
import { e4 as d, bZ as S, b_ as y, b$ as L, t as j, c0 as k, c1 as C, e5 as P, r as T, bv as w, B as l, s as f, d as R, bH as _, bS as q, c5 as A } from "../js.d/main-Cm9wS5wt.js";
import { S as x, a as I, b as O } from "./SocialProviderIcon-CfLZ-VWP.js";
function B() {
  const s = b(),
    o = m(),
    c = o.state?.from ?? "",
    n = o.pathname === "/app" || o.pathname.startsWith("/app/") ? "/app" : "",
    r = t => {
      const u = j(),
        e = c || u,
        i = k();
      if (i?.type === "chat_message" && i.seq > 0) return n ? `${n}/chat` : C;
      if (i?.type === "mail_message" && i.seq > 0 && !n) return P(i.seq);
      const p = e.startsWith("/login") || e.startsWith("/app/login") || e.startsWith("/signup") || e.startsWith("/app/signup");
      return e && !p ? e : n || T();
    },
    g = t => {
      const u = r(),
        e = S()?.org_seq ?? 0;
      if (e > 0) {
        y(), L(e).catch(() => {}).finally(() => s(u, {
          replace: !0
        }));
        return;
      }
      s(u, {
        replace: !0
      });
    };
  return {
    resolveTarget: r,
    goToTarget: g,
    finishLogin: t => {
      d(t.seq), g();
    }
  };
}
function H({
  compact: s = !1,
  redirectTo: o,
  only: c
}) {
  const n = w(),
    r = c ? x.filter(t => t.key === c) : x;
  if (r.length === 0) return null;
  const g = t => {
      o && q(o), A(t, () => {
        window.location.assign(O(t));
      });
    },
    h = s ? 52 : 56;
  return a.jsxs(a.Fragment, {
    children: [a.jsxs(l, {
      sx: {
        mt: s ? 2.5 : 3,
        display: "flex",
        alignItems: "center",
        gap: s ? 1.25 : 1.5,
        fontSize: R.sm,
        color: f[400]
      },
      children: [a.jsx(l, {
        sx: {
          height: "1px",
          flex: 1,
          bgcolor: f[200]
        }
      }), n("auth.socialLogin"), a.jsx(l, {
        sx: {
          height: "1px",
          flex: 1,
          bgcolor: f[200]
        }
      })]
    }), a.jsx(l, {
      sx: {
        mt: s ? 2 : 2.5,
        display: "flex",
        justifyContent: "center",
        gap: s ? 2.5 : 3
      },
      children: r.map(t => a.jsx(_, {
        title: t.label,
        children: a.jsx(l, {
          component: "button",
          type: "button",
          "aria-label": t.label,
          onClick: () => g(t.key),
          sx: {
            width: h,
            height: h,
            p: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            borderRadius: "50%",
            bgcolor: t.brandColor,
            color: t.textColor,
            border: t.borderColor ? `1px solid ${t.borderColor}` : "none",
            transition: "transform 0.15s ease, box-shadow 0.15s ease",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 4px 10px rgba(15, 23, 42, 0.18)"
            },
            "&:active": {
              transform: "translateY(0)"
            }
          },
          children: a.jsx(I, {
            provider: t.key,
            sx: {
              fontSize: s ? "1.5rem" : "1.625rem"
            }
          })
        })
      }, t.key))
    })]
  });
}
export { H as S, B as u };