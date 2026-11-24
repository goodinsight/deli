import { r as b, j as e } from "./react-CjxcGQav.js";
import { e as H, c8 as L, ak as N, ds as q, bT as h, bO as j, ce as W, cf as G, bv as M, D as U, cI as X, B as f, kR as K, kS as Q, cc as Y, b0 as $, L as C, bQ as J, mD as Z, bH as S, bI as I, d8 as O, gK as ee, ke as oe, y as ne, c_ as te, jN as ae, fo as le, w, fp as v, bA as se, cP as re, cW as ie } from "../js.d/main-Cm9wS5wt.js";
import { E as k, F as g, G as ce, H as B, I as de } from "./bootstrapController-BMV_i07c.js";
import { p as me } from "./date_utils-CYURFdnX.js";
import { F as ue } from "./FileUploadBox-crZW1mG0.js";
const y = ["#fef9c3", "#fce7f3", "#dcfce7", "#e0f2fe", "#ede9fe", "#ffedd5", "#ccfbf1", "#e5e7eb"],
  D = y[0];
function P(t, a) {
  return a || y[Math.abs(t) % y.length];
}
const E = 5e3;
function z(t, a) {
  return t instanceof Error ? t.message : a;
}
function pe() {
  const t = b.useRef(null),
    a = {
      memo: H({
        modalId: "calendar-memo"
      })
    },
    o = L({
      stateId: "calendar-memo-ui",
      initialValues: {
        target: null,
        openCount: 0
      }
    }),
    n = () => (t.current?.getMarkdown() ?? "").trim(),
    l = N({
      formId: "calendar-memo-form",
      initialValues: {
        color: D,
        keptFiles: [],
        newFiles: []
      },
      onValidate: () => {
        const s = n();
        return s ? s.length > E ? (j(h("calendar.memoTooLong", {
          max: E
        })), !1) : !0 : (j(h("calendar.memoContentRequired")), !1);
      },
      onSubmit: async s => {
        const i = n(),
          c = o.getValue("target");
        try {
          let r;
          if (c) k(await g.update(c.seq, i, s.color)), r = c.seq;else {
            const p = await g.create(i, s.color);
            k(p), r = p.seq;
          }
          const x = [];
          for (const p of s.newFiles ?? []) try {
            await g.uploadFile(r, p);
          } catch {
            x.push(p.name);
          }
          const _ = s.keptFiles ?? [],
            R = (c?.files ?? []).filter(p => !_.some(A => A.uuid === p.uuid));
          for (const p of R) try {
            await g.removeFile(p.uuid);
          } catch {
            x.push(p.name);
          }
          return x.length > 0 && q(h("calendar.memoAttachmentPartialFail", {
            names: x.join(`
`)
          })), a.memo.close(), !0;
        } catch (r) {
          return j(z(r, h("calendar.memoSaveFailed"))), !1;
        }
      }
    });
  return {
    form: l,
    modals: a,
    ui: o,
    editorRef: t,
    openMemoDialog: s => {
      l.setFormValues({
        color: s ? P(s.seq, s.color) : D,
        keptFiles: s?.files ?? [],
        newFiles: []
      }), o.setValues({
        target: s,
        openCount: (Number(o.getValue("openCount")) || 0) + 1
      }), a.memo.open();
    },
    deleteMemo: async () => {
      const s = o.getValue("target");
      if (s) try {
        await g.remove(s.seq), B(s.seq), a.memo.close();
      } catch (i) {
        j(z(i, h("calendar.memoDeleteFailed")));
      }
    },
    handleExited: () => {
      o.setValue("target", null), ce();
    }
  };
}
const F = new Set();
function ke(t = null) {
  for (const a of F) a(t);
}
function fe(t) {
  return F.add(t), () => {
    F.delete(t);
  };
}
function xe(t) {
  return t.replace(/```[\s\S]*?```/g, " ").replace(/!\[[^\]]*\]\([^)]*\)/g, " ").replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/^\s{0,3}#{1,6}\s+/gm, "").replace(/^\s{0,3}>\s?/gm, "").replace(/^\s{0,3}[-*+]\s+/gm, "• ").replace(/(\*\*|__|~~|`)/g, "").replace(/\n{3,}/g, `

`).trim();
}
function T(t) {
  const a = me(t);
  return !a || Number.isNaN(a.getTime()) ? "" : new Intl.DateTimeFormat(W(G()), {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  }).format(a);
}
const he = 720,
  ge = 260,
  be = 200;
function je({
  controller: t
}) {
  const a = M(),
    o = U(),
    {
      form: n,
      editorRef: l
    } = t,
    m = t.modals.memo,
    d = t.ui.useValue("target"),
    u = t.ui.useValue("openCount"),
    s = n.useFormValue("color"),
    i = n.useFormValue("keptFiles") ?? [],
    c = n.isSubmitting;
  return e.jsx(X, {
    open: m.isOpen,
    onClose: m.close,
    onExited: t.handleExited,
    title: {
      text: e.jsxs(f, {
        component: "span",
        sx: {
          display: "inline-flex",
          alignItems: "center",
          gap: 1.5,
          whiteSpace: "nowrap",
          "& > *:first-of-type": {
            mr: .5
          }
        },
        children: [e.jsx(f, {
          component: "span",
          sx: {
            display: "inline-flex"
          },
          onClick: r => r.stopPropagation(),
          onMouseDown: r => r.stopPropagation(),
          onPointerDown: r => r.stopPropagation(),
          children: e.jsx(Z, {
            value: s,
            onChange: r => n.setFormValue("color", r),
            customColors: y,
            shape: "circle",
            colorSize: 22,
            advanced: {
              visible: !o
            }
          })
        }), a(d ? "calendar.memo" : "calendar.newMemo")]
      })
    },
    maxWidth: "md",
    width: o ? void 0 : he,
    backdropClick: !1,
    fullScreen: o,
    mobilePresentation: o ? "slide" : "dialog",
    tabs: {
      visible: !1
    },
    sectionsPaddingTop: 0,
    sectionContentPaddingTop: 0,
    titleIcons: {
      print: {
        visible: !1
      },
      share: {
        visible: !1
      },
      delete: {
        visible: !!d
      }
    },
    onDelete: d ? t.deleteMemo : void 0,
    actions: {
      showCancelButton: !0,
      left: !o && d?.updated_time ? e.jsx(C, {
        sx: {
          fontSize: "15px",
          color: "#000"
        },
        children: a("calendar.lastEdited", {
          time: T(d.updated_time)
        })
      }) : void 0,
      right: e.jsx(J, {
        variant: "contained",
        onClick: () => {
          n.submit();
        },
        disabled: c,
        children: a(c ? "calendar.saving" : "calendar.save")
      })
    },
    sections: [{
      id: "calendar-memo",
      title: "",
      showTitle: !1,
      children: e.jsxs(f, {
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: 2,
          minWidth: 0
        },
        children: [e.jsx(K, {
          ref: l,
          defaultValue: d?.content ?? "",
          defaultFormat: "markdown",
          toolbarOptions: Q,
          autoHeight: o,
          resizable: !o,
          showToolbar: !o,
          minHeight: o ? be : ge,
          locale: "ko",
          placeholder: a("calendar.memoPlaceholder"),
          focusBorder: !0,
          styles: {
            focusBorderColor: "var(--primary)"
          },
          contentStyle: {
            padding: "12px"
          }
        }), e.jsxs(f, {
          sx: {
            display: "flex",
            flexDirection: "column",
            gap: 1,
            minWidth: 0
          },
          children: [i.length > 0 ? e.jsx(f, {
            sx: {
              display: "flex",
              flexWrap: "wrap",
              gap: 1
            },
            children: i.map(r => e.jsx(Y, {
              icon: e.jsx($, {
                sx: {
                  fontSize: 16
                }
              }),
              label: r.name,
              size: "small",
              sx: {
                bgcolor: "#f1f5f9",
                fontSize: 13,
                maxWidth: "100%"
              },
              onDelete: () => n.setFormValue("keptFiles", i.filter(x => x.uuid !== r.uuid))
            }, r.uuid))
          }) : null, e.jsx(ue, {
            multiple: !0,
            height: 64,
            variant: "box",
            acceptedFileTypes: [],
            dropzoneText: a("calendar.dropzone"),
            onAttachedFilesChange: r => n.setFormValue("newFiles", r)
          })]
        }), o && d?.updated_time ? e.jsx(C, {
          sx: {
            fontSize: "15px",
            color: "#000"
          },
          children: a("calendar.lastEdited", {
            time: T(d.updated_time)
          })
        }) : null]
      }, u)
    }]
  });
}
const Ce = 260;
function De({
  collapsed: t,
  part: a = "full"
}) {
  const o = M(),
    {
      items: n
    } = de(),
    l = pe(),
    m = b.useRef(l.openMemoDialog);
  m.current = l.openMemoDialog, b.useEffect(() => fe(r => m.current(r)), []);
  const [d, u] = b.useState(null),
    s = e.jsx(ye, {
      title: o("calendar.memo"),
      action: e.jsx(S, {
        title: o("calendar.addMemo"),
        children: e.jsx(I, {
          size: "small",
          sx: {
            p: .25
          },
          onClick: () => l.openMemoDialog(null),
          children: e.jsx(O, {
            fontSize: "small"
          })
        })
      })
    }),
    i = t ? e.jsx(V, {
      items: n,
      onPick: l.openMemoDialog
    }) : e.jsx(Me, {
      items: n,
      onPick: l.openMemoDialog
    }),
    c = e.jsx(je, {
      controller: l
    });
  return t ? e.jsxs(e.Fragment, {
    children: [e.jsx(f, {
      sx: {
        display: "flex",
        justifyContent: "center",
        py: 1
      },
      children: e.jsx(S, {
        title: o("calendar.memo"),
        placement: "right",
        children: e.jsx(I, {
          size: "small",
          onClick: r => u(r.currentTarget),
          children: e.jsx(ee, {
            badgeContent: n.length,
            color: "primary",
            max: 99,
            children: e.jsx(oe, {
              fontSize: "small"
            })
          })
        })
      })
    }), e.jsxs(ne, {
      open: !!d,
      anchorEl: d,
      onClose: () => u(null),
      anchorOrigin: {
        vertical: "top",
        horizontal: "right"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "left"
      },
      slotProps: {
        paper: {
          sx: {
            width: Ce,
            maxHeight: "70vh"
          }
        }
      },
      children: [s, i]
    }), c]
  }) : a === "host" ? c : e.jsxs(e.Fragment, {
    children: [s, i, c]
  });
}
function ye({
  title: t,
  action: a,
  open: o,
  onToggle: n
}) {
  return e.jsxs(f, {
    onClick: n,
    role: n ? "button" : void 0,
    "aria-expanded": n ? !!o : void 0,
    sx: {
      display: "flex",
      alignItems: "center",
      gap: .5,
      px: 1.5,
      py: .5,
      minHeight: 33,
      boxSizing: "border-box",
      bgcolor: "#f1f3f5",
      cursor: n ? "pointer" : "default",
      userSelect: "none",
      borderBottom: n && !o ? "1px solid" : "none",
      borderColor: "divider"
    },
    children: [e.jsx(C, {
      sx: {
        flex: 1,
        fontSize: "0.75rem",
        fontWeight: 700,
        color: "text.primary"
      },
      children: t
    }), a, n && e.jsx(te, {
      fontSize: "small",
      sx: {
        color: "text.secondary",
        transition: "transform 0.15s ease",
        transform: o ? "none" : "rotate(-90deg)"
      }
    })]
  });
}
function V({
  items: t,
  onPick: a,
  onContextMenu: o
}) {
  const n = M();
  return e.jsx(f, {
    "data-sidebar-group-label": o ? "" : void 0,
    onContextMenu: o ? l => o(null, l) : void 0,
    sx: {
      display: "flex",
      flexDirection: "column",
      gap: .75,
      p: 1.5
    },
    children: t.length === 0 ? e.jsx(C, {
      sx: {
        fontSize: "0.875rem",
        color: "text.secondary",
        py: .5
      },
      children: n("calendar.memoEmpty")
    }) : t.map(l => {
      const m = xe(l.content);
      return e.jsx(f, {
        component: "button",
        type: "button",
        onClick: () => a(l),
        onContextMenu: o ? d => {
          d.stopPropagation(), o(l, d);
        } : void 0,
        title: m,
        sx: {
          appearance: "none",
          border: "none",
          textAlign: "left",
          cursor: "pointer",
          px: 1.5,
          py: 1,
          borderRadius: 1,
          bgcolor: P(l.seq, l.color),
          fontSize: "14px",
          lineHeight: 1.6,
          color: "#000",
          display: "block",
          width: "100%",
          boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
          "&:hover": {
            filter: "brightness(0.97)"
          }
        },
        children: e.jsxs(f, {
          component: "span",
          sx: {
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 4,
            overflow: "hidden"
          },
          children: [l.files.length > 0 ? e.jsx(ae, {
            "aria-label": n("calendar.hasAttachment"),
            sx: {
              fontSize: 16,
              verticalAlign: "-3px",
              mr: .25,
              color: "rgba(0,0,0,0.6)"
            }
          }) : null, m]
        })
      }, l.seq);
    })
  });
}
function Me({
  items: t,
  onPick: a
}) {
  const o = M(),
    [n, l] = b.useState(null),
    [m, d] = b.useState(null),
    u = () => l(null),
    s = async i => {
      d(null);
      try {
        await g.remove(i.seq), B(i.seq);
      } catch (c) {
        j(c instanceof Error && c.message ? c.message : h("calendar.memoDeleteFailed"));
      }
    };
  return e.jsxs(e.Fragment, {
    children: [e.jsx(V, {
      items: t,
      onPick: a,
      onContextMenu: (i, c) => {
        c.preventDefault(), l({
          x: c.clientX,
          y: c.clientY,
          memo: i,
          anchor: c.currentTarget
        });
      }
    }), e.jsx(le, {
      open: !!n,
      onClose: u,
      point: n ? {
        x: n.x,
        y: n.y
      } : null,
      anchorEl: null,
      children: n?.memo ? [e.jsxs(w, {
        onClick: () => {
          const i = n.memo;
          u(), i && a(i);
        },
        children: [e.jsx(v, {
          children: e.jsx(se, {
            fontSize: "small"
          })
        }), o("calendar.memoOpen")]
      }, "open"), e.jsxs(w, {
        onClick: () => {
          const i = n.memo ? {
            memo: n.memo,
            anchor: n.anchor
          } : null;
          u(), d(i);
        },
        sx: {
          color: "error.main"
        },
        children: [e.jsx(v, {
          sx: {
            color: "inherit"
          },
          children: e.jsx(re, {
            fontSize: "small"
          })
        }), o("common.delete")]
      }, "delete")] : [e.jsxs(w, {
        onClick: () => {
          u(), a(null);
        },
        children: [e.jsx(v, {
          children: e.jsx(O, {
            fontSize: "small"
          })
        }), o("calendar.addMemo")]
      }, "add")]
    }), e.jsx(ie, {
      open: !!m,
      anchorEl: m?.anchor ?? null,
      title: o("calendar.memoDeleteConfirm"),
      confirmText: o("common.delete"),
      cancelText: o("common.cancel"),
      placement: "right",
      minWidth: 240,
      zIndex: 1401,
      onCancel: () => d(null),
      onConfirm: () => m && void s(m.memo)
    })]
  });
}
export { De as C, ye as S, ke as r };