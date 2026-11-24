import { bM as s } from "../js.d/main-Cm9wS5wt.js";
const o = "/v1/support";
function r(e) {
  const t = Object.entries(e).filter(([, n]) => n != null && n !== "").map(([n, a]) => `${encodeURIComponent(n)}=${encodeURIComponent(String(a))}`).join("&");
  return t ? `?${t}` : "";
}
const i = {
  list: async (e = {}) => {
    const t = await s.http.get(`${o}/list${r({
      page: e.page,
      per_page: e.perPage,
      search: e.search,
      mine: e.mine ? 1 : void 0
    })}`);
    return {
      items: t.data?.items ?? [],
      total: t.data?.total ?? 0,
      page: t.data?.page ?? 1,
      limit: t.data?.limit ?? 20
    };
  },
  get: async e => (await s.http.get(`${o}/posts/${e}`)).data ?? null,
  create: async e => (await s.http.post(`${o}/submit`, {
    title: e.title,
    content: e.content,
    post_type: e.postType
  })).data?.seq ?? null,
  update: async (e, t) => {
    const n = {};
    t.title !== void 0 && (n.title = t.title), t.content !== void 0 && (n.content = t.content), t.postType !== void 0 && (n.post_type = t.postType), await s.http.patch(`${o}/posts/${e}`, n);
  },
  remove: async e => {
    await s.http.delete(`${o}/posts/${e}`);
  },
  createComment: async (e, t) => (await s.http.post(`${o}/posts/${e}/comments/submit`, {
    content: t
  })).data ?? null,
  updateComment: async (e, t) => {
    await s.http.put(`${o}/comments/${e}`, {
      content: t
    });
  },
  removeComment: async e => {
    await s.http.delete(`${o}/comments/${e}`);
  },
  uploadPostFile: async (e, t) => {
    const n = new FormData();
    return n.append("file", t, t.name), (await s.requestForm("POST", `${o}/posts/${e}/files`, n, !0))?.data?.files ?? [];
  },
  removePostFile: async e => (await s.http.delete(`${o}/files/${encodeURIComponent(e)}`)).data?.files ?? [],
  uploadCommentFile: async (e, t) => {
    const n = new FormData();
    return n.append("file", t, t.name), (await s.requestForm("POST", `${o}/comments/${e}/files`, n, !0))?.data?.files ?? [];
  },
  removeCommentFile: async e => (await s.http.delete(`${o}/comments/files/${encodeURIComponent(e)}`)).data?.files ?? [],
  counts: async () => {
    const e = await s.http.get(`${o}/counts`);
    return {
      unanswered: Number(e.data?.unanswered ?? 0),
      unread_answered: Number(e.data?.unread_answered ?? 0)
    };
  }
};
export { i as s };