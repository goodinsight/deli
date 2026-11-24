import { r as a } from "./react-CjxcGQav.js";
let r = null;
const t = new Set();
function c(e) {
  r !== e && (r = e, t.forEach(n => n()));
}
function o() {
  return a.useSyncExternalStore(e => (t.add(e), () => t.delete(e)), () => r, () => r);
}
export { c as p, o as u };