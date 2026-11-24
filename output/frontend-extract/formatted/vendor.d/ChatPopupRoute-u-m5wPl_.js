import { j as t, N as i } from "./react-CjxcGQav.js";
import { A as s, C as p } from "./AppChatbotProvider-cOw4USGY.js";
import { u as m } from "../js.d/main-Cm9wS5wt.js";
import "./ThumbUp-CuLuUDoD.js";
import "./ThumbDownOutlined-Kgyo8Yr6.js";
import "./Send-yl2RzZF4.js";
import "./index-DC9lEI6V.js";
import "./Snackbar-DxIDGM8-.js";
import "./chatPrefs-Be7HCbgk.js";
import "./profileApi-Btafs-pM.js";
import "./date_utils-CYURFdnX.js";
import "./supportCenterApi-KQJIqJUd.js";
import "./useAppBasePath-BVB_xO8H.js";
import "./documentViewerStore-BlSjH3BG.js";
import "./TaskhamLogoIcon-D-7jf3TJ.js";
import "./stylis-DdLD6a3t.js";
function P() {
  const o = m(),
    r = o.useValue("sessionChecked") ?? !1,
    e = o.useValue("logined") ?? !1;
  return r ? e ? t.jsx(s, {
    children: t.jsx(p, {})
  }) : t.jsx(i, {
    to: "/login",
    replace: !0
  }) : null;
}
export { P as default };