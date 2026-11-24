import { j as e } from "./react-CjxcGQav.js";
import { M as m } from "./MicNoneOutlined-CCn21vm0.js";
import { c as d, B as t, N as o, aN as p, aO as x, aP as u, aQ as I, T as O, aR as S, aS as h, aT as j, aU as g } from "../js.d/main-Cm9wS5wt.js";
import { S as T } from "./SaveOutlined-DgCkQRT8.js";
import { G as E } from "./GroupOutlined-CA-gNtcg.js";
import { P as f } from "./PictureAsPdfOutlined-ChIt6cmZ.js";
import { S as s } from "./homeSx-C09ESIq-.js";
import { F as R, H as A, L as N, T as c, S as i, C as n, I as a, a as P } from "./featurePageParts-Deueehn5.js";
import { E as _ } from "./emphasize-CAl3kWp2.js";
import { H as C, S as l } from "./screenShots-CYp-Froz.js";
import "./stylis-DdLD6a3t.js";
import "./publicPageSx-9Lwcd6Z3.js";
import "./Reveal-C3c42DZa.js";
const M = d(e.jsx("path", {
    d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3m-9-3.82-2.09-2.09L6.5 13.5 10 17l6.01-6.01-1.41-1.41z"
  })),
  w = d(e.jsx("path", {
    d: "M9 16h2V8H9zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m1-4h2V8h-2z"
  })),
  r = 5,
  F = [{
    icon: m,
    title: "폰·브라우저에서 바로 녹음",
    desc: "따로 녹음기를 켜지 않고 **회의록에서 녹음**합니다. 일시정지와 계속이 되고, 녹음 중에는 화면이 꺼지지 않게 합니다."
  }, {
    icon: M,
    title: "1분마다 서버에 저장",
    desc: '녹음은 **1분마다 조각으로 서버에** 올라갑니다. 앱이 꺼져도 목록의 "끝내지 못한 녹음"에서 들어 보고 회의록으로 저장합니다.'
  }, {
    icon: w,
    title: "말이 없으면 스스로 멈춤",
    desc: "말소리가 한동안 없으면 녹음을 멈췄다가 **소리가 나면 이어 녹음**합니다."
  }, {
    icon: p,
    title: "마이크 경고",
    desc: "마이크에서 소리가 들어오지 않으면 **화면에 알립니다**. 전화 등으로 마이크가 끊겼던 시간도 남깁니다."
  }, {
    icon: x,
    title: "녹음 파일 올리기",
    desc: "**다른 녹음기로 녹음한 파일**도 올려서 텍스트로 변환합니다."
  }, {
    icon: T,
    title: "저장 먼저, 텍스트 변환은 뒤에서",
    desc: "녹음을 끝내고 저장하면 **회의록이 바로 만들어집니다**. 텍스트 변환이 끝나면 알림으로 알려 줍니다."
  }],
  H = [{
    icon: u,
    tag: `월 ${r}회 무료`,
    title: "텍스트 변환",
    points: ["녹음한 말을 텍스트로 변환합니다", `계정마다 **한 달 ${r}회까지 무료**(최대 1시간 녹음)`, "회의록 플러스를 켜면 횟수·길이 제한 없음", "횟수를 다 써도 녹음은 저장됩니다"]
  }, {
    icon: I,
    title: "AI 가 네 칸으로 정리",
    desc: "변환한 글 전체를 읽어 **회의록의 네 칸으로 정리**합니다. 적어 둔 글이 있으면 덮어쓰지 않고 바꿀지 묻습니다.",
    chips: ["안건", "회의 내용", "결정 사항", "후속 조치"]
  }, {
    icon: O,
    title: "후속 조치를 업무로",
    desc: '후속 조치 줄마다 **그 내용이 채워진 업무 등록 창**을 엽니다. "담당 — 할 일" 꼴로 적혀 있으면 담당을 책임자로 미리 넣습니다.'
  }],
  b = [{
    icon: S,
    title: "폴더로 정리",
    desc: "**폴더를 여러 단계로** 만들고 회의록을 끌어다 놓아 옮깁니다."
  }, {
    icon: E,
    title: "참석자·첨부·공개 범위",
    desc: "참석자를 적고 파일을 첨부합니다. **볼 수 있는 사람**은 세 가지 가운데 고릅니다.",
    chips: ["조직 전체", "작성자와 참석자", "작성자만"]
  }, {
    icon: h,
    title: "본문 검색",
    desc: "회의록 본문에 든 말로 찾습니다."
  }, {
    icon: f,
    title: "PDF 인쇄·공유",
    desc: "회의록 한 건을 **PDF 로 인쇄**하고, 채팅으로 보내 공유합니다."
  }, {
    icon: j,
    title: "달력에 회의록 표시",
    desc: "회의일에 회의록이 달력에 표시됩니다. 새 회의록은 **달력 일정에서 제목·날짜·장소·참석자를 가져와** 시작할 수 있습니다."
  }, {
    icon: g,
    title: "이전·후속 회의 연결",
    desc: "**이어지는 회의를 서로 연결**해 앞뒤 회의록을 오갑니다."
  }];
function Z() {
  return e.jsxs(t, {
    children: [e.jsx(R, {
      eyebrow: "MEETINGS",
      title: e.jsxs(e.Fragment, {
        children: ["회의는 녹음만 하세요", e.jsx("br", {}), "텍스트로 변환하고 정리해 회의록으로 남깁니다"]
      }),
      lead: e.jsxs(e.Fragment, {
        children: ["폰이나 브라우저에서 회의를 녹음하면 ", e.jsx(_, {
          children: "텍스트로 변환하고 안건·결정 사항·후속 조치로 정리"
        }), "합니다.", e.jsx(N, {}), "회의록은 기본 제공 기능이라 ", o, "명까지 기간 제한 없이 무료입니다."]
      }),
      children: e.jsx(C, {
        wide: "mtg-transcript",
        phone: "mtg-content-m",
        wideAlt: "회의록 창 — 녹음 파일과 화자 이름 · 시각이 붙은 받아 적은 글",
        phoneAlt: "폰의 회의록 — 안건별로 정리된 회의 내용과 결정 사항",
        sx: A
      })
    }), e.jsx(t, {
      component: "section",
      id: "record",
      sx: c,
      children: e.jsxs(t, {
        sx: s,
        children: [e.jsx(i, {
          eyebrow: "RECORD",
          title: "녹음은 끊겨도 남습니다",
          lead: "회의록에서 바로 녹음하고, 녹음하는 동안 **서버에 나눠 저장**합니다."
        }), e.jsx(n, {
          points: F,
          columns: 3
        })]
      })
    }), e.jsx(t, {
      component: "section",
      id: "summary",
      sx: {
        bgcolor: "#fff"
      },
      children: e.jsxs(t, {
        sx: s,
        children: [e.jsx(i, {
          eyebrow: "SUMMARY",
          title: "녹음이 정리된 회의록이 됩니다",
          lead: "말을 텍스트로 변환하고, **안건부터 후속 조치까지** 나눠 정리합니다."
        }), e.jsx(l, {
          wide: "mtg-decisions",
          phone: "mtg-decisions-m",
          alt: "회의록의 결정 사항과 후속 조치 — 후속 조치 줄마다 업무로 등록하는 단추",
          caption: "결정 사항 · 후속 조치 — 줄마다 업무로 등록",
          more: [{
            wide: "mtg-content",
            phone: "mtg-content-m",
            alt: "회의 내용 — 안건별로 나눠 정리한 요점",
            caption: "회의 내용 — 안건별로 나눠 정리"
          }, {
            wide: "mtg-transcript",
            phone: "mtg-transcript-m",
            alt: "받아 적은 글 — 화자 이름과 시각이 붙은 줄",
            caption: "받아 적은 글 — 화자 이름 · 시각"
          }],
          sx: a
        }), e.jsx(n, {
          points: H,
          columns: 3
        })]
      })
    }), e.jsx(t, {
      component: "section",
      id: "organize",
      sx: c,
      children: e.jsxs(t, {
        sx: s,
        children: [e.jsx(i, {
          eyebrow: "ORGANIZE",
          title: "쌓인 회의록을 정리하고 공유합니다",
          lead: "폴더와 검색으로 찾고, 볼 사람을 정하고, **달력과 이어** 둡니다."
        }), e.jsx(l, {
          wide: "mtg-organize",
          phone: "mtg-list-m",
          alt: "회의록 목록 — 폴더 트리와 회의록 목록, 참석자 · 공개 범위 · 이어진 회의가 보이는 상세",
          caption: "폴더 · 목록 · 상세 — 참석자 · 공개 범위 · 이어진 회의",
          more: [{
            wide: "mtg-list",
            alt: "회의록 목록 — 회의일 · 폴더 · 참석자 · 작성자",
            caption: "회의록 목록 — 회의일 · 폴더 · 참석자 · 작성자"
          }],
          sx: a
        }), e.jsx(n, {
          points: b,
          columns: 3
        })]
      })
    }), e.jsx(P, {
      title: "다음 회의부터 업무함으로 녹음해 보세요",
      lead: `회의록은 기본 제공 기능입니다. **${o}명까지 기간 제한 없이 무료**입니다.`
    })]
  });
}
export { Z as default };