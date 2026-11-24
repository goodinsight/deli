import { r as m, j as e } from "./react-CjxcGQav.js";
import { bM as x, u as D, ak as L, bx as R, bO as z, B as t, f as p, d as B, s as k, K as F, bP as V, ao as A, bQ as M, bR as O } from "../js.d/main-Cm9wS5wt.js";
import { C as X, a as $, b as N } from "./publicPageSx-9Lwcd6Z3.js";
import "./stylis-DdLD6a3t.js";
const h = "/v1/account/mail-optout";
function f(s, n) {
  if (!s?.ok || !s.data) throw new Error(s?.error || s?.message || n);
  return s.data;
}
const d = {
    readByToken: async s => f(await x.http.get(`${h}/token/${encodeURIComponent(s)}`), "수신 설정을 불러오지 못했습니다."),
    saveByToken: async (s, n) => f(await x.http.post(`${h}/token/${encodeURIComponent(s)}`, {
      opt_out: n
    }), "수신 설정을 저장하지 못했습니다."),
    optOutByEmail: async s => {
      f(await x.http.post(`${h}/email`, {
        email: s
      }), "수신거부를 저장하지 못했습니다.");
    },
    readMine: async () => f(await x.http.get(h), "수신 설정을 불러오지 못했습니다."),
    saveMine: async s => f(await x.http.put(h, {
      opt_out: s
    }), "수신 설정을 저장하지 못했습니다.")
  },
  P = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function G() {
  const s = D(),
    n = s.useValue("sessionChecked") ?? !1,
    r = s.useValue("logined") ?? !1,
    a = s.useValue("account"),
    i = new URLSearchParams(window.location.search).get("t") ?? "",
    [b, l] = m.useState(null),
    [S, j] = m.useState(!!i),
    [y, E] = m.useState(!1),
    [_, u] = m.useState(""),
    [W, v] = m.useState(""),
    [U, T] = m.useState(""),
    w = L({
      formId: "homepage-unsubscribe-form",
      initialValues: {
        email: ""
      },
      onValidate: o => P.test(String(o.email ?? "").trim()) ? (T(""), !0) : (T("메일 주소를 확인해 주세요."), !1),
      onSubmit: async o => {
        const c = String(o.email ?? "").trim();
        try {
          await d.optOutByEmail(c), v(c), !i && r && l(await d.readMine().catch(() => null));
        } catch (C) {
          T(C instanceof Error ? C.message : "수신거부를 저장하지 못했습니다.");
        }
      }
    });
  return m.useEffect(() => {
    if (i) {
      d.readByToken(i).then(l).catch(o => u(o instanceof Error ? o.message : "수신 설정을 불러오지 못했습니다.")).finally(() => j(!1));
      return;
    }
    !n || !r || (a?.email && !w.getFormValue("email") && w.setFormValue("email", a.email), d.readMine().then(l).catch(() => {}));
  }, [i, n, r, a?.email]), {
    form: w,
    token: i,
    state: b,
    loading: S,
    saving: y,
    linkError: _,
    doneEmail: W,
    error: U,
    toggle: async o => {
      E(!0);
      try {
        const c = i ? await d.saveByToken(i, o) : await d.saveMine(o);
        l(c), o || v(""), R(o ? "광고 · 소식 메일을 더 보내지 않습니다." : "광고 · 소식 메일을 다시 받습니다.");
      } catch (c) {
        z(c instanceof Error ? c.message : "수신 설정을 저장하지 못했습니다.");
      } finally {
        E(!1);
      }
    },
    logined: r
  };
}
const I = {
    font: "inherit",
    cursor: "pointer",
    "&:disabled": {
      opacity: .6,
      cursor: "default"
    }
  },
  g = {
    fontSize: "1rem",
    color: k[800]
  };
function Y() {
  const s = G(),
    {
      form: n,
      token: r,
      state: a,
      loading: i,
      saving: b,
      linkError: l,
      doneEmail: S,
      error: j,
      toggle: y,
      logined: E
    } = s,
    _ = u => u ? e.jsx(t, {
      component: "button",
      type: "button",
      disabled: b,
      onClick: () => {
        y(!1);
      },
      sx: {
        ...$,
        ...I,
        bgcolor: "transparent"
      },
      children: "다시 받기"
    }) : e.jsx(t, {
      component: "button",
      type: "button",
      disabled: b,
      onClick: () => {
        y(!0);
      },
      sx: {
        ...N,
        ...I,
        border: "none"
      },
      children: "수신거부"
    });
  return e.jsxs(t, {
    sx: {
      mx: "auto",
      maxWidth: 768,
      px: 2,
      py: 6
    },
    children: [e.jsx(t, {
      component: "h1",
      sx: {
        m: 0,
        fontSize: B["4xl"],
        lineHeight: 1.1111,
        fontWeight: p.black
      },
      children: "메일 수신거부"
    }), e.jsx(t, {
      component: "p",
      sx: {
        mt: 1,
        fontSize: "1rem",
        color: k[600]
      },
      children: "업무함이 보내는 광고 · 소식 메일을 받지 않도록 설정합니다."
    }), e.jsxs(t, {
      sx: {
        ...X,
        mt: 4,
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2
      },
      children: [r ? i ? e.jsx(t, {
        sx: {
          display: "flex",
          justifyContent: "center",
          py: 2
        },
        children: e.jsx(F, {
          size: 28
        })
      }) : l || !a ? e.jsx(t, {
        sx: {
          ...g,
          color: "error.main",
          fontWeight: p.semibold
        },
        children: l || "수신 설정을 불러오지 못했습니다."
      }) : e.jsxs(e.Fragment, {
        children: [e.jsxs(t, {
          sx: g,
          children: [e.jsx(t, {
            component: "strong",
            sx: {
              fontWeight: p.semibold
            },
            children: a.email_masked
          }), " ", "은(는) 지금 광고 · 소식 메일을", " ", e.jsx(t, {
            component: "strong",
            sx: {
              fontWeight: p.semibold
            },
            children: a.opted_out ? "받지 않습니다" : "받습니다"
          }), "."]
        }), e.jsx(t, {
          children: _(a.opted_out)
        })]
      }) : S ? e.jsxs(t, {
        sx: g,
        children: [e.jsx(t, {
          component: "strong",
          sx: {
            fontWeight: p.semibold
          },
          children: S
        }), " ", "로는 업무함의 광고 · 소식 메일을 보내지 않습니다."]
      }) : e.jsxs(e.Fragment, {
        children: [e.jsx(t, {
          sx: g,
          children: "광고 · 소식 메일을 받지 않을 메일 주소를 넣어 주세요."
        }), e.jsxs(t, {
          component: "form",
          noValidate: !0,
          onSubmit: u => {
            u.preventDefault(), n.submit();
          },
          sx: V,
          children: [e.jsx(t, {
            children: e.jsx(A, {
              form: n,
              name: "email",
              label: "메일 주소",
              placeholder: "you@example.com",
              fullWidth: !0,
              size: "medium"
            })
          }), e.jsx(M, {
            type: "submit",
            variant: "contained",
            disabled: n.isSubmitting,
            sx: O,
            children: n.isSubmitting ? "처리 중…" : "수신거부"
          })]
        }), j && e.jsx(t, {
          sx: {
            fontSize: B.base,
            color: "error.main"
          },
          children: j
        })]
      }), !r && E && a?.opted_out && e.jsxs(t, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          flexWrap: "wrap",
          pt: 2,
          borderTop: `1px solid ${k[200]}`
        },
        children: [e.jsxs(t, {
          sx: {
            ...g,
            flex: "1 1 auto"
          },
          children: ["내 계정(", a.email_masked, ")은 지금 광고 · 소식 메일을 받지 않습니다."]
        }), _(!0)]
      })]
    }), e.jsxs(t, {
      component: "ul",
      sx: {
        mt: 3,
        pl: 2.5,
        display: "grid",
        gap: .75,
        fontSize: B.base,
        color: k[600],
        listStyleType: "disc"
      },
      children: [e.jsx(t, {
        component: "li",
        children: "수신거부해도 서비스에 꼭 필요한 안내 메일(메일 인증 · 비밀번호 · 보안 · 청구 · 초대 · 휴면 안내)은 계속 갑니다."
      }), e.jsx(t, {
        component: "li",
        children: "다시 받으려면 메일 아래의 수신 설정 링크를 누르거나, 로그인한 뒤 이 화면에서 바꿉니다."
      })]
    })]
  });
}
export { Y as default };