import { j as a } from "./react-CjxcGQav.js";
import { ak as y, a2 as I, B as s, s as i, l as T, f as x, d as m, ap as S, cY as p, N as C, a6 as e, a3 as P, a5 as R, a7 as _, a4 as E, a8 as A, a9 as w, ag as v, ab as F, ae as W, br as z, b as M } from "../js.d/main-Cm9wS5wt.js";
const B = {
  seats: 3,
  mailboxes: 1,
  approval: !1,
  vault: !1,
  attplus: !1,
  meetplus: !1,
  counselors: 0,
  chatplus: !1
};
function L() {
  const l = y({
      formId: "pricing-calculator",
      initialValues: B
    }),
    t = Number(l.useFormValue("seats") ?? 0),
    o = Number(l.useFormValue("mailboxes") ?? 0),
    r = !!l.useFormValue("approval"),
    h = !!l.useFormValue("vault"),
    f = !!l.useFormValue("attplus"),
    j = !!l.useFormValue("meetplus"),
    g = Number(l.useFormValue("counselors") ?? 0),
    d = !!l.useFormValue("chatplus");
  return {
    form: l,
    seats: t,
    mailboxes: o,
    approval: r,
    vault: h,
    attplus: f,
    meetplus: j,
    counselors: g,
    chatplus: d,
    quote: I(t, o, r, h, f, j, g, d)
  };
}
function c({
  children: l
}) {
  return a.jsx(s, {
    component: "strong",
    sx: {
      fontWeight: x.medium,
      color: i[900]
    },
    children: l
  });
}
function u({
  label: l,
  detail: t,
  amount: o,
  amountColor: r = i[900]
}) {
  return a.jsxs(s, {
    sx: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 2
    },
    children: [a.jsxs(s, {
      sx: {
        minWidth: 0
      },
      children: [a.jsx(s, {
        sx: {
          fontSize: m.lg,
          fontWeight: x.medium,
          color: i[900]
        },
        children: l
      }), a.jsx(s, {
        sx: {
          fontSize: m.base,
          color: i[500],
          wordBreak: "keep-all"
        },
        children: t
      })]
    }), a.jsx(s, {
      sx: {
        fontSize: m.base,
        fontWeight: x.medium,
        color: r,
        whiteSpace: "nowrap"
      },
      children: o
    })]
  });
}
function V({
  label: l,
  amount: t,
  tone: o,
  note: r
}) {
  return a.jsxs(s, {
    sx: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: r ? "center" : "baseline",
      gap: 2
    },
    children: [a.jsx(s, {
      sx: {
        fontSize: m.base,
        fontWeight: x.medium,
        color: i[900],
        wordBreak: "keep-all"
      },
      children: l
    }), a.jsxs(s, {
      sx: {
        textAlign: "right",
        minWidth: 0
      },
      children: [a.jsx(s, {
        sx: {
          fontSize: o === "total" ? m["3xl"] : m["2xl"],
          fontWeight: x.medium,
          color: o === "saving" ? "error.main" : o === "total" ? M[700] : M[900],
          whiteSpace: "nowrap"
        },
        children: t
      }), r && a.jsx(s, {
        sx: {
          fontSize: m.base,
          color: i[500],
          whiteSpace: {
            xs: "normal",
            sm: "nowrap"
          },
          wordBreak: "keep-all"
        },
        children: r
      })]
    })]
  });
}
const k = {
  position: "relative",
  mx: "auto",
  maxWidth: 880,
  borderRadius: {
    xs: 3,
    md: 4
  },
  border: `1px solid ${i[200]}`,
  bgcolor: "#fff",
  px: {
    xs: 3,
    md: 4
  },
  py: {
    xs: 3.5,
    md: 4
  },
  display: "grid",
  gap: {
    xs: 3,
    md: 5
  },
  gridTemplateColumns: {
    xs: "minmax(0, 1fr)",
    md: "minmax(0, 1fr) minmax(0, 1.2fr)"
  }
};
function N({
  sx: l
}) {
  const {
    form: t,
    seats: o,
    mailboxes: r,
    approval: h,
    vault: f,
    attplus: j,
    meetplus: g,
    counselors: d,
    chatplus: $,
    quote: n
  } = L();
  return a.jsxs(s, {
    sx: {
      ...k,
      ...l
    },
    children: [a.jsxs(s, {
      sx: {
        display: "grid",
        gap: 2.5,
        alignContent: "start"
      },
      children: [a.jsx(s, {
        component: "h2",
        sx: {
          m: 0,
          mb: 1,
          fontSize: {
            xs: m["2xl"],
            md: m["3xl"]
          },
          fontWeight: x.medium,
          lineHeight: T.snug,
          letterSpacing: "-0.02em",
          color: i[900]
        },
        children: "요금 계산기"
      }), a.jsx(S, {
        form: t,
        name: "seats",
        label: "구성원 수",
        suffix: "명",
        min: 0,
        max: 9999,
        format: {
          maximumFractionDigits: 0
        },
        align: "right",
        thousandSeparator: !0,
        fullWidth: !0,
        size: "medium"
      }), a.jsx(S, {
        form: t,
        name: "mailboxes",
        label: "기업메일 사서함 수",
        suffix: "개",
        min: 0,
        max: 999,
        format: {
          maximumFractionDigits: 0
        },
        align: "right",
        fullWidth: !0,
        size: "medium"
      }), a.jsx(S, {
        form: t,
        name: "counselors",
        label: "상담 플러스 킹콜 연결 내선 수",
        suffix: "개",
        min: 0,
        max: 9999,
        format: {
          maximumFractionDigits: 0
        },
        align: "right",
        thousandSeparator: !0,
        fullWidth: !0,
        size: "medium"
      }), a.jsx(p, {
        form: t,
        name: "approval",
        label: "전자결재 사용"
      }), a.jsx(p, {
        form: t,
        name: "attplus",
        label: "근태 플러스 사용"
      }), a.jsx(p, {
        form: t,
        name: "meetplus",
        label: "회의록 플러스 사용"
      }), a.jsx(p, {
        form: t,
        name: "chatplus",
        label: "채팅 플러스 사용"
      }), a.jsx(p, {
        form: t,
        name: "vault",
        label: "대화 보관함 사용"
      })]
    }), a.jsxs(s, {
      sx: {
        display: "grid",
        gap: 2,
        alignContent: "start"
      },
      children: [a.jsx(u, {
        label: "인원 요금",
        detail: n.paidSeats > 0 ? `${C}명 무료 · ${n.paidSeats}명 × ${e(P)}` : `${C}명까지 무료`,
        amount: e(n.seatMonthly)
      }), n.seatDiscount > 0 && a.jsx(u, {
        label: "대량 할인",
        detail: R.filter(b => b.from <= o).map(b => `${b.from}명째부터 ${e(b.price)}`).join(" · "),
        amount: `−${e(n.seatDiscount)}`,
        amountColor: "error.main"
      }), a.jsx(s, {
        sx: {
          borderTop: `1px solid ${i[200]}`
        }
      }), a.jsx(u, {
        label: "기업메일",
        detail: r > 0 ? `사서함 ${Math.floor(r)}개 × ${e(_)}` : "쓰지 않음",
        amount: e(n.mailboxMonthly)
      }), a.jsx(u, {
        label: "전자결재",
        detail: h ? `${Math.max(0, Math.floor(o || 0))}명 × ${e(E)}` : "쓰지 않음",
        amount: e(n.approvalMonthly)
      }), a.jsx(u, {
        label: "근태 플러스",
        detail: j ? `${Math.max(0, Math.floor(o || 0))}명 × ${e(A)}` : "쓰지 않음",
        amount: e(n.attplusMonthly)
      }), a.jsx(u, {
        label: "회의록 플러스",
        detail: g ? `${Math.max(0, Math.floor(o || 0))}명 × ${e(w)}` : "쓰지 않음",
        amount: e(n.meetplusMonthly)
      }), a.jsx(u, {
        label: "상담 플러스",
        detail: d > 0 ? `내선 ${Math.floor(d)}개 × ${e(v)}` : "쓰지 않음",
        amount: e(n.consultplusMonthly)
      }), a.jsx(u, {
        label: "채팅 플러스",
        detail: $ ? `${Math.max(0, Math.floor(o || 0))}명 × ${e(F)}` : "쓰지 않음",
        amount: e(n.chatplusMonthly)
      }), a.jsx(u, {
        label: "대화 보관함",
        detail: f ? `${Math.max(0, Math.floor(o || 0))}명 × ${e(W)}` : "쓰지 않음",
        amount: e(n.vaultMonthly)
      }), a.jsx(s, {
        sx: {
          borderTop: `1px solid ${i[200]}`,
          pt: 2
        },
        children: a.jsx(V, {
          label: "1인당 월 요금",
          amount: e(n.perSeatMonthly),
          tone: "total",
          note: a.jsxs(a.Fragment, {
            children: ["월 합계", " ", a.jsx(s, {
              component: "span",
              sx: {
                color: i[900],
                fontWeight: x.medium
              },
              children: e(n.totalMonthly)
            })]
          })
        })
      }), a.jsxs(s, {
        component: "ul",
        sx: {
          m: 0,
          pl: 2.5,
          display: "grid",
          gap: .5,
          fontSize: m.base,
          color: i[500],
          wordBreak: "keep-all"
        },
        children: [a.jsxs("li", {
          children: ["한 달 내내 쓴 기준 — 중간에 늘거나 줄면 ", a.jsx(c, {
            children: "쓴 날만큼 일할"
          })]
        }), a.jsxs("li", {
          children: [a.jsx(c, {
            children: "다음 달 1일"
          }), " 등록한 카드로 ", a.jsx(c, {
            children: "자동 결제"
          })]
        }), a.jsxs("li", {
          children: ["가입 후 ", z, "일은 ", a.jsx(c, {
            children: "인원 요금 없음"
          }), " · ", a.jsx(c, {
            children: "사서함 1개 무료"
          })]
        }), a.jsxs("li", {
          children: [a.jsx(c, {
            children: "부가세 포함"
          }), " 금액"]
        })]
      })]
    })]
  });
}
export { k as C, N as P, u as Q, c as S, V as T };