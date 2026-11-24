import { bT as s, cg as $, bM as h, fu as F, fv as k, ce as I, cf as T } from "../js.d/main-Cm9wS5wt.js";
import "./react-CjxcGQav.js";
import "./stylis-DdLD6a3t.js";
const c = "/v1/video-meetings",
  v = async (t, e) => k(await h.http.get(t), e),
  g = async (t, e, n) => k(await h.http.post(t, e), n),
  q = async (t, e, n) => k(await h.http.patch(t, e), n);
function r(t) {
  const e = Number(t ?? 0);
  return Number.isFinite(e) ? e : 0;
}
const a = t => typeof t == "string" ? t : t == null ? "" : String(t),
  p = t => t === !0 || t === 1 || t === "1" || t === "true";
function y(t) {
  const e = t ?? {};
  return {
    seq: r(e.seq),
    code: a(e.code),
    room_name: a(e.room_name),
    mode: a(e.mode) === "meeting" ? "meeting" : a(e.mode) === "mic" ? "mic" : "call",
    status: a(e.status) === "ended" ? "ended" : a(e.status) === "scheduled" ? "scheduled" : "open",
    title: a(e.title),
    host_account_seq: r(e.host_account_seq),
    source: ["chat", "calendar", "meeting", "adhoc"].includes(a(e.source)) ? a(e.source) : "adhoc",
    source_seq: r(e.source_seq),
    record: p(e.record),
    started_time: a(e.started_time),
    ended_time: a(e.ended_time),
    scheduled_time: a(e.scheduled_time),
    guest_allowed: p(e.guest_allowed),
    waiting_room: e.waiting_room === void 0 ? !0 : p(e.waiting_room),
    org_logo: a(e.org_logo),
    can_upload: r(e.meeting_seq) > 0
  };
}
function C(t) {
  const e = t;
  if (!e || e.status !== 423) return null;
  const n = [e.details, e.details?.data, e.details?.requestId].filter(i => !!(i && typeof i == "object")),
    o = {
      opensAt: 0,
      scheduledTime: "",
      title: "",
      canOpenEarly: !1,
      message: e.message || s("videoMeeting.cannotJoinYet")
    };
  for (const i of n) {
    if (o.scheduledTime || (o.scheduledTime = a(i.scheduled_time)), o.title || (o.title = a(i.title)), i.can_open_early === !0 && (o.canOpenEarly = !0), o.opensAt) continue;
    const d = Number(i.starts_in_s ?? i.wait_seconds ?? i.opens_in_seconds ?? i.remaining_seconds ?? 0) || 0;
    d > 0 && (o.opensAt = Date.now() + d * 1e3);
    const _ = a(i.opens_at ?? i.join_from);
    if (!o.opensAt && _) {
      const u = new Date(_.replace(" ", "T")).getTime();
      Number.isFinite(u) && (o.opensAt = u);
    }
  }
  return o;
}
function S(t) {
  const e = Math.max(0, Math.ceil(t / 1e3)),
    n = Math.floor(e / 86400),
    o = Math.floor(e % 86400 / 3600),
    i = Math.floor(e % 3600 / 60),
    d = e % 60;
  return n > 0 ? o ? s("videoMeeting.daysHours", {
    days: n,
    hours: o
  }) : s("videoMeeting.days", {
    days: n
  }) : o > 0 ? i ? s("videoMeeting.hoursMinutes", {
    hours: o,
    minutes: i
  }) : s("videoMeeting.hours", {
    hours: o
  }) : i > 0 ? d ? s("videoMeeting.minutesSeconds", {
    minutes: i,
    seconds: d
  }) : s("videoMeeting.minutes", {
    minutes: i
  }) : s("videoMeeting.seconds", {
    seconds: d
  });
}
function R(t) {
  const e = new Date(t.replace(" ", "T"));
  return !t || Number.isNaN(e.getTime()) ? "" : new Intl.DateTimeFormat(I(T()), {
    month: "long",
    day: "numeric",
    weekday: "short",
    hour: "numeric",
    minute: "2-digit"
  }).format(e);
}
function L(t) {
  const e = C(t);
  if (!e) return "";
  if (!e.opensAt) return e.message;
  const n = R(e.scheduledTime),
    o = S(e.opensAt - Date.now());
  return n ? s("videoMeeting.joinWaitWithWhen", {
    when: n,
    remain: o
  }) : s("videoMeeting.joinWait", {
    remain: o
  });
}
class U extends Error {
  status;
  details;
  constructor(e, n, o) {
    super(e), this.status = n, this.details = o;
  }
}
async function f(t, e, n) {
  const o = new URL($, window.location.origin).toString().replace(/\/+$/, ""),
    {
      guestToken: i,
      ...d
    } = e,
    _ = await fetch(`${o}${t}`, {
      ...d,
      credentials: "include",
      headers: {
        Accept: "application/json",
        ...(typeof d.body == "string" ? {
          "Content-Type": "application/json"
        } : {}),
        ...(i ? {
          "X-Guest-Token": i
        } : {}),
        ...(d.headers ?? {})
      }
    });
  let u = {};
  try {
    u = await _.json();
  } catch {}
  if (!_.ok || u.ok === !1) {
    const m = u.details ?? u.data ?? u.requestId;
    throw new U(u.message || u.error || n, _.status, m && typeof m == "object" ? m : void 0);
  }
  return u.data ?? u;
}
function M(t) {
  const e = t ?? {};
  return {
    meeting: y(e.meeting),
    livekit_url: a(e.livekit_url),
    token: a(e.token),
    participant_seq: r(e.participant_seq),
    recording: typeof e.recording == "boolean" ? e.recording : void 0,
    recording_since: r(e.recording_since),
    meet_token: a(e.meet_token)
  };
}
function A(t) {
  const e = t ?? {},
    n = a(e.role),
    o = a(e.knock_status);
  return {
    participant_seq: r(e.participant_seq),
    account_seq: r(e.account_seq),
    name: a(e.name),
    avatar: a(e.avatar),
    role: n === "host" || n === "guest" || n === "recorder" ? n : "member",
    joined_time: a(e.joined_time),
    left_time: a(e.left_time),
    guest: p(e.guest) || n === "guest",
    knock_status: o === "waiting" || o === "approved" || o === "denied" ? o : "",
    identity: a(e.identity)
  };
}
function z(t) {
  const e = t;
  if (!e || e.status !== 409 || !e.details) return "";
  const o = [e.details, e.details.data, e.details.requestId].map(i => i && typeof i == "object" ? i.code : void 0).find(i => typeof i == "string") ?? "";
  return /^[a-z0-9]{8,}$/i.test(o) && o !== o.toUpperCase() ? o : "";
}
function j(t) {
  const e = t ?? {},
    n = a(e.status);
  return {
    title: a(e.title),
    org_name: a(e.org_name),
    org_logo: a(e.org_logo),
    guest_allowed: p(e.guest_allowed),
    guest_message: a(e.guest_message),
    waiting_room: e.waiting_room === void 0 ? !0 : p(e.waiting_room),
    status: n === "ended" ? "ended" : n === "scheduled" ? "scheduled" : "open",
    record: p(e.record),
    scheduled_time: a(e.scheduled_time),
    starts_in_s: r(e.starts_in_s),
    host_name: a(e.host_name),
    can_upload: p(e.can_upload)
  };
}
function x(t) {
  const e = t ?? {};
  return {
    approved: e.approved === !0 ? !0 : e.approved === !1 ? !1 : null,
    ended: p(e.ended),
    token: a(e.token),
    livekit_url: a(e.livekit_url),
    identity: a(e.identity),
    meeting: e.meeting && typeof e.meeting == "object" ? y(e.meeting) : null
  };
}
const D = {
    create: async t => M(await g(`${c}`, t, s("videoMeeting.startCallFailed"))),
    join: async (t, e = {}) => M(await g(`${c}/${encodeURIComponent(t)}/join`, e.early ? {
      early: !0
    } : {}, s("videoMeeting.joinFailed"))),
    leave: t => g(`${c}/${encodeURIComponent(t)}/leave`, {}, s("videoMeeting.leaveNotifyFailed")),
    end: (t, e = {}) => g(`${c}/${encodeURIComponent(t)}/end`, e.discard ? {
      discard: !0
    } : {}, s("videoMeeting.endFailed")),
    mute: (t, e) => g(`${c}/${encodeURIComponent(t)}/mute`, {
      identity: e
    }, s("videoMeeting.muteFailed")),
    kick: (t, e) => g(`${c}/${encodeURIComponent(t)}/kick`, {
      identity: e
    }, s("videoMeeting.kickFailed")),
    decline: t => g(`${c}/${encodeURIComponent(t)}/decline`, {}, s("videoMeeting.declineFailed")),
    detail: async t => {
      const e = await v(`${c}/${encodeURIComponent(t)}`, s("videoMeeting.loadFailed")),
        n = a(e.audio_url);
      return {
        meeting: y(e.meeting),
        participants: (e.participants ?? []).map(A),
        recording: p(e.recording),
        transcript: a(e.transcript),
        audioUrl: n ? `${$}${n}` : ""
      };
    },
    open: async (t, e) => {
      const n = await v(`${c}/open?source=${t}&source_seq=${e}`, s("videoMeeting.openCheckFailed")),
        o = n ?? null,
        i = o?.meeting ?? n;
      return !i || typeof i != "object" || !a(i.code) ? null : {
        meeting: y(i),
        count: r(o?.count),
        recording: p(o?.recording)
      };
    },
    recording: (t, e) => g(`${c}/${encodeURIComponent(t)}/recording`, {
      on: e
    }, s("videoMeeting.recordingChangeFailed")),
    summarize: (t, e) => g(`${c}/${encodeURIComponent(t)}/summarize`, {
      answer: e
    }, s("videoMeeting.summarizeFailed")),
    saveMeeting: async t => g(`${c}/${encodeURIComponent(t)}/save-meeting`, {}, s("videoMeeting.saveMeetingFailed")),
    publicInfo: async t => j(await f(`${c}/public/${encodeURIComponent(t)}`, {
      method: "GET"
    }, s("videoMeeting.meetingNotFound"))),
    knock: async (t, e) => {
      const n = await f(`${c}/public/${encodeURIComponent(t)}/knock`, {
        method: "POST",
        body: JSON.stringify(e)
      }, s("videoMeeting.knockFailed"));
      return {
        guest_token: a(n.guest_token),
        knock_seq: r(n.knock_seq),
        approved: a(n.status) === "approved"
      };
    },
    knockStatus: async (t, e, n = "") => x(await f(`${c}/public/${encodeURIComponent(t)}/knock/${e}`, {
      method: "GET",
      guestToken: n
    }, s("videoMeeting.knockStatusFailed"))),
    chatFileUpload: async (t, e, n) => {
      const o = new FormData();
      o.append("file", e, e.name);
      const i = n ? await f(`${c}/public/${encodeURIComponent(t)}/chat-files?knock_seq=${n.knockSeq}`, {
        method: "POST",
        body: o,
        guestToken: n.token
      }, s("videoMeeting.uploadFailedName", {
        name: e.name
      })) : k(await h.requestForm("POST", `${c}/${encodeURIComponent(t)}/chat-files`, o, !0), s("videoMeeting.uploadFailedName", {
        name: e.name
      }));
      return {
        uuid: a(i.uuid),
        name: a(i.name) || e.name,
        size: r(i.size) || e.size,
        mime: a(i.mime) || e.type
      };
    },
    chatFileBlob: async (t, e, n, o) => {
      if (o) {
        const i = new URL($, window.location.origin).toString().replace(/\/+$/, ""),
          d = await fetch(`${i}${c}/public/${encodeURIComponent(t)}/chat-files/${encodeURIComponent(e)}?knock_seq=${o.knockSeq}`, {
            credentials: "include",
            headers: o.token ? {
              "X-Guest-Token": o.token
            } : {}
          });
        if (!d.ok) throw new Error(s("videoMeeting.downloadFailed"));
        return new Blob([await d.arrayBuffer()], {
          type: n
        });
      }
      try {
        return new Blob([await h.requestBinary("GET", `${c}/${encodeURIComponent(t)}/chat-files/${encodeURIComponent(e)}`)], {
          type: n
        });
      } catch (i) {
        throw new Error(F(i, s("videoMeeting.downloadFailed")));
      }
    },
    chatTranslate: async (t, e, n, o, i) => {
      const d = {
          target: e,
          items: n,
          context: o
        },
        _ = i ? await f(`${c}/public/${encodeURIComponent(t)}/chat-translate?knock_seq=${i.knockSeq}`, {
          method: "POST",
          body: JSON.stringify(d),
          guestToken: i.token
        }, s("videoMeeting.translateFailed")) : await g(`${c}/${encodeURIComponent(t)}/chat-translate`, d, s("videoMeeting.translateFailed"));
      return (Array.isArray(_?.items) ? _.items : []).map(u => {
        const m = u ?? {};
        return {
          id: a(m.id),
          text: a(m.text),
          source: a(m.source),
          same: m.same === !0,
          limited: m.limited === !0,
          limitReason: a(m.limit_reason)
        };
      });
    },
    guestLeave: (t, e, n = "") => f(`${c}/public/${encodeURIComponent(t)}/leave`, {
      method: "POST",
      body: JSON.stringify({
        knock_seq: e
      }),
      guestToken: n
    }, s("videoMeeting.leaveFailed")).catch(() => {}),
    answerKnock: (t, e, n) => g(`${c}/${encodeURIComponent(t)}/knock/${e}`, {
      approve: n
    }, n ? s("videoMeeting.approveFailed") : s("videoMeeting.rejectFailed"))
  },
  w = 30;
function N(t) {
  const e = t ?? {},
    n = Math.trunc(r(e.max_participants));
  return {
    ask_summary: e.ask_summary !== !1,
    record_meetings: e.record_meetings !== !1,
    max_participants: n >= 2 && n <= w ? n : w,
    folder_seq: Math.max(0, Math.trunc(r(e.folder_seq))),
    guest_allowed: e.guest_allowed !== !1,
    approver: a(e.approver) === "members" ? "members" : "host",
    can_edit: e.can_edit === void 0 ? !0 : p(e.can_edit),
    folders: Array.isArray(e.folders) ? e.folders.map(o => {
      const i = o ?? {};
      return {
        seq: r(i.seq),
        name: a(i.name),
        parent_seq: r(i.parent_seq)
      };
    }) : [],
    max_participants_cap: r(e.max_participants_cap) || w
  };
}
const W = {
  get: async t => N(await v(`/v1/groups/${t}/video-meeting-settings`, s("videoMeeting.orgSettingsLoadFailed"))),
  save: (t, e) => q(`/v1/groups/${t}/video-meeting-settings`, e, s("videoMeeting.orgSettingsSaveFailed"))
};
function O(t) {
  const e = t ?? {},
    n = e.settings ?? {},
    o = e.pricing ?? {},
    i = e.usage ?? {},
    d = m => {
      const l = m ?? {};
      return {
        date: a(l.date),
        bytes_in: r(l.bytes_in),
        bytes_out: r(l.bytes_out),
        rooms_peak: r(l.rooms_peak),
        participants_peak: r(l.participants_peak),
        alerted: p(l.alerted)
      };
    },
    _ = m => {
      const l = m ?? {};
      return {
        org_seq: r(l.org_seq),
        org_name: a(l.org_name) || (r(l.org_seq) ? s("videoMeeting.orgOf", {
          seq: r(l.org_seq)
        }) : s("videoMeeting.operatorNoOrg")),
        participant_minutes: r(l.participant_minutes),
        meeting_count: r(l.meeting_count),
        max_participants: r(l.max_participants),
        hours: r(l.hours),
        billable_hours: r(l.billable_hours),
        estimated_amount: r(l.estimated_amount)
      };
    },
    u = r(n.retain_unsaved_hours);
  return {
    settings: {
      max_rooms: r(n.max_rooms) || 2,
      daily_traffic_alert_gb: r(n.daily_traffic_alert_gb) || 20,
      ...(u ? {
        retain_unsaved_hours: u
      } : {})
    },
    pricing: {
      price_per_participant_hour: r(o.price_per_participant_hour),
      free_participant_hours: r(o.free_participant_hours)
    },
    traffic: Array.isArray(e.traffic) ? e.traffic.map(d) : [],
    usage: {
      from: a(i.from),
      to: a(i.to),
      orgs: Array.isArray(i.orgs) ? i.orgs.map(_) : []
    },
    open_rooms: e.open_rooms === void 0 || e.open_rooms === null ? null : r(e.open_rooms)
  };
}
function b(t) {
  const e = t ?? {},
    n = e.settings ?? {},
    o = r(n.retain_unsaved_hours);
  return {
    settings: {
      max_rooms: r(n.max_rooms) || 2,
      daily_traffic_alert_gb: r(n.daily_traffic_alert_gb) || 20,
      retain_unsaved_hours: o || 24
    },
    open_rooms: r(e.open_rooms)
  };
}
const G = {
  traffic: async t => O(await v(`${c}/traffic?days=${t}`, s("videoMeeting.trafficLoadFailed"))),
  settings: async () => b(await v(`${c}/operator-settings`, s("videoMeeting.operatorSettingsLoadFailed"))),
  saveSettings: async t => b(await q(`${c}/operator-settings`, t, s("videoMeeting.operatorSettingsSaveFailed")))
};
export { w as VIDEO_MAX_PARTICIPANTS_CAP, z as conflictMeetingCode, L as joinWaitMessage, C as joinWaitOf, S as remainText, R as scheduledText, O as toTrafficReport, y as toVideoMeeting, N as toVideoOrgSettings, D as videoMeetingApi, W as videoMeetingSettingsApi, G as videoOperatorApi };