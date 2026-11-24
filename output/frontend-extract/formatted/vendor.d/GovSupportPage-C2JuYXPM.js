const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f || (m.f = ["vendor.d/printQuote-C3fFxEzI.js", "vendor.d/printSvgDocument-DHC1JJCG.js", "js.d/main-Cm9wS5wt.js", "vendor.d/react-CjxcGQav.js", "vendor.d/stylis-DdLD6a3t.js", "css.d/main-BARtwNPI.css", "vendor.d/printDocChrome-BMZLbM8A.js", "css.d/printDocChrome-BUGcyOM6.css", "vendor.d/PercentOutlined-XX2JPqvz.js", "vendor.d/EventRepeatOutlined-BzT6rPrF.js", "vendor.d/ScheduleOutlined-C_7j7r9e.js", "vendor.d/HomeWorkOutlined-BC4KmII5.js", "vendor.d/homeSx-C09ESIq-.js", "vendor.d/publicPageSx-9Lwcd6Z3.js", "vendor.d/featurePageParts-Deueehn5.js", "vendor.d/emphasize-CAl3kWp2.js", "vendor.d/Reveal-C3c42DZa.js", "vendor.d/useSectionScroll-DomJbwFc.js", "vendor.d/PricingCalculator-B_H7Reed.js", "vendor.d/companyInfo-Btqdi-Wt.js"])) => i.map(i => d[i]);
import { j as e, r as E } from "./react-CjxcGQav.js";
import { c as z, a2 as w, a3 as _, a4 as R, N as P, a5 as I, a6 as m, a7 as B, a8 as W, a9 as Q, aa as q, ab as K, ac as G, ad as Y, ae as X, af as J, ag as Z, ah as ee, ai as te, aj as se, ak as oe, _ as ae, B as o, s as u, f as g, d as S, al as O, am as ne, an as le, ao as ie, ap as j, aq as re, ar as x, as as C, l as ce, at as me, T as ue, au as de, av as pe, Y as xe, a0 as he, aw as fe, ax as ge, ay as Se } from "../js.d/main-Cm9wS5wt.js";
import { P as _e } from "./PercentOutlined-XX2JPqvz.js";
import { E as je } from "./EventRepeatOutlined-BzT6rPrF.js";
import { S as Te } from "./ScheduleOutlined-C_7j7r9e.js";
import { H as be } from "./HomeWorkOutlined-BC4KmII5.js";
import { B as ye, a as Pe, S as d, C as Ee } from "./homeSx-C09ESIq-.js";
import { F as Re, L as Ie, T, S as p, C as h, a as Oe } from "./featurePageParts-Deueehn5.js";
import { s as Ce } from "./useSectionScroll-DomJbwFc.js";
import { C as Ae, Q as Ne, T as A, S as N } from "./PricingCalculator-B_H7Reed.js";
import { c as Me } from "./companyInfo-Btqdi-Wt.js";
const $e = z(e.jsx("path", {
    d: "M10.27 12h3.46c.93 0 1.63-.83 1.48-1.75l-.3-1.79C14.67 7.04 13.44 6 12 6S9.33 7.04 9.09 8.47l-.3 1.79c-.15.91.55 1.74 1.48 1.74m.79-3.21c.08-.46.47-.79.94-.79s.86.33.94.79l.2 1.21h-2.28zm-9.4 2.32c-.13.26-.18.57-.1.88.16.69.76 1.03 1.53 1h1.95c.83 0 1.51-.58 1.51-1.29 0-.14-.03-.27-.07-.4-.01-.03-.01-.05.01-.08.09-.16.14-.34.14-.53 0-.31-.14-.6-.36-.82-.03-.03-.03-.06-.02-.1.07-.2.07-.43.01-.65-.16-.43-.55-.72-.99-.74-.03 0-.05-.01-.07-.03-.17-.21-.48-.35-.83-.35-.3 0-.57.1-.75.26-.03.03-.06.03-.09.02-.14-.06-.3-.09-.46-.09-.65 0-1.18.49-1.24 1.12q0 .03-.03.06c-.29.26-.46.65-.41 1.05.03.22.12.43.25.6.03.02.03.06.02.09m14.58 2.54c-1.17-.52-2.61-.9-4.24-.9s-3.07.39-4.24.9C6.68 14.13 6 15.21 6 16.39V18h12v-1.61c0-1.18-.68-2.26-1.76-2.74M8.07 16c.09-.23.27-.42.49-.52 1.1-.49 2.26-.73 3.43-.73 1.18 0 2.33.25 3.43.73.23.1.4.29.49.52zm-6.85-1.42C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58m21.56 0c-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57c0-.81-.48-1.53-1.22-1.85M22 11v-.5c0-1.1-.9-2-2-2h-2c-.42 0-.65.48-.39.81l.7.63c-.19.31-.31.67-.31 1.06 0 1.1.9 2 2 2s2-.9 2-2"
  })),
  L = [12, 24],
  v = 30;
function M(t) {
  const s = Math.round(t / 1.1);
  return {
    supply: s,
    vat: t - s,
    total: t
  };
}
const Fe = ["업무 관리 · 업무 채팅 · 메일 · 일정 · 회의록 · 게시판", "인사 관리: 직원 명부·경력·발령·증명서", "근태 관리: GPS·QR 출퇴근 기록, 근무제(고정·시차 출퇴근·선택·재량·교대) 배정, 근무 일정, 연차 자동 계산·반차·반반차, 직원별 집계·주 52시간 초과 경고", "노무: 급여·4대보험·근로계약"].join(`
`);
function b(t) {
  return Math.max(0, Math.floor(Number(t) || 0));
}
function De(t, s = U(t)) {
  const n = b(t.seats),
    r = b(t.mailboxes),
    a = b(t.counselors),
    l = [];
  l.push({
    name: "업무함 기본 이용료(인원)",
    desc: Fe,
    qty: `${n.toLocaleString("ko-KR")}명`,
    unitPrice: _,
    amount: n * _
  }), t.approval && l.push({
    name: "전자결재",
    desc: "결재 문서 상신·결재선 관리, 휴가신청서·연장근로신청서 승인 시 근태에 자동 반영",
    qty: `${n.toLocaleString("ko-KR")}명`,
    unitPrice: R,
    amount: n * R
  });
  const i = n * _ - s.seatMonthly;
  return i > 0 && l.push({
    name: "무료 인원",
    desc: `구성원 ${P}명까지 인원 요금 무료`,
    qty: `${Math.min(n, P)}명`,
    unitPrice: null,
    amount: -i,
    discount: !0
  }), s.seatDiscount > 0 && l.push({
    name: "인원 구간 할인",
    desc: `넘는 인원 몫만 구간 단가 적용 — ${I.filter(c => c.from <= n).map(c => `${c.from}명째부터 ${m(c.price)}`).join(" · ")}`,
    qty: `${Math.max(0, n - I[0].from + 1).toLocaleString("ko-KR")}명`,
    unitPrice: null,
    amount: -s.seatDiscount,
    discount: !0
  }), r > 0 && l.push({
    name: "기업메일",
    desc: "회사 도메인 연결, 이름@회사 개인·공용 사서함(용량 무제한 — 팀 저장 공간 사용), 규칙 자동 분류·예약 발송",
    qty: `${r.toLocaleString("ko-KR")}개`,
    unitPrice: B,
    amount: s.mailboxMonthly
  }), t.attplus && l.push({
    name: "근태 플러스",
    desc: "근무지 도착·사내 Wi-Fi 연결 시 자동 출근, 사내 Wi-Fi 출퇴근, 근태 보고서",
    qty: `${n.toLocaleString("ko-KR")}명`,
    unitPrice: W,
    amount: s.attplusMonthly
  }), t.meetplus && l.push({
    name: "회의록 플러스",
    desc: `회의 녹음·화상회의의 텍스트 변환을 횟수 제한 없이 사용(조직이 함께 쓰는 한도 — 구성원 1명당 월 ${q}시간)`,
    qty: `${n.toLocaleString("ko-KR")}명`,
    unitPrice: Q,
    amount: s.meetplusMonthly
  }), t.chatplus && l.push({
    name: "채팅 플러스",
    desc: `채팅 AI 요약, 음성 메시지 받아 적기·번역, 채팅 메시지 번역(조직 한도 구성원 1명당 월 번역 ${G}건·음성 ${Y}시간)`,
    qty: `${n.toLocaleString("ko-KR")}명`,
    unitPrice: K,
    amount: s.chatplusMonthly
  }), t.vault && l.push({
    name: "대화 보관함",
    desc: `채팅에 올린 사진·동영상·파일을 3년 동안 보관(쓰지 않으면 ${J}일 뒤 숨김)`,
    qty: `${n.toLocaleString("ko-KR")}명`,
    unitPrice: X,
    amount: s.vaultMonthly
  }), a > 0 && l.push({
    name: "상담 플러스",
    desc: `킹콜 통화 연동, 상담 통화 받아 적기·화자 분리·요약, 통화 녹음 보관(받아 적기 내선 1개당 월 ${ee}시간)`,
    qty: `내선 ${a.toLocaleString("ko-KR")}개`,
    unitPrice: Z,
    amount: s.consultplusMonthly
  }), l;
}
function U(t) {
  return w(t.seats, t.mailboxes, t.approval, t.vault, t.attplus, t.meetplus, t.counselors, t.chatplus);
}
function V(t) {
  const s = U(t),
    n = De(t, s),
    r = s.totalMonthly;
  return {
    quote: s,
    lines: n,
    monthly: M(r),
    contract: M(r * t.months)
  };
}
function Le(t) {
  return ["금액은 모두 부가세 포함 요금입니다(공급가액 = 합계 ÷ 1.1, 원 미만 반올림).", `약정 기간(${t.months}개월) 동안 위 월 금액 이상을 매달 1일 등록한 카드로 냅니다(후불).`, `달 중간에 인원·서비스가 바뀌면 쓴 날만큼 일할 계산합니다. 구성원 ${P}명까지 인원 요금 무료.`, `화상회의는 쓴 만큼 냅니다(참가자 1명·1시간 ${m(se)}, 조직당 월 ${te}시간 무료) — 견적 금액 제외.`, "지원 여부·금액은 고용센터 심사로 정해집니다. 결제 증빙은 요금 화면의 카드 매출전표입니다."];
}
function y(t, s = 2) {
  return String(t).padStart(s, "0");
}
function $(t) {
  return `${t.getFullYear()}년 ${t.getMonth() + 1}월 ${t.getDate()}일`;
}
function ve(t) {
  const s = new Uint16Array(1);
  return typeof crypto < "u" && crypto.getRandomValues ? crypto.getRandomValues(s) : s[0] = Math.floor(Math.random() * 1e4), `TH-Q-${t.getFullYear()}${y(t.getMonth() + 1)}${y(t.getDate())}-${y(s[0] % 1e4, 4)}`;
}
function at(t, s = new Date()) {
  const {
      lines: n,
      monthly: r,
      contract: a
    } = V(t),
    l = new Date(s.getFullYear(), s.getMonth(), s.getDate() + v);
  return {
    quoteNo: ve(s),
    issueDate: $(s),
    validUntil: $(l),
    input: t,
    lines: n,
    monthly: r,
    months: t.months,
    contract: a,
    notes: Le(t),
    supplier: Me
  };
}
const k = {
  company: "",
  manager: "",
  bizNo: "",
  phone: "",
  email: "",
  seats: 10,
  mailboxes: 0,
  approval: !1,
  attplus: !1,
  meetplus: !1,
  chatplus: !1,
  vault: !1,
  counselors: 0,
  months: 24
};
function F(t) {
  const s = Number(t);
  return L.includes(s) ? s : k.months;
}
function Ue() {
  const [t, s] = E.useState("idle"),
    [n, r] = E.useState(""),
    a = oe({
      formId: "gov-support-quote",
      initialValues: k,
      onValidate: i => String(i.company ?? "").trim() ? Math.floor(Number(i.seats) || 0) < 1 ? (s("error"), r("구성원 수는 1명 이상이어야 합니다."), !1) : (r(""), !0) : (s("error"), r("회사(기관)명을 입력하세요."), !1),
      onSubmit: async i => {
        s("printing");
        try {
          const {
            printQuote: c
          } = await ae(async () => {
            const {
              printQuote: H
            } = await import("./printQuote-C3fFxEzI.js");
            return {
              printQuote: H
            };
          }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
          await c({
            ...i,
            months: F(i.months)
          }), s("idle");
        } catch (c) {
          s("error"), r(c instanceof Error && c.message ? c.message : "견적서를 만들지 못했습니다. 잠시 후 다시 시도해 주세요.");
        }
      }
    }),
    l = {
      company: String(a.useFormValue("company") ?? ""),
      manager: String(a.useFormValue("manager") ?? ""),
      bizNo: String(a.useFormValue("bizNo") ?? ""),
      phone: String(a.useFormValue("phone") ?? ""),
      email: String(a.useFormValue("email") ?? ""),
      seats: Number(a.useFormValue("seats") ?? 0),
      mailboxes: Number(a.useFormValue("mailboxes") ?? 0),
      approval: !!a.useFormValue("approval"),
      attplus: !!a.useFormValue("attplus"),
      meetplus: !!a.useFormValue("meetplus"),
      chatplus: !!a.useFormValue("chatplus"),
      vault: !!a.useFormValue("vault"),
      counselors: Number(a.useFormValue("counselors") ?? 0),
      months: F(a.useFormValue("months"))
    };
  return {
    form: a,
    status: t,
    message: n,
    input: l,
    summary: V(l)
  };
}
const Ve = L.map(t => ({
    value: t,
    label: `${t / 12}년(${t}개월)`
  })),
  D = {
    m: 0,
    fontSize: S.lg,
    fontWeight: g.medium,
    color: u[900]
  },
  f = {
    display: "grid",
    gap: 2.5,
    gridTemplateColumns: {
      xs: "minmax(0, 1fr)",
      sm: "repeat(2, minmax(0, 1fr))"
    }
  };
function ke() {
  const {
      form: t,
      status: s,
      message: n,
      input: r,
      summary: a
    } = Ue(),
    l = s === "printing";
  return e.jsxs(o, {
    component: "form",
    onSubmit: t.submit,
    sx: {
      ...Ae,
      mt: 6
    },
    children: [e.jsxs(o, {
      sx: {
        display: "grid",
        gap: 2.5,
        alignContent: "start",
        gridTemplateColumns: "minmax(0, 1fr)"
      },
      children: [e.jsx(o, {
        component: "h3",
        sx: D,
        children: "받는 곳"
      }), e.jsx(O, {
        form: t,
        name: "company",
        label: "회사 / 기관명 (필수)",
        placeholder: "예) (주)와우그로스",
        fullWidth: !0,
        size: "medium"
      }), e.jsxs(o, {
        sx: f,
        children: [e.jsx(O, {
          form: t,
          name: "manager",
          label: "담당자 이름",
          placeholder: "홍길동",
          fullWidth: !0,
          size: "medium"
        }), e.jsx(ne, {
          form: t,
          name: "bizNo",
          label: "사업자등록번호",
          includeDash: !0,
          fullWidth: !0,
          size: "medium"
        })]
      }), e.jsxs(o, {
        sx: f,
        children: [e.jsx(le, {
          form: t,
          name: "phone",
          label: "연락처",
          placeholder: "010-0000-0000",
          fullWidth: !0,
          size: "medium"
        }), e.jsx(ie, {
          form: t,
          name: "email",
          label: "이메일",
          placeholder: "you@example.com",
          fullWidth: !0,
          size: "medium"
        })]
      }), e.jsx(o, {
        component: "h3",
        sx: {
          ...D,
          mt: 1
        },
        children: "견적 내용"
      }), e.jsxs(o, {
        sx: f,
        children: [e.jsx(j, {
          form: t,
          name: "seats",
          label: "구성원 수 (필수)",
          suffix: "명",
          min: 1,
          max: 9999,
          format: {
            maximumFractionDigits: 0
          },
          align: "right",
          thousandSeparator: !0,
          fullWidth: !0,
          size: "medium"
        }), e.jsx(re, {
          form: t,
          name: "months",
          label: "약정 기간",
          options: Ve,
          fullWidth: !0,
          size: "medium"
        })]
      }), e.jsxs(o, {
        sx: f,
        children: [e.jsx(j, {
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
        }), e.jsx(j, {
          form: t,
          name: "counselors",
          label: "상담 플러스 내선 수",
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
        })]
      }), e.jsxs(o, {
        sx: {
          display: "grid",
          gridTemplateColumns: {
            xs: "minmax(0, 1fr)",
            sm: "repeat(2, minmax(0, 1fr))"
          }
        },
        children: [e.jsx(x, {
          form: t,
          name: "approval",
          label: "전자결재"
        }), e.jsx(x, {
          form: t,
          name: "attplus",
          label: "근태 플러스"
        }), e.jsx(x, {
          form: t,
          name: "meetplus",
          label: "회의록 플러스"
        }), e.jsx(x, {
          form: t,
          name: "chatplus",
          label: "채팅 플러스"
        }), e.jsx(x, {
          form: t,
          name: "vault",
          label: "대화 보관함"
        })]
      })]
    }), e.jsxs(o, {
      sx: {
        display: "grid",
        gap: 2,
        alignContent: "start",
        gridTemplateColumns: "minmax(0, 1fr)"
      },
      children: [a.lines.map(i => e.jsx(Ne, {
        label: i.name,
        detail: i.unitPrice == null ? i.qty : `${i.qty} × ${m(i.unitPrice)}`,
        amount: i.amount < 0 ? `−${m(-i.amount)}` : m(i.amount),
        amountColor: i.discount ? "error.main" : void 0
      }, i.name)), e.jsxs(o, {
        sx: {
          borderTop: `1px solid ${u[200]}`,
          pt: 2,
          display: "grid",
          gap: 2
        },
        children: [e.jsx(A, {
          label: "월 합계",
          amount: m(a.monthly.total)
        }), e.jsx(A, {
          label: `약정 총액(${r.months}개월)`,
          amount: m(a.contract.total),
          tone: "total",
          note: e.jsxs(e.Fragment, {
            children: ["공급가액", " ", e.jsx(o, {
              component: "span",
              sx: {
                color: u[900],
                fontWeight: g.medium
              },
              children: m(a.contract.supply)
            }), " ", "· 부가세", " ", e.jsx(o, {
              component: "span",
              sx: {
                color: u[900],
                fontWeight: g.medium
              },
              children: m(a.contract.vat)
            })]
          })
        })]
      }), e.jsxs(o, {
        component: "ul",
        sx: {
          m: 0,
          pl: 2.5,
          display: "grid",
          gap: .5,
          fontSize: S.base,
          color: u[500],
          wordBreak: "keep-all"
        },
        children: [e.jsxs("li", {
          children: [e.jsx(N, {
            children: "부가세 포함"
          }), " 금액 · 견적서에는 공급가액과 부가세를 나눠 적습니다"]
        }), e.jsxs("li", {
          children: ["화상회의는 ", e.jsx(N, {
            children: "쓴 만큼"
          }), " 내는 요금이라 견적 금액에 넣지 않습니다"]
        }), e.jsxs("li", {
          children: ["견적서 유효기간은 견적일부터 ", v, "일입니다"]
        })]
      }), s === "error" && n && e.jsx(o, {
        sx: {
          borderRadius: 2,
          bgcolor: C.rose50,
          px: 2,
          py: 1.5,
          fontSize: S.sm,
          fontWeight: g.semibold,
          color: C.rose700
        },
        children: n
      }), e.jsx(o, {
        component: "button",
        type: "submit",
        disabled: l,
        sx: {
          ...ye,
          width: "100%",
          py: 2,
          border: "none",
          cursor: "pointer",
          fontFamily: "inherit",
          "&:disabled": {
            opacity: .6,
            cursor: "default"
          }
        },
        children: l ? "견적서 만드는 중…" : "견적서 내려받기(PDF)"
      }), e.jsx(o, {
        component: "p",
        sx: {
          m: 0,
          fontSize: S.sm,
          lineHeight: ce.relaxed,
          color: u[500],
          wordBreak: "keep-all"
        },
        children: "인쇄 창이 열리면 대상에서 ‘PDF로 저장’을 고르세요. 입력한 내용은 서버로 보내지 않고 이 브라우저에서만 견적서를 만듭니다."
      })]
    })]
  });
}
const He = [{
    icon: me,
    title: "신청할 수 있는 기업",
    desc: "**우선지원대상기업**(중소기업 포함)과 **중견기업**입니다. 우선지원대상기업인지는 고용24 마이페이지에서 확인합니다."
  }, {
    icon: _e,
    title: "지원 금액",
    desc: "시스템 설치비 · 사용료(부가세 제외)의 **80%**, **1,000만 원** 한도에서 지원합니다."
  }, {
    icon: $e,
    tag: "30인 미만",
    title: "소규모 사업장 특례",
    desc: "피보험자 30인 미만 사업주의 **출퇴근 등 관리시스템 사용료**는 1년 **180만 원** 한도에서 전액 지원합니다."
  }, {
    icon: ue,
    title: "지원하는 제도",
    desc: "아래 제도를 도입 · 개선하고 활용하는 데 필요한 시스템입니다.",
    chips: ["시차출퇴근", "선택근무", "재택근무", "원격근무", "근로시간 단축", "모성보호 · 일가정 양립"]
  }, {
    icon: je,
    title: "활용 요건",
    points: ["지원금을 받을 때 그 제도를 **실제로 쓰고 있어야** 합니다", "사용의무기간 동안 지원받은 목적대로 씁니다(구독형은 계약한 약정 기간, 최대 2년)"]
  }, {
    icon: de,
    title: "지원하지 않는 것",
    desc: "참여신청서 · 사업계획서를 내기 **전에** 이미 설치(계약 포함)했거나 설치 중인 시스템은 지원하지 않습니다."
  }],
  ze = [{
    icon: Te,
    tag: "시차출퇴근 · 선택근무",
    title: "근무제를 직원별로",
    desc: "고정 · 시차 출퇴근 · 선택 근무(코어타임) · 재량 · 교대 근무를 직원마다 배정하고, 출퇴근 시각을 전자적으로 기록합니다."
  }, {
    icon: be,
    tag: "재택 · 원격근무",
    title: "어디서 일해도 기록이 남게",
    desc: "승인된 재택 · 출장 날은 위치 확인 없이 출퇴근을 기록하고, 업무 · 채팅 · 화상회의로 사무실처럼 일합니다."
  }, {
    icon: pe,
    tag: "근로시간 단축",
    title: "근로시간을 정확하게",
    points: ["출퇴근을 전자적으로 기록", "기록을 고치면 정정 요청 · 승인으로 남음", "주 52시간 초과 경고"]
  }, {
    icon: xe,
    tag: "휴가 · 연차",
    title: "휴가는 신청부터 반영까지",
    desc: "연차를 자동으로 계산하고 반차 · 반반차로 씁니다. 휴가신청서가 결재되면 근태에 자동으로 반영됩니다(전자결재 연동)."
  }, {
    icon: he,
    tag: "활용 증빙",
    title: "쓰고 있다는 기록",
    desc: "직원별 집계를 엑셀로 내보내고, 마감한 달은 잠가 근태 보고서로 확인합니다.",
    link: {
      to: "/attendance",
      label: "근태관리 자세히 보기"
    }
  }],
  we = [{
    tag: "1",
    title: "신청이 먼저, 결제는 나중입니다",
    desc: "참여신청서 · 사업계획서를 낸 날 **이후에** 도입 · 결제한 것만 지원합니다. 이미 유료로 쓰던 사용료는 거슬러 받을 수 없습니다."
  }, {
    tag: "2",
    title: "약정은 최대 2년입니다",
    desc: "구독형은 계약할 때 정한 사용 기간(최대 2년)이 사용의무기간입니다. 그동안 지원받은 목적대로 써야 합니다."
  }, {
    tag: "3",
    title: "받을 때 쓰고 있어야 합니다",
    desc: "유연근무 등은 지원금을 받는 시점에 실제로 활용하고 있어야 하고, 연차 · 모성보호 제도도 그때 활용 실적이 있어야 합니다."
  }, {
    tag: "4",
    title: "돌려줘야 하는 경우",
    points: ["목적과 다르게 쓰거나 쓰지 않은 경우", "지원받은 장비를 판 경우, 폐업한 경우", "같은 근로자 · 같은 기간에 다른 지원금을 겹쳐 받은 경우"]
  }],
  Be = [{
    tag: "1단계",
    title: "계획서 제출 · 승인",
    desc: "참여신청서 · 사업계획서와 기능별 견적서를 관할 고용센터에 냅니다(온라인 가능). 결과는 보통 2개월 안에 나오고, 일부만 승인될 수 있습니다."
  }, {
    tag: "2단계 · 선택",
    title: "이행보증보험 가입",
    desc: "선금을 받을 때만 필요합니다. 국가(고용노동부)를 피보험자로 가입합니다."
  }, {
    tag: "3단계 · 선택",
    title: "선금 신청",
    desc: "승인 통보 다음 달부터 승인 금액의 50% 안에서 받을 수 있습니다. 건너뛰고 나중에 한꺼번에 받아도 됩니다."
  }, {
    tag: "4단계",
    title: "도입",
    desc: "승인 다음 달부터 6개월 안에 도입을 마칩니다. 늦어지면 기간이 끝나기 전에 고용센터 승인을 받아 6개월까지 늘릴 수 있습니다."
  }, {
    tag: "5단계",
    title: "잔금 신청 · 지급",
    desc: "도입을 마친 다음 달부터 1년 안에 신청합니다. 목적대로 썼는지 확인한 뒤 보통 14일 안에 결과가 나옵니다. 30인 미만 사용료는 3개월마다 신청할 수 있습니다."
  }],
  We = [{
    icon: fe,
    title: "계획서를 낼 때",
    points: ["일 · 가정 양립 환경개선 참여신청서", "시스템 지원 사업계획서", "기능별 견적서(기능 설명과 기능별 금액)", "심사 우대 서류(해당 기업만 — 가족친화 인증 등)"]
  }, {
    icon: ge,
    title: "선금을 받을 때",
    points: ["지원금 신청서", "이행보증보험증권"]
  }, {
    icon: Se,
    title: "잔금을 받을 때",
    points: ["지원금 신청서", "투자금 영수증(업무함 요금 화면의 카드 매출전표)", "입금 내역 등 집행 증빙"]
  }];
function Qe() {
  return e.jsxs(o, {
    children: [e.jsx(Re, {
      eyebrow: "GOVERNMENT SUPPORT",
      title: e.jsxs(e.Fragment, {
        children: ["업무함 도입 비용,", e.jsx("br", {}), "정부 지원금으로 덜어 보세요"]
      }),
      lead: e.jsxs(e.Fragment, {
        children: ["고용노동부 일 · 생활 균형 인프라 구축비는 유연근무 · 근로시간 단축 등에 쓰는 시스템의 설치비와 사용료를 지원합니다.", e.jsx(Ie, {}), "투자 비용의 80%(1,000만 원 한도), 30인 미만 사업장의 출퇴근 관리시스템 사용료는 1년 180만 원까지 전액입니다."]
      }),
      extraCta: e.jsx(o, {
        component: "a",
        href: "#quote",
        onClick: t => {
          t.preventDefault(), Ce("quote");
        },
        sx: {
          ...Pe,
          width: {
            xs: "100%",
            sm: "auto"
          }
        },
        children: "견적서 만들기"
      })
    }), e.jsx(o, {
      component: "section",
      id: "summary",
      sx: T,
      children: e.jsxs(o, {
        sx: d,
        children: [e.jsx(p, {
          eyebrow: "SUMMARY",
          title: "한눈에 보는 지원 조건",
          lead: "유연근무 · 근로시간 단축 · 모성보호 같은 제도를 운영하는 데 필요한 시스템 비용을 나라가 나눠 냅니다."
        }), e.jsx(h, {
          points: He,
          columns: 3
        })]
      })
    }), e.jsx(o, {
      component: "section",
      id: "taskham",
      sx: {
        bgcolor: "#fff"
      },
      children: e.jsxs(o, {
        sx: d,
        children: [e.jsx(p, {
          eyebrow: "WITH TASKHAM",
          title: "업무함 하나로 제도 운영과 기록을 갖춥니다",
          lead: "협업과 근태가 한 서비스라 따로 사서 잇지 않아도 됩니다. 지원 요건인 활용 실적도 업무함에 그대로 남습니다."
        }), e.jsx(h, {
          points: ze,
          columns: 3
        })]
      })
    }), e.jsx(o, {
      component: "section",
      id: "check",
      sx: T,
      children: e.jsxs(o, {
        sx: d,
        children: [e.jsx(p, {
          eyebrow: "CHECK",
          title: "신청 전에 꼭 확인하세요",
          lead: "순서를 놓치면 지원을 받지 못하거나 받은 돈을 돌려줘야 할 수 있습니다."
        }), e.jsx(h, {
          points: we,
          columns: 2
        })]
      })
    }), e.jsx(o, {
      component: "section",
      id: "steps",
      sx: {
        bgcolor: "#fff"
      },
      children: e.jsxs(o, {
        sx: d,
        children: [e.jsx(p, {
          eyebrow: "STEPS",
          title: "신청은 이렇게 진행됩니다",
          lead: "선금을 받지 않으면 2 · 3단계는 건너뛰고, 도입을 마친 뒤 한꺼번에 받습니다."
        }), e.jsx(h, {
          points: Be,
          columns: 3
        })]
      })
    }), e.jsx(o, {
      component: "section",
      id: "documents",
      sx: T,
      children: e.jsxs(o, {
        sx: d,
        children: [e.jsx(p, {
          eyebrow: "DOCUMENTS",
          title: "단계마다 내는 서류",
          lead: "계획서에 붙이는 기능별 견적서는 아래에서 바로 만들어 내려받을 수 있습니다. 잔금을 받을 때 내는 영수증은 업무함 요금 화면의 카드 매출전표입니다."
        }), e.jsx(h, {
          points: We,
          columns: 3
        }), e.jsxs(o, {
          component: "p",
          sx: {
            ...Ee,
            mt: 6,
            textAlign: "center",
            color: u[500],
            maxWidth: 820,
            mx: "auto"
          },
          children: ["이 안내는 고용24 ‘일 · 가정 양립 환경개선 지원’ 제도 안내(최종 수정 2026-01-19)를 바탕으로 정리했습니다. 지원 비율 · 한도 · 요건은 바뀔 수 있고, 지원 여부와 금액은 고용센터 심사로 정해집니다. 업무함을 도입한다고 지원금이 보장되지는 않으니 신청 전에", " ", e.jsx(o, {
            component: "a",
            href: "https://www.work24.go.kr",
            target: "_blank",
            rel: "noopener noreferrer",
            sx: {
              color: "inherit",
              textDecoration: "underline"
            },
            children: "고용24"
          }), " ", "또는 관할 고용센터에서 최신 내용을 확인하세요."]
        })]
      })
    }), e.jsx(o, {
      component: "section",
      id: "quote",
      sx: {
        bgcolor: "#fff"
      },
      children: e.jsxs(o, {
        sx: d,
        children: [e.jsx(p, {
          eyebrow: "QUOTE",
          title: "기능별 견적서를 바로 만드세요",
          lead: "인원과 쓸 서비스, 약정 기간을 고르면 기능 설명과 기능별 금액이 담긴 견적서가 만들어집니다. 로그인하지 않아도 됩니다."
        }), e.jsx(ke, {})]
      })
    }), e.jsx(Oe, {
      title: "지원금 신청, 업무함이 함께 준비합니다",
      lead: "신청 절차나 도입이 궁금하면 상담 신청을 남겨 주세요. 업무함은 가입하고 바로 써 볼 수 있습니다."
    })]
  });
}
const nt = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: Qe
}, Symbol.toStringTag, {
  value: "Module"
}));
export { nt as G, at as b };