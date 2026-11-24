import { r as s, j as o } from "./react-CjxcGQav.js";
import { s as m } from "./html-d5LenlcH.js";
import { B as i, o as n } from "../js.d/main-Cm9wS5wt.js";
import { b as u } from "./siteNoticeApi-BBEKF3sl.js";
function c({
  notice: t,
  imageMaxHeight: a
}) {
  const l = s.useMemo(() => t.kind === "editor" ? m(t.content) : "", [t.kind, t.content]);
  if (t.kind === "image") {
    const r = u(t.image_file);
    return r ? o.jsx(i, {
      component: "img",
      src: r,
      alt: t.title,
      onClick: t.link_url ? () => n(t.link_url) : void 0,
      sx: {
        display: "block",
        width: "100%",
        height: "auto",
        maxHeight: a,
        objectFit: "contain",
        cursor: t.link_url ? "pointer" : "default"
      }
    }) : null;
  }
  return o.jsx(i, {
    onClickCapture: r => {
      const e = r.target?.closest?.("a[href]");
      e && (r.preventDefault(), n(e.href));
    },
    sx: {
      fontSize: 16,
      lineHeight: 1.7,
      wordBreak: "break-word",
      "& img": {
        maxWidth: "100%",
        height: "auto"
      },
      "& p": {
        my: .75
      },
      "& a": {
        color: "primary.main",
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline"
        }
      },
      "& ul, & ol": {
        pl: 3
      }
    },
    dangerouslySetInnerHTML: {
      __html: l
    }
  });
}
export { c as S };