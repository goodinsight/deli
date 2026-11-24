const a = "M0.5,0 C0.06,0 0,0.06 0,0.5 C0,0.94 0.06,1 0.5,1 C0.94,1 1,0.94 1,0.5 C1,0.06 0.94,0 0.5,0 Z",
  e = `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'><path d='${a}'/></svg>`)}")`,
  s = {
    borderRadius: 0,
    maskImage: e,
    WebkitMaskImage: e,
    maskSize: "100% 100%",
    WebkitMaskSize: "100% 100%",
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat"
  };
export { s as S, e as a };