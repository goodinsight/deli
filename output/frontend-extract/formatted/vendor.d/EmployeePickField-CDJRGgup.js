import { r as p, j as m } from "./react-CjxcGQav.js";
import { bv as c, fN as _ } from "../js.d/main-Cm9wS5wt.js";
import { a as j } from "./types-CVhETUvu.js";
function b(t) {
  return {
    seq: t.seq,
    name: t.name,
    unit_seq: t.unit_seq,
    position: t.position,
    job_title: t.job_title,
    status: t.status,
    join_date: t.join_date,
    resign_date: t.resign_date
  };
}
function h(t) {
  return [t.name, t.position].filter(Boolean).join(" ");
}
function g({
  value: t,
  onPick: i,
  employees: a,
  fixed: o,
  loading: r,
  disabled: u
}) {
  const e = c(),
    l = p.useMemo(() => {
      const s = new Map();
      o && s.set(o.seq, o);
      for (const n of a) s.set(n.seq, n);
      return [...s.values()].map(n => ({
        value: n.seq,
        label: [n.name, n.position, j[n.status]].filter(Boolean).join(" · ")
      }));
    }, [a, o]);
  return m.jsx(_, {
    label: e("hr.employeePickRequired"),
    options: l,
    value: t || null,
    onChange: s => i(Number(s) || 0),
    onInputChange: (s, n, f) => {
      f === "input" && !n.trim() && t && i(0);
    },
    disablePortal: !1,
    loading: r,
    placeholder: e("hr.employeeFindByName"),
    noOptionsText: e("hr.employeePickNone"),
    disabled: u,
    fullWidth: !0
  });
}
export { g as E, h as e, b as t };