import { j as t } from "./react-CjxcGQav.js";
let i = 0;
function s() {
  return i += 1, `taskham-logo-hdr-${i}`;
}
function h({
  size: e = 40
}) {
  const r = s();
  return t.jsxs("svg", {
    width: e,
    height: e,
    viewBox: "0 0 100 100",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    "aria-label": "업무함",
    children: [t.jsx("defs", {
      children: t.jsxs("linearGradient", {
        id: r,
        x1: "18",
        y1: "26",
        x2: "82",
        y2: "26",
        gradientUnits: "userSpaceOnUse",
        children: [t.jsx("stop", {
          stopColor: "#3b82f6"
        }), t.jsx("stop", {
          offset: "1",
          stopColor: "#1d4ed8"
        })]
      })
    }), t.jsx("rect", {
      x: "14",
      y: "20",
      width: "72",
      height: "64",
      rx: "14",
      fill: "#f2f5ff"
    }), t.jsx("rect", {
      x: "15",
      y: "21",
      width: "70",
      height: "62",
      rx: "13",
      stroke: "#93c5fd",
      strokeWidth: "2",
      fill: "none"
    }), t.jsx("path", {
      d: "M14 34a14 14 0 0 1 14-14h44a14 14 0 0 1 14 14v6H14v-6Z",
      fill: `url(#${r})`
    }), t.jsx("rect", {
      x: "30",
      y: "14",
      width: "8",
      height: "14",
      rx: "4",
      fill: "#1e40af"
    }), t.jsx("rect", {
      x: "62",
      y: "14",
      width: "8",
      height: "14",
      rx: "4",
      fill: "#1e40af"
    }), t.jsx("rect", {
      x: "25",
      y: "53",
      width: "19",
      height: "18",
      rx: "5.5",
      fill: "#2f9e5b"
    }), t.jsx("path", {
      d: "M29.5 62l4 4.2 7-8.4",
      stroke: "#fff",
      strokeWidth: "3.4",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), t.jsx("rect", {
      x: "51",
      y: "58.5",
      width: "24",
      height: "7",
      rx: "3.5",
      fill: "#c7d2fe"
    })]
  });
}
export { h as T };