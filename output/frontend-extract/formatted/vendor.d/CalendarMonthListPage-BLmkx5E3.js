import { r, T as ze, j as a } from "./react-CjxcGQav.js";
import { hF as ve, nY as Me, oV as He, oW as Ke, oX as Ce, co as ke, cp as Re, cq as je, oY as Ve, lE as Ye, cy as J, cr as de, ng as We, lt as ue, cs as Ae, ct as ee, cu as fe, oZ as Ue, F as Le, o_ as Xe, bH as Ge, lH as Ze, bv as Qe, u as Je, cz as et, fw as tt, ob as ot, oc as nt, B as Q, d7 as he, nf as st, cJ as at, fQ as ye, L as be, od as it, dD as rt, o$ as lt, fB as ct, d8 as pt, kM as De } from "../js.d/main-Cm9wS5wt.js";
import { u as dt } from "./calendarScope-DCpzw-Uh.js";
import { s as ut, g as ft, u as mt, m as xt, w as gt, a as Se, i as ht, t as P, d as yt } from "./useHolidayNames-CGgpEQbF.js";
import { u as bt, a as St, b as ne } from "./calendarKinds-BI5RuiF8.js";
import { C as Ct, r as Dt } from "./CalendarMemoPanel-D3bG3c90.js";
import { u as Tt } from "./useCalendarTasks-Cl5o2Ebi.js";
import { u as wt, C as Pt } from "./CalendarNav-uLg-DJVR.js";
import { o as Et } from "./taskDetailHost-C45bt_tL.js";
import { u as vt } from "./birthdayCalendar-CWu_jG3x.js";
import { a as Mt, b as kt, n as Rt, u as jt, m as Te, c as G, C as At, d as Lt, D as Ot, B as $t, e as Ft, o as Bt, O as It, M as qt, T as Nt } from "./MeetingCalendarChip--pNqwVZS.js";
import { u as _t } from "./trainingCalendar-BpMTSUwd.js";
import { L as zt } from "./bootstrapController-BMV_i07c.js";
import { u as Ht } from "./mobileSearchOverlay-DYWcMOOb.js";
import { a as Kt } from "./EdgeTabs-Ccbggjn6.js";
import { b as Vt, o as Yt } from "./meetingCalendar-_jcQJ1qd.js";
import { t as we } from "./taskboxProviderConfig-DZSmb5uq.js";
import "./stylis-DdLD6a3t.js";
import "./date_utils-CYURFdnX.js";
import "./FileUploadBox-crZW1mG0.js";
import "./AccountAvatar-DtrhoS_d.js";
import "./Person-DnoEHesw.js";
import "./resolveAssetPreviewSrc-CLlbOCzq.js";
import "./FileViewer-D5PyYcLh.js";
import "./RotateRight-DbtMfjGZ.js";
import "./tiny-invariant-CopsF_GD.js";
import "./Snackbar-DxIDGM8-.js";
import "./uploadGuard-BK1B6cyC.js";
import "./taskboxApi-BuYlRWHe.js";
import "./FeedProfileAvatar-B6gqXpYU.js";
import "./CallOutlined-B2W58-Kt.js";
import "./squircle-CQM8EvXm.js";
import "./aliasStore-DiN6Kp-5.js";
import "./chatRoomHost-ImRyH_Na.js";
import "./callStore-DH1_RYeP.js";
import "./videoMeetingApi-BCL1yHsp.js";
import "./EmployeeSelectDialog-Cdnxeoz9.js";
import "./utils-B6Q5_urv.js";
import "./employeeApi-CdGzOYcj.js";
import "./types-CVhETUvu.js";
import "./i18nLabels-BNTLL7cu.js";
import "./EventBusyOutlined-DqcCaRMs.js";
import "./TrainingEditDialog-CdnpriOe.js";
import "./useFormModified-cVB1R-yN.js";
import "./trainingApi-DT4unjOR.js";
import "./training-Bx0zycZu.js";
import "./CategoryOutlined-DcAqxAdD.js";
import "./EventRepeatOutlined-BzT6rPrF.js";
import "./Title-WCY0exuZ.js";
import "./DeleteOutlineOutlined-5H75k_7z.js";
import "./InlineErrorAlert-D9ICJPt7.js";
import "./PropertyFields-TuJTG5XK.js";
import "./propertySections-Bwsl7OH-.js";
import "./profileEcho-q2FaD_03.js";
import "./teamMembers-0yRsmqL6.js";
import "./pendingRecordings-DpKJ8Y2R.js";
import "./meetingsApi-CCkjq69B.js";
import "./orgTree-Dh5HFjBo.js";
import "./mxApi-R6g9QtQq.js";
import "./profileApi-Btafs-pM.js";
import "./MobileCardListLayout-D5_p2Xer.js";
import "./employeeAvatars-DaG0jIhW.js";
import "./useFileViewer-B-2ewnr3.js";
import "./documentViewerStore-BlSjH3BG.js";
import "./EmojiPanel-DTZZq0Nb.js";
const Wt = {
    entering: {
      transform: "none"
    },
    entered: {
      transform: "none"
    }
  },
  Ut = r.forwardRef(function (o, p) {
    const f = ve(),
      C = {
        enter: f.transitions.duration.enteringScreen,
        exit: f.transitions.duration.leavingScreen
      },
      {
        addEndListener: E,
        appear: _ = !0,
        children: A,
        easing: y,
        in: F,
        onEnter: z,
        onEntered: L,
        onEntering: H,
        onExit: v,
        onExited: K,
        onExiting: x,
        style: M,
        timeout: d = C,
        TransitionComponent: O = ze,
        ...D
      } = o,
      S = r.useRef(null),
      k = Me(S, He(A), p),
      b = l => u => {
        if (l) {
          const g = S.current;
          u === void 0 ? l(g) : l(g, u);
        }
      },
      B = b(H),
      $ = b((l, u) => {
        Ke(l);
        const g = Ce({
          style: M,
          timeout: d,
          easing: y
        }, {
          mode: "enter"
        });
        l.style.webkitTransition = f.transitions.create("transform", g), l.style.transition = f.transitions.create("transform", g), z && z(l, u);
      }),
      V = b(L),
      I = b(x),
      T = b(l => {
        const u = Ce({
          style: M,
          timeout: d,
          easing: y
        }, {
          mode: "exit"
        });
        l.style.webkitTransition = f.transitions.create("transform", u), l.style.transition = f.transitions.create("transform", u), v && v(l);
      }),
      w = b(K),
      m = l => {
        E && E(S.current, l);
      };
    return a.jsx(O, {
      appear: _,
      in: F,
      nodeRef: S,
      onEnter: $,
      onEntered: V,
      onEntering: B,
      onExit: T,
      onExited: w,
      onExiting: I,
      addEndListener: m,
      timeout: d,
      ...D,
      children: (l, {
        ownerState: u,
        ...g
      }) => r.cloneElement(A, {
        style: {
          transform: "scale(0)",
          visibility: l === "exited" && !F ? "hidden" : void 0,
          ...Wt[l],
          ...M,
          ...A.props.style
        },
        ref: k,
        ...g
      })
    });
  });
function Xt(e) {
  return ke("MuiSpeedDial", e);
}
const le = Re("MuiSpeedDial", ["root", "fab", "directionUp", "directionDown", "directionLeft", "directionRight", "actions", "actionsClosed"]),
  Gt = e => {
    const {
        classes: o,
        open: p,
        direction: f
      } = e,
      C = {
        root: ["root", `direction${ue(f)}`],
        fab: ["fab"],
        actions: ["actions", !p && "actionsClosed"]
      };
    return Ae(C, Xt, o);
  };
function se(e) {
  if (e === "up" || e === "down") return "vertical";
  if (e === "right" || e === "left") return "horizontal";
}
const W = 32,
  ce = 16,
  Zt = ee("div", {
    name: "MuiSpeedDial",
    slot: "Root",
    overridesResolver: (e, o) => {
      const {
        ownerState: p
      } = e;
      return [o.root, o[`direction${ue(p.direction)}`]];
    }
  })(fe(({
    theme: e
  }) => ({
    zIndex: (e.vars || e).zIndex.speedDial,
    display: "flex",
    alignItems: "center",
    pointerEvents: "none",
    variants: [{
      props: {
        direction: "up"
      },
      style: {
        flexDirection: "column-reverse",
        [`& .${le.actions}`]: {
          flexDirection: "column-reverse",
          marginBottom: -W,
          paddingBottom: ce + W
        }
      }
    }, {
      props: {
        direction: "down"
      },
      style: {
        flexDirection: "column",
        [`& .${le.actions}`]: {
          flexDirection: "column",
          marginTop: -W,
          paddingTop: ce + W
        }
      }
    }, {
      props: {
        direction: "left"
      },
      style: {
        flexDirection: "row-reverse",
        [`& .${le.actions}`]: {
          flexDirection: "row-reverse",
          marginRight: -W,
          paddingRight: ce + W
        }
      }
    }, {
      props: {
        direction: "right"
      },
      style: {
        flexDirection: "row",
        [`& .${le.actions}`]: {
          flexDirection: "row",
          marginLeft: -W,
          paddingLeft: ce + W
        }
      }
    }]
  }))),
  Qt = ee(Le, {
    name: "MuiSpeedDial",
    slot: "Fab"
  })({
    pointerEvents: "auto"
  }),
  Jt = ee("div", {
    name: "MuiSpeedDial",
    slot: "Actions",
    overridesResolver: (e, o) => {
      const {
        ownerState: p
      } = e;
      return [o.actions, !p.open && o.actionsClosed];
    }
  })({
    display: "flex",
    pointerEvents: "auto",
    variants: [{
      props: ({
        ownerState: e
      }) => !e.open,
      style: {
        transition: "top 0s linear 0.2s",
        pointerEvents: "none"
      }
    }]
  }),
  eo = r.forwardRef(function (o, p) {
    const f = je({
        props: o,
        name: "MuiSpeedDial"
      }),
      C = ve(),
      E = {
        enter: C.transitions.duration.enteringScreen,
        exit: C.transitions.duration.leavingScreen
      },
      {
        ariaLabel: _,
        FabProps: {
          ref: A,
          ...y
        } = {},
        children: F,
        className: z,
        direction: L = "up",
        hidden: H = !1,
        icon: v,
        onBlur: K,
        onClose: x,
        onFocus: M,
        onKeyDown: d,
        onMouseEnter: O,
        onMouseLeave: D,
        onOpen: S,
        open: k,
        openIcon: b,
        slots: B = {},
        slotProps: $ = {},
        TransitionComponent: V,
        TransitionProps: I,
        transitionDuration: T = E,
        ...w
      } = f,
      [m, l] = Ve({
        controlled: k,
        default: !1,
        name: "SpeedDial",
        state: "open"
      }),
      u = {
        ...f,
        open: m,
        direction: L
      },
      g = Gt(u),
      R = Ye(),
      q = r.useRef(0),
      j = r.useRef(),
      N = r.useRef([]);
    N.current = [N.current[0]];
    const me = r.useCallback(s => {
        N.current[0] = s;
      }, []),
      te = Me(A, me),
      U = (s, c, Y) => X => {
        N.current[s + 1] = X, c && c(X), Y && Y(X);
      },
      xe = s => {
        d && d(s);
        const c = s.key.replace("Arrow", "").toLowerCase(),
          {
            current: Y = c
          } = j;
        if (s.key === "Escape") {
          l(!1), N.current[0].focus(), x && x(s, "escapeKeyDown");
          return;
        }
        if (se(c) === se(Y) && se(c) !== void 0) {
          s.preventDefault();
          const X = c === Y ? 1 : -1,
            re = Ue(q.current + X, 0, N.current.length - 1);
          N.current[re].focus(), q.current = re, j.current = Y;
        }
      };
    r.useEffect(() => {
      m || (q.current = 0, j.current = void 0);
    }, [m]);
    const ae = s => {
        s.type === "mouseleave" && D && D(s), s.type === "blur" && K && K(s), R.clear(), s.type === "blur" ? R.start(0, () => {
          l(!1), x && x(s, "blur");
        }) : (l(!1), x && x(s, "mouseLeave"));
      },
      ge = s => {
        y.onClick && y.onClick(s), R.clear(), m ? (l(!1), x && x(s, "toggle")) : (l(!0), S && S(s, "toggle"));
      },
      ie = s => {
        s.type === "mouseenter" && O && O(s), s.type === "focus" && M && M(s), R.clear(), m || R.start(0, () => {
          l(!0), S && S(s, {
            focus: "focus",
            mouseenter: "mouseEnter"
          }[s.type]);
        });
      },
      oe = _.replace(/^[^a-z]+|[^\w:.-]+/gi, ""),
      n = r.Children.toArray(F).filter(s => r.isValidElement(s)),
      i = n.map((s, c) => {
        const {
            FabProps: {
              ref: Y
            } = {},
            slotProps: X = {},
            tooltipPlacement: re
          } = s.props,
          {
            fab: {
              ref: Ie,
              ...qe
            } = {},
            ...Ne
          } = X,
          _e = re || (se(L) === "vertical" ? "left" : "top");
        return r.cloneElement(s, {
          slotProps: {
            fab: {
              ...qe,
              ref: U(c, Y, Ie)
            },
            ...Ne
          },
          delay: 30 * (m ? c : n.length - c),
          open: m,
          tooltipPlacement: _e,
          id: `${oe}-action-${c}`
        });
      }),
      h = {
        transition: V,
        ...B
      },
      t = {
        transition: I,
        ...$
      },
      Z = {
        slots: h,
        slotProps: t
      },
      [Oe, $e] = J("root", {
        elementType: Zt,
        externalForwardedProps: {
          ...Z,
          ...w
        },
        ownerState: u,
        ref: p,
        className: de(g.root, z),
        additionalProps: {
          role: "presentation"
        },
        getSlotProps: s => ({
          ...s,
          onKeyDown: c => {
            s.onKeyDown?.(c), xe(c);
          },
          onBlur: c => {
            s.onBlur?.(c), ae(c);
          },
          onFocus: c => {
            s.onFocus?.(c), ie(c);
          },
          onMouseEnter: c => {
            s.onMouseEnter?.(c), ie(c);
          },
          onMouseLeave: c => {
            s.onMouseLeave?.(c), ae(c);
          }
        })
      }),
      [Fe, Be] = J("transition", {
        elementType: Ut,
        externalForwardedProps: Z,
        ownerState: u
      });
    return a.jsxs(Oe, {
      ...$e,
      children: [a.jsx(Fe, {
        in: !H,
        timeout: T,
        unmountOnExit: !0,
        ...Be,
        children: a.jsx(Qt, {
          color: "primary",
          "aria-label": _,
          "aria-haspopup": "true",
          "aria-expanded": m,
          "aria-controls": `${oe}-actions`,
          ...y,
          onClick: ge,
          className: de(g.fab, y.className),
          ref: te,
          ownerState: u,
          children: r.isValidElement(v) && We(v, ["SpeedDialIcon"]) ? r.cloneElement(v, {
            open: m
          }) : v
        })
      }), a.jsx(Jt, {
        id: `${oe}-actions`,
        role: "menu",
        "aria-orientation": se(L),
        className: de(g.actions, !m && g.actionsClosed),
        ownerState: u,
        children: i
      })]
    });
  });
function to(e) {
  return ke("MuiSpeedDialAction", e);
}
const pe = Re("MuiSpeedDialAction", ["fab", "fabClosed", "staticTooltip", "staticTooltipClosed", "staticTooltipLabel", "tooltipPlacementLeft", "tooltipPlacementRight"]),
  oo = e => {
    const {
        open: o,
        tooltipPlacement: p,
        classes: f
      } = e,
      C = {
        fab: ["fab", !o && "fabClosed"],
        staticTooltip: ["staticTooltip", `tooltipPlacement${ue(p)}`, !o && "staticTooltipClosed"],
        staticTooltipLabel: ["staticTooltipLabel"]
      };
    return Ae(C, to, f);
  },
  no = ee(Le, {
    name: "MuiSpeedDialAction",
    slot: "Fab",
    skipVariantsResolver: !1,
    overridesResolver: (e, o) => {
      const {
        ownerState: p
      } = e;
      return [o.fab, !p.open && o.fabClosed];
    }
  })(fe(({
    theme: e
  }) => ({
    margin: 8,
    color: (e.vars || e).palette.text.secondary,
    backgroundColor: (e.vars || e).palette.background.paper,
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.SpeedDialAction.fabHoverBg : Ze(e.palette.background.paper, .15)
    },
    transition: `${e.transitions.create("transform", {
      duration: e.transitions.duration.shorter
    })}, opacity 0.8s`,
    opacity: 1,
    variants: [{
      props: ({
        ownerState: o
      }) => !o.open,
      style: {
        opacity: 0,
        transform: "scale(0)"
      }
    }]
  }))),
  so = ee("span", {
    name: "MuiSpeedDialAction",
    slot: "StaticTooltip",
    overridesResolver: (e, o) => {
      const {
        ownerState: p
      } = e;
      return [o.staticTooltip, !p.open && o.staticTooltipClosed, o[`tooltipPlacement${ue(p.tooltipPlacement)}`]];
    }
  })(fe(({
    theme: e
  }) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    [`& .${pe.staticTooltipLabel}`]: {
      transition: e.transitions.create(["transform", "opacity"], {
        duration: e.transitions.duration.shorter
      }),
      opacity: 1
    },
    variants: [{
      props: ({
        ownerState: o
      }) => !o.open,
      style: {
        [`& .${pe.staticTooltipLabel}`]: {
          opacity: 0,
          transform: "scale(0.5)"
        }
      }
    }, {
      props: {
        tooltipPlacement: "left"
      },
      style: {
        [`& .${pe.staticTooltipLabel}`]: {
          transformOrigin: "100% 50%",
          right: "100%",
          marginRight: 8
        }
      }
    }, {
      props: {
        tooltipPlacement: "right"
      },
      style: {
        [`& .${pe.staticTooltipLabel}`]: {
          transformOrigin: "0% 50%",
          left: "100%",
          marginLeft: 8
        }
      }
    }]
  }))),
  ao = ee("span", {
    name: "MuiSpeedDialAction",
    slot: "StaticTooltipLabel"
  })(fe(({
    theme: e
  }) => ({
    position: "absolute",
    ...e.typography.body1,
    backgroundColor: (e.vars || e).palette.background.paper,
    borderRadius: (e.vars || e).shape.borderRadius,
    boxShadow: (e.vars || e).shadows[1],
    color: (e.vars || e).palette.text.secondary,
    padding: "4px 16px",
    wordBreak: "keep-all"
  }))),
  Pe = r.forwardRef(function (o, p) {
    const f = je({
        props: o,
        name: "MuiSpeedDialAction"
      }),
      {
        className: C,
        delay: E = 0,
        FabProps: _ = {},
        icon: A,
        id: y,
        open: F,
        TooltipClasses: z,
        tooltipOpen: L = !1,
        tooltipPlacement: H = "left",
        tooltipTitle: v,
        slots: K = {},
        slotProps: x = {},
        ...M
      } = f,
      d = {
        ...f,
        tooltipPlacement: H
      },
      O = oo(d),
      D = {
        slots: K,
        slotProps: {
          fab: _,
          ...x,
          tooltip: Xe(typeof x.tooltip == "function" ? x.tooltip(d) : x.tooltip, {
            title: v,
            open: L,
            placement: H,
            classes: z
          })
        }
      },
      [S, k] = r.useState(D.slotProps.tooltip?.open),
      b = () => {
        k(!1);
      },
      B = () => {
        k(!0);
      },
      $ = {
        transitionDelay: `${E}ms`
      },
      [V, I] = J("fab", {
        elementType: no,
        externalForwardedProps: D,
        ownerState: d,
        shouldForwardComponentProp: !0,
        className: de(O.fab, C),
        additionalProps: {
          style: $,
          tabIndex: -1,
          role: "menuitem",
          size: "small"
        }
      }),
      [T, w] = J("tooltip", {
        elementType: Ge,
        externalForwardedProps: D,
        shouldForwardComponentProp: !0,
        ref: p,
        additionalProps: {
          id: y
        },
        ownerState: d,
        getSlotProps: q => ({
          ...q,
          onClose: j => {
            q.onClose?.(j), b();
          },
          onOpen: j => {
            q.onOpen?.(j), B();
          }
        })
      }),
      [m, l] = J("staticTooltip", {
        elementType: so,
        externalForwardedProps: D,
        ownerState: d,
        ref: p,
        className: O.staticTooltip,
        additionalProps: {
          id: y
        }
      }),
      [u, g] = J("staticTooltipLabel", {
        elementType: ao,
        externalForwardedProps: D,
        ownerState: d,
        className: O.staticTooltipLabel,
        additionalProps: {
          style: $,
          id: `${y}-label`
        }
      }),
      R = a.jsx(V, {
        ...I,
        children: A
      });
    return w.open ? a.jsxs(m, {
      ...l,
      ...M,
      children: [a.jsx(u, {
        ...g,
        children: w.title
      }), r.cloneElement(R, {
        "aria-labelledby": `${y}-label`
      })]
    }) : (!F && S && k(!1), a.jsx(T, {
      ...w,
      title: w.title,
      open: F && S,
      placement: w.placement,
      classes: w.classes,
      ...M,
      children: R
    }));
  }),
  io = 56,
  Ee = {
    "& .MuiSpeedDialAction-staticTooltipLabel": {
      whiteSpace: "nowrap",
      fontSize: "1rem",
      color: "text.primary"
    }
  };
function ro(e) {
  for (let o = e?.parentElement ?? null; o; o = o.parentElement) {
    const {
      overflowY: p
    } = window.getComputedStyle(o);
    if (p === "auto" || p === "scroll") return o;
  }
  return null;
}
function Cn() {
  const e = Qe(),
    o = bt(),
    p = r.useMemo(() => ut(new Date()), []),
    f = r.useMemo(() => ft(o), [o]),
    C = mt(r.useMemo(() => [o.getFullYear()], [o])),
    E = `${o.getFullYear()}-${o.getMonth()}`,
    _ = Je().useValue("account"),
    A = Number(_?.seq ?? 0) || 0,
    {
      tasks: y,
      statusOptions: F,
      loaded: z
    } = Tt(A),
    L = wt(),
    H = _t(),
    v = vt(),
    K = Mt(r.useMemo(() => [o.getFullYear()], [o])),
    x = zt(),
    M = Vt(et()?.seq ?? 0),
    d = St(),
    O = kt(d.office),
    D = dt(),
    {
      current: S
    } = tt(),
    k = S ? 0 : D,
    b = Ht(),
    B = !!b.useValue("open"),
    [$, V] = r.useState("");
  r.useEffect(() => (b.setValue("active", !0), () => {
    b.setValue("active", !1), b.setValue("open", !1);
  }), [b]), r.useEffect(() => {
    B || V("");
  }, [B]);
  const I = Rt($);
  jt($);
  const T = n => Te(I, n),
    w = r.useMemo(() => {
      const n = new Map();
      for (const i of y) {
        if (L && ot(i) || (i.is_event ? !d.event : !d.task) || k > 0 && Number(i.workspace_seq ?? 0) !== k || !Te(I, G.task(i, we(i)))) continue;
        const h = String(i.due_date ?? "").slice(0, 10);
        if (!h) continue;
        const t = n.get(h);
        t ? t.push(i) : n.set(h, [i]);
      }
      for (const i of n.values()) i.sort(nt);
      return n;
    }, [y, L, k, d, I]),
    m = r.useRef(null),
    l = r.useRef(null),
    [u, g] = r.useState({
      count: 0,
      smooth: !1
    });
  r.useEffect(() => {
    if (u.count === 0) return;
    const n = window.requestAnimationFrame(() => {
      m.current?.scrollIntoView({
        block: "center",
        behavior: u.smooth ? "smooth" : "auto"
      });
    });
    return () => window.cancelAnimationFrame(n);
  }, [u, z]), r.useEffect(() => {
    ne(new Date()), g({
      count: 1,
      smooth: !1
    });
  }, []);
  const R = r.useRef(E);
  r.useEffect(() => {
    if (R.current === E) return;
    R.current = E;
    const n = ro(l.current);
    n && (n.scrollTop = 0), m.current?.scrollIntoView({
      block: "center"
    });
  }, [E]);
  const q = () => {
      ne(new Date()), g(n => ({
        count: n.count + 1,
        smooth: !0
      }));
    },
    j = r.useRef(null),
    N = n => {
      const i = n.touches[0];
      j.current = i ? {
        x: i.clientX,
        y: i.clientY
      } : null;
    },
    me = n => {
      const i = j.current;
      j.current = null;
      const h = n.changedTouches[0];
      if (!i || !h) return;
      const t = h.clientX - i.x,
        Z = h.clientY - i.y;
      Math.abs(t) < io || Math.abs(Z) > Math.abs(t) * .67 || ne(Se(o, t < 0 ? 1 : -1));
    },
    [te, U] = r.useState(!1),
    xe = () => {
      U(!1);
      const i = o.getFullYear() === p.getFullYear() && o.getMonth() === p.getMonth() ? p : new Date(o.getFullYear(), o.getMonth(), 1);
      De({
        event: !0,
        dueDate: P(i)
      });
    },
    ae = (n, i) => {
      const h = i.target,
        t = i.currentTarget.querySelector("[data-day-events]");
      t && t !== h && t.contains(h) || De({
        event: !0,
        dueDate: P(n)
      });
    },
    ge = () => {
      U(!1), Dt();
    },
    ie = xt(o),
    oe = gt();
  return a.jsx(Q, {
    sx: {
      mx: `-${he}px`,
      my: `-${he}px`,
      height: `calc(100% + ${he * 2}px)`,
      minHeight: 0
    },
    children: a.jsxs(st, {
      elevation: 0,
      paperSx: {
        borderRadius: 0,
        boxShadow: "none"
      },
      children: [a.jsx(Kt, {
        open: B,
        value: $,
        onChange: V,
        placeholder: e("calendar.searchPlaceholder")
      }), a.jsx(at, {
        elevation: 0,
        sx: {
          mb: 1,
          border: `1px solid ${ye}`,
          borderRadius: 1,
          overflow: "hidden"
        },
        children: a.jsx(Ct, {
          collapsed: !1
        })
      }), a.jsxs(Q, {
        sx: {
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          minHeight: 0
        },
        children: [a.jsx(Pt, {
          title: ie,
          onPrev: () => ne(Se(o, -1)),
          onNext: () => ne(Se(o, 1)),
          onToday: q
        }), a.jsx(Q, {
          ref: l,
          onTouchStart: N,
          onTouchEnd: me,
          sx: {
            borderTop: `1px solid ${ye}`,
            minWidth: 0,
            overflowX: "hidden"
          },
          children: f.map(n => {
            const i = ht(n, p),
              h = C.get(P(n));
            return a.jsxs(Q, {
              ref: i ? m : void 0,
              onClick: t => ae(n, t),
              sx: {
                cursor: "pointer",
                "&:active": {
                  bgcolor: "#f8f8f7"
                },
                display: "flex",
                gap: 1.5,
                px: 1.5,
                py: 1.25,
                minWidth: 0,
                borderBottom: `1px solid ${ye}`,
                bgcolor: i ? "#eff6ff" : "#fff",
                ...(i ? {
                  boxShadow: "inset 3px 0 0 #2f80ed"
                } : {})
              },
              children: [a.jsxs(Q, {
                sx: {
                  width: 44,
                  flexShrink: 0,
                  textAlign: "center"
                },
                children: [a.jsx(be, {
                  sx: {
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: h ? "error.main" : yt(n.getDay()),
                    lineHeight: 1.4
                  },
                  children: oe[n.getDay()]
                }), a.jsx(be, {
                  sx: {
                    fontSize: "1.125rem",
                    fontWeight: i ? 700 : 500,
                    color: i ? "primary.main" : h ? "error.main" : "text.primary",
                    lineHeight: 1.3
                  },
                  children: n.getDate()
                })]
              }), a.jsxs(Q, {
                ...At,
                "data-day-events": !0,
                sx: {
                  flex: 1,
                  minWidth: 0,
                  minHeight: 44,
                  display: "flex",
                  flexDirection: "column",
                  gap: .375
                },
                children: [h && a.jsx(be, {
                  sx: {
                    fontSize: "0.8125rem",
                    color: "error.main",
                    pt: .25
                  },
                  children: h
                }), (d.tax ? K.get(P(n)) ?? [] : []).filter(t => T(G.tax(t))).map(t => a.jsx(Lt, {
                  entry: t,
                  day: P(n)
                }, `tax-${t.id}`)), (d.docExpiry ? x.get(P(n)) ?? [] : []).filter(t => T(G.doc(t))).map(t => a.jsx(Ot, {
                  entry: t
                }, `doc-${t.id}`)), (d.birthday ? v(P(n)) : []).filter(t => T(G.birthday(t))).map(t => a.jsx($t, {
                  entry: t
                }, `birthday-${t.employeeSeq}`)), (d.training ? H.get(P(n)) ?? [] : []).filter(t => T(G.training(t))).map(t => a.jsx(Ft, {
                  entry: t,
                  onOpen: () => Bt(t.trainingSeq)
                }, `training-${t.kind}-${t.trainingSeq}`)), (d.office ? O.get(P(n)) ?? [] : []).filter(t => T(G.office(t))).map(t => a.jsx(It, {
                  entry: t
                }, `office-${t.item.seq}`)), (d.meeting ? M.get(P(n)) ?? [] : []).filter(t => T(G.meeting(t))).map(t => a.jsx(qt, {
                  entry: t,
                  onOpen: () => Yt(t.seq)
                }, `meeting-${t.seq}`)), (w.get(P(n)) ?? []).map(t => a.jsx(it, {
                  titlePrefix: we(t),
                  task: t,
                  statusOptions: F,
                  wrapTitle: !0,
                  onOpenDetail: Z => Et(Z.seq),
                  isMine: t.manager_account_seq === A
                }, t.seq))]
              })]
            }, P(n));
          })
        }), a.jsx(Nt, {})]
      }), a.jsx(rt, {
        open: te,
        onClick: () => U(!1),
        sx: {
          zIndex: 39,
          bgcolor: "rgba(15, 23, 42, 0.25)"
        }
      }), a.jsxs(eo, {
        ariaLabel: e("calendar.addEventOrMemo"),
        icon: a.jsx(pt, {
          sx: {
            display: "block",
            transition: "transform 0.2s",
            transform: te ? "rotate(45deg)" : "none"
          }
        }),
        open: te,
        onOpen: (n, i) => {
          i === "toggle" && U(!0);
        },
        onClose: (n, i) => {
          (i === "toggle" || i === "escapeKeyDown") && U(!1);
        },
        sx: {
          position: "fixed",
          right: 24,
          bottom: "calc(24px + var(--taskbox-fab-lift, 0px))",
          zIndex: 40
        },
        children: [a.jsx(Pe, {
          icon: a.jsx(lt, {}),
          onClick: ge,
          slotProps: {
            tooltip: {
              title: e("calendar.memo"),
              open: !0
            }
          },
          sx: Ee
        }), a.jsx(Pe, {
          icon: a.jsx(ct, {}),
          onClick: xe,
          slotProps: {
            tooltip: {
              title: e("calendar.event"),
              open: !0
            }
          },
          sx: Ee
        })]
      })]
    })
  });
}
export { Cn as default };