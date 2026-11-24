import { bT as r, bM as n } from "../js.d/main-Cm9wS5wt.js";
const e = "/v1/accounting";
function c(a, t) {
  if (!a || a.ok === !1) throw new Error(a?.message || t);
  return a.data;
}
function u(a) {
  const t = new URLSearchParams();
  for (const [s, i] of Object.entries(a)) i === void 0 || i === "" || i === 0 || i === !1 || t.set(s, String(i));
  const o = t.toString();
  return o ? `?${o}` : "";
}
const $ = {
  catalog: async (a = !1) => {
    const t = await n.http.get(`${e}/gl${u({
      include_inactive: a
    })}`);
    return c(t, r("accounting.errLoadAccounts"));
  },
  saveTranItem: async a => {
    c(await n.http.put(`${e}/gl/items`, a), r("accounting.errSaveTranItem"));
  },
  resetTranItem: async a => {
    c(await n.http.delete(`${e}/gl/items${u({
      name: a
    })}`), r("accounting.errResetTranItem"));
  },
  list: async (a, t, o) => {
    const s = await n.http.get(`${e}/transactions${u({
      from: a.from,
      to: a.to,
      direction: a.direction,
      unclassified: a.unclassified,
      search: a.search,
      bankbook_seq: a.bankbookSeq,
      card_seq: a.cardSeq,
      page: t,
      limit: o
    })}`);
    return c(s, r("accounting.errLoadLedger"));
  },
  detail: async a => c(await n.http.get(`${e}/transactions/${a}`), r("accounting.errLoadEntry")),
  create: async a => c(await n.http.post(`${e}/transactions`, a), r("accounting.errCreateEntry")),
  update: async (a, t) => c(await n.http.patch(`${e}/transactions/${a}`, t), r("accounting.errUpdateEntry")),
  remove: async a => {
    c(await n.http.delete(`${e}/transactions/${a}`), r("accounting.errDeleteEntry"));
  },
  classify: async a => {
    const t = await n.http.post(`${e}/transactions/classify`, a);
    return c(t, r("accounting.errClassify")).count;
  },
  importPreview: async (a, t, o) => {
    const s = new FormData();
    s.append("file", t, t.name);
    const i = await n.requestForm("POST", `${e}/import/preview${u({
      kind: a,
      card_seq: o.cardSeq,
      bankbook_seq: o.bankbookSeq,
      ai: o.ai === !1 ? "false" : void 0
    })}`, s, !0);
    return c(i, r("accounting.errReadFile"));
  },
  importCommit: async a => {
    const t = await n.http.post(`${e}/import/commit`, a);
    return c(t, r("accounting.errImport"));
  },
  pnl: async (a, t, o) => c(await n.http.get(`${e}/pnl${u({
    from: a,
    to: t,
    basis: o
  })}`), r("accounting.errPnl")),
  books: async (a = !1) => {
    const t = await n.http.get(`${e}/bankbooks${u({
      include_inactive: a
    })}`);
    return c(t, r("accounting.errLoadBooks"));
  },
  saveBankbook: async (a, t) => {
    const o = a ? await n.http.patch(`${e}/bankbooks/${a}`, t) : await n.http.post(`${e}/bankbooks`, t);
    return c(o, r("accounting.errSaveBankbook"));
  },
  removeBankbook: async a => {
    c(await n.http.delete(`${e}/bankbooks/${a}`), r("accounting.errDeleteBankbook"));
  },
  saveCard: async (a, t) => {
    const o = a ? await n.http.patch(`${e}/cards/${a}`, t) : await n.http.post(`${e}/cards`, t);
    return c(o, r("accounting.errSaveCard"));
  },
  removeCard: async a => {
    c(await n.http.delete(`${e}/cards/${a}`), r("accounting.errDeleteCard"));
  },
  bankTransactions: async (a, t, o) => {
    const s = await n.http.get(`${e}/bankbooks/${a}/transactions${u({
      page: t,
      limit: o
    })}`);
    return c(s, r("accounting.errLoadBankTx"));
  },
  addBankTransaction: async (a, t) => {
    c(await n.http.post(`${e}/bankbooks/${a}/transactions`, t), r("accounting.errAddBankTx"));
  },
  cancelBankTransaction: async a => {
    c(await n.http.delete(`${e}/bank-transactions/${a}`), r("accounting.errCancelBankTx"));
  },
  transfer: async a => {
    c(await n.http.post(`${e}/transfer`, a), r("accounting.errTransfer"));
  }
};
export { $ as a };