import { r as i, j as e, N as $ } from "./react-CjxcGQav.js";
import { bv as L, D as N, bO as w, cI as q, bQ as E, B as x, d4 as y, L as _, mh as P, aC as k, mi as D, K as M, kR as G, ne as B, z, bx as A, u as U, n7 as V, d8 as Y, lr as Q } from "../js.d/main-Cm9wS5wt.js";
import { u as J } from "./useColumnWidths-DSAca5rC.js";
import { T as X } from "./tableScrollbars-C9bhlJjO.js";
import { r as Z } from "./rowNoColumn-B_tyJFB_.js";
import { n as m, N as ee } from "./NewsletterPreviewDialog-BqZaVjvI.js";
import "./stylis-DdLD6a3t.js";
import "./profileApi-Btafs-pM.js";
import "./resolveAssetPreviewSrc-CLlbOCzq.js";
const F = {
    name: "",
    feature: "",
    subject: "",
    preheader: "",
    kind: "info",
    content_mode: "html",
    content: ""
  },
  te = {
    ...B,
    left: [...(B.left ?? []).filter(n => !n.includes("undo")), ["bulletList", "numberList"], ["image"]]
  };
function ne({
  target: n,
  onClose: d,
  onSaved: r
}) {
  const s = L(),
    p = N(),
    T = i.useRef(null),
    [a, c] = i.useState(F),
    [C, f] = i.useState(0),
    [h, u] = i.useState(""),
    [g, b] = i.useState(null),
    S = n !== null,
    l = n && n !== "new" ? n : null;
  i.useEffect(() => {
    if (S) {
      if (b(null), !l) {
        c(F), f(t => t + 1);
        return;
      }
      c({
        ...F,
        ...l,
        content: ""
      }), u("load"), m.template(l.seq).then(t => {
        c({
          name: t.name,
          feature: t.feature,
          subject: t.subject,
          preheader: t.preheader,
          kind: t.kind,
          content_mode: t.content_mode,
          content: t.content
        }), f(o => o + 1);
      }).catch(t => w({
        message: t instanceof Error ? t.message : s("newsletter.loadFailed")
      })).finally(() => u(""));
    }
  }, [n]);
  const j = (t, o) => c(O => ({
      ...O,
      [t]: o
    })),
    R = () => ({
      ...a,
      content: a.content_mode === "editor" ? T.current?.getHtml() ?? a.content : a.content
    }),
    H = async () => {
      const t = R();
      if (!t.name.trim()) return w({
        message: s("newsletter.enterTemplateName")
      });
      u("save");
      try {
        l ? await m.updateTemplate(l.seq, t) : await m.createTemplate(t), A(s("newsletter.templateSaved")), r(), d();
      } catch (o) {
        w({
          message: o instanceof Error ? o.message : s("newsletter.saveFailed")
        });
      } finally {
        u("");
      }
    },
    W = async () => {
      const t = R();
      u("preview");
      try {
        const o = `${new Date().getFullYear()}.${String(new Date().getMonth() + 1).padStart(2, "0")} ${s("newsletter.defaultIssue")}`;
        b(await m.preview({
          title: t.subject || t.name,
          preheader: t.preheader,
          kind: t.kind,
          issue_label: o,
          template_id: "",
          content_mode: t.content_mode,
          content: t.content,
          audience: "all",
          custom_emails: ""
        }));
      } catch (o) {
        w({
          message: o instanceof Error ? o.message : s("newsletter.previewFailed")
        });
      } finally {
        u("");
      }
    },
    K = () => {
      l && z({
        title: s("newsletter.deleteTemplate"),
        message: s("newsletter.deleteTemplateConfirm", {
          name: l.name
        }),
        onConfirm: () => {
          m.removeTemplate(l.seq).then(() => {
            r(), d();
          }).catch(t => w({
            message: t instanceof Error ? t.message : s("newsletter.deleteFailed")
          }));
        }
      });
    },
    I = e.jsx(M, {
      size: 20,
      color: "inherit"
    });
  return e.jsxs(e.Fragment, {
    children: [e.jsx(q, {
      open: S,
      onClose: d,
      title: s(l ? "newsletter.editTemplate" : "newsletter.newTemplate"),
      fullScreen: p,
      maxWidth: "md",
      titleIcons: {
        delete: {
          visible: !!l
        }
      },
      onDelete: l ? K : void 0,
      tabs: {
        visible: !1
      },
      sections: [{
        id: "newsletter-template-form",
        showTitle: !1,
        children: e.jsxs(x, {
          sx: {
            display: "flex",
            flexDirection: "column",
            gap: 2.5
          },
          children: [e.jsxs(x, {
            sx: {
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "2fr 1fr"
              },
              gap: 2
            },
            children: [e.jsx(y, {
              label: s("newsletter.fieldTemplateName"),
              value: a.name,
              onChange: t => j("name", t.target.value),
              fullWidth: !0
            }), e.jsx(y, {
              label: s("newsletter.fieldFeature"),
              placeholder: s("newsletter.featurePlaceholder"),
              value: a.feature,
              onChange: t => j("feature", t.target.value),
              fullWidth: !0
            })]
          }), e.jsx(y, {
            label: s("newsletter.fieldTitle"),
            value: a.subject,
            onChange: t => j("subject", t.target.value),
            helperText: s("newsletter.templateSubjectHint"),
            fullWidth: !0
          }), e.jsx(y, {
            label: s("newsletter.fieldPreheader"),
            value: a.preheader,
            onChange: t => j("preheader", t.target.value),
            helperText: s("newsletter.preheaderHint"),
            fullWidth: !0
          }), e.jsxs(x, {
            children: [e.jsx(_, {
              sx: {
                fontSize: 14,
                color: "text.secondary",
                mb: .5
              },
              children: s("newsletter.fieldKind")
            }), e.jsxs(P, {
              row: !0,
              value: a.kind,
              onChange: t => j("kind", t.target.value),
              children: [e.jsx(k, {
                value: "info",
                control: e.jsx(D, {}),
                label: s("newsletter.kindInfo")
              }), e.jsx(k, {
                value: "ad",
                control: e.jsx(D, {}),
                label: s("newsletter.kindAd")
              })]
            })]
          }), e.jsxs(x, {
            children: [e.jsx(_, {
              sx: {
                fontSize: 14,
                color: "text.secondary",
                mb: .5
              },
              children: s("newsletter.fieldContent")
            }), e.jsxs(P, {
              row: !0,
              value: a.content_mode,
              onChange: t => {
                c({
                  ...R(),
                  content_mode: t.target.value
                }), f(o => o + 1);
              },
              children: [e.jsx(k, {
                value: "editor",
                control: e.jsx(D, {}),
                label: s("newsletter.modeEditor")
              }), e.jsx(k, {
                value: "html",
                control: e.jsx(D, {}),
                label: s("newsletter.modeHtml")
              })]
            })]
          }), h === "load" ? e.jsx(x, {
            sx: {
              display: "flex",
              justifyContent: "center",
              py: 4
            },
            children: e.jsx(M, {
              size: 24
            })
          }) : a.content_mode === "editor" ? e.jsx(G, {
            ref: T,
            defaultValue: a.content || "<p></p>",
            autoHeight: !0,
            minHeight: 280,
            toolbarOptions: te,
            placeholder: s("newsletter.contentPlaceholder"),
            focusBorder: !0,
            onImageUpload: async t => m.uploadImage(t)
          }, `editor-${C}`) : e.jsx(y, {
            value: a.content,
            onChange: t => j("content", t.target.value),
            helperText: s("newsletter.htmlHint"),
            multiline: !0,
            minRows: 14,
            maxRows: 28,
            fullWidth: !0,
            slotProps: {
              htmlInput: {
                spellCheck: !1,
                style: {
                  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
                  fontSize: 13
                }
              }
            }
          }, `html-${C}`)]
        })
      }],
      actions: {
        visible: !0,
        showCancelButton: !p,
        left: e.jsx(E, {
          onClick: () => {
            W();
          },
          disabled: h !== "",
          children: h === "preview" ? I : s("newsletter.preview")
        }),
        right: e.jsx(E, {
          variant: "contained",
          onClick: () => {
            H();
          },
          disabled: h !== "",
          sx: {
            minWidth: 80
          },
          children: h === "save" ? I : s("newsletter.save")
        })
      }
    }), e.jsx(ee, {
      preview: g,
      onClose: () => b(null)
    })]
  });
}
function v({
  text: n,
  muted: d = !1
}) {
  return e.jsx(_, {
    sx: {
      fontSize: 14,
      color: d ? "text.secondary" : "text.primary"
    },
    children: n || "-"
  });
}
function se(n, d) {
  return [Z(), {
    id: "feature",
    text: n("newsletter.colFeature"),
    width: 110,
    render: r => e.jsx(v, {
      text: r.feature
    })
  }, {
    id: "name",
    text: n("newsletter.colTemplateName", {
      count: d
    }),
    width: 300,
    render: r => e.jsx(v, {
      text: r.name
    })
  }, {
    id: "subject",
    text: n("newsletter.colSubject"),
    width: 340,
    render: r => e.jsx(v, {
      text: r.subject,
      muted: !0
    })
  }, {
    id: "kind",
    text: n("newsletter.colKind"),
    width: 90,
    align: "center",
    render: r => e.jsx(v, {
      text: r.kind === "ad" ? n("newsletter.kindAdShort") : n("newsletter.kindInfoShort"),
      muted: !0
    })
  }, {
    id: "mode",
    text: n("newsletter.colMode"),
    width: 90,
    align: "center",
    render: r => e.jsx(v, {
      text: r.content_mode === "editor" ? n("newsletter.modeEditor") : n("newsletter.modeHtml"),
      muted: !0
    })
  }, {
    id: "updated",
    text: n("newsletter.colUpdated"),
    width: 160,
    render: r => e.jsx(v, {
      text: r.updated_time.slice(0, 16),
      muted: !0
    })
  }];
}
function pe() {
  const n = L(),
    d = N(),
    r = U().useValue("account"),
    s = !r || V(r),
    [p, T] = i.useState([]),
    [a, c] = i.useState(!1),
    [C, f] = i.useState(null),
    h = J("newsletters.templates"),
    u = i.useMemo(() => se(n, p.length), [n, p.length]),
    g = i.useCallback(async () => {
      c(!0);
      try {
        T(await m.templates());
      } catch (l) {
        w({
          message: l instanceof Error ? l.message : n("newsletter.loadFailed")
        });
      } finally {
        c(!1);
      }
    }, [n]);
  i.useEffect(() => {
    s && g();
  }, [s, g]);
  const b = () => z({
      title: n("newsletter.importDefaults"),
      message: n("newsletter.importDefaultsConfirm"),
      onConfirm: () => {
        m.importDefaultTemplates().then(l => {
          A(l > 0 ? n("newsletter.importedDefaults", {
            count: l
          }) : n("newsletter.noDefaultsToImport")), g();
        }).catch(l => w({
          message: l instanceof Error ? l.message : n("newsletter.saveFailed")
        }));
      }
    }),
    S = {
      show: !0,
      left: e.jsxs(x, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 2
        },
        children: [e.jsx(E, {
          variant: "contained",
          startIcon: e.jsx(Y, {}),
          onClick: () => f("new"),
          sx: {
            whiteSpace: "nowrap",
            flexShrink: 0
          },
          children: n("newsletter.newTemplate")
        }), e.jsx(E, {
          variant: "outlined",
          onClick: b,
          sx: {
            whiteSpace: "nowrap",
            flexShrink: 0
          },
          children: n(d ? "newsletter.importDefaultsShort" : "newsletter.importDefaults")
        })]
      }),
      showSearch: !1
    };
  return s ? e.jsxs(x, {
    sx: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      height: 0,
      minHeight: 520
    },
    children: [e.jsx(Q, {
      header: S,
      tableProps: {
        ...h,
        scrollbars: X,
        mobile: !0,
        variant: "notion",
        data: p,
        totalCount: p.length,
        loading: a,
        columns: u,
        getRowId: l => l.seq,
        emptyMessage: n("newsletter.emptyTemplates"),
        onRowClick: l => f(l)
      }
    }), e.jsx(ne, {
      target: C,
      onClose: () => f(null),
      onSaved: () => {
        g();
      }
    })]
  }) : e.jsx($, {
    to: "/dashboard",
    replace: !0
  });
}
export { pe as default };