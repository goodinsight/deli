import { r as c, j as i } from "./react-CjxcGQav.js";
import { bv as M, B as m, jm as N, jn as O } from "../js.d/main-Cm9wS5wt.js";
const y = [{
    key: "smile",
    labelKey: "chat.emojiSmileys",
    items: ["😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃", "😉", "😊", "😇", "🥰", "😍", "🤩", "😘", "😗", "😚", "😙", "😋", "😛", "😜", "🤪", "😝", "🤗", "🤭", "🤫", "🤔", "🤨", "😐", "😑", "😶", "😏", "😒", "🙄", "😬", "😌", "😔", "😪", "😴", "😷", "🤒", "🤕", "🥵", "🥶", "😵", "🤯", "😎", "🥳", "😢", "😭", "😤", "😠", "😡", "🥺", "😳", "😱", "😨", "😰", "😥", "🤐", "😯", "😮"]
  }, {
    key: "gesture",
    labelKey: "chat.emojiPeople",
    items: ["👍", "👎", "👌", "✌️", "🤞", "🤟", "🤘", "🤙", "👈", "👉", "👆", "👇", "☝️", "✋", "🤚", "🖐️", "🖖", "👋", "🤝", "🙏", "💪", "🦾", "👏", "🙌", "👐", "🤲", "🫶", "✍️", "💅", "🤳", "🧠", "👀", "🙇", "🙋", "🙆", "🙅", "💁", "🤷", "🤦", "🧑‍💻", "👨‍💼", "👩‍💼", "🚶", "🏃", "💃", "🕺", "👶", "🧓"]
  }, {
    key: "heart",
    labelKey: "chat.emojiHearts",
    items: ["❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔", "❣️", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟", "✨", "💫", "💥", "🎉", "🎊", "🎈", "🎁", "👑", "🫂", "😻", "💐", "🎀", "💌"]
  }, {
    key: "work",
    labelKey: "chat.emojiWork",
    items: ["📌", "📎", "📝", "📄", "📑", "📊", "📈", "📉", "🗂️", "📅", "📆", "⏰", "⌛", "✅", "☑️", "❌", "⭕", "❗", "❓", "💡", "🔔", "🔕", "📢", "📣", "💬", "💭", "🔗", "🔒", "🔑", "⚙️", "🛠️", "📬", "💻", "🖥️", "🖨️", "📞", "📱", "💰", "💳", "🧾", "📦", "🕐", "📋", "🖇️", "✏️", "🗑️", "♻️", "🔍"]
  }, {
    key: "food",
    labelKey: "chat.emojiFood",
    items: ["☕", "🍵", "🥤", "🧃", "🍺", "🍻", "🥂", "🍷", "🍸", "🥃", "🍚", "🍜", "🍲", "🍛", "🍱", "🍙", "🍔", "🍟", "🍕", "🌭", "🥪", "🌮", "🍝", "🥗", "🍖", "🍗", "🥩", "🍳", "🥞", "🧇", "🍞", "🥐", "🍰", "🎂", "🧁", "🍪", "🍩", "🍫", "🍬", "🍭", "🍦", "🍎", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓"]
  }, {
    key: "etc",
    labelKey: "chat.emojiOther",
    items: ["🔥", "⭐", "🌟", "💯", "🎯", "🏆", "🥇", "🚀", "🌈", "☀️", "🌙", "⛅", "☁️", "🌧️", "❄️", "⚡", "🌸", "🌺", "🌷", "🌹", "🌻", "🍀", "🌿", "🌱", "🐶", "🐱", "🐰", "🐼", "🦊", "🐻", "🐥", "🦋", "🚗", "✈️", "🏠", "🏢", "🎵", "🎶", "📚", "🎮", "⚽", "🏀", "💊", "🩺", "🧳", "🎂", "🛒", "🧹"]
  }],
  I = {
    "👍": ["좋아요", "굿", "최고", "넵", "엄지"],
    "👎": ["싫어요", "별로"],
    "👌": ["오케이", "okay", "좋아", "확인"],
    "✌️": ["브이", "화이팅", "평화"],
    "🙏": ["감사", "부탁", "고마워", "기도", "죄송"],
    "👏": ["박수", "짝짝짝", "축하"],
    "💪": ["화이팅", "힘내", "근육", "파이팅"],
    "🫶": ["하트", "사랑", "손하트"],
    "👀": ["눈", "보는중", "확인중"],
    "🙇": ["죄송", "인사", "사과"],
    "🤝": ["악수", "협력", "동의"],
    "❤️": ["하트", "사랑", "빨강하트"],
    "🧡": ["하트", "주황하트"],
    "💛": ["하트", "노랑하트"],
    "💚": ["하트", "초록하트"],
    "💙": ["하트", "파랑하트"],
    "💜": ["하트", "보라하트"],
    "🖤": ["하트", "검정하트"],
    "💔": ["하트", "실연", "슬픔"],
    "✅": ["체크", "확인", "완료", "됐어요"],
    "☑️": ["체크", "확인"],
    "❌": ["엑스", "취소", "아니오", "실패"],
    "⭕": ["동그라미", "맞아요", "정답"],
    "❗": ["느낌표", "중요", "주의"],
    "❓": ["물음표", "질문", "궁금"],
    "🔥": ["불", "대박", "인기", "핫"],
    "💯": ["백점", "최고", "100"],
    "⭐": ["별", "즐겨찾기"],
    "🎉": ["축하", "파티", "축하해"],
    "🎊": ["축하", "파티"],
    "🎂": ["생일", "케이크", "축하"],
    "😀": ["웃음", "하하", "활짝"],
    "😂": ["폭소", "눈물웃음", "웃겨", "ㅋㅋ"],
    "🤣": ["폭소", "웃겨", "ㅋㅋㅋ"],
    "😊": ["미소", "웃음", "방긋"],
    "🥰": ["사랑", "좋아", "하트눈"],
    "😍": ["반함", "사랑", "하트눈"],
    "😉": ["윙크"],
    "😎": ["선글라스", "멋짐", "쿨"],
    "🤔": ["고민", "생각", "음"],
    "😢": ["슬픔", "눈물"],
    "😭": ["울음", "눈물", "엉엉"],
    "😅": ["땀", "머쓱", "하하"],
    "😱": ["놀람", "깜짝", "헐"],
    "😮": ["놀람", "오"],
    "😴": ["졸림", "잠", "피곤"],
    "🥺": ["부탁", "불쌍", "제발"],
    "😡": ["화남", "분노"],
    "🙄": ["황당", "어이없음"],
    "🚀": ["로켓", "출발", "빠름"],
    "📌": ["핀", "고정", "중요"],
    "📝": ["메모", "작성", "기록"],
    "📅": ["일정", "달력", "날짜"],
    "⏰": ["시계", "알람", "시간"],
    "💡": ["아이디어", "제안", "전구"],
    "💰": ["돈", "비용", "금액"],
    "📞": ["전화", "통화"],
    "☕": ["커피", "카페", "휴식"],
    "🍺": ["맥주", "술", "회식"],
    "🍚": ["밥", "식사", "점심"],
    "🏠": ["집", "퇴근", "홈"],
    "🏢": ["회사", "사무실", "출근"]
  },
  J = "'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji','Pretendard','Noto Sans KR',sans-serif",
  L = ["❤️", "👍", "✅", "😂", "😮", "😢"];
function H(o) {
  const t = o.trim().toLowerCase();
  if (!t) return [];
  const n = [],
    r = new Set();
  for (const l of y) for (const a of l.items) {
    if (r.has(a)) continue;
    const h = I[a] ?? [];
    (a === t || h.some(p => p.includes(t))) && (r.add(a), n.push(a));
  }
  return n;
}
const g = "codeshop.chatEmojiRecent",
  x = "codeshop.chatEmojiRecentWords",
  j = 24,
  S = 8;
function k(o, t) {
  try {
    const n = window.localStorage.getItem(o),
      r = n ? JSON.parse(n) : null;
    return Array.isArray(r) ? r.map(l => String(l)).filter(Boolean).slice(0, t) : [];
  } catch {
    return [];
  }
}
function R(o, t) {
  try {
    window.localStorage.setItem(o, JSON.stringify(t));
  } catch {}
}
function w() {
  return k(g, j);
}
function W(o) {
  const t = [o, ...w().filter(n => n !== o)].slice(0, j);
  return R(g, t), t;
}
function b() {
  return k(x, S);
}
function F(o) {
  const t = o.trim();
  if (!t) return b();
  const n = [t, ...b().filter(r => r !== t)].slice(0, S);
  return R(x, n), n;
}
function P(o) {
  const t = b().filter(n => n !== o);
  return R(x, t), t;
}
const Y = 352,
  K = 8;
function B({
  onPick: o,
  height: t = 184
}) {
  const n = M(),
    [r, l] = c.useState(() => w()),
    [a, h] = c.useState(0),
    p = c.useCallback(e => {
      l(W(e)), o(e);
    }, [o]),
    u = r.length >= K ? [{
      key: "recent",
      labelKey: "chat.emojiFrequent",
      items: r
    }, ...y] : y,
    T = Math.min(a, u.length - 1),
    f = c.useRef(null),
    E = c.useRef(!1),
    _ = c.useCallback(e => {
      h(e);
      const s = f.current;
      s && (E.current = !0, s.scrollTo({
        left: s.clientWidth * e,
        behavior: "smooth"
      }), window.setTimeout(() => {
        E.current = !1;
      }, 350));
    }, []),
    C = c.useCallback(() => {
      const e = f.current;
      if (!e || E.current || e.clientWidth === 0) return;
      const s = Math.round(e.scrollLeft / e.clientWidth);
      h(d => s !== d && s >= 0 ? s : d);
    }, []);
  return c.useEffect(() => {
    const e = f.current;
    e && (e.scrollLeft = e.clientWidth * Math.min(a, u.length - 1));
  }, [u.length]), i.jsxs(m, {
    children: [i.jsx(N, {
      value: T,
      onChange: (e, s) => _(s),
      variant: "scrollable",
      scrollButtons: !1,
      sx: {
        minHeight: 36,
        "& .MuiTab-root": {
          minHeight: 36,
          minWidth: 0,
          px: 1,
          fontSize: 13,
          whiteSpace: "nowrap"
        }
      },
      children: u.map(e => i.jsx(O, {
        label: n(e.labelKey)
      }, e.key))
    }), i.jsx(m, {
      ref: f,
      onScroll: C,
      sx: {
        display: "flex",
        height: t,
        overflowX: "auto",
        overflowY: "hidden",
        scrollSnapType: "x mandatory",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none"
        }
      },
      children: u.map(e => i.jsx(m, {
        sx: {
          flex: "0 0 100%",
          width: "100%",
          height: "100%",
          overflowY: "auto",
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
          px: 1,
          py: 1
        },
        children: i.jsx(m, {
          sx: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(48px, 1fr))"
          },
          children: e.items.map((s, d) => i.jsx(m, {
            component: "button",
            type: "button",
            onClick: () => p(s),
            "aria-label": s,
            sx: {
              border: 0,
              bgcolor: "transparent",
              cursor: "pointer",
              fontSize: 30,
              lineHeight: 1,
              py: .75,
              borderRadius: "8px",
              "&:active": {
                bgcolor: "rgba(15, 23, 42, 0.08)"
              }
            },
            children: s
          }, `${s}-${d}`))
        })
      }, e.key))
    })]
  });
}
export { Y as C, B as E, L as Q, J as a, b, P as c, y as d, F as e, W as p, w as r, H as s };