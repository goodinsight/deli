import { cg as p, bT as t, fv as s, bM as o, fu as u } from "../js.d/main-Cm9wS5wt.js";
const r = "/v1/meetings",
  g = async (e, a) => s(await o.http.get(e), a),
  n = async (e, a, i) => s(await o.http.post(e, a), i),
  F = {
    autoAbortKey: !1
  },
  y = async (e, a, i) => s(await o.http.post(e, a, !0, void 0, F), i),
  c = async (e, a) => s(await o.http.delete(e), a),
  f = {
    list: () => g(`${r}/list`, t("meetings.loadFailed")),
    detail: async e => (await g(`${r}/${e}`, t("meetings.loadFailed"))).item,
    search: async e => (await g(`${r}/search?q=${encodeURIComponent(e)}`, t("meetings.searchFailed"))).seqs,
    pdf: async e => {
      try {
        return new Blob([await o.requestBinary("GET", `${r}/${e}/pdf`)], {
          type: "application/pdf"
        });
      } catch (a) {
        throw new Error(u(a, t("meetings.pdfFailed")));
      }
    },
    attendeeCandidates: () => g(`${r}/attendee-candidates`, t("meetings.attendeeCandidatesFailed")),
    upsert: e => n(`${r}/upsert`, e, t("meetings.saveFailed")),
    fileUpload: async (e, a) => {
      const i = new FormData();
      return i.append("file", a, a.name), s(await o.requestForm("POST", `${r}/${e}/files`, i, !0), t("meetings.attachUploadFailed", {
        names: a.name
      }));
    },
    fileRemove: (e, a) => c(`${r}/${e}/files/${encodeURIComponent(a)}`, t("meetings.attachDeleteFailed")),
    fileDownload: async (e, a) => {
      try {
        return new Blob([await o.requestBinary("GET", `${r}/${e}/files/${encodeURIComponent(a)}`)]);
      } catch (i) {
        throw new Error(u(i, t("meetings.attachDownloadFailed")));
      }
    },
    move: (e, a) => n(`${r}/move`, {
      seqs: e,
      folder_seq: a
    }, t("meetings.moveFailed")),
    moveOrg: (e, a) => n(`${r}/${e}/move-org`, {
      org_seq: a
    }, t("meetings.moveFailed")),
    star: (e, a) => n(`${r}/${e}/star`, {
      on: a
    }, t("meetings.starFailed")),
    remove: e => c(`${r}/${e}`, t("meetings.deleteFailed")),
    trash: async () => (await g(`${r}/trash`, t("meetings.trashLoadFailed"))).items,
    restore: e => n(`${r}/${e}/restore`, {}, t("meetings.restoreFailed")),
    purge: e => c(`${r}/${e}/purge`, t("meetings.purgeFailed")),
    folderUpsert: e => n(`${r}/folders/upsert`, e, t("meetings.folderSaveFailed")),
    groupCreate: (e, a) => n(`${r}/groups`, {
      name: e,
      after: a
    }, t("meetings.groupSaveFailed")),
    groupRename: async (e, a) => s(await o.http.put(`${r}/groups/${e}`, {
      name: a
    }), t("meetings.groupSaveFailed")),
    groupOrder: async e => s(await o.http.put(`${r}/groups/order`, {
      seqs: e
    }), t("meetings.groupOrderFailed")),
    groupRemove: e => c(`${r}/groups/${e}`, t("meetings.groupDeleteFailed")),
    recordingUpload: async (e, a, i, d, l = 0) => {
      const m = new FormData();
      return m.append("file", e, e.name), s(await o.requestForm("POST", `${r}/recordings?seconds=${a}&meeting_seq=${i}&speakers=${l}`, m, !0, (w, $) => d($ > 0 ? Math.round(w / $ * 100) : 0)), t("meetings.recordingUploadFailed2")).recording;
    },
    recordingPartUpload: async (e, a, i) => {
      const d = new FormData();
      d.append("file", e, e.name), s(await o.requestForm("POST", `${r}/recordings/parts?session=${a}&index=${i}`, d, !0), t("meetings.chunkUploadFailed"));
    },
    recordingUploadToken: async e => ({
      ...(await n(`${r}/recordings/upload-token`, {
        session: e
      }, t("meetings.uploadTokenFailed"))),
      api: new URL(p, window.location.origin).toString().replace(/\/+$/, "")
    }),
    recordingPreview: async e => `${p}${(await n(`${r}/recordings/preview`, {
      session: e
    }, t("meetings.recordingLoadFailed"))).path}?t=${Date.now()}`,
    recordingDiscard: e => c(`${r}/recordings/parts/${e}`, t("meetings.recordingDiscardFailed")),
    recordingPending: async () => (await g(`${r}/recordings/pending`, t("meetings.pendingLoadFailed"))).items,
    recordingFinish: async e => {
      const a = [2e3, 4e3, 8e3, 15e3, 3e4, 3e4, 3e4, 3e4, 3e4];
      for (let i = 0;; i += 1) try {
        return (await y(`${r}/recordings/finish`, e, t("meetings.recordingSaveFailed"))).recording;
      } catch (d) {
        const l = Number(d?.status) || 0;
        if (l >= 400 && l < 500 || i >= a.length) throw d;
        await new Promise(m => window.setTimeout(m, a[i]));
      }
    },
    recordingDetail: async e => (await g(`${r}/recordings/${e}`, t("meetings.recordingLoadFailed"))).recording,
    recordingRetry: async e => (await n(`${r}/recordings/${e}/transcribe`, {}, t("meetings.retranscribeFailed"))).recording,
    recordingSummarize: e => n(`${r}/recordings/summarize`, {
      seqs: e
    }, t("meetings.organizeFailed")),
    organize: e => n(`${r}/organize`, e, t("meetings.organizeFailed")),
    recordingRemove: e => c(`${r}/recordings/${e}`, t("meetings.recordingDeleteFailed")),
    recordingAudioUrl: e => `${p}${r}/recordings/audio/${e}`,
    folderRemove: e => c(`${r}/folders/${e}`, t("meetings.folderDeleteFailed"))
  };
export { f as m };