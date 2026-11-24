var wc = "-ms-",
  dc = "-moz-",
  kc = "-webkit-",
  zr = "comm",
  Sr = "rule",
  jr = "decl",
  Fr = "@import",
  Ur = "@keyframes",
  Zr = "@layer",
  qr = Math.abs,
  kr = String.fromCharCode,
  _r = Object.assign;
function gc(r, c) {
  return Y(r, 0) ^ 45 ? (((c << 2 ^ Y(r, 0)) << 2 ^ Y(r, 1)) << 2 ^ Y(r, 2)) << 2 ^ Y(r, 3) : 0;
}
function Ir(r) {
  return r.trim();
}
function xc(r, c) {
  return (r = c.exec(r)) ? r[0] : r;
}
function v(r, c, n) {
  return r.replace(c, n);
}
function Gr(r, c) {
  return r.indexOf(c);
}
function Y(r, c) {
  return r.charCodeAt(c) | 0;
}
function V(r, c, n) {
  return r.slice(c, n);
}
function P(r) {
  return r.length;
}
function gr(r) {
  return r.length;
}
function y(r, c) {
  return c.push(r), r;
}
function Ec(r, c) {
  return r.map(c).join("");
}
var sr = 1,
  q = 1,
  Lr = 0,
  S = 0,
  k = 0,
  G = "";
function er(r, c, n, a, e, $, w) {
  return {
    value: r,
    root: c,
    parent: n,
    type: a,
    props: e,
    children: $,
    line: sr,
    column: q,
    length: w,
    return: ""
  };
}
function Mc(r, c) {
  return _r(er("", null, null, "", null, null, 0), r, {
    length: -r.length
  }, c);
}
function Hr() {
  return k;
}
function Jr() {
  return k = S > 0 ? Y(G, --S) : 0, q--, k === 10 && (q = 1, sr--), k;
}
function L() {
  return k = S < Lr ? Y(G, S++) : 0, q++, k === 10 && (q = 1, sr++), k;
}
function F() {
  return Y(G, S);
}
function l() {
  return S;
}
function tr(r, c) {
  return V(G, r, c);
}
function hr(r) {
  switch (r) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Qr(r) {
  return sr = q = 1, Lr = P(G = r), S = 0, [];
}
function Vr(r) {
  return G = "", r;
}
function ur(r) {
  return Ir(tr(S - 1, br(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function Xr(r) {
  for (; (k = F()) && k < 33;) L();
  return hr(r) > 2 || hr(k) > 3 ? "" : " ";
}
function yr(r, c) {
  for (; --c && L() && !(k < 48 || k > 102 || k > 57 && k < 65 || k > 70 && k < 97););
  return tr(r, l() + (c < 6 && F() == 32 && L() == 32));
}
function br(r) {
  for (; L();) switch (k) {
    case r:
      return S;
    case 34:
    case 39:
      r !== 34 && r !== 39 && br(k);
      break;
    case 40:
      r === 41 && br(r);
      break;
    case 92:
      L();
      break;
  }
  return S;
}
function vr(r, c) {
  for (; L() && r + k !== 57;) if (r + k === 84 && F() === 47) break;
  return "/*" + tr(c, S - 1) + "*" + kr(r === 47 ? r : L());
}
function lr(r) {
  for (; !hr(F());) L();
  return tr(r, S);
}
function Ac(r) {
  return Vr(rr("", null, null, null, [""], r = Qr(r), 0, [0], r));
}
function rr(r, c, n, a, e, $, w, i, m) {
  for (var A = 0, x = 0, u = w, T = 0, R = 0, E = 0, h = 1, N = 1, p = 1, f = 0, C = "", z = e, O = $, d = a, s = C; N;) switch (E = f, f = L()) {
    case 40:
      if (E != 108 && Y(s, u - 1) == 58) {
        Gr(s += v(ur(f), "&", "&\f"), "&\f") != -1 && (p = -1);
        break;
      }
    case 34:
    case 39:
    case 91:
      s += ur(f);
      break;
    case 9:
    case 10:
    case 13:
    case 32:
      s += Xr(E);
      break;
    case 92:
      s += yr(l() - 1, 7);
      continue;
    case 47:
      switch (F()) {
        case 42:
        case 47:
          y(rc(vr(L(), l()), c, n), m);
          break;
        default:
          s += "/";
      }
      break;
    case 123 * h:
      i[A++] = P(s) * p;
    case 125 * h:
    case 59:
    case 0:
      switch (f) {
        case 0:
        case 125:
          N = 0;
        case 59 + x:
          p == -1 && (s = v(s, /\f/g, "")), R > 0 && P(s) - u && y(R > 32 ? mr(s + ";", a, n, u - 1) : mr(v(s, " ", "") + ";", a, n, u - 2), m);
          break;
        case 59:
          s += ";";
        default:
          if (y(d = Ar(s, c, n, A, x, e, i, C, z = [], O = [], u), $), f === 123) if (x === 0) rr(s, c, d, d, z, $, u, i, O);else switch (T === 99 && Y(s, 3) === 110 ? 100 : T) {
            case 100:
            case 108:
            case 109:
            case 115:
              rr(r, d, d, a && y(Ar(r, d, d, 0, 0, e, i, C, e, z = [], u), O), e, O, u, i, a ? z : O);
              break;
            default:
              rr(s, d, d, d, [""], O, 0, i, O);
          }
      }
      A = x = R = 0, h = p = 1, C = s = "", u = w;
      break;
    case 58:
      u = 1 + P(s), R = E;
    default:
      if (h < 1) {
        if (f == 123) --h;else if (f == 125 && h++ == 0 && Jr() == 125) continue;
      }
      switch (s += kr(f), f * h) {
        case 38:
          p = x > 0 ? 1 : (s += "\f", -1);
          break;
        case 44:
          i[A++] = (P(s) - 1) * p, p = 1;
          break;
        case 64:
          F() === 45 && (s += ur(L())), T = F(), x = u = P(C = s += lr(l())), f++;
          break;
        case 45:
          E === 45 && P(s) == 2 && (h = 0);
      }
  }
  return $;
}
function Ar(r, c, n, a, e, $, w, i, m, A, x) {
  for (var u = e - 1, T = e === 0 ? $ : [""], R = gr(T), E = 0, h = 0, N = 0; E < a; ++E) for (var p = 0, f = V(r, u + 1, u = qr(h = w[E])), C = r; p < R; ++p) (C = Ir(h > 0 ? T[p] + " " + f : v(f, /&\f/g, T[p]))) && (m[N++] = C);
  return er(r, c, n, e === 0 ? Sr : i, m, A, x);
}
function rc(r, c, n) {
  return er(r, c, n, zr, kr(Hr()), V(r, 2, -2), 0);
}
function mr(r, c, n, a) {
  return er(r, c, n, jr, V(r, 0, a), V(r, a + 1, -1), a);
}
function Cr(r, c) {
  for (var n = "", a = gr(r), e = 0; e < a; e++) n += c(r[e], e, r, c) || "";
  return n;
}
function mc(r, c, n, a) {
  switch (r.type) {
    case Zr:
      if (r.children.length) break;
    case Fr:
    case jr:
      return r.return = r.return || r.value;
    case zr:
      return "";
    case Ur:
      return r.return = r.value + "{" + Cr(r.children, a) + "}";
    case Sr:
      r.value = r.props.join(",");
  }
  return P(n = Cr(r.children, a)) ? r.return = r.value + "{" + n + "}" : "";
}
function Cc(r) {
  var c = gr(r);
  return function (n, a, e, $) {
    for (var w = "", i = 0; i < c; i++) w += r[i](n, a, e, $) || "";
    return w;
  };
}
function Oc(r) {
  return function (c) {
    c.root || (c = c.return) && r(c);
  };
}
var b = "-ms-",
  Q = "-moz-",
  o = "-webkit-",
  Kr = "comm",
  xr = "rule",
  Er = "decl",
  cc = "@import",
  nc = "@namespace",
  Nr = "@keyframes",
  ac = "@layer",
  Yr = Math.abs,
  Mr = String.fromCharCode,
  pr = Object.assign;
function sc(r, c) {
  return M(r, 0) ^ 45 ? (((c << 2 ^ M(r, 0)) << 2 ^ M(r, 1)) << 2 ^ M(r, 2)) << 2 ^ M(r, 3) : 0;
}
function Br(r) {
  return r.trim();
}
function B(r, c) {
  return (r = c.exec(r)) ? r[0] : r;
}
function t(r, c, n) {
  return r.replace(c, n);
}
function cr(r, c, n) {
  return r.indexOf(c, n);
}
function M(r, c) {
  return r.charCodeAt(c) | 0;
}
function U(r, c, n) {
  return r.slice(c, n);
}
function I(r) {
  return r.length;
}
function Dr(r) {
  return r.length;
}
function J(r, c) {
  return c.push(r), r;
}
function ec(r, c) {
  return r.map(c).join("");
}
function Or(r, c) {
  return r.filter(function (n) {
    return !B(n, c);
  });
}
var ir = 1,
  _ = 1,
  Pr = 0,
  j = 0,
  g = 0,
  H = "";
function fr(r, c, n, a, e, $, w, i) {
  return {
    value: r,
    root: c,
    parent: n,
    type: a,
    props: e,
    children: $,
    line: ir,
    column: _,
    length: w,
    return: "",
    siblings: i
  };
}
function D(r, c) {
  return pr(fr("", null, null, "", null, null, 0, r.siblings), r, {
    length: -r.length
  }, c);
}
function Z(r) {
  for (; r.root;) r = D(r.root, {
    children: [r]
  });
  J(r, r.siblings);
}
function tc() {
  return g;
}
function ic() {
  return g = j > 0 ? M(H, --j) : 0, _--, g === 10 && (_ = 1, ir--), g;
}
function K() {
  return g = j < Pr ? M(H, j++) : 0, _++, g === 10 && (_ = 1, ir++), g;
}
function W() {
  return M(H, j);
}
function nr() {
  return j;
}
function or(r, c) {
  return U(H, r, c);
}
function X(r) {
  switch (r) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function fc(r) {
  return ir = _ = 1, Pr = I(H = r), j = 0, [];
}
function oc(r) {
  return H = "", r;
}
function $r(r) {
  return Br(or(j - 1, wr(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function uc(r) {
  for (; (g = W()) && g < 33;) K();
  return X(r) > 2 || X(g) > 3 ? "" : " ";
}
function $c(r, c) {
  for (; --c && K() && !(g < 48 || g > 102 || g > 57 && g < 65 || g > 70 && g < 97););
  return or(r, nr() + (c < 6 && W() == 32 && K() == 32));
}
function wr(r) {
  for (; K();) switch (g) {
    case r:
      return j;
    case 34:
    case 39:
      r !== 34 && r !== 39 && wr(g);
      break;
    case 40:
      r === 41 && wr(r);
      break;
    case 92:
      K();
      break;
  }
  return j;
}
function hc(r, c) {
  for (; K() && r + g !== 57;) if (r + g === 84 && W() === 47) break;
  return "/*" + or(c, j - 1) + "*" + Mr(r === 47 ? r : K());
}
function bc(r) {
  for (; !X(W());) K();
  return or(r, j);
}
function Rc(r) {
  return oc(ar("", null, null, null, [""], r = fc(r), 0, [0], r));
}
function ar(r, c, n, a, e, $, w, i, m) {
  for (var A = 0, x = 0, u = w, T = 0, R = 0, E = 0, h = 1, N = 1, p = 1, f = 0, C = "", z = e, O = $, d = a, s = C; N;) switch (E = f, f = K()) {
    case 40:
      if (E != 108 && M(s, u - 1) == 58) {
        cr(s += t($r(f), "&", "&\f"), "&\f", Yr(A ? i[A - 1] : 0)) != -1 && (p = -1);
        break;
      }
    case 34:
    case 39:
    case 91:
      s += $r(f);
      break;
    case 9:
    case 10:
    case 13:
    case 32:
      s += uc(E);
      break;
    case 92:
      s += $c(nr() - 1, 7);
      continue;
    case 47:
      switch (W()) {
        case 42:
        case 47:
          J(pc(hc(K(), nr()), c, n, m), m), (X(E || 1) == 5 || X(W() || 1) == 5) && I(s) && U(s, -1, void 0) !== " " && (s += " ");
          break;
        default:
          s += "/";
      }
      break;
    case 123 * h:
      i[A++] = I(s) * p;
    case 125 * h:
    case 59:
    case 0:
      switch (f) {
        case 0:
        case 125:
          N = 0;
        case 59 + x:
          p == -1 && (s = t(s, /\f/g, "")), R > 0 && (I(s) - u || h === 0 && E === 47) && J(R > 32 ? Tr(s + ";", a, n, u - 1, m) : Tr(t(s, " ", "") + ";", a, n, u - 2, m), m);
          break;
        case 59:
          s += ";";
        default:
          if (J(d = Rr(s, c, n, A, x, e, i, C, z = [], O = [], u, $), $), f === 123) if (x === 0) ar(s, c, d, d, z, $, u, i, O);else {
            switch (T) {
              case 99:
                if (M(s, 3) === 110) break;
              case 108:
                if (M(s, 2) === 97) break;
              default:
                x = 0;
              case 100:
              case 109:
              case 115:
            }
            x ? ar(r, d, d, a && J(Rr(r, d, d, 0, 0, e, i, C, e, z = [], u, O), O), e, O, u, i, a ? z : O) : ar(s, d, d, d, [""], O, 0, i, O);
          }
      }
      A = x = R = 0, h = p = 1, C = s = "", u = w;
      break;
    case 58:
      u = 1 + I(s), R = E;
    default:
      if (h < 1) {
        if (f == 123) --h;else if (f == 125 && h++ == 0 && ic() == 125) continue;
      }
      switch (s += Mr(f), f * h) {
        case 38:
          p = x > 0 ? 1 : (s += "\f", -1);
          break;
        case 44:
          i[A++] = (I(s) - 1) * p, p = 1;
          break;
        case 64:
          W() === 45 && (s += $r(K())), T = W(), x = u = I(C = s += bc(nr())), f++;
          break;
        case 45:
          E === 45 && I(s) == 2 && (h = 0);
      }
  }
  return $;
}
function Rr(r, c, n, a, e, $, w, i, m, A, x, u) {
  for (var T = e - 1, R = e === 0 ? $ : [""], E = Dr(R), h = 0, N = 0, p = 0; h < a; ++h) for (var f = 0, C = U(r, T + 1, T = Yr(N = w[h])), z = r; f < E; ++f) (z = Br(N > 0 ? R[f] + " " + C : t(C, /&\f/g, R[f]))) && (m[p++] = z);
  return fr(r, c, n, e === 0 ? xr : i, m, A, x, u);
}
function pc(r, c, n, a) {
  return fr(r, c, n, Kr, Mr(tc()), U(r, 2, -2), 0, a);
}
function Tr(r, c, n, a, e) {
  return fr(r, c, n, Er, U(r, 0, a), U(r, a + 1, -1), a, e);
}
function Wr(r, c, n) {
  switch (sc(r, c)) {
    case 5103:
      return o + "print-" + r + r;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
      return o + r + r;
    case 4855:
      return o + r.replace("add", "source-over").replace("substract", "source-out").replace("intersect", "source-in").replace("exclude", "xor") + r;
    case 4789:
      return Q + r + r;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return o + r + Q + r + b + r + r;
    case 5936:
      switch (M(r, c + 11)) {
        case 114:
          return o + r + b + t(r, /[svh]\w+-[tblr]{2}/, "tb") + r;
        case 108:
          return o + r + b + t(r, /[svh]\w+-[tblr]{2}/, "tb-rl") + r;
        case 45:
          return o + r + b + t(r, /[svh]\w+-[tblr]{2}/, "lr") + r;
      }
    case 6828:
    case 4268:
    case 2903:
      return o + r + b + r + r;
    case 6165:
      return o + r + b + "flex-" + r + r;
    case 5187:
      return o + r + t(r, /(\w+).+(:[^]+)/, o + "box-$1$2" + b + "flex-$1$2") + r;
    case 5443:
      return o + r + b + "flex-item-" + t(r, /flex-|-self/g, "") + (B(r, /flex-|baseline/) ? "" : b + "grid-row-" + t(r, /flex-|-self/g, "")) + r;
    case 4675:
      return o + r + b + "flex-line-pack" + t(r, /align-content|flex-|-self/g, "") + r;
    case 5548:
      return o + r + b + t(r, "shrink", "negative") + r;
    case 5292:
      return o + r + b + t(r, "basis", "preferred-size") + r;
    case 6060:
      return o + "box-" + t(r, "-grow", "") + o + r + b + t(r, "grow", "positive") + r;
    case 4554:
      return o + t(r, /([^-])(transform)/g, "$1" + o + "$2") + r;
    case 6187:
      return t(t(t(r, /(zoom-|grab)/, o + "$1"), /(image-set)/, o + "$1"), r, "") + r;
    case 5495:
    case 3959:
      return t(r, /(image-set\([^]*)/, o + "$1$`$1");
    case 4968:
      return t(t(r, /(.+:)(flex-)?(.*)/, o + "box-pack:$3" + b + "flex-pack:$3"), /space-between/, "justify") + o + r + r;
    case 4200:
      if (!B(r, /flex-|baseline/)) return b + "grid-column-align" + U(r, c) + r;
      break;
    case 2592:
    case 3360:
      return b + t(r, "template-", "") + r;
    case 4384:
    case 3616:
      return n && n.some(function (a, e) {
        return c = e, B(a.props, /grid-\w+-end/);
      }) ? ~cr(r + (n = n[c].value), "span", 0) ? r : b + t(r, "-start", "") + r + b + "grid-row-span:" + (~cr(n, "span", 0) ? B(n, /\d+/) : +B(n, /\d+/) - +B(r, /\d+/)) + ";" : b + t(r, "-start", "") + r;
    case 4896:
    case 4128:
      return n && n.some(function (a) {
        return B(a.props, /grid-\w+-start/);
      }) ? r : b + t(t(r, "-end", "-span"), "span ", "") + r;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return t(r, /(.+)-inline(.+)/, o + "$1$2") + r;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (I(r) - 1 - c > 6) switch (M(r, c + 1)) {
        case 109:
          if (M(r, c + 4) !== 45) break;
        case 102:
          return t(r, /(.+:)(.+)-([^]+)/, "$1" + o + "$2-$3$1" + Q + (M(r, c + 3) == 108 ? "$3" : "$2-$3")) + r;
        case 115:
          return ~cr(r, "stretch", 0) ? Wr(t(r, "stretch", "fill-available"), c, n) + r : r;
      }
      break;
    case 5152:
    case 5920:
      return t(r, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (a, e, $, w, i, m, A) {
        return b + e + ":" + $ + A + (w ? b + e + "-span:" + (i ? m : +m - +$) + A : "") + r;
      });
    case 4949:
      if (M(r, c + 6) === 121) return t(r, ":", ":" + o) + r;
      break;
    case 6444:
      switch (M(r, M(r, 14) === 45 ? 18 : 11)) {
        case 120:
          return t(r, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + o + (M(r, 14) === 45 ? "inline-" : "") + "box$3$1" + o + "$2$3$1" + b + "$2box$3") + r;
        case 100:
          return t(r, ":", ":" + b) + r;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return t(r, "scroll-", "scroll-snap-") + r;
  }
  return r;
}
function dr(r, c) {
  for (var n = "", a = 0; a < r.length; a++) n += c(r[a], a, r, c) || "";
  return n;
}
function Tc(r, c, n, a) {
  switch (r.type) {
    case ac:
      if (r.children.length) break;
    case cc:
    case nc:
    case Er:
      return r.return = r.return || r.value;
    case Kr:
      return "";
    case Nr:
      return r.return = r.value + "{" + dr(r.children, a) + "}";
    case xr:
      if (!I(r.value = r.props.join(","))) return "";
  }
  return I(n = dr(r.children, a)) ? r.return = r.value + "{" + n + "}" : "";
}
function zc(r) {
  var c = Dr(r);
  return function (n, a, e, $) {
    for (var w = "", i = 0; i < c; i++) w += r[i](n, a, e, $) || "";
    return w;
  };
}
function Sc(r) {
  return function (c) {
    c.root || (c = c.return) && r(c);
  };
}
function jc(r, c, n, a) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case Er:
      r.return = Wr(r.value, r.length, n);
      return;
    case Nr:
      return dr([D(r, {
        value: t(r.value, "@", "@" + o)
      })], a);
    case xr:
      if (r.length) return ec(n = r.props, function (e) {
        switch (B(e, a = /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            Z(D(r, {
              props: [t(e, /:(read-\w+)/, ":" + Q + "$1")]
            })), Z(D(r, {
              props: [e]
            })), pr(r, {
              props: Or(n, a)
            });
            break;
          case "::placeholder":
            Z(D(r, {
              props: [t(e, /:(plac\w+)/, ":" + o + "input-$1")]
            })), Z(D(r, {
              props: [t(e, /:(plac\w+)/, ":" + Q + "$1")]
            })), Z(D(r, {
              props: [t(e, /:(plac\w+)/, b + "input-$1")]
            })), Z(D(r, {
              props: [e]
            })), pr(r, {
              props: Or(n, a)
            });
            break;
        }
        return "";
      });
  }
}
export { zc as A, Sc as B, Rc as C, jr as D, dr as E, Ur as K, wc as M, Sr as R, kc as W, mc as a, Ec as b, Ac as c, Mc as d, Vr as e, Qr as f, Y as g, gc as h, P as i, Gr as j, dc as k, xc as l, Cc as m, L as n, kr as o, F as p, ur as q, v as r, Cr as s, hr as t, tr as u, S as v, Oc as w, xr as x, jc as y, Tc as z };