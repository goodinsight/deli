import { r as m } from "./react-CjxcGQav.js";
function p(t, r) {
  const e = t == null || t === "",
    o = r == null || r === "";
  return e || o ? e === o ? 0 : e ? 1 : -1 : typeof t == "number" && typeof r == "number" ? t - r : typeof t == "boolean" && typeof r == "boolean" ? Number(t) - Number(r) : String(t).localeCompare(String(r), "ko", {
    numeric: !0
  });
}
function v(t, r, e = null) {
  const [o, c] = m.useState(e);
  return {
    rows: m.useMemo(() => {
      if (!o) return t;
      const s = r?.[o.by] ?? (l => l[o.by]),
        i = o.dir === "asc" ? 1 : -1;
      return [...t].sort((l, f) => {
        const n = s(l),
          u = s(f),
          y = n == null || n === "",
          d = u == null || u === "";
        return y || d ? p(n, u) : i * p(n, u);
      });
    }, [t, o]),
    tableSort: {
      sortBy: o?.by,
      sortDirection: o?.dir,
      onSort: (s, i) => c({
        by: s,
        dir: i
      }),
      onSortClear: () => c(null)
    }
  };
}
export { v as u };