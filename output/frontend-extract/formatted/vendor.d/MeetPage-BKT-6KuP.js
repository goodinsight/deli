import { j as e, r as i, k as Be, u as Re, i as _e } from "./react-CjxcGQav.js";
import { c as pe, s as T, rB as Ae, bv as L, B as a, L as x, bQ as v, bT as h, K as Z, aq as ke, al as De, ar as We, D as Oe, e as Te, cI as Le, u as qe, cz as Ne, bO as Se, z as fe } from "../js.d/main-Cm9wS5wt.js";
import { scheduledText as Pe, remainText as Fe, videoMeetingApi as xe, joinWaitOf as He, joinWaitMessage as Ve } from "./videoMeetingApi-BCL1yHsp.js";
import { o as Ge, R as Me, i as Je, u as Ke, b as $e, f as ye, q as Ue, t as Ye, l as we, v as Qe, x as Xe, y as Ce, z as Ze } from "./callStore-DH1_RYeP.js";
import { F as Ee, a as be, M as et, V as tt, B as nt, I as ot, b as it, c as st } from "./MeetRoomUI-B9KJeSBQ.js";
import { T as rt } from "./TaskhamLogoIcon-D-7jf3TJ.js";
import { M as at } from "./videoLink-BfLN3LRj.js";
import { G as ct } from "./MeetingRecordingPlayer-vear-u6W.js";
import { r as lt } from "./ChatRoomView-DTjnT2W1.js";
import "./stylis-DdLD6a3t.js";
import "./teamMembers-0yRsmqL6.js";
import "./aliasStore-DiN6Kp-5.js";
import "./ForwardMessageDialog-CaXjV13U.js";
import "./squircle-CQM8EvXm.js";
import "./Person-DnoEHesw.js";
import "./DrawOutlined-Ciurzwfe.js";
import "./shareArticle-Cy4lemZ5.js";
import "./AccountAvatar-DtrhoS_d.js";
import "./PersonRemoveOutlined-CyeIj2nP.js";
import "./EmojiPanel-DTZZq0Nb.js";
import "./formatFileSize-Cwk2MLba.js";
import "./largeFile-DlThjw63.js";
import "./InsertDriveFileOutlined-DcD-Yh-v.js";
import "./meetingsApi-CCkjq69B.js";
import "./nativeRecordingSync-CMpETFg9.js";
import "./pendingRecordings-DpKJ8Y2R.js";
import "./chatPrefs-Be7HCbgk.js";
import "./profileApi-Btafs-pM.js";
import "./FileDropOverlay-Bw4w8zRu.js";
import "./profileEcho-q2FaD_03.js";
import "./ContactPhoneOutlined-DpFEzROB.js";
import "./PlayArrowRounded-emG8NLik.js";
import "./StopCircleOutlined-vWHA8Xrv.js";
import "./uploadGuard-BK1B6cyC.js";
import "./PhoneOutlined-Bjc_e42S.js";
import "./PhoneMissedOutlined-Cf-_1h4d.js";
import "./meetingCalendar-_jcQJ1qd.js";
import "./useFileViewer-B-2ewnr3.js";
import "./documentViewerStore-BlSjH3BG.js";
import "./CheckRounded-q96oOTwH.js";
const dt = pe(e.jsx("path", {
    d: "M17 12h-5v5h5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1zm3 18H5V8h14z"
  })),
  Ie = pe(e.jsx("path", {
    d: "M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9"
  })),
  ut = pe(e.jsx("path", {
    d: "m6 2 .01 6L10 12l-3.99 4.01L6 22h12v-6l-4-4 4-3.99V2zm10 14.5V20H8v-3.5l4-4z"
  })),
  f = {
    page: T[200],
    card: "#fff",
    line: Ae[300],
    text: T[900],
    sub: T[500],
    iconOn: T[700],
    iconOff: T[400],
    preview: T[900]
  };
function gt({
  wait: t,
  onBack: n,
  onOpen: s,
  onOpenEarly: m
}) {
  const o = L(),
    [j, u] = i.useState(() => Date.now()),
    g = t.opensAt ? t.opensAt - j : 0;
  i.useEffect(() => {
    if (!t.opensAt) return;
    const A = window.setInterval(() => u(Date.now()), g <= 36e5 ? 1e3 : 3e4);
    return () => window.clearInterval(A);
  }, [t.opensAt, g <= 36e5]);
  const I = !!t.opensAt && g <= 0;
  i.useEffect(() => {
    I && s();
  }, [I]);
  const S = Pe(t.scheduledTime);
  return e.jsx(a, {
    sx: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      p: 3
    },
    children: e.jsxs(a, {
      sx: {
        textAlign: "center",
        maxWidth: 420,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1
      },
      children: [e.jsx(dt, {
        sx: {
          fontSize: 48,
          color: f.iconOff
        }
      }), e.jsx(x, {
        sx: {
          fontSize: "1.25rem",
          fontWeight: 700,
          wordBreak: "keep-all"
        },
        children: t.title || o("videoMeeting.scheduledMeeting")
      }), S ? e.jsx(x, {
        sx: {
          fontSize: "1rem",
          fontWeight: 600
        },
        children: o("videoMeeting.startsAt", {
          when: S
        })
      }) : null, e.jsx(x, {
        sx: {
          fontSize: "0.9375rem",
          color: f.sub,
          wordBreak: "keep-all"
        },
        children: t.opensAt ? g > 0 ? o("videoMeeting.joinOpensIn", {
          remain: Fe(g)
        }) : o("videoMeeting.canJoinNowOpening") : t.message
      }), t.opensAt && g > 0 && g <= 36e5 ? e.jsx(x, {
        sx: {
          fontSize: "0.9375rem",
          color: f.sub,
          wordBreak: "keep-all"
        },
        children: o("videoMeeting.autoJoinHint")
      }) : null, e.jsxs(a, {
        sx: {
          display: "flex",
          gap: 1.5,
          justifyContent: "center",
          mt: 1.5
        },
        children: [e.jsx(v, {
          variant: "outlined",
          onClick: n,
          sx: {
            fontSize: "1rem"
          },
          children: o("videoMeeting.goBack")
        }), t.canOpenEarly ? e.jsx(v, {
          variant: "contained",
          onClick: m,
          sx: {
            fontSize: "1rem"
          },
          children: o("videoMeeting.openNow")
        }) : t.opensAt ? null : e.jsx(v, {
          variant: "contained",
          onClick: s,
          sx: {
            fontSize: "1rem"
          },
          children: o("videoMeeting.retry")
        })]
      })]
    })
  });
}
function X({
  on: t,
  label: n,
  icon: s,
  onClick: m,
  disabled: o
}) {
  return e.jsxs(a, {
    component: "label",
    sx: {
      display: "flex",
      alignItems: "center",
      gap: 1.5,
      minHeight: 36,
      cursor: o ? "default" : "pointer",
      opacity: o ? .5 : 1,
      "& .MuiSvgIcon-root": {
        fontSize: 20,
        color: t ? f.iconOn : f.iconOff
      }
    },
    children: [s, e.jsx(x, {
      sx: {
        flex: 1,
        minWidth: 0,
        fontSize: "0.875rem"
      },
      children: n
    }), e.jsx(ot, {
      size: "small",
      checked: t,
      onChange: m,
      disabled: o
    })]
  });
}
const ft = /virtual|screen[\s_-]?(recorder|capture)|\bobs\b|manycam|xsplit|snap camera|splitcam|camtwist|mmhmm|\bvcam\b/i,
  ze = t => ft.test(t.label);
function xt({
  meeting: t,
  controller: n,
  isMobile: s,
  joining: m,
  onJoin: o,
  onCancel: j
}) {
  const u = L(),
    [g, I] = i.useState({
      audio: [],
      video: []
    }),
    [S, A] = i.useState(""),
    [z, F] = i.useState(""),
    [O, D] = i.useState(!0),
    [E, $] = i.useState(!1),
    [M, ee] = i.useState(!1),
    [te, ne] = i.useState(!1),
    [l, k] = i.useState(null),
    [H, q] = i.useState(!1),
    c = n.getSnapshot().noiseSupported,
    [oe, ie] = i.useState(() => c && Ge()),
    [N, V] = i.useState(null),
    [se, U] = i.useState(""),
    G = i.useRef(null);
  i.useEffect(() => {
    let d = !0;
    return n.checkBlurSupport().catch(() => !1).then(C => d && k(C)), (async () => {
      try {
        const [C, _] = await Promise.all([Me.getLocalDevices("audioinput", !0), Me.getLocalDevices("videoinput", !0)]);
        if (!d) return;
        const J = _.filter(le => !ze(le)),
          Q = [...J, ..._.filter(ze)];
        I({
          audio: C,
          video: Q
        }), Q[0] && F(Q[0].deviceId), $(J.length > 0);
      } catch {}
      d && q(!0);
    })(), () => {
      d = !1;
    };
  }, [n]), i.useEffect(() => {
    if (!H) return;
    let d = !0;
    return U(""), n.startPreview({
      audioDeviceId: S || void 0,
      videoDeviceId: z || void 0
    }, E && !M).then(({
      video: C
    }) => {
      d && V(C ?? null);
    }).catch(C => {
      if (!d) return;
      const _ = C?.name ?? "";
      U(_ === "NotAllowedError" ? h("videoMeeting.deviceDeniedReopen") : _ === "NotFoundError" ? h("videoMeeting.deviceNotFound") : C instanceof Error ? C.message : h("videoMeeting.deviceFailed")), V(null);
    }), () => {
      d = !1;
    };
  }, [n, H, S, z, E, M]);
  const Y = H && l !== null;
  i.useEffect(() => {
    const d = G.current;
    if (!(!d || !N)) return N.attach(d), () => {
      N.detach(d);
    };
  }, [N, Y]);
  const ce = async () => {
      const d = !te;
      ne(d), await n.setBlur(d);
    },
    re = () => {
      const d = !oe;
      ie(d), Je(d), n.setNoise(d);
    },
    W = (d, C) => d.map((_, J) => ({
      value: _.deviceId,
      label: _.label || `${C} ${J + 1}`
    }));
  if (!Y) return e.jsx(a, {
    sx: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bgcolor: s ? f.card : f.page
    },
    children: e.jsx(Z, {})
  });
  const P = s ? 2 : 3,
    B = s ? 1.5 : 2;
  return e.jsx(a, {
    sx: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: s ? "stretch" : "center",
      justifyContent: "center",
      bgcolor: s ? f.card : f.page,
      color: f.text,
      p: s ? 0 : 2,
      overflowY: "auto"
    },
    children: e.jsxs(a, {
      sx: {
        width: "100%",
        maxWidth: s ? "none" : 960,
        minHeight: s ? "100%" : void 0,
        display: "flex",
        flexDirection: "column",
        borderRadius: s ? 0 : 2,
        bgcolor: f.card
      },
      children: [e.jsxs(a, {
        sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          columnGap: 2,
          rowGap: .5,
          px: P,
          py: B,
          borderBottom: `1px solid ${f.line}`
        },
        children: [t.org_logo ? e.jsxs(a, {
          sx: {
            display: "flex",
            flexDirection: s ? "column" : "row",
            alignItems: s ? "flex-start" : "center",
            gap: s ? 1 : 2
          },
          children: [e.jsx(a, {
            component: "img",
            src: t.org_logo,
            alt: "",
            sx: {
              height: 40,
              maxWidth: 160,
              objectFit: "contain"
            }
          }), e.jsx(x, {
            sx: {
              fontSize: "1.25rem",
              fontWeight: 700,
              wordBreak: "keep-all"
            },
            children: t.title || u("videoMeeting.videoMeeting")
          })]
        }) : e.jsxs(a, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1
          },
          children: [e.jsx(rt, {
            size: 30
          }), e.jsx(x, {
            sx: {
              fontSize: "1.25rem",
              fontWeight: 700,
              wordBreak: "keep-all"
            },
            children: t.title || u("videoMeeting.videoMeeting")
          })]
        }), t.record ? e.jsxs(a, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: .75
          },
          children: [e.jsx(Ee, {
            sx: {
              fontSize: 14,
              color: "#ef4444"
            }
          }), e.jsx(x, {
            sx: {
              fontSize: "0.9375rem",
              color: f.sub
            },
            children: u("videoMeeting.willBeRecorded")
          })]
        }) : null]
      }), e.jsxs(a, {
        sx: {
          display: "flex",
          flexDirection: s ? "column" : "row",
          gap: 3,
          alignItems: "stretch",
          p: P,
          flex: s ? 1 : void 0
        },
        children: [e.jsxs(a, {
          sx: {
            flex: s ? "none" : 3,
            position: "relative",
            aspectRatio: "16 / 9",
            alignSelf: s ? void 0 : "flex-start",
            borderRadius: 2,
            overflow: "hidden",
            bgcolor: f.preview
          },
          children: [N && E && !M ? e.jsx(a, {
            component: "video",
            ref: G,
            autoPlay: !0,
            playsInline: !0,
            muted: !0,
            sx: {
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: s ? "scaleX(-1)" : void 0
            }
          }) : e.jsxs(a, {
            sx: {
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 1,
              color: T[300]
            },
            children: [M ? e.jsx(Ie, {
              sx: {
                fontSize: 48
              }
            }) : e.jsx(be, {
              sx: {
                fontSize: 48
              }
            }), e.jsx(x, {
              sx: {
                fontSize: "1rem"
              },
              children: u(M ? "videoMeeting.audioOnlyJoining" : "videoMeeting.cameraIsOff")
            })]
          }), se ? e.jsx(a, {
            sx: {
              position: "absolute",
              left: 12,
              right: 12,
              bottom: 12,
              px: 1.5,
              py: 1,
              borderRadius: 1,
              bgcolor: "#fee2e2",
              color: "#991b1b"
            },
            children: e.jsx(x, {
              sx: {
                fontSize: "0.9375rem",
                wordBreak: "keep-all"
              },
              children: se
            })
          }) : null]
        }), e.jsxs(a, {
          sx: {
            flex: s ? "none" : 2,
            display: "flex",
            flexDirection: "column",
            gap: 1.5
          },
          children: [e.jsxs(a, {
            sx: {
              display: "flex",
              flexDirection: "column"
            },
            children: [e.jsx(X, {
              on: O,
              label: u("videoMeeting.mic"),
              icon: O ? e.jsx(at, {}) : e.jsx(et, {}),
              onClick: () => D(!O)
            }), e.jsx(X, {
              on: E && !M,
              label: u("videoMeeting.camera"),
              icon: E && !M ? e.jsx(tt, {}) : e.jsx(be, {}),
              onClick: () => $(!E),
              disabled: M
            }), l ? e.jsx(X, {
              on: te,
              label: u("videoMeeting.blurBackground"),
              icon: e.jsx(nt, {}),
              onClick: () => {
                ce();
              },
              disabled: !E || M
            }) : null, e.jsx(X, {
              on: M,
              label: u("videoMeeting.audioOnly"),
              icon: e.jsx(Ie, {}),
              onClick: () => ee(!M)
            }), c ? e.jsx(X, {
              on: oe,
              label: u("videoMeeting.noiseSuppression"),
              icon: e.jsx(ct, {}),
              onClick: re,
              disabled: !O
            }) : null]
          }), e.jsxs(a, {
            sx: {
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              mt: "auto"
            },
            children: [g.audio.length > 0 ? e.jsx(ke, {
              value: S || g.audio[0]?.deviceId || "",
              onChange: d => A(String(d.target.value)),
              options: W(g.audio, u("videoMeeting.mic")),
              showEmptyOption: !1,
              size: "small",
              fullWidth: !0
            }) : null, g.video.length > 0 && !M ? e.jsx(ke, {
              value: z || g.video[0]?.deviceId || "",
              onChange: d => F(String(d.target.value)),
              options: W(g.video, u("videoMeeting.camera")),
              showEmptyOption: !1,
              size: "small",
              fullWidth: !0
            }) : null]
          })]
        })]
      }), e.jsxs(a, {
        sx: {
          display: "flex",
          justifyContent: "flex-end",
          gap: s ? 1.5 : 2,
          px: P,
          py: B,
          borderTop: `1px solid ${f.line}`
        },
        children: [e.jsx(v, {
          variant: "outlined",
          onClick: j,
          disabled: m,
          sx: {
            flex: s ? 1 : "none",
            px: 3,
            fontSize: "1rem"
          },
          children: u("videoMeeting.cancel")
        }), e.jsx(v, {
          variant: "contained",
          disabled: m,
          onClick: () => o({
            micOn: O,
            camOn: E && !M,
            audioOnly: M,
            devices: {
              audioDeviceId: S || void 0,
              videoDeviceId: z || void 0
            }
          }),
          startIcon: m ? e.jsx(Z, {
            size: 18,
            sx: {
              color: "#fff"
            }
          }) : void 0,
          sx: {
            flex: s ? 2 : "none",
            px: 3,
            fontSize: "1rem"
          },
          children: u("videoMeeting.join")
        })]
      })]
    })
  });
}
function he({
  info: t,
  children: n
}) {
  const s = L();
  return e.jsx(a, {
    sx: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: f.text,
      p: 2,
      overflowY: "auto"
    },
    children: e.jsxs(a, {
      sx: {
        width: "100%",
        maxWidth: 420,
        display: "flex",
        flexDirection: "column",
        gap: 2.5
      },
      children: [t ? e.jsxs(a, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 1.5
        },
        children: [t.org_logo ? e.jsx(a, {
          component: "img",
          src: t.org_logo,
          alt: "",
          sx: {
            height: 40,
            maxWidth: 160,
            objectFit: "contain"
          }
        }) : null, e.jsxs(a, {
          sx: {
            minWidth: 0
          },
          children: [e.jsx(x, {
            noWrap: !0,
            sx: {
              fontSize: "0.9375rem",
              color: f.sub
            },
            children: t.org_name || s("videoMeeting.taskhamVideoMeeting")
          }), e.jsx(x, {
            sx: {
              fontSize: "1.25rem",
              fontWeight: 700,
              wordBreak: "keep-all"
            },
            children: t.title || s("videoMeeting.videoMeeting")
          })]
        })]
      }) : null, n]
    })
  });
}
function mt({
  info: t,
  busy: n,
  onKnock: s,
  onLogin: m
}) {
  const o = L(),
    [j, u] = i.useState(""),
    [g, I] = i.useState(!1),
    [S, A] = i.useState(!1),
    z = j.trim().length >= 1,
    F = z && (!t.record || g);
  return e.jsx(he, {
    info: t,
    children: e.jsxs(a, {
      sx: {
        display: "flex",
        flexDirection: "column",
        gap: 1.5
      },
      children: [e.jsx(De, {
        label: o("videoMeeting.name"),
        value: j,
        onChange: O => u(O.target.value),
        onBlur: () => A(!0),
        placeholder: o("videoMeeting.nameInMeeting"),
        fullWidth: !0,
        autoComplete: "name",
        error: S && !z,
        slotProps: {
          htmlInput: {
            maxLength: 40
          }
        },
        disabled: n
      }), t.record ? e.jsxs(a, {
        sx: {
          display: "flex",
          alignItems: "flex-start",
          gap: .5,
          px: 1,
          py: .75,
          borderRadius: 1.5,
          bgcolor: f.line
        },
        children: [e.jsx(We, {
          checked: g,
          onChange: (O, D) => I(D),
          disabled: n,
          sx: {
            mt: -.5
          },
          slotProps: {
            input: {
              "aria-label": o("videoMeeting.recordConsent")
            }
          }
        }), e.jsxs(a, {
          children: [e.jsxs(a, {
            sx: {
              display: "flex",
              alignItems: "center",
              gap: .75
            },
            children: [e.jsx(Ee, {
              sx: {
                fontSize: 14,
                color: "#ef4444"
              }
            }), e.jsx(x, {
              sx: {
                fontSize: "0.9375rem",
                fontWeight: 600
              },
              children: o("videoMeeting.thisIsRecorded")
            })]
          }), e.jsx(x, {
            sx: {
              fontSize: "0.875rem",
              color: f.sub,
              wordBreak: "keep-all"
            },
            children: o("videoMeeting.recordConsentText")
          })]
        })]
      }) : null, e.jsx(v, {
        variant: "contained",
        disabled: !F || n,
        onClick: () => s(j.trim(), ""),
        startIcon: n ? e.jsx(Z, {
          size: 18,
          sx: {
            color: "#fff"
          }
        }) : void 0,
        sx: {
          height: 56,
          fontSize: "1rem"
        },
        children: t.waiting_room ? o("videoMeeting.requestJoin") : o("videoMeeting.join")
      }), e.jsx(x, {
        sx: {
          fontSize: "0.875rem",
          color: f.sub,
          textAlign: "center",
          wordBreak: "keep-all"
        },
        children: t.starts_in_s > 0 ? t.scheduled_time ? o("videoMeeting.joinInMinutesAt", {
          minutes: Math.max(1, Math.ceil(t.starts_in_s / 60)),
          start: t.scheduled_time.slice(0, 16)
        }) : o("videoMeeting.joinInMinutes", {
          minutes: Math.max(1, Math.ceil(t.starts_in_s / 60))
        }) : t.waiting_room ? o("videoMeeting.joinOnApproval") : ""
      }), e.jsx(v, {
        variant: "text",
        onClick: m,
        disabled: n,
        sx: {
          color: f.sub,
          fontSize: "0.9375rem"
        },
        children: o("videoMeeting.memberLogin")
      })]
    })
  });
}
function pt({
  info: t,
  name: n,
  onCancel: s
}) {
  const m = L();
  return e.jsx(he, {
    info: t,
    children: e.jsxs(a, {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1.5,
        py: 2
      },
      children: [e.jsx(ut, {
        sx: {
          fontSize: 48,
          color: "#f59e0b",
          animation: "meet-wait 2s infinite",
          "@keyframes meet-wait": {
            "50%": {
              transform: "rotate(180deg)"
            }
          }
        }
      }), e.jsx(x, {
        sx: {
          fontSize: "1.125rem",
          fontWeight: 700
        },
        children: m("videoMeeting.waitingHost")
      }), e.jsx(x, {
        sx: {
          fontSize: "0.9375rem",
          color: f.sub,
          textAlign: "center",
          wordBreak: "keep-all"
        },
        children: m("videoMeeting.requestedAs", {
          name: n
        })
      }), e.jsx(v, {
        variant: "outlined",
        onClick: s,
        sx: {
          mt: 1,
          fontSize: "0.9375rem"
        },
        children: m("videoMeeting.cancelRequest")
      })]
    })
  });
}
function ae({
  info: t,
  title: n,
  text: s,
  onLogin: m,
  onRetry: o
}) {
  const j = L();
  return e.jsx(he, {
    info: t,
    children: e.jsxs(a, {
      sx: {
        textAlign: "center",
        py: 2
      },
      children: [e.jsx(x, {
        sx: {
          fontSize: "1.125rem",
          fontWeight: 700,
          wordBreak: "keep-all"
        },
        children: n
      }), s ? e.jsx(x, {
        sx: {
          fontSize: "0.9375rem",
          color: f.sub,
          mt: 1,
          wordBreak: "keep-all"
        },
        children: s
      }) : null, e.jsxs(a, {
        sx: {
          display: "flex",
          gap: 1.5,
          justifyContent: "center",
          mt: 2.5
        },
        children: [o ? e.jsx(v, {
          variant: "outlined",
          onClick: o,
          sx: {
            fontSize: "1rem"
          },
          children: j("videoMeeting.retry")
        }) : null, m ? e.jsx(v, {
          variant: "contained",
          onClick: m,
          sx: {
            fontSize: "1rem"
          },
          children: j("videoMeeting.login")
        }) : null]
      })]
    })
  });
}
function ht({
  others: t,
  recording: n,
  onChoose: s,
  onCancel: m
}) {
  const o = L(),
    j = Oe(),
    u = Te({
      modalId: "video-end-meeting",
      initialOpen: !0,
      onClose: m
    });
  i.useEffect(() => {
    u.open();
  }, []);
  const g = S => {
      s(S), u.close();
    },
    I = [{
      id: "video-end-meeting",
      showTitle: !1,
      children: e.jsxs(a, {
        component: "ul",
        sx: {
          listStyle: "none",
          m: 0,
          p: 0,
          display: "flex",
          flexDirection: "column",
          gap: 1
        },
        children: [e.jsx(x, {
          component: "li",
          sx: {
            fontSize: 15,
            wordBreak: "keep-all"
          },
          children: o(n ? "videoMeeting.saveAttachesRecording" : "videoMeeting.saveKeepsNotes")
        }), e.jsx(x, {
          component: "li",
          sx: {
            fontSize: 15,
            wordBreak: "keep-all"
          },
          children: o(n ? "videoMeeting.discardDeletesRecording" : "videoMeeting.discardDeletesNotes")
        }), t > 0 ? e.jsx(x, {
          component: "li",
          sx: {
            fontSize: 14,
            color: "text.secondary"
          },
          children: o("videoMeeting.othersLeaveToo", {
            count: t
          })
        }) : null]
      })
    }];
  return e.jsx(Le, {
    open: u.isOpen,
    onClose: u.close,
    title: o("videoMeeting.endMeetingConfirm"),
    maxWidth: "xs",
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
    fontScale: {
      enabled: !1
    },
    tabs: {
      visible: !1
    },
    scrollPastLastSection: !1,
    actions: {
      visible: !0,
      showCancelButton: !1,
      left: j ? void 0 : e.jsx(v, {
        variant: "text",
        color: "error",
        onClick: () => g("discard"),
        children: o("videoMeeting.endWithoutSaving")
      }),
      right: j ? e.jsxs(a, {
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: 1,
          width: "100%"
        },
        children: [e.jsx(v, {
          fullWidth: !0,
          variant: "contained",
          onClick: () => g("save"),
          children: o("videoMeeting.saveAndEnd")
        }), e.jsx(v, {
          fullWidth: !0,
          variant: "outlined",
          color: "error",
          onClick: () => g("discard"),
          children: o("videoMeeting.endWithoutSaving")
        }), e.jsx(v, {
          fullWidth: !0,
          variant: "text",
          onClick: u.close,
          children: o("videoMeeting.cancel")
        })]
      }) : e.jsxs(e.Fragment, {
        children: [e.jsx(v, {
          variant: "text",
          onClick: u.close,
          children: o("videoMeeting.cancel")
        }), e.jsx(v, {
          variant: "contained",
          onClick: () => g("save"),
          children: o("videoMeeting.saveAndEnd")
        })]
      })
    },
    sections: I
  });
}
const me = "meetPage",
  vt = 500;
function jt(t, n) {
  return {
    seq: 0,
    code: t,
    room_name: "",
    mode: "meeting",
    status: "open",
    title: n?.title ?? "",
    host_account_seq: 0,
    source: "adhoc",
    source_seq: 0,
    record: !!n?.record,
    guest_allowed: !0,
    waiting_room: n?.waiting_room ?? !0,
    org_logo: n?.org_logo ?? "",
    can_upload: !!n?.can_upload
  };
}
function kt(t) {
  return t?.meeting.source === "chat" && t.meeting.source_seq ? `/dashboard/chat/${t.meeting.source_seq}` : t?.meeting.source === "meeting" ? "/dashboard/calendar/meetings" : "/dashboard";
}
const K = {
  stage: "idle",
  info: null,
  name: "",
  knockSeq: 0,
  guestToken: "",
  message: ""
};
function cn() {
  const t = L(),
    {
      code: n = ""
    } = Be(),
    s = Re(),
    m = _e(),
    o = Oe(),
    j = qe(),
    u = j.useValue("account"),
    g = j.useValue("logined"),
    I = j.useValue("sessionChecked"),
    S = Number(u?.seq ?? 0) || 0,
    A = Ne(),
    {
      session: z
    } = Ke(),
    F = it(),
    [O, D] = i.useState(""),
    [E, $] = i.useState(null),
    [M, ee] = i.useState(!1),
    [te, ne] = i.useState(!1),
    [l, k] = i.useState(K),
    H = i.useRef(""),
    q = i.useRef("/dashboard"),
    c = z && z.code === n ? z : null;
  c && (q.current = kt(c));
  const oe = !!c?.guest || !g && I;
  i.useEffect(() => {
    S > 0 && $e(S, String(u?.name ?? ""), lt(u?.etc));
  }, [S, u?.name]);
  const ie = !!c?.appHosted,
    N = !!c?.appOpened;
  i.useEffect(() => {
    ie && (B.current = !0, s(q.current, {
      replace: !0
    }));
  }, [ie, N]);
  const V = (r = {}) => {
    D(""), $(null), Qe(n, r).catch(p => {
      const w = He(p);
      w ? $(w) : D(p instanceof Error ? p.message : h("videoMeeting.joinFailed"));
    });
  };
  i.useEffect(() => {
    if (!(!g || !n || H.current === n)) {
      if (z && z.code !== n) {
        D(h("videoMeeting.alreadyInOtherCall"));
        return;
      }
      H.current = n, V();
    }
  }, [g, n]), i.useEffect(() => {
    !I || g || !n || l.stage !== "idle" || (k(r => ({
      ...r,
      stage: "loading"
    })), xe.publicInfo(n).then(r => {
      if (r.status === "ended") return k({
        ...K,
        stage: "closed",
        info: r,
        message: r.guest_message || h("videoMeeting.meetingEnded")
      });
      if (!r.guest_allowed) return k({
        ...K,
        stage: "login-only",
        info: r,
        message: r.guest_message
      });
      k({
        ...K,
        stage: "knock",
        info: r
      });
    }).catch(r => k({
      ...K,
      stage: "error",
      message: r instanceof Error ? r.message : h("videoMeeting.meetingNotFound")
    })));
  }, [I, g, n, l.stage]);
  const se = (r, p = "") => {
    k(w => ({
      ...w,
      stage: "knocking",
      name: r
    })), xe.knock(n, {
      name: r,
      consent: !0,
      ...(p ? {
        email: p
      } : {})
    }).then(({
      knock_seq: w,
      guest_token: b
    }) => k(R => ({
      ...R,
      stage: "waiting",
      knockSeq: w,
      guestToken: b
    }))).catch(w => {
      const b = Ve(w);
      Se(b || (w instanceof Error ? w.message : h("videoMeeting.knockFailed"))), k(R => ({
        ...R,
        stage: "knock"
      }));
    });
  };
  i.useEffect(() => {
    if (l.stage !== "waiting" || !l.knockSeq) return;
    let r = !0,
      p = 0;
    const w = async () => {
      try {
        const b = await xe.knockStatus(n, l.knockSeq, l.guestToken);
        if (!r) return;
        if (b.approved === !0 && b.token) {
          Xe({
            meeting: b.meeting ?? jt(n, l.info),
            livekit_url: b.livekit_url,
            token: b.token,
            participant_seq: l.knockSeq
          }, l.knockSeq, l.guestToken), k(R => ({
            ...R,
            stage: "idle"
          }));
          return;
        }
        if (b.ended) {
          k(R => ({
            ...R,
            stage: "closed",
            message: h("videoMeeting.meetingEnded")
          }));
          return;
        }
        if (b.approved === !1) {
          k(R => ({
            ...R,
            stage: "denied",
            message: h("videoMeeting.hostDenied")
          }));
          return;
        }
      } catch (b) {
        if (!r) return;
        k(R => ({
          ...R,
          stage: "error",
          message: b instanceof Error ? b.message : h("videoMeeting.knockStatusFailed")
        }));
        return;
      }
      p = window.setTimeout(() => {
        w();
      }, vt);
    };
    return w(), () => {
      r = !1, window.clearTimeout(p);
    };
  }, [l.stage, l.knockSeq, n]);
  const U = i.useRef(!1),
    G = i.useRef("");
  i.useEffect(() => {
    if (!c) return;
    const {
      controller: r
    } = c;
    return r.subscribe(() => {
      G.current = r.getSnapshot().endReason;
    });
  }, [c]);
  const Y = i.useRef(!1);
  i.useEffect(() => {
    if (c) {
      U.current = !0, Y.current = c.appHosted, ye("full");
      return;
    }
    if (U.current) {
      if (Y.current) {
        B.current = !0, s(q.current, {
          replace: !0
        });
        return;
      }
      ne(!0);
    }
  }, [c]);
  const ce = G.current === "kicked" ? t("videoMeeting.removedFromCall") : G.current === "duplicate" ? t("videoMeeting.joinedOnOtherDevice") : t("videoMeeting.callEnded"),
    [re, W] = i.useState(null),
    P = i.useRef(() => !1),
    B = i.useRef(!1);
  i.useEffect(() => {
    if (!c || c.prejoin) return;
    const r = window.history.state;
    (!r || !r[me]) && window.history.pushState({
      ...(r ?? {}),
      [me]: n
    }, "");
    const p = () => {
      if (!B.current) {
        if (window.history.pushState({
          [me]: n
        }, ""), P.current()) {
          W({
            others: 0
          });
          return;
        }
        fe({
          message: h("videoMeeting.leaveCallConfirm"),
          confirmText: h("videoMeeting.leave")
        }).then(w => {
          w && C();
        });
      }
    };
    return window.addEventListener("popstate", p), () => window.removeEventListener("popstate", p);
  }, [c?.code, c?.prejoin]), i.useEffect(() => () => Ue(n), [n]);
  const d = () => {
      B.current = !0, s(q.current, {
        replace: !0
      });
    },
    C = async () => {
      if (P.current()) {
        W({
          others: 0
        });
        return;
      }
      B.current = !0;
      const r = !!c?.guest;
      await we(), r || d();
    },
    _ = async () => {
      if (c && c.meeting.mode === "meeting") {
        W({
          others: c.controller.getSnapshot().participants.length
        });
        return;
      }
      (await fe({
        message: h("videoMeeting.endForAllConfirm"),
        confirmText: h("videoMeeting.end")
      })) && (B.current = !0, await Ce(), d());
    },
    J = async r => {
      W(null), B.current = !0, await Ce({
        discard: r === "discard"
      }), d();
    },
    Q = () => {
      B.current = !0, ye("pip"), s(q.current, {
        replace: !0
      });
    },
    le = async () => {
      (await fe({
        message: h("videoMeeting.recordOffConfirm"),
        confirmText: h("videoMeeting.recordOff")
      })) && (await Ze(!1).catch(p => Se(p instanceof Error ? p.message : h("videoMeeting.recordOffFailed"))));
    },
    de = () => s("/login", {
      state: {
        from: m.pathname + m.search
      }
    }),
    ve = !!(c && !c.guest && (c.meeting.host_account_seq === S || A?.role === "owner" || A?.role === "admin")),
    je = c?.meeting.mode === "call";
  P.current = () => !!(c && !c.prejoin && ve && c.meeting.mode === "meeting" && c.controller.getSnapshot().participants.length === 0);
  const ue = (r, p) => e.jsx(a, {
    sx: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      p: 3
    },
    children: e.jsxs(a, {
      sx: {
        textAlign: "center",
        maxWidth: 420
      },
      children: [e.jsx(x, {
        sx: {
          fontSize: "1.125rem",
          fontWeight: 700,
          wordBreak: "keep-all"
        },
        children: r
      }), e.jsx(a, {
        sx: {
          display: "flex",
          gap: 1.5,
          justifyContent: "center",
          mt: 2.5
        },
        children: p
      })]
    })
  });
  let y,
    ge = !1;
  return te ? y = ue(ce, oe ? e.jsx(x, {
    sx: {
      fontSize: "0.9375rem",
      color: f.sub
    },
    children: t("videoMeeting.canCloseWindow")
  }) : e.jsx(v, {
    variant: "contained",
    onClick: d,
    sx: {
      fontSize: "1rem"
    },
    children: t("videoMeeting.goBack")
  })) : O ? y = ue(O, e.jsx(v, {
    variant: "contained",
    onClick: d,
    sx: {
      fontSize: "1rem"
    },
    children: t("videoMeeting.goBack")
  })) : E ? y = e.jsx(gt, {
    wait: E,
    onBack: d,
    onOpen: () => V(),
    onOpenEarly: () => V({
      early: !0
    })
  }) : !c && I && !g ? l.stage === "knock" || l.stage === "knocking" ? y = e.jsx(mt, {
    info: l.info,
    busy: l.stage === "knocking",
    onKnock: se,
    onLogin: de
  }) : l.stage === "waiting" ? y = e.jsx(pt, {
    info: l.info,
    name: l.name,
    onCancel: () => k(r => ({
      ...r,
      stage: "knock",
      knockSeq: 0
    }))
  }) : l.stage === "denied" ? y = e.jsx(ae, {
    info: l.info,
    title: l.message,
    text: t("videoMeeting.canAskAgain"),
    onRetry: () => k(r => ({
      ...r,
      stage: "knock",
      knockSeq: 0
    }))
  }) : l.stage === "login-only" ? y = e.jsx(ae, {
    info: l.info,
    title: l.message || t("videoMeeting.membersOnly"),
    text: t("videoMeeting.loginIfMember"),
    onLogin: de
  }) : l.stage === "closed" ? y = e.jsx(ae, {
    info: l.info,
    title: l.message
  }) : l.stage === "error" ? y = e.jsx(ae, {
    info: l.info,
    title: l.message || t("videoMeeting.meetingNotFoundShort"),
    onRetry: () => k(K),
    onLogin: de
  }) : y = e.jsx(a, {
    sx: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    children: e.jsx(Z, {})
  }) : c ? c.appHosted ? y = ue(t("videoMeeting.connectingToApp"), e.jsx(v, {
    variant: "outlined",
    onClick: d,
    sx: {
      fontSize: "1rem"
    },
    children: t("videoMeeting.close")
  })) : c.prejoin ? y = e.jsx(xt, {
    meeting: c.meeting,
    controller: c.controller,
    isMobile: o,
    joining: M,
    onCancel: () => {
      we(), c.guest ? ne(!0) : d();
    },
    onJoin: r => {
      ee(!0), Ye(r).catch(p => D(p instanceof Error ? p.message : h("videoMeeting.connectFailed"))).finally(() => ee(!1));
    }
  }) : (ge = !0, y = e.jsx(st, {
    session: c,
    isHost: ve,
    isMobile: o,
    avatarOf: F,
    onLeave: () => {
      C();
    },
    onEnd: () => {
      _();
    },
    onMinimize: !o && je ? Q : void 0,
    onRecordOff: je && c.record ? () => {
      le();
    } : void 0
  })) : y = e.jsx(a, {
    sx: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    children: e.jsx(Z, {})
  }), e.jsxs(a, {
    sx: {
      position: "fixed",
      inset: 0,
      bgcolor: ge ? T[900] : o ? f.card : f.page,
      color: ge ? "#fff" : f.text
    },
    children: [y, re ? e.jsx(ht, {
      others: re.others,
      recording: !!c?.record,
      onChoose: r => {
        J(r);
      },
      onCancel: () => W(null)
    }) : null]
  });
}
export { cn as default };