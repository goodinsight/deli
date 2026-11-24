import { r as d } from "./react-CjxcGQav.js";
function l() {
  let t = null;
  const s = new Set(),
    o = new Set(),
    r = new Set(),
    a = () => s.forEach(e => e()),
    c = e => (s.add(e), () => {
      s.delete(e);
    }),
    n = () => t;
  return {
    usePayload: () => d.useSyncExternalStore(c, n, n),
    requestOpen: e => {
      t = e, a(), o.forEach(u => u());
    },
    requestClose: () => {
      r.forEach(e => e());
    },
    subscribeOpenRequest: e => (o.add(e), () => {
      o.delete(e);
    }),
    subscribeCloseRequest: e => (r.add(e), () => {
      r.delete(e);
    }),
    getPayload: n,
    clearPayload: () => {
      t !== null && (t = null, a());
    }
  };
}
const S = "global-svg-zoom-viewer",
  E = "global-file-viewer",
  f = l(),
  p = l();
export { E as F, S, p as f, f as s };