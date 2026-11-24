import { r as t, j as r } from "./react-CjxcGQav.js";
const o = t.createContext({
  actions: null,
  setActions: () => {}
});
function i({
  children: n
}) {
  const [e, s] = t.useState(null);
  return r.jsx(o.Provider, {
    value: {
      actions: e,
      setActions: s
    },
    children: n
  });
}
function u() {
  return t.useContext(o).actions;
}
function a(n, e) {
  const {
    setActions: s
  } = t.useContext(o);
  t.useEffect(() => (s(n), () => s(null)), e);
}
export { i as A, a, u };