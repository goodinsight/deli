import { j as n } from "./react-CjxcGQav.js";
import { B as r, s as t, bT as s } from "../js.d/main-Cm9wS5wt.js";
function a(o) {
  return {
    id: "no",
    get text() {
      return s("hr.employeeColNo");
    },
    width: 64,
    align: "center",
    ...(o?.pinned ? {
      pinned: "left"
    } : {}),
    render: (i, e) => n.jsx(r, {
      component: "span",
      sx: {
        fontSize: 13,
        color: t[500]
      },
      children: e + 1
    })
  };
}
export { a as r };