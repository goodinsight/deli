import { j as e, r as M, u as z } from "./react-CjxcGQav.js";
import { B as E, L as p, bv as y, hF as T, fk as B, cz as O, u as w, D as F, dC as N, bH as j, bI as S, s as k, dN as R, bO as A, bT as W } from "../js.d/main-Cm9wS5wt.js";
import { P as L } from "./PhoneOutlined-Bjc_e42S.js";
import { c as U } from "./aliasStore-DiN6Kp-5.js";
import { u as _, p as D, j as H, h as q } from "./callStore-DH1_RYeP.js";
function I(i, n = new Set()) {
  for (const o of i.children) o.kind === "person" ? n.add(o.id) : I(o, n);
  return n;
}
function P(i, n) {
  const o = [];
  for (const a of i) {
    if (a.kind === "person") {
      o.push(a);
      continue;
    }
    const l = P(a.children, n);
    (l.length > 0 || n) && o.push({
      ...a,
      children: l
    });
  }
  return o;
}
const v = {
  fontSize: 14,
  color: "text.secondary",
  flexShrink: 0
};
function Q({
  nodes: i,
  initialIds: n,
  onChange: o,
  groupPick: a = "members",
  resetKey: l,
  searchPlaceholder: b
}) {
  const h = y(),
    m = b ?? h("components.searchName"),
    x = T(),
    c = a === "self",
    {
      items: C,
      personIds: d
    } = M.useMemo(() => {
      const r = new Set(),
        s = t => t.kind === "person" ? (r.add(t.id), {
          id: t.id,
          label: t.name,
          renderLabel: e.jsxs(e.Fragment, {
            children: [e.jsx(p, {
              component: "span",
              sx: {
                fontSize: 15,
                minWidth: 0
              },
              noWrap: !0,
              children: t.name
            }), t.position && e.jsx(p, {
              component: "span",
              sx: v,
              children: t.position
            })]
          })
        }) : {
          id: t.id,
          label: t.name,
          renderLabel: e.jsxs(e.Fragment, {
            children: [e.jsx(p, {
              component: "span",
              sx: {
                fontSize: t.strong ? 16 : 15,
                fontWeight: t.strong ? 700 : 600,
                minWidth: 0
              },
              noWrap: !0,
              children: t.name
            }), e.jsx(p, {
              component: "span",
              sx: v,
              children: I(t).size
            })]
          }),
          children: t.children.map(s)
        };
      return {
        items: P(i, c).map(s),
        personIds: r
      };
    }, [i, c]);
  return e.jsx(B, {
    items: C,
    checkbox: !0,
    multiSelect: !0,
    checkMode: c ? "contain" : "cascade",
    toggleCheckOnLabelClick: "leaf",
    expandIconPosition: "end",
    defaultExpanded: !0,
    initialSelectedIds: n,
    onSelectionIdsChange: r => o(c ? r : r.filter(s => d.has(s))),
    showSearch: !0,
    searchSize: "medium",
    searchPlaceholder: m,
    showHover: !0,
    styles: {
      border: "none",
      borderRadius: "0",
      padding: "0",
      backgroundColor: "transparent",
      hoverColor: "#f8fafc",
      indentSize: 20,
      itemSpacing: "0",
      itemPadding: "0",
      itemMinHeight: "32px",
      checkboxPadding: "7px",
      checkboxSpacing: "8px",
      checkboxColor: x.palette.primary.main,
      checkboxBorderColor: x.palette.text.secondary,
      searchSpacing: "8px"
    }
  }, l);
}
function Z({
  children: i
}) {
  return e.jsx(E, {
    sx: {
      py: 3
    },
    children: e.jsx(p, {
      sx: {
        textAlign: "center",
        color: "text.secondary",
        fontSize: 15
      },
      children: i
    })
  });
}
const G = "video_meeting";
function ee({
  roomSeq: i
}) {
  const n = y(),
    o = O(),
    a = w().useValue("account"),
    l = Number(a?.seq ?? 0) || 0,
    {
      rooms: b
    } = U(l, o?.seq ?? 0),
    h = b.find(g => g.seq === i),
    {
      session: m,
      openByRoom: x
    } = _(),
    c = F(),
    C = z(),
    [d, r] = M.useState(!1);
  if (!o || !N(o, G) || !h || h.peers.length === 0) return null;
  const s = x[i],
    f = !!(m && s && m.code === s.code),
    t = async g => {
      if (!(d || f)) {
        D(), r(!0);
        try {
          const u = c ? "full" : "pip",
            V = s ? await H(s.code, g, u) : await q(i, g, u);
          c && C(`/meet/${V.code}`);
        } catch (u) {
          A(u instanceof Error ? u.message : W("videoMeeting.startCallFailed"));
        } finally {
          r(!1);
        }
      }
    };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(j, {
      title: n(s ? "videoMeeting.joinCallVoice" : "videoMeeting.callVoice"),
      children: e.jsx(S, {
        "aria-label": n(s ? "videoMeeting.joinCallVoice" : "videoMeeting.callVoice"),
        disabled: d || f,
        onClick: () => {
          t(!1);
        },
        sx: {
          color: k[600]
        },
        children: e.jsx(L, {
          sx: {
            fontSize: 24
          }
        })
      })
    }), e.jsx(j, {
      title: n(s ? "videoMeeting.joinCallVideo" : "videoMeeting.callVideo"),
      children: e.jsx(S, {
        "aria-label": n(s ? "videoMeeting.joinCallVideo" : "videoMeeting.callVideo"),
        disabled: d || f,
        onClick: () => {
          t(!0);
        },
        sx: {
          color: k[600]
        },
        children: e.jsx(R, {
          sx: {
            fontSize: 26
          }
        })
      })
    })]
  });
}
export { ee as C, Z as P, G as V, Q as a };