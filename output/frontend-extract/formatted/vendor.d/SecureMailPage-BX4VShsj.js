import { r as c, k as I, j as e } from "./react-CjxcGQav.js";
import { bT as x, bM as k, ak as T, bv as z, B as a, K as C, L as h, f as b, d as m, s as r, c4 as A, cc as M, b0 as R, cd as U, c9 as W, a1 as O, cb as _, b as $, ce as G, cf as E } from "../js.d/main-Cm9wS5wt.js";
import "./stylis-DdLD6a3t.js";
function v(s, t) {
  if (!s || s.ok === !1) throw new Error(s?.error || t);
  return s.data;
}
const w = {
  info: async s => v(await k.http.get(`/v1/mua/secure/${encodeURIComponent(s)}`), x("mail.secureCheckFailed")),
  open: async (s, t) => v(await k.http.post(`/v1/mua/secure/${encodeURIComponent(s)}/open`, {
    password: t
  }), x("mail.secureOpenFailed")),
  attachmentUrl: (s, t, i) => `/api/v1/mua/secure/${encodeURIComponent(s)}/attachments/${encodeURIComponent(t)}?key=${encodeURIComponent(i.key)}&exp=${i.exp}`
};
function H(s) {
  const [t, i] = c.useState(null),
    [o, p] = c.useState(!0),
    [j, f] = c.useState(""),
    [u, n] = c.useState(""),
    [d, S] = c.useState(!1),
    [B, F] = c.useState(null);
  return c.useEffect(() => {
    p(!0), w.info(s).then(i).catch(l => f(l instanceof Error && l.message ? l.message : x("mail.secureCheckFailed"))).finally(() => p(!1));
  }, [s]), {
    form: T({
      formId: "secureMailOpenForm",
      initialValues: {
        password: ""
      },
      onValidate: l => l.password ? !0 : (n(x("mail.enterPassword")), !1),
      onSubmit: async l => {
        S(!0), n("");
        try {
          F(await w.open(s, l.password));
        } catch (y) {
          n(y instanceof Error && y.message ? y.message : x("mail.secureOpenFailed"));
        } finally {
          S(!1);
        }
      }
    }),
    info: t,
    loading: o,
    unavailable: j,
    message: u,
    opening: d,
    content: B
  };
}
const g = s => s.name ? `${s.name} <${s.address}>` : s.address;
function L(s) {
  return s >= 1024 * 1024 ? `${(s / 1024 / 1024).toFixed(1)}MB` : s >= 1024 ? `${Math.round(s / 1024)}KB` : `${s}B`;
}
function P(s) {
  const t = new Date(`${s.replace(" ", "T")}Z`);
  return Number.isNaN(t.getTime()) ? s : t.toLocaleString(G(E()), {
    dateStyle: "long",
    timeStyle: "short"
  });
}
function q() {
  const {
      token: s = ""
    } = I(),
    t = z(),
    {
      form: i,
      info: o,
      loading: p,
      unavailable: j,
      message: f,
      opening: u,
      content: n
    } = H(s);
  return p ? e.jsx(a, {
    sx: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      py: 16
    },
    children: e.jsx(C, {
      size: 32
    })
  }) : n ? e.jsxs(a, {
    sx: {
      mx: "auto",
      maxWidth: 860,
      px: 2,
      py: 6
    },
    children: [e.jsx(h, {
      component: "h1",
      sx: {
        fontSize: "1.5rem",
        fontWeight: b.black,
        wordBreak: "break-all"
      },
      children: n.subject || t("mail.noSubject")
    }), e.jsxs(a, {
      sx: {
        mt: 2,
        display: "grid",
        gridTemplateColumns: "72px 1fr",
        rowGap: .5,
        columnGap: 1,
        fontSize: m.sm,
        lineHeight: 1.7
      },
      children: [e.jsx(a, {
        sx: {
          color: r[500]
        },
        children: t("mail.from")
      }), e.jsx(a, {
        sx: {
          wordBreak: "break-all"
        },
        children: n.from ? g(n.from) : "-"
      }), e.jsx(a, {
        sx: {
          color: r[500]
        },
        children: t("mail.to")
      }), e.jsx(a, {
        sx: {
          wordBreak: "break-all"
        },
        children: n.to.map(g).join(", ") || "-"
      }), n.cc.length > 0 && e.jsxs(e.Fragment, {
        children: [e.jsx(a, {
          sx: {
            color: r[500]
          },
          children: t("mail.cc")
        }), e.jsx(a, {
          sx: {
            wordBreak: "break-all"
          },
          children: n.cc.map(g).join(", ")
        })]
      }), e.jsx(a, {
        sx: {
          color: r[500]
        },
        children: t("mail.sentAt")
      }), e.jsx(a, {
        children: P(n.date_time)
      })]
    }), n.attachments.length > 0 && e.jsx(A, {
      direction: "row",
      useFlexGap: !0,
      spacing: 1,
      sx: {
        mt: 2,
        flexWrap: "wrap"
      },
      children: n.attachments.map(d => e.jsx(M, {
        component: "a",
        clickable: !0,
        href: w.attachmentUrl(s, d.uuid, n.access),
        icon: e.jsx(R, {}),
        label: `${d.name} (${L(d.size)})`,
        variant: "outlined",
        sx: {
          fontSize: m.sm
        }
      }, d.uuid))
    }), e.jsx(a, {
      sx: {
        mt: 3,
        borderTop: `1px solid ${r[200]}`,
        pt: 3
      },
      children: e.jsx(U, {
        html: n.body_html,
        text: "",
        allowRemoteImages: !0
      })
    })]
  }) : e.jsxs(a, {
    sx: {
      mx: "auto",
      display: "flex",
      maxWidth: W,
      flexDirection: "column",
      px: 2,
      py: 8
    },
    children: [e.jsx(O, {
      sx: {
        mx: "auto",
        fontSize: 56,
        color: r[400]
      }
    }), e.jsx(h, {
      component: "h1",
      sx: {
        mt: 2,
        textAlign: "center",
        fontSize: "1.75rem",
        fontWeight: b.black
      },
      children: t(o ? "mail.secureMail" : "mail.secureUnavailable")
    }), !o && e.jsx(h, {
      sx: {
        mt: 1,
        textAlign: "center",
        fontSize: m.base,
        color: r[500]
      },
      children: j || t("mail.invalidAddress")
    }), o && e.jsxs(e.Fragment, {
      children: [e.jsx(h, {
        sx: {
          mt: 1,
          textAlign: "center",
          fontSize: m.base,
          color: r[500]
        },
        children: t("mail.securePasswordGuide")
      }), e.jsxs(a, {
        sx: {
          mt: 4,
          display: "grid",
          gridTemplateColumns: "96px 1fr",
          rowGap: .5,
          columnGap: 1,
          fontSize: m.sm,
          lineHeight: 1.7
        },
        children: [e.jsx(a, {
          sx: {
            color: r[500]
          },
          children: t("mail.from")
        }), e.jsx(a, {
          sx: {
            wordBreak: "break-all"
          },
          children: g({
            name: o.from_name,
            address: o.from_address
          })
        }), e.jsx(a, {
          sx: {
            color: r[500]
          },
          children: t("mail.subject")
        }), e.jsx(a, {
          sx: {
            wordBreak: "break-all"
          },
          children: o.subject || t("mail.noSubject")
        }), o.hint && e.jsxs(e.Fragment, {
          children: [e.jsx(a, {
            sx: {
              color: r[500]
            },
            children: t("mail.passwordHint")
          }), e.jsx(a, {
            sx: {
              wordBreak: "break-all"
            },
            children: o.hint
          })]
        }), e.jsx(a, {
          sx: {
            color: r[500]
          },
          children: t("mail.expiresAt")
        }), e.jsx(a, {
          children: t("mail.untilTime", {
            time: o.expires_at.slice(0, 16)
          })
        })]
      }), f && e.jsx(a, {
        sx: {
          mt: 3,
          borderRadius: 1.5,
          bgcolor: "#fff1f2",
          p: 1.5,
          textAlign: "center",
          fontSize: m.base,
          fontWeight: b.semibold,
          color: "#be123c"
        },
        children: f
      }), e.jsxs(a, {
        component: "form",
        onSubmit: i.submit,
        sx: {
          mt: 4,
          display: "grid",
          gap: 2.5
        },
        children: [e.jsx(_, {
          form: i,
          name: "password",
          label: t("mail.password"),
          required: !0,
          fullWidth: !0,
          size: "medium",
          autoComplete: "off"
        }), e.jsxs(a, {
          component: "button",
          type: "submit",
          disabled: u,
          sx: {
            position: "relative",
            width: "100%",
            cursor: "pointer",
            borderRadius: 1.5,
            border: "none",
            bgcolor: $[600],
            py: 2,
            fontSize: m.base,
            fontWeight: b.bold,
            color: "#fff",
            "&:hover": {
              bgcolor: $[700]
            },
            "&:disabled": {
              opacity: .6,
              cursor: "default"
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1
          },
          children: [e.jsx(a, {
            component: "span",
            sx: {
              visibility: u ? "hidden" : "visible"
            },
            children: t("mail.open")
          }), u && e.jsx(C, {
            size: 20,
            sx: {
              position: "absolute",
              color: "#fff"
            }
          })]
        })]
      })]
    })]
  });
}
export { q as default };