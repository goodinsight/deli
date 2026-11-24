import { j as e, L as S, r as w } from "./react-CjxcGQav.js";
import { B as d, b as s, as as M, s as n, l as N, f as O, d as b, aE as R } from "../js.d/main-Cm9wS5wt.js";
import { e as E, Z as B, W as ee } from "./emphasize-CAl3kWp2.js";
import { A as C, R as H } from "./Reveal-C3c42DZa.js";
import { P as V } from "./publicPageSx-9Lwcd6Z3.js";
import { u as G, d as U, E as Y, H as K, L as Z, B as te, a as re, e as se, f as ie, g as ne, b as le, I as xe, T as $, c as P, C as z } from "./homeSx-C09ESIq-.js";
const T = {
    fill: "#fff",
    stroke: n[200],
    strokeWidth: 2
  },
  o = M.amber500,
  f = M.emerald600,
  j = M.rose500,
  r = (t, i, x, h = n[300], c = 6) => e.jsx("rect", {
    x: t,
    y: i,
    width: x,
    height: c,
    rx: c / 2,
    fill: h
  }),
  p = (t, i, x, h = 5) => e.jsx("circle", {
    cx: t,
    cy: i,
    r: h,
    fill: x
  }),
  l = (t, i, x, h, c = 10) => e.jsx("rect", {
    x: t,
    y: i,
    width: x,
    height: h,
    rx: c,
    ...T
  }),
  k = (t, i, x, h, c = s[600]) => e.jsxs(e.Fragment, {
    children: [e.jsx("rect", {
      x: t,
      y: i,
      width: x,
      height: h,
      rx: "6",
      fill: c
    }), e.jsx("path", {
      d: `M${t + 5} ${i + 6}l${x / 2 - 5} ${h * .42} ${x / 2 - 5}-${h * .42}`,
      fill: "none",
      stroke: "#fff",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  }),
  u = (t, i, x, h = 8) => e.jsxs(e.Fragment, {
    children: [e.jsx("circle", {
      cx: t,
      cy: i,
      r: h,
      fill: x
    }), e.jsx("path", {
      d: `M${t - h * 1.7} ${i + h * 2.9}c${h * .2}-${h * 1.6} ${h * 3.2}-${h * 1.6} ${h * 3.4} 0z`,
      fill: x
    })]
  }),
  v = (t, i, x, h) => e.jsxs(e.Fragment, {
    children: [e.jsx("rect", {
      x: t,
      y: i,
      width: x * .46,
      height: "9",
      rx: "3",
      fill: h
    }), e.jsx("rect", {
      x: t,
      y: i + 5,
      width: x,
      height: x * .62,
      rx: "4",
      fill: h
    })]
  }),
  I = (t, i, x = "#fff", h = 3) => e.jsx("path", {
    d: `M${t} ${i}l5 5 9-10`,
    fill: "none",
    stroke: x,
    strokeWidth: h,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }),
  F = (t, i, x = 20, h = s[600]) => e.jsx("path", {
    d: `M${t} ${i}h${x}m-7-6l7 6-7 6`,
    fill: "none",
    stroke: h,
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }),
  W = (t, i, x, h) => e.jsx("path", {
    d: `M${t + 8} ${i}h${x - 16}a8 8 0 0 1 8 8v${h - 16}a8 8 0 0 1-8 8H${t + 14}l-10 8v-8a8 8 0 0 1-4-7V${i + 8}a8 8 0 0 1 8-8z`,
    ...T
  }),
  L = (t, i, x, h, c = s[600]) => e.jsx("path", {
    d: `M${t + 8} ${i}h${x - 16}a8 8 0 0 1 8 8v${h - 9}a7 7 0 0 0 4 7v8l-10-8H${t + 8}a8 8 0 0 1-8-8V${i + 8}a8 8 0 0 1 8-8z`,
    fill: c
  }),
  he = {
    list: e.jsxs(e.Fragment, {
      children: [l(58, 10, 124, 76), [0, 1, 2].map(t => e.jsxs("g", {
        children: [p(76, 30 + t * 19, [s[600], o, f][t]), r(90, 27 + t * 19, [72, 54, 64][t])]
      }, t))]
    }),
    contact: e.jsxs(e.Fragment, {
      children: [l(52, 14, 136, 68), u(84, 40, s[300], 10), r(112, 30, 58, n[700]), r(112, 46, 44), r(112, 60, 52, n[200])]
    }),
    form: e.jsxs(e.Fragment, {
      children: [l(50, 10, 140, 76), [0, 1].map(t => [0, 1].map(i => e.jsx("rect", {
        x: 62 + i * 60,
        y: 22 + t * 30,
        width: "52",
        height: "22",
        rx: "5",
        fill: t === 0 && i === 1 ? "#fff" : n[100],
        stroke: t === 0 && i === 1 ? s[600] : "none",
        strokeWidth: "2"
      }, `${t}${i}`))), r(68, 30, 26), r(128, 30, 34, s[600]), r(68, 60, 34), r(128, 60, 22)]
    }),
    tabs: e.jsxs(e.Fragment, {
      children: [l(50, 10, 140, 76), e.jsx("rect", {
        x: "62",
        y: "20",
        width: "34",
        height: "14",
        rx: "7",
        fill: s[600]
      }), e.jsx("rect", {
        x: "100",
        y: "20",
        width: "34",
        height: "14",
        rx: "7",
        fill: n[100]
      }), e.jsx("rect", {
        x: "138",
        y: "20",
        width: "34",
        height: "14",
        rx: "7",
        fill: n[100]
      }), r(62, 46, 100), r(62, 60, 76, n[200]), r(62, 72, 88, n[200])]
    }),
    chips: e.jsxs(e.Fragment, {
      children: [e.jsx("rect", {
        x: "46",
        y: "22",
        width: "60",
        height: "22",
        rx: "11",
        fill: s[600]
      }), e.jsx("rect", {
        x: "112",
        y: "22",
        width: "44",
        height: "22",
        rx: "11",
        fill: o
      }), e.jsx("rect", {
        x: "162",
        y: "22",
        width: "34",
        height: "22",
        rx: "11",
        fill: f
      }), e.jsx("rect", {
        x: "62",
        y: "52",
        width: "44",
        height: "22",
        rx: "11",
        fill: s[300]
      }), e.jsx("rect", {
        x: "112",
        y: "52",
        width: "66",
        height: "22",
        rx: "11",
        fill: "#fff",
        stroke: n[300],
        strokeWidth: "2"
      })]
    }),
    status: e.jsxs(e.Fragment, {
      children: [l(50, 12, 140, 72), [f, s[300], o, j].map((t, i) => e.jsx("g", {
        children: e.jsx("rect", {
          x: 62 + i % 2 * 62,
          y: 24 + Math.floor(i / 2) * 26,
          width: "54",
          height: "18",
          rx: "9",
          fill: t
        })
      }, t))]
    }),
    folder: e.jsxs(e.Fragment, {
      children: [v(56, 16, 52, s[600]), e.jsx("path", {
        d: "M82 58v18h30M82 62h30",
        fill: "none",
        stroke: n[300],
        strokeWidth: "3",
        strokeLinecap: "round"
      }), v(118, 44, 30, s[300]), v(118, 66, 30, o), r(156, 54, 30), r(156, 76, 22)]
    }),
    search: e.jsxs(e.Fragment, {
      children: [e.jsx("rect", {
        x: "48",
        y: "12",
        width: "144",
        height: "28",
        rx: "14",
        ...T
      }), e.jsx("circle", {
        cx: "66",
        cy: "25",
        r: "6",
        fill: "none",
        stroke: s[600],
        strokeWidth: "3"
      }), e.jsx("path", {
        d: "M71 30l5 5",
        stroke: s[600],
        strokeWidth: "3",
        strokeLinecap: "round"
      }), r(84, 22, 50, n[700]), p(60, 56, s[300]), r(72, 53, 96), p(60, 74, n[200]), r(72, 71, 70, n[200])]
    }),
    split: e.jsxs(e.Fragment, {
      children: [l(34, 12, 74, 72), [0, 1, 2].map(t => e.jsx("rect", {
        x: "42",
        y: 22 + t * 19,
        width: "58",
        height: "14",
        rx: "5",
        fill: t === 1 ? s[100] : n[100]
      }, t)), l(116, 12, 90, 72), p(134, 30, s[300], 8), r(148, 27, 44, n[700]), r(126, 48, 68), r(126, 60, 52, n[200]), r(126, 72, 60, n[200])]
    }),
    timeline: e.jsxs(e.Fragment, {
      children: [l(50, 8, 140, 80), e.jsx("path", {
        d: "M72 22v52",
        stroke: n[200],
        strokeWidth: "3",
        strokeLinecap: "round"
      }), [s[600], o, n[300]].map((t, i) => e.jsxs("g", {
        children: [p(72, 24 + i * 24, t, 6), r(88, 18 + i * 24, i === 0 ? 76 : 60), r(88, 28 + i * 24, 40, n[200], 5)]
      }, t))]
    }),
    people: e.jsxs(e.Fragment, {
      children: [u(84, 34, s[300], 10), u(120, 30, s[600], 12), u(156, 34, o, 10)]
    }),
    doc: e.jsxs(e.Fragment, {
      children: [l(84, 8, 72, 80, 8), r(96, 20, 30, s[600]), r(96, 34, 48), r(96, 46, 40), r(96, 58, 48), e.jsx("rect", {
        x: "92",
        y: "68",
        width: "56",
        height: "12",
        rx: "6",
        fill: s[50]
      }), r(118, 71, 24, s[600])]
    }),
    pdf: e.jsxs(e.Fragment, {
      children: [l(78, 8, 68, 80, 8), r(90, 22, 34, n[700]), r(90, 36, 44), r(90, 48, 36), e.jsx("rect", {
        x: "118",
        y: "58",
        width: "50",
        height: "22",
        rx: "6",
        fill: j
      }), r(128, 66, 30, "#fff")]
    }),
    receipt: e.jsxs(e.Fragment, {
      children: [e.jsx("path", {
        d: "M84 10h72v74l-9-6-9 6-9-6-9 6-9-6-9 6-9-6-9 6z",
        ...T,
        strokeLinejoin: "round"
      }), r(96, 22, 30, n[700]), r(96, 36, 48), r(96, 48, 40), e.jsx("rect", {
        x: "96",
        y: "60",
        width: "26",
        height: "12",
        rx: "6",
        fill: f
      }), e.jsx("rect", {
        x: "126",
        y: "60",
        width: "18",
        height: "12",
        rx: "6",
        fill: o
      })]
    }),
    terms: e.jsxs(e.Fragment, {
      children: [l(52, 16, 64, 64), e.jsx("rect", {
        x: "52",
        y: "16",
        width: "64",
        height: "18",
        rx: "10",
        fill: s[600]
      }), e.jsx("rect", {
        x: "52",
        y: "26",
        width: "64",
        height: "8",
        fill: s[600]
      }), [0, 1, 2, 3, 4, 5].map(t => e.jsx("rect", {
        x: 62 + t % 3 * 16,
        y: 42 + Math.floor(t / 3) * 16,
        width: "10",
        height: "10",
        rx: "3",
        fill: t === 5 ? o : n[100]
      }, t)), F(126, 48, 22), e.jsx("circle", {
        cx: "176",
        cy: "48",
        r: "18",
        fill: o
      }), e.jsx("circle", {
        cx: "176",
        cy: "48",
        r: "9",
        fill: "none",
        stroke: "#fff",
        strokeWidth: "3"
      })]
    }),
    progress: e.jsxs(e.Fragment, {
      children: [l(44, 14, 152, 68), r(58, 28, 50, n[700]), e.jsx("rect", {
        x: "58",
        y: "44",
        width: "124",
        height: "12",
        rx: "6",
        fill: n[100]
      }), e.jsx("rect", {
        x: "58",
        y: "44",
        width: "50",
        height: "12",
        rx: "6",
        fill: f
      }), e.jsx("rect", {
        x: "110",
        y: "44",
        width: "34",
        height: "12",
        rx: "6",
        fill: s[300]
      }), r(58, 66, 40, n[200]), r(150, 66, 32, o)]
    }),
    balance: e.jsxs(e.Fragment, {
      children: [l(44, 10, 152, 76), [0, 1, 2].map(t => e.jsxs("g", {
        children: [p(60, 28 + t * 20, [s[600], s[300], n[300]][t], 6), r(74, 25 + t * 20, 46), r([132, 146, 140][t], 25 + t * 20, [50, 36, 42][t], t === 0 ? j : n[700])]
      }, t))]
    }),
    ledger: e.jsxs(e.Fragment, {
      children: [l(44, 10, 152, 76), r(58, 22, 44, s[600]), [0, 1, 2].map(t => e.jsxs("g", {
        children: [r(58, 40 + t * 14, [58, 44, 52][t]), e.jsx("rect", {
          x: "146",
          y: 38 + t * 14,
          width: "36",
          height: "10",
          rx: "5",
          fill: t === 1 ? j : f
        })]
      }, t))]
    }),
    upload: e.jsxs(e.Fragment, {
      children: [l(58, 12, 60, 72, 8), r(70, 26, 34, n[700]), r(70, 40, 38), r(70, 52, 30), r(70, 64, 38), e.jsx("circle", {
        cx: "158",
        cy: "48",
        r: "22",
        fill: s[600]
      }), e.jsx("path", {
        d: "M158 60V38m-9 9l9-9 9 9",
        fill: "none",
        stroke: "#fff",
        strokeWidth: "4",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })]
    }),
    sparkle: e.jsxs(e.Fragment, {
      children: [l(48, 14, 124, 68), r(62, 30, 50), e.jsx("rect", {
        x: "120",
        y: "26",
        width: "40",
        height: "14",
        rx: "7",
        fill: s[100]
      }), r(62, 50, 40), e.jsx("rect", {
        x: "120",
        y: "46",
        width: "40",
        height: "14",
        rx: "7",
        fill: s[600]
      }), r(62, 68, 46, n[200]), e.jsx("path", {
        d: "M188 14l5 12 12 5-12 5-5 12-5-12-12-5 12-5z",
        fill: o
      })]
    }),
    bulk: e.jsxs(e.Fragment, {
      children: [l(48, 10, 144, 76), [0, 1, 2].map(t => e.jsxs("g", {
        children: [e.jsx("rect", {
          x: "60",
          y: 22 + t * 20,
          width: "14",
          height: "14",
          rx: "4",
          fill: s[600]
        }), I(62, 30 + t * 20, "#fff", 2.5), r(82, 26 + t * 20, 52), e.jsx("rect", {
          x: "142",
          y: 22 + t * 20,
          width: "38",
          height: "14",
          rx: "7",
          fill: s[100]
        })]
      }, t))]
    }),
    chart: e.jsxs(e.Fragment, {
      children: [l(52, 10, 136, 76), [26, 40, 32, 52, 44].map((t, i) => e.jsx("rect", {
        x: 70 + i * 21,
        y: 76 - t,
        width: "13",
        height: t,
        rx: "6",
        fill: i === 3 ? f : s[300]
      }, i))]
    }),
    wallet: e.jsxs(e.Fragment, {
      children: [e.jsx("rect", {
        x: "52",
        y: "20",
        width: "92",
        height: "58",
        rx: "10",
        fill: s[600]
      }), e.jsx("rect", {
        x: "52",
        y: "34",
        width: "92",
        height: "10",
        fill: s[900]
      }), r(64, 58, 36, "#fff"), l(126, 40, 66, 44), r(138, 52, 30), r(138, 66, 42, n[700])]
    }),
    card: e.jsxs(e.Fragment, {
      children: [e.jsx("rect", {
        x: "46",
        y: "24",
        width: "84",
        height: "52",
        rx: "9",
        fill: n[700]
      }), e.jsx("rect", {
        x: "56",
        y: "36",
        width: "18",
        height: "13",
        rx: "3",
        fill: o
      }), r(56, 60, 44, "#fff"), F(138, 50, 20), l(166, 26, 40, 48, 8), r(174, 40, 24, s[600]), r(174, 54, 18)]
    }),
    tree: e.jsxs(e.Fragment, {
      children: [l(48, 10, 144, 76), r(62, 22, 44, n[700]), e.jsx("path", {
        d: "M68 32v38M68 44h12M68 58h12M68 70h12",
        fill: "none",
        stroke: n[200],
        strokeWidth: "3",
        strokeLinecap: "round"
      }), r(86, 41, 60), r(86, 55, 46, s[600]), r(86, 67, 54)]
    }),
    resource: e.jsx(e.Fragment, {
      children: [0, 1, 2].map(t => e.jsxs("g", {
        children: [l(44 + t * 54, 20, 46, 56, 8), e.jsx("rect", {
          x: 54 + t * 54,
          y: "30",
          width: "26",
          height: "20",
          rx: "4",
          fill: [s[600], o, f][t]
        }), r(54 + t * 54, 60, 26)]
      }, t))
    }),
    capacity: e.jsxs(e.Fragment, {
      children: [l(48, 12, 144, 72), [0, 1, 2, 3].map(t => e.jsx("rect", {
        x: 60 + t * 31,
        y: "24",
        width: "26",
        height: "26",
        rx: "6",
        fill: t < 3 ? s[600] : "#fff",
        stroke: t < 3 ? "none" : n[300],
        strokeWidth: "2",
        strokeDasharray: t < 3 ? void 0 : "4 4"
      }, t)), r(60, 62, 70), e.jsx("rect", {
        x: "146",
        y: "58",
        width: "34",
        height: "14",
        rx: "7",
        fill: j
      })]
    }),
    price: e.jsxs(e.Fragment, {
      children: [e.jsx("path", {
        d: "M60 18h54l46 30-46 30H60a8 8 0 0 1-8-8V26a8 8 0 0 1 8-8z",
        fill: s[600]
      }), p(70, 48, "#fff", 6), r(86, 38, 40, "#fff"), r(86, 52, 26, s[300]), e.jsx("circle", {
        cx: "182",
        cy: "48",
        r: "16",
        fill: o
      }), e.jsx("circle", {
        cx: "182",
        cy: "48",
        r: "8",
        fill: "none",
        stroke: "#fff",
        strokeWidth: "3"
      })]
    }),
    daysHours: e.jsxs(e.Fragment, {
      children: [l(40, 16, 74, 64), r(50, 28, 30, n[700]), e.jsx("rect", {
        x: "50",
        y: "42",
        width: "54",
        height: "12",
        rx: "5",
        fill: s[600]
      }), e.jsx("rect", {
        x: "60",
        y: "60",
        width: "34",
        height: "12",
        rx: "5",
        fill: s[300]
      }), l(126, 16, 74, 64), e.jsx("path", {
        d: "M150 26v46M174 26v46",
        stroke: n[100],
        strokeWidth: "2"
      }), e.jsx("rect", {
        x: "132",
        y: "28",
        width: "16",
        height: "22",
        rx: "4",
        fill: o
      }), e.jsx("rect", {
        x: "154",
        y: "40",
        width: "16",
        height: "28",
        rx: "4",
        fill: s[600]
      }), e.jsx("rect", {
        x: "178",
        y: "30",
        width: "16",
        height: "16",
        rx: "4",
        fill: s[300]
      })]
    }),
    agenda: e.jsxs(e.Fragment, {
      children: [l(44, 8, 152, 80), [0, 1, 2].map(t => e.jsxs("g", {
        children: [e.jsx("rect", {
          x: "56",
          y: 18 + t * 22,
          width: "20",
          height: "16",
          rx: "5",
          fill: t === 0 ? s[600] : n[100]
        }), e.jsx("rect", {
          x: "84",
          y: 18 + t * 22,
          width: [98, 70, 84][t],
          height: "16",
          rx: "5",
          fill: [s[100], M.amber100, s[100]][t]
        }), e.jsx("rect", {
          x: "84",
          y: 18 + t * 22,
          width: "4",
          height: "16",
          rx: "2",
          fill: [s[600], o, s[600]][t]
        })]
      }, t))]
    }),
    gantt: e.jsxs(e.Fragment, {
      children: [l(40, 10, 160, 76), [0, 1, 2].map(t => e.jsxs("g", {
        children: [r(50, 30 + t * 18, 18), e.jsx("path", {
          d: `M76 ${24 + t * 18}h114`,
          stroke: n[100],
          strokeWidth: "2"
        })]
      }, t)), e.jsx("rect", {
        x: "78",
        y: "26",
        width: "50",
        height: "12",
        rx: "4",
        fill: s[600]
      }), e.jsx("rect", {
        x: "134",
        y: "26",
        width: "30",
        height: "12",
        rx: "4",
        fill: s[300]
      }), e.jsx("rect", {
        x: "98",
        y: "44",
        width: "72",
        height: "12",
        rx: "4",
        fill: o
      }), e.jsx("rect", {
        x: "78",
        y: "62",
        width: "30",
        height: "12",
        rx: "4",
        fill: s[300]
      }), e.jsx("rect", {
        x: "140",
        y: "62",
        width: "48",
        height: "12",
        rx: "4",
        fill: s[600]
      })]
    }),
    hours: e.jsxs(e.Fragment, {
      children: [l(48, 8, 144, 80), e.jsx("path", {
        d: "M96 16v64M144 16v64M56 36h128M56 58h128",
        stroke: n[100],
        strokeWidth: "2"
      }), e.jsx("rect", {
        x: "58",
        y: "20",
        width: "34",
        height: "26",
        rx: "5",
        fill: s[600]
      }), e.jsx("rect", {
        x: "100",
        y: "40",
        width: "40",
        height: "30",
        rx: "5",
        fill: o
      }), e.jsx("rect", {
        x: "148",
        y: "24",
        width: "36",
        height: "20",
        rx: "5",
        fill: s[300]
      }), e.jsx("rect", {
        x: "148",
        y: "52",
        width: "36",
        height: "24",
        rx: "5",
        fill: s[600]
      })]
    }),
    deposit: e.jsxs(e.Fragment, {
      children: [l(46, 16, 96, 64), r(58, 30, 44, n[700]), e.jsx("rect", {
        x: "58",
        y: "46",
        width: "72",
        height: "20",
        rx: "6",
        fill: M.amber100
      }), e.jsx("rect", {
        x: "58",
        y: "46",
        width: "5",
        height: "20",
        rx: "2",
        fill: o
      }), F(150, 50, 18, f), e.jsx("circle", {
        cx: "190",
        cy: "50",
        r: "16",
        fill: f
      }), I(183, 51)]
    }),
    expire: e.jsxs(e.Fragment, {
      children: [e.jsx("circle", {
        cx: "92",
        cy: "48",
        r: "28",
        fill: "#fff",
        stroke: n[200],
        strokeWidth: "3"
      }), e.jsx("path", {
        d: "M92 32v16l11 8",
        fill: "none",
        stroke: s[600],
        strokeWidth: "4",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), F(128, 48, 18, n[300]), e.jsx("rect", {
        x: "158",
        y: "34",
        width: "50",
        height: "28",
        rx: "8",
        fill: "#fff",
        stroke: n[300],
        strokeWidth: "2",
        strokeDasharray: "5 5"
      }), e.jsx("path", {
        d: "M176 42l14 12m0-12l-14 12",
        stroke: j,
        strokeWidth: "3",
        strokeLinecap: "round"
      })]
    }),
    channels: e.jsxs(e.Fragment, {
      children: [[s[600], o, f, s[300]].map((t, i) => e.jsx("circle", {
        cx: 66 + i * 36,
        cy: "34",
        r: "14",
        fill: t
      }, t)), e.jsx("path", {
        d: "M60 30c2 5 5 8 10 10",
        fill: "none",
        stroke: "#fff",
        strokeWidth: "3",
        strokeLinecap: "round"
      }), u(102, 30, "#fff", 4), e.jsx("path", {
        d: "M130 30l8 6 8-6",
        fill: "none",
        stroke: "#fff",
        strokeWidth: "3",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), r(166, 31, 16, "#fff"), e.jsx("path", {
        d: "M66 48v10h108V48M102 48v10M138 48v10M120 58v10",
        fill: "none",
        stroke: n[300],
        strokeWidth: "3",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), l(92, 68, 56, 20, 8), r(104, 75, 32)]
    }),
    twoBoxes: e.jsxs(e.Fragment, {
      children: [l(40, 14, 74, 68), r(50, 26, 28, o), r(50, 42, 52), r(50, 54, 40), r(50, 66, 46, n[200]), l(126, 14, 74, 68), r(136, 26, 28, f), r(136, 42, 46), r(136, 54, 52), r(136, 66, 34, n[200])]
    }),
    followUp: e.jsxs(e.Fragment, {
      children: [l(44, 14, 100, 68), r(56, 28, 40, n[700]), r(56, 44, 72), r(56, 58, 56), F(150, 48, 16), l(172, 26, 40, 44, 8), e.jsx("rect", {
        x: "172",
        y: "26",
        width: "40",
        height: "14",
        rx: "8",
        fill: s[600]
      }), e.jsx("rect", {
        x: "172",
        y: "34",
        width: "40",
        height: "6",
        fill: s[600]
      }), e.jsx("rect", {
        x: "186",
        y: "48",
        width: "12",
        height: "12",
        rx: "3",
        fill: o
      })]
    }),
    bubbles: e.jsxs(e.Fragment, {
      children: [p(46, 34, s[300], 10), W(62, 12, 92, 40), r(76, 24, 62), r(76, 36, 40, f), L(104, 50, 92, 36), r(116, 60, 56, "#fff"), r(116, 72, 36, s[300])]
    }),
    reply: e.jsxs(e.Fragment, {
      children: [L(58, 14, 124, 68), e.jsx("rect", {
        x: "70",
        y: "24",
        width: "96",
        height: "24",
        rx: "6",
        fill: s[700]
      }), e.jsx("rect", {
        x: "70",
        y: "24",
        width: "4",
        height: "24",
        rx: "2",
        fill: "#fff"
      }), r(80, 33, 60, s[300]), r(70, 58, 78, "#fff")]
    }),
    emoji: e.jsxs(e.Fragment, {
      children: [W(50, 10, 110, 42), r(64, 22, 70), r(64, 34, 48), [0, 1, 2].map(t => e.jsxs("g", {
        children: [e.jsx("rect", {
          x: 56 + t * 46,
          y: "62",
          width: "40",
          height: "24",
          rx: "12",
          fill: t === 0 ? s[100] : "#fff",
          stroke: t === 0 ? s[600] : n[200],
          strokeWidth: "2"
        }), e.jsx("circle", {
          cx: 70 + t * 46,
          cy: "74",
          r: "7",
          fill: [o, j, o][t]
        }), r(81 + t * 46, 71, 9, n[700])]
      }, t)), e.jsx("path", {
        d: "M66.5 75.5c2 3 5 3 7 0",
        fill: "none",
        stroke: "#fff",
        strokeWidth: "1.8",
        strokeLinecap: "round"
      }), e.jsx("path", {
        d: "M112 77c1.5-4 6.5-4 8 0",
        fill: "none",
        stroke: "#fff",
        strokeWidth: "1.8",
        strokeLinecap: "round"
      }), e.jsx("path", {
        d: "M158.5 75.5c2 3 5 3 7 0",
        fill: "none",
        stroke: "#fff",
        strokeWidth: "1.8",
        strokeLinecap: "round"
      })]
    }),
    read: e.jsxs(e.Fragment, {
      children: [L(72, 14, 112, 40), r(86, 26, 70, "#fff"), r(86, 38, 44, s[300]), e.jsx("path", {
        d: "M48 36l5 5 9-10m-2 10l9-10",
        fill: "none",
        stroke: f,
        strokeWidth: "3",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), [s[300], o, f].map((t, i) => e.jsx("circle", {
        cx: 132 + i * 20,
        cy: "76",
        r: "9",
        fill: t,
        stroke: "#fff",
        strokeWidth: "2"
      }, t))]
    }),
    notice: e.jsxs(e.Fragment, {
      children: [e.jsx("rect", {
        x: "40",
        y: "10",
        width: "160",
        height: "28",
        rx: "10",
        fill: s[600]
      }), e.jsx("path", {
        d: "M54 22h5l9-6v16l-9-6h-5z",
        fill: "#fff"
      }), r(78, 21, 96, "#fff"), W(52, 48, 84, 32), r(66, 60, 50, n[200]), L(116, 56, 72, 30, s[300])]
    }),
    edit: e.jsxs(e.Fragment, {
      children: [L(52, 20, 112, 52), r(66, 34, 74, "#fff"), r(66, 48, 40, s[300]), e.jsx("path", {
        d: "M176 62l-6 2 2-6 22-22 4 4z",
        fill: o
      }), e.jsx("path", {
        d: "M188 30l4 4",
        stroke: n[700],
        strokeWidth: "3",
        strokeLinecap: "round"
      }), e.jsx("path", {
        d: "M112 48h32",
        stroke: "#fff",
        strokeWidth: "2",
        strokeDasharray: "3 4"
      })]
    }),
    forward: e.jsxs(e.Fragment, {
      children: [W(40, 30, 70, 36), r(52, 43, 44), e.jsx("path", {
        d: "M118 48c18 0 20-22 40-22m-7-6l7 6-7 6M118 48c18 0 20 22 40 22m-7-6l7 6-7 6",
        fill: "none",
        stroke: s[600],
        strokeWidth: "3",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), e.jsx("rect", {
        x: "166",
        y: "14",
        width: "40",
        height: "24",
        rx: "8",
        fill: s[600]
      }), e.jsx("rect", {
        x: "166",
        y: "58",
        width: "40",
        height: "24",
        rx: "8",
        fill: s[300]
      })]
    }),
    translate: e.jsxs(e.Fragment, {
      children: [W(38, 26, 74, 40), r(50, 38, 20), r(74, 38, 26), r(50, 50, 34), e.jsx("path", {
        d: "M120 40h20m-6-5l6 5-6 5M140 56h-20m6-5l-6 5 6 5",
        fill: "none",
        stroke: o,
        strokeWidth: "3",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), L(140, 26, 74, 40), r(152, 38, 44, "#fff"), r(152, 50, 28, s[300])]
    }),
    toTask: e.jsxs(e.Fragment, {
      children: [W(36, 26, 80, 40), r(48, 38, 54), r(48, 50, 36), F(122, 48, 18), l(150, 22, 62, 52), e.jsx("rect", {
        x: "160",
        y: "32",
        width: "14",
        height: "14",
        rx: "4",
        fill: s[600]
      }), I(162, 40, "#fff", 2.5), r(180, 36, 22, n[700]), r(160, 56, 40)]
    }),
    summary: e.jsxs(e.Fragment, {
      children: [[0, 1, 2].map(t => e.jsx("rect", {
        x: "40",
        y: 16 + t * 22,
        width: [58, 46, 52][t],
        height: "16",
        rx: "8",
        fill: t === 1 ? s[300] : "#fff",
        stroke: t === 1 ? "none" : n[200],
        strokeWidth: "2"
      }, t)), e.jsx("path", {
        d: "M118 30l4 9 9 4-9 4-4 9-4-9-9-4 9-4z",
        fill: o
      }), l(144, 14, 62, 68), r(154, 26, 30, s[600]), r(154, 42, 42), r(154, 54, 34), r(154, 66, 40)]
    }),
    photos: e.jsxs(e.Fragment, {
      children: [[s[300], o, f, s[600]].map((t, i) => e.jsx("rect", {
        x: 74 + i % 2 * 48,
        y: 8 + Math.floor(i / 2) * 42,
        width: "44",
        height: "38",
        rx: "8",
        fill: t
      }, t)), e.jsx("path", {
        d: "M78 42l12-14 10 10 6-6 8 10z",
        fill: "#fff",
        opacity: "0.9"
      }), p(108, 18, "#fff", 4), e.jsx("path", {
        d: "M126 84l12-14 10 10 6-6 8 10z",
        fill: "#fff",
        opacity: "0.9"
      })]
    }),
    video: e.jsxs(e.Fragment, {
      children: [e.jsx("rect", {
        x: "56",
        y: "10",
        width: "128",
        height: "76",
        rx: "10",
        fill: n[700]
      }), e.jsx("circle", {
        cx: "120",
        cy: "42",
        r: "16",
        fill: "#fff"
      }), e.jsx("path", {
        d: "M115 34l14 8-14 8z",
        fill: s[600]
      }), e.jsx("rect", {
        x: "68",
        y: "70",
        width: "104",
        height: "6",
        rx: "3",
        fill: n[500]
      }), e.jsx("rect", {
        x: "68",
        y: "70",
        width: "44",
        height: "6",
        rx: "3",
        fill: o
      })]
    }),
    files: e.jsxs(e.Fragment, {
      children: [l(56, 14, 50, 66, 8), r(66, 28, 26), r(66, 40, 30), e.jsx("rect", {
        x: "64",
        y: "58",
        width: "34",
        height: "14",
        rx: "5",
        fill: j
      }), l(112, 14, 50, 66, 8), r(122, 28, 30), r(122, 40, 22), e.jsx("rect", {
        x: "120",
        y: "58",
        width: "34",
        height: "14",
        rx: "5",
        fill: s[600]
      }), e.jsx("path", {
        d: "M176 34v22a8 8 0 0 0 16 0V30a5 5 0 0 0-10 0v24",
        fill: "none",
        stroke: n[500],
        strokeWidth: "3",
        strokeLinecap: "round"
      })]
    }),
    cloud: e.jsxs(e.Fragment, {
      children: [e.jsx("path", {
        d: "M84 72a20 20 0 0 1 2-40 28 28 0 0 1 54-2 22 22 0 0 1 14 42z",
        fill: s[600]
      }), e.jsx("path", {
        d: "M120 64V40m-9 9l9-9 9 9",
        fill: "none",
        stroke: "#fff",
        strokeWidth: "4",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), e.jsx("rect", {
        x: "62",
        y: "80",
        width: "116",
        height: "6",
        rx: "3",
        fill: n[200]
      }), e.jsx("rect", {
        x: "62",
        y: "80",
        width: "76",
        height: "6",
        rx: "3",
        fill: o
      })]
    }),
    mic: e.jsxs(e.Fragment, {
      children: [e.jsx("rect", {
        x: "52",
        y: "24",
        width: "136",
        height: "48",
        rx: "24",
        ...T
      }), e.jsx("circle", {
        cx: "78",
        cy: "48",
        r: "15",
        fill: s[600]
      }), e.jsx("path", {
        d: "M74 41l11 7-11 7z",
        fill: "#fff"
      }), [10, 20, 14, 26, 18, 10, 22, 14].map((t, i) => e.jsx("rect", {
        x: 102 + i * 9,
        y: 48 - t / 2,
        width: "5",
        height: t,
        rx: "2.5",
        fill: i < 4 ? s[600] : n[300]
      }, i))]
    }),
    gallery: e.jsxs(e.Fragment, {
      children: [l(40, 10, 160, 76), [s[300], o, f].map((t, i) => e.jsx("rect", {
        x: 50 + i * 34,
        y: "20",
        width: "28",
        height: "28",
        rx: "6",
        fill: t
      }, t)), e.jsx("rect", {
        x: "152",
        y: "20",
        width: "38",
        height: "28",
        rx: "6",
        fill: n[100]
      }), r(160, 31, 22), p(56, 66, j, 5), r(66, 63, 60), r(136, 63, 40, s[300])]
    }),
    lock: e.jsxs(e.Fragment, {
      children: [W(38, 30, 60, 34), r(50, 43, 34, n[200]), e.jsx("path", {
        d: "M104 47h32",
        stroke: n[300],
        strokeWidth: "3",
        strokeDasharray: "4 6",
        strokeLinecap: "round"
      }), e.jsx("rect", {
        x: "104",
        y: "40",
        width: "32",
        height: "28",
        rx: "7",
        fill: s[600]
      }), e.jsx("path", {
        d: "M111 40v-7a9 9 0 0 1 18 0v7",
        fill: "none",
        stroke: s[600],
        strokeWidth: "4"
      }), p(120, 53, "#fff", 4), L(142, 30, 60, 34, s[300])]
    }),
    retention: e.jsxs(e.Fragment, {
      children: [e.jsx("rect", {
        x: "52",
        y: "14",
        width: "136",
        height: "20",
        rx: "6",
        fill: s[600]
      }), r(104, 21, 32, "#fff"), l(58, 34, 124, 50, 6), [s[300], o, n[200]].map((t, i) => e.jsx("rect", {
        x: 70 + i * 36,
        y: "46",
        width: "28",
        height: "28",
        rx: "6",
        fill: t,
        opacity: i === 2 ? .7 : 1
      }, t))]
    }),
    bell: e.jsxs(e.Fragment, {
      children: [e.jsx("rect", {
        x: "66",
        y: "6",
        width: "56",
        height: "84",
        rx: "12",
        fill: "#fff",
        stroke: n[300],
        strokeWidth: "3"
      }), e.jsx("rect", {
        x: "74",
        y: "26",
        width: "40",
        height: "22",
        rx: "6",
        fill: s[100]
      }), r(80, 34, 26, s[600]), e.jsx("path", {
        d: "M160 26a16 16 0 0 1 16 16v12l6 8h-44l6-8V42a16 16 0 0 1 16-16z",
        fill: o
      }), e.jsx("path", {
        d: "M154 68a6 6 0 0 0 12 0z",
        fill: o
      }), p(176, 28, j, 7)]
    }),
    columns: e.jsx(e.Fragment, {
      children: [0, 1, 2].map(t => e.jsxs("g", {
        children: [l(38 + t * 56, 10, 50, 76, 8), e.jsx("rect", {
          x: 38 + t * 56,
          y: "10",
          width: "50",
          height: "14",
          rx: "8",
          fill: t === 1 ? s[600] : n[100]
        }), e.jsx("rect", {
          x: 44 + t * 56,
          y: "32",
          width: "26",
          height: "12",
          rx: "6",
          fill: n[100]
        }), e.jsx("rect", {
          x: 56 + t * 56,
          y: "50",
          width: "26",
          height: "12",
          rx: "6",
          fill: t === 1 ? s[600] : s[300]
        }), e.jsx("rect", {
          x: 44 + t * 56,
          y: "68",
          width: "20",
          height: "10",
          rx: "5",
          fill: n[100]
        })]
      }, t))
    }),
    palette: e.jsxs(e.Fragment, {
      children: [l(44, 12, 152, 72), [s[600], o, f, j].map((t, i) => e.jsx("circle", {
        cx: 68 + i * 28,
        cy: "34",
        r: "10",
        fill: t,
        stroke: i === 0 ? n[700] : "none",
        strokeWidth: "3"
      }, t)), e.jsx("rect", {
        x: "58",
        y: "60",
        width: "124",
        height: "6",
        rx: "3",
        fill: n[200]
      }), e.jsx("rect", {
        x: "58",
        y: "60",
        width: "70",
        height: "6",
        rx: "3",
        fill: s[600]
      }), e.jsx("circle", {
        cx: "128",
        cy: "63",
        r: "8",
        fill: "#fff",
        stroke: s[600],
        strokeWidth: "3"
      })]
    }),
    inbox: e.jsxs(e.Fragment, {
      children: [l(44, 12, 112, 72), [0, 1, 2].map(t => e.jsxs("g", {
        children: [p(58, 30 + t * 20, t === 2 ? n[200] : s[600], 4), r(68, 24 + t * 20, [70, 56, 64][t], t === 2 ? n[200] : n[300]), r(68, 33 + t * 20, 40, n[100], 5)]
      }, t)), k(136, 44, 64, 44), p(198, 44, o, 9)]
    }),
    sharedBox: e.jsxs(e.Fragment, {
      children: [k(88, 34, 64, 44), u(64, 28, s[300], 8), u(120, 12, o, 7), u(176, 28, f, 8)]
    }),
    mailFolders: e.jsxs(e.Fragment, {
      children: [l(44, 10, 152, 76), [s[600], o, j, n[300]].map((t, i) => e.jsxs("g", {
        children: [e.jsx("rect", {
          x: "56",
          y: 19 + i * 16,
          width: "12",
          height: "10",
          rx: "3",
          fill: t
        }), r(76, 21 + i * 16, [56, 44, 36, 48][i])]
      }, t)), e.jsx("rect", {
        x: "152",
        y: "19",
        width: "32",
        height: "10",
        rx: "5",
        fill: s[100]
      })]
    }),
    rules: e.jsxs(e.Fragment, {
      children: [k(34, 14, 40, 28, n[300]), k(34, 54, 40, 28, n[300]), e.jsx("path", {
        d: "M82 28h14l14 20-14 20H82",
        fill: "none",
        stroke: n[300],
        strokeWidth: "3",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), e.jsx("path", {
        d: "M104 22h36l-13 16v20l-10 6V38z",
        fill: s[600]
      }), e.jsx("path", {
        d: "M146 40c14 0 12-16 24-16M146 56c14 0 12 16 24 16",
        fill: "none",
        stroke: s[600],
        strokeWidth: "3",
        strokeLinecap: "round"
      }), v(174, 12, 32, o), v(174, 58, 32, f)]
    }),
    signature: e.jsxs(e.Fragment, {
      children: [l(48, 10, 144, 76), r(62, 24, 100), r(62, 36, 76), e.jsx("path", {
        d: "M62 52h116",
        stroke: n[200],
        strokeWidth: "2",
        strokeDasharray: "4 5"
      }), e.jsx("path", {
        d: "M64 72c6-14 10-14 12-4s8 4 12-4 6 10 14 6 8-6 16-4",
        fill: "none",
        stroke: s[600],
        strokeWidth: "3",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })]
    }),
    clockSend: e.jsxs(e.Fragment, {
      children: [k(50, 28, 72, 48), e.jsx("circle", {
        cx: "162",
        cy: "46",
        r: "26",
        fill: "#fff",
        stroke: n[200],
        strokeWidth: "3"
      }), e.jsx("path", {
        d: "M162 30v16l11 7",
        fill: "none",
        stroke: o,
        strokeWidth: "4",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })]
    }),
    globe: e.jsxs(e.Fragment, {
      children: [e.jsx("circle", {
        cx: "96",
        cy: "48",
        r: "32",
        fill: "#fff",
        stroke: s[600],
        strokeWidth: "3"
      }), e.jsx("path", {
        d: "M64 48h64M96 16c-16 16-16 48 0 64M96 16c16 16 16 48 0 64",
        fill: "none",
        stroke: s[300],
        strokeWidth: "3",
        strokeLinecap: "round"
      }), [0, 1, 2].map(t => e.jsxs("g", {
        children: [e.jsx("circle", {
          cx: "150",
          cy: 24 + t * 24,
          r: "8",
          fill: f
        }), e.jsx("path", {
          d: `M146 ${24 + t * 24}l3 3 5-6`,
          fill: "none",
          stroke: "#fff",
          strokeWidth: "2.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }), r(164, 21 + t * 24, 34)]
      }, t))]
    }),
    at: e.jsxs(e.Fragment, {
      children: [l(40, 26, 160, 44, 22), u(66, 44, s[300], 7), r(86, 45, 30, n[700]), e.jsx("circle", {
        cx: "132",
        cy: "48",
        r: "10",
        fill: "none",
        stroke: s[600],
        strokeWidth: "4"
      }), p(132, 48, s[600], 4), r(150, 45, 36, s[300])]
    }),
    alias: e.jsxs(e.Fragment, {
      children: [k(40, 32, 48, 32), e.jsx("path", {
        d: "M96 48c18 0 16-26 34-26M96 48h34M96 48c18 0 16 26 34 26",
        fill: "none",
        stroke: n[300],
        strokeWidth: "3",
        strokeLinecap: "round"
      }), [s[300], o, f].map((t, i) => e.jsxs("g", {
        children: [e.jsx("circle", {
          cx: "146",
          cy: 22 + i * 26,
          r: "10",
          fill: t
        }), r(162, 19 + i * 26, 34)]
      }, t))]
    }),
    devices: e.jsxs(e.Fragment, {
      children: [e.jsx("rect", {
        x: "46",
        y: "16",
        width: "104",
        height: "60",
        rx: "8",
        fill: "#fff",
        stroke: n[300],
        strokeWidth: "3"
      }), e.jsx("rect", {
        x: "34",
        y: "76",
        width: "128",
        height: "8",
        rx: "4",
        fill: n[300]
      }), k(74, 30, 48, 32), e.jsx("rect", {
        x: "164",
        y: "26",
        width: "38",
        height: "62",
        rx: "8",
        fill: "#fff",
        stroke: n[300],
        strokeWidth: "3"
      }), k(171, 46, 24, 18, s[300])]
    }),
    log: e.jsxs(e.Fragment, {
      children: [l(44, 10, 124, 76), [f, f, j].map((t, i) => e.jsxs("g", {
        children: [p(58, 28 + i * 20, t, 5), r(70, 25 + i * 20, [72, 60, 66][i])]
      }, i)), e.jsx("circle", {
        cx: "176",
        cy: "54",
        r: "16",
        fill: "#fff",
        stroke: s[600],
        strokeWidth: "4"
      }), e.jsx("path", {
        d: "M188 66l10 10",
        stroke: s[600],
        strokeWidth: "5",
        strokeLinecap: "round"
      })]
    }),
    mailPrice: e.jsxs(e.Fragment, {
      children: [k(48, 26, 64, 44), [0, 1].map(t => e.jsx("rect", {
        x: 124 + t * 36,
        y: "30",
        width: "30",
        height: "36",
        rx: "6",
        fill: "#fff",
        stroke: n[300],
        strokeWidth: "2",
        strokeDasharray: "4 4"
      }, t)), e.jsx("path", {
        d: "M139 42v12m-6-6h12M175 42v12m-6-6h12",
        stroke: n[300],
        strokeWidth: "3",
        strokeLinecap: "round"
      }), p(108, 28, o, 9)]
    }),
    spam: e.jsxs(e.Fragment, {
      children: [k(36, 16, 44, 30, n[300]), k(36, 54, 44, 30, n[300]), e.jsx("path", {
        d: "M104 12v72",
        stroke: s[600],
        strokeWidth: "5",
        strokeLinecap: "round",
        strokeDasharray: "2 10"
      }), F(88, 31, 40, f), e.jsx("path", {
        d: "M88 69h10",
        stroke: j,
        strokeWidth: "3",
        strokeLinecap: "round"
      }), e.jsx("circle", {
        cx: "98",
        cy: "69",
        r: "2",
        fill: j
      }), l(144, 12, 60, 38, 8), r(154, 24, 40), r(154, 36, 28, n[200]), e.jsx("rect", {
        x: "144",
        y: "58",
        width: "60",
        height: "26",
        rx: "8",
        fill: M.rose50,
        stroke: M.rose200,
        strokeWidth: "2"
      }), e.jsx("path", {
        d: "M168 65l12 12m0-12l-12 12",
        stroke: j,
        strokeWidth: "3",
        strokeLinecap: "round"
      })]
    }),
    shield: e.jsxs(e.Fragment, {
      children: [k(40, 30, 60, 40, s[300]), e.jsx("path", {
        d: "M152 10l34 12v22c0 22-14 36-34 44-20-8-34-22-34-44V22z",
        fill: s[600]
      }), e.jsx("path", {
        d: "M138 48l10 10 18-20",
        fill: "none",
        stroke: "#fff",
        strokeWidth: "5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })]
    }),
    noImage: e.jsxs(e.Fragment, {
      children: [l(50, 10, 140, 76), r(64, 22, 80), e.jsx("rect", {
        x: "64",
        y: "36",
        width: "112",
        height: "40",
        rx: "6",
        fill: n[100]
      }), e.jsx("path", {
        d: "M74 70l18-20 14 14 10-10 16 16z",
        fill: n[300]
      }), p(160, 48, n[300], 5), e.jsx("path", {
        d: "M70 40l100 32",
        stroke: j,
        strokeWidth: "4",
        strokeLinecap: "round"
      })]
    }),
    learn: e.jsxs(e.Fragment, {
      children: [k(40, 14, 44, 30, n[300]), e.jsx("circle", {
        cx: "84",
        cy: "14",
        r: "9",
        fill: j
      }), e.jsx("path", {
        d: "M80 10l8 8m0-8l-8 8",
        stroke: "#fff",
        strokeWidth: "2.5",
        strokeLinecap: "round"
      }), k(40, 54, 44, 30, n[300]), e.jsx("circle", {
        cx: "84",
        cy: "54",
        r: "9",
        fill: f
      }), e.jsx("path", {
        d: "M80 54l3 3 5-6",
        fill: "none",
        stroke: "#fff",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), e.jsx("path", {
        d: "M98 30c20 0 16 18 34 18M98 68c20 0 16-20 34-20",
        fill: "none",
        stroke: n[300],
        strokeWidth: "3",
        strokeLinecap: "round"
      }), e.jsx("path", {
        d: "M140 26h60l-22 24v22l-16 8V50z",
        fill: s[600]
      })]
    }),
    virus: e.jsxs(e.Fragment, {
      children: [l(52, 12, 64, 72, 8), r(64, 26, 36), r(64, 38, 40), e.jsx("path", {
        d: "M70 56v12a7 7 0 0 0 14 0V52a4 4 0 0 0-8 0v14",
        fill: "none",
        stroke: n[500],
        strokeWidth: "3",
        strokeLinecap: "round"
      }), e.jsx("circle", {
        cx: "158",
        cy: "48",
        r: "26",
        fill: "#fff",
        stroke: j,
        strokeWidth: "5"
      }), e.jsx("path", {
        d: "M140 30l36 36",
        stroke: j,
        strokeWidth: "5",
        strokeLinecap: "round"
      }), e.jsx("circle", {
        cx: "158",
        cy: "48",
        r: "8",
        fill: n[700]
      }), e.jsx("path", {
        d: "M158 34v6m0 16v6m-14-14h6m16 0h6",
        stroke: n[700],
        strokeWidth: "3",
        strokeLinecap: "round"
      })]
    }),
    openTrack: e.jsxs(e.Fragment, {
      children: [e.jsx("path", {
        d: "M52 44l40-28 40 28v36a6 6 0 0 1-6 6H58a6 6 0 0 1-6-6z",
        fill: s[600]
      }), e.jsx("rect", {
        x: "64",
        y: "26",
        width: "56",
        height: "40",
        rx: "5",
        fill: "#fff"
      }), r(72, 36, 40), r(72, 48, 28), e.jsx("path", {
        d: "M52 46l40 26 40-26v34a6 6 0 0 1-6 6H58a6 6 0 0 1-6-6z",
        fill: s[300]
      }), e.jsx("path", {
        d: "M146 48c10-16 36-16 46 0-10 16-36 16-46 0z",
        fill: "#fff",
        stroke: f,
        strokeWidth: "3"
      }), p(169, 48, f, 7)]
    }),
    secureMail: e.jsxs(e.Fragment, {
      children: [k(48, 24, 84, 54), e.jsx("rect", {
        x: "130",
        y: "42",
        width: "52",
        height: "42",
        rx: "9",
        fill: o
      }), e.jsx("path", {
        d: "M142 42v-9a14 14 0 0 1 28 0v9",
        fill: "none",
        stroke: o,
        strokeWidth: "5"
      }), p(156, 60, "#fff", 5), e.jsx("path", {
        d: "M156 62v9",
        stroke: "#fff",
        strokeWidth: "4",
        strokeLinecap: "round"
      })]
    })
  };
function oe({
  kind: t
}) {
  return e.jsxs(d, {
    component: "svg",
    viewBox: "0 0 240 96",
    "aria-hidden": !0,
    focusable: "false",
    sx: {
      display: "block",
      width: "100%",
      height: "auto"
    },
    children: [e.jsx("circle", {
      cx: "120",
      cy: "50",
      r: "46",
      fill: s[100]
    }), he[t]]
  });
}
function de({
  point: t
}) {
  return e.jsxs(d, {
    sx: {
      ...le,
      height: "100%",
      p: t.art ? 0 : {
        xs: 2.5,
        md: 3
      },
      overflow: t.art ? "hidden" : void 0,
      display: "flex",
      gap: t.art ? 0 : 2,
      flexDirection: t.illustration || t.art ? "column" : "row"
    },
    children: [t.art && e.jsx(d, {
      sx: {
        bgcolor: s[50],
        px: 2,
        pt: 2,
        pb: 1.5
      },
      children: e.jsx(d, {
        sx: {
          maxWidth: 280,
          mx: "auto"
        },
        children: e.jsx(oe, {
          kind: t.art
        })
      })
    }), t.illustration, t.icon && !t.illustration && !t.art && e.jsx(d, {
      sx: {
        ...xe,
        display: {
          xs: "none",
          md: "inline-flex"
        }
      },
      children: e.jsx(t.icon, {
        sx: {
          fontSize: 26
        }
      })
    }), e.jsxs(d, {
      sx: {
        minWidth: 0,
        ...(t.art ? {
          p: {
            xs: 2.5,
            md: 3
          }
        } : {})
      },
      children: [t.illustration ? e.jsxs(d, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 1.5
        },
        children: [t.tag && e.jsx(d, {
          component: "span",
          sx: {
            ...$,
            flexShrink: 0
          },
          children: t.tag
        }), e.jsx(d, {
          component: "h3",
          sx: P,
          children: t.title
        })]
      }) : e.jsxs(e.Fragment, {
        children: [t.tag && e.jsx(d, {
          component: "span",
          sx: {
            ...$,
            mb: 2
          },
          children: t.tag
        }), e.jsx(d, {
          component: "h3",
          sx: P,
          children: t.title
        })]
      }), t.desc && e.jsx(d, {
        component: "p",
        sx: z,
        children: E(t.desc)
      }), t.points && e.jsx(d, {
        component: "ul",
        sx: {
          ...z,
          pl: 2.5,
          listStyleType: "disc",
          display: "grid",
          gap: .5
        },
        children: t.points.map((i, x) => e.jsx("li", {
          children: typeof i == "string" ? E(i) : i
        }, typeof i == "string" ? i : x))
      }), t.chips && e.jsx(d, {
        component: "ul",
        sx: {
          m: 0,
          mt: 2,
          p: 0,
          listStyle: "none",
          display: "flex",
          flexWrap: "wrap",
          gap: 1
        },
        children: t.chips.map(i => e.jsx(d, {
          component: "li",
          sx: $,
          children: i
        }, i))
      }), t.link && e.jsxs(d, {
        component: S,
        to: t.link.to,
        sx: {
          ...z,
          display: "inline-flex",
          alignItems: "center",
          gap: .75,
          fontWeight: O.medium,
          color: s[600],
          textDecoration: "none",
          "@media (hover: hover)": {
            "&:hover": {
              color: s[700]
            }
          }
        },
        children: [t.link.label, e.jsx(C, {
          sx: {
            fontSize: 20
          }
        })]
      })]
    })]
  });
}
function Le({
  points: t,
  columns: i,
  mt: x = 6
}) {
  return e.jsx(d, {
    sx: {
      mt: x,
      display: "grid",
      gap: 2,
      gridTemplateColumns: {
        xs: "1fr",
        md: `repeat(${i}, minmax(0, 1fr))`
      }
    },
    children: t.map((h, c) => e.jsx(H, {
      delay: c % i * .07,
      children: e.jsx(de, {
        point: h
      })
    }, h.title))
  });
}
function be({
  eyebrow: t,
  title: i,
  lead: x
}) {
  return e.jsxs(H, {
    sx: U,
    children: [e.jsx(d, {
      component: "p",
      sx: Y,
      children: t
    }), e.jsx(d, {
      component: "h2",
      sx: K,
      children: i
    }), e.jsx(d, {
      component: "p",
      sx: Z,
      children: E(x)
    })]
  });
}
const ve = {
    mt: {
      xs: 4,
      md: 5
    }
  },
  Te = {
    bgcolor: n[50],
    borderTop: `1px solid ${n[200]}`,
    borderBottom: `1px solid ${n[200]}`
  },
  ce = 250,
  D = 55,
  ae = 200,
  fe = R`50% { opacity: 0; }`,
  je = R`
    0% { background-position: -80% 0, 0 0; }
    45%, 100% { background-position: 200% 0, 0 0; }
`,
  X = `linear-gradient(90deg, ${s[700]}, #0284c7)`,
  pe = R`from { transform: translateY(-105%); }`,
  me = .45;
function ge({
  title: t
}) {
  const i = w.useMemo(() => J(t), [t]);
  return i.length === 0 ? e.jsx(e.Fragment, {
    children: t
  }) : e.jsx(e.Fragment, {
    children: i.map((x, h) => e.jsx(d, {
      component: "span",
      sx: {
        display: "block",
        overflow: "hidden",
        pb: "0.1em",
        mb: "-0.1em",
        "& > span": {
          display: "inline-block",
          "@media (prefers-reduced-motion: no-preference)": {
            animation: `${pe} 0.75s cubic-bezier(0.2, 0.7, 0.2, 1) both`,
            animationDelay: `${.1 + h * me}s`
          }
        }
      },
      children: e.jsx("span", {
        children: e.jsx(A, {
          line: x
        })
      })
    }, h))
  });
}
function q({
  children: t
}) {
  return e.jsx(d, {
    component: "span",
    sx: {
      color: "transparent",
      backgroundImage: X,
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      "@media (prefers-reduced-motion: no-preference)": {
        backgroundImage: `linear-gradient(100deg, transparent 0%, rgba(255, 255, 255, 0.9) 50%, transparent 100%), ${X}`,
        backgroundSize: "40% 100%, 100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "-80% 0, 0 0",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        animation: `${je} 3.5s 0.3s ease-in-out infinite`
      }
    },
    children: t
  });
}
function J(t) {
  const i = [[]],
    x = (c, m) => {
      const a = i[i.length - 1],
        g = a[a.length - 1];
      g && g.shine === m ? g.text += c : a.push({
        text: c,
        shine: m
      });
    },
    h = (c, m) => {
      if (!(c == null || typeof c == "boolean")) {
        if (typeof c == "string" || typeof c == "number") return x(String(c), m);
        if (Array.isArray(c)) return c.forEach(a => h(a, m));
        if (w.isValidElement(c)) {
          const a = c;
          if (a.type === "br" || a.props.component === "br") {
            i.push([]);
            return;
          }
          const g = m || a.type === q;
          (a.type === w.Fragment || a.props.children !== void 0) && w.Children.forEach(a.props.children, y => h(y, g));
        }
      }
    };
  return h(t, !1), i.map(c => {
    const m = c.map(a => ({
      ...a,
      text: a.text.replace(/\s+/g, " ")
    })).filter(a => a.text);
    return m.length && (m[0].text = m[0].text.trimStart(), m[m.length - 1].text = m[m.length - 1].text.trimEnd()), m.filter(a => a.text);
  }).filter(c => c.length > 0);
}
const _ = t => t.map(i => i.text).join("");
function A({
  line: t
}) {
  return e.jsx(e.Fragment, {
    children: t.map((i, x) => i.shine ? e.jsx(q, {
      children: i.text
    }, x) : e.jsx(w.Fragment, {
      children: i.text
    }, x))
  });
}
function ke({
  title: t
}) {
  const i = w.useMemo(() => J(t), [t]),
    x = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    h = w.useMemo(() => i.reduce((a, g, y) => (a.push(y === 0 ? ce : a[y - 1] + B(_(i[y - 1]), {
      speed: D
    }) + ae), a), []), [i]),
    [c, m] = w.useState(0);
  return w.useEffect(() => {
    if (x) return;
    const a = i.map((g, y) => window.setTimeout(() => m(Q => Math.max(Q, y + 1)), h[y] + B(_(g), {
      speed: D
    }) + 120));
    return () => a.forEach(g => window.clearTimeout(g));
  }, [i, h, x]), i.length === 0 ? e.jsx(e.Fragment, {
    children: t
  }) : x ? e.jsx(e.Fragment, {
    children: i.map((a, g) => e.jsx(d, {
      component: "span",
      sx: {
        display: "block"
      },
      children: e.jsx(A, {
        line: a
      })
    }, g))
  }) : e.jsxs(e.Fragment, {
    children: [e.jsx(d, {
      component: "span",
      sx: {
        position: "absolute",
        width: "1px",
        height: "1px",
        overflow: "hidden",
        clipPath: "inset(50%)",
        whiteSpace: "nowrap"
      },
      children: i.map(_).join(" ")
    }), i.map((a, g) => e.jsx(d, {
      component: "span",
      "aria-hidden": "true",
      sx: {
        display: "block",
        "& .title-caret": {
          display: "inline-block",
          width: "3px",
          height: "0.9em",
          ml: "3px",
          mr: "-6px",
          verticalAlign: "-0.08em",
          bgcolor: s[600],
          animation: `${fe} 0.9s steps(1) infinite`
        }
      },
      children: c > g ? e.jsx(A, {
        line: a
      }) : e.jsx(ee, {
        text: _(a),
        delay: h[g],
        speed: D,
        caretClassName: "title-caret",
        ariaHidden: !0
      })
    }, g))]
  });
}
function Se({
  eyebrow: t,
  title: i,
  lead: x,
  extraCta: h,
  aside: c,
  titleEffect: m = "typing",
  children: a
}) {
  const g = G(),
    y = !!c;
  return e.jsx(d, {
    component: "section",
    sx: {
      bgcolor: "#fff"
    },
    children: e.jsxs(d, {
      sx: {
        ...V,
        py: {
          xs: 6,
          md: 10
        },
        ...(y ? {
          display: "grid",
          alignItems: "center",
          gap: {
            xs: 5,
            md: 6
          },
          gridTemplateColumns: {
            xs: "minmax(0, 1fr)",
            md: "minmax(0, 1.2fr) minmax(0, 1fr)"
          }
        } : {})
      },
      children: [e.jsxs(d, {
        children: [e.jsxs(d, {
          sx: y ? {
            textAlign: {
              xs: "center",
              md: "left"
            },
            "& > p:last-of-type": {
              mx: {
                xs: "auto",
                md: 0
              }
            }
          } : U,
          children: [e.jsx(d, {
            component: "p",
            sx: Y,
            children: t
          }), e.jsx(d, {
            component: "h1",
            sx: K,
            children: m === "drop" ? e.jsx(ge, {
              title: i
            }) : e.jsx(ke, {
              title: i
            })
          }), e.jsx(d, {
            component: "p",
            sx: Z,
            children: E(x)
          })]
        }), e.jsxs(d, {
          sx: {
            mt: {
              xs: 3.5,
              md: 4
            },
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row"
            },
            flexWrap: "wrap",
            justifyContent: y ? {
              xs: "center",
              md: "flex-start"
            } : "center",
            gap: {
              xs: 2,
              sm: 2.5
            }
          },
          children: [e.jsxs(d, {
            component: S,
            to: g.to,
            sx: {
              ...te,
              width: {
                xs: "100%",
                sm: "auto"
              }
            },
            children: [g.label, e.jsx(C, {
              sx: {
                fontSize: 20
              }
            })]
          }), e.jsx(d, {
            component: S,
            to: "/pricing",
            sx: {
              ...re,
              width: {
                xs: "100%",
                sm: "auto"
              }
            },
            children: "요금 안내"
          }), h]
        }), a]
      }), c]
    })
  });
}
function Ee() {
  return e.jsxs(e.Fragment, {
    children: [e.jsx(d, {
      component: "br",
      sx: {
        display: {
          xs: "none",
          sm: "inline"
        }
      }
    }), " "]
  });
}
const _e = {
  mt: {
    xs: 5,
    md: 7
  }
};
function $e({
  title: t,
  lead: i
}) {
  const x = G();
  return e.jsx(d, {
    component: "section",
    sx: {
      bgcolor: n[50],
      borderTop: `1px solid ${n[200]}`
    },
    children: e.jsx(d, {
      sx: {
        ...V,
        ...se
      },
      children: e.jsx(H, {
        children: e.jsxs(d, {
          sx: {
            borderRadius: 4,
            bgcolor: s[900],
            color: "#fff",
            backgroundImage: `radial-gradient(620px 380px at 88% 0%, ${M.blue700}66, transparent 62%)`,
            px: {
              xs: 3,
              md: 7
            },
            py: {
              xs: 5,
              md: 6
            }
          },
          children: [e.jsx(d, {
            component: "h2",
            sx: {
              m: 0,
              fontFamily: '"GyeonggiTitle", "Noto Sans KR", sans-serif',
              fontSize: {
                xs: b["2xl"],
                sm: b["3xl"],
                md: b["4xl"]
              },
              fontWeight: O.normal,
              letterSpacing: "-0.02em",
              lineHeight: N.tight,
              wordBreak: "keep-all"
            },
            children: t
          }), e.jsx(d, {
            component: "p",
            sx: {
              m: 0,
              mt: 2,
              fontSize: {
                xs: b.base,
                md: b.xl
              },
              lineHeight: N.relaxed,
              color: n[300],
              wordBreak: "keep-all"
            },
            children: E(i, {
              onDark: !0
            })
          }), e.jsxs(d, {
            sx: {
              mt: 3.5,
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "row"
              },
              flexWrap: "wrap",
              gap: {
                xs: 2,
                sm: 2.5
              }
            },
            children: [e.jsxs(d, {
              component: S,
              to: x.to,
              sx: {
                ...ie,
                width: {
                  xs: "100%",
                  sm: "auto"
                }
              },
              children: [x.label, e.jsx(C, {
                sx: {
                  fontSize: 20
                }
              })]
            }), e.jsx(d, {
              component: S,
              to: "/contact",
              sx: {
                ...ne,
                width: {
                  xs: "100%",
                  sm: "auto"
                }
              },
              children: "상담 신청하기"
            })]
          })]
        })
      })
    })
  });
}
export { Le as C, Se as F, _e as H, ve as I, Ee as L, be as S, Te as T, $e as a, q as b, oe as c, de as d };