function l(o) {
  const n = String(o ?? "").trim();
  if (!n) return [];
  const t = document.createElement("div");
  t.innerHTML = n;
  const r = t.querySelectorAll("p, div, li, h1, h2, h3, h4, blockquote");
  return (r.length > 0 ? Array.from(r).map(e => e.textContent ?? "") : [t.textContent ?? ""]).map(e => e.replace(/\s+/g, " ").trim()).filter(Boolean);
}
export { l as h };