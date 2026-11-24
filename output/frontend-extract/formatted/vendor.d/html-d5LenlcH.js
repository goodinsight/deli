import { d$ as t } from "../js.d/main-Cm9wS5wt.js";
const a = e => e ? t.sanitize(e, {
    USE_PROFILES: {
      html: !0
    }
  }) : "",
  l = e => e ? e.replace(/<(script|style)[\s\S]*?<\/\1>/gi, "").replace(/<br\s*\/?>/gi, `
`).replace(/<\/(p|div|li|h[1-6]|tr)>/gi, `
`).replace(/<[^>]+>/g, "").replace(/&nbsp;/gi, " ").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, '"').replace(/&#39;/gi, "'").replace(/&amp;/gi, "&").replace(/\n{3,}/g, `

`).trim() : "",
  p = e => {
    const r = String(e ?? "");
    return r.trim() ? r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r\n|\r|\n/g, "<br>") : "";
  };
export { l as h, p, a as s };