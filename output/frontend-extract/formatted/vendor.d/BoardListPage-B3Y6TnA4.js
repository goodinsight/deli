import { r, j as e, u as Ct, k as Et, l as qt } from "./react-CjxcGQav.js";
import { S as Rt } from "./selectedRow-CBnSZEGB.js";
import { r as Tt } from "./lastBoard-DXeRnS9N.js";
import { hI as re, ne as Ve, bv as H, u as ye, B as c, aq as Ot, cb as Dt, kp as Me, ko as Ft, bQ as J, cc as Ze, gg as It, hJ as et, kt as tt, hK as Bt, D as ot, b0 as Vt, oi as Le, cI as Mt, aB as Lt, al as At, kR as zt, cY as Nt, oj as Wt, ok as st, gy as Gt, fT as Ht, a1 as ve, bD as it, n9 as Kt, M as $t, w as Yt, d2 as Ut, mB as Xt, bO as nt, fS as Jt, fU as Ae, cz as Qt, e as Zt, gz as eo, dv as to, ol as ze, F as oo, d8 as so, lr as io, bh as no, om as ro, on as ao, a_ as rt, jN as lo, bm as co } from "../js.d/main-Cm9wS5wt.js";
import { t as uo, m as po, P as Ne, n as mo, l as fo, o as We, B as Ge, q as at, v as He, w as Ke, x as $e, y as xo, H as ae, L as ho, z as bo } from "./BoardPostDetail-CniIF2a7.js";
import { F as go } from "./FavoriteBorder-BkFztsJe.js";
import { F as yo } from "./FileDropOverlay-Bw4w8zRu.js";
import { u as vo, a as So } from "./FeedProfileAvatar-B6gqXpYU.js";
import { b as jo } from "./employeeAvatars-DaG0jIhW.js";
import { z as Se } from "./bootstrapController-BMV_i07c.js";
import { O as _o } from "./OptionToggleGroup-Cvm2wRyq.js";
import { d as wo } from "./date_utils-CYURFdnX.js";
import { L as ko } from "./ListViewModeToggle-NcYQu7vy.js";
import { M as Po } from "./MobileListTitleBar-tZ34p2gY.js";
import { u as Co } from "./mobileTitlePicker-u2JmU445.js";
import { c as Eo, A as qo } from "./periodRange-CKwTiAVI.js";
import { o as Ro } from "./taskDetailHost-C45bt_tL.js";
import { S as To } from "./SplitDockSlot-B6Q4iP8T.js";
import { F as Oo } from "./FileUploadBox-crZW1mG0.js";
import { E as lt } from "./EmployeeSelectDialog-Cdnxeoz9.js";
import { P as Do } from "./PickMenuDialog-BtpyEh4Z.js";
import { p as Fo } from "./taskboxApi-BuYlRWHe.js";
import { t as Io } from "./pickerEmployees-s9FYphgr.js";
import { u as Bo } from "./workspaceCandidates-BzY4iDjW.js";
import { u as Vo, b as Mo, a as Lo } from "./MobileCardListLayout-D5_p2Xer.js";
import { T as Ao } from "./tableScrollbars-C9bhlJjO.js";
import { u as he } from "./useColumnWidths-DSAca5rC.js";
import { u as zo } from "./sidebarAction-Z0aCDENX.js";
import "./stylis-DdLD6a3t.js";
import "./biometricController-CswvQnMD.js";
import "./attendanceBio-C-9dHF9O.js";
import "./ThumbUp-CuLuUDoD.js";
import "./PictureAsPdfOutlined-ChIt6cmZ.js";
import "./FolderZipOutlined-BdWYvuz4.js";
import "./InsertDriveFileOutlined-DcD-Yh-v.js";
import "./formatFileSize-Cwk2MLba.js";
import "./taskboxProviderConfig-DZSmb5uq.js";
import "./teamMembers-0yRsmqL6.js";
import "./resolveAssetPreviewSrc-CLlbOCzq.js";
import "./useFileViewer-B-2ewnr3.js";
import "./documentViewerStore-BlSjH3BG.js";
import "./EmojiPanel-DTZZq0Nb.js";
import "./html-d5LenlcH.js";
import "./CallOutlined-B2W58-Kt.js";
import "./AccountAvatar-DtrhoS_d.js";
import "./Person-DnoEHesw.js";
import "./squircle-CQM8EvXm.js";
import "./aliasStore-DiN6Kp-5.js";
import "./chatRoomHost-ImRyH_Na.js";
import "./callStore-DH1_RYeP.js";
import "./videoMeetingApi-BCL1yHsp.js";
import "./profileEcho-q2FaD_03.js";
import "./pendingRecordings-DpKJ8Y2R.js";
import "./meetingsApi-CCkjq69B.js";
import "./orgTree-Dh5HFjBo.js";
import "./mxApi-R6g9QtQq.js";
import "./profileApi-Btafs-pM.js";
import "./HorizontalSplitOutlined-MKxJhLKp.js";
import "./FileViewer-D5PyYcLh.js";
import "./RotateRight-DbtMfjGZ.js";
import "./tiny-invariant-CopsF_GD.js";
import "./Snackbar-DxIDGM8-.js";
import "./uploadGuard-BK1B6cyC.js";
import "./utils-B6Q5_urv.js";
import "./useLongPress-C-MDKVjl.js";
import "./mobileSearchOverlay-DYWcMOOb.js";
const ct = "board-view-mode";
function No() {
  try {
    return window.localStorage.getItem(ct) === "list" ? "list" : "split";
  } catch {
    return "split";
  }
}
function dt(o) {
  try {
    window.localStorage.setItem(ct, o);
  } catch {}
}
let Q = No(),
  Ye = !1;
const ge = new Set();
function Wo(o) {
  return ge.add(o), () => ge.delete(o);
}
function ut() {
  ge.forEach(o => o());
}
function Go(o) {
  Q !== o && (Q = o, dt(o), ut(), re.saveViewMode(o).catch(() => {}));
}
function Ho() {
  Ye || (Ye = !0, re.loadViewMode().then(o => {
    o !== Q && (Q = o, dt(o), ut());
  }).catch(() => {}));
}
function Ko() {
  return r.useEffect(() => Ho(), []), r.useSyncExternalStore(Wo, () => Q);
}
const $o = {
  ...Ve,
  left: (Ve.left ?? []).flatMap(o => o.includes("indent") ? [["bulletList", "numberList"], o] : [o])
};
function Yo({
  controller: o
}) {
  const i = H(),
    s = o.forms.post,
    f = String(s.useFormValue("visibilityKey") ?? "all"),
    h = s.useFormValue("receiverAccountSeqs") ?? [],
    m = s.useFormValue("receiverNames") ?? [],
    n = !!s.useFormValue("passwordKeep"),
    l = !!s.useFormValue("hadPassword"),
    [b, C] = r.useState(!1),
    {
      state: O
    } = Se(),
    w = O.useValue("data.groups"),
    S = O.useValue("data.employee"),
    j = Number(ye().useValue("account")?.seq ?? 0),
    R = Number((S ?? []).find(x => Number(x.login_account_seq ?? 0) === j)?.group_seq ?? 0),
    D = r.useMemo(() => [{
      value: "all",
      label: i("board.visibilityAll")
    }, {
      value: "involved",
      label: i("board.visibilityPrivate")
    }, ...[...(w ?? [])].sort((x, _) => x.seq === R ? -1 : _.seq === R ? 1 : 0).map(x => ({
      value: `group-${x.seq}`,
      label: i("board.visibilityGroupName", {
        name: x.name
      })
    }))], [w, R, i]),
    V = x => {
      s.setFormValue("visibilityKey", x), x === "all" && (s.setFormValue("receiverAccountSeqs", []), s.setFormValue("receiverNames", []));
    },
    k = x => {
      s.setFormValue("receiverAccountSeqs", h.filter((_, P) => P !== x)), s.setFormValue("receiverNames", m.filter((_, P) => P !== x));
    };
  return e.jsxs(c, {
    sx: {
      display: "flex",
      flexDirection: "column",
      gap: 1.5
    },
    children: [e.jsxs(c, {
      sx: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 2
      },
      children: [e.jsx(Ot, {
        label: i("board.spaceColVisibility"),
        value: f,
        onChange: x => V(String(x.target.value)),
        options: D,
        showEmptyOption: !1,
        fullWidth: !0
      }), e.jsx(Dt, {
        form: s,
        name: "password",
        label: l && n ? i("board.passwordNewKeep") : i("board.passwordWithLength", {
          min: Ft,
          max: Me
        }),
        autoComplete: "new-password",
        fullWidth: !0,
        slotProps: {
          htmlInput: {
            maxLength: Me
          }
        }
      })]
    }), l && n ? e.jsx(c, {
      children: e.jsx(J, {
        size: "small",
        variant: "outlined",
        onClick: () => s.setFormValue("passwordKeep", !1),
        children: i("board.passwordRemove")
      })
    }) : null, f !== "all" ? e.jsx(c, {
      component: "span",
      sx: {
        fontSize: 13,
        color: "text.secondary",
        mt: -.5
      },
      children: i("board.scopeAdminHint")
    }) : null, f !== "all" ? e.jsxs(c, {
      sx: {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 1
      },
      children: [e.jsx(c, {
        component: "span",
        sx: {
          fontSize: 14,
          color: "text.secondary",
          mr: .5
        },
        children: i("board.spaceColReceivers")
      }), m.map((x, _) => e.jsx(Ze, {
        label: x,
        size: "small",
        onDelete: () => k(_)
      }, `${h[_]}-${x}`)), e.jsx(J, {
        size: "small",
        variant: "outlined",
        onClick: () => C(!0),
        children: i("board.pickReceivers")
      })]
    }) : null, e.jsx(lt, {
      open: b,
      title: i("board.pickReceivers"),
      excludeSelf: !0,
      initialAccountSeqs: h,
      onClose: () => C(!1),
      onApply: x => {
        const _ = x.filter(P => Number(P.account_seq ?? 0) > 0);
        s.setFormValue("receiverAccountSeqs", _.map(P => Number(P.account_seq))), s.setFormValue("receiverNames", _.map(P => P.name)), C(!1);
      }
    })]
  });
}
const Uo = 440,
  Xo = 200,
  Jo = 240,
  Qo = 100,
  Zo = ["png", "jpg", "jpeg", "gif", "webp", "bmp", "svg", "heic", "heif", "avif"];
function es({
  controller: o
}) {
  const i = H(),
    s = o.forms.post,
    f = o.ui.useValue("uploadProgress"),
    h = o.modals.form,
    m = String(s.useFormValue("targetBoardKey") ?? "") || o.boardKey,
    n = It(),
    l = et().flatMap(d => d.boards).filter(d => d.key === m || (n.byKey[d.key]?.can_write ?? !0)).map(d => ({
      value: d.key,
      label: d.label
    })),
    b = l.some(d => d.value === m),
    C = tt(m).file_enabled,
    O = m === o.boardKey ? o.boardType : Bt(m),
    w = O !== "general",
    S = r.useRef(""),
    j = ot(),
    R = r.useRef(null),
    D = r.useRef(null),
    V = (Number(s.useFormValue("seq")) || 0) > 0,
    k = String(s.useFormValue("content") ?? ""),
    x = s.useFormValue("keptFiles") ?? [],
    _ = s.isSubmitting,
    [P, u] = r.useState(0),
    [g, v] = r.useState([]);
  r.useEffect(() => {
    if (h.isOpen) {
      u(y => y + 1);
      const d = o.ui.getValue("presetFiles") ?? [];
      v(d), S.current = d.length > 0 ? String(s.getFormValue("title") ?? "") : "";
    } else v([]);
  }, [h.isOpen]), r.useEffect(() => {
    D.current !== k && (D.current = k, R.current?.setHtml(k));
  }, [k]);
  const E = d => {
      if (s.setFormValue("newFiles", d), !w) return;
      const y = [...x, ...d];
      if (y.length === 0) return;
      const Y = String(s.getFormValue("title") ?? "");
      if (Y.trim() && Y !== S.current) return;
      const K = uo(y);
      S.current = K, s.setFormValue("title", K);
    },
    F = e.jsxs(c, {
      sx: {
        display: "flex",
        flexDirection: "column",
        gap: 1
      },
      children: [x.length > 0 ? e.jsx(c, {
        sx: {
          display: "flex",
          flexWrap: "wrap",
          gap: 1
        },
        children: x.map(d => e.jsx(Ze, {
          icon: e.jsx(Vt, {
            sx: {
              fontSize: 16
            }
          }),
          label: d.name,
          size: "small",
          sx: {
            bgcolor: "#f1f5f9",
            fontSize: 13
          },
          onDelete: () => s.setFormValue("keptFiles", x.filter(y => y.uuid !== d.uuid))
        }, d.uuid))
      }) : null, C ? e.jsx(Oo, {
        multiple: !0,
        height: 64,
        variant: "box",
        acceptedFileTypes: O === "gallery" ? Zo : [],
        dropzoneText: `${i(O === "gallery" ? "board.attachImagesRequired" : O === "library" ? "board.attachFilesRequired" : "board.attachFiles")} ${i("board.attachLimit", {
          mb: Le
        })}`,
        onAttachedFilesChange: E,
        initialFiles: g,
        maxFileSize: Le,
        progress: f ?? null
      }) : null]
    });
  return e.jsx(Mt, {
    open: h.isOpen,
    onClose: h.close,
    title: e.jsxs(c, {
      sx: {
        display: "flex",
        alignItems: "center",
        gap: 2,
        minWidth: 0
      },
      children: [e.jsx("span", {
        children: i(V ? "board.editPost" : "board.write")
      }), o.canPin ? e.jsx(c, {
        onClick: d => d.stopPropagation(),
        onKeyDown: d => d.stopPropagation(),
        sx: {
          flexShrink: 0,
          "& .MuiFormControlLabel-root": {
            ml: 0,
            mr: 0
          },
          "& .MuiFormControlLabel-label": {
            fontSize: 14,
            fontWeight: 400
          }
        },
        children: e.jsx(Nt, {
          form: s,
          name: "pinned",
          label: i("board.pinToTop"),
          size: "small"
        })
      }) : null]
    }),
    maxWidth: "md",
    backdropClick: !1,
    fullScreen: j,
    tabs: {
      visible: !1
    },
    sectionsPaddingTop: 0,
    sectionContentPaddingTop: 0,
    mobilePresentation: j ? "slide" : "dialog",
    titleIcons: {
      print: {
        visible: !1
      },
      share: {
        visible: !1
      },
      delete: {
        visible: !1
      }
    },
    actions: {
      showCancelButton: !0,
      right: e.jsx(J, {
        variant: "contained",
        onClick: () => {
          s.submit();
        },
        disabled: _,
        children: i(_ ? "board.saving" : "board.save")
      })
    },
    sections: [{
      id: "board-post-form",
      title: "",
      showTitle: !1,
      children: e.jsxs(c, {
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: 2
        },
        children: [w ? F : null, e.jsxs(c, {
          sx: {
            display: "flex",
            flexDirection: j ? "column" : "row",
            gap: 2
          },
          children: [!V && b ? e.jsx(Lt, {
            label: i("board.boardPick"),
            value: m,
            onChange: d => s.setFormValue("targetBoardKey", String(d.target.value)),
            options: l,
            showEmptyOption: !1,
            fullWidth: j,
            formControlProps: {
              sx: {
                width: j ? "100%" : 220,
                flexShrink: 0
              }
            }
          }) : null, e.jsx(At, {
            form: s,
            name: "title",
            label: i("board.title"),
            fullWidth: !0,
            autoFocus: !j && !w,
            slotProps: {
              htmlInput: {
                maxLength: 200
              }
            }
          })]
        }), e.jsx(Yo, {
          controller: o
        }), e.jsx(zt, {
          ref: R,
          defaultValue: k,
          onChange: d => {
            D.current = d, s.setFormValue("content", d);
          },
          toolbarOptions: $o,
          autoHeight: j,
          resizable: !j,
          showToolbar: !j,
          focusBorder: !0,
          styles: {
            focusBorderColor: "var(--primary)"
          },
          contentStyle: {
            padding: "12px"
          },
          minHeight: w ? j ? Qo : Jo : j ? Xo : Uo,
          locale: "ko",
          placeholder: i(w ? "board.descriptionOptionalPlaceholder" : "board.contentPlaceholder")
        }), w ? null : F]
      }, P)
    }]
  });
}
function ts({
  open: o,
  currentKey: i,
  onClose: s
}) {
  const f = Ct(),
    h = n => () => {
      if (n === i) {
        s();
        return;
      }
      let l = !1;
      const b = () => {
        l || (l = !0, window.removeEventListener("popstate", b), f(Ht(n)));
      };
      window.addEventListener("popstate", b, {
        once: !0
      }), s(), window.setTimeout(b, 300);
    },
    m = [...et().flatMap(n => n.boards).map(n => ({
      key: n.key,
      icon: Wt[n.icon],
      label: n.label,
      selected: n.key === i,
      onSelect: h(n.key)
    })), ...st().map(n => ({
      key: n.key,
      icon: e.jsx(Gt, {
        icon: n.workspace.icon,
        color: n.workspace.color || void 0
      }),
      label: n.label,
      selected: n.key === i,
      onSelect: h(n.key)
    }))];
  return e.jsx(Do, {
    open: o,
    onClose: s,
    items: m
  });
}
const os = "14px";
function Ue({
  editable: o,
  fill: i,
  align: s = "left",
  onClick: f,
  children: h
}) {
  const {
      colors: m
    } = Xt(),
    n = o ? l => {
      l.stopPropagation(), f(l.currentTarget);
    } : void 0;
  return e.jsx(c, {
    "data-scope-cell": o ? "editable" : "readonly",
    onClick: n,
    sx: {
      ...(i ? {
        position: "absolute",
        inset: 0,
        px: os,
        display: "flex"
      } : {
        display: "inline-flex",
        maxWidth: "100%"
      }),
      alignItems: "center",
      justifyContent: s === "center" ? "center" : "flex-start",
      minWidth: 0,
      overflow: "hidden",
      cursor: o ? "pointer" : "default",
      ...(o ? {
        "&:hover": {
          bgcolor: m.surfaceHoverStrong
        }
      } : {})
    },
    children: h
  });
}
function ss({
  spaceSeq: o,
  onSaved: i
}) {
  const s = H(),
    [f, h] = r.useState(null),
    [m, n] = r.useState(null),
    {
      state: l
    } = Se(),
    b = l.useValue("data.groups"),
    C = l.useValue("data.employee"),
    O = Number(ye().useValue("account")?.seq ?? 0),
    w = Number((C ?? []).find(u => Number(u.login_account_seq ?? 0) === O)?.group_seq ?? 0),
    S = r.useMemo(() => [...(b ?? [])].sort((u, g) => u.seq === w ? -1 : g.seq === w ? 1 : 0), [b, w]),
    j = r.useMemo(() => Io(C), [C]),
    R = Bo(j, o),
    D = async (u, g) => {
      try {
        const v = await Fo(u.seq, g),
          E = d => v && d in v ? v[d] : g[d],
          F = {};
        "visibility" in g && (F.visibility = E("visibility") ?? "involved", F.visibility_group_seq = Number(E("visibility_group_seq") ?? 0)), "receiver_account_seqs" in g && (F.receiver_names = E("receiver_names") ?? [], F.receiver_account_seqs = E("receiver_account_seqs") ?? []), i(u.seq, F);
      } catch (v) {
        nt(v instanceof Error && v.message ? v.message : s("board.savePostFailed"));
      }
    },
    V = f?.row ?? null,
    k = V?.visibility ?? "involved",
    x = Number(V?.visibility_group_seq ?? 0),
    _ = [{
      key: "involved",
      label: s("board.visibilityPrivate"),
      icon: e.jsx(ve, {
        sx: {
          fontSize: 17,
          color: "#57564f"
        }
      }),
      selected: k === "involved",
      value: "involved",
      groupSeq: 0
    }, {
      key: "all",
      label: s("board.visibilityAll"),
      icon: e.jsx(it, {
        sx: {
          fontSize: 17,
          color: "#2f80ed"
        }
      }),
      selected: k === "all",
      value: "all",
      groupSeq: 0
    }, ...S.map(u => ({
      key: `group-${u.seq}`,
      label: s("board.visibilityGroupName", {
        name: u.name
      }),
      icon: e.jsx(Kt, {
        sx: {
          fontSize: 17,
          color: "#d9730d"
        }
      }),
      selected: k === "group" && x === u.seq,
      value: "group",
      groupSeq: u.seq
    }))],
    P = e.jsxs(e.Fragment, {
      children: [e.jsx($t, {
        transitionDuration: 0,
        anchorReference: "anchorPosition",
        anchorPosition: f ? {
          top: f.top,
          left: f.left
        } : void 0,
        open: !!f,
        onClose: () => h(null),
        children: _.map(u => e.jsxs(Yt, {
          selected: u.selected,
          onClick: () => {
            const g = f?.row;
            h(null), !(!g || u.selected) && D(g, {
              visibility: u.value,
              visibility_group_seq: u.groupSeq
            });
          },
          sx: {
            fontSize: 14,
            minWidth: 170,
            gap: 1
          },
          children: [u.icon, u.label, u.selected ? e.jsx(Ut, {
            sx: {
              fontSize: 16,
              color: "#2f80ed",
              ml: "auto"
            }
          }) : null]
        }, u.key))
      }), e.jsx(lt, {
        candidates: R,
        open: !!m,
        title: s("board.pickReceivers"),
        excludeAccountSeqs: m?.account_seq ? [m.account_seq] : void 0,
        initialAccountSeqs: m?.receiver_account_seqs ?? [],
        onClose: () => n(null),
        onApply: u => {
          const g = m;
          if (n(null), !g) return;
          const v = u.filter(E => Number(E.account_seq ?? 0) > 0);
          D(g, {
            receiver_names: v.map(E => E.name),
            receiver_account_seqs: v.map(E => Number(E.account_seq))
          });
        }
      })]
    });
  return {
    openVisibility: (u, g) => {
      const v = g.getBoundingClientRect();
      h({
        row: u,
        top: v.bottom,
        left: v.left
      });
    },
    openReceivers: u => n(u),
    elements: P
  };
}
const Xe = 20,
  is = 300,
  ns = "#9b9a97",
  rs = 48,
  as = "#f8f8f7";
function $(o) {
  if (!o) return "";
  const i = new Date(o.replace(" ", "T"));
  if (Number.isNaN(i.getTime())) return o.slice(0, 10);
  const s = f => String(f).padStart(2, "0");
  return `${wo(i, "YY.MM.DD")} ${s(i.getHours())}:${s(i.getMinutes())}`;
}
function ne({
  row: o,
  pinned: i,
  wrap: s,
  hideScope: f = !1,
  counts: h = !1,
  keyword: m = "",
  hideAttach: n = !1,
  excerpt: l = !1,
  dragProps: b
}) {
  const C = H();
  return e.jsxs(c, {
    ...b,
    sx: {
      display: "flex",
      alignItems: "center",
      gap: .75,
      minWidth: 0,
      width: "100%"
    },
    children: [i && s ? e.jsx(at, {
      sx: {
        fontSize: 15,
        color: "primary.main",
        flexShrink: 0,
        position: "relative",
        top: 1
      }
    }) : null, !f && o.visibility === "involved" ? e.jsx(ve, {
      sx: {
        fontSize: 15,
        color: "text.secondary",
        flexShrink: 0
      }
    }) : !f && o.visibility === "group" ? e.jsx(rt, {
      sx: {
        fontSize: 15,
        color: "text.secondary",
        flexShrink: 0
      }
    }) : null, o.post_type ? e.jsxs(c, {
      component: "span",
      sx: {
        color: "text.secondary",
        flexShrink: 0
      },
      children: ["[", o.post_type, "]"]
    }) : null, e.jsx(c, {
      component: "span",
      sx: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: s ? "normal" : "nowrap",
        ...(s ? {
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical"
        } : {}),
        fontWeight: 500,
        ...(l && !s ? {
          flexShrink: 0,
          maxWidth: "60%"
        } : {})
      },
      children: e.jsx(ae, {
        text: o.title,
        keyword: m,
        fallback: ""
      })
    }), o.has_password ? e.jsx(c, {
      component: "span",
      "aria-label": C("board.passwordPost"),
      sx: {
        display: "inline-flex",
        flexShrink: 0
      },
      children: e.jsx(ho, {
        sx: {
          fontSize: 15,
          color: "text.secondary"
        }
      })
    }) : null, o.locked ? null : e.jsxs(e.Fragment, {
      children: [l && !s ? e.jsx(c, {
        component: "span",
        sx: {
          flex: "1 1 0",
          minWidth: 0,
          ml: 1.75,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          color: "text.secondary",
          fontSize: 14,
          fontWeight: 400
        },
        children: o.excerpt ? e.jsx(ae, {
          text: o.excerpt,
          keyword: m,
          fallback: ""
        }) : null
      }) : null, !n && (o.file_count > 0 || o.files.length > 0) ? e.jsx(lo, {
        sx: {
          fontSize: 15,
          color: "text.secondary",
          flexShrink: 0
        }
      }) : null, h ? e.jsxs(e.Fragment, {
        children: [e.jsx(Je, {
          icon: e.jsx(bo, {
            sx: {
              fontSize: 15
            }
          }),
          count: o.comment_count
        }), e.jsx(Je, {
          icon: e.jsx(go, {
            sx: {
              fontSize: 15
            }
          }),
          count: o.like_count
        })]
      }) : o.comment_count > 0 ? e.jsxs(c, {
        component: "span",
        sx: {
          color: "primary.main",
          fontSize: 12.5,
          flexShrink: 0
        },
        children: ["[", o.comment_count, "]"]
      }) : null]
    })]
  });
}
function Je({
  icon: o,
  count: i
}) {
  return i > 0 ? e.jsxs(c, {
    component: "span",
    sx: {
      display: "inline-flex",
      alignItems: "center",
      gap: .25,
      color: "text.secondary",
      fontSize: 12.5,
      flexShrink: 0
    },
    children: [o, i]
  }) : null;
}
function Qe({
  row: o,
  keyword: i,
  avatars: s
}) {
  const f = o.author_name.trim(),
    h = e.jsx(ae, {
      text: o.author_name,
      keyword: i,
      fallback: ""
    });
  return !o.account_seq || !f ? h : e.jsx(So, {
    person: {
      name: f,
      src: s.get(f),
      accountSeq: o.account_seq
    },
    size: 24,
    label: h,
    labelGap: .5,
    fill: !0
  });
}
function be({
  searching: o
}) {
  const i = H();
  return e.jsxs(c, {
    sx: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 1.5,
      color: ns,
      fontSize: 14,
      py: 8
    },
    children: [e.jsx(co, {
      sx: {
        fontSize: 44,
        opacity: .45
      }
    }), i(o ? "board.noSearchResults" : "board.noPosts")]
  });
}
function ls({
  value: o
}) {
  const i = H(),
    s = o === "all" ? it : o === "group" ? rt : ve,
    f = i(o === "all" ? "board.visibilityAll" : o === "group" ? "board.visibilityGroup" : "board.visibilityPrivate");
  return e.jsxs(c, {
    component: "span",
    sx: {
      display: "inline-flex",
      alignItems: "center",
      gap: .5,
      color: "text.secondary",
      whiteSpace: "nowrap"
    },
    children: [e.jsx(s, {
      sx: {
        fontSize: 16,
        color: o === "all" ? "#2f80ed" : o === "group" ? "#d9730d" : "#57564f"
      }
    }), f]
  });
}
function Si() {
  const o = H(),
    i = he("board.list"),
    s = he("board.libraryList"),
    f = he("board.spaceList"),
    {
      boardKey: h
    } = Et(),
    m = Jt(h, st()),
    n = m ?? Ae(h),
    l = m?.workspace.seq ?? 0;
  r.useEffect(() => {
    Tt(n.key);
  }, [n.key]);
  const b = m ? "general" : Ae(h).type ?? "general",
    C = tt(n.key),
    O = C.can_write,
    w = m ? po(m.workspace) : O,
    S = ot(),
    j = ye().useValue("account"),
    R = j?.rbac_role === "admin",
    D = j?.seq ?? 0,
    V = Qt()?.seq ?? 0,
    [k, x] = qt(),
    _ = r.useRef(k);
  _.current = k;
  const P = Ko(),
    u = !S && P === "split",
    [g, v] = r.useState(""),
    {
      state: E
    } = Se(),
    F = E.useValue("data.employee"),
    d = r.useMemo(() => jo(F), [F]),
    [y, Y] = r.useState(""),
    [K, pt] = r.useState("desc"),
    [le, mt] = r.useState("1y"),
    [M, je] = r.useState([]),
    [B, ft] = r.useState([]),
    [Z, xt] = r.useState(0),
    [L, _e] = r.useState(!0),
    ee = r.useRef(0),
    ce = r.useRef(1),
    ht = r.useCallback(() => {
      if (_.current.has("seq")) {
        const t = new URLSearchParams(_.current);
        t.delete("seq"), x(t, {
          replace: !0
        });
      }
    }, [x]),
    de = Zt({
      modalId: "board-picker"
    }),
    G = Co(),
    we = !!G.useValue("open"),
    ke = m?.label ?? n.label;
  r.useEffect(() => {
    if (S) return G.setValue("active", !0), G.setValue("title", ke), () => {
      G.setValue("active", !1), G.setValue("open", !1), G.setValue("title", "");
    };
  }, [S, ke]), r.useEffect(() => {
    we && (G.setValue("open", !1), de.open());
  }, [we]), r.useEffect(() => {
    const t = setTimeout(() => Y(g.trim()), is);
    return () => clearTimeout(t);
  }, [g]);
  const I = r.useCallback(async t => {
    const a = ++ee.current,
      p = t === "more" ? ce.current + 1 : t === "reload" || t === "refresh" ? ce.current : 1,
      q = t === "refresh";
    q || _e(!0);
    try {
      const T = {
          search: y,
          sort: "created_time",
          order: K
        },
        W = Eo(le),
        Ie = {
          ...T,
          createdMin: W.start,
          createdMax: W.end
        };
      l > 0 && (await eo());
      const fe = ie => l > 0 ? re.spaceList(l, ie) : re.list(n.key, ie),
        [xe, Be] = await Promise.all([fe(t === "more" ? {
          ...Ie,
          page: p,
          perPage: Xe,
          pinned: !1
        } : {
          ...Ie,
          page: 1,
          perPage: Xe * p,
          pinned: !1
        }), t === "more" ? null : fe({
          ...T,
          page: 1,
          perPage: 50,
          pinned: !0
        })]);
      if (a !== ee.current) return;
      ce.current = p, je(ie => t === "more" ? [...ie, ...xe.items] : xe.items), xt(xe.total), Be && ft(Be.items);
    } catch (T) {
      if (a !== ee.current || q) return;
      nt(T instanceof Error ? T.message : o("board.loadPostsFailed"));
    } finally {
      a === ee.current && _e(!1);
    }
  }, [n.key, l, y, K, le]);
  r.useEffect(() => {
    I("reset");
  }, [I, V]), to(["board_post", "board_comment"], () => {
    I("refresh");
  }), r.useEffect(() => {
    const t = () => {
      I("refresh");
    };
    return window.addEventListener(ze, t), () => window.removeEventListener(ze, t);
  }, [n.key]), vo(t => {
    const a = t.item;
    (t.action === "delete" || Number(a?.workspace_seq ?? 0) === l && a?.is_post) && I("refresh");
  }, l > 0), r.useEffect(() => {
    if (l <= 0) return;
    const t = () => {
      I("refresh");
    };
    return window.addEventListener(Ne, t), () => window.removeEventListener(Ne, t);
  }, [l, I]);
  const Pe = mo();
  r.useEffect(() => {
    l > 0 && Pe > 0 && I("refresh");
  }, [Pe]);
  const ue = ss({
      spaceSeq: l,
      onSaved: (t, a) => je(p => p.map(q => q.seq === t ? {
        ...q,
        ...a
      } : q))
    }),
    te = M.length < Z,
    oe = r.useCallback(() => {
      L || !te || I("more");
    }, [L, te, I]),
    A = fo({
      boardKey: n.key,
      boardType: b,
      canPin: R,
      isMobile: S,
      reloadList: () => {
        I("reload");
      },
      onDetailReset: ht
    }),
    {
      selectPost: Ce,
      closeDetail: Ee
    } = A,
    z = Number(A.ui.useValue("selectedSeq")) || 0;
  r.useEffect(() => {
    v(""), Y(""), A.ui.setValues({
      selectedSeq: 0,
      detail: null
    });
  }, [n.key]), r.useEffect(() => {
    const t = Number(k.get("seq") ?? 0);
    t > 0 && t !== z && Ce(t);
  }, [k]);
  const U = t => {
      if (l > 0) {
        Ro(t.seq);
        return;
      }
      if (!S && t.seq === z) {
        Ee();
        return;
      }
      Ce(t.seq);
    },
    qe = l > 0 ? () => $e(l) : A.openCreateDialog,
    bt = w && (l > 0 || C.file_enabled),
    pe = r.useRef(null),
    [N, se] = r.useState(null),
    Re = () => pe.current?.querySelector(".list-layout table, .list-layout [data-board-cards]")?.closest(".MuiPaper-root") ?? null,
    Te = t => {
      if (!bt || !Array.from(t.dataTransfer.types).includes("Files")) return null;
      const a = t.target,
        p = Re();
      return !p || !p.contains(a) || a.closest?.("[data-board-detail]") ? null : p;
    },
    gt = {
      onDragOver: t => {
        const a = Te(t),
          p = pe.current;
        if (!a || !p) {
          N && se(null);
          return;
        }
        t.preventDefault(), t.dataTransfer.dropEffect = "copy";
        const q = a.getBoundingClientRect(),
          T = p.getBoundingClientRect(),
          W = {
            top: q.top - T.top,
            left: q.left - T.left,
            width: q.width,
            height: q.height
          };
        (!N || N.top !== W.top || N.left !== W.left || N.width !== W.width || N.height !== W.height) && se(W);
      },
      onDragLeave: t => {
        const a = t.relatedTarget,
          p = Re();
        (!a || !p || !p.contains(a)) && se(null);
      },
      onDrop: t => {
        if (se(null), !Te(t)) return;
        t.preventDefault();
        const a = Array.from(t.dataTransfer.files);
        a.length !== 0 && (l > 0 ? $e(l, a) : A.openCreateDialog(a));
      }
    },
    Oe = z > 0,
    yt = e.jsx(ko, {
      value: P,
      onChange: Go
    }),
    vt = {
      stateId: "board-filters",
      showChips: !1,
      groups: [{
        filters: [{
          type: "custom",
          name: "board-period",
          node: e.jsx(c, {
            sx: {
              "& .MuiToggleButtonGroup-root": {
                height: 40,
                flexWrap: "nowrap"
              }
            },
            children: e.jsx(_o, {
              size: "medium",
              value: le,
              onChange: t => t && mt(t),
              options: qo,
              sx: {
                "& .MuiToggleButtonGroup-grouped": {
                  minWidth: 56,
                  px: 1.5
                }
              }
            })
          })
        }]
      }]
    };
  zo(!S && w ? {
    label: o("board.write"),
    icon: e.jsx(no, {}),
    onClick: () => qe(),
    fab: !(u && z > 0)
  } : null);
  const De = e.jsx(es, {
      controller: A
    }),
    Fe = Vo(L);
  if (S) {
    const t = (p, q) => e.jsxs(c, {
        role: "button",
        tabIndex: 0,
        onClick: () => U(p),
        onKeyDown: T => {
          (T.key === "Enter" || T.key === " ") && (T.preventDefault(), U(p));
        },
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: .5,
          px: 2,
          py: 1.5,
          fontSize: 15,
          cursor: "pointer",
          userSelect: "none",
          "&:active": {
            bgcolor: as
          }
        },
        children: [e.jsx(ne, {
          row: p,
          pinned: q,
          wrap: !0,
          counts: l > 0,
          keyword: y,
          hideAttach: b === "library"
        }), b === "library" && p.files.length > 0 ? e.jsxs(c, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1.25,
            fontSize: 14,
            color: "text.secondary"
          },
          children: [e.jsx(He, {
            row: p
          }), e.jsx("span", {
            style: {
              whiteSpace: "nowrap"
            },
            children: Ke(p)
          }), e.jsx(xo, {
            count: p.download_count
          })]
        }) : null, e.jsxs(c, {
          sx: {
            display: "flex",
            gap: 1.25,
            fontSize: 14,
            color: "text.secondary"
          },
          children: [e.jsx("span", {
            children: e.jsx(ae, {
              text: p.author_name,
              keyword: y,
              fallback: ""
            })
          }), e.jsx("span", {
            style: {
              whiteSpace: "nowrap"
            },
            children: $(p.created_time)
          }), b === "library" ? null : e.jsx("span", {
            children: o("board.viewCount", {
              count: p.view_count
            })
          })]
        })]
      }, `${q ? "p" : "n"}-${p.seq}`),
      a = [e.jsx(Po, {
        searchValue: g,
        onSearchChange: v,
        searchPlaceholder: o("board.searchPlaceholder")
      }, "title"), ...(b === "gallery" ? B.length + M.length > 0 ? [e.jsx(We, {
        rows: [...B, ...M],
        selectedSeq: z,
        keyword: y,
        mobile: !0,
        onOpen: U,
        dateText: $
      }, "gallery")] : [] : [...B.map(p => t(p, !0)), ...M.map(p => t(p, !1))])];
    return Fe && M.length === 0 && B.length === 0 && a.push(e.jsx(be, {
      searching: !!y
    }, "empty")), Fe || a.push(e.jsx(Lo, {
      py: 8,
      contentHeight: 77
    }, "loading")), te && a.push(e.jsx(c, {
      sx: {
        display: "flex",
        justifyContent: "center",
        py: .5
      },
      children: e.jsx(J, {
        fullWidth: !0,
        onClick: oe,
        disabled: L,
        children: o("board.loadMore")
      })
    }, "more")), e.jsxs(e.Fragment, {
      children: [e.jsx(Mo, {
        attachHead: !0,
        children: a
      }), w ? e.jsx(oo, {
        color: "primary",
        "aria-label": o("board.write"),
        onClick: qe,
        sx: {
          position: "fixed",
          right: 24,
          bottom: "calc(24px + var(--taskbox-fab-lift, 0px))",
          zIndex: 40
        },
        children: e.jsx(so, {})
      }) : null, e.jsx(Ge, {
        controller: A,
        myAccountSeq: D,
        isAdmin: R
      }), De, e.jsx(ts, {
        open: de.isOpen,
        currentKey: n.key,
        onClose: de.close
      })]
    });
  }
  const St = e.jsx(To, {
      onEscape: Ee
    }),
    me = t => S || m ? void 0 : {
      draggable: !0,
      onDragStart: a => ao(a, t.seq, n.key, b),
      onDragEnd: () => ro()
    },
    X = [{
      id: "number",
      text: o("board.number"),
      width: 72,
      align: "center",
      render: (t, a) => t.pinned ? e.jsx(at, {
        sx: {
          fontSize: 15,
          color: "primary.main",
          position: "relative",
          top: 1
        }
      }) : Z - (a - B.length)
    }, {
      id: "title",
      text: o("board.title"),
      style: {
        fontSize: 15
      },
      render: t => e.jsx(ne, {
        row: t,
        pinned: t.pinned,
        wrap: !1,
        keyword: y,
        dragProps: me(t)
      })
    }, {
      id: "author_name",
      text: o("board.author"),
      width: 140,
      align: "center",
      style: {
        fontSize: 15,
        position: "relative"
      },
      render: t => e.jsx(Qe, {
        row: t,
        keyword: y,
        avatars: d
      })
    }, {
      id: "created_time",
      text: o("board.createdDate"),
      width: 150,
      align: "center",
      sortable: !0,
      render: t => e.jsx(c, {
        component: "span",
        sx: {
          whiteSpace: "nowrap"
        },
        children: $(t.created_time)
      })
    }, {
      id: "view_count",
      text: o("board.views"),
      width: 80,
      align: "center",
      render: t => String(t.view_count ?? 0)
    }],
    jt = [X[0], {
      ...X[1],
      render: t => e.jsx(ne, {
        row: t,
        pinned: t.pinned,
        wrap: !1,
        keyword: y,
        hideAttach: !0,
        dragProps: me(t)
      })
    }, {
      id: "files",
      text: o("board.colFile"),
      width: 84,
      align: "center",
      render: t => e.jsx(He, {
        row: t
      })
    }, {
      id: "file_size",
      text: o("board.colSize"),
      width: 96,
      align: "center",
      render: t => e.jsx(c, {
        component: "span",
        sx: {
          whiteSpace: "nowrap",
          color: "text.secondary"
        },
        children: Ke(t)
      })
    }, X[2], {
      ...X[3],
      text: o("board.colRegistered")
    }, {
      id: "download_count",
      text: o("board.colDownloads"),
      width: 96,
      align: "center",
      render: t => String(t.download_count ?? 0)
    }],
    _t = t => String(t ?? 0),
    wt = [{
      id: "number",
      text: o("board.number"),
      width: 64,
      align: "center",
      render: (t, a) => Z - a
    }, {
      id: "title",
      text: o("board.title"),
      minWidth: 260,
      style: {
        fontSize: 15
      },
      render: t => e.jsx(ne, {
        row: t,
        pinned: !1,
        wrap: !1,
        hideScope: !0,
        counts: !0,
        excerpt: !0,
        keyword: y
      })
    }, {
      id: "author_name",
      text: o("board.author"),
      width: 140,
      align: "center",
      style: {
        position: "relative"
      },
      render: t => e.jsx(Qe, {
        row: t,
        keyword: y,
        avatars: d
      })
    }, {
      id: "receiver_names",
      text: o("board.spaceColReceivers"),
      width: 130,
      style: {
        position: "relative"
      },
      render: t => e.jsx(Ue, {
        editable: !!t.can_edit,
        fill: !S,
        onClick: () => ue.openReceivers(t),
        children: e.jsx(c, {
          component: "span",
          sx: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            color: "text.secondary"
          },
          children: (t.receiver_names ?? []).join(", ")
        })
      })
    }, {
      id: "visibility",
      text: o("board.spaceColVisibility"),
      width: 100,
      align: "center",
      style: {
        position: "relative"
      },
      render: t => e.jsx(Ue, {
        editable: !!t.can_edit,
        fill: !S,
        align: "center",
        onClick: a => ue.openVisibility(t, a),
        children: e.jsx(ls, {
          value: t.visibility ?? "involved"
        })
      })
    }, {
      id: "created_time",
      text: o("board.createdDate"),
      width: 140,
      align: "center",
      sortable: !0,
      render: t => e.jsx(c, {
        component: "span",
        sx: {
          whiteSpace: "nowrap"
        },
        children: $(t.created_time)
      })
    }, {
      id: "last_activity_time",
      text: o("board.spaceColActivity"),
      width: 140,
      align: "center",
      render: t => e.jsx(c, {
        component: "span",
        sx: {
          whiteSpace: "nowrap",
          color: "text.secondary"
        },
        children: $(t.last_activity_time ?? "")
      })
    }, {
      id: "view_count",
      text: o("board.views"),
      width: 64,
      align: "center",
      render: t => _t(t.view_count)
    }],
    kt = e.jsx(c, {
      sx: {
        height: "100%",
        overflowY: "auto"
      },
      onScroll: t => {
        const a = t.currentTarget;
        a.scrollHeight - a.scrollTop - a.clientHeight < 240 && oe();
      },
      children: B.length + M.length === 0 ? e.jsx(c, {
        "data-board-cards": !0,
        children: L ? null : e.jsx(be, {
          searching: !!y
        })
      }) : e.jsx(We, {
        rows: [...B, ...M],
        selectedSeq: z,
        keyword: y,
        mobile: !1,
        dragProps: me,
        onOpen: U,
        dateText: $,
        footer: te ? e.jsx(c, {
          sx: {
            display: "flex",
            justifyContent: "center",
            pt: 2
          },
          children: e.jsx(J, {
            onClick: oe,
            disabled: L,
            children: o("board.loadMore")
          })
        }) : null
      })
    }),
    Pt = {
      right: yt,
      filter: vt,
      showSearch: !0,
      searchValue: g,
      searchPlaceholder: o("board.searchPlaceholder"),
      onSearchChange: v,
      searchLoading: L,
      collapsible: !1,
      showCollapseButton: !1,
      showClearIcon: !1
    };
  return e.jsxs(e.Fragment, {
    children: [e.jsxs(c, {
      ref: pe,
      sx: {
        position: "relative",
        height: "100%",
        minHeight: 0,
        display: "flex",
        flexDirection: "column"
      },
      ...gt,
      children: [N ? e.jsx(c, {
        sx: {
          position: "absolute",
          ...N,
          zIndex: 5,
          pointerEvents: "none",
          borderRadius: 1,
          overflow: "hidden"
        },
        children: e.jsx(yo, {
          label: o("board.dropToWrite")
        })
      }) : null, e.jsx(io, {
        storageKey: "board-split",
        header: Pt,
        viewMode: b === "gallery" ? "card" : "table",
        cardPanel: b === "gallery" ? kt : void 0,
        resizable: !0,
        rightPanel: u ? St : void 0,
        rightConfig: {
          visible: u && Oe,
          ratio: .5,
          minWidth: 420
        },
        leftConfig: {
          minWidth: 360
        },
        tableProps: {
          ...(l > 0 ? f : b === "library" ? s : i),
          scrollbars: Ao,
          mobile: !0,
          variant: "notion",
          columns: l > 0 ? wt : b === "library" ? jt : X,
          data: [...B, ...M],
          totalCount: Z + B.length,
          getRowId: t => `${t.pinned ? "p" : "n"}-${t.seq}`,
          selectedRowId: Oe ? `${[...B, ...M].find(t => t.seq === z)?.pinned ? "p" : "n"}-${z}` : null,
          selectedRowSx: Rt,
          rowHeight: rs,
          onRowClick: U,
          onLoadMore: oe,
          onSort: (t, a) => {
            t === "created_time" && pt(a);
          },
          sortBy: "created_time",
          sortDirection: K,
          loading: L,
          emptyMessage: e.jsx(be, {
            searching: !!y
          })
        }
      })]
    }), e.jsx(Ge, {
      controller: A,
      myAccountSeq: D,
      isAdmin: R,
      presentation: u ? "dock" : "drawer"
    }), De, l > 0 ? ue.elements : null]
  });
}
export { rs as BOARD_ROW_HEIGHT, as as BOARD_ROW_HOVER_BG, Si as default };