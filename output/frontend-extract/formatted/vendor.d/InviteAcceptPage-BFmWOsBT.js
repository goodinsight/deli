import { k as K, u as U, r as u, j as e } from "./react-CjxcGQav.js";
import { s as C, S as V, a as M, b as J } from "./SocialProviderIcon-CfLZ-VWP.js";
import { bv as Q, u as X, bT as t, c2 as F, B as O, s as i, a_ as Y, L as a, d as r, c3 as Z, f, c4 as I, bQ as c, r as P, bS as E, c5 as ee, bx as se, c6 as ne, c7 as oe, i as te, g as ie, G as ae } from "../js.d/main-Cm9wS5wt.js";
import { W as re } from "./WorkspacesOutlined-DwFzV-9Z.js";
import { D as ce } from "./DownloadOutlined-BQUlL5Zk.js";
import { T as z } from "./Trans-CU1vl0TZ.js";
import "./stylis-DdLD6a3t.js";
function D() {
  if (te()) return null;
  const s = ae();
  return s === "other" ? null : ie(s);
}
function he() {
  const s = Q(),
    {
      token: d = ""
    } = K(),
    m = U(),
    w = X(),
    R = w.useValue("account"),
    T = w.useValue("sessionChecked"),
    [o, G] = u.useState(null),
    [v, j] = u.useState(!0),
    [b, x] = u.useState(""),
    [L, S] = u.useState(!1),
    [h, H] = u.useState(null);
  u.useEffect(() => {
    if (!d) {
      x(t("groups.invalidInviteLink")), j(!1);
      return;
    }
    j(!0), F.lookupInvite(d).then(G).catch(n => x(n instanceof Error ? n.message : t("groups.inviteCheckFailed"))).finally(() => j(!1));
  }, [d]);
  const A = `/invite/${d}`,
    y = n => {
      E(A);
      const p = C(o?.email_masked ?? "");
      m(n, {
        state: {
          from: A,
          ...(p ? {
            socialProvider: p,
            inviteEmail: o?.email_masked
          } : {})
        }
      });
    },
    l = (() => {
      const n = C(o?.email || o?.email_masked || "");
      return n ? V.find(p => p.key === n) ?? null : null;
    })(),
    N = () => {
      l && (E(A), ee(l.key, () => {
        window.location.assign(J(l.key));
      }));
    },
    $ = async () => {
      S(!0), x("");
      try {
        const n = await F.acceptInvite(d);
        if (se({
          message: n.kind === "workspace" ? t("groups.workspaceOpened", {
            name: n.workspace_name || t("groups.workspaceFallback")
          }) : `${t("groups.joinedAsMember", {
            name: n.name || t("groups.orgFallback")
          })}${n.workspace_seq ? "" : ` ${t("groups.sharedWorkspacesInSidebar")}`}`,
          delay: 900
        }), ne({
          team_context: !0
        }), n.workspace_seq && oe(n.workspace_seq), D()) {
          H(n.kind === "workspace" ? n.workspace_name || t("groups.workspaceFallback") : n.name || t("groups.orgFallback")), S(!1);
          return;
        }
        m(P(), {
          replace: !0
        });
      } catch (n) {
        x(n instanceof Error ? n.message : t("groups.inviteAcceptFailed")), S(!1);
      }
    },
    q = !!o && (o.status !== "pending" || o.expired),
    W = o?.kind === "workspace",
    g = o?.inviter_name || s("groups.inviterFallback"),
    k = D(),
    _ = !!k && /^https?:/i.test(k.url),
    B = s("groups.inviteAcceptTitle");
  return e.jsxs(O, {
    sx: {
      mx: "auto",
      display: "flex",
      maxWidth: 448,
      flexDirection: "column",
      px: 2,
      pt: 3,
      pb: 8,
      textAlign: "center",
      userSelect: "none"
    },
    children: [h === null && (W ? e.jsx(re, {
      sx: {
        mx: "auto",
        fontSize: 56,
        color: i[400]
      }
    }) : e.jsx(Y, {
      sx: {
        mx: "auto",
        fontSize: 56,
        color: i[400]
      }
    })), v && e.jsx(a, {
      sx: {
        mt: 3,
        fontSize: r.base,
        color: i[500]
      },
      children: s("groups.checkingInvite")
    }), h !== null && e.jsxs(e.Fragment, {
      children: [e.jsx(Z, {
        sx: {
          mx: "auto",
          mt: 3,
          fontSize: 56,
          color: "#16a34a"
        }
      }), e.jsx(a, {
        component: "h1",
        sx: {
          mt: 2,
          fontSize: "1.5rem",
          fontWeight: f.black
        },
        children: s("groups.joinedName", {
          name: h
        })
      }), e.jsxs(a, {
        sx: {
          mt: 1.5,
          fontSize: r.base,
          color: i[600],
          lineHeight: 1.7
        },
        children: [s("groups.appPitch1"), e.jsx("br", {}), s("groups.appPitch2")]
      }), e.jsxs(I, {
        spacing: 1.5,
        sx: {
          mt: 4
        },
        children: [e.jsx(c, {
          variant: "contained",
          size: "large",
          startIcon: e.jsx(ce, {}),
          component: "a",
          href: k?.url,
          download: _ ? void 0 : !0,
          children: _ ? s("groups.installAppFrom", {
            store: k?.label ?? ""
          }) : s("groups.installAndroidApk")
        }), e.jsx(c, {
          variant: "outlined",
          size: "large",
          onClick: () => m(P(), {
            replace: !0
          }),
          children: s("groups.continueOnWeb")
        })]
      })]
    }), !v && !o && e.jsxs(e.Fragment, {
      children: [e.jsx(a, {
        component: "h1",
        sx: {
          mt: 2,
          fontSize: "1.5rem",
          fontWeight: f.black
        },
        children: s("groups.cantOpenInvite")
      }), e.jsx(a, {
        sx: {
          mt: 1.5,
          fontSize: r.base,
          color: i[500]
        },
        children: b || s("groups.inviteInvalidOrCanceled")
      }), e.jsx(c, {
        variant: "outlined",
        sx: {
          mt: 4,
          mx: "auto"
        },
        onClick: () => m("/"),
        children: s("groups.goHome")
      })]
    }), !v && o && h === null && e.jsxs(e.Fragment, {
      children: [e.jsx(a, {
        component: "h1",
        sx: {
          mt: 2,
          fontSize: "1.5rem",
          fontWeight: f.black
        },
        children: B
      }), e.jsx(I, {
        spacing: 2.5,
        sx: {
          mt: 3,
          textAlign: "left"
        },
        children: (W ? [e.jsx(z, {
          i18nKey: "groups.inviteWorkspaceLine1",
          values: {
            inviter: g,
            name: o.workspace_name
          },
          components: {
            s: e.jsx("strong", {})
          }
        }), o.workspace_role === "read" ? s("groups.inviteWorkspaceLine2Read", {
          inviter: g
        }) : s("groups.inviteWorkspaceLine2Write", {
          inviter: g
        })] : [e.jsx(z, {
          i18nKey: o.role === "admin" ? "groups.inviteOrgLine1Admin" : "groups.inviteOrgLine1Member",
          values: {
            inviter: g,
            name: o.group_name
          },
          components: {
            s: e.jsx("strong", {})
          }
        }), s("groups.inviteOrgLine2", {
          inviter: g,
          name: o.group_name
        })]).map((n, p) => e.jsx(a, {
          sx: {
            fontSize: r.base,
            color: i[600],
            lineHeight: 1.7
          },
          children: n
        }, p))
      }), q ? e.jsx(a, {
        sx: {
          mt: 3,
          fontSize: r.base,
          color: "#be123c"
        },
        children: o.status === "accepted" ? s("groups.inviteAlreadyAccepted") : o.expired ? s("groups.inviteExpired") : s("groups.inviteUnusable")
      }) : e.jsxs(e.Fragment, {
        children: [e.jsx(a, {
          sx: {
            mt: 2.5,
            fontSize: r.base,
            color: i[600],
            lineHeight: 1.7,
            textAlign: "left"
          },
          children: e.jsx(z, {
            i18nKey: "groups.inviteEmailOnly",
            values: {
              email: o.email || o.email_masked
            },
            components: {
              s: e.jsx("strong", {})
            }
          })
        }), b && e.jsx(O, {
          sx: {
            mt: 3,
            borderRadius: 1.5,
            bgcolor: "#fff1f2",
            p: 1.5,
            fontSize: r.base,
            fontWeight: f.semibold,
            color: "#be123c"
          },
          children: b
        }), T && e.jsx(I, {
          spacing: 1.5,
          sx: {
            mt: 6
          },
          children: R ? e.jsx(c, {
            variant: "contained",
            size: "large",
            onClick: () => {
              $();
            },
            disabled: L,
            children: s(L ? "groups.accepting" : "groups.acceptInvite")
          }) : e.jsxs(e.Fragment, {
            children: [e.jsx(c, {
              variant: "contained",
              size: "large",
              onClick: () => y("/login"),
              children: s("groups.loginAndAccept")
            }), l ? e.jsx(c, {
              variant: "outlined",
              size: "large",
              onClick: N,
              startIcon: e.jsx(M, {
                provider: l.key,
                sx: {
                  fontSize: "1.25rem"
                }
              }),
              sx: {
                color: i[800],
                borderColor: i[300]
              },
              children: s("groups.loginWithProvider", {
                provider: l.shortLabel
              })
            }) : null, e.jsx(c, {
              variant: "outlined",
              size: "large",
              onClick: () => y("/signup"),
              children: s("groups.noAccountSignUp")
            })]
          })
        })]
      })]
    })]
  });
}
export { he as default };