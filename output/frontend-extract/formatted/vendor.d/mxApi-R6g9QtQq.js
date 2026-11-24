import { bT as e, bM as s } from "../js.d/main-Cm9wS5wt.js";
const i = "/v1/mx";
function o(a, t) {
  if (!a?.ok || a.data === void 0) throw new Error(a?.message || t);
  return a.data;
}
const d = {
  listAllMailboxes: async () => {
    const a = await s.http.get(`${i}/admin/mailboxes`);
    return o(a, e("mx.mailboxListLoadFailed")).items;
  },
  getMailboxInfo: async a => {
    const t = await s.http.get(`${i}/admin/mailboxes/${a}`);
    return o(t, e("mx.mailboxListLoadFailed"));
  },
  setMailboxQuota: async (a, t) => {
    const n = await s.http.patch(`${i}/admin/mailboxes/${a}`, {
      quota_mb: t
    });
    o(n, e("mx.mailboxSaveFailed"));
  },
  listDomains: async () => {
    const a = await s.http.get(`${i}/domains`);
    return o(a, e("mx.domainListLoadFailed"));
  },
  reorderDomains: async a => {
    const t = await s.http.post(`${i}/domains/reorder`, {
      seqs: a
    });
    return o(t, e("mx.domainOrderSaveFailed"));
  },
  createDomain: async a => {
    const t = await s.http.post(`${i}/domains`, {
      domain: a
    });
    return o(t, e("mx.domainCreateFailed"));
  },
  verifyDomain: async a => {
    const t = await s.http.post(`${i}/domains/${a}/verify`, {});
    return o(t, e("mx.dnsVerifyFailed"));
  },
  rotateDkim: async (a, t) => {
    const n = await s.http.post(`${i}/domains/${a}/dkim`, {
      bits: t
    });
    return o(n, e("mx.dkimRotateFailed"));
  },
  deleteDomain: async a => {
    const t = await s.http.delete(`${i}/domains/${a}`);
    o(t, e("mx.domainDeleteFailed"));
  },
  listLogs: async (a, t = 30) => {
    const n = await s.http.get(`${i}/domains/${a}/log?limit=${t}`);
    return o(n, e("mx.deliveryLogLoadFailed")).logs;
  },
  listMailboxes: async a => {
    const t = await s.http.get(`${i}/domains/${a}/mailboxes`);
    return o(t, e("mx.mailboxListLoadFailed")).mailboxes;
  },
  createMailbox: async (a, t) => {
    const n = await s.http.post(`${i}/domains/${a}/mailboxes`, t);
    return o(n, e("mx.mailboxCreateFailed"));
  },
  updateMailbox: async (a, t) => {
    const n = await s.http.patch(`${i}/mailboxes/${a}`, t);
    return o(n, e("mx.mailboxEditFailed"));
  },
  issueSmtpPassword: async a => {
    const t = await s.http.post(`${i}/mailboxes/${a}/smtp-password`, {});
    return o(t, e("mx.appPasswordIssueFailed"));
  },
  deleteMailbox: async a => {
    const t = await s.http.delete(`${i}/mailboxes/${a}`);
    o(t, e("mx.mailboxDeleteFailed"));
  },
  listAliases: async a => {
    const t = await s.http.get(`${i}/domains/${a}/aliases`);
    return o(t, e("mx.aliasListLoadFailed")).aliases;
  },
  createAlias: async (a, t) => {
    const n = await s.http.post(`${i}/domains/${a}/aliases`, t);
    return o(n, e("mx.aliasCreateFailed"));
  },
  updateAlias: async (a, t) => {
    const n = await s.http.patch(`${i}/aliases/${a}`, t);
    return o(n, e("mx.aliasEditFailed"));
  },
  deleteAlias: async a => {
    const t = await s.http.delete(`${i}/aliases/${a}`);
    o(t, e("mx.aliasDeleteFailed"));
  }
};
function l(a, t = e) {
  return t(a === "verified" ? "mx.statusVerified" : a === "suspended" ? "mx.statusSuspended" : "mx.statusPending");
}
function m(a) {
  return a < 1024 ? `${a} B` : a < 1024 * 1024 ? `${(a / 1024).toFixed(0)} KB` : a < 1024 * 1024 * 1024 ? `${(a / 1024 / 1024).toFixed(1)} MB` : `${(a / 1024 / 1024 / 1024).toFixed(2)} GB`;
}
export { l as d, m as f, d as m };