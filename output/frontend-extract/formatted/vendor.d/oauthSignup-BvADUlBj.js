const n = "taskham.oauthSignup";
let e = null;
function a(t) {
  e = {
    ...t,
    savedAt: Date.now()
  };
  try {
    window.sessionStorage.setItem(n, JSON.stringify(e));
  } catch {}
}
function r() {
  let t = e;
  if (!t) try {
    const s = window.sessionStorage.getItem(n);
    t = s ? JSON.parse(s) : null;
  } catch {
    t = null;
  }
  return !t?.ticket || Date.now() - Number(t.savedAt ?? 0) > 84e4 ? (o(), null) : t;
}
function o() {
  e = null;
  try {
    window.sessionStorage.removeItem(n);
  } catch {}
}
export { o as c, r, a as s };