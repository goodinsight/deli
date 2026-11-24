import { bT as a } from "../js.d/main-Cm9wS5wt.js";
function o(r) {
  const e = Number(r) || 0;
  return e <= 0 ? "" : e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
function s(r) {
  return new Promise((e, n) => {
    const t = new FileReader();
    t.onload = () => e(String(t.result ?? "")), t.onerror = () => n(new Error(a("utils.fileReadFailedName", {
      name: r.name
    }))), t.readAsDataURL(r);
  });
}
export { o as f, s as r };