import { r as f } from "./react-CjxcGQav.js";
let t = {};
const n = new Set();
function i(e) {
  t = e, n.forEach(r => r());
}
function u(e) {
  return n.add(e), () => n.delete(e);
}
function a(e, r, s) {
  if (!(e > 0)) return;
  const o = t[e];
  o && o.avatar === r && o.name === s || i({
    ...t,
    [e]: {
      avatar: r,
      name: s
    }
  });
}
function l() {
  return f.useSyncExternalStore(u, () => t);
}
export { a, l as u };