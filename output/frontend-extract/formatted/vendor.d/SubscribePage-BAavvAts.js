import { j as e, u as B, r as E } from "./react-CjxcGQav.js";
import { c as N, a2 as $, B as o, dR as W, s as t, f as i, d as s, b as c, l as d, N as b, a5 as z, br as D, bS as H, a3 as X } from "../js.d/main-Cm9wS5wt.js";
import { A as P } from "./AddRounded-DeRMyh-W.js";
import { A as k } from "./Reveal-C3c42DZa.js";
import { P as L } from "./publicPageSx-9Lwcd6Z3.js";
import { u as F, d as G, E as O, H as U, L as Y, B as K } from "./homeSx-C09ESIq-.js";
const q = N(e.jsx("path", {
    d: "M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1"
  })),
  p = b + 1,
  m = 999,
  x = n => `${n.toLocaleString("ko-KR")}원`,
  R = n => Math.min(m, Math.max(p, n)),
  f = {
    width: {
      xs: 44,
      md: 60
    },
    height: {
      xs: 44,
      md: 60
    },
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
    lineHeight: d.none,
    border: `1px solid ${t[300]}`,
    bgcolor: "#fff",
    color: t[700],
    cursor: "pointer",
    "&:hover": {
      borderColor: c[600],
      color: c[600]
    },
    "&:disabled": {
      color: t[300],
      borderColor: t[200],
      cursor: "default"
    }
  },
  I = {
    ...f,
    width: "auto",
    minWidth: {
      xs: 44,
      md: 60
    },
    px: {
      xs: 1.25,
      sm: 1.75
    },
    pb: "2px",
    fontSize: {
      xs: s.base,
      md: s.lg
    },
    fontWeight: i.medium,
    lineHeight: d.none,
    fontFamily: "inherit",
    color: t[600],
    whiteSpace: "nowrap"
  };
function l({
  label: n,
  value: S,
  strong: r = !1,
  valueColor: u
}) {
  return e.jsxs(o, {
    sx: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 2
    },
    children: [e.jsx(o, {
      component: "span",
      sx: {
        fontSize: r ? s.lg : s.base,
        fontWeight: r ? i.medium : i.normal,
        color: r ? t[900] : t[500],
        whiteSpace: "nowrap"
      },
      children: n
    }), e.jsx(o, {
      component: "span",
      sx: {
        fontSize: r ? s["2xl"] : s.base,
        fontWeight: r ? i.medium : i.normal,
        color: u ?? (r ? c[900] : t[900]),
        whiteSpace: "nowrap"
      },
      children: S
    })]
  });
}
function se({
  embedded: n = !1
} = {}) {
  const r = F().to !== "/signup",
    u = B(),
    [a, g] = E.useState(p + 1),
    [C, _] = E.useState(!1),
    M = a - b,
    {
      seatMonthly: A,
      seatDiscount: j,
      totalMonthly: v
    } = $(a, 0),
    y = h => g(T => R(T + h)),
    w = () => {
      if (!r) {
        H("/subscribe"), u("/login", {
          state: {
            from: "/subscribe"
          }
        });
        return;
      }
      _(!0);
    };
  return e.jsx(o, {
    component: "section",
    sx: {
      bgcolor: "#fff"
    },
    children: e.jsxs(o, {
      sx: {
        ...L,
        ...(n ? {
          px: 0,
          pt: 0,
          pb: 1
        } : {
          py: {
            xs: 6,
            md: 10
          }
        })
      },
      children: [e.jsxs(o, {
        sx: n ? {
          textAlign: "left"
        } : G,
        children: [!n && e.jsxs(e.Fragment, {
          children: [e.jsx(o, {
            component: "p",
            sx: O,
            children: "SUBSCRIBE"
          }), e.jsx(o, {
            component: "h1",
            sx: U,
            children: "구독"
          })]
        }), e.jsxs(o, {
          component: "p",
          sx: {
            ...Y,
            ...(n ? {
              mt: 0
            } : null)
          },
          children: ["인원을 고르면 예상 월 요금이 바로 계산됩니다.", e.jsx("br", {}), "3명까지는 계속 무료이고, 쓴 만큼 다음 달 1일에 결제됩니다."]
        })]
      }), e.jsxs(o, {
        sx: {
          mt: n ? 4 : {
            xs: 5,
            md: 7
          },
          mx: "auto",
          maxWidth: 560,
          display: "flex",
          flexDirection: "column",
          gap: 3
        },
        children: [e.jsxs(o, {
          sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: {
              xs: 1.25,
              sm: 2.5
            },
            mb: {
              xs: 1,
              md: 3
            }
          },
          children: [e.jsx(W, {
            value: a,
            onValueChange: h => g(R(h ?? p)),
            min: p,
            max: m,
            suffix: "명",
            label: "팀 인원",
            fullWidth: !1,
            stepperDecrementIcon: e.jsx(q, {}),
            stepperIncrementIcon: e.jsx(P, {}),
            stepperSx: {
              border: "none",
              bgcolor: "transparent",
              overflow: "visible",
              height: "auto",
              gap: {
                xs: 1.25,
                sm: 2.5
              }
            },
            stepperDecrementButtonSx: f,
            stepperIncrementButtonSx: f,
            stepperCenterSx: {
              flex: "0 0 auto",
              minWidth: {
                xs: 48,
                md: 64
              },
              userSelect: "none",
              "& > .MuiTypography-root": {
                px: .75
              },
              "& .MuiTypography-root": {
                fontSize: {
                  xs: s["3xl"],
                  md: s["5xl"]
                },
                fontWeight: i.medium,
                lineHeight: d.none,
                color: c[900]
              },
              "& .MuiTypography-body2": {
                fontSize: {
                  xs: s.lg,
                  md: s["2xl"]
                },
                fontWeight: i.normal,
                color: t[500],
                ml: 1
              }
            }
          }), e.jsx(o, {
            component: "button",
            type: "button",
            disabled: a >= m,
            onClick: () => y(5),
            sx: I,
            children: "+5"
          }), e.jsx(o, {
            component: "button",
            type: "button",
            disabled: a >= m,
            onClick: () => y(10),
            sx: I,
            children: "+10"
          })]
        }), e.jsxs(o, {
          sx: {
            borderRadius: 3,
            bgcolor: t[50],
            px: {
              xs: 2.5,
              md: 3
            },
            py: {
              xs: 2.5,
              md: 3
            },
            display: "grid",
            gap: .75
          },
          children: [e.jsx(l, {
            label: "1인당 요금",
            value: `월 ${x(X)}`
          }), e.jsx(l, {
            label: `무료 인원 ${Math.min(a, b)}명`,
            value: "0원"
          }), e.jsx(l, {
            label: `유료 인원 ${M}명`,
            value: `월 ${x(A)}`
          }), j > 0 && e.jsx(l, {
            label: `대량 할인(${z[0].from}명째부터)`,
            value: `−${x(j)}`,
            valueColor: "error.main"
          }), e.jsx(l, {
            label: "저장 공간",
            value: `${a * 5}GB`
          }), e.jsx(l, {
            label: "결제일",
            value: "매달 1일 · 지난달 쓴 만큼"
          }), e.jsx(l, {
            label: "첫 결제",
            value: `체험 ${D}일이 끝난 다음 달 1일`
          }), e.jsx(o, {
            sx: {
              borderTop: `1px solid ${t[200]}`,
              my: .5
            }
          }), e.jsx(l, {
            strong: !0,
            label: "예상 월 요금",
            value: x(v)
          })]
        }), e.jsxs(o, {
          children: [e.jsxs(o, {
            component: "button",
            type: "button",
            onClick: w,
            sx: {
              ...K,
              width: "100%",
              border: "none",
              cursor: "pointer",
              fontSize: {
                xs: s.lg,
                md: s.xl
              },
              pt: "15px",
              pb: "17px"
            },
            children: ["카드 등록하고 구독하기", e.jsx(k, {
              sx: {
                fontSize: 20
              }
            })]
          }), e.jsx(o, {
            sx: {
              mt: 3,
              textAlign: "center",
              fontSize: s.sm,
              color: t[500]
            },
            children: "부가세가 포함된 금액이며, 언제든 인원을 줄이거나 해지할 수 있습니다(쓴 날까지만 계산)."
          }), C && e.jsx(o, {
            sx: {
              mt: 2,
              borderRadius: 2,
              border: `1px solid ${c[100]}`,
              bgcolor: c[50],
              px: 2.5,
              py: 2,
              fontSize: s.base,
              lineHeight: d.relaxed,
              color: c[900],
              wordBreak: "keep-all"
            },
            children: "카드 결제 연동을 준비하고 있습니다. 준비되는 대로 이 화면에서 카드를 등록하실 수 있습니다."
          })]
        })]
      })]
    })
  });
}
export { se as S };