import { r as n } from "./react-CjxcGQav.js";
import { bM as o, bT as m, c8 as d, u as V } from "../js.d/main-Cm9wS5wt.js";
function u(e) {
  return {
    id: String(e.slug ?? ""),
    category: String(e.category ?? ""),
    title: String(e.title ?? ""),
    summary: String(e.summary ?? ""),
    body: Array.isArray(e.body) ? e.body.map(t => String(t)) : [],
    bodyHtml: String(e.body_html ?? ""),
    imageUrl: String(e.image_url ?? ""),
    attachments: Array.isArray(e.attachments) ? e.attachments : [],
    author: String(e.author ?? ""),
    date: String(e.date ?? ""),
    premium: !!e.premium,
    views: Number(e.views ?? 0) || 0,
    tags: Array.isArray(e.tags) ? e.tags.map(t => String(t)) : []
  };
}
const f = {
    list: async () => ((await o.http.get("/v1/news/favorites", !0))?.data?.items ?? []).map(u),
    slugs: async () => (await o.http.get("/v1/news/favorites/slugs", !0))?.data?.slugs ?? [],
    setFavorited: async (e, t) => {
      const a = await o.http.post("/v1/news/favorites/toggle", {
        slug: e,
        favorited: t
      }, !0);
      if (!a?.ok) throw new Error(a?.error || m("news.favoriteToggleFailed"));
      return !!a?.data?.favorited;
    }
  },
  p = 100,
  v = {
    list: async () => ((await o.http.get(`/v1/news/list?limit=${p}`))?.data?.items ?? []).map(u),
    get: async e => {
      const t = String(e ?? "").trim();
      if (!t) return;
      const a = await o.http.get(`/v1/news/detail/${encodeURIComponent(t)}`);
      return a?.data ? u(a.data) : void 0;
    }
  },
  A = () => async e => {
    try {
      const t = await v.list();
      e.setValue("articles", t);
    } catch (t) {
      console.error("뉴스 목록 조회 실패:", t), e.setValue("articles", []);
    } finally {
      e.setValue("listLoaded", !0);
    }
  },
  h = () => (e, t) => {
    e.setValue("category", t);
  },
  L = () => (e, t) => {
    e.setValue("query", t);
  },
  w = () => (e, t) => {
    e.setValue("dateFrom", t.from), e.setValue("dateTo", t.to);
  },
  F = () => async (e, t) => {
    const a = String(t ?? "").trim();
    if (e.setValue("articleSlug", a), e.setValue("articleLoaded", !1), e.setValue("article", null), !a) {
      e.setValue("articleLoaded", !0);
      return;
    }
    try {
      const s = await v.get(a);
      e.setValue("article", s ?? null);
    } catch (s) {
      console.error("뉴스 상세 조회 실패:", s), e.setValue("article", null);
    } finally {
      e.setValue("articleLoaded", !0);
    }
  };
let i = 0,
  l = !1;
const b = () => async e => {
    if (l || e.getValue("favoritesLoaded")) return;
    l = !0;
    const t = i;
    try {
      const a = await f.slugs();
      t === i && e.setValue("favoriteSlugs", a);
    } catch {
      t === i && e.setValue("favoriteSlugs", []);
    } finally {
      l = !1, e.setValue("favoritesLoaded", !0);
    }
  },
  E = () => e => {
    i += 1, e.setValue("favoriteSlugs", []), e.setValue("favoritesLoaded", !1);
  },
  N = () => async (e, t) => {
    const a = String(t ?? "").trim();
    if (!a) return;
    i += 1;
    const s = e.getValue("favoriteSlugs") ?? [],
      c = !s.includes(a);
    e.setValue("favoriteSlugs", c ? [...s, a] : s.filter(r => r !== a));
    try {
      const r = await f.setFavorited(a, c),
        g = e.getValue("favoriteSlugs") ?? [],
        y = r ? Array.from(new Set([...g, a])) : g.filter(S => S !== a);
      e.setValue("favoriteSlugs", y);
    } catch (r) {
      console.error("즐겨찾기 변경 실패:", r), e.setValue("favoriteSlugs", s);
    }
  },
  C = {
    category: "전체",
    query: "",
    dateFrom: "",
    dateTo: "",
    articles: [],
    listLoaded: !1,
    article: null,
    articleSlug: "",
    articleLoaded: !1,
    favoriteSlugs: [],
    favoritesLoaded: !1
  };
function I() {
  const e = d({
      stateId: "newsState",
      initialValues: C,
      actions: {
        loadArticles: A(),
        setCategory: h(),
        setQuery: L(),
        setDateRange: w(),
        loadArticle: F(),
        loadFavorites: b(),
        clearFavorites: E(),
        toggleFavorite: N()
      }
    }),
    s = V().useValue("logined") ?? !1;
  return n.useEffect(() => {
    s ? e.actions.loadFavorites() : e.actions.clearFavorites();
  }, [s]), n.useEffect(() => {
    e.getValue("listLoaded") || e.actions.loadArticles();
  }, []), {
    state: e
  };
}
function _(e) {
  const {
      state: t
    } = I(),
    a = String(e ?? "").trim();
  return n.useEffect(() => {
    a && (t.getValue("articleSlug") === a && t.getValue("articleLoaded") || t.actions.loadArticle(a));
  }, [a]), {
    state: t
  };
}
function M() {
  return d({
    stateId: "newsState"
  });
}
export { M as a, _ as b, f, I as u };