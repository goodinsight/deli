import { r as a } from "./react-CjxcGQav.js";
let r = 0;
const t = new Set();
function c(e) {
  const n = Number.isInteger(e) && e > 0 ? e : 0;
  n !== r && (r = n, t.forEach(o => o()));
}
function u() {
  return a.useSyncExternalStore(e => (t.add(e), () => t.delete(e)), () => r, () => 0);
}
export { c as s, u };