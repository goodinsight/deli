import { j as e } from "./react-CjxcGQav.js";
import { B as s, N as r, j as l, aF as d, aG as p, aH as x, aI as m, aJ as h, aA as I, ax as j, P as u, aK as O, aL as S, aM as T, A as E } from "../js.d/main-Cm9wS5wt.js";
import { A as R } from "./AdminPanelSettingsOutlined-eoyukwrm.js";
import { R as f } from "./Reveal-C3c42DZa.js";
import { S as t } from "./homeSx-C09ESIq-.js";
import { F as A, H as P, L as w, T as a, S as n, C as i, I as o, d as F, a as N } from "./featurePageParts-Deueehn5.js";
import { E as _ } from "./emphasize-CAl3kWp2.js";
import { H as y, S as c } from "./screenShots-CYp-Froz.js";
import "./stylis-DdLD6a3t.js";
import "./publicPageSx-9Lwcd6Z3.js";
const C = [{
    icon: l,
    title: "직원 명부",
    points: ["이름으로 검색", "재직·휴직·퇴사로 걸러 보기", "입사일과 근속년수를 목록에서 확인", "업무함 계정이 없는 직원도 등록"]
  }, {
    icon: d,
    title: "부서·직급·직책·근무형태",
    desc: "부서는 **조직도를 그대로** 쓰고, 직급과 직책은 조직이 정합니다.",
    chips: ["정규직", "계약직", "파트타임", "인턴", "프리랜서"]
  }, {
    icon: R,
    title: "인사 담당 권한",
    desc: "조직 소유자가 **인사 담당으로 지정한 구성원만** 명부와 증명서 같은 인사 정보를 다룹니다."
  }, {
    icon: p,
    title: "내 인사 정보",
    desc: "직원 본인은 내 정보에서 자기 인사 정보와 학력·경력·자격증을 확인합니다. 본인이 고치면 **인사 담당에게 알림**이 갑니다."
  }],
  g = [{
    icon: x,
    title: "경력·학력·자격증",
    points: ["직원별 최종학력·자격증·경력 합계를 한 목록에서", "자격 만료일 표시", "포상·징계 기록"]
  }, {
    icon: m,
    title: "교육 관리",
    points: ["교육 한 건에 참여자 여러 명", "이수 여부와 다음 교육일", "법정의무교육 구분", "교육 자료 첨부"]
  }, {
    icon: h,
    title: "발령·이력",
    desc: "발령 전후의 부서·직급·직책이 **그 시점 그대로** 남습니다.",
    chips: ["입사", "전보", "승진", "휴직", "복직", "퇴사"]
  }],
  H = [{
    icon: I,
    title: "증명서 발급",
    desc: "직원을 고르고 미리보기로 확인한 뒤 **PDF 로 발급**합니다.",
    chips: ["재직증명서", "경력증명서", "퇴직증명서", "위촉증명서"]
  }, {
    icon: j,
    title: "발급대장",
    desc: "발급한 증명서는 발급번호와 함께 대장에 남습니다. 대장에서 **발급 당시 내용 그대로** 다시 받습니다."
  }],
  L = [{
    icon: u,
    title: "급여",
    points: ["달마다 급여대장 한 장", "공제를 자동으로 계산", "대장을 확정하면 **급여명세서 PDF**"]
  }, {
    icon: O,
    title: "4대보험",
    desc: "직원별 가입 현황과 **취득·상실 신고할 일을 기한과 함께** 보여 줍니다. 신고는 EDI 에서 하고, 업무함에는 완료를 표시합니다."
  }, {
    icon: S,
    title: "고용지원금",
    desc: "신청했거나 받는 중인 지원금의 다음 할 일을 챙깁니다. 의무 기간 안에 대상 직원이 퇴사하면 **위험을 표시**합니다."
  }, {
    icon: T,
    title: "근로계약",
    points: ["근로계약서 파일 보관", "만료가 가까운 계약을 목록 맨 위에", "계약서가 없는 재직자 알림"]
  }],
  b = {
    icon: E,
    title: "근태와 이어집니다",
    desc: "출퇴근 기록, 휴가·연차, 근무 일정은 **같은 직원 명부로** 이어집니다.",
    link: {
      to: "/attendance",
      label: "근태관리 자세히 보기"
    }
  };
function M() {
  return e.jsxs(s, {
    children: [e.jsx(A, {
      eyebrow: "HR",
      title: e.jsxs(e.Fragment, {
        children: ["직원 명부부터 발령·증명서까지", e.jsx("br", {}), "인사를 한곳에서 관리합니다"]
      }),
      lead: e.jsxs(e.Fragment, {
        children: ["직원 정보와 경력·교육·발령 이력을 ", e.jsx(_, {
          children: "한 명부에 모으고"
        }), " 증명서를 PDF 로 발급합니다.", e.jsx(w, {}), "인사 관리는 기본 제공 기능이라 ", r, "명까지 기간 제한 없이 무료입니다."]
      }),
      children: e.jsx(y, {
        wide: "hr-employee",
        phone: "hr-employees-m",
        wideAlt: "직원 상세 창 — 기본 정보 · 근로조건 · 인적사항",
        phoneAlt: "폰의 직원 목록 — 재직 · 휴직 · 퇴사로 나눈 명부",
        sx: P
      })
    }), e.jsx(s, {
      component: "section",
      id: "roster",
      sx: a,
      children: e.jsxs(s, {
        sx: t,
        children: [e.jsx(n, {
          eyebrow: "ROSTER",
          title: "직원 정보는 명부 한 곳에 모입니다",
          lead: "인사 담당이 명부를 관리하고, 직원은 **자기 정보를 직접 확인**합니다."
        }), e.jsx(i, {
          points: C,
          columns: 2
        })]
      })
    }), e.jsx(s, {
      component: "section",
      id: "records",
      sx: {
        bgcolor: "#fff"
      },
      children: e.jsxs(s, {
        sx: t,
        children: [e.jsx(n, {
          eyebrow: "RECORDS",
          title: "경력·교육·발령이 직원마다 쌓입니다",
          lead: "입사부터 퇴사까지의 변동과 자격·교육 이력을 **직원별로 남깁니다**."
        }), e.jsx(c, {
          wide: "hr-events",
          phone: "hr-events-m",
          alt: "발령 · 이력 화면 — 입사 · 승진 · 전보 · 휴직 · 복직과 발령 전후 부서 · 직급",
          caption: "발령 · 이력 — 입사 · 승진 · 전보 · 휴직 · 복직",
          more: [{
            wide: "hr-careers",
            phone: "hr-careers-m",
            alt: "경력 관리 — 직원별 담당 업무와 총경력 · 사내 경력",
            caption: "경력 관리 — 직원별 총경력 · 사내 경력"
          }, {
            wide: "hr-quals",
            phone: "hr-quals-m",
            alt: "학력 · 자격증 — 직원별 학교 · 전공과 자격증",
            caption: "학력 · 자격증 — 학교 · 전공과 취득한 자격증"
          }],
          sx: o
        }), e.jsx(i, {
          points: g,
          columns: 3
        })]
      })
    }), e.jsx(s, {
      component: "section",
      id: "certificates",
      sx: a,
      children: e.jsxs(s, {
        sx: t,
        children: [e.jsx(n, {
          eyebrow: "CERTIFICATES",
          title: "증명서는 PDF 로 바로 발급합니다",
          lead: "**명부의 정보로 증명서**를 만들고, 발급한 기록은 대장에 남깁니다."
        }), e.jsx(c, {
          wide: "hr-certs",
          phone: "hr-certs-m",
          alt: "증명서 발급 화면 — 증명서 종류와 발급번호 · 용도 · 제출처가 남은 발급대장",
          sx: o
        }), e.jsx(i, {
          points: H,
          columns: 2
        })]
      })
    }), e.jsx(s, {
      component: "section",
      id: "labor",
      sx: {
        bgcolor: "#fff"
      },
      children: e.jsxs(s, {
        sx: t,
        children: [e.jsx(n, {
          eyebrow: "LABOR",
          title: "급여와 4대보험, 근로계약도 같은 명부에서",
          lead: "**노무 관리도 기본 제공 기능**이고, 인사 담당이 다룹니다."
        }), e.jsx(c, {
          wide: "hr-payroll",
          phone: "hr-payroll-m",
          alt: "급여대장 — 직원별 지급 총액과 4대보험 · 세금 공제, 실지급액",
          caption: "급여대장 — 지급 총액 · 공제 · 실지급액",
          more: [{
            wide: "hr-insurance",
            phone: "hr-insurance-m",
            alt: "4대보험 — 직원별 가입 현황과 취득일",
            caption: "4대보험 — 직원별 가입 현황과 취득일"
          }, {
            wide: "hr-contracts",
            phone: "hr-contracts-m",
            alt: "근로계약 — 직원별 계약 기간 · 형태 · 금액",
            caption: "근로계약 — 직원별 계약 기간 · 금액"
          }],
          sx: o
        }), e.jsx(i, {
          points: L,
          columns: 2
        }), e.jsx(f, {
          sx: {
            mt: 2
          },
          children: e.jsx(F, {
            point: b
          })
        })]
      })
    }), e.jsx(N, {
      title: "직원 명부부터 업무함에 옮겨 보세요",
      lead: `인사 관리는 기본 제공 기능입니다. **${r}명까지 기간 제한 없이 무료**입니다.`
    })]
  });
}
export { M as default };