import { j as t, r as f, k as di, u as ci } from "./react-CjxcGQav.js";
import { c as fi, B as u, L as U, bI as be, nl as ct, ou as I, fh as Ct, fg as mi, bO as j, bT as d, dv as ft, e as ze, ak as mt, fA as Ft, ov as ut, z as ge, bx as We, mP as fe, ow as Qt, ox as _t, j9 as ui, bv as Ge, D as Ue, oy as ht, cI as gt, bQ as re, K as Ne, ca as He, al as bt, aB as pt, oz as wt, oA as hi, cc as pi, a1 as $e, bH as xt, oB as vt, cO as xi, c3 as vi, d4 as gi, bw as bi, cH as Zt, df as ki, cz as Si, nh as zt, oC as ji, oD as Mt, fo as ce, w as _, fp as D, bL as yi, ks as qt, aY as It, aU as Ot, jl as it, oE as _e, cP as st, dO as Ci, bK as Fi, hj as nt, kX as rt, dd as Et, aq as _i, F as wi, d8 as zi, oF as Dt, oG as Mi, oH as Ve, cJ as qi, lr as Ii, oI as Oi, oJ as Ei, oK as Tt, gS as Rt, oL as Lt } from "../js.d/main-Cm9wS5wt.js";
import { G as At } from "./GridViewOutlined-C38fbc__.js";
import { V as Pt } from "./ViewModuleOutlined-8VG59DXR.js";
import { O as Di } from "./OptionToggleGroup-Cvm2wRyq.js";
import { c as Bt, u as Ti, a as Vt, b as Ri } from "./MobileCardListLayout-D5_p2Xer.js";
import { i as ei } from "./filePreview-B-5SZXbS.js";
import { a as Li } from "./EdgeTabs-Ccbggjn6.js";
import { u as Ai } from "./mobileSearchOverlay-DYWcMOOb.js";
import { o as Pi } from "./approvalDetailHost-CFvt90Au.js";
import { o as Bi } from "./boardPostHost-qkMGoKtn.js";
import { o as Vi } from "./chatRoomHost-ImRyH_Na.js";
import { o as $i } from "./meetingCalendar-_jcQJ1qd.js";
import { o as Wi } from "./taskDetailHost-C45bt_tL.js";
import { d as Ni } from "./uploadGuard-BK1B6cyC.js";
import { m as Hi } from "./meetingsApi-CCkjq69B.js";
import { f as Gi } from "./documentViewerStore-BlSjH3BG.js";
import { x as Ui, m as $t } from "./aliasStore-DiN6Kp-5.js";
import { n as Xi, j as Ki, S as Wt, a as Yi, u as Ji, w as Qi, x as Nt } from "./largeFile-DlThjw63.js";
import { E as Zi } from "./EmployeeSelectDialog-Cdnxeoz9.js";
import { L as es } from "./LinkOff-BeDdBoha.js";
import { T as ti } from "./tableScrollbars-C9bhlJjO.js";
import { u as ts } from "./useClientSort-CdwrAOWp.js";
import { u as is } from "./useColumnWidths-DSAca5rC.js";
import { F as ss } from "./ForwardMessageDialog-CaXjV13U.js";
import "./stylis-DdLD6a3t.js";
import "./FileViewer-D5PyYcLh.js";
import "./RotateRight-DbtMfjGZ.js";
import "./tiny-invariant-CopsF_GD.js";
import "./Snackbar-DxIDGM8-.js";
import "./utils-B6Q5_urv.js";
import "./profileApi-Btafs-pM.js";
import "./squircle-CQM8EvXm.js";
import "./Person-DnoEHesw.js";
const at = fi(t.jsx("path", {
    d: "M18.41 5.8 17.2 4.59c-.78-.78-2.05-.78-2.83 0l-2.68 2.68L3 15.96V20h4.04l8.74-8.74 2.63-2.63c.79-.78.79-2.05 0-2.83M6.21 18H5v-1.21l8.66-8.66 1.21 1.21zM11 20l4-4h6v4z"
  })),
  ns = ["list", "large", "xlarge"],
  rs = {
    large: {
      tile: 128,
      columns: 3
    },
    xlarge: {
      tile: 224,
      columns: 2
    }
  };
function Ht({
  items: i,
  mode: a,
  isMobile: y,
  empty: g
}) {
  const n = rs[a];
  return i.length === 0 ? t.jsx(t.Fragment, {
    children: g
  }) : t.jsx(u, {
    sx: {
      display: "grid",
      gridTemplateColumns: y ? `repeat(${n.columns}, minmax(0, 1fr))` : `repeat(auto-fill, minmax(${n.tile}px, 1fr))`,
      gap: Bt,
      p: Bt,
      alignContent: "start"
    },
    children: i.map(p => t.jsxs(u, {
      role: "button",
      tabIndex: 0,
      title: p.title,
      "data-drive-row": p.id,
      draggable: !!p.onDragStart,
      onDragStart: p.onDragStart,
      onClick: p.onOpen,
      onKeyDown: F => {
        F.key === "Enter" && p.onOpen();
      },
      onContextMenu: p.onContextMenu,
      sx: {
        position: "relative",
        minWidth: 0,
        p: 1,
        borderRadius: 1,
        cursor: "pointer",
        userSelect: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        "&:hover, &:active": {
          bgcolor: "#f8f8f7"
        },
        "&:hover .drive-grid-menu, &:focus-within .drive-grid-menu": {
          opacity: 1
        }
      },
      children: [t.jsx(u, {
        sx: {
          width: "100%",
          aspectRatio: "1 / 1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          borderRadius: 1
        },
        children: p.thumbUrl ? t.jsx(u, {
          component: "img",
          src: p.thumbUrl,
          alt: "",
          loading: "lazy",
          draggable: !1,
          sx: {
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            display: "block"
          }
        }) : p.icon(Math.round(n.tile * .6))
      }), t.jsxs(u, {
        sx: {
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: .5,
          width: "100%",
          minWidth: 0
        },
        children: [t.jsx(U, {
          sx: {
            fontSize: 14,
            textAlign: "center",
            wordBreak: "break-all",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            minWidth: 0
          },
          children: p.name
        }), p.badge]
      }), p.onMenu && t.jsx(be, {
        className: "drive-grid-menu",
        size: "small",
        "aria-label": p.menuLabel,
        onClick: F => {
          F.stopPropagation(), p.onMenu?.(F);
        },
        sx: {
          position: "absolute",
          top: 4,
          right: 4,
          bgcolor: "background.paper",
          opacity: y ? 1 : 0,
          "&:hover": {
            bgcolor: "background.paper"
          }
        },
        children: t.jsx(ct, {
          fontSize: "small"
        })
      })]
    }, p.id))
  });
}
const W = (i, a) => i instanceof Error ? i.message : a,
  Gt = {
    seq: 0,
    space: "org",
    name: "",
    parent_seq: 0,
    visibility: "all",
    member_account_seqs: []
  };
function as(i) {
  const [a, y] = f.useState(null),
    [g, n] = f.useState(!1),
    [p, F] = f.useState(!1),
    [l, V] = f.useState({
      space: "org",
      folderSeq: 0
    }),
    [A, z] = f.useState(""),
    T = f.useCallback(async (s = !1) => {
      if (i) {
        s || n(!0);
        try {
          const o = await I.list();
          y(o), Ct(i, o.storage), mi(i, o.folders);
        } catch (o) {
          s || j(W(o, d("drive.loadFailed")));
        } finally {
          s || n(!1);
        }
      }
    }, [i]);
  f.useEffect(() => {
    T();
  }, [T]), ft(["drive_file", "drive_folder"], () => {
    T(!0);
  });
  const Q = a !== null,
    h = f.useMemo(() => a?.folders ?? [], [a]),
    O = f.useMemo(() => a?.files ?? [], [a]),
    b = a?.my_account_seq ?? 0,
    k = !!a?.is_admin,
    N = a?.max_file_mb ?? 500;
  f.useEffect(() => {
    l.space === "attachments" || !l.folderSeq || !a || h.some(s => s.seq === l.folderSeq) || V({
      space: l.space,
      folderSeq: 0
    });
  }, [h, l, a]);
  const [M, te] = f.useState(null),
    [w, C] = f.useState(!1);
  f.useEffect(() => {
    l.space !== "attachments" || M || w || !i || (C(!0), I.attachments().then(te).catch(s => {
      j(W(s, d("drive.attachmentsLoadFailed"))), te([]);
    }).finally(() => C(!1)));
  }, [l, M, w, i]);
  const q = f.useMemo(() => {
      if (l.space === "attachments") return {
        folders: [],
        files: []
      };
      const s = A.trim().toLowerCase();
      return s ? {
        folders: h.filter(o => o.space === l.space && o.name.toLowerCase().includes(s)),
        files: O.filter(o => o.space === l.space && o.name.toLowerCase().includes(s))
      } : {
        folders: h.filter(o => o.space === l.space && o.parent_seq === l.folderSeq),
        files: O.filter(o => o.space === l.space && o.folder_seq === l.folderSeq)
      };
    }, [h, O, l, A]),
    $ = f.useMemo(() => {
      const s = A.trim().toLowerCase(),
        o = M ?? [];
      return s ? o.filter(c => `${c.name}
${c.source_title}`.toLowerCase().includes(s)) : o;
    }, [M, A]),
    [Me, ke] = f.useState([]),
    ae = f.useRef(0),
    Se = f.useRef(Promise.resolve()),
    qe = s => {
      if (l.space === "attachments" || !s.length) return;
      const o = Ni(s);
      if (!o.length) return;
      if (a?.storage?.over) {
        j(d("drive.storageFullUpload"));
        return;
      }
      const c = {
          space: l.space,
          folderSeq: l.folderSeq
        },
        x = o.filter(E => E.size > N * 1024 * 1024);
      x.length && j(d("drive.fileTooBig", {
        max: N,
        names: x.map(E => `${E.name}(${fe(E.size)})`).join(", ")
      }));
      for (const E of o.filter(G => !x.includes(G))) {
        const G = ae.current += 1;
        ke(X => [...X, {
          id: G,
          name: E.name,
          percent: 0
        }]), Se.current = Se.current.then(async () => {
          try {
            const X = await I.upload(E, c.space, c.folderSeq, K => ke(Ae => Ae.map(xe => xe.id === G ? {
              ...xe,
              percent: K
            } : xe)));
            y(K => K && {
              ...K,
              files: [...K.files, X]
            });
          } catch (X) {
            j(W(X, d("drive.uploadFailed", {
              name: E.name
            })));
          } finally {
            ke(X => X.filter(K => K.id !== G));
          }
        });
      }
      Se.current.then(() => T());
    },
    je = s => k || s.owner_account_seq === b,
    ye = async (s, o, c) => {
      if (s.length) try {
        const x = await I.move(s, o, c);
        x.moved && We({
          message: d("drive.movedCount", {
            count: x.moved
          }),
          delay: 800
        }), await T();
      } catch (x) {
        j(W(x, d("drive.moveFailed")));
      }
    },
    Ie = async s => {
      if (await ge({
        title: d("drive.deleteFileTitle"),
        message: d("drive.deleteFileConfirm", {
          name: s.name
        }),
        confirmText: d("drive.delete"),
        cancelText: d("drive.cancel")
      })) try {
        await I.remove(s.seq), y(c => c && {
          ...c,
          files: c.files.filter(x => x.seq !== s.seq)
        });
      } catch (c) {
        j(W(c, d("drive.fileDeleteFailed")));
      }
    },
    ie = ze({
      modalId: "drive-rename-dialog"
    }),
    me = mt({
      formId: "drive-rename-form",
      initialValues: {
        seq: 0,
        name: ""
      },
      onValidate: s => s.name.trim() ? !0 : (j(d("drive.fileNameRequired")), !1),
      onSubmit: async s => {
        F(!0);
        try {
          const o = await I.rename(s.seq, s.name.trim());
          return y(c => c && {
            ...c,
            files: c.files.map(x => x.seq === s.seq ? {
              ...x,
              name: o.file.name
            } : x)
          }), ie.close(), !0;
        } catch (o) {
          return j(W(o, d("drive.renameFailed"))), !1;
        } finally {
          F(!1);
        }
      }
    }),
    Oe = s => {
      me.setFormValues({
        seq: s.seq,
        name: s.name
      }), ie.open();
    },
    H = ze({
      modalId: "drive-folder-dialog"
    }),
    Xe = ze({
      modalId: "drive-folder-member-dialog"
    }),
    Z = mt({
      formId: "drive-folder-form",
      initialValues: Gt,
      onValidate: s => s.name.trim() ? s.space === "org" && s.visibility === "members" && !(s.member_account_seqs ?? []).length ? (j(d("drive.membersRequired")), !1) : !0 : (j(d("drive.folderNameRequired")), !1),
      onSubmit: async s => {
        const o = s.seq ? h.find(c => c.seq === s.seq) : void 0;
        if (o && o.space !== s.space && !(await he(o, s.space))) return !1;
        F(!0);
        try {
          const c = await I.folderUpsert({
            seq: s.seq || void 0,
            space: s.space,
            name: s.name.trim(),
            parent_seq: Number(s.parent_seq) || 0,
            ...(s.space === "org" ? {
              visibility: s.visibility === "all" ? "" : s.visibility,
              member_account_seqs: s.member_account_seqs ?? []
            } : {})
          });
          return H.close(), await T(), s.seq || V({
            space: c.folder.space,
            folderSeq: c.folder.seq
          }), !0;
        } catch (c) {
          return j(W(c, d("drive.folderSaveFailed"))), !1;
        } finally {
          F(!1);
        }
      }
    }),
    Ee = (s, o) => {
      const c = l.space === "attachments" ? {
        space: "org",
        folderSeq: 0
      } : l;
      Z.setFormValues({
        ...Gt,
        space: s ?? c.space,
        parent_seq: o ?? c.folderSeq
      }), H.open();
    },
    ue = s => {
      Z.setFormValues({
        seq: s.seq,
        space: s.space,
        name: s.name,
        parent_seq: s.parent_seq,
        visibility: s.visibility || "all",
        member_account_seqs: s.member_account_seqs
      }), H.open();
    };
  ft(["drive_file", "drive_folder"], s => {
    const o = Number(me.getFormValue("seq")) || 0;
    ie.isOpen && Ft(s, "drive_file", o)?.action === "delete" && (ie.close(), j(d("drive.fileDeletedByOther")));
    const c = Number(Z.getFormValue("seq")) || 0;
    H.isOpen && Ft(s, "drive_folder", c)?.action === "delete" && (H.close(), j(d("drive.folderDeletedByOther")));
  }, {
    enabled: ie.isOpen || H.isOpen
  });
  const se = s => !s || k || s.owner_account_seq === b,
    De = async s => {
      const o = Ce(s.seq);
      if (await ge({
        title: d("drive.deleteFolderTitle"),
        message: o.files || o.folders ? d("drive.deleteFolderConfirmWithContents", {
          name: s.name,
          folders: o.folders,
          files: o.files
        }) : d("drive.deleteFolderConfirm", {
          name: s.name
        }),
        confirmText: d("drive.delete"),
        cancelText: d("drive.cancel")
      })) try {
        await I.folderRemove(s.seq), await T();
      } catch (x) {
        j(W(x, d("drive.folderDeleteFailed")));
      }
    },
    Ke = async () => {
      const s = Number(Z.getFormValue("seq")) || 0;
      if (s) try {
        const o = await I.folderRemove(s);
        H.close(), We({
          message: o.files ? d("drive.folderDeletedWithFiles", {
            count: o.files
          }) : d("drive.folderDeleted"),
          delay: 1200
        }), await T();
      } catch (o) {
        j(W(o, d("drive.folderDeleteFailed")));
      }
    },
    he = (s, o) => {
      const c = Ce(s.seq),
        x = c.folders || c.files ? ` ${d("drive.spaceMoveInside", {
          folders: c.folders,
          files: c.files
        })}` : "";
      return ge({
        title: o === "personal" ? d("drive.moveToPersonalTitle") : d("drive.moveToOrgTitle"),
        message: o === "personal" ? d("drive.moveToPersonalConfirm", {
          name: s.name,
          inside: x
        }) : d("drive.moveToOrgConfirm", {
          name: s.name,
          inside: x
        }),
        confirmText: d("drive.move"),
        cancelText: d("drive.cancel")
      });
    },
    Ye = async (s, o, c) => {
      const x = h.find(G => G.seq === s);
      if (!x || ut(h, s).has(o)) return;
      const E = c ?? x.space;
      if (!(E === x.space && x.parent_seq === o) && !(E !== x.space && !(await he(x, E)))) try {
        await I.folderUpsert({
          seq: s,
          parent_seq: o,
          ...(E !== x.space ? {
            space: E
          } : {})
        }), await T();
      } catch (G) {
        j(W(G, d("drive.folderMoveFailed")));
      }
    },
    Ce = s => {
      const o = ut(h, s);
      return {
        folders: o.size - 1,
        files: O.filter(c => o.has(c.folder_seq)).length
      };
    },
    oe = () => {
      const s = a?.storage?.over_state;
      return s?.restricted ? (ge({
        title: d("drive.readBlockedTitle"),
        message: s.delete_date ? `${d("drive.readBlockedMessage")} ${d("drive.readBlockedDeleteOn", {
          date: Qt(s.delete_date)
        })}` : d("drive.readBlockedMessage"),
        confirmText: d("drive.ok"),
        cancelText: d("drive.close")
      }), !0) : !1;
    },
    L = async s => {
      if (s.source === "mail") {
        const c = s.source_key.split("/")[1] ?? "";
        if (!c) throw new Error(d("drive.attachmentNotFound"));
        return I.mailAttachment(s.source_seq, c);
      }
      if (s.source === "meeting" && !s.url) return Hi.fileDownload(s.source_seq, s.source_key);
      if (!s.url) throw new Error(d("drive.attachmentDownloadFailed"));
      const o = await fetch(s.url, {
        credentials: "include"
      });
      if (!o.ok) throw new Error(d("drive.attachmentDownloadFailed"));
      return o.blob();
    },
    P = async s => {
      try {
        await ui(await L(s), s.name);
      } catch (o) {
        j(W(o, d("drive.attachmentDownloadFailed")));
      }
    },
    Te = P,
    Re = async s => {
      if (await ge({
        title: d("drive.deleteAttachmentTitle"),
        message: d("drive.deleteAttachmentConfirm", {
          name: s.name,
          trace: _t[s.source] ? d(_t[s.source]) : ""
        }),
        confirmText: d("drive.delete"),
        cancelText: d("drive.cancel")
      })) try {
        await I.removeAttachment(s.id), te(c => c && c.filter(x => x.id !== s.id)), I.usage().then(c => Ct(i, c)).catch(() => {});
      } catch (c) {
        j(W(c, d("drive.attachmentDeleteFailed")));
      }
    },
    [ne, B] = f.useState(!1),
    ee = async s => {
      if (!ei(s.name)) return void P(s);
      B(!0);
      try {
        const o = await L(s);
        Gi.requestOpen({
          seq: 0,
          user_seq: 0,
          user_name: s.owner_name,
          name: s.name,
          size: s.size,
          created_time: s.created_time,
          table_name: "",
          blob: o
        });
      } catch (o) {
        j(W(o, d("drive.attachmentOpenFailed")));
      } finally {
        B(!1);
      }
    },
    [le, de] = f.useState(null),
    J = f.useRef(null),
    pe = s => {
      if (Qi(s.name)) return void j(d("chat.blockedFileType"));
      if (s.size > Nt * 1024 * 1024) return void j(d("chat.fileMaxMb", {
        mb: Nt
      }));
      J.current = null, de(s);
    },
    Je = s => {
      oe() || pe({
        name: s.name,
        size: s.size,
        mime: s.mime,
        load: async () => {
          const o = await fetch(I.fileUrl(s.token, !0));
          if (!o.ok) throw new Error(d("drive.attachmentDownloadFailed"));
          return o.blob();
        }
      });
    },
    Qe = s => pe({
      name: s.name,
      size: s.size,
      mime: "",
      load: () => L(s)
    }),
    Le = () => de(null),
    Ze = async s => {
      const o = le;
      if (!o) throw new Error(d("chat.sendFailed"));
      J.current || (J.current = o.load().then(x => new File([x], o.name, {
        type: o.mime || x.type || "application/octet-stream"
      })), J.current.catch(() => {
        J.current = null;
      }));
      const c = await J.current;
      if (Xi(c, Ki(c))) {
        if (Ui(s) && c.size > Wt * 1024 * 1024) throw new Error(d("chat.secretFileMaxMb", {
          mb: Wt
        }));
        await $t.send(s, {
          description: await Yi(s, c, "", () => {})
        });
        return;
      }
      await $t.send(s, {
        description: c.name,
        ...(await Ji(s, c, !0))
      });
    };
  return {
    loading: g,
    loaded: Q,
    saving: p,
    folders: h,
    files: O,
    pick: l,
    setPick: V,
    search: A,
    setSearch: z,
    shown: q,
    storage: a?.storage ?? null,
    maxFileMb: N,
    myAccountSeq: b,
    isAdmin: k,
    attachments: $,
    attachmentsLoading: w,
    downloadMailAttachment: Te,
    downloadAttachment: P,
    removeAttachment: Re,
    previewAttachment: ee,
    previewLoading: ne,
    shareItem: le,
    shareFile: Je,
    shareAttachment: Qe,
    closeShare: Le,
    shareSendTo: Ze,
    readBlocked: oe,
    uploading: Me,
    uploadFiles: qe,
    canRemoveFile: je,
    moveFiles: ye,
    removeFile: Ie,
    openRename: Oe,
    renameForm: me,
    folderForm: Z,
    modals: {
      folder: H,
      rename: ie,
      member: Xe
    },
    openFolderCreate: Ee,
    openFolderEdit: ue,
    canManageFolder: se,
    removeFolder: Ke,
    removeFolderDirect: De,
    moveFolder: Ye,
    folderContentCount: Ce,
    reload: T
  };
}
function os({
  controller: i
}) {
  const a = Ge(),
    y = Ue(),
    g = i.folderForm,
    n = b => (b?.visibility === "private" ? [...wt, hi] : wt).map(k => ({
      value: k.value,
      label: a(k.labelKey)
    })),
    p = Number(g.useFormValue("seq")) || 0,
    F = g.useFormValue("space") || "org",
    l = String(g.useFormValue("visibility") ?? ""),
    V = g.useFormValue("member_account_seqs") ?? [],
    A = p ? i.folders.find(b => b.seq === p) : void 0,
    z = i.canManageFolder(A),
    T = p ? ut(i.folders, p) : new Set(),
    Q = ["org", "personal"].filter(b => b === F || z).flatMap(b => [{
      value: `${b}:0`,
      label: a(b === "org" ? "drive.orgRoot" : "drive.personalRoot")
    }, ...ht(i.folders, b).filter(({
      folder: k
    }) => !T.has(k.seq)).map(({
      folder: k,
      depth: N
    }) => ({
      value: `${b}:${k.seq}`,
      label: `${"　".repeat(N + 1)}${k.name}`
    }))]),
    h = Number(g.useFormValue("parent_seq")) || 0,
    O = p ? i.folderContentCount(p) : {
      folders: 0,
      files: 0
    };
  return t.jsxs(t.Fragment, {
    children: [t.jsx(gt, {
      open: i.modals.folder.isOpen,
      onClose: i.modals.folder.close,
      title: a(p ? "drive.editFolder" : "drive.newFolder"),
      width: "440px",
      fullScreen: y,
      mobilePresentation: y ? "slide" : "dialog",
      backdropClick: !1,
      tabs: {
        visible: !1
      },
      titleIcons: {
        delete: {
          visible: !!p && z,
          confirmConfig: {
            title: a("drive.deleteFolderTitle"),
            message: O.files || O.folders ? a("drive.deleteThisFolderConfirmWithContents", {
              folders: O.folders,
              files: O.files
            }) : a("drive.deleteThisFolderConfirm"),
            confirmText: a("drive.delete"),
            cancelText: a("drive.cancel")
          }
        },
        print: {
          visible: !1
        },
        share: {
          visible: !1
        }
      },
      onDelete: p ? () => {
        i.removeFolder();
      } : void 0,
      scrollPastLastSection: !1,
      sections: [{
        id: "drive-folder",
        title: a("drive.folder"),
        showTitle: !1,
        children: t.jsxs(u, {
          sx: {
            display: "flex",
            flexDirection: "column",
            gap: He
          },
          children: [t.jsx(bt, {
            form: g,
            name: "name",
            label: a("drive.folderName"),
            fullWidth: !0,
            autoFocus: !p,
            onKeyDown: b => {
              b.key !== "Enter" || b.nativeEvent.isComposing || i.saving || (b.preventDefault(), g.submit());
            },
            disabled: i.saving,
            slotProps: {
              htmlInput: {
                maxLength: 100
              }
            }
          }), t.jsx(pt, {
            label: a("drive.parentFolder"),
            value: `${F}:${h}`,
            onChange: b => {
              const [k, N] = String(b.target.value).split(":");
              g.setFormValue("space", k === "personal" ? "personal" : "org"), g.setFormValue("parent_seq", Number(N) || 0);
            },
            options: Q,
            showEmptyOption: !1,
            fullWidth: !0,
            disabled: i.saving
          }), F === "org" && t.jsxs(u, {
            sx: {
              display: "flex",
              gap: He,
              alignItems: "stretch"
            },
            children: [t.jsx(u, {
              sx: {
                flex: 1,
                minWidth: 0
              },
              children: t.jsx(pt, {
                form: g,
                name: "visibility",
                label: a("drive.visibilityLabel"),
                options: n(A),
                showEmptyOption: !1,
                fullWidth: !0,
                disabled: i.saving || !z
              })
            }), l === "members" && t.jsx(re, {
              variant: "outlined",
              onClick: i.modals.member.open,
              disabled: i.saving || !z,
              sx: {
                flexShrink: 0,
                minHeight: 56,
                fontSize: 16
              },
              children: a("drive.viewerCount", {
                count: V.length
              })
            })]
          }), F === "personal" && t.jsx(U, {
            sx: {
              fontSize: 14,
              color: "text.secondary"
            },
            children: a("drive.personalOnlyMe")
          })]
        })
      }],
      actions: {
        visible: !0,
        showCancelButton: !0,
        right: t.jsx(re, {
          variant: "contained",
          onClick: () => {
            g.submit();
          },
          disabled: i.saving,
          sx: {
            minWidth: 96
          },
          children: i.saving ? t.jsx(Ne, {
            size: 20,
            color: "inherit"
          }) : a("drive.save")
        })
      }
    }), t.jsx(Zi, {
      open: i.modals.member.isOpen,
      title: a("drive.pickViewers"),
      excludeSelf: !0,
      initialAccountSeqs: V,
      onClose: i.modals.member.close,
      onApply: b => {
        g.setFormValue("member_account_seqs", b.map(k => Number(k.account_seq) || 0).filter(Boolean)), i.modals.member.close();
      }
    })]
  });
}
function ls({
  controller: i
}) {
  const a = Ge(),
    y = Ue();
  return t.jsx(gt, {
    open: i.modals.rename.isOpen,
    onClose: i.modals.rename.close,
    title: a("drive.rename"),
    width: "440px",
    fullScreen: y,
    mobilePresentation: y ? "slide" : "dialog",
    backdropClick: !1,
    tabs: {
      visible: !1
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
    scrollPastLastSection: !1,
    sections: [{
      id: "drive-rename",
      title: a("drive.name"),
      showTitle: !1,
      children: t.jsx(bt, {
        form: i.renameForm,
        name: "name",
        label: a("drive.fileName"),
        fullWidth: !0,
        autoFocus: !0,
        onKeyDown: g => {
          g.key !== "Enter" || g.nativeEvent.isComposing || i.saving || (g.preventDefault(), i.renameForm.submit());
        },
        disabled: i.saving,
        slotProps: {
          htmlInput: {
            maxLength: 255
          }
        }
      })
    }],
    actions: {
      visible: !0,
      showCancelButton: !0,
      right: t.jsx(re, {
        variant: "contained",
        onClick: () => {
          i.renameForm.submit();
        },
        disabled: i.saving,
        sx: {
          minWidth: 96
        },
        children: i.saving ? t.jsx(Ne, {
          size: 20,
          color: "inherit"
        }) : a("drive.save")
      })
    }
  });
}
function ds({
  controller: i
}) {
  const a = Ge(),
    y = Ue(),
    g = i.form,
    n = String(g.useFormValue("expire") ?? "7"),
    p = l => l.revoked_time ? a("drive.shareRevokedAt", {
      time: l.revoked_time.slice(0, 16)
    }) : l.active ? a("drive.shareExpiresAt", {
      date: l.expire_time.slice(0, 16)
    }) : a("drive.shareExpiredAt", {
      date: l.expire_time.slice(0, 16)
    }),
    F = [{
      id: "status",
      text: a("drive.shareColLink"),
      primary: !0,
      mobile: "title",
      render: l => t.jsxs(u, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 1,
          minWidth: 0
        },
        children: [t.jsx(pi, {
          size: "small",
          label: l.active ? a("drive.shareOpen") : l.revoked_time ? a("drive.shareRevokedChip") : a("drive.shareExpiredChip"),
          color: l.active ? "success" : "default",
          variant: l.active ? "filled" : "outlined",
          sx: {
            fontSize: 14
          }
        }), l.has_password ? t.jsx($e, {
          "aria-label": a("drive.sharePasswordOn"),
          sx: {
            fontSize: 16,
            color: "text.secondary",
            flexShrink: 0
          }
        }) : null, t.jsx(U, {
          noWrap: !0,
          sx: {
            fontSize: 14,
            color: "text.secondary"
          },
          children: p(l)
        })]
      })
    }, {
      id: "created",
      text: a("drive.shareColCreated"),
      width: 150,
      mobile: "sub",
      render: l => `${l.created_name || "—"} · ${l.created_time.slice(0, 10)}`
    }, {
      id: "views",
      text: a("drive.shareColViews"),
      width: 150,
      render: l => a("drive.shareViewCount", {
        views: l.view_count,
        downloads: l.download_count
      })
    }, {
      id: "actions",
      text: "",
      width: 56,
      align: "right",
      mobile: "badge",
      render: l => l.can_revoke && l.active ? t.jsx(xt, {
        title: a("drive.shareRevoke"),
        children: t.jsx(be, {
          size: "small",
          onClick: () => {
            i.revoke(l);
          },
          "aria-label": a("drive.shareRevoke"),
          children: t.jsx(es, {
            fontSize: "small"
          })
        })
      }) : null
    }];
  return t.jsx(gt, {
    open: i.modal.isOpen,
    onClose: i.close,
    title: a("drive.externalShareLink"),
    maxWidth: "md",
    fullScreen: y,
    mobilePresentation: y ? "slide" : "dialog",
    backdropClick: !1,
    tabs: {
      visible: !1
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
    scrollPastLastSection: !1,
    sections: [{
      id: "drive-share-target",
      title: a("drive.shareFile"),
      showTitle: !1,
      children: t.jsxs(u, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          minWidth: 0
        },
        children: [t.jsx(u, {
          sx: {
            flexShrink: 0,
            display: "flex"
          },
          children: t.jsx(vt, {
            fileName: i.target?.name ?? "",
            mime: "",
            size: 36
          })
        }), t.jsxs(u, {
          sx: {
            minWidth: 0
          },
          children: [t.jsx(U, {
            sx: {
              fontSize: 17,
              fontWeight: 600,
              wordBreak: "break-all",
              lineHeight: 1.4
            },
            children: i.target?.name ?? ""
          }), t.jsx(xt, {
            title: a("drive.shareHelpClosed"),
            placement: "bottom-start",
            children: t.jsx(U, {
              sx: {
                fontSize: 14,
                color: "text.secondary",
                wordBreak: "keep-all"
              },
              children: a("drive.shareHelpAnyone")
            })
          })]
        })]
      })
    }, i.enabled ? {
      id: "drive-share-new",
      title: a("drive.shareNewLink"),
      children: t.jsxs(u, {
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: He
        },
        children: [t.jsxs(u, {
          sx: {
            display: "grid",
            gap: He,
            alignItems: "stretch",
            gridTemplateColumns: {
              xs: "minmax(0, 1fr)",
              sm: n === "date" ? "repeat(3, minmax(0, 1fr)) auto" : "repeat(2, minmax(0, 1fr)) auto"
            }
          },
          children: [t.jsx(pt, {
            form: g,
            name: "expire",
            label: a("drive.shareExpireLabel"),
            options: [{
              value: "1",
              label: a("drive.shareExpire1")
            }, {
              value: "7",
              label: a("drive.shareExpire7")
            }, {
              value: "30",
              label: a("drive.shareExpire30")
            }, {
              value: "date",
              label: a("drive.shareExpireDate")
            }],
            showEmptyOption: !1,
            fullWidth: !0,
            disabled: i.saving
          }), n === "date" ? t.jsx(xi, {
            form: g,
            name: "expire_date",
            label: a("drive.shareExpireDateLabel"),
            fullWidth: !0,
            disabled: i.saving
          }) : null, t.jsx(bt, {
            form: g,
            name: "password",
            label: a("drive.sharePasswordLabel"),
            fullWidth: !0,
            type: "password",
            autoComplete: "new-password",
            disabled: i.saving,
            slotProps: {
              htmlInput: {
                maxLength: 64
              }
            }
          }), t.jsx(re, {
            variant: "contained",
            disableElevation: !0,
            onClick: () => {
              g.submit();
            },
            disabled: i.saving || !i.target,
            sx: {
              minWidth: 120,
              fontSize: 15,
              "&.MuiButton-sizeMedium": {
                minHeight: 57
              }
            },
            children: i.saving ? t.jsx(Ne, {
              size: 20,
              color: "inherit"
            }) : a("drive.shareCreate")
          })]
        }), i.created ? t.jsxs(u, {
          sx: {
            display: "flex",
            flexDirection: "column",
            gap: 1.25,
            p: 2,
            borderRadius: 2,
            border: "1px solid",
            borderColor: "success.light",
            bgcolor: "rgba(22, 163, 74, 0.06)"
          },
          children: [t.jsxs(u, {
            sx: {
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              columnGap: 1,
              rowGap: .25,
              color: "success.dark"
            },
            children: [t.jsx(vi, {
              sx: {
                fontSize: 20
              }
            }), t.jsx(U, {
              sx: {
                fontSize: 15,
                fontWeight: 600,
                whiteSpace: "nowrap"
              },
              children: a("drive.shareCreatedLink")
            }), t.jsx(U, {
              sx: {
                fontSize: 14,
                color: "text.secondary",
                wordBreak: "keep-all",
                flexBasis: {
                  xs: "100%",
                  sm: "auto"
                }
              },
              children: a("drive.shareCreatedHint")
            })]
          }), t.jsxs(u, {
            sx: {
              display: "flex",
              gap: 1,
              alignItems: "stretch",
              flexDirection: {
                xs: "column",
                sm: "row"
              }
            },
            children: [t.jsx(gi, {
              value: i.created,
              fullWidth: !0,
              size: "small",
              slotProps: {
                htmlInput: {
                  readOnly: !0,
                  "aria-label": a("drive.shareCreatedLink"),
                  style: {
                    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                    fontSize: 14
                  }
                }
              },
              sx: {
                bgcolor: "background.paper"
              },
              onFocus: l => l.target.select()
            }), t.jsx(re, {
              variant: "contained",
              color: "success",
              disableElevation: !0,
              startIcon: t.jsx(bi, {}),
              onClick: () => {
                i.copyCreated();
              },
              sx: {
                flexShrink: 0,
                minWidth: 96
              },
              children: a("drive.shareCopy")
            })]
          })]
        }) : null]
      })
    } : {
      id: "drive-share-new",
      title: a("drive.shareNewLink"),
      children: t.jsx(Zt, {
        severity: "info",
        sx: {
          fontSize: 14,
          wordBreak: "keep-all"
        },
        children: a("drive.shareDisabledNotice")
      })
    }, {
      id: "drive-share-list",
      title: a("drive.shareCreatedLinks"),
      children: i.loading ? t.jsx(u, {
        sx: {
          display: "flex",
          justifyContent: "center",
          py: 2
        },
        children: t.jsx(Ne, {
          size: 24
        })
      }) : i.items.length ? t.jsx(ki, {
        scrollbars: ti,
        variant: "notion",
        framed: !1,
        showPaper: !1,
        autoHeight: !0,
        mobile: y,
        columns: F,
        data: i.items,
        totalCount: i.items.length,
        getRowId: l => String(l.seq)
      }) : t.jsx(U, {
        sx: {
          fontSize: 14,
          color: "text.secondary"
        },
        children: a("drive.shareNoLinks")
      })
    }],
    actions: {
      visible: !1
    }
  });
}
const ot = (i, a) => i instanceof Error && i.message ? i.message : a,
  lt = {
    expire: "7",
    expire_date: "",
    password: ""
  };
async function Ut(i) {
  try {
    return await navigator.clipboard.writeText(i), !0;
  } catch {
    return !1;
  }
}
function cs() {
  const i = ze({
      modalId: "drive-share-link-dialog"
    }),
    [a, y] = f.useState(null),
    [g, n] = f.useState([]),
    [p, F] = f.useState(!1),
    [l, V] = f.useState(!1),
    [A, z] = f.useState(""),
    [T, Q] = f.useState(!0),
    h = f.useRef(null),
    O = f.useCallback(async (w = !1) => {
      const C = h.current;
      if (C) {
        w || F(!0);
        try {
          const q = await I.shareLinks(C.ref);
          h.current === C && (n(q.items), Q(q.enabled));
        } catch (q) {
          w || j(ot(q, d("drive.shareLoadFailed")));
        } finally {
          w || F(!1);
        }
      }
    }, []),
    b = mt({
      formId: "drive-share-link-form",
      initialValues: lt,
      onValidate: w => {
        const C = String(w.password ?? "");
        return C && (C.length < 4 || C.length > 64) ? (j(d("drive.sharePasswordLength")), !1) : w.expire === "date" && !w.expire_date ? (j(d("drive.shareChooseDate")), !1) : !0;
      },
      onSubmit: async w => {
        const C = h.current;
        if (!C) return !1;
        V(!0);
        try {
          const q = await I.createShareLink(C.ref, {
            ...(w.expire === "date" ? {
              expire_date: w.expire_date
            } : {
              expire_days: Number(w.expire)
            }),
            password: w.password || ""
          });
          b.setFormValues(lt), z(q.link), await O(!0);
          const $ = await Ut(q.link);
          return We({
            message: $ ? d("drive.shareCreatedCopied") : d("drive.shareCreated"),
            delay: 1500
          }), !0;
        } catch (q) {
          return j(ot(q, d("drive.shareCreateFailed"))), !1;
        } finally {
          V(!1);
        }
      }
    }),
    k = (w, C) => {
      const q = {
        ref: w,
        name: C
      };
      h.current = q, y(q), n([]), z(""), b.setFormValues(lt), i.open(), O();
    },
    N = () => {
      i.close(), h.current = null, z("");
    },
    M = async () => {
      A && (await Ut(A)) ? We({
        message: d("drive.shareLinkCopied"),
        delay: 1200
      }) : j(d("drive.shareClipboardFailed"));
    },
    te = async w => {
      if (await ge({
        title: d("drive.shareRevokeTitle"),
        message: d("drive.shareRevokeMessage"),
        confirmText: d("drive.shareRevoke"),
        cancelText: d("drive.cancel")
      })) try {
        await I.revokeShareLink(w.seq), await O(!0);
      } catch (q) {
        j(ot(q, d("drive.shareRevokeFailed")));
      }
    };
  return ft(["drive_share_link"], () => {
    i.isOpen && h.current && O(!0);
  }), {
    modal: i,
    form: b,
    target: a,
    items: g,
    loading: p,
    saving: l,
    created: A,
    enabled: T,
    open: k,
    close: N,
    copyCreated: M,
    revoke: te
  };
}
const Xt = 48,
  fs = "#9b9a97",
  Kt = 57,
  ve = ".list-layout > :last-child";
function dt({
  text: i
}) {
  return t.jsx(u, {
    sx: {
      py: 6,
      px: 2,
      textAlign: "center",
      color: fs,
      fontSize: 14,
      wordBreak: "keep-all"
    },
    children: i
  });
}
const ii = "taskham:drive.views",
  ms = 200;
function Yt() {
  try {
    const i = JSON.parse(window.localStorage.getItem(ii) || "{}");
    return i && typeof i == "object" ? i : {};
  } catch {
    return {};
  }
}
function us(i) {
  try {
    window.localStorage.setItem(ii, JSON.stringify(i));
  } catch {}
}
const hs = /\.(png|jpe?g|gif|webp|bmp)$/i;
function Jt(i) {
  const a = /^\/api\/v1\/files\/([0-9a-f-]{36})$/i.exec(i.url);
  return a ? a[1] : i.source === "meeting" && !i.url && /^[0-9a-f-]{36}$/i.test(i.source_key) ? i.source_key : "";
}
const we = i => i.kind === "folder" ? i.folder.name : i.kind === "file" ? i.file.name : i.attachment.name;
function Ks() {
  const i = Ge(),
    a = is("drive.list"),
    y = Ue(),
    g = Si()?.seq ?? 0,
    n = as(g),
    p = cs(),
    F = f.useRef(null),
    [l, V] = f.useState(null),
    [A, z] = f.useState(!1),
    [T, Q] = f.useState(!1),
    [h, O] = f.useState(null),
    [b, k] = f.useState(!1),
    N = f.useRef({
      x: 0,
      y: 0
    });
  f.useEffect(() => {
    const e = r => {
      N.current = {
        x: r.clientX,
        y: r.clientY
      };
    };
    return window.addEventListener("pointerdown", e, !0), () => window.removeEventListener("pointerdown", e, !0);
  }, []);
  const [M, te] = f.useState(null),
    [w, C] = f.useState(!1),
    q = (e, r) => {
      e.preventDefault(), e.stopPropagation(), te({
        x: e.clientX,
        y: e.clientY,
        folder: r
      }), C(!0);
    },
    [$, Me] = f.useState(null),
    [ke, ae] = f.useState(!1),
    Se = (e, r, m) => {
      e.preventDefault(), e.stopPropagation(), Me({
        x: e.clientX,
        y: e.clientY,
        space: r,
        folderSeq: m
      }), ae(!0);
    },
    qe = (e, r) => {
      e.preventDefault(), e.stopPropagation(), V({
        x: e.clientX,
        y: e.clientY,
        file: r
      }), z(!0);
    },
    je = (e, r) => {
      e.preventDefault(), e.stopPropagation(), O({
        x: e.clientX,
        y: e.clientY,
        item: r
      }), k(!0);
    },
    ye = ze({
      modalId: "drive-share",
      onClose: n.closeShare
    });
  f.useEffect(() => {
    n.shareItem && ye.open();
  }, [n.shareItem]);
  const [Ie, ie] = f.useState(Yt),
    me = [{
      value: "list",
      title: i("drive.viewList"),
      icon: t.jsx(zt, {
        fontSize: "small"
      })
    }, {
      value: "large",
      title: i("drive.viewLarge"),
      icon: t.jsx(Pt, {
        fontSize: "small"
      })
    }, {
      value: "xlarge",
      title: i("drive.viewXLarge"),
      icon: t.jsx(At, {
        fontSize: "small"
      })
    }],
    [Oe, H] = f.useState(null),
    [Xe, Z] = f.useState(!1),
    [Ee, ue] = f.useState(null),
    se = ji(),
    De = f.useRef(0),
    Ke = f.useRef(Date.now());
  f.useEffect(() => {
    !se || se.id === De.current || (De.current = se.id, !(se.at < Ke.current - 3e3) && (se.kind === "folder" ? n.openFolderCreate("org", 0) : F.current?.click()));
  }, [se]);
  const {
      place: he,
      folder: Ye
    } = di(),
    Ce = ci(),
    oe = `${he === "personal" ? "personal" : he === "attachments" ? "attachments" : "shared"}/${he === "attachments" ? 0 : Number(Ye) || 0}`,
    L = n.pick.space === "attachments" ? "attachments/0" : `${n.pick.space === "org" ? "shared" : "personal"}/${n.pick.folderSeq}`,
    P = ns.includes(Ie[L]) ? Ie[L] : "list",
    Te = e => {
      const r = {
        ...Yt()
      };
      delete r[L], e !== "list" && (r[L] = e);
      const m = Object.keys(r);
      for (const S of m.slice(0, Math.max(0, m.length - ms))) delete r[S];
      us(r), ie(r);
    };
  f.useEffect(() => {
    if (oe === L) return;
    const [e, r] = oe.split("/");
    e === "attachments" ? n.setPick({
      space: "attachments"
    }) : n.setPick({
      space: e === "personal" ? "personal" : "org",
      folderSeq: Number(r) || 0
    });
  }, [oe]);
  const Re = f.useRef(L);
  f.useEffect(() => {
    Re.current !== L && (Re.current = L, oe !== L && Ce(`/dashboard/drive/${L.replace(/\/0$/, "")}`));
  }, [L]);
  const ne = f.useRef({
    c: n,
    openFolderMenuAt: (e, r, m) => {},
    openPlaceMenuAt: (e, r, m, S) => {}
  });
  ne.current = {
    c: n,
    openFolderMenuAt: (e, r, m) => {
      te({
        x: e,
        y: r,
        folder: m
      }), C(!0);
    },
    openPlaceMenuAt: (e, r, m, S) => {
      Me({
        x: e,
        y: r,
        space: m,
        folderSeq: S
      }), ae(!0);
    }
  }, f.useEffect(() => {
    Mt({
      loaded: n.loaded,
      folders: n.folders,
      files: n.files,
      pick: n.pick,
      setPick: e => ne.current.c.setPick(e),
      moveFiles: (e, r, m) => ne.current.c.moveFiles(e, r, m),
      moveFolder: (e, r, m) => ne.current.c.moveFolder(e, r, m),
      openFolderMenu: (e, r, m) => ne.current.openFolderMenuAt(e, r, m),
      openPlaceMenu: (e, r, m, S) => ne.current.openPlaceMenuAt(e, r, m, S)
    });
  }, [n.loaded, n.folders, n.files, n.pick]), f.useEffect(() => () => Mt(null), []);
  const B = n.pick.space === "attachments",
    ee = B ? n.attachments.map(e => ({
      kind: "attachment",
      id: `a-${e.id}`,
      attachment: e
    })) : [...n.shown.folders.map(e => ({
      kind: "folder",
      id: `d-${e.seq}`,
      folder: e
    })), ...n.shown.files.map(e => ({
      kind: "file",
      id: `f-${e.seq}`,
      file: e
    }))],
    le = B ? n.attachmentsLoading : n.loading,
    de = e => {
      if (e.kind === "attachment") return "";
      const r = e.kind === "folder" ? e.folder.space : e.file.space,
        m = e.kind === "folder" ? e.folder.parent_seq : e.file.folder_seq,
        S = i(r === "org" ? "drive.orgRoot" : "drive.personalRoot");
      return m > 0 ? `${S} / ${Oi(n.folders, m)}` : S;
    },
    J = !!n.search.trim() && !B,
    [pe, Je] = f.useState([]),
    Qe = B && pe.length > 0 ? ee.filter(e => e.kind === "attachment" && pe.includes(e.attachment.source)) : ee,
    {
      rows: Le,
      tableSort: Ze
    } = ts(Qe, {
      name: we,
      size: e => e.kind === "file" ? e.file.size : e.kind === "attachment" ? e.attachment.size : "",
      owner: e => e.kind === "folder" ? e.folder.owner_name : e.kind === "file" ? e.file.owner_name : e.attachment.owner_name,
      when: e => e.kind === "file" ? e.file.created_time : e.kind === "attachment" ? e.attachment.created_time : "",
      "source-kind": e => e.kind === "attachment" ? _e(e.attachment.source) : "",
      source: e => e.kind === "attachment" ? e.attachment.source_title : "",
      folder: de
    }),
    s = [...Le.filter(e => e.kind === "folder"), ...Le.filter(e => e.kind !== "folder")],
    o = n.search.trim() ? i("drive.searchEmpty") : i(B ? "drive.attachmentsEmpty" : "drive.folderEmpty"),
    c = e => {
      if (e.source === "mail") return Ei(e.source_seq);
      e.source === "task" ? Wi(e.source_seq) : e.source === "chat" ? Vi(e.source_seq) : e.source === "meeting" ? $i(e.source_seq) : e.source === "board" ? Bi(e.source_seq, e.source_key) : Pi(e.source_seq);
    },
    x = e => {
      e.kind === "folder" ? (n.setSearch(""), n.setPick({
        space: e.folder.space,
        folderSeq: e.folder.seq
      })) : e.kind === "file" && n.readBlocked() || (e.kind === "file" ? window.open(I.fileUrl(e.file.token, !Tt(e.file)), Tt(e.file) ? "_blank" : "_self") : (O({
        ...N.current,
        item: e.attachment
      }), k(!0)));
    },
    E = (e, r) => {
      e.stopPropagation();
      const m = e.currentTarget.getBoundingClientRect();
      V(m.width > 0 ? {
        x: m.left,
        y: m.bottom,
        file: r
      } : {
        anchor: e.currentTarget,
        file: r
      }), z(!0);
    },
    G = l?.x !== void 0 && l?.y !== void 0 ? {
      anchorReference: "anchorPosition",
      anchorPosition: {
        top: l.y,
        left: l.x
      }
    } : {
      anchorEl: l?.anchor ?? null
    },
    X = () => F.current?.click(),
    K = e => [{
      space: e,
      seq: 0,
      name: i(e === "org" ? "drive.orgRoot" : "drive.personalRoot"),
      depth: 0
    }, ...ht(n.folders, e).map(({
      folder: r,
      depth: m
    }) => ({
      space: e,
      seq: r.seq,
      name: r.name,
      depth: m + 1
    }))],
    Ae = t.jsxs(t.Fragment, {
      children: [t.jsx(os, {
        controller: n
      }), t.jsx(ls, {
        controller: n
      }), t.jsx(ds, {
        controller: p
      }), t.jsx(ss, {
        open: ye.isOpen && n.shareItem !== null,
        onClose: ye.close,
        payload: null,
        title: n.shareItem ? i("drive.shareTitle", {
          name: n.shareItem.name
        }) : i("drive.shareToChat"),
        sendTo: n.shareSendTo
      }), t.jsxs(ce, {
        open: b,
        onClose: () => k(!1),
        anchorReference: "anchorPosition",
        anchorPosition: h ? {
          top: h.y,
          left: h.x
        } : void 0,
        transitionDuration: 0,
        children: [h && ei(h.item.name) && t.jsxs(_, {
          onClick: () => {
            k(!1), n.previewAttachment(h.item);
          },
          sx: {
            fontSize: 15
          },
          children: [t.jsx(D, {
            children: t.jsx(yi, {
              fontSize: "small"
            })
          }), i("drive.preview")]
        }), t.jsxs(_, {
          onClick: () => {
            k(!1), h && n.downloadAttachment(h.item);
          },
          sx: {
            fontSize: 15
          },
          children: [t.jsx(D, {
            children: t.jsx(qt, {
              fontSize: "small"
            })
          }), i("drive.download")]
        }), t.jsxs(_, {
          onClick: () => {
            k(!1), h && n.shareAttachment(h.item);
          },
          sx: {
            fontSize: 15
          },
          children: [t.jsx(D, {
            children: t.jsx(It, {
              fontSize: "small"
            })
          }), i("drive.shareToChat")]
        }), h && Jt(h.item) && t.jsxs(_, {
          onClick: () => {
            k(!1), p.open({
              uuid: Jt(h.item)
            }, h.item.name);
          },
          sx: {
            fontSize: 15
          },
          children: [t.jsx(D, {
            children: t.jsx(Ot, {
              fontSize: "small"
            })
          }), i("drive.externalShareLink")]
        }), t.jsxs(_, {
          onClick: () => {
            k(!1), h && c(h.item);
          },
          sx: {
            fontSize: 15
          },
          children: [t.jsx(D, {
            children: t.jsx(it, {
              fontSize: "small"
            })
          }), h ? i("drive.openSourceOf", {
            source: _e(h.item.source)
          }) : i("drive.openSource")]
        }), h?.item.can_delete && t.jsxs(_, {
          onClick: () => {
            k(!1), n.removeAttachment(h.item);
          },
          sx: {
            fontSize: 15,
            color: "error.main"
          },
          children: [t.jsx(D, {
            children: t.jsx(st, {
              fontSize: "small",
              color: "error"
            })
          }), i("drive.delete")]
        })]
      }), t.jsx(u, {
        component: "input",
        ref: F,
        type: "file",
        "aria-label": i("drive.filesToUpload"),
        multiple: !0,
        hidden: !0,
        onChange: e => {
          const r = Array.from(e.target.files ?? []);
          e.target.value = "", n.uploadFiles(r);
        }
      }), t.jsxs(ce, {
        ...G,
        open: A,
        onClose: () => z(!1),
        transitionDuration: 0,
        children: [t.jsxs(_, {
          component: "a",
          href: l ? I.fileUrl(l.file.token, !0) : void 0,
          onClick: e => {
            z(!1), n.readBlocked() && e.preventDefault();
          },
          sx: {
            fontSize: 15
          },
          children: [t.jsx(D, {
            children: t.jsx(qt, {
              fontSize: "small"
            })
          }), i("drive.downloadAction")]
        }), t.jsxs(_, {
          onClick: () => {
            z(!1), l && n.shareFile(l.file);
          },
          sx: {
            fontSize: 15
          },
          children: [t.jsx(D, {
            children: t.jsx(It, {
              fontSize: "small"
            })
          }), i("drive.shareToChat")]
        }), t.jsxs(_, {
          onClick: () => {
            z(!1), l && !n.readBlocked() && p.open({
              file_seq: l.file.seq
            }, l.file.name);
          },
          sx: {
            fontSize: 15
          },
          children: [t.jsx(D, {
            children: t.jsx(Ot, {
              fontSize: "small"
            })
          }), i("drive.externalShareLink")]
        }), t.jsxs(_, {
          onClick: () => {
            z(!1), l && n.openRename(l.file);
          },
          sx: {
            fontSize: 15
          },
          children: [t.jsx(D, {
            children: t.jsx(at, {
              fontSize: "small"
            })
          }), i("drive.rename")]
        }), t.jsxs(_, {
          onClick: () => {
            z(!1), Q(!0);
          },
          sx: {
            fontSize: 15
          },
          children: [t.jsx(D, {
            children: t.jsx(Ci, {
              fontSize: "small"
            })
          }), i("drive.move")]
        }), l && n.canRemoveFile(l.file) && t.jsxs(_, {
          onClick: () => {
            z(!1), n.removeFile(l.file);
          },
          sx: {
            fontSize: 15,
            color: "error.main"
          },
          children: [t.jsx(D, {
            children: t.jsx(st, {
              fontSize: "small",
              color: "error"
            })
          }), i("drive.delete")]
        })]
      }), t.jsxs(ce, {
        open: w,
        transitionDuration: 0,
        onClose: () => C(!1),
        anchorReference: "anchorPosition",
        anchorPosition: M ? {
          top: M.y,
          left: M.x
        } : void 0,
        children: [t.jsxs(_, {
          onClick: () => {
            C(!1), M && x({
              kind: "folder",
              id: `d-${M.folder.seq}`,
              folder: M.folder
            });
          },
          sx: {
            fontSize: 15
          },
          children: [t.jsx(D, {
            children: t.jsx(Fi, {
              fontSize: "small"
            })
          }), i("drive.open")]
        }), t.jsxs(_, {
          onClick: () => {
            C(!1), M && n.openFolderCreate(M.folder.space, M.folder.seq);
          },
          sx: {
            fontSize: 15
          },
          children: [t.jsx(D, {
            children: t.jsx(nt, {
              fontSize: "small"
            })
          }), i("drive.newSubfolder")]
        }), t.jsxs(_, {
          onClick: () => {
            C(!1), M && n.openFolderEdit(M.folder);
          },
          sx: {
            fontSize: 15
          },
          children: [t.jsx(D, {
            children: t.jsx(at, {
              fontSize: "small"
            })
          }), i("drive.edit")]
        }), M && n.canManageFolder(M.folder) && t.jsxs(_, {
          onClick: () => {
            C(!1), n.removeFolderDirect(M.folder);
          },
          sx: {
            fontSize: 15,
            color: "error.main"
          },
          children: [t.jsx(D, {
            children: t.jsx(st, {
              fontSize: "small",
              color: "error"
            })
          }), i("drive.delete")]
        })]
      }), t.jsxs(ce, {
        open: ke,
        transitionDuration: 0,
        onClose: () => ae(!1),
        anchorReference: "anchorPosition",
        anchorPosition: $ ? {
          top: $.y,
          left: $.x
        } : void 0,
        children: [t.jsxs(_, {
          onClick: () => {
            ae(!1), $ && n.openFolderCreate($.space, $.folderSeq);
          },
          sx: {
            fontSize: 15
          },
          children: [t.jsx(D, {
            children: t.jsx(nt, {
              fontSize: "small"
            })
          }), i("drive.newFolder")]
        }), t.jsxs(_, {
          onClick: () => {
            ae(!1), $ && (n.setPick({
              space: $.space,
              folderSeq: $.folderSeq
            }), X());
          },
          sx: {
            fontSize: 15
          },
          children: [t.jsx(D, {
            children: t.jsx(rt, {
              fontSize: "small"
            })
          }), i("drive.uploadFiles")]
        })]
      }), t.jsxs(ce, {
        ...G,
        open: T,
        onClose: () => Q(!1),
        slotProps: {
          paper: {
            sx: {
              maxHeight: 420
            }
          }
        },
        children: [t.jsx(_, {
          disabled: !0,
          sx: {
            fontSize: 14,
            opacity: "1 !important",
            color: "text.secondary"
          },
          children: i("drive.moveTarget")
        }), [...K("org"), ...K("personal")].map(e => t.jsx(_, {
          selected: l?.file.space === e.space && l?.file.folder_seq === e.seq,
          onClick: () => {
            Q(!1), l && n.moveFiles([l.file.seq], e.space, e.seq);
          },
          sx: {
            fontSize: 15,
            pl: `${16 + e.depth * 16}px`,
            fontWeight: e.depth === 0 ? 600 : 400
          },
          children: e.name
        }, `${e.space}-${e.seq}`))]
      })]
    }),
    xe = Qt,
    Pe = n.storage?.over_state,
    et = Pe ? t.jsx(Zt, {
      severity: "error",
      sx: {
        mb: 1.5,
        fontSize: 14,
        wordBreak: "keep-all"
      },
      children: t.jsxs(u, {
        component: "ul",
        sx: {
          listStyleType: "disc",
          m: 0,
          pl: 2.5
        },
        children: [t.jsx("li", {
          children: Pe.restricted ? i("drive.overRestricted") : i("drive.overWarning", {
            date: xe(Pe.restrict_date)
          })
        }), t.jsx("li", {
          children: i("drive.readBlockedDeleteOn", {
            date: xe(Pe.delete_date)
          })
        }), t.jsx("li", {
          children: i("drive.overHowToFix")
        })]
      })
    }) : null,
    Be = n.uploading.length > 0 && t.jsx(u, {
      sx: {
        display: "flex",
        flexDirection: "column",
        gap: 1,
        p: 1.5
      },
      children: n.uploading.map(e => t.jsxs(u, {
        children: [t.jsx(U, {
          sx: {
            fontSize: 14,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          },
          children: i("drive.uploadingItem", {
            name: e.name,
            percent: e.percent
          })
        }), t.jsx(Et, {
          variant: "determinate",
          value: e.percent
        })]
      }, e.id))
    }),
    kt = e => e.kind === "folder" ? t.jsx(Rt, {
      fontSize: "small",
      sx: {
        color: Lt
      }
    }) : t.jsx(vt, {
      fileName: we(e),
      mime: e.kind === "file" ? e.file.mime : "",
      size: 20
    }),
    si = e => {
      const r = J ? de(e) : "";
      if (e.kind === "folder") return [r, e.folder.owner_name].filter(Boolean).join(" · ");
      if (e.kind === "file") return [r, fe(e.file.size), e.file.owner_name, Ve(e.file.created_time)].filter(Boolean).join(" · ");
      const m = e.attachment;
      return [`${_e(m.source)} · ${m.source_title}`, m.size ? fe(m.size) : "", m.owner_name, Ve(m.created_time)].filter(Boolean).join(" · ");
    },
    ni = (e, r) => {
      const m = e.currentTarget.getBoundingClientRect();
      O({
        x: m.left,
        y: m.bottom,
        item: r
      }), k(!0);
    },
    St = e => e.map(r => {
      const m = we(r),
        S = J ? de(r) : "",
        v = hs.test(m),
        Y = r.kind === "file" && v ? I.fileUrl(r.file.token) : r.kind === "attachment" && v && r.attachment.url.startsWith("/api/v1/files/") ? `${r.attachment.url}?thumb=md` : "";
      return {
        id: r.id,
        name: m,
        thumbUrl: Y,
        title: S ? `${m}
${S}` : m,
        icon: R => r.kind === "folder" ? t.jsx(Rt, {
          sx: {
            fontSize: R,
            color: Lt
          }
        }) : t.jsx(vt, {
          fileName: m,
          mime: r.kind === "file" ? r.file.mime : "",
          size: R
        }),
        badge: r.kind === "folder" && r.folder.visibility !== "" ? t.jsx($e, {
          "aria-label": i("drive.restrictedFolder"),
          sx: {
            fontSize: 16,
            color: "text.secondary",
            flexShrink: 0,
            mt: "2px"
          }
        }) : void 0,
        onDragStart: r.kind === "file" ? R => R.dataTransfer.setData(Dt, String(r.file.seq)) : void 0,
        onMenu: r.kind === "file" ? R => E(R, r.file) : r.kind === "attachment" ? R => ni(R, r.attachment) : void 0,
        menuLabel: i("drive.rowMenu", {
          name: m
        }),
        onOpen: () => x(r),
        onContextMenu: R => r.kind === "folder" ? q(R, r.folder) : r.kind === "file" ? qe(R, r.file) : je(R, r.attachment)
      };
    }),
    jt = Ti(le),
    Fe = Ai(),
    tt = !!Fe.useValue("open");
  f.useEffect(() => {
    if (y) return Fe.setValue("active", !0), () => {
      Fe.setValue("active", !1), Fe.setValue("open", !1);
    };
  }, [y, Fe]);
  const yt = n.setSearch;
  if (f.useEffect(() => {
    y && !tt && yt("");
  }, [y, tt, yt]), y) {
    const e = n.pick.space === "attachments" ? "attachments" : `${n.pick.space}:${n.pick.folderSeq}`,
      r = [...["org", "personal"].flatMap(v => [{
        value: `${v}:0`,
        label: i(v === "org" ? "drive.orgRoot" : "drive.personalRoot")
      }, ...ht(n.folders, v).map(({
        folder: Y,
        depth: R
      }) => ({
        value: `${v}:${Y.seq}`,
        label: `${"　".repeat(R + 1)}${Y.name}`
      }))]), {
        value: "attachments",
        label: i("drive.allAttachments")
      }],
      m = n.pick.space !== "attachments" && n.pick.folderSeq ? n.folders.find(v => v.seq === n.pick.folderSeq) : void 0,
      S = [t.jsxs(u, {
        children: [t.jsx(Li, {
          open: tt,
          value: n.search,
          onChange: n.setSearch,
          placeholder: i("drive.searchPlaceholder")
        }), t.jsx(u, {
          sx: {
            p: 2,
            "& .MuiSelect-select.MuiOutlinedInput-input": {
              paddingTop: "13px",
              paddingBottom: "13px"
            }
          },
          children: t.jsxs(u, {
            sx: {
              display: "flex",
              alignItems: "stretch",
              gap: 2
            },
            children: [t.jsx(u, {
              sx: {
                flex: 1,
                minWidth: 0
              },
              children: t.jsx(_i, {
                value: e,
                onChange: v => {
                  const Y = String(v.target.value);
                  if (Y === "attachments") return n.setPick({
                    space: "attachments"
                  });
                  const [R, li] = Y.split(":");
                  n.setPick({
                    space: R,
                    folderSeq: Number(li) || 0
                  });
                },
                options: r,
                showEmptyOption: !1,
                fullWidth: !0
              })
            }), t.jsx(re, {
              variant: "outlined",
              "aria-label": i("drive.viewMode"),
              title: i("drive.viewMode"),
              onClick: v => H(v.currentTarget),
              sx: {
                flexShrink: 0,
                minWidth: Kt,
                p: 0
              },
              children: P === "list" ? t.jsx(zt, {}) : P === "large" ? t.jsx(Pt, {}) : t.jsx(At, {})
            }), m && t.jsx(re, {
              variant: "outlined",
              "aria-label": i("drive.editFolderAction"),
              title: i("drive.editFolderAction"),
              onClick: () => n.openFolderEdit(m),
              sx: {
                flexShrink: 0,
                minWidth: Kt,
                p: 0
              },
              children: t.jsx(at, {})
            })]
          })
        })]
      }, "title")];
    return et && S.push(t.jsx(u, {
      children: et
    }, "over")), Be && S.push(t.jsx(u, {
      children: Be
    }, "uploading")), P !== "list" && ee.length > 0 && S.push(t.jsx(Ht, {
      items: St(ee),
      mode: P,
      isMobile: !0
    }, "grid")), S.push(...(P !== "list" ? [] : ee).map(v => t.jsxs(u, {
      role: "button",
      tabIndex: 0,
      onClick: () => x(v),
      sx: {
        px: 2,
        py: 1.5,
        cursor: "pointer",
        userSelect: "none",
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        "&:active": {
          bgcolor: "#f8f8f7"
        }
      },
      children: [t.jsx(u, {
        sx: {
          flexShrink: 0,
          display: "flex",
          color: "text.secondary"
        },
        children: kt(v)
      }), t.jsxs(u, {
        sx: {
          flex: 1,
          minWidth: 0
        },
        children: [t.jsxs(u, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: .5,
            minWidth: 0
          },
          children: [t.jsx(U, {
            sx: {
              fontSize: 15,
              fontWeight: 600,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: we(v)
          }), v.kind === "folder" && v.folder.visibility !== "" && t.jsx($e, {
            "aria-label": i("drive.restrictedFolder"),
            sx: {
              fontSize: 16,
              color: "text.secondary",
              flexShrink: 0
            }
          })]
        }), t.jsx(U, {
          sx: {
            fontSize: 14,
            color: "text.secondary",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          },
          children: si(v)
        })]
      }), v.kind === "file" && t.jsx(be, {
        size: "small",
        "aria-label": i("drive.rowMenu", {
          name: v.file.name
        }),
        onClick: Y => E(Y, v.file),
        sx: {
          flexShrink: 0
        },
        children: t.jsx(ct, {})
      }), v.kind === "attachment" && t.jsx(be, {
        size: "small",
        "aria-label": i("drive.openSource"),
        onClick: Y => {
          Y.stopPropagation(), c(v.attachment);
        },
        sx: {
          flexShrink: 0
        },
        children: t.jsx(it, {
          fontSize: "small"
        })
      })]
    }, v.id))), jt && ee.length === 0 && S.push(t.jsx(dt, {
      text: o
    }, "empty")), jt || S.push(t.jsx(Vt, {}, "loading")), t.jsxs(t.Fragment, {
      children: [t.jsx(Ri, {
        attachHead: !0,
        children: S
      }), !B && t.jsx(wi, {
        color: "primary",
        "aria-label": i("drive.addToDrive"),
        onClick: v => ue(v.currentTarget),
        sx: {
          position: "fixed",
          right: 24,
          bottom: "calc(24px + var(--taskbox-fab-lift, 0px))",
          zIndex: 40
        },
        children: t.jsx(zi, {})
      }), t.jsx(ce, {
        anchorEl: Oe,
        open: !!Oe,
        onClose: () => H(null),
        children: me.map(v => t.jsxs(_, {
          selected: P === v.value,
          onClick: () => {
            H(null), Te(v.value);
          },
          sx: {
            gap: 1.5,
            fontSize: 16,
            minHeight: 52
          },
          children: [v.icon, v.title]
        }, v.value))
      }), t.jsxs(ce, {
        anchorEl: Ee,
        open: !!Ee,
        onClose: () => ue(null),
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        },
        transformOrigin: {
          vertical: "bottom",
          horizontal: "right"
        },
        children: [t.jsxs(_, {
          onClick: () => {
            ue(null), X();
          },
          sx: {
            gap: 1.5,
            fontSize: 16,
            minHeight: 52
          },
          children: [t.jsx(rt, {}), i("drive.uploadFiles")]
        }), t.jsxs(_, {
          onClick: () => {
            ue(null), n.openFolderCreate();
          },
          sx: {
            gap: 1.5,
            fontSize: 16,
            minHeight: 52
          },
          children: [t.jsx(nt, {}), i("drive.newFolder")]
        })]
      }), Ae]
    });
  }
  const ri = [...(B ? [{
      id: "no",
      text: i("drive.colNo"),
      width: 70,
      align: "center",
      render: (e, r) => s.length - r
    }] : []), {
      id: "name",
      text: i("drive.name"),
      sortable: !0,
      style: {
        fontSize: 15
      },
      render: e => t.jsxs(u, {
        draggable: e.kind === "file",
        onDragStart: e.kind === "file" ? r => r.dataTransfer.setData(Dt, String(e.file.seq)) : void 0,
        onContextMenu: e.kind === "folder" ? r => q(r, e.folder) : e.kind === "file" ? r => qe(r, e.file) : r => je(r, e.attachment),
        "data-drive-row": e.id,
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 1,
          minWidth: 0,
          height: Xt
        },
        children: [t.jsx(u, {
          sx: {
            flexShrink: 0,
            display: "flex",
            color: "text.secondary"
          },
          children: kt(e)
        }), t.jsx(u, {
          component: "span",
          sx: {
            fontWeight: e.kind === "folder" ? 600 : 500,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          },
          children: we(e)
        }), e.kind === "folder" && e.folder.visibility !== "" && t.jsx($e, {
          "aria-label": i("drive.restrictedFolder"),
          sx: {
            fontSize: 16,
            color: "text.secondary",
            flexShrink: 0
          }
        })]
      })
    }, ...(J ? [{
      id: "folder",
      text: i("drive.colFolder"),
      width: 280,
      sortable: !0,
      render: e => t.jsx(u, {
        component: "span",
        sx: {
          display: "block",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          color: "text.secondary"
        },
        children: de(e)
      })
    }] : []), ...(B ? [{
      id: "source-kind",
      text: i("drive.colKind"),
      width: 90,
      align: "center",
      sortable: !0,
      filterOptions: Mi.map(e => ({
        value: e,
        label: _e(e)
      })),
      filterValues: pe,
      onFilterChange: Je,
      render: e => e.kind === "attachment" ? _e(e.attachment.source) : ""
    }, {
      id: "source",
      text: i("drive.colSource"),
      width: 280,
      sortable: !0,
      render: e => e.kind === "attachment" ? t.jsx(u, {
        component: "span",
        sx: {
          display: "block",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          color: "text.secondary"
        },
        children: e.attachment.source_title
      }) : null
    }] : []), {
      id: "size",
      text: i("drive.colSize"),
      width: 100,
      sortable: !0,
      align: "right",
      render: e => e.kind === "file" ? fe(e.file.size) : e.kind === "attachment" && e.attachment.size ? fe(e.attachment.size) : ""
    }, {
      id: "owner",
      text: i("drive.colOwner"),
      width: 120,
      sortable: !0,
      align: "center",
      render: e => e.kind === "folder" ? e.folder.owner_name : e.kind === "file" ? e.file.owner_name : e.attachment.owner_name
    }, {
      id: "when",
      text: i("drive.colUploaded"),
      width: 120,
      sortable: !0,
      align: "center",
      render: e => e.kind === "file" ? Ve(e.file.created_time) : e.kind === "attachment" ? Ve(e.attachment.created_time) : ""
    }, {
      id: "menu",
      text: "",
      width: 56,
      align: "center",
      render: e => e.kind === "file" ? t.jsx(be, {
        size: "small",
        "aria-label": i("drive.rowMenu", {
          name: e.file.name
        }),
        onClick: r => E(r, e.file),
        children: t.jsx(ct, {
          fontSize: "small"
        })
      }) : e.kind === "attachment" ? t.jsx(be, {
        size: "small",
        "aria-label": i("drive.openSource"),
        onClick: r => {
          r.stopPropagation(), c(e.attachment);
        },
        children: t.jsx(it, {
          fontSize: "small"
        })
      }) : null
    }],
    ai = n.storage ? t.jsxs(u, {
      sx: {
        width: 180,
        flexShrink: 0
      },
      children: [t.jsx(U, {
        sx: {
          fontSize: 14,
          color: n.storage.over ? "error.main" : "text.secondary",
          whiteSpace: "nowrap",
          textAlign: "right"
        },
        children: i("drive.storageUsage", {
          used: fe(n.storage.used_bytes),
          limit: fe(n.storage.limit_bytes)
        })
      }), t.jsx(Et, {
        variant: "determinate",
        value: n.storage.limit_bytes > 0 ? Math.min(100, n.storage.used_bytes / n.storage.limit_bytes * 100) : 0,
        color: n.storage.over ? "error" : "primary",
        sx: {
          mt: .5,
          height: 6,
          borderRadius: 3
        }
      })]
    }) : null,
    oi = {
      left: B ? void 0 : t.jsx(re, {
        variant: "contained",
        disableElevation: !0,
        startIcon: t.jsx(rt, {}),
        onClick: X,
        children: i("drive.uploadFiles")
      }),
      right: t.jsxs(u, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 1.5
        },
        children: [t.jsx(Di, {
          value: P,
          onChange: e => e && Te(e),
          options: me.map(e => ({
            value: e.value,
            label: t.jsx(xt, {
              title: e.title,
              children: e.icon
            })
          })),
          sx: {
            height: 40,
            "& .MuiToggleButtonGroup-grouped": {
              px: 1.25,
              py: 0,
              minWidth: 44
            }
          }
        }), ai]
      }),
      showSearch: !0,
      searchValue: n.search,
      searchPlaceholder: i("drive.searchPlaceholder"),
      onSearchChange: n.setSearch,
      searchLoading: le,
      collapsible: !1,
      showCollapseButton: !1,
      showClearIcon: !1
    };
  return t.jsxs(t.Fragment, {
    children: [t.jsx(u, {
      sx: {
        height: "100%",
        minHeight: 0,
        display: "flex",
        alignItems: "stretch"
      },
      children: t.jsxs(u, {
        onDragOver: e => {
          if (B || !e.dataTransfer.types.includes("Files")) return;
          const r = !!e.target.closest(ve);
          r && e.preventDefault(), Z(r);
        },
        onDragLeave: e => {
          e.relatedTarget?.closest?.(ve) || Z(!1);
        },
        onDrop: e => {
          Z(!1), !(B || !e.dataTransfer.types.includes("Files") || !e.target.closest(ve)) && (e.preventDefault(), n.uploadFiles(Array.from(e.dataTransfer.files)));
        },
        onContextMenu: e => {
          const r = e.target;
          if (!r.closest(ve) || r.closest("thead")) return;
          const m = r.closest("tr")?.querySelector("[data-drive-row]")?.dataset.driveRow,
            S = m ? ee.find(v => v.id === m) : void 0;
          if (S?.kind === "folder") return q(e, S.folder);
          if (S?.kind === "file") {
            e.preventDefault(), V({
              x: e.clientX,
              y: e.clientY,
              file: S.file
            }), z(!0);
            return;
          }
          if (S?.kind === "attachment") return je(e, S.attachment);
          S || n.pick.space === "attachments" || Se(e, n.pick.space, n.pick.folderSeq);
        },
        sx: {
          flex: 1,
          minWidth: 0,
          minHeight: 0,
          display: "flex",
          flexDirection: "column",
          [`& ${ve}`]: {
            position: "relative"
          },
          [`& ${ve}::after`]: Xe ? {
            content: '""',
            position: "absolute",
            inset: 0,
            border: "2px dashed #2563eb",
            borderRadius: 1,
            bgcolor: "rgba(37, 99, 235, 0.06)",
            pointerEvents: "none",
            zIndex: 5
          } : {}
        },
        children: [et, Be && t.jsx(qi, {
          sx: {
            mb: 1.5
          },
          children: Be
        }), t.jsx(Ii, {
          header: oi,
          viewMode: P === "list" ? "table" : "card",
          cardPanel: P === "list" ? void 0 : t.jsx(Ht, {
            items: St(s),
            mode: P,
            isMobile: !1,
            empty: le ? t.jsx(Vt, {}) : t.jsx(dt, {
              text: o
            })
          }),
          tableProps: {
            ...a,
            scrollbars: ti,
            mobile: !0,
            variant: "notion",
            columns: ri,
            data: s,
            totalCount: s.length,
            getRowId: e => e.id,
            ...Ze,
            rowHeight: Xt,
            onRowClick: x,
            loading: le,
            emptyMessage: t.jsx(dt, {
              text: o
            })
          }
        })]
      })
    }), Ae]
  });
}
export { Ks as default };