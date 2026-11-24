import { r as n, j as s } from "./react-CjxcGQav.js";
import { bO as p, cQ as j, B as t, s as o, f, z as y } from "../js.d/main-Cm9wS5wt.js";
import { A as S } from "./ArticleCard-b3G7wx5f.js";
import { u as v, f as A } from "./newsController-BGsu8k2g.js";
import { u as z } from "./mobileBase-CknPHYoV.js";
import "./stylis-DdLD6a3t.js";
import "./ArticleThumbnail-BgD4TwQX.js";
import "./ArticleMeta-DSwW5VtR.js";
import "./FavoriteBorder-BkFztsJe.js";
import "./shareArticle-Cy4lemZ5.js";
function k() {
  const m = z(),
    {
      state: x
    } = v(),
    [a, l] = n.useState([]),
    [u, h] = n.useState(!0),
    [c, d] = n.useState("");
  n.useEffect(() => {
    let e = !0;
    return A.list().then(r => {
      e && l(r);
    }).catch(r => {
      p(r instanceof Error ? r.message : "즐겨찾기를 불러오지 못했습니다.");
    }).finally(() => {
      e && h(!1);
    }), () => {
      e = !1;
    };
  }, []);
  const g = async e => {
    if (await y({
      title: "즐겨찾기 해제",
      message: `"${e.title}" 을(를) 즐겨찾기에서 뺄까요?`,
      confirmText: "해제",
      cancelText: "취소"
    })) {
      d(e.id);
      try {
        await x.actions.toggleFavorite(e.id), l(i => i.filter(b => b.id !== e.id));
      } catch (i) {
        p(i instanceof Error ? i.message : "즐겨찾기 해제에 실패했습니다.");
      } finally {
        d("");
      }
    }
  };
  return u ? s.jsx(j, {}) : a.length === 0 ? s.jsxs(t, {
    sx: {
      px: 2,
      py: 8,
      textAlign: "center",
      fontSize: "1rem",
      color: o[400]
    },
    children: ["아직 담아둔 기사가 없습니다.", s.jsx("br", {}), "기사에서 하트를 눌러 담아보세요."]
  }) : s.jsxs(t, {
    children: [s.jsxs(t, {
      component: "p",
      sx: {
        m: 0,
        px: 2,
        pt: 2,
        fontSize: "1rem",
        color: o[500]
      },
      children: ["총", " ", s.jsx(t, {
        component: "span",
        sx: {
          fontWeight: f.bold,
          color: o[900]
        },
        children: a.length
      }), "건"]
    }), s.jsx(t, {
      sx: {
        "& > * + *": {
          borderTop: `1px solid ${o[100]}`
        }
      },
      children: a.map(e => s.jsxs(t, {
        children: [s.jsx(S, {
          article: e,
          base: m,
          flush: !0
        }), s.jsx(t, {
          sx: {
            px: 2,
            pb: 1.5
          },
          children: s.jsx(t, {
            component: "button",
            onClick: () => {
              g(e);
            },
            disabled: c === e.id,
            sx: {
              cursor: "pointer",
              borderRadius: 2,
              border: `1px solid ${o[300]}`,
              bgcolor: "transparent",
              px: 1.5,
              py: .75,
              fontSize: "0.9375rem",
              fontWeight: f.semibold,
              color: o[600],
              "&:disabled": {
                opacity: .6,
                cursor: "default"
              }
            },
            children: c === e.id ? "해제 중…" : "즐겨찾기 해제"
          })
        })]
      }, e.id))
    })]
  });
}
export { k as default };