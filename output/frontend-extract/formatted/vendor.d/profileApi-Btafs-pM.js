import { el as r, em as a, bT as o } from "../js.d/main-Cm9wS5wt.js";
function i(e) {
  return new Error(e || o("account.profileSaveFailed"));
}
const n = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
function c(e) {
  return typeof e == "string" && n.test(e.trim());
}
async function f(e) {
  const t = await r({
    endpoint: "/v1/account/profile",
    method: "PATCH",
    params: e
  });
  if (!t || !a(t)) throw i(t?.message);
  return t.data ?? {
    seq: Number(e.seq ?? 0)
  };
}
export { c as i, f as p };