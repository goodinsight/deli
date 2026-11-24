import { i as a, bT as i, fV as c, fW as u, fX as n, z as l, fY as w } from "../js.d/main-Cm9wS5wt.js";
const f = 1200;
function h(r = f) {
  const s = ["pointerdown", "pointerup", "mousedown", "mouseup", "touchstart", "touchend", "click"],
    o = t => {
      t.stopPropagation(), t.preventDefault();
    };
  for (const t of s) window.addEventListener(t, o, {
    capture: !0,
    passive: !1
  });
  window.setTimeout(() => {
    for (const t of s) window.removeEventListener(t, o, {
      capture: !0
    });
  }, r);
}
async function d(r, s) {
  const o = await r();
  if (!o.need_bio) return o;
  if (!a()) throw new Error(i("hr.myAttBioAppOnly"));
  const {
    challenge: t
  } = await c.challenge();
  try {
    const e = await u("login", t, s).finally(() => h());
    return await r({
      bio_id: e.bio_id,
      device_uuid: e.device_uuid,
      challenge: t,
      signature: e.signature ?? ""
    });
  } catch (e) {
    throw e instanceof n && e.needSetup ? ((await l({
      title: i("hr.myAttBioRegisterTitle"),
      message: i("hr.myAttBioRegisterMessage"),
      confirmText: i("hr.myAttBioRegister"),
      cancelText: i("hr.close")
    })) && (o.account_seq ?? 0) > 0 && w(o.account_seq ?? 0), new Error(i("hr.myAttBioRetry"))) : e instanceof n && e.cancelled ? new Error(i("hr.myAttBioCancelled")) : e;
  }
}
export { h as s, d as w };