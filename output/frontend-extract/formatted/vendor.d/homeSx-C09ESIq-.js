import { l as s, f as r, b as o, d as e, s as t, as as l, u as c, r as m } from "../js.d/main-Cm9wS5wt.js";
import { P as d } from "./publicPageSx-9Lwcd6Z3.js";
const g = {
    py: {
      xs: 8,
      md: 13
    }
  },
  h = {
    ...d,
    ...g
  },
  S = {
    m: 0,
    display: "inline-block",
    borderRadius: "9999px",
    bgcolor: o[50],
    color: o[600],
    px: 2,
    pt: "7px",
    pb: "9px",
    fontSize: "1rem",
    fontWeight: r.medium,
    letterSpacing: "0.06em",
    lineHeight: s.none
  },
  u = {
    m: 0,
    display: "inline-block",
    borderRadius: "9999px",
    bgcolor: o[50],
    color: o[700],
    px: 2.5,
    pt: "9px",
    pb: "11px",
    fontSize: "1.125rem",
    fontWeight: r.medium,
    lineHeight: s.none
  },
  _ = {
    m: 0,
    mt: 2,
    fontFamily: '"GyeonggiTitle", "Noto Sans KR", sans-serif',
    fontSize: {
      xs: e["3xl"],
      sm: e["4xl"],
      md: e["5xl"]
    },
    fontWeight: r.normal,
    lineHeight: s.tight,
    letterSpacing: "-0.025em",
    color: o[900],
    wordBreak: "keep-all"
  },
  E = {
    m: 0,
    mt: 2.5,
    maxWidth: 760,
    fontSize: {
      xs: e.base,
      md: e.xl
    },
    lineHeight: s.relaxed,
    color: t[600],
    wordBreak: "keep-all"
  },
  A = {
    textAlign: "center",
    "& > p:last-of-type": {
      mx: "auto"
    }
  },
  n = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: .75,
    borderRadius: 2,
    px: 3.5,
    pt: "13px",
    pb: "15px",
    lineHeight: 1,
    fontSize: {
      xs: e.base,
      md: e.lg
    },
    fontWeight: r.medium,
    textDecoration: "none",
    whiteSpace: "nowrap",
    transition: "background-color 150ms, box-shadow 150ms, transform 150ms"
  },
  R = {
    ...n,
    bgcolor: o[600],
    color: "#fff",
    boxShadow: `0 10px 24px ${o[600]}33`,
    "&:hover": {
      bgcolor: o[700],
      transform: "translateY(-1px)"
    }
  },
  w = {
    ...n,
    border: `1px solid ${t[300]}`,
    bgcolor: "#fff",
    color: t[800],
    "&:hover": {
      bgcolor: t[50],
      borderColor: t[400]
    }
  },
  C = {
    ...n,
    bgcolor: "#fff",
    color: o[900],
    boxShadow: "0 10px 30px rgba(2, 6, 23, 0.35)",
    "&:hover": {
      bgcolor: l.blue50,
      transform: "translateY(-1px)"
    }
  },
  T = {
    ...n,
    border: "1px solid rgba(147, 197, 253, 0.45)",
    color: l.blue100,
    "&:hover": {
      bgcolor: "rgba(255, 255, 255, 0.12)"
    }
  },
  X = {
    borderRadius: 3,
    border: `1px solid ${t[200]}`,
    bgcolor: "#fff",
    transition: "box-shadow 180ms, transform 180ms, border-color 180ms",
    "&:hover": {
      borderColor: l.blue300,
      boxShadow: "0 18px 40px rgba(15, 42, 92, 0.10)",
      transform: "translateY(-2px)"
    }
  },
  I = {
    width: 48,
    height: 48,
    borderRadius: 2.5,
    bgcolor: o[50],
    color: o[600],
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  },
  N = {
    m: 0,
    fontSize: {
      xs: "1.375rem",
      md: "1.6875rem"
    },
    fontWeight: r.medium,
    letterSpacing: "-0.01em",
    lineHeight: s.snug,
    color: o[900],
    wordBreak: "keep-all"
  },
  D = {
    m: 0,
    mt: 1.5,
    fontSize: {
      xs: e.base,
      md: e.lg
    },
    lineHeight: s.relaxed,
    color: t[600],
    wordBreak: "keep-all"
  },
  H = a => `/taskham/home/${a}.webp`,
  b = {
    "case-external": "800 / 774",
    "case-handover": "646 / 800",
    "case-multi-branch": "800 / 782",
    "case-recurring": "731 / 800",
    "case-scattered-tools": "800 / 732",
    "case-small-business": "800 / 787",
    "contact-consult": "748 / 800",
    "cta-team": "849 / 800",
    "flow-archive": "793 / 800",
    "flow-confirm": "798 / 800",
    "flow-register": "800 / 763",
    "role-ceo": "749 / 800",
    "role-lead": "751 / 800",
    "role-staff": "729 / 800",
    "why-wide": "1000 / 642"
  },
  B = a => b[a];
function k() {
  const a = c(),
    i = a.useValue("account");
  return (a.useValue("logined") ?? !1) && i ? {
    to: m(),
    label: "내 업무함으로"
  } : {
    to: "/signup",
    label: "무료로 시작하기"
  };
}
export { R as B, D as C, S as E, _ as H, I, E as L, h as S, u as T, w as a, X as b, N as c, A as d, g as e, C as f, T as g, B as h, H as i, k as u };