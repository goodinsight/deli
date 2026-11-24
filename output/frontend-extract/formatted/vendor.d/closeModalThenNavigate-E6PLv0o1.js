function i(n, o) {
  let t = !1;
  const e = () => {
    t || (t = !0, window.removeEventListener("popstate", e), o());
  };
  window.addEventListener("popstate", e), n(), window.setTimeout(e, 200);
}
export { i as c };