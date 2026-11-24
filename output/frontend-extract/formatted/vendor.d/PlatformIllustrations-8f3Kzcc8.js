import { j as e } from "./react-CjxcGQav.js";
import { B as j, b as r, s, as as i } from "../js.d/main-Cm9wS5wt.js";
const l = {
    fill: "#fff",
    stroke: s[200],
    strokeWidth: 2
  },
  x = (t, h, c, n = s[200], a = 8) => e.jsx("rect", {
    x: t,
    y: h,
    width: c,
    height: a,
    rx: a / 2,
    fill: n
  }),
  d = (t, h, c, n = 9) => e.jsx("circle", {
    cx: t,
    cy: h,
    r: n,
    fill: c
  }),
  o = (t, h, c = "#fff", n = 3) => e.jsx("path", {
    d: `M${t} ${h}l4 4 8-9`,
    fill: "none",
    stroke: c,
    strokeWidth: n,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }),
  f = {
    task: e.jsxs(e.Fragment, {
      children: [e.jsx("rect", {
        x: "70",
        y: "20",
        width: "180",
        height: "112",
        rx: "12",
        ...l
      }), [0, 1, 2].map(t => {
        const h = 38 + t * 32,
          c = t === 0;
        return e.jsxs("g", {
          children: [e.jsx("rect", {
            x: "84",
            y: h - 9,
            width: "18",
            height: "18",
            rx: "5",
            fill: c ? r[600] : "#fff",
            stroke: c ? r[600] : s[300],
            strokeWidth: "2"
          }), c && o(88, h), x(112, h - 4, t === 1 ? 70 : 84, c ? s[200] : s[300]), d(222, h, [r[300], i.amber500, i.emerald600][t], 8)]
        }, t);
      }), e.jsx("rect", {
        x: "196",
        y: "6",
        width: "74",
        height: "26",
        rx: "13",
        fill: i.rose500
      }), x(210, 15, 46, "#fff", 8)]
    }),
    calendar: e.jsxs(e.Fragment, {
      children: [e.jsx("rect", {
        x: "78",
        y: "16",
        width: "164",
        height: "118",
        rx: "12",
        ...l
      }), e.jsx("path", {
        d: "M78 28a12 12 0 0 1 12-12h140a12 12 0 0 1 12 12v16H78z",
        fill: r[600]
      }), e.jsx("rect", {
        x: "108",
        y: "8",
        width: "8",
        height: "18",
        rx: "4",
        fill: s[700]
      }), e.jsx("rect", {
        x: "204",
        y: "8",
        width: "8",
        height: "18",
        rx: "4",
        fill: s[700]
      }), [0, 1, 2].map(t => [0, 1, 2, 3, 4].map(h => {
        const c = t * 5 + h,
          n = c === 6 ? r[600] : c === 3 ? i.rose500 : c === 12 ? i.amber500 : s[100];
        return e.jsx("rect", {
          x: 92 + h * 28,
          y: 56 + t * 24,
          width: "20",
          height: "16",
          rx: "5",
          fill: n
        }, c);
      }))]
    }),
    meetings: e.jsxs(e.Fragment, {
      children: [e.jsx("rect", {
        x: "46",
        y: "34",
        width: "92",
        height: "84",
        rx: "12",
        ...l
      }), e.jsx("rect", {
        x: "82",
        y: "48",
        width: "20",
        height: "34",
        rx: "10",
        fill: r[600]
      }), e.jsx("path", {
        d: "M72 76c0 12 9 20 20 20s20-8 20-20M92 96v10",
        fill: "none",
        stroke: s[700],
        strokeWidth: "4",
        strokeLinecap: "round"
      }), [0, 1, 2, 3, 4].map(t => e.jsx("rect", {
        x: 150 + t * 9,
        y: 76 - [8, 16, 24, 14, 6][t],
        width: "5",
        height: [16, 32, 48, 28, 12][t],
        rx: "2.5",
        fill: r[300]
      }, t)), e.jsx("rect", {
        x: "204",
        y: "20",
        width: "76",
        height: "112",
        rx: "12",
        ...l
      }), x(216, 36, 40, r[600]), x(216, 56, 52), x(216, 72, 44), x(216, 88, 52), x(216, 108, 30, i.emerald600)]
    }),
    board: e.jsxs(e.Fragment, {
      children: [e.jsx("rect", {
        x: "62",
        y: "18",
        width: "196",
        height: "116",
        rx: "12",
        ...l
      }), e.jsx("rect", {
        x: "74",
        y: "30",
        width: "172",
        height: "28",
        rx: "8",
        fill: r[50]
      }), e.jsx("circle", {
        cx: "90",
        cy: "44",
        r: "7",
        fill: i.rose500
      }), x(106, 40, 96, r[600]), [0, 1].map(t => {
        const h = 76 + t * 30;
        return e.jsxs("g", {
          children: [x(78, h - 4, t === 0 ? 110 : 88, s[300]), x(78, h + 10, 54, s[100], 6), e.jsx("rect", {
            x: "214",
            y: h - 8,
            width: "26",
            height: "18",
            rx: "9",
            fill: t === 0 ? i.amber100 : s[100]
          })]
        }, t);
      }), e.jsx("path", {
        d: "M74 91h172",
        stroke: s[100],
        strokeWidth: "2"
      })]
    }),
    chat: e.jsxs(e.Fragment, {
      children: [d(72, 52, r[300], 14), e.jsx("path", {
        d: "M96 30h104a12 12 0 0 1 12 12v32a12 12 0 0 1-12 12H108l-12 10z",
        ...l
      }), x(110, 44, 84, s[300]), x(110, 62, 60, i.emerald600), e.jsx("path", {
        d: "M226 78H140a12 12 0 0 0-12 12v24a12 12 0 0 0 12 12h74l12 10z",
        fill: r[600]
      }), x(142, 92, 68, "#fff"), x(142, 108, 44, r[300]), d(250, 104, i.amber500, 14)]
    }),
    mail: e.jsxs(e.Fragment, {
      children: [e.jsx("rect", {
        x: "52",
        y: "22",
        width: "150",
        height: "108",
        rx: "12",
        ...l
      }), [0, 1, 2].map(t => {
        const h = 46 + t * 30;
        return e.jsxs("g", {
          children: [d(72, h, t === 2 ? s[200] : r[600], 5), x(86, h - 9, t === 1 ? 74 : 92, t === 2 ? s[200] : s[300]), x(86, h + 5, 56, s[100], 6)]
        }, t);
      }), e.jsx("rect", {
        x: "170",
        y: "62",
        width: "104",
        height: "72",
        rx: "10",
        fill: r[600]
      }), e.jsx("path", {
        d: "M178 72l44 32 44-32",
        fill: "none",
        stroke: "#fff",
        strokeWidth: "4",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), d(270, 62, i.amber500, 13)]
    }),
    hr: e.jsxs(e.Fragment, {
      children: [e.jsx("rect", {
        x: "52",
        y: "30",
        width: "118",
        height: "92",
        rx: "12",
        ...l
      }), e.jsx("rect", {
        x: "96",
        y: "22",
        width: "30",
        height: "14",
        rx: "7",
        fill: s[700]
      }), d(84, 66, r[300], 16), e.jsx("path", {
        d: "M62 104c4-14 14-20 22-20s18 6 22 20z",
        fill: r[600]
      }), x(116, 58, 40, s[300]), x(116, 74, 28), x(116, 96, 40, s[100]), e.jsx("rect", {
        x: "192",
        y: "18",
        width: "80",
        height: "114",
        rx: "10",
        ...l
      }), x(204, 34, 44, r[600]), x(204, 54, 56), x(204, 70, 48), x(204, 86, 56), e.jsx("circle", {
        cx: "248",
        cy: "112",
        r: "12",
        fill: "none",
        stroke: i.rose500,
        strokeWidth: "3"
      }), e.jsx("circle", {
        cx: "248",
        cy: "112",
        r: "5",
        fill: i.rose500
      })]
    }),
    attendance: e.jsxs(e.Fragment, {
      children: [e.jsx("rect", {
        x: "126",
        y: "8",
        width: "68",
        height: "134",
        rx: "14",
        fill: s[900]
      }), e.jsx("rect", {
        x: "132",
        y: "16",
        width: "56",
        height: "118",
        rx: "8",
        fill: "#fff"
      }), e.jsx("circle", {
        cx: "160",
        cy: "48",
        r: "16",
        fill: r[50],
        stroke: r[600],
        strokeWidth: "3"
      }), e.jsx("path", {
        d: "M160 38v11l7 4",
        fill: "none",
        stroke: r[600],
        strokeWidth: "3",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), x(144, 76, 32, s[200], 6), e.jsx("rect", {
        x: "140",
        y: "94",
        width: "40",
        height: "24",
        rx: "12",
        fill: r[600]
      }), o(154, 106), e.jsx("rect", {
        x: "42",
        y: "42",
        width: "64",
        height: "62",
        rx: "12",
        ...l
      }), e.jsx("path", {
        d: "M74 56c-8 0-14 6-14 14 0 10 14 22 14 22s14-12 14-22c0-8-6-14-14-14z",
        fill: i.rose500
      }), e.jsx("circle", {
        cx: "74",
        cy: "70",
        r: "5",
        fill: "#fff"
      }), e.jsx("rect", {
        x: "214",
        y: "38",
        width: "68",
        height: "70",
        rx: "12",
        ...l
      }), [0, 1, 2, 3].map(t => e.jsx("rect", {
        x: 226 + t * 12,
        y: 94 - [24, 36, 30, 16][t],
        width: "7",
        height: [24, 36, 30, 16][t],
        rx: "3.5",
        fill: t === 3 ? i.amber500 : r[300]
      }, t))]
    }),
    addon: e.jsxs(e.Fragment, {
      children: [e.jsx("rect", {
        x: "40",
        y: "40",
        width: "74",
        height: "70",
        rx: "12",
        ...l
      }), e.jsx("rect", {
        x: "54",
        y: "60",
        width: "46",
        height: "32",
        rx: "5",
        fill: r[50],
        stroke: r[600],
        strokeWidth: "3"
      }), e.jsx("path", {
        d: "M54 62l23 16 23-16",
        fill: "none",
        stroke: r[600],
        strokeWidth: "3",
        strokeLinejoin: "round"
      }), e.jsx("circle", {
        cx: "160",
        cy: "75",
        r: "24",
        fill: r[600]
      }), e.jsx("path", {
        d: "M160 63v24M148 75h24",
        stroke: "#fff",
        strokeWidth: "5",
        strokeLinecap: "round"
      }), e.jsx("rect", {
        x: "206",
        y: "40",
        width: "74",
        height: "70",
        rx: "12",
        ...l
      }), x(220, 56, 46, s[300]), x(220, 72, 34), e.jsx("circle", {
        cx: "258",
        cy: "92",
        r: "11",
        fill: "none",
        stroke: i.rose500,
        strokeWidth: "3"
      }), o(252, 92, i.rose500), e.jsx("path", {
        d: "M114 75h22M184 75h22",
        stroke: r[300],
        strokeWidth: "3",
        strokeDasharray: "4 6",
        strokeLinecap: "round"
      })]
    }),
    partner: e.jsxs(e.Fragment, {
      children: [e.jsx("rect", {
        x: "40",
        y: "36",
        width: "92",
        height: "82",
        rx: "12",
        ...l
      }), e.jsx("rect", {
        x: "62",
        y: "54",
        width: "48",
        height: "50",
        rx: "5",
        fill: r[600]
      }), [0, 1].map(t => [0, 1].map(h => e.jsx("rect", {
        x: 72 + h * 18,
        y: 64 + t * 16,
        width: "10",
        height: "9",
        rx: "2",
        fill: "#fff"
      }, `${t}${h}`))), e.jsx("rect", {
        x: "188",
        y: "36",
        width: "92",
        height: "82",
        rx: "12",
        ...l
      }), e.jsx("path", {
        d: "M206 68l28-16 28 16z",
        fill: s[700]
      }), e.jsx("rect", {
        x: "210",
        y: "68",
        width: "48",
        height: "36",
        rx: "3",
        fill: s[700]
      }), e.jsx("rect", {
        x: "228",
        y: "82",
        width: "12",
        height: "22",
        rx: "2",
        fill: "#fff"
      }), e.jsx("path", {
        d: "M138 64h38m-9-7l9 7-9 7",
        fill: "none",
        stroke: i.emerald600,
        strokeWidth: "4",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), e.jsx("path", {
        d: "M182 92h-38m9-7l-9 7 9 7",
        fill: "none",
        stroke: i.amber500,
        strokeWidth: "4",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })]
    }),
    customer: e.jsxs(e.Fragment, {
      children: [[r[600], i.amber500, i.emerald600].map((t, h) => e.jsx("rect", {
        x: "56",
        y: 34 + h * 28,
        width: "16",
        height: "18",
        rx: "5",
        fill: t
      }, t)), e.jsx("rect", {
        x: "66",
        y: "16",
        width: "188",
        height: "118",
        rx: "12",
        ...l
      }), [0, 1, 2].map(t => {
        const h = 42 + t * 33;
        return e.jsxs("g", {
          children: [d(96, h, [r[300], i.amber500, i.emerald600][t], 11), x(116, h - 9, t === 1 ? 58 : 72, s[300]), x(116, h + 5, 44, s[100], 6), e.jsx("rect", {
            x: "204",
            y: h - 9,
            width: "36",
            height: "18",
            rx: "9",
            fill: r[50]
          })]
        }, t);
      })]
    }),
    consult: e.jsxs(e.Fragment, {
      children: [e.jsx("path", {
        d: "M52 124c4-18 18-26 32-26s28 8 32 26z",
        fill: r[600]
      }), d(84, 68, r[300], 22), e.jsx("path", {
        d: "M60 68a24 24 0 0 1 48 0",
        fill: "none",
        stroke: s[700],
        strokeWidth: "5",
        strokeLinecap: "round"
      }), e.jsx("rect", {
        x: "54",
        y: "62",
        width: "10",
        height: "20",
        rx: "5",
        fill: s[700]
      }), e.jsx("rect", {
        x: "104",
        y: "62",
        width: "10",
        height: "20",
        rx: "5",
        fill: s[700]
      }), e.jsx("path", {
        d: "M109 82c0 10-8 14-18 14",
        fill: "none",
        stroke: s[700],
        strokeWidth: "4",
        strokeLinecap: "round"
      }), e.jsx("rect", {
        x: "150",
        y: "20",
        width: "126",
        height: "112",
        rx: "12",
        ...l
      }), e.jsx("path", {
        d: "M172 44v64",
        stroke: s[200],
        strokeWidth: "3",
        strokeLinecap: "round"
      }), [r[600], i.amber500, s[300]].map((t, h) => e.jsxs("g", {
        children: [e.jsx("circle", {
          cx: "172",
          cy: 44 + h * 32,
          r: "7",
          fill: t
        }), x(190, 36 + h * 32, h === 0 ? 68 : 54, s[300]), x(190, 50 + h * 32, 40, s[100], 6)]
      }, t))]
    }),
    booking: e.jsxs(e.Fragment, {
      children: [e.jsx("rect", {
        x: "44",
        y: "20",
        width: "232",
        height: "112",
        rx: "12",
        ...l
      }), [0, 1, 2, 3, 4, 5].map(t => e.jsx("rect", {
        x: 94 + t * 30,
        y: "30",
        width: "20",
        height: "10",
        rx: "5",
        fill: t === 1 ? r[600] : s[100]
      }, t)), [0, 1, 2].map(t => e.jsxs("g", {
        children: [x(56, 60 + t * 24, 26, s[300]), e.jsx("path", {
          d: `M92 ${52 + t * 24}h172`,
          stroke: s[100],
          strokeWidth: "2"
        })]
      }, t)), e.jsx("rect", {
        x: "94",
        y: "56",
        width: "72",
        height: "16",
        rx: "5",
        fill: r[600]
      }), e.jsx("rect", {
        x: "172",
        y: "56",
        width: "44",
        height: "16",
        rx: "5",
        fill: r[300]
      }), e.jsx("rect", {
        x: "124",
        y: "80",
        width: "104",
        height: "16",
        rx: "5",
        fill: i.amber500
      }), e.jsx("rect", {
        x: "94",
        y: "104",
        width: "44",
        height: "16",
        rx: "5",
        fill: r[300]
      }), e.jsx("rect", {
        x: "184",
        y: "104",
        width: "80",
        height: "16",
        rx: "5",
        fill: r[600]
      })]
    }),
    accounting: e.jsxs(e.Fragment, {
      children: [e.jsx("rect", {
        x: "44",
        y: "22",
        width: "132",
        height: "108",
        rx: "12",
        ...l
      }), x(58, 36, 50, r[600]), [0, 1, 2].map(t => e.jsxs("g", {
        children: [x(58, 60 + t * 22, t === 1 ? 44 : 56, s[300]), e.jsx("rect", {
          x: "126",
          y: 58 + t * 22,
          width: "36",
          height: "12",
          rx: "6",
          fill: t === 1 ? i.rose500 : i.emerald600
        })]
      }, t)), e.jsx("rect", {
        x: "192",
        y: "44",
        width: "88",
        height: "86",
        rx: "12",
        ...l
      }), [0, 1, 2, 3].map(t => e.jsx("rect", {
        x: 206 + t * 16,
        y: 116 - [22, 34, 28, 48][t],
        width: "10",
        height: [22, 34, 28, 48][t],
        rx: "5",
        fill: t === 3 ? i.emerald600 : r[300]
      }, t)), e.jsx("circle", {
        cx: "264",
        cy: "38",
        r: "17",
        fill: i.amber500
      }), e.jsx("circle", {
        cx: "264",
        cy: "38",
        r: "9",
        fill: "none",
        stroke: "#fff",
        strokeWidth: "3"
      })]
    }),
    free: e.jsxs(e.Fragment, {
      children: [e.jsx("rect", {
        x: "112",
        y: "66",
        width: "96",
        height: "62",
        rx: "10",
        ...l
      }), e.jsx("rect", {
        x: "104",
        y: "50",
        width: "112",
        height: "24",
        rx: "8",
        fill: r[600]
      }), e.jsx("rect", {
        x: "152",
        y: "50",
        width: "16",
        height: "78",
        fill: i.amber500
      }), e.jsx("ellipse", {
        cx: "146",
        cy: "40",
        rx: "15",
        ry: "10",
        fill: i.amber500
      }), e.jsx("ellipse", {
        cx: "174",
        cy: "40",
        rx: "15",
        ry: "10",
        fill: i.amber500
      }), e.jsx("circle", {
        cx: "160",
        cy: "44",
        r: "7",
        fill: i.amber500,
        stroke: "#fff",
        strokeWidth: "2"
      }), e.jsx("path", {
        d: "M226 22h46a10 10 0 0 1 10 10v20a10 10 0 0 1-10 10h-30l-12 10v-10h-4z",
        ...l
      }), x(238, 34, 34, s[300]), x(238, 48, 22, r[300]), e.jsx("circle", {
        cx: "68",
        cy: "56",
        r: "17",
        fill: i.emerald600
      }), o(60, 56)]
    })
  };
function m({
  kind: t,
  tone: h = r[100]
}) {
  return e.jsxs(j, {
    component: "svg",
    viewBox: "0 0 320 150",
    "aria-hidden": !0,
    focusable: "false",
    sx: {
      display: "block",
      width: "100%",
      height: "auto"
    },
    children: [e.jsx("circle", {
      cx: "160",
      cy: "80",
      r: "74",
      fill: h
    }), f[t]]
  });
}
export { m as P };