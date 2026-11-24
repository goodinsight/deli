import { r as F, j as t } from "./react-CjxcGQav.js";
import { e as W, ak as B, bO as u, bT as l, bx as D, ko as g, kp as P, bv as _, D as V, cb as I, bQ as f, cI as O, K as v, B as b, ca as R, y as M } from "../js.d/main-Cm9wS5wt.js";
import { d as z, U as q, V as m, W as L, X as A, Y as K, Z as G, F as N } from "./BoardPostDetail-CniIF2a7.js";
import { Y as T, Z as E } from "./taskboxApi-BuYlRWHe.js";
import "./stylis-DdLD6a3t.js";
import "./biometricController-CswvQnMD.js";
import "./attendanceBio-C-9dHF9O.js";
import "./ThumbUp-CuLuUDoD.js";
import "./PictureAsPdfOutlined-ChIt6cmZ.js";
import "./FolderZipOutlined-BdWYvuz4.js";
import "./InsertDriveFileOutlined-DcD-Yh-v.js";
import "./FavoriteBorder-BkFztsJe.js";
import "./formatFileSize-Cwk2MLba.js";
import "./taskboxProviderConfig-DZSmb5uq.js";
import "./MobileCardListLayout-D5_p2Xer.js";
import "./mobileSearchOverlay-DYWcMOOb.js";
import "./bootstrapController-BMV_i07c.js";
import "./profileEcho-q2FaD_03.js";
import "./teamMembers-0yRsmqL6.js";
import "./pendingRecordings-DpKJ8Y2R.js";
import "./meetingsApi-CCkjq69B.js";
import "./orgTree-Dh5HFjBo.js";
import "./mxApi-R6g9QtQq.js";
import "./aliasStore-DiN6Kp-5.js";
import "./profileApi-Btafs-pM.js";
import "./employeeAvatars-DaG0jIhW.js";
import "./resolveAssetPreviewSrc-CLlbOCzq.js";
import "./FeedProfileAvatar-B6gqXpYU.js";
import "./CallOutlined-B2W58-Kt.js";
import "./AccountAvatar-DtrhoS_d.js";
import "./Person-DnoEHesw.js";
import "./squircle-CQM8EvXm.js";
import "./chatRoomHost-ImRyH_Na.js";
import "./callStore-DH1_RYeP.js";
import "./videoMeetingApi-BCL1yHsp.js";
import "./EmployeeSelectDialog-Cdnxeoz9.js";
import "./utils-B6Q5_urv.js";
import "./useFileViewer-B-2ewnr3.js";
import "./documentViewerStore-BlSjH3BG.js";
import "./EmojiPanel-DTZZq0Nb.js";
import "./html-d5LenlcH.js";
import "./date_utils-CYURFdnX.js";
const h = (e, n) => e instanceof Error && e.message ? e.message : n;
function X() {
  const e = z(),
    n = F.useRef(!1),
    r = {
      unlock: W({
        modalId: "taskbox-post-unlock",
        onClose: () => {
          const s = m();
          i.setFormValues({
            password: ""
          }), s?.kind === "unlock" && (n.current || s.onCancel(), q(s.id));
        }
      }),
      password: W({
        modalId: "taskbox-post-password",
        onClose: () => {
          const s = m();
          k.setFormValues({
            enabled: !1,
            password: ""
          }), s?.kind === "password" && q(s.id);
        }
      })
    },
    i = B({
      formId: "taskbox-post-unlock",
      initialValues: {
        password: ""
      },
      onValidate: s => s.password ? !0 : (u(l("taskbox.postPasswordRequired")), !1),
      onSubmit: async s => {
        const o = m();
        if (o?.kind !== "unlock") return !1;
        try {
          const a = await T(o.seq, {
            password: s.password
          });
          return n.current = !0, o.onUnlocked(a), r.unlock.close(), !0;
        } catch (a) {
          return i.setFormValue("password", ""), u(h(a, l("taskbox.postUnlockFailed"))), !1;
        }
      }
    }),
    k = B({
      formId: "taskbox-post-password",
      initialValues: {
        enabled: !1,
        password: ""
      },
      onValidate: s => {
        const o = m();
        if (o?.kind !== "password" || !s.enabled) return !0;
        const a = String(s.password ?? "");
        return !a && o.hasPassword ? !0 : a ? a.length < g || a.length > P ? (u(l("taskbox.postPasswordLength", {
          min: g,
          max: P
        })), !1) : !0 : (u(l("taskbox.postPasswordRequired")), !1);
      },
      onSubmit: async s => {
        const o = m();
        if (o?.kind !== "password") return !1;
        const a = String(s.password ?? ""),
          c = s.enabled ? a ? {
            post_password: a
          } : null : o.hasPassword ? {
            post_password_clear: !0
          } : null;
        if (!c) return r.password.close(), !0;
        try {
          const d = await E(o.seq, c, !!o.keepOpen);
          return d && o.onSaved(d), L(o.seq), D({
            message: l(s.enabled ? "taskbox.postPasswordSaved" : "taskbox.postPasswordCleared")
          }), r.password.close(), !0;
        } catch (d) {
          return u(h(d, l("taskbox.postPasswordSaveFailed"))), !1;
        }
      }
    }),
    x = e?.id ?? 0;
  return F.useEffect(() => {
    e && (e.kind === "unlock" ? (n.current = !1, i.setFormValues({
      password: ""
    }), r.unlock.open()) : (k.setFormValues({
      enabled: !0,
      password: ""
    }), r.password.open()));
  }, [x]), {
    request: e,
    modals: r,
    forms: {
      unlock: i,
      password: k
    },
    actions: {
      removePassword: async () => {
        const s = m();
        if (!(s?.kind !== "password" || !s.hasPassword)) try {
          const o = await E(s.seq, {
            post_password_clear: !0
          }, !!s.keepOpen);
          o && s.onSaved(o), L(s.seq), D({
            message: l("taskbox.postPasswordCleared")
          }), r.password.close();
        } catch (o) {
          u(h(o, l("taskbox.postPasswordSaveFailed")));
        }
      },
      unlockWithBio: async () => {
        const s = m();
        if (s?.kind === "unlock") try {
          const o = await A(),
            a = await T(s.seq, {
              bio: o
            });
          n.current = !0, s.onUnlocked(a), r.unlock.close();
        } catch (o) {
          if (o instanceof K) return;
          u(h(o, l("taskbox.postUnlockFailed")));
        }
      }
    }
  };
}
function Ts() {
  const e = _(),
    {
      request: n,
      modals: r,
      forms: i,
      actions: k
    } = X(),
    x = i.unlock.isSubmitting,
    C = G(),
    w = i.password.isSubmitting,
    s = n?.kind === "password" && n.hasPassword,
    o = n?.title ?? "",
    a = V(),
    c = n?.kind === "password" ? n.anchor : void 0,
    d = !a && !!c,
    j = r.password.isOpen,
    y = t.jsx(I, {
      form: i.password,
      name: "password",
      label: s ? e("taskbox.postPasswordNewKeep") : e("taskbox.postPasswordWithLength", {
        min: g,
        max: P
      }),
      autoComplete: "new-password",
      autoFocus: !0,
      fullWidth: !0,
      slotProps: {
        htmlInput: {
          maxLength: P
        }
      },
      onKeyDown: p => {
        p.key === "Enter" && !p.nativeEvent.isComposing && (p.preventDefault(), i.password.submit());
      }
    }),
    S = s ? t.jsx(f, {
      color: "inherit",
      disabled: w,
      onClick: () => {
        k.removePassword();
      },
      children: e("taskbox.postPasswordRemove")
    }) : void 0,
    U = o ? t.jsx(b, {
      component: "span",
      sx: {
        fontSize: 14,
        color: "text.secondary",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      },
      children: o
    }) : null;
  return t.jsxs(t.Fragment, {
    children: [t.jsx(O, {
      fontScaleKey: "PostUnlockDialog",
      backdropClick: !1,
      open: r.unlock.isOpen,
      onClose: r.unlock.close,
      title: {
        text: e("taskbox.postLockedTitle")
      },
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
      maxWidth: "xs",
      sections: [{
        id: "taskbox-post-unlock",
        showTitle: !1,
        children: t.jsxs(b, {
          sx: {
            display: "flex",
            flexDirection: "column",
            gap: R,
            minWidth: 0
          },
          children: [U, t.jsx(I, {
            form: i.unlock,
            name: "password",
            label: e("taskbox.postPassword"),
            autoComplete: "new-password",
            autoFocus: !0,
            fullWidth: !0,
            onKeyDown: p => {
              p.key === "Enter" && !p.nativeEvent.isComposing && (p.preventDefault(), i.unlock.submit());
            }
          })]
        })
      }],
      actions: {
        visible: !0,
        showCancelButton: !0,
        left: C ? t.jsx(f, {
          color: "inherit",
          startIcon: t.jsx(N, {}),
          disabled: x,
          onClick: () => {
            k.unlockWithBio();
          },
          children: e("common.postUnlockBio")
        }) : void 0,
        right: t.jsx(f, {
          variant: "contained",
          color: "primary",
          onClick: () => {
            i.unlock.submit();
          },
          disabled: x,
          sx: {
            minWidth: 80
          },
          children: x ? t.jsx(v, {
            size: 20,
            color: "inherit"
          }) : e("taskbox.postUnlockOpen")
        })
      }
    }), t.jsx(O, {
      fontScaleKey: "PostPasswordDialog",
      backdropClick: !1,
      open: j && !d,
      onClose: r.password.close,
      title: {
        text: e("taskbox.postPasswordTitle")
      },
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
      maxWidth: "xs",
      sections: [{
        id: "taskbox-post-password",
        showTitle: !1,
        children: t.jsx(b, {
          sx: {
            display: "flex",
            flexDirection: "column",
            gap: R,
            minWidth: 0
          },
          children: y
        })
      }],
      actions: {
        visible: !0,
        showCancelButton: !0,
        left: S,
        right: t.jsx(f, {
          variant: "contained",
          color: "primary",
          onClick: () => {
            i.password.submit();
          },
          disabled: w,
          sx: {
            minWidth: 80
          },
          children: w ? t.jsx(v, {
            size: 20,
            color: "inherit"
          }) : e("taskbox.save")
        })
      }
    }), t.jsxs(M, {
      open: j && d,
      ...(c instanceof HTMLElement ? {
        anchorEl: c,
        anchorReference: "anchorEl"
      } : {
        anchorPosition: c,
        anchorReference: "anchorPosition"
      }),
      onClose: r.password.close,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "left"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "left"
      },
      slotProps: {
        paper: {
          sx: {
            p: 2,
            width: 320,
            maxWidth: "calc(100vw - 32px)",
            display: "flex",
            flexDirection: "column",
            gap: 2
          }
        }
      },
      children: [y, t.jsxs(b, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 1
        },
        children: [S, t.jsx(b, {
          sx: {
            flex: 1
          }
        }), t.jsx(f, {
          onClick: r.password.close,
          children: e("common.cancel")
        }), t.jsx(f, {
          variant: "contained",
          onClick: () => {
            i.password.submit();
          },
          disabled: w,
          sx: {
            minWidth: 72
          },
          children: w ? t.jsx(v, {
            size: 20,
            color: "inherit"
          }) : e("taskbox.save")
        })]
      })]
    })]
  });
}
export { Ts as PostLockDialogs };