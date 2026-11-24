import { r as h, j as e, l as oe } from "./react-CjxcGQav.js";
import { R as ie } from "./Refresh-xoMt5L00.js";
import { c8 as re, ak as H, e as $, bO as x, bT as g, z as U, bx as G, bv as T, D as Q, c4 as F, aB as ae, al as W, B as I, L as C, nb as le, cI as X, bQ as q, K as ce, cc as z, bH as J, bI as Z, jN as ee, cX as ue, u as pe, bM as B, d8 as de, lr as me } from "../js.d/main-Cm9wS5wt.js";
import { s as b } from "./supportCenterApi-KQJIqJUd.js";
import { f as te } from "./formatFileSize-Cwk2MLba.js";
import { T as ge } from "./tableScrollbars-C9bhlJjO.js";
import { u as fe } from "./useColumnWidths-DSAca5rC.js";
import "./stylis-DdLD6a3t.js";
import "./profileApi-Btafs-pM.js";
const he = {
    detailSeq: 0,
    post: null,
    loadingDetail: !1,
    existingFiles: [],
    editingComment: null,
    pendingCommentFiles: []
  },
  K = {
    seq: 0,
    title: "",
    post_type: "문의",
    content: ""
  };
function Ce(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function xe(t) {
  return `<p>${Ce(t.trim()).replace(/\n/g, "<br/>")}</p>`;
}
function ye(t) {
  return t.replace(/<br\s*\/?>/gi, `
`).replace(/<\/p>\s*<p>/gi, `

`).replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').trim();
}
function R(t, o) {
  return t instanceof Error ? t.message : o;
}
function be(t = {}) {
  const o = h.useRef(t);
  o.current = t;
  const n = h.useRef(null),
    a = h.useRef(null),
    i = re({
      stateId: "support-center-ui",
      initialValues: he
    }),
    d = H({
      formId: "support-post-form",
      initialValues: K,
      onValidate: s => s.title.trim() ? s.content.trim() ? !0 : (x(g("supportCenter.contentRequired")), !1) : (x(g("supportCenter.titleRequired")), !1),
      onSubmit: async s => {
        const p = {
          title: s.title.trim(),
          content: xe(s.content),
          postType: s.post_type
        };
        try {
          if (s.seq) await b.update(s.seq, p), await y(s.seq), G(g("supportCenter.inquiryUpdated"));else {
            const m = await b.create(p);
            m && (await y(m)), G(g("supportCenter.inquiryCreated"));
          }
          return o.current.onChanged?.(), f.form.close(), !0;
        } catch (m) {
          return x(R(m, g("supportCenter.inquirySaveFailed"))), !1;
        }
      }
    }),
    l = H({
      formId: "support-comment-form",
      initialValues: {
        content: ""
      },
      onValidate: s => !!s.content.trim(),
      onSubmit: async s => {
        const p = s.content.trim(),
          m = Number(i.getValue("detailSeq")) || 0,
          S = i.getValue("editingComment"),
          V = i.getValue("pendingCommentFiles") ?? [];
        try {
          if (S) await b.updateComment(S.seq, p);else {
            const A = await b.createComment(m, p);
            if (A && V.length > 0) {
              const L = [];
              for (const M of V) try {
                await b.uploadCommentFile(A.seq, M);
              } catch {
                L.push(M.name);
              }
              L.length > 0 && x(g("supportCenter.uploadFailedFiles", {
                files: L.join(", ")
              }));
            }
          }
          return l.setFormValue("content", ""), i.setValues({
            editingComment: null,
            pendingCommentFiles: []
          }), await u(), o.current.onChanged?.(), !0;
        } catch (A) {
          return x(R(A, g("supportCenter.commentSaveFailed"))), !1;
        }
      }
    }),
    c = () => {
      i.setValues({
        post: null,
        editingComment: null,
        pendingCommentFiles: []
      }), l.setFormValue("content", "");
      const s = a.current;
      s && (a.current = null, _(s));
    },
    f = {
      form: $({
        modalId: "support-post-form-dialog"
      }),
      detail: $({
        modalId: "support-post-detail-dialog",
        onClose: () => c()
      })
    };
  async function y(s) {
    const p = n.current?.getAttachedFiles() ?? [],
      m = [];
    for (const S of p) try {
      await b.uploadPostFile(s, S);
    } catch {
      m.push(S.name);
    }
    m.length > 0 && x(g("supportCenter.uploadFailedFiles", {
      files: m.join(", ")
    }));
  }
  async function u() {
    const s = Number(i.getValue("detailSeq")) || 0;
    if (s) {
      i.setValue("loadingDetail", !0);
      try {
        i.setValue("post", await b.get(s));
      } catch (p) {
        x(R(p, g("supportCenter.inquiryLoadFailed")));
      } finally {
        i.setValue("loadingDetail", !1);
      }
    }
  }
  const j = s => {
      i.setValues({
        detailSeq: s,
        post: null,
        editingComment: null,
        pendingCommentFiles: []
      }), l.setFormValue("content", ""), f.detail.open(), u();
    },
    w = () => {
      d.setFormValues({
        ...K
      }), i.setValue("existingFiles", []), f.form.open();
    };
  function _(s) {
    d.setFormValues({
      seq: s.seq,
      title: s.title ?? "",
      post_type: s.post_type || "문의",
      content: s.content ? ye(s.content) : ""
    }), i.setValue("existingFiles", s.files ?? []), f.form.open();
  }
  return {
    forms: {
      post: d,
      comment: l
    },
    modals: f,
    ui: i,
    uploadRef: n,
    openDetailDialog: j,
    openCreateDialog: w,
    editFromDetail: s => {
      a.current = s, f.detail.close();
    },
    removeExistingFiles: s => {
      const p = i.getValue("existingFiles") ?? [];
      for (const m of s) {
        const S = p.find(V => V.name === m.name && Number(V.size ?? 0) === m.size);
        S && b.removePostFile(S.uuid).then(V => i.setValue("existingFiles", V)).catch(() => x(g("supportCenter.attachmentDeleteFailed")));
      }
    },
    startEditComment: s => {
      i.setValue("editingComment", s), l.setFormValue("content", s.content);
    },
    cancelEditComment: () => {
      i.setValue("editingComment", null), l.setFormValue("content", "");
    },
    addPendingCommentFiles: s => {
      if (s.length === 0) return;
      const p = i.getValue("pendingCommentFiles") ?? [];
      i.setValue("pendingCommentFiles", [...p, ...s]);
    },
    removePendingCommentFile: s => {
      const p = i.getValue("pendingCommentFiles") ?? [];
      i.setValue("pendingCommentFiles", p.filter((m, S) => S !== s));
    },
    deleteCommentFile: async s => {
      if (await U({
        title: g("supportCenter.deleteAttachment"),
        message: g("supportCenter.deleteAttachmentConfirm", {
          name: s.name
        })
      })) try {
        await b.removeCommentFile(s.uuid), await u();
      } catch (m) {
        x(R(m, g("supportCenter.attachmentDeleteFailed")));
      }
    },
    deleteComment: async s => {
      if (await U({
        title: g("supportCenter.deleteComment"),
        message: g("supportCenter.deleteCommentConfirm")
      })) try {
        await b.removeComment(s.seq), await u(), o.current.onChanged?.();
      } catch (m) {
        x(R(m, g("supportCenter.commentDeleteFailed")));
      }
    },
    deletePost: async () => {
      const s = i.getValue("post");
      if (s) try {
        await b.remove(s.seq), o.current.onChanged?.(), f.detail.close();
      } catch (p) {
        x(R(p, g("supportCenter.inquiryDeleteFailed")));
      }
    }
  };
}
const Fe = ["문의", "건의사항", "오류제보"],
  je = {
    문의: "supportCenter.postTypeInquiry",
    건의사항: "supportCenter.postTypeSuggestion",
    오류제보: "supportCenter.postTypeBug"
  };
function O(t, o = g) {
  const n = je[t];
  return n ? o(n) : t;
}
function Se({
  controller: t
}) {
  const o = T(),
    n = Q(),
    a = Fe.map(u => ({
      value: u,
      label: O(u, o)
    })),
    i = t.forms.post,
    d = t.modals.form,
    l = (Number(i.useFormValue("seq")) || 0) > 0,
    c = t.ui.useValue("existingFiles") ?? [],
    f = i.isSubmitting,
    y = [{
      id: "support-post-form",
      title: o(l ? "supportCenter.editInquiry" : "supportCenter.writeInquiry"),
      children: e.jsxs(F, {
        spacing: 2,
        sx: {
          pt: 1
        },
        children: [e.jsx(ae, {
          form: i,
          name: "post_type",
          label: o("supportCenter.postType"),
          options: a,
          sx: {
            width: 160
          }
        }), e.jsx(W, {
          form: i,
          name: "title",
          label: o("supportCenter.title"),
          fullWidth: !0,
          autoFocus: !l
        }), e.jsx(W, {
          form: i,
          name: "content",
          label: o("supportCenter.content"),
          fullWidth: !0,
          multiline: !0,
          minRows: 8,
          placeholder: o("supportCenter.contentPlaceholder")
        }), e.jsxs(I, {
          children: [e.jsx(C, {
            sx: {
              fontSize: 14,
              fontWeight: 700,
              mb: 1
            },
            children: o("supportCenter.attachments")
          }), e.jsx(le, {
            ref: t.uploadRef,
            multiple: !0,
            height: 96,
            uploadedFiles: c.map(u => ({
              name: u.name,
              size: Number(u.size ?? 0),
              downloadUrl: `/api/v1/files/${u.uuid}`
            })),
            dropzoneText: o("supportCenter.dropzoneText"),
            onValidationError: u => x(u),
            onRequestDelete: ({
              files: u
            }) => (t.removeExistingFiles(u), !0)
          }), e.jsx(C, {
            sx: {
              mt: .5,
              fontSize: 12,
              color: "text.secondary"
            },
            children: o("supportCenter.attachmentsHelp")
          })]
        })]
      })
    }];
  return e.jsx(X, {
    fontScaleKey: "SupportPostFormDialog",
    open: d.isOpen,
    onClose: d.close,
    title: o(l ? "supportCenter.editInquiry" : "supportCenter.newInquiry"),
    width: "640px",
    fullScreen: n,
    mobilePresentation: n ? "slide" : "dialog",
    draggable: !0,
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
      visible: !0,
      showCancelButton: !0,
      right: e.jsx(q, {
        variant: "contained",
        onClick: () => {
          i.submit();
        },
        disabled: f,
        children: o(f ? "supportCenter.saving" : l ? "supportCenter.edit" : "supportCenter.submit")
      })
    },
    sections: y
  });
}
function ne(t) {
  return String(t ?? "").slice(0, 16);
}
function se({
  files: t,
  onDelete: o
}) {
  const n = T();
  return t.length === 0 ? null : e.jsx(F, {
    spacing: .25,
    sx: {
      mt: .5
    },
    children: t.map(a => e.jsxs(F, {
      direction: "row",
      spacing: .75,
      alignItems: "center",
      children: [e.jsx(ee, {
        sx: {
          fontSize: 15,
          color: "text.secondary"
        }
      }), e.jsx(ue, {
        href: `/api/v1/files/${a.uuid}`,
        download: a.name,
        sx: {
          fontSize: 13.5,
          wordBreak: "break-all"
        },
        children: a.name
      }), e.jsx(C, {
        sx: {
          fontSize: 12.5,
          color: "text.secondary",
          flexShrink: 0
        },
        children: te(a.size)
      }), o ? e.jsx(q, {
        color: "error",
        sx: {
          minWidth: 0,
          fontSize: 12.5,
          py: 0,
          px: .5
        },
        onClick: () => o(a),
        children: n("supportCenter.delete")
      }) : null]
    }, a.uuid))
  });
}
function we({
  comment: t,
  mySeq: o,
  onEdit: n,
  onDelete: a,
  onDeleteFile: i
}) {
  const d = T(),
    l = t.account_seq === o;
  return e.jsxs(I, {
    sx: {
      p: 1.25,
      borderRadius: 1,
      bgcolor: t.admin_answer ? "#eef4ff" : "#f7f7f5",
      border: "1px solid",
      borderColor: t.admin_answer ? "#dce7fd" : "#ececea"
    },
    children: [e.jsxs(F, {
      direction: "row",
      spacing: 1,
      alignItems: "center",
      sx: {
        mb: .5
      },
      children: [t.admin_answer ? e.jsx(z, {
        size: "small",
        color: "primary",
        label: d("supportCenter.answer"),
        sx: {
          height: 20
        }
      }) : null, e.jsx(C, {
        sx: {
          fontSize: 13.5,
          fontWeight: 600
        },
        children: t.author_name || "-"
      }), e.jsx(C, {
        sx: {
          fontSize: 12.5,
          color: "text.secondary"
        },
        children: ne(t.created_time)
      }), l ? e.jsxs(F, {
        direction: "row",
        spacing: .5,
        sx: {
          ml: "auto"
        },
        children: [e.jsx(q, {
          sx: {
            minWidth: 0,
            fontSize: 13,
            py: 0
          },
          onClick: () => n(t),
          children: d("supportCenter.edit")
        }), e.jsx(q, {
          color: "error",
          sx: {
            minWidth: 0,
            fontSize: 13,
            py: 0
          },
          onClick: () => a(t),
          children: d("supportCenter.delete")
        })]
      }) : null]
    }), e.jsx(C, {
      sx: {
        fontSize: 14,
        whiteSpace: "pre-wrap",
        wordBreak: "break-word"
      },
      children: t.content
    }), e.jsx(se, {
      files: t.files ?? [],
      onDelete: l ? c => i(t, c) : void 0
    })]
  });
}
function ve({
  controller: t,
  mySeq: o
}) {
  const n = T(),
    a = Q(),
    {
      ui: i,
      modals: d
    } = t,
    l = t.forms.comment,
    c = i.useValue("post"),
    f = i.useValue("loadingDetail") === !0,
    y = i.useValue("editingComment"),
    u = i.useValue("pendingCommentFiles") ?? [],
    j = String(l.useFormValue("content") ?? ""),
    w = l.isSubmitting,
    _ = h.useRef(null),
    P = c?.comments ?? [],
    D = P.some(r => r.admin_answer),
    E = !!(c?.is_mine && !D),
    k = [{
      id: "support-post-detail",
      title: n("supportCenter.inquiryContent"),
      children: f ? e.jsx(I, {
        sx: {
          display: "flex",
          justifyContent: "center",
          py: 5
        },
        children: e.jsx(ce, {
          size: 28
        })
      }) : c ? e.jsxs(F, {
        spacing: 2,
        sx: {
          pt: .5
        },
        children: [e.jsxs(F, {
          direction: "row",
          spacing: 1,
          alignItems: "center",
          flexWrap: "wrap",
          children: [e.jsx(z, {
            size: "small",
            variant: "outlined",
            label: O(c.post_type || "문의", n),
            sx: {
              height: 22
            }
          }), e.jsx(z, {
            size: "small",
            color: D ? "success" : "default",
            label: n(D ? "supportCenter.statusAnswered" : "supportCenter.statusReceived"),
            sx: {
              height: 22
            }
          }), e.jsxs(C, {
            sx: {
              fontSize: 13,
              color: "text.secondary"
            },
            children: [c.author_name, " · ", ne(c.created_time)]
          })]
        }), e.jsx(C, {
          sx: {
            fontSize: 17,
            fontWeight: 600
          },
          children: c.title
        }), e.jsx(I, {
          sx: {
            fontSize: 14.5,
            lineHeight: 1.7,
            "& p": {
              m: 0
            },
            wordBreak: "break-word"
          },
          dangerouslySetInnerHTML: {
            __html: c.content ?? ""
          }
        }), e.jsx(se, {
          files: c.files ?? []
        })]
      }) : e.jsx(C, {
        sx: {
          fontSize: 14,
          color: "text.secondary",
          py: 3
        },
        children: n("supportCenter.inquiryNotFound")
      })
    }, {
      id: "support-post-comments",
      title: n("supportCenter.commentsCount", {
        count: P.length
      }),
      children: e.jsxs(F, {
        spacing: 1.25,
        sx: {
          pt: .5
        },
        children: [P.length === 0 ? e.jsx(C, {
          sx: {
            fontSize: 14,
            color: "text.secondary"
          },
          children: n("supportCenter.noComments")
        }) : P.map(r => e.jsx(we, {
          comment: r,
          mySeq: o,
          onEdit: t.startEditComment,
          onDelete: v => {
            t.deleteComment(v);
          },
          onDeleteFile: (v, N) => {
            t.deleteCommentFile(N);
          }
        }, r.seq)), u.length > 0 ? e.jsx(F, {
          direction: "row",
          spacing: .75,
          flexWrap: "wrap",
          useFlexGap: !0,
          children: u.map((r, v) => e.jsx(z, {
            size: "small",
            label: `${r.name} (${te(r.size)})`,
            onDelete: () => t.removePendingCommentFile(v)
          }, `${r.name}-${v}`))
        }) : null, e.jsxs(F, {
          direction: "row",
          spacing: 1,
          alignItems: "flex-start",
          children: [e.jsx(W, {
            form: l,
            name: "content",
            placeholder: n(y ? "supportCenter.editingComment" : "supportCenter.commentPlaceholder"),
            fullWidth: !0,
            multiline: !0,
            minRows: 2
          }), e.jsxs(F, {
            spacing: .5,
            children: [e.jsxs(F, {
              direction: "row",
              spacing: .5,
              alignItems: "center",
              children: [y ? null : e.jsx(J, {
                title: n("supportCenter.attachFile"),
                children: e.jsx(Z, {
                  onClick: () => _.current?.click(),
                  "aria-label": n("supportCenter.attachFile"),
                  children: e.jsx(ee, {
                    sx: {
                      fontSize: 20
                    }
                  })
                })
              }), e.jsx(q, {
                variant: "contained",
                onClick: () => {
                  l.submit();
                },
                disabled: w || !j.trim(),
                sx: {
                  whiteSpace: "nowrap"
                },
                children: n(y ? "supportCenter.edit" : "supportCenter.submit")
              })]
            }), y ? e.jsx(q, {
              onClick: t.cancelEditComment,
              children: n("supportCenter.cancel")
            }) : null]
          }), e.jsx("input", {
            ref: _,
            type: "file",
            multiple: !0,
            hidden: !0,
            onChange: r => {
              t.addPendingCommentFiles(Array.from(r.target.files ?? [])), r.target.value = "";
            }
          })]
        })]
      })
    }];
  return e.jsx(X, {
    fontScaleKey: "SupportPostDetailDialog",
    open: d.detail.isOpen,
    onClose: d.detail.close,
    title: n("supportCenter.inquiryDetail"),
    width: "680px",
    fullScreen: a,
    mobilePresentation: a ? "slide" : "dialog",
    draggable: !0,
    backdropClick: !0,
    titleIcons: {
      delete: {
        visible: E,
        confirmConfig: {
          title: n("supportCenter.deleteInquiry"),
          message: n("supportCenter.deleteInquiryConfirm"),
          confirmText: n("supportCenter.delete"),
          cancelText: n("supportCenter.cancel")
        }
      },
      print: {
        visible: !1
      },
      share: {
        visible: !1
      }
    },
    onDelete: t.deletePost,
    tabs: {
      visible: !1
    },
    scrollPastLastSection: !1,
    actions: {
      visible: !0,
      showCancelButton: !0,
      right: E ? e.jsx(q, {
        variant: "contained",
        onClick: () => c && t.editFromDetail(c),
        children: n("supportCenter.edit")
      }) : void 0
    },
    sections: k
  });
}
const Y = "board.qna.updated";
function _e(t) {
  return String(t ?? "").slice(0, 16);
}
function qe(t, o) {
  return [{
    id: "post_type",
    text: o("supportCenter.postType"),
    width: 96,
    align: "center",
    render: n => e.jsx(z, {
      size: "small",
      variant: "outlined",
      label: O(n.post_type || "문의", o),
      sx: {
        height: 22
      }
    })
  }, {
    id: "title",
    text: o("supportCenter.columnTitleCount", {
      count: t
    }),
    width: 420,
    render: n => e.jsxs(I, {
      sx: {
        display: "flex",
        alignItems: "center",
        gap: 1,
        minWidth: 0
      },
      children: [e.jsx(C, {
        sx: {
          fontSize: 14,
          fontWeight: n.unread_answer ? 600 : 400,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        },
        children: n.title
      }), n.comment_count > 0 ? e.jsxs(C, {
        sx: {
          fontSize: 13,
          color: "#2563eb",
          flexShrink: 0
        },
        children: ["[", n.comment_count, "]"]
      }) : null, n.unread_answer ? e.jsx(z, {
        size: "small",
        color: "primary",
        label: o("supportCenter.newAnswer"),
        sx: {
          height: 20,
          flexShrink: 0
        }
      }) : null]
    })
  }, {
    id: "author_name",
    text: o("supportCenter.author"),
    width: 120,
    align: "center",
    render: n => e.jsx(C, {
      sx: {
        fontSize: 14
      },
      children: n.author_name || "-"
    })
  }, {
    id: "created_time",
    text: o("supportCenter.createdDate"),
    width: 150,
    align: "center",
    render: n => e.jsx(C, {
      sx: {
        fontSize: 13.5,
        color: "text.secondary"
      },
      children: _e(n.created_time)
    })
  }, {
    id: "answered",
    text: o("supportCenter.status"),
    width: 100,
    align: "center",
    render: n => {
      const a = n.last_comment_admin || n.comment_count > 0 && n.last_comment_time !== "";
      return e.jsx(z, {
        size: "small",
        color: n.last_comment_admin ? "success" : "default",
        label: n.last_comment_admin ? o("supportCenter.statusAnswered") : o(a ? "supportCenter.statusInProgress" : "supportCenter.statusReceived"),
        sx: {
          height: 22
        }
      });
    }
  }];
}
function Be() {
  const t = T(),
    o = fe("supportCenter.list"),
    a = pe().useValue("account"),
    i = Number(a?.seq ?? 0) || 0,
    [d, l] = h.useState([]),
    [c, f] = h.useState(!0),
    [y, u] = h.useState(""),
    j = h.useCallback(async () => {
      f(!0);
      try {
        const r = await b.list({
          page: 1,
          perPage: 200,
          search: y
        });
        l(r.items);
      } catch (r) {
        x(r instanceof Error ? r.message : t("supportCenter.listLoadFailed"));
      } finally {
        f(!1);
      }
    }, [y, t]);
  h.useEffect(() => {
    j();
  }, [j]);
  const w = be({
      onChanged: () => {
        j();
      }
    }),
    [_, P] = oe();
  h.useEffect(() => {
    const r = Number(_.get("seq") ?? 0);
    if (!r) return;
    w.openDetailDialog(r);
    const v = new URLSearchParams(_);
    v.delete("seq"), P(v, {
      replace: !0
    });
  }, [_]);
  const D = h.useRef(j);
  h.useEffect(() => {
    D.current = j;
  }, [j]), h.useEffect(() => {
    const r = () => {
      D.current();
    };
    return B.addRealtimeEventListener(Y, r), B.connectRealtime?.().catch(() => {}), () => B.removeRealtimeEventListener(Y, r);
  }, []);
  const E = h.useMemo(() => qe(d.length, t), [d.length, t]),
    k = {
      show: !0,
      right: e.jsxs(I, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 1
        },
        children: [e.jsx(J, {
          title: t("supportCenter.refresh"),
          children: e.jsx("span", {
            children: e.jsx(Z, {
              onClick: () => {
                j();
              },
              disabled: c,
              "aria-label": t("supportCenter.refresh"),
              children: e.jsx(ie, {})
            })
          })
        }), e.jsx(q, {
          variant: "contained",
          startIcon: e.jsx(de, {}),
          onClick: w.openCreateDialog,
          children: t("supportCenter.newInquiry")
        })]
      }),
      showSearch: !0,
      searchPlaceholder: t("supportCenter.searchPlaceholder"),
      searchDebounce: 300,
      onSearch: u
    };
  return e.jsxs(I, {
    sx: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      height: 0,
      minHeight: 520
    },
    children: [e.jsx(me, {
      header: k,
      tableProps: {
        ...o,
        scrollbars: ge,
        mobile: !0,
        data: d,
        totalCount: d.length,
        loading: c,
        columns: E,
        getRowId: r => r.seq,
        variant: "notion",
        rowHeight: 48,
        emptyMessage: t("supportCenter.empty"),
        onRowClick: r => w.openDetailDialog(r.seq)
      }
    }), e.jsx(Se, {
      controller: w
    }), e.jsx(ve, {
      controller: w,
      mySeq: i
    })]
  });
}
export { Be as default };