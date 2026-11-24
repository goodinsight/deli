function a(e, h) {
  let t = 0;
  for (const o of e) t += /[ㄱ-힝]/.test(o) ? 13 : 7.5;
  return Math.ceil(t + 28 + h * 18 + 4);
}
export { a as h };