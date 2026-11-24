import { r as i, j as a } from "./react-CjxcGQav.js";
import { bv as j, B as c, fN as g } from "../js.d/main-Cm9wS5wt.js";
import { a as h } from "./glStore-Bh_caf5d.js";
function C({
  form: t,
  items: l,
  accounts: m,
  accountByCode: u,
  prefix: n = "",
  disabled: d,
  stacked: x
}) {
  const s = j(),
    b = i.useMemo(() => l.map(e => ({
      value: e.name,
      label: e.name
    })), [l]),
    p = i.useMemo(() => new Map(l.map(e => [e.name, e])), [l]),
    f = i.useMemo(() => m.filter(e => e.account_level !== 1).map(e => ({
      value: e.code,
      label: h(e)
    })), [m]);
  return a.jsxs(c, {
    sx: {
      display: "grid",
      gap: 2.5,
      gridTemplateColumns: x ? "minmax(0, 1fr)" : "repeat(2, minmax(0, 1fr))"
    },
    children: [a.jsx(g, {
      form: t,
      name: `${n}tran_item`,
      label: s("accounting.tranItem"),
      placeholder: s("accounting.tranItemPlaceholder"),
      options: b,
      onChange: e => {
        const o = p.get(String(e ?? ""))?.accounts[0] ?? 0;
        o && (t.setFormValue(`${n}ac_code`, o), t.setFormValue(`${n}ac_label`, h(u.get(o))));
      },
      renderOption: e => {
        const r = p.get(String(e.value)),
          o = r ? u.get(r.accounts[0]) : void 0;
        return a.jsxs(c, {
          sx: {
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
            width: "100%",
            minWidth: 0
          },
          children: [a.jsx(c, {
            component: "span",
            sx: {
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: e.label
          }), a.jsx(c, {
            component: "span",
            sx: {
              color: "text.secondary",
              flexShrink: 0
            },
            children: o?.account_name ?? ""
          })]
        });
      },
      disablePortal: !1,
      disabled: d,
      fullWidth: !0
    }), a.jsx(g, {
      form: t,
      name: `${n}ac_label`,
      label: s("accounting.account"),
      placeholder: s("accounting.accountPlaceholder"),
      options: f,
      onChange: e => t.setFormValue(`${n}ac_code`, Number(e) || 0),
      disablePortal: !1,
      disabled: d,
      fullWidth: !0
    })]
  });
}
export { C };