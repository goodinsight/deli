const a = "@sapphi-red/web-noise-suppressor/noise-gate";
var u = class extends AudioWorkletNode {
  constructor(e, {
    openThreshold: s,
    closeThreshold: o = s,
    holdMs: r,
    maxChannels: n
  }) {
    super(e, a, {
      processorOptions: {
        openThreshold: s,
        closeThreshold: o,
        holdMs: r,
        maxChannels: n
      }
    });
  }
};
const t = async (e, s) => await (await fetch(e, s)).arrayBuffer(),
  l = async ({
    url: e
  }, s) => await t(e, s),
  i = "@sapphi-red/web-noise-suppressor/gtcrn";
var y = class extends AudioWorkletNode {
  constructor(e, {
    maxChannels: s,
    wasmBinary: o
  }) {
    super(e, i, {
      processorOptions: {
        maxChannels: s,
        wasmBinary: o
      }
    });
  }
  destroy() {
    this.port.postMessage("destroy");
  }
};
const p = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11])),
  w = async ({
    url: e,
    simdUrl: s
  }, o) => {
    const r = (await p()) ? s : e;
    return await t(r, o);
  },
  c = "@sapphi-red/web-noise-suppressor/rnnoise";
var N = class extends AudioWorkletNode {
  constructor(e, {
    maxChannels: s,
    wasmBinary: o
  }) {
    super(e, c, {
      processorOptions: {
        maxChannels: s,
        wasmBinary: o
      }
    });
  }
  destroy() {
    this.port.postMessage("destroy");
  }
};
const W = async ({
    url: e
  }, s) => await t(e, s),
  d = "@sapphi-red/web-noise-suppressor/speex";
var k = class extends AudioWorkletNode {
  constructor(e, {
    maxChannels: s,
    wasmBinary: o
  }) {
    super(e, d, {
      processorOptions: {
        maxChannels: s,
        wasmBinary: o
      }
    });
  }
  destroy() {
    this.port.postMessage("destroy");
  }
};
export { y as GtcrnWorkletNode, u as NoiseGateWorkletNode, N as RnnoiseWorkletNode, k as SpeexWorkletNode, l as loadGtcrn, w as loadRnnoise, W as loadSpeex };