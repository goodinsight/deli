import { r as s } from "./react-CjxcGQav.js";
let t = null;
const r = new Set();
function u(e, o) {
  !Number.isInteger(e) || e <= 0 || (t = {
    seq: e,
    boardKey: o,
    id: (t?.id ?? 0) + 1
  }, r.forEach(n => n()));
}
const l = () => s.useSyncExternalStore(e => (r.add(e), () => r.delete(e)), () => t);
export { u as o, l as u };