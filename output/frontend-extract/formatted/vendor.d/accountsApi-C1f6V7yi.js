import { bM as c, bT as p, br as b } from "../js.d/main-Cm9wS5wt.js";
const q = "9999-12-31";
function v(e) {
  return new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Asia/Seoul"
  }).format(new Date(e));
}
function F(e, r = Date.now()) {
  if (e.org_seq <= 0) return null;
  if (e.org_free_until === q) return {
    until: "",
    granted: !0,
    active: !0,
    unlimited: !0
  };
  const n = Date.parse(`${e.org_created_time.replace(" ", "T")}+09:00`),
    u = Number.isFinite(n) ? n + b * 864e5 : NaN,
    t = /^\d{4}-\d{2}-\d{2}$/.test(e.org_free_until) ? Date.parse(`${e.org_free_until}T00:00:00+09:00`) : NaN,
    o = Number.isFinite(t) ? t + 864e5 : NaN,
    m = Number.isFinite(o) && !(u >= o),
    l = m ? o : u;
  return Number.isFinite(l) ? {
    until: v(l - 1),
    granted: m,
    active: r < l,
    unlimited: !1
  } : null;
}
function a(e) {
  return e == null ? "" : String(e).trim();
}
const y = new Set(["board"]);
function h(e) {
  let r = e;
  if (typeof r == "string") {
    if (!r.trim()) return null;
    try {
      r = JSON.parse(r);
    } catch {
      return null;
    }
  }
  return Array.isArray(r) ? r.map(n => String(n)) : null;
}
async function N(e) {
  try {
    const n = (await c.list("account_group", {
        fields: ["seq", "name", "owner_account_seq", "features", "archived", "created_time", "free_until"],
        limit: 1e3,
        orderBy: "seq",
        orderDir: "ASC"
      }))?.data?.items ?? [],
      t = (await c.list("account_group_member", {
        fields: ["seq", "group_seq"],
        limit: 5e3,
        orderBy: "seq",
        orderDir: "ASC"
      }))?.data?.items ?? [],
      o = new Map();
    for (const i of t) {
      const s = Number(i.group_seq ?? 0) || 0;
      s > 0 && o.set(s, (o.get(s) ?? 0) + 1);
    }
    const m = i => i.archived === !0 || i.archived === 1 || i.archived === "1",
      l = new Map(),
      _ = new Map();
    for (const i of n) {
      const s = Number(i.owner_account_seq ?? 0) || 0;
      if (s <= 0) continue;
      const d = l.get(s);
      m(i) || _.set(s, (_.get(s) ?? 0) + 1), (!d || m(d) && !m(i)) && l.set(s, i);
    }
    return e.map(i => {
      const s = l.get(i.seq);
      if (!s) return i;
      const d = Number(s.seq ?? 0) || 0,
        f = h(s.features) ?? ["approval", "hr", "partner", "board", "support", "startup"];
      return {
        ...i,
        org_seq: d,
        org_name: (_.get(i.seq) ?? 0) > 1 ? p("accounts.orgNameAndMore", {
          name: a(s.name),
          count: (_.get(i.seq) ?? 0) - 1
        }) : a(s.name),
        member_cnt: (o.get(d) ?? 0) + 1,
        paid: f.some(g => !y.has(g)),
        features: f,
        org_created_time: a(s.created_time),
        org_free_until: a(s.free_until).slice(0, 10)
      };
    });
  } catch {
    return e;
  }
}
async function S(e) {
  try {
    const n = (await c.list("account_device", {
        fields: ["seq", "account_seq", "push_token", "app_version"],
        limit: 5e3,
        orderBy: "seq",
        orderDir: "ASC"
      }))?.data?.items ?? [],
      u = new Map();
    for (const t of n) {
      const o = Number(t.account_seq ?? 0) || 0;
      if (o <= 0 || !a(t.push_token)) continue;
      const m = a(t.app_version);
      u.set(o, {
        version: m || u.get(o)?.version || ""
      });
    }
    return e.map(t => {
      const o = u.get(t.seq);
      return o ? {
        ...t,
        app_installed: !0,
        app_version: o.version
      } : t;
    });
  } catch {
    return e;
  }
}
const A = {
  list: async () => {
    const u = ((await c.list("account", {
      fields: ["*"],
      limit: 500,
      orderBy: "seq",
      orderDir: "ASC"
    }))?.data?.items ?? []).filter(t => t.is_test !== !0 && t.is_test !== 1).map(t => ({
      seq: Number(t.seq ?? 0) || 0,
      email: a(t.email),
      name: a(t.name),
      rbac_role: a(t.rbac_role) || "user",
      license_seq: Number(t.license_seq ?? 0) || 0,
      status: a(t.status) || "active",
      member_type: a(t.member_type),
      org_name: "",
      org_seq: 0,
      member_cnt: 0,
      paid: !1,
      features: [],
      phone: a(t.phone),
      org_role: a(t.org_role) || "none",
      department: a(t.department),
      position: a(t.position),
      last_login_time: a(t.last_login_time),
      created_time: a(t.created_time),
      org_created_time: "",
      org_free_until: "",
      app_installed: !1,
      app_version: "",
      added_by_admin: t.added_by_admin === !0 || t.added_by_admin === 1
    }));
    return S(await N(u));
  },
  setFreeUntil: async (e, r) => {
    const n = await c.http.put(`/v1/billing/${e}/free-until`, {
      free_until: r
    });
    if (!n?.ok) throw new Error(n?.error || n?.message || p("accounts.freePeriodSaveFailed"));
    return String(n.data?.free_until ?? r);
  },
  remove: async e => {
    const r = await c.http.delete(`/v1/account/admin/${e}`);
    if (!r?.ok) throw new Error(r?.error || r?.message || p("accounts.memberDeleteFailed"));
  },
  create: async e => {
    const r = await c.http.post("/v1/account/register", {
      email: e.email,
      password: e.password,
      name: e.name
    });
    if (!r?.ok) throw new Error(r?.error || p("accounts.createFailed"));
    const n = Number(r?.data?.seq ?? 0) || 0;
    return n > 0 && e.rbac_role !== "user" && (await A.updateRole(n, e.rbac_role)), n;
  },
  updateRole: async (e, r) => {
    await c.submit("account", {
      seq: e,
      rbac_role: r
    });
  },
  updateStatus: async (e, r) => {
    await c.submit("account", {
      seq: e,
      status: r
    });
  },
  updateStaffInfo: async (e, r) => {
    await c.submit("account", {
      seq: e,
      ...r
    });
  }
};
export { A as a, F as f };