import { r as i, j as _ } from "./react-CjxcGQav.js";
import { bv as P, D as x, cz as h, bO as k, bT as M, ce as E, cf as q } from "../js.d/main-Cm9wS5wt.js";
import { s as B, t as O, S as R, r as u } from "./StatsView-xYBly2rm.js";
import { t as j, S as I } from "./StatsChartsView-BLKkLLA_.js";
import { u as L, c as N } from "./customerMetaStore-Bj9KdRyn.js";
import "./stylis-DdLD6a3t.js";
import "./OptionToggleGroup-Cvm2wRyq.js";
import "./reselect-DokMjEPX.js";
import "./d3-BkRUnfR7.js";
import "./useThemeProps-CIcPyl2F.js";
const r = t => (t ?? 0).toLocaleString(E(q()));
function K() {
  const t = P(),
    d = x(),
    c = h()?.seq ?? 0,
    l = L(),
    [n, f] = i.useState(() => B("month")),
    [s, b] = i.useState(null),
    [y, g] = i.useState(!1);
  i.useEffect(() => {
    if (!c) return;
    let e = !0;
    return g(!0), N.stats(n.from, n.to).then(o => e && b(o)).catch(o => e && k(o instanceof Error ? o.message : M("customer.loadCustomerStatsFailed"))).finally(() => e && g(!1)), () => {
      e = !1;
    };
  }, [c, n]);
  const v = e => l.categories.find(o => String(o.seq) === e)?.name ?? t("customer.noCategory"),
    S = e => l.members.find(o => String(o.account_seq) === e)?.name ?? t("customer.noManager"),
    m = s?.registered ?? 0,
    a = t("customer.unitPeople"),
    p = O(s?.by_day ?? {}, n.from, j(n.to));
  let C = s?.total_before ?? 0;
  const $ = p.map(e => ({
      label: e.label,
      value: C += e.value
    })),
    w = d ? R : I;
  return _.jsx(w, {
    period: n,
    onPeriodChange: f,
    loading: y,
    basis: t("customer.basisCreated"),
    capped: s?.capped,
    tiles: [{
      label: t("customer.allCustomers"),
      value: `${r(s?.total_all)}${a}`,
      note: t("customer.activeCustomers", {
        count: r(s?.total_active)
      })
    }, {
      label: t("customer.newlyRegistered"),
      value: `${r(m)}${a}`,
      note: t("customer.thisPeriod")
    }, {
      label: t("customer.marketingConsent"),
      value: `${r(s?.marketing_agree)}${a}`,
      note: m > 0 ? t("customer.percentOfNew", {
        pct: Math.round((s?.marketing_agree ?? 0) / m * 100)
      }) : t("customer.newInPeriod")
    }],
    trend: {
      title: t("customer.newByDay"),
      points: p,
      unit: a
    },
    side: {
      title: t("customer.cumulativeCustomers"),
      kind: "line",
      points: $,
      unit: a
    },
    ranks: [{
      title: t("customer.newByCategory"),
      items: u(s?.by_category, v).map(e => ({
        ...e,
        text: `${r(e.value)}${a}`
      }))
    }, {
      title: t("customer.newByManager"),
      items: u(s?.by_manager, S).map(e => ({
        ...e,
        text: `${r(e.value)}${a}`
      }))
    }, {
      title: t("customer.newByRegion"),
      items: u(s?.by_region, e => e || t("customer.noRegion")).map(e => ({
        ...e,
        text: `${r(e.value)}${a}`
      }))
    }]
  });
}
export { K as default };