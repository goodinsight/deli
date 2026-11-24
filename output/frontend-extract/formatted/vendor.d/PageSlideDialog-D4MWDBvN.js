import { i as u, r as t, j as c } from "./react-CjxcGQav.js";
import { D as d, bv as b, dQ as g } from "../js.d/main-Cm9wS5wt.js";
import p from "./LoginPage-xO8sELhl.js";
import h from "./SignupPage-d9HBBRMK.js";
function j({
  kind: e,
  onClose: a
}) {
  const n = d(),
    o = b(),
    {
      pathname: i
    } = u(),
    [r, s] = t.useState(null);
  t.useEffect(() => {
    s(null);
  }, [e]);
  const l = t.useRef(i);
  t.useEffect(() => {
    e !== null && i !== l.current && a(), l.current = i;
  }, [i]);
  const f = (r ?? e) === "signup";
  return c.jsx(g, {
    fontScaleKey: "AuthPageDialog",
    open: e !== null,
    onClose: a,
    title: o(f ? "auth.signup" : "auth.login"),
    width: "480px",
    fullScreen: n,
    mobilePresentation: n ? "slide" : "dialog",
    backdropClick: !1,
    titleIcons: {
      delete: {
        visible: !1
      },
      print: {
        visible: !1
      },
      share: {
        visible: !1
      }
    },
    tabs: {
      visible: !1
    },
    scrollPastLastSection: !1,
    actions: {
      visible: !1
    },
    sections: [{
      id: "auth",
      showTitle: !1,
      children: f ? c.jsx(h, {
        embedded: !0,
        onSwitchToLogin: () => s("login")
      }) : c.jsx(p, {
        embedded: !0,
        onSwitchToSignup: () => s("signup")
      })
    }]
  });
}
function w({
  open: e,
  onClose: a,
  title: n,
  children: o,
  maxWidth: i
}) {
  const r = d(),
    {
      pathname: s
    } = u(),
    l = t.useRef(s);
  return t.useEffect(() => {
    e && (l.current = s);
  }, [e]), t.useEffect(() => {
    e && s !== l.current && a(), l.current = s;
  }, [s]), c.jsx(g, {
    fontScaleKey: "PageSlideDialog",
    open: e,
    onClose: a,
    title: n,
    ...(i ? {
      maxWidth: i
    } : {
      width: "720px"
    }),
    fullScreen: r,
    mobilePresentation: r ? "slide" : "dialog",
    titleIcons: {
      delete: {
        visible: !1
      },
      print: {
        visible: !1
      },
      share: {
        visible: !1
      }
    },
    tabs: {
      visible: !1
    },
    actions: {
      visible: !1
    },
    sections: [{
      id: "page",
      showTitle: !1,
      children: o
    }]
  });
}
export { j as A, w as P };