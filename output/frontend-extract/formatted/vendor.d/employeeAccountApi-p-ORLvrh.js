import { bM as o, bT as r, en as s, eo as m } from "../js.d/main-Cm9wS5wt.js";
const i = "/v1/employee-account";
function c(t, e) {
  if (!t || t.ok === !1) throw new Error(t?.error || t?.message || e);
  return t.data;
}
function p(t) {
  const e = t ?? {},
    n = s(e.status);
  return {
    seq: m(e.seq),
    employee_seq: m(e.employee_seq),
    status: n === "accepted" || n === "expired" || n === "canceled" ? n : "pending",
    phone_masked: s(e.phone_masked),
    sent_time: s(e.sent_time),
    expire_time: s(e.expire_time),
    accepted_time: s(e.accepted_time),
    send_count: m(e.send_count)
  };
}
const l = {
  status: async () => {
    const t = await o.http.get(`${i}/status`),
      e = c(t, r("hr.errLoadInviteStatus"));
    return {
      smsEnabled: e?.sms_enabled === !0,
      invites: (e?.invites ?? []).map(p)
    };
  },
  invite: async t => {
    const e = await o.http.post(`${i}/invites`, {
        employee_seqs: t
      }),
      n = c(e, r("hr.errSendInvite"));
    return {
      sent: m(n?.sent),
      results: (n?.results ?? []).map(a => ({
        employeeSeq: m(a.employee_seq),
        ok: a.ok === !0,
        message: s(a.message),
        invite: a.invite ? p(a.invite) : null
      }))
    };
  },
  resend: async t => {
    const e = await o.http.post(`${i}/invites/${t}/resend`, {});
    return p(c(e, r("hr.errResendInvite"))?.invite);
  },
  cancel: async t => {
    const e = await o.http.delete(`${i}/invites/${t}`);
    return p(c(e, r("hr.errCancelInvite"))?.invite);
  },
  createAccount: async t => {
    const e = await o.http.post(`${i}/accounts`, {
        employee_seq: t.employeeSeq,
        email: t.email,
        channel: t.channel
      }),
      n = c(e, r("hr.errCreateAccount"));
    return {
      account_seq: m(n?.account_seq),
      channel: n?.channel === "email" ? "email" : "sms",
      target_masked: s(n?.target_masked)
    };
  },
  resetTarget: async t => {
    const e = await o.http.get(`${i}/accounts/${t}/reset-target`),
      n = c(e, r("hr.errCheckResetTarget"));
    return {
      channel: n?.channel === "email" ? "email" : "sms",
      target_masked: s(n?.target_masked)
    };
  },
  resetPassword: async t => {
    const e = await o.http.post(`${i}/accounts/${t}/password-reset`, {}),
      n = c(e, r("hr.errResetPassword"));
    return {
      channel: n?.channel === "email" ? "email" : "sms",
      target_masked: s(n?.target_masked)
    };
  },
  joinLookup: async t => {
    const e = await o.http.get(`${i}/join/${encodeURIComponent(t)}`),
      n = c(e, r("hr.errCheckInvite")) ?? {},
      a = s(n.status);
    return {
      status: a === "accepted" || a === "expired" ? a : "pending",
      org_name: s(n.org_name),
      employee_name: s(n.employee_name),
      phone_masked: s(n.phone_masked),
      sms_enabled: n.sms_enabled === !0
    };
  },
  joinSendCode: async t => {
    const e = await o.http.post(`${i}/join/${encodeURIComponent(t)}/send`, {});
    return {
      expiresIn: m(c(e, r("hr.errSendCode"))?.expires_in) || 180
    };
  },
  joinVerify: async (t, e) => {
    const n = await o.http.post(`${i}/join/${encodeURIComponent(t)}/verify`, {
        code: e
      }),
      a = c(n, r("hr.errVerifyCode")) ?? {};
    return {
      ticket: s(a.ticket),
      existing: a.existing === !0,
      existing_email_masked: s(a.existing_email_masked),
      phone_masked: s(a.phone_masked),
      login_phone: s(a.login_phone)
    };
  },
  joinComplete: async (t, e) => {
    const n = await o.http.post(`${i}/join/${encodeURIComponent(t)}/complete`, {
      ticket: e.ticket,
      password: e.password,
      email: e.email,
      email_token: e.emailToken
    });
    return {
      loginId: s(c(n, r("hr.errCompleteSignup"))?.login_id)
    };
  },
  joinAccept: async (t, e) => {
    const n = await o.http.post(`${i}/join/${encodeURIComponent(t)}/accept`, {
      ticket: e
    });
    c(n, r("hr.errLinkOrganization"));
  }
};
export { l as e };