import { bM as a, bT as s, bv as h, D as m, fq as f, fr as x, B as c, da as g, dc as w, bI as $, go as v, fs as y } from "../js.d/main-Cm9wS5wt.js";
import { r as F } from "./resolveAssetPreviewSrc-CLlbOCzq.js";
import { r as j, j as i } from "./react-CjxcGQav.js";
const l = "/v1/newsletters";
function n(e, t) {
  if (!e || e.ok === !1 || e.data === void 0) throw new Error(e?.error || e?.message || t);
  return e.data;
}
const S = {
  list: async () => n(await a.http.get(l), s("newsletter.loadFailed")).items,
  get: async e => n(await a.http.get(`${l}/${e}`), s("newsletter.loadFailed")),
  templates: async () => n(await a.http.get(`${l}/templates`), s("newsletter.loadFailed")).items,
  template: async e => n(await a.http.get(`${l}/templates/${e}`), s("newsletter.loadFailed")),
  createTemplate: async e => n(await a.http.post(`${l}/templates`, e), s("newsletter.saveFailed")),
  updateTemplate: async (e, t) => n(await a.http.patch(`${l}/templates/${e}`, t), s("newsletter.saveFailed")),
  removeTemplate: async e => {
    n(await a.http.delete(`${l}/templates/${e}`, {}), s("newsletter.deleteFailed"));
  },
  importDefaultTemplates: async () => n(await a.http.post(`${l}/templates/import-defaults`, {}), s("newsletter.saveFailed")).added,
  create: async e => n(await a.http.post(`${l}/`, e), s("newsletter.saveFailed")),
  update: async (e, t) => n(await a.http.patch(`${l}/${e}`, t), s("newsletter.saveFailed")),
  remove: async e => {
    n(await a.http.delete(`${l}/${e}`, {}), s("newsletter.deleteFailed"));
  },
  preview: async e => n(await a.http.post(`${l}/preview`, e), s("newsletter.previewFailed")),
  audienceCount: async (e, t) => n(await a.http.post(`${l}/audience-count`, {
    audience: e,
    custom_emails: t
  }), s("newsletter.loadFailed")).count,
  test: async (e, t = "") => n(await a.http.post(`${l}/${e}/test`, {
    to: t
  }), s("newsletter.testFailed")).sent,
  send: async (e, t = "") => n(await a.http.post(`${l}/${e}/send`, {
    send_at: t
  }), s("newsletter.sendFailed")),
  cancel: async e => n(await a.http.post(`${l}/${e}/cancel`, {}), s("newsletter.sendFailed")),
  uploadImage: async e => {
    const t = await a.fileUpload("newsletter", e, {
        isPublic: !0
      }),
      o = String(t?.uuid ?? t?.data?.uuid ?? "").trim();
    if (t?.ok && o) return F(o, null);
    throw new Error(t?.message || s("newsletter.uploadFailed"));
  }
};
function W({
  preview: e,
  onClose: t
}) {
  const o = h(),
    r = m(),
    [d, u] = j.useState("wide");
  return i.jsxs(f, {
    open: !!e,
    onClose: t,
    maxWidth: "md",
    fullWidth: !0,
    fullScreen: r,
    children: [i.jsxs(x, {
      sx: {
        display: "flex",
        alignItems: "center",
        gap: 1,
        pr: 1
      },
      children: [i.jsx(c, {
        sx: {
          flex: 1,
          minWidth: 0,
          fontSize: 16,
          fontWeight: 600,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        },
        children: e?.subject
      }), r ? null : i.jsxs(g, {
        size: "small",
        exclusive: !0,
        value: d,
        onChange: (b, p) => p && u(p),
        children: [i.jsx(w, {
          value: "wide",
          children: o("newsletter.previewWide")
        }), i.jsx(w, {
          value: "phone",
          children: o("newsletter.previewPhone")
        })]
      }), i.jsx($, {
        "aria-label": o("newsletter.close"),
        onClick: t,
        children: i.jsx(v, {})
      })]
    }), i.jsx(y, {
      sx: {
        bgcolor: "#f4f4f7",
        display: "flex",
        justifyContent: "center",
        p: {
          xs: 0,
          sm: 2
        }
      },
      children: i.jsx(c, {
        component: "iframe",
        title: e?.subject ?? "",
        srcDoc: e?.html ?? "",
        sandbox: "",
        sx: {
          border: 0,
          width: d === "phone" && !r ? 390 : "100%",
          maxWidth: "100%",
          height: {
            xs: "100%",
            sm: "70vh"
          },
          bgcolor: "#f4f4f7"
        }
      })
    })]
  });
}
export { W as N, S as n };