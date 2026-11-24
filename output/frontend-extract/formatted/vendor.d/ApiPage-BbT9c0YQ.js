import { j as e, r as u, L as l } from "./react-CjxcGQav.js";
import { c as b, B as t, b1 as d, T as j, bB as f, k as y, S as I, m as S, n as g, b as i, bC as k, bD as O, bE as _, a1 as T } from "../js.d/main-Cm9wS5wt.js";
import { H as E } from "./HowToRegOutlined-Cua-bhim.js";
import { L as C } from "./LoginOutlined-9oyiYA2J.js";
import { T as B } from "./TuneOutlined-91VtWDYC.js";
import { T as w } from "./ToggleOnOutlined-5BVdqdOm.js";
import { F as M } from "./FingerprintOutlined-B7f6E0Pe.js";
import { C as N } from "./CodeBlock-DjLPtoQG.js";
import { a as h, S as a, B as K } from "./homeSx-C09ESIq-.js";
import { F as L, L as Y, T as m, S as c, C as r, a as v } from "./featurePageParts-Deueehn5.js";
import "./stylis-DdLD6a3t.js";
import "./CheckRounded-q96oOTwH.js";
import "./publicPageSx-9Lwcd6Z3.js";
import "./emphasize-CAl3kWp2.js";
import "./Reveal-C3c42DZa.js";
const H = b(e.jsx("path", {
    d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M4 9h10.5v3.5H4zm0 5.5h10.5V18H4zM20 18h-3.5V9H20z"
  })),
  X = "베타",
  F = [{
    icon: j,
    title: "작업공간 API",
    desc: "사내 시스템에서 업무함의 업무를 읽고 씁니다. 조직 구성원의 이름으로 움직여, 업무함에서 직접 한 것과 결과가 같습니다.",
    chips: ["업무 등록·수정", "댓글", "확인 요청", "활동 기록"]
  }, {
    icon: f,
    title: "게시판 API",
    desc: "업무함에서 쓴 공지사항 같은 게시판 글을 홈페이지에 그대로 보입니다. 허용하면 바깥에서 글을 쓰고 고칩니다.",
    chips: ["글 목록·상세", "첨부·그림 주소", "글 쓰기·수정"]
  }, {
    icon: y,
    title: "고객 API",
    desc: "서버에서 고객 명부와 상담 내역을 읽고 씁니다. 홈페이지 문의 폼으로 들어온 사람을 고객으로 넣고 상담으로 남깁니다.",
    chips: ["고객 등록·수정", "전화번호로 찾기", "상담 기록"]
  }, {
    icon: I,
    title: "고객센터 API",
    desc: "홈페이지 · 서비스로 들어온 문의를 작업공간의 업무로 받고, 직원이 단 답변을 읽어 갑니다.",
    chips: ["문의 접수", "답변 읽기", "추가 글"]
  }, {
    icon: S,
    tag: X,
    title: "예약 API",
    desc: "자체 예약 화면 · 챗봇에서 예약을 읽고 넣고 고칩니다. 빈 시간도 조회합니다.",
    chips: ["빈 시간 조회", "예약 등록·수정", "취소"]
  }, {
    icon: E,
    title: "회원 API",
    desc: "홈페이지의 회원 가입·로그인을 업무함에 맡깁니다. 브라우저에서 바로 부르므로 서버를 따로 만들지 않아도 됩니다.",
    chips: ["가입", "로그인", "내 정보", "비밀번호 찾기"]
  }, {
    icon: g,
    title: "회계 연동 API",
    desc: "판매 · 거래 플랫폼에서 생긴 매출 · 지출을 조직의 회계 장부에 넣고, 넣은 줄을 고치고 취소합니다.",
    chips: ["매출·지출 넣기", "한 번에 여러 건", "취소"]
  }],
  R = [{
    icon: H,
    title: "화면만 만들면 됩니다",
    desc: "가입·이메일 인증·로그인·비밀번호 찾기·탈퇴를 업무함이 처리합니다. 홈페이지는 폼을 그리고 API 를 부르기만 합니다."
  }, {
    icon: C,
    title: "아이디는 두 가지 가운데",
    desc: "이메일 주소를 아이디로 쓰거나, 따로 정하는 아이디를 씁니다. 키를 발급할 때 고릅니다.",
    chips: ["이메일 주소", "따로 정하는 아이디"]
  }, {
    icon: B,
    title: "가입 폼의 칸은 조직이 정합니다",
    desc: "업종에 맞는 칸을 업무함에서 만들고, 회원이 직접 채울 칸만 골라 켭니다. 홈페이지는 그 목록을 받아 폼을 그립니다."
  }, {
    icon: I,
    title: "가입한 회원이 곧 고객입니다",
    desc: "홈페이지에 가입한 사람이 업무함 고객 목록에 나타납니다. 거기서 상담을 기록하고 담당 직원을 정합니다."
  }],
  z = [{
    icon: k,
    title: "키 하나는 한 가지 API 만",
    desc: "작업공간 키로는 고객을 못 읽고, 회원 키로는 가입·로그인·내 정보만 됩니다. 키 하나가 새도 피해가 그 API 에 머뭅니다."
  }, {
    icon: O,
    title: "회원 키는 적어 둔 홈페이지에서만",
    desc: "브라우저에 실리는 회원 키는 발급할 때 적은 홈페이지 주소에서 온 요청만 받습니다."
  }, {
    icon: w,
    title: "끄기·만료일·폐기",
    desc: "키마다 켜고 끄고, 만료일을 정하고, 폐기합니다. 마지막으로 쓰인 때가 목록에 보입니다."
  }, {
    icon: _,
    title: "호출량 제한",
    desc: "키와 IP 마다 호출 횟수를 셉니다. 회원 로그인은 비밀번호를 잇달아 틀리면 잠깐 잠깁니다."
  }, {
    icon: T,
    title: "비밀번호는 해시로만",
    desc: "회원의 비밀번호는 되돌릴 수 없는 해시로만 저장합니다. 업무함 계정과는 따로 관리합니다."
  }, {
    icon: M,
    title: "추측할 수 없는 식별자",
    desc: "고객과 상담은 순번이 아니라 무작위 식별자로 가리킵니다. 번호를 하나씩 올려 훑을 수 없습니다."
  }],
  p = "/developers/docs",
  s = [{
    key: "signup",
    label: "가입",
    code: `const API = "https://taskham.com/api/v1/public/member";
const KEY = "thk_...";   // 회원(홈페이지용) 키 — 브라우저에 실어도 됩니다

// 가입 — 홈페이지의 브라우저에서 바로 부릅니다
const res = await fetch(API + "/signup", {
  method: "POST",
  headers: { "X-API-Key": KEY, "Content-Type": "application/json" },
  body: JSON.stringify({
    login_id: "hong@example.com",
    password: "********",
    name: "홍길동",
    phones: ["010-1234-5678"],
  }),
});
const { ok, data, error } = await res.json();
// data.verify_required 가 true 면 메일로 받은 인증번호를 /verify-email 로 보냅니다
// 아니면 data.token 으로 바로 로그인된 것입니다`
  }, {
    key: "login",
    label: "로그인",
    code: `const API = "https://taskham.com/api/v1/public/member";
const KEY = "thk_...";

// 로그인 — 받은 토큰을 홈페이지가 보관합니다(30일)
const res = await fetch(API + "/login", {
  method: "POST",
  headers: { "X-API-Key": KEY, "Content-Type": "application/json" },
  body: JSON.stringify({ login_id: "hong@example.com", password: "********" }),
});
const { ok, data, error } = await res.json();
if (ok) localStorage.setItem("member_token", data.token);
else alert(error.message);   // 예: "아이디 또는 비밀번호가 맞지 않습니다."`
  }, {
    key: "me",
    label: "내 정보 조회·수정",
    code: `const API = "https://taskham.com/api/v1/public/member";
const KEY = "thk_...";
const token = localStorage.getItem("member_token");

// 내 정보 조회 — 로그인한 회원의 토큰을 함께 보냅니다
const res = await fetch(API + "/me", {
  headers: { "X-API-Key": KEY, Authorization: "Bearer " + token },
});
const { data: me } = await res.json();
// me = { login_id, email, name, phones, address, extra, joined_at, ... }

// 내 정보 수정 — 고칠 값만 보냅니다
await fetch(API + "/me", {
  method: "PATCH",
  headers: { "X-API-Key": KEY, Authorization: "Bearer " + token, "Content-Type": "application/json" },
  body: JSON.stringify({ name: "홍길순", phones: ["010-9999-8888"] }),
});`
  }],
  x = {
    cursor: "pointer",
    fontFamily: "inherit",
    ...h
  },
  D = {
    ...x,
    bgcolor: i[900],
    borderColor: i[900],
    color: "#fff",
    "&:hover": {
      bgcolor: i[900]
    }
  };
function ae() {
  const [n, A] = u.useState(s[0].key),
    P = s.find(o => o.key === n) ?? s[0];
  return e.jsxs(t, {
    children: [e.jsx(L, {
      eyebrow: "API",
      title: e.jsxs(e.Fragment, {
        children: ["업무함을 홈페이지·사내 시스템과", e.jsx("br", {}), "API 로 잇습니다"]
      }),
      lead: e.jsxs(e.Fragment, {
        children: ["조직이 발급한 API 키로 업무·게시판·고객·예약을 바깥에서 읽고 씁니다.", e.jsx(Y, {}), "키는 조직 설정에서 발급하고, 언제든 끄거나 폐기합니다."]
      }),
      extraCta: e.jsxs(t, {
        component: l,
        to: p,
        target: "_blank",
        rel: "noopener",
        sx: {
          ...h,
          width: {
            xs: "100%",
            sm: "auto"
          }
        },
        children: [e.jsx(d, {
          sx: {
            fontSize: 20
          }
        }), "API 매뉴얼 보기"]
      })
    }), e.jsx(t, {
      component: "section",
      id: "keys",
      sx: m,
      children: e.jsxs(t, {
        sx: a,
        children: [e.jsx(c, {
          eyebrow: "API KEYS",
          title: "쓰임에 따라 키가 나뉩니다",
          lead: "키 하나는 한 가지 API 만 부릅니다. 고객 API 와 회원 API 는 고객 서비스와 함께 열립니다."
        }), e.jsx(r, {
          points: F,
          columns: 3
        })]
      })
    }), e.jsx(t, {
      component: "section",
      id: "member",
      sx: {
        bgcolor: "#fff"
      },
      children: e.jsxs(t, {
        sx: a,
        children: [e.jsx(c, {
          eyebrow: "MEMBER API",
          title: "홈페이지는 화면만 만드세요",
          lead: "회원 가입과 로그인은 업무함이 맡고, 가입한 회원은 업무함 고객 목록에 나타납니다."
        }), e.jsxs(t, {
          sx: {
            mt: {
              xs: 4,
              md: 5
            },
            mx: "auto",
            maxWidth: 820
          },
          children: [e.jsx(t, {
            role: "tablist",
            "aria-label": "회원 API 예제",
            sx: {
              display: "flex",
              flexWrap: "wrap",
              gap: 1.5,
              mb: 2,
              justifyContent: "center"
            },
            children: s.map(o => e.jsx(t, {
              component: "button",
              type: "button",
              role: "tab",
              "aria-selected": o.key === n,
              onClick: () => A(o.key),
              sx: o.key === n ? D : x,
              children: o.label
            }, o.key))
          }), e.jsx(N, {
            code: P.code
          }), e.jsx(t, {
            sx: {
              mt: 3,
              display: "flex",
              justifyContent: "center"
            },
            children: e.jsxs(t, {
              component: l,
              to: p,
              target: "_blank",
              rel: "noopener",
              sx: K,
              children: [e.jsx(d, {
                sx: {
                  fontSize: 20
                }
              }), "API 매뉴얼 보기"]
            })
          })]
        }), e.jsx(r, {
          points: R,
          columns: 2
        })]
      })
    }), e.jsx(t, {
      component: "section",
      id: "safety",
      sx: m,
      children: e.jsxs(t, {
        sx: a,
        children: [e.jsx(c, {
          eyebrow: "SECURITY",
          title: "키가 새도 피해가 번지지 않게",
          lead: "키의 쓰임을 좁히고, 쓰이는 곳과 횟수를 제한합니다."
        }), e.jsx(r, {
          points: z,
          columns: 3
        })]
      })
    }), e.jsx(v, {
      title: "조직 설정의 API 키에서 시작합니다",
      lead: "조직의 소유자·관리자가 키를 발급합니다. 끝점과 본문은 API 매뉴얼에 있습니다."
    })]
  });
}
export { ae as default };