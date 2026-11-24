import { j as t } from "./react-CjxcGQav.js";
import { B as e, s, f as n } from "../js.d/main-Cm9wS5wt.js";
function l({
  article: o,
  showCategory: i = !0,
  sx: r
}) {
  return t.jsxs(e, {
    sx: [{
      position: "relative",
      maxWidth: "100%",
      overflow: "hidden",
      bgcolor: s[200]
    }, ...(Array.isArray(r) ? r : [r])],
    children: [t.jsx(e, {
      component: "img",
      src: o.imageUrl || `/news-images/${o.id}.jpg`,
      alt: o.title,
      loading: "lazy",
      sx: {
        height: "100%",
        width: "100%",
        objectFit: "cover"
      }
    }), i && t.jsx(e, {
      component: "span",
      sx: {
        position: "absolute",
        left: 8,
        top: 8,
        borderRadius: .5,
        bgcolor: "rgba(0, 0, 0, 0.45)",
        px: .75,
        py: .25,
        fontSize: {
          xs: "1rem",
          md: "0.875rem"
        },
        fontWeight: n.medium,
        color: "#fff",
        backdropFilter: "blur(4px)"
      },
      children: o.category
    })]
  });
}
export { l as A };