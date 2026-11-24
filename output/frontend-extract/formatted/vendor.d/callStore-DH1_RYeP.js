const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f || (m.f = ["vendor.d/index-Q34QwseR.js", "vendor.d/vision_bundle-Dd4pd80D.js", "js.d/main-Cm9wS5wt.js", "vendor.d/react-CjxcGQav.js", "vendor.d/stylis-DdLD6a3t.js", "css.d/main-BARtwNPI.css", "vendor.d/videoMeetingApi-BCL1yHsp.js"])) => i.map(i => d[i]);
import { _ as zt, bT as ce, ld as ys, cf as ks, le as Jl, bM as Tt, lf as qr, lg as fc, lh as gc, li as Ql, lj as Yl, cg as $l, lk as Xl, ll as Zl, bO as vc } from "../js.d/main-Cm9wS5wt.js";
import { r as eu } from "./react-CjxcGQav.js";
import { videoMeetingApi as ne, conflictMeetingCode as tu } from "./videoMeetingApi-BCL1yHsp.js";
var Aa = {};
function iu(n, e) {
  return e.forEach(function (t) {
    t && typeof t != "string" && !Array.isArray(t) && Object.keys(t).forEach(function (i) {
      if (i !== "default" && !(i in n)) {
        var s = Object.getOwnPropertyDescriptor(t, i);
        Object.defineProperty(n, i, s.get ? s : {
          enumerable: !0,
          get: function () {
            return t[i];
          }
        });
      }
    });
  }), Object.freeze(n);
}
var nu = Object.defineProperty,
  su = (n, e, t) => e in n ? nu(n, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
  }) : n[e] = t,
  Oa = (n, e, t) => su(n, typeof e != "symbol" ? e + "" : e, t);
class ye {
  constructor() {
    Oa(this, "_locking"), Oa(this, "_locks"), this._locking = Promise.resolve(), this._locks = 0;
  }
  isLocked() {
    return this._locks > 0;
  }
  lock() {
    this._locks += 1;
    let e;
    const t = new Promise(s => e = () => {
        this._locks -= 1, s();
      }),
      i = this._locking.then(() => e);
    return this._locking = this._locking.then(() => t), i;
  }
}
function ae(n, e) {
  if (!n) throw new Error(e);
}
const ru = 34028234663852886e22,
  au = -34028234663852886e22,
  ou = 4294967295,
  cu = 2147483647,
  du = -2147483648;
function wn(n) {
  if (typeof n != "number") throw new Error("invalid int 32: " + typeof n);
  if (!Number.isInteger(n) || n > cu || n < du) throw new Error("invalid int 32: " + n);
}
function tr(n) {
  if (typeof n != "number") throw new Error("invalid uint 32: " + typeof n);
  if (!Number.isInteger(n) || n > ou || n < 0) throw new Error("invalid uint 32: " + n);
}
function bc(n) {
  if (typeof n != "number") throw new Error("invalid float 32: " + typeof n);
  if (Number.isFinite(n) && (n > ru || n < au)) throw new Error("invalid float 32: " + n);
}
const yc = Symbol("@bufbuild/protobuf/enum-type");
function lu(n) {
  const e = n[yc];
  return ae(e, "missing enum type on enum object"), e;
}
function kc(n, e, t, i) {
  n[yc] = Tc(e, t.map(s => ({
    no: s.no,
    name: s.name,
    localName: n[s.no]
  })));
}
function Tc(n, e, t) {
  const i = Object.create(null),
    s = Object.create(null),
    r = [];
  for (const a of e) {
    const o = Sc(a);
    r.push(o), i[a.name] = o, s[a.no] = o;
  }
  return {
    typeName: n,
    values: r,
    findName(a) {
      return i[a];
    },
    findNumber(a) {
      return s[a];
    }
  };
}
function uu(n, e, t) {
  const i = {};
  for (const s of e) {
    const r = Sc(s);
    i[r.localName] = r.no, i[r.no] = r.localName;
  }
  return kc(i, n, e), i;
}
function Sc(n) {
  return "localName" in n ? n : Object.assign(Object.assign({}, n), {
    localName: n.name
  });
}
class jr {
  equals(e) {
    return this.getType().runtime.util.equals(this.getType(), this, e);
  }
  clone() {
    return this.getType().runtime.util.clone(this);
  }
  fromBinary(e, t) {
    const i = this.getType(),
      s = i.runtime.bin,
      r = s.makeReadOptions(t);
    return s.readMessage(this, r.readerFactory(e), e.byteLength, r), this;
  }
  fromJson(e, t) {
    const i = this.getType(),
      s = i.runtime.json,
      r = s.makeReadOptions(t);
    return s.readMessage(i, e, r, this), this;
  }
  fromJsonString(e, t) {
    let i;
    try {
      i = JSON.parse(e);
    } catch (s) {
      throw new Error("cannot decode ".concat(this.getType().typeName, " from JSON: ").concat(s instanceof Error ? s.message : String(s)));
    }
    return this.fromJson(i, t);
  }
  toBinary(e) {
    const t = this.getType(),
      i = t.runtime.bin,
      s = i.makeWriteOptions(e),
      r = s.writerFactory();
    return i.writeMessage(this, r, s), r.finish();
  }
  toJson(e) {
    const t = this.getType(),
      i = t.runtime.json,
      s = i.makeWriteOptions(e);
    return i.writeMessage(this, s);
  }
  toJsonString(e) {
    var t;
    const i = this.toJson(e);
    return JSON.stringify(i, null, (t = e?.prettySpaces) !== null && t !== void 0 ? t : 0);
  }
  toJSON() {
    return this.toJson({
      emitDefaultValues: !0
    });
  }
  getType() {
    return Object.getPrototypeOf(this).constructor;
  }
}
function hu(n, e, t, i) {
  var s;
  const r = (s = i?.localName) !== null && s !== void 0 ? s : e.substring(e.lastIndexOf(".") + 1),
    a = {
      [r]: function (o) {
        n.util.initFields(this), n.util.initPartial(o, this);
      }
    }[r];
  return Object.setPrototypeOf(a.prototype, new jr()), Object.assign(a, {
    runtime: n,
    typeName: e,
    fields: n.util.newFieldList(t),
    fromBinary(o, c) {
      return new a().fromBinary(o, c);
    },
    fromJson(o, c) {
      return new a().fromJson(o, c);
    },
    fromJsonString(o, c) {
      return new a().fromJsonString(o, c);
    },
    equals(o, c) {
      return n.util.equals(a, o, c);
    }
  }), a;
}
function mu() {
  let n = 0,
    e = 0;
  for (let i = 0; i < 28; i += 7) {
    let s = this.buf[this.pos++];
    if (n |= (s & 127) << i, (s & 128) == 0) return this.assertBounds(), [n, e];
  }
  let t = this.buf[this.pos++];
  if (n |= (t & 15) << 28, e = (t & 112) >> 4, (t & 128) == 0) return this.assertBounds(), [n, e];
  for (let i = 3; i <= 31; i += 7) {
    let s = this.buf[this.pos++];
    if (e |= (s & 127) << i, (s & 128) == 0) return this.assertBounds(), [n, e];
  }
  throw new Error("invalid varint");
}
function Ts(n, e, t) {
  for (let r = 0; r < 28; r = r + 7) {
    const a = n >>> r,
      o = !(!(a >>> 7) && e == 0),
      c = (o ? a | 128 : a) & 255;
    if (t.push(c), !o) return;
  }
  const i = n >>> 28 & 15 | (e & 7) << 4,
    s = e >> 3 != 0;
  if (t.push((s ? i | 128 : i) & 255), !!s) {
    for (let r = 3; r < 31; r = r + 7) {
      const a = e >>> r,
        o = !!(a >>> 7),
        c = (o ? a | 128 : a) & 255;
      if (t.push(c), !o) return;
    }
    t.push(e >>> 31 & 1);
  }
}
const En = 4294967296;
function Da(n) {
  const e = n[0] === "-";
  e && (n = n.slice(1));
  const t = 1e6;
  let i = 0,
    s = 0;
  function r(a, o) {
    const c = Number(n.slice(a, o));
    s *= t, i = i * t + c, i >= En && (s = s + (i / En | 0), i = i % En);
  }
  return r(-24, -18), r(-18, -12), r(-12, -6), r(-6), e ? wc(i, s) : Vr(i, s);
}
function pu(n, e) {
  let t = Vr(n, e);
  const i = t.hi & 2147483648;
  i && (t = wc(t.lo, t.hi));
  const s = Cc(t.lo, t.hi);
  return i ? "-" + s : s;
}
function Cc(n, e) {
  var t = fu(n, e);
  if (n = t.lo, e = t.hi, e <= 2097151) return String(En * e + n);
  const i = n & 16777215,
    s = (n >>> 24 | e << 8) & 16777215,
    r = e >> 16 & 65535;
  let a = i + s * 6777216 + r * 6710656,
    o = s + r * 8147497,
    c = r * 2;
  const d = 1e7;
  return a >= d && (o += Math.floor(a / d), a %= d), o >= d && (c += Math.floor(o / d), o %= d), c.toString() + La(o) + La(a);
}
function fu(n, e) {
  return {
    lo: n >>> 0,
    hi: e >>> 0
  };
}
function Vr(n, e) {
  return {
    lo: n | 0,
    hi: e | 0
  };
}
function wc(n, e) {
  return e = ~e, n ? n = ~n + 1 : e += 1, Vr(n, e);
}
const La = n => {
  const e = String(n);
  return "0000000".slice(e.length) + e;
};
function Na(n, e) {
  if (n >= 0) {
    for (; n > 127;) e.push(n & 127 | 128), n = n >>> 7;
    e.push(n);
  } else {
    for (let t = 0; t < 9; t++) e.push(n & 127 | 128), n = n >> 7;
    e.push(1);
  }
}
function gu() {
  let n = this.buf[this.pos++],
    e = n & 127;
  if ((n & 128) == 0) return this.assertBounds(), e;
  if (n = this.buf[this.pos++], e |= (n & 127) << 7, (n & 128) == 0) return this.assertBounds(), e;
  if (n = this.buf[this.pos++], e |= (n & 127) << 14, (n & 128) == 0) return this.assertBounds(), e;
  if (n = this.buf[this.pos++], e |= (n & 127) << 21, (n & 128) == 0) return this.assertBounds(), e;
  n = this.buf[this.pos++], e |= (n & 15) << 28;
  for (let t = 5; (n & 128) !== 0 && t < 10; t++) n = this.buf[this.pos++];
  if ((n & 128) != 0) throw new Error("invalid varint");
  return this.assertBounds(), e >>> 0;
}
function vu() {
  const n = new DataView(new ArrayBuffer(8));
  if (typeof BigInt == "function" && typeof n.getBigInt64 == "function" && typeof n.getBigUint64 == "function" && typeof n.setBigInt64 == "function" && typeof n.setBigUint64 == "function" && (typeof process != "object" || typeof Aa != "object" || Aa.BUF_BIGINT_DISABLE !== "1")) {
    const s = BigInt("-9223372036854775808"),
      r = BigInt("9223372036854775807"),
      a = BigInt("0"),
      o = BigInt("18446744073709551615");
    return {
      zero: BigInt(0),
      supported: !0,
      parse(c) {
        const d = typeof c == "bigint" ? c : BigInt(c);
        if (d > r || d < s) throw new Error("int64 invalid: ".concat(c));
        return d;
      },
      uParse(c) {
        const d = typeof c == "bigint" ? c : BigInt(c);
        if (d > o || d < a) throw new Error("uint64 invalid: ".concat(c));
        return d;
      },
      enc(c) {
        return n.setBigInt64(0, this.parse(c), !0), {
          lo: n.getInt32(0, !0),
          hi: n.getInt32(4, !0)
        };
      },
      uEnc(c) {
        return n.setBigInt64(0, this.uParse(c), !0), {
          lo: n.getInt32(0, !0),
          hi: n.getInt32(4, !0)
        };
      },
      dec(c, d) {
        return n.setInt32(0, c, !0), n.setInt32(4, d, !0), n.getBigInt64(0, !0);
      },
      uDec(c, d) {
        return n.setInt32(0, c, !0), n.setInt32(4, d, !0), n.getBigUint64(0, !0);
      }
    };
  }
  const t = s => ae(/^-?[0-9]+$/.test(s), "int64 invalid: ".concat(s)),
    i = s => ae(/^[0-9]+$/.test(s), "uint64 invalid: ".concat(s));
  return {
    zero: "0",
    supported: !1,
    parse(s) {
      return typeof s != "string" && (s = s.toString()), t(s), s;
    },
    uParse(s) {
      return typeof s != "string" && (s = s.toString()), i(s), s;
    },
    enc(s) {
      return typeof s != "string" && (s = s.toString()), t(s), Da(s);
    },
    uEnc(s) {
      return typeof s != "string" && (s = s.toString()), i(s), Da(s);
    },
    dec(s, r) {
      return pu(s, r);
    },
    uDec(s, r) {
      return Cc(s, r);
    }
  };
}
const ie = vu();
var _;
(function (n) {
  n[n.DOUBLE = 1] = "DOUBLE", n[n.FLOAT = 2] = "FLOAT", n[n.INT64 = 3] = "INT64", n[n.UINT64 = 4] = "UINT64", n[n.INT32 = 5] = "INT32", n[n.FIXED64 = 6] = "FIXED64", n[n.FIXED32 = 7] = "FIXED32", n[n.BOOL = 8] = "BOOL", n[n.STRING = 9] = "STRING", n[n.BYTES = 12] = "BYTES", n[n.UINT32 = 13] = "UINT32", n[n.SFIXED32 = 15] = "SFIXED32", n[n.SFIXED64 = 16] = "SFIXED64", n[n.SINT32 = 17] = "SINT32", n[n.SINT64 = 18] = "SINT64";
})(_ || (_ = {}));
var At;
(function (n) {
  n[n.BIGINT = 0] = "BIGINT", n[n.STRING = 1] = "STRING";
})(At || (At = {}));
function St(n, e, t) {
  if (e === t) return !0;
  if (n == _.BYTES) {
    if (!(e instanceof Uint8Array) || !(t instanceof Uint8Array) || e.length !== t.length) return !1;
    for (let i = 0; i < e.length; i++) if (e[i] !== t[i]) return !1;
    return !0;
  }
  switch (n) {
    case _.UINT64:
    case _.FIXED64:
    case _.INT64:
    case _.SFIXED64:
    case _.SINT64:
      return e == t;
  }
  return !1;
}
function Ci(n, e) {
  switch (n) {
    case _.BOOL:
      return !1;
    case _.UINT64:
    case _.FIXED64:
    case _.INT64:
    case _.SFIXED64:
    case _.SINT64:
      return e == 0 ? ie.zero : "0";
    case _.DOUBLE:
    case _.FLOAT:
      return 0;
    case _.BYTES:
      return new Uint8Array(0);
    case _.STRING:
      return "";
    default:
      return 0;
  }
}
function Ec(n, e) {
  switch (n) {
    case _.BOOL:
      return e === !1;
    case _.STRING:
      return e === "";
    case _.BYTES:
      return e instanceof Uint8Array && !e.byteLength;
    default:
      return e == 0;
  }
}
function bu(n, e) {
  this.v = n, this.k = e;
}
function ir(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, i = Array(e); t < e; t++) i[t] = n[t];
  return i;
}
function _c(n) {
  if (Array.isArray(n)) return n;
}
function U(n, e, t) {
  return (e = _u(e)) in n ? Object.defineProperty(n, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[e] = t, n;
}
function yu(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function ku(n, e) {
  var t = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t != null) {
    var i,
      s,
      r,
      a,
      o = [],
      c = !0,
      d = !1;
    try {
      if (r = (t = t.call(n)).next, e === 0) {
        if (Object(t) !== t) return;
        c = !1;
      } else for (; !(c = (i = r.call(t)).done) && (o.push(i.value), o.length !== e); c = !0);
    } catch (l) {
      d = !0, s = l;
    } finally {
      try {
        if (!c && t.return != null && (a = t.return(), Object(a) !== a)) return;
      } finally {
        if (d) throw s;
      }
    }
    return o;
  }
}
function Pc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xa(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    e && (i = i.filter(function (s) {
      return Object.getOwnPropertyDescriptor(n, s).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function Tu(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? xa(Object(t), !0).forEach(function (i) {
      U(n, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : xa(Object(t)).forEach(function (i) {
      Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return n;
}
function Su(n, e) {
  if (n == null) return {};
  var t,
    i,
    s = Cu(n, e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    for (i = 0; i < r.length; i++) t = r[i], e.indexOf(t) === -1 && {}.propertyIsEnumerable.call(n, t) && (s[t] = n[t]);
  }
  return s;
}
function Cu(n, e) {
  if (n == null) return {};
  var t = {};
  for (var i in n) if ({}.hasOwnProperty.call(n, i)) {
    if (e.indexOf(i) !== -1) continue;
    t[i] = n[i];
  }
  return t;
}
function x(n, e) {
  return _c(n) || ku(n, e) || Rc(n, e) || Pc();
}
function wu(n) {
  return _c(n) || yu(n) || Rc(n) || Pc();
}
function Eu(n, e) {
  if (typeof n != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(n, e);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
function _u(n) {
  var e = Eu(n, "string");
  return typeof e == "symbol" ? e : e + "";
}
function Rc(n, e) {
  if (n) {
    if (typeof n == "string") return ir(n, e);
    var t = {}.toString.call(n).slice(8, -1);
    return t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set" ? Array.from(n) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? ir(n, e) : void 0;
  }
}
function Pu(n) {
  return function () {
    return new Bi(n.apply(this, arguments));
  };
}
function Bi(n) {
  var e, t;
  function i(r, a) {
    try {
      var o = n[r](a),
        c = o.value,
        d = c instanceof bu;
      Promise.resolve(d ? c.v : c).then(function (l) {
        if (d) {
          var u = r === "return" && c.k ? r : "next";
          if (!c.k || l.done) return i(u, l);
          l = n[u](l).value;
        }
        s(!!o.done, l);
      }, function (l) {
        i("throw", l);
      });
    } catch (l) {
      s(2, l);
    }
  }
  function s(r, a) {
    r === 2 ? e.reject(a) : e.resolve({
      value: a,
      done: r
    }), (e = e.next) ? i(e.key, e.arg) : t = null;
  }
  this._invoke = function (r, a) {
    return new Promise(function (o, c) {
      var d = {
        key: r,
        arg: a,
        resolve: o,
        reject: c,
        next: null
      };
      t ? t = t.next = d : (e = t = d, i(r, a));
    });
  }, typeof n.return != "function" && (this.return = void 0);
}
Bi.prototype[typeof Symbol == "function" && Symbol.asyncIterator || "@@asyncIterator"] = function () {
  return this;
}, Bi.prototype.next = function (n) {
  return this._invoke("next", n);
}, Bi.prototype.throw = function (n) {
  return this._invoke("throw", n);
}, Bi.prototype.return = function (n) {
  return this._invoke("return", n);
};
var de;
(function (n) {
  n[n.Varint = 0] = "Varint", n[n.Bit64 = 1] = "Bit64", n[n.LengthDelimited = 2] = "LengthDelimited", n[n.StartGroup = 3] = "StartGroup", n[n.EndGroup = 4] = "EndGroup", n[n.Bit32 = 5] = "Bit32";
})(de || (de = {}));
class Ru {
  constructor(e) {
    this.stack = [], this.textEncoder = e ?? new TextEncoder(), this.chunks = [], this.buf = [];
  }
  finish() {
    this.chunks.push(new Uint8Array(this.buf));
    let e = 0;
    for (let s = 0; s < this.chunks.length; s++) e += this.chunks[s].length;
    let t = new Uint8Array(e),
      i = 0;
    for (let s = 0; s < this.chunks.length; s++) t.set(this.chunks[s], i), i += this.chunks[s].length;
    return this.chunks = [], t;
  }
  fork() {
    return this.stack.push({
      chunks: this.chunks,
      buf: this.buf
    }), this.chunks = [], this.buf = [], this;
  }
  join() {
    let e = this.finish(),
      t = this.stack.pop();
    if (!t) throw new Error("invalid state, fork stack empty");
    return this.chunks = t.chunks, this.buf = t.buf, this.uint32(e.byteLength), this.raw(e);
  }
  tag(e, t) {
    return this.uint32((e << 3 | t) >>> 0);
  }
  raw(e) {
    return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e), this;
  }
  uint32(e) {
    for (tr(e); e > 127;) this.buf.push(e & 127 | 128), e = e >>> 7;
    return this.buf.push(e), this;
  }
  int32(e) {
    return wn(e), Na(e, this.buf), this;
  }
  bool(e) {
    return this.buf.push(e ? 1 : 0), this;
  }
  bytes(e) {
    return this.uint32(e.byteLength), this.raw(e);
  }
  string(e) {
    let t = this.textEncoder.encode(e);
    return this.uint32(t.byteLength), this.raw(t);
  }
  float(e) {
    bc(e);
    let t = new Uint8Array(4);
    return new DataView(t.buffer).setFloat32(0, e, !0), this.raw(t);
  }
  double(e) {
    let t = new Uint8Array(8);
    return new DataView(t.buffer).setFloat64(0, e, !0), this.raw(t);
  }
  fixed32(e) {
    tr(e);
    let t = new Uint8Array(4);
    return new DataView(t.buffer).setUint32(0, e, !0), this.raw(t);
  }
  sfixed32(e) {
    wn(e);
    let t = new Uint8Array(4);
    return new DataView(t.buffer).setInt32(0, e, !0), this.raw(t);
  }
  sint32(e) {
    return wn(e), e = (e << 1 ^ e >> 31) >>> 0, Na(e, this.buf), this;
  }
  sfixed64(e) {
    let t = new Uint8Array(8),
      i = new DataView(t.buffer),
      s = ie.enc(e);
    return i.setInt32(0, s.lo, !0), i.setInt32(4, s.hi, !0), this.raw(t);
  }
  fixed64(e) {
    let t = new Uint8Array(8),
      i = new DataView(t.buffer),
      s = ie.uEnc(e);
    return i.setInt32(0, s.lo, !0), i.setInt32(4, s.hi, !0), this.raw(t);
  }
  int64(e) {
    let t = ie.enc(e);
    return Ts(t.lo, t.hi, this.buf), this;
  }
  sint64(e) {
    let t = ie.enc(e),
      i = t.hi >> 31,
      s = t.lo << 1 ^ i,
      r = (t.hi << 1 | t.lo >>> 31) ^ i;
    return Ts(s, r, this.buf), this;
  }
  uint64(e) {
    let t = ie.uEnc(e);
    return Ts(t.lo, t.hi, this.buf), this;
  }
}
class Iu {
  constructor(e, t) {
    this.varint64 = mu, this.uint32 = gu, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = t ?? new TextDecoder();
  }
  tag() {
    let e = this.uint32(),
      t = e >>> 3,
      i = e & 7;
    if (t <= 0 || i < 0 || i > 5) throw new Error("illegal tag: field no " + t + " wire type " + i);
    return [t, i];
  }
  skip(e, t) {
    let i = this.pos;
    switch (e) {
      case de.Varint:
        for (; this.buf[this.pos++] & 128;);
        break;
      case de.Bit64:
        this.pos += 4;
      case de.Bit32:
        this.pos += 4;
        break;
      case de.LengthDelimited:
        let s = this.uint32();
        this.pos += s;
        break;
      case de.StartGroup:
        for (;;) {
          const r = this.tag(),
            a = x(r, 2),
            o = a[0],
            c = a[1];
          if (c === de.EndGroup) {
            if (t !== void 0 && o !== t) throw new Error("invalid end group tag");
            break;
          }
          this.skip(c, o);
        }
        break;
      default:
        throw new Error("cant skip wire type " + e);
    }
    return this.assertBounds(), this.buf.subarray(i, this.pos);
  }
  assertBounds() {
    if (this.pos > this.len) throw new RangeError("premature EOF");
  }
  int32() {
    return this.uint32() | 0;
  }
  sint32() {
    let e = this.uint32();
    return e >>> 1 ^ -(e & 1);
  }
  int64() {
    return ie.dec(...this.varint64());
  }
  uint64() {
    return ie.uDec(...this.varint64());
  }
  sint64() {
    let e = this.varint64(),
      t = x(e, 2),
      i = t[0],
      s = t[1],
      r = -(i & 1);
    return i = (i >>> 1 | (s & 1) << 31) ^ r, s = s >>> 1 ^ r, ie.dec(i, s);
  }
  bool() {
    let e = this.varint64(),
      t = x(e, 2),
      i = t[0],
      s = t[1];
    return i !== 0 || s !== 0;
  }
  fixed32() {
    return this.view.getUint32((this.pos += 4) - 4, !0);
  }
  sfixed32() {
    return this.view.getInt32((this.pos += 4) - 4, !0);
  }
  fixed64() {
    return ie.uDec(this.sfixed32(), this.sfixed32());
  }
  sfixed64() {
    return ie.dec(this.sfixed32(), this.sfixed32());
  }
  float() {
    return this.view.getFloat32((this.pos += 4) - 4, !0);
  }
  double() {
    return this.view.getFloat64((this.pos += 8) - 8, !0);
  }
  bytes() {
    let e = this.uint32(),
      t = this.pos;
    return this.pos += e, this.assertBounds(), this.buf.subarray(t, t + e);
  }
  string() {
    return this.textDecoder.decode(this.bytes());
  }
}
function Mu(n, e, t, i) {
  let s;
  return {
    typeName: e,
    extendee: t,
    get field() {
      if (!s) {
        const r = typeof i == "function" ? i() : i;
        r.name = e.split(".").pop(), r.jsonName = "[".concat(e, "]"), s = n.util.newFieldList([r]).list()[0];
      }
      return s;
    },
    runtime: n
  };
}
function Ic(n) {
  const e = n.field.localName,
    t = Object.create(null);
  return t[e] = Au(n), [t, () => t[e]];
}
function Au(n) {
  const e = n.field;
  if (e.repeated) return [];
  if (e.default !== void 0) return e.default;
  switch (e.kind) {
    case "enum":
      return e.T.values[0].no;
    case "scalar":
      return Ci(e.T, e.L);
    case "message":
      const t = e.T,
        i = new t();
      return t.fieldWrapper ? t.fieldWrapper.unwrapField(i) : i;
    case "map":
      throw "map fields are not allowed to be extensions";
  }
}
function Ou(n, e) {
  if (!e.repeated && (e.kind == "enum" || e.kind == "scalar")) {
    for (let t = n.length - 1; t >= 0; --t) if (n[t].no == e.no) return [n[t]];
    return [];
  }
  return n.filter(t => t.no === e.no);
}
let mt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
  Xn = [];
for (let n = 0; n < mt.length; n++) Xn[mt[n].charCodeAt(0)] = n;
Xn[45] = mt.indexOf("+");
Xn[95] = mt.indexOf("/");
const Mc = {
  dec(n) {
    let e = n.length * 3 / 4;
    n[n.length - 2] == "=" ? e -= 2 : n[n.length - 1] == "=" && (e -= 1);
    let t = new Uint8Array(e),
      i = 0,
      s = 0,
      r,
      a = 0;
    for (let o = 0; o < n.length; o++) {
      if (r = Xn[n.charCodeAt(o)], r === void 0) switch (n[o]) {
        case "=":
          s = 0;
        case `
`:
        case "\r":
        case "	":
        case " ":
          continue;
        default:
          throw Error("invalid base64 string.");
      }
      switch (s) {
        case 0:
          a = r, s = 1;
          break;
        case 1:
          t[i++] = a << 2 | (r & 48) >> 4, a = r, s = 2;
          break;
        case 2:
          t[i++] = (a & 15) << 4 | (r & 60) >> 2, a = r, s = 3;
          break;
        case 3:
          t[i++] = (a & 3) << 6 | r, s = 0;
          break;
      }
    }
    if (s == 1) throw Error("invalid base64 string.");
    return t.subarray(0, i);
  },
  enc(n) {
    let e = "",
      t = 0,
      i,
      s = 0;
    for (let r = 0; r < n.length; r++) switch (i = n[r], t) {
      case 0:
        e += mt[i >> 2], s = (i & 3) << 4, t = 1;
        break;
      case 1:
        e += mt[s | i >> 4], s = (i & 15) << 2, t = 2;
        break;
      case 2:
        e += mt[s | i >> 6], e += mt[i & 63], t = 0;
        break;
    }
    return t && (e += mt[s], e += "=", t == 1 && (e += "=")), e;
  }
};
function Du(n, e, t) {
  Oc(e, n);
  const i = e.runtime.bin.makeReadOptions(t),
    s = Ou(n.getType().runtime.bin.listUnknownFields(n), e.field),
    r = Ic(e),
    a = x(r, 2),
    o = a[0],
    c = a[1];
  for (const d of s) e.runtime.bin.readField(o, i.readerFactory(d.data), e.field, d.wireType, i);
  return c();
}
function Lu(n, e, t, i) {
  Oc(e, n);
  const s = e.runtime.bin.makeReadOptions(i),
    r = e.runtime.bin.makeWriteOptions(i);
  if (Ac(n, e)) {
    const d = n.getType().runtime.bin.listUnknownFields(n).filter(l => l.no != e.field.no);
    n.getType().runtime.bin.discardUnknownFields(n);
    for (const l of d) n.getType().runtime.bin.onUnknownField(n, l.no, l.wireType, l.data);
  }
  const a = r.writerFactory();
  let o = e.field;
  !o.opt && !o.repeated && (o.kind == "enum" || o.kind == "scalar") && (o = Object.assign(Object.assign({}, e.field), {
    opt: !0
  })), e.runtime.bin.writeField(o, t, a, r);
  const c = s.readerFactory(a.finish());
  for (; c.pos < c.len;) {
    const d = c.tag(),
      l = x(d, 2),
      u = l[0],
      h = l[1],
      m = c.skip(h, u);
    n.getType().runtime.bin.onUnknownField(n, u, h, m);
  }
}
function Ac(n, e) {
  const t = n.getType();
  return e.extendee.typeName === t.typeName && !!t.runtime.bin.listUnknownFields(n).find(i => i.no == e.field.no);
}
function Oc(n, e) {
  ae(n.extendee.typeName == e.getType().typeName, "extension ".concat(n.typeName, " can only be applied to message ").concat(n.extendee.typeName));
}
function Dc(n, e) {
  const t = n.localName;
  if (n.repeated) return e[t].length > 0;
  if (n.oneof) return e[n.oneof.localName].case === t;
  switch (n.kind) {
    case "enum":
    case "scalar":
      return n.opt || n.req ? e[t] !== void 0 : n.kind == "enum" ? e[t] !== n.T.values[0].no : !Ec(n.T, e[t]);
    case "message":
      return e[t] !== void 0;
    case "map":
      return Object.keys(e[t]).length > 0;
  }
}
function Ua(n, e) {
  const t = n.localName,
    i = !n.opt && !n.req;
  if (n.repeated) e[t] = [];else if (n.oneof) e[n.oneof.localName] = {
    case: void 0
  };else switch (n.kind) {
    case "map":
      e[t] = {};
      break;
    case "enum":
      e[t] = i ? n.T.values[0].no : void 0;
      break;
    case "scalar":
      e[t] = i ? Ci(n.T, n.L) : void 0;
      break;
    case "message":
      e[t] = void 0;
      break;
  }
}
function pt(n, e) {
  if (n === null || typeof n != "object" || !Object.getOwnPropertyNames(jr.prototype).every(i => i in n && typeof n[i] == "function")) return !1;
  const t = n.getType();
  return t === null || typeof t != "function" || !("typeName" in t) || typeof t.typeName != "string" ? !1 : e === void 0 ? !0 : t.typeName == e.typeName;
}
function Lc(n, e) {
  return pt(e) || !n.fieldWrapper ? e : n.fieldWrapper.wrapField(e);
}
_.DOUBLE, _.FLOAT, _.INT64, _.UINT64, _.INT32, _.UINT32, _.BOOL, _.STRING, _.BYTES;
const Fa = {
    ignoreUnknownFields: !1
  },
  Ba = {
    emitDefaultValues: !1,
    enumAsInteger: !1,
    useProtoFieldName: !1,
    prettySpaces: 0
  };
function Nu(n) {
  return n ? Object.assign(Object.assign({}, Fa), n) : Fa;
}
function xu(n) {
  return n ? Object.assign(Object.assign({}, Ba), n) : Ba;
}
const Bn = Symbol(),
  _n = Symbol();
function Uu() {
  return {
    makeReadOptions: Nu,
    makeWriteOptions: xu,
    readMessage(n, e, t, i) {
      if (e == null || Array.isArray(e) || typeof e != "object") throw new Error("cannot decode message ".concat(n.typeName, " from JSON: ").concat(st(e)));
      i = i ?? new n();
      const s = new Map(),
        r = t.typeRegistry;
      for (const o of Object.entries(e)) {
        var a = x(o, 2);
        const c = a[0],
          d = a[1],
          l = n.fields.findJsonName(c);
        if (l) {
          if (l.oneof) {
            if (d === null && l.kind == "scalar") continue;
            const u = s.get(l.oneof);
            if (u !== void 0) throw new Error("cannot decode message ".concat(n.typeName, ' from JSON: multiple keys for oneof "').concat(l.oneof.name, '" present: "').concat(u, '", "').concat(c, '"'));
            s.set(l.oneof, c);
          }
          qa(i, d, l, t, n);
        } else {
          let u = !1;
          if (r?.findExtension && c.startsWith("[") && c.endsWith("]")) {
            const h = r.findExtension(c.substring(1, c.length - 1));
            if (h && h.extendee.typeName == n.typeName) {
              u = !0;
              const m = Ic(h),
                g = x(m, 2),
                f = g[0],
                y = g[1];
              qa(f, d, h.field, t, h), Lu(i, h, y(), t);
            }
          }
          if (!u && !t.ignoreUnknownFields) throw new Error("cannot decode message ".concat(n.typeName, ' from JSON: key "').concat(c, '" is unknown'));
        }
      }
      return i;
    },
    writeMessage(n, e) {
      const t = n.getType(),
        i = {};
      let s;
      try {
        for (s of t.fields.byNumber()) {
          if (!Dc(s, n)) {
            if (s.req) throw "required field not set";
            if (!e.emitDefaultValues || !Bu(s)) continue;
          }
          const a = s.oneof ? n[s.oneof.localName].value : n[s.localName],
            o = ja(s, a, e);
          o !== void 0 && (i[e.useProtoFieldName ? s.name : s.jsonName] = o);
        }
        const r = e.typeRegistry;
        if (r?.findExtensionFor) for (const a of t.runtime.bin.listUnknownFields(n)) {
          const o = r.findExtensionFor(t.typeName, a.no);
          if (o && Ac(n, o)) {
            const c = Du(n, o, e),
              d = ja(o.field, c, e);
            d !== void 0 && (i[o.field.jsonName] = d);
          }
        }
      } catch (r) {
        const a = s ? "cannot encode field ".concat(t.typeName, ".").concat(s.name, " to JSON") : "cannot encode message ".concat(t.typeName, " to JSON"),
          o = r instanceof Error ? r.message : String(r);
        throw new Error(a + (o.length > 0 ? ": ".concat(o) : ""));
      }
      return i;
    },
    readScalar(n, e, t) {
      return ji(n, e, t ?? At.BIGINT, !0);
    },
    writeScalar(n, e, t) {
      if (e !== void 0 && (t || Ec(n, e))) return Pn(n, e);
    },
    debug: st
  };
}
function st(n) {
  if (n === null) return "null";
  switch (typeof n) {
    case "object":
      return Array.isArray(n) ? "array" : "object";
    case "string":
      return n.length > 100 ? "string" : '"'.concat(n.split('"').join('\\"'), '"');
    default:
      return String(n);
  }
}
function qa(n, e, t, i, s) {
  let r = t.localName;
  if (t.repeated) {
    if (ae(t.kind != "map"), e === null) return;
    if (!Array.isArray(e)) throw new Error("cannot decode field ".concat(s.typeName, ".").concat(t.name, " from JSON: ").concat(st(e)));
    const o = n[r];
    for (const c of e) {
      if (c === null) throw new Error("cannot decode field ".concat(s.typeName, ".").concat(t.name, " from JSON: ").concat(st(c)));
      switch (t.kind) {
        case "message":
          o.push(t.T.fromJson(c, i));
          break;
        case "enum":
          const d = Ss(t.T, c, i.ignoreUnknownFields, !0);
          d !== _n && o.push(d);
          break;
        case "scalar":
          try {
            o.push(ji(t.T, c, t.L, !0));
          } catch (l) {
            let u = "cannot decode field ".concat(s.typeName, ".").concat(t.name, " from JSON: ").concat(st(c));
            throw l instanceof Error && l.message.length > 0 && (u += ": ".concat(l.message)), new Error(u);
          }
          break;
      }
    }
  } else if (t.kind == "map") {
    if (e === null) return;
    if (typeof e != "object" || Array.isArray(e)) throw new Error("cannot decode field ".concat(s.typeName, ".").concat(t.name, " from JSON: ").concat(st(e)));
    const o = n[r];
    for (const c of Object.entries(e)) {
      var a = x(c, 2);
      const d = a[0],
        l = a[1];
      if (l === null) throw new Error("cannot decode field ".concat(s.typeName, ".").concat(t.name, " from JSON: map value null"));
      let u;
      try {
        u = Fu(t.K, d);
      } catch (h) {
        let m = "cannot decode map key for field ".concat(s.typeName, ".").concat(t.name, " from JSON: ").concat(st(e));
        throw h instanceof Error && h.message.length > 0 && (m += ": ".concat(h.message)), new Error(m);
      }
      switch (t.V.kind) {
        case "message":
          o[u] = t.V.T.fromJson(l, i);
          break;
        case "enum":
          const h = Ss(t.V.T, l, i.ignoreUnknownFields, !0);
          h !== _n && (o[u] = h);
          break;
        case "scalar":
          try {
            o[u] = ji(t.V.T, l, At.BIGINT, !0);
          } catch (m) {
            let g = "cannot decode map value for field ".concat(s.typeName, ".").concat(t.name, " from JSON: ").concat(st(e));
            throw m instanceof Error && m.message.length > 0 && (g += ": ".concat(m.message)), new Error(g);
          }
          break;
      }
    }
  } else switch (t.oneof && (n = n[t.oneof.localName] = {
    case: r
  }, r = "value"), t.kind) {
    case "message":
      const o = t.T;
      if (e === null && o.typeName != "google.protobuf.Value") return;
      let c = n[r];
      pt(c) ? c.fromJson(e, i) : (n[r] = c = o.fromJson(e, i), o.fieldWrapper && !t.oneof && (n[r] = o.fieldWrapper.unwrapField(c)));
      break;
    case "enum":
      const d = Ss(t.T, e, i.ignoreUnknownFields, !1);
      switch (d) {
        case Bn:
          Ua(t, n);
          break;
        case _n:
          break;
        default:
          n[r] = d;
          break;
      }
      break;
    case "scalar":
      try {
        const l = ji(t.T, e, t.L, !1);
        l === Bn ? Ua(t, n) : n[r] = l;
      } catch (l) {
        let u = "cannot decode field ".concat(s.typeName, ".").concat(t.name, " from JSON: ").concat(st(e));
        throw l instanceof Error && l.message.length > 0 && (u += ": ".concat(l.message)), new Error(u);
      }
      break;
  }
}
function Fu(n, e) {
  if (n === _.BOOL) switch (e) {
    case "true":
      e = !0;
      break;
    case "false":
      e = !1;
      break;
  }
  return ji(n, e, At.BIGINT, !0).toString();
}
function ji(n, e, t, i) {
  if (e === null) return i ? Ci(n, t) : Bn;
  switch (n) {
    case _.DOUBLE:
    case _.FLOAT:
      if (e === "NaN") return Number.NaN;
      if (e === "Infinity") return Number.POSITIVE_INFINITY;
      if (e === "-Infinity") return Number.NEGATIVE_INFINITY;
      if (e === "" || typeof e == "string" && e.trim().length !== e.length || typeof e != "string" && typeof e != "number") break;
      const s = Number(e);
      if (Number.isNaN(s) || !Number.isFinite(s)) break;
      return n == _.FLOAT && bc(s), s;
    case _.INT32:
    case _.FIXED32:
    case _.SFIXED32:
    case _.SINT32:
    case _.UINT32:
      let r;
      if (typeof e == "number" ? r = e : typeof e == "string" && e.length > 0 && e.trim().length === e.length && (r = Number(e)), r === void 0) break;
      return n == _.UINT32 || n == _.FIXED32 ? tr(r) : wn(r), r;
    case _.INT64:
    case _.SFIXED64:
    case _.SINT64:
      if (typeof e != "number" && typeof e != "string") break;
      const a = ie.parse(e);
      return t ? a.toString() : a;
    case _.FIXED64:
    case _.UINT64:
      if (typeof e != "number" && typeof e != "string") break;
      const o = ie.uParse(e);
      return t ? o.toString() : o;
    case _.BOOL:
      if (typeof e != "boolean") break;
      return e;
    case _.STRING:
      if (typeof e != "string") break;
      try {
        encodeURIComponent(e);
      } catch {
        throw new Error("invalid UTF8");
      }
      return e;
    case _.BYTES:
      if (e === "") return new Uint8Array(0);
      if (typeof e != "string") break;
      return Mc.dec(e);
  }
  throw new Error();
}
function Ss(n, e, t, i) {
  if (e === null) return n.typeName == "google.protobuf.NullValue" ? 0 : i ? n.values[0].no : Bn;
  switch (typeof e) {
    case "number":
      if (Number.isInteger(e)) return e;
      break;
    case "string":
      const s = n.findName(e);
      if (s !== void 0) return s.no;
      if (t) return _n;
      break;
  }
  throw new Error("cannot decode enum ".concat(n.typeName, " from JSON: ").concat(st(e)));
}
function Bu(n) {
  return n.repeated || n.kind == "map" ? !0 : !(n.oneof || n.kind == "message" || n.opt || n.req);
}
function ja(n, e, t) {
  if (n.kind == "map") {
    ae(typeof e == "object" && e != null);
    const a = {},
      o = Object.entries(e);
    switch (n.V.kind) {
      case "scalar":
        for (const d of o) {
          var i = x(d, 2);
          const l = i[0],
            u = i[1];
          a[l.toString()] = Pn(n.V.T, u);
        }
        break;
      case "message":
        for (const d of o) {
          var s = x(d, 2);
          const l = s[0],
            u = s[1];
          a[l.toString()] = u.toJson(t);
        }
        break;
      case "enum":
        const c = n.V.T;
        for (const d of o) {
          var r = x(d, 2);
          const l = r[0],
            u = r[1];
          a[l.toString()] = Cs(c, u, t.enumAsInteger);
        }
        break;
    }
    return t.emitDefaultValues || o.length > 0 ? a : void 0;
  }
  if (n.repeated) {
    ae(Array.isArray(e));
    const a = [];
    switch (n.kind) {
      case "scalar":
        for (let o = 0; o < e.length; o++) a.push(Pn(n.T, e[o]));
        break;
      case "enum":
        for (let o = 0; o < e.length; o++) a.push(Cs(n.T, e[o], t.enumAsInteger));
        break;
      case "message":
        for (let o = 0; o < e.length; o++) a.push(e[o].toJson(t));
        break;
    }
    return t.emitDefaultValues || a.length > 0 ? a : void 0;
  }
  switch (n.kind) {
    case "scalar":
      return Pn(n.T, e);
    case "enum":
      return Cs(n.T, e, t.enumAsInteger);
    case "message":
      return Lc(n.T, e).toJson(t);
  }
}
function Cs(n, e, t) {
  var i;
  if (ae(typeof e == "number"), n.typeName == "google.protobuf.NullValue") return null;
  if (t) return e;
  const s = n.findNumber(e);
  return (i = s?.name) !== null && i !== void 0 ? i : e;
}
function Pn(n, e) {
  switch (n) {
    case _.INT32:
    case _.SFIXED32:
    case _.SINT32:
    case _.FIXED32:
    case _.UINT32:
      return ae(typeof e == "number"), e;
    case _.FLOAT:
    case _.DOUBLE:
      return ae(typeof e == "number"), Number.isNaN(e) ? "NaN" : e === Number.POSITIVE_INFINITY ? "Infinity" : e === Number.NEGATIVE_INFINITY ? "-Infinity" : e;
    case _.STRING:
      return ae(typeof e == "string"), e;
    case _.BOOL:
      return ae(typeof e == "boolean"), e;
    case _.UINT64:
    case _.FIXED64:
    case _.INT64:
    case _.SFIXED64:
    case _.SINT64:
      return ae(typeof e == "bigint" || typeof e == "string" || typeof e == "number"), e.toString();
    case _.BYTES:
      return ae(e instanceof Uint8Array), Mc.enc(e);
  }
}
const ni = Symbol("@bufbuild/protobuf/unknown-fields"),
  Va = {
    readUnknownFields: !0,
    readerFactory: n => new Iu(n)
  },
  Wa = {
    writeUnknownFields: !0,
    writerFactory: () => new Ru()
  };
function qu(n) {
  return n ? Object.assign(Object.assign({}, Va), n) : Va;
}
function ju(n) {
  return n ? Object.assign(Object.assign({}, Wa), n) : Wa;
}
function Vu() {
  return {
    makeReadOptions: qu,
    makeWriteOptions: ju,
    listUnknownFields(n) {
      var e;
      return (e = n[ni]) !== null && e !== void 0 ? e : [];
    },
    discardUnknownFields(n) {
      delete n[ni];
    },
    writeUnknownFields(n, e) {
      const i = n[ni];
      if (i) for (const s of i) e.tag(s.no, s.wireType).raw(s.data);
    },
    onUnknownField(n, e, t, i) {
      const s = n;
      Array.isArray(s[ni]) || (s[ni] = []), s[ni].push({
        no: e,
        wireType: t,
        data: i
      });
    },
    readMessage(n, e, t, i, s) {
      const r = n.getType(),
        a = s ? e.len : e.pos + t;
      let o, c;
      for (; e.pos < a;) {
        var d = e.tag(),
          l = x(d, 2);
        if (o = l[0], c = l[1], s === !0 && c == de.EndGroup) break;
        const u = r.fields.find(o);
        if (!u) {
          const h = e.skip(c, o);
          i.readUnknownFields && this.onUnknownField(n, o, c, h);
          continue;
        }
        Ha(n, e, u, c, i);
      }
      if (s && (c != de.EndGroup || o !== t)) throw new Error("invalid end group tag");
    },
    readField: Ha,
    writeMessage(n, e, t) {
      const i = n.getType();
      for (const s of i.fields.byNumber()) {
        if (!Dc(s, n)) {
          if (s.req) throw new Error("cannot encode field ".concat(i.typeName, ".").concat(s.name, " to binary: required field not set"));
          continue;
        }
        const r = s.oneof ? n[s.oneof.localName].value : n[s.localName];
        Ka(s, r, e, t);
      }
      return t.writeUnknownFields && this.writeUnknownFields(n, e), e;
    },
    writeField(n, e, t, i) {
      e !== void 0 && Ka(n, e, t, i);
    }
  };
}
function Ha(n, e, t, i, s) {
  let r = t.repeated,
    a = t.localName;
  switch (t.oneof && (n = n[t.oneof.localName], n.case != a && delete n.value, n.case = a, a = "value"), t.kind) {
    case "scalar":
    case "enum":
      const o = t.kind == "enum" ? _.INT32 : t.T;
      let c = qn;
      if (t.kind == "scalar" && t.L > 0 && (c = Hu), r) {
        let g = n[a];
        if (i == de.LengthDelimited && o != _.STRING && o != _.BYTES) {
          let y = e.uint32() + e.pos;
          for (; e.pos < y;) g.push(c(e, o));
        } else g.push(c(e, o));
      } else n[a] = c(e, o);
      break;
    case "message":
      const d = t.T;
      r ? n[a].push(Rn(e, new d(), s, t)) : pt(n[a]) ? Rn(e, n[a], s, t) : (n[a] = Rn(e, new d(), s, t), d.fieldWrapper && !t.oneof && !t.repeated && (n[a] = d.fieldWrapper.unwrapField(n[a])));
      break;
    case "map":
      let l = Wu(t, e, s),
        u = x(l, 2),
        h = u[0],
        m = u[1];
      n[a][h] = m;
      break;
  }
}
function Rn(n, e, t, i) {
  const s = e.getType().runtime.bin,
    r = i?.delimited;
  return s.readMessage(e, n, r ? i.no : n.uint32(), t, r), e;
}
function Wu(n, e, t) {
  const i = e.uint32(),
    s = e.pos + i;
  let r, a;
  for (; e.pos < s;) {
    const o = e.tag();
    switch (x(o, 1)[0]) {
      case 1:
        r = qn(e, n.K);
        break;
      case 2:
        switch (n.V.kind) {
          case "scalar":
            a = qn(e, n.V.T);
            break;
          case "enum":
            a = e.int32();
            break;
          case "message":
            a = Rn(e, new n.V.T(), t, void 0);
            break;
        }
        break;
    }
  }
  if (r === void 0 && (r = Ci(n.K, At.BIGINT)), typeof r != "string" && typeof r != "number" && (r = r.toString()), a === void 0) switch (n.V.kind) {
    case "scalar":
      a = Ci(n.V.T, At.BIGINT);
      break;
    case "enum":
      a = n.V.T.values[0].no;
      break;
    case "message":
      a = new n.V.T();
      break;
  }
  return [r, a];
}
function Hu(n, e) {
  const t = qn(n, e);
  return typeof t == "bigint" ? t.toString() : t;
}
function qn(n, e) {
  switch (e) {
    case _.STRING:
      return n.string();
    case _.BOOL:
      return n.bool();
    case _.DOUBLE:
      return n.double();
    case _.FLOAT:
      return n.float();
    case _.INT32:
      return n.int32();
    case _.INT64:
      return n.int64();
    case _.UINT64:
      return n.uint64();
    case _.FIXED64:
      return n.fixed64();
    case _.BYTES:
      return n.bytes();
    case _.FIXED32:
      return n.fixed32();
    case _.SFIXED32:
      return n.sfixed32();
    case _.SFIXED64:
      return n.sfixed64();
    case _.SINT64:
      return n.sint64();
    case _.UINT32:
      return n.uint32();
    case _.SINT32:
      return n.sint32();
  }
}
function Ka(n, e, t, i) {
  ae(e !== void 0);
  const s = n.repeated;
  switch (n.kind) {
    case "scalar":
    case "enum":
      let a = n.kind == "enum" ? _.INT32 : n.T;
      if (s) {
        if (ae(Array.isArray(e)), n.packed) Gu(t, a, n.no, e);else for (const o of e) Vi(t, a, n.no, o);
      } else Vi(t, a, n.no, e);
      break;
    case "message":
      if (s) {
        ae(Array.isArray(e));
        for (const o of e) Ga(t, i, n, o);
      } else Ga(t, i, n, e);
      break;
    case "map":
      ae(typeof e == "object" && e != null);
      for (const o of Object.entries(e)) {
        var r = x(o, 2);
        const c = r[0],
          d = r[1];
        Ku(t, i, n, c, d);
      }
      break;
  }
}
function Ku(n, e, t, i, s) {
  n.tag(t.no, de.LengthDelimited), n.fork();
  let r = i;
  switch (t.K) {
    case _.INT32:
    case _.FIXED32:
    case _.UINT32:
    case _.SFIXED32:
    case _.SINT32:
      r = Number.parseInt(i);
      break;
    case _.BOOL:
      ae(i == "true" || i == "false"), r = i == "true";
      break;
  }
  switch (Vi(n, t.K, 1, r), t.V.kind) {
    case "scalar":
      Vi(n, t.V.T, 2, s);
      break;
    case "enum":
      Vi(n, _.INT32, 2, s);
      break;
    case "message":
      ae(s !== void 0), n.tag(2, de.LengthDelimited).bytes(s.toBinary(e));
      break;
  }
  n.join();
}
function Ga(n, e, t, i) {
  const s = Lc(t.T, i);
  t.delimited ? n.tag(t.no, de.StartGroup).raw(s.toBinary(e)).tag(t.no, de.EndGroup) : n.tag(t.no, de.LengthDelimited).bytes(s.toBinary(e));
}
function Vi(n, e, t, i) {
  ae(i !== void 0);
  let s = Nc(e),
    r = x(s, 2),
    a = r[0],
    o = r[1];
  n.tag(t, a)[o](i);
}
function Gu(n, e, t, i) {
  if (!i.length) return;
  n.tag(t, de.LengthDelimited).fork();
  let s = Nc(e),
    r = x(s, 2),
    a = r[1];
  for (let o = 0; o < i.length; o++) n[a](i[o]);
  n.join();
}
function Nc(n) {
  let e = de.Varint;
  switch (n) {
    case _.BYTES:
    case _.STRING:
      e = de.LengthDelimited;
      break;
    case _.DOUBLE:
    case _.FIXED64:
    case _.SFIXED64:
      e = de.Bit64;
      break;
    case _.FIXED32:
    case _.SFIXED32:
    case _.FLOAT:
      e = de.Bit32;
      break;
  }
  const t = _[n].toLowerCase();
  return [e, t];
}
function zu() {
  return {
    setEnumType: kc,
    initPartial(n, e) {
      if (n === void 0) return;
      const t = e.getType();
      for (const s of t.fields.byMember()) {
        const r = s.localName,
          a = e,
          o = n;
        if (o[r] != null) switch (s.kind) {
          case "oneof":
            const c = o[r].case;
            if (c === void 0) continue;
            const d = s.findField(c);
            let l = o[r].value;
            d && d.kind == "message" && !pt(l, d.T) ? l = new d.T(l) : d && d.kind === "scalar" && d.T === _.BYTES && (l = Li(l)), a[r] = {
              case: c,
              value: l
            };
            break;
          case "scalar":
          case "enum":
            let u = o[r];
            s.T === _.BYTES && (u = s.repeated ? u.map(Li) : Li(u)), a[r] = u;
            break;
          case "map":
            switch (s.V.kind) {
              case "scalar":
              case "enum":
                if (s.V.T === _.BYTES) for (const g of Object.entries(o[r])) {
                  var i = x(g, 2);
                  const f = i[0],
                    y = i[1];
                  a[r][f] = Li(y);
                } else Object.assign(a[r], o[r]);
                break;
              case "message":
                const m = s.V.T;
                for (const g of Object.keys(o[r])) {
                  let f = o[r][g];
                  m.fieldWrapper || (f = new m(f)), a[r][g] = f;
                }
                break;
            }
            break;
          case "message":
            const h = s.T;
            if (s.repeated) a[r] = o[r].map(m => pt(m, h) ? m : new h(m));else {
              const m = o[r];
              h.fieldWrapper ? h.typeName === "google.protobuf.BytesValue" ? a[r] = Li(m) : a[r] = m : a[r] = pt(m, h) ? m : new h(m);
            }
            break;
        }
      }
    },
    equals(n, e, t) {
      return e === t ? !0 : !e || !t ? !1 : n.fields.byMember().every(i => {
        const s = e[i.localName],
          r = t[i.localName];
        if (i.repeated) {
          if (s.length !== r.length) return !1;
          switch (i.kind) {
            case "message":
              return s.every((a, o) => i.T.equals(a, r[o]));
            case "scalar":
              return s.every((a, o) => St(i.T, a, r[o]));
            case "enum":
              return s.every((a, o) => St(_.INT32, a, r[o]));
          }
          throw new Error("repeated cannot contain ".concat(i.kind));
        }
        switch (i.kind) {
          case "message":
            let a = s,
              o = r;
            return i.T.fieldWrapper && (a !== void 0 && !pt(a) && (a = i.T.fieldWrapper.wrapField(a)), o !== void 0 && !pt(o) && (o = i.T.fieldWrapper.wrapField(o))), i.T.equals(a, o);
          case "enum":
            return St(_.INT32, s, r);
          case "scalar":
            return St(i.T, s, r);
          case "oneof":
            if (s.case !== r.case) return !1;
            const c = i.findField(s.case);
            if (c === void 0) return !0;
            switch (c.kind) {
              case "message":
                return c.T.equals(s.value, r.value);
              case "enum":
                return St(_.INT32, s.value, r.value);
              case "scalar":
                return St(c.T, s.value, r.value);
            }
            throw new Error("oneof cannot contain ".concat(c.kind));
          case "map":
            const d = Object.keys(s).concat(Object.keys(r));
            switch (i.V.kind) {
              case "message":
                const l = i.V.T;
                return d.every(h => l.equals(s[h], r[h]));
              case "enum":
                return d.every(h => St(_.INT32, s[h], r[h]));
              case "scalar":
                const u = i.V.T;
                return d.every(h => St(u, s[h], r[h]));
            }
            break;
        }
      });
    },
    clone(n) {
      const e = n.getType(),
        t = new e(),
        i = t;
      for (const r of e.fields.byMember()) {
        const a = n[r.localName];
        let o;
        if (r.repeated) o = a.map(mn);else if (r.kind == "map") {
          o = i[r.localName];
          for (const c of Object.entries(a)) {
            var s = x(c, 2);
            const d = s[0],
              l = s[1];
            o[d] = mn(l);
          }
        } else r.kind == "oneof" ? o = r.findField(a.case) ? {
          case: a.case,
          value: mn(a.value)
        } : {
          case: void 0
        } : o = mn(a);
        i[r.localName] = o;
      }
      for (const r of e.runtime.bin.listUnknownFields(n)) e.runtime.bin.onUnknownField(i, r.no, r.wireType, r.data);
      return t;
    }
  };
}
function mn(n) {
  if (n === void 0) return n;
  if (pt(n)) return n.clone();
  if (n instanceof Uint8Array) {
    const e = new Uint8Array(n.byteLength);
    return e.set(n), e;
  }
  return n;
}
function Li(n) {
  return n instanceof Uint8Array ? n : new Uint8Array(n);
}
function Ju(n, e, t) {
  return {
    syntax: n,
    json: Uu(),
    bin: Vu(),
    util: Object.assign(Object.assign({}, zu()), {
      newFieldList: e,
      initFields: t
    }),
    makeMessageType(i, s, r) {
      return hu(this, i, s, r);
    },
    makeEnum: uu,
    makeEnumType: Tc,
    getEnumType: lu,
    makeExtension(i, s, r) {
      return Mu(this, i, s, r);
    }
  };
}
class Qu {
  constructor(e, t) {
    this._fields = e, this._normalizer = t;
  }
  findJsonName(e) {
    if (!this.jsonNames) {
      const t = {};
      for (const i of this.list()) t[i.jsonName] = t[i.name] = i;
      this.jsonNames = t;
    }
    return this.jsonNames[e];
  }
  find(e) {
    if (!this.numbers) {
      const t = {};
      for (const i of this.list()) t[i.no] = i;
      this.numbers = t;
    }
    return this.numbers[e];
  }
  list() {
    return this.all || (this.all = this._normalizer(this._fields)), this.all;
  }
  byNumber() {
    return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((e, t) => e.no - t.no)), this.numbersAsc;
  }
  byMember() {
    if (!this.members) {
      this.members = [];
      const e = this.members;
      let t;
      for (const i of this.list()) i.oneof ? i.oneof !== t && (t = i.oneof, e.push(t)) : e.push(i);
    }
    return this.members;
  }
}
function xc(n, e) {
  const t = Uc(n);
  return e ? t : th(eh(t));
}
function Yu(n) {
  return xc(n, !1);
}
const $u = Uc;
function Uc(n) {
  let e = !1;
  const t = [];
  for (let i = 0; i < n.length; i++) {
    let s = n.charAt(i);
    switch (s) {
      case "_":
        e = !0;
        break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        t.push(s), e = !1;
        break;
      default:
        e && (e = !1, s = s.toUpperCase()), t.push(s);
        break;
    }
  }
  return t.join("");
}
const Xu = new Set(["constructor", "toString", "toJSON", "valueOf"]),
  Zu = new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]),
  Fc = n => "".concat(n, "$"),
  eh = n => Zu.has(n) ? Fc(n) : n,
  th = n => Xu.has(n) ? Fc(n) : n;
class ih {
  constructor(e) {
    this.kind = "oneof", this.repeated = !1, this.packed = !1, this.opt = !1, this.req = !1, this.default = void 0, this.fields = [], this.name = e, this.localName = Yu(e);
  }
  addField(e) {
    ae(e.oneof === this, "field ".concat(e.name, " not one of ").concat(this.name)), this.fields.push(e);
  }
  findField(e) {
    if (!this._lookup) {
      this._lookup = Object.create(null);
      for (let t = 0; t < this.fields.length; t++) this._lookup[this.fields[t].localName] = this.fields[t];
    }
    return this._lookup[e];
  }
}
function nh(n, e) {
  var t, i, s, r, a, o;
  const c = [];
  let d;
  for (const l of typeof n == "function" ? n() : n) {
    const u = l;
    if (u.localName = xc(l.name, l.oneof !== void 0), u.jsonName = (t = l.jsonName) !== null && t !== void 0 ? t : $u(l.name), u.repeated = (i = l.repeated) !== null && i !== void 0 ? i : !1, l.kind == "scalar" && (u.L = (s = l.L) !== null && s !== void 0 ? s : At.BIGINT), u.delimited = (r = l.delimited) !== null && r !== void 0 ? r : !1, u.req = (a = l.req) !== null && a !== void 0 ? a : !1, u.opt = (o = l.opt) !== null && o !== void 0 ? o : !1, l.packed === void 0 && (u.packed = l.kind == "enum" || l.kind == "scalar" && l.T != _.BYTES && l.T != _.STRING), l.oneof !== void 0) {
      const h = typeof l.oneof == "string" ? l.oneof : l.oneof.name;
      (!d || d.name != h) && (d = new ih(h)), u.oneof = d, d.addField(u);
    }
    c.push(u);
  }
  return c;
}
const v = Ju("proto3", n => new Qu(n, e => nh(e)), n => {
  for (const e of n.getType().fields.byMember()) {
    if (e.opt) continue;
    const t = e.localName,
      i = n;
    if (e.repeated) {
      i[t] = [];
      continue;
    }
    switch (e.kind) {
      case "oneof":
        i[t] = {
          case: void 0
        };
        break;
      case "enum":
        i[t] = 0;
        break;
      case "map":
        i[t] = {};
        break;
      case "scalar":
        i[t] = Ci(e.T, e.L);
        break;
    }
  }
});
class Ne extends jr {
  constructor(e) {
    super(), this.seconds = ie.zero, this.nanos = 0, v.util.initPartial(e, this);
  }
  fromJson(e, t) {
    if (typeof e != "string") throw new Error("cannot decode google.protobuf.Timestamp from JSON: ".concat(v.json.debug(e)));
    const i = e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
    if (!i) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
    const s = Date.parse(i[1] + "-" + i[2] + "-" + i[3] + "T" + i[4] + ":" + i[5] + ":" + i[6] + (i[8] ? i[8] : "Z"));
    if (Number.isNaN(s)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
    if (s < Date.parse("0001-01-01T00:00:00Z") || s > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
    return this.seconds = ie.parse(s / 1e3), this.nanos = 0, i[7] && (this.nanos = parseInt("1" + i[7] + "0".repeat(9 - i[7].length)) - 1e9), this;
  }
  toJson(e) {
    const t = Number(this.seconds) * 1e3;
    if (t < Date.parse("0001-01-01T00:00:00Z") || t > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
    if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
    let i = "Z";
    if (this.nanos > 0) {
      const s = (this.nanos + 1e9).toString().substring(1);
      s.substring(3) === "000000" ? i = "." + s.substring(0, 3) + "Z" : s.substring(6) === "000" ? i = "." + s.substring(0, 6) + "Z" : i = "." + s + "Z";
    }
    return new Date(t).toISOString().replace(".000Z", i);
  }
  toDate() {
    return new Date(Number(this.seconds) * 1e3 + Math.ceil(this.nanos / 1e6));
  }
  static now() {
    return Ne.fromDate(new Date());
  }
  static fromDate(e) {
    const t = e.getTime();
    return new Ne({
      seconds: ie.parse(Math.floor(t / 1e3)),
      nanos: t % 1e3 * 1e6
    });
  }
  static fromBinary(e, t) {
    return new Ne().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ne().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ne().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(Ne, e, t);
  }
}
Ne.runtime = v;
Ne.typeName = "google.protobuf.Timestamp";
Ne.fields = v.util.newFieldList(() => [{
  no: 1,
  name: "seconds",
  kind: "scalar",
  T: 3
}, {
  no: 2,
  name: "nanos",
  kind: "scalar",
  T: 5
}]);
const sh = v.makeMessageType("livekit.MetricsBatch", () => [{
    no: 1,
    name: "timestamp_ms",
    kind: "scalar",
    T: 3
  }, {
    no: 2,
    name: "normalized_timestamp",
    kind: "message",
    T: Ne
  }, {
    no: 3,
    name: "str_data",
    kind: "scalar",
    T: 9,
    repeated: !0
  }, {
    no: 4,
    name: "time_series",
    kind: "message",
    T: rh,
    repeated: !0
  }, {
    no: 5,
    name: "events",
    kind: "message",
    T: oh,
    repeated: !0
  }]),
  rh = v.makeMessageType("livekit.TimeSeriesMetric", () => [{
    no: 1,
    name: "label",
    kind: "scalar",
    T: 13
  }, {
    no: 2,
    name: "participant_identity",
    kind: "scalar",
    T: 13
  }, {
    no: 3,
    name: "track_sid",
    kind: "scalar",
    T: 13
  }, {
    no: 4,
    name: "samples",
    kind: "message",
    T: ah,
    repeated: !0
  }, {
    no: 5,
    name: "rid",
    kind: "scalar",
    T: 13
  }]),
  ah = v.makeMessageType("livekit.MetricSample", () => [{
    no: 1,
    name: "timestamp_ms",
    kind: "scalar",
    T: 3
  }, {
    no: 2,
    name: "normalized_timestamp",
    kind: "message",
    T: Ne
  }, {
    no: 3,
    name: "value",
    kind: "scalar",
    T: 2
  }]),
  oh = v.makeMessageType("livekit.EventMetric", () => [{
    no: 1,
    name: "label",
    kind: "scalar",
    T: 13
  }, {
    no: 2,
    name: "participant_identity",
    kind: "scalar",
    T: 13
  }, {
    no: 3,
    name: "track_sid",
    kind: "scalar",
    T: 13
  }, {
    no: 4,
    name: "start_timestamp_ms",
    kind: "scalar",
    T: 3
  }, {
    no: 5,
    name: "end_timestamp_ms",
    kind: "scalar",
    T: 3,
    opt: !0
  }, {
    no: 6,
    name: "normalized_start_timestamp",
    kind: "message",
    T: Ne
  }, {
    no: 7,
    name: "normalized_end_timestamp",
    kind: "message",
    T: Ne,
    opt: !0
  }, {
    no: 8,
    name: "metadata",
    kind: "scalar",
    T: 9
  }, {
    no: 9,
    name: "rid",
    kind: "scalar",
    T: 13
  }]),
  Bc = v.makeEnum("livekit.BackupCodecPolicy", [{
    no: 0,
    name: "PREFER_REGRESSION"
  }, {
    no: 1,
    name: "SIMULCAST"
  }, {
    no: 2,
    name: "REGRESSION"
  }]),
  Qe = v.makeEnum("livekit.TrackType", [{
    no: 0,
    name: "AUDIO"
  }, {
    no: 1,
    name: "VIDEO"
  }, {
    no: 2,
    name: "DATA"
  }]),
  me = v.makeEnum("livekit.TrackSource", [{
    no: 0,
    name: "UNKNOWN"
  }, {
    no: 1,
    name: "CAMERA"
  }, {
    no: 2,
    name: "MICROPHONE"
  }, {
    no: 3,
    name: "SCREEN_SHARE"
  }, {
    no: 4,
    name: "SCREEN_SHARE_AUDIO"
  }]),
  Wr = v.makeEnum("livekit.VideoQuality", [{
    no: 0,
    name: "LOW"
  }, {
    no: 1,
    name: "MEDIUM"
  }, {
    no: 2,
    name: "HIGH"
  }, {
    no: 3,
    name: "OFF"
  }]),
  oi = v.makeEnum("livekit.ConnectionQuality", [{
    no: 0,
    name: "POOR"
  }, {
    no: 1,
    name: "GOOD"
  }, {
    no: 2,
    name: "EXCELLENT"
  }, {
    no: 3,
    name: "LOST"
  }]),
  $i = v.makeEnum("livekit.ClientConfigSetting", [{
    no: 0,
    name: "UNSET"
  }, {
    no: 1,
    name: "DISABLED"
  }, {
    no: 2,
    name: "ENABLED"
  }]),
  ve = v.makeEnum("livekit.DisconnectReason", [{
    no: 0,
    name: "UNKNOWN_REASON"
  }, {
    no: 1,
    name: "CLIENT_INITIATED"
  }, {
    no: 2,
    name: "DUPLICATE_IDENTITY"
  }, {
    no: 3,
    name: "SERVER_SHUTDOWN"
  }, {
    no: 4,
    name: "PARTICIPANT_REMOVED"
  }, {
    no: 5,
    name: "ROOM_DELETED"
  }, {
    no: 6,
    name: "STATE_MISMATCH"
  }, {
    no: 7,
    name: "JOIN_FAILURE"
  }, {
    no: 8,
    name: "MIGRATION"
  }, {
    no: 9,
    name: "SIGNAL_CLOSE"
  }, {
    no: 10,
    name: "ROOM_CLOSED"
  }, {
    no: 11,
    name: "USER_UNAVAILABLE"
  }, {
    no: 12,
    name: "USER_REJECTED"
  }, {
    no: 13,
    name: "SIP_TRUNK_FAILURE"
  }, {
    no: 14,
    name: "CONNECTION_TIMEOUT"
  }, {
    no: 15,
    name: "MEDIA_FAILURE"
  }, {
    no: 16,
    name: "AGENT_ERROR"
  }]),
  lt = v.makeEnum("livekit.ReconnectReason", [{
    no: 0,
    name: "RR_UNKNOWN"
  }, {
    no: 1,
    name: "RR_SIGNAL_DISCONNECTED"
  }, {
    no: 2,
    name: "RR_PUBLISHER_FAILED"
  }, {
    no: 3,
    name: "RR_SUBSCRIBER_FAILED"
  }, {
    no: 4,
    name: "RR_SWITCH_CANDIDATE"
  }]),
  ch = v.makeEnum("livekit.SubscriptionError", [{
    no: 0,
    name: "SE_UNKNOWN"
  }, {
    no: 1,
    name: "SE_CODEC_UNSUPPORTED"
  }, {
    no: 2,
    name: "SE_TRACK_NOTFOUND"
  }]),
  Te = v.makeEnum("livekit.AudioTrackFeature", [{
    no: 0,
    name: "TF_STEREO"
  }, {
    no: 1,
    name: "TF_NO_DTX"
  }, {
    no: 2,
    name: "TF_AUTO_GAIN_CONTROL"
  }, {
    no: 3,
    name: "TF_ECHO_CANCELLATION"
  }, {
    no: 4,
    name: "TF_NOISE_SUPPRESSION"
  }, {
    no: 5,
    name: "TF_ENHANCED_NOISE_CANCELLATION"
  }, {
    no: 6,
    name: "TF_PRECONNECT_BUFFER"
  }]),
  wi = v.makeEnum("livekit.PacketTrailerFeature", [{
    no: 0,
    name: "PTF_USER_TIMESTAMP"
  }, {
    no: 1,
    name: "PTF_FRAME_ID"
  }, {
    no: 2,
    name: "PTF_USER_DATA"
  }]),
  Zn = v.makeMessageType("livekit.Room", () => [{
    no: 1,
    name: "sid",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "name",
    kind: "scalar",
    T: 9
  }, {
    no: 3,
    name: "empty_timeout",
    kind: "scalar",
    T: 13
  }, {
    no: 14,
    name: "departure_timeout",
    kind: "scalar",
    T: 13
  }, {
    no: 4,
    name: "max_participants",
    kind: "scalar",
    T: 13
  }, {
    no: 5,
    name: "creation_time",
    kind: "scalar",
    T: 3
  }, {
    no: 15,
    name: "creation_time_ms",
    kind: "scalar",
    T: 3
  }, {
    no: 6,
    name: "turn_password",
    kind: "scalar",
    T: 9
  }, {
    no: 7,
    name: "enabled_codecs",
    kind: "message",
    T: jn,
    repeated: !0
  }, {
    no: 8,
    name: "metadata",
    kind: "scalar",
    T: 9
  }, {
    no: 9,
    name: "num_participants",
    kind: "scalar",
    T: 13
  }, {
    no: 11,
    name: "num_publishers",
    kind: "scalar",
    T: 13
  }, {
    no: 10,
    name: "active_recording",
    kind: "scalar",
    T: 8
  }, {
    no: 13,
    name: "version",
    kind: "message",
    T: Zc
  }]),
  jn = v.makeMessageType("livekit.Codec", () => [{
    no: 1,
    name: "mime",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "fmtp_line",
    kind: "scalar",
    T: 9
  }]),
  dh = v.makeMessageType("livekit.ParticipantPermission", () => [{
    no: 1,
    name: "can_subscribe",
    kind: "scalar",
    T: 8
  }, {
    no: 2,
    name: "can_publish",
    kind: "scalar",
    T: 8
  }, {
    no: 3,
    name: "can_publish_data",
    kind: "scalar",
    T: 8
  }, {
    no: 9,
    name: "can_publish_sources",
    kind: "enum",
    T: v.getEnumType(me),
    repeated: !0
  }, {
    no: 7,
    name: "hidden",
    kind: "scalar",
    T: 8
  }, {
    no: 8,
    name: "recorder",
    kind: "scalar",
    T: 8
  }, {
    no: 10,
    name: "can_update_metadata",
    kind: "scalar",
    T: 8
  }, {
    no: 11,
    name: "agent",
    kind: "scalar",
    T: 8
  }, {
    no: 12,
    name: "can_subscribe_metrics",
    kind: "scalar",
    T: 8
  }, {
    no: 13,
    name: "can_manage_agent_session",
    kind: "scalar",
    T: 8
  }]),
  Jt = v.makeMessageType("livekit.ParticipantInfo", () => [{
    no: 1,
    name: "sid",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "identity",
    kind: "scalar",
    T: 9
  }, {
    no: 3,
    name: "state",
    kind: "enum",
    T: v.getEnumType(li)
  }, {
    no: 4,
    name: "tracks",
    kind: "message",
    T: ci,
    repeated: !0
  }, {
    no: 5,
    name: "metadata",
    kind: "scalar",
    T: 9
  }, {
    no: 6,
    name: "joined_at",
    kind: "scalar",
    T: 3
  }, {
    no: 17,
    name: "joined_at_ms",
    kind: "scalar",
    T: 3
  }, {
    no: 9,
    name: "name",
    kind: "scalar",
    T: 9
  }, {
    no: 10,
    name: "version",
    kind: "scalar",
    T: 13
  }, {
    no: 11,
    name: "permission",
    kind: "message",
    T: dh
  }, {
    no: 12,
    name: "region",
    kind: "scalar",
    T: 9
  }, {
    no: 13,
    name: "is_publisher",
    kind: "scalar",
    T: 8
  }, {
    no: 14,
    name: "kind",
    kind: "enum",
    T: v.getEnumType(Xi)
  }, {
    no: 15,
    name: "attributes",
    kind: "map",
    K: 9,
    V: {
      kind: "scalar",
      T: 9
    }
  }, {
    no: 16,
    name: "disconnect_reason",
    kind: "enum",
    T: v.getEnumType(ve)
  }, {
    no: 18,
    name: "kind_details",
    kind: "enum",
    T: v.getEnumType(lh),
    repeated: !0
  }, {
    no: 19,
    name: "data_tracks",
    kind: "message",
    T: es,
    repeated: !0
  }, {
    no: 20,
    name: "client_protocol",
    kind: "scalar",
    T: 5
  }, {
    no: 21,
    name: "capabilities",
    kind: "enum",
    T: v.getEnumType(Zi),
    repeated: !0
  }]),
  li = v.makeEnum("livekit.ParticipantInfo.State", [{
    no: 0,
    name: "JOINING"
  }, {
    no: 1,
    name: "JOINED"
  }, {
    no: 2,
    name: "ACTIVE"
  }, {
    no: 3,
    name: "DISCONNECTED"
  }]),
  Xi = v.makeEnum("livekit.ParticipantInfo.Kind", [{
    no: 0,
    name: "STANDARD"
  }, {
    no: 1,
    name: "INGRESS"
  }, {
    no: 2,
    name: "EGRESS"
  }, {
    no: 3,
    name: "SIP"
  }, {
    no: 4,
    name: "AGENT"
  }, {
    no: 7,
    name: "CONNECTOR"
  }, {
    no: 8,
    name: "BRIDGE"
  }]),
  lh = v.makeEnum("livekit.ParticipantInfo.KindDetail", [{
    no: 0,
    name: "CLOUD_AGENT"
  }, {
    no: 1,
    name: "FORWARDED"
  }, {
    no: 2,
    name: "CONNECTOR_WHATSAPP"
  }, {
    no: 3,
    name: "CONNECTOR_TWILIO"
  }, {
    no: 4,
    name: "BRIDGE_RTSP"
  }, {
    no: 5,
    name: "SIMULATION"
  }]),
  z = v.makeEnum("livekit.Encryption.Type", [{
    no: 0,
    name: "NONE"
  }, {
    no: 1,
    name: "GCM"
  }, {
    no: 2,
    name: "CUSTOM"
  }]),
  uh = v.makeMessageType("livekit.SimulcastCodecInfo", () => [{
    no: 1,
    name: "mime_type",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "mid",
    kind: "scalar",
    T: 9
  }, {
    no: 3,
    name: "cid",
    kind: "scalar",
    T: 9
  }, {
    no: 4,
    name: "layers",
    kind: "message",
    T: _t,
    repeated: !0
  }, {
    no: 5,
    name: "video_layer_mode",
    kind: "enum",
    T: v.getEnumType(Gr)
  }, {
    no: 6,
    name: "sdp_cid",
    kind: "scalar",
    T: 9
  }]),
  ci = v.makeMessageType("livekit.TrackInfo", () => [{
    no: 1,
    name: "sid",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "type",
    kind: "enum",
    T: v.getEnumType(Qe)
  }, {
    no: 3,
    name: "name",
    kind: "scalar",
    T: 9
  }, {
    no: 4,
    name: "muted",
    kind: "scalar",
    T: 8
  }, {
    no: 5,
    name: "width",
    kind: "scalar",
    T: 13
  }, {
    no: 6,
    name: "height",
    kind: "scalar",
    T: 13
  }, {
    no: 7,
    name: "simulcast",
    kind: "scalar",
    T: 8
  }, {
    no: 8,
    name: "disable_dtx",
    kind: "scalar",
    T: 8
  }, {
    no: 9,
    name: "source",
    kind: "enum",
    T: v.getEnumType(me)
  }, {
    no: 10,
    name: "layers",
    kind: "message",
    T: _t,
    repeated: !0
  }, {
    no: 11,
    name: "mime_type",
    kind: "scalar",
    T: 9
  }, {
    no: 12,
    name: "mid",
    kind: "scalar",
    T: 9
  }, {
    no: 13,
    name: "codecs",
    kind: "message",
    T: uh,
    repeated: !0
  }, {
    no: 14,
    name: "stereo",
    kind: "scalar",
    T: 8
  }, {
    no: 15,
    name: "disable_red",
    kind: "scalar",
    T: 8
  }, {
    no: 16,
    name: "encryption",
    kind: "enum",
    T: v.getEnumType(z)
  }, {
    no: 17,
    name: "stream",
    kind: "scalar",
    T: 9
  }, {
    no: 18,
    name: "version",
    kind: "message",
    T: Zc
  }, {
    no: 19,
    name: "audio_features",
    kind: "enum",
    T: v.getEnumType(Te),
    repeated: !0
  }, {
    no: 20,
    name: "backup_codec_policy",
    kind: "enum",
    T: v.getEnumType(Bc)
  }, {
    no: 21,
    name: "packet_trailer_features",
    kind: "enum",
    T: v.getEnumType(wi),
    repeated: !0
  }]),
  es = v.makeMessageType("livekit.DataTrackInfo", () => [{
    no: 1,
    name: "pub_handle",
    kind: "scalar",
    T: 13
  }, {
    no: 2,
    name: "sid",
    kind: "scalar",
    T: 9
  }, {
    no: 3,
    name: "name",
    kind: "scalar",
    T: 9
  }, {
    no: 4,
    name: "encryption",
    kind: "enum",
    T: v.getEnumType(z)
  }, {
    no: 5,
    name: "frame_encoding",
    kind: "message",
    T: qc,
    opt: !0
  }, {
    no: 6,
    name: "schema",
    kind: "message",
    T: Hr,
    opt: !0
  }]),
  qc = v.makeMessageType("livekit.DataTrackFrameEncoding", () => [{
    no: 1,
    name: "well_known",
    kind: "enum",
    T: v.getEnumType(hh),
    oneof: "value"
  }, {
    no: 2,
    name: "custom",
    kind: "scalar",
    T: 9,
    oneof: "value"
  }]),
  hh = v.makeEnum("livekit.DataTrackFrameEncoding.WellKnownFrameEncoding", [{
    no: 0,
    name: "WELL_KNOWN_FRAME_ENCODING_UNSPECIFIED",
    localName: "UNSPECIFIED"
  }, {
    no: 1,
    name: "WELL_KNOWN_FRAME_ENCODING_ROS1",
    localName: "ROS1"
  }, {
    no: 2,
    name: "WELL_KNOWN_FRAME_ENCODING_CDR",
    localName: "CDR"
  }, {
    no: 3,
    name: "WELL_KNOWN_FRAME_ENCODING_PROTOBUF",
    localName: "PROTOBUF"
  }, {
    no: 4,
    name: "WELL_KNOWN_FRAME_ENCODING_FLATBUFFER",
    localName: "FLATBUFFER"
  }, {
    no: 5,
    name: "WELL_KNOWN_FRAME_ENCODING_CBOR",
    localName: "CBOR"
  }, {
    no: 6,
    name: "WELL_KNOWN_FRAME_ENCODING_MSGPACK",
    localName: "MSGPACK"
  }, {
    no: 7,
    name: "WELL_KNOWN_FRAME_ENCODING_JSON",
    localName: "JSON"
  }]),
  mh = v.makeMessageType("livekit.DataTrackSchemaEncoding", () => [{
    no: 1,
    name: "well_known",
    kind: "enum",
    T: v.getEnumType(ph),
    oneof: "value"
  }, {
    no: 2,
    name: "custom",
    kind: "scalar",
    T: 9,
    oneof: "value"
  }]),
  ph = v.makeEnum("livekit.DataTrackSchemaEncoding.WellKnownSchemaEncoding", [{
    no: 0,
    name: "WELL_KNOWN_SCHEMA_ENCODING_UNSPECIFIED",
    localName: "UNSPECIFIED"
  }, {
    no: 1,
    name: "WELL_KNOWN_SCHEMA_ENCODING_PROTOBUF",
    localName: "PROTOBUF"
  }, {
    no: 2,
    name: "WELL_KNOWN_SCHEMA_ENCODING_FLATBUFFER",
    localName: "FLATBUFFER"
  }, {
    no: 3,
    name: "WELL_KNOWN_SCHEMA_ENCODING_ROS1_MSG",
    localName: "ROS1_MSG"
  }, {
    no: 4,
    name: "WELL_KNOWN_SCHEMA_ENCODING_ROS2_MSG",
    localName: "ROS2_MSG"
  }, {
    no: 5,
    name: "WELL_KNOWN_SCHEMA_ENCODING_ROS2_IDL",
    localName: "ROS2_IDL"
  }, {
    no: 6,
    name: "WELL_KNOWN_SCHEMA_ENCODING_OMG_IDL",
    localName: "OMG_IDL"
  }, {
    no: 7,
    name: "WELL_KNOWN_SCHEMA_ENCODING_JSON_SCHEMA",
    localName: "JSON_SCHEMA"
  }]),
  Hr = v.makeMessageType("livekit.DataTrackSchemaId", () => [{
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "encoding",
    kind: "message",
    T: mh
  }]),
  fh = v.makeMessageType("livekit.DataTrackSubscriptionOptions", () => [{
    no: 1,
    name: "target_fps",
    kind: "scalar",
    T: 13,
    opt: !0
  }]),
  Kr = v.makeMessageType("livekit.DataBlobKey", () => [{
    no: 1,
    name: "generic",
    kind: "scalar",
    T: 9,
    oneof: "key"
  }, {
    no: 2,
    name: "schema_id",
    kind: "message",
    T: Hr,
    oneof: "key"
  }]),
  jc = v.makeMessageType("livekit.DataBlob", () => [{
    no: 1,
    name: "key",
    kind: "message",
    T: Kr
  }, {
    no: 2,
    name: "contents",
    kind: "scalar",
    T: 12
  }]),
  _t = v.makeMessageType("livekit.VideoLayer", () => [{
    no: 1,
    name: "quality",
    kind: "enum",
    T: v.getEnumType(Wr)
  }, {
    no: 2,
    name: "width",
    kind: "scalar",
    T: 13
  }, {
    no: 3,
    name: "height",
    kind: "scalar",
    T: 13
  }, {
    no: 4,
    name: "bitrate",
    kind: "scalar",
    T: 13
  }, {
    no: 5,
    name: "ssrc",
    kind: "scalar",
    T: 13
  }, {
    no: 6,
    name: "spatial_layer",
    kind: "scalar",
    T: 5
  }, {
    no: 7,
    name: "rid",
    kind: "scalar",
    T: 9
  }, {
    no: 8,
    name: "repair_ssrc",
    kind: "scalar",
    T: 13
  }]),
  Gr = v.makeEnum("livekit.VideoLayer.Mode", [{
    no: 0,
    name: "MODE_UNUSED"
  }, {
    no: 1,
    name: "ONE_SPATIAL_LAYER_PER_STREAM"
  }, {
    no: 2,
    name: "MULTIPLE_SPATIAL_LAYERS_PER_STREAM"
  }, {
    no: 3,
    name: "ONE_SPATIAL_LAYER_PER_STREAM_INCOMPLETE_RTCP_SR"
  }]),
  Me = v.makeMessageType("livekit.DataPacket", () => [{
    no: 1,
    name: "kind",
    kind: "enum",
    T: v.getEnumType(Pt)
  }, {
    no: 4,
    name: "participant_identity",
    kind: "scalar",
    T: 9
  }, {
    no: 5,
    name: "destination_identities",
    kind: "scalar",
    T: 9,
    repeated: !0
  }, {
    no: 2,
    name: "user",
    kind: "message",
    T: zr,
    oneof: "value"
  }, {
    no: 3,
    name: "speaker",
    kind: "message",
    T: gh,
    oneof: "value"
  }, {
    no: 6,
    name: "sip_dtmf",
    kind: "message",
    T: Kc,
    oneof: "value"
  }, {
    no: 7,
    name: "transcription",
    kind: "message",
    T: vh,
    oneof: "value"
  }, {
    no: 8,
    name: "metrics",
    kind: "message",
    T: sh,
    oneof: "value"
  }, {
    no: 9,
    name: "chat_message",
    kind: "message",
    T: Vn,
    oneof: "value"
  }, {
    no: 10,
    name: "rpc_request",
    kind: "message",
    T: Jr,
    oneof: "value"
  }, {
    no: 11,
    name: "rpc_ack",
    kind: "message",
    T: ts,
    oneof: "value"
  }, {
    no: 12,
    name: "rpc_response",
    kind: "message",
    T: Qr,
    oneof: "value"
  }, {
    no: 13,
    name: "stream_header",
    kind: "message",
    T: is,
    oneof: "value"
  }, {
    no: 14,
    name: "stream_chunk",
    kind: "message",
    T: vt,
    oneof: "value"
  }, {
    no: 15,
    name: "stream_trailer",
    kind: "message",
    T: Yr,
    oneof: "value"
  }, {
    no: 18,
    name: "encrypted_packet",
    kind: "message",
    T: Vc,
    oneof: "value"
  }, {
    no: 16,
    name: "sequence",
    kind: "scalar",
    T: 13
  }, {
    no: 17,
    name: "participant_sid",
    kind: "scalar",
    T: 9
  }]),
  Pt = v.makeEnum("livekit.DataPacket.Kind", [{
    no: 0,
    name: "RELIABLE"
  }, {
    no: 1,
    name: "LOSSY"
  }]),
  Vc = v.makeMessageType("livekit.EncryptedPacket", () => [{
    no: 1,
    name: "encryption_type",
    kind: "enum",
    T: v.getEnumType(z)
  }, {
    no: 2,
    name: "iv",
    kind: "scalar",
    T: 12
  }, {
    no: 3,
    name: "key_index",
    kind: "scalar",
    T: 13
  }, {
    no: 4,
    name: "encrypted_value",
    kind: "scalar",
    T: 12
  }]),
  Wc = v.makeMessageType("livekit.EncryptedPacketPayload", () => [{
    no: 1,
    name: "user",
    kind: "message",
    T: zr,
    oneof: "value"
  }, {
    no: 3,
    name: "chat_message",
    kind: "message",
    T: Vn,
    oneof: "value"
  }, {
    no: 4,
    name: "rpc_request",
    kind: "message",
    T: Jr,
    oneof: "value"
  }, {
    no: 5,
    name: "rpc_ack",
    kind: "message",
    T: ts,
    oneof: "value"
  }, {
    no: 6,
    name: "rpc_response",
    kind: "message",
    T: Qr,
    oneof: "value"
  }, {
    no: 7,
    name: "stream_header",
    kind: "message",
    T: is,
    oneof: "value"
  }, {
    no: 8,
    name: "stream_chunk",
    kind: "message",
    T: vt,
    oneof: "value"
  }, {
    no: 9,
    name: "stream_trailer",
    kind: "message",
    T: Yr,
    oneof: "value"
  }]),
  gh = v.makeMessageType("livekit.ActiveSpeakerUpdate", () => [{
    no: 1,
    name: "speakers",
    kind: "message",
    T: Hc,
    repeated: !0
  }]),
  Hc = v.makeMessageType("livekit.SpeakerInfo", () => [{
    no: 1,
    name: "sid",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "level",
    kind: "scalar",
    T: 2
  }, {
    no: 3,
    name: "active",
    kind: "scalar",
    T: 8
  }]),
  zr = v.makeMessageType("livekit.UserPacket", () => [{
    no: 1,
    name: "participant_sid",
    kind: "scalar",
    T: 9
  }, {
    no: 5,
    name: "participant_identity",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "payload",
    kind: "scalar",
    T: 12
  }, {
    no: 3,
    name: "destination_sids",
    kind: "scalar",
    T: 9,
    repeated: !0
  }, {
    no: 6,
    name: "destination_identities",
    kind: "scalar",
    T: 9,
    repeated: !0
  }, {
    no: 4,
    name: "topic",
    kind: "scalar",
    T: 9,
    opt: !0
  }, {
    no: 8,
    name: "id",
    kind: "scalar",
    T: 9,
    opt: !0
  }, {
    no: 9,
    name: "start_time",
    kind: "scalar",
    T: 4,
    opt: !0
  }, {
    no: 10,
    name: "end_time",
    kind: "scalar",
    T: 4,
    opt: !0
  }, {
    no: 11,
    name: "nonce",
    kind: "scalar",
    T: 12
  }]),
  Kc = v.makeMessageType("livekit.SipDTMF", () => [{
    no: 3,
    name: "code",
    kind: "scalar",
    T: 13
  }, {
    no: 4,
    name: "digit",
    kind: "scalar",
    T: 9
  }]),
  vh = v.makeMessageType("livekit.Transcription", () => [{
    no: 2,
    name: "transcribed_participant_identity",
    kind: "scalar",
    T: 9
  }, {
    no: 3,
    name: "track_id",
    kind: "scalar",
    T: 9
  }, {
    no: 4,
    name: "segments",
    kind: "message",
    T: bh,
    repeated: !0
  }]),
  bh = v.makeMessageType("livekit.TranscriptionSegment", () => [{
    no: 1,
    name: "id",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "text",
    kind: "scalar",
    T: 9
  }, {
    no: 3,
    name: "start_time",
    kind: "scalar",
    T: 4
  }, {
    no: 4,
    name: "end_time",
    kind: "scalar",
    T: 4
  }, {
    no: 5,
    name: "final",
    kind: "scalar",
    T: 8
  }, {
    no: 6,
    name: "language",
    kind: "scalar",
    T: 9
  }]),
  Vn = v.makeMessageType("livekit.ChatMessage", () => [{
    no: 1,
    name: "id",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "timestamp",
    kind: "scalar",
    T: 3
  }, {
    no: 3,
    name: "edit_timestamp",
    kind: "scalar",
    T: 3,
    opt: !0
  }, {
    no: 4,
    name: "message",
    kind: "scalar",
    T: 9
  }, {
    no: 5,
    name: "deleted",
    kind: "scalar",
    T: 8
  }, {
    no: 6,
    name: "generated",
    kind: "scalar",
    T: 8
  }]),
  Jr = v.makeMessageType("livekit.RpcRequest", () => [{
    no: 1,
    name: "id",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "method",
    kind: "scalar",
    T: 9
  }, {
    no: 3,
    name: "payload",
    kind: "scalar",
    T: 9
  }, {
    no: 4,
    name: "response_timeout_ms",
    kind: "scalar",
    T: 13
  }, {
    no: 5,
    name: "version",
    kind: "scalar",
    T: 13
  }, {
    no: 6,
    name: "compressed_payload",
    kind: "scalar",
    T: 12
  }]),
  ts = v.makeMessageType("livekit.RpcAck", () => [{
    no: 1,
    name: "request_id",
    kind: "scalar",
    T: 9
  }]),
  Qr = v.makeMessageType("livekit.RpcResponse", () => [{
    no: 1,
    name: "request_id",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "payload",
    kind: "scalar",
    T: 9,
    oneof: "value"
  }, {
    no: 3,
    name: "error",
    kind: "message",
    T: Gc,
    oneof: "value"
  }, {
    no: 4,
    name: "compressed_payload",
    kind: "scalar",
    T: 12,
    oneof: "value"
  }]),
  Gc = v.makeMessageType("livekit.RpcError", () => [{
    no: 1,
    name: "code",
    kind: "scalar",
    T: 13
  }, {
    no: 2,
    name: "message",
    kind: "scalar",
    T: 9
  }, {
    no: 3,
    name: "data",
    kind: "scalar",
    T: 9
  }]),
  zc = v.makeMessageType("livekit.ParticipantTracks", () => [{
    no: 1,
    name: "participant_sid",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "track_sids",
    kind: "scalar",
    T: 9,
    repeated: !0
  }]),
  Jc = v.makeMessageType("livekit.ServerInfo", () => [{
    no: 1,
    name: "edition",
    kind: "enum",
    T: v.getEnumType(Qc)
  }, {
    no: 2,
    name: "version",
    kind: "scalar",
    T: 9
  }, {
    no: 3,
    name: "protocol",
    kind: "scalar",
    T: 5
  }, {
    no: 4,
    name: "region",
    kind: "scalar",
    T: 9
  }, {
    no: 5,
    name: "node_id",
    kind: "scalar",
    T: 9
  }, {
    no: 6,
    name: "debug_info",
    kind: "scalar",
    T: 9
  }, {
    no: 7,
    name: "agent_protocol",
    kind: "scalar",
    T: 5
  }]),
  Qc = v.makeEnum("livekit.ServerInfo.Edition", [{
    no: 0,
    name: "Standard"
  }, {
    no: 1,
    name: "Cloud"
  }]),
  Yc = v.makeMessageType("livekit.ClientInfo", () => [{
    no: 1,
    name: "sdk",
    kind: "enum",
    T: v.getEnumType($c)
  }, {
    no: 2,
    name: "version",
    kind: "scalar",
    T: 9
  }, {
    no: 3,
    name: "protocol",
    kind: "scalar",
    T: 5
  }, {
    no: 4,
    name: "os",
    kind: "scalar",
    T: 9
  }, {
    no: 5,
    name: "os_version",
    kind: "scalar",
    T: 9
  }, {
    no: 6,
    name: "device_model",
    kind: "scalar",
    T: 9
  }, {
    no: 7,
    name: "browser",
    kind: "scalar",
    T: 9
  }, {
    no: 8,
    name: "browser_version",
    kind: "scalar",
    T: 9
  }, {
    no: 9,
    name: "address",
    kind: "scalar",
    T: 9
  }, {
    no: 10,
    name: "network",
    kind: "scalar",
    T: 9
  }, {
    no: 11,
    name: "other_sdks",
    kind: "scalar",
    T: 9
  }, {
    no: 12,
    name: "client_protocol",
    kind: "scalar",
    T: 5
  }, {
    no: 13,
    name: "capabilities",
    kind: "enum",
    T: v.getEnumType(Zi),
    repeated: !0
  }]),
  $c = v.makeEnum("livekit.ClientInfo.SDK", [{
    no: 0,
    name: "UNKNOWN"
  }, {
    no: 1,
    name: "JS"
  }, {
    no: 2,
    name: "SWIFT"
  }, {
    no: 3,
    name: "ANDROID"
  }, {
    no: 4,
    name: "FLUTTER"
  }, {
    no: 5,
    name: "GO"
  }, {
    no: 6,
    name: "UNITY"
  }, {
    no: 7,
    name: "REACT_NATIVE"
  }, {
    no: 8,
    name: "RUST"
  }, {
    no: 9,
    name: "PYTHON"
  }, {
    no: 10,
    name: "CPP"
  }, {
    no: 11,
    name: "UNITY_WEB"
  }, {
    no: 12,
    name: "NODE"
  }, {
    no: 13,
    name: "UNREAL"
  }, {
    no: 14,
    name: "ESP32"
  }, {
    no: 15,
    name: "DOTNET"
  }]),
  Zi = v.makeEnum("livekit.ClientInfo.Capability", [{
    no: 0,
    name: "CAP_UNUSED"
  }, {
    no: 1,
    name: "CAP_PACKET_TRAILER"
  }, {
    no: 2,
    name: "CAP_COMPRESSION_DEFLATE_RAW"
  }]),
  Xc = v.makeMessageType("livekit.ClientConfiguration", () => [{
    no: 1,
    name: "video",
    kind: "message",
    T: za
  }, {
    no: 2,
    name: "screen",
    kind: "message",
    T: za
  }, {
    no: 3,
    name: "resume_connection",
    kind: "enum",
    T: v.getEnumType($i)
  }, {
    no: 4,
    name: "disabled_codecs",
    kind: "message",
    T: yh
  }, {
    no: 5,
    name: "force_relay",
    kind: "enum",
    T: v.getEnumType($i)
  }]),
  za = v.makeMessageType("livekit.VideoConfiguration", () => [{
    no: 1,
    name: "hardware_encoder",
    kind: "enum",
    T: v.getEnumType($i)
  }]),
  yh = v.makeMessageType("livekit.DisabledCodecs", () => [{
    no: 1,
    name: "codecs",
    kind: "message",
    T: jn,
    repeated: !0
  }, {
    no: 2,
    name: "publish",
    kind: "message",
    T: jn,
    repeated: !0
  }]),
  Zc = v.makeMessageType("livekit.TimedVersion", () => [{
    no: 1,
    name: "unix_micro",
    kind: "scalar",
    T: 3
  }, {
    no: 2,
    name: "ticks",
    kind: "scalar",
    T: 5
  }]),
  nr = v.makeEnum("livekit.DataStream.OperationType", [{
    no: 0,
    name: "CREATE"
  }, {
    no: 1,
    name: "UPDATE"
  }, {
    no: 2,
    name: "DELETE"
  }, {
    no: 3,
    name: "REACTION"
  }]),
  _e = v.makeEnum("livekit.DataStream.CompressionType", [{
    no: 0,
    name: "NONE"
  }, {
    no: 1,
    name: "DEFLATE_RAW"
  }]),
  ed = v.makeMessageType("livekit.DataStream.TextHeader", () => [{
    no: 1,
    name: "operation_type",
    kind: "enum",
    T: v.getEnumType(nr)
  }, {
    no: 2,
    name: "version",
    kind: "scalar",
    T: 5
  }, {
    no: 3,
    name: "reply_to_stream_id",
    kind: "scalar",
    T: 9
  }, {
    no: 4,
    name: "attached_stream_ids",
    kind: "scalar",
    T: 9,
    repeated: !0
  }, {
    no: 5,
    name: "generated",
    kind: "scalar",
    T: 8
  }], {
    localName: "DataStream_TextHeader"
  }),
  td = v.makeMessageType("livekit.DataStream.ByteHeader", () => [{
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
  }], {
    localName: "DataStream_ByteHeader"
  }),
  is = v.makeMessageType("livekit.DataStream.Header", () => [{
    no: 1,
    name: "stream_id",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "timestamp",
    kind: "scalar",
    T: 3
  }, {
    no: 3,
    name: "topic",
    kind: "scalar",
    T: 9
  }, {
    no: 4,
    name: "mime_type",
    kind: "scalar",
    T: 9
  }, {
    no: 5,
    name: "total_length",
    kind: "scalar",
    T: 4,
    opt: !0
  }, {
    no: 7,
    name: "encryption_type",
    kind: "enum",
    T: v.getEnumType(z)
  }, {
    no: 8,
    name: "attributes",
    kind: "map",
    K: 9,
    V: {
      kind: "scalar",
      T: 9
    }
  }, {
    no: 9,
    name: "text_header",
    kind: "message",
    T: ed,
    oneof: "content_header"
  }, {
    no: 10,
    name: "byte_header",
    kind: "message",
    T: td,
    oneof: "content_header"
  }, {
    no: 11,
    name: "inline_content",
    kind: "scalar",
    T: 12,
    opt: !0
  }, {
    no: 12,
    name: "compression",
    kind: "enum",
    T: v.getEnumType(_e)
  }], {
    localName: "DataStream_Header"
  }),
  vt = v.makeMessageType("livekit.DataStream.Chunk", () => [{
    no: 1,
    name: "stream_id",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "chunk_index",
    kind: "scalar",
    T: 4
  }, {
    no: 3,
    name: "content",
    kind: "scalar",
    T: 12
  }, {
    no: 4,
    name: "version",
    kind: "scalar",
    T: 5
  }, {
    no: 5,
    name: "iv",
    kind: "scalar",
    T: 12,
    opt: !0
  }], {
    localName: "DataStream_Chunk"
  }),
  Yr = v.makeMessageType("livekit.DataStream.Trailer", () => [{
    no: 1,
    name: "stream_id",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "reason",
    kind: "scalar",
    T: 9
  }, {
    no: 3,
    name: "attributes",
    kind: "map",
    K: 9,
    V: {
      kind: "scalar",
      T: 9
    }
  }], {
    localName: "DataStream_Trailer"
  }),
  kh = v.makeMessageType("livekit.SubscribedAudioCodec", () => [{
    no: 1,
    name: "codec",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "enabled",
    kind: "scalar",
    T: 8
  }]),
  Ye = v.makeEnum("livekit.SignalTarget", [{
    no: 0,
    name: "PUBLISHER"
  }, {
    no: 1,
    name: "SUBSCRIBER"
  }]),
  sr = v.makeEnum("livekit.StreamState", [{
    no: 0,
    name: "ACTIVE"
  }, {
    no: 1,
    name: "PAUSED"
  }]),
  Th = v.makeEnum("livekit.CandidateProtocol", [{
    no: 0,
    name: "UDP"
  }, {
    no: 1,
    name: "TCP"
  }, {
    no: 2,
    name: "TLS"
  }]),
  Sh = v.makeMessageType("livekit.SignalRequest", () => [{
    no: 1,
    name: "offer",
    kind: "message",
    T: Ot,
    oneof: "message"
  }, {
    no: 2,
    name: "answer",
    kind: "message",
    T: Ot,
    oneof: "message"
  }, {
    no: 3,
    name: "trickle",
    kind: "message",
    T: ns,
    oneof: "message"
  }, {
    no: 4,
    name: "add_track",
    kind: "message",
    T: en,
    oneof: "message"
  }, {
    no: 5,
    name: "mute",
    kind: "message",
    T: ss,
    oneof: "message"
  }, {
    no: 6,
    name: "subscription",
    kind: "message",
    T: rs,
    oneof: "message"
  }, {
    no: 7,
    name: "track_setting",
    kind: "message",
    T: nd,
    oneof: "message"
  }, {
    no: 8,
    name: "leave",
    kind: "message",
    T: as,
    oneof: "message"
  }, {
    no: 10,
    name: "update_layers",
    kind: "message",
    T: rd,
    oneof: "message"
  }, {
    no: 11,
    name: "subscription_permission",
    kind: "message",
    T: cd,
    oneof: "message"
  }, {
    no: 12,
    name: "sync_state",
    kind: "message",
    T: ra,
    oneof: "message"
  }, {
    no: 13,
    name: "simulate",
    kind: "message",
    T: it,
    oneof: "message"
  }, {
    no: 14,
    name: "ping",
    kind: "scalar",
    T: 3,
    oneof: "message"
  }, {
    no: 15,
    name: "update_metadata",
    kind: "message",
    T: na,
    oneof: "message"
  }, {
    no: 16,
    name: "ping_req",
    kind: "message",
    T: ud,
    oneof: "message"
  }, {
    no: 17,
    name: "update_audio_track",
    kind: "message",
    T: ia,
    oneof: "message"
  }, {
    no: 18,
    name: "update_video_track",
    kind: "message",
    T: sd,
    oneof: "message"
  }, {
    no: 19,
    name: "publish_data_track_request",
    kind: "message",
    T: $r,
    oneof: "message"
  }, {
    no: 20,
    name: "unpublish_data_track_request",
    kind: "message",
    T: Zr,
    oneof: "message"
  }, {
    no: 21,
    name: "update_data_subscription",
    kind: "message",
    T: ta,
    oneof: "message"
  }, {
    no: 22,
    name: "store_data_blob_request",
    kind: "message",
    T: Mh,
    oneof: "message"
  }, {
    no: 23,
    name: "get_data_blob_request",
    kind: "message",
    T: Oh,
    oneof: "message"
  }]),
  Ja = v.makeMessageType("livekit.SignalResponse", () => [{
    no: 1,
    name: "join",
    kind: "message",
    T: _h,
    oneof: "message"
  }, {
    no: 2,
    name: "answer",
    kind: "message",
    T: Ot,
    oneof: "message"
  }, {
    no: 3,
    name: "offer",
    kind: "message",
    T: Ot,
    oneof: "message"
  }, {
    no: 4,
    name: "trickle",
    kind: "message",
    T: ns,
    oneof: "message"
  }, {
    no: 5,
    name: "update",
    kind: "message",
    T: Ih,
    oneof: "message"
  }, {
    no: 6,
    name: "track_published",
    kind: "message",
    T: ea,
    oneof: "message"
  }, {
    no: 8,
    name: "leave",
    kind: "message",
    T: as,
    oneof: "message"
  }, {
    no: 9,
    name: "mute",
    kind: "message",
    T: ss,
    oneof: "message"
  }, {
    no: 10,
    name: "speakers_changed",
    kind: "message",
    T: Lh,
    oneof: "message"
  }, {
    no: 11,
    name: "room_update",
    kind: "message",
    T: Nh,
    oneof: "message"
  }, {
    no: 12,
    name: "connection_quality",
    kind: "message",
    T: Uh,
    oneof: "message"
  }, {
    no: 13,
    name: "stream_state_update",
    kind: "message",
    T: Bh,
    oneof: "message"
  }, {
    no: 14,
    name: "subscribed_quality_update",
    kind: "message",
    T: jh,
    oneof: "message"
  }, {
    no: 15,
    name: "subscription_permission_update",
    kind: "message",
    T: Wh,
    oneof: "message"
  }, {
    no: 16,
    name: "refresh_token",
    kind: "scalar",
    T: 9,
    oneof: "message"
  }, {
    no: 17,
    name: "track_unpublished",
    kind: "message",
    T: Rh,
    oneof: "message"
  }, {
    no: 18,
    name: "pong",
    kind: "scalar",
    T: 3,
    oneof: "message"
  }, {
    no: 19,
    name: "reconnect",
    kind: "message",
    T: Ph,
    oneof: "message"
  }, {
    no: 20,
    name: "pong_resp",
    kind: "message",
    T: Kh,
    oneof: "message"
  }, {
    no: 21,
    name: "subscription_response",
    kind: "message",
    T: Jh,
    oneof: "message"
  }, {
    no: 22,
    name: "request_response",
    kind: "message",
    T: Qh,
    oneof: "message"
  }, {
    no: 23,
    name: "track_subscribed",
    kind: "message",
    T: Yh,
    oneof: "message"
  }, {
    no: 24,
    name: "room_moved",
    kind: "message",
    T: Hh,
    oneof: "message"
  }, {
    no: 25,
    name: "media_sections_requirement",
    kind: "message",
    T: Zh,
    oneof: "message"
  }, {
    no: 26,
    name: "subscribed_audio_codec_update",
    kind: "message",
    T: Vh,
    oneof: "message"
  }, {
    no: 27,
    name: "publish_data_track_response",
    kind: "message",
    T: Xr,
    oneof: "message"
  }, {
    no: 28,
    name: "unpublish_data_track_response",
    kind: "message",
    T: Ch,
    oneof: "message"
  }, {
    no: 29,
    name: "data_track_subscriber_handles",
    kind: "message",
    T: wh,
    oneof: "message"
  }, {
    no: 30,
    name: "store_data_blob_response",
    kind: "message",
    T: Ah,
    oneof: "message"
  }, {
    no: 31,
    name: "get_data_blob_response",
    kind: "message",
    T: Dh,
    oneof: "message"
  }]),
  rr = v.makeMessageType("livekit.SimulcastCodec", () => [{
    no: 1,
    name: "codec",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "cid",
    kind: "scalar",
    T: 9
  }, {
    no: 4,
    name: "layers",
    kind: "message",
    T: _t,
    repeated: !0
  }, {
    no: 5,
    name: "video_layer_mode",
    kind: "enum",
    T: v.getEnumType(Gr)
  }]),
  en = v.makeMessageType("livekit.AddTrackRequest", () => [{
    no: 1,
    name: "cid",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "name",
    kind: "scalar",
    T: 9
  }, {
    no: 3,
    name: "type",
    kind: "enum",
    T: v.getEnumType(Qe)
  }, {
    no: 4,
    name: "width",
    kind: "scalar",
    T: 13
  }, {
    no: 5,
    name: "height",
    kind: "scalar",
    T: 13
  }, {
    no: 6,
    name: "muted",
    kind: "scalar",
    T: 8
  }, {
    no: 7,
    name: "disable_dtx",
    kind: "scalar",
    T: 8
  }, {
    no: 8,
    name: "source",
    kind: "enum",
    T: v.getEnumType(me)
  }, {
    no: 9,
    name: "layers",
    kind: "message",
    T: _t,
    repeated: !0
  }, {
    no: 10,
    name: "simulcast_codecs",
    kind: "message",
    T: rr,
    repeated: !0
  }, {
    no: 11,
    name: "sid",
    kind: "scalar",
    T: 9
  }, {
    no: 12,
    name: "stereo",
    kind: "scalar",
    T: 8
  }, {
    no: 13,
    name: "disable_red",
    kind: "scalar",
    T: 8
  }, {
    no: 14,
    name: "encryption",
    kind: "enum",
    T: v.getEnumType(z)
  }, {
    no: 15,
    name: "stream",
    kind: "scalar",
    T: 9
  }, {
    no: 16,
    name: "backup_codec_policy",
    kind: "enum",
    T: v.getEnumType(Bc)
  }, {
    no: 17,
    name: "audio_features",
    kind: "enum",
    T: v.getEnumType(Te),
    repeated: !0
  }, {
    no: 18,
    name: "packet_trailer_features",
    kind: "enum",
    T: v.getEnumType(wi),
    repeated: !0
  }]),
  $r = v.makeMessageType("livekit.PublishDataTrackRequest", () => [{
    no: 1,
    name: "pub_handle",
    kind: "scalar",
    T: 13
  }, {
    no: 2,
    name: "name",
    kind: "scalar",
    T: 9
  }, {
    no: 3,
    name: "encryption",
    kind: "enum",
    T: v.getEnumType(z)
  }, {
    no: 4,
    name: "frame_encoding",
    kind: "message",
    T: qc,
    opt: !0
  }, {
    no: 5,
    name: "schema",
    kind: "message",
    T: Hr,
    opt: !0
  }]),
  Xr = v.makeMessageType("livekit.PublishDataTrackResponse", () => [{
    no: 1,
    name: "info",
    kind: "message",
    T: es
  }]),
  Zr = v.makeMessageType("livekit.UnpublishDataTrackRequest", () => [{
    no: 1,
    name: "pub_handle",
    kind: "scalar",
    T: 13
  }]),
  Ch = v.makeMessageType("livekit.UnpublishDataTrackResponse", () => [{
    no: 1,
    name: "info",
    kind: "message",
    T: es
  }]),
  wh = v.makeMessageType("livekit.DataTrackSubscriberHandles", () => [{
    no: 1,
    name: "sub_handles",
    kind: "map",
    K: 13,
    V: {
      kind: "message",
      T: Eh
    }
  }]),
  Eh = v.makeMessageType("livekit.DataTrackSubscriberHandles.PublishedDataTrack", () => [{
    no: 1,
    name: "publisher_identity",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "publisher_sid",
    kind: "scalar",
    T: 9
  }, {
    no: 3,
    name: "track_sid",
    kind: "scalar",
    T: 9
  }], {
    localName: "DataTrackSubscriberHandles_PublishedDataTrack"
  }),
  ns = v.makeMessageType("livekit.TrickleRequest", () => [{
    no: 1,
    name: "candidateInit",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "target",
    kind: "enum",
    T: v.getEnumType(Ye)
  }, {
    no: 3,
    name: "final",
    kind: "scalar",
    T: 8
  }]),
  ss = v.makeMessageType("livekit.MuteTrackRequest", () => [{
    no: 1,
    name: "sid",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "muted",
    kind: "scalar",
    T: 8
  }]),
  _h = v.makeMessageType("livekit.JoinResponse", () => [{
    no: 1,
    name: "room",
    kind: "message",
    T: Zn
  }, {
    no: 2,
    name: "participant",
    kind: "message",
    T: Jt
  }, {
    no: 3,
    name: "other_participants",
    kind: "message",
    T: Jt,
    repeated: !0
  }, {
    no: 4,
    name: "server_version",
    kind: "scalar",
    T: 9
  }, {
    no: 5,
    name: "ice_servers",
    kind: "message",
    T: ad,
    repeated: !0
  }, {
    no: 6,
    name: "subscriber_primary",
    kind: "scalar",
    T: 8
  }, {
    no: 7,
    name: "alternative_url",
    kind: "scalar",
    T: 9
  }, {
    no: 8,
    name: "client_configuration",
    kind: "message",
    T: Xc
  }, {
    no: 9,
    name: "server_region",
    kind: "scalar",
    T: 9
  }, {
    no: 10,
    name: "ping_timeout",
    kind: "scalar",
    T: 5
  }, {
    no: 11,
    name: "ping_interval",
    kind: "scalar",
    T: 5
  }, {
    no: 12,
    name: "server_info",
    kind: "message",
    T: Jc
  }, {
    no: 13,
    name: "sif_trailer",
    kind: "scalar",
    T: 12
  }, {
    no: 14,
    name: "enabled_publish_codecs",
    kind: "message",
    T: jn,
    repeated: !0
  }, {
    no: 15,
    name: "fast_publish",
    kind: "scalar",
    T: 8
  }]),
  Ph = v.makeMessageType("livekit.ReconnectResponse", () => [{
    no: 1,
    name: "ice_servers",
    kind: "message",
    T: ad,
    repeated: !0
  }, {
    no: 2,
    name: "client_configuration",
    kind: "message",
    T: Xc
  }, {
    no: 3,
    name: "server_info",
    kind: "message",
    T: Jc
  }, {
    no: 4,
    name: "last_message_seq",
    kind: "scalar",
    T: 13
  }]),
  ea = v.makeMessageType("livekit.TrackPublishedResponse", () => [{
    no: 1,
    name: "cid",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "track",
    kind: "message",
    T: ci
  }]),
  Rh = v.makeMessageType("livekit.TrackUnpublishedResponse", () => [{
    no: 1,
    name: "track_sid",
    kind: "scalar",
    T: 9
  }]),
  Ot = v.makeMessageType("livekit.SessionDescription", () => [{
    no: 1,
    name: "type",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "sdp",
    kind: "scalar",
    T: 9
  }, {
    no: 3,
    name: "id",
    kind: "scalar",
    T: 13
  }, {
    no: 4,
    name: "mid_to_track_id",
    kind: "map",
    K: 9,
    V: {
      kind: "scalar",
      T: 9
    }
  }]),
  Ih = v.makeMessageType("livekit.ParticipantUpdate", () => [{
    no: 1,
    name: "participants",
    kind: "message",
    T: Jt,
    repeated: !0
  }]),
  rs = v.makeMessageType("livekit.UpdateSubscription", () => [{
    no: 1,
    name: "track_sids",
    kind: "scalar",
    T: 9,
    repeated: !0
  }, {
    no: 2,
    name: "subscribe",
    kind: "scalar",
    T: 8
  }, {
    no: 3,
    name: "participant_tracks",
    kind: "message",
    T: zc,
    repeated: !0
  }]),
  ta = v.makeMessageType("livekit.UpdateDataSubscription", () => [{
    no: 1,
    name: "updates",
    kind: "message",
    T: id,
    repeated: !0
  }]),
  id = v.makeMessageType("livekit.UpdateDataSubscription.Update", () => [{
    no: 1,
    name: "track_sid",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "subscribe",
    kind: "scalar",
    T: 8
  }, {
    no: 3,
    name: "options",
    kind: "message",
    T: fh
  }], {
    localName: "UpdateDataSubscription_Update"
  }),
  Mh = v.makeMessageType("livekit.StoreDataBlobRequest", () => [{
    no: 1,
    name: "request_id",
    kind: "scalar",
    T: 13
  }, {
    no: 2,
    name: "blob",
    kind: "message",
    T: jc
  }]),
  Ah = v.makeMessageType("livekit.StoreDataBlobResponse", () => [{
    no: 1,
    name: "request_id",
    kind: "scalar",
    T: 13
  }, {
    no: 2,
    name: "key",
    kind: "message",
    T: Kr
  }]),
  Oh = v.makeMessageType("livekit.GetDataBlobRequest", () => [{
    no: 1,
    name: "request_id",
    kind: "scalar",
    T: 13
  }, {
    no: 2,
    name: "participant_identity",
    kind: "scalar",
    T: 9
  }, {
    no: 3,
    name: "key",
    kind: "message",
    T: Kr
  }]),
  Dh = v.makeMessageType("livekit.GetDataBlobResponse", () => [{
    no: 1,
    name: "request_id",
    kind: "scalar",
    T: 13
  }, {
    no: 2,
    name: "blob",
    kind: "message",
    T: jc
  }]),
  nd = v.makeMessageType("livekit.UpdateTrackSettings", () => [{
    no: 1,
    name: "track_sids",
    kind: "scalar",
    T: 9,
    repeated: !0
  }, {
    no: 3,
    name: "disabled",
    kind: "scalar",
    T: 8
  }, {
    no: 4,
    name: "quality",
    kind: "enum",
    T: v.getEnumType(Wr)
  }, {
    no: 5,
    name: "width",
    kind: "scalar",
    T: 13
  }, {
    no: 6,
    name: "height",
    kind: "scalar",
    T: 13
  }, {
    no: 7,
    name: "fps",
    kind: "scalar",
    T: 13
  }, {
    no: 8,
    name: "priority",
    kind: "scalar",
    T: 13
  }]),
  ia = v.makeMessageType("livekit.UpdateLocalAudioTrack", () => [{
    no: 1,
    name: "track_sid",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "features",
    kind: "enum",
    T: v.getEnumType(Te),
    repeated: !0
  }]),
  sd = v.makeMessageType("livekit.UpdateLocalVideoTrack", () => [{
    no: 1,
    name: "track_sid",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "width",
    kind: "scalar",
    T: 13
  }, {
    no: 3,
    name: "height",
    kind: "scalar",
    T: 13
  }]),
  as = v.makeMessageType("livekit.LeaveRequest", () => [{
    no: 1,
    name: "can_reconnect",
    kind: "scalar",
    T: 8
  }, {
    no: 2,
    name: "reason",
    kind: "enum",
    T: v.getEnumType(ve)
  }, {
    no: 3,
    name: "action",
    kind: "enum",
    T: v.getEnumType(ui)
  }, {
    no: 4,
    name: "regions",
    kind: "message",
    T: Gh
  }]),
  ui = v.makeEnum("livekit.LeaveRequest.Action", [{
    no: 0,
    name: "DISCONNECT"
  }, {
    no: 1,
    name: "RESUME"
  }, {
    no: 2,
    name: "RECONNECT"
  }]),
  rd = v.makeMessageType("livekit.UpdateVideoLayers", () => [{
    no: 1,
    name: "track_sid",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "layers",
    kind: "message",
    T: _t,
    repeated: !0
  }]),
  na = v.makeMessageType("livekit.UpdateParticipantMetadata", () => [{
    no: 1,
    name: "metadata",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "name",
    kind: "scalar",
    T: 9
  }, {
    no: 3,
    name: "attributes",
    kind: "map",
    K: 9,
    V: {
      kind: "scalar",
      T: 9
    }
  }, {
    no: 4,
    name: "request_id",
    kind: "scalar",
    T: 13
  }]),
  ad = v.makeMessageType("livekit.ICEServer", () => [{
    no: 1,
    name: "urls",
    kind: "scalar",
    T: 9,
    repeated: !0
  }, {
    no: 2,
    name: "username",
    kind: "scalar",
    T: 9
  }, {
    no: 3,
    name: "credential",
    kind: "scalar",
    T: 9
  }]),
  Lh = v.makeMessageType("livekit.SpeakersChanged", () => [{
    no: 1,
    name: "speakers",
    kind: "message",
    T: Hc,
    repeated: !0
  }]),
  Nh = v.makeMessageType("livekit.RoomUpdate", () => [{
    no: 1,
    name: "room",
    kind: "message",
    T: Zn
  }]),
  xh = v.makeMessageType("livekit.ConnectionQualityInfo", () => [{
    no: 1,
    name: "participant_sid",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "quality",
    kind: "enum",
    T: v.getEnumType(oi)
  }, {
    no: 3,
    name: "score",
    kind: "scalar",
    T: 2
  }]),
  Uh = v.makeMessageType("livekit.ConnectionQualityUpdate", () => [{
    no: 1,
    name: "updates",
    kind: "message",
    T: xh,
    repeated: !0
  }]),
  Fh = v.makeMessageType("livekit.StreamStateInfo", () => [{
    no: 1,
    name: "participant_sid",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "track_sid",
    kind: "scalar",
    T: 9
  }, {
    no: 3,
    name: "state",
    kind: "enum",
    T: v.getEnumType(sr)
  }]),
  Bh = v.makeMessageType("livekit.StreamStateUpdate", () => [{
    no: 1,
    name: "stream_states",
    kind: "message",
    T: Fh,
    repeated: !0
  }]),
  sa = v.makeMessageType("livekit.SubscribedQuality", () => [{
    no: 1,
    name: "quality",
    kind: "enum",
    T: v.getEnumType(Wr)
  }, {
    no: 2,
    name: "enabled",
    kind: "scalar",
    T: 8
  }]),
  qh = v.makeMessageType("livekit.SubscribedCodec", () => [{
    no: 1,
    name: "codec",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "qualities",
    kind: "message",
    T: sa,
    repeated: !0
  }]),
  jh = v.makeMessageType("livekit.SubscribedQualityUpdate", () => [{
    no: 1,
    name: "track_sid",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "subscribed_qualities",
    kind: "message",
    T: sa,
    repeated: !0
  }, {
    no: 3,
    name: "subscribed_codecs",
    kind: "message",
    T: qh,
    repeated: !0
  }]),
  Vh = v.makeMessageType("livekit.SubscribedAudioCodecUpdate", () => [{
    no: 1,
    name: "track_sid",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "subscribed_audio_codecs",
    kind: "message",
    T: kh,
    repeated: !0
  }]),
  od = v.makeMessageType("livekit.TrackPermission", () => [{
    no: 1,
    name: "participant_sid",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "all_tracks",
    kind: "scalar",
    T: 8
  }, {
    no: 3,
    name: "track_sids",
    kind: "scalar",
    T: 9,
    repeated: !0
  }, {
    no: 4,
    name: "participant_identity",
    kind: "scalar",
    T: 9
  }]),
  cd = v.makeMessageType("livekit.SubscriptionPermission", () => [{
    no: 1,
    name: "all_participants",
    kind: "scalar",
    T: 8
  }, {
    no: 2,
    name: "track_permissions",
    kind: "message",
    T: od,
    repeated: !0
  }]),
  Wh = v.makeMessageType("livekit.SubscriptionPermissionUpdate", () => [{
    no: 1,
    name: "participant_sid",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "track_sid",
    kind: "scalar",
    T: 9
  }, {
    no: 3,
    name: "allowed",
    kind: "scalar",
    T: 8
  }]),
  Hh = v.makeMessageType("livekit.RoomMovedResponse", () => [{
    no: 1,
    name: "room",
    kind: "message",
    T: Zn
  }, {
    no: 2,
    name: "token",
    kind: "scalar",
    T: 9
  }, {
    no: 3,
    name: "participant",
    kind: "message",
    T: Jt
  }, {
    no: 4,
    name: "other_participants",
    kind: "message",
    T: Jt,
    repeated: !0
  }]),
  ra = v.makeMessageType("livekit.SyncState", () => [{
    no: 1,
    name: "answer",
    kind: "message",
    T: Ot
  }, {
    no: 2,
    name: "subscription",
    kind: "message",
    T: rs
  }, {
    no: 3,
    name: "publish_tracks",
    kind: "message",
    T: ea,
    repeated: !0
  }, {
    no: 4,
    name: "data_channels",
    kind: "message",
    T: ld,
    repeated: !0
  }, {
    no: 5,
    name: "offer",
    kind: "message",
    T: Ot
  }, {
    no: 6,
    name: "track_sids_disabled",
    kind: "scalar",
    T: 9,
    repeated: !0
  }, {
    no: 7,
    name: "datachannel_receive_states",
    kind: "message",
    T: dd,
    repeated: !0
  }, {
    no: 8,
    name: "publish_data_tracks",
    kind: "message",
    T: Xr,
    repeated: !0
  }, {
    no: 9,
    name: "data_subscription",
    kind: "message",
    T: ta
  }]),
  dd = v.makeMessageType("livekit.DataChannelReceiveState", () => [{
    no: 1,
    name: "publisher_sid",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "last_seq",
    kind: "scalar",
    T: 13
  }]),
  ld = v.makeMessageType("livekit.DataChannelInfo", () => [{
    no: 1,
    name: "label",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "id",
    kind: "scalar",
    T: 13
  }, {
    no: 3,
    name: "target",
    kind: "enum",
    T: v.getEnumType(Ye)
  }]),
  it = v.makeMessageType("livekit.SimulateScenario", () => [{
    no: 1,
    name: "speaker_update",
    kind: "scalar",
    T: 5,
    oneof: "scenario"
  }, {
    no: 2,
    name: "node_failure",
    kind: "scalar",
    T: 8,
    oneof: "scenario"
  }, {
    no: 3,
    name: "migration",
    kind: "scalar",
    T: 8,
    oneof: "scenario"
  }, {
    no: 4,
    name: "server_leave",
    kind: "scalar",
    T: 8,
    oneof: "scenario"
  }, {
    no: 5,
    name: "switch_candidate_protocol",
    kind: "enum",
    T: v.getEnumType(Th),
    oneof: "scenario"
  }, {
    no: 6,
    name: "subscriber_bandwidth",
    kind: "scalar",
    T: 3,
    oneof: "scenario"
  }, {
    no: 7,
    name: "disconnect_signal_on_resume",
    kind: "scalar",
    T: 8,
    oneof: "scenario"
  }, {
    no: 8,
    name: "disconnect_signal_on_resume_no_messages",
    kind: "scalar",
    T: 8,
    oneof: "scenario"
  }, {
    no: 9,
    name: "leave_request_full_reconnect",
    kind: "scalar",
    T: 8,
    oneof: "scenario"
  }]),
  ud = v.makeMessageType("livekit.Ping", () => [{
    no: 1,
    name: "timestamp",
    kind: "scalar",
    T: 3
  }, {
    no: 2,
    name: "rtt",
    kind: "scalar",
    T: 3
  }]),
  Kh = v.makeMessageType("livekit.Pong", () => [{
    no: 1,
    name: "last_ping_timestamp",
    kind: "scalar",
    T: 3
  }, {
    no: 2,
    name: "timestamp",
    kind: "scalar",
    T: 3
  }]),
  Gh = v.makeMessageType("livekit.RegionSettings", () => [{
    no: 1,
    name: "regions",
    kind: "message",
    T: zh,
    repeated: !0
  }]),
  zh = v.makeMessageType("livekit.RegionInfo", () => [{
    no: 1,
    name: "region",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "url",
    kind: "scalar",
    T: 9
  }, {
    no: 3,
    name: "distance",
    kind: "scalar",
    T: 3
  }]),
  Jh = v.makeMessageType("livekit.SubscriptionResponse", () => [{
    no: 1,
    name: "track_sid",
    kind: "scalar",
    T: 9
  }, {
    no: 2,
    name: "err",
    kind: "enum",
    T: v.getEnumType(ch)
  }]),
  Qh = v.makeMessageType("livekit.RequestResponse", () => [{
    no: 1,
    name: "request_id",
    kind: "scalar",
    T: 13
  }, {
    no: 2,
    name: "reason",
    kind: "enum",
    T: v.getEnumType(Ut)
  }, {
    no: 3,
    name: "message",
    kind: "scalar",
    T: 9
  }, {
    no: 4,
    name: "trickle",
    kind: "message",
    T: ns,
    oneof: "request"
  }, {
    no: 5,
    name: "add_track",
    kind: "message",
    T: en,
    oneof: "request"
  }, {
    no: 6,
    name: "mute",
    kind: "message",
    T: ss,
    oneof: "request"
  }, {
    no: 7,
    name: "update_metadata",
    kind: "message",
    T: na,
    oneof: "request"
  }, {
    no: 8,
    name: "update_audio_track",
    kind: "message",
    T: ia,
    oneof: "request"
  }, {
    no: 9,
    name: "update_video_track",
    kind: "message",
    T: sd,
    oneof: "request"
  }, {
    no: 10,
    name: "publish_data_track",
    kind: "message",
    T: $r,
    oneof: "request"
  }, {
    no: 11,
    name: "unpublish_data_track",
    kind: "message",
    T: Zr,
    oneof: "request"
  }]),
  Ut = v.makeEnum("livekit.RequestResponse.Reason", [{
    no: 0,
    name: "OK"
  }, {
    no: 1,
    name: "NOT_FOUND"
  }, {
    no: 2,
    name: "NOT_ALLOWED"
  }, {
    no: 3,
    name: "LIMIT_EXCEEDED"
  }, {
    no: 4,
    name: "QUEUED"
  }, {
    no: 5,
    name: "UNSUPPORTED_TYPE"
  }, {
    no: 6,
    name: "UNCLASSIFIED_ERROR"
  }, {
    no: 7,
    name: "INVALID_HANDLE"
  }, {
    no: 8,
    name: "INVALID_NAME"
  }, {
    no: 9,
    name: "DUPLICATE_HANDLE"
  }, {
    no: 10,
    name: "DUPLICATE_NAME"
  }, {
    no: 11,
    name: "INVALID_REQUEST"
  }]),
  Yh = v.makeMessageType("livekit.TrackSubscribed", () => [{
    no: 1,
    name: "track_sid",
    kind: "scalar",
    T: 9
  }]),
  hd = v.makeMessageType("livekit.ConnectionSettings", () => [{
    no: 1,
    name: "auto_subscribe",
    kind: "scalar",
    T: 8
  }, {
    no: 2,
    name: "adaptive_stream",
    kind: "scalar",
    T: 8
  }, {
    no: 3,
    name: "subscriber_allow_pause",
    kind: "scalar",
    T: 8,
    opt: !0
  }, {
    no: 4,
    name: "disable_ice_lite",
    kind: "scalar",
    T: 8
  }, {
    no: 5,
    name: "auto_subscribe_data_track",
    kind: "scalar",
    T: 8,
    opt: !0
  }]),
  $h = v.makeMessageType("livekit.JoinRequest", () => [{
    no: 1,
    name: "client_info",
    kind: "message",
    T: Yc
  }, {
    no: 2,
    name: "connection_settings",
    kind: "message",
    T: hd
  }, {
    no: 3,
    name: "metadata",
    kind: "scalar",
    T: 9
  }, {
    no: 4,
    name: "participant_attributes",
    kind: "map",
    K: 9,
    V: {
      kind: "scalar",
      T: 9
    }
  }, {
    no: 5,
    name: "add_track_requests",
    kind: "message",
    T: en,
    repeated: !0
  }, {
    no: 6,
    name: "publisher_offer",
    kind: "message",
    T: Ot
  }, {
    no: 7,
    name: "reconnect",
    kind: "scalar",
    T: 8
  }, {
    no: 8,
    name: "reconnect_reason",
    kind: "enum",
    T: v.getEnumType(lt)
  }, {
    no: 9,
    name: "participant_sid",
    kind: "scalar",
    T: 9
  }, {
    no: 10,
    name: "sync_state",
    kind: "message",
    T: ra
  }]),
  Xh = v.makeMessageType("livekit.WrappedJoinRequest", () => [{
    no: 1,
    name: "compression",
    kind: "enum",
    T: v.getEnumType(ar)
  }, {
    no: 2,
    name: "join_request",
    kind: "scalar",
    T: 12
  }]),
  ar = v.makeEnum("livekit.WrappedJoinRequest.Compression", [{
    no: 0,
    name: "NONE"
  }, {
    no: 1,
    name: "GZIP"
  }]),
  Zh = v.makeMessageType("livekit.MediaSectionsRequirement", () => [{
    no: 1,
    name: "num_audios",
    kind: "scalar",
    T: 13
  }, {
    no: 2,
    name: "num_videos",
    kind: "scalar",
    T: 13
  }]);
function em(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var In = {
    exports: {}
  },
  tm = In.exports,
  Qa;
function im() {
  return Qa || (Qa = 1, function (n) {
    (function (e, t) {
      n.exports ? n.exports = t() : e.log = t();
    })(tm, function () {
      var e = function () {},
        t = "undefined",
        i = typeof window !== t && typeof window.navigator !== t && /Trident\/|MSIE /.test(window.navigator.userAgent),
        s = ["trace", "debug", "info", "warn", "error"],
        r = {},
        a = null;
      function o(f, y) {
        var k = f[y];
        if (typeof k.bind == "function") return k.bind(f);
        try {
          return Function.prototype.bind.call(k, f);
        } catch {
          return function () {
            return Function.prototype.apply.apply(k, [f, arguments]);
          };
        }
      }
      function c() {
        console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace();
      }
      function d(f) {
        return f === "debug" && (f = "log"), typeof console === t ? !1 : f === "trace" && i ? c : console[f] !== void 0 ? o(console, f) : console.log !== void 0 ? o(console, "log") : e;
      }
      function l() {
        for (var f = this.getLevel(), y = 0; y < s.length; y++) {
          var k = s[y];
          this[k] = y < f ? e : this.methodFactory(k, f, this.name);
        }
        if (this.log = this.debug, typeof console === t && f < this.levels.SILENT) return "No console available for logging";
      }
      function u(f) {
        return function () {
          typeof console !== t && (l.call(this), this[f].apply(this, arguments));
        };
      }
      function h(f, y, k) {
        return d(f) || u.apply(this, arguments);
      }
      function m(f, y) {
        var k = this,
          S,
          R,
          b,
          T = "loglevel";
        typeof f == "string" ? T += ":" + f : typeof f == "symbol" && (T = void 0);
        function C(L) {
          var q = (s[L] || "silent").toUpperCase();
          if (!(typeof window === t || !T)) {
            try {
              window.localStorage[T] = q;
              return;
            } catch {}
            try {
              window.document.cookie = encodeURIComponent(T) + "=" + q + ";";
            } catch {}
          }
        }
        function M() {
          var L;
          if (!(typeof window === t || !T)) {
            try {
              L = window.localStorage[T];
            } catch {}
            if (typeof L === t) try {
              var q = window.document.cookie,
                j = encodeURIComponent(T),
                pe = q.indexOf(j + "=");
              pe !== -1 && (L = /^([^;]+)/.exec(q.slice(pe + j.length + 1))[1]);
            } catch {}
            return k.levels[L] === void 0 && (L = void 0), L;
          }
        }
        function D() {
          if (!(typeof window === t || !T)) {
            try {
              window.localStorage.removeItem(T);
            } catch {}
            try {
              window.document.cookie = encodeURIComponent(T) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
            } catch {}
          }
        }
        function B(L) {
          var q = L;
          if (typeof q == "string" && k.levels[q.toUpperCase()] !== void 0 && (q = k.levels[q.toUpperCase()]), typeof q == "number" && q >= 0 && q <= k.levels.SILENT) return q;
          throw new TypeError("log.setLevel() called with invalid level: " + L);
        }
        k.name = f, k.levels = {
          TRACE: 0,
          DEBUG: 1,
          INFO: 2,
          WARN: 3,
          ERROR: 4,
          SILENT: 5
        }, k.methodFactory = y || h, k.getLevel = function () {
          return b ?? R ?? S;
        }, k.setLevel = function (L, q) {
          return b = B(L), q !== !1 && C(b), l.call(k);
        }, k.setDefaultLevel = function (L) {
          R = B(L), M() || k.setLevel(L, !1);
        }, k.resetLevel = function () {
          b = null, D(), l.call(k);
        }, k.enableAll = function (L) {
          k.setLevel(k.levels.TRACE, L);
        }, k.disableAll = function (L) {
          k.setLevel(k.levels.SILENT, L);
        }, k.rebuild = function () {
          if (a !== k && (S = B(a.getLevel())), l.call(k), a === k) for (var L in r) r[L].rebuild();
        }, S = B(a ? a.getLevel() : "WARN");
        var F = M();
        F != null && (b = B(F)), l.call(k);
      }
      a = new m(), a.getLogger = function (y) {
        if (typeof y != "symbol" && typeof y != "string" || y === "") throw new TypeError("You must supply a name when creating a logger.");
        var k = r[y];
        return k || (k = r[y] = new m(y, a.methodFactory)), k;
      };
      var g = typeof window !== t ? window.log : void 0;
      return a.noConflict = function () {
        return typeof window !== t && window.log === a && (window.log = g), a;
      }, a.getLoggers = function () {
        return r;
      }, a.default = a, a;
    });
  }(In)), In.exports;
}
var os = im(),
  or;
(function (n) {
  n[n.trace = 0] = "trace", n[n.debug = 1] = "debug", n[n.info = 2] = "info", n[n.warn = 3] = "warn", n[n.error = 4] = "error", n[n.silent = 5] = "silent";
})(or || (or = {}));
var re;
(function (n) {
  n.Default = "livekit", n.Room = "livekit-room", n.TokenSource = "livekit-token-source", n.Participant = "livekit-participant", n.Track = "livekit-track", n.Publication = "livekit-track-publication", n.Engine = "livekit-engine", n.Signal = "livekit-signal", n.PCManager = "livekit-pc-manager", n.PCTransport = "livekit-pc-transport", n.E2EE = "lk-e2ee", n.DataTracks = "livekit-data-tracks", n.Region = "livekit-region", n.ICE = "livekit-ice", n.Stats = "livekit-stats";
})(re || (re = {}));
let W = os.getLogger(re.Default);
Object.values(re).map(n => os.getLogger(n));
W.setDefaultLevel(or.info);
function ke(n, e) {
  const t = os.getLogger(n);
  return t.setDefaultLevel(W.getLevel()), e ? nm(t, e) : t;
}
function nm(n, e) {
  const t = s => (r, a) => {
      const o = e(),
        c = o || a ? Object.assign(Object.assign({}, o), a) : void 0;
      n[s](r, c);
    },
    i = Object.create(n);
  return i.trace = t("trace"), i.debug = t("debug"), i.info = t("info"), i.warn = t("warn"), i.error = t("error"), i;
}
const Ei = os.getLogger(re.E2EE),
  cr = new Set(),
  sm = Ei.setLevel.bind(Ei);
Ei.setLevel = (n, e) => {
  sm(n, e);
  const t = Ei.getLevel();
  cr.forEach(i => i(t));
};
function Ya(n) {
  return cr.add(n), () => {
    cr.delete(n);
  };
}
const Ni = 7e3,
  rm = 500,
  am = [0, 300, 4 * 300, 9 * 300, 16 * 300, Ni, Ni, Ni, Ni, Ni];
class om {
  constructor(e) {
    this._retryDelays = e !== void 0 ? [...e] : am;
  }
  nextRetryDelayInMs(e) {
    if (e.retryCount >= this._retryDelays.length) return null;
    const t = this._retryDelays[e.retryCount];
    return e.retryCount === 0 && t === 0 ? Math.random() * rm : Math.round(t * (.5 + Math.random()));
  }
}
function cm(n, e) {
  var t = {};
  for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && e.indexOf(i) < 0 && (t[i] = n[i]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var s = 0, i = Object.getOwnPropertySymbols(n); s < i.length; s++) e.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[s]) && (t[i[s]] = n[i[s]]);
  return t;
}
function p(n, e, t, i) {
  function s(r) {
    return r instanceof t ? r : new t(function (a) {
      a(r);
    });
  }
  return new (t || (t = Promise))(function (r, a) {
    function o(l) {
      try {
        d(i.next(l));
      } catch (u) {
        a(u);
      }
    }
    function c(l) {
      try {
        d(i.throw(l));
      } catch (u) {
        a(u);
      }
    }
    function d(l) {
      l.done ? r(l.value) : s(l.value).then(o, c);
    }
    d((i = i.apply(n, e || [])).next());
  });
}
function $a(n) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    t = e && n[e],
    i = 0;
  if (t) return t.call(n);
  if (n && typeof n.length == "number") return {
    next: function () {
      return n && i >= n.length && (n = void 0), {
        value: n && n[i++],
        done: !n
      };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function bt(n) {
  return this instanceof bt ? (this.v = n, this) : new bt(n);
}
function md(n, e, t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = t.apply(n, e || []),
    s,
    r = [];
  return s = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), o("next"), o("throw"), o("return", a), s[Symbol.asyncIterator] = function () {
    return this;
  }, s;
  function a(m) {
    return function (g) {
      return Promise.resolve(g).then(m, u);
    };
  }
  function o(m, g) {
    i[m] && (s[m] = function (f) {
      return new Promise(function (y, k) {
        r.push([m, f, y, k]) > 1 || c(m, f);
      });
    }, g && (s[m] = g(s[m])));
  }
  function c(m, g) {
    try {
      d(i[m](g));
    } catch (f) {
      h(r[0][3], f);
    }
  }
  function d(m) {
    m.value instanceof bt ? Promise.resolve(m.value.v).then(l, u) : h(r[0][2], m);
  }
  function l(m) {
    c("next", m);
  }
  function u(m) {
    c("throw", m);
  }
  function h(m, g) {
    m(g), r.shift(), r.length && c(r[0][0], r[0][1]);
  }
}
function dm(n) {
  var e, t;
  return e = {}, i("next"), i("throw", function (s) {
    throw s;
  }), i("return"), e[Symbol.iterator] = function () {
    return this;
  }, e;
  function i(s, r) {
    e[s] = n[s] ? function (a) {
      return (t = !t) ? {
        value: bt(n[s](a)),
        done: !1
      } : r ? r(a) : a;
    } : r;
  }
}
function Ve(n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = n[Symbol.asyncIterator],
    t;
  return e ? e.call(n) : (n = typeof $a == "function" ? $a(n) : n[Symbol.iterator](), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function () {
    return this;
  }, t);
  function i(r) {
    t[r] = n[r] && function (a) {
      return new Promise(function (o, c) {
        a = n[r](a), s(o, c, a.done, a.value);
      });
    };
  }
  function s(r, a, o, c) {
    Promise.resolve(c).then(function (d) {
      r({
        value: d,
        done: o
      });
    }, a);
  }
}
var pn = {
    exports: {}
  },
  Xa;
function lm() {
  if (Xa) return pn.exports;
  Xa = 1;
  var n = typeof Reflect == "object" ? Reflect : null,
    e = n && typeof n.apply == "function" ? n.apply : function (T, C, M) {
      return Function.prototype.apply.call(T, C, M);
    },
    t;
  n && typeof n.ownKeys == "function" ? t = n.ownKeys : Object.getOwnPropertySymbols ? t = function (T) {
    return Object.getOwnPropertyNames(T).concat(Object.getOwnPropertySymbols(T));
  } : t = function (T) {
    return Object.getOwnPropertyNames(T);
  };
  function i(b) {}
  var s = Number.isNaN || function (T) {
    return T !== T;
  };
  function r() {
    r.init.call(this);
  }
  pn.exports = r, pn.exports.once = k, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._eventsCount = 0, r.prototype._maxListeners = void 0;
  var a = 10;
  function o(b) {
    if (typeof b != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof b);
  }
  Object.defineProperty(r, "defaultMaxListeners", {
    enumerable: !0,
    get: function () {
      return a;
    },
    set: function (b) {
      if (typeof b != "number" || b < 0 || s(b)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + b + ".");
      a = b;
    }
  }), r.init = function () {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, r.prototype.setMaxListeners = function (T) {
    if (typeof T != "number" || T < 0 || s(T)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + T + ".");
    return this._maxListeners = T, this;
  };
  function c(b) {
    return b._maxListeners === void 0 ? r.defaultMaxListeners : b._maxListeners;
  }
  r.prototype.getMaxListeners = function () {
    return c(this);
  }, r.prototype.emit = function (T) {
    for (var C = [], M = 1; M < arguments.length; M++) C.push(arguments[M]);
    var D = T === "error",
      B = this._events;
    if (B !== void 0) D = D && B.error === void 0;else if (!D) return !1;
    if (D) {
      var F;
      if (C.length > 0 && (F = C[0]), F instanceof Error) throw F;
      var L = new Error("Unhandled error." + (F ? " (" + F.message + ")" : ""));
      throw L.context = F, L;
    }
    var q = B[T];
    if (q === void 0) return !1;
    if (typeof q == "function") e(q, this, C);else for (var j = q.length, pe = g(q, j), M = 0; M < j; ++M) e(pe[M], this, C);
    return !0;
  };
  function d(b, T, C, M) {
    var D, B, F;
    if (o(C), B = b._events, B === void 0 ? (B = b._events = Object.create(null), b._eventsCount = 0) : (B.newListener !== void 0 && (b.emit("newListener", T, C.listener ? C.listener : C), B = b._events), F = B[T]), F === void 0) F = B[T] = C, ++b._eventsCount;else if (typeof F == "function" ? F = B[T] = M ? [C, F] : [F, C] : M ? F.unshift(C) : F.push(C), D = c(b), D > 0 && F.length > D && !F.warned) {
      F.warned = !0;
      var L = new Error("Possible EventEmitter memory leak detected. " + F.length + " " + String(T) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      L.name = "MaxListenersExceededWarning", L.emitter = b, L.type = T, L.count = F.length;
    }
    return b;
  }
  r.prototype.addListener = function (T, C) {
    return d(this, T, C, !1);
  }, r.prototype.on = r.prototype.addListener, r.prototype.prependListener = function (T, C) {
    return d(this, T, C, !0);
  };
  function l() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  function u(b, T, C) {
    var M = {
        fired: !1,
        wrapFn: void 0,
        target: b,
        type: T,
        listener: C
      },
      D = l.bind(M);
    return D.listener = C, M.wrapFn = D, D;
  }
  r.prototype.once = function (T, C) {
    return o(C), this.on(T, u(this, T, C)), this;
  }, r.prototype.prependOnceListener = function (T, C) {
    return o(C), this.prependListener(T, u(this, T, C)), this;
  }, r.prototype.removeListener = function (T, C) {
    var M, D, B, F, L;
    if (o(C), D = this._events, D === void 0) return this;
    if (M = D[T], M === void 0) return this;
    if (M === C || M.listener === C) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete D[T], D.removeListener && this.emit("removeListener", T, M.listener || C));else if (typeof M != "function") {
      for (B = -1, F = M.length - 1; F >= 0; F--) if (M[F] === C || M[F].listener === C) {
        L = M[F].listener, B = F;
        break;
      }
      if (B < 0) return this;
      B === 0 ? M.shift() : f(M, B), M.length === 1 && (D[T] = M[0]), D.removeListener !== void 0 && this.emit("removeListener", T, L || C);
    }
    return this;
  }, r.prototype.off = r.prototype.removeListener, r.prototype.removeAllListeners = function (T) {
    var C, M, D;
    if (M = this._events, M === void 0) return this;
    if (M.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : M[T] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete M[T]), this;
    if (arguments.length === 0) {
      var B = Object.keys(M),
        F;
      for (D = 0; D < B.length; ++D) F = B[D], F !== "removeListener" && this.removeAllListeners(F);
      return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
    }
    if (C = M[T], typeof C == "function") this.removeListener(T, C);else if (C !== void 0) for (D = C.length - 1; D >= 0; D--) this.removeListener(T, C[D]);
    return this;
  };
  function h(b, T, C) {
    var M = b._events;
    if (M === void 0) return [];
    var D = M[T];
    return D === void 0 ? [] : typeof D == "function" ? C ? [D.listener || D] : [D] : C ? y(D) : g(D, D.length);
  }
  r.prototype.listeners = function (T) {
    return h(this, T, !0);
  }, r.prototype.rawListeners = function (T) {
    return h(this, T, !1);
  }, r.listenerCount = function (b, T) {
    return typeof b.listenerCount == "function" ? b.listenerCount(T) : m.call(b, T);
  }, r.prototype.listenerCount = m;
  function m(b) {
    var T = this._events;
    if (T !== void 0) {
      var C = T[b];
      if (typeof C == "function") return 1;
      if (C !== void 0) return C.length;
    }
    return 0;
  }
  r.prototype.eventNames = function () {
    return this._eventsCount > 0 ? t(this._events) : [];
  };
  function g(b, T) {
    for (var C = new Array(T), M = 0; M < T; ++M) C[M] = b[M];
    return C;
  }
  function f(b, T) {
    for (; T + 1 < b.length; T++) b[T] = b[T + 1];
    b.pop();
  }
  function y(b) {
    for (var T = new Array(b.length), C = 0; C < T.length; ++C) T[C] = b[C].listener || b[C];
    return T;
  }
  function k(b, T) {
    return new Promise(function (C, M) {
      function D(F) {
        b.removeListener(T, B), M(F);
      }
      function B() {
        typeof b.removeListener == "function" && b.removeListener("error", D), C([].slice.call(arguments));
      }
      R(b, T, B, {
        once: !0
      }), T !== "error" && S(b, D, {
        once: !0
      });
    });
  }
  function S(b, T, C) {
    typeof b.on == "function" && R(b, "error", T, C);
  }
  function R(b, T, C, M) {
    if (typeof b.on == "function") M.once ? b.once(T, C) : b.on(T, C);else if (typeof b.addEventListener == "function") b.addEventListener(T, function D(B) {
      M.once && b.removeEventListener(T, D), C(B);
    });else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof b);
  }
  return pn.exports;
}
var Ue = lm();
let pd = !0,
  fd = !0;
function qi(n, e, t) {
  const i = n.match(e);
  return i && i.length >= t && parseFloat(i[t], 10);
}
function Xt(n, e, t) {
  if (!n.RTCPeerConnection) return;
  if (!Object.getOwnPropertyDescriptor(EventTarget.prototype, "addEventListener").writable) {
    aa("Unable to polyfill events");
    return;
  }
  const s = n.RTCPeerConnection.prototype,
    r = s.addEventListener;
  s.addEventListener = function (o, c) {
    if (o !== e) return r.apply(this, arguments);
    const d = l => {
      const u = t(l);
      u && (c.handleEvent ? c.handleEvent(u) : c(u));
    };
    return this._eventMap = this._eventMap || {}, this._eventMap[e] || (this._eventMap[e] = new Map()), this._eventMap[e].set(c, d), r.apply(this, [o, d]);
  };
  const a = s.removeEventListener;
  s.removeEventListener = function (o, c) {
    if (o !== e || !this._eventMap || !this._eventMap[e]) return a.apply(this, arguments);
    if (!this._eventMap[e].has(c)) return a.apply(this, arguments);
    const d = this._eventMap[e].get(c);
    return this._eventMap[e].delete(c), this._eventMap[e].size === 0 && delete this._eventMap[e], Object.keys(this._eventMap).length === 0 && delete this._eventMap, a.apply(this, [o, d]);
  }, Object.defineProperty(s, "on" + e, {
    get() {
      return this["_on" + e];
    },
    set(o) {
      this["_on" + e] && (this.removeEventListener(e, this["_on" + e]), delete this["_on" + e]), o && this.addEventListener(e, this["_on" + e] = o);
    },
    enumerable: !0,
    configurable: !0
  });
}
function um(n) {
  return typeof n != "boolean" ? new Error("Argument type: " + typeof n + ". Please use a boolean.") : (pd = n, n ? "adapter.js logging disabled" : "adapter.js logging enabled");
}
function hm(n) {
  return typeof n != "boolean" ? new Error("Argument type: " + typeof n + ". Please use a boolean.") : (fd = !n, "adapter.js deprecation warnings " + (n ? "disabled" : "enabled"));
}
function aa() {
  if (typeof window == "object") {
    if (pd) return;
    typeof console < "u" && typeof console.log == "function" && console.log.apply(console, arguments);
  }
}
function oa(n, e) {
  fd && n + "" + e;
}
function mm(n) {
  const e = {
    browser: null,
    version: null
  };
  if (typeof n > "u" || !n.navigator || !n.navigator.userAgent) return e.browser = "Not a browser.", e;
  const t = n.navigator;
  if (t.userAgentData && t.userAgentData.brands) {
    const i = t.userAgentData.brands.find(s => s.brand === "Chromium");
    if (i) {
      const s = parseInt(i.version, 10);
      if (s >= 90) return {
        browser: "chrome",
        version: s
      };
    }
  }
  if (t.mozGetUserMedia) e.browser = "firefox", e.version = parseInt(qi(t.userAgent, /Firefox\/(\d+)\./, 1));else if (t.webkitGetUserMedia || n.isSecureContext === !1 && n.webkitRTCPeerConnection) e.browser = "chrome", e.version = parseInt(qi(t.userAgent, /Chrom(e|ium)\/(\d+)\./, 2)) || null;else if (n.RTCPeerConnection && t.userAgent.match(/AppleWebKit\/(\d+)\./)) e.browser = "safari", e.version = parseInt(qi(t.userAgent, /AppleWebKit\/(\d+)\./, 1)), e.supportsUnifiedPlan = n.RTCRtpTransceiver && "currentDirection" in n.RTCRtpTransceiver.prototype, e._safariVersion = qi(t.userAgent, /Version\/(\d+(\.?\d+))/, 1);else return e.browser = "Not a supported browser.", e;
  return e;
}
function Za(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function gd(n) {
  return Za(n) ? Object.keys(n).reduce(function (e, t) {
    const i = Za(n[t]),
      s = i ? gd(n[t]) : n[t],
      r = i && !Object.keys(s).length;
    return s === void 0 || r ? e : Object.assign(e, {
      [t]: s
    });
  }, {}) : n;
}
function dr(n, e, t) {
  !e || t.has(e.id) || (t.set(e.id, e), Object.keys(e).forEach(i => {
    i.endsWith("Id") ? dr(n, n.get(e[i]), t) : i.endsWith("Ids") && e[i].forEach(s => {
      dr(n, n.get(s), t);
    });
  }));
}
function eo(n, e, t) {
  const i = t ? "outbound-rtp" : "inbound-rtp",
    s = new Map();
  if (e === null) return s;
  const r = [];
  return n.forEach(a => {
    a.type === "track" && a.trackIdentifier === e.id && r.push(a);
  }), r.forEach(a => {
    n.forEach(o => {
      o.type === i && o.trackId === a.id && dr(n, o, s);
    });
  }), s;
}
const to = aa;
function vd(n, e) {
  if (e.version >= 64) return;
  const t = n && n.navigator;
  if (!t.mediaDevices) return;
  const i = function (o) {
      if (typeof o != "object" || o.mandatory || o.optional) return o;
      const c = {};
      return Object.keys(o).forEach(d => {
        if (d === "require" || d === "advanced" || d === "mediaSource") return;
        const l = typeof o[d] == "object" ? o[d] : {
          ideal: o[d]
        };
        l.exact !== void 0 && typeof l.exact == "number" && (l.min = l.max = l.exact);
        const u = function (h, m) {
          return h ? h + m.charAt(0).toUpperCase() + m.slice(1) : m === "deviceId" ? "sourceId" : m;
        };
        if (l.ideal !== void 0) {
          c.optional = c.optional || [];
          let h = {};
          typeof l.ideal == "number" ? (h[u("min", d)] = l.ideal, c.optional.push(h), h = {}, h[u("max", d)] = l.ideal, c.optional.push(h)) : (h[u("", d)] = l.ideal, c.optional.push(h));
        }
        l.exact !== void 0 && typeof l.exact != "number" ? (c.mandatory = c.mandatory || {}, c.mandatory[u("", d)] = l.exact) : ["min", "max"].forEach(h => {
          l[h] !== void 0 && (c.mandatory = c.mandatory || {}, c.mandatory[u(h, d)] = l[h]);
        });
      }), o.advanced && (c.optional = (c.optional || []).concat(o.advanced)), c;
    },
    s = function (o, c) {
      if (e.version >= 61) return c(o);
      if (o = JSON.parse(JSON.stringify(o)), o && typeof o.audio == "object") {
        const d = function (l, u, h) {
          u in l && !(h in l) && (l[h] = l[u], delete l[u]);
        };
        o = JSON.parse(JSON.stringify(o)), d(o.audio, "autoGainControl", "googAutoGainControl"), d(o.audio, "noiseSuppression", "googNoiseSuppression"), o.audio = i(o.audio);
      }
      if (o && typeof o.video == "object") {
        let d = o.video.facingMode;
        d = d && (typeof d == "object" ? d : {
          ideal: d
        });
        const l = e.version < 66;
        if (d && (d.exact === "user" || d.exact === "environment" || d.ideal === "user" || d.ideal === "environment") && !(t.mediaDevices.getSupportedConstraints && t.mediaDevices.getSupportedConstraints().facingMode && !l)) {
          delete o.video.facingMode;
          let u;
          if (d.exact === "environment" || d.ideal === "environment" ? u = ["back", "rear"] : (d.exact === "user" || d.ideal === "user") && (u = ["front"]), u) return t.mediaDevices.enumerateDevices().then(h => {
            h = h.filter(g => g.kind === "videoinput");
            let m = h.find(g => u.some(f => g.label.toLowerCase().includes(f)));
            return !m && h.length && u.includes("back") && (m = h[h.length - 1]), m && (o.video.deviceId = d.exact ? {
              exact: m.deviceId
            } : {
              ideal: m.deviceId
            }), o.video = i(o.video), to("chrome: " + JSON.stringify(o)), c(o);
          });
        }
        o.video = i(o.video);
      }
      return to("chrome: " + JSON.stringify(o)), c(o);
    },
    r = function (o) {
      return e.version >= 64 ? o : {
        name: {
          PermissionDeniedError: "NotAllowedError",
          PermissionDismissedError: "NotAllowedError",
          InvalidStateError: "NotAllowedError",
          DevicesNotFoundError: "NotFoundError",
          ConstraintNotSatisfiedError: "OverconstrainedError",
          TrackStartError: "NotReadableError",
          MediaDeviceFailedDueToShutdown: "NotAllowedError",
          MediaDeviceKillSwitchOn: "NotAllowedError",
          TabCaptureError: "AbortError",
          ScreenCaptureError: "AbortError",
          DeviceCaptureError: "AbortError"
        }[o.name] || o.name,
        message: o.message,
        constraint: o.constraint || o.constraintName,
        toString() {
          return this.name + (this.message && ": ") + this.message;
        }
      };
    },
    a = function (o, c, d) {
      s(o, l => {
        t.webkitGetUserMedia(l, c, u => {
          d && d(r(u));
        });
      });
    };
  if (t.getUserMedia = a.bind(t), t.mediaDevices.getUserMedia) {
    const o = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
    t.mediaDevices.getUserMedia = function (c) {
      return s(c, d => o(d).then(l => {
        if (d.audio && !l.getAudioTracks().length || d.video && !l.getVideoTracks().length) throw l.getTracks().forEach(u => {
          u.stop();
        }), new DOMException("", "NotFoundError");
        return l;
      }, l => Promise.reject(r(l))));
    };
  }
}
function bd(n) {
  n.MediaStream = n.MediaStream || n.webkitMediaStream;
}
function yd(n, e) {
  if (!(e.version > 102)) if (typeof n == "object" && n.RTCPeerConnection && !("ontrack" in n.RTCPeerConnection.prototype)) {
    Object.defineProperty(n.RTCPeerConnection.prototype, "ontrack", {
      get() {
        return this._ontrack;
      },
      set(i) {
        this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = i);
      },
      enumerable: !0,
      configurable: !0
    });
    const t = n.RTCPeerConnection.prototype.setRemoteDescription;
    n.RTCPeerConnection.prototype.setRemoteDescription = function () {
      return this._ontrackpoly || (this._ontrackpoly = s => {
        s.stream.addEventListener("addtrack", r => {
          let a;
          n.RTCPeerConnection.prototype.getReceivers ? a = this.getReceivers().find(c => c.track && c.track.id === r.track.id) : a = {
            track: r.track
          };
          const o = new Event("track");
          o.track = r.track, o.receiver = a, o.transceiver = {
            receiver: a
          }, o.streams = [s.stream], this.dispatchEvent(o);
        }), s.stream.getTracks().forEach(r => {
          let a;
          n.RTCPeerConnection.prototype.getReceivers ? a = this.getReceivers().find(c => c.track && c.track.id === r.id) : a = {
            track: r
          };
          const o = new Event("track");
          o.track = r, o.receiver = a, o.transceiver = {
            receiver: a
          }, o.streams = [s.stream], this.dispatchEvent(o);
        });
      }, this.addEventListener("addstream", this._ontrackpoly)), t.apply(this, arguments);
    };
  } else Xt(n, "track", t => (t.transceiver || Object.defineProperty(t, "transceiver", {
    value: {
      receiver: t.receiver
    }
  }), t));
}
function kd(n) {
  if (typeof n == "object" && n.RTCPeerConnection && !("getSenders" in n.RTCPeerConnection.prototype) && "createDTMFSender" in n.RTCPeerConnection.prototype) {
    const e = function (s, r) {
      return {
        track: r,
        get dtmf() {
          return this._dtmf === void 0 && (r.kind === "audio" ? this._dtmf = s.createDTMFSender(r) : this._dtmf = null), this._dtmf;
        },
        _pc: s
      };
    };
    if (!n.RTCPeerConnection.prototype.getSenders) {
      n.RTCPeerConnection.prototype.getSenders = function () {
        return this._senders = this._senders || [], this._senders.slice();
      };
      const s = n.RTCPeerConnection.prototype.addTrack;
      n.RTCPeerConnection.prototype.addTrack = function (o, c) {
        let d = s.apply(this, arguments);
        return d || (d = e(this, o), this._senders.push(d)), d;
      };
      const r = n.RTCPeerConnection.prototype.removeTrack;
      n.RTCPeerConnection.prototype.removeTrack = function (o) {
        r.apply(this, arguments);
        const c = this._senders.indexOf(o);
        c !== -1 && this._senders.splice(c, 1);
      };
    }
    const t = n.RTCPeerConnection.prototype.addStream;
    n.RTCPeerConnection.prototype.addStream = function (r) {
      this._senders = this._senders || [], t.apply(this, [r]), r.getTracks().forEach(a => {
        this._senders.push(e(this, a));
      });
    };
    const i = n.RTCPeerConnection.prototype.removeStream;
    n.RTCPeerConnection.prototype.removeStream = function (r) {
      this._senders = this._senders || [], i.apply(this, [r]), r.getTracks().forEach(a => {
        const o = this._senders.find(c => c.track === a);
        o && this._senders.splice(this._senders.indexOf(o), 1);
      });
    };
  } else if (typeof n == "object" && n.RTCPeerConnection && "getSenders" in n.RTCPeerConnection.prototype && "createDTMFSender" in n.RTCPeerConnection.prototype && n.RTCRtpSender && !("dtmf" in n.RTCRtpSender.prototype)) {
    const e = n.RTCPeerConnection.prototype.getSenders;
    n.RTCPeerConnection.prototype.getSenders = function () {
      const i = e.apply(this, []);
      return i.forEach(s => s._pc = this), i;
    }, Object.defineProperty(n.RTCRtpSender.prototype, "dtmf", {
      get() {
        return this._dtmf === void 0 && (this.track.kind === "audio" ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf;
      }
    });
  }
}
function Td(n, e) {
  if (e.version >= 67 || !(typeof n == "object" && n.RTCPeerConnection && n.RTCRtpSender && n.RTCRtpReceiver)) return;
  if (!("getStats" in n.RTCRtpSender.prototype)) {
    const i = n.RTCPeerConnection.prototype.getSenders;
    i && (n.RTCPeerConnection.prototype.getSenders = function () {
      const a = i.apply(this, []);
      return a.forEach(o => o._pc = this), a;
    });
    const s = n.RTCPeerConnection.prototype.addTrack;
    s && (n.RTCPeerConnection.prototype.addTrack = function () {
      const a = s.apply(this, arguments);
      return a._pc = this, a;
    }), n.RTCRtpSender.prototype.getStats = function () {
      const a = this;
      return this._pc.getStats().then(o => eo(o, a.track, !0));
    };
  }
  if (!("getStats" in n.RTCRtpReceiver.prototype)) {
    const i = n.RTCPeerConnection.prototype.getReceivers;
    i && (n.RTCPeerConnection.prototype.getReceivers = function () {
      const r = i.apply(this, []);
      return r.forEach(a => a._pc = this), r;
    }), Xt(n, "track", s => (s.receiver._pc = s.srcElement, s)), n.RTCRtpReceiver.prototype.getStats = function () {
      const r = this;
      return this._pc.getStats().then(a => eo(a, r.track, !1));
    };
  }
  if (!("getStats" in n.RTCRtpSender.prototype && "getStats" in n.RTCRtpReceiver.prototype)) return;
  const t = n.RTCPeerConnection.prototype.getStats;
  n.RTCPeerConnection.prototype.getStats = function () {
    if (arguments.length > 0 && arguments[0] instanceof n.MediaStreamTrack) {
      const s = arguments[0];
      let r, a, o;
      return this.getSenders().forEach(c => {
        c.track === s && (r ? o = !0 : r = c);
      }), this.getReceivers().forEach(c => (c.track === s && (a ? o = !0 : a = c), c.track === s)), o || r && a ? Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")) : r ? r.getStats() : a ? a.getStats() : Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"));
    }
    return t.apply(this, arguments);
  };
}
function Sd(n) {
  n.RTCPeerConnection.prototype.getLocalStreams = function () {
    return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map(a => this._shimmedLocalStreams[a][0]);
  };
  const e = n.RTCPeerConnection.prototype.addTrack;
  n.RTCPeerConnection.prototype.addTrack = function (a, o) {
    if (!o) return e.apply(this, arguments);
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    const c = e.apply(this, arguments);
    return this._shimmedLocalStreams[o.id] ? this._shimmedLocalStreams[o.id].indexOf(c) === -1 && this._shimmedLocalStreams[o.id].push(c) : this._shimmedLocalStreams[o.id] = [o, c], c;
  };
  const t = n.RTCPeerConnection.prototype.addStream;
  n.RTCPeerConnection.prototype.addStream = function (a) {
    this._shimmedLocalStreams = this._shimmedLocalStreams || {}, a.getTracks().forEach(d => {
      if (this.getSenders().find(u => u.track === d)) throw new DOMException("Track already exists.", "InvalidAccessError");
    });
    const o = this.getSenders();
    t.apply(this, arguments);
    const c = this.getSenders().filter(d => o.indexOf(d) === -1);
    this._shimmedLocalStreams[a.id] = [a].concat(c);
  };
  const i = n.RTCPeerConnection.prototype.removeStream;
  n.RTCPeerConnection.prototype.removeStream = function (a) {
    return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[a.id], i.apply(this, arguments);
  };
  const s = n.RTCPeerConnection.prototype.removeTrack;
  n.RTCPeerConnection.prototype.removeTrack = function (a) {
    return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, a && Object.keys(this._shimmedLocalStreams).forEach(o => {
      const c = this._shimmedLocalStreams[o].indexOf(a);
      c !== -1 && this._shimmedLocalStreams[o].splice(c, 1), this._shimmedLocalStreams[o].length === 1 && delete this._shimmedLocalStreams[o];
    }), s.apply(this, arguments);
  };
}
function Cd(n, e) {
  if (!n.RTCPeerConnection) return;
  if (n.RTCPeerConnection.prototype.addTrack && e.version >= 65) return Sd(n);
  const t = n.RTCPeerConnection.prototype.getLocalStreams;
  n.RTCPeerConnection.prototype.getLocalStreams = function () {
    const l = t.apply(this);
    return this._reverseStreams = this._reverseStreams || {}, l.map(u => this._reverseStreams[u.id]);
  };
  const i = n.RTCPeerConnection.prototype.addStream;
  n.RTCPeerConnection.prototype.addStream = function (l) {
    if (this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, l.getTracks().forEach(u => {
      if (this.getSenders().find(m => m.track === u)) throw new DOMException("Track already exists.", "InvalidAccessError");
    }), !this._reverseStreams[l.id]) {
      const u = new n.MediaStream(l.getTracks());
      this._streams[l.id] = u, this._reverseStreams[u.id] = l, l = u;
    }
    i.apply(this, [l]);
  };
  const s = n.RTCPeerConnection.prototype.removeStream;
  n.RTCPeerConnection.prototype.removeStream = function (l) {
    this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, s.apply(this, [this._streams[l.id] || l]), delete this._reverseStreams[this._streams[l.id] ? this._streams[l.id].id : l.id], delete this._streams[l.id];
  }, n.RTCPeerConnection.prototype.addTrack = function (l, u) {
    if (this.signalingState === "closed") throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
    const h = [].slice.call(arguments, 1);
    if (h.length !== 1 || !h[0].getTracks().find(f => f === l)) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
    if (this.getSenders().find(f => f.track === l)) throw new DOMException("Track already exists.", "InvalidAccessError");
    this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {};
    const g = this._streams[u.id];
    if (g) g.addTrack(l), Promise.resolve().then(() => {
      this.dispatchEvent(new Event("negotiationneeded"));
    });else {
      const f = new n.MediaStream([l]);
      this._streams[u.id] = f, this._reverseStreams[f.id] = u, this.addStream(f);
    }
    return this.getSenders().find(f => f.track === l);
  };
  function r(d, l) {
    let u = l.sdp;
    return Object.keys(d._reverseStreams || []).forEach(h => {
      const m = d._reverseStreams[h],
        g = d._streams[m.id];
      u = u.replace(new RegExp(g.id, "g"), m.id);
    }), new RTCSessionDescription({
      type: l.type,
      sdp: u
    });
  }
  function a(d, l) {
    let u = l.sdp;
    return Object.keys(d._reverseStreams || []).forEach(h => {
      const m = d._reverseStreams[h],
        g = d._streams[m.id];
      u = u.replace(new RegExp(m.id, "g"), g.id);
    }), new RTCSessionDescription({
      type: l.type,
      sdp: u
    });
  }
  ["createOffer", "createAnswer"].forEach(function (d) {
    const l = n.RTCPeerConnection.prototype[d],
      u = {
        [d]() {
          const h = arguments;
          return arguments.length && typeof arguments[0] == "function" ? l.apply(this, [g => {
            const f = r(this, g);
            h[0].apply(null, [f]);
          }, g => {
            h[1] && h[1].apply(null, g);
          }, arguments[2]]) : l.apply(this, arguments).then(g => r(this, g));
        }
      };
    n.RTCPeerConnection.prototype[d] = u[d];
  });
  const o = n.RTCPeerConnection.prototype.setLocalDescription;
  n.RTCPeerConnection.prototype.setLocalDescription = function () {
    return !arguments.length || !arguments[0].type ? o.apply(this, arguments) : (arguments[0] = a(this, arguments[0]), o.apply(this, arguments));
  };
  const c = Object.getOwnPropertyDescriptor(n.RTCPeerConnection.prototype, "localDescription");
  Object.defineProperty(n.RTCPeerConnection.prototype, "localDescription", {
    get() {
      const d = c.get.apply(this);
      return d.type === "" ? d : r(this, d);
    }
  }), n.RTCPeerConnection.prototype.removeTrack = function (l) {
    if (this.signalingState === "closed") throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
    if (!l._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
    if (!(l._pc === this)) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
    this._streams = this._streams || {};
    let h;
    Object.keys(this._streams).forEach(m => {
      this._streams[m].getTracks().find(f => l.track === f) && (h = this._streams[m]);
    }), h && (h.getTracks().length === 1 ? this.removeStream(this._reverseStreams[h.id]) : h.removeTrack(l.track), this.dispatchEvent(new Event("negotiationneeded")));
  };
}
function lr(n, e) {
  !n.RTCPeerConnection && n.webkitRTCPeerConnection && (n.RTCPeerConnection = n.webkitRTCPeerConnection), n.RTCPeerConnection && e.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function (t) {
    const i = n.RTCPeerConnection.prototype[t],
      s = {
        [t]() {
          return arguments[0] = new (t === "addIceCandidate" ? n.RTCIceCandidate : n.RTCSessionDescription)(arguments[0]), i.apply(this, arguments);
        }
      };
    n.RTCPeerConnection.prototype[t] = s[t];
  });
}
function wd(n, e) {
  e.version > 102 || Xt(n, "negotiationneeded", t => {
    const i = t.target;
    if (!((e.version < 72 || i.getConfiguration && i.getConfiguration().sdpSemantics === "plan-b") && i.signalingState !== "stable")) return t;
  });
}
var io = Object.freeze({
  __proto__: null,
  fixNegotiationNeeded: wd,
  shimAddTrackRemoveTrack: Cd,
  shimAddTrackRemoveTrackWithNative: Sd,
  shimGetSendersWithDtmf: kd,
  shimGetUserMedia: vd,
  shimMediaStream: bd,
  shimOnTrack: yd,
  shimPeerConnection: lr,
  shimSenderReceiverGetStats: Td
});
function Ed(n, e) {
  const t = n && n.navigator;
  if (!t.mediaDevices) return;
  const i = n && n.MediaStreamTrack;
  if (t.getUserMedia = function (s, r, a) {
    oa("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), t.mediaDevices.getUserMedia(s).then(r, a);
  }, !(e.version > 55 && "autoGainControl" in t.mediaDevices.getSupportedConstraints())) {
    const s = function (a, o, c) {
        o in a && !(c in a) && (a[c] = a[o], delete a[o]);
      },
      r = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
    if (t.mediaDevices.getUserMedia = function (a) {
      return typeof a == "object" && typeof a.audio == "object" && (a = JSON.parse(JSON.stringify(a)), s(a.audio, "autoGainControl", "mozAutoGainControl"), s(a.audio, "noiseSuppression", "mozNoiseSuppression")), r(a);
    }, i && i.prototype.getSettings) {
      const a = i.prototype.getSettings;
      i.prototype.getSettings = function () {
        const o = a.apply(this, arguments);
        return s(o, "mozAutoGainControl", "autoGainControl"), s(o, "mozNoiseSuppression", "noiseSuppression"), o;
      };
    }
    if (i && i.prototype.applyConstraints) {
      const a = i.prototype.applyConstraints;
      i.prototype.applyConstraints = function (o) {
        return this.kind === "audio" && typeof o == "object" && (o = JSON.parse(JSON.stringify(o)), s(o, "autoGainControl", "mozAutoGainControl"), s(o, "noiseSuppression", "mozNoiseSuppression")), a.apply(this, [o]);
      };
    }
  }
}
function pm(n, e) {
  n.navigator.mediaDevices && (n.navigator.mediaDevices && "getDisplayMedia" in n.navigator.mediaDevices || (n.navigator.mediaDevices.getDisplayMedia = function (i) {
    if (!(i && i.video)) {
      const s = new DOMException("getDisplayMedia without video constraints is undefined");
      return s.name = "NotFoundError", s.code = 8, Promise.reject(s);
    }
    return i.video === !0 ? i.video = {
      mediaSource: e
    } : i.video.mediaSource = e, n.navigator.mediaDevices.getUserMedia(i);
  }));
}
function _d(n) {
  typeof n == "object" && n.RTCTrackEvent && "receiver" in n.RTCTrackEvent.prototype && !("transceiver" in n.RTCTrackEvent.prototype) && Object.defineProperty(n.RTCTrackEvent.prototype, "transceiver", {
    get() {
      return {
        receiver: this.receiver
      };
    }
  });
}
function ur(n, e) {
  typeof n != "object" || !(n.RTCPeerConnection || n.mozRTCPeerConnection) || (!n.RTCPeerConnection && n.mozRTCPeerConnection && (n.RTCPeerConnection = n.mozRTCPeerConnection), e.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function (t) {
    const i = n.RTCPeerConnection.prototype[t],
      s = {
        [t]() {
          return arguments[0] = new (t === "addIceCandidate" ? n.RTCIceCandidate : n.RTCSessionDescription)(arguments[0]), i.apply(this, arguments);
        }
      };
    n.RTCPeerConnection.prototype[t] = s[t];
  }));
}
function Pd(n, e) {
  if (typeof n != "object" || !(n.RTCPeerConnection || n.mozRTCPeerConnection) || e.version >= 151) return;
  const t = {
      inboundrtp: "inbound-rtp",
      outboundrtp: "outbound-rtp",
      candidatepair: "candidate-pair",
      localcandidate: "local-candidate",
      remotecandidate: "remote-candidate"
    },
    i = n.RTCPeerConnection.prototype.getStats;
  n.RTCPeerConnection.prototype.getStats = function () {
    const r = Array.prototype.slice.call(arguments),
      a = r[0],
      o = r[1],
      c = r[2];
    return this.signalingState === "closed" ? Promise.resolve(new Map()) : i.apply(this, [a || null]).then(d => {
      if (e.version < 53 && !o) try {
        d.forEach(l => {
          l.type = t[l.type] || l.type;
        });
      } catch (l) {
        if (l.name !== "TypeError") throw l;
        d.forEach((u, h) => {
          d.set(h, Object.assign({}, u, {
            type: t[u.type] || u.type
          }));
        });
      }
      return d;
    }).then(o, c);
  };
}
function Rd(n) {
  if (!(typeof n == "object" && n.RTCPeerConnection && n.RTCRtpSender) || n.RTCRtpSender && "getStats" in n.RTCRtpSender.prototype) return;
  const e = n.RTCPeerConnection.prototype.getSenders;
  e && (n.RTCPeerConnection.prototype.getSenders = function () {
    const s = e.apply(this, []);
    return s.forEach(r => r._pc = this), s;
  });
  const t = n.RTCPeerConnection.prototype.addTrack;
  t && (n.RTCPeerConnection.prototype.addTrack = function () {
    const s = t.apply(this, arguments);
    return s._pc = this, s;
  }), n.RTCRtpSender.prototype.getStats = function () {
    return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map());
  };
}
function Id(n) {
  if (!(typeof n == "object" && n.RTCPeerConnection && n.RTCRtpSender) || n.RTCRtpSender && "getStats" in n.RTCRtpReceiver.prototype) return;
  const e = n.RTCPeerConnection.prototype.getReceivers;
  e && (n.RTCPeerConnection.prototype.getReceivers = function () {
    const i = e.apply(this, []);
    return i.forEach(s => s._pc = this), i;
  }), Xt(n, "track", t => (t.receiver._pc = t.srcElement, t)), n.RTCRtpReceiver.prototype.getStats = function () {
    return this._pc.getStats(this.track);
  };
}
function Md(n) {
  !n.RTCPeerConnection || "removeStream" in n.RTCPeerConnection.prototype || (n.RTCPeerConnection.prototype.removeStream = function (t) {
    oa("removeStream", "removeTrack"), this.getSenders().forEach(i => {
      i.track && t.getTracks().includes(i.track) && this.removeTrack(i);
    });
  });
}
function Ad(n) {
  n.DataChannel && !n.RTCDataChannel && (n.RTCDataChannel = n.DataChannel);
}
function Od(n, e) {
  if (!(typeof n == "object" && n.RTCPeerConnection) || e.version >= 110) return;
  const t = n.RTCPeerConnection.prototype.addTransceiver;
  t && (n.RTCPeerConnection.prototype.addTransceiver = function () {
    this.setParametersPromises = [];
    let s = arguments[1] && arguments[1].sendEncodings;
    s === void 0 && (s = []), s = [...s];
    const r = s.length > 0;
    r && s.forEach(o => {
      if ("rid" in o && !/^[a-z0-9]{0,16}$/i.test(o.rid)) throw new TypeError("Invalid RID value provided.");
      if ("scaleResolutionDownBy" in o && !(parseFloat(o.scaleResolutionDownBy) >= 1)) throw new RangeError("scale_resolution_down_by must be >= 1.0");
      if ("maxFramerate" in o && !(parseFloat(o.maxFramerate) >= 0)) throw new RangeError("max_framerate must be >= 0.0");
    });
    const a = t.apply(this, arguments);
    if (r) {
      const o = a.sender,
        c = o.getParameters();
      (!("encodings" in c) || c.encodings.length === 1 && Object.keys(c.encodings[0]).length === 0) && (c.encodings = s, o.sendEncodings = s, this.setParametersPromises.push(o.setParameters(c).then(() => {
        delete o.sendEncodings;
      }).catch(() => {
        delete o.sendEncodings;
      })));
    }
    return a;
  });
}
function Dd(n, e) {
  if (!(typeof n == "object" && n.RTCRtpSender) || e.version >= 110) return;
  const t = n.RTCRtpSender.prototype.getParameters;
  t && (n.RTCRtpSender.prototype.getParameters = function () {
    const s = t.apply(this, arguments);
    return "encodings" in s || (s.encodings = [].concat(this.sendEncodings || [{}])), s;
  });
}
function Ld(n, e) {
  if (!(typeof n == "object" && n.RTCPeerConnection) || e.version >= 110) return;
  const t = n.RTCPeerConnection.prototype.createOffer;
  n.RTCPeerConnection.prototype.createOffer = function () {
    return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => t.apply(this, arguments)).finally(() => {
      this.setParametersPromises = [];
    }) : t.apply(this, arguments);
  };
}
function Nd(n, e) {
  if (!(typeof n == "object" && n.RTCPeerConnection) || e.version >= 110) return;
  const t = n.RTCPeerConnection.prototype.createAnswer;
  n.RTCPeerConnection.prototype.createAnswer = function () {
    return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => t.apply(this, arguments)).finally(() => {
      this.setParametersPromises = [];
    }) : t.apply(this, arguments);
  };
}
var no = Object.freeze({
  __proto__: null,
  shimAddTransceiver: Od,
  shimCreateAnswer: Nd,
  shimCreateOffer: Ld,
  shimGetDisplayMedia: pm,
  shimGetParameters: Dd,
  shimGetStats: Pd,
  shimGetUserMedia: Ed,
  shimOnTrack: _d,
  shimPeerConnection: ur,
  shimRTCDataChannel: Ad,
  shimReceiverGetStats: Id,
  shimRemoveStream: Md,
  shimSenderGetStats: Rd
});
function xd(n) {
  if (!(typeof n != "object" || !n.RTCPeerConnection)) {
    if ("getLocalStreams" in n.RTCPeerConnection.prototype || (n.RTCPeerConnection.prototype.getLocalStreams = function () {
      return this._localStreams || (this._localStreams = []), this._localStreams;
    }), !("addStream" in n.RTCPeerConnection.prototype)) {
      const e = n.RTCPeerConnection.prototype.addTrack;
      n.RTCPeerConnection.prototype.addStream = function (i) {
        this._localStreams || (this._localStreams = []), this._localStreams.includes(i) || this._localStreams.push(i), i.getAudioTracks().forEach(s => e.call(this, s, i)), i.getVideoTracks().forEach(s => e.call(this, s, i));
      }, n.RTCPeerConnection.prototype.addTrack = function (i) {
        for (var s = arguments.length, r = new Array(s > 1 ? s - 1 : 0), a = 1; a < s; a++) r[a - 1] = arguments[a];
        return r && r.forEach(o => {
          this._localStreams ? this._localStreams.includes(o) || this._localStreams.push(o) : this._localStreams = [o];
        }), e.apply(this, arguments);
      };
    }
    "removeStream" in n.RTCPeerConnection.prototype || (n.RTCPeerConnection.prototype.removeStream = function (t) {
      this._localStreams || (this._localStreams = []);
      const i = this._localStreams.indexOf(t);
      if (i === -1) return;
      this._localStreams.splice(i, 1);
      const s = t.getTracks();
      this.getSenders().forEach(r => {
        s.includes(r.track) && this.removeTrack(r);
      });
    });
  }
}
function Ud(n) {
  if (!(typeof n != "object" || !n.RTCPeerConnection) && ("getRemoteStreams" in n.RTCPeerConnection.prototype || (n.RTCPeerConnection.prototype.getRemoteStreams = function () {
    return this._remoteStreams ? this._remoteStreams : [];
  }), !("onaddstream" in n.RTCPeerConnection.prototype))) {
    Object.defineProperty(n.RTCPeerConnection.prototype, "onaddstream", {
      get() {
        return this._onaddstream;
      },
      set(t) {
        this._onaddstream && (this.removeEventListener("addstream", this._onaddstream), this.removeEventListener("track", this._onaddstreampoly)), this.addEventListener("addstream", this._onaddstream = t), this.addEventListener("track", this._onaddstreampoly = i => {
          i.streams.forEach(s => {
            if (this._remoteStreams || (this._remoteStreams = []), this._remoteStreams.includes(s)) return;
            this._remoteStreams.push(s);
            const r = new Event("addstream");
            r.stream = s, this.dispatchEvent(r);
          });
        });
      }
    });
    const e = n.RTCPeerConnection.prototype.setRemoteDescription;
    n.RTCPeerConnection.prototype.setRemoteDescription = function () {
      const i = this;
      return this._onaddstreampoly || this.addEventListener("track", this._onaddstreampoly = function (s) {
        s.streams.forEach(r => {
          if (i._remoteStreams || (i._remoteStreams = []), i._remoteStreams.indexOf(r) >= 0) return;
          i._remoteStreams.push(r);
          const a = new Event("addstream");
          a.stream = r, i.dispatchEvent(a);
        });
      }), e.apply(i, arguments);
    };
  }
}
function Fd(n) {
  if (typeof n != "object" || !n.RTCPeerConnection) return;
  const e = n.RTCPeerConnection.prototype,
    t = e.createOffer,
    i = e.createAnswer,
    s = e.setLocalDescription,
    r = e.setRemoteDescription,
    a = e.addIceCandidate;
  e.createOffer = function (d, l) {
    const u = arguments.length >= 2 ? arguments[2] : arguments[0],
      h = t.apply(this, [u]);
    return l ? (h.then(d, l), Promise.resolve()) : h;
  }, e.createAnswer = function (d, l) {
    const u = arguments.length >= 2 ? arguments[2] : arguments[0],
      h = i.apply(this, [u]);
    return l ? (h.then(d, l), Promise.resolve()) : h;
  };
  let o = function (c, d, l) {
    const u = s.apply(this, [c]);
    return l ? (u.then(d, l), Promise.resolve()) : u;
  };
  e.setLocalDescription = o, o = function (c, d, l) {
    const u = r.apply(this, [c]);
    return l ? (u.then(d, l), Promise.resolve()) : u;
  }, e.setRemoteDescription = o, o = function (c, d, l) {
    const u = a.apply(this, [c]);
    return l ? (u.then(d, l), Promise.resolve()) : u;
  }, e.addIceCandidate = o;
}
function Bd(n) {
  const e = n && n.navigator;
  if (e.mediaDevices && e.mediaDevices.getUserMedia) {
    const t = e.mediaDevices,
      i = t.getUserMedia.bind(t);
    e.mediaDevices.getUserMedia = s => i(qd(s));
  }
  !e.getUserMedia && e.mediaDevices && e.mediaDevices.getUserMedia && (e.getUserMedia = function (i, s, r) {
    e.mediaDevices.getUserMedia(i).then(s, r);
  }.bind(e));
}
function qd(n) {
  return n && n.video !== void 0 ? Object.assign({}, n, {
    video: gd(n.video)
  }) : n;
}
function jd(n) {
  if (!n.RTCPeerConnection) return;
  const e = n.RTCPeerConnection;
  n.RTCPeerConnection = function (i, s) {
    if (i && i.iceServers) {
      const r = [];
      for (let a = 0; a < i.iceServers.length; a++) {
        let o = i.iceServers[a];
        o.urls === void 0 && o.url ? (oa("RTCIceServer.url", "RTCIceServer.urls"), o = JSON.parse(JSON.stringify(o)), o.urls = o.url, delete o.url, r.push(o)) : r.push(i.iceServers[a]);
      }
      i.iceServers = r;
    }
    return new e(i, s);
  }, n.RTCPeerConnection.prototype = e.prototype, "generateCertificate" in e && Object.defineProperty(n.RTCPeerConnection, "generateCertificate", {
    get() {
      return e.generateCertificate;
    }
  });
}
function Vd(n) {
  typeof n == "object" && n.RTCTrackEvent && "receiver" in n.RTCTrackEvent.prototype && !("transceiver" in n.RTCTrackEvent.prototype) && Object.defineProperty(n.RTCTrackEvent.prototype, "transceiver", {
    get() {
      return {
        receiver: this.receiver
      };
    }
  });
}
function Wd(n) {
  const e = n.RTCPeerConnection.prototype.createOffer;
  n.RTCPeerConnection.prototype.createOffer = function (i) {
    if (i) {
      typeof i.offerToReceiveAudio < "u" && (i.offerToReceiveAudio = !!i.offerToReceiveAudio);
      const s = this.getTransceivers().find(a => a.receiver.track.kind === "audio");
      i.offerToReceiveAudio === !1 && s ? s.direction === "sendrecv" ? s.setDirection ? s.setDirection("sendonly") : s.direction = "sendonly" : s.direction === "recvonly" && (s.setDirection ? s.setDirection("inactive") : s.direction = "inactive") : i.offerToReceiveAudio === !0 && !s && this.addTransceiver("audio", {
        direction: "recvonly"
      }), typeof i.offerToReceiveVideo < "u" && (i.offerToReceiveVideo = !!i.offerToReceiveVideo);
      const r = this.getTransceivers().find(a => a.receiver.track.kind === "video");
      i.offerToReceiveVideo === !1 && r ? r.direction === "sendrecv" ? r.setDirection ? r.setDirection("sendonly") : r.direction = "sendonly" : r.direction === "recvonly" && (r.setDirection ? r.setDirection("inactive") : r.direction = "inactive") : i.offerToReceiveVideo === !0 && !r && this.addTransceiver("video", {
        direction: "recvonly"
      });
    }
    return e.apply(this, arguments);
  };
}
function Hd(n) {
  typeof n != "object" || n.AudioContext || (n.AudioContext = n.webkitAudioContext);
}
var so = Object.freeze({
    __proto__: null,
    shimAudioContext: Hd,
    shimCallbacksAPI: Fd,
    shimConstraints: qd,
    shimCreateOfferLegacy: Wd,
    shimGetUserMedia: Bd,
    shimLocalStreamsAPI: xd,
    shimRTCIceServerUrls: jd,
    shimRemoteStreamsAPI: Ud,
    shimTrackEventTransceiver: Vd
  }),
  ws = {
    exports: {}
  },
  ro;
function fm() {
  return ro || (ro = 1, function (n) {
    const e = {};
    e.generateIdentifier = function () {
      return Math.random().toString(36).substring(2, 12);
    }, e.localCName = e.generateIdentifier(), e.splitLines = function (t) {
      return t.trim().split(`
`).map(i => i.trim());
    }, e.splitSections = function (t) {
      return t.split(`
m=`).map((s, r) => (r > 0 ? "m=" + s : s).trim() + `\r
`);
    }, e.getDescription = function (t) {
      const i = e.splitSections(t);
      return i && i[0];
    }, e.getMediaSections = function (t) {
      const i = e.splitSections(t);
      return i.shift(), i;
    }, e.matchPrefix = function (t, i) {
      return e.splitLines(t).filter(s => s.indexOf(i) === 0);
    }, e.parseCandidate = function (t) {
      let i;
      t.indexOf("a=candidate:") === 0 ? i = t.substring(12).split(" ") : i = t.substring(10).split(" ");
      const s = {
        foundation: i[0],
        component: {
          1: "rtp",
          2: "rtcp"
        }[i[1]] || i[1],
        protocol: i[2].toLowerCase(),
        priority: parseInt(i[3], 10),
        ip: i[4],
        address: i[4],
        port: parseInt(i[5], 10),
        type: i[7]
      };
      for (let r = 8; r < i.length; r += 2) switch (i[r]) {
        case "raddr":
          s.relatedAddress = i[r + 1];
          break;
        case "rport":
          s.relatedPort = parseInt(i[r + 1], 10);
          break;
        case "tcptype":
          s.tcpType = i[r + 1];
          break;
        case "ufrag":
          s.ufrag = i[r + 1], s.usernameFragment = i[r + 1];
          break;
        default:
          s[i[r]] === void 0 && (s[i[r]] = i[r + 1]);
          break;
      }
      return s;
    }, e.writeCandidate = function (t) {
      const i = [];
      i.push(t.foundation);
      const s = t.component;
      s === "rtp" ? i.push(1) : s === "rtcp" ? i.push(2) : i.push(s), i.push(t.protocol.toUpperCase()), i.push(t.priority), i.push(t.address || t.ip), i.push(t.port);
      const r = t.type;
      return i.push("typ"), i.push(r), r !== "host" && t.relatedAddress && t.relatedPort !== void 0 && (i.push("raddr"), i.push(t.relatedAddress), i.push("rport"), i.push(t.relatedPort)), t.tcpType && t.protocol.toLowerCase() === "tcp" && (i.push("tcptype"), i.push(t.tcpType)), (t.usernameFragment || t.ufrag) && (i.push("ufrag"), i.push(t.usernameFragment || t.ufrag)), "candidate:" + i.join(" ");
    }, e.parseIceOptions = function (t) {
      return t.substring(14).split(" ");
    }, e.parseRtpMap = function (t) {
      let i = t.substring(9).split(" ");
      const s = {
        payloadType: parseInt(i.shift(), 10)
      };
      return i = i[0].split("/"), s.name = i[0], s.clockRate = parseInt(i[1], 10), s.channels = i.length === 3 ? parseInt(i[2], 10) : 1, s.numChannels = s.channels, s;
    }, e.writeRtpMap = function (t) {
      let i = t.payloadType;
      t.preferredPayloadType !== void 0 && (i = t.preferredPayloadType);
      const s = t.channels || t.numChannels || 1;
      return "a=rtpmap:" + i + " " + t.name + "/" + t.clockRate + (s !== 1 ? "/" + s : "") + `\r
`;
    }, e.parseExtmap = function (t) {
      const i = t.substring(9).split(" ");
      return {
        id: parseInt(i[0], 10),
        direction: i[0].indexOf("/") > 0 ? i[0].split("/")[1] : "sendrecv",
        uri: i[1],
        attributes: i.slice(2).join(" ")
      };
    }, e.writeExtmap = function (t) {
      return "a=extmap:" + (t.id || t.preferredId) + (t.direction && t.direction !== "sendrecv" ? "/" + t.direction : "") + " " + t.uri + (t.attributes ? " " + t.attributes : "") + `\r
`;
    }, e.parseFmtp = function (t) {
      const i = {};
      let s;
      const r = t.substring(t.indexOf(" ") + 1).split(";");
      for (let a = 0; a < r.length; a++) s = r[a].trim().split("="), i[s[0].trim()] = s[1];
      return i;
    }, e.writeFmtp = function (t) {
      let i = "",
        s = t.payloadType;
      if (t.preferredPayloadType !== void 0 && (s = t.preferredPayloadType), t.parameters && Object.keys(t.parameters).length) {
        const r = [];
        Object.keys(t.parameters).forEach(a => {
          t.parameters[a] !== void 0 ? r.push(a + "=" + t.parameters[a]) : r.push(a);
        }), i += "a=fmtp:" + s + " " + r.join(";") + `\r
`;
      }
      return i;
    }, e.parseRtcpFb = function (t) {
      const i = t.substring(t.indexOf(" ") + 1).split(" ");
      return {
        type: i.shift(),
        parameter: i.join(" ")
      };
    }, e.writeRtcpFb = function (t) {
      let i = "",
        s = t.payloadType;
      return t.preferredPayloadType !== void 0 && (s = t.preferredPayloadType), t.rtcpFeedback && t.rtcpFeedback.length && t.rtcpFeedback.forEach(r => {
        i += "a=rtcp-fb:" + s + " " + r.type + (r.parameter && r.parameter.length ? " " + r.parameter : "") + `\r
`;
      }), i;
    }, e.parseSsrcMedia = function (t) {
      const i = t.indexOf(" "),
        s = {
          ssrc: parseInt(t.substring(7, i), 10)
        },
        r = t.indexOf(":", i);
      return r > -1 ? (s.attribute = t.substring(i + 1, r), s.value = t.substring(r + 1)) : s.attribute = t.substring(i + 1), s;
    }, e.parseSsrcGroup = function (t) {
      const i = t.substring(13).split(" ");
      return {
        semantics: i.shift(),
        ssrcs: i.map(s => parseInt(s, 10))
      };
    }, e.getMid = function (t) {
      const i = e.matchPrefix(t, "a=mid:")[0];
      if (i) return i.substring(6);
    }, e.parseFingerprint = function (t) {
      const i = t.substring(14).split(" ");
      return {
        algorithm: i[0].toLowerCase(),
        value: i[1].toUpperCase()
      };
    }, e.getDtlsParameters = function (t, i) {
      return {
        role: "auto",
        fingerprints: e.matchPrefix(t + i, "a=fingerprint:").map(e.parseFingerprint)
      };
    }, e.writeDtlsParameters = function (t, i) {
      let s = "a=setup:" + i + `\r
`;
      return t.fingerprints.forEach(r => {
        s += "a=fingerprint:" + r.algorithm + " " + r.value + `\r
`;
      }), s;
    }, e.parseCryptoLine = function (t) {
      const i = t.substring(9).split(" ");
      return {
        tag: parseInt(i[0], 10),
        cryptoSuite: i[1],
        keyParams: i[2],
        sessionParams: i.slice(3)
      };
    }, e.writeCryptoLine = function (t) {
      return "a=crypto:" + t.tag + " " + t.cryptoSuite + " " + (typeof t.keyParams == "object" ? e.writeCryptoKeyParams(t.keyParams) : t.keyParams) + (t.sessionParams ? " " + t.sessionParams.join(" ") : "") + `\r
`;
    }, e.parseCryptoKeyParams = function (t) {
      if (t.indexOf("inline:") !== 0) return null;
      const i = t.substring(7).split("|");
      return {
        keyMethod: "inline",
        keySalt: i[0],
        lifeTime: i[1],
        mkiValue: i[2] ? i[2].split(":")[0] : void 0,
        mkiLength: i[2] ? i[2].split(":")[1] : void 0
      };
    }, e.writeCryptoKeyParams = function (t) {
      return t.keyMethod + ":" + t.keySalt + (t.lifeTime ? "|" + t.lifeTime : "") + (t.mkiValue && t.mkiLength ? "|" + t.mkiValue + ":" + t.mkiLength : "");
    }, e.getCryptoParameters = function (t, i) {
      return e.matchPrefix(t + i, "a=crypto:").map(e.parseCryptoLine);
    }, e.getIceParameters = function (t, i) {
      const s = e.matchPrefix(t + i, "a=ice-ufrag:")[0],
        r = e.matchPrefix(t + i, "a=ice-pwd:")[0];
      return s && r ? {
        usernameFragment: s.substring(12),
        password: r.substring(10)
      } : null;
    }, e.writeIceParameters = function (t) {
      let i = "a=ice-ufrag:" + t.usernameFragment + `\r
a=ice-pwd:` + t.password + `\r
`;
      return t.iceLite && (i += `a=ice-lite\r
`), i;
    }, e.parseRtpParameters = function (t) {
      const i = {
          codecs: [],
          headerExtensions: [],
          fecMechanisms: [],
          rtcp: []
        },
        r = e.splitLines(t)[0].split(" ");
      i.profile = r[2];
      for (let o = 3; o < r.length; o++) {
        const c = r[o],
          d = e.matchPrefix(t, "a=rtpmap:" + c + " ")[0];
        if (d) {
          const l = e.parseRtpMap(d),
            u = e.matchPrefix(t, "a=fmtp:" + c + " ");
          switch (l.parameters = u.length ? e.parseFmtp(u[0]) : {}, l.rtcpFeedback = e.matchPrefix(t, "a=rtcp-fb:" + c + " ").map(e.parseRtcpFb), i.codecs.push(l), l.name.toUpperCase()) {
            case "RED":
            case "ULPFEC":
              i.fecMechanisms.push(l.name.toUpperCase());
              break;
          }
        }
      }
      e.matchPrefix(t, "a=extmap:").forEach(o => {
        i.headerExtensions.push(e.parseExtmap(o));
      });
      const a = e.matchPrefix(t, "a=rtcp-fb:* ").map(e.parseRtcpFb);
      return i.codecs.forEach(o => {
        a.forEach(c => {
          o.rtcpFeedback.find(l => l.type === c.type && l.parameter === c.parameter) || o.rtcpFeedback.push(c);
        });
      }), i;
    }, e.writeRtpDescription = function (t, i) {
      let s = "";
      s += "m=" + t + " ", s += i.codecs.length > 0 ? "9" : "0", s += " " + (i.profile || "UDP/TLS/RTP/SAVPF") + " ", s += i.codecs.map(a => a.preferredPayloadType !== void 0 ? a.preferredPayloadType : a.payloadType).join(" ") + `\r
`, s += `c=IN IP4 0.0.0.0\r
`, s += `a=rtcp:9 IN IP4 0.0.0.0\r
`, i.codecs.forEach(a => {
        s += e.writeRtpMap(a), s += e.writeFmtp(a), s += e.writeRtcpFb(a);
      });
      let r = 0;
      return i.codecs.forEach(a => {
        a.maxptime > r && (r = a.maxptime);
      }), r > 0 && (s += "a=maxptime:" + r + `\r
`), i.headerExtensions && i.headerExtensions.forEach(a => {
        s += e.writeExtmap(a);
      }), s;
    }, e.parseRtpEncodingParameters = function (t) {
      const i = [],
        s = e.parseRtpParameters(t),
        r = s.fecMechanisms.indexOf("RED") !== -1,
        a = s.fecMechanisms.indexOf("ULPFEC") !== -1,
        o = e.matchPrefix(t, "a=ssrc:").map(h => e.parseSsrcMedia(h)).filter(h => h.attribute === "cname"),
        c = o.length > 0 && o[0].ssrc;
      let d;
      const l = e.matchPrefix(t, "a=ssrc-group:FID").map(h => h.substring(17).split(" ").map(g => parseInt(g, 10)));
      l.length > 0 && l[0].length > 1 && l[0][0] === c && (d = l[0][1]), s.codecs.forEach(h => {
        if (h.name.toUpperCase() === "RTX" && h.parameters.apt) {
          let m = {
            ssrc: c,
            codecPayloadType: parseInt(h.parameters.apt, 10)
          };
          c && d && (m.rtx = {
            ssrc: d
          }), i.push(m), r && (m = JSON.parse(JSON.stringify(m)), m.fec = {
            ssrc: c,
            mechanism: a ? "red+ulpfec" : "red"
          }, i.push(m));
        }
      }), i.length === 0 && c && i.push({
        ssrc: c
      });
      let u = e.matchPrefix(t, "b=");
      return u.length && (u[0].indexOf("b=TIAS:") === 0 ? u = parseInt(u[0].substring(7), 10) : u[0].indexOf("b=AS:") === 0 ? u = parseInt(u[0].substring(5), 10) * 1e3 * .95 - 2e3 * 8 : u = void 0, i.forEach(h => {
        h.maxBitrate = u;
      })), i;
    }, e.parseRtcpParameters = function (t) {
      const i = {},
        s = e.matchPrefix(t, "a=ssrc:").map(o => e.parseSsrcMedia(o)).filter(o => o.attribute === "cname")[0];
      s && (i.cname = s.value, i.ssrc = s.ssrc);
      const r = e.matchPrefix(t, "a=rtcp-rsize");
      i.reducedSize = r.length > 0, i.compound = r.length === 0;
      const a = e.matchPrefix(t, "a=rtcp-mux");
      return i.mux = a.length > 0, i;
    }, e.writeRtcpParameters = function (t) {
      let i = "";
      return t.reducedSize && (i += `a=rtcp-rsize\r
`), t.mux && (i += `a=rtcp-mux\r
`), t.ssrc !== void 0 && t.cname && (i += "a=ssrc:" + t.ssrc + " cname:" + t.cname + `\r
`), i;
    }, e.parseMsid = function (t) {
      let i;
      const s = e.matchPrefix(t, "a=msid:");
      if (s.length === 1) return i = s[0].substring(7).split(" "), {
        stream: i[0],
        track: i[1]
      };
      const r = e.matchPrefix(t, "a=ssrc:").map(a => e.parseSsrcMedia(a)).filter(a => a.attribute === "msid");
      if (r.length > 0) return i = r[0].value.split(" "), {
        stream: i[0],
        track: i[1]
      };
    }, e.parseSctpDescription = function (t) {
      const i = e.parseMLine(t),
        s = e.matchPrefix(t, "a=max-message-size:");
      let r;
      s.length > 0 && (r = parseInt(s[0].substring(19), 10)), isNaN(r) && (r = 65536);
      const a = e.matchPrefix(t, "a=sctp-port:");
      if (a.length > 0) return {
        port: parseInt(a[0].substring(12), 10),
        protocol: i.fmt,
        maxMessageSize: r
      };
      const o = e.matchPrefix(t, "a=sctpmap:");
      if (o.length > 0) {
        const c = o[0].substring(10).split(" ");
        return {
          port: parseInt(c[0], 10),
          protocol: c[1],
          maxMessageSize: r
        };
      }
    }, e.writeSctpDescription = function (t, i) {
      let s = [];
      return t.protocol !== "DTLS/SCTP" ? s = ["m=" + t.kind + " 9 " + t.protocol + " " + i.protocol + `\r
`, `c=IN IP4 0.0.0.0\r
`, "a=sctp-port:" + i.port + `\r
`] : s = ["m=" + t.kind + " 9 " + t.protocol + " " + i.port + `\r
`, `c=IN IP4 0.0.0.0\r
`, "a=sctpmap:" + i.port + " " + i.protocol + ` 65535\r
`], i.maxMessageSize !== void 0 && s.push("a=max-message-size:" + i.maxMessageSize + `\r
`), s.join("");
    }, e.generateSessionId = function () {
      return Math.random().toString().substr(2, 22);
    }, e.writeSessionBoilerplate = function (t, i, s) {
      let r;
      const a = i !== void 0 ? i : 2;
      return t ? r = t : r = e.generateSessionId(), `v=0\r
o=` + (s || "thisisadapterortc") + " " + r + " " + a + ` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`;
    }, e.getDirection = function (t, i) {
      const s = e.splitLines(t);
      for (let r = 0; r < s.length; r++) switch (s[r]) {
        case "a=sendrecv":
        case "a=sendonly":
        case "a=recvonly":
        case "a=inactive":
          return s[r].substring(2);
      }
      return i ? e.getDirection(i) : "sendrecv";
    }, e.getKind = function (t) {
      return e.splitLines(t)[0].split(" ")[0].substring(2);
    }, e.isRejected = function (t) {
      return t.split(" ", 2)[1] === "0";
    }, e.parseMLine = function (t) {
      const s = e.splitLines(t)[0].substring(2).split(" ");
      return {
        kind: s[0],
        port: parseInt(s[1], 10),
        protocol: s[2],
        fmt: s.slice(3).join(" ")
      };
    }, e.parseOLine = function (t) {
      const s = e.matchPrefix(t, "o=")[0].substring(2).split(" ");
      return {
        username: s[0],
        sessionId: s[1],
        sessionVersion: parseInt(s[2], 10),
        netType: s[3],
        addressType: s[4],
        address: s[5]
      };
    }, e.isValidSDP = function (t) {
      if (typeof t != "string" || t.length === 0) return !1;
      const i = e.splitLines(t);
      for (let s = 0; s < i.length; s++) if (i[s].length < 2 || i[s].charAt(1) !== "=") return !1;
      return !0;
    }, n.exports = e;
  }(ws)), ws.exports;
}
var Kd = fm(),
  hi = em(Kd),
  gm = iu({
    __proto__: null,
    default: hi
  }, [Kd]);
function Mn(n) {
  if (!n.RTCIceCandidate || n.RTCIceCandidate && "foundation" in n.RTCIceCandidate.prototype) return;
  const e = n.RTCIceCandidate;
  n.RTCIceCandidate = function (i) {
    if (typeof i == "object" && i.candidate && i.candidate.indexOf("a=") === 0 && (i = JSON.parse(JSON.stringify(i)), i.candidate = i.candidate.substring(2)), i.candidate && i.candidate.length) {
      const s = new e(i),
        r = hi.parseCandidate(i.candidate);
      for (const a in r) a in s || Object.defineProperty(s, a, {
        value: r[a]
      });
      return s.toJSON = function () {
        return {
          candidate: s.candidate,
          sdpMid: s.sdpMid,
          sdpMLineIndex: s.sdpMLineIndex,
          usernameFragment: s.usernameFragment
        };
      }, s;
    }
    return new e(i);
  }, n.RTCIceCandidate.prototype = e.prototype, Xt(n, "icecandidate", t => (t.candidate && Object.defineProperty(t, "candidate", {
    value: new n.RTCIceCandidate(t.candidate),
    writable: "false"
  }), t));
}
function hr(n) {
  !n.RTCIceCandidate || n.RTCIceCandidate && "relayProtocol" in n.RTCIceCandidate.prototype || Xt(n, "icecandidate", e => {
    if (e.candidate) {
      const t = hi.parseCandidate(e.candidate.candidate);
      t.type === "relay" && (e.candidate.relayProtocol = {
        0: "tls",
        1: "tcp",
        2: "udp"
      }[t.priority >> 24]);
    }
    return e;
  });
}
function An(n, e) {
  if (!n.RTCPeerConnection || e.browser === "chrome" && e.version > 102 || e.browser === "firefox" && e.version >= 113) return;
  "sctp" in n.RTCPeerConnection.prototype || Object.defineProperty(n.RTCPeerConnection.prototype, "sctp", {
    get() {
      return typeof this._sctp > "u" ? null : this._sctp;
    }
  });
  const t = function (o) {
      if (!o || !o.sdp) return !1;
      const c = hi.splitSections(o.sdp);
      return c.shift(), c.some(d => {
        const l = hi.parseMLine(d);
        return l && l.kind === "application" && l.protocol.indexOf("SCTP") !== -1;
      });
    },
    i = function (o) {
      const c = o.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
      if (c === null || c.length < 2) return -1;
      const d = parseInt(c[1], 10);
      return d !== d ? -1 : d;
    },
    s = function (o) {
      let c = 65536;
      return e.browser === "firefox" && (e.version < 57 ? o === -1 ? c = 16384 : c = 2147483637 : e.version < 60 ? c = e.version === 57 ? 65535 : 65536 : c = 2147483637), c;
    },
    r = function (o, c) {
      let d = 65536;
      e.browser === "firefox" && e.version === 57 && (d = 65535);
      const l = hi.matchPrefix(o.sdp, "a=max-message-size:");
      return l.length > 0 ? d = parseInt(l[0].substring(19), 10) : e.browser === "firefox" && c !== -1 && (d = 2147483637), d;
    },
    a = n.RTCPeerConnection.prototype.setRemoteDescription;
  n.RTCPeerConnection.prototype.setRemoteDescription = function () {
    if (this._sctp = null, e.browser === "chrome" && e.version >= 76 && this.getConfiguration().sdpSemantics === "plan-b" && Object.defineProperty(this, "sctp", {
      get() {
        return typeof this._sctp > "u" ? null : this._sctp;
      },
      enumerable: !0,
      configurable: !0
    }), t(arguments[0])) {
      const c = i(arguments[0]),
        d = s(c),
        l = r(arguments[0], c);
      let u;
      d === 0 && l === 0 ? u = Number.POSITIVE_INFINITY : d === 0 || l === 0 ? u = Math.max(d, l) : u = Math.min(d, l);
      const h = {};
      Object.defineProperty(h, "maxMessageSize", {
        get() {
          return u;
        }
      }), this._sctp = h;
    }
    return a.apply(this, arguments);
  };
}
function On(n, e) {
  if (!(n.RTCPeerConnection && "createDataChannel" in n.RTCPeerConnection.prototype) || e.browser === "chrome" && e.version >= 149 || e.browser === "firefox" && e.version > 60) return;
  function t(s, r) {
    const a = s.send;
    s.send = function () {
      const c = arguments[0],
        d = c.length || c.size || c.byteLength;
      if (s.readyState === "open" && r.sctp && d > r.sctp.maxMessageSize) throw new TypeError("Message too large (can send a maximum of " + r.sctp.maxMessageSize + " bytes)");
      return a.apply(s, arguments);
    };
  }
  const i = n.RTCPeerConnection.prototype.createDataChannel;
  n.RTCPeerConnection.prototype.createDataChannel = function () {
    const r = i.apply(this, arguments);
    return t(r, this), r;
  }, Xt(n, "datachannel", s => (t(s.channel, s.target), s));
}
function mr(n) {
  if (!n.RTCPeerConnection || "connectionState" in n.RTCPeerConnection.prototype) return;
  const e = n.RTCPeerConnection.prototype;
  Object.defineProperty(e, "connectionState", {
    get() {
      return {
        completed: "connected",
        checking: "connecting"
      }[this.iceConnectionState] || this.iceConnectionState;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "onconnectionstatechange", {
    get() {
      return this._onconnectionstatechange || null;
    },
    set(t) {
      this._onconnectionstatechange && (this.removeEventListener("connectionstatechange", this._onconnectionstatechange), delete this._onconnectionstatechange), t && this.addEventListener("connectionstatechange", this._onconnectionstatechange = t);
    },
    enumerable: !0,
    configurable: !0
  }), ["setLocalDescription", "setRemoteDescription"].forEach(t => {
    const i = e[t];
    e[t] = function () {
      return this._connectionstatechangepoly || (this._connectionstatechangepoly = s => {
        const r = s.target;
        if (r._lastConnectionState !== r.connectionState) {
          r._lastConnectionState = r.connectionState;
          const a = new Event("connectionstatechange", s);
          r.dispatchEvent(a);
        }
        return s;
      }, this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly)), i.apply(this, arguments);
    };
  });
}
function pr(n, e) {
  if (!n.RTCPeerConnection || e.browser === "chrome" && e.version >= 71 || e.browser === "safari" && e._safariVersion >= 13.1) return;
  const t = n.RTCPeerConnection.prototype.setRemoteDescription;
  n.RTCPeerConnection.prototype.setRemoteDescription = function (s) {
    if (s && s.sdp && s.sdp.indexOf(`
a=extmap-allow-mixed`) !== -1) {
      const r = s.sdp.split(`
`).filter(a => a.trim() !== "a=extmap-allow-mixed").join(`
`);
      n.RTCSessionDescription && s instanceof n.RTCSessionDescription ? arguments[0] = new n.RTCSessionDescription({
        type: s.type,
        sdp: r
      }) : s.sdp = r;
    }
    return t.apply(this, arguments);
  };
}
function Dn(n, e) {
  if (!(n.RTCPeerConnection && n.RTCPeerConnection.prototype)) return;
  const t = n.RTCPeerConnection.prototype.addIceCandidate;
  !t || t.length === 0 || (n.RTCPeerConnection.prototype.addIceCandidate = function () {
    return arguments[0] ? (e.browser === "chrome" && e.version < 78 || e.browser === "firefox" && e.version < 68 || e.browser === "safari") && arguments[0] && arguments[0].candidate === "" ? Promise.resolve() : t.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve());
  });
}
function Ln(n, e) {
  if (!(n.RTCPeerConnection && n.RTCPeerConnection.prototype)) return;
  const t = n.RTCPeerConnection.prototype.setLocalDescription;
  !t || t.length === 0 || (n.RTCPeerConnection.prototype.setLocalDescription = function () {
    let s = arguments[0] || {};
    if (typeof s != "object" || s.type && s.sdp) return t.apply(this, arguments);
    if (s = {
      type: s.type,
      sdp: s.sdp
    }, !s.type) switch (this.signalingState) {
      case "stable":
      case "have-local-offer":
      case "have-remote-pranswer":
        s.type = "offer";
        break;
      default:
        s.type = "answer";
        break;
    }
    return s.sdp || s.type !== "offer" && s.type !== "answer" ? t.apply(this, [s]) : (s.type === "offer" ? this.createOffer : this.createAnswer).apply(this).then(a => t.apply(this, [a]));
  });
}
var vm = Object.freeze({
  __proto__: null,
  removeExtmapAllowMixed: pr,
  shimAddIceCandidateNullOrEmpty: Dn,
  shimConnectionState: mr,
  shimMaxMessageSize: An,
  shimParameterlessSetLocalDescription: Ln,
  shimRTCIceCandidate: Mn,
  shimRTCIceCandidateRelayProtocol: hr,
  shimSendThrowTypeError: On
});
function bm() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    e = n.window,
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      shimChrome: !0,
      shimFirefox: !0,
      shimSafari: !0
    };
  const i = aa,
    s = mm(e),
    r = {
      browserDetails: s,
      commonShim: vm,
      extractVersion: qi,
      disableLog: um,
      disableWarnings: hm,
      sdp: gm
    };
  switch (s.browser) {
    case "chrome":
      if (!io || !lr || !t.shimChrome) return i("Chrome shim is not included in this adapter release."), r;
      if (s.version === null) return i("Chrome shim can not determine version, not shimming."), r;
      i("adapter.js shimming chrome."), r.browserShim = io, Dn(e, s), Ln(e), vd(e, s), bd(e), lr(e, s), yd(e, s), Cd(e, s), kd(e), Td(e, s), wd(e, s), Mn(e), hr(e), mr(e), An(e, s), On(e, s), pr(e, s);
      break;
    case "firefox":
      if (!no || !ur || !t.shimFirefox) return i("Firefox shim is not included in this adapter release."), r;
      i("adapter.js shimming firefox."), r.browserShim = no, Dn(e, s), Ln(e), Ed(e, s), ur(e, s), Pd(e, s), _d(e), Md(e), Rd(e), Id(e), Ad(e), Od(e, s), Dd(e, s), Ld(e, s), Nd(e, s), Mn(e), mr(e), An(e, s), On(e, s);
      break;
    case "safari":
      if (!so || !t.shimSafari) return i("Safari shim is not included in this adapter release."), r;
      i("adapter.js shimming safari."), r.browserShim = so, Dn(e, s), Ln(e), jd(e), Wd(e), Fd(e), xd(e), Ud(e), Vd(e), Bd(e), Hd(e), Mn(e), hr(e), An(e, s), On(e, s), pr(e, s);
      break;
    default:
      i("Unsupported browser!");
      break;
  }
  return r;
}
bm({
  window: typeof window > "u" ? void 0 : window
});
var fr, Gd;
class Ae extends (Gd = Promise) {
  constructor(e) {
    super(e);
  }
  catch(e) {
    return super.catch(e);
  }
  static reject(e) {
    return super.reject(e);
  }
  static all(e) {
    return super.all(e);
  }
  static race(e) {
    return super.race(e);
  }
}
fr = Ae;
Ae.resolve = n => Reflect.get(Gd, "resolve", fr).call(fr, n);
const ym = /version\/(\d+(\.?_?\d+)+)/i;
let Es;
function Ee(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  if (typeof navigator > "u") return;
  const t = navigator.userAgent.toLowerCase();
  if (Es === void 0 || e) {
    const i = km.find(s => s.test.test(t));
    Es = i?.describe(t);
  }
  return Es;
}
const km = [{
  test: /firefox|iceweasel|fxios/i,
  describe(n) {
    return {
      name: "Firefox",
      version: Nn(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, n),
      os: n.toLowerCase().includes("fxios") ? "iOS" : void 0,
      osVersion: _s(n)
    };
  }
}, {
  test: /chrom|crios|crmo/i,
  describe(n) {
    return {
      name: "Chrome",
      version: Nn(/(?:chrome|chromium|crios|crmo)\/(\d+(\.?_?\d+)+)/i, n),
      os: n.toLowerCase().includes("crios") ? "iOS" : void 0,
      osVersion: _s(n)
    };
  }
}, {
  test: /safari|applewebkit/i,
  describe(n) {
    return {
      name: "Safari",
      version: Nn(ym, n),
      os: n.includes("mobile/") ? "iOS" : "macOS",
      osVersion: _s(n)
    };
  }
}];
function Nn(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  const i = e.match(n);
  return i && i.length >= t && i[t] || "";
}
function _s(n) {
  return n.includes("mac os") ? Nn(/\(.+?(\d+_\d+(:?_\d+)?)/, n, 1).replace(/_/g, ".") : void 0;
}
var Tm = "2.23.0";
const Sm = Tm,
  Cm = 17,
  zd = 0,
  gr = 1,
  Jd = 2,
  wm = Jd;
class ot extends Error {
  constructor(e, t, i) {
    super(t || "an error has occurred"), this.name = "LiveKitError", this.code = e, typeof i?.cause < "u" && (this.cause = i?.cause);
  }
}
class He extends ot {}
var Q;
(function (n) {
  n[n.NotAllowed = 0] = "NotAllowed", n[n.ServerUnreachable = 1] = "ServerUnreachable", n[n.InternalError = 2] = "InternalError", n[n.Cancelled = 3] = "Cancelled", n[n.LeaveRequest = 4] = "LeaveRequest", n[n.Timeout = 5] = "Timeout", n[n.WebSocket = 6] = "WebSocket", n[n.ServiceNotFound = 7] = "ServiceNotFound";
})(Q || (Q = {}));
class N extends He {
  constructor(e, t, i, s) {
    super(1, e), this.name = "ConnectionError", this.status = i, this.reason = t, this.context = s, this.reasonName = Q[t];
  }
  static notAllowed(e, t, i) {
    return new N(e, Q.NotAllowed, t, i);
  }
  static timeout(e) {
    return new N(e, Q.Timeout);
  }
  static leaveRequest(e, t) {
    return new N(e, Q.LeaveRequest, void 0, t);
  }
  static internal(e, t) {
    return new N(e, Q.InternalError, void 0, t);
  }
  static cancelled(e) {
    return new N(e, Q.Cancelled);
  }
  static serverUnreachable(e, t) {
    return new N(e, Q.ServerUnreachable, t);
  }
  static websocket(e, t, i) {
    return new N(e, Q.WebSocket, t, i);
  }
  static serviceNotFound(e, t) {
    return new N(e, Q.ServiceNotFound, void 0, t);
  }
}
function Em(n) {
  return n.reason === Q.Cancelled ? !1 : n.reason === Q.NotAllowed ? n.status === 403 : !0;
}
class ca extends ot {
  constructor(e) {
    super(21, e ?? "device is unsupported"), this.name = "DeviceUnsupportedError";
  }
}
class ft extends ot {
  constructor(e) {
    super(20, e ?? "track is invalid"), this.name = "TrackInvalidError";
  }
}
class _m extends ot {
  constructor(e) {
    super(10, e || "unsupported server"), this.name = "UnsupportedServer";
  }
}
class Z extends ot {
  constructor(e) {
    super(12, e || "unexpected connection state"), this.name = "UnexpectedConnectionState";
  }
}
class Rt extends ot {
  constructor(e) {
    super(13, e || "unable to negotiate"), this.name = "NegotiationError";
  }
}
class Pm extends ot {
  constructor(e) {
    super(14, e || "unable to publish data"), this.name = "PublishDataError";
  }
}
class ao extends ot {
  constructor(e, t) {
    super(15, e), this.name = "PublishTrackError", this.status = t;
  }
}
class oo extends He {
  constructor(e, t) {
    super(15, e), this.name = "SignalRequestError", this.reason = t, this.reasonName = typeof t == "string" ? t : Ut[t];
  }
}
var se;
(function (n) {
  n[n.AlreadyOpened = 0] = "AlreadyOpened", n[n.AbnormalEnd = 1] = "AbnormalEnd", n[n.DecodeFailed = 2] = "DecodeFailed", n[n.LengthExceeded = 3] = "LengthExceeded", n[n.Incomplete = 4] = "Incomplete", n[n.HandlerAlreadyRegistered = 7] = "HandlerAlreadyRegistered", n[n.EncryptionTypeMismatch = 8] = "EncryptionTypeMismatch", n[n.HeaderTooLarge = 9] = "HeaderTooLarge", n[n.PayloadTooLarge = 10] = "PayloadTooLarge";
})(se || (se = {}));
class he extends He {
  constructor(e, t) {
    super(16, e), this.name = "DataStreamError", this.reason = t, this.reasonName = se[t];
  }
}
class si extends ot {
  constructor(e) {
    super(18, e), this.name = "SignalReconnectError";
  }
}
var Wn;
(function (n) {
  n.PermissionDenied = "PermissionDenied", n.NotFound = "NotFound", n.DeviceInUse = "DeviceInUse", n.Other = "Other";
})(Wn || (Wn = {}));
(function (n) {
  function e(t) {
    if (t && "name" in t) return t.name === "NotFoundError" || t.name === "DevicesNotFoundError" ? n.NotFound : t.name === "NotAllowedError" || t.name === "PermissionDeniedError" ? n.PermissionDenied : t.name === "NotReadableError" || t.name === "TrackStartError" ? n.DeviceInUse : n.Other;
  }
  n.getFailure = e;
})(Wn || (Wn = {}));
class Y {}
Y.setTimeout = function () {
  return setTimeout(...arguments);
};
Y.setInterval = function () {
  return setInterval(...arguments);
};
Y.clearTimeout = function () {
  return clearTimeout(...arguments);
};
Y.clearInterval = function () {
  return clearInterval(...arguments);
};
var w;
(function (n) {
  n.Connected = "connected", n.Reconnecting = "reconnecting", n.SignalReconnecting = "signalReconnecting", n.Reconnected = "reconnected", n.Disconnected = "disconnected", n.ConnectionStateChanged = "connectionStateChanged", n.Moved = "moved", n.MediaDevicesChanged = "mediaDevicesChanged", n.ParticipantConnected = "participantConnected", n.ParticipantDisconnected = "participantDisconnected", n.TrackPublished = "trackPublished", n.TrackSubscribed = "trackSubscribed", n.TrackSubscriptionFailed = "trackSubscriptionFailed", n.TrackUnpublished = "trackUnpublished", n.TrackUnsubscribed = "trackUnsubscribed", n.TrackMuted = "trackMuted", n.TrackUnmuted = "trackUnmuted", n.LocalTrackPublished = "localTrackPublished", n.LocalTrackUnpublished = "localTrackUnpublished", n.LocalAudioSilenceDetected = "localAudioSilenceDetected", n.ActiveSpeakersChanged = "activeSpeakersChanged", n.ParticipantMetadataChanged = "participantMetadataChanged", n.ParticipantNameChanged = "participantNameChanged", n.ParticipantAttributesChanged = "participantAttributesChanged", n.ParticipantActive = "participantActive", n.RoomMetadataChanged = "roomMetadataChanged", n.DataReceived = "dataReceived", n.SipDTMFReceived = "sipDTMFReceived", n.TranscriptionReceived = "transcriptionReceived", n.ConnectionQualityChanged = "connectionQualityChanged", n.TrackStreamStateChanged = "trackStreamStateChanged", n.TrackSubscriptionPermissionChanged = "trackSubscriptionPermissionChanged", n.TrackSubscriptionStatusChanged = "trackSubscriptionStatusChanged", n.AudioPlaybackStatusChanged = "audioPlaybackChanged", n.VideoPlaybackStatusChanged = "videoPlaybackChanged", n.MediaDevicesError = "mediaDevicesError", n.ParticipantPermissionsChanged = "participantPermissionsChanged", n.SignalConnected = "signalConnected", n.RecordingStatusChanged = "recordingStatusChanged", n.ParticipantEncryptionStatusChanged = "participantEncryptionStatusChanged", n.EncryptionError = "encryptionError", n.DCBufferStatusChanged = "dcBufferStatusChanged", n.ActiveDeviceChanged = "activeDeviceChanged", n.ChatMessage = "chatMessage", n.LocalTrackSubscribed = "localTrackSubscribed", n.MetricsReceived = "metricsReceived", n.DataTrackPublished = "dataTrackPublished", n.DataTrackUnpublished = "dataTrackUnpublished", n.LocalDataTrackPublished = "localDataTrackPublished", n.LocalDataTrackUnpublished = "localDataTrackUnpublished";
})(w || (w = {}));
var A;
(function (n) {
  n.TrackPublished = "trackPublished", n.TrackSubscribed = "trackSubscribed", n.TrackSubscriptionFailed = "trackSubscriptionFailed", n.TrackUnpublished = "trackUnpublished", n.TrackUnsubscribed = "trackUnsubscribed", n.TrackMuted = "trackMuted", n.TrackUnmuted = "trackUnmuted", n.LocalTrackPublished = "localTrackPublished", n.LocalTrackUnpublished = "localTrackUnpublished", n.LocalTrackCpuConstrained = "localTrackCpuConstrained", n.LocalSenderCreated = "localSenderCreated", n.ParticipantMetadataChanged = "participantMetadataChanged", n.ParticipantNameChanged = "participantNameChanged", n.DataReceived = "dataReceived", n.SipDTMFReceived = "sipDTMFReceived", n.TranscriptionReceived = "transcriptionReceived", n.IsSpeakingChanged = "isSpeakingChanged", n.ConnectionQualityChanged = "connectionQualityChanged", n.TrackStreamStateChanged = "trackStreamStateChanged", n.TrackSubscriptionPermissionChanged = "trackSubscriptionPermissionChanged", n.TrackSubscriptionStatusChanged = "trackSubscriptionStatusChanged", n.TrackCpuConstrained = "trackCpuConstrained", n.MediaDevicesError = "mediaDevicesError", n.AudioStreamAcquired = "audioStreamAcquired", n.ParticipantPermissionsChanged = "participantPermissionsChanged", n.PCTrackAdded = "pcTrackAdded", n.AttributesChanged = "attributesChanged", n.LocalTrackSubscribed = "localTrackSubscribed", n.ChatMessage = "chatMessage", n.Active = "active";
})(A || (A = {}));
var P;
(function (n) {
  n.TransportsCreated = "transportsCreated", n.Connected = "connected", n.Disconnected = "disconnected", n.Resuming = "resuming", n.Resumed = "resumed", n.Restarting = "restarting", n.Restarted = "restarted", n.SignalResumed = "signalResumed", n.SignalRestarted = "signalRestarted", n.Closing = "closing", n.MediaTrackAdded = "mediaTrackAdded", n.ActiveSpeakersUpdate = "activeSpeakersUpdate", n.DataPacketReceived = "dataPacketReceived", n.RTPVideoMapUpdate = "rtpVideoMapUpdate", n.DCBufferStatusChanged = "dcBufferStatusChanged", n.ParticipantUpdate = "participantUpdate", n.RoomUpdate = "roomUpdate", n.SpeakersChanged = "speakersChanged", n.StreamStateChanged = "streamStateChanged", n.ConnectionQualityUpdate = "connectionQualityUpdate", n.SubscriptionError = "subscriptionError", n.SubscriptionPermissionUpdate = "subscriptionPermissionUpdate", n.RemoteMute = "remoteMute", n.SubscribedQualityUpdate = "subscribedQualityUpdate", n.LocalTrackUnpublished = "localTrackUnpublished", n.LocalTrackSubscribed = "localTrackSubscribed", n.Offline = "offline", n.SignalRequestResponse = "signalRequestResponse", n.SignalConnected = "signalConnected", n.RoomMoved = "roomMoved", n.PublishDataTrackResponse = "publishDataTrackResponse", n.UnPublishDataTrackResponse = "unPublishDataTrackResponse", n.DataTrackSubscriberHandles = "dataTrackSubscriberHandles", n.DataTrackPacketReceived = "dataTrackPacketReceived", n.Joined = "joined", n.TokenRefreshed = "tokenRefreshed", n.ServerRegionsReported = "serverRegionsReported", n.RequestSubscribedCodecRefresh = "requestSubscribedCodecRefresh";
})(P || (P = {}));
var I;
(function (n) {
  n.Message = "message", n.Muted = "muted", n.Unmuted = "unmuted", n.Restarted = "restarted", n.Ended = "ended", n.Subscribed = "subscribed", n.Unsubscribed = "unsubscribed", n.CpuConstrained = "cpuConstrained", n.UpdateSettings = "updateSettings", n.UpdateSubscription = "updateSubscription", n.AudioPlaybackStarted = "audioPlaybackStarted", n.AudioPlaybackFailed = "audioPlaybackFailed", n.AudioSilenceDetected = "audioSilenceDetected", n.VisibilityChanged = "visibilityChanged", n.VideoDimensionsChanged = "videoDimensionsChanged", n.VideoPlaybackStarted = "videoPlaybackStarted", n.VideoPlaybackFailed = "videoPlaybackFailed", n.ElementAttached = "elementAttached", n.ElementDetached = "elementDetached", n.UpstreamPaused = "upstreamPaused", n.UpstreamResumed = "upstreamResumed", n.SubscriptionPermissionChanged = "subscriptionPermissionChanged", n.SubscriptionStatusChanged = "subscriptionStatusChanged", n.SubscriptionFailed = "subscriptionFailed", n.TrackProcessorUpdate = "trackProcessorUpdate", n.AudioTrackFeatureUpdate = "audioTrackFeatureUpdate", n.TranscriptionReceived = "transcriptionReceived", n.TimeSyncUpdate = "timeSyncUpdate", n.PreConnectBufferFlushed = "preConnectBufferFlushed";
})(I || (I = {}));
function Ps(n) {
  const e = {};
  for (const i of Object.entries(n)) {
    var t = x(i, 2);
    const s = t[0],
      r = t[1];
    r !== void 0 && (e[s] = r);
  }
  return e;
}
function Rs(n, e) {
  return n && e ? "".concat(n, "x").concat(e) : void 0;
}
function vr(n) {
  return Math.round(n * 1e4) / 1e4;
}
function Rm(n) {
  const e = n.jitterBufferDelay,
    t = n.jitterBufferEmittedCount;
  return e !== void 0 && t ? vr(e / t) : void 0;
}
function Im(n, e) {
  if (n.playoutDelay !== void 0) return vr(n.playoutDelay);
  const t = e?.totalPlayoutDelay,
    i = e?.totalSamplesCount;
  return t !== void 0 && i ? vr(t / i) : void 0;
}
function br(n) {
  var e, t;
  const i = new Map(),
    s = [],
    r = [],
    a = [];
  let o;
  n.forEach(f => i.set(f.id, f));
  const c = f => {
      var y;
      return f.codecId ? (y = i.get(f.codecId)) === null || y === void 0 ? void 0 : y.mimeType : void 0;
    },
    d = (f, y) => f[y] ? i.get(f[y]) : void 0;
  n.forEach(f => {
    switch (f.type) {
      case "inbound-rtp":
        {
          const y = d(f, "playoutId");
          r.push(Ps({
            kind: f.kind,
            ssrc: f.ssrc,
            mid: f.mid,
            trackId: f.trackIdentifier,
            codec: c(f),
            decoder: f.decoderImplementation,
            resolution: Rs(f.frameWidth, f.frameHeight),
            fps: f.framesPerSecond,
            bytesReceived: f.bytesReceived,
            packetsReceived: f.packetsReceived,
            packetsLost: f.packetsLost,
            packetsDiscarded: f.packetsDiscarded,
            framesReceived: f.framesReceived,
            framesDecoded: f.framesDecoded,
            framesDropped: f.framesDropped,
            keyFramesDecoded: f.keyFramesDecoded,
            freezeCount: f.freezeCount,
            totalFreezesDuration: f.totalFreezesDuration,
            pauseCount: f.pauseCount,
            nackCount: f.nackCount,
            pliCount: f.pliCount,
            firCount: f.firCount,
            jitter: f.jitter,
            jitterBuffer: Rm(f),
            playoutDelay: Im(f, y),
            audioLevel: f.audioLevel,
            totalSamplesReceived: f.totalSamplesReceived,
            concealedSamples: f.concealedSamples
          }));
          break;
        }
      case "outbound-rtp":
        {
          const y = d(f, "remoteId"),
            k = d(f, "mediaSourceId");
          a.push(Ps({
            kind: f.kind,
            ssrc: f.ssrc,
            mid: f.mid,
            rid: f.rid,
            trackId: k?.trackIdentifier,
            active: f.active,
            codec: c(f),
            encoder: f.encoderImplementation,
            resolution: Rs(f.frameWidth, f.frameHeight),
            fps: f.framesPerSecond,
            captureResolution: Rs(k?.width, k?.height),
            captureFps: k?.framesPerSecond,
            audioLevel: k?.audioLevel,
            targetBitrate: f.targetBitrate,
            bytesSent: f.bytesSent,
            packetsSent: f.packetsSent,
            retransmittedPacketsSent: f.retransmittedPacketsSent,
            framesEncoded: f.framesEncoded,
            keyFramesEncoded: f.keyFramesEncoded,
            limitedBy: f.qualityLimitationReason === "none" ? void 0 : f.qualityLimitationReason,
            nackCount: f.nackCount,
            pliCount: f.pliCount,
            firCount: f.firCount,
            remotePacketsLost: y?.packetsLost,
            remoteFractionLost: y?.fractionLost,
            remoteJitter: y?.jitter,
            remoteRoundTripTime: y?.roundTripTime
          }));
          break;
        }
      case "transport":
        o = f;
        break;
      case "candidate-pair":
        s.push(f);
        break;
    }
  });
  const l = o?.selectedCandidatePairId,
    u = (t = (e = l ? i.get(l) : void 0) !== null && e !== void 0 ? e : s.find(f => f.selected)) !== null && t !== void 0 ? t : s.find(f => f.nominated),
    h = u?.localCandidateId ? i.get(u.localCandidateId) : void 0,
    m = u?.remoteCandidateId ? i.get(u.remoteCandidateId) : void 0,
    g = Ps({
      ice: o?.iceState,
      dtls: o?.dtlsState,
      route: h && m ? "".concat(h.candidateType, "/").concat(h.protocol, " -> ").concat(m.candidateType) : void 0,
      network: h?.networkType,
      currentRoundTripTime: u?.currentRoundTripTime,
      availableOutgoingBitrate: u?.availableOutgoingBitrate,
      availableIncomingBitrate: u?.availableIncomingBitrate,
      bytesSent: u?.bytesSent,
      bytesReceived: u?.bytesReceived,
      candidatePairChanges: o?.selectedCandidatePairChanges
    });
  return {
    connection: Object.keys(g).length > 0 ? g : void 0,
    outbound: a.length > 0 ? a : void 0,
    inbound: r.length > 0 ? r : void 0
  };
}
function Mm(n) {
  return typeof n > "u" ? n : typeof structuredClone == "function" ? typeof n == "object" && n !== null ? structuredClone(Object.assign({}, n)) : structuredClone(n) : JSON.parse(JSON.stringify(n));
}
class $ {
  constructor(e, t, i, s, r) {
    if (typeof e == "object") this.width = e.width, this.height = e.height, this.aspectRatio = e.aspectRatio, this.encoding = {
      maxBitrate: e.maxBitrate,
      maxFramerate: e.maxFramerate,
      priority: e.priority
    };else if (t !== void 0 && i !== void 0) this.width = e, this.height = t, this.aspectRatio = e / t, this.encoding = {
      maxBitrate: i,
      maxFramerate: s,
      priority: r
    };else throw new TypeError("Unsupported options: provide at least width, height and maxBitrate");
  }
  get resolution() {
    return {
      width: this.width,
      height: this.height,
      frameRate: this.encoding.maxFramerate,
      aspectRatio: this.aspectRatio
    };
  }
}
const Am = ["vp8", "h264"],
  Om = ["vp8", "h264", "vp9", "av1", "h265"];
function Qd(n) {
  return !!Am.find(e => e === n);
}
const Dm = Qd;
var co;
(function (n) {
  n[n.PREFER_REGRESSION = 0] = "PREFER_REGRESSION", n[n.SIMULCAST = 1] = "SIMULCAST", n[n.REGRESSION = 2] = "REGRESSION";
})(co || (co = {}));
var tn;
(function (n) {
  n.telephone = {
    maxBitrate: 12e3
  }, n.speech = {
    maxBitrate: 24e3
  }, n.music = {
    maxBitrate: 48e3
  }, n.musicStereo = {
    maxBitrate: 64e3
  }, n.musicHighQuality = {
    maxBitrate: 96e3
  }, n.musicHighQualityStereo = {
    maxBitrate: 128e3
  };
})(tn || (tn = {}));
const Qt = {
    h90: new $(160, 90, 9e4, 20),
    h180: new $(320, 180, 16e4, 20),
    h216: new $(384, 216, 18e4, 20),
    h360: new $(640, 360, 45e4, 20),
    h540: new $(960, 540, 8e5, 25),
    h720: new $(1280, 720, 17e5, 30),
    h1080: new $(1920, 1080, 3e6, 30),
    h1440: new $(2560, 1440, 5e6, 30),
    h2160: new $(3840, 2160, 8e6, 30)
  },
  yr = {
    h120: new $(160, 120, 7e4, 20),
    h180: new $(240, 180, 125e3, 20),
    h240: new $(320, 240, 14e4, 20),
    h360: new $(480, 360, 33e4, 20),
    h480: new $(640, 480, 5e5, 20),
    h540: new $(720, 540, 6e5, 25),
    h720: new $(960, 720, 13e5, 30),
    h1080: new $(1440, 1080, 23e5, 30),
    h1440: new $(1920, 1440, 38e5, 30)
  },
  nn = {
    h360fps3: new $(640, 360, 2e5, 3, "medium"),
    h360fps15: new $(640, 360, 4e5, 15, "medium"),
    h720fps5: new $(1280, 720, 8e5, 5, "medium"),
    h720fps15: new $(1280, 720, 15e5, 15, "medium"),
    h720fps30: new $(1280, 720, 2e6, 30, "medium"),
    h1080fps15: new $(1920, 1080, 25e5, 15, "medium"),
    h1080fps30: new $(1920, 1080, 5e6, 30, "medium"),
    original: new $(0, 0, 7e6, 30, "medium")
  };
function Yd(n, e, t) {
  var i, s, r, a;
  const o = Zd(n ?? {}),
    c = o.optionsWithoutProcessor,
    d = o.audioProcessor,
    l = o.videoProcessor,
    u = e?.processor,
    h = t?.processor,
    m = c ?? {};
  return m.audio === !0 && (m.audio = {}), m.video === !0 && (m.video = {}), m.audio && (kr(m.audio, e), (i = (r = m.audio).deviceId) !== null && i !== void 0 || (r.deviceId = {
    ideal: "default"
  }), (d || u) && (m.audio.processor = d ?? u)), m.video && (kr(m.video, t), (s = (a = m.video).deviceId) !== null && s !== void 0 || (a.deviceId = {
    ideal: "default"
  }), (l || h) && (m.video.processor = l ?? h)), m;
}
function kr(n, e) {
  return Object.keys(e).forEach(t => {
    n[t] === void 0 && (n[t] = e[t]);
  }), n;
}
function da(n) {
  var e, t, i, s;
  const r = {};
  if (n.video) {
    if (typeof n.video == "object") {
      const a = {},
        o = a,
        c = n.video;
      Object.keys(c).forEach(d => {
        d === "resolution" ? kr(o, c.resolution) : o[d] = c[d];
      }), r.video = a, (e = (i = r.video).deviceId) !== null && e !== void 0 || (i.deviceId = {
        ideal: "default"
      });
    } else r.video = n.video ? {
      deviceId: {
        ideal: "default"
      }
    } : !1;
  } else r.video = !1;
  return n.audio ? typeof n.audio == "object" ? (r.audio = n.audio, (t = (s = r.audio).deviceId) !== null && t !== void 0 || (s.deviceId = {
    ideal: "default"
  })) : r.audio = {
    deviceId: {
      ideal: "default"
    }
  } : r.audio = !1, r;
}
function $d(n) {
  return p(this, arguments, void 0, function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 200;
    return function* () {
      const i = Xd();
      if (!i) return !1;
      let s, r;
      try {
        r = i.createAnalyser(), r.fftSize = 2048;
        const a = r.frequencyBinCount,
          o = new Uint8Array(a);
        s = i.createMediaStreamSource(new MediaStream([e.mediaStreamTrack])), s.connect(r);
        const c = () => i.state === "running";
        if (!c()) {
          try {
            yield Promise.race([i.resume(), Ce(200)]);
          } catch {}
          if (!c()) return !1;
        }
        return yield Ce(t), r.getByteTimeDomainData(o), !o.some(l => l !== 128 && l !== 0);
      } finally {
        s?.disconnect(), r?.disconnect(), yield i.close().catch(() => {});
      }
    }();
  });
}
function Xd() {
  var n;
  const e = typeof window < "u" && (window.AudioContext || window.webkitAudioContext);
  if (e) {
    const t = new e({
      latencyHint: "interactive"
    });
    if (t.state === "suspended" && typeof window < "u" && !((n = window.document) === null || n === void 0) && n.body) {
      const i = () => p(this, void 0, void 0, function* () {
        var s;
        try {
          t.state === "suspended" && (yield t.resume());
        } catch (r) {} finally {
          (s = window.document.body) === null || s === void 0 || s.removeEventListener("click", i);
        }
      });
      t.addEventListener("statechange", () => {
        var s;
        t.state === "closed" && ((s = window.document.body) === null || s === void 0 || s.removeEventListener("click", i));
      }), window.document.body.addEventListener("click", i);
    }
    return t;
  }
}
function Lm(n) {
  return n === "audioinput" ? E.Source.Microphone : n === "videoinput" ? E.Source.Camera : E.Source.Unknown;
}
function Tr(n) {
  return n === E.Source.Microphone ? "audioinput" : n === E.Source.Camera ? "videoinput" : void 0;
}
function Nm(n) {
  var e, t;
  let i = (e = n.video) !== null && e !== void 0 ? e : !0;
  return n.resolution && n.resolution.width > 0 && n.resolution.height > 0 && (i = typeof i == "boolean" ? {} : i, $t() ? i = Object.assign(Object.assign({}, i), {
    width: {
      max: n.resolution.width
    },
    height: {
      max: n.resolution.height
    },
    frameRate: n.resolution.frameRate
  }) : i = Object.assign(Object.assign({}, i), {
    width: {
      ideal: n.resolution.width
    },
    height: {
      ideal: n.resolution.height
    },
    frameRate: n.resolution.frameRate
  })), {
    audio: (t = n.audio) !== null && t !== void 0 ? t : !1,
    video: i,
    controller: n.controller,
    selfBrowserSurface: n.selfBrowserSurface,
    surfaceSwitching: n.surfaceSwitching,
    systemAudio: n.systemAudio,
    preferCurrentTab: n.preferCurrentTab
  };
}
function Wi(n) {
  return n.split("/")[1].toLowerCase();
}
function xm(n) {
  const e = [];
  return n.forEach(t => {
    t.track !== void 0 && e.push(new ea({
      cid: t.track.mediaStreamID,
      track: t.trackInfo
    }));
  }), e;
}
function V(n) {
  return "mediaStreamTrack" in n ? {
    trackID: n.sid,
    source: n.source,
    muted: n.isMuted,
    enabled: n.mediaStreamTrack.enabled,
    kind: n.kind,
    streamID: n.mediaStreamID,
    streamTrackID: n.mediaStreamTrack.id
  } : {
    trackID: n.trackSid,
    enabled: n.isEnabled,
    muted: n.isMuted,
    trackInfo: Object.assign({
      mimeType: n.mimeType,
      name: n.trackName,
      encrypted: n.isEncrypted,
      kind: n.kind,
      source: n.source
    }, n.track ? V(n.track) : {})
  };
}
function Um() {
  return typeof RTCRtpReceiver < "u" && typeof RTCRtpReceiver.prototype.getSynchronizationSources == "function";
}
function Fm(n, e) {
  var t;
  n === void 0 && (n = {}), e === void 0 && (e = {});
  const i = [...Object.keys(e), ...Object.keys(n)],
    s = {};
  for (const r of i) n[r] !== e[r] && (s[r] = (t = e[r]) !== null && t !== void 0 ? t : "");
  return s;
}
function Zd(n) {
  const e = Object.assign({}, n);
  let t, i;
  return typeof e.audio == "object" && e.audio.processor && (t = e.audio.processor, e.audio = Object.assign(Object.assign({}, e.audio), {
    processor: void 0
  })), typeof e.video == "object" && e.video.processor && (i = e.video.processor, e.video = Object.assign(Object.assign({}, e.video), {
    processor: void 0
  })), {
    audioProcessor: t,
    videoProcessor: i,
    optionsWithoutProcessor: Mm(e)
  };
}
function Bm(n) {
  switch (n) {
    case me.CAMERA:
      return E.Source.Camera;
    case me.MICROPHONE:
      return E.Source.Microphone;
    case me.SCREEN_SHARE:
      return E.Source.ScreenShare;
    case me.SCREEN_SHARE_AUDIO:
      return E.Source.ScreenShareAudio;
    default:
      return E.Source.Unknown;
  }
}
function lo(n, e) {
  return n.width * n.height < e.width * e.height;
}
function qm(n, e) {
  var t;
  return (t = n.layers) === null || t === void 0 ? void 0 : t.find(i => i.quality === e);
}
function jm(n, e) {
  return p(this, arguments, void 0, function (t, i) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return function* () {
      var r;
      if (typeof document > "u" || t.readyState === "ended" || t.muted || !t.enabled) return !1;
      const a = typeof HTMLVideoElement.prototype.requestVideoFrameCallback == "function",
        o = s.find(h => h instanceof HTMLVideoElement && h.srcObject instanceof MediaStream && h.srcObject.getVideoTracks().includes(t) && (a || h.readyState < 2)),
        c = o ?? document.createElement("video");
      o || (c.playsInline = !0, c.muted = !0, c.srcObject = new MediaStream([t]), c.play().catch(h => {
        W.debug("could not play element while waiting for the first video frame", {
          error: h
        });
      }));
      let d, l, u;
      try {
        return yield new Promise(h => {
          d = setTimeout(() => h(!1), i), a ? l = c.requestVideoFrameCallback(() => h(!0)) : (u = () => h(!0), c.addEventListener("loadeddata", u));
        });
      } finally {
        clearTimeout(d), l !== void 0 && ((r = c.cancelVideoFrameCallback) === null || r === void 0 || r.call(c, l)), u && c.removeEventListener("loadeddata", u), o || (c.pause(), c.srcObject = null);
      }
    }();
  });
}
const Vm = 5e3,
  xi = [];
var Be;
(function (n) {
  n[n.LOW = 0] = "LOW", n[n.MEDIUM = 1] = "MEDIUM", n[n.HIGH = 2] = "HIGH";
})(Be || (Be = {}));
class E extends Ue.EventEmitter {
  get streamState() {
    return this._streamState;
  }
  setStreamState(e) {
    this._streamState !== e && this.log.debug("stream state changed: ".concat(this._streamState, " -> ").concat(e)), this._streamState = e;
  }
  constructor(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var s;
    super(), this.attachedElements = [], this.isMuted = !1, this._streamState = E.StreamState.Active, this.isInBackground = !1, this._currentBitrate = 0, this.finalStatsLogged = !1, this.log = W, this.appVisibilityChangedListener = () => {
      this.backgroundTimeout && clearTimeout(this.backgroundTimeout), document.visibilityState === "hidden" ? this.backgroundTimeout = setTimeout(() => this.handleAppVisibilityChanged(), Vm) : this.handleAppVisibilityChanged();
    }, this.loggerContextCb = i.loggerContextCb, this.log = ke((s = i.loggerName) !== null && s !== void 0 ? s : re.Track, () => this.logContext), this.setMaxListeners(100), this.kind = t, this._mediaStreamTrack = e, this._mediaStreamID = e.id, this.source = E.Source.Unknown;
  }
  get logContext() {
    var e;
    return Object.assign(Object.assign({}, (e = this.loggerContextCb) === null || e === void 0 ? void 0 : e.call(this)), V(this));
  }
  get currentBitrate() {
    return this._currentBitrate;
  }
  get mediaStreamTrack() {
    return this._mediaStreamTrack;
  }
  get mediaStreamID() {
    return this._mediaStreamID;
  }
  attach(e) {
    let t = "audio";
    this.kind === E.Kind.Video && (t = "video"), this.attachedElements.length === 0 && this.kind === E.Kind.Video && this.addAppVisibilityListener(), e || (t === "audio" && (xi.forEach(r => {
      r.parentElement === null && !e && (e = r);
    }), e && xi.splice(xi.indexOf(e), 1)), e || (e = document.createElement(t))), this.attachedElements.includes(e) || this.attachedElements.push(e), di(this.mediaStreamTrack, e);
    const i = e.srcObject.getTracks(),
      s = i.some(r => r.kind === "audio");
    return e.play().then(() => {
      this.emit(s ? I.AudioPlaybackStarted : I.VideoPlaybackStarted);
    }).catch(r => {
      r.name === "NotAllowedError" ? this.emit(s ? I.AudioPlaybackFailed : I.VideoPlaybackFailed, r) : r.name === "AbortError" ? this.log.debug("".concat(s ? "audio" : "video", " playback aborted, likely due to new play request")) : this.log.warn("could not playback ".concat(s ? "audio" : "video"), {
        error: r
      }), s && e && i.some(a => a.kind === "video") && r.name === "NotAllowedError" && (e.muted = !0, e.play().catch(() => {}));
    }), this.emit(I.ElementAttached, e), e;
  }
  detach(e) {
    try {
      if (e) {
        mi(this.mediaStreamTrack, e);
        const i = this.attachedElements.indexOf(e);
        return i >= 0 && (this.attachedElements.splice(i, 1), this.recycleElement(e), this.emit(I.ElementDetached, e)), e;
      }
      const t = [];
      return this.attachedElements.forEach(i => {
        mi(this.mediaStreamTrack, i), t.push(i), this.recycleElement(i), this.emit(I.ElementDetached, i);
      }), this.attachedElements = [], t;
    } finally {
      this.attachedElements.length === 0 && this.removeAppVisibilityListener();
    }
  }
  stop() {
    this.log.debug("stopping track"), this.stopMonitor(), this._mediaStreamTrack.stop();
  }
  enable() {
    this._mediaStreamTrack.enabled = !0;
  }
  disable() {
    this._mediaStreamTrack.enabled = !1;
  }
  stopMonitor() {
    this.monitorInterval && clearInterval(this.monitorInterval), this.timeSyncHandle !== void 0 && (cancelAnimationFrame(this.timeSyncHandle), this.timeSyncHandle = void 0), this.logFinalStats();
  }
  logFinalStats() {
    this.finalStatsLogged || (this.finalStatsLogged = !0, this.getRTCStatsReport().then(e => {
      e && this.log.info("final track stats", br(e));
    }).catch(e => this.log.debug("could not collect final track stats", {
      error: e
    })));
  }
  updateLoggerOptions(e) {
    e.loggerContextCb && (this.loggerContextCb = e.loggerContextCb), e.loggerName && (this.log = ke(e.loggerName, () => this.logContext));
  }
  recycleElement(e) {
    if (e instanceof HTMLAudioElement) {
      let t = !0;
      e.pause(), xi.forEach(i => {
        i.parentElement || (t = !1);
      }), t && xi.push(e);
    }
  }
  handleAppVisibilityChanged() {
    return p(this, void 0, void 0, function* () {
      this.isInBackground = document.visibilityState === "hidden", !this.isInBackground && this.kind === E.Kind.Video && setTimeout(() => this.attachedElements.forEach(e => e.play().catch(() => {})), 0);
    });
  }
  addAppVisibilityListener() {
    Oe() ? (this.isInBackground = document.visibilityState === "hidden", document.addEventListener("visibilitychange", this.appVisibilityChangedListener)) : this.isInBackground = !1;
  }
  removeAppVisibilityListener() {
    Oe() && document.removeEventListener("visibilitychange", this.appVisibilityChangedListener);
  }
}
function di(n, e) {
  let t;
  e.srcObject instanceof MediaStream ? t = e.srcObject : t = new MediaStream();
  let i;
  n.kind === "audio" ? i = t.getAudioTracks() : i = t.getVideoTracks(), i.includes(n) || (i.forEach(s => {
    t.removeTrack(s);
  }), t.addTrack(n)), (!$t() || !(e instanceof HTMLVideoElement)) && (e.autoplay = !0), e.muted = t.getAudioTracks().length === 0, e instanceof HTMLVideoElement && (e.playsInline = !0), e.srcObject !== t && (e.srcObject = t, ($t() || Yt()) && e instanceof HTMLVideoElement && setTimeout(() => {
    e.srcObject = t, e.play().catch(() => {});
  }, 0));
}
function mi(n, e) {
  if (e.srcObject instanceof MediaStream) {
    const t = e.srcObject;
    t.removeTrack(n), t.getTracks().length > 0 ? e.srcObject = t : e.srcObject = null;
  }
}
(function (n) {
  let e;
  (function (d) {
    d.Audio = "audio", d.Video = "video", d.Unknown = "unknown";
  })(e = n.Kind || (n.Kind = {}));
  let t;
  (function (d) {
    d.Camera = "camera", d.Microphone = "microphone", d.ScreenShare = "screen_share", d.ScreenShareAudio = "screen_share_audio", d.Unknown = "unknown";
  })(t = n.Source || (n.Source = {}));
  let i;
  (function (d) {
    d.Active = "active", d.Paused = "paused", d.Unknown = "unknown";
  })(i = n.StreamState || (n.StreamState = {}));
  function s(d) {
    switch (d) {
      case e.Audio:
        return Qe.AUDIO;
      case e.Video:
        return Qe.VIDEO;
      default:
        return Qe.DATA;
    }
  }
  n.kindToProto = s;
  function r(d) {
    switch (d) {
      case Qe.AUDIO:
        return e.Audio;
      case Qe.VIDEO:
        return e.Video;
      default:
        return e.Unknown;
    }
  }
  n.kindFromProto = r;
  function a(d) {
    switch (d) {
      case t.Camera:
        return me.CAMERA;
      case t.Microphone:
        return me.MICROPHONE;
      case t.ScreenShare:
        return me.SCREEN_SHARE;
      case t.ScreenShareAudio:
        return me.SCREEN_SHARE_AUDIO;
      default:
        return me.UNKNOWN;
    }
  }
  n.sourceToProto = a;
  function o(d) {
    switch (d) {
      case me.CAMERA:
        return t.Camera;
      case me.MICROPHONE:
        return t.Microphone;
      case me.SCREEN_SHARE:
        return t.ScreenShare;
      case me.SCREEN_SHARE_AUDIO:
        return t.ScreenShareAudio;
      default:
        return t.Unknown;
    }
  }
  n.sourceFromProto = o;
  function c(d) {
    switch (d) {
      case sr.ACTIVE:
        return i.Active;
      case sr.PAUSED:
        return i.Paused;
      default:
        return i.Unknown;
    }
  }
  n.streamStateFromProto = c;
})(E || (E = {}));
const Wm = "|",
  pi = "https://aomediacodec.github.io/av1-rtp-spec/#dependency-descriptor-rtp-header-extension";
function el(n) {
  const e = n.split(Wm);
  return e.length > 1 ? [e[0], n.substr(e[0].length + 1)] : [n, ""];
}
function Ce(n) {
  return new Ae(e => Y.setTimeout(e, n));
}
function Sr() {
  return "addTransceiver" in RTCPeerConnection.prototype;
}
function Cr() {
  return "addTrack" in RTCPeerConnection.prototype;
}
function Hm() {
  if (!("getCapabilities" in RTCRtpSender) || $t() || Yt()) return !1;
  const n = RTCRtpSender.getCapabilities("video");
  let e = !1;
  if (n) {
    for (const t of n.codecs) if (t.mimeType.toLowerCase() === "video/av1") {
      e = !0;
      break;
    }
  }
  return e;
}
function Km() {
  if (!("getCapabilities" in RTCRtpSender) || Yt()) return !1;
  if ($t()) {
    const t = Ee();
    if (t?.version && tt(t.version, "16") < 0 || t?.os === "iOS" && t?.osVersion && tt(t.osVersion, "16") < 0) return !1;
  }
  const n = RTCRtpSender.getCapabilities("video");
  let e = !1;
  if (n) {
    for (const t of n.codecs) if (t.mimeType.toLowerCase() === "video/vp9") {
      e = !0;
      break;
    }
  }
  return e;
}
function Dt(n) {
  return n === "av1" || n === "vp9";
}
function Gm(n) {
  var e;
  const t = (e = n.getHeaderExtensionsToNegotiate) === null || e === void 0 ? void 0 : e.call(n);
  if (!t || !n.setHeaderExtensionsToNegotiate) return !1;
  const i = t.find(s => s.uri === pi);
  if (!i) return !1;
  if (i.direction !== "stopped") return !0;
  i.direction = "sendrecv";
  try {
    return n.setHeaderExtensionsToNegotiate(t), !0;
  } catch {
    return !1;
  }
}
function fi(n, e) {
  var t;
  return Dt(n) && !!e?.simulcast && !!(!((t = e.scalabilityMode) === null || t === void 0) && t.startsWith("L1T"));
}
function tl() {
  const n = Ee();
  return sn() || We() || n?.name === "Chrome" && tt(n.version, "113") < 0;
}
const zm = "1.13.6";
function Jm(n) {
  return n ? tt(n, zm) > 0 : !1;
}
function wr(n) {
  return !document || sn() ? !1 : (n || (n = document.createElement("audio")), "setSinkId" in n);
}
function Qm() {
  return typeof RTCPeerConnection > "u" ? !1 : Sr() || Cr();
}
function Yt() {
  var n;
  return ((n = Ee()) === null || n === void 0 ? void 0 : n.name) === "Firefox";
}
function il() {
  const n = Ee();
  return !!n && n.name === "Chrome" && n.os !== "iOS";
}
function Er() {
  return typeof window < "u" && typeof window.RTCRtpScriptTransform < "u" && !il();
}
function $t() {
  var n;
  return ((n = Ee()) === null || n === void 0 ? void 0 : n.name) === "Safari";
}
function sn() {
  const n = Ee();
  return n?.name === "Safari" || n?.os === "iOS";
}
function Ym() {
  if (!Oe()) return !1;
  const n = Ee();
  return n?.name === "Safari" && n?.os === "macOS" && navigator.maxTouchPoints > 1;
}
function $m() {
  var n;
  return ((n = Ee()) === null || n === void 0 ? void 0 : n.os) === "iOS" || Ym();
}
function Xm() {
  const n = Ee();
  return n?.name === "Safari" && n.version.startsWith("17.") || n?.os === "iOS" && !!n?.osVersion && tt(n.osVersion, "17") >= 0;
}
function Zm(n) {
  return n || (n = Ee()), n?.name === "Safari" && tt(n.version, "18.3") > 0 || n?.os === "iOS" && !!n?.osVersion && tt(n.osVersion, "18.3") > 0;
}
function nl() {
  var n, e;
  return Oe() ? (e = (n = navigator.userAgentData) === null || n === void 0 ? void 0 : n.mobile) !== null && e !== void 0 ? e : /Tablet|iPad|Mobile|Android|BlackBerry/.test(navigator.userAgent) : !1;
}
function ep() {
  const n = Ee(),
    e = "17.2";
  if (n) return n.name !== "Safari" && n.os !== "iOS" || n.os === "iOS" && n.osVersion && tt(n.osVersion, e) >= 0 ? !0 : n.name === "Safari" && tt(n.version, e) >= 0;
}
function Oe() {
  return typeof document < "u";
}
function We() {
  return navigator.product == "ReactNative";
}
function _i(n) {
  return n.hostname.endsWith(".livekit.cloud") || n.hostname.endsWith(".livekit.run");
}
function Is(n) {
  return _i(n) ? n.hostname.split(".")[0] : null;
}
function sl() {
  if (global && global.LiveKitReactNativeGlobal) return global.LiveKitReactNativeGlobal;
}
function rl() {
  if (!We()) return;
  let n = sl();
  if (n) return n.platform;
}
function uo() {
  if (Oe()) return window.devicePixelRatio;
  if (We()) {
    let n = sl();
    if (n) return n.devicePixelRatio;
  }
  return 1;
}
function tt(n, e) {
  const t = n.split("."),
    i = e.split("."),
    s = Math.min(t.length, i.length);
  for (let r = 0; r < s; ++r) {
    const a = parseInt(t[r], 10),
      o = parseInt(i[r], 10);
    if (a > o) return 1;
    if (a < o) return -1;
    if (r === s - 1 && a === o) return 0;
  }
  return n === "" && e !== "" ? -1 : e === "" ? 1 : t.length == i.length ? 0 : t.length < i.length ? -1 : 1;
}
function tp(n) {
  for (const e of n) e.target.handleResize(e);
}
function ip(n) {
  for (const e of n) e.target.handleVisibilityChanged(e);
}
let Ms = null;
const ho = () => (Ms || (Ms = new ResizeObserver(tp)), Ms);
let As = null;
const mo = () => (As || (As = new IntersectionObserver(ip, {
  root: null,
  rootMargin: "0px"
})), As);
function np(n) {
  var e;
  const t = new Yc({
    capabilities: n,
    sdk: $c.JS,
    protocol: Cm,
    clientProtocol: wm,
    version: Sm
  });
  return We() && (t.os = (e = rl()) !== null && e !== void 0 ? e : ""), t;
}
function po() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 16,
    e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 16,
    t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
    i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  const s = document.createElement("canvas");
  s.width = n, s.height = e;
  const r = s.getContext("2d");
  r?.fillRect(0, 0, s.width, s.height), i && r && (r.beginPath(), r.arc(n / 2, e / 2, 50, 0, Math.PI * 2, !0), r.closePath(), r.fillStyle = "grey", r.fill());
  const o = s.captureStream().getTracks(),
    c = x(o, 1),
    d = c[0];
  if (!d) throw Error("Could not get empty media stream video track");
  return d.enabled = t, d;
}
let gt, _r;
const Pr = new Set();
function al() {
  if (!gt) {
    const i = new AudioContext(),
      s = i.createOscillator(),
      r = i.createGain();
    r.gain.setValueAtTime(0, 0);
    const a = i.createMediaStreamDestination();
    s.connect(r), r.connect(a), s.start();
    var n = a.stream.getAudioTracks(),
      e = x(n, 1);
    if (gt = e[0], !gt) throw i.close().catch(() => {}), Error("Could not get empty media stream audio track");
    gt.enabled = !1, _r = i;
  }
  const t = gt.clone();
  return Pr.add(t), t;
}
function fo(n) {
  return p(this, void 0, void 0, function* () {
    if (!Pr.delete(n) || (n.stop(), Pr.size > 0)) return;
    const e = _r;
    gt?.stop(), gt = void 0, _r = void 0, yield e?.close();
  });
}
class we {
  get isResolved() {
    return this._isResolved;
  }
  constructor(e, t) {
    this._isResolved = !1, this.onFinally = t, this.promise = new Promise((i, s) => p(this, void 0, void 0, function* () {
      this.resolve = i, this.reject = s, e && (yield e(i, s));
    })).finally(() => {
      var i;
      this._isResolved = !0, (i = this.onFinally) === null || i === void 0 || i.call(this);
    });
  }
}
function ol(n) {
  return Om.includes(n);
}
function gi(n) {
  if (typeof n == "string" || typeof n == "number") return n;
  if (Array.isArray(n)) return n[0];
  if (n.exact !== void 0) return Array.isArray(n.exact) ? n.exact[0] : n.exact;
  if (n.ideal !== void 0) return Array.isArray(n.ideal) ? n.ideal[0] : n.ideal;
  throw Error("could not unwrap constraint");
}
function sp(n) {
  return typeof n == "object" && n !== null && "name" in n && (n.name === "NotAllowedError" || n.name === "SecurityError" || n.name === "PermissionDeniedError" || n.name === "PermissionDismissedError");
}
const cl = new WeakSet();
function rp(n) {
  typeof n == "object" && n !== null && cl.add(n);
}
function ap(n) {
  return typeof n == "object" && n !== null && cl.has(n);
}
function op(n) {
  return n.startsWith("http") ? n.replace(/^(http)/, "ws") : n;
}
function rn(n) {
  return n.startsWith("ws") ? n.replace(/^(ws)/, "http") : n;
}
function cp(n, e) {
  return n.segments.map(t => {
    let i = t.id,
      s = t.text,
      r = t.language,
      a = t.startTime,
      o = t.endTime,
      c = t.final;
    var d;
    const l = (d = e.get(i)) !== null && d !== void 0 ? d : Date.now(),
      u = Date.now();
    return c ? e.delete(i) : e.set(i, l), {
      id: i,
      text: s,
      startTime: Number.parseInt(a.toString()),
      endTime: Number.parseInt(o.toString()),
      final: c,
      language: r,
      firstReceivedTime: l,
      lastReceivedTime: u
    };
  });
}
function dp(n) {
  const e = n.id,
    t = n.timestamp,
    i = n.message,
    s = n.editTimestamp;
  return {
    id: e,
    timestamp: Number.parseInt(t.toString()),
    editTimestamp: s ? Number.parseInt(s.toString()) : void 0,
    message: i
  };
}
function go(n) {
  switch (n.reason) {
    case Q.LeaveRequest:
      return n.context;
    case Q.Cancelled:
      return ve.CLIENT_INITIATED;
    case Q.NotAllowed:
      return ve.USER_REJECTED;
    case Q.ServerUnreachable:
      return ve.JOIN_FAILURE;
    default:
      return ve.UNKNOWN_REASON;
  }
}
function ai(n) {
  return n !== void 0 ? Number(n) : void 0;
}
function et(n) {
  return n !== void 0 ? BigInt(n) : void 0;
}
function vi(n) {
  return !!n && !(n instanceof MediaStreamTrack) && n.isLocal;
}
function at(n) {
  return !!n && n.kind == E.Kind.Audio;
}
function yt(n) {
  return !!n && n.kind == E.Kind.Video;
}
function Ge(n) {
  return vi(n) && yt(n);
}
function nt(n) {
  return vi(n) && at(n);
}
function Rr(n) {
  return !!n && !n.isLocal;
}
function lp(n) {
  return !!n && !n.isLocal;
}
function Os(n) {
  return Rr(n) && yt(n);
}
function up(n) {
  return n.isLocal;
}
function hp(n, e) {
  const t = [];
  let i = new TextEncoder().encode(n);
  for (; i.length > e;) {
    let s = e;
    for (; s > 0;) {
      const r = i[s];
      if (r !== void 0 && (r & 192) !== 128) break;
      s--;
    }
    t.push(i.slice(0, s)), i = i.slice(s);
  }
  return i.length > 0 && t.push(i), t;
}
function xn(n) {
  return new ReadableStream({
    start(e) {
      e.enqueue(n), e.close();
    }
  });
}
function mp(n, e) {
  return md(this, arguments, function* () {
    const i = n.getReader();
    let s = new Uint8Array(0);
    try {
      for (;;) {
        const r = yield bt(i.read()),
          a = r.done,
          o = r.value;
        if (a) break;
        if (o.byteLength === 0) continue;
        const c = new Uint8Array(s.byteLength + o.byteLength);
        for (c.set(s), c.set(o, s.byteLength), s = c; s.byteLength >= e;) yield yield bt(s.slice(0, e)), s = s.slice(e);
      }
      s.byteLength > 0 && (yield yield bt(s));
    } finally {
      i.releaseLock();
    }
  });
}
function pp(n) {
  var e;
  const t = n.get("Cache-Control");
  if (t) {
    const i = (e = t.match(/(?:^|[,\s])max-age=(\d+)/)) === null || e === void 0 ? void 0 : e[1];
    if (i) return parseInt(i, 10);
  }
}
function dl() {
  return typeof CompressionStream < "u";
}
let Ds = null;
function bi() {
  return typeof Ds != "boolean" && (Ds = fp()), Ds;
}
function fp() {
  if (typeof CompressionStream > "u" || typeof DecompressionStream > "u") return !1;
  try {
    return new CompressionStream("deflate-raw"), new DecompressionStream("deflate-raw"), !0;
  } catch {
    return !1;
  }
}
function gp() {
  return dl() && !Yt();
}
function vo(n, e) {
  const t = el(e.id),
    i = x(t, 2),
    s = i[1];
  if (s?.startsWith("TR")) return s;
  if (n.id.startsWith("TR")) return n.id;
}
function vp(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  const i = bp(n, e);
  return t ? i : la(i, "v1");
}
function bp(n, e) {
  const t = new URL(op(n));
  return e.forEach((i, s) => {
    t.searchParams.set(s, i);
  }), la(t, "rtc");
}
function yp(n) {
  const e = new URL(rn(n));
  return la(e, "validate");
}
function ll(n) {
  return n.endsWith("/") ? n : "".concat(n, "/");
}
function la(n, e) {
  return n.pathname = "".concat(ll(n.pathname)).concat(e), n;
}
function bo(n) {
  if (typeof n == "string") return Ja.fromJson(JSON.parse(n), {
    ignoreUnknownFields: !0
  });
  if (n instanceof ArrayBuffer) return Ja.fromBinary(new Uint8Array(n));
  throw new Error("could not decode websocket message: ".concat(typeof n));
}
function kp(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Unknown reason";
  if (n instanceof Error) return n.message;
  if (!(n instanceof AbortSignal)) return e;
  const t = n.reason;
  switch (typeof t) {
    case "string":
      return t;
    case "object":
      return t instanceof Error ? t.message : e;
    default:
      return "toString" in t ? t.toString() : e;
  }
}
function Tp(n, e) {
  return n instanceof Error ? n.name && n.message ? "".concat(n.name, ": ").concat(n.message) : n.name : "Encountered unknown ".concat(e, " error: ").concat(String(n));
}
const Sp = 10,
  fn = "lk_e2ee",
  gn = "lk_e2ee_track_id",
  Cp = "LKFrameEncryptionKey",
  wp = {
    sharedKey: !1,
    ratchetSalt: Cp,
    ratchetWindowSize: 8,
    failureTolerance: Sp,
    keyringSize: 16,
    keySize: 128
  };
var It;
(function (n) {
  n.SetKey = "setKey", n.RatchetRequest = "ratchetRequest", n.KeyRatcheted = "keyRatcheted";
})(It || (It = {}));
var yo;
(function (n) {
  n.KeyRatcheted = "keyRatcheted";
})(yo || (yo = {}));
var Ct;
(function (n) {
  n.ParticipantEncryptionStatusChanged = "participantEncryptionStatusChanged", n.EncryptionError = "encryptionError";
})(Ct || (Ct = {}));
var ko;
(function (n) {
  n.Error = "cryptorError";
})(ko || (ko = {}));
function Ep() {
  return ua() || _p();
}
function _p() {
  return typeof window < "u" && typeof window.RTCRtpScriptTransform < "u";
}
function ua() {
  return typeof window < "u" && typeof window.RTCRtpSender < "u" && typeof window.RTCRtpSender.prototype.createEncodedStreams < "u";
}
function Pp(n) {
  var e, t, i, s, r;
  if (((e = n.value) === null || e === void 0 ? void 0 : e.case) !== "sipDtmf" && ((t = n.value) === null || t === void 0 ? void 0 : t.case) !== "metrics" && ((i = n.value) === null || i === void 0 ? void 0 : i.case) !== "speaker" && ((s = n.value) === null || s === void 0 ? void 0 : s.case) !== "transcription" && ((r = n.value) === null || r === void 0 ? void 0 : r.case) !== "encryptedPacket") return new Wc({
    value: n.value
  });
}
class $v extends Ue.EventEmitter {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    super(), this.latestManuallySetKeyIndex = 0, this.onKeyRatcheted = (t, i, s) => {
      W.debug("key ratcheted event received", {
        ratchetResult: t,
        participantId: i,
        keyIndex: s
      });
    }, this.keyInfoMap = new Map(), this.options = Object.assign(Object.assign({}, wp), e), this.on(It.KeyRatcheted, this.onKeyRatcheted);
  }
  onSetEncryptionKey(e, t, i) {
    const s = {
      key: e,
      participantIdentity: t,
      keyIndex: i
    };
    if (!this.options.sharedKey && !t) throw new Error("participant identity needs to be passed for encryption key if sharedKey option is false");
    this.keyInfoMap.set("".concat(t ?? "shared", "-").concat(i ?? 0), s), i !== void 0 && (this.latestManuallySetKeyIndex = i), this.emit(It.SetKey, s, i !== void 0);
  }
  getKeys() {
    return Array.from(this.keyInfoMap.values());
  }
  getLatestManuallySetKeyIndex() {
    return this.latestManuallySetKeyIndex;
  }
  getOptions() {
    return this.options;
  }
  ratchetKey(e, t) {
    this.emit(It.RatchetRequest, e, t);
  }
}
var Hn;
(function (n) {
  n[n.InvalidKey = 0] = "InvalidKey", n[n.MissingKey = 1] = "MissingKey", n[n.InternalError = 2] = "InternalError";
})(Hn || (Hn = {}));
class Rp extends ot {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Hn.InternalError,
      i = arguments.length > 2 ? arguments[2] : void 0;
    super(40, e), this.reason = t, this.participantIdentity = i;
  }
}
function an() {
  return Er();
}
function on(n) {
  return !!n?.worker && (ua() || an());
}
function Kn(n) {
  return !!(n?.timestamp || n?.frameId);
}
function Ip(n) {
  const e = [];
  return n?.timestamp && e.push(wi.PTF_USER_TIMESTAMP), n?.frameId && e.push(wi.PTF_FRAME_ID), e;
}
function Mp(n) {
  if (!n || n.length === 0) return;
  const e = {};
  return n.includes(wi.PTF_USER_TIMESTAMP) && (e.timestamp = !0), n.includes(wi.PTF_FRAME_ID) && (e.frameId = !0), e.timestamp || e.frameId ? e : void 0;
}
function ha(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 50,
    t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var i, s;
  let r;
  const a = (i = t.isImmediate) !== null && i !== void 0 ? i : !1,
    o = (s = t.callback) !== null && s !== void 0 ? s : !1,
    c = t.maxWait;
  let d = Date.now(),
    l = [];
  function u() {
    if (c !== void 0) {
      const m = Date.now() - d;
      if (m + e >= c) return c - m;
    }
    return e;
  }
  const h = function () {
    for (var m = arguments.length, g = new Array(m), f = 0; f < m; f++) g[f] = arguments[f];
    const y = this;
    return new Promise((k, S) => {
      const R = function () {
          if (r = void 0, d = Date.now(), !a) {
            const T = n.apply(y, g);
            o && o(T), l.forEach(C => {
              let M = C.resolve;
              return M(T);
            }), l = [];
          }
        },
        b = a && r === void 0;
      if (r !== void 0 && Y.clearTimeout(r), r = Y.setTimeout(R, u()), b) {
        const T = n.apply(y, g);
        return o && o(T), k(T);
      }
      l.push({
        resolve: k,
        reject: S
      });
    });
  };
  return h.cancel = function (m) {
    r !== void 0 && Y.clearTimeout(r), l.forEach(g => {
      let f = g.reject;
      return f(m);
    }), l = [];
  }, h;
}
const ma = 2e3;
function cs(n, e) {
  if (!e) return 0;
  let t, i;
  return "bytesReceived" in n ? (t = n.bytesReceived, i = e.bytesReceived) : "bytesSent" in n && (t = n.bytesSent, i = e.bytesSent), t === void 0 || i === void 0 || n.timestamp === void 0 || e.timestamp === void 0 ? 0 : (t - i) * 8 * 1e3 / (n.timestamp - e.timestamp);
}
class ul extends E {
  constructor(e, t, i, s, r) {
    super(e, i, r), this.timeSyncLoop = () => {
      var a;
      if (this.listenerCount(I.TimeSyncUpdate) === 0) {
        this.timeSyncHandle = void 0;
        return;
      }
      this.timeSyncHandle = requestAnimationFrame(this.timeSyncLoop);
      const o = (a = this.receiver) === null || a === void 0 ? void 0 : a.getSynchronizationSources()[0];
      if (o) {
        const c = o.timestamp,
          d = o.rtpTimestamp;
        d && this.rtpTimestamp !== d && (this.emit(I.TimeSyncUpdate, {
          timestamp: c,
          rtpTimestamp: d
        }), this.rtpTimestamp = d);
      }
    }, this.onTimeSyncListenerAdded = a => {
      a === I.TimeSyncUpdate && this.timeSyncHandle === void 0 && (this.timeSyncHandle = requestAnimationFrame(this.timeSyncLoop));
    }, this.sid = t, this.receiver = s;
  }
  get isLocal() {
    return !1;
  }
  setMuted(e) {
    this.isMuted !== e && (this.isMuted = e, this._mediaStreamTrack.enabled = !e, this.emit(e ? I.Muted : I.Unmuted, this));
  }
  setMediaStream(e) {
    this.mediaStream = e;
    const t = i => {
      i.track === this._mediaStreamTrack && (e.removeEventListener("removetrack", t), this.receiver && "playoutDelayHint" in this.receiver && (this.receiver.playoutDelayHint = void 0), this.receiver = void 0, this._currentBitrate = 0, this.emit(I.Ended, this));
    };
    e.addEventListener("removetrack", t);
  }
  start() {
    this.startMonitor(), super.enable();
  }
  stop() {
    this.stopMonitor(), super.disable();
  }
  getRTCStatsReport() {
    return p(this, void 0, void 0, function* () {
      var e;
      return !((e = this.receiver) === null || e === void 0) && e.getStats ? yield this.receiver.getStats() : void 0;
    });
  }
  setPlayoutDelay(e) {
    this.receiver ? "playoutDelayHint" in this.receiver ? this.receiver.playoutDelayHint = e : this.log.warn("Playout delay not supported in this browser") : this.log.warn("Cannot set playout delay, track already ended");
  }
  getPlayoutDelay() {
    if (this.receiver) {
      if ("playoutDelayHint" in this.receiver) return this.receiver.playoutDelayHint;
      this.log.warn("Playout delay not supported in this browser");
    } else this.log.warn("Cannot get playout delay, track already ended");
    return 0;
  }
  startMonitor() {
    this.monitorInterval || (this.monitorInterval = setInterval(() => this.monitorReceiver(), ma)), Um() && this.registerTimeSyncUpdate();
  }
  stopMonitor() {
    super.stopMonitor(), this.off("newListener", this.onTimeSyncListenerAdded);
  }
  registerTimeSyncUpdate() {
    const e = this;
    e.off("newListener", this.onTimeSyncListenerAdded), e.on("newListener", this.onTimeSyncListenerAdded), this.timeSyncHandle === void 0 && this.timeSyncLoop();
  }
}
const Ls = 100;
class pa extends ul {
  constructor(e, t, i, s, r) {
    super(e, t, E.Kind.Video, i, r), this.elementInfos = [], this.monitorReceiver = () => p(this, void 0, void 0, function* () {
      if (!this.receiver) {
        this._currentBitrate = 0;
        return;
      }
      const a = yield this.getReceiverStats();
      a && this.prevStats && this.receiver && (this._currentBitrate = cs(a, this.prevStats)), this.prevStats = a;
    }), this.debouncedHandleResize = ha(() => {
      this.updateDimensions();
    }, Ls), this.adaptiveStreamSettings = s;
  }
  get isAdaptiveStream() {
    return this.adaptiveStreamSettings !== void 0;
  }
  lookupFrameMetadata(e) {
    let t = e.rtpTimestamp;
    var i;
    return (i = this.frameMetadataExtractor) === null || i === void 0 ? void 0 : i.lookupMetadata(t);
  }
  setStreamState(e) {
    super.setStreamState(e), this.log.debug("setStreamState", e), this.isAdaptiveStream && e === E.StreamState.Active && this.updateVisibility();
  }
  get mediaStreamTrack() {
    return this._mediaStreamTrack;
  }
  setMuted(e) {
    super.setMuted(e), this.attachedElements.forEach(t => {
      e ? mi(this._mediaStreamTrack, t) : di(this._mediaStreamTrack, t);
    });
  }
  attach(e) {
    if (e ? super.attach(e) : e = super.attach(), this.adaptiveStreamSettings && this.elementInfos.find(t => t.element === e) === void 0) {
      const t = new Ap(e);
      this.observeElementInfo(t);
    }
    return e;
  }
  observeElementInfo(e) {
    this.adaptiveStreamSettings && this.elementInfos.find(t => t === e) === void 0 ? (e.handleResize = () => {
      this.debouncedHandleResize();
    }, e.handleVisibilityChanged = () => {
      this.updateVisibility();
    }, this.elementInfos.push(e), e.observe(), this.debouncedHandleResize(), this.updateVisibility()) : this.log.warn("visibility resize observer not triggered", this.logContext);
  }
  stopObservingElementInfo(e) {
    if (!this.isAdaptiveStream) {
      this.log.warn("stopObservingElementInfo ignored", this.logContext);
      return;
    }
    const t = this.elementInfos.filter(i => i === e);
    for (const i of t) i.stopObserving();
    this.elementInfos = this.elementInfos.filter(i => i !== e), this.updateVisibility(), this.debouncedHandleResize();
  }
  detach(e) {
    if (e) return this.stopObservingElement(e), super.detach(e);
    const t = super.detach();
    for (const i of t) this.stopObservingElement(i);
    return t;
  }
  getDecoderImplementation() {
    var e;
    return (e = this.prevStats) === null || e === void 0 ? void 0 : e.decoderImplementation;
  }
  getReceiverStats() {
    return p(this, void 0, void 0, function* () {
      if (!this.receiver || !this.receiver.getStats) return;
      const e = yield this.receiver.getStats();
      let t,
        i = "",
        s = new Map();
      return e.forEach(r => {
        r.type === "inbound-rtp" ? (i = r.codecId, t = {
          type: "video",
          streamId: r.id,
          framesDecoded: r.framesDecoded,
          framesDropped: r.framesDropped,
          framesReceived: r.framesReceived,
          packetsReceived: r.packetsReceived,
          packetsLost: r.packetsLost,
          frameWidth: r.frameWidth,
          frameHeight: r.frameHeight,
          pliCount: r.pliCount,
          firCount: r.firCount,
          nackCount: r.nackCount,
          jitter: r.jitter,
          timestamp: r.timestamp,
          bytesReceived: r.bytesReceived,
          decoderImplementation: r.decoderImplementation
        }) : r.type === "codec" && s.set(r.id, r);
      }), t && i !== "" && s.get(i) && (t.mimeType = s.get(i).mimeType), t;
    });
  }
  stopObservingElement(e) {
    const t = this.elementInfos.filter(i => i.element === e);
    for (const i of t) this.stopObservingElementInfo(i);
  }
  handleAppVisibilityChanged() {
    const e = Object.create(null, {
      handleAppVisibilityChanged: {
        get: () => super.handleAppVisibilityChanged
      }
    });
    return p(this, void 0, void 0, function* () {
      yield e.handleAppVisibilityChanged.call(this), this.isAdaptiveStream && this.updateVisibility();
    });
  }
  updateVisibility(e) {
    var t, i;
    const s = this.elementInfos.reduce((c, d) => Math.max(c, d.visibilityChangedAt || 0), 0),
      r = !((i = (t = this.adaptiveStreamSettings) === null || t === void 0 ? void 0 : t.pauseVideoInBackground) !== null && i !== void 0) || i ? this.isInBackground : !1,
      a = this.elementInfos.some(c => c.pictureInPicture),
      o = this.elementInfos.some(c => c.visible) && !r || a;
    if (!(this.lastVisible === o && !e)) {
      if (!o && Date.now() - s < Ls) {
        Y.setTimeout(() => {
          this.updateVisibility();
        }, Ls);
        return;
      }
      this.lastVisible = o, this.emit(I.VisibilityChanged, o, this);
    }
  }
  updateDimensions() {
    var e, t;
    let i = 0,
      s = 0;
    const r = this.getPixelDensity();
    for (const a of this.elementInfos) {
      const o = a.width() * r,
        c = a.height() * r;
      o + c > i + s && (i = o, s = c);
    }
    ((e = this.lastDimensions) === null || e === void 0 ? void 0 : e.width) === i && ((t = this.lastDimensions) === null || t === void 0 ? void 0 : t.height) === s || (this.lastDimensions = {
      width: i,
      height: s
    }, this.emit(I.VideoDimensionsChanged, this.lastDimensions, this));
  }
  getPixelDensity() {
    var e;
    const t = (e = this.adaptiveStreamSettings) === null || e === void 0 ? void 0 : e.pixelDensity;
    return t === "screen" ? uo() : t || (uo() > 2 ? 2 : 1);
  }
}
class Ap {
  get visible() {
    return this.isPiP || this.isIntersecting;
  }
  get pictureInPicture() {
    return this.isPiP;
  }
  constructor(e, t) {
    this.onVisibilityChanged = i => {
      var s;
      const r = i.target,
        a = i.isIntersecting;
      r === this.element && (this.isIntersecting = a, this.isPiP = Ui(this.element), this.visibilityChangedAt = Date.now(), (s = this.handleVisibilityChanged) === null || s === void 0 || s.call(this));
    }, this.onEnterPiP = () => {
      var i, s;
      (s = (i = window.documentPictureInPicture) === null || i === void 0 ? void 0 : i.window) === null || s === void 0 || s.addEventListener("pagehide", this.onLeavePiP), queueMicrotask(() => {
        requestAnimationFrame(() => {
          var r;
          this.isPiP = Ui(this.element), (r = this.handleVisibilityChanged) === null || r === void 0 || r.call(this);
        });
      });
    }, this.onLeavePiP = () => {
      var i;
      this.isPiP = Ui(this.element), (i = this.handleVisibilityChanged) === null || i === void 0 || i.call(this);
    }, this.element = e, this.isIntersecting = t ?? Ir(e), this.isPiP = Oe() && Ui(e), this.visibilityChangedAt = 0;
  }
  width() {
    return this.element.clientWidth;
  }
  height() {
    return this.element.clientHeight;
  }
  observe() {
    var e, t, i;
    this.isIntersecting = Ir(this.element), this.isPiP = Ui(this.element), this.element.handleResize = () => {
      var s;
      (s = this.handleResize) === null || s === void 0 || s.call(this);
    }, this.element.handleVisibilityChanged = this.onVisibilityChanged, mo().observe(this.element), ho().observe(this.element), this.element.addEventListener("enterpictureinpicture", this.onEnterPiP), this.element.addEventListener("leavepictureinpicture", this.onLeavePiP), (e = window.documentPictureInPicture) === null || e === void 0 || e.addEventListener("enter", this.onEnterPiP), (i = (t = window.documentPictureInPicture) === null || t === void 0 ? void 0 : t.window) === null || i === void 0 || i.addEventListener("pagehide", this.onLeavePiP);
  }
  stopObserving() {
    var e, t, i, s, r;
    (e = mo()) === null || e === void 0 || e.unobserve(this.element), (t = ho()) === null || t === void 0 || t.unobserve(this.element), this.element.removeEventListener("enterpictureinpicture", this.onEnterPiP), this.element.removeEventListener("leavepictureinpicture", this.onLeavePiP), (i = window.documentPictureInPicture) === null || i === void 0 || i.removeEventListener("enter", this.onEnterPiP), (r = (s = window.documentPictureInPicture) === null || s === void 0 ? void 0 : s.window) === null || r === void 0 || r.removeEventListener("pagehide", this.onLeavePiP);
  }
}
function Ui(n) {
  var e;
  if (document.pictureInPictureElement === n) return !0;
  const t = (e = window.documentPictureInPicture) === null || e === void 0 ? void 0 : e.window;
  return t ? Op(n.ownerDocument, t) && Ir(n, t) : !1;
}
function Op(n, e) {
  var t, i, s;
  if (((t = n.defaultView) === null || t === void 0 ? void 0 : t.top) === e) return !0;
  let r = n;
  for (; r;) {
    if (r === e.document) return !0;
    try {
      r = (s = (i = r.defaultView) === null || i === void 0 ? void 0 : i.frameElement) === null || s === void 0 ? void 0 : s.ownerDocument;
    } catch {
      return !1;
    }
  }
  return !1;
}
function Ir(n, e) {
  const t = e || window;
  let i = n.offsetTop,
    s = n.offsetLeft;
  const r = n.offsetWidth,
    a = n.offsetHeight,
    o = n,
    c = o.hidden,
    d = getComputedStyle(n),
    l = d.display;
  for (; n.offsetParent;) n = n.offsetParent, i += n.offsetTop, s += n.offsetLeft;
  return i < t.pageYOffset + t.innerHeight && s < t.pageXOffset + t.innerWidth && i + a > t.pageYOffset && s + r > t.pageXOffset && !c && l !== "none";
}
class Ht extends Ue.EventEmitter {
  get logContext() {
    var e, t;
    return {
      room: (e = this.room) === null || e === void 0 ? void 0 : e.name,
      participant: (t = this.room) === null || t === void 0 ? void 0 : t.localParticipant.identity
    };
  }
  constructor(e, t) {
    super(), this.decryptDataRequests = new Map(), this.encryptDataRequests = new Map(), this.log = ke(re.E2EE, () => this.logContext), this.onWorkerMessage = i => {
      var s, r;
      const a = i.data,
        o = a.kind,
        c = a.data;
      switch (o) {
        case "error":
          if (c.uuid) {
            const u = this.decryptDataRequests.get(c.uuid);
            if (u?.reject) {
              u.reject(c.error);
              break;
            }
            const h = this.encryptDataRequests.get(c.uuid);
            if (h?.reject) {
              h.reject(c.error);
              break;
            }
          }
          this.log.error(c.error.message), this.emit(Ct.EncryptionError, c.error, c.participantIdentity);
          break;
        case "initAck":
          c.enabled && this.keyProvider.getKeys().forEach(u => {
            this.postKey(u, !1);
          });
          break;
        case "enable":
          if (c.enabled && this.keyProvider.getKeys().forEach(u => {
            this.postKey(u, !1);
          }), this.encryptionEnabled !== c.enabled && c.participantIdentity === ((s = this.room) === null || s === void 0 ? void 0 : s.localParticipant.identity)) this.emit(Ct.ParticipantEncryptionStatusChanged, c.enabled, this.room.localParticipant), this.encryptionEnabled = c.enabled;else if (c.participantIdentity) {
            const u = (r = this.room) === null || r === void 0 ? void 0 : r.getParticipantByIdentity(c.participantIdentity);
            if (!u) throw TypeError("couldn't set encryption status, participant not found".concat(c.participantIdentity));
            this.emit(Ct.ParticipantEncryptionStatusChanged, c.enabled, u);
          }
          break;
        case "ratchetKey":
          this.keyProvider.emit(It.KeyRatcheted, c.ratchetResult, c.participantIdentity, c.keyIndex);
          break;
        case "decryptDataResponse":
          const d = this.decryptDataRequests.get(c.uuid);
          d?.resolve && d.resolve(c);
          break;
        case "encryptDataResponse":
          const l = this.encryptDataRequests.get(c.uuid);
          l?.resolve && l.resolve(c);
          break;
        case "packetTrailerMetadata":
          this.handleFrameMetadata(c.trackId, c.rtpTimestamp, c.ssrc, c.metadata);
          break;
        case "log":
          Ei[c.level](c.msg, c.context);
          break;
      }
    }, this.onWorkerError = i => {
      this.log.error("e2ee worker encountered an error:", {
        error: i.error
      }), this.emit(Ct.EncryptionError, i.error, void 0);
    }, this.keyProvider = e.keyProvider, this.worker = e.worker, this.encryptionEnabled = !1, this.dataChannelEncryptionEnabled = t;
  }
  get isEnabled() {
    return this.encryptionEnabled;
  }
  get isDataChannelEncryptionEnabled() {
    return this.isEnabled && this.dataChannelEncryptionEnabled;
  }
  setup(e) {
    if (!Ep()) throw new ca("tried to setup end-to-end encryption on an unsupported browser");
    if (this.log.info("setting up e2ee"), e !== this.room) {
      this.room = e, this.setupEventListeners(e, this.keyProvider);
      const t = {
        kind: "init",
        data: {
          keyProviderOptions: this.keyProvider.getOptions(),
          loglevel: Ei.getLevel()
        }
      };
      this.worker && (this.log.info("initializing worker", {
        worker: this.worker
      }), this.worker.onmessage = this.onWorkerMessage, this.worker.onerror = this.onWorkerError, this.worker.postMessage(t), this.subscribeToLogLevelChanges());
    }
  }
  subscribeToLogLevelChanges() {
    var e;
    (e = this.unsubscribeLogLevel) === null || e === void 0 || e.call(this);
    let t;
    if (Ht.disposeRegistry) {
      const i = new WeakRef(this.worker);
      t = Ya(s => {
        const r = i.deref();
        if (!r) {
          t?.();
          return;
        }
        r.postMessage({
          kind: "setLogLevel",
          data: {
            level: s
          }
        });
      }), Ht.disposeRegistry.register(this, t, this);
    } else {
      const i = this.worker;
      t = Ya(s => {
        i.postMessage({
          kind: "setLogLevel",
          data: {
            level: s
          }
        });
      });
    }
    this.unsubscribeLogLevel = t;
  }
  dispose() {
    var e, t, i;
    (e = this.unsubscribeLogLevel) === null || e === void 0 || e.call(this), this.unsubscribeLogLevel = void 0, Ht.disposeRegistry && Ht.disposeRegistry.unregister(this);
    const s = new Rp("E2EEManager disposed", Hn.InternalError);
    for (const r of [...this.encryptDataRequests.values()]) (t = r.reject) === null || t === void 0 || t.call(r, s);
    for (const r of [...this.decryptDataRequests.values()]) (i = r.reject) === null || i === void 0 || i.call(r, s);
    this.worker && (this.worker.onmessage = null, this.worker.onerror = null), this.removeAllListeners();
  }
  setParticipantCryptorEnabled(e, t) {
    this.log.debug("set e2ee to ".concat(e, " for participant ").concat(t)), this.postEnable(e, t);
  }
  setSifTrailer(e) {
    !e || e.length === 0 ? this.log.warn("ignoring server sent trailer as it's empty") : this.postSifTrailer(e);
  }
  handleFrameMetadata(e, t, i, s) {
    if (this.room) {
      for (const r of [this.room.localParticipant, ...this.room.remoteParticipants.values()]) for (const a of r.trackPublications.values()) if (a.track && a.track.mediaStreamID === e && a.track instanceof pa && a.track.frameMetadataExtractor) {
        a.track.frameMetadataExtractor.storeMetadata(t, i, s);
        return;
      }
    }
  }
  setupEngine(e) {
    e.on(P.RTPVideoMapUpdate, t => {
      this.postRTPMap(t);
    });
  }
  setupEventListeners(e, t) {
    e.on(w.TrackPublished, (i, s) => this.setParticipantCryptorEnabledForPublication(i, s.identity)), e.on(w.ConnectionStateChanged, i => {
      i === K.Connected && e.remoteParticipants.forEach(s => {
        s.trackPublications.forEach(r => {
          this.setParticipantCryptorEnabledForPublication(r, s.identity);
        });
      });
    }).on(w.TrackUnsubscribed, (i, s, r) => {
      var a;
      const o = {
        kind: "removeTransform",
        data: {
          participantIdentity: r.identity,
          trackId: i.mediaStreamID
        }
      };
      (a = this.worker) === null || a === void 0 || a.postMessage(o);
    }).on(w.TrackSubscribed, (i, s, r) => {
      this.setupE2EEReceiver(i, r.identity, s.trackInfo);
    }).on(w.SignalConnected, () => {
      if (!this.room) throw new TypeError("expected room to be present on signal connect");
      const i = t.getLatestManuallySetKeyIndex();
      t.getKeys().forEach(s => {
        var r;
        this.postKey(s, i === ((r = s.keyIndex) !== null && r !== void 0 ? r : 0));
      }), this.setParticipantCryptorEnabled(this.room.localParticipant.isE2EEEnabled, this.room.localParticipant.identity);
    }), e.localParticipant.on(A.LocalSenderCreated, (i, s) => p(this, void 0, void 0, function* () {
      this.setupE2EESender(s, i);
    })), e.localParticipant.on(A.LocalTrackPublished, i => {
      if (!yt(i.track) || !sn()) return;
      const s = {
        kind: "updateCodec",
        data: {
          trackId: i.track.mediaStreamID,
          codec: Wi(i.trackInfo.codecs[0].mimeType),
          participantIdentity: this.room.localParticipant.identity,
          hasPacketTrailer: !1
        }
      };
      this.worker.postMessage(s);
    }), t.on(It.SetKey, (i, s) => this.postKey(i, s ?? !0)).on(It.RatchetRequest, (i, s) => this.postRatchetRequest(i, s));
  }
  encryptData(e) {
    return p(this, void 0, void 0, function* () {
      if (!this.worker) throw Error("could not encrypt data, worker is missing");
      const t = crypto.randomUUID(),
        i = {
          kind: "encryptDataRequest",
          data: {
            uuid: t,
            payload: e,
            participantIdentity: this.room.localParticipant.identity
          }
        },
        s = new we();
      return s.onFinally = () => {
        this.encryptDataRequests.delete(t);
      }, this.encryptDataRequests.set(t, s), this.worker.postMessage(i), s.promise;
    });
  }
  handleEncryptedData(e, t, i, s) {
    if (!this.worker) throw Error("could not handle encrypted data, worker is missing");
    const r = crypto.randomUUID(),
      a = {
        kind: "decryptDataRequest",
        data: {
          uuid: r,
          payload: e,
          iv: t,
          participantIdentity: i,
          keyIndex: s
        }
      },
      o = new we();
    return o.onFinally = () => {
      this.decryptDataRequests.delete(r);
    }, this.decryptDataRequests.set(r, o), this.worker.postMessage(a), o.promise;
  }
  postRatchetRequest(e, t) {
    if (!this.worker) throw Error("could not ratchet key, worker is missing");
    const i = {
      kind: "ratchetRequest",
      data: {
        participantIdentity: e,
        keyIndex: t
      }
    };
    this.worker.postMessage(i);
  }
  postKey(e, t) {
    let i = e.key,
      s = e.participantIdentity,
      r = e.keyIndex;
    var a;
    if (!this.worker) throw Error("could not set key, worker is missing");
    const o = {
      kind: "setKey",
      data: {
        participantIdentity: s,
        isPublisher: s === ((a = this.room) === null || a === void 0 ? void 0 : a.localParticipant.identity),
        key: i,
        keyIndex: r,
        updateCurrentKeyIndex: t
      }
    };
    this.worker.postMessage(o);
  }
  postEnable(e, t) {
    if (this.worker) {
      const i = {
        kind: "enable",
        data: {
          enabled: e,
          participantIdentity: t
        }
      };
      this.worker.postMessage(i);
    } else throw new ReferenceError("failed to enable e2ee, worker is not ready");
  }
  postRTPMap(e) {
    var t;
    if (!this.worker) throw TypeError("could not post rtp map, worker is missing");
    if (!(!((t = this.room) === null || t === void 0) && t.localParticipant.identity)) throw TypeError("could not post rtp map, local participant identity is missing");
    const i = {
      kind: "setRTPMap",
      data: {
        map: e,
        participantIdentity: this.room.localParticipant.identity
      }
    };
    this.worker.postMessage(i);
  }
  postSifTrailer(e) {
    if (!this.worker) throw Error("could not post SIF trailer, worker is missing");
    const t = {
      kind: "setSifTrailer",
      data: {
        trailer: e
      }
    };
    this.worker.postMessage(t);
  }
  setParticipantCryptorEnabledForPublication(e, t) {
    if (!e.trackInfo) {
      this.log.warn("skipping e2ee enabled update for publication without trackInfo", {
        trackSid: e.trackSid
      });
      return;
    }
    this.setParticipantCryptorEnabled(e.trackInfo.encryption !== z.NONE, t);
  }
  setupE2EEReceiver(e, t, i) {
    if (!e.receiver) return;
    if (!i?.mimeType || i.mimeType === "") throw new TypeError("MimeType missing from trackInfo, cannot set up E2EE cryptor");
    const s = e.kind === "video" && !!i.packetTrailerFeatures && i.packetTrailerFeatures.length > 0;
    this.handleReceiver(e.receiver, e.mediaStreamID, t, e.kind === "video" ? Wi(i.mimeType) : void 0, s);
  }
  setupE2EESender(e, t) {
    var i, s, r, a;
    if (!vi(e) || !t) {
      t || this.log.warn("early return because sender is not ready");
      return;
    }
    const o = yt(e),
      c = o ? (i = e.publishOptions) === null || i === void 0 ? void 0 : i.videoCodec : void 0;
    this.handleSender(t, e.mediaStreamID, c === "h264" || c === "h265" ? c : void 0, o ? (r = (s = e.publishOptions) === null || s === void 0 ? void 0 : s.frameMetadata) !== null && r !== void 0 ? r : (a = e.publishOptions) === null || a === void 0 ? void 0 : a.packetTrailer : void 0);
  }
  handleReceiver(e, t, i, s, r) {
    return p(this, void 0, void 0, function* () {
      if (this.worker) {
        if (Er()) {
          const a = {
            kind: "decode",
            participantIdentity: i,
            trackId: t,
            codec: s,
            hasPacketTrailer: r
          };
          e.transform = new RTCRtpScriptTransform(this.worker, a);
        } else {
          if (fn in e && gn in e) {
            const d = {
              kind: "updateCodec",
              data: {
                trackId: t,
                previousTrackId: e[gn],
                codec: s,
                participantIdentity: i,
                hasPacketTrailer: r
              }
            };
            this.worker.postMessage(d), e[gn] = t;
            return;
          }
          let a = e.writableStream,
            o = e.readableStream;
          if (!a || !o) {
            const d = e.createEncodedStreams();
            e.writableStream = d.writable, a = d.writable, e.readableStream = d.readable, o = d.readable;
          }
          const c = {
            kind: "decode",
            data: {
              readableStream: o,
              writableStream: a,
              trackId: t,
              codec: s,
              participantIdentity: i,
              hasPacketTrailer: r
            }
          };
          this.worker.postMessage(c, [o, a]);
        }
        e[fn] = !0, e[gn] = t;
      }
    });
  }
  handleSender(e, t, i, s) {
    var r;
    if (!(fn in e || !this.worker)) {
      if (!(!((r = this.room) === null || r === void 0) && r.localParticipant.identity) || this.room.localParticipant.identity === "") throw TypeError("local identity needs to be known in order to set up encrypted sender");
      if (Er()) {
        this.log.info("initialize script transform");
        const a = {
          kind: "encode",
          participantIdentity: this.room.localParticipant.identity,
          trackId: t,
          codec: i,
          hasPacketTrailer: Kn(s),
          packetTrailer: s
        };
        e.transform = new RTCRtpScriptTransform(this.worker, a);
      } else {
        this.log.info("initialize encoded streams");
        const a = e.createEncodedStreams(),
          o = {
            kind: "encode",
            data: {
              readableStream: a.readable,
              writableStream: a.writable,
              codec: i,
              trackId: t,
              participantIdentity: this.room.localParticipant.identity,
              hasPacketTrailer: Kn(s),
              packetTrailer: s
            }
          };
        this.worker.postMessage(o, [a.readable, a.writable]);
      }
      e[fn] = !0;
    }
  }
}
Ht.disposeRegistry = typeof FinalizationRegistry < "u" && typeof WeakRef < "u" && new FinalizationRegistry(n => {
  n();
});
const Dp = 300;
class Lp {
  constructor() {
    this.metadataMap = new Map(), this.activeSsrc = 0;
  }
  storeMetadata(e, t, i) {
    for (this.activeSsrc !== 0 && this.activeSsrc !== t && this.metadataMap.clear(), this.activeSsrc = t; this.metadataMap.size >= Dp;) {
      const s = this.metadataMap.keys().next().value;
      this.metadataMap.delete(s);
    }
    this.metadataMap.set(e, i);
  }
  lookupMetadata(e) {
    return this.metadataMap.get(e);
  }
  dispose() {
    this.metadataMap.clear(), this.activeSsrc = 0;
  }
}
class Np {
  constructor(e) {
    this.extractors = new Map(), this.workerPipelines = new Map(), this.onWorkerMessage = t => {
      const i = t.data;
      if (i.kind === "metadata") {
        const s = this.extractors.get(i.data.trackId);
        s && s.storeMetadata(i.data.rtpTimestamp, i.data.ssrc, i.data.metadata);
      }
    }, this.onWorkerError = t => {
      W.error("frame metadata worker encountered an error:", {
        error: t.error
      });
    }, this.worker = e?.worker;
  }
  setup(e) {
    e !== this.room && (this.room = e, this.worker && (this.worker.onmessage = this.onWorkerMessage, this.worker.onerror = this.onWorkerError, this.worker.postMessage({
      kind: "init"
    })), e.on(w.TrackSubscribed, (t, i, s) => {
      t.kind === "video" && this.setupReceiver(t, i.trackInfo);
    }).on(w.TrackUnsubscribed, t => {
      this.teardownTrack(t);
    }).on(w.Disconnected, () => {
      this.cleanup();
    }));
  }
  setupReceiver(e, t) {
    var i, s, r;
    const a = e.receiver;
    if (!a) return;
    if (!(!!t?.packetTrailerFeatures && t.packetTrailerFeatures.length > 0)) {
      !((i = this.room) === null || i === void 0) && i.hasE2EESetup || this.setupPassthroughReceiver(a, e.mediaStreamID);
      return;
    }
    if (!on(this.worker ? {
      worker: this.worker
    } : void 0) && !(!((s = this.room) === null || s === void 0) && s.hasE2EESetup)) {
      W.warn("frame metadata transform not supported; skipping extraction");
      return;
    }
    const c = new Lp(),
      d = e.mediaStreamID;
    this.extractors.set(d, c), e.frameMetadataExtractor = c, !(!((r = this.room) === null || r === void 0) && r.hasE2EESetup) && this.setupWorkerReceiver(a, d, !0);
  }
  setupPassthroughReceiver(e, t) {
    if (an()) {
      "transform" in e && (e.transform = null);
      return;
    }
    if (this.worker && on({
      worker: this.worker
    }) && !this.workerPipelines.has(e)) {
      this.setupWorkerReceiver(e, t, !1);
      return;
    }
    this.worker && this.workerPipelines.has(e) && this.setupWorkerReceiver(e, t, !1);
  }
  setupWorkerReceiver(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    const s = this.worker;
    if (!s) return;
    if (an()) {
      e.transform = new RTCRtpScriptTransform(s, {
        kind: "decode",
        trackId: t
      });
      return;
    }
    const r = this.workerPipelines.get(e);
    if (r) {
      const c = {
        kind: "updateTrackId",
        data: {
          oldTrackId: r,
          newTrackId: t,
          hasPacketTrailer: i
        }
      };
      s.postMessage(c), this.workerPipelines.set(e, t);
      return;
    }
    if (!("createEncodedStreams" in e)) {
      W.warn("createEncodedStreams not supported");
      return;
    }
    let a;
    try {
      a = e.createEncodedStreams();
    } catch (c) {
      W.warn("failed to create encoded streams", {
        error: c
      });
      return;
    }
    const o = {
      kind: "decode",
      data: {
        readableStream: a.readable,
        writableStream: a.writable,
        trackId: t,
        hasPacketTrailer: i
      }
    };
    s.postMessage(o, [a.readable, a.writable]), this.workerPipelines.set(e, t);
  }
  teardownTrack(e) {
    const t = e.mediaStreamID,
      i = this.extractors.get(t);
    i && (i.dispose(), this.extractors.delete(t)), e instanceof pa && (e.frameMetadataExtractor = void 0);
  }
  cleanup() {
    var e;
    for (const t of this.extractors.values()) t.dispose();
    this.extractors.clear(), this.workerPipelines.clear(), (e = this.worker) === null || e === void 0 || e.terminate();
  }
}
const xp = 500,
  Up = 15e3;
class yi {
  constructor() {
    this.failedConnectionAttempts = new Map(), this.backOffPromises = new Map();
  }
  static getInstance() {
    return this._instance || (this._instance = new yi()), this._instance;
  }
  addFailedConnectionAttempt(e) {
    var t;
    const i = new URL(e),
      s = Is(i);
    if (!s) return;
    let r = (t = this.failedConnectionAttempts.get(s)) !== null && t !== void 0 ? t : 0;
    this.failedConnectionAttempts.set(s, r + 1), this.backOffPromises.set(s, Ce(Math.min(xp * Math.pow(2, r), Up)));
  }
  getBackOffPromise(e) {
    const t = new URL(e),
      i = t && Is(t);
    return i && this.backOffPromises.get(i) || Promise.resolve();
  }
  resetFailedConnectionAttempts(e) {
    const t = new URL(e),
      i = t && Is(t);
    i && (this.failedConnectionAttempts.set(i, 0), this.backOffPromises.set(i, Promise.resolve()));
  }
  resetAll() {
    this.backOffPromises.clear(), this.failedConnectionAttempts.clear();
  }
}
yi._instance = null;
const Ns = "default";
class be {
  constructor() {
    this._previousDevices = [];
  }
  static getInstance() {
    return this.instance === void 0 && (this.instance = new be()), this.instance;
  }
  get previousDevices() {
    return this._previousDevices;
  }
  getDevices(e) {
    return p(this, arguments, void 0, function (t) {
      var i = this;
      let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      return function* () {
        var r;
        if (((r = be.userMediaPromiseMap) === null || r === void 0 ? void 0 : r.size) > 0) {
          W.debug("awaiting getUserMedia promise");
          try {
            t ? yield be.userMediaPromiseMap.get(t) : yield Promise.all(be.userMediaPromiseMap.values());
          } catch {
            W.warn("error waiting for media permissons");
          }
        }
        let a = yield navigator.mediaDevices.enumerateDevices();
        if (s && !($t() && i.hasDeviceInUse(t)) && (a.filter(c => c.kind === t).length === 0 || a.some(c => {
          const d = c.label === "",
            l = t ? c.kind === t : !0;
          return d && l;
        }))) {
          const c = {
              video: t !== "audioinput" && t !== "audiooutput",
              audio: t !== "videoinput" && {
                deviceId: {
                  ideal: "default"
                }
              }
            },
            d = yield navigator.mediaDevices.getUserMedia(c);
          a = yield navigator.mediaDevices.enumerateDevices(), d.getTracks().forEach(l => {
            l.stop();
          });
        }
        return i._previousDevices = a, t && (a = a.filter(o => o.kind === t)), a;
      }();
    });
  }
  normalizeDeviceId(e, t, i) {
    return p(this, void 0, void 0, function* () {
      if (t !== Ns) return t;
      const s = yield this.getDevices(e),
        r = s.find(o => o.deviceId === Ns);
      if (!r) {
        W.warn("could not reliably determine default device");
        return;
      }
      const a = s.find(o => o.deviceId !== Ns && o.groupId === (i ?? r.groupId));
      if (!a) {
        W.warn("could not reliably determine default device");
        return;
      }
      return a?.deviceId;
    });
  }
  hasDeviceInUse(e) {
    return e ? be.userMediaPromiseMap.has(e) : be.userMediaPromiseMap.size > 0;
  }
}
be.mediaDeviceKinds = ["audioinput", "audiooutput", "videoinput"];
be.userMediaPromiseMap = new Map();
const fa = 65535,
  hl = 4294967295;
class Ze {
  static u16(e) {
    return new Ze(e, fa);
  }
  static u32(e) {
    return new Ze(e, hl);
  }
  constructor(e, t) {
    if (this.value = e, e < 0) throw new Error("WrapAroundUnsignedInt: cannot faithfully represent an integer smaller than 0");
    if (t > Number.MAX_SAFE_INTEGER) throw new Error("WrapAroundUnsignedInt: cannot faithfully represent an integer bigger than MAX_SAFE_INTEGER.");
    this.maxSize = t, this.clamp();
  }
  clamp() {
    for (; this.value > this.maxSize;) this.value -= this.maxSize + 1;
    for (; this.value < 0;) this.value += this.maxSize + 1;
  }
  clone() {
    return new Ze(this.value, this.maxSize);
  }
  update(e) {
    this.value = e(this.value), this.clamp();
  }
  increment() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    this.update(t => t + e);
  }
  decrement() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    this.update(t => t - e);
  }
  getThenIncrement() {
    const e = this.value;
    return this.increment(), new Ze(e, this.maxSize);
  }
  isBefore(e) {
    const t = this.value >>> 0,
      s = (e.value >>> 0) - t >>> 0;
    return s !== 0 && s < this.maxSize + 1;
  }
}
class ki {
  static fromRtpTicks(e) {
    return new ki(e, 9e4);
  }
  static rtpRandom() {
    const e = Math.round(Math.random() * hl);
    return ki.fromRtpTicks(e);
  }
  constructor(e, t) {
    this.timestamp = Ze.u32(e), this.rateInHz = t;
  }
  asTicks() {
    return this.timestamp.value;
  }
  clone() {
    return new ki(this.timestamp.value, this.rateInHz);
  }
  wrappingAdd(e) {
    this.timestamp.increment(e);
  }
  isBefore(e) {
    return this.timestamp.isBefore(e.timestamp);
  }
}
class Ft {
  constructor(e, t, i) {
    this.epoch = t, this.base = i, this.previous = i.clone(), this.rateInHz = e;
  }
  static startingNow(e, t) {
    return new Ft(t, new Date(), e);
  }
  static startingAtTime(e, t, i) {
    return new Ft(i, e, t);
  }
  static rtpStartingNow(e) {
    return Ft.startingNow(e, 9e4);
  }
  static rtpStartingAtTime(e, t) {
    return Ft.startingAtTime(e, t, 9e4);
  }
  now() {
    return this.at(new Date());
  }
  at(e) {
    let t = e.getTime() - this.epoch.getTime(),
      i = Ft.durationInMsToTicks(t, this.rateInHz),
      s = this.base.clone();
    return s.wrappingAdd(i), s.isBefore(this.previous) && (s = this.previous), this.previous = s.clone(), s.clone();
  }
  static durationInMsToTicks(e, t) {
    let s = (e * 1e6 * t + 5e8) / 1e9;
    return Math.round(s);
  }
}
function ga(n) {
  if (n instanceof DataView) return n;
  if (n instanceof ArrayBuffer) return new DataView(n);
  if (n instanceof Uint8Array) return new DataView(n.buffer, n.byteOffset, n.byteLength);
  throw new Error("Error coercing ".concat(n, " to DataView - input was not DataView, ArrayBuffer, or Uint8Array."));
}
var Kt;
(function (n) {
  n[n.Reserved = 0] = "Reserved", n[n.TooLarge = 1] = "TooLarge";
})(Kt || (Kt = {}));
class Pi extends He {
  constructor(e, t) {
    super(19, e), this.name = "DataTrackHandleError", this.reason = t, this.reasonName = Kt[t];
  }
  isReason(e) {
    return this.reason === e;
  }
  static tooLarge() {
    return new Pi("Value too large to be a valid track handle", Kt.TooLarge);
  }
  static reserved(e) {
    return new Pi("0x".concat(e.toString(16), " is a reserved value."), Kt.Reserved);
  }
}
const Fp = {
  fromNumber(n) {
    if (n === 0) throw Pi.reserved(n);
    if (n > fa) throw Pi.tooLarge();
    return n;
  }
};
class Bp {
  constructor() {
    this.value = 0;
  }
  get() {
    return this.value += 1, this.value > fa ? null : this.value;
  }
  reset() {
    this.value = 0;
  }
}
const Gn = {
  from(n) {
    return {
      sid: n.sid,
      pubHandle: n.pubHandle,
      name: n.name,
      usesE2ee: n.encryption !== z.NONE
    };
  },
  toProtobuf(n) {
    return new es({
      sid: n.sid,
      pubHandle: n.pubHandle,
      name: n.name,
      encryption: n.usesE2ee ? z.GCM : z.NONE
    });
  }
};
var Hi;
(function (n) {
  n[n.WAITING = 0] = "WAITING", n[n.RUNNING = 1] = "RUNNING", n[n.COMPLETED = 2] = "COMPLETED";
})(Hi || (Hi = {}));
class qp {
  constructor() {
    this.pendingTasks = new Map(), this.taskMutex = new ye(), this.nextTaskIndex = 0;
  }
  run(e) {
    return p(this, void 0, void 0, function* () {
      const t = {
        id: this.nextTaskIndex++,
        enqueuedAt: Date.now(),
        status: Hi.WAITING
      };
      this.pendingTasks.set(t.id, t);
      const i = yield this.taskMutex.lock();
      try {
        return t.executedAt = Date.now(), t.status = Hi.RUNNING, yield e();
      } finally {
        t.status = Hi.COMPLETED, this.pendingTasks.delete(t.id), i();
      }
    });
  }
  flush() {
    return p(this, void 0, void 0, function* () {
      return this.run(() => p(this, void 0, void 0, function* () {}));
    });
  }
  snapshot() {
    return Array.from(this.pendingTasks.values());
  }
}
function ml(n) {
  if (n.length === 0) return new AbortController().signal;
  if (n.length === 1) return n[0];
  for (const s of n) if (s.aborted) return s;
  const e = new AbortController(),
    t = Array(n.length),
    i = () => {
      for (const s of t) s();
    };
  return n.forEach((s, r) => {
    const a = () => {
      e.abort(s.reason), i();
    };
    s.addEventListener("abort", a), t[r] = () => s.removeEventListener("abort", a);
  }), e.signal;
}
function va(n) {
  const e = new AbortController();
  return setTimeout(() => {
    e.abort(new DOMException("signal timed out after ".concat(n, " ms"), "TimeoutError"));
  }, n), e.signal;
}
const jp = ["client"];
var pl = class {
    constructor() {
      U(this, "listeners", new Map());
    }
    on(e, t) {
      let i = this.listeners.get(e);
      return i || (i = new Set(), this.listeners.set(e, i)), i.add(t), {
        off: () => {
          i.delete(t);
        }
      };
    }
    emit(e, t) {
      const i = this.listeners.get("*");
      if (i) for (const r of i) r(e, t);
      const s = this.listeners.get(e);
      if (s) for (const r of s) r(t);
    }
    clear() {
      this.listeners.clear();
    }
  },
  Ti = class extends Error {
    constructor(n, e) {
      super("non-serializable value at ".concat(n, " (").concat(e, ")")), this.path = n, this.label = e;
    }
  };
const Vp = (n, e) => Mr(n, e, new Set()),
  Mr = (n, e, t) => {
    if (n === null) return null;
    switch (typeof n) {
      case "string":
      case "boolean":
        return n;
      case "number":
        if (!Number.isFinite(n)) throw new Ti(e, Hp(n));
        return n;
      case "object":
        return Wp(n, e, t);
      default:
        throw new Ti(e, typeof n);
    }
  },
  Wp = (n, e, t) => {
    var i, s;
    if (t.has(n)) throw new Ti(e, "circular reference");
    if (Array.isArray(n)) {
      if (n.length !== Object.keys(n).length) throw new Ti(e, "sparse array or array with non-index properties");
      t.add(n);
      const o = n.map((c, d) => Mr(c, "".concat(e, "[").concat(d, "]"), t));
      return t.delete(n), o;
    }
    const r = Object.getPrototypeOf(n);
    if (r !== Object.prototype && r !== null) throw new Ti(e, (i = (s = n.constructor) === null || s === void 0 ? void 0 : s.name) !== null && i !== void 0 ? i : "object");
    t.add(n);
    const a = {};
    for (const o of Object.keys(n)) {
      const c = Mr(n[o], "".concat(e, ".").concat(o), t);
      Object.defineProperty(a, o, {
        value: c,
        enumerable: !0,
        writable: !0,
        configurable: !0
      });
    }
    return t.delete(n), a;
  },
  Hp = n => Number.isNaN(n) ? "NaN" : n > 0 ? "Infinity" : "-Infinity",
  Ar = function (n) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : new Set();
    if (n === null || typeof n != "object" || e.has(n)) return n;
    if (Array.isArray(n)) {
      e.add(n);
      const s = n.map(r => Ar(r, e));
      return e.delete(n), s;
    }
    const t = Object.getPrototypeOf(n);
    if (t !== Object.prototype && t !== null) return n;
    e.add(n);
    const i = {};
    for (const s of Object.keys(n)) {
      const r = Ar(n[s], e);
      Object.defineProperty(i, s, {
        value: r,
        enumerable: !0,
        writable: !0,
        configurable: !0
      });
    }
    return e.delete(n), i;
  },
  Ki = Symbol("machina.type"),
  To = 20;
var Kp = class {
  constructor(e) {
    U(this, "id", void 0), U(this, "initialState", void 0), U(this, Ki, "BehavioralFsm"), U(this, "states", void 0), U(this, "emitter", new pl()), U(this, "clients", new WeakMap()), U(this, "knownClients", new Set()), U(this, "childSubscriptions", []), U(this, "disposed", !1), U(this, "transitionDepth", 0), this.id = e.id, this.initialState = e.initialState, this.states = e.states, this.wrapChildLinks(), this.setupChildSubscriptions();
  }
  handle(e, t) {
    var i;
    if (this.disposed) return;
    const s = this.getOrCreateClientMeta(e);
    for (var r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) a[o - 2] = arguments[o];
    s.currentActionArgs = a;
    const c = (i = this.states[s.state]) === null || i === void 0 ? void 0 : i._child;
    if (c && c.canHandle(e, t)) {
      try {
        c.handle(e, t, ...a);
      } finally {
        s.currentActionArgs = void 0;
      }
      return;
    }
    this.handleLocally(e, t, a, s);
  }
  canHandle(e, t) {
    var i, s, r;
    if (this.disposed) return !1;
    const a = (i = (s = this.clients.get(e)) === null || s === void 0 ? void 0 : s.state) !== null && i !== void 0 ? i : this.initialState,
      o = this.states[a];
    if ((r = o?.[t]) !== null && r !== void 0 ? r : o?.["*"]) return !0;
    const c = o?._child;
    return c ? c.canHandle(e, t) : !1;
  }
  reset(e) {
    this.disposed || this.transition(e, this.initialState);
  }
  currentState(e) {
    var t;
    return (t = this.clients.get(e)) === null || t === void 0 ? void 0 : t.state;
  }
  transition(e, t) {
    if (this.disposed) return;
    const i = this.getOrCreateClientMeta(e),
      s = i.state;
    if (t !== s) {
      if (!Object.hasOwn(this.states, t)) {
        this.emitter.emit("invalidstate", {
          stateName: t,
          client: e
        });
        return;
      }
      if (this.transitionDepth++, this.transitionDepth > To) throw this.transitionDepth = 0, new Error("Max transition depth (".concat(To, ') exceeded in FSM "').concat(this.id, '". Likely an infinite _onEnter → transition loop.'));
      try {
        const r = this.states[s],
          a = this.states[t];
        if (r != null && r._onExit && typeof r._onExit == "function") {
          const l = this.buildHandlerArgs(e, "", i);
          r._onExit(l);
        }
        i.state = t;
        const o = {
          fromState: s,
          toState: t,
          client: e
        };
        this.emitter.emit("transitioning", o);
        let c;
        if (a != null && a._onEnter && typeof a._onEnter == "function") {
          const l = this.buildHandlerArgs(e, "", i);
          c = a._onEnter(l);
        }
        this.emitter.emit("transitioned", o);
        const d = a?._child;
        d && d.reset(e), this.processQueue(e, i), typeof c == "string" && i.state === t && this.transition(e, c);
      } finally {
        this.transitionDepth--;
      }
    }
  }
  compositeState(e) {
    var t;
    const i = this.clients.get(e);
    if (!i) return "";
    const s = (t = this.states[i.state]) === null || t === void 0 ? void 0 : t._child;
    if (s) {
      const r = s.compositeState(e);
      if (r) return "".concat(i.state, ".").concat(r);
    }
    return i.state;
  }
  rehydrate(e, t) {
    if (this.disposed) return;
    if (typeof t == "string") {
      this.rehydrateCompositePath(e, t);
      return;
    }
    const i = this.planSnapshotWrites(e, t);
    for (const s of i) s();
  }
  dehydrate(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    const i = this.clients.get(e);
    if (!i) return;
    const s = {
        state: i.state,
        deferred: i.deferredQueue.map(a => this.snapshotDeferredInput(a))
      },
      r = this.collectChildSnapshots(e, i.state, t);
    return r && (s.children = r), s;
  }
  planSnapshotWrites(e, t) {
    if (this.disposed) return [];
    const i = t.state,
      s = t.deferred,
      r = t.children;
    if (!Object.hasOwn(this.states, i)) throw new Error('rehydrate: unknown state "'.concat(i, '" in FSM "').concat(this.id, '". Valid states: ').concat(Object.keys(this.states).join(", ")));
    const a = [];
    if (r) for (const d of Object.keys(r)) {
      var o;
      if (!Object.hasOwn(this.states, d)) throw new Error('rehydrate: unknown state "'.concat(d, '" in FSM "').concat(this.id, '" referenced by snapshot.children.'));
      const l = (o = this.states[d]) === null || o === void 0 ? void 0 : o._child;
      if (!l) throw new Error('rehydrate: state "'.concat(d, '" in FSM "').concat(this.id, '" has no _child, but the snapshot has a children["').concat(d, '"] entry.'));
      a.push(...l.planRehydrate(e, r[d]));
    }
    const c = s.map(d => Tu({
      inputName: d.inputName,
      args: Ar(d.args)
    }, d.untilState !== void 0 ? {
      untilState: d.untilState
    } : {}));
    return a.push(() => {
      this.clients.has(e) || this.knownClients.add(new WeakRef(e)), this.clients.set(e, {
        state: i,
        deferredQueue: c
      });
    }), a;
  }
  rehydrateCompositePath(e, t) {
    const i = t.split("."),
      s = wu(i),
      r = s[0],
      a = ir(s).slice(1);
    if (!Object.hasOwn(this.states, r)) throw new Error('rehydrate: unknown state "'.concat(r, '" in FSM "').concat(this.id, '". Valid states: ').concat(Object.keys(this.states).join(", ")));
    if (a.length > 0) {
      var o;
      const c = a.join("."),
        d = (o = this.states[r]) === null || o === void 0 ? void 0 : o._child;
      if (!d) throw new Error('rehydrate: state "'.concat(r, '" in FSM "').concat(this.id, '" has no _child, but composite path "').concat(t, '" requires one.'));
      d.rehydrate(e, c);
    }
    this.clients.has(e) || this.knownClients.add(new WeakRef(e)), this.clients.set(e, {
      state: r,
      deferredQueue: []
    });
  }
  collectChildSnapshots(e, t, i) {
    const s = new Map();
    for (const o of Object.keys(this.states)) {
      var r;
      const c = (r = this.states[o]) === null || r === void 0 ? void 0 : r._child;
      if (!c) continue;
      const d = s.get(c.instance);
      d ? d.stateNames.push(o) : s.set(c.instance, {
        childLink: c,
        stateNames: [o]
      });
    }
    let a;
    for (const o of s.values()) {
      const c = o.childLink,
        d = o.stateNames,
        l = i && d.includes(t);
      if (c.instance[Ki] === "Fsm" && !l) continue;
      const u = c.dehydrate(e, l);
      if (u) {
        a ?? (a = {});
        for (const h of d) a[h] = u;
      }
    }
    return a;
  }
  snapshotDeferredInput(e) {
    let t;
    try {
      t = Vp(e.args, "args");
    } catch (s) {
      if (!(s instanceof Ti)) throw s;
      const r = e.untilState ? ' (until "'.concat(e.untilState, '")') : "";
      throw new Error('dehydrate: deferred input "'.concat(e.inputName, '"').concat(r, ' in FSM "').concat(this.id, '" has a non-serializable value at ').concat(s.path, " (").concat(s.label, ")"));
    }
    const i = {
      inputName: e.inputName,
      args: t
    };
    return e.untilState !== void 0 && (i.untilState = e.untilState), i;
  }
  on(e, t) {
    return this.disposed ? {
      off() {}
    } : this.emitter.on(e, t);
  }
  emit(e, t) {
    this.disposed || this.emitter.emit(e, t);
  }
  dispose(e) {
    this.disposed = !0;
    for (const i of this.childSubscriptions) i.off();
    if (!(e != null && e.preserveChildren)) {
      const i = new Set();
      for (const s of Object.keys(this.states)) {
        var t;
        const r = (t = this.states[s]) === null || t === void 0 ? void 0 : t._child;
        r && !i.has(r.instance) && (i.add(r.instance), r.dispose());
      }
    }
    this.emitter.clear();
  }
  wrapChildLinks() {
    for (const e of Object.keys(this.states)) {
      const t = this.states[e],
        i = t?._child;
      if (i) {
        if (typeof i != "object") throw new Error('State "'.concat(e, '"._child: expected an Fsm or BehavioralFsm instance, got ').concat(String(i)));
        if (!(Ki in i)) throw new Error('State "'.concat(e, '"._child: expected an Fsm or BehavioralFsm instance, got a plain object'));
        t._child = Gp(i);
      }
    }
  }
  setupChildSubscriptions() {
    const e = new Set();
    for (const i of Object.keys(this.states)) {
      var t;
      const s = (t = this.states[i]) === null || t === void 0 ? void 0 : t._child;
      if (!s || e.has(s.instance)) continue;
      e.add(s.instance);
      const r = s.onAny((a, o) => {
        if (a === "nohandler") {
          var c;
          const u = o;
          if (u.client !== void 0) this.bubbleNohandler(u.client, s, u.inputName, (c = u.args) !== null && c !== void 0 ? c : []);else for (const h of this.knownClients) {
            var d;
            const m = h.deref();
            if (m === void 0) {
              this.knownClients.delete(h);
              continue;
            }
            this.bubbleNohandler(m, s, u.inputName, (d = u.args) !== null && d !== void 0 ? d : []);
          }
          return;
        }
        const l = o;
        if (l && typeof l == "object" && "client" in l) this.isChildActiveForClient(l.client, s) && this.emitter.emit(a, o);else for (const u of this.knownClients) {
          const h = u.deref();
          if (!h) {
            this.knownClients.delete(u);
            continue;
          }
          if (this.isChildActiveForClient(h, s)) {
            this.emitter.emit(a, o);
            break;
          }
        }
      });
      this.childSubscriptions.push(r);
    }
  }
  bubbleNohandler(e, t, i, s) {
    if (!this.isChildActiveForClient(e, t)) return;
    const r = this.clients.get(e);
    r.currentActionArgs = s, this.handleLocally(e, i, s, r);
  }
  isChildActiveForClient(e, t) {
    var i;
    const s = this.clients.get(e);
    return s ? ((i = this.states[s.state]) === null || i === void 0 || (i = i._child) === null || i === void 0 ? void 0 : i.instance) === t.instance : !1;
  }
  handleLocally(e, t, i, s) {
    var r;
    const a = this.states[s.state],
      o = (r = a?.[t]) !== null && r !== void 0 ? r : a?.["*"];
    if (!o) {
      this.emitter.emit("nohandler", {
        inputName: t,
        args: i,
        client: e
      }), s.currentActionArgs = void 0;
      return;
    }
    try {
      this.emitter.emit("handling", {
        inputName: t,
        client: e
      });
      const c = this.buildHandlerArgs(e, t, s);
      let d;
      typeof o == "string" ? d = o : typeof o == "function" && (d = o(c, ...i)), this.emitter.emit("handled", {
        inputName: t,
        client: e
      }), typeof d == "string" && this.transition(e, d);
    } finally {
      s.currentActionArgs = void 0;
    }
  }
  getOrCreateClientMeta(e) {
    let t = this.clients.get(e);
    return t || (t = {
      state: void 0,
      deferredQueue: []
    }, this.clients.set(e, t), this.knownClients.add(new WeakRef(e)), this.transition(e, this.initialState), t);
  }
  buildHandlerArgs(e, t, i) {
    return {
      ctx: e,
      inputName: t,
      defer: s => {
        if (!i.currentActionArgs) return;
        const r = {
          inputName: t,
          args: [...i.currentActionArgs],
          untilState: s?.until
        };
        i.deferredQueue.push(r), this.emitter.emit("deferred", {
          inputName: t,
          client: e
        });
      },
      emit: (s, r) => {
        this.emitter.emit(s, r);
      }
    };
  }
  processQueue(e, t) {
    const i = [],
      s = [];
    for (const r of t.deferredQueue) r.untilState === void 0 || r.untilState === t.state ? i.push(r) : s.push(r);
    t.deferredQueue = s;
    for (const r of i) this.handle(e, r.inputName, ...r.args);
  }
};
function Gp(n) {
  if (!n || typeof n != "object") throw new Error("createChildLink: expected an Fsm or BehavioralFsm instance, got ".concat(String(n)));
  const e = n[Ki];
  if (e === "BehavioralFsm") return {
    instance: n,
    canHandle(t, i) {
      return n.canHandle(t, i);
    },
    handle(t, i) {
      for (var s = arguments.length, r = new Array(s > 2 ? s - 2 : 0), a = 2; a < s; a++) r[a - 2] = arguments[a];
      n.handle(t, i, ...r);
    },
    reset(t) {
      n.transition(t, n.initialState);
    },
    onAny(t) {
      return n.on("*", t);
    },
    compositeState(t) {
      return n.compositeState(t);
    },
    rehydrate(t, i) {
      n.rehydrate(t, i);
    },
    dehydrate(t, i) {
      return n.dehydrate(t, i);
    },
    planRehydrate(t, i) {
      return n.planSnapshotWrites(t, i);
    },
    dispose() {
      n.dispose();
    }
  };
  if (e === "Fsm") return {
    instance: n,
    canHandle(t, i) {
      return n.canHandle(i);
    },
    handle(t, i) {
      for (var s = arguments.length, r = new Array(s > 2 ? s - 2 : 0), a = 2; a < s; a++) r[a - 2] = arguments[a];
      n.handle(i, ...r);
    },
    reset(t) {
      n.reset();
    },
    onAny(t) {
      return n.on("*", t);
    },
    compositeState(t) {
      return n.compositeState();
    },
    rehydrate(t, i) {
      throw new Error("rehydrate: cannot rehydrate an Fsm child. Fsm owns its own context; rehydrate is only valid for BehavioralFsm hierarchies.");
    },
    dehydrate(t, i) {
      throw new Error("dehydrate: cannot dehydrate an Fsm child. Fsm owns its own context; dehydrate is only valid for BehavioralFsm hierarchies.");
    },
    planRehydrate(t, i) {
      throw new Error("rehydrate: cannot rehydrate an Fsm child. Fsm owns its own context; rehydrate is only valid for BehavioralFsm hierarchies.");
    },
    dispose() {
      n.dispose();
    }
  };
  throw new Error("createChildLink: expected an Fsm or BehavioralFsm instance, got [MACHINA_TYPE] = ".concat(String(e ?? "undefined")));
}
var zp = class {
  constructor(e) {
    var t;
    U(this, "id", void 0), U(this, "initialState", void 0), U(this, Ki, "Fsm"), U(this, "states", void 0), U(this, "bfsm", void 0), U(this, "context", void 0), U(this, "emitter", new pl()), U(this, "disposed", !1), this.id = e.id, this.initialState = e.initialState, this.context = (t = e.context) !== null && t !== void 0 ? t : {}, this.bfsm = new Kp(e), this.states = e.states, this.bfsm.on("*", (i, s) => {
      if (s && typeof s == "object" && "client" in s) {
        s.client;
        const r = Su(s, jp);
        this.emitter.emit(i, r);
      } else this.emitter.emit(i, s);
    }), this.bfsm.transition(this.context, e.initialState);
  }
  handle(e) {
    if (!this.disposed) {
      for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
      this.bfsm.handle(this.context, e, ...i);
    }
  }
  canHandle(e) {
    return this.disposed ? !1 : this.bfsm.canHandle(this.context, e);
  }
  reset() {
    this.disposed || this.bfsm.reset(this.context);
  }
  currentState() {
    return this.bfsm.currentState(this.context);
  }
  transition(e) {
    this.disposed || this.bfsm.transition(this.context, e);
  }
  compositeState() {
    return this.bfsm.compositeState(this.context);
  }
  on(e, t) {
    return this.disposed ? {
      off() {}
    } : this.emitter.on(e, t);
  }
  emit(e, t) {
    this.disposed || this.bfsm.emit(e, t);
  }
  dispose(e) {
    this.disposed = !0, this.bfsm.dispose(e), this.emitter.clear();
  }
};
function Jp(n) {
  return new zp(n);
}
function fl(n, e) {
  return e.attemptId === n.attemptId;
}
const So = (n, e) => {
    let t = n.ctx;
    if (fl(t, e)) return "connected";
  },
  xs = n => {
    let e = n.ctx;
    return e.attemptId += 1, e.lastError = void 0, "connecting";
  },
  Us = n => {
    let e = n.ctx;
    return e.attemptId += 1, e.lastError = void 0, "reconnecting";
  },
  Fi = (n, e) => {
    let t = n.ctx;
    return t.closeReason = e.reason, "disconnecting";
  },
  Qp = {
    new: {
      connect: xs,
      close: Fi
    },
    connecting: {
      connectComplete: So,
      connectFailed: (n, e) => {
        let t = n.ctx;
        return t.lastError = e.error, "closed";
      },
      close: Fi
    },
    connected: {
      reconnect: Us,
      transportFailed: (n, e) => {
        let t = n.ctx;
        if (fl(t, e)) return t.lastError = e.reason, "offline";
      },
      close: Fi
    },
    offline: {
      connect: xs,
      reconnect: Us,
      close: Fi
    },
    reconnecting: {
      reconnectComplete: So,
      reconnectFailed: (n, e) => {
        let t = n.ctx;
        return t.lastError = e.error, e.recoverable ? "offline" : "closed";
      },
      close: Fi
    },
    disconnecting: {
      closeComplete: "closed"
    },
    closed: {
      connect: xs,
      reconnect: Us
    }
  };
function Yp() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "new";
  return Jp({
    id: "signal",
    initialState: n,
    context: {
      attemptId: 0
    },
    states: Qp
  });
}
class $p {
  get readyState() {
    return this.ws.readyState;
  }
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var i, s;
    if (!((i = t.signal) === null || i === void 0) && i.aborted) throw new DOMException("This operation was aborted", "AbortError");
    this.url = e;
    const r = new WebSocket(e, (s = t.protocols) !== null && s !== void 0 ? s : []);
    r.binaryType = "arraybuffer", this.ws = r;
    const a = function () {
      let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        c = o.closeCode,
        d = o.reason;
      return r.close(c, d === void 0 ? void 0 : Xp(d));
    };
    this.opened = new Ae((o, c) => {
      const d = () => {
        c(N.websocket("Encountered websocket error during connection establishment"));
      };
      r.onopen = () => {
        o({
          readable: new ReadableStream({
            start(l) {
              r.onmessage = u => {
                let h = u.data;
                return l.enqueue(h);
              }, r.onerror = u => l.error(N.websocket(Tp(u, "websocket"))), r.onclose = u => {
                u.wasClean || u.code === 1e3 ? l.close() : l.error(N.websocket("WS closed unexpectedly with code ".concat(u.code)));
              };
            },
            cancel: a
          }),
          writable: new WritableStream({
            write(l) {
              r.send(l);
            },
            abort() {
              r.close();
            },
            close: a
          }),
          protocol: r.protocol,
          extensions: r.extensions
        }), r.removeEventListener("error", d);
      }, r.addEventListener("error", d);
    }), this.closed = new Ae((o, c) => {
      const d = () => p(this, void 0, void 0, function* () {
        const l = new Ae(h => {
            r.readyState !== WebSocket.CLOSED && r.addEventListener("close", m => {
              h(m);
            }, {
              once: !0
            });
          }),
          u = yield Ae.race([Ce(250), l]);
        u ? o(u) : c(N.websocket("Encountered unspecified websocket error without a timely close event"));
      });
      r.addEventListener("close", l => {
        let u = l.code,
          h = l.reason;
        o({
          closeCode: u,
          reason: h
        }), r.removeEventListener("error", d);
      }), r.addEventListener("error", d);
    }), t.signal && (t.signal.onabort = () => r.close()), this.close = a;
  }
}
const Co = 123;
function Xp(n) {
  const e = new TextEncoder();
  if (e.encode(n).length <= Co) return n;
  let t = "",
    i = 0;
  for (const s of n) {
    if (i += e.encode(s).length, i > Co) break;
    t += s;
  }
  return t;
}
const Zp = ["syncState", "trickle", "offer", "answer", "simulate", "leave"];
function ef(n) {
  return n instanceof N ? n.reason !== Q.LeaveRequest && n.reason !== Q.NotAllowed : !0;
}
function tf(n) {
  const e = Zp.indexOf(n.case) >= 0;
  return W.trace("request allowed to bypass queue:", {
    canPass: e,
    req: n
  }), e;
}
var Re;
(function (n) {
  n[n.CONNECTING = 0] = "CONNECTING", n[n.CONNECTED = 1] = "CONNECTED", n[n.RECONNECTING = 2] = "RECONNECTING", n[n.DISCONNECTING = 3] = "DISCONNECTING", n[n.DISCONNECTED = 4] = "DISCONNECTED";
})(Re || (Re = {}));
function nf(n) {
  switch (n) {
    case "connected":
      return Re.CONNECTED;
    case "connecting":
      return Re.CONNECTING;
    case "reconnecting":
      return Re.RECONNECTING;
    case "disconnecting":
      return Re.DISCONNECTING;
    default:
      return Re.DISCONNECTED;
  }
}
const sf = 250,
  rf = 5e3;
class ba {
  get currentState() {
    return nf(this.lifecycleState);
  }
  get isDisconnected() {
    const e = this.currentState;
    return e === Re.DISCONNECTING || e === Re.DISCONNECTED;
  }
  get lifecycleState() {
    return this.machine.currentState();
  }
  get attemptId() {
    return this.machine.context.attemptId;
  }
  sendLifecycleInput(e) {
    const t = this.lifecycleState;
    return this.machine.handle(e.type, e), this.lifecycleState !== t;
  }
  settleInFlightClose() {
    return p(this, void 0, void 0, function* () {
      this.log.debug("waiting for an in-flight close to settle before establishing a session"), (yield this.closingLock.lock())();
    });
  }
  get isEstablishingConnection() {
    return this.lifecycleState === "connecting" || this.lifecycleState === "reconnecting";
  }
  getNextRequestId() {
    return this._requestId += 1, this._requestId;
  }
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
      t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var i;
    this.rtt = 0, this.log = W, this._requestId = 0, this.useV0SignalPath = !1, this.resetCallbacks = () => {
      this.onAnswer = void 0, this.onLeave = void 0, this.onLocalTrackPublished = void 0, this.onLocalTrackUnpublished = void 0, this.onNegotiateRequested = void 0, this.onOffer = void 0, this.onRemoteMuteChanged = void 0, this.onSubscribedQualityUpdate = void 0, this.onTokenRefresh = void 0, this.onTrickle = void 0, this.onClose = void 0, this.onMediaSectionsRequirement = void 0;
    }, this.loggerContextCb = t.loggerContextCb, this.log = ke((i = t.loggerName) !== null && i !== void 0 ? i : re.Signal, () => this.logContext), this.useJSON = e, this.requestQueue = new qp(), this.queuedRequests = [], this.closingLock = new ye(), this.connectionLock = new ye(), this.machine = Yp(), this.machine.on("transitioned", s => {
      let r = s.fromState,
        a = s.toState;
      this.log.debug("signal lifecycle: ".concat(r, " -> ").concat(a));
    }), this.machine.on("nohandler", s => {
      let r = s.inputName;
      this.log.debug("ignoring signal lifecycle input ".concat(r, " in state ").concat(this.lifecycleState));
    }), this.machine;
  }
  get logContext() {
    var e, t;
    return (t = (e = this.loggerContextCb) === null || e === void 0 ? void 0 : e.call(this)) !== null && t !== void 0 ? t : {};
  }
  join(e, t, i, s) {
    return p(this, arguments, void 0, function (r, a, o, c) {
      var d = this;
      let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1,
        u = arguments.length > 5 ? arguments[5] : void 0;
      return function* () {
        if (d.lifecycleState === "disconnecting" && (yield d.settleInFlightClose()), !d.sendLifecycleInput({
          type: "connect"
        })) throw N.internal("cannot establish a signal session from '".concat(d.lifecycleState, "', close the current one first"));
        d.options = o;
        try {
          return yield d.connect(r, a, o, c, l, u);
        } catch (h) {
          throw d.sendLifecycleInput({
            type: "connectFailed",
            error: h
          }), h;
        }
      }();
    });
  }
  reconnect(e, t, i, s) {
    return p(this, void 0, void 0, function* () {
      if (!this.options) {
        this.log.warn("attempted to reconnect without signal options being set, ignoring");
        return;
      }
      if (this.lifecycleState === "disconnecting" && (yield this.settleInFlightClose()), !this.sendLifecycleInput({
        type: "reconnect"
      })) throw N.internal("cannot resume the signal session from '".concat(this.lifecycleState, "'"));
      this.clearPingInterval();
      try {
        return yield this.connect(e, t, Object.assign(Object.assign({}, this.options), {
          reconnect: !0,
          sid: i,
          reconnectReason: s
        }), void 0, this.useV0SignalPath);
      } catch (r) {
        throw this.sendLifecycleInput({
          type: "reconnectFailed",
          error: r,
          recoverable: ef(r)
        }), r;
      }
    });
  }
  connect(e, t, i, s) {
    return p(this, arguments, void 0, function (r, a, o, c) {
      var d = this;
      let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1,
        u = arguments.length > 5 ? arguments[5] : void 0;
      return function* () {
        const h = yield d.connectionLock.lock();
        let m, g;
        try {
          d.connectOptions = o, d.useV0SignalPath = l;
          const f = np(o.clientInfoCapabilities),
            y = l ? af(a, f, o) : yield of(a, f, o, u);
          m = vp(r, y, l).toString(), g = yp(m).toString();
        } catch (f) {
          throw h(), f;
        }
        if (c?.aborted) throw h(), d.log.debug("signal connect abandoned before opening a transport"), N.cancelled("Connection aborted");
        return new Promise((f, y) => p(d, void 0, void 0, function* () {
          var k, S, R, b, T;
          try {
            let C = !1;
            const M = j => p(this, void 0, void 0, function* () {
              if (C) return;
              C = !0;
              const pe = j instanceof Event ? j.currentTarget : j,
                le = kp(pe, "Abort handler called");
              this.streamWriter && !this.isDisconnected ? this.sendLeave().then(() => this.close(!0, le)).catch(ct => {
                this.log.error(ct), this.close(!0, le);
              }) : this.close(!0, le), D(), y(j instanceof N ? j : N.cancelled(le));
            });
            c?.addEventListener("abort", M);
            const D = () => {
                clearTimeout(B), c?.removeEventListener("abort", M);
              },
              B = setTimeout(() => {
                M(N.timeout("room connection has timed out (signal)"));
              }, o.websocketTimeout),
              F = new URL(m);
            if (F.searchParams.has("access_token") && F.searchParams.set("access_token", "<redacted>"), this.ws) {
              const j = performance.now();
              yield this.teardownTransport("replaced by a new connection attempt"), this.log.debug("closed previous ws connection in ".concat(performance.now() - j, "ms"));
            }
            if (C) {
              this.log.debug("signal connect abandoned after tearing down the previous transport");
              return;
            }
            const L = this.attemptId;
            this.log.info("signal connecting to ".concat(F), {
              reconnect: o.reconnect,
              reconnectReason: o.reconnectReason
            }), this.ws = new $p(m);
            let q = !1;
            this.ws.opened.catch(() => {
              q = !0;
            });
            try {
              this.ws.closed.then(fe => {
                this.isEstablishingConnection && !q && y(N.internal("Websocket got closed during a (re)connection attempt: ".concat(fe.reason))), this.log.debug("websocket closed", {
                  reason: fe.reason,
                  code: fe.closeCode,
                  attemptId: L,
                  state: this.lifecycleState
                }), this.handleOnClose(fe.reason || (fe.closeCode === 1e3 ? "server closed the signal connection" : "Unexpected WS error"), L);
              }).catch(fe => {
                this.isEstablishingConnection && !q && y(N.internal("Websocket error during a (re)connection attempt: ".concat(fe)));
              });
              const j = yield this.ws.opened.catch(fe => p(this, void 0, void 0, function* () {
                if (C) {
                  this.log.debug("signal connect abandoned while the websocket was opening");
                  return;
                }
                if (this.lifecycleState !== "connected") {
                  clearTimeout(B);
                  const Nt = yield this.handleConnectionError(fe, g);
                  y(Nt);
                  return;
                }
                this.handleWSError(fe), y(fe);
              }));
              if (clearTimeout(B), !j) return;
              const pe = j.readable.getReader();
              this.streamWriter = j.writable.getWriter();
              let le;
              try {
                const fe = Date.now() + rf;
                for (;;) {
                  const Nt = fe - Date.now();
                  if (Nt <= 0) throw N.timeout("signal connection timed out while waiting for the first message");
                  let Oi;
                  const ii = yield Promise.race([pe.read(), new Promise((hn, Di) => {
                    Oi = setTimeout(() => {
                      Di(N.timeout("signal connection timed out while waiting for the first message"));
                    }, Nt);
                  })]);
                  if (clearTimeout(Oi), !ii.value) throw N.internal("no message received as first message");
                  const kt = bo(ii.value);
                  if (this.lifecycleState === "reconnecting" && ((k = kt.message) === null || k === void 0 ? void 0 : k.case) !== "reconnect" && ((S = kt.message) === null || S === void 0 ? void 0 : S.case) !== "leave") {
                    this.log.warn("dropping signal message while awaiting reconnect response", {
                      messageCase: (R = kt.message) === null || R === void 0 ? void 0 : R.case
                    });
                    continue;
                  }
                  le = kt;
                  break;
                }
              } catch (fe) {
                pe.releaseLock(), y(fe), this.close();
                return;
              }
              if (pe.releaseLock(), C) {
                this.log.debug("signal connect abandoned while waiting for the first message");
                return;
              }
              const ct = this.validateFirstMessage(le, (b = o.reconnect) !== null && b !== void 0 ? b : !1);
              if (!ct.isValid) {
                y(ct.error);
                return;
              }
              ((T = le.message) === null || T === void 0 ? void 0 : T.case) === "join" && (this.pingTimeoutDuration = le.message.value.pingTimeout, this.pingIntervalDuration = le.message.value.pingInterval, this.pingTimeoutDuration && this.pingTimeoutDuration > 0 && this.log.debug("ping config", {
                timeout: this.pingTimeoutDuration,
                interval: this.pingIntervalDuration
              }), this.onJoined && this.onJoined(le.message.value)), this.handleSignalConnected(j, B, L), f(ct.response);
            } catch (j) {
              y(j);
            } finally {
              D();
            }
          } finally {
            h();
          }
        }));
      }();
    });
  }
  startReadingLoop(e) {
    return p(this, void 0, void 0, function* () {
      const t = this.attemptId;
      for (;;) {
        this.signalLatency && (yield Ce(this.signalLatency));
        try {
          const i = yield e.read(),
            s = i.done,
            r = i.value;
          if (s) break;
          const a = bo(r);
          this.handleSignalResponse(a);
        } catch (i) {
          this.log.error("error reading from signal stream", {
            error: i
          }), yield this.handleOnClose("error in reading loop", t);
          break;
        }
      }
    });
  }
  close() {
    return p(this, arguments, void 0, function () {
      var e = this;
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0,
        i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Close method called on signal client";
      return function* () {
        const s = t && e.sendLifecycleInput({
            type: "close",
            reason: i
          }),
          r = yield e.closingLock.lock();
        try {
          yield e.teardownTransport(i);
        } finally {
          s && e.sendLifecycleInput({
            type: "closeComplete"
          }), r();
        }
      }();
    });
  }
  teardownTransport(e) {
    return p(this, void 0, void 0, function* () {
      try {
        this.clearPingInterval();
        const t = this.ws;
        t && (this.ws = void 0, this.streamWriter = void 0, t.close({
          closeCode: 1e3,
          reason: e
        }), yield Promise.race([t.closed, Ce(sf)]));
      } catch (t) {
        this.log.debug("websocket error while closing", {
          error: t
        });
      }
    });
  }
  sendOffer(e, t) {
    this.log.debug("sending offer", {
      offerSdp: e.sdp
    }), this.sendRequest({
      case: "offer",
      value: Bt(e, t)
    });
  }
  sendAnswer(e, t) {
    return this.log.debug("sending answer", {
      answerSdp: e.sdp
    }), this.sendRequest({
      case: "answer",
      value: Bt(e, t)
    });
  }
  sendIceCandidate(e, t) {
    return this.log.debug("sending ice candidate", {
      candidate: e
    }), this.sendRequest({
      case: "trickle",
      value: new ns({
        candidateInit: JSON.stringify(e),
        target: t
      })
    });
  }
  sendMuteTrack(e, t) {
    return this.sendRequest({
      case: "mute",
      value: new ss({
        sid: e,
        muted: t
      })
    });
  }
  sendAddTrack(e) {
    return this.sendRequest({
      case: "addTrack",
      value: e
    });
  }
  sendUpdateLocalMetadata(e, t) {
    return p(this, arguments, void 0, function (i, s) {
      var r = this;
      let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return function* () {
        const o = r.getNextRequestId();
        return yield r.sendRequest({
          case: "updateMetadata",
          value: new na({
            requestId: o,
            metadata: i,
            name: s,
            attributes: a
          })
        }), o;
      }();
    });
  }
  sendUpdateTrackSettings(e) {
    this.sendRequest({
      case: "trackSetting",
      value: e
    });
  }
  sendUpdateSubscription(e) {
    return this.sendRequest({
      case: "subscription",
      value: e
    });
  }
  sendSyncState(e) {
    return this.sendRequest({
      case: "syncState",
      value: e
    });
  }
  sendUpdateVideoLayers(e, t) {
    return this.sendRequest({
      case: "updateLayers",
      value: new rd({
        trackSid: e,
        layers: t
      })
    });
  }
  sendUpdateSubscriptionPermissions(e, t) {
    return this.sendRequest({
      case: "subscriptionPermission",
      value: new cd({
        allParticipants: e,
        trackPermissions: t
      })
    });
  }
  sendSimulateScenario(e) {
    return this.sendRequest({
      case: "simulate",
      value: e
    });
  }
  sendPing() {
    return Promise.all([this.sendRequest({
      case: "ping",
      value: ie.parse(Date.now())
    }), this.sendRequest({
      case: "pingReq",
      value: new ud({
        timestamp: ie.parse(Date.now()),
        rtt: ie.parse(this.rtt)
      })
    })]);
  }
  sendUpdateLocalAudioTrack(e, t) {
    return this.sendRequest({
      case: "updateAudioTrack",
      value: new ia({
        trackSid: e,
        features: t
      })
    });
  }
  sendLeave() {
    return this.sendRequest({
      case: "leave",
      value: new as({
        reason: ve.CLIENT_INITIATED,
        action: ui.DISCONNECT
      })
    });
  }
  sendPublishDataTrackRequest(e, t, i) {
    return this.sendRequest({
      case: "publishDataTrackRequest",
      value: new $r({
        pubHandle: e,
        name: t,
        encryption: i ? z.GCM : z.NONE
      })
    });
  }
  sendUnPublishDataTrackRequest(e) {
    return this.sendRequest({
      case: "unpublishDataTrackRequest",
      value: new Zr({
        pubHandle: e
      })
    });
  }
  sendUpdateDataSubscription(e, t) {
    return this.sendRequest({
      case: "updateDataSubscription",
      value: new ta({
        updates: [new id({
          trackSid: e,
          subscribe: t
        })]
      })
    });
  }
  sendRequest(e) {
    return p(this, arguments, void 0, function (t) {
      var i = this;
      let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return function* () {
        const r = !s && !tf(t),
          a = i.lifecycleState === "reconnecting" || i.queuedRequests.length > 0;
        if (r && a) {
          i.queuedRequests.push(() => p(i, void 0, void 0, function* () {
            yield this.sendRequest(t, !0);
          }));
          return;
        }
        s || (yield i.requestQueue.flush()), i.signalLatency && (yield Ce(i.signalLatency));
        const o = t.case === "leave" && !!i.streamWriter;
        if (i.isDisconnected && !o) {
          i.log.debug("skipping signal request (type: ".concat(t.case, ") - SignalClient disconnected"));
          return;
        }
        if (!i.streamWriter) {
          i.log.error("cannot send signal request before connected, type: ".concat(t?.case));
          return;
        }
        const c = new Sh({
          message: t
        });
        try {
          i.useJSON ? yield i.streamWriter.write(c.toJsonString()) : yield i.streamWriter.write(c.toBinary().buffer);
        } catch (d) {
          i.log.error("error sending signal message", {
            error: d
          });
        }
      }();
    });
  }
  handleSignalResponse(e) {
    var t, i;
    const s = e.message;
    if (s == null) {
      this.log.debug("received unsupported message");
      return;
    }
    let r = !1;
    if (s.case === "answer") {
      const a = wo(s.value);
      this.onAnswer && this.onAnswer(a, s.value.id, s.value.midToTrackId);
    } else if (s.case === "offer") {
      const a = wo(s.value);
      this.onOffer && this.onOffer(a, s.value.id, s.value.midToTrackId);
    } else if (s.case === "trickle") {
      const a = JSON.parse(s.value.candidateInit);
      this.onTrickle && this.onTrickle(a, s.value.target);
    } else s.case === "update" ? this.onParticipantUpdate && this.onParticipantUpdate((t = s.value.participants) !== null && t !== void 0 ? t : []) : s.case === "trackPublished" ? this.onLocalTrackPublished && this.onLocalTrackPublished(s.value) : s.case === "speakersChanged" ? this.onSpeakersChanged && this.onSpeakersChanged((i = s.value.speakers) !== null && i !== void 0 ? i : []) : s.case === "leave" ? this.onLeave && this.onLeave(s.value) : s.case === "mute" ? this.onRemoteMuteChanged && this.onRemoteMuteChanged(s.value.sid, s.value.muted) : s.case === "roomUpdate" ? this.onRoomUpdate && s.value.room && this.onRoomUpdate(s.value.room) : s.case === "connectionQuality" ? this.onConnectionQuality && this.onConnectionQuality(s.value) : s.case === "streamStateUpdate" ? this.onStreamStateUpdate && this.onStreamStateUpdate(s.value) : s.case === "subscribedQualityUpdate" ? this.onSubscribedQualityUpdate && this.onSubscribedQualityUpdate(s.value) : s.case === "subscriptionPermissionUpdate" ? this.onSubscriptionPermissionUpdate && this.onSubscriptionPermissionUpdate(s.value) : s.case === "refreshToken" ? this.onTokenRefresh && this.onTokenRefresh(s.value) : s.case === "trackUnpublished" ? this.onLocalTrackUnpublished && this.onLocalTrackUnpublished(s.value) : s.case === "subscriptionResponse" ? this.onSubscriptionError && this.onSubscriptionError(s.value) : s.case === "pong" || (s.case === "pongResp" ? (this.rtt = Date.now() - Number.parseInt(s.value.lastPingTimestamp.toString()), this.resetPingTimeout(), r = !0) : s.case === "requestResponse" ? this.onRequestResponse && this.onRequestResponse(s.value) : s.case === "trackSubscribed" ? this.onLocalTrackSubscribed && this.onLocalTrackSubscribed(s.value.trackSid) : s.case === "roomMoved" ? (this.onTokenRefresh && this.onTokenRefresh(s.value.token), this.onRoomMoved && this.onRoomMoved(s.value)) : s.case === "mediaSectionsRequirement" ? this.onMediaSectionsRequirement && this.onMediaSectionsRequirement(s.value) : s.case === "publishDataTrackResponse" ? this.onPublishDataTrackResponse && this.onPublishDataTrackResponse(s.value) : s.case === "unpublishDataTrackResponse" ? this.onUnPublishDataTrackResponse && this.onUnPublishDataTrackResponse(s.value) : s.case === "dataTrackSubscriberHandles" ? this.onDataTrackSubscriberHandles && this.onDataTrackSubscriberHandles(s.value) : this.log.debug("unsupported message", {
      msgCase: s.case
    }));
    r || this.resetPingTimeout();
  }
  setReconnected() {
    for (; this.queuedRequests.length > 0;) {
      const e = this.queuedRequests.shift();
      e && this.requestQueue.run(e);
    }
  }
  handleOnClose(e) {
    return p(this, arguments, void 0, function (t) {
      var i = this;
      let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.attemptId,
        r = arguments.length > 2 ? arguments[2] : void 0;
      return function* () {
        const a = i.onClose;
        if (!i.sendLifecycleInput({
          type: "transportFailed",
          attemptId: s,
          reason: t
        })) {
          i.log.debug("ignoring transport close in state ".concat(i.lifecycleState), {
            reason: t,
            attemptId: s,
            currentAttemptId: i.attemptId
          });
          return;
        }
        yield i.teardownTransport(t), i.log.info("websocket connection closed: ".concat(t), {
          reason: t
        }), r && (i.log.info("waiting for ".concat(r, "ms until reconnecting signal")), yield Ce(r)), a && a(t);
      }();
    });
  }
  handleWSError(e) {
    this.log.error("websocket error", {
      error: e
    });
  }
  resetPingTimeout() {
    if (this.clearPingTimeout(), !this.pingTimeoutDuration) {
      this.log.warn("ping timeout duration not set");
      return;
    }
    this.pingTimeout = Y.setTimeout(() => {
      this.log.warn("ping timeout triggered. last pong received at: ".concat(new Date(Date.now() - this.pingTimeoutDuration * 1e3).toUTCString())), this.handleOnClose("ping timeout");
    }, this.pingTimeoutDuration * 1e3);
  }
  clearPingTimeout() {
    this.pingTimeout && Y.clearTimeout(this.pingTimeout);
  }
  startPingInterval() {
    if (this.clearPingInterval(), this.resetPingTimeout(), !this.pingIntervalDuration) {
      this.log.warn("ping interval duration not set");
      return;
    }
    this.log.debug("start ping interval"), this.pingInterval = Y.setInterval(() => {
      this.sendPing();
    }, this.pingIntervalDuration * 1e3);
  }
  clearPingInterval() {
    this.log.debug("clearing ping interval"), this.clearPingTimeout(), this.pingInterval && Y.clearInterval(this.pingInterval);
  }
  handleSignalConnected(e, t, i) {
    if (clearTimeout(t), !this.sendLifecycleInput(this.lifecycleState === "reconnecting" ? {
      type: "reconnectComplete",
      attemptId: i
    } : {
      type: "connectComplete",
      attemptId: i
    })) {
      this.log.debug("discarding a connection whose attempt no longer owns the session", {
        attemptId: i,
        currentAttemptId: this.attemptId,
        state: this.lifecycleState
      });
      return;
    }
    this.log.info("signal connected"), this.startPingInterval(), this.startReadingLoop(e.readable.getReader());
  }
  validateFirstMessage(e, t) {
    var i, s, r, a;
    return ((i = e.message) === null || i === void 0 ? void 0 : i.case) === "join" ? {
      isValid: !0,
      response: e.message.value
    } : this.lifecycleState === "reconnecting" && ((s = e.message) === null || s === void 0 ? void 0 : s.case) === "reconnect" ? {
      isValid: !0,
      response: e.message.value
    } : this.isEstablishingConnection && ((r = e.message) === null || r === void 0 ? void 0 : r.case) === "leave" ? {
      isValid: !1,
      error: N.leaveRequest("Received leave request while trying to (re)connect", e.message.value.reason)
    } : t ? {
      isValid: !1,
      error: N.internal("Unexpected first message")
    } : {
      isValid: !1,
      error: N.internal("did not receive join response, got ".concat((a = e.message) === null || a === void 0 ? void 0 : a.case, " instead"))
    };
  }
  handleConnectionError(e, t) {
    return p(this, void 0, void 0, function* () {
      try {
        const i = yield fetch(t, {
          signal: va(3e3)
        });
        switch (i.status) {
          case 404:
            const s = yield i.text();
            return s.includes("requested room does not exist") ? N.notAllowed(s, i.status) : N.serviceNotFound("v1 RTC path not found. Consider upgrading your LiveKit server version", "v0-rtc");
          case 401:
          case 403:
            const r = yield i.text();
            return N.notAllowed(r, i.status);
          default:
            break;
        }
        return e instanceof N ? e : N.internal("Encountered unknown websocket error during connection: ".concat(e), {
          status: i.status,
          statusText: i.statusText
        });
      } catch (i) {
        return i instanceof N ? i : N.serverUnreachable(i instanceof Error ? i.message : "server was not reachable");
      }
    });
  }
}
function wo(n) {
  const e = {
    type: "offer",
    sdp: n.sdp
  };
  switch (n.type) {
    case "answer":
    case "offer":
    case "pranswer":
    case "rollback":
      e.type = n.type;
      break;
  }
  return e;
}
function Bt(n, e) {
  return new Ot({
    sdp: n.sdp,
    type: n.type,
    id: e
  });
}
function af(n, e, t) {
  var i;
  const s = new URLSearchParams();
  return s.set("access_token", n), t.reconnect && (s.set("reconnect", "1"), t.sid && s.set("sid", t.sid)), s.set("auto_subscribe", t.autoSubscribe ? "1" : "0"), s.set("sdk", We() ? "reactnative" : "js"), s.set("version", e.version), s.set("protocol", e.protocol.toString()), s.set("client_protocol", e.clientProtocol.toString()), e.deviceModel && s.set("device_model", e.deviceModel), e.os && s.set("os", e.os), e.osVersion && s.set("os_version", e.osVersion), e.browser && s.set("browser", e.browser), e.browserVersion && s.set("browser_version", e.browserVersion), t.adaptiveStream && s.set("adaptive_stream", "1"), t.disableIceLite && s.set("disable_ice_lite", "1"), typeof t.subscriberAllowPause < "u" && s.set("subscriber_allow_pause", t.subscriberAllowPause ? "1" : "0"), t.reconnectReason && s.set("reconnect_reason", t.reconnectReason.toString()), !((i = navigator.connection) === null || i === void 0) && i.type && s.set("network", navigator.connection.type), s;
}
function of(n, e, t, i) {
  return p(this, void 0, void 0, function* () {
    const s = new URLSearchParams();
    s.set("access_token", n);
    const r = new $h({
      clientInfo: e,
      connectionSettings: new hd({
        autoSubscribe: !!t.autoSubscribe,
        adaptiveStream: !!t.adaptiveStream,
        disableIceLite: !!t.disableIceLite,
        subscriberAllowPause: t.subscriberAllowPause
      }),
      reconnect: !!t.reconnect,
      participantSid: t.sid ? t.sid : void 0,
      publisherOffer: i
    });
    t.reconnectReason && (r.reconnectReason = t.reconnectReason);
    const a = r.toBinary();
    let o, c;
    if (dl()) {
      const h = new CompressionStream("gzip"),
        m = h.writable.getWriter();
      m.write(new Uint8Array(a)), m.close();
      const g = [],
        f = h.readable.getReader();
      for (;;) {
        const R = yield f.read(),
          b = R.done,
          T = R.value;
        if (b) break;
        g.push(T);
      }
      const y = g.reduce((R, b) => R + b.length, 0),
        k = new Uint8Array(y);
      let S = 0;
      for (const R of g) k.set(R, S), S += R.length;
      o = k, c = ar.GZIP;
    } else o = a, c = ar.NONE;
    const l = new Xh({
        joinRequest: o,
        compression: c
      }).toBinary(),
      u = h => {
        const m = Array.from(h, g => String.fromCodePoint(g)).join("");
        return btoa(m);
      };
    return s.set("join_request", u(l).replace(/\+/g, "-").replace(/\//g, "_")), s;
  });
}
class cf {
  constructor(e) {
    this._map = new Map(), this._lastCleanup = 0, this.ttl = e;
  }
  set(e, t) {
    const i = Date.now();
    i - this._lastCleanup > this.ttl / 2 && this.cleanup();
    const s = i + this.ttl;
    return this._map.set(e, {
      value: t,
      expiresAt: s
    }), this;
  }
  get(e) {
    const t = this._map.get(e);
    if (t) {
      if (t.expiresAt < Date.now()) {
        this._map.delete(e);
        return;
      }
      return t.value;
    }
  }
  has(e) {
    const t = this._map.get(e);
    return t ? t.expiresAt < Date.now() ? (this._map.delete(e), !1) : !0 : !1;
  }
  delete(e) {
    return this._map.delete(e);
  }
  clear() {
    this._map.clear();
  }
  cleanup() {
    const e = Date.now();
    for (const i of this._map.entries()) {
      var t = x(i, 2);
      const s = t[0];
      t[1].expiresAt < e && this._map.delete(s);
    }
    this._lastCleanup = e;
  }
  get size() {
    return this.cleanup(), this._map.size;
  }
  forEach(e) {
    this.cleanup();
    for (const i of this._map.entries()) {
      var t = x(i, 2);
      const s = t[0],
        r = t[1];
      r.expiresAt >= Date.now() && e(r.value, s, this.asValueMap());
    }
  }
  map(e) {
    this.cleanup();
    const t = [],
      i = this.asValueMap();
    for (const r of i.entries()) {
      var s = x(r, 2);
      const a = s[0],
        o = s[1];
      t.push(e(o, a, i));
    }
    return t;
  }
  asValueMap() {
    const e = new Map();
    for (const i of this._map.entries()) {
      var t = x(i, 2);
      const s = t[0],
        r = t[1];
      r.expiresAt >= Date.now() && e.set(s, r.value);
    }
    return e;
  }
}
var Ke = {},
  Fs = {},
  Bs = {
    exports: {}
  },
  Eo;
function ya() {
  if (Eo) return Bs.exports;
  Eo = 1;
  var n = Bs.exports = {
    v: [{
      name: "version",
      reg: /^(\d*)$/
    }],
    o: [{
      name: "origin",
      reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
      names: ["username", "sessionId", "sessionVersion", "netType", "ipVer", "address"],
      format: "%s %s %d %s IP%d %s"
    }],
    s: [{
      name: "name"
    }],
    i: [{
      name: "description"
    }],
    u: [{
      name: "uri"
    }],
    e: [{
      name: "email"
    }],
    p: [{
      name: "phone"
    }],
    z: [{
      name: "timezones"
    }],
    r: [{
      name: "repeats"
    }],
    t: [{
      name: "timing",
      reg: /^(\d*) (\d*)/,
      names: ["start", "stop"],
      format: "%d %d"
    }],
    c: [{
      name: "connection",
      reg: /^IN IP(\d) (\S*)/,
      names: ["version", "ip"],
      format: "IN IP%d %s"
    }],
    b: [{
      push: "bandwidth",
      reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
      names: ["type", "limit"],
      format: "%s:%s"
    }],
    m: [{
      reg: /^(\w*) (\d*) ([\w/]*)(?: (.*))?/,
      names: ["type", "port", "protocol", "payloads"],
      format: "%s %d %s %s"
    }],
    a: [{
      push: "rtp",
      reg: /^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
      names: ["payload", "codec", "rate", "encoding"],
      format: function (e) {
        return e.encoding ? "rtpmap:%d %s/%s/%s" : e.rate ? "rtpmap:%d %s/%s" : "rtpmap:%d %s";
      }
    }, {
      push: "fmtp",
      reg: /^fmtp:(\d*) ([\S| ]*)/,
      names: ["payload", "config"],
      format: "fmtp:%d %s"
    }, {
      name: "control",
      reg: /^control:(.*)/,
      format: "control:%s"
    }, {
      name: "rtcp",
      reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
      names: ["port", "netType", "ipVer", "address"],
      format: function (e) {
        return e.address != null ? "rtcp:%d %s IP%d %s" : "rtcp:%d";
      }
    }, {
      push: "rtcpFbTrrInt",
      reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
      names: ["payload", "value"],
      format: "rtcp-fb:%s trr-int %d"
    }, {
      push: "rtcpFb",
      reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
      names: ["payload", "type", "subtype"],
      format: function (e) {
        return e.subtype != null ? "rtcp-fb:%s %s %s" : "rtcp-fb:%s %s";
      }
    }, {
      push: "ext",
      reg: /^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/,
      names: ["value", "direction", "encrypt-uri", "uri", "config"],
      format: function (e) {
        return "extmap:%d" + (e.direction ? "/%s" : "%v") + (e["encrypt-uri"] ? " %s" : "%v") + " %s" + (e.config ? " %s" : "");
      }
    }, {
      name: "extmapAllowMixed",
      reg: /^(extmap-allow-mixed)/
    }, {
      push: "crypto",
      reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
      names: ["id", "suite", "config", "sessionConfig"],
      format: function (e) {
        return e.sessionConfig != null ? "crypto:%d %s %s %s" : "crypto:%d %s %s";
      }
    }, {
      name: "setup",
      reg: /^setup:(\w*)/,
      format: "setup:%s"
    }, {
      name: "connectionType",
      reg: /^connection:(new|existing)/,
      format: "connection:%s"
    }, {
      name: "mid",
      reg: /^mid:([^\s]*)/,
      format: "mid:%s"
    }, {
      name: "msid",
      reg: /^msid:(.*)/,
      format: "msid:%s"
    }, {
      name: "ptime",
      reg: /^ptime:(\d*(?:\.\d*)*)/,
      format: "ptime:%d"
    }, {
      name: "maxptime",
      reg: /^maxptime:(\d*(?:\.\d*)*)/,
      format: "maxptime:%d"
    }, {
      name: "direction",
      reg: /^(sendrecv|recvonly|sendonly|inactive)/
    }, {
      name: "icelite",
      reg: /^(ice-lite)/
    }, {
      name: "iceUfrag",
      reg: /^ice-ufrag:(\S*)/,
      format: "ice-ufrag:%s"
    }, {
      name: "icePwd",
      reg: /^ice-pwd:(\S*)/,
      format: "ice-pwd:%s"
    }, {
      name: "fingerprint",
      reg: /^fingerprint:(\S*) (\S*)/,
      names: ["type", "hash"],
      format: "fingerprint:%s %s"
    }, {
      push: "candidates",
      reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
      names: ["foundation", "component", "transport", "priority", "ip", "port", "type", "raddr", "rport", "tcptype", "generation", "network-id", "network-cost"],
      format: function (e) {
        var t = "candidate:%s %d %s %d %s %d typ %s";
        return t += e.raddr != null ? " raddr %s rport %d" : "%v%v", t += e.tcptype != null ? " tcptype %s" : "%v", e.generation != null && (t += " generation %d"), t += e["network-id"] != null ? " network-id %d" : "%v", t += e["network-cost"] != null ? " network-cost %d" : "%v", t;
      }
    }, {
      name: "endOfCandidates",
      reg: /^(end-of-candidates)/
    }, {
      name: "remoteCandidates",
      reg: /^remote-candidates:(.*)/,
      format: "remote-candidates:%s"
    }, {
      name: "iceOptions",
      reg: /^ice-options:(\S*)/,
      format: "ice-options:%s"
    }, {
      push: "ssrcs",
      reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,
      names: ["id", "attribute", "value"],
      format: function (e) {
        var t = "ssrc:%d";
        return e.attribute != null && (t += " %s", e.value != null && (t += ":%s")), t;
      }
    }, {
      push: "ssrcGroups",
      reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
      names: ["semantics", "ssrcs"],
      format: "ssrc-group:%s %s"
    }, {
      name: "msidSemantic",
      reg: /^msid-semantic:\s?(\w*) (\S*)/,
      names: ["semantic", "token"],
      format: "msid-semantic: %s %s"
    }, {
      push: "groups",
      reg: /^group:(\w*) (.*)/,
      names: ["type", "mids"],
      format: "group:%s %s"
    }, {
      name: "rtcpMux",
      reg: /^(rtcp-mux)/
    }, {
      name: "rtcpRsize",
      reg: /^(rtcp-rsize)/
    }, {
      name: "sctpmap",
      reg: /^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/,
      names: ["sctpmapNumber", "app", "maxMessageSize"],
      format: function (e) {
        return e.maxMessageSize != null ? "sctpmap:%s %s %s" : "sctpmap:%s %s";
      }
    }, {
      name: "xGoogleFlag",
      reg: /^x-google-flag:([^\s]*)/,
      format: "x-google-flag:%s"
    }, {
      push: "rids",
      reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
      names: ["id", "direction", "params"],
      format: function (e) {
        return e.params ? "rid:%s %s %s" : "rid:%s %s";
      }
    }, {
      push: "imageattrs",
      reg: new RegExp("^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?"),
      names: ["pt", "dir1", "attrs1", "dir2", "attrs2"],
      format: function (e) {
        return "imageattr:%s %s %s" + (e.dir2 ? " %s %s" : "");
      }
    }, {
      name: "simulcast",
      reg: new RegExp("^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$"),
      names: ["dir1", "list1", "dir2", "list2"],
      format: function (e) {
        return "simulcast:%s %s" + (e.dir2 ? " %s %s" : "");
      }
    }, {
      name: "simulcast_03",
      reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
      names: ["value"],
      format: "simulcast: %s"
    }, {
      name: "framerate",
      reg: /^framerate:(\d+(?:$|\.\d+))/,
      format: "framerate:%s"
    }, {
      name: "sourceFilter",
      reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/,
      names: ["filterMode", "netType", "addressTypes", "destAddress", "srcList"],
      format: "source-filter: %s %s %s %s %s"
    }, {
      name: "bundleOnly",
      reg: /^(bundle-only)/
    }, {
      name: "label",
      reg: /^label:(.+)/,
      format: "label:%s"
    }, {
      name: "sctpPort",
      reg: /^sctp-port:(\d+)$/,
      format: "sctp-port:%s"
    }, {
      name: "maxMessageSize",
      reg: /^max-message-size:(\d+)$/,
      format: "max-message-size:%s"
    }, {
      push: "tsRefClocks",
      reg: /^ts-refclk:([^\s=]*)(?:=(\S*))?/,
      names: ["clksrc", "clksrcExt"],
      format: function (e) {
        return "ts-refclk:%s" + (e.clksrcExt != null ? "=%s" : "");
      }
    }, {
      name: "mediaClk",
      reg: /^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/,
      names: ["id", "mediaClockName", "mediaClockValue", "rateNumerator", "rateDenominator"],
      format: function (e) {
        var t = "mediaclk:";
        return t += e.id != null ? "id=%s %s" : "%v%s", t += e.mediaClockValue != null ? "=%s" : "", t += e.rateNumerator != null ? " rate=%s" : "", t += e.rateDenominator != null ? "/%s" : "", t;
      }
    }, {
      name: "keywords",
      reg: /^keywds:(.+)$/,
      format: "keywds:%s"
    }, {
      name: "content",
      reg: /^content:(.+)/,
      format: "content:%s"
    }, {
      name: "bfcpFloorCtrl",
      reg: /^floorctrl:(c-only|s-only|c-s)/,
      format: "floorctrl:%s"
    }, {
      name: "bfcpConfId",
      reg: /^confid:(\d+)/,
      format: "confid:%s"
    }, {
      name: "bfcpUserId",
      reg: /^userid:(\d+)/,
      format: "userid:%s"
    }, {
      name: "bfcpFloorId",
      reg: /^floorid:(.+) (?:m-stream|mstrm):(.+)/,
      names: ["id", "mStream"],
      format: "floorid:%s mstrm:%s"
    }, {
      push: "invalid",
      names: ["value"]
    }]
  };
  return Object.keys(n).forEach(function (e) {
    var t = n[e];
    t.forEach(function (i) {
      i.reg || (i.reg = /(.*)/), i.format || (i.format = "%s");
    });
  }), Bs.exports;
}
var _o;
function df() {
  return _o || (_o = 1, function (n) {
    var e = function (o) {
        return String(Number(o)) === o ? Number(o) : o;
      },
      t = function (o, c, d, l) {
        if (l && !d) c[l] = e(o[1]);else for (var u = 0; u < d.length; u += 1) o[u + 1] != null && (c[d[u]] = e(o[u + 1]));
      },
      i = function (o, c, d) {
        var l = o.name && o.names;
        o.push && !c[o.push] ? c[o.push] = [] : l && !c[o.name] && (c[o.name] = {});
        var u = o.push ? {} : l ? c[o.name] : c;
        t(d.match(o.reg), u, o.names, o.name), o.push && c[o.push].push(u);
      },
      s = ya(),
      r = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
    n.parse = function (o) {
      var c = {},
        d = [],
        l = c;
      return o.split(/(\r\n|\r|\n)/).filter(r).forEach(function (u) {
        var h = u[0],
          m = u.slice(2);
        h === "m" && (d.push({
          rtp: [],
          fmtp: []
        }), l = d[d.length - 1]);
        for (var g = 0; g < (s[h] || []).length; g += 1) {
          var f = s[h][g];
          if (f.reg.test(m)) return i(f, l, m);
        }
      }), c.media = d, c;
    };
    var a = function (o, c) {
      var d = c.split(/=(.+)/, 2);
      return d.length === 2 ? o[d[0]] = e(d[1]) : d.length === 1 && c.length > 1 && (o[d[0]] = void 0), o;
    };
    n.parseParams = function (o) {
      return o.split(/;\s?/).reduce(a, {});
    }, n.parseFmtpConfig = n.parseParams, n.parsePayloads = function (o) {
      return o.toString().split(" ").map(Number);
    }, n.parseRemoteCandidates = function (o) {
      for (var c = [], d = o.split(" ").map(e), l = 0; l < d.length; l += 3) c.push({
        component: d[l],
        ip: d[l + 1],
        port: d[l + 2]
      });
      return c;
    }, n.parseImageAttributes = function (o) {
      return o.split(" ").map(function (c) {
        return c.substring(1, c.length - 1).split(",").reduce(a, {});
      });
    }, n.parseSimulcastStreamList = function (o) {
      return o.split(";").map(function (c) {
        return c.split(",").map(function (d) {
          var l,
            u = !1;
          return d[0] !== "~" ? l = e(d) : (l = e(d.substring(1, d.length)), u = !0), {
            scid: l,
            paused: u
          };
        });
      });
    };
  }(Fs)), Fs;
}
var qs, Po;
function lf() {
  if (Po) return qs;
  Po = 1;
  var n = ya(),
    e = /%[sdv%]/g,
    t = function (a) {
      var o = 1,
        c = arguments,
        d = c.length;
      return a.replace(e, function (l) {
        if (o >= d) return l;
        var u = c[o];
        switch (o += 1, l) {
          case "%%":
            return "%";
          case "%s":
            return String(u);
          case "%d":
            return Number(u);
          case "%v":
            return "";
        }
      });
    },
    i = function (a, o, c) {
      var d = o.format instanceof Function ? o.format(o.push ? c : c[o.name]) : o.format,
        l = [a + "=" + d];
      if (o.names) for (var u = 0; u < o.names.length; u += 1) {
        var h = o.names[u];
        o.name ? l.push(c[o.name][h]) : l.push(c[o.names[u]]);
      } else l.push(c[o.name]);
      return t.apply(null, l);
    },
    s = ["v", "o", "s", "i", "u", "e", "p", "c", "b", "t", "r", "z", "a"],
    r = ["i", "c", "b", "a"];
  return qs = function (a, o) {
    o = o || {}, a.version == null && (a.version = 0), a.name == null && (a.name = " "), a.media.forEach(function (u) {
      u.payloads == null && (u.payloads = "");
    });
    var c = o.outerOrder || s,
      d = o.innerOrder || r,
      l = [];
    return c.forEach(function (u) {
      n[u].forEach(function (h) {
        h.name in a && a[h.name] != null ? l.push(i(u, h, a)) : h.push in a && a[h.push] != null && a[h.push].forEach(function (m) {
          l.push(i(u, h, m));
        });
      });
    }), a.media.forEach(function (u) {
      l.push(i("m", n.m[0], u)), d.forEach(function (h) {
        n[h].forEach(function (m) {
          m.name in u && u[m.name] != null ? l.push(i(h, m, u)) : m.push in u && u[m.push] != null && u[m.push].forEach(function (g) {
            l.push(i(h, m, g));
          });
        });
      });
    }), l.join(`\r
`) + `\r
`;
  }, qs;
}
var Ro;
function uf() {
  if (Ro) return Ke;
  Ro = 1;
  var n = df(),
    e = lf(),
    t = ya();
  return Ke.grammar = t, Ke.write = e, Ke.parse = n.parse, Ke.parseParams = n.parseParams, Ke.parseFmtpConfig = n.parseFmtpConfig, Ke.parsePayloads = n.parsePayloads, Ke.parseRemoteCandidates = n.parseRemoteCandidates, Ke.parseImageAttributes = n.parseImageAttributes, Ke.parseSimulcastStreamList = n.parseSimulcastStreamList, Ke;
}
var je = uf();
const hf = .9,
  Un = 1e3,
  ka = 300,
  Io = 1500,
  mf = 3500,
  pf = 500,
  ff = 20;
function gl(n, e, t) {
  var i, s, r;
  if (!((i = n.msid) === null || i === void 0) && i.includes(e)) return (r = (s = n.rtp.find(a => a.codec.toUpperCase() === t.toUpperCase())) === null || s === void 0 ? void 0 : s.payload) !== null && r !== void 0 ? r : 0;
}
function gf(n, e) {
  if (n.maxbr < ka) return;
  const t = Math.min(Math.round(n.maxbr * hf), n.maxbr);
  if (n.isScreenShare) return t;
  const i = Math.min(bf(e), vf());
  return Math.min(t, i);
}
function vf() {
  const n = typeof navigator < "u" ? navigator.connection : void 0;
  switch (n?.effectiveType) {
    case "slow-2g":
    case "2g":
      return ka;
    case "3g":
      return pf;
    default:
      return Un;
  }
}
function bf(n) {
  if (n === void 0) return Un;
  const e = Math.min(Math.max((n - Io) / (mf - Io), 0), 1);
  return Math.round(Un - e * (Un - ka));
}
function yf(n, e, t) {
  let i;
  for (const s of n) if (!(s.type !== "video" || s.direction === "recvonly" || s.direction === "inactive")) for (const r of e) {
    if (!r.cid) continue;
    const a = gl(s, r.cid, r.codec);
    if (a === void 0) continue;
    const o = a > 0 ? gf(r, t) : void 0;
    o !== void 0 && (i === void 0 || o > i) && (i = o);
    break;
  }
  return i;
}
function kf(n, e, t) {
  const i = n.fmtp.find(s => s.payload === e);
  return i ? i.config.includes("x-google-start-bitrate") || (i.config += ";x-google-start-bitrate=".concat(t)) : n.fmtp.push({
    payload: e,
    config: "x-google-start-bitrate=".concat(t)
  }), !0;
}
const wt = {
  NegotiationStarted: "negotiationStarted",
  NegotiationComplete: "negotiationComplete",
  OfferAnswered: "offerAnswered",
  RTPVideoPayloadTypes: "rtpVideoPayloadTypes"
};
class Mo extends Ue.EventEmitter {
  get pc() {
    return this._pc || (this._pc = this.createPC()), this._pc;
  }
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var i;
    super(), this.log = W, this.iceLog = W, this.ddExtID = 0, this.latestOfferId = 0, this.answeredOfferId = 0, this.latestAcknowledgedOfferId = 0, this.pendingCandidates = [], this.restartingIce = !1, this.renegotiate = !1, this.trackBitrates = [], this.hasAppliedVideoStartBitrate = !1, this.remoteStereoMids = [], this.remoteNackMids = [], this.negotiate = ha(s => p(this, void 0, void 0, function* () {
      this.emit(wt.NegotiationStarted);
      try {
        yield this.createAndSendOffer();
      } catch (r) {
        if (s) s(r);else throw r;
      }
    }), ff), this.close = () => {
      this._pc && (this.log.debug("closing peer connection"), this.pendingInitialOffer = void 0, this._pc.close(), this._pc.onconnectionstatechange = null, this._pc.oniceconnectionstatechange = null, this._pc.onicegatheringstatechange = null, this._pc.ondatachannel = null, this._pc.onnegotiationneeded = null, this._pc.onsignalingstatechange = null, this._pc.onicecandidate = null, this._pc.ondatachannel = null, this._pc.ontrack = null, this._pc.onconnectionstatechange = null, this._pc.oniceconnectionstatechange = null, this._pc = null);
    }, this.loggerOptions = t, this.log = ke((i = t.loggerName) !== null && i !== void 0 ? i : re.PCTransport, () => this.logContext), this.iceLog = ke(re.ICE, () => this.logContext), this.config = e, this._pc = this.createPC(), this.offerLock = new ye();
  }
  createPC() {
    const e = new RTCPeerConnection(this.config);
    return e.onicecandidate = t => {
      var i;
      t.candidate && (this.iceLog.debug("local ICE candidate gathered", {
        candidate: t.candidate.candidate
      }), (i = this.onIceCandidate) === null || i === void 0 || i.call(this, t.candidate));
    }, e.onicecandidateerror = t => {
      var i;
      this.iceLog.debug("ICE candidate error", {
        event: t
      }), (i = this.onIceCandidateError) === null || i === void 0 || i.call(this, t);
    }, e.oniceconnectionstatechange = () => {
      var t;
      this.iceLog.debug("ICE connection state: ".concat(e.iceConnectionState)), (t = this.onIceConnectionStateChange) === null || t === void 0 || t.call(this, e.iceConnectionState);
    }, e.onsignalingstatechange = () => {
      var t;
      this.log.debug("signaling state: ".concat(e.signalingState)), (t = this.onSignalingStatechange) === null || t === void 0 || t.call(this, e.signalingState);
    }, e.onconnectionstatechange = () => {
      var t;
      this.log.debug("connection state: ".concat(e.connectionState)), (t = this.onConnectionStateChange) === null || t === void 0 || t.call(this, e.connectionState);
    }, e.ondatachannel = t => {
      var i;
      this.log.debug("data channel opened by peer", {
        label: t.channel.label,
        id: t.channel.id
      }), (i = this.onDataChannel) === null || i === void 0 || i.call(this, t);
    }, e.ontrack = t => {
      var i;
      (i = this.onTrack) === null || i === void 0 || i.call(this, t);
    }, e;
  }
  get logContext() {
    var e, t;
    return Object.assign({}, (t = (e = this.loggerOptions).loggerContextCb) === null || t === void 0 ? void 0 : t.call(e));
  }
  get isICEConnected() {
    return this._pc !== null && (this.pc.iceConnectionState === "connected" || this.pc.iceConnectionState === "completed");
  }
  addIceCandidate(e) {
    return p(this, void 0, void 0, function* () {
      if (this.pc.remoteDescription && !this.restartingIce) return this.pc.addIceCandidate(e);
      this.iceLog.debug("queuing remote ICE candidate until remote description applied", {
        pendingCount: this.pendingCandidates.length + 1
      }), this.pendingCandidates.push(e);
    });
  }
  setRemoteDescription(e, t) {
    return p(this, void 0, void 0, function* () {
      var i;
      if (e.type === "answer" && this.latestOfferId > 0 && t > 0 && t !== this.latestOfferId) return this.log.warn("ignoring answer for old offer", {
        offerId: t,
        latestOfferId: this.latestOfferId
      }), !1;
      if (e.type === "answer") {
        if (_f(t, this.answerInFlight, this.answeredOfferId, (i = this._pc) === null || i === void 0 ? void 0 : i.signalingState, this.pendingInitialOffer !== void 0)) return this.log.warn("ignoring duplicate answer", {
          offerId: t
        }), !1;
        this.answerInFlight = t;
      }
      try {
        return yield this.applyRemoteDescription(e, t);
      } finally {
        e.type === "answer" && (this.answerInFlight = void 0);
      }
    });
  }
  applyRemoteDescription(e, t) {
    return p(this, void 0, void 0, function* () {
      var i, s;
      let r;
      if (e.type === "offer") {
        let a = Pf(e),
          o = a.stereoMids,
          c = a.nackMids;
        this.remoteStereoMids = o, this.remoteNackMids = c;
      } else if (e.type === "answer") {
        if (this.pendingInitialOffer && this._pc) {
          const c = this.pendingInitialOffer;
          this.pendingInitialOffer = void 0;
          const d = je.parse((i = c.sdp) !== null && i !== void 0 ? i : "");
          d.media.forEach(l => {
            vn(l);
          }), this.log.debug("setting pending initial offer before processing answer"), yield this.setMungedSDP(c, je.write(d));
        }
        const a = je.parse((s = e.sdp) !== null && s !== void 0 ? s : "");
        a.media.forEach(c => {
          const d = Gi(c.mid);
          c.type === "audio" && this.trackBitrates.some(l => {
            if (!l.transceiver || d != l.transceiver.mid) return !1;
            let u = 0;
            if (c.rtp.some(m => m.codec.toUpperCase() === l.codec.toUpperCase() ? (u = m.payload, !0) : !1), u === 0) return !0;
            let h = !1;
            for (const m of c.fmtp) if (m.payload === u) {
              m.config = m.config.split(";").filter(g => !g.includes("maxaveragebitrate")).join(";"), l.maxbr > 0 && (m.config += ";maxaveragebitrate=".concat(l.maxbr * 1e3)), h = !0;
              break;
            }
            return h || l.maxbr > 0 && c.fmtp.push({
              payload: u,
              config: "maxaveragebitrate=".concat(l.maxbr * 1e3)
            }), !0;
          });
        });
        const o = this.getPlaceholderMids();
        o.size > 0 && Do(a.media, c => o.has(Gi(c.mid))), r = je.write(a);
      }
      return yield this.setMungedSDP(e, r, !0), e.type === "answer" && t > 0 && (this.answeredOfferId = t), this.pendingCandidates.length > 0 && this.iceLog.debug("flushing queued ICE candidates", {
        count: this.pendingCandidates.length
      }), this.pendingCandidates.forEach(a => {
        this.pc.addIceCandidate(a);
      }), this.pendingCandidates = [], this.restartingIce = !1, e.type === "answer" && (this.latestAcknowledgedOfferId = t, this.emit(wt.OfferAnswered, t)), this.renegotiate ? (this.renegotiate = !1, yield this.createAndSendOffer()) : e.type === "answer" && (this.emit(wt.NegotiationComplete), e.sdp && je.parse(e.sdp).media.forEach(o => {
        o.type === "video" && this.emit(wt.RTPVideoPayloadTypes, o.rtp);
      })), !0;
    });
  }
  createInitialOffer() {
    return p(this, void 0, void 0, function* () {
      var e;
      const t = yield this.offerLock.lock();
      try {
        if (this.pc.signalingState !== "stable") {
          this.log.warn("signaling state is not stable, cannot create initial offer");
          return;
        }
        const i = this.latestOfferId + 1;
        this.latestOfferId = i;
        const s = yield this.pc.createOffer();
        this.pendingInitialOffer = {
          sdp: s.sdp,
          type: s.type
        };
        const r = je.parse((e = s.sdp) !== null && e !== void 0 ? e : "");
        return r.media.forEach(a => {
          vn(a);
        }), s.sdp = je.write(r), {
          offer: s,
          offerId: i
        };
      } finally {
        t();
      }
    });
  }
  createAndSendOffer(e) {
    return p(this, void 0, void 0, function* () {
      var t;
      const i = yield this.offerLock.lock();
      try {
        if (this.onOffer === void 0) return;
        if (e?.iceRestart && (this.iceLog.debug("restarting ICE"), this.restartingIce = !0), this._pc && (this._pc.signalingState === "have-local-offer" || this.pendingInitialOffer)) {
          const u = this._pc.remoteDescription;
          if (e?.iceRestart && u) yield this._pc.setRemoteDescription(u);else {
            if (e?.iceRestart) throw new Rt("ICE restart requested without a remote description, peer connection must be recreated");
            this.renegotiate = !0, this.log.debug("requesting renegotiation");
            return;
          }
        } else if (!this._pc || this._pc.signalingState === "closed") {
          this.log.warn("could not createOffer with closed peer connection");
          return;
        }
        this.log.debug("starting to negotiate");
        const s = this.latestOfferId + 1;
        this.latestOfferId = s;
        const r = yield this.pc.createOffer(e);
        this.log.debug("original offer", {
          sdp: r.sdp
        });
        const a = je.parse((t = r.sdp) !== null && t !== void 0 ? t : ""),
          o = this.hasAppliedVideoStartBitrate ? void 0 : yf(a.media, this.trackBitrates, this.connectionSetupTimeEstimateMs());
        let c = !1;
        a.media.forEach(u => {
          vn(u), u.type === "audio" ? Oo(u, ["all"], []) : u.type === "video" && this.trackBitrates.some(h => {
            if (!h.cid) return !1;
            const m = gl(u, h.cid, h.codec);
            return m === void 0 ? !1 : (m > 0 && (o !== void 0 && (c = kf(u, m, o) || c), Dt(h.codec) && !$t() && (this.ddExtID = Tf(u, a, this.ddExtID))), !0);
          });
        });
        const d = this.getPlaceholderMids();
        if (d.size > 0 && Do(a.media, u => d.has(Gi(u.mid))), this.latestOfferId > s) {
          this.log.warn("latestOfferId mismatch", {
            latestOfferId: this.latestOfferId,
            offerId: s
          });
          return;
        }
        const l = je.write(a);
        yield this.setMungedSDP(r, l), c && r.sdp === l && (this.hasAppliedVideoStartBitrate = !0, this.log.info("applied x-google-start-bitrate", {
          startBitrateKbps: o,
          connectionSetupTimeMs: this.connectionSetupTimeEstimateMs()
        })), this.onOffer(r, this.latestOfferId);
      } finally {
        i();
      }
    });
  }
  createAndSetAnswer() {
    return p(this, void 0, void 0, function* () {
      var e;
      const t = yield this.pc.createAnswer(),
        i = je.parse((e = t.sdp) !== null && e !== void 0 ? e : "");
      return i.media.forEach(s => {
        vn(s), s.type === "audio" && Oo(s, this.remoteStereoMids, this.remoteNackMids);
      }), yield this.setMungedSDP(t, je.write(i)), t;
    });
  }
  getPlaceholderMids() {
    var e, t;
    return Ef((t = (e = this._pc) === null || e === void 0 ? void 0 : e.getTransceivers()) !== null && t !== void 0 ? t : []);
  }
  createDataChannel(e, t) {
    return this.pc.createDataChannel(e, t);
  }
  addTransceiver(e, t) {
    return this.pc.addTransceiver(e, t);
  }
  addTransceiverOfKind(e, t) {
    return this.pc.addTransceiver(e, t);
  }
  addTrack(e) {
    if (!this._pc) throw new Z("PC closed, cannot add track");
    return this._pc.addTrack(e);
  }
  setTrackCodecBitrate(e) {
    this.trackBitrates.push(e);
  }
  setConnectionSetupTime(e) {
    this.connectionSetupTimeMs = e;
  }
  setConnectionStartedAt(e) {
    this.connectionStartedAt = e;
  }
  connectionSetupTimeEstimateMs() {
    if (this.connectionSetupTimeMs !== void 0) return this.connectionSetupTimeMs;
    if (this.connectionStartedAt !== void 0) return Math.round(performance.now() - this.connectionStartedAt);
  }
  setConfiguration(e) {
    var t;
    if (!this._pc) throw new Z("PC closed, cannot configure");
    return (t = this._pc) === null || t === void 0 ? void 0 : t.setConfiguration(e);
  }
  canRemoveTrack() {
    var e;
    return !!(!((e = this._pc) === null || e === void 0) && e.removeTrack);
  }
  removeTrack(e) {
    var t;
    return (t = this._pc) === null || t === void 0 ? void 0 : t.removeTrack(e);
  }
  getConnectionState() {
    var e, t;
    return (t = (e = this._pc) === null || e === void 0 ? void 0 : e.connectionState) !== null && t !== void 0 ? t : "closed";
  }
  getICEConnectionState() {
    var e, t;
    return (t = (e = this._pc) === null || e === void 0 ? void 0 : e.iceConnectionState) !== null && t !== void 0 ? t : "closed";
  }
  getSignallingState() {
    var e, t;
    return (t = (e = this._pc) === null || e === void 0 ? void 0 : e.signalingState) !== null && t !== void 0 ? t : "closed";
  }
  getTransceivers() {
    var e, t;
    return (t = (e = this._pc) === null || e === void 0 ? void 0 : e.getTransceivers()) !== null && t !== void 0 ? t : [];
  }
  getSenders() {
    var e, t;
    return (t = (e = this._pc) === null || e === void 0 ? void 0 : e.getSenders()) !== null && t !== void 0 ? t : [];
  }
  getLocalDescription() {
    var e;
    return (e = this._pc) === null || e === void 0 ? void 0 : e.localDescription;
  }
  getRemoteDescription() {
    var e;
    return (e = this.pc) === null || e === void 0 ? void 0 : e.remoteDescription;
  }
  getStats() {
    var e;
    return (e = this._pc) === null || e === void 0 ? void 0 : e.getStats();
  }
  getMaxMessageSize() {
    var e, t;
    return (t = (e = this._pc) === null || e === void 0 ? void 0 : e.sctp) === null || t === void 0 ? void 0 : t.maxMessageSize;
  }
  getConnectedAddress() {
    return p(this, void 0, void 0, function* () {
      var e;
      if (!this._pc) return;
      let t = "";
      const i = new Map(),
        s = new Map();
      if ((yield this._pc.getStats()).forEach(o => {
        switch (o.type) {
          case "transport":
            t = o.selectedCandidatePairId;
            break;
          case "candidate-pair":
            t === "" && o.selected && (t = o.id), i.set(o.id, o);
            break;
          case "remote-candidate":
            s.set(o.id, "".concat(o.address, ":").concat(o.port));
            break;
        }
      }), t === "") return;
      const a = (e = i.get(t)) === null || e === void 0 ? void 0 : e.remoteCandidateId;
      if (a !== void 0) return s.get(a);
    });
  }
  setMungedSDP(e, t, i) {
    return p(this, void 0, void 0, function* () {
      var s, r;
      const a = e.sdp;
      if (t) {
        e.sdp = t;
        try {
          this.log.debug("setting munged ".concat(i ? "remote" : "local", " description")), i ? yield this.pc.setRemoteDescription(e) : yield this.pc.setLocalDescription(e);
          return;
        } catch (o) {
          this.log.warn("not able to set ".concat(e.type, ", falling back to unmodified sdp"), {
            error: o,
            mungedSdp: t,
            originalSdp: a
          }), e.sdp = a;
        }
      }
      try {
        i ? yield (s = this._pc) === null || s === void 0 ? void 0 : s.setRemoteDescription(e) : yield (r = this._pc) === null || r === void 0 ? void 0 : r.setLocalDescription(e);
      } catch (o) {
        let c = "unknown error";
        o instanceof Error ? c = o.message : typeof o == "string" && (c = o);
        const d = {
          error: c,
          sdp: e.sdp
        };
        throw t && t !== a && (d.mungedSdp = t), !i && this.pc.remoteDescription && (d.remoteSdp = this.pc.remoteDescription), this.log.error("unable to set ".concat(e.type), {
          fields: d
        }), new Rt(c);
      }
    });
  }
}
function Tf(n, e, t) {
  var i, s;
  const r = Sf(e, t);
  return r === void 0 ? t : (!((i = n.ext) === null || i === void 0) && i.some(a => a.uri === pi) || ((s = n.ext) !== null && s !== void 0 || (n.ext = []), n.ext.push({
    value: r,
    uri: pi
  })), r);
}
function Sf(n, e) {
  const t = Cf(n, pi);
  return t !== void 0 ? Ao(n, t, pi) ? void 0 : t : e !== 0 && !Ao(n, e, pi) ? e : wf(n);
}
function Cf(n, e) {
  var t;
  for (const i of n.media) {
    const s = (t = i.ext) === null || t === void 0 ? void 0 : t.find(r => r.uri === e);
    if (s) return s.value;
  }
}
function Ao(n, e, t) {
  return n.media.some(i => {
    var s;
    return (s = i.ext) === null || s === void 0 ? void 0 : s.some(r => r.value === e && r.uri !== t);
  });
}
function wf(n) {
  let e = 0;
  return n.media.forEach(t => {
    var i;
    (i = t.ext) === null || i === void 0 || i.forEach(s => {
      s.value > e && (e = s.value);
    });
  }), e + 1 === 15 ? 16 : e + 1;
}
function vl(n, e) {
  return n.split(";").some(t => t.trim() === e);
}
function Oo(n, e, t) {
  const i = Gi(n.mid);
  let s = 0;
  n.rtp.some(r => r.codec.toLowerCase() === "opus" ? (s = r.payload, !0) : !1), s > 0 && (n.rtcpFb || (n.rtcpFb = []), t.includes(i) && !n.rtcpFb.some(r => r.payload === s && r.type === "nack") && n.rtcpFb.push({
    payload: s,
    type: "nack"
  }), (e.includes(i) || e.length === 1 && e[0] === "all") && n.fmtp.some(r => r.payload === s ? (vl(r.config, "stereo=1") || (r.config += ";stereo=1"), !0) : !1));
}
function Ef(n) {
  const e = new Set();
  for (const t of n) t.mid && !t.sender.track && e.add(t.mid);
  return e;
}
function Do(n, e) {
  var t, i;
  const s = new Map(),
    r = new Set();
  for (const a of n) {
    const o = e(a);
    for (const c of (t = a.fmtp) !== null && t !== void 0 ? t : []) o ? s.has(c.payload) || s.set(c.payload, c.config) : (s.set(c.payload, c.config), r.add(c.payload));
  }
  if (s.size !== 0) {
    for (const a of n) if (e(a)) for (const o of (i = a.fmtp) !== null && i !== void 0 ? i : []) {
      const c = s.get(o.payload);
      c !== void 0 && o.config !== c && (o.config = c);
    }
  }
}
function _f(n, e, t, i, s) {
  return e === n ? !0 : n > 0 ? n === t : i === "stable" && !s;
}
function Pf(n) {
  var e;
  const t = [],
    i = [],
    s = je.parse((e = n.sdp) !== null && e !== void 0 ? e : "");
  let r = 0;
  return s.media.forEach(a => {
    var o;
    const c = Gi(a.mid);
    a.type === "audio" && (a.rtp.some(d => d.codec.toLowerCase() === "opus" ? (r = d.payload, !0) : !1), !((o = a.rtcpFb) === null || o === void 0) && o.some(d => d.payload === r && d.type === "nack") && i.push(c), a.fmtp.some(d => d.payload === r ? (vl(d.config, "sprop-stereo=1") && t.push(c), !0) : !1));
  }), {
    stereoMids: t,
    nackMids: i
  };
}
function vn(n) {
  if (n.connection) {
    const e = n.connection.ip.indexOf(":") >= 0;
    (n.connection.version === 4 && e || n.connection.version === 6 && !e) && (n.connection.ip = "0.0.0.0", n.connection.version = 4);
  }
}
function Gi(n) {
  return typeof n == "number" ? n.toFixed(0) : n;
}
const Or = "vp8",
  Rf = {
    audioPreset: tn.music,
    dtx: !0,
    red: !0,
    forceStereo: !1,
    simulcast: !0,
    screenShareEncoding: nn.h1080fps15.encoding,
    stopMicTrackOnMute: !1,
    videoCodec: Or,
    backupCodec: !0,
    preConnectBuffer: !1
  },
  bl = {
    deviceId: {
      ideal: "default"
    },
    autoGainControl: !0,
    echoCancellation: !0,
    noiseSuppression: !0,
    voiceIsolation: !0
  },
  yl = {
    deviceId: {
      ideal: "default"
    },
    resolution: Qt.h720.resolution
  },
  If = {
    adaptiveStream: !1,
    dynacast: !1,
    stopLocalTrackOnUnpublish: !0,
    reconnectPolicy: new om(),
    disconnectOnPageLeave: !0,
    webAudioMix: !1,
    singlePeerConnection: !0
  },
  Ta = {
    autoSubscribe: !0,
    disableIceLite: !1,
    maxRetries: 1,
    peerConnectionTimeout: 15e3,
    websocketTimeout: 15e3
  };
var ee;
(function (n) {
  n[n.NEW = 0] = "NEW", n[n.CONNECTING = 1] = "CONNECTING", n[n.CONNECTED = 2] = "CONNECTED", n[n.FAILED = 3] = "FAILED", n[n.CLOSING = 4] = "CLOSING", n[n.CLOSED = 5] = "CLOSED";
})(ee || (ee = {}));
class Lo {
  get needsPublisher() {
    return this.isPublisherConnectionRequired;
  }
  get needsSubscriber() {
    return this.isSubscriberConnectionRequired;
  }
  get currentState() {
    return this.state;
  }
  get mode() {
    return this._mode;
  }
  constructor(e, t, i) {
    var s;
    this.peerConnectionTimeout = Ta.peerConnectionTimeout, this.log = W, this.iceLog = W, this.updateState = () => {
      var r, a;
      const o = this.state,
        c = this.requiredTransports.map(d => d.getConnectionState());
      c.every(d => d === "connected") ? this.state = ee.CONNECTED : c.some(d => d === "failed") ? this.state = ee.FAILED : c.some(d => d === "connecting") ? this.state = ee.CONNECTING : c.every(d => d === "closed") ? this.state = ee.CLOSED : c.some(d => d === "closed") ? this.state = ee.CLOSING : c.every(d => d === "new") && (this.state = ee.NEW), o !== this.state && (this.log.debug("pc state change: from ".concat(ee[o], " to ").concat(ee[this.state])), (r = this.onStateChange) === null || r === void 0 || r.call(this, this.state, this.publisher.getConnectionState(), (a = this.subscriber) === null || a === void 0 ? void 0 : a.getConnectionState()));
    }, this.loggerOptions = t, this.log = ke((s = t.loggerName) !== null && s !== void 0 ? s : re.PCManager, () => this.logContext), this.iceLog = ke(re.ICE, () => this.logContext), this.isPublisherConnectionRequired = e !== "subscriber-primary", this.isSubscriberConnectionRequired = e === "subscriber-primary", this.publisher = new Mo(i, t), this._mode = e, e !== "publisher-only" && (this.subscriber = new Mo(i, t), this.subscriber.onConnectionStateChange = this.updateState, this.subscriber.onIceConnectionStateChange = this.updateState, this.subscriber.onSignalingStatechange = this.updateState, this.subscriber.onIceCandidate = r => {
      var a;
      (a = this.onIceCandidate) === null || a === void 0 || a.call(this, r, Ye.SUBSCRIBER);
    }, this.subscriber.onDataChannel = r => {
      var a;
      (a = this.onDataChannel) === null || a === void 0 || a.call(this, r);
    }, this.subscriber.onTrack = r => {
      var a;
      (a = this.onTrack) === null || a === void 0 || a.call(this, r);
    }), this.publisher.onConnectionStateChange = this.updateState, this.publisher.onIceConnectionStateChange = this.updateState, this.publisher.onSignalingStatechange = this.updateState, this.publisher.onIceCandidate = r => {
      var a;
      (a = this.onIceCandidate) === null || a === void 0 || a.call(this, r, Ye.PUBLISHER);
    }, this.publisher.onTrack = r => {
      var a;
      (a = this.onTrack) === null || a === void 0 || a.call(this, r);
    }, this.publisher.onOffer = (r, a) => {
      var o;
      (o = this.onPublisherOffer) === null || o === void 0 || o.call(this, r, a);
    }, this.state = ee.NEW, this.connectionLock = new ye(), this.remoteOfferLock = new ye();
  }
  get logContext() {
    var e, t;
    return Object.assign({}, (t = (e = this.loggerOptions).loggerContextCb) === null || t === void 0 ? void 0 : t.call(e));
  }
  requirePublisher() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    this.isPublisherConnectionRequired = e, this.updateState();
  }
  createAndSendPublisherOffer(e) {
    return this.publisher.createAndSendOffer(e);
  }
  setPublisherAnswer(e, t) {
    return this.publisher.setRemoteDescription(e, t);
  }
  removeTrack(e) {
    return this.publisher.removeTrack(e);
  }
  close() {
    return p(this, void 0, void 0, function* () {
      var e;
      if (this.publisher && this.publisher.getSignallingState() !== "closed") {
        const t = this.publisher;
        for (const i of t.getSenders()) try {
          t.canRemoveTrack() && t.removeTrack(i);
        } catch (s) {
          this.log.warn("could not removeTrack", {
            error: s
          });
        }
      }
      yield Promise.all([this.publisher.close(), (e = this.subscriber) === null || e === void 0 ? void 0 : e.close()]), this.updateState();
    });
  }
  triggerIceRestart() {
    return p(this, void 0, void 0, function* () {
      this.iceLog.warn("triggering ICE restart"), this.needsPublisher && (yield this.createAndSendPublisherOffer({
        iceRestart: !0
      }));
    });
  }
  addIceCandidate(e, t) {
    return p(this, void 0, void 0, function* () {
      var i;
      this.iceLog.debug("adding remote ICE candidate", {
        target: t,
        candidate: e
      }), t === Ye.PUBLISHER ? yield this.publisher.addIceCandidate(e) : yield (i = this.subscriber) === null || i === void 0 ? void 0 : i.addIceCandidate(e);
    });
  }
  createSubscriberAnswerFromOffer(e, t) {
    return p(this, void 0, void 0, function* () {
      var i, s, r;
      this.log.debug("received server offer", {
        RTCSdpType: e.type,
        sdp: e.sdp,
        signalingState: (i = this.subscriber) === null || i === void 0 ? void 0 : i.getSignallingState().toString()
      });
      const a = yield this.remoteOfferLock.lock();
      try {
        return (yield (s = this.subscriber) === null || s === void 0 ? void 0 : s.setRemoteDescription(e, t)) ? yield (r = this.subscriber) === null || r === void 0 ? void 0 : r.createAndSetAnswer() : void 0;
      } finally {
        a();
      }
    });
  }
  updateConfiguration(e, t) {
    var i;
    this.log.debug("updating rtc configuration", {
      iceRestart: t
    }), this.publisher.setConfiguration(e), (i = this.subscriber) === null || i === void 0 || i.setConfiguration(e), t && this.triggerIceRestart();
  }
  ensurePCTransportConnection(e, t) {
    return p(this, void 0, void 0, function* () {
      var i;
      const s = yield this.connectionLock.lock();
      try {
        this.isPublisherConnectionRequired && this.publisher.getConnectionState() !== "connected" && this.publisher.getConnectionState() !== "connecting" && (this.log.debug("negotiation required, start negotiating"), this.publisher.negotiate().catch(r => {
          this.log.error(r);
        })), yield Promise.all((i = this.requiredTransports) === null || i === void 0 ? void 0 : i.map(r => this.ensureTransportConnected(r, e, t)));
      } finally {
        s();
      }
    });
  }
  negotiate(e) {
    return p(this, void 0, void 0, function* () {
      return new Ae((t, i) => {
        const s = this.publisher.latestOfferId;
        if (this.publisher.latestAcknowledgedOfferId > s) {
          this.log.debug("negotiation already handled in more recent acknowledged offer", this.logContext), t();
          return;
        }
        let r = !1;
        const a = () => {
            r || (r = !0, clearTimeout(d), this.publisher.off(wt.OfferAnswered, o), e.signal.removeEventListener("abort", c));
          },
          o = l => {
            l > s && (a(), t());
          },
          c = () => {
            a(), i(new Rt("negotiation aborted"));
          },
          d = setTimeout(() => {
            a(), i(new Rt("negotiation timed out"));
          }, this.peerConnectionTimeout);
        e.signal.addEventListener("abort", c), this.publisher.on(wt.OfferAnswered, o), this.publisher.negotiate(l => {
          a(), l instanceof Error ? i(l) : i(new Error(String(l)));
        });
      });
    });
  }
  addPublisherTransceiver(e, t) {
    return this.publisher.addTransceiver(e, t);
  }
  addPublisherTransceiverOfKind(e, t) {
    return this.publisher.addTransceiverOfKind(e, t);
  }
  getMidForReceiver(e) {
    const i = (this.subscriber ? this.subscriber.getTransceivers() : this.publisher.getTransceivers()).find(s => s.receiver === e);
    return i?.mid;
  }
  getMaxPublisherMessageSize() {
    return this.publisher.getMaxMessageSize();
  }
  addPublisherTrack(e) {
    return this.publisher.addTrack(e);
  }
  createPublisherDataChannel(e, t) {
    return this.publisher.createDataChannel(e, t);
  }
  getConnectedAddress(e) {
    return e === Ye.PUBLISHER ? this.publisher.getConnectedAddress() : e === Ye.SUBSCRIBER ? this.publisher.getConnectedAddress() : this.requiredTransports[0].getConnectedAddress();
  }
  get requiredTransports() {
    const e = [];
    return this.isPublisherConnectionRequired && e.push(this.publisher), this.isSubscriberConnectionRequired && this.subscriber && e.push(this.subscriber), e;
  }
  ensureTransportConnected(e, t) {
    return p(this, arguments, void 0, function (i, s) {
      var r = this;
      let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.peerConnectionTimeout;
      return function* () {
        if (i.getConnectionState() !== "connected") return new Promise((c, d) => p(r, void 0, void 0, function* () {
          const l = () => {
            this.log.warn("abort transport connection"), Y.clearTimeout(u), d(N.cancelled("room connection has been cancelled"));
          };
          s?.signal.aborted && l(), s?.signal.addEventListener("abort", l);
          const u = Y.setTimeout(() => {
            s?.signal.removeEventListener("abort", l), d(N.internal("could not establish pc connection"));
          }, a);
          for (; this.state !== ee.CONNECTED;) if (yield Ce(50), s?.signal.aborted) {
            d(N.cancelled("room connection has been cancelled"));
            return;
          }
          Y.clearTimeout(u), s?.signal.removeEventListener("abort", l), c();
        }));
      }();
    });
  }
}
class kl {
  constructor(e) {
    this.bufferStatusLow = !0, this.headroomLock = new ye(), this.waiterAbortController = new AbortController(), this.kind = e.kind, this.lowWaterMark = e.lowWaterMark, this.highWaterMark = e.highWaterMark, this.isEngineClosed = e.isEngineClosed, this.onBufferStatusChanged = e.onBufferStatusChanged;
  }
  get channelHandle() {
    return this.handle;
  }
  attach(e) {
    const t = this.handle;
    this.handle = e, t && t !== e && this.release(t, "data channel replaced");
  }
  detach() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "data channel torn down";
    const t = this.handle;
    this.handle = void 0, t && this.release(t, e);
  }
  release(e, t) {
    this.invalidateWaiters(t), e.close();
  }
  getChannel() {
    return this.handle;
  }
  isBelowHighWaterMark(e) {
    return e.bufferedAmount <= this.highWaterMark;
  }
  isBelowLowWaterMark(e) {
    return e.bufferedAmount <= e.bufferedAmountLowThreshold;
  }
  lockHeadroom() {
    return this.headroomLock.lock();
  }
  waitForHeadroomWithLock(e) {
    return p(this, void 0, void 0, function* () {
      const t = yield this.lockHeadroom();
      try {
        yield this.waitForHeadroomWithoutLock(e);
      } finally {
        t();
      }
    });
  }
  waitForHeadroomWithoutLock(e) {
    return p(this, void 0, void 0, function* () {
      if (this.isEngineClosed()) throw new Z("engine closed");
      if (e.readyState !== "open") throw new Z("DataChannel ".concat(this.kind, " is ").concat(e.readyState));
      if (this.isBelowHighWaterMark(e)) return;
      const t = this.waiterAbortController.signal;
      yield new Ae((i, s) => {
        const r = () => {
            c(), i();
          },
          a = () => {
            c(), s(new Z("DataChannel ".concat(this.kind, " closed while draining the buffer")));
          },
          o = () => {
            c(), s(new Z("DataChannel ".concat(this.kind, " was replaced or torn down while waiting for headroom")));
          },
          c = () => {
            e.removeEventListener("bufferedamountlow", r), e.removeEventListener("close", a), t.removeEventListener("abort", o);
          };
        if (t.aborted) {
          o();
          return;
        }
        e.addEventListener("bufferedamountlow", r), e.addEventListener("close", a), t.addEventListener("abort", o);
      });
    });
  }
  invalidateWaiters(e) {
    this.waiterAbortController.abort(e), this.waiterAbortController = new AbortController();
  }
  refreshBufferStatus() {
    var e;
    const t = this.getChannel();
    if (!t) return;
    const i = this.isBelowLowWaterMark(t);
    i !== this.bufferStatusLow && (this.bufferStatusLow = i, (e = this.onBufferStatusChanged) === null || e === void 0 || e.call(this, i));
  }
}
class No extends kl {
  constructor(e) {
    super(e), this.statCurrentBytes = 0, this.statByterate = 0, this.dropCount = 0, this.bufferFullBehavior = e.bufferFullBehavior, this.shouldSkipSends = e.shouldSkipSends;
  }
  send(e) {
    return p(this, void 0, void 0, function* () {
      const t = this.getChannel();
      if (t) {
        switch (this.bufferFullBehavior) {
          case "wait":
            if (!this.isBelowHighWaterMark(t)) try {
              yield this.waitForHeadroomWithLock(t);
            } catch (i) {
              if (this.isEngineClosed()) throw i;
              return;
            }
            break;
          case "drop":
            if (!this.isBelowLowWaterMark(t)) {
              this.dropCount += 1, this.dropCount % 100 === 0 && W.warn("dropping lossy data channel messages, total dropped: ".concat(this.dropCount));
              return;
            }
        }
        if (this.statCurrentBytes += e.byteLength, !this.shouldSkipSends()) try {
          t.send(e), this.refreshBufferStatus();
        } catch (i) {
          if (i instanceof TypeError) W.error(i);else throw i;
        }
      }
    });
  }
  startThresholdTuning() {
    this.stopThresholdTuning(), this.statInterval = Y.setInterval(() => {
      this.statByterate = this.statCurrentBytes, this.statCurrentBytes = 0;
      const e = this.getChannel();
      if (e) {
        const t = this.statByterate / 10;
        e.bufferedAmountLowThreshold = Math.min(Math.max(t, this.lowWaterMark), this.highWaterMark);
      }
    }, 1e3);
  }
  stopThresholdTuning() {
    this.statByterate = 0, this.statCurrentBytes = 0, this.statInterval && (Y.clearInterval(this.statInterval), this.statInterval = void 0), this.dropCount = 0;
  }
}
class xo {
  constructor() {
    this.buffer = [], this._totalSize = 0, this._sentSize = 0;
  }
  push(e) {
    this.buffer.push(e), this._totalSize += e.data.byteLength, e.sent && (this._sentSize += e.data.byteLength);
  }
  pop() {
    const e = this.buffer.shift();
    return e && (this._totalSize -= e.data.byteLength, e.sent && (this._sentSize -= e.data.byteLength)), e;
  }
  getAll() {
    return this.buffer.slice();
  }
  getUnsent() {
    return this.buffer.filter(e => !e.sent);
  }
  markSent(e) {
    e.sent || (e.sent = !0, this._sentSize += e.data.byteLength);
  }
  markAllUnsent() {
    for (const e of this.buffer) e.sent = !1;
    this._sentSize = 0;
  }
  popToSequence(e) {
    for (; this.buffer.length > 0 && this.buffer[0].sequence <= e;) this.pop();
  }
  alignBufferedAmount(e) {
    for (; this.buffer.length > 0;) {
      const t = this.buffer[0];
      if (!t.sent || this._sentSize - t.data.byteLength <= e) break;
      this.pop();
    }
  }
  get length() {
    return this.buffer.length;
  }
}
class Mf extends kl {
  constructor(e) {
    super(e), this.messageBuffer = new xo(), this.sequence = 1, this.isDeferringSends = e.isDeferringSends;
  }
  nextSequence() {
    const e = this.sequence;
    return this.sequence += 1, e;
  }
  send(e, t) {
    return p(this, void 0, void 0, function* () {
      if (this.isDeferringSends()) {
        this.messageBuffer.push({
          data: e,
          sequence: t,
          sent: !1
        });
        return;
      }
      const i = this.getChannel();
      if (i) {
        try {
          yield this.waitForHeadroomWithLock(i);
        } catch (s) {
          if (this.isEngineClosed()) throw s;
          this.messageBuffer.push({
            data: e,
            sequence: t,
            sent: !1
          });
          return;
        }
        if (this.isDeferringSends()) {
          this.messageBuffer.push({
            data: e,
            sequence: t,
            sent: !1
          });
          return;
        }
        this.messageBuffer.push({
          data: e,
          sequence: t,
          sent: !0
        }), i.send(e), this.refreshBufferStatus();
      }
    });
  }
  replay(e) {
    return p(this, void 0, void 0, function* () {
      if (!this.getChannel()) return;
      this.messageBuffer.popToSequence(e);
      const t = yield this.lockHeadroom();
      try {
        const i = this.getChannel();
        if (!i) throw new Z("DataChannel not found, kind: ".concat(this.kind));
        this.messageBuffer.markAllUnsent();
        for (let s = this.messageBuffer.getUnsent(); s.length > 0; s = this.messageBuffer.getUnsent()) for (const r of s) yield this.waitForHeadroomWithoutLock(i), i.send(r.data), this.messageBuffer.markSent(r);
      } finally {
        t();
      }
      this.refreshBufferStatus();
    });
  }
  refreshBufferStatus() {
    const e = this.channelHandle;
    e && this.messageBuffer.alignBufferedAmount(e.bufferedAmount), super.refreshBufferStatus();
  }
  reset() {
    this.messageBuffer = new xo(), this.sequence = 1;
  }
}
var H;
(function (n) {
  n[n.RELIABLE = 0] = "RELIABLE", n[n.LOSSY = 1] = "LOSSY", n[n.DATA_TRACK_LOSSY = 2] = "DATA_TRACK_LOSSY";
})(H || (H = {}));
const Af = 64 * 1024,
  Of = 1024 * 1024,
  Df = 8 * 1024,
  Lf = 256 * 1024;
function Nf(n) {
  return n === H.RELIABLE ? Af : Df;
}
function xf(n) {
  return n === H.RELIABLE ? Of : Lf;
}
const Uo = "_lossy",
  Fo = "_reliable",
  Bo = "_data_track";
function js(n) {
  n.onbufferedamountlow = null, n.onclose = null, n.onclosing = null, n.onerror = null, n.onmessage = null, n.onopen = null;
}
class Uf {
  constructor(e) {
    this.opts = e;
    const t = i => ({
      kind: i,
      lowWaterMark: Nf(i),
      highWaterMark: xf(i),
      isEngineClosed: e.isEngineClosed,
      onBufferStatusChanged: s => e.onBufferStatusChanged(i, s)
    });
    this.reliable = new Mf(Object.assign(Object.assign({}, t(H.RELIABLE)), {
      isDeferringSends: e.isReconnecting
    })), this.lossy = new No(Object.assign(Object.assign({}, t(H.LOSSY)), {
      bufferFullBehavior: "drop",
      shouldSkipSends: e.isReconnecting
    })), this.dataTrack = new No(Object.assign(Object.assign({}, t(H.DATA_TRACK_LOSSY)), {
      bufferFullBehavior: "wait",
      shouldSkipSends: e.isReconnecting
    }));
  }
  channelFor(e) {
    switch (e) {
      case H.RELIABLE:
        return this.reliable;
      case H.LOSSY:
        return this.lossy;
      case H.DATA_TRACK_LOSSY:
        return this.dataTrack;
    }
  }
  getHandle(e) {
    if (!(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1)) return this.channelFor(e).channelHandle;
    switch (e) {
      case H.RELIABLE:
        return this.reliableSub;
      case H.LOSSY:
        return this.lossySub;
      case H.DATA_TRACK_LOSSY:
        return this.dataTrackSub;
    }
  }
  get hasPublisherChannels() {
    return !!(this.reliable.channelHandle || this.lossy.channelHandle || this.dataTrack.channelHandle);
  }
  createPublisherChannels(e) {
    for (const i of [this.lossy, this.reliable, this.dataTrack]) {
      const s = i.channelHandle;
      s && js(s);
    }
    const t = (i, s, r) => {
      s.onmessage = r, s.onerror = this.opts.onDataError, s.onclose = () => this.opts.onChannelClose(i.kind), s.bufferedAmountLowThreshold = i.lowWaterMark, s.onbufferedamountlow = () => i.refreshBufferStatus(), i.attach(s);
    };
    t(this.lossy, e.createPublisherDataChannel(Uo, {
      ordered: !1,
      maxRetransmits: 0
    }), this.opts.onDataMessage), t(this.reliable, e.createPublisherDataChannel(Fo, {
      ordered: !0
    }), this.opts.onDataMessage), t(this.dataTrack, e.createPublisherDataChannel(Bo, {
      ordered: !1,
      maxRetransmits: 0
    }), this.opts.onDataTrackMessage), this.lossy.startThresholdTuning();
  }
  adoptSubscriberChannel(e) {
    let t;
    if (e.label === Fo) this.reliableSub = e, t = this.opts.onDataMessage;else if (e.label === Uo) this.lossySub = e, t = this.opts.onDataMessage;else if (e.label === Bo) this.dataTrackSub = e, t = this.opts.onDataTrackMessage;else return !1;
    return e.onmessage = t, !0;
  }
  teardown() {
    const e = [this.lossy, this.reliable, this.dataTrack],
      t = [this.lossySub, this.reliableSub, this.dataTrackSub];
    for (const i of e) {
      const s = i.channelHandle;
      s && js(s), i.detach("peer connections cleaned up");
    }
    for (const i of t) i && (js(i), i.close());
    this.lossySub = void 0, this.reliableSub = void 0, this.dataTrackSub = void 0, this.reliable.reset();
  }
}
const Sa = typeof MediaRecorder < "u";
class Ff {
  constructor() {
    throw new Error("MediaRecorder is not available in this environment");
  }
}
const Bf = Sa ? MediaRecorder : Ff;
class qf extends Bf {
  constructor(e, t) {
    if (!Sa) throw new Error("MediaRecorder is not available in this environment");
    super(new MediaStream([e.mediaStreamTrack]), t);
    let i, s;
    const r = () => s === void 0,
      a = () => {
        this.removeEventListener("dataavailable", i), this.removeEventListener("stop", a), this.removeEventListener("error", o), s?.close(), s = void 0;
      },
      o = c => {
        s?.error(c), this.removeEventListener("dataavailable", i), this.removeEventListener("stop", a), this.removeEventListener("error", o), s = void 0;
      };
    this.byteStream = new ReadableStream({
      start: c => {
        s = c, i = d => p(this, void 0, void 0, function* () {
          let l;
          if (d.data.arrayBuffer) {
            const u = yield d.data.arrayBuffer();
            l = new Uint8Array(u);
          } else if (d.data.byteArray) l = d.data.byteArray;else throw new Error("no data available!");
          r() || c.enqueue(l);
        }), this.addEventListener("dataavailable", i);
      },
      cancel: () => {
        a();
      }
    }), this.addEventListener("stop", a), this.addEventListener("error", o);
  }
}
function jf() {
  return Sa;
}
const Vf = 1e3,
  Wf = 1e4;
class Tl extends E {
  get sender() {
    return this._sender;
  }
  set sender(e) {
    this._sender = e;
  }
  get constraints() {
    return this._constraints;
  }
  get hasPreConnectBuffer() {
    return !!this.localTrackRecorder;
  }
  constructor(e, t, i) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
      r = arguments.length > 4 ? arguments[4] : void 0;
    super(e, t, r), this.manuallyStopped = !1, this.pendingDeviceChange = !1, this._isUpstreamPaused = !1, this.handleTrackMuteEvent = () => this.debouncedTrackMuteHandler().catch(() => this.log.debug("track mute bounce got cancelled by an unmute event", this.logContext)), this.debouncedTrackMuteHandler = ha(() => p(this, void 0, void 0, function* () {
      yield this.pauseUpstream();
    }), 5e3), this.handleTrackUnmuteEvent = () => p(this, void 0, void 0, function* () {
      this.debouncedTrackMuteHandler.cancel("unmute"), yield this.resumeUpstream();
    }), this.handleEnded = () => {
      this.isInBackground && (this.reacquireTrack = !0), this._mediaStreamTrack.removeEventListener("mute", this.handleTrackMuteEvent), this._mediaStreamTrack.removeEventListener("unmute", this.handleTrackUnmuteEvent), this.emit(I.Ended, this);
    }, this.reacquireTrack = !1, this.providedByUser = s, this.muteLock = new ye(), this.pauseUpstreamLock = new ye(), this.trackChangeLock = new ye(), this.trackChangeLock.lock().then(a => p(this, void 0, void 0, function* () {
      try {
        yield this.setMediaStreamTrack(e, !0);
      } finally {
        a();
      }
    })), this._constraints = e.getConstraints(), i && (this._constraints = i);
  }
  get id() {
    return this._mediaStreamTrack.id;
  }
  get dimensions() {
    if (this.kind !== E.Kind.Video) return;
    const e = this._mediaStreamTrack.getSettings(),
      t = e.width,
      i = e.height;
    if (t && i) return {
      width: t,
      height: i
    };
  }
  get isUpstreamPaused() {
    return this._isUpstreamPaused;
  }
  get isUserProvided() {
    return this.providedByUser;
  }
  get isStopped() {
    return this.manuallyStopped;
  }
  get mediaStreamTrack() {
    var e, t;
    return (t = (e = this.processor) === null || e === void 0 ? void 0 : e.processedTrack) !== null && t !== void 0 ? t : this._mediaStreamTrack;
  }
  get isLocal() {
    return !0;
  }
  getSourceTrackSettings() {
    return this._mediaStreamTrack.getSettings();
  }
  setMediaStreamTrack(e, t, i) {
    return p(this, void 0, void 0, function* () {
      var s;
      if (e === this._mediaStreamTrack && !t) return;
      this._mediaStreamTrack && (this.attachedElements.forEach(a => {
        mi(this._mediaStreamTrack, a);
      }), this.debouncedTrackMuteHandler.cancel("new-track"), this._mediaStreamTrack.removeEventListener("ended", this.handleEnded), this._mediaStreamTrack.removeEventListener("mute", this.handleTrackMuteEvent), this._mediaStreamTrack.removeEventListener("unmute", this.handleTrackUnmuteEvent)), this.mediaStream = new MediaStream([e]), e && (e.addEventListener("ended", this.handleEnded), e.addEventListener("mute", this.handleTrackMuteEvent), e.addEventListener("unmute", this.handleTrackUnmuteEvent), this._constraints = e.getConstraints());
      let r;
      if (this.processor && e) {
        if (this.log.debug("restarting processor", this.logContext), this.kind === "unknown") throw TypeError("cannot set processor on track of unknown kind");
        this.processorElement && (di(e, this.processorElement), this.processorElement.muted = !0), yield this.processor.restart({
          track: e,
          kind: this.kind,
          element: this.processorElement,
          audioContext: this.audioContext,
          localTrack: this
        }), r = this.processor.processedTrack;
      }
      this.sender && ((s = this.sender.transport) === null || s === void 0 ? void 0 : s.state) !== "closed" && (yield this.sender.replaceTrack(r ?? e)), !this.providedByUser && this._mediaStreamTrack !== e && this._mediaStreamTrack.stop(), this._mediaStreamTrack = e, e && (this._mediaStreamTrack.enabled = i ? !0 : !this.isMuted, yield this.resumeUpstream(), this.attachedElements.forEach(a => {
        di(r ?? e, a);
      })), yield this.onMediaStreamTrackChanged();
    });
  }
  onMediaStreamTrackChanged() {
    return p(this, void 0, void 0, function* () {});
  }
  waitForDimensions() {
    return p(this, arguments, void 0, function () {
      var e = this;
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Vf;
      return function* () {
        if (e.kind === E.Kind.Audio) throw new Error("cannot get dimensions for audio tracks");
        const i = Date.now();
        for ($m() && (yield jm(e._mediaStreamTrack, t, e.attachedElements));;) {
          const s = e.dimensions;
          if (s) return s;
          if (Date.now() - i >= t) break;
          yield Ce(50);
        }
        throw new ft("unable to get track dimensions after timeout");
      }();
    });
  }
  setDeviceId(e) {
    return p(this, void 0, void 0, function* () {
      return this._constraints.deviceId === e && this._mediaStreamTrack.getSettings().deviceId === gi(e) && this._mediaStreamTrack.readyState === "live" ? !0 : (this._constraints.deviceId = e, this.isMuted ? (this.pendingDeviceChange = !0, !0) : (yield this.restartTrack(), gi(e) === this._mediaStreamTrack.getSettings().deviceId));
    });
  }
  getDeviceId() {
    return p(this, arguments, void 0, function () {
      var e = this;
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      return function* () {
        if (e.source === E.Source.ScreenShare) return;
        const i = e._mediaStreamTrack.getSettings(),
          s = i.deviceId,
          r = i.groupId,
          a = e.kind === E.Kind.Audio ? "audioinput" : "videoinput";
        return t ? be.getInstance().normalizeDeviceId(a, s, r) : s;
      }();
    });
  }
  mute() {
    return p(this, void 0, void 0, function* () {
      return this.setTrackMuted(!0), this;
    });
  }
  unmute() {
    return p(this, void 0, void 0, function* () {
      return this.setTrackMuted(!1), this;
    });
  }
  replaceTrack(e, t) {
    return p(this, void 0, void 0, function* () {
      const i = yield this.trackChangeLock.lock();
      try {
        if (!this.sender) throw new ft("unable to replace an unpublished track");
        let s, r;
        typeof t == "boolean" ? s = t : t !== void 0 && (s = t.userProvidedTrack, r = t.stopProcessor), this.providedByUser = s ?? !0, this.log.debug("replace MediaStreamTrack", this.logContext), yield this.setMediaStreamTrack(e), r && this.processor && (yield this.internalStopProcessor());
      } finally {
        i();
      }
      return yield this.onSenderTrackSwapped(), this;
    });
  }
  onSenderTrackSwapped() {
    return p(this, void 0, void 0, function* () {});
  }
  restart(e, t) {
    return p(this, void 0, void 0, function* () {
      this.manuallyStopped = !1;
      const i = yield this.trackChangeLock.lock();
      try {
        e || (e = this._constraints);
        const s = e,
          r = s.deviceId,
          a = s.facingMode,
          o = cm(e, ["deviceId", "facingMode"]);
        this.log.debug("restarting track with constraints", Object.assign(Object.assign({}, this.logContext), {
          constraints: e
        }));
        const c = {
          audio: !1,
          video: !1
        };
        this.kind === E.Kind.Video ? c.video = r || a ? {
          deviceId: r,
          facingMode: a
        } : !0 : c.audio = r ? Object.assign({
          deviceId: r
        }, o) : !0, this.attachedElements.forEach(u => {
          mi(this.mediaStreamTrack, u);
        }), this._mediaStreamTrack.removeEventListener("ended", this.handleEnded), this._mediaStreamTrack.stop();
        let d;
        try {
          d = yield navigator.mediaDevices.getUserMedia(c);
        } catch (u) {
          throw rp(u), u;
        }
        const l = d.getTracks()[0];
        try {
          this.kind === E.Kind.Video && (yield l.applyConstraints(o)), l.addEventListener("ended", this.handleEnded), this.log.debug("re-acquired MediaStreamTrack", this.logContext), yield this.setMediaStreamTrack(l, !1, t);
        } catch (u) {
          throw this._mediaStreamTrack !== l && l.stop(), u;
        }
        return this._constraints = e, this.pendingDeviceChange = !1, this.emit(I.Restarted, this), this;
      } finally {
        this.manuallyStopped && (this.log.warn("track was stopped during a restart, stopping restarted track", this.logContext), this.stop()), i();
      }
    });
  }
  setTrackMuted(e) {
    this.log.debug("setting ".concat(this.kind, " track ").concat(e ? "muted" : "unmuted"), this.logContext), !(this.isMuted === e && this._mediaStreamTrack.enabled !== e) && (this.isMuted = e, this._mediaStreamTrack.enabled = !e, this.emit(e ? I.Muted : I.Unmuted, this));
  }
  get needsReAcquisition() {
    return this._mediaStreamTrack.readyState !== "live" || this._mediaStreamTrack.muted || !this._mediaStreamTrack.enabled || this.reacquireTrack;
  }
  handleAppVisibilityChanged() {
    const e = Object.create(null, {
      handleAppVisibilityChanged: {
        get: () => super.handleAppVisibilityChanged
      }
    });
    return p(this, void 0, void 0, function* () {
      yield e.handleAppVisibilityChanged.call(this), nl() && (this.log.debug("visibility changed, is in Background: ".concat(this.isInBackground), this.logContext), !this.isInBackground && this.needsReAcquisition && !this.isUserProvided && !this.isMuted && (this.log.debug("track needs to be reacquired, restarting ".concat(this.source), this.logContext), yield this.restart(), this.reacquireTrack = !1));
    });
  }
  stop() {
    var e;
    this.manuallyStopped = !0, super.stop(), this._mediaStreamTrack.removeEventListener("ended", this.handleEnded), this._mediaStreamTrack.removeEventListener("mute", this.handleTrackMuteEvent), this._mediaStreamTrack.removeEventListener("unmute", this.handleTrackUnmuteEvent), (e = this.processor) === null || e === void 0 || e.destroy().catch(t => {
      this.log.error("failed to destroy processor", Object.assign(Object.assign({}, this.logContext), {
        error: t
      }));
    }), this.processor = void 0;
  }
  pauseUpstream() {
    return p(this, void 0, void 0, function* () {
      var e;
      const t = yield this.pauseUpstreamLock.lock();
      try {
        if (this._isUpstreamPaused === !0) return;
        if (!this.sender) {
          this.log.warn("unable to pause upstream for an unpublished track", this.logContext);
          return;
        }
        this._isUpstreamPaused = !0, this.emit(I.UpstreamPaused, this);
        const i = Ee();
        if (i?.name === "Safari" && tt(i.version, "12.0") < 0) throw new ca("pauseUpstream is not supported on Safari < 12.");
        ((e = this.sender.transport) === null || e === void 0 ? void 0 : e.state) !== "closed" && (yield this.sender.replaceTrack(null));
      } finally {
        t();
      }
    });
  }
  resumeUpstream() {
    return p(this, void 0, void 0, function* () {
      var e;
      const t = yield this.pauseUpstreamLock.lock();
      try {
        if (this._isUpstreamPaused === !1) return;
        if (!this.sender) {
          this.log.warn("unable to resume upstream for an unpublished track", this.logContext);
          return;
        }
        this._isUpstreamPaused = !1, this.emit(I.UpstreamResumed, this), ((e = this.sender.transport) === null || e === void 0 ? void 0 : e.state) !== "closed" && (yield this.sender.replaceTrack(this.mediaStreamTrack));
      } finally {
        t();
      }
    });
  }
  getRTCStatsReport() {
    return p(this, void 0, void 0, function* () {
      var e;
      return !((e = this.sender) === null || e === void 0) && e.getStats ? yield this.sender.getStats() : void 0;
    });
  }
  setProcessor(e) {
    return p(this, arguments, void 0, function (t) {
      var i = this;
      let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      return function* () {
        var r;
        const a = yield i.trackChangeLock.lock();
        try {
          i.log.debug("setting up processor", i.logContext);
          const o = document.createElement(i.kind),
            c = {
              kind: i.kind,
              track: i._mediaStreamTrack,
              element: o,
              audioContext: i.audioContext,
              localTrack: i
            };
          if (yield t.init(c), i.log.debug("processor initialized", i.logContext), i.processor && (yield i.internalStopProcessor()), i.kind === "unknown") throw TypeError("cannot set processor on track of unknown kind");
          if (di(i._mediaStreamTrack, o), o.muted = !0, o.play().catch(d => {
            d instanceof DOMException && d.name === "AbortError" ? (i.log.warn("failed to play processor element, retrying", Object.assign(Object.assign({}, i.logContext), {
              error: d
            })), setTimeout(() => {
              o.play().catch(l => {
                i.log.error("failed to play processor element", Object.assign(Object.assign({}, i.logContext), {
                  err: l
                }));
              });
            }, 100)) : i.log.error("failed to play processor element", Object.assign(Object.assign({}, i.logContext), {
              error: d
            }));
          }), i.processor = t, i.processorElement = o, i.processor.processedTrack) {
            for (const d of i.attachedElements) d !== i.processorElement && s && (mi(i._mediaStreamTrack, d), di(i.processor.processedTrack, d));
            yield (r = i.sender) === null || r === void 0 ? void 0 : r.replaceTrack(i.processor.processedTrack);
          }
          i.emit(I.TrackProcessorUpdate, i.processor);
        } finally {
          a();
        }
        yield i.onSenderTrackSwapped();
      }();
    });
  }
  getProcessor() {
    return this.processor;
  }
  stopProcessor() {
    return p(this, arguments, void 0, function () {
      var e = this;
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      return function* () {
        const i = yield e.trackChangeLock.lock();
        try {
          yield e.internalStopProcessor(t);
        } finally {
          i();
        }
        yield e.onSenderTrackSwapped();
      }();
    });
  }
  internalStopProcessor() {
    return p(this, arguments, void 0, function () {
      var e = this;
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      return function* () {
        var i, s;
        e.processor && (e.log.debug("stopping processor", e.logContext), (i = e.processor.processedTrack) === null || i === void 0 || i.stop(), yield e.processor.destroy(), e.processor = void 0, t || ((s = e.processorElement) === null || s === void 0 || s.remove(), e.processorElement = void 0), yield e._mediaStreamTrack.applyConstraints(e._constraints), yield e.setMediaStreamTrack(e._mediaStreamTrack, !0), e.emit(I.TrackProcessorUpdate));
      }();
    });
  }
  startPreConnectBuffer() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 100;
    if (!jf()) {
      this.log.warn("MediaRecorder is not available, cannot start preconnect buffer", this.logContext);
      return;
    }
    if (this.localTrackRecorder) {
      this.log.warn("preconnect buffer already started");
      return;
    } else {
      let t = "audio/webm;codecs=opus";
      MediaRecorder.isTypeSupported(t) || (t = "video/mp4"), this.localTrackRecorder = new qf(this, {
        mimeType: t
      });
    }
    this.localTrackRecorder.start(e), this.autoStopPreConnectBuffer = setTimeout(() => {
      this.log.warn("preconnect buffer timed out, stopping recording automatically", this.logContext), this.stopPreConnectBuffer();
    }, Wf);
  }
  stopPreConnectBuffer() {
    clearTimeout(this.autoStopPreConnectBuffer), this.localTrackRecorder && (this.localTrackRecorder.stop(), this.localTrackRecorder = void 0);
  }
  getPreConnectBuffer() {
    var e;
    return (e = this.localTrackRecorder) === null || e === void 0 ? void 0 : e.byteStream;
  }
  getPreConnectBufferMimeType() {
    var e;
    return (e = this.localTrackRecorder) === null || e === void 0 ? void 0 : e.mimeType;
  }
}
class Ri extends Tl {
  get enhancedNoiseCancellation() {
    return this.isKrispNoiseFilterEnabled;
  }
  constructor(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
      s = arguments.length > 3 ? arguments[3] : void 0,
      r = arguments.length > 4 ? arguments[4] : void 0;
    super(e, E.Kind.Audio, t, i, r), this.stopOnMute = !1, this.isKrispNoiseFilterEnabled = !1, this.monitorSender = () => p(this, void 0, void 0, function* () {
      if (!this.sender) {
        this._currentBitrate = 0;
        return;
      }
      let a;
      try {
        a = yield this.getSenderStats();
      } catch (o) {
        this.log.error("could not get audio sender stats", Object.assign(Object.assign({}, this.logContext), {
          error: o
        }));
        return;
      }
      a && this.prevStats && (this._currentBitrate = cs(a, this.prevStats)), this.prevStats = a;
    }), this.handleKrispNoiseFilterEnable = () => {
      this.isKrispNoiseFilterEnabled = !0, this.log.debug("Krisp noise filter enabled", this.logContext), this.emit(I.AudioTrackFeatureUpdate, this, Te.TF_ENHANCED_NOISE_CANCELLATION, !0);
    }, this.handleKrispNoiseFilterDisable = () => {
      this.isKrispNoiseFilterEnabled = !1, this.log.debug("Krisp noise filter disabled", this.logContext), this.emit(I.AudioTrackFeatureUpdate, this, Te.TF_ENHANCED_NOISE_CANCELLATION, !1);
    }, this.audioContext = s, this.checkForSilence();
  }
  mute() {
    const e = Object.create(null, {
      mute: {
        get: () => super.mute
      }
    });
    return p(this, void 0, void 0, function* () {
      const t = yield this.muteLock.lock();
      try {
        return this.isMuted ? (this.log.debug("Track already muted", this.logContext), this) : (this.source === E.Source.Microphone && this.stopOnMute && !this.isUserProvided && (this.log.debug("stopping mic track", this.logContext), this._mediaStreamTrack.stop()), yield e.mute.call(this), this);
      } finally {
        t();
      }
    });
  }
  unmute() {
    const e = Object.create(null, {
      unmute: {
        get: () => super.unmute
      }
    });
    return p(this, void 0, void 0, function* () {
      const t = yield this.muteLock.lock();
      try {
        return this.isMuted ? (this.source === E.Source.Microphone && (this.stopOnMute || this._mediaStreamTrack.readyState === "ended" || this.pendingDeviceChange) && !this.isUserProvided && (this.log.debug("reacquiring mic track", this.logContext), yield this.restart(void 0, !0)), yield e.unmute.call(this), this) : (this.log.debug("Track already unmuted", this.logContext), this);
      } finally {
        t();
      }
    });
  }
  restartTrack(e) {
    return p(this, void 0, void 0, function* () {
      let t;
      if (e) {
        const i = da({
          audio: e
        });
        typeof i.audio != "boolean" && (t = i.audio);
      }
      yield this.restart(t);
    });
  }
  applyConstraints(e) {
    return p(this, void 0, void 0, function* () {
      const t = yield this.trackChangeLock.lock();
      try {
        const i = yield this._mediaStreamTrack.applyConstraints(e);
        return this._constraints = Object.assign(Object.assign({}, this._constraints), e), i;
      } finally {
        t();
      }
    });
  }
  restart(e, t) {
    const i = Object.create(null, {
      restart: {
        get: () => super.restart
      }
    });
    return p(this, void 0, void 0, function* () {
      const s = yield i.restart.call(this, e, t);
      return this.checkForSilence(), s;
    });
  }
  startMonitor() {
    Oe() && (this.monitorInterval || (this.monitorInterval = setInterval(() => {
      this.monitorSender();
    }, ma)));
  }
  observeProcessedTrack(e) {
    this.observedProcessedTrack !== e && (this.observedProcessedTrack && (this.observedProcessedTrack.removeEventListener("enable-lk-krisp-noise-filter", this.handleKrispNoiseFilterEnable), this.observedProcessedTrack.removeEventListener("disable-lk-krisp-noise-filter", this.handleKrispNoiseFilterDisable), this.observedProcessedTrack = void 0, this.isKrispNoiseFilterEnabled && this.handleKrispNoiseFilterDisable()), e && (e.addEventListener("enable-lk-krisp-noise-filter", this.handleKrispNoiseFilterEnable), e.addEventListener("disable-lk-krisp-noise-filter", this.handleKrispNoiseFilterDisable), this.observedProcessedTrack = e));
  }
  setProcessor(e) {
    return p(this, void 0, void 0, function* () {
      var t;
      const i = yield this.trackChangeLock.lock();
      try {
        if (!We() && !this.audioContext) throw Error("Audio context needs to be set on LocalAudioTrack in order to enable processors");
        this.processor && (yield this.internalStopProcessor());
        const s = {
          kind: this.kind,
          track: this._mediaStreamTrack,
          audioContext: this.audioContext,
          localTrack: this
        };
        this.log.debug("setting up audio processor ".concat(e.name), this.logContext), yield e.init(s), this.processor = e, this.processor.processedTrack && (yield (t = this.sender) === null || t === void 0 ? void 0 : t.replaceTrack(this.processor.processedTrack), this.observeProcessedTrack(this.processor.processedTrack)), this.emit(I.TrackProcessorUpdate, this.processor);
      } finally {
        i();
      }
    });
  }
  onMediaStreamTrackChanged() {
    return p(this, void 0, void 0, function* () {
      var e;
      this.observeProcessedTrack((e = this.processor) === null || e === void 0 ? void 0 : e.processedTrack);
    });
  }
  internalStopProcessor() {
    const e = Object.create(null, {
      internalStopProcessor: {
        get: () => super.internalStopProcessor
      }
    });
    return p(this, arguments, void 0, function () {
      var t = this;
      let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      return function* () {
        t.observeProcessedTrack(void 0), yield e.internalStopProcessor.call(t, i);
      }();
    });
  }
  stop() {
    this.observeProcessedTrack(void 0), super.stop();
  }
  setAudioContext(e) {
    return p(this, void 0, void 0, function* () {
      var t;
      if (this.audioContext === e) return;
      const i = yield this.trackChangeLock.lock();
      try {
        if (this.audioContext = e, !this.processor || We()) return;
        if (!e) {
          this.log.debug("stopping audio processor, audio context has been removed", this.logContext), yield this.internalStopProcessor();
          return;
        }
        this.log.debug("restarting audio processor on new audio context", this.logContext), yield this.processor.restart({
          kind: this.kind,
          track: this._mediaStreamTrack,
          audioContext: e,
          localTrack: this
        }), this.processor.processedTrack && (yield (t = this.sender) === null || t === void 0 ? void 0 : t.replaceTrack(this.processor.processedTrack), this.observeProcessedTrack(this.processor.processedTrack)), this.emit(I.TrackProcessorUpdate, this.processor);
      } finally {
        i();
      }
    });
  }
  getSenderStats() {
    return p(this, void 0, void 0, function* () {
      var e;
      if (!(!((e = this.sender) === null || e === void 0) && e.getStats)) return;
      const t = yield this.sender.getStats();
      let i;
      return t.forEach(s => {
        if (s.type === "outbound-rtp") {
          i = {
            type: "audio",
            streamId: s.id,
            packetsSent: s.packetsSent,
            bytesSent: s.bytesSent,
            timestamp: s.timestamp
          };
          const r = t.get(s.remoteId);
          r && (i.packetsLost = r.packetsLost, i.jitter = r.jitter, i.roundTripTime = r.roundTripTime);
        }
      }), i;
    });
  }
  checkForSilence() {
    return p(this, void 0, void 0, function* () {
      const e = yield $d(this);
      return e && (this.isMuted || this.log.debug("silence detected on local audio track", this.logContext), this.emit(I.AudioSilenceDetected)), e;
    });
  }
}
function Hf(n, e, t) {
  switch (n.kind) {
    case "audio":
      return new Ri(n, e, !1, void 0, t);
    case "video":
      return new Gt(n, e, !1, t);
    default:
      throw new ft("unsupported track type: ".concat(n.kind));
  }
}
const Kf = Object.values(Qt),
  Gf = Object.values(yr),
  zf = Object.values(nn),
  Jf = [Qt.h180, Qt.h360],
  Qf = [yr.h180, yr.h360],
  Yf = n => [{
    scaleResolutionDownBy: 2,
    fps: n.encoding.maxFramerate
  }].map(t => {
    var i, s;
    return new $(Math.floor(n.width / t.scaleResolutionDownBy), Math.floor(n.height / t.scaleResolutionDownBy), Math.max(15e4, Math.floor(n.encoding.maxBitrate / (Math.pow(t.scaleResolutionDownBy, 2) * (((i = n.encoding.maxFramerate) !== null && i !== void 0 ? i : 30) / ((s = t.fps) !== null && s !== void 0 ? s : 30))))), t.fps, n.encoding.priority);
  }),
  Dr = ["q", "h", "f"];
function zn(n, e, t, i) {
  var s, r;
  let a = i?.videoEncoding;
  n && (a = i?.screenShareEncoding);
  const o = i?.simulcast,
    c = i?.scalabilityMode,
    d = i?.videoCodec,
    l = fi(d, i);
  if (!a && !o && !c || !e || !t) return [{}];
  a || (a = Xf(n, e, t, d), W.debug("using video encoding", a));
  const u = a.maxFramerate,
    h = new $(e, t, a.maxBitrate, a.maxFramerate, a.priority);
  if (c && Dt(d) && !l) {
    const S = new Cl(c),
      R = [];
    if (S.spatial > 3) throw new Error("unsupported scalabilityMode: ".concat(c));
    const b = Ee();
    if (tl()) {
      const T = S.suffix == "h" ? 2 : 3,
        C = Zm(b);
      for (let M = 0; M < S.spatial; M += 1) R.push({
        rid: Dr[2 - M],
        maxBitrate: a.maxBitrate / Math.pow(T, M),
        maxFramerate: h.encoding.maxFramerate,
        scaleResolutionDownBy: C ? Math.pow(2, M) : void 0
      });
      R[0].scalabilityMode = c;
    } else R.push({
      maxBitrate: a.maxBitrate,
      maxFramerate: h.encoding.maxFramerate,
      scalabilityMode: c
    });
    return h.encoding.priority && (R[0].priority = h.encoding.priority, R[0].networkPriority = h.encoding.priority), W.debug("using svc encoding", {
      encodings: R
    }), R;
  }
  if (!o) return [a];
  const m = S => (l && S.forEach(R => {
    R.scalabilityMode = c;
  }), S);
  let g;
  n ? g = (s = jo(i?.screenShareSimulcastLayers)) !== null && s !== void 0 ? s : qo(n, h) : g = (r = jo(i?.videoSimulcastLayers)) !== null && r !== void 0 ? r : qo(n, h);
  let f;
  if (g.length > 0) {
    const S = g[0];
    if (g.length > 1) {
      var y = g,
        k = x(y, 2);
      f = k[1];
    }
    const R = Math.max(e, t);
    if (R >= 960 && f) return m(Vs(e, t, [S, f, h], u));
    if (R >= 480) return m(Vs(e, t, [S, h], u));
  }
  return m(Vs(e, t, [h]));
}
function $f(n, e, t) {
  var i, s;
  return Dt(n) && !fi(n, e) ? (s = (i = t[0]) === null || i === void 0 ? void 0 : i.maxBitrate) !== null && s !== void 0 ? s : 0 : t.reduce((r, a) => {
    var o;
    return r + ((o = a.maxBitrate) !== null && o !== void 0 ? o : 0);
  }, 0);
}
function Sl(n, e, t) {
  var i, s, r, a;
  if (!t.backupCodec || t.backupCodec === !0 || t.backupCodec.codec === t.videoCodec) return;
  e !== t.backupCodec.codec && W.warn("requested a different codec than specified as backup", {
    serverRequested: e,
    backup: t.backupCodec.codec
  }), t.videoCodec = e, t.videoEncoding = t.backupCodec.encoding;
  const o = n.mediaStreamTrack.getSettings(),
    c = (i = o.width) !== null && i !== void 0 ? i : (s = n.dimensions) === null || s === void 0 ? void 0 : s.width,
    d = (r = o.height) !== null && r !== void 0 ? r : (a = n.dimensions) === null || a === void 0 ? void 0 : a.height;
  return n.source === E.Source.ScreenShare && t.simulcast && (t.simulcast = !1), zn(n.source === E.Source.ScreenShare, c, d, t);
}
function Xf(n, e, t, i) {
  const s = Zf(n, e, t);
  let r = s[0].encoding;
  const a = Math.max(e, t);
  for (let o = 0; o < s.length; o += 1) {
    const c = s[o];
    if (r = c.encoding, c.width >= a) break;
  }
  if (i) switch (i) {
    case "av1":
    case "h265":
      r = Object.assign({}, r), r.maxBitrate = r.maxBitrate * .7;
      break;
    case "vp9":
      r = Object.assign({}, r), r.maxBitrate = r.maxBitrate * .85;
      break;
  }
  return r;
}
function Zf(n, e, t) {
  if (n) return zf;
  const i = e > t ? e / t : t / e;
  return Math.abs(i - 16 / 9) < Math.abs(i - 4 / 3) ? Kf : Gf;
}
function qo(n, e) {
  if (n) return Yf(e);
  const t = e.width,
    i = e.height,
    s = t > i ? t / i : i / t;
  return Math.abs(s - 16 / 9) < Math.abs(s - 4 / 3) ? Jf : Qf;
}
function Vs(n, e, t, i) {
  const s = [];
  if (t.forEach((r, a) => {
    if (a >= Dr.length) return;
    const o = Math.min(n, e),
      d = {
        rid: Dr[a],
        scaleResolutionDownBy: Math.max(1, o / Math.min(r.width, r.height)),
        maxBitrate: r.encoding.maxBitrate
      },
      l = i && r.encoding.maxFramerate ? Math.min(i, r.encoding.maxFramerate) : r.encoding.maxFramerate;
    l && (d.maxFramerate = l);
    const u = Ee(),
      h = u?.name === "Firefox" && u.os !== "iOS" || a === 0;
    r.encoding.priority && h && (d.priority = r.encoding.priority, d.networkPriority = r.encoding.priority), s.push(d);
  }), We() && rl() === "ios") {
    let r;
    s.forEach(o => {
      r ? o.maxFramerate && o.maxFramerate > r && (r = o.maxFramerate) : r = o.maxFramerate;
    });
    let a = !0;
    s.forEach(o => {
      var c;
      o.maxFramerate != r && (a && (a = !1, W.info("Simulcast on iOS React-Native requires all encodings to share the same framerate.")), W.info('Setting framerate of encoding "'.concat((c = o.rid) !== null && c !== void 0 ? c : "", '" to ').concat(r)), o.maxFramerate = r);
    });
  }
  return s;
}
function jo(n) {
  if (n) return n.slice().sort((e, t) => {
    const i = e.encoding,
      s = t.encoding;
    return i.maxBitrate > s.maxBitrate ? 1 : i.maxBitrate < s.maxBitrate ? -1 : i.maxBitrate === s.maxBitrate && i.maxFramerate && s.maxFramerate ? i.maxFramerate > s.maxFramerate ? 1 : -1 : 0;
  });
}
class Cl {
  constructor(e) {
    const t = e.match(/^L(\d)T(\d)(h|_KEY|_KEY_SHIFT){0,1}$/);
    if (!t) throw new Error("invalid scalability mode");
    if (this.spatial = parseInt(t[1]), this.temporal = parseInt(t[2]), t.length > 3) switch (t[3]) {
      case "h":
      case "_KEY":
      case "_KEY_SHIFT":
        this.suffix = t[3];
    }
  }
  toString() {
    var e;
    return "L".concat(this.spatial, "T").concat(this.temporal).concat((e = this.suffix) !== null && e !== void 0 ? e : "");
  }
}
function eg(n) {
  switch (n.source) {
    case E.Source.Camera:
      return "maintain-framerate";
    case E.Source.ScreenShare:
      return "maintain-resolution";
    default:
      return "balanced";
  }
}
const tg = 5e3;
class Gt extends Tl {
  get sender() {
    return this._sender;
  }
  set sender(e) {
    this._sender = e, this.degradationPreference && this.setDegradationPreference(this.degradationPreference);
  }
  constructor(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
      s = arguments.length > 3 ? arguments[3] : void 0;
    super(e, E.Kind.Video, t, i, s), this.simulcastCodecs = new Map(), this.degradationPreference = "balanced", this.isCpuConstrained = !1, this.optimizeForPerformance = !1, this.monitorSender = () => p(this, void 0, void 0, function* () {
      if (!this.sender) {
        this._currentBitrate = 0;
        return;
      }
      let r;
      try {
        r = yield this.getSenderStats();
      } catch (c) {
        this.log.error("could not get video sender stats", Object.assign(Object.assign({}, this.logContext), {
          error: c
        }));
        return;
      }
      const a = new Map(r.map(c => [c.rid, c])),
        o = r.some(c => c.qualityLimitationReason === "cpu");
      if (o !== this.isCpuConstrained && (this.isCpuConstrained = o, this.isCpuConstrained && this.emit(I.CpuConstrained)), this.prevStats) {
        let c = 0;
        a.forEach((d, l) => {
          var u;
          const h = (u = this.prevStats) === null || u === void 0 ? void 0 : u.get(l);
          c += cs(d, h);
        }), this._currentBitrate = c;
      }
      this.prevStats = a;
    }), this.senderLock = new ye();
  }
  get isSimulcast() {
    return !!(this.sender && this.sender.getParameters().encodings.length > 1);
  }
  startMonitor(e) {
    var t;
    if (this.signalClient = e, !Oe()) return;
    const i = (t = this.sender) === null || t === void 0 ? void 0 : t.getParameters();
    i && (this.encodings = i.encodings), !this.monitorInterval && (this.monitorInterval = setInterval(() => {
      this.monitorSender();
    }, ma));
  }
  stop() {
    this._mediaStreamTrack.getConstraints(), this.simulcastCodecs.forEach(e => {
      e.mediaStreamTrack.stop();
    }), super.stop();
  }
  pauseUpstream() {
    const e = Object.create(null, {
      pauseUpstream: {
        get: () => super.pauseUpstream
      }
    });
    return p(this, void 0, void 0, function* () {
      var t, i, s, r, a;
      yield e.pauseUpstream.call(this);
      try {
        for (var o = !0, c = Ve(this.simulcastCodecs.values()), d; d = yield c.next(), t = d.done, !t; o = !0) r = d.value, o = !1, yield (a = r.sender) === null || a === void 0 ? void 0 : a.replaceTrack(null);
      } catch (l) {
        i = {
          error: l
        };
      } finally {
        try {
          !o && !t && (s = c.return) && (yield s.call(c));
        } finally {
          if (i) throw i.error;
        }
      }
    });
  }
  resumeUpstream() {
    const e = Object.create(null, {
      resumeUpstream: {
        get: () => super.resumeUpstream
      }
    });
    return p(this, void 0, void 0, function* () {
      var t, i, s, r, a;
      yield e.resumeUpstream.call(this);
      try {
        for (var o = !0, c = Ve(this.simulcastCodecs.values()), d; d = yield c.next(), t = d.done, !t; o = !0) {
          r = d.value, o = !1;
          const l = r;
          yield (a = l.sender) === null || a === void 0 ? void 0 : a.replaceTrack(l.mediaStreamTrack);
        }
      } catch (l) {
        i = {
          error: l
        };
      } finally {
        try {
          !o && !t && (s = c.return) && (yield s.call(c));
        } finally {
          if (i) throw i.error;
        }
      }
    });
  }
  mute() {
    const e = Object.create(null, {
      mute: {
        get: () => super.mute
      }
    });
    return p(this, void 0, void 0, function* () {
      const t = yield this.muteLock.lock();
      try {
        return this.isMuted ? (this.log.debug("Track already muted", this.logContext), this) : (this.source === E.Source.Camera && !this.isUserProvided && (this.log.debug("stopping camera track", this.logContext), this._mediaStreamTrack.stop()), yield e.mute.call(this), this);
      } finally {
        t();
      }
    });
  }
  unmute() {
    const e = Object.create(null, {
      unmute: {
        get: () => super.unmute
      }
    });
    return p(this, void 0, void 0, function* () {
      const t = yield this.muteLock.lock();
      try {
        return this.isMuted ? (this.source === E.Source.Camera && !this.isUserProvided && (this.log.debug("reacquiring camera track", this.logContext), yield this.restart(void 0, !0)), yield e.unmute.call(this), this) : (this.log.debug("Track already unmuted", this.logContext), this);
      } finally {
        t();
      }
    });
  }
  setTrackMuted(e) {
    super.setTrackMuted(e);
    for (const t of this.simulcastCodecs.values()) t.mediaStreamTrack.enabled = !e;
  }
  getSenderStats() {
    return p(this, void 0, void 0, function* () {
      var e;
      if (!(!((e = this.sender) === null || e === void 0) && e.getStats)) return [];
      const t = [],
        i = yield this.sender.getStats();
      return i.forEach(s => {
        var r;
        if (s.type === "outbound-rtp") {
          const a = {
              type: "video",
              streamId: s.id,
              frameHeight: s.frameHeight,
              frameWidth: s.frameWidth,
              framesPerSecond: s.framesPerSecond,
              framesSent: s.framesSent,
              firCount: s.firCount,
              pliCount: s.pliCount,
              nackCount: s.nackCount,
              packetsSent: s.packetsSent,
              bytesSent: s.bytesSent,
              qualityLimitationReason: s.qualityLimitationReason,
              qualityLimitationDurations: s.qualityLimitationDurations,
              qualityLimitationResolutionChanges: s.qualityLimitationResolutionChanges,
              rid: (r = s.rid) !== null && r !== void 0 ? r : s.id,
              retransmittedPacketsSent: s.retransmittedPacketsSent,
              targetBitrate: s.targetBitrate,
              timestamp: s.timestamp
            },
            o = i.get(s.remoteId);
          o && (a.jitter = o.jitter, a.packetsLost = o.packetsLost, a.roundTripTime = o.roundTripTime), t.push(a);
        }
      }), t.sort((s, r) => {
        var a, o;
        return ((a = r.frameWidth) !== null && a !== void 0 ? a : 0) - ((o = s.frameWidth) !== null && o !== void 0 ? o : 0);
      }), t;
    });
  }
  isSvcPublish(e) {
    return Dt(e) && !fi(e, this.publishOptions);
  }
  setPublishingQuality(e) {
    const t = [];
    for (let i = Be.LOW; i <= Be.HIGH; i += 1) t.push(new sa({
      quality: i,
      enabled: i <= e
    }));
    this.log.debug("setting publishing quality. max quality ".concat(e), this.logContext), this.setPublishingLayers(this.isSvcPublish(this.codec), t);
  }
  restartTrack(e) {
    return p(this, void 0, void 0, function* () {
      var t, i, s, r, a;
      let o;
      if (e) {
        const u = da({
          video: e
        });
        typeof u.video != "boolean" && (o = u.video);
      }
      yield this.restart(o), this.isCpuConstrained = !1;
      try {
        for (var c = !0, d = Ve(this.simulcastCodecs.values()), l; l = yield d.next(), t = l.done, !t; c = !0) {
          r = l.value, c = !1;
          const u = r;
          u.sender && ((a = u.sender.transport) === null || a === void 0 ? void 0 : a.state) !== "closed" && (u.mediaStreamTrack = this.mediaStreamTrack.clone(), yield u.sender.replaceTrack(u.mediaStreamTrack));
        }
      } catch (u) {
        i = {
          error: u
        };
      } finally {
        try {
          !c && !t && (s = d.return) && (yield s.call(d));
        } finally {
          if (i) throw i.error;
        }
      }
      yield this.onSenderTrackSwapped();
    });
  }
  onSenderTrackSwapped() {
    return p(this, void 0, void 0, function* () {
      yield this.refreshSenderEncodings();
    });
  }
  refreshSenderEncodings() {
    return p(this, void 0, void 0, function* () {
      var e;
      if (!this.sender || !this.publishOptions || this.optimizeForPerformance) return;
      const t = yield this.senderLock.lock();
      try {
        let s;
        try {
          s = yield this.waitForDimensions();
        } catch (o) {
          this.log.warn("could not determine new track dimensions, skipping encoding recompute", Object.assign(Object.assign({}, this.logContext), {
            error: o
          }));
          return;
        }
        if (this.lastEncodedDimensions && this.lastEncodedDimensions.width === s.width && this.lastEncodedDimensions.height === s.height) return;
        const r = this.source === E.Source.ScreenShare,
          a = zn(r, s.width, s.height, Object.assign({}, this.publishOptions));
        yield this.applyEncodingsToSender(this.sender, a), this.encodings = a, this.lastEncodedDimensions = s;
        for (const o of this.simulcastCodecs) {
          var i = x(o, 2);
          const c = i[0],
            d = i[1];
          if (!d.sender || ((e = d.sender.transport) === null || e === void 0 ? void 0 : e.state) === "closed" || !Qd(c)) continue;
          const l = Object.assign({}, this.publishOptions),
            u = Sl(this, c, l);
          u && (yield this.applyEncodingsToSender(d.sender, u), d.encodings = u);
        }
      } catch (s) {
        this.log.warn("failed to apply recomputed encodings", Object.assign(Object.assign({}, this.logContext), {
          error: s
        }));
      } finally {
        t();
      }
    });
  }
  applyEncodingsToSender(e, t) {
    return p(this, void 0, void 0, function* () {
      const i = e.getParameters();
      !i.encodings || i.encodings.length !== t.length || (i.encodings.forEach((s, r) => {
        if (s.active === !1) return;
        const a = t[r];
        a.scaleResolutionDownBy !== void 0 && (s.scaleResolutionDownBy = a.scaleResolutionDownBy), a.maxBitrate !== void 0 && (s.maxBitrate = a.maxBitrate), a.maxFramerate !== void 0 && (s.maxFramerate = a.maxFramerate), a.priority !== void 0 && (s.priority = a.priority, s.networkPriority = a.priority);
      }), this.log.debug("updating sender encodings after track restart", Object.assign(Object.assign({}, this.logContext), {
        encodings: i.encodings
      })), yield e.setParameters(i));
    });
  }
  setProcessor(e) {
    const t = Object.create(null, {
      setProcessor: {
        get: () => super.setProcessor
      }
    });
    return p(this, arguments, void 0, function (i) {
      var s = this;
      let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      return function* () {
        var a, o, c, d, l, u;
        if (yield t.setProcessor.call(s, i, r), !((l = s.processor) === null || l === void 0) && l.processedTrack) try {
          for (var h = !0, m = Ve(s.simulcastCodecs.values()), g; g = yield m.next(), a = g.done, !a; h = !0) d = g.value, h = !1, yield (u = d.sender) === null || u === void 0 ? void 0 : u.replaceTrack(s.processor.processedTrack);
        } catch (f) {
          o = {
            error: f
          };
        } finally {
          try {
            !h && !a && (c = m.return) && (yield c.call(m));
          } finally {
            if (o) throw o.error;
          }
        }
      }();
    });
  }
  setDegradationPreference(e) {
    return p(this, void 0, void 0, function* () {
      this.degradationPreference = e, yield this.applyDegradationPreference(this.sender);
      for (const t of this.simulcastCodecs.values()) yield this.applyDegradationPreference(t.sender);
    });
  }
  applyDegradationPreference(e) {
    return p(this, void 0, void 0, function* () {
      if (e) try {
        this.log.debug("setting degradationPreference to ".concat(this.degradationPreference), this.logContext);
        const t = e.getParameters();
        t.degradationPreference = this.degradationPreference, yield e.setParameters(t);
      } catch (t) {
        this.log.warn("failed to set degradationPreference", Object.assign({
          error: t
        }, this.logContext));
      }
    });
  }
  addSimulcastTrack(e, t) {
    if (this.simulcastCodecs.has(e)) {
      this.log.error("".concat(e, " already added, skipping adding simulcast codec"), this.logContext);
      return;
    }
    const i = {
      codec: e,
      mediaStreamTrack: this.mediaStreamTrack.clone(),
      sender: void 0,
      encodings: t
    };
    return this.simulcastCodecs.set(e, i), i;
  }
  setSimulcastTrackSender(e, t) {
    return p(this, void 0, void 0, function* () {
      const i = this.simulcastCodecs.get(e);
      i && (i.sender = t, yield this.applyDegradationPreference(t), setTimeout(() => {
        this.refreshSubscribedCodecs();
      }, tg));
    });
  }
  refreshSubscribedCodecs() {
    return p(this, void 0, void 0, function* () {
      if (this.subscribedCodecs) return this.setPublishingCodecs(this.subscribedCodecs).catch(e => this.log.warn("failed to refresh codec for track", Object.assign(Object.assign({}, this.logContext), {
        error: e
      })));
    });
  }
  setPublishingCodecs(e) {
    return p(this, void 0, void 0, function* () {
      var t, i, s, r, a, o, c;
      if (this.log.debug("setting publishing codecs", Object.assign(Object.assign({}, this.logContext), {
        codecs: e,
        currentCodec: this.codec
      })), !this.codec && e.length > 0) return yield this.setPublishingLayers(this.isSvcPublish(e[0].codec), e[0].qualities), [];
      this.subscribedCodecs = e;
      const d = [];
      try {
        for (t = !0, i = Ve(e); s = yield i.next(), r = s.done, !r; t = !0) {
          c = s.value, t = !1;
          const l = c;
          if (!this.codec || this.codec === l.codec) yield this.setPublishingLayers(this.isSvcPublish(l.codec), l.qualities);else {
            const u = this.simulcastCodecs.get(l.codec);
            if (this.log.debug("try setPublishingCodec for ".concat(l.codec), Object.assign(Object.assign({}, this.logContext), {
              simulcastCodecInfo: u
            })), !u || !u.sender) {
              for (const h of l.qualities) if (h.enabled) {
                d.push(l.codec);
                break;
              }
            } else u.encodings && (this.log.debug("try setPublishingLayersForSender ".concat(l.codec), this.logContext), yield Vo(u.sender, u.encodings, l.qualities, this.senderLock, this.isSvcPublish(l.codec), this.log, this.logContext));
          }
        }
      } catch (l) {
        a = {
          error: l
        };
      } finally {
        try {
          !t && !r && (o = i.return) && (yield o.call(i));
        } finally {
          if (a) throw a.error;
        }
      }
      return d;
    });
  }
  setPublishingLayers(e, t) {
    return p(this, void 0, void 0, function* () {
      if (this.optimizeForPerformance) {
        this.log.info("skipping setPublishingLayers due to optimized publishing performance", Object.assign(Object.assign({}, this.logContext), {
          qualities: t
        }));
        return;
      }
      this.log.debug("setting publishing layers", Object.assign(Object.assign({}, this.logContext), {
        qualities: t
      })), !(!this.sender || !this.encodings) && (yield Vo(this.sender, this.encodings, t, this.senderLock, e, this.log, this.logContext));
    });
  }
  prioritizePerformance() {
    return p(this, void 0, void 0, function* () {
      if (!this.sender) throw new Error("sender not found");
      const e = yield this.senderLock.lock();
      try {
        this.optimizeForPerformance = !0;
        const t = this.sender.getParameters();
        t.encodings = t.encodings.map((i, s) => {
          var r;
          return Object.assign(Object.assign({}, i), {
            active: s === 0,
            scaleResolutionDownBy: Math.max(1, Math.ceil(((r = this.mediaStreamTrack.getSettings().height) !== null && r !== void 0 ? r : 360) / 360)),
            scalabilityMode: s === 0 && Dt(this.codec) ? "L1T3" : void 0,
            maxFramerate: s === 0 ? 15 : 0,
            maxBitrate: s === 0 ? i.maxBitrate : 0
          });
        }), this.log.debug("setting performance optimised encodings", Object.assign(Object.assign({}, this.logContext), {
          encodings: t.encodings
        })), this.encodings = t.encodings, yield this.sender.setParameters(t);
      } catch (t) {
        this.log.error("failed to set performance optimised encodings", Object.assign(Object.assign({}, this.logContext), {
          error: t
        })), this.optimizeForPerformance = !1;
      } finally {
        e();
      }
    });
  }
  handleAppVisibilityChanged() {
    const e = Object.create(null, {
      handleAppVisibilityChanged: {
        get: () => super.handleAppVisibilityChanged
      }
    });
    return p(this, void 0, void 0, function* () {
      yield e.handleAppVisibilityChanged.call(this), nl() && this.isInBackground && this.source === E.Source.Camera && (this._mediaStreamTrack.enabled = !1);
    });
  }
}
function Vo(n, e, t, i, s, r, a) {
  return p(this, void 0, void 0, function* () {
    const o = yield i.lock();
    r.debug("setPublishingLayersForSender", Object.assign(Object.assign({}, a), {
      sender: n,
      qualities: t,
      senderEncodings: e
    }));
    try {
      const c = n.getParameters(),
        d = c.encodings;
      if (!d) return;
      if (d.length !== e.length) {
        r.warn("cannot set publishing layers, encodings mismatch", Object.assign(Object.assign({}, a), {
          encodings: d,
          senderEncodings: e
        }));
        return;
      }
      let l = !1;
      !1 && d[0].scalabilityMode || (s && t.some(m => m.enabled) && t.forEach(m => m.enabled = !0), d.forEach((h, m) => {
        var g;
        let f = (g = h.rid) !== null && g !== void 0 ? g : "";
        f === "" && (f = "q");
        const y = wl(f),
          k = t.find(S => S.quality === y);
        k && h.active !== k.enabled && (l = !0, h.active = k.enabled, r.debug("setting layer ".concat(k.quality, " to ").concat(h.active ? "enabled" : "disabled"), a), Yt() && (k.enabled ? (h.scaleResolutionDownBy = e[m].scaleResolutionDownBy, h.maxBitrate = e[m].maxBitrate, h.maxFrameRate = e[m].maxFrameRate) : (h.scaleResolutionDownBy = 4, h.maxBitrate = 10, h.maxFrameRate = 2)));
      })), l && (c.encodings = d, r.debug("setting encodings", Object.assign(Object.assign({}, a), {
        encodings: c.encodings
      })), yield n.setParameters(c));
    } finally {
      o();
    }
  });
}
function wl(n) {
  switch (n) {
    case "f":
      return Be.HIGH;
    case "h":
      return Be.MEDIUM;
    case "q":
      return Be.LOW;
    default:
      return Be.HIGH;
  }
}
function Wo(n, e, t, i) {
  if (!t) return [new _t({
    quality: Be.HIGH,
    width: n,
    height: e,
    bitrate: 0,
    ssrc: 0
  })];
  if (i) {
    const s = t[0].scalabilityMode,
      r = new Cl(s),
      a = [],
      o = r.suffix == "h" ? 1.5 : 2,
      c = r.suffix == "h" ? 2 : 3;
    for (let d = 0; d < r.spatial; d += 1) a.push(new _t({
      quality: Math.min(Be.HIGH, r.spatial - 1) - d,
      width: Math.ceil(n / Math.pow(o, d)),
      height: Math.ceil(e / Math.pow(o, d)),
      bitrate: t[0].maxBitrate ? Math.ceil(t[0].maxBitrate / Math.pow(c, d)) : 0,
      ssrc: 0
    }));
    return a;
  }
  return t.map(s => {
    var r, a, o;
    const c = (r = s.scaleResolutionDownBy) !== null && r !== void 0 ? r : 1;
    let d = wl((a = s.rid) !== null && a !== void 0 ? a : "");
    return new _t({
      quality: d,
      width: Math.ceil(n / c),
      height: Math.ceil(e / c),
      bitrate: (o = s.maxBitrate) !== null && o !== void 0 ? o : 0,
      ssrc: 0
    });
  });
}
const ig = 2 * 1e3,
  Ws = "leave-reconnect",
  ng = 10 * 1e3,
  sg = 3e4,
  rg = 3,
  ag = 3;
var Fe;
(function (n) {
  n[n.New = 0] = "New", n[n.Connected = 1] = "Connected", n[n.Disconnected = 2] = "Disconnected", n[n.Reconnecting = 3] = "Reconnecting", n[n.Closed = 4] = "Closed";
})(Fe || (Fe = {}));
const Ho = 64e3;
class og extends Ue.EventEmitter {
  get isClosed() {
    return this._isClosed;
  }
  get isNewlyCreated() {
    return this._isNewlyCreated;
  }
  get pendingReconnect() {
    return !!this.reconnectTimeout;
  }
  get serverVersion() {
    var e, t, i;
    return ((t = (e = this.latestJoinResponse) === null || e === void 0 ? void 0 : e.serverInfo) === null || t === void 0 ? void 0 : t.version) || ((i = this.latestJoinResponse) === null || i === void 0 ? void 0 : i.serverVersion) || void 0;
  }
  get reliableChannel() {
    return this.dataChannels.reliable;
  }
  get lossyChannel() {
    return this.dataChannels.lossy;
  }
  get dataTrackChannel() {
    return this.dataChannels.dataTrack;
  }
  constructor(e) {
    var t;
    super(), this.options = e, this.rtcConfig = {}, this.peerConnectionTimeout = Ta.peerConnectionTimeout, this.fullReconnectOnNext = !1, this.latestRemoteOfferId = 0, this.subscriberPrimary = !1, this.pcState = Fe.New, this._isClosed = !0, this._isNewlyCreated = !0, this.pendingTrackResolvers = {}, this.reconnectAttempts = 0, this.reconnectStart = 0, this.attemptingReconnect = !1, this.joinAttempts = 0, this.maxJoinAttempts = 1, this.shouldFailNext = !1, this.shouldFailOnV1Path = !1, this.log = W, this.reliableReceivedState = new cf(sg), this.midToTrackId = {}, this.isWaitingForNetworkReconnect = !1, this.pendingNegotiationAborts = new Set(), this.handleDataChannel = s => p(this, [s], void 0, function (r) {
      var a = this;
      let o = r.channel;
      return function* () {
        o && a.dataChannels.adoptSubscriberChannel(o) && a.log.debug("on data channel ".concat(o.id, ", ").concat(o.label));
      }();
    }), this.handleDataMessage = s => p(this, void 0, void 0, function* () {
      var r, a, o, c;
      const d = yield this.dataProcessLock.lock();
      try {
        const l = yield this.decodeDataMessage(s);
        if (!l) return;
        const u = Me.fromBinary(l);
        if (u.sequence > 0 && u.participantSid !== "") {
          const h = this.reliableReceivedState.get(u.participantSid);
          if (h && u.sequence <= h) return;
          this.reliableReceivedState.set(u.participantSid, u.sequence);
        }
        if (((r = u.value) === null || r === void 0 ? void 0 : r.case) === "speaker") this.emit(P.ActiveSpeakersUpdate, u.value.value.speakers);else if (((a = u.value) === null || a === void 0 ? void 0 : a.case) === "encryptedPacket") {
          if (!this.e2eeManager) {
            this.log.error("Received encrypted packet but E2EE not set up");
            return;
          }
          let h;
          try {
            h = yield this.e2eeManager.handleEncryptedData(u.value.value.encryptedValue, u.value.value.iv, u.participantIdentity, u.value.value.keyIndex);
          } catch (f) {
            this.log.debug("failed to decrypt data packet", {
              error: f,
              participantIdentity: u.participantIdentity
            });
            return;
          }
          const m = Wc.fromBinary(h.payload),
            g = new Me({
              value: m.value,
              participantIdentity: u.participantIdentity,
              participantSid: u.participantSid
            });
          ((o = g.value) === null || o === void 0 ? void 0 : o.case) === "user" && Ko(g, g.value.value), this.emit(P.DataPacketReceived, g, u.value.value.encryptionType);
        } else ((c = u.value) === null || c === void 0 ? void 0 : c.case) === "user" && Ko(u, u.value.value), this.emit(P.DataPacketReceived, u, z.NONE);
      } finally {
        d();
      }
    }), this.handleDataTrackMessage = s => p(this, void 0, void 0, function* () {
      const r = yield this.decodeDataMessage(s);
      r && this.emit("dataTrackPacketReceived", r);
    }), this.handleDataError = s => {
      if (this._isClosed) return;
      const a = s.currentTarget.maxRetransmits === 0 ? "lossy" : "reliable";
      if (typeof RTCErrorEvent < "u" && s instanceof RTCErrorEvent && s.error) {
        const o = s.error;
        this.log.error("DataChannel error on ".concat(a, ": ").concat(o.message), {
          error: o,
          errorDetail: o.errorDetail,
          sctpCauseCode: o.sctpCauseCode
        });
      } else this.log.error("Unknown DataChannel error on ".concat(a), {
        event: s
      });
    }, this.handleDataChannelClose = s => () => {
      var r;
      !this._isClosed && ((r = this.pcManager) === null || r === void 0 ? void 0 : r.publisher.getConnectionState()) === "connected" && this.log.error("publisher data channel '".concat(H[s], "' closed unexpectedly"), this.logContext);
    }, this.handleDisconnect = (s, r) => {
      if (this._isClosed) return;
      this.log.warn("".concat(s, " disconnected")), this.reconnectAttempts === 0 && (this.reconnectStart = Date.now());
      const a = d => {
          this.log.warn("could not recover connection after ".concat(this.reconnectAttempts, " attempts, ").concat(d, "ms. giving up")), this.emit(P.Disconnected), this.close("gave up reconnecting after ".concat(this.reconnectAttempts, " attempts, ").concat(d, "ms"));
        },
        o = Date.now() - this.reconnectStart;
      let c = this.getNextRetryDelay({
        elapsedMs: o,
        retryCount: this.reconnectAttempts
      });
      if (c === null) {
        a(o);
        return;
      }
      if (s === Ws && (c = this.getNextRetryDelay({
        elapsedMs: o,
        retryCount: 0
      }), c === null)) {
        a(o);
        return;
      }
      this.log.debug("reconnecting in ".concat(c, "ms")), this.clearReconnectTimeout(), this.token && this.emit(P.TokenRefreshed, this.token), this.reconnectTimeout = Y.setTimeout(() => this.attemptReconnect(r).finally(() => this.reconnectTimeout = void 0), c);
    }, this.waitForRestarted = () => new Promise((s, r) => {
      this.pcState === Fe.Connected && s();
      const a = () => {
          this.off(P.Disconnected, o), s();
        },
        o = () => {
          this.off(P.Restarted, a), r();
        };
      this.once(P.Restarted, a), this.once(P.Disconnected, o);
    }), this.onRtpMapAvailable = s => {
      const r = new Map();
      s.forEach(a => {
        const o = a.codec.toLowerCase();
        ol(o) && r.set(a.payload, o);
      }), this.emit(P.RTPVideoMapUpdate, r);
    }, this.handleBrowserOnLine = () => p(this, void 0, void 0, function* () {
      !this.url || !(yield fetch(rn(this.url), {
        method: "HEAD"
      }).then(r => r.ok).catch(() => !1)) || (this.log.info("detected network reconnected"), (this.client.currentState === Re.RECONNECTING || this.isWaitingForNetworkReconnect && this.client.currentState === Re.CONNECTED) && (this.clearReconnectTimeout(), this.attemptReconnect(lt.RR_SIGNAL_DISCONNECTED), this.isWaitingForNetworkReconnect = !1));
    }), this.handleBrowserOffline = () => p(this, void 0, void 0, function* () {
      if (this.url) try {
        yield Promise.race([fetch(rn(this.url), {
          method: "HEAD"
        }), Ce(4e3).then(() => Promise.reject())]);
      } catch {
        window.navigator.onLine === !1 && (this.log.info("detected network interruption"), this.isWaitingForNetworkReconnect = !0);
      }
    }), this.log = ke((t = e.loggerName) !== null && t !== void 0 ? t : re.Engine, () => this.logContext), this.loggerOptions = {
      loggerName: e.loggerName,
      loggerContextCb: () => this.logContext
    }, this.client = new ba(void 0, this.loggerOptions), this.client.signalLatency = this.options.expSignalLatency, this.reconnectPolicy = this.options.reconnectPolicy, this.closingLock = new ye(), this.dataProcessLock = new ye(), this.dataChannels = new Uf({
      isEngineClosed: () => this.isClosed,
      isReconnecting: () => this.attemptingReconnect,
      onDataMessage: s => this.handleDataMessage(s),
      onDataTrackMessage: s => this.handleDataTrackMessage(s),
      onDataError: s => this.handleDataError(s),
      onChannelClose: s => this.handleDataChannelClose(s)(),
      onBufferStatusChanged: (s, r) => this.emit(P.DCBufferStatusChanged, r, s)
    }), this.client.onParticipantUpdate = s => this.emit(P.ParticipantUpdate, s), this.client.onConnectionQuality = s => {
      this.handleLocalConnectionQuality(s), this.emit(P.ConnectionQualityUpdate, s);
    }, this.client.onRoomUpdate = s => this.emit(P.RoomUpdate, s), this.client.onSubscriptionError = s => this.emit(P.SubscriptionError, s), this.client.onSubscriptionPermissionUpdate = s => this.emit(P.SubscriptionPermissionUpdate, s), this.client.onSpeakersChanged = s => this.emit(P.SpeakersChanged, s), this.client.onStreamStateUpdate = s => this.emit(P.StreamStateChanged, s), this.client.onRequestResponse = s => this.emit(P.SignalRequestResponse, s), this.client.onParticipantUpdate = s => this.emit(P.ParticipantUpdate, s), this.client.onJoined = s => this.emit(P.Joined, s);
    const i = () => {
      for (const s of Array.from(this.pendingNegotiationAborts)) s();
    };
    this.on(P.Closing, i), this.on(P.Restarting, i);
  }
  get logContext() {
    var e, t, i, s, r, a;
    return {
      room: (t = (e = this.latestJoinResponse) === null || e === void 0 ? void 0 : e.room) === null || t === void 0 ? void 0 : t.name,
      roomID: (s = (i = this.latestJoinResponse) === null || i === void 0 ? void 0 : i.room) === null || s === void 0 ? void 0 : s.sid,
      participant: (a = (r = this.latestJoinResponse) === null || r === void 0 ? void 0 : r.participant) === null || a === void 0 ? void 0 : a.identity,
      participantID: this.participantSid
    };
  }
  join(e, t, i, s) {
    return p(this, arguments, void 0, function (r, a, o, c) {
      var d = this;
      let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
      return function* () {
        var u, h, m, g;
        d._isNewlyCreated = !1, d.url = r, d.token = a, d.signalOpts = o, d.maxJoinAttempts = o.maxRetries;
        try {
          d.joinAttempts += 1, d.joinStartedAt = performance.now(), d.setupSignalClientCallbacks();
          const f = !l && gp();
          let y;
          if (f) {
            d.pcManager || (yield d.configure(), d.applyInitialPublisherLayout());
            const R = yield (u = d.pcManager) === null || u === void 0 ? void 0 : u.publisher.createInitialOffer();
            R && (y = Bt(R.offer, R.offerId));
          }
          if (c?.aborted) throw N.cancelled("Connection aborted");
          if (!l && d.shouldFailOnV1Path) throw d.shouldFailOnV1Path = !1, N.serviceNotFound("Simulated v1 path failure", "v0-rtc");
          const k = yield d.client.join(r, a, o, c, l, y);
          if (c?.aborted) throw d.log.info("join cancelled after the signal join response"), N.cancelled("Connection aborted");
          if (d._isClosed = !1, d.latestJoinResponse = k, d.participantSid = (h = k.participant) === null || h === void 0 ? void 0 : h.sid, d.subscriberPrimary = k.subscriberPrimary, f) (m = d.pcManager) === null || m === void 0 || m.updateConfiguration(d.makeRTCConfiguration(k));else {
            if (!d.pcManager) {
              if (yield d.configure(k, !l), c?.aborted) throw d.log.info("join cancelled after configuring peer connections"), N.cancelled("Connection aborted");
              l || d.applyInitialPublisherLayout();
            }
            (!d.subscriberPrimary || k.fastPublish) && d.negotiate().catch(R => {
              d.log.error(R);
            });
          }
          d.joinStartedAt !== void 0 && ((g = d.pcManager) === null || g === void 0 || g.publisher.setConnectionStartedAt(d.joinStartedAt)), d.registerOnLineListener(), d.clientConfiguration = k.clientConfiguration, d.emit(P.SignalConnected, k);
          let S = k.serverInfo;
          return S || (S = {
            version: k.serverVersion,
            region: k.serverRegion
          }), d.log.info("connected to Livekit Server ".concat(Object.entries(S).map(R => {
            let b = x(R, 2),
              T = b[0],
              C = b[1];
            return "".concat(T, ": ").concat(C);
          }).join(", "))), {
            joinResponse: k,
            serverInfo: S
          };
        } catch (f) {
          if (f instanceof N) {
            if (f.reason === Q.ServerUnreachable) {
              if (d.log.warn("Couldn't connect to server, attempt ".concat(d.joinAttempts, " of ").concat(d.maxJoinAttempts)), d.joinAttempts < d.maxJoinAttempts) return d.join(r, a, o, c, l);
            } else if (f.reason === Q.ServiceNotFound) return d.log.warn("Initial connection failed: ".concat(f.message, " – Retrying")), d.pcManager && (d.pcManager.onStateChange = void 0, yield d.cleanupPeerConnections()), d.join(r, a, o, c, !0);
          }
          throw f;
        }
      }();
    });
  }
  close(e) {
    return p(this, void 0, void 0, function* () {
      var t;
      (t = this.reconnectAbortController) === null || t === void 0 || t.abort(), this.reconnectAbortController = void 0;
      const i = yield this.closingLock.lock();
      if (this.isClosed) {
        i();
        return;
      }
      try {
        this._isClosed = !0, this.joinAttempts = 0, this.joinStartedAt = void 0, this.emit(P.Closing), this.removeAllListeners(), this.deregisterOnLineListener(), this.clearPendingReconnect(), this.clearLostQualityTimeout(), this.cleanupLossyDataStats(), yield this.cleanupPeerConnections(), yield this.cleanupClient(e);
      } finally {
        i();
      }
    });
  }
  cleanupPeerConnections() {
    return p(this, void 0, void 0, function* () {
      var e;
      this.dataChannels.teardown(), yield (e = this.pcManager) === null || e === void 0 ? void 0 : e.close(), this.pcManager = void 0, this.transportConnectingSince = void 0, this.reliableReceivedState.clear();
    });
  }
  cleanupLossyDataStats() {
    this.lossyChannel.stopThresholdTuning();
  }
  cleanupClient(e) {
    return p(this, void 0, void 0, function* () {
      yield this.client.close(!0, e), this.client.resetCallbacks();
      for (const t of Object.keys(this.pendingTrackResolvers)) this.pendingTrackResolvers[t].reject();
      this.pendingTrackResolvers = {};
    });
  }
  addTrack(e) {
    if (this.pendingTrackResolvers[e.cid]) throw new ft("a track with the same ID has already been published");
    return new Promise((t, i) => {
      const s = Y.setTimeout(() => {
        delete this.pendingTrackResolvers[e.cid], i(N.timeout("publication of local track timed out, no response from server"));
      }, 1e4);
      this.pendingTrackResolvers[e.cid] = {
        resolve: r => {
          Y.clearTimeout(s), t(r);
        },
        reject: () => {
          Y.clearTimeout(s), i(new Error("Cancelled publication by calling unpublish"));
        }
      }, this.client.sendAddTrack(e);
    });
  }
  removeTrack(e) {
    if (e.track && this.pendingTrackResolvers[e.track.id]) {
      const t = this.pendingTrackResolvers[e.track.id].reject;
      t && t(), delete this.pendingTrackResolvers[e.track.id];
    }
    try {
      return this.pcManager.removeTrack(e), !0;
    } catch (t) {
      this.log.warn("failed to remove track", {
        error: t
      });
    }
    return !1;
  }
  updateMuteStatus(e, t) {
    this.client.sendMuteTrack(e, t);
  }
  get dataSubscriberReadyState() {
    var e;
    return (e = this.dataChannelForKind(H.RELIABLE, !0)) === null || e === void 0 ? void 0 : e.readyState;
  }
  getConnectedServerAddress() {
    return p(this, void 0, void 0, function* () {
      var e;
      return (e = this.pcManager) === null || e === void 0 ? void 0 : e.getConnectedAddress();
    });
  }
  setRegionStrategy(e) {
    this.regionStrategy = e;
  }
  configure(e, t) {
    return p(this, void 0, void 0, function* () {
      var i;
      if (!(this.pcManager && this.pcManager.currentState !== ee.NEW)) {
        if (e) {
          this.participantSid = (i = e.participant) === null || i === void 0 ? void 0 : i.sid;
          const s = this.makeRTCConfiguration(e);
          this.pcManager = new Lo(t ? "publisher-only" : e.subscriberPrimary ? "subscriber-primary" : "publisher-primary", this.loggerOptions, s);
        } else {
          const s = this.makeRTCConfiguration();
          this.pcManager = new Lo("publisher-only", this.loggerOptions, s);
        }
        this.emit(P.TransportsCreated, this.pcManager.publisher, this.pcManager.subscriber), this.pcManager.onIceCandidate = (s, r) => {
          this.client.sendIceCandidate(s, r);
        }, this.pcManager.onPublisherOffer = (s, r) => {
          this.client.sendOffer(s, r);
        }, this.pcManager.onDataChannel = this.handleDataChannel, this.pcManager.onStateChange = (s, r, a) => p(this, void 0, void 0, function* () {
          var o;
          if (this.log.debug("primary PC state changed ".concat(s)), s === ee.CONNECTING ? this.transportConnectingSince = Date.now() : this.transportConnectingSince = void 0, ["closed", "disconnected", "failed"].includes(r) && (this.publisherConnectionPromise = void 0), s === ee.CONNECTED) {
            if (this.joinStartedAt !== void 0) {
              const u = Math.round(performance.now() - this.joinStartedAt);
              this.joinStartedAt = void 0, this.log.info("connection setup took ".concat(u, " ms")), (o = this.pcManager) === null || o === void 0 || o.publisher.setConnectionSetupTime(u);
            }
            const l = this.pcState === Fe.New;
            this.pcState = Fe.Connected, l && this.emit(P.Connected, this.latestJoinResponse);
          } else s === ee.FAILED && (this.pcState === Fe.Connected || this.pcState === Fe.Reconnecting) && (this.pcState = Fe.Disconnected, this.handleDisconnect("peerconnection failed", a === "failed" ? lt.RR_SUBSCRIBER_FAILED : lt.RR_PUBLISHER_FAILED));
          const c = this.client.isDisconnected || this.client.currentState === Re.RECONNECTING,
            d = [ee.FAILED, ee.CLOSING, ee.CLOSED].includes(s);
          c && d && !this._isClosed && this.emit(P.Offline);
        }), this.pcManager.onTrack = s => {
          s.streams.length !== 0 && this.emit(P.MediaTrackAdded, s.track, s.streams[0], s.receiver);
        };
      }
    });
  }
  setupSignalClientCallbacks() {
    this.client.onAnswer = (e, t, i) => p(this, void 0, void 0, function* () {
      this.pcManager && (this.log.debug("received server answer", {
        RTCSdpType: e.type,
        sdp: e.sdp,
        midToTrackId: i
      }), this.pcManager.mode === "publisher-only" && (this.midToTrackId = i), yield this.pcManager.setPublisherAnswer(e, t), this.emit(P.RequestSubscribedCodecRefresh));
    }), this.client.onTrickle = (e, t) => {
      this.pcManager && (this.log.debug("got ICE candidate from peer", {
        candidate: e,
        target: t
      }), this.pcManager.addIceCandidate(e, t));
    }, this.client.onOffer = (e, t, i) => p(this, void 0, void 0, function* () {
      if (this.latestRemoteOfferId = t, !this.pcManager) return;
      this.midToTrackId = i;
      const s = yield this.pcManager.createSubscriberAnswerFromOffer(e, t);
      s && this.client.sendAnswer(s, t);
    }), this.client.onLocalTrackPublished = e => {
      var t;
      if (this.log.debug("received trackPublishedResponse", {
        cid: e.cid,
        track: (t = e.track) === null || t === void 0 ? void 0 : t.sid
      }), !this.pendingTrackResolvers[e.cid]) {
        this.log.error("missing track resolver for ".concat(e.cid), {
          cid: e.cid
        });
        return;
      }
      const i = this.pendingTrackResolvers[e.cid].resolve;
      delete this.pendingTrackResolvers[e.cid], i(e.track);
    }, this.client.onLocalTrackUnpublished = e => {
      this.emit(P.LocalTrackUnpublished, e);
    }, this.client.onLocalTrackSubscribed = e => {
      this.emit(P.LocalTrackSubscribed, e);
    }, this.client.onTokenRefresh = e => {
      this.token = e, this.emit(P.TokenRefreshed, e);
    }, this.client.onRemoteMuteChanged = (e, t) => {
      this.emit(P.RemoteMute, e, t);
    }, this.client.onSubscribedQualityUpdate = e => {
      this.emit(P.SubscribedQualityUpdate, e);
    }, this.client.onRoomMoved = e => {
      var t;
      this.participantSid = (t = e.participant) === null || t === void 0 ? void 0 : t.sid, this.latestJoinResponse && (this.latestJoinResponse.room = e.room), this.emit(P.RoomMoved, e);
    }, this.client.onMediaSectionsRequirement = e => {
      this.addMediaSections(e.numAudios, e.numVideos), this.negotiate().catch(t => {
        this.log.error(t);
      });
    }, this.client.onPublishDataTrackResponse = e => {
      this.emit(P.PublishDataTrackResponse, e);
    }, this.client.onUnPublishDataTrackResponse = e => {
      this.emit(P.UnPublishDataTrackResponse, e);
    }, this.client.onDataTrackSubscriberHandles = e => {
      this.emit(P.DataTrackSubscriberHandles, e);
    }, this.client.onClose = () => {
      this.handleDisconnect("signal", lt.RR_SIGNAL_DISCONNECTED);
    }, this.client.onLeave = e => {
      var t;
      switch (this.log.info("client leave request received (action=".concat(e?.action, ")"), {
        reason: e?.reason
      }), e.regions && (this.log.debug("updating regions"), this.emit(P.ServerRegionsReported, e.regions)), e.action) {
        case ui.DISCONNECT:
          this.emit(P.Disconnected, e?.reason), this.close("server leave: ".concat((t = ve[e.reason]) !== null && t !== void 0 ? t : e.reason));
          break;
        case ui.RECONNECT:
          this.fullReconnectOnNext = !0, this.handleDisconnect(Ws);
          break;
        case ui.RESUME:
          this.handleDisconnect(Ws);
      }
    };
  }
  makeRTCConfiguration(e) {
    var t;
    const i = Object.assign({}, this.rtcConfig);
    if ((!((t = this.signalOpts) === null || t === void 0) && t.e2eeEnabled || this.frameMetadataWorker && !an()) && ua() && (this.log.debug("E2EE - setting up transports with insertable streams"), i.encodedInsertableStreams = !0), i.sdpSemantics = "unified-plan", i.continualGatheringPolicy = "gather_continually", !e) return i;
    if (e.iceServers && !i.iceServers) {
      const r = [];
      e.iceServers.forEach(a => {
        const o = {
          urls: a.urls
        };
        a.username && (o.username = a.username), a.credential && (o.credential = a.credential), r.push(o);
      }), i.iceServers = r;
    }
    return e.clientConfiguration && e.clientConfiguration.forceRelay === $i.ENABLED && (i.iceTransportPolicy = "relay"), i;
  }
  applyInitialPublisherLayout() {
    this.createDataChannels(), We() || this.addMediaSections(rg, ag);
  }
  addMediaSections(e, t) {
    var i, s, r;
    const a = {
      direction: "recvonly"
    };
    for (let c = 0; c < e; c++) (i = this.pcManager) === null || i === void 0 || i.addPublisherTransceiverOfKind("audio", a);
    const o = ((s = this.pcManager) === null || s === void 0 ? void 0 : s.mode) === "publisher-only";
    for (let c = 0; c < t; c++) {
      const d = (r = this.pcManager) === null || r === void 0 ? void 0 : r.addPublisherTransceiverOfKind("video", a);
      if (o && d) {
        const l = Gm(d);
        this.log.debug("dependency descriptor negotiated for received video", {
          negotiated: l
        });
      }
    }
  }
  createDataChannels() {
    this.pcManager && (this.dataChannels.hasPublisherChannels && (this.publisherConnectionPromise = void 0), this.dataChannels.createPublisherChannels(this.pcManager));
  }
  decodeDataMessage(e) {
    return p(this, void 0, void 0, function* () {
      if (e.data instanceof ArrayBuffer) return new Uint8Array(e.data);
      if (e.data instanceof Blob) return new Uint8Array(yield e.data.arrayBuffer());
      this.log.error("unsupported data type", {
        data: e.data
      });
    });
  }
  createSender(e, t, i) {
    return p(this, void 0, void 0, function* () {
      let s;
      if (Sr()) s = yield this.createTransceiverRTCRtpSender(e, t, i);else if (Cr()) this.log.warn("using add-track fallback"), s = yield this.createRTCRtpSender(e.mediaStreamTrack);else throw new Z("Required webRTC APIs not supported on this device");
      return this.setupFrameMetadataSender(s, t), s;
    });
  }
  createSimulcastSender(e, t, i, s) {
    return p(this, void 0, void 0, function* () {
      let r;
      if (Sr()) r = yield this.createSimulcastTransceiverSender(e, t, i, s);else if (Cr()) this.log.debug("using add-track fallback"), r = yield this.createRTCRtpSender(e.mediaStreamTrack);else throw new Z("Cannot stream on this device");
      return r && this.setupFrameMetadataSender(r, i), r;
    });
  }
  get frameMetadataWorker() {
    var e, t;
    return (t = (e = this.options.frameMetadata) !== null && e !== void 0 ? e : this.options.packetTrailer) === null || t === void 0 ? void 0 : t.worker;
  }
  setupFrameMetadataSender(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var i, s, r;
    const a = this.frameMetadataWorker;
    if (!a || !((i = this.signalOpts) === null || i === void 0) && i.e2eeEnabled) return;
    const o = (s = t.frameMetadata) !== null && s !== void 0 ? s : t.packetTrailer,
      c = Kn(o);
    if (an()) {
      c && (e.transform = new RTCRtpScriptTransform(a, {
        kind: "encode",
        packetTrailer: o
      }));
      return;
    }
    if (!on((r = this.options.frameMetadata) !== null && r !== void 0 ? r : this.options.packetTrailer) || !("createEncodedStreams" in e)) {
      c && this.log.warn("frame metadata transform not supported; skipping write", this.logContext);
      return;
    }
    const d = e.createEncodedStreams(),
      l = d.readable,
      u = d.writable;
    c ? a.postMessage({
      kind: "encode",
      data: {
        readableStream: l,
        writableStream: u,
        packetTrailer: o
      }
    }, [l, u]) : l.pipeTo(u);
  }
  createTransceiverRTCRtpSender(e, t, i) {
    return p(this, void 0, void 0, function* () {
      if (!this.pcManager) throw new Z("publisher is closed");
      const s = [];
      e.mediaStream && s.push(e.mediaStream), yt(e) && (e.codec = t.videoCodec);
      const r = {
        direction: "sendonly",
        streams: s
      };
      return i && (r.sendEncodings = i), (yield this.pcManager.addPublisherTransceiver(e.mediaStreamTrack, r)).sender;
    });
  }
  createSimulcastTransceiverSender(e, t, i, s) {
    return p(this, void 0, void 0, function* () {
      if (!this.pcManager) throw new Z("publisher is closed");
      const r = {
        direction: "sendonly"
      };
      s && (r.sendEncodings = s);
      const a = yield this.pcManager.addPublisherTransceiver(t.mediaStreamTrack, r);
      if (i.videoCodec) return yield e.setSimulcastTrackSender(i.videoCodec, a.sender), a.sender;
    });
  }
  createRTCRtpSender(e) {
    return p(this, void 0, void 0, function* () {
      if (!this.pcManager) throw new Z("publisher is closed");
      return this.pcManager.addPublisherTrack(e);
    });
  }
  handleLocalConnectionQuality(e) {
    if (!this.participantSid) return;
    const t = e.updates.find(i => i.participantSid === this.participantSid);
    t && (t.quality === oi.LOST ? this.scheduleLostQualityReconnect() : this.clearLostQualityTimeout());
  }
  scheduleLostQualityReconnect() {
    this.lostQualityTimeout || (this.lostQualityTimeout = Y.setTimeout(() => {
      this.lostQualityTimeout = void 0, !(this._isClosed || this.pcState !== Fe.Connected || this.attemptingReconnect) && this.hasActivePublisherSenders() && (this.log.warn("local connection quality lost while publishing, triggering full reconnect", this.logContext), this.fullReconnectOnNext = !0, this.handleDisconnect("connection quality lost", lt.RR_PUBLISHER_FAILED));
    }, ng));
  }
  clearLostQualityTimeout() {
    this.lostQualityTimeout && (Y.clearTimeout(this.lostQualityTimeout), this.lostQualityTimeout = void 0);
  }
  hasActivePublisherSenders() {
    var e, t;
    return (t = (e = this.pcManager) === null || e === void 0 ? void 0 : e.publisher.getSenders().some(i => !!i.track && i.track.readyState === "live")) !== null && t !== void 0 ? t : !1;
  }
  reconnect() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : lt.RR_UNKNOWN;
    this.fullReconnectOnNext = !0, this.handleDisconnect("reconcile", e);
  }
  attemptReconnect(e) {
    return p(this, void 0, void 0, function* () {
      var t, i, s;
      if (this._isClosed) return;
      if (this.attemptingReconnect) {
        this.log.warn("already attempting reconnect, returning early");
        return;
      }
      this.clearLostQualityTimeout(), (((t = this.clientConfiguration) === null || t === void 0 ? void 0 : t.resumeConnection) === $i.DISABLED || ((s = (i = this.pcManager) === null || i === void 0 ? void 0 : i.currentState) !== null && s !== void 0 ? s : ee.NEW) === ee.NEW) && (this.fullReconnectOnNext = !0);
      const r = this.fullReconnectOnNext;
      this.fullReconnectOnNext = !1;
      let a = !1;
      const o = new AbortController();
      this.reconnectAbortController = o;
      try {
        if (this.attemptingReconnect = !0, r ? yield this.restartConnection(o.signal) : yield this.resumeConnection(e), o.signal.aborted) {
          this.log.info("reconnect attempt cancelled, not marking it as succeeded");
          return;
        }
        this.clearPendingReconnect(), a = !0;
      } catch (c) {
        if (o.signal.aborted) {
          this.log.info("reconnect attempt cancelled, not retrying", {
            error: c
          });
          return;
        }
        this.reconnectAttempts += 1;
        let d = !0;
        c instanceof Z ? (this.log.debug("received unrecoverable error", {
          error: c
        }), d = !1) : (r || !(c instanceof si)) && (this.fullReconnectOnNext = !0), d ? this.handleDisconnect("reconnect", lt.RR_UNKNOWN) : (this.log.info("could not recover connection after ".concat(this.reconnectAttempts, " attempts, ").concat(Date.now() - this.reconnectStart, "ms. giving up")), this.emit(P.Disconnected), yield this.close("gave up reconnecting after ".concat(this.reconnectAttempts, " attempts, ").concat(Date.now() - this.reconnectStart, "ms")));
      } finally {
        this.reconnectAbortController === o && (this.reconnectAbortController = void 0), this.attemptingReconnect = !1, a && this.fullReconnectOnNext && !this._isClosed && (this.log.debug("full reconnect requested during in-progress attempt, dispatching"), this.handleDisconnect("reconnect"));
      }
    });
  }
  getNextRetryDelay(e) {
    try {
      return this.reconnectPolicy.nextRetryDelayInMs(e);
    } catch (t) {
      this.log.warn("encountered error in reconnect policy", {
        error: t
      });
    }
    return null;
  }
  restartConnection(e, t) {
    return p(this, void 0, void 0, function* () {
      var i, s, r;
      try {
        if (e.aborted) {
          this.log.info("full reconnect cancelled before starting", {
            regionUrl: t
          });
          return;
        }
        if (!this.url || !this.token) throw new Z("could not reconnect, url or token not saved");
        if (this.log.info("reconnecting, attempt: ".concat(this.reconnectAttempts)), this.emit(P.Restarting), this.client.isDisconnected || (yield this.client.sendLeave()), yield this.cleanupPeerConnections(), yield this.cleanupClient(), e.aborted) {
          this.log.info("full reconnect cancelled after cleaning up the previous session", {
            regionUrl: t
          });
          return;
        }
        let a;
        try {
          if (!this.signalOpts) throw this.log.warn("attempted connection restart, without signal options present"), new si();
          a = (yield this.join(t ?? this.url, this.token, this.signalOpts, e, !this.options.singlePeerConnection)).joinResponse;
        } catch (o) {
          throw o instanceof N && o.reason === Q.NotAllowed ? new Z("could not reconnect, token might be expired") : new si();
        }
        if (e.aborted) {
          this.log.info("full reconnect cancelled after the signal join response", {
            regionUrl: t
          });
          return;
        }
        if (this.shouldFailNext) throw this.shouldFailNext = !1, new Error("simulated failure");
        if (this.client.setReconnected(), this.emit(P.SignalRestarted, a), yield this.waitForPCReconnected(), e.aborted) {
          this.log.info("full reconnect cancelled after peer connections reconnected", {
            regionUrl: t
          });
          return;
        }
        if (this.client.currentState !== Re.CONNECTED) throw new si("Signal connection got severed during reconnect");
        (i = this.regionStrategy) === null || i === void 0 || i.resetAttempts(), this.emit(P.Restarted);
      } catch (a) {
        if (e.aborted) {
          this.log.info("full reconnect cancelled after a failed attempt", {
            regionUrl: t
          });
          return;
        }
        const o = yield (s = this.regionStrategy) === null || s === void 0 ? void 0 : s.getNextUrl(e);
        if (e.aborted) {
          this.log.info("full reconnect cancelled during region selection", {
            regionUrl: t
          });
          return;
        }
        if (o) {
          yield this.restartConnection(e, o);
          return;
        } else throw (r = this.regionStrategy) === null || r === void 0 || r.resetAttempts(), a;
      }
    });
  }
  resumeConnection(e) {
    return p(this, void 0, void 0, function* () {
      if (!this.url || !this.token) throw new Z("could not reconnect, url or token not saved");
      if (!this.pcManager) throw new Z("publisher and subscriber connections unset");
      this.log.info("resuming signal connection, attempt ".concat(this.reconnectAttempts)), this.emit(P.Resuming);
      let t;
      try {
        this.setupSignalClientCallbacks(), t = yield this.client.reconnect(this.url, this.token, this.participantSid, e);
      } catch (s) {
        let r = "";
        throw s instanceof Error && (r = s.message, this.log.error(s.message, {
          error: s
        })), s instanceof N && s.reason === Q.NotAllowed ? new Z("could not reconnect, token might be expired") : s instanceof N && s.reason === Q.LeaveRequest ? s : new si(r);
      }
      if (this.emit(P.SignalResumed), t) {
        const s = this.makeRTCConfiguration(t);
        this.pcManager.updateConfiguration(s), this.latestJoinResponse && (this.latestJoinResponse.serverInfo = t.serverInfo);
      } else this.log.warn("Did not receive reconnect response");
      if (this.shouldFailNext) throw this.shouldFailNext = !1, new Error("simulated failure");
      if (yield this.pcManager.triggerIceRestart(), yield this.waitForPCReconnected(), this.client.currentState !== Re.CONNECTED) throw new si("Signal connection got severed during reconnect");
      this.client.setReconnected();
      const i = this.dataChannelForKind(H.RELIABLE);
      i?.readyState === "open" && i.id === null && this.createDataChannels(), t?.lastMessageSeq && this.resendReliableMessagesForResume(t.lastMessageSeq).catch(s => {
        this.log.warn("failed to resend reliable messages after resume", Object.assign(Object.assign({}, this.logContext), {
          error: s
        }));
      }), this.emit(P.Resumed);
    });
  }
  waitForPCInitialConnection(e, t) {
    return p(this, void 0, void 0, function* () {
      if (!this.pcManager) throw new Z("PC manager is closed");
      yield this.pcManager.ensurePCTransportConnection(t, e);
    });
  }
  waitForPCReconnected() {
    return p(this, void 0, void 0, function* () {
      this.pcState = Fe.Reconnecting, this.log.debug("waiting for peer connection to reconnect");
      try {
        if (yield Ce(ig), !this.pcManager) throw new Z("PC manager is closed");
        yield this.pcManager.ensurePCTransportConnection(void 0, this.peerConnectionTimeout), this.pcState = Fe.Connected;
      } catch (e) {
        throw this.pcState = Fe.Disconnected, N.internal("could not establish PC connection, ".concat(e.message));
      }
    });
  }
  publishRpcAck(e, t) {
    return p(this, void 0, void 0, function* () {
      const i = new Me({
        destinationIdentities: [e],
        kind: Pt.RELIABLE,
        value: {
          case: "rpcAck",
          value: new ts({
            requestId: t
          })
        }
      });
      yield this.sendDataPacket(i, H.RELIABLE);
    });
  }
  sendDataPacket(e, t) {
    return p(this, void 0, void 0, function* () {
      var i, s;
      if (yield this.ensurePublisherConnected(t), this.e2eeManager && this.e2eeManager.isDataChannelEncryptionEnabled) {
        const o = Pp(e);
        if (o) {
          const c = yield this.e2eeManager.encryptData(o.toBinary());
          e.value = {
            case: "encryptedPacket",
            value: new Vc({
              encryptedValue: c.payload,
              iv: c.iv,
              keyIndex: c.keyIndex
            })
          };
        }
      }
      t === H.RELIABLE && (e.sequence = this.reliableChannel.nextSequence());
      const r = e.toBinary(),
        a = Math.min((s = (i = this.pcManager) === null || i === void 0 ? void 0 : i.getMaxPublisherMessageSize()) !== null && s !== void 0 ? s : Ho, Ho);
      if (typeof a < "u" && a !== 0 && r.byteLength > a) throw new Pm("cannot publish data packet larger than ".concat(a, " bytes (got ").concat(r.byteLength, ")"));
      t === H.RELIABLE ? yield this.reliableChannel.send(r, e.sequence) : yield this.lossyChannel.send(r);
    });
  }
  sendDataTrackFrame(e) {
    return p(this, void 0, void 0, function* () {
      yield this.ensurePublisherConnected(H.DATA_TRACK_LOSSY), yield this.dataTrackChannel.send(e);
    });
  }
  resendReliableMessagesForResume(e) {
    return p(this, void 0, void 0, function* () {
      yield this.ensurePublisherConnected(H.RELIABLE), yield this.reliableChannel.replay(e);
    });
  }
  flowControlFor(e) {
    return this.dataChannels.channelFor(e);
  }
  waitForBufferHeadroom(e) {
    return p(this, void 0, void 0, function* () {
      const t = this.dataChannelForKind(e);
      if (!t) throw new Z("DataChannel not found, kind: ".concat(e));
      return this.flowControlFor(e).waitForHeadroomWithLock(t);
    });
  }
  ensureDataTransportConnected(e) {
    return p(this, arguments, void 0, function (t) {
      var i = this;
      let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.subscriberPrimary;
      return function* () {
        var r;
        if (!i.pcManager) throw new Z("PC manager is closed");
        const a = s ? i.pcManager.subscriber : i.pcManager.publisher,
          o = s ? "Subscriber" : "Publisher";
        if (!a) throw N.internal("".concat(o, " connection not set"));
        let c = !1;
        !s && !i.dataChannelForKind(t, s) && (i.createDataChannels(), c = !0), !c && !s && !i.pcManager.publisher.isICEConnected && i.pcManager.publisher.getICEConnectionState() !== "checking" && (c = !0), c && i.negotiate().catch(u => {
          i.log.error(u);
        });
        const d = i.dataChannelForKind(t, s);
        if (d?.readyState === "open") return;
        const l = new Date().getTime() + i.peerConnectionTimeout;
        for (; new Date().getTime() < l;) {
          if (a.isICEConnected && ((r = i.dataChannelForKind(t, s)) === null || r === void 0 ? void 0 : r.readyState) === "open") return;
          yield Ce(50);
        }
        throw N.internal("could not establish ".concat(o, " connection, state: ").concat(a.getICEConnectionState()));
      }();
    });
  }
  ensurePublisherConnected(e) {
    return p(this, void 0, void 0, function* () {
      this.publisherConnectionPromise || (this.publisherConnectionPromise = this.ensureDataTransportConnected(e, !1)), yield this.publisherConnectionPromise;
    });
  }
  verifyTransport() {
    if (!this.pcManager) return !1;
    const e = this.pcManager.currentState;
    return ![ee.CONNECTING, ee.CONNECTED].includes(e) || !this.client.ws || this.client.ws.readyState === WebSocket.CLOSED ? !1 : e === ee.CONNECTING && this.transportConnectingSince !== void 0 && Date.now() - this.transportConnectingSince > this.peerConnectionTimeout ? (this.log.warn("transport stuck in connecting state", this.logContext), !1) : !0;
  }
  negotiate() {
    return p(this, void 0, void 0, function* () {
      return new Ae((e, t) => p(this, void 0, void 0, function* () {
        if (!this.pcManager) {
          t(new Rt("PC manager is closed"));
          return;
        }
        this.pcManager.requirePublisher(), this.pcManager.publisher.getTransceivers().length == 0 && !this.dataChannels.hasPublisherChannels && this.createDataChannels();
        const i = new AbortController(),
          s = () => {
            i.abort(), this.log.debug("engine disconnected while negotiation was ongoing"), e();
          };
        this.isClosed && t(new Rt("cannot negotiate on closed engine")), this.pendingNegotiationAborts.add(s), this.pcManager.publisher.off(wt.RTPVideoPayloadTypes, this.onRtpMapAvailable), this.pcManager.publisher.once(wt.RTPVideoPayloadTypes, this.onRtpMapAvailable);
        try {
          yield this.pcManager.negotiate(i), e();
        } catch (r) {
          if (i.signal.aborted) {
            e();
            return;
          }
          r instanceof Rt && (this.fullReconnectOnNext = !0), this.handleDisconnect("negotiation", lt.RR_UNKNOWN), r instanceof Error ? t(r) : t(new Error(String(r)));
        } finally {
          this.pendingNegotiationAborts.delete(s);
        }
      }));
    });
  }
  dataChannelForKind(e, t) {
    return this.dataChannels.getHandle(e, t);
  }
  sendSyncState(e, t, i) {
    var s, r, a, o;
    if (!this.pcManager) {
      this.log.warn("sync state cannot be sent without peer connection setup");
      return;
    }
    const c = this.pcManager.publisher.getLocalDescription(),
      d = this.pcManager.publisher.getRemoteDescription(),
      l = (s = this.pcManager.subscriber) === null || s === void 0 ? void 0 : s.getRemoteDescription(),
      u = (r = this.pcManager.subscriber) === null || r === void 0 ? void 0 : r.getLocalDescription(),
      h = (o = (a = this.signalOpts) === null || a === void 0 ? void 0 : a.autoSubscribe) !== null && o !== void 0 ? o : !0,
      m = new Array(),
      g = new Array();
    e.forEach(f => {
      f.isDesired !== h && m.push(f.trackSid), f.isEnabled || g.push(f.trackSid);
    }), this.client.sendSyncState(new ra({
      answer: this.pcManager.mode === "publisher-only" ? d ? Bt({
        sdp: d.sdp,
        type: d.type
      }) : void 0 : u ? Bt({
        sdp: u.sdp,
        type: u.type
      }) : void 0,
      offer: this.pcManager.mode === "publisher-only" ? c ? Bt({
        sdp: c.sdp,
        type: c.type
      }) : void 0 : l ? Bt({
        sdp: l.sdp,
        type: l.type
      }) : void 0,
      subscription: new rs({
        trackSids: m,
        subscribe: !h,
        participantTracks: []
      }),
      publishTracks: xm(t),
      dataChannels: this.dataChannelsInfo(),
      trackSidsDisabled: g,
      datachannelReceiveStates: this.reliableReceivedState.map((f, y) => new dd({
        publisherSid: y,
        lastSeq: f
      })),
      publishDataTracks: i.map(f => new Xr({
        info: Gn.toProtobuf(f)
      }))
    }));
  }
  failNext() {
    this.shouldFailNext = !0;
  }
  failNextV1Path() {
    this.shouldFailOnV1Path = !0;
  }
  dataChannelsInfo() {
    const e = [],
      t = (i, s) => {
        i?.id !== void 0 && i.id !== null && e.push(new ld({
          label: i.label,
          id: i.id,
          target: s
        }));
      };
    return t(this.dataChannelForKind(H.LOSSY), Ye.PUBLISHER), t(this.dataChannelForKind(H.RELIABLE), Ye.PUBLISHER), t(this.dataChannelForKind(H.LOSSY, !0), Ye.SUBSCRIBER), t(this.dataChannelForKind(H.RELIABLE, !0), Ye.SUBSCRIBER), e;
  }
  clearReconnectTimeout() {
    this.reconnectTimeout && Y.clearTimeout(this.reconnectTimeout);
  }
  clearPendingReconnect() {
    this.clearReconnectTimeout(), this.reconnectAttempts = 0;
  }
  registerOnLineListener() {
    Oe() && (window.addEventListener("online", this.handleBrowserOnLine), window.addEventListener("offline", this.handleBrowserOffline));
  }
  deregisterOnLineListener() {
    Oe() && (window.removeEventListener("online", this.handleBrowserOnLine), window.removeEventListener("offline", this.handleBrowserOffline));
  }
  getTrackIdForReceiver(e) {
    var t;
    const i = (t = this.pcManager) === null || t === void 0 ? void 0 : t.getMidForReceiver(e);
    if (i) {
      const s = Object.entries(this.midToTrackId).find(r => x(r, 1)[0] === i);
      if (s) return s[1];
    }
  }
}
function Ko(n, e) {
  const t = n.participantIdentity ? n.participantIdentity : e.participantIdentity;
  n.participantIdentity = t, e.participantIdentity = t;
  const i = n.destinationIdentities.length !== 0 ? n.destinationIdentities : e.destinationIdentities;
  n.destinationIdentities = i, e.destinationIdentities = i;
}
const bn = ke(re.Region),
  Lr = 5e3,
  cg = 3e4;
class G {
  static fetchRegionSettings(e, t, i) {
    return p(this, void 0, void 0, function* () {
      const s = yield G.fetchLock.lock();
      try {
        const r = yield fetch("".concat(dg(e), "/regions"), {
          headers: {
            authorization: "Bearer ".concat(t)
          },
          signal: i
        });
        if (r.ok) {
          const a = pp(r.headers),
            o = a ? a * 1e3 : Lr;
          return {
            regionSettings: yield r.json(),
            updatedAtInMs: Date.now(),
            maxAgeInMs: o
          };
        } else throw r.status === 401 ? N.notAllowed("Could not fetch region settings: ".concat(r.statusText), r.status) : N.internal("Could not fetch region settings: ".concat(r.statusText));
      } catch (r) {
        throw r instanceof N ? r : i?.aborted ? N.cancelled("Region fetching was aborted") : N.serverUnreachable("Could not fetch region settings, ".concat(r instanceof Error ? "".concat(r.name, ": ").concat(r.message) : r));
      } finally {
        s();
      }
    });
  }
  static scheduleRefetch(e, t, i) {
    return p(this, void 0, void 0, function* () {
      const s = G.settingsTimeouts.get(e.hostname);
      clearTimeout(s), G.settingsTimeouts.set(e.hostname, setTimeout(() => p(this, void 0, void 0, function* () {
        try {
          const r = yield G.fetchRegionSettings(e, t);
          G.updateCachedRegionSettings(e, t, r);
        } catch (r) {
          if (r instanceof N && r.reason === Q.NotAllowed) {
            bn.debug("token is not valid, cancelling auto region refresh");
            return;
          }
          bn.debug("auto refetching of region settings failed", {
            error: r
          }), G.scheduleRefetch(e, t, i);
        }
      }), i));
    });
  }
  static updateCachedRegionSettings(e, t, i) {
    G.cache.set(e.hostname, i), G.scheduleRefetch(e, t, i.maxAgeInMs);
  }
  static stopRefetch(e) {
    const t = G.settingsTimeouts.get(e);
    t && (clearTimeout(t), G.settingsTimeouts.delete(e));
  }
  static scheduleCleanup(e) {
    let t = G.connectionTrackers.get(e);
    t && (t.cleanupTimeout && clearTimeout(t.cleanupTimeout), t.cleanupTimeout = setTimeout(() => {
      const i = G.connectionTrackers.get(e);
      i && i.connectionCount === 0 && (bn.debug("stopping region refetch after disconnect delay", {
        hostname: e
      }), G.stopRefetch(e)), i && (i.cleanupTimeout = void 0);
    }, cg));
  }
  static cancelCleanup(e) {
    const t = G.connectionTrackers.get(e);
    t?.cleanupTimeout && (clearTimeout(t.cleanupTimeout), t.cleanupTimeout = void 0);
  }
  notifyConnected() {
    const e = this.serverUrl.hostname;
    let t = G.connectionTrackers.get(e);
    t || (t = {
      connectionCount: 0
    }, G.connectionTrackers.set(e, t)), t.connectionCount++, G.cancelCleanup(e);
  }
  notifyDisconnected() {
    const e = this.serverUrl.hostname,
      t = G.connectionTrackers.get(e);
    t && (t.connectionCount = Math.max(0, t.connectionCount - 1), t.connectionCount === 0 && G.scheduleCleanup(e));
  }
  constructor(e, t) {
    this.attemptedRegions = [], this.serverUrl = new URL(e), this.token = t;
  }
  updateToken(e) {
    var t;
    this.token = e;
    const i = this.getServerUrl(),
      s = G.cache.get(i.hostname);
    G.scheduleRefetch(this.serverUrl, this.token, (t = s?.maxAgeInMs) !== null && t !== void 0 ? t : Lr);
  }
  isCloud() {
    return _i(this.serverUrl);
  }
  getServerUrl() {
    return this.serverUrl;
  }
  fetchRegionSettings(e) {
    return p(this, void 0, void 0, function* () {
      return G.fetchRegionSettings(this.serverUrl, this.token, e);
    });
  }
  getNextBestRegionUrl(e) {
    return p(this, void 0, void 0, function* () {
      if (!this.isCloud()) throw Error("region availability is only supported for LiveKit Cloud domains");
      let t = G.cache.get(this.serverUrl.hostname);
      (!t || Date.now() - t.updatedAtInMs > t.maxAgeInMs) && (t = yield this.fetchRegionSettings(e), G.updateCachedRegionSettings(this.serverUrl, this.token, t));
      const i = t.regionSettings.regions.filter(s => !this.attemptedRegions.find(r => r.url === s.url));
      if (i.length > 0) {
        const s = i[0];
        return this.attemptedRegions.push(s), bn.info("switching to region: ".concat(s.region), {
          region: s.region
        }), s.url;
      } else return null;
    });
  }
  resetAttempts() {
    this.attemptedRegions = [];
  }
  setServerReportedRegions(e) {
    G.updateCachedRegionSettings(this.serverUrl, this.token, e);
  }
}
G.cache = new Map();
G.settingsTimeouts = new Map();
G.connectionTrackers = new Map();
G.fetchLock = new ye();
function dg(n) {
  return "".concat(n.protocol.replace("ws", "http"), "//").concat(n.host, "/settings");
}
function Hs() {
  return new CompressionStream("deflate-raw");
}
function El() {
  return new DecompressionStream("deflate-raw");
}
function Go(n, e) {
  return p(this, void 0, void 0, function* () {
    const t = new DecompressionStream("deflate-raw"),
      i = t.writable.getWriter();
    return i.write(n).catch(() => {}), i.close().catch(() => {}), _l(t.readable, e);
  });
}
function _l(n, e) {
  return p(this, void 0, void 0, function* () {
    const t = n.getReader(),
      i = [];
    let s = 0;
    for (;;) {
      const o = yield t.read(),
        c = o.done,
        d = o.value;
      if (c) break;
      if (i.push(d), s += d.byteLength, typeof e == "number" && s > e) throw yield t.cancel(), new he("Decompressed payload exceeds the maximum payload size of ".concat(e, " bytes"), se.PayloadTooLarge);
    }
    const r = new Uint8Array(s);
    let a = 0;
    for (const o of i) r.set(o, a), a += o.byteLength;
    return r;
  });
}
const qt = 15e3,
  lg = 5e9;
class Pl {
  get info() {
    return this._info;
  }
  validateBytesReceived() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    if (!(typeof this.totalByteSize != "number" || this.totalByteSize === 0)) {
      if (e && this.bytesReceived < this.totalByteSize) throw new he("Not enough chunk(s) received - expected ".concat(this.totalByteSize, " bytes of data total, only received ").concat(this.bytesReceived, " bytes"), se.Incomplete);
      if (this.bytesReceived > this.totalByteSize) throw new he("Extra chunk(s) received - expected ".concat(this.totalByteSize, " bytes of data total, received ").concat(this.bytesReceived, " bytes"), se.LengthExceeded);
    }
  }
  constructor(e, t, i) {
    this.reader = t, this.totalByteSize = i, this._info = e, this.bytesReceived = 0;
  }
  handleChunkReceived(e) {
    var t;
    this.bytesReceived += e.content.byteLength, this.validateBytesReceived();
    const i = this.totalByteSize ? this.bytesReceived / this.totalByteSize : void 0;
    (t = this.onProgress) === null || t === void 0 || t.call(this, i);
  }
}
class zo extends Pl {
  [Symbol.asyncIterator]() {
    const e = this.reader.getReader();
    e.closed.catch(() => {});
    const t = () => {
      e.releaseLock(), this.signal = void 0;
    };
    return {
      next: () => p(this, void 0, void 0, function* () {
        var i;
        try {
          const s = this.signal;
          if (s?.aborted) throw s.reason;
          const r = yield new Promise((a, o) => {
            if (s) {
              const c = () => o(s.reason);
              s.addEventListener("abort", c, {
                once: !0
              }), e.read().then(a, o).finally(() => {
                s.removeEventListener("abort", c);
              });
            } else e.read().then(a, o);
          });
          return r.done ? (this.validateBytesReceived(!0), typeof this.totalByteSize == "number" && ((i = this.onProgress) === null || i === void 0 || i.call(this, 1)), {
            done: !0,
            value: void 0
          }) : (this.handleChunkReceived(r.value), {
            done: !1,
            value: r.value.content
          });
        } catch (s) {
          throw t(), s;
        }
      }),
      return() {
        return p(this, void 0, void 0, function* () {
          return t(), {
            done: !0,
            value: void 0
          };
        });
      }
    };
  }
  withAbortSignal(e) {
    return this.signal = e, this;
  }
  readAll() {
    return p(this, arguments, void 0, function () {
      var e = this;
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return function* () {
        var i, s, r, a;
        let o = new Set();
        const c = t.signal ? e.withAbortSignal(t.signal) : e;
        try {
          for (var d = !0, l = Ve(c), u; u = yield l.next(), i = u.done, !i; d = !0) {
            a = u.value, d = !1;
            const h = a;
            o.add(h);
          }
        } catch (h) {
          s = {
            error: h
          };
        } finally {
          try {
            !d && !i && (r = l.return) && (yield r.call(l));
          } finally {
            if (s) throw s.error;
          }
        }
        return Array.from(o);
      }();
    });
  }
}
class Jo extends Pl {
  [Symbol.asyncIterator]() {
    const e = this.reader.getReader();
    e.closed.catch(() => {});
    const t = new TextDecoder("utf-8"),
      i = this.signal,
      s = () => {
        e.releaseLock(), this.signal = void 0;
      };
    return {
      next: () => p(this, void 0, void 0, function* () {
        var r;
        try {
          if (i?.aborted) throw i.reason;
          const a = yield new Promise((o, c) => {
            if (i) {
              const d = () => c(i.reason);
              i.addEventListener("abort", d, {
                once: !0
              }), e.read().then(o, c).finally(() => {
                i.removeEventListener("abort", d);
              });
            } else e.read().then(o, c);
          });
          if (a.done) return this.validateBytesReceived(!0), typeof this.totalByteSize == "number" && ((r = this.onProgress) === null || r === void 0 || r.call(this, 1)), {
            done: !0,
            value: void 0
          };
          {
            this.handleChunkReceived(a.value);
            let o;
            try {
              o = t.decode(a.value.content);
            } catch (c) {
              throw new he("Cannot decode datastream chunk ".concat(a.value.chunkIndex, " as text: ").concat(c), se.DecodeFailed);
            }
            return {
              done: !1,
              value: o
            };
          }
        } catch (a) {
          throw s(), a;
        }
      }),
      return() {
        return p(this, void 0, void 0, function* () {
          return s(), {
            done: !0,
            value: void 0
          };
        });
      }
    };
  }
  withAbortSignal(e) {
    return this.signal = e, this;
  }
  readAll() {
    return p(this, arguments, void 0, function () {
      var e = this;
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return function* () {
        var i, s, r, a;
        let o = "";
        const c = t.signal ? e.withAbortSignal(t.signal) : e;
        try {
          for (var d = !0, l = Ve(c), u; u = yield l.next(), i = u.done, !i; d = !0) a = u.value, d = !1, o += a;
        } catch (h) {
          s = {
            error: h
          };
        } finally {
          try {
            !d && !i && (r = l.return) && (yield r.call(l));
          } finally {
            if (s) throw s.error;
          }
        }
        return o;
      }();
    });
  }
}
class ug {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : lg;
    this.log = W, this.byteStreamControllers = new Map(), this.textStreamControllers = new Map(), this.byteStreamHandlers = new Map(), this.textStreamHandlers = new Map(), this.isConnected = !1, this.bufferedPackets = [], this.maxPayloadByteLength = e;
  }
  setConnected(e) {
    this.isConnected = e, e && this.flushBufferedPackets();
  }
  flushBufferedPackets() {
    const e = this.bufferedPackets;
    this.bufferedPackets = [];
    for (const t of e) {
      const i = t.packet,
        s = t.encryptionType;
      this.handleDataStreamPacket(i, s);
    }
  }
  registerTextStreamHandler(e, t) {
    if (this.textStreamHandlers.has(e)) throw new he('A text stream handler for topic "'.concat(e, '" has already been set.'), se.HandlerAlreadyRegistered);
    this.textStreamHandlers.set(e, t);
  }
  unregisterTextStreamHandler(e) {
    this.textStreamHandlers.delete(e);
  }
  registerByteStreamHandler(e, t) {
    if (this.byteStreamHandlers.has(e)) throw new he('A byte stream handler for topic "'.concat(e, '" has already been set.'), se.HandlerAlreadyRegistered);
    this.byteStreamHandlers.set(e, t);
  }
  unregisterByteStreamHandler(e) {
    this.byteStreamHandlers.delete(e);
  }
  clearControllers() {
    const e = new he("Room disconnected in the middle of receiving data", se.AbnormalEnd);
    for (const t of this.byteStreamControllers.values()) t.controller.error(e);
    for (const t of this.textStreamControllers.values()) t.controller.error(e);
    this.byteStreamControllers.clear(), this.textStreamControllers.clear(), this.bufferedPackets = [];
  }
  validateParticipantHasNoActiveDataStreams(e) {
    const t = Array.from(this.textStreamControllers.entries()).filter(a => a[1].sendingParticipantIdentity === e),
      i = Array.from(this.byteStreamControllers.entries()).filter(a => a[1].sendingParticipantIdentity === e);
    if (t.length > 0 || i.length > 0) {
      const a = new he("Participant ".concat(e, " unexpectedly disconnected in the middle of sending data"), se.AbnormalEnd);
      for (const o of i) {
        var s = x(o, 2);
        const c = s[0];
        s[1].controller.error(a), this.byteStreamControllers.delete(c);
      }
      for (const o of t) {
        var r = x(o, 2);
        const c = r[0];
        r[1].controller.error(a), this.textStreamControllers.delete(c);
      }
    }
  }
  handleDataStreamPacket(e, t) {
    if (!this.isConnected) {
      this.bufferedPackets.push({
        packet: e,
        encryptionType: t
      });
      return;
    }
    switch (e.value.case) {
      case "streamHeader":
        return this.handleStreamHeader(e.value.value, e.participantIdentity, t);
      case "streamChunk":
        return this.handleStreamChunk(e.value.value, t);
      case "streamTrailer":
        return this.handleStreamTrailer(e.value.value, t);
      default:
        throw new Error('DataPacket of value "'.concat(e.value.case, '" is not data stream related!'));
    }
  }
  handleStreamHeader(e, t, i) {
    var s;
    switch (e.contentHeader.case) {
      case "byteHeader":
        {
          const r = this.byteStreamHandlers.get(e.topic);
          if (!r) {
            this.log.debug("ignoring incoming byte stream due to no handler for topic", e.topic);
            return;
          }
          let a;
          const o = {
            id: e.streamId,
            name: (s = e.contentHeader.value.name) !== null && s !== void 0 ? s : "unknown",
            mimeType: e.mimeType,
            size: e.totalLength ? Number(e.totalLength) : void 0,
            topic: e.topic,
            timestamp: ai(e.timestamp),
            attributes: e.attributes,
            encryptionType: i
          };
          let c;
          switch (e.compression) {
            case _e.DEFLATE_RAW:
              if (!bi()) {
                W.warn("Data stream ".concat(e.streamId, " received with deflate-raw compression, but this browser does not support deflate-raw decompression. Dropping..."));
                return;
              }
              c = !0;
              break;
            case _e.NONE:
              c = !1;
              break;
            default:
              W.warn("Data stream ".concat(e.streamId, " received with unknown compression type ").concat(e.compression, ", dropping..."));
              return;
          }
          const d = e.inlineContent;
          if (typeof d < "u") {
            r(new zo(o, Qo(e.streamId, c ? Go(d, this.maxPayloadByteLength) : d), ai(e.totalLength)), {
              identity: t
            });
            return;
          }
          const l = new ReadableStream({
            start: u => {
              if (a = u, this.byteStreamControllers.has(e.streamId)) throw new he("A data stream read is already in progress for a stream with id ".concat(e.streamId, "."), se.AlreadyOpened);
              this.byteStreamControllers.set(e.streamId, {
                info: o,
                controller: a,
                startTime: Date.now(),
                sendingParticipantIdentity: t
              });
            }
          });
          r(new zo(o, c ? pg(l, e.streamId, this.maxPayloadByteLength) : l.pipeThrough(Jn(e.streamId)), ai(e.totalLength)), {
            identity: t
          });
          return;
        }
      case "textHeader":
        {
          const r = this.textStreamHandlers.get(e.topic);
          if (!r) {
            this.log.debug("ignoring incoming text stream due to no handler for topic", e.topic);
            return;
          }
          let a;
          const o = {
            id: e.streamId,
            mimeType: e.mimeType,
            size: e.totalLength ? Number(e.totalLength) : void 0,
            topic: e.topic,
            timestamp: Number(e.timestamp),
            attributes: e.attributes,
            encryptionType: i,
            attachedStreamIds: e.contentHeader.value.attachedStreamIds
          };
          let c;
          switch (e.compression) {
            case _e.DEFLATE_RAW:
              if (!bi()) {
                W.warn("Data stream ".concat(e.streamId, " received with deflate-raw compression, but this browser does not support deflate-raw decompression. Dropping..."));
                return;
              }
              c = !0;
              break;
            case _e.NONE:
              c = !1;
              break;
            default:
              W.warn("Data stream ".concat(e.streamId, " received with unknown compression type ").concat(e.compression, ", dropping..."));
              return;
          }
          const d = e.inlineContent;
          if (typeof d < "u") {
            const u = c ? Go(d, this.maxPayloadByteLength) : d;
            r(new Jo(o, Qo(e.streamId, u), ai(e.totalLength)), {
              identity: t
            });
            return;
          }
          const l = new ReadableStream({
            start: u => {
              if (a = u, this.textStreamControllers.has(e.streamId)) throw new he("A data stream read is already in progress for a stream with id ".concat(e.streamId, "."), se.AlreadyOpened);
              this.textStreamControllers.set(e.streamId, {
                info: o,
                controller: a,
                startTime: Date.now(),
                sendingParticipantIdentity: t
              });
            }
          });
          r(new Jo(o, c ? fg(l, e.streamId, this.maxPayloadByteLength) : l.pipeThrough(Jn(e.streamId)), ai(e.totalLength)), {
            identity: t
          });
          return;
        }
    }
  }
  handleStreamChunk(e, t) {
    const i = this.byteStreamControllers.get(e.streamId);
    i && (i.info.encryptionType !== t ? (i.controller.error(new he("Encryption type mismatch for stream ".concat(e.streamId, ". Expected ").concat(t, ", got ").concat(i.info.encryptionType), se.EncryptionTypeMismatch)), this.byteStreamControllers.delete(e.streamId)) : i.controller.enqueue(e));
    const s = this.textStreamControllers.get(e.streamId);
    s && (s.info.encryptionType !== t ? (s.controller.error(new he("Encryption type mismatch for stream ".concat(e.streamId, ". Expected ").concat(t, ", got ").concat(s.info.encryptionType), se.EncryptionTypeMismatch)), this.textStreamControllers.delete(e.streamId)) : s.controller.enqueue(e));
  }
  handleStreamTrailer(e, t) {
    const i = this.textStreamControllers.get(e.streamId);
    i && (i.info.encryptionType !== t ? i.controller.error(new he("Encryption type mismatch for stream ".concat(e.streamId, ". Expected ").concat(t, ", got ").concat(i.info.encryptionType), se.EncryptionTypeMismatch)) : (i.info.attributes = Object.assign(Object.assign({}, i.info.attributes), e.attributes), e.reason ? i.controller.error(new he("Data stream ".concat(e.streamId, " closed abnormally: ").concat(e.reason), se.AbnormalEnd)) : i.controller.close()), this.textStreamControllers.delete(e.streamId));
    const s = this.byteStreamControllers.get(e.streamId);
    s && (s.info.encryptionType !== t ? s.controller.error(new he("Encryption type mismatch for stream ".concat(e.streamId, ". Expected ").concat(t, ", got ").concat(s.info.encryptionType), se.EncryptionTypeMismatch)) : (s.info.attributes = Object.assign(Object.assign({}, s.info.attributes), e.attributes), e.reason ? s.controller.error(new he("Data stream ".concat(e.streamId, " closed abnormally: ").concat(e.reason), se.AbnormalEnd)) : s.controller.close()), this.byteStreamControllers.delete(e.streamId));
  }
}
function Qo(n, e) {
  return new ReadableStream({
    start: t => p(this, void 0, void 0, function* () {
      const i = yield e;
      t.enqueue(new vt({
        streamId: n,
        chunkIndex: BigInt(0),
        content: i
      })), t.close();
    })
  });
}
function Jn(n) {
  let e = -1;
  return new TransformStream({
    transform: (t, i) => {
      const s = ai(t.chunkIndex);
      if (s <= e) {
        W.warn("ignoring duplicate chunk ".concat(s, " ").concat(t.version > 0 ? "(version ".concat(t.version, ")") : "", " for data stream ").concat(n, " (last processed: ").concat(e, ")"));
        return;
      }
      if (s > e + 1) throw new he("Missing chunk(s) ".concat(e + 1, "..").concat(s - 1, " for data stream ").concat(n, " - cannot reassemble payload"), se.Incomplete);
      e = s, t.content.length !== 0 && i.enqueue(t);
    }
  });
}
function Rl() {
  return new TransformStream({
    transform: (n, e) => {
      e.enqueue(n.content);
    }
  });
}
function hg(n) {
  let e = 0;
  return new TransformStream({
    transform: (t, i) => {
      t.byteLength > 0 && (i.enqueue(new vt({
        streamId: n,
        chunkIndex: et(e),
        content: t
      })), e += 1);
    }
  });
}
function mg(n) {
  const e = new TextDecoder("utf-8"),
    t = new TextEncoder();
  let i = 0;
  const s = r => {
    try {
      return r ? e.decode(r, {
        stream: !0
      }) : e.decode();
    } catch (a) {
      throw new he("Cannot decode compressed data stream ".concat(n, " as text: ").concat(a), se.DecodeFailed);
    }
  };
  return new TransformStream({
    transform: (r, a) => {
      const o = s(r);
      o.length > 0 && (a.enqueue(new vt({
        streamId: n,
        chunkIndex: et(i),
        content: t.encode(o)
      })), i += 1);
    },
    flush: r => {
      const a = s();
      a.length > 0 && (r.enqueue(new vt({
        streamId: n,
        chunkIndex: et(i),
        content: t.encode(a)
      })), i += 1);
    }
  });
}
function pg(n, e, t) {
  return n.pipeThrough(Jn(e)).pipeThrough(Rl()).pipeThrough(El()).pipeThrough(Il(e, t)).pipeThrough(hg(e));
}
function fg(n, e, t) {
  return n.pipeThrough(Jn(e)).pipeThrough(Rl()).pipeThrough(El()).pipeThrough(Il(e, t)).pipeThrough(mg(e));
}
function Il(n, e) {
  let t = 0;
  return new TransformStream({
    transform: (i, s) => {
      if (t += i.byteLength, t > e) throw new he("Data stream ".concat(n, " exceeds the maximum payload size of ").concat(e, " bytes"), se.PayloadTooLarge);
      s.enqueue(i);
    }
  });
}
class Ml {
  constructor(e, t, i) {
    this.writableStream = e, this.defaultWriter = e.getWriter(), this.onClose = i, this.info = t;
  }
  write(e) {
    return this.defaultWriter.write(e);
  }
  close() {
    return p(this, void 0, void 0, function* () {
      var e;
      yield this.defaultWriter.close(), this.defaultWriter.releaseLock(), (e = this.onClose) === null || e === void 0 || e.call(this);
    });
  }
}
class gg extends Ml {}
class vg extends Ml {}
function Ks(n, e, t) {
  var i;
  return new is({
    streamId: n.id,
    mimeType: n.mimeType,
    topic: n.topic,
    timestamp: et(n.timestamp),
    totalLength: et(n.size),
    attributes: n.attributes,
    compression: (i = t?.compression) !== null && i !== void 0 ? i : _e.NONE,
    inlineContent: t?.inlineContent,
    contentHeader: {
      case: "textHeader",
      value: new ed({
        version: e?.version,
        attachedStreamIds: n.attachedStreamIds,
        replyToStreamId: e?.replyToStreamId,
        operationType: e?.type === "update" ? nr.UPDATE : nr.CREATE
      })
    }
  });
}
function yn(n, e) {
  var t;
  return new is({
    streamId: n.id,
    mimeType: n.mimeType,
    topic: n.topic,
    timestamp: et(n.timestamp),
    totalLength: et(n.size),
    attributes: n.attributes,
    compression: (t = e?.compression) !== null && t !== void 0 ? t : _e.NONE,
    inlineContent: e?.inlineContent,
    contentHeader: {
      case: "byteHeader",
      value: new td({
        name: n.name
      })
    }
  });
}
function xt(n, e) {
  return new Me({
    destinationIdentities: e,
    value: {
      case: "streamHeader",
      value: n
    }
  });
}
const bg = new TextEncoder();
class yg {
  constructor(e, t, i, s, r) {
    this.engine = e, this.log = t, this.getRemoteParticipantClientProtocol = i, this.getRemoteParticipantCapabilities = s, this.getAllRemoteParticipantIdentities = r;
  }
  setupEngine(e) {
    this.engine = e;
  }
  sendText(e, t) {
    return p(this, void 0, void 0, function* () {
      var i, s, r, a, o;
      const c = crypto.randomUUID(),
        d = bg.encode(e),
        l = d.byteLength,
        u = (i = t?.compress) !== null && i !== void 0 ? i : !0;
      let h = {
          id: c,
          mimeType: "text/plain",
          timestamp: Date.now(),
          topic: (s = t?.topic) !== null && s !== void 0 ? s : "",
          size: l,
          attributes: t?.attributes,
          encryptionType: !((r = this.engine.e2eeManager) === null || r === void 0) && r.isDataChannelEncryptionEnabled ? z.GCM : z.NONE
        },
        g = u && bi() && this.allRecipientsSupportV2(t?.destinationIdentities) && this.allRecipientsSupportCompression(t?.destinationIdentities) ? Qn.fromStream(xn(d).pipeThrough(Hs())) : null;
      if ((!t?.attachments || t.attachments.length === 0) && this.allRecipientsSupportV2(t?.destinationIdentities)) {
        let b = d,
          T = _e.NONE;
        if (g) {
          const D = yield g.collect();
          D.byteLength < d.byteLength && (b = D, T = _e.DEFLATE_RAW);
        }
        const C = Ks(h, void 0, {
            compression: T,
            inlineContent: b
          }),
          M = xt(C, t?.destinationIdentities);
        if (M.toBinary().byteLength <= qt) return yield this.engine.sendDataPacket(M, H.RELIABLE), (a = t?.onProgress) === null || a === void 0 || a.call(t, 1), h;
      }
      const y = (o = t?.attachments) === null || o === void 0 ? void 0 : o.map(() => crypto.randomUUID()),
        k = y ? y.length + 1 : 1,
        S = new Array(k).fill(0),
        R = (b, T) => {
          var C;
          S[T] = b, (C = t?.onProgress) === null || C === void 0 || C.call(t, S.reduce((M, D) => M + D, 0) / k);
        };
      if (g) {
        h.attachedStreamIds = y;
        const b = Ks(h, void 0, {
            compression: _e.DEFLATE_RAW
          }),
          T = xt(b, t?.destinationIdentities);
        yield this.sendChunkedByteStream(T, c, t?.destinationIdentities, g.stream().pipeThrough(Gs(d.length, C => R(C, 0)))), d.length === 0 && R(1, 0);
      } else {
        const b = yield this.streamText({
          streamId: c,
          totalSize: l,
          destinationIdentities: t?.destinationIdentities,
          topic: t?.topic,
          attachedStreamIds: y,
          attributes: t?.attributes
        });
        yield b.write(e), R(1, 0), yield b.close(), h = b.info;
      }
      return t?.attachments && y && (yield Promise.all(t.attachments.map((b, T) => p(this, void 0, void 0, function* () {
        return this._sendFile(y[T], b, {
          topic: t.topic,
          mimeType: b.type,
          destinationIdentities: t.destinationIdentities,
          compress: t.compress,
          onProgress: C => {
            R(C, T + 1);
          }
        });
      })))), h;
    });
  }
  sendBytes(e, t) {
    return p(this, void 0, void 0, function* () {
      var i, s, r, a, o, c, d;
      const l = crypto.randomUUID(),
        u = t?.destinationIdentities,
        h = (i = t?.compress) !== null && i !== void 0 ? i : !0,
        m = {
          id: l,
          name: (s = t?.name) !== null && s !== void 0 ? s : "unknown",
          mimeType: (r = t?.mimeType) !== null && r !== void 0 ? r : "application/octet-stream",
          timestamp: Date.now(),
          topic: (a = t?.topic) !== null && a !== void 0 ? a : "",
          size: e.byteLength,
          attributes: t?.attributes,
          encryptionType: !((o = this.engine.e2eeManager) === null || o === void 0) && o.isDataChannelEncryptionEnabled ? z.GCM : z.NONE
        },
        g = Gs(e.length, t?.onProgress);
      let y = h && bi() && this.allRecipientsSupportV2(u) && this.allRecipientsSupportCompression(u) ? Qn.fromStream(xn(e).pipeThrough(g).pipeThrough(Hs())) : null;
      if (this.allRecipientsSupportV2(u)) {
        let b = e,
          T = _e.NONE;
        if (y) {
          const D = yield y.collect();
          D.byteLength < e.byteLength && (b = D, T = _e.DEFLATE_RAW);
        }
        const C = yn(m, {
            compression: T,
            inlineContent: b
          }),
          M = xt(C, u);
        if (M.toBinary().byteLength <= qt) return yield this.engine.sendDataPacket(M, H.RELIABLE), (c = t?.onProgress) === null || c === void 0 || c.call(t, 1), m;
      }
      const k = yn(m, {
          compression: y ? _e.DEFLATE_RAW : _e.NONE
        }),
        S = xt(k, u),
        R = y ? y.stream() : xn(e).pipeThrough(g);
      return yield this.sendChunkedByteStream(S, l, u, R), e.length === 0 && ((d = t?.onProgress) === null || d === void 0 || d.call(t, 1)), m;
    });
  }
  allRecipientsSupportV2(e) {
    return (e && e.length > 0 ? e : this.getAllRemoteParticipantIdentities()).every(i => this.getRemoteParticipantClientProtocol(i) >= Jd);
  }
  allRecipientsSupportCompression(e) {
    return (e && e.length > 0 ? e : this.getAllRemoteParticipantIdentities()).every(i => this.getRemoteParticipantCapabilities(i).includes(Zi.CAP_COMPRESSION_DEFLATE_RAW));
  }
  sendChunkedByteStream(e, t, i, s) {
    return p(this, void 0, void 0, function* () {
      var r, a, o, c;
      const d = this.engine;
      yield zs(d, e);
      let l = 0;
      try {
        for (var u = !0, h = Ve(mp(s, qt)), m; m = yield h.next(), r = m.done, !r; u = !0) {
          c = m.value, u = !1;
          const g = c,
            f = new Me({
              destinationIdentities: i,
              value: {
                case: "streamChunk",
                value: new vt({
                  content: g,
                  streamId: t,
                  chunkIndex: et(l)
                })
              }
            });
          yield d.sendDataPacket(f, H.RELIABLE), l += 1;
        }
      } catch (g) {
        a = {
          error: g
        };
      } finally {
        try {
          !u && !r && (o = h.return) && (yield o.call(h));
        } finally {
          if (a) throw a.error;
        }
      }
      yield Js(t, i, d);
    });
  }
  streamText(e) {
    return p(this, void 0, void 0, function* () {
      var t, i, s;
      const r = (t = e?.streamId) !== null && t !== void 0 ? t : crypto.randomUUID(),
        a = e?.destinationIdentities,
        o = {
          id: r,
          mimeType: "text/plain",
          timestamp: Date.now(),
          topic: (i = e?.topic) !== null && i !== void 0 ? i : "",
          size: e?.totalSize,
          attributes: e?.attributes,
          encryptionType: !((s = this.engine.e2eeManager) === null || s === void 0) && s.isDataChannelEncryptionEnabled ? z.GCM : z.NONE,
          attachedStreamIds: e?.attachedStreamIds
        },
        c = Ks(o, e),
        d = xt(c, a);
      yield zs(this.engine, d);
      let l = 0;
      const u = this.engine,
        h = new WritableStream({
          write(f) {
            return p(this, void 0, void 0, function* () {
              for (const y of hp(f, qt)) {
                const k = new vt({
                    content: y,
                    streamId: r,
                    chunkIndex: et(l)
                  }),
                  S = new Me({
                    destinationIdentities: a,
                    value: {
                      case: "streamChunk",
                      value: k
                    }
                  });
                yield u.sendDataPacket(S, H.RELIABLE), l += 1;
              }
            });
          },
          close() {
            return p(this, void 0, void 0, function* () {
              yield Js(r, a, u);
            });
          },
          abort(f) {}
        });
      let m = () => p(this, void 0, void 0, function* () {
        yield g.close();
      });
      u.once(P.Closing, m);
      const g = new gg(h, o, () => this.engine.off(P.Closing, m));
      return g;
    });
  }
  sendFile(e, t) {
    return p(this, void 0, void 0, function* () {
      const i = crypto.randomUUID();
      return yield this._sendFile(i, e, t), {
        id: i
      };
    });
  }
  _sendFile(e, t, i) {
    return p(this, void 0, void 0, function* () {
      var s, r, a, o, c;
      const d = i?.destinationIdentities,
        l = ((s = i?.compress) !== null && s !== void 0 ? s : !0) && bi() && this.allRecipientsSupportV2(d) && this.allRecipientsSupportCompression(d),
        u = {
          id: e,
          name: t.name,
          mimeType: (r = i?.mimeType) !== null && r !== void 0 ? r : t.type,
          topic: (a = i?.topic) !== null && a !== void 0 ? a : "",
          timestamp: Date.now(),
          size: t.size,
          encryptionType: !((o = this.engine.e2eeManager) === null || o === void 0) && o.isDataChannelEncryptionEnabled ? z.GCM : z.NONE
        },
        h = yn(u, {
          compression: l ? _e.DEFLATE_RAW : _e.NONE
        }),
        m = xt(h, d),
        g = t.stream().pipeThrough(Gs(t.size, i?.onProgress)),
        f = l ? g.pipeThrough(Hs()) : g;
      return yield this.sendChunkedByteStream(m, e, d, f), t.size === 0 && ((c = i?.onProgress) === null || c === void 0 || c.call(i, 1)), u;
    });
  }
  streamBytes(e) {
    return p(this, void 0, void 0, function* () {
      var t, i, s, r, a;
      const o = (t = e?.streamId) !== null && t !== void 0 ? t : crypto.randomUUID(),
        c = e?.destinationIdentities,
        d = {
          id: o,
          mimeType: (i = e?.mimeType) !== null && i !== void 0 ? i : "application/octet-stream",
          topic: (s = e?.topic) !== null && s !== void 0 ? s : "",
          timestamp: Date.now(),
          attributes: e?.attributes,
          size: e?.totalSize,
          name: (r = e?.name) !== null && r !== void 0 ? r : "unknown",
          encryptionType: !((a = this.engine.e2eeManager) === null || a === void 0) && a.isDataChannelEncryptionEnabled ? z.GCM : z.NONE
        },
        l = yn(d),
        u = xt(l, c);
      yield zs(this.engine, u);
      let h = 0;
      const m = new ye(),
        g = this.engine,
        f = this.log,
        y = new WritableStream({
          write(S) {
            return p(this, void 0, void 0, function* () {
              const R = yield m.lock();
              let b = 0;
              try {
                for (; b < S.byteLength;) {
                  const T = S.slice(b, b + qt),
                    C = new Me({
                      destinationIdentities: c,
                      value: {
                        case: "streamChunk",
                        value: new vt({
                          content: T,
                          streamId: o,
                          chunkIndex: et(h)
                        })
                      }
                    });
                  yield g.sendDataPacket(C, H.RELIABLE), h += 1, b += T.byteLength;
                }
              } finally {
                R();
              }
            });
          },
          close() {
            return p(this, void 0, void 0, function* () {
              yield Js(o, c, g);
            });
          },
          abort(S) {
            f.error("Sink error:", S);
          }
        });
      return new vg(y, d);
    });
  }
}
class Qn {
  constructor(e) {
    this.state = e;
  }
  static fromStream(e) {
    return new Qn({
      type: "stream",
      stream: e
    });
  }
  collect() {
    return p(this, void 0, void 0, function* () {
      switch (this.state.type) {
        case "stream":
          const e = yield _l(this.state.stream);
          return this.state = {
            type: "collected",
            bytes: e
          }, e;
        case "collected":
          return this.state.bytes;
      }
    });
  }
  stream() {
    switch (this.state.type) {
      case "stream":
        return this.state.stream;
      case "collected":
        return xn(this.state.bytes);
    }
  }
}
function Gs(n, e) {
  let t = 0;
  return new TransformStream({
    transform(i, s) {
      t += i.byteLength, e && typeof n == "number" && n > 0 && e(Math.min(t / n, 1)), s.enqueue(i);
    }
  });
}
function zs(n, e) {
  return p(this, void 0, void 0, function* () {
    if (e.toBinary().byteLength > qt) throw new he("data stream header exceeds the ".concat(qt, "-byte limit; reduce attribute size"), se.HeaderTooLarge);
    yield n.sendDataPacket(e, H.RELIABLE);
  });
}
function Js(n, e, t) {
  return p(this, void 0, void 0, function* () {
    const i = new Me({
      destinationIdentities: e,
      value: {
        case: "streamTrailer",
        value: new Yr({
          streamId: n
        })
      }
    });
    yield t.sendDataPacket(i, H.RELIABLE);
  });
}
const oe = 1,
  dt = 2,
  Yo = 4,
  kg = 8,
  $o = 0,
  Xo = 12,
  Zo = 5,
  Tg = 7,
  ec = 3,
  Sg = 3,
  tc = 2,
  ic = 1,
  nc = 0,
  sc = 3,
  kn = 2,
  rc = 2,
  Cg = 1,
  wg = 0;
var ut;
(function (n) {
  n[n.TooShort = 0] = "TooShort", n[n.HeaderOverrun = 1] = "HeaderOverrun", n[n.MissingExtWords = 2] = "MissingExtWords", n[n.UnsupportedVersion = 3] = "UnsupportedVersion", n[n.InvalidHandle = 4] = "InvalidHandle", n[n.MalformedExt = 5] = "MalformedExt";
})(ut || (ut = {}));
class Pe extends He {
  constructor(e, t, i) {
    super(19, e, i), this.name = "DataTrackDeserializeError", this.reason = t, this.reasonName = ut[t];
  }
  static tooShort() {
    return new Pe("Too short to contain a valid header", ut.TooShort);
  }
  static headerOverrun() {
    return new Pe("Header exceeds total packet length", ut.HeaderOverrun);
  }
  static missingExtWords() {
    return new Pe("Extension word indicator is missing", ut.MissingExtWords);
  }
  static unsupportedVersion(e) {
    return new Pe("Unsupported version ".concat(e), ut.UnsupportedVersion);
  }
  static invalidHandle(e) {
    return new Pe("invalid track handle: ".concat(e.message), ut.InvalidHandle, {
      cause: e
    });
  }
  static malformedExt(e) {
    return new Pe("Extension with tag ".concat(e, " is malformed"), ut.MalformedExt);
  }
}
var zi;
(function (n) {
  n[n.TooSmallForHeader = 0] = "TooSmallForHeader", n[n.TooSmallForPayload = 1] = "TooSmallForPayload";
})(zi || (zi = {}));
class cn extends He {
  constructor(e, t, i) {
    super(19, e, i), this.name = "DataTrackSerializeError", this.reason = t, this.reasonName = zi[t];
  }
  static tooSmallForHeader() {
    return new cn("Buffer cannot fit header", zi.TooSmallForHeader);
  }
  static tooSmallForPayload() {
    return new cn("Buffer cannot fit payload", zi.TooSmallForPayload);
  }
}
class ds {
  toBinary() {
    const e = this.toBinaryLengthBytes(),
      t = new ArrayBuffer(e),
      i = new DataView(t),
      s = this.toBinaryInto(i);
    if (e !== s) throw new Error("".concat(this.constructor.name, ".toBinary: written bytes (").concat(s, " bytes) not equal to allocated array buffer length (").concat(e, " bytes)."));
    return new Uint8Array(t);
  }
}
var Ii;
(function (n) {
  n[n.UserTimestamp = 2] = "UserTimestamp", n[n.E2ee = 1] = "E2ee";
})(Ii || (Ii = {}));
class Al extends ds {}
class $e extends Al {
  constructor(e) {
    super(), this.timestamp = e;
  }
  toBinaryLengthBytes() {
    return oe + oe + $e.lengthBytes;
  }
  toBinaryInto(e) {
    let t = 0;
    e.setUint8(t, $e.tag), t += oe, e.setUint8(t, $e.lengthBytes), t += oe, e.setBigUint64(t, this.timestamp), t += kg;
    const i = this.toBinaryLengthBytes();
    if (t !== i) throw new Error("DataTrackUserTimestampExtension.toBinaryInto: Wrote ".concat(t, " bytes but expected length was ").concat(i, " bytes"));
    return t;
  }
  toJSON() {
    return {
      tag: $e.tag,
      lengthBytes: $e.lengthBytes,
      timestamp: this.timestamp
    };
  }
}
$e.tag = Ii.UserTimestamp;
$e.lengthBytes = 8;
class Xe extends Al {
  constructor(e, t) {
    super(), this.keyIndex = e, this.iv = t;
  }
  toBinaryLengthBytes() {
    return oe + oe + Xe.lengthBytes;
  }
  toBinaryInto(e) {
    let t = 0;
    e.setUint8(t, Xe.tag), t += oe, e.setUint8(t, Xe.lengthBytes), t += oe, e.setUint8(t, this.keyIndex), t += oe;
    for (let s = 0; s < this.iv.length; s += 1) e.setUint8(t, this.iv[s]), t += oe;
    const i = this.toBinaryLengthBytes();
    if (t !== i) throw new Error("DataTrackE2eeExtension.toBinaryInto: Wrote ".concat(t, " bytes but expected length was ").concat(i, " bytes"));
    return t;
  }
  toJSON() {
    return {
      tag: Xe.tag,
      lengthBytes: Xe.lengthBytes,
      keyIndex: this.keyIndex,
      iv: this.iv
    };
  }
}
Xe.tag = Ii.E2ee;
Xe.lengthBytes = 13;
class Si extends ds {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    super(), this.userTimestamp = e.userTimestamp, this.e2ee = e.e2ee;
  }
  toBinaryLengthBytes() {
    let e = 0;
    return this.userTimestamp && (e += this.userTimestamp.toBinaryLengthBytes()), this.e2ee && (e += this.e2ee.toBinaryLengthBytes()), e;
  }
  toBinaryInto(e) {
    let t = 0;
    if (this.e2ee) {
      const s = this.e2ee.toBinaryInto(e);
      t += s;
    }
    if (this.userTimestamp) {
      const s = this.userTimestamp.toBinaryInto(new DataView(e.buffer, e.byteOffset + t));
      t += s;
    }
    const i = this.toBinaryLengthBytes();
    if (t !== i) throw new Error("DataTrackExtensions.toBinaryInto: Wrote ".concat(t, " bytes but expected length was ").concat(i, " bytes"));
    return t;
  }
  static fromBinary(e) {
    const t = ga(e);
    let i,
      s,
      r = 0;
    for (; t.byteLength - r >= oe + oe;) {
      const a = t.getUint8(r);
      r += oe;
      const o = t.getUint8(r);
      if (r += oe, a !== wg) switch (a) {
        case Ii.UserTimestamp:
          if (t.byteLength - r < $e.lengthBytes) throw Pe.malformedExt(a);
          i = new $e(t.getBigUint64(r)), r += o;
          break;
        case Ii.E2ee:
          if (t.byteLength - r < Xe.lengthBytes) throw Pe.malformedExt(a);
          const c = t.getUint8(r),
            d = new Uint8Array(12);
          for (let l = 0; l < d.length; l += 1) {
            let u = r;
            u += oe, u += l * oe, d[l] = t.getUint8(u);
          }
          s = new Xe(c, d), r += o;
          break;
        default:
          if (t.byteLength - r < o) throw Pe.malformedExt(a);
          r += o;
          break;
      }
    }
    return [new Si({
      userTimestamp: i,
      e2ee: s
    }), t.byteLength];
  }
  toJSON() {
    var e, t, i, s;
    return {
      userTimestamp: (t = (e = this.userTimestamp) === null || e === void 0 ? void 0 : e.toJSON()) !== null && t !== void 0 ? t : null,
      e2ee: (s = (i = this.e2ee) === null || i === void 0 ? void 0 : i.toJSON()) !== null && s !== void 0 ? s : null
    };
  }
}
const Ol = {
    from(n) {
      return {
        payload: n.payload,
        extensions: new Si({
          userTimestamp: n.userTimestamp ? new $e(n.userTimestamp) : void 0
        })
      };
    },
    lossyIntoFrame(n) {
      var e;
      return {
        payload: n.payload,
        userTimestamp: (e = n.extensions.userTimestamp) === null || e === void 0 ? void 0 : e.timestamp
      };
    }
  },
  Dl = Symbol.for("lk.track"),
  Ll = Symbol.for("lk.data-track");
class Nl {
  constructor(e, t, i) {
    this.trackSymbol = Dl, this.isLocal = !1, this.typeSymbol = Ll, this.info = e, this.manager = t, this.publisherIdentity = i.publisherIdentity;
  }
  subscribe(e) {
    try {
      const t = this.manager.openSubscriptionStream(this.info.sid, e?.signal, e?.bufferSize),
        i = x(t, 2),
        s = i[0];
      return i[1].catch(() => {}), s;
    } catch (t) {
      throw t;
    }
  }
  setPipelineOptions(e) {
    this.manager.setPipelineOptions(this.info.sid, e);
  }
}
class dn extends ds {
  constructor(e) {
    var t;
    super(), this.marker = e.marker, this.trackHandle = e.trackHandle, this.sequence = e.sequence, this.frameNumber = e.frameNumber, this.timestamp = e.timestamp, this.extensions = (t = e.extensions) !== null && t !== void 0 ? t : new Si();
  }
  extensionsMetrics() {
    const e = this.extensions.toBinaryLengthBytes(),
      t = Math.ceil((kn + e) / 4),
      i = t * 4 - kn - e;
    return {
      lengthBytes: e,
      lengthWords: t,
      paddingLengthBytes: i
    };
  }
  toBinaryLengthBytes() {
    const e = this.extensionsMetrics(),
      t = e.lengthBytes,
      i = e.paddingLengthBytes;
    let s = Xo;
    return t > 0 && (s += kn + t + i), s;
  }
  toBinaryInto(e) {
    if (e.byteLength < this.toBinaryLengthBytes()) throw cn.tooSmallForHeader();
    let t = $o << Zo,
      i;
    switch (this.marker) {
      case te.Inter:
        i = nc;
        break;
      case te.Final:
        i = ic;
        break;
      case te.Start:
        i = tc;
        break;
      case te.Single:
        i = sc;
        break;
    }
    t |= i << ec;
    const s = this.extensionsMetrics(),
      r = s.lengthBytes,
      a = s.lengthWords,
      o = s.paddingLengthBytes;
    r > 0 && (t |= 1 << rc);
    let c = 0;
    if (e.setUint8(c, t), c += oe, e.setUint8(c, 0), c += oe, e.setUint16(c, this.trackHandle), c += dt, e.setUint16(c, this.sequence.value), c += dt, e.setUint16(c, this.frameNumber.value), c += dt, e.setUint32(c, this.timestamp.asTicks()), c += Yo, r > 0) {
      const l = a - 1;
      e.setUint16(c, l), c += dt;
      const u = this.extensions.toBinaryInto(new DataView(e.buffer, e.byteOffset + c));
      c += u;
      for (let h = 0; h < o; h += 1) e.setUint8(c, 0), c += oe;
    }
    const d = this.toBinaryLengthBytes();
    if (c !== d) throw new Error("DataTrackPacketHeader.toBinaryInto: Wrote ".concat(c, " bytes but expected length was ").concat(d, " bytes"));
    return d;
  }
  static fromBinary(e) {
    const t = ga(e);
    if (t.byteLength < Xo) throw Pe.tooShort();
    let i = 0;
    const s = t.getUint8(i);
    i += oe;
    const r = s >> Zo & Tg;
    if (r > $o) throw Pe.unsupportedVersion(r);
    let a;
    switch (s >> ec & Sg) {
      case tc:
        a = te.Start;
        break;
      case ic:
        a = te.Final;
        break;
      case sc:
        a = te.Single;
        break;
      case nc:
      default:
        a = te.Inter;
        break;
    }
    const o = (s >> rc & Cg) > 0;
    i += oe;
    let c;
    try {
      c = Fp.fromNumber(t.getUint16(i));
    } catch (m) {
      throw m instanceof Pi && (m.isReason(Kt.Reserved) || m.isReason(Kt.TooLarge)) ? Pe.invalidHandle(m) : m;
    }
    i += dt;
    const d = Ze.u16(t.getUint16(i));
    i += dt;
    const l = Ze.u16(t.getUint16(i));
    i += dt;
    const u = ki.fromRtpTicks(t.getUint32(i));
    i += Yo;
    let h = new Si();
    if (o) {
      if (t.byteLength - i < dt) throw Pe.missingExtWords();
      let m = t.getUint16(i);
      i += dt;
      let f = 4 * (m + 1) - kn;
      if (i + f > t.byteLength) throw Pe.headerOverrun();
      let y = new DataView(t.buffer, t.byteOffset + i, f);
      const k = Si.fromBinary(y),
        S = x(k, 2),
        R = S[0],
        b = S[1];
      h = R, i += b;
    }
    return [new dn({
      marker: a,
      trackHandle: c,
      sequence: d,
      frameNumber: l,
      timestamp: u,
      extensions: h
    }), i];
  }
  toJSON() {
    return {
      marker: this.marker,
      trackHandle: this.trackHandle,
      sequence: this.sequence.value,
      frameNumber: this.frameNumber.value,
      timestamp: this.timestamp.asTicks(),
      extensions: this.extensions.toJSON()
    };
  }
}
var te;
(function (n) {
  n[n.Start = 0] = "Start", n[n.Inter = 1] = "Inter", n[n.Final = 2] = "Final", n[n.Single = 3] = "Single";
})(te || (te = {}));
class ls extends ds {
  constructor(e, t) {
    super(), this.header = e, this.payload = t;
  }
  toBinaryLengthBytes() {
    return this.header.toBinaryLengthBytes() + this.payload.byteLength;
  }
  toBinaryInto(e) {
    let t = 0;
    const i = this.header.toBinaryInto(e);
    if (t += i, e.byteLength - t < this.payload.byteLength) throw cn.tooSmallForPayload();
    for (let r = 0; r < this.payload.length; r += 1) e.setUint8(t, this.payload[r]), t += oe;
    const s = this.toBinaryLengthBytes();
    if (t !== s) throw new Error("DataTrackPacket.toBinaryInto: Wrote ".concat(t, " bytes but expected length was ").concat(s, " bytes"));
    return s;
  }
  static fromBinary(e) {
    const t = ga(e),
      i = dn.fromBinary(t),
      s = x(i, 2),
      r = s[0],
      a = s[1],
      o = t.buffer.slice(t.byteOffset + a, t.byteOffset + t.byteLength);
    return [new ls(r, new Uint8Array(o)), t.byteLength];
  }
  toJSON() {
    return {
      header: this.header.toJSON(),
      payload: this.payload
    };
  }
}
const Qs = ke(re.DataTracks);
class rt extends He {
  constructor(e, t, i, s) {
    super(19, "Frame ".concat(i, " dropped: ").concat(e), s), this.name = "DataTrackDepacketizerDropError", this.reason = t, this.reasonName = jt[t], this.frameNumber = i;
  }
  static interrupted(e, t) {
    return new rt("Interrupted by the start of a new frame ".concat(t), jt.Interrupted, e);
  }
  static unknownFrame(e) {
    return new rt("Initial packet was never received.", jt.UnknownFrame, e);
  }
  static bufferFull(e) {
    return new rt("Reorder buffer is full.", jt.BufferFull, e);
  }
  static incomplete(e, t, i) {
    return new rt("Not all packets received before final packet. Received ".concat(t, " packets, expected ").concat(i, " packets."), jt.Incomplete, e);
  }
}
var jt;
(function (n) {
  n[n.Interrupted = 0] = "Interrupted", n[n.UnknownFrame = 1] = "UnknownFrame", n[n.BufferFull = 2] = "BufferFull", n[n.Incomplete = 3] = "Incomplete";
})(jt || (jt = {}));
class us {
  constructor() {
    this.partials = new Map();
  }
  push(e, t) {
    switch (e.header.marker) {
      case te.Single:
        return this.frameFromSingle(e, t);
      case te.Start:
        return this.beginPartial(e, t);
      case te.Inter:
      case te.Final:
        return this.pushToPartial(e);
    }
  }
  reset() {
    this.partials.clear();
  }
  peekOldestPartialFrameNumber() {
    const e = this.partials.keys().next();
    return e.done ? null : e.value;
  }
  frameFromSingle(e, t) {
    var i;
    if (e.header.marker !== te.Single) throw new Error("Depacketizer.frameFromSingle: packet.header.marker was not FrameMarker.Single, found ".concat(e.header.marker, "."));
    const s = (i = t?.maxPartialFrames) !== null && i !== void 0 ? i : 1;
    if (this.partials.size >= s) {
      const r = this.peekOldestPartialFrameNumber();
      if (typeof r != "number") throw new Error("Depacketizer.frameFromSingle: no oldest frame number found, but partials.size is ".concat(this.partials.size, "."));
      if (this.partials.delete(r), t?.throwOnInterruption) throw rt.interrupted(r, e.header.frameNumber.value);
      Qs.warn("Data track frame ".concat(r, " was interrupted by single-packet frame ").concat(e.header.frameNumber.value, ", dropping."));
    }
    return {
      payload: e.payload,
      extensions: e.header.extensions
    };
  }
  beginPartial(e, t) {
    var i;
    if (e.header.marker !== te.Start) throw new Error("Depacketizer.beginPartial: packet.header.marker was not FrameMarker.Start, found ".concat(e.header.marker, "."));
    const s = e.header.sequence,
      r = e.header.frameNumber.value,
      a = {
        startSequence: s,
        extensions: e.header.extensions,
        payloads: new Map([[s.value, e.payload]])
      },
      o = (i = t?.maxPartialFrames) !== null && i !== void 0 ? i : 1;
    for (; this.partials.size >= o;) {
      const c = this.peekOldestPartialFrameNumber();
      if (typeof c != "number") break;
      if (this.partials.delete(c), t?.throwOnInterruption) throw rt.interrupted(c, r);
      Qs.warn("Data track partials full (max ".concat(o, "), evicted oldest frame ").concat(c, " to make room for new frame ").concat(r, "."));
    }
    return this.partials.set(r, a), null;
  }
  pushToPartial(e) {
    if (e.header.marker !== te.Inter && e.header.marker !== te.Final) throw new Error("Depacketizer.pushToPartial: packet.header.marker was not FrameMarker.Inter or FrameMarker.Final, found ".concat(e.header.marker, "."));
    const t = e.header.frameNumber.value,
      i = this.partials.get(t);
    if (!i) throw this.partials.delete(t), rt.unknownFrame(t);
    if (i.payloads.size >= us.MAX_BUFFER_PACKETS) throw this.partials.delete(t), rt.bufferFull(t);
    return i.payloads.has(e.header.sequence.value) && Qs.warn("Data track frame ".concat(t, " received duplicate packet for sequence ").concat(e.header.sequence.value, ", so replacing with newly received packet.")), i.payloads.set(e.header.sequence.value, e.payload), e.header.marker === te.Final ? this.finalize(t, i, e.header.sequence.value) : null;
  }
  finalize(e, t, i) {
    const s = t.payloads.size;
    let r = 0;
    for (const d of t.payloads.values()) r += d.length;
    const a = new Uint8Array(r);
    let o = t.startSequence.clone(),
      c = 0;
    for (;;) {
      const d = t.payloads.get(o.value);
      if (!d) break;
      t.payloads.delete(o.value);
      const l = a.length - c;
      if (d.length > l) throw new Error("Depacketizer.finalize: Expected at least ".concat(d.length, " more bytes left in the payload buffer, only got ").concat(l, " bytes."));
      if (a.set(d, c), c += d.length, o.value != i) {
        o.increment();
        continue;
      }
      return this.partials.delete(e), {
        payload: a,
        extensions: t.extensions
      };
    }
    throw this.partials.delete(e), rt.incomplete(e, s, i - t.startSequence.value + 1);
  }
}
us.MAX_BUFFER_PACKETS = 128;
var Vt;
(function (n) {
  n[n.Unpublished = 0] = "Unpublished", n[n.Timeout = 1] = "Timeout", n[n.Disconnected = 2] = "Disconnected", n[n.Cancelled = 4] = "Cancelled";
})(Vt || (Vt = {}));
class Le extends He {
  constructor(e, t, i) {
    super(22, e, i), this.name = "DataTrackSubscribeError", this.reason = t, this.reasonName = Vt[t];
  }
  static unpublished() {
    return new Le("The track has been unpublished and is no longer available", Vt.Unpublished);
  }
  static timeout() {
    return new Le("Request to subscribe to data track timed-out", Vt.Timeout);
  }
  static disconnected() {
    return new Le("Cannot subscribe to data track when disconnected", Vt.Disconnected);
  }
  static cancelled() {
    return new Le("Subscription to data track cancelled by caller", Vt.Cancelled);
  }
}
const Ys = ke(re.DataTracks);
class Eg {
  constructor(e) {
    var t, i;
    const s = e.e2eeManager !== null;
    if (e.info.usesE2ee !== s) throw new Error("IncomingDataTrackPipeline: DataTrackInfo.usesE2ee must match presence of decryptionProvider");
    const r = new us();
    this.publisherIdentity = e.publisherIdentity, this.e2eeManager = (t = e.e2eeManager) !== null && t !== void 0 ? t : null, this.depacketizer = r, this.options = (i = e.pipelineOptions) !== null && i !== void 0 ? i : {};
  }
  updateE2eeManager(e) {
    this.e2eeManager = e;
  }
  setOptions(e) {
    this.options = e;
  }
  processPacket(e) {
    return p(this, void 0, void 0, function* () {
      const t = this.depacketize(e);
      if (!t) return null;
      const i = yield this.decryptIfNeeded(t);
      return i || null;
    });
  }
  depacketize(e) {
    let t;
    try {
      t = this.depacketizer.push(e, {
        throwOnInterruption: !1,
        maxPartialFrames: this.options.maxPartialFrames
      });
    } catch (i) {
      return Ys.warn("Data frame depacketize error: ".concat(i)), null;
    }
    return t;
  }
  decryptIfNeeded(e) {
    return p(this, void 0, void 0, function* () {
      var t, i;
      const s = this.e2eeManager;
      if (!s) return e;
      const r = (i = (t = e.extensions) === null || t === void 0 ? void 0 : t.e2ee) !== null && i !== void 0 ? i : null;
      if (!r) return Ys.error("Missing E2EE meta"), null;
      let a;
      try {
        a = yield s.handleEncryptedData(e.payload, r.iv, this.publisherIdentity, r.keyIndex);
      } catch (o) {
        return Ys.error("Error decrypting packet: ".concat(o)), null;
      }
      return e.payload = a.payload, e;
    });
  }
}
const ue = ke(re.DataTracks),
  _g = 1e4,
  Pg = 16;
class Rg extends Ue.EventEmitter {
  constructor(e) {
    var t;
    super(), this.descriptors = new Map(), this.subscriptionHandles = new Map(), this.e2eeManager = (t = e?.e2eeManager) !== null && t !== void 0 ? t : null;
  }
  updateE2eeManager(e) {
    this.e2eeManager = e;
    for (const t of this.descriptors.values()) t.subscription.type === "active" && t.subscription.pipeline.updateE2eeManager(e);
  }
  setPipelineOptions(e, t) {
    const i = this.descriptors.get(e);
    if (!i) {
      ue.warn("Unknown track ".concat(e, ", cannot set pipeline options."));
      return;
    }
    i.pipelineOptions = t, i.subscription.type === "active" && i.subscription.pipeline.setOptions(t);
  }
  openSubscriptionStream(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Pg,
      s = null;
    const r = new we(),
      a = this.descriptors.get(e),
      o = () => {
        t?.removeEventListener("abort", d);
      },
      c = () => {
        if (o(), !s) {
          ue.warn("ReadableStream subscribed to ".concat(e, " was not started."));
          return;
        }
        if (!a || this.descriptors.get(a.info.sid) !== a) {
          ue.warn("Unknown track ".concat(e, ", skipping cancel..."));
          return;
        }
        if (a.subscription.type !== "active") {
          ue.warn("Subscription for track ".concat(e, " is not active, skipping cancel..."));
          return;
        }
        a.subscription.streamControllers.delete(s), a.subscription.streamControllers.size === 0 && this.unSubscribeRequest(a.info.sid);
      },
      d = () => {
        var u;
        s && (a?.subscription.type === "active" && a.subscription.streamControllers.delete(s), s.error(Le.cancelled()), (u = r.reject) === null || u === void 0 || u.call(r, Le.cancelled()), c());
      };
    return [new ReadableStream({
      start: u => {
        s = u, this.subscribeRequest(e, t).then(() => p(this, void 0, void 0, function* () {
          var h, m, g;
          if (!a || this.descriptors.get(a.info.sid) !== a) {
            ue.error("Unknown track ".concat(e));
            const f = Le.disconnected();
            u.error(f), (h = r.reject) === null || h === void 0 || h.call(r, f);
            return;
          }
          if (a.subscription.type !== "active") {
            ue.error("Subscription for track ".concat(e, " is not active"));
            const f = Le.disconnected();
            u.error(f), (m = r.reject) === null || m === void 0 || m.call(r, f);
            return;
          }
          if (t?.aborted) {
            d();
            return;
          }
          t?.addEventListener("abort", d), a.subscription.streamControllers.set(u, o), (g = r.resolve) === null || g === void 0 || g.call(r);
        })).catch(h => {
          var m;
          u.error(h), (m = r.reject) === null || m === void 0 || m.call(r, h);
        });
      },
      cancel: () => {
        c();
      }
    }, new CountQueuingStrategy({
      highWaterMark: i
    })), r.promise];
  }
  subscribeRequest(e, t) {
    return p(this, void 0, void 0, function* () {
      const i = this.descriptors.get(e);
      if (!i) throw new Error("Cannot subscribe to unknown track");
      const s = (r, a, o) => p(this, void 0, void 0, function* () {
        if (r.subscription.type === "active") return;
        if (r.subscription.type !== "pending") throw new Error("Descriptor for track ".concat(e, " is not pending, found ").concat(r.subscription.type));
        const c = ml([a, o].filter(u => typeof u < "u")),
          d = new we();
        r.subscription.completionFuture.promise.then(() => {
          var u;
          return (u = d.resolve) === null || u === void 0 ? void 0 : u.call(d);
        }).catch(u => {
          var h;
          return (h = d.reject) === null || h === void 0 ? void 0 : h.call(d, u);
        });
        const l = () => {
          var u;
          if (r.subscription.type === "pending") {
            if (r.subscription.pendingRequestCount -= 1, o?.aborted) {
              r.subscription.cancel();
              return;
            }
            if (r.subscription.pendingRequestCount <= 0) {
              r.subscription.cancel();
              return;
            }
            (u = d.reject) === null || u === void 0 || u.call(d, Le.cancelled());
          }
        };
        c.aborted && l(), c.addEventListener("abort", l), yield d.promise, c.removeEventListener("abort", l);
      });
      switch (i.subscription.type) {
        case "none":
          {
            i.subscription = {
              type: "pending",
              completionFuture: new we(),
              pendingRequestCount: 1,
              cancel: () => {
                var a, o;
                const c = i.subscription;
                i.subscription = {
                  type: "none"
                }, this.emit("sfuUpdateSubscription", {
                  sid: i.info.sid,
                  subscribe: !1
                }), c.type === "pending" && ((o = (a = c.completionFuture).reject) === null || o === void 0 || o.call(a, r.aborted ? Le.timeout() : Le.cancelled()));
              }
            }, this.emit("sfuUpdateSubscription", {
              sid: e,
              subscribe: !0
            });
            const r = va(_g);
            yield s(i, t, r);
            return;
          }
        case "pending":
          {
            i.subscription.pendingRequestCount += 1, yield s(i, t);
            return;
          }
        case "active":
          return;
      }
    });
  }
  querySubscribed() {
    return p(this, void 0, void 0, function* () {
      return Array.from(this.descriptors.values()).filter(t => t.subscription.type === "active").map(t => [t.info, t.publisherIdentity]);
    });
  }
  unSubscribeRequest(e) {
    var t;
    const i = this.descriptors.get(e);
    if (!i) throw new Error("Cannot subscribe to unknown track");
    if (i.subscription.type !== "active") {
      ue.warn("Unexpected descriptor state in unSubscribeRequest, expected active, found ".concat((t = i.subscription) === null || t === void 0 ? void 0 : t.type));
      return;
    }
    this.closeStreamControllers(i.subscription.streamControllers, e);
    const s = i.subscription;
    i.subscription = {
      type: "none"
    }, this.subscriptionHandles.delete(s.subcriptionHandle), this.emit("sfuUpdateSubscription", {
      sid: e,
      subscribe: !1
    });
  }
  closeStreamControllers(e, t) {
    for (const s of e) {
      var i = x(s, 2);
      const r = i[0],
        a = i[1];
      a();
      try {
        r.close();
      } catch (o) {
        ue.warn("Failed to close readable stream for track ".concat(t, ": ").concat(o));
      }
    }
  }
  receiveSfuPublicationUpdates(e) {
    return p(this, void 0, void 0, function* () {
      if (e.size === 0) return;
      const t = new Map();
      for (const r of e.entries()) {
        var i = x(r, 2);
        const a = i[0],
          o = i[1],
          c = new Set();
        for (const d of o) c.add(d.sid), !this.descriptors.has(d.sid) && (this.handleSidReassigned(a, d) || (yield this.handleTrackPublished(a, d)));
        t.set(a, c);
      }
      for (const r of t.entries()) {
        var s = x(r, 2);
        const a = s[0],
          o = s[1];
        let d = Array.from(this.descriptors.entries()).filter(l => {
          let u = x(l, 2);
          return u[0], u[1].publisherIdentity === a;
        }).map(l => x(l, 1)[0]).filter(l => !o.has(l));
        for (const l of d) this.handleTrackUnpublished(l);
      }
    });
  }
  queryPublications() {
    return p(this, void 0, void 0, function* () {
      return Array.from(this.descriptors.values()).map(e => e.info);
    });
  }
  handleTrackPublished(e, t) {
    return p(this, void 0, void 0, function* () {
      if (this.descriptors.has(t.sid)) {
        ue.error("Existing descriptor for track ".concat(t.sid));
        return;
      }
      let i = {
        info: t,
        publisherIdentity: e,
        subscription: {
          type: "none"
        },
        pipelineOptions: {}
      };
      this.descriptors.set(i.info.sid, i);
      const s = new Nl(i.info, this, {
        publisherIdentity: e
      });
      this.emit("trackPublished", {
        track: s
      });
    });
  }
  handleSidReassigned(e, t) {
    const i = Array.from(this.descriptors.entries()).find(u => {
      let h = x(u, 2);
      h[0];
      let m = h[1];
      return m.publisherIdentity === e && m.info.pubHandle === t.pubHandle;
    });
    if (!i) return !1;
    const s = x(i, 2),
      r = s[0],
      a = s[1],
      o = a.info,
      c = o.name,
      d = o.usesE2ee;
    if (c !== t.name || d !== t.usesE2ee) return ue.warn("Info mismatch for ".concat(r, ", treating as new publication")), !1;
    const l = t.sid;
    if (ue.debug("SID reassigned: ".concat(r, " -> ").concat(l)), !this.descriptors.delete(r)) return !1;
    switch (a.info.sid = l, a.subscription.type) {
      case "none":
        break;
      case "pending":
      case "active":
        this.emit("sfuUpdateSubscription", {
          sid: l,
          subscribe: !0
        });
        break;
    }
    return a.subscription.type === "active" && this.subscriptionHandles.set(a.subscription.subcriptionHandle, l), this.descriptors.set(l, a), !0;
  }
  handleTrackUnpublished(e) {
    const t = this.descriptors.get(e);
    if (!t) {
      ue.error("Unknown track ".concat(e));
      return;
    }
    this.descriptors.delete(e), t.subscription.type === "active" && (this.closeStreamControllers(t.subscription.streamControllers, e), this.subscriptionHandles.delete(t.subscription.subcriptionHandle)), this.emit("trackUnpublished", {
      sid: e,
      publisherIdentity: t.publisherIdentity
    });
  }
  receivedSfuSubscriberHandles(e) {
    for (const i of e.entries()) {
      var t = x(i, 2);
      const s = t[0],
        r = t[1];
      this.registerSubscriberHandle(s, r);
    }
  }
  registerSubscriberHandle(e, t) {
    var i, s;
    const r = this.descriptors.get(t);
    if (!r) {
      ue.error("Unknown track ".concat(t));
      return;
    }
    switch (r.subscription.type) {
      case "none":
        {
          ue.warn("No subscription for ".concat(t));
          return;
        }
      case "active":
        {
          this.subscriptionHandles.delete(r.subscription.subcriptionHandle), r.subscription.subcriptionHandle = e, this.subscriptionHandles.set(e, t);
          return;
        }
      case "pending":
        {
          ue.debug("data track subscription activated", {
            sid: t,
            handle: e
          });
          const a = new Eg({
              info: r.info,
              publisherIdentity: r.publisherIdentity,
              e2eeManager: this.e2eeManager,
              pipelineOptions: r.pipelineOptions
            }),
            o = r.subscription;
          r.subscription = {
            type: "active",
            subcriptionHandle: e,
            pipeline: a,
            streamControllers: new Map()
          }, this.subscriptionHandles.set(e, t), (s = (i = o.completionFuture).resolve) === null || s === void 0 || s.call(i);
        }
    }
  }
  packetReceived(e) {
    return p(this, void 0, void 0, function* () {
      let t;
      try {
        var i = ls.fromBinary(e),
          s = x(i, 1);
        t = s[0];
      } catch (c) {
        ue.error("Failed to deserialize packet: ".concat(c));
        return;
      }
      const r = this.subscriptionHandles.get(t.header.trackHandle);
      if (!r) {
        ue.warn("Unknown subscriber handle ".concat(t.header.trackHandle));
        return;
      }
      const a = this.descriptors.get(r);
      if (!a) {
        ue.error("Missing descriptor for track ".concat(r));
        return;
      }
      if (a.subscription.type !== "active") {
        ue.warn("Received packet for track ".concat(r, " without active subscription"));
        return;
      }
      const o = yield a.subscription.pipeline.processPacket(t);
      if (o) for (const c of a.subscription.streamControllers.keys()) {
        if (c.desiredSize !== null && c.desiredSize <= 0) {
          ue.warn("Cannot send frame to subscribers: readable stream is full (desiredSize is ".concat(c.desiredSize, "). To increase this threshold, set a higher 'options.highWaterMark' when calling .subscribe()."));
          continue;
        }
        const d = Ol.lossyIntoFrame(o);
        c.enqueue(d);
      }
    });
  }
  resendSubscriptionUpdates() {
    for (const t of this.descriptors) {
      var e = x(t, 2);
      const i = e[0];
      e[1].subscription.type !== "none" && this.emit("sfuUpdateSubscription", {
        sid: i,
        subscribe: !0
      });
    }
  }
  handleRemoteParticipantDisconnected(e) {
    var t, i;
    for (const s of this.descriptors.values()) if (s.publisherIdentity === e) switch (s.subscription.type) {
      case "none":
        break;
      case "pending":
        (i = (t = s.subscription.completionFuture).reject) === null || i === void 0 || i.call(t, Le.disconnected());
        break;
      case "active":
        this.unSubscribeRequest(s.info.sid);
        break;
    }
  }
  reset() {
    var e, t;
    for (const i of this.descriptors.values()) this.emit("trackUnpublished", {
      sid: i.info.sid,
      publisherIdentity: i.publisherIdentity
    }), i.subscription.type === "pending" && ((t = (e = i.subscription.completionFuture).reject) === null || t === void 0 || t.call(e, Le.disconnected())), i.subscription.type === "active" && this.closeStreamControllers(i.subscription.streamControllers, i.info.sid);
    this.descriptors.clear(), this.subscriptionHandles.clear();
  }
}
class hs extends He {
  constructor(e, t, i) {
    super(19, e, i), this.name = "DataTrackPacketizerError", this.reason = t, this.reasonName = Yn[t];
  }
  static mtuTooShort() {
    return new hs("MTU is too short to send frame", Yn.MtuTooShort);
  }
}
var Yn;
(function (n) {
  n[n.MtuTooShort = 0] = "MtuTooShort";
})(Yn || (Yn = {}));
class Ca {
  constructor(e, t) {
    this.sequence = Ze.u16(0), this.frameNumber = Ze.u16(0), this.clock = Ft.rtpStartingNow(ki.rtpRandom()), this.handle = e, this.mtuSizeBytes = t;
  }
  static computeFrameMarker(e, t) {
    return t <= 1 ? te.Single : e === 0 ? te.Start : e === t - 1 ? te.Final : te.Inter;
  }
  *packetize(e, t) {
    var i;
    const s = this.frameNumber.getThenIncrement(),
      r = {
        marker: te.Inter,
        trackHandle: this.handle,
        sequence: Ze.u16(0),
        frameNumber: s,
        timestamp: (i = t?.now) !== null && i !== void 0 ? i : this.clock.now(),
        extensions: e.extensions
      },
      a = new dn(r).toBinaryLengthBytes();
    if (a >= this.mtuSizeBytes) throw hs.mtuTooShort();
    const o = this.mtuSizeBytes - a,
      c = Math.ceil(e.payload.byteLength / o);
    for (let l = 0, u = 0; u < e.payload.byteLength; d = [l + 1, u + o], l = d[0], u = d[1], d) {
      var d;
      const h = this.sequence.getThenIncrement(),
        m = new dn(Object.assign(Object.assign({}, r), {
          marker: Ca.computeFrameMarker(l, c),
          sequence: h
        })),
        g = Math.min(o, e.payload.byteLength - u),
        f = new Uint8Array(e.payload.buffer, e.payload.byteOffset + u, g);
      yield new ls(m, f);
    }
  }
}
var ze;
(function (n) {
  n[n.NotAllowed = 0] = "NotAllowed", n[n.DuplicateName = 1] = "DuplicateName", n[n.Timeout = 2] = "Timeout", n[n.LimitReached = 3] = "LimitReached", n[n.Disconnected = 4] = "Disconnected", n[n.Cancelled = 5] = "Cancelled", n[n.InvalidName = 6] = "InvalidName", n[n.Unknown = 7] = "Unknown";
})(ze || (ze = {}));
class ge extends He {
  constructor(e, t, i) {
    super(21, e, i), this.name = "DataTrackPublishError", this.reason = t, this.reasonName = ze[t], this.rawMessage = i?.rawMessage;
  }
  static notAllowed(e) {
    return new ge("Data track publishing unauthorized", ze.NotAllowed, {
      rawMessage: e
    });
  }
  static duplicateName(e) {
    return new ge("Track name already taken", ze.DuplicateName, {
      rawMessage: e
    });
  }
  static invalidName(e) {
    return new ge("Track name is invalid", ze.InvalidName, {
      rawMessage: e
    });
  }
  static timeout() {
    return new ge("Publish data track timed-out. Does the LiveKit server support data tracks?", ze.Timeout);
  }
  static limitReached(e) {
    return new ge("Data track publication limit reached", ze.LimitReached, {
      rawMessage: e
    });
  }
  static unknown(e, t) {
    return new ge("Received RequestResponse for publishDataTrack, but reason was unrecognised (".concat(e, ", ").concat(t, ")"), ze.Unknown);
  }
  static disconnected() {
    return new ge("Room disconnected", ze.Disconnected);
  }
  static cancelled() {
    return new ge("Publish data track cancelled by caller", ze.Cancelled);
  }
}
var Ji;
(function (n) {
  n[n.TrackUnpublished = 0] = "TrackUnpublished", n[n.Dropped = 1] = "Dropped";
})(Ji || (Ji = {}));
class Et extends He {
  constructor(e, t, i) {
    super(22, e, i), this.name = "DataTrackPushFrameError", this.reason = t, this.reasonName = Ji[t];
  }
  static trackUnpublished() {
    return new Et("Track is no longer published", Ji.TrackUnpublished);
  }
  static dropped(e) {
    return new Et("Frame was dropped", Ji.Dropped, {
      cause: e
    });
  }
}
var Qi;
(function (n) {
  n[n.Packetizer = 0] = "Packetizer", n[n.Encryption = 1] = "Encryption";
})(Qi || (Qi = {}));
class ln extends He {
  constructor(e, t, i) {
    super(21, e, i), this.name = "DataTrackOutgoingPipelineError", this.reason = t, this.reasonName = Qi[t];
  }
  static packetizer(e) {
    return new ln("Error packetizing frame", Qi.Packetizer, {
      cause: e
    });
  }
  static encryption(e) {
    return new ln("Error encrypting frame", Qi.Encryption, {
      cause: e
    });
  }
}
class ms {
  constructor(e, t) {
    this.trackSymbol = Dl, this.isLocal = !0, this.typeSymbol = Ll, this.handle = null, this.log = W, this.flushedFuture = new we(), this.isFlushed = !0, this.handleManagerReset = () => {
      var i, s;
      (s = (i = this.flushedFuture).resolve) === null || s === void 0 || s.call(i), this.manager.off("packetsFlushedChange", this.handleManagerPacketsFlushedChange), this.manager.off("reset", this.handleManagerReset);
    }, this.handleManagerPacketsFlushedChange = i => {
      var s, r;
      this.isFlushed = i.isFlushed, i.isFlushed && ((r = (s = this.flushedFuture).resolve) === null || r === void 0 || r.call(s), this.flushedFuture = new we());
    }, this.options = e, this.manager = t, this.log = ke(re.DataTracks), this.manager.on("packetsFlushedChange", this.handleManagerPacketsFlushedChange), this.manager.on("reset", this.handleManagerReset);
  }
  static withExplicitHandle(e, t, i) {
    const s = new ms(e, t);
    return s.handle = i, s;
  }
  get info() {
    const e = this.descriptor;
    if (e?.type === "active") return e.info;
  }
  get descriptor() {
    return this.handle ? this.manager.getDescriptor(this.handle) : null;
  }
  publish(e) {
    return p(this, void 0, void 0, function* () {
      try {
        this.handle = yield this.manager.publishRequest(this.options, e);
      } catch (t) {
        throw t;
      }
    });
  }
  isPublished() {
    var e;
    return ((e = this.descriptor) === null || e === void 0 ? void 0 : e.type) === "active" && this.descriptor.publishState !== "unpublished";
  }
  tryPush(e) {
    if (!this.handle) throw Et.trackUnpublished();
    const t = Ol.from(e);
    try {
      return this.manager.tryProcessAndSend(this.handle, t);
    } catch (i) {
      throw i;
    }
  }
  flush() {
    return p(this, void 0, void 0, function* () {
      if (!this.isFlushed) return this.flushedFuture.promise;
    });
  }
  unpublish() {
    return p(this, void 0, void 0, function* () {
      if (!this.handle) {
        W.warn('Data track "'.concat(this.options.name, '" is not published, so unpublishing has no effect.'));
        return;
      }
      try {
        yield this.manager.unpublishRequest(this.handle);
      } catch (e) {
        throw e;
      }
    });
  }
}
class ps {
  constructor(e) {
    this.e2eeManager = e.e2eeManager, this.packetizer = new Ca(e.info.pubHandle, ps.TRANSPORT_MTU_BYTES);
  }
  updateE2eeManager(e) {
    this.e2eeManager = e;
  }
  processFrame(e) {
    return md(this, arguments, function* () {
      const i = yield bt(this.encryptIfNeeded(e));
      try {
        yield bt(yield* dm(Ve(this.packetizer.packetize(i))));
      } catch (s) {
        throw s instanceof hs ? ln.packetizer(s) : s;
      }
    });
  }
  encryptIfNeeded(e) {
    return p(this, void 0, void 0, function* () {
      if (!this.e2eeManager) return e;
      let t;
      try {
        t = yield this.e2eeManager.encryptData(e.payload);
      } catch (i) {
        throw ln.encryption(i);
      }
      return e.payload = t.payload, e.extensions.e2ee = new Xe(t.keyIndex, t.iv), e;
    });
  }
}
ps.TRANSPORT_MTU_BYTES = 16e3;
const qe = ke(re.DataTracks),
  ac = {
    pending() {
      return {
        type: "pending",
        completionFuture: new we()
      };
    },
    active(n, e) {
      return {
        type: "active",
        info: n,
        publishState: "published",
        pipeline: new ps({
          info: n,
          e2eeManager: e
        }),
        unpublishingFuture: new we()
      };
    }
  },
  Ig = 1e4;
class wa extends Ue.EventEmitter {
  constructor(e) {
    var t;
    super(), this.handleAllocator = new Bp(), this.descriptors = new Map(), this.inFlightPacketCounter = new Map(), this.e2eeManager = (t = e?.e2eeManager) !== null && t !== void 0 ? t : null;
  }
  static withDescriptors(e) {
    const t = new wa();
    return t.descriptors = e, t;
  }
  updateE2eeManager(e) {
    this.e2eeManager = e;
    for (const t of this.descriptors.values()) t.type === "active" && t.pipeline.updateE2eeManager(e);
  }
  getDescriptor(e) {
    var t;
    return (t = this.descriptors.get(e)) !== null && t !== void 0 ? t : null;
  }
  tryProcessAndSend(e, t) {
    return p(this, void 0, void 0, function* () {
      var i, s, r, a, o;
      const c = this.getDescriptor(e);
      if (c?.type !== "active" || c.publishState === "unpublished") throw Et.trackUnpublished();
      if (c.publishState === "republishing") throw Et.dropped("Data track republishing");
      try {
        try {
          for (var d = !0, l = Ve(c.pipeline.processFrame(t)), u; u = yield l.next(), i = u.done, !i; d = !0) {
            a = u.value, d = !1;
            const h = a,
              m = (o = this.inFlightPacketCounter.get(e)) !== null && o !== void 0 ? o : 0;
            this.inFlightPacketCounter.set(e, m + 1), m === 0 && this.emit("packetsFlushedChange", {
              handle: e,
              isFlushed: !1
            }), this.emit("packetAvailable", {
              handle: e,
              bytes: h.toBinary()
            });
          }
        } catch (h) {
          s = {
            error: h
          };
        } finally {
          try {
            !d && !i && (r = l.return) && (yield r.call(l));
          } finally {
            if (s) throw s.error;
          }
        }
      } catch (h) {
        throw Et.dropped(h);
      }
    });
  }
  handlePacketSendComplete(e) {
    var t;
    let s = ((t = this.inFlightPacketCounter.get(e)) !== null && t !== void 0 ? t : 0) - 1;
    s < 0 && (qe.warn("OutgoingDataTrackManager.handlePacketSendComplete: inFlightPacketCounter was decremented below 0 (got ".concat(this.inFlightPacketCounter, " - resetting to 0. Were more packets send than were emitted?")), s = 0), this.inFlightPacketCounter.set(e, s), s === 0 && this.emit("packetsFlushedChange", {
      handle: e,
      isFlushed: !0
    });
  }
  publishRequest(e, t) {
    return p(this, void 0, void 0, function* () {
      const i = this.handleAllocator.get();
      if (!i) throw ge.limitReached();
      const s = va(Ig),
        r = t ? ml([t, s]) : s;
      if (this.descriptors.has(i)) throw new Error("Descriptor for handle already exists");
      const a = ac.pending();
      this.descriptors.set(i, a);
      const o = () => {
        var c, d;
        const l = this.descriptors.get(i);
        if (!l) {
          qe.warn("No descriptor for ".concat(i));
          return;
        }
        this.descriptors.delete(i), this.emit("sfuUnpublishRequest", {
          handle: i
        }), l.type === "pending" && ((d = (c = l.completionFuture).reject) === null || d === void 0 || d.call(c, s.aborted ? ge.timeout() : ge.cancelled()));
      };
      return r.aborted ? (o(), a.completionFuture.promise.then(() => i)) : (r.addEventListener("abort", o), this.emit("sfuPublishRequest", {
        handle: i,
        name: e.name,
        usesE2ee: this.e2eeManager !== null
      }), yield a.completionFuture.promise, r.removeEventListener("abort", o), this.emit("trackPublished", {
        track: ms.withExplicitHandle(e, this, i)
      }), i);
    });
  }
  queryPublished() {
    return Array.from(this.descriptors.values()).filter(t => t.type === "active").map(t => t.info);
  }
  unpublishRequest(e) {
    return p(this, void 0, void 0, function* () {
      const t = this.descriptors.get(e);
      if (!t) {
        qe.warn("No descriptor for ".concat(e));
        return;
      }
      if (t.type !== "active") {
        qe.warn("Track ".concat(e, " not active"));
        return;
      }
      this.emit("sfuUnpublishRequest", {
        handle: e
      }), yield t.unpublishingFuture.promise, this.inFlightPacketCounter.delete(e), this.emit("trackUnpublished", {
        sid: t.info.sid
      });
    });
  }
  receivedSfuPublishResponse(e, t) {
    var i, s, r, a;
    const o = this.descriptors.get(e);
    if (!o) {
      qe.warn("No descriptor for ".concat(e));
      return;
    }
    switch (this.descriptors.delete(e), o.type) {
      case "pending":
        {
          if (t.type === "ok") {
            const c = t.data;
            qe.debug("SFU accepted publish request for handle ".concat(e), {
              sid: c.sid
            });
            const d = c.usesE2ee ? this.e2eeManager : null;
            this.descriptors.set(c.pubHandle, ac.active(c, d)), (s = (i = o.completionFuture).resolve) === null || s === void 0 || s.call(i);
          } else qe.debug("SFU rejected publish request for handle ".concat(e), {
            error: t.error
          }), (a = (r = o.completionFuture).reject) === null || a === void 0 || a.call(r, t.error);
          return;
        }
      case "active":
        {
          if (o.publishState !== "republishing") {
            qe.warn("Track ".concat(e, " already active"));
            return;
          }
          if (t.type === "error") {
            qe.warn("Republish failed for track ".concat(e));
            return;
          }
          qe.debug("Track ".concat(e, " republished")), o.info.sid = t.data.sid, o.publishState = "published", this.descriptors.set(o.info.pubHandle, o);
        }
    }
  }
  receivedSfuUnpublishResponse(e) {
    var t, i;
    const s = this.descriptors.get(e);
    if (!s) {
      qe.warn("No descriptor for ".concat(e));
      return;
    }
    if (this.descriptors.delete(e), s.type !== "active") {
      qe.warn("Track ".concat(e, " not active"));
      return;
    }
    s.publishState = "unpublished", (i = (t = s.unpublishingFuture).resolve) === null || i === void 0 || i.call(t);
  }
  sfuWillRepublishTracks() {
    var e, t;
    for (const s of this.descriptors.entries()) {
      var i = x(s, 2);
      const r = i[0],
        a = i[1];
      switch (a.type) {
        case "pending":
          this.descriptors.delete(r), (t = (e = a.completionFuture).reject) === null || t === void 0 || t.call(e, ge.disconnected());
          break;
        case "active":
          a.publishState = "republishing", this.emit("sfuPublishRequest", {
            handle: a.info.pubHandle,
            name: a.info.name,
            usesE2ee: a.info.usesE2ee
          });
      }
    }
  }
  reset() {
    return p(this, void 0, void 0, function* () {
      var e, t, i, s;
      this.handleAllocator.reset();
      for (const r of this.descriptors.values()) switch (r.type) {
        case "pending":
          (t = (e = r.completionFuture).reject) === null || t === void 0 || t.call(e, ge.disconnected());
          break;
        case "active":
          (s = (i = r.unpublishingFuture).resolve) === null || s === void 0 || s.call(i), yield this.unpublishRequest(r.info.pubHandle);
          break;
      }
      this.descriptors.clear(), this.inFlightPacketCounter.clear(), this.emit("reset");
    });
  }
}
class J extends Error {
  constructor(e, t, i, s) {
    super(t), this.code = e, this.message = oc(t, J.MAX_MESSAGE_BYTES), this.data = i ? oc(i, J.MAX_DATA_BYTES) : void 0, typeof s?.cause < "u" && (this.cause = s?.cause);
  }
  static fromProto(e) {
    return new J(e.code, e.message, e.data);
  }
  toProto() {
    return new Gc({
      code: this.code,
      message: this.message,
      data: this.data
    });
  }
  static builtIn(e, t, i) {
    return new J(J.ErrorCode[e], J.ErrorMessage[e], t, i);
  }
}
J.MAX_MESSAGE_BYTES = 256;
J.MAX_DATA_BYTES = 15360;
J.ErrorCode = {
  APPLICATION_ERROR: 1500,
  CONNECTION_TIMEOUT: 1501,
  RESPONSE_TIMEOUT: 1502,
  RECIPIENT_DISCONNECTED: 1503,
  RESPONSE_PAYLOAD_TOO_LARGE: 1504,
  SEND_FAILED: 1505,
  UNSUPPORTED_METHOD: 1400,
  RECIPIENT_NOT_FOUND: 1401,
  REQUEST_PAYLOAD_TOO_LARGE: 1402,
  UNSUPPORTED_SERVER: 1403,
  UNSUPPORTED_VERSION: 1404
};
J.ErrorMessage = {
  APPLICATION_ERROR: "Application error in method handler",
  CONNECTION_TIMEOUT: "Connection timeout",
  RESPONSE_TIMEOUT: "Response timeout",
  RECIPIENT_DISCONNECTED: "Recipient disconnected",
  RESPONSE_PAYLOAD_TOO_LARGE: "Response payload too large",
  SEND_FAILED: "Failed to send",
  UNSUPPORTED_METHOD: "Method not supported at destination",
  RECIPIENT_NOT_FOUND: "Recipient not found",
  REQUEST_PAYLOAD_TOO_LARGE: "Request payload too large",
  UNSUPPORTED_SERVER: "RPC not supported by server",
  UNSUPPORTED_VERSION: "Unsupported RPC version"
};
const xl = 15360,
  Ul = "lk.rpc_request",
  Fl = "lk.rpc_response";
var Se;
(function (n) {
  n.RPC_REQUEST_ID = "lk.rpc_request_id", n.RPC_REQUEST_METHOD = "lk.rpc_request_method", n.RPC_REQUEST_RESPONSE_TIMEOUT_MS = "lk.rpc_request_response_timeout_ms", n.RPC_REQUEST_VERSION = "lk.rpc_request_version";
})(Se || (Se = {}));
const Mg = 1,
  Bl = 2;
function Ea(n) {
  return new TextEncoder().encode(n).length;
}
function oc(n, e) {
  if (Ea(n) <= e) return n;
  let t = 0,
    i = n.length;
  const s = new TextEncoder();
  for (; t < i;) {
    const a = Math.floor((t + i + 1) / 2);
    s.encode(n.slice(0, a)).length <= e ? t = a : i = a - 1;
  }
  const r = t > 0 ? n.charCodeAt(t - 1) : 0;
  return r >= 55296 && r <= 56319 && (t -= 1), n.slice(0, t);
}
class Ag extends Ue.EventEmitter {
  constructor(e, t, i, s) {
    super(), this.pendingAcks = new Map(), this.pendingResponses = new Map(), this.log = e, this.outgoingDataStreamManager = t, this.getRemoteParticipantClientProtocol = i, this.getServerVersion = s;
  }
  performRpc(e) {
    return p(this, arguments, void 0, function (t) {
      var i = this;
      let s = t.destinationIdentity,
        r = t.method,
        a = t.payload,
        o = t.responseTimeout,
        c = o === void 0 ? 15e3 : o;
      return function* () {
        const u = i.getRemoteParticipantClientProtocol(s);
        if (Ea(a) > xl && u < gr) throw J.builtIn("REQUEST_PAYLOAD_TOO_LARGE");
        const m = i.getServerVersion();
        if (m && tt(m, "1.8.0") < 0) throw J.builtIn("UNSUPPORTED_SERVER");
        const g = Math.max(c, 8e3),
          f = crypto.randomUUID(),
          y = new we();
        let k = null;
        const S = setTimeout(() => {
          var b;
          i.pendingAcks.delete(f), (b = y.reject) === null || b === void 0 || b.call(y, J.builtIn("CONNECTION_TIMEOUT")), i.pendingResponses.delete(f), k !== null && clearTimeout(k);
        }, 7e3);
        i.pendingAcks.set(f, {
          resolve: () => {
            clearTimeout(S);
          },
          participantIdentity: s
        }), i.pendingResponses.set(f, {
          completionFuture: y,
          participantIdentity: s
        });
        const R = y.promise.finally(() => {
          k !== null && clearTimeout(k), i.pendingAcks.has(f) && (i.log.warn("RPC response received before ack", f), i.pendingAcks.delete(f), clearTimeout(S));
        });
        R.catch(() => {});
        try {
          yield i.publishRpcRequest(s, f, r, a, g, u);
        } catch (b) {
          throw clearTimeout(S), i.pendingAcks.delete(f), i.pendingResponses.delete(f), b;
        }
        return i.pendingResponses.has(f) && (k = setTimeout(() => {
          var b;
          i.pendingResponses.delete(f), (b = y.reject) === null || b === void 0 || b.call(y, J.builtIn("RESPONSE_TIMEOUT"));
        }, c)), [f, R];
      }();
    });
  }
  publishRpcRequest(e, t, i, s, r, a) {
    return p(this, void 0, void 0, function* () {
      if (a >= gr) {
        yield this.outgoingDataStreamManager.sendText(s, {
          topic: Ul,
          destinationIdentities: [e],
          attributes: {
            [Se.RPC_REQUEST_ID]: t,
            [Se.RPC_REQUEST_METHOD]: i,
            [Se.RPC_REQUEST_RESPONSE_TIMEOUT_MS]: "".concat(r),
            [Se.RPC_REQUEST_VERSION]: "".concat(Bl)
          }
        });
        return;
      }
      this.emit("sendDataPacket", {
        packet: new Me({
          destinationIdentities: [e],
          kind: Pt.RELIABLE,
          value: {
            case: "rpcRequest",
            value: new Jr({
              id: t,
              method: i,
              payload: s,
              responseTimeoutMs: r,
              version: Mg
            })
          }
        })
      });
    });
  }
  handleIncomingDataStream(e, t, i) {
    return p(this, void 0, void 0, function* () {
      const s = i[Se.RPC_REQUEST_ID];
      if (!s) {
        this.log.warn("RPC data stream malformed: ".concat(Se.RPC_REQUEST_ID, " not set."));
        return;
      }
      const r = this.pendingResponses.get(s);
      if (r && r.participantIdentity !== t) {
        this.log.warn("RPC response stream for ".concat(s, " arrived from unexpected sender ").concat(t, ", expected ").concat(r.participantIdentity, ". Ignoring."));
        return;
      }
      let a;
      try {
        a = yield e.readAll();
      } catch (o) {
        this.log.warn("Error reading RPC response payload: ".concat(o)), this.handleIncomingRpcResponseFailure(s, J.builtIn("APPLICATION_ERROR", "Error reading RPC response payload", {
          cause: o
        }));
        return;
      }
      this.handleIncomingRpcResponseSuccess(s, a);
    });
  }
  handleIncomingRpcResponseSuccess(e, t) {
    var i, s;
    const r = this.pendingResponses.get(e);
    r ? ((s = (i = r.completionFuture).resolve) === null || s === void 0 || s.call(i, t), this.pendingResponses.delete(e)) : this.log.error("Response received for unexpected RPC request", e);
  }
  handleIncomingRpcResponseFailure(e, t) {
    var i, s;
    const r = this.pendingResponses.get(e);
    r ? ((s = (i = r.completionFuture).reject) === null || s === void 0 || s.call(i, t), this.pendingResponses.delete(e)) : this.log.error("Response received for unexpected RPC request", e);
  }
  handleIncomingRpcAck(e) {
    const t = this.pendingAcks.get(e);
    t ? (t.resolve(), this.pendingAcks.delete(e)) : this.log.error("Ack received for unexpected RPC request: ".concat(e));
  }
  handleParticipantDisconnected(e) {
    var t;
    for (const a of this.pendingAcks) {
      var i = x(a, 2);
      const o = i[0];
      i[1].participantIdentity === e && this.pendingAcks.delete(o);
    }
    for (const a of this.pendingResponses) {
      var s = x(a, 2);
      const o = s[0];
      var r = s[1];
      const c = r.participantIdentity,
        d = r.completionFuture;
      c === e && ((t = d.reject) === null || t === void 0 || t.call(d, J.builtIn("RECIPIENT_DISCONNECTED")), this.pendingResponses.delete(o));
    }
  }
}
class Og extends Ue.EventEmitter {
  constructor(e, t, i) {
    super(), this.rpcHandlers = new Map(), this.log = e, this.outgoingDataStreamManager = t, this.getRemoteParticipantClientProtocol = i;
  }
  registerRpcMethod(e, t) {
    if (this.rpcHandlers.has(e)) throw Error("RPC handler already registered for method ".concat(e, ", unregisterRpcMethod before trying to register again"));
    this.rpcHandlers.set(e, t);
  }
  unregisterRpcMethod(e) {
    this.rpcHandlers.delete(e);
  }
  handleIncomingRpcRequest(e, t) {
    return p(this, void 0, void 0, function* () {
      var i;
      if (this.publishRpcAck(e, t.id), t.version !== 1) {
        this.publishRpcResponsePacket(e, t.id, null, J.builtIn("UNSUPPORTED_VERSION"));
        return;
      }
      const s = this.rpcHandlers.get(t.method);
      if (!s) {
        this.publishRpcResponsePacket(e, t.id, null, J.builtIn("UNSUPPORTED_METHOD"));
        return;
      }
      let r;
      try {
        r = yield s({
          requestId: t.id,
          callerIdentity: e,
          payload: t.payload,
          responseTimeout: t.responseTimeoutMs
        });
      } catch (a) {
        let o;
        a instanceof J ? o = a : (this.log.warn("Uncaught error returned by RPC handler for ".concat(t.method, ". Returning APPLICATION_ERROR instead."), a), o = J.builtIn("APPLICATION_ERROR", "Uncaught error: ".concat((i = a?.message) !== null && i !== void 0 ? i : a), {
          cause: a
        })), this.publishRpcResponsePacket(e, t.id, null, o);
        return;
      }
      yield this.publishRpcResponse(e, t.id, r ?? "");
    });
  }
  handleIncomingDataStream(e, t, i) {
    return p(this, void 0, void 0, function* () {
      const s = i[Se.RPC_REQUEST_ID],
        r = i[Se.RPC_REQUEST_METHOD],
        a = parseInt(i[Se.RPC_REQUEST_RESPONSE_TIMEOUT_MS], 10),
        o = parseInt(i[Se.RPC_REQUEST_VERSION], 10);
      if (!s || !r || Number.isNaN(a) || Number.isNaN(o)) {
        this.log.warn("RPC data stream malformed: ".concat(Se.RPC_REQUEST_ID, " / ").concat(Se.RPC_REQUEST_METHOD, " / ").concat(Se.RPC_REQUEST_RESPONSE_TIMEOUT_MS, " / ").concat(Se.RPC_REQUEST_VERSION, " not set.")), this.publishRpcResponsePacket(t, s, null, J.builtIn("APPLICATION_ERROR", "RPC data stream malformed"));
        return;
      }
      if (this.publishRpcAck(t, s), o !== Bl) {
        this.publishRpcResponsePacket(t, s, null, J.builtIn("UNSUPPORTED_VERSION"));
        return;
      }
      let c;
      try {
        c = yield e.readAll();
      } catch (u) {
        this.log.warn("Error reading RPC request payload: ".concat(u)), this.publishRpcResponsePacket(t, s, null, J.builtIn("APPLICATION_ERROR", "Error reading RPC request payload", {
          cause: u
        }));
        return;
      }
      const d = this.rpcHandlers.get(r);
      if (!d) {
        this.publishRpcResponsePacket(t, s, null, J.builtIn("UNSUPPORTED_METHOD"));
        return;
      }
      let l;
      try {
        l = yield d({
          requestId: s,
          callerIdentity: t,
          payload: c,
          responseTimeout: a
        });
      } catch (u) {
        let h;
        u instanceof J ? h = u : (this.log.warn("Uncaught error returned by RPC handler for ".concat(r, ". Returning APPLICATION_ERROR instead."), u), h = J.builtIn("APPLICATION_ERROR")), this.publishRpcResponsePacket(t, s, null, h);
        return;
      }
      yield this.publishRpcResponse(t, s, l ?? "");
    });
  }
  publishRpcAck(e, t) {
    this.emit("sendDataPacket", {
      packet: new Me({
        destinationIdentities: [e],
        kind: Pt.RELIABLE,
        value: {
          case: "rpcAck",
          value: new ts({
            requestId: t
          })
        }
      })
    });
  }
  publishRpcResponsePacket(e, t, i, s) {
    this.emit("sendDataPacket", {
      packet: new Me({
        destinationIdentities: [e],
        kind: Pt.RELIABLE,
        value: {
          case: "rpcResponse",
          value: new Qr({
            requestId: t,
            value: s ? {
              case: "error",
              value: s.toProto()
            } : {
              case: "payload",
              value: i ?? ""
            }
          })
        }
      })
    });
  }
  publishRpcResponse(e, t, i) {
    return p(this, void 0, void 0, function* () {
      if (this.getRemoteParticipantClientProtocol(e) >= gr) {
        yield this.outgoingDataStreamManager.sendText(i, {
          topic: Fl,
          destinationIdentities: [e],
          attributes: {
            [Se.RPC_REQUEST_ID]: t
          }
        });
        return;
      }
      if (Ea(i) > xl) {
        this.log.warn("RPC Response payload too large for request ".concat(t, ". To send larger responses, consider updating the sending client.")), this.publishRpcResponsePacket(e, t, null, J.builtIn("RESPONSE_PAYLOAD_TOO_LARGE"));
        return;
      }
      this.publishRpcResponsePacket(e, t, i, null);
    });
  }
}
class Dg extends ul {
  constructor(e, t, i, s, r, a) {
    super(e, t, E.Kind.Audio, i, a), this.connectedNodes = [], this.monitorReceiver = () => p(this, void 0, void 0, function* () {
      if (!this.receiver) {
        this._currentBitrate = 0;
        return;
      }
      const o = yield this.getReceiverStats();
      o && this.prevStats && this.receiver && (this._currentBitrate = cs(o, this.prevStats)), this.prevStats = o;
    }), this.audioContext = s, this.webAudioPluginNodes = [], r && (this.sinkId = r.deviceId);
  }
  setVolume(e) {
    var t;
    if (this.audioContext) (t = this.gainNode) === null || t === void 0 || t.gain.setTargetAtTime(e, 0, .1);else for (const i of this.attachedElements) i.volume = e;
    We() && this._mediaStreamTrack._setVolume(e), this.elementVolume = e;
  }
  getVolume() {
    if (this.elementVolume !== void 0) return this.elementVolume;
    if (We()) return 1;
    let e = 0;
    return this.attachedElements.forEach(t => {
      t.volume > e && (e = t.volume);
    }), e;
  }
  setSinkId(e) {
    return p(this, void 0, void 0, function* () {
      this.sinkId = e, yield Promise.all(this.attachedElements.map(t => {
        if (wr(t)) return t.setSinkId(e);
      }));
    });
  }
  attach(e) {
    const t = !this.sourceNode;
    return e ? super.attach(e) : e = super.attach(), this.sinkId && wr(e) && e.setSinkId(this.sinkId).catch(i => {
      this.log.error("Failed to set sink id on remote audio track", i, this.logContext);
    }), this.audioContext && (e.volume = 0, e.muted = !0, t && (this.log.debug("using audio context mapping", this.logContext), this.connectWebAudio(this.audioContext, e))), this.elementVolume !== void 0 && this.setVolume(this.elementVolume), e;
  }
  detach(e) {
    let t;
    return e ? (t = super.detach(e), this.audioContext && (this.attachedElements.length > 0 ? this.connectWebAudio(this.audioContext, this.attachedElements[0]) : this.disconnectWebAudio())) : (t = super.detach(), this.disconnectWebAudio()), t;
  }
  setAudioContext(e) {
    var t;
    if (this.audioContext !== e) if (this.audioContext = e, e) {
      for (const i of this.attachedElements) i.volume = 0, i.muted = !0;
      this.attachedElements.length > 0 && this.connectWebAudio(e, this.attachedElements[0]);
    } else {
      this.disconnectWebAudio();
      for (const i of this.attachedElements) i.muted = !1, i.volume = (t = this.elementVolume) !== null && t !== void 0 ? t : 1;
    }
  }
  setWebAudioPlugins(e) {
    this.webAudioPluginNodes = e, this.attachedElements.length > 0 && this.audioContext && this.connectWebAudio(this.audioContext, this.attachedElements[0]);
  }
  connectWebAudio(e, t) {
    this.disconnectWebAudio(), this.sourceNode = e.createMediaStreamSource(t.srcObject);
    let i = this.sourceNode;
    this.connectedNodes = [this.sourceNode], this.webAudioPluginNodes.forEach(s => {
      i.connect(s), i = s, this.connectedNodes.push(s);
    }), this.gainNode = e.createGain(), i.connect(this.gainNode), this.connectedNodes.push(this.gainNode), this.gainNode.connect(e.destination), this.elementVolume !== void 0 && this.gainNode.gain.setTargetAtTime(this.elementVolume, 0, .1), e.state !== "running" && e.resume().then(() => {
      e.state !== "running" && this.emit(I.AudioPlaybackFailed, new Error("Audio Context couldn't be started automatically"));
    }).catch(s => {
      this.emit(I.AudioPlaybackFailed, s);
    });
  }
  disconnectWebAudio() {
    var e, t;
    for (let i = 0; i < this.connectedNodes.length - 1; i += 1) try {
      this.connectedNodes[i].disconnect(this.connectedNodes[i + 1]);
    } catch {}
    this.connectedNodes = [], (e = this.gainNode) === null || e === void 0 || e.disconnect(), (t = this.sourceNode) === null || t === void 0 || t.disconnect(), this.gainNode = void 0, this.sourceNode = void 0;
  }
  getReceiverStats() {
    return p(this, void 0, void 0, function* () {
      if (!this.receiver || !this.receiver.getStats) return;
      const e = yield this.receiver.getStats();
      let t;
      return e.forEach(i => {
        i.type === "inbound-rtp" && (t = {
          type: "audio",
          streamId: i.id,
          timestamp: i.timestamp,
          jitter: i.jitter,
          bytesReceived: i.bytesReceived,
          concealedSamples: i.concealedSamples,
          concealmentEvents: i.concealmentEvents,
          silentConcealedSamples: i.silentConcealedSamples,
          silentConcealmentEvents: i.silentConcealmentEvents,
          totalAudioEnergy: i.totalAudioEnergy,
          totalSamplesDuration: i.totalSamplesDuration
        });
      }), t;
    });
  }
}
class ht extends Ue.EventEmitter {
  constructor(e, t, i, s) {
    var r;
    super(), this.metadataMuted = !1, this.encryption = z.NONE, this.log = W, this.handleMuted = () => {
      this.emit(I.Muted);
    }, this.handleUnmuted = () => {
      this.emit(I.Unmuted);
    }, this.log = ke((r = s?.loggerName) !== null && r !== void 0 ? r : re.Publication), this.loggerContextCb = this.loggerContextCb, this.setMaxListeners(100), this.kind = e, this.trackSid = t, this.trackName = i, this.source = E.Source.Unknown;
  }
  setTrack(e) {
    this.track && (this.track.off(I.Muted, this.handleMuted), this.track.off(I.Unmuted, this.handleUnmuted)), this.track = e, e && (e.on(I.Muted, this.handleMuted), e.on(I.Unmuted, this.handleUnmuted));
  }
  get logContext() {
    var e;
    return Object.assign(Object.assign({}, (e = this.loggerContextCb) === null || e === void 0 ? void 0 : e.call(this)), V(this));
  }
  get isMuted() {
    return this.metadataMuted;
  }
  get isEnabled() {
    return !0;
  }
  get isSubscribed() {
    return this.track !== void 0;
  }
  get isEncrypted() {
    return this.encryption !== z.NONE;
  }
  get audioTrack() {
    if (at(this.track)) return this.track;
  }
  get videoTrack() {
    if (yt(this.track)) return this.track;
  }
  updateInfo(e) {
    this.trackSid = e.sid, this.trackName = e.name, this.source = E.sourceFromProto(e.source), this.mimeType = e.mimeType, this.kind === E.Kind.Video && e.width > 0 && (this.dimensions = {
      width: e.width,
      height: e.height
    }, this.simulcasted = e.simulcast), this.encryption = e.encryption, this.trackInfo = e, this.log.debug("update publication info", Object.assign(Object.assign({}, this.logContext), {
      info: e
    }));
  }
}
(function (n) {
  (function (e) {
    e.Desired = "desired", e.Subscribed = "subscribed", e.Unsubscribed = "unsubscribed";
  })(n.SubscriptionStatus || (n.SubscriptionStatus = {})), function (e) {
    e.Allowed = "allowed", e.NotAllowed = "not_allowed";
  }(n.PermissionStatus || (n.PermissionStatus = {}));
})(ht || (ht = {}));
class Nr extends ht {
  get isUpstreamPaused() {
    var e;
    return (e = this.track) === null || e === void 0 ? void 0 : e.isUpstreamPaused;
  }
  constructor(e, t, i, s) {
    super(e, t.sid, t.name, s), this.track = void 0, this.handleTrackEnded = () => {
      this.emit(I.Ended);
    }, this.handleCpuConstrained = () => {
      this.track && yt(this.track) && this.emit(I.CpuConstrained, this.track);
    }, this.updateInfo(t), this.setTrack(i);
  }
  setTrack(e) {
    this.track && (this.track.off(I.Ended, this.handleTrackEnded), this.track.off(I.CpuConstrained, this.handleCpuConstrained)), super.setTrack(e), e && (e.on(I.Ended, this.handleTrackEnded), e.on(I.CpuConstrained, this.handleCpuConstrained));
  }
  get isMuted() {
    return this.track ? this.track.isMuted : super.isMuted;
  }
  get audioTrack() {
    return super.audioTrack;
  }
  get videoTrack() {
    return super.videoTrack;
  }
  get isLocal() {
    return !0;
  }
  mute() {
    return p(this, void 0, void 0, function* () {
      var e;
      return (e = this.track) === null || e === void 0 ? void 0 : e.mute();
    });
  }
  unmute() {
    return p(this, void 0, void 0, function* () {
      var e;
      return (e = this.track) === null || e === void 0 ? void 0 : e.unmute();
    });
  }
  pauseUpstream() {
    return p(this, void 0, void 0, function* () {
      var e;
      yield (e = this.track) === null || e === void 0 ? void 0 : e.pauseUpstream();
    });
  }
  resumeUpstream() {
    return p(this, void 0, void 0, function* () {
      var e;
      yield (e = this.track) === null || e === void 0 ? void 0 : e.resumeUpstream();
    });
  }
  getTrackFeatures() {
    var e;
    if (at(this.track)) {
      const t = this.track.getSourceTrackSettings(),
        i = new Set();
      return t.autoGainControl && i.add(Te.TF_AUTO_GAIN_CONTROL), t.echoCancellation && i.add(Te.TF_ECHO_CANCELLATION), t.noiseSuppression && i.add(Te.TF_NOISE_SUPPRESSION), t.channelCount && t.channelCount > 1 && i.add(Te.TF_STEREO), !((e = this.options) === null || e === void 0) && e.dtx || i.add(Te.TF_NO_DTX), this.track.enhancedNoiseCancellation && i.add(Te.TF_ENHANCED_NOISE_CANCELLATION), Array.from(i.values());
    } else return [];
  }
}
function un(n, e) {
  return p(this, void 0, void 0, function* () {
    n ?? (n = {});
    let t = !1;
    const i = Zd(n),
      s = i.audioProcessor,
      r = i.videoProcessor,
      a = i.optionsWithoutProcessor;
    let o = a.audio,
      c = a.video;
    if (s && typeof a.audio == "object" && (a.audio.processor = s), r && typeof a.video == "object" && (a.video.processor = r), n.audio && typeof a.audio == "object" && typeof a.audio.deviceId == "string") {
      const h = a.audio.deviceId;
      a.audio.deviceId = {
        exact: h
      }, t = !0, o = Object.assign(Object.assign({}, a.audio), {
        deviceId: {
          ideal: h
        }
      });
    }
    if (a.video && typeof a.video == "object" && typeof a.video.deviceId == "string") {
      const h = a.video.deviceId;
      a.video.deviceId = {
        exact: h
      }, t = !0, c = Object.assign(Object.assign({}, a.video), {
        deviceId: {
          ideal: h
        }
      });
    }
    a.audio === !0 ? a.audio = {
      deviceId: "default"
    } : typeof a.audio == "object" && a.audio !== null && (a.audio = Object.assign(Object.assign({}, a.audio), {
      deviceId: a.audio.deviceId || "default"
    })), a.video === !0 ? a.video = {
      deviceId: "default"
    } : typeof a.video == "object" && !a.video.deviceId && (a.video.deviceId = "default");
    const d = Yd(a, bl, yl),
      l = da(d),
      u = navigator.mediaDevices.getUserMedia(l);
    a.audio && (be.userMediaPromiseMap.set("audioinput", u), u.catch(() => be.userMediaPromiseMap.delete("audioinput"))), a.video && (be.userMediaPromiseMap.set("videoinput", u), u.catch(() => be.userMediaPromiseMap.delete("videoinput")));
    try {
      const h = yield u;
      return yield Promise.all(h.getTracks().map(m => p(this, void 0, void 0, function* () {
        const g = m.kind === "audio";
        let f;
        const y = g ? l.audio : l.video;
        typeof y != "boolean" && (f = y);
        const k = m.getSettings().deviceId;
        f?.deviceId && gi(f.deviceId) !== k ? f.deviceId = k : f || (f = {
          deviceId: k
        });
        const S = Hf(m, f, e);
        return S.kind === E.Kind.Video ? S.source = E.Source.Camera : S.kind === E.Kind.Audio && (S.source = E.Source.Microphone), S.mediaStream = h, at(S) && s ? yield S.setProcessor(s) : yt(S) && r && (yield S.setProcessor(r)), S;
      })));
    } catch (h) {
      if (!t) throw h;
      return un(Object.assign(Object.assign({}, n), {
        audio: o,
        video: c
      }), e);
    }
  });
}
function Lg(n) {
  return p(this, void 0, void 0, function* () {
    return (yield un({
      audio: !1,
      video: !0
    }))[0];
  });
}
function Ng(n) {
  return p(this, void 0, void 0, function* () {
    return (yield un({
      audio: !0,
      video: !1
    }))[0];
  });
}
var xe;
(function (n) {
  n.Excellent = "excellent", n.Good = "good", n.Poor = "poor", n.Lost = "lost", n.Unknown = "unknown";
})(xe || (xe = {}));
function xg(n) {
  switch (n) {
    case oi.EXCELLENT:
      return xe.Excellent;
    case oi.GOOD:
      return xe.Good;
    case oi.POOR:
      return xe.Poor;
    case oi.LOST:
      return xe.Lost;
    default:
      return xe.Unknown;
  }
}
class ql extends Ue.EventEmitter {
  get logContext() {
    var e, t;
    return Object.assign({}, (t = (e = this.loggerOptions) === null || e === void 0 ? void 0 : e.loggerContextCb) === null || t === void 0 ? void 0 : t.call(e));
  }
  get isEncrypted() {
    return this.trackPublications.size > 0 && Array.from(this.trackPublications.values()).every(e => e.isEncrypted);
  }
  get isAgent() {
    var e;
    return ((e = this.permissions) === null || e === void 0 ? void 0 : e.agent) || this.kind === Xi.AGENT;
  }
  get isActive() {
    var e;
    return ((e = this.participantInfo) === null || e === void 0 ? void 0 : e.state) === li.ACTIVE;
  }
  get kind() {
    return this._kind;
  }
  get attributes() {
    return Object.freeze(Object.assign({}, this._attributes));
  }
  constructor(e, t, i, s, r, a) {
    let o = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : Xi.STANDARD;
    var c;
    super(), this.audioLevel = 0, this.isSpeaking = !1, this._connectionQuality = xe.Unknown, this.log = W, this.loggerOptions = a, this.log = ke((c = a?.loggerName) !== null && c !== void 0 ? c : re.Participant, () => this.logContext), this.setMaxListeners(100), this.sid = e, this.identity = t, this.name = i, this.metadata = s, this.audioTrackPublications = new Map(), this.videoTrackPublications = new Map(), this.trackPublications = new Map(), this._kind = o, this._attributes = r ?? {};
  }
  getTrackPublications() {
    return Array.from(this.trackPublications.values());
  }
  getTrackPublication(e) {
    for (const i of this.trackPublications) {
      var t = x(i, 2);
      const s = t[1];
      if (s.source === e) return s;
    }
  }
  getTrackPublicationByName(e) {
    for (const i of this.trackPublications) {
      var t = x(i, 2);
      const s = t[1];
      if (s.trackName === e) return s;
    }
  }
  waitUntilActive() {
    return this.isActive ? Promise.resolve() : this.activeFuture ? this.activeFuture.promise : (this.activeFuture = new we(), this.once(A.Active, () => {
      var e, t;
      (t = (e = this.activeFuture) === null || e === void 0 ? void 0 : e.resolve) === null || t === void 0 || t.call(e), this.activeFuture = void 0;
    }), this.activeFuture.promise);
  }
  get connectionQuality() {
    return this._connectionQuality;
  }
  get isCameraEnabled() {
    var e;
    const t = this.getTrackPublication(E.Source.Camera);
    return !(!((e = t?.isMuted) !== null && e !== void 0) || e);
  }
  get isMicrophoneEnabled() {
    var e;
    const t = this.getTrackPublication(E.Source.Microphone);
    return !(!((e = t?.isMuted) !== null && e !== void 0) || e);
  }
  get isScreenShareEnabled() {
    return !!this.getTrackPublication(E.Source.ScreenShare);
  }
  get isLocal() {
    return !1;
  }
  get joinedAt() {
    return this.participantInfo ? new Date(Number.parseInt(this.participantInfo.joinedAt.toString()) * 1e3) : new Date();
  }
  updateInfo(e) {
    var t;
    return this.participantInfo && this.participantInfo.sid === e.sid && this.participantInfo.version > e.version ? !1 : (this.identity = e.identity, this.sid = e.sid, this._setName(e.name), this._setMetadata(e.metadata), this._setAttributes(e.attributes), e.state === li.ACTIVE && ((t = this.participantInfo) === null || t === void 0 ? void 0 : t.state) !== li.ACTIVE && this.emit(A.Active), e.permission && this.setPermissions(e.permission), this.participantInfo = e, !0);
  }
  _setMetadata(e) {
    const t = this.metadata !== e,
      i = this.metadata;
    this.metadata = e, t && this.emit(A.ParticipantMetadataChanged, i);
  }
  _setName(e) {
    const t = this.name !== e;
    this.name = e, t && this.emit(A.ParticipantNameChanged, e);
  }
  _setAttributes(e) {
    const t = Fm(this.attributes, e);
    this._attributes = e, Object.keys(t).length > 0 && this.emit(A.AttributesChanged, t);
  }
  setPermissions(e) {
    var t, i, s, r, a, o;
    const c = this.permissions,
      d = e.canPublish !== ((t = this.permissions) === null || t === void 0 ? void 0 : t.canPublish) || e.canSubscribe !== ((i = this.permissions) === null || i === void 0 ? void 0 : i.canSubscribe) || e.canPublishData !== ((s = this.permissions) === null || s === void 0 ? void 0 : s.canPublishData) || e.hidden !== ((r = this.permissions) === null || r === void 0 ? void 0 : r.hidden) || e.recorder !== ((a = this.permissions) === null || a === void 0 ? void 0 : a.recorder) || e.canPublishSources.length !== this.permissions.canPublishSources.length || e.canPublishSources.some((l, u) => {
        var h;
        return l !== ((h = this.permissions) === null || h === void 0 ? void 0 : h.canPublishSources[u]);
      }) || e.canSubscribeMetrics !== ((o = this.permissions) === null || o === void 0 ? void 0 : o.canSubscribeMetrics);
    return this.permissions = e, d && this.emit(A.ParticipantPermissionsChanged, c), d;
  }
  setIsSpeaking(e) {
    e !== this.isSpeaking && (this.isSpeaking = e, e && (this.lastSpokeAt = new Date()), this.emit(A.IsSpeakingChanged, e));
  }
  setConnectionQuality(e) {
    const t = this._connectionQuality;
    this._connectionQuality = xg(e), t !== this._connectionQuality && this.emit(A.ConnectionQualityChanged, this._connectionQuality);
  }
  setDisconnected() {
    var e, t;
    this.activeFuture && ((t = (e = this.activeFuture).reject) === null || t === void 0 || t.call(e, new Error("Participant disconnected")), this.activeFuture = void 0);
  }
  setAudioContext(e) {
    return p(this, void 0, void 0, function* () {
      this.audioContext = e, yield Promise.all(Array.from(this.audioTrackPublications.values()).map(t => t.track).filter(at).map(t => t.setAudioContext(e)));
    });
  }
  addTrackPublication(e) {
    this.log.debug("adding track publication", {
      trackSid: e.trackSid,
      source: e.source,
      kind: e.kind
    }), e.on(I.Muted, () => {
      this.emit(A.TrackMuted, e);
    }), e.on(I.Unmuted, () => {
      this.emit(A.TrackUnmuted, e);
    });
    const t = e;
    switch (t.track && (t.track.sid = e.trackSid), this.trackPublications.set(e.trackSid, e), e.kind) {
      case E.Kind.Audio:
        this.audioTrackPublications.set(e.trackSid, e);
        break;
      case E.Kind.Video:
        this.videoTrackPublications.set(e.trackSid, e);
        break;
    }
  }
}
function Ug(n) {
  var e, t, i;
  if (!n.participantSid && !n.participantIdentity) throw new Error("Invalid track permission, must provide at least one of participantIdentity and participantSid");
  return new od({
    participantIdentity: (e = n.participantIdentity) !== null && e !== void 0 ? e : "",
    participantSid: (t = n.participantSid) !== null && t !== void 0 ? t : "",
    allTracks: (i = n.allowAll) !== null && i !== void 0 ? i : !1,
    trackSids: n.allowedTrackSids || []
  });
}
class Fg extends ql {
  constructor(e, t, i, s, r, a, o, c) {
    super(e, t, void 0, void 0, void 0, {
      loggerName: s.loggerName,
      loggerContextCb: () => this.engine.logContext
    }), this.pendingPublishing = new Set(), this.pendingPublishPromises = new Map(), this.participantTrackPermissions = [], this.allParticipantsAllowedToSubscribe = !0, this.encryptionType = z.NONE, this.e2eeStateMutex = new ye(), this.enabledPublishVideoCodecs = [], this.handleReconnecting = () => {
      this.reconnectFuture || (this.reconnectFuture = new we());
    }, this.handleReconnected = () => {
      var d, l;
      (l = (d = this.reconnectFuture) === null || d === void 0 ? void 0 : d.resolve) === null || l === void 0 || l.call(d), this.reconnectFuture = void 0, this.updateTrackSubscriptionPermissions();
    }, this.handleClosing = () => {
      var d, l, u, h, m, g;
      this.reconnectFuture && (this.reconnectFuture.promise.catch(f => this.log.warn(f.message)), (l = (d = this.reconnectFuture) === null || d === void 0 ? void 0 : d.reject) === null || l === void 0 || l.call(d, new Error("Got disconnected during reconnection attempt")), this.reconnectFuture = void 0), this.signalConnectedFuture && ((h = (u = this.signalConnectedFuture).reject) === null || h === void 0 || h.call(u, new Error("Got disconnected without signal connected")), this.signalConnectedFuture = void 0), (g = (m = this.activeAgentFuture) === null || m === void 0 ? void 0 : m.reject) === null || g === void 0 || g.call(m, new Error("Got disconnected without active agent present")), this.activeAgentFuture = void 0, this.firstActiveAgent = void 0;
    }, this.handleSignalConnected = d => {
      var l, u;
      d.participant && this.updateInfo(d.participant), this.signalConnectedFuture || (this.signalConnectedFuture = new we()), (u = (l = this.signalConnectedFuture).resolve) === null || u === void 0 || u.call(l);
    }, this.handleSignalRequestResponse = d => {
      const l = d.requestId,
        u = d.reason,
        h = d.message,
        m = this.pendingSignalRequests.get(l);
      switch (m && (u !== Ut.OK && m.reject(new oo(h, u)), this.pendingSignalRequests.delete(l)), d.request.case) {
        case "publishDataTrack":
          {
            let g;
            switch (d.reason) {
              case Ut.NOT_ALLOWED:
                g = ge.notAllowed(d.message);
                break;
              case Ut.DUPLICATE_NAME:
                g = ge.duplicateName(d.message);
                break;
              case Ut.INVALID_NAME:
                g = ge.invalidName(d.message);
                break;
              case Ut.LIMIT_EXCEEDED:
                g = ge.limitReached(d.message);
                break;
              default:
                g = ge.unknown(d.reason, d.message);
                break;
            }
            this.roomOutgoingDataTrackManager.receivedSfuPublishResponse(d.request.value.pubHandle, {
              type: "error",
              error: g
            });
            break;
          }
      }
    }, this.updateTrackSubscriptionPermissions = () => {
      this.log.debug("updating track subscription permissions", {
        allParticipantsAllowed: this.allParticipantsAllowedToSubscribe,
        participantTrackPermissions: this.participantTrackPermissions
      }), this.engine.client.sendUpdateSubscriptionPermissions(this.allParticipantsAllowedToSubscribe, this.participantTrackPermissions.map(d => Ug(d)));
    }, this.onTrackUnmuted = d => {
      this.onTrackMuted(d, d.isUpstreamPaused);
    }, this.onTrackMuted = (d, l) => {
      if (l === void 0 && (l = !0), !d.sid) {
        this.log.error("could not update mute status for unpublished track", V(d));
        return;
      }
      this.engine.updateMuteStatus(d.sid, l);
    }, this.onTrackUpstreamPaused = d => {
      this.log.debug("upstream paused", V(d)), this.onTrackMuted(d, !0);
    }, this.onTrackUpstreamResumed = d => {
      this.log.debug("upstream resumed", V(d)), this.onTrackMuted(d, d.isMuted);
    }, this.onTrackFeatureUpdate = d => {
      const l = this.audioTrackPublications.get(d.sid);
      if (!l) {
        this.log.warn("Could not update local audio track settings, missing publication for track ".concat(d.sid));
        return;
      }
      this.engine.client.sendUpdateLocalAudioTrack(l.trackSid, l.getTrackFeatures());
    }, this.onTrackCpuConstrained = (d, l) => {
      this.log.debug("track cpu constrained", V(l)), this.emit(A.LocalTrackCpuConstrained, d, l);
    }, this.handleSubscribedQualityUpdate = d => p(this, void 0, void 0, function* () {
      var l, u, h, m, g;
      if (!(!((g = this.roomOptions) === null || g === void 0) && g.dynacast)) return;
      const f = this.videoTrackPublications.get(d.trackSid);
      if (!f) {
        this.log.warn("received subscribed quality update for unknown track", {
          trackSid: d.trackSid
        });
        return;
      }
      if (!f.videoTrack) return;
      const y = yield f.videoTrack.setPublishingCodecs(d.subscribedCodecs);
      try {
        for (var k = !0, S = Ve(y), R; R = yield S.next(), l = R.done, !l; k = !0) {
          m = R.value, k = !1;
          const b = m;
          Dm(b) && (this.log.debug("publish ".concat(b, " for ").concat(f.videoTrack.sid), V(f)), yield this.publishAdditionalCodecForTrack(f.videoTrack, b, f.options));
        }
      } catch (b) {
        u = {
          error: b
        };
      } finally {
        try {
          !k && !l && (h = S.return) && (yield h.call(S));
        } finally {
          if (u) throw u.error;
        }
      }
    }), this.handleLocalTrackUnpublished = d => {
      const l = this.trackPublications.get(d.trackSid);
      if (!l) {
        this.log.warn("received unpublished event for unknown track", {
          trackSid: d.trackSid
        });
        return;
      }
      this.unpublishTrack(l.track);
    }, this.handleTrackEnded = d => p(this, void 0, void 0, function* () {
      if (d.source === E.Source.ScreenShare || d.source === E.Source.ScreenShareAudio) this.log.debug("unpublishing local track due to TrackEnded", V(d)), this.unpublishTrack(d);else if (d.isUserProvided) yield d.mute();else if (nt(d) || Ge(d)) try {
        if (Oe()) try {
          const l = yield navigator?.permissions.query({
            name: d.source === E.Source.Camera ? "camera" : "microphone"
          });
          if (l && l.state === "denied") throw this.log.warn("user has revoked access to ".concat(d.source), V(d)), l.onchange = () => {
            l.state !== "denied" && (d.isMuted || d.restartTrack(), l.onchange = null);
          }, new Error("GetUserMedia Permission denied");
        } catch {}
        d.isMuted || (this.log.debug("track ended, attempting to use a different device", V(d)), nt(d) ? yield this.restartOnDefaultAudioDevice(d) : yield d.restartTrack());
      } catch {
        this.log.warn("could not restart track, muting instead", V(d)), yield d.mute();
      }
    }), this.audioTrackPublications = new Map(), this.videoTrackPublications = new Map(), this.trackPublications = new Map(), this.engine = i, this.roomOptions = s, this.setupEngine(i), this.activeDeviceMap = new Map([["audioinput", "default"], ["videoinput", "default"], ["audiooutput", "default"]]), this.pendingSignalRequests = new Map(), this.roomOutgoingDataStreamManager = r, this.roomOutgoingDataTrackManager = a, this.rpcClientManager = o, this.rpcServerManager = c;
  }
  get lastCameraError() {
    return this.cameraError;
  }
  get lastMicrophoneError() {
    return this.microphoneError;
  }
  get isE2EEEnabled() {
    return this.encryptionType !== z.NONE;
  }
  getTrackPublication(e) {
    const t = super.getTrackPublication(e);
    if (t) return t;
  }
  getTrackPublicationByName(e) {
    const t = super.getTrackPublicationByName(e);
    if (t) return t;
  }
  setupEngine(e) {
    var t;
    this.engine = e, this.engine.on(P.RemoteMute, (i, s) => {
      const r = this.trackPublications.get(i);
      !r || !r.track || (s ? r.mute() : r.unmute());
    }), !((t = this.signalConnectedFuture) === null || t === void 0) && t.isResolved && (this.signalConnectedFuture = void 0), this.engine.on(P.Connected, this.handleReconnected).on(P.SignalConnected, this.handleSignalConnected).on(P.SignalRestarted, this.handleReconnected).on(P.SignalResumed, this.handleReconnected).on(P.Restarting, this.handleReconnecting).on(P.Resuming, this.handleReconnecting).on(P.LocalTrackUnpublished, this.handleLocalTrackUnpublished).on(P.SubscribedQualityUpdate, this.handleSubscribedQualityUpdate).on(P.Closing, this.handleClosing).on(P.SignalRequestResponse, this.handleSignalRequestResponse);
  }
  setMetadata(e) {
    return p(this, void 0, void 0, function* () {
      yield this.requestMetadataUpdate({
        metadata: e
      });
    });
  }
  setName(e) {
    return p(this, void 0, void 0, function* () {
      yield this.requestMetadataUpdate({
        name: e
      });
    });
  }
  setAttributes(e) {
    return p(this, void 0, void 0, function* () {
      yield this.requestMetadataUpdate({
        attributes: e
      });
    });
  }
  requestMetadataUpdate(e) {
    return p(this, arguments, void 0, function (t) {
      var i = this;
      let s = t.metadata,
        r = t.name,
        a = t.attributes;
      return function* () {
        return new Ae((o, c) => p(i, void 0, void 0, function* () {
          var d, l;
          try {
            let u = !1;
            const h = yield this.engine.client.sendUpdateLocalMetadata((d = s ?? this.metadata) !== null && d !== void 0 ? d : "", (l = r ?? this.name) !== null && l !== void 0 ? l : "", a),
              m = performance.now();
            for (this.pendingSignalRequests.set(h, {
              resolve: o,
              reject: g => {
                c(g), u = !0;
              },
              values: {
                name: r,
                metadata: s,
                attributes: a
              }
            }); performance.now() - m < 5e3 && !u;) {
              if ((!r || this.name === r) && (!s || this.metadata === s) && (!a || Object.entries(a).every(g => {
                let f = x(g, 2),
                  y = f[0],
                  k = f[1];
                return this.attributes[y] === k || k === "" && !this.attributes[y];
              }))) {
                this.pendingSignalRequests.delete(h), o();
                return;
              }
              yield Ce(50);
            }
            c(new oo("Request to update local metadata timed out", "TimeoutError"));
          } catch (u) {
            u instanceof Error ? c(u) : c(new Error(String(u)));
          }
        }));
      }();
    });
  }
  setCameraEnabled(e, t, i) {
    return this.setTrackEnabled(E.Source.Camera, e, t, i);
  }
  setMicrophoneEnabled(e, t, i) {
    return this.setTrackEnabled(E.Source.Microphone, e, t, i);
  }
  setScreenShareEnabled(e, t, i) {
    return this.setTrackEnabled(E.Source.ScreenShare, e, t, i);
  }
  setE2EEEnabled(e) {
    return p(this, void 0, void 0, function* () {
      const t = yield this.e2eeStateMutex.lock();
      try {
        if (this.encryptionType = e ? z.GCM : z.NONE, yield Promise.all(this.pendingPublishPromises.values()), this.trackPublications.size === 0 || Array.from(this.trackPublications.values()).every(i => i.isEncrypted === e)) return;
        yield this.republishAllTracks(void 0, !1);
      } finally {
        t();
      }
    });
  }
  setTrackEnabled(e, t, i, s) {
    return p(this, void 0, void 0, function* () {
      var r, a;
      this.log.debug("setTrackEnabled", {
        source: e,
        enabled: t
      }), this.republishPromise && (yield this.republishPromise);
      let o = this.getTrackPublication(e);
      if (t) {
        if (o) yield o.unmute();else {
          let u;
          if (this.pendingPublishing.has(e)) {
            const h = yield this.waitForPendingPublicationOfSource(e);
            return h || this.log.info("waiting for pending publication promise timed out", {
              source: e
            }), yield h?.unmute(), h;
          }
          this.pendingPublishing.add(e);
          try {
            switch (e) {
              case E.Source.Camera:
                u = yield this.createTracks({
                  video: (r = i) !== null && r !== void 0 ? r : !0
                });
                break;
              case E.Source.Microphone:
                u = yield this.createTracks({
                  audio: (a = i) !== null && a !== void 0 ? a : !0
                });
                break;
              case E.Source.ScreenShare:
                u = yield this.createScreenTracks(Object.assign({}, i));
                break;
              default:
                throw new ft(e);
            }
          } catch (h) {
            throw u?.forEach(m => {
              m.stop();
            }), h instanceof Error && this.emit(A.MediaDevicesError, h, Tr(e)), this.pendingPublishing.delete(e), h;
          }
          for (const h of u) {
            const m = Object.assign(Object.assign({}, this.roomOptions.publishDefaults), i);
            e === E.Source.Microphone && at(h) && m.preConnectBuffer && (this.log.info("starting preconnect buffer for microphone"), h.startPreConnectBuffer());
          }
          try {
            const h = [];
            for (const g of u) this.log.info("publishing track", V(g)), h.push(this.publishTrack(g, s));
            const m = yield Promise.all(h);
            var c = x(m, 1);
            o = c[0];
          } catch (h) {
            throw u?.forEach(m => {
              m.stop();
            }), h;
          } finally {
            this.pendingPublishing.delete(e);
          }
        }
      } else if (!o?.track && this.pendingPublishing.has(e) && (o = yield this.waitForPendingPublicationOfSource(e), o || this.log.info("waiting for pending publication promise timed out", {
        source: e
      })), o && o.track) if (e === E.Source.ScreenShare) {
        const u = [this.unpublishTrack(o.track)],
          h = this.getTrackPublication(E.Source.ScreenShareAudio);
        h && h.track && u.push(this.unpublishTrack(h.track));
        var d = yield Promise.all(u),
          l = x(d, 1);
        o = l[0];
      } else yield o.mute();
      return o;
    });
  }
  enableCameraAndMicrophone() {
    return p(this, void 0, void 0, function* () {
      if (!(this.pendingPublishing.has(E.Source.Camera) || this.pendingPublishing.has(E.Source.Microphone))) {
        this.pendingPublishing.add(E.Source.Camera), this.pendingPublishing.add(E.Source.Microphone);
        try {
          const e = yield this.createTracks({
            audio: !0,
            video: !0
          });
          yield Promise.all(e.map(t => this.publishTrack(t)));
        } finally {
          this.pendingPublishing.delete(E.Source.Camera), this.pendingPublishing.delete(E.Source.Microphone);
        }
      }
    });
  }
  createTracks(e) {
    return p(this, void 0, void 0, function* () {
      var t, i;
      e ?? (e = {});
      const s = Yd(e, (t = this.roomOptions) === null || t === void 0 ? void 0 : t.audioCaptureDefaults, (i = this.roomOptions) === null || i === void 0 ? void 0 : i.videoCaptureDefaults);
      try {
        const r = yield un(s, {
          loggerName: this.roomOptions.loggerName,
          loggerContextCb: () => this.logContext
        });
        return yield Promise.all(r.map(o => p(this, void 0, void 0, function* () {
          return at(o) && (this.microphoneError = void 0, yield o.setAudioContext(this.audioContext), o.source = E.Source.Microphone, this.emit(A.AudioStreamAcquired)), yt(o) && (this.cameraError = void 0, o.source = E.Source.Camera), o;
        })));
      } catch (r) {
        throw r instanceof Error && (e.audio && (this.microphoneError = r), e.video && (this.cameraError = r)), r;
      }
    });
  }
  createScreenTracks(e) {
    return p(this, void 0, void 0, function* () {
      if (e === void 0 && (e = {}), navigator.mediaDevices.getDisplayMedia === void 0) throw new ca("getDisplayMedia not supported");
      e.resolution === void 0 && !Xm() && (e.resolution = nn.h1080fps30.resolution);
      const t = Nm(e),
        i = yield navigator.mediaDevices.getDisplayMedia(t),
        s = i.getVideoTracks();
      if (s.length === 0) throw new ft("no video track found");
      const r = new Gt(s[0], void 0, !1, {
        loggerName: this.roomOptions.loggerName,
        loggerContextCb: () => this.logContext
      });
      r.source = E.Source.ScreenShare, e.contentHint && (r.mediaStreamTrack.contentHint = e.contentHint);
      const a = [r];
      if (i.getAudioTracks().length > 0) {
        this.emit(A.AudioStreamAcquired);
        const o = new Ri(i.getAudioTracks()[0], void 0, !1, this.audioContext, {
          loggerName: this.roomOptions.loggerName,
          loggerContextCb: () => this.logContext
        });
        o.source = E.Source.ScreenShareAudio, a.push(o);
      }
      return a;
    });
  }
  publishTrack(e, t) {
    return p(this, void 0, void 0, function* () {
      return this.publishOrRepublishTrack(e, t);
    });
  }
  waitForNextEngineRestart() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 15e3;
    return new Promise((t, i) => {
      const s = () => {
          clearTimeout(o), this.engine.off(P.Restarted, r), this.engine.off(P.Closing, a);
        },
        r = () => {
          s(), t();
        },
        a = () => {
          s(), i(new Error("engine closed before restart completed"));
        },
        o = setTimeout(() => {
          s(), i(new Error("timed out waiting for engine restart"));
        }, e);
      this.engine.once(P.Restarted, r), this.engine.once(P.Closing, a);
    });
  }
  publishOrRepublishTrack(e, t) {
    return p(this, arguments, void 0, function (i, s) {
      var r = this;
      let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
        o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      return function* () {
        var c, d, l, u;
        nt(i) && (yield i.setAudioContext(r.audioContext)), yield (c = r.reconnectFuture) === null || c === void 0 ? void 0 : c.promise, r.republishPromise && !a && (yield r.republishPromise), vi(i) && r.pendingPublishPromises.has(i) && (yield r.pendingPublishPromises.get(i));
        let h;
        if (i instanceof MediaStreamTrack) h = i.getConstraints();else {
          h = i.constraints;
          let S;
          switch (i.source) {
            case E.Source.Microphone:
              S = "audioinput";
              break;
            case E.Source.Camera:
              S = "videoinput";
          }
          S && r.activeDeviceMap.has(S) && (h = Object.assign(Object.assign({}, h), {
            deviceId: r.activeDeviceMap.get(S)
          }));
        }
        if (i instanceof MediaStreamTrack) switch (i.kind) {
          case "audio":
            i = new Ri(i, h, !0, r.audioContext, {
              loggerName: r.roomOptions.loggerName,
              loggerContextCb: () => r.logContext
            });
            break;
          case "video":
            i = new Gt(i, h, !0, {
              loggerName: r.roomOptions.loggerName,
              loggerContextCb: () => r.logContext
            });
            break;
          default:
            throw new ft("unsupported MediaStreamTrack kind ".concat(i.kind));
        } else i.updateLoggerOptions({
          loggerName: r.roomOptions.loggerName,
          loggerContextCb: () => r.logContext
        });
        let m;
        if (r.trackPublications.forEach(S => {
          S.track && S.track === i && (m = S);
        }), m) return r.log.warn("track has already been published, skipping", V(m)), m;
        const g = Object.assign(Object.assign({}, r.roomOptions.publishDefaults), s),
          f = "channelCount" in i.mediaStreamTrack.getSettings() && i.mediaStreamTrack.getSettings().channelCount === 2 || i.mediaStreamTrack.getConstraints().channelCount === 2,
          y = (d = g.forceStereo) !== null && d !== void 0 ? d : f;
        y && (g.dtx === void 0 && r.log.debug("Opus DTX will be disabled for stereo tracks by default. Enable them explicitly to make it work.", V(i)), g.red === void 0 && r.log.debug("Opus RED will be disabled for stereo tracks by default. Enable them explicitly to make it work."), (l = g.dtx) !== null && l !== void 0 || (g.dtx = !1), (u = g.red) !== null && u !== void 0 || (g.red = !1)), !ep() && r.roomOptions.e2ee && (r.log.info("End-to-end encryption is set up, simulcast publishing will be disabled on Safari versions and iOS browsers running iOS < v17.2"), g.simulcast = !1), g.source && (i.source = g.source);
        const k = new Promise((S, R) => p(r, void 0, void 0, function* () {
          try {
            if (this.engine.client.currentState !== Re.CONNECTED) {
              this.log.debug("deferring track publication until signal is connected", {
                track: V(i)
              });
              let b = !1;
              const T = setTimeout(() => {
                b = !0, i.stop(), R(new ao("publishing rejected as engine not connected within timeout", 408));
              }, 15e3);
              if (yield this.waitUntilEngineConnected(), clearTimeout(T), b) return;
              const C = yield this.publish(i, g, y);
              S(C);
            } else try {
              const b = yield this.publish(i, g, y);
              S(b);
            } catch (b) {
              R(b);
            }
          } catch (b) {
            R(b);
          }
        }));
        r.pendingPublishPromises.set(i, k);
        try {
          return yield k;
        } catch (S) {
          if (!o && S instanceof Rt) return r.log.warn("negotiation due to track publish failed, retrying after reconnect", {
            error: S
          }), r.pendingPublishPromises.delete(i), yield r.waitForNextEngineRestart(), yield r.publishOrRepublishTrack(i, s, a, !0);
          throw S;
        } finally {
          r.pendingPublishPromises.delete(i);
        }
      }();
    });
  }
  waitUntilEngineConnected() {
    return this.signalConnectedFuture || (this.signalConnectedFuture = new we()), this.signalConnectedFuture.promise;
  }
  hasPermissionsToPublish(e) {
    if (!this.permissions) return this.log.warn("no permissions present for publishing track", V(e)), !1;
    const t = this.permissions,
      i = t.canPublish,
      s = t.canPublishSources;
    return i && (s.length === 0 || s.map(r => Bm(r)).includes(e.source)) ? !0 : (this.log.warn("insufficient permissions to publish", V(e)), !1);
  }
  publish(e, t, i) {
    return p(this, void 0, void 0, function* () {
      var s, r, a, o, c, d, l, u, h, m, g;
      if (!this.hasPermissionsToPublish(e)) throw new ao("failed to publish track, insufficient permissions", 403);
      Array.from(this.trackPublications.values()).find(L => vi(e) && L.source === e.source) && e.source !== E.Source.Unknown && this.log.info("publishing a second track with the same source: ".concat(e.source), V(e)), t.stopMicTrackOnMute && at(e) && (e.stopOnMute = !0), e.source === E.Source.ScreenShare && Yt() && (t.simulcast = !1), t.videoCodec === "av1" && !Hm() && (t.videoCodec = void 0), t.videoCodec === "vp9" && !Km() && (t.videoCodec = void 0), t.videoCodec === void 0 && (t.videoCodec = Or), this.enabledPublishVideoCodecs.length > 0 && (this.enabledPublishVideoCodecs.some(L => t.videoCodec === Wi(L.mime)) || (t.videoCodec = Wi(this.enabledPublishVideoCodecs[0].mime)));
      const y = t.videoCodec;
      e.on(I.Muted, this.onTrackMuted), e.on(I.Unmuted, this.onTrackUnmuted), e.on(I.Ended, this.handleTrackEnded), e.on(I.UpstreamPaused, this.onTrackUpstreamPaused), e.on(I.UpstreamResumed, this.onTrackUpstreamResumed), e.on(I.AudioTrackFeatureUpdate, this.onTrackFeatureUpdate);
      const k = [],
        S = !(!((s = t.dtx) !== null && s !== void 0) || s),
        R = e.getSourceTrackSettings();
      R.autoGainControl && k.push(Te.TF_AUTO_GAIN_CONTROL), R.echoCancellation && k.push(Te.TF_ECHO_CANCELLATION), R.noiseSuppression && k.push(Te.TF_NOISE_SUPPRESSION), R.channelCount && R.channelCount > 1 && k.push(Te.TF_STEREO), S && k.push(Te.TF_NO_DTX), nt(e) && e.hasPreConnectBuffer && k.push(Te.TF_PRECONNECT_BUFFER);
      const b = this.normalizeRequestedFrameMetadataOptions(e, t),
        T = new en({
          cid: e.mediaStreamTrack.id,
          name: t.name,
          type: E.kindToProto(e.kind),
          muted: e.isMuted,
          source: E.sourceToProto(e.source),
          disableDtx: S,
          encryption: this.encryptionType,
          stereo: i,
          disableRed: this.isE2EEEnabled || !(!((r = t.red) !== null && r !== void 0) || r),
          stream: t?.stream,
          backupCodecPolicy: t?.backupCodecPolicy,
          audioFeatures: k,
          packetTrailerFeatures: b
        });
      let C;
      if (e.kind === E.Kind.Video) {
        let L;
        try {
          L = yield e.waitForDimensions();
        } catch {
          const j = (o = (a = this.roomOptions.videoCaptureDefaults) === null || a === void 0 ? void 0 : a.resolution) !== null && o !== void 0 ? o : Qt.h720.resolution;
          L = {
            width: j.width,
            height: j.height
          }, this.log.error("could not determine track dimensions, using defaults", Object.assign(Object.assign({}, V(e)), {
            dims: L
          }));
        }
        if (T.width = L.width, T.height = L.height, Ge(e)) {
          fi(y, t) && (tl() || !Jm((c = this.engine) === null || c === void 0 ? void 0 : c.serverVersion)) && (t.simulcast = !1, this.log.info("SVC simulcast is not supported, disabling simulcast.", V(e)));
          const q = fi(y, t);
          Dt(y) && !q && (e.source === E.Source.ScreenShare && (t.scalabilityMode = "L1T3", "contentHint" in e.mediaStreamTrack && (e.mediaStreamTrack.contentHint = "motion", this.log.debug("forcing contentHint to motion for screenshare with SVC codecs", V(e)))), t.scalabilityMode = (d = t.scalabilityMode) !== null && d !== void 0 ? d : "L3T3_KEY");
          const j = new rr({
            codec: y,
            cid: e.mediaStreamTrack.id
          });
          q && (j.videoLayerMode = Gr.ONE_SPATIAL_LAYER_PER_STREAM), T.simulcastCodecs = [j], t.backupCodec === !0 && (t.backupCodec = {
            codec: Or
          }), t.backupCodec && y !== t.backupCodec.codec && T.encryption === z.NONE && (this.roomOptions.dynacast || (this.roomOptions.dynacast = !0), T.simulcastCodecs.push(new rr({
            codec: t.backupCodec.codec,
            cid: ""
          })));
        }
        C = zn(e.source === E.Source.ScreenShare, T.width, T.height, t), T.layers = Wo(T.width, T.height, C, Dt(t.videoCodec) && !fi(t.videoCodec, t));
      } else e.kind === E.Kind.Audio && (C = [{
        maxBitrate: (l = t.audioPreset) === null || l === void 0 ? void 0 : l.maxBitrate,
        priority: (h = (u = t.audioPreset) === null || u === void 0 ? void 0 : u.priority) !== null && h !== void 0 ? h : "high",
        networkPriority: (g = (m = t.audioPreset) === null || m === void 0 ? void 0 : m.priority) !== null && g !== void 0 ? g : "high"
      }]);
      if (!this.engine || this.engine.isClosed) throw new Z("cannot publish track when not connected");
      const M = () => p(this, void 0, void 0, function* () {
        var L, q;
        if (!this.engine.pcManager) throw new Z("pcManager is not ready");
        if (e.sender = yield this.engine.createSender(e, t, C), Ge(e) && (e.publishOptions = t), this.emit(A.LocalSenderCreated, e.sender, e), Ge(e) && ((L = t.degradationPreference) !== null && L !== void 0 || (t.degradationPreference = eg(e)), e.setDegradationPreference(t.degradationPreference)), C) {
          if (Yt() && e.kind === E.Kind.Audio) {
            let j;
            for (const pe of this.engine.pcManager.publisher.getTransceivers()) if (pe.sender === e.sender) {
              j = pe;
              break;
            }
            j && this.engine.pcManager.publisher.setTrackCodecBitrate({
              transceiver: j,
              codec: "opus",
              maxbr: !((q = C[0]) === null || q === void 0) && q.maxBitrate ? C[0].maxBitrate / 1e3 : 0
            });
          } else if (e.codec && ol(e.codec)) {
            const j = $f(e.codec, t, C);
            j > 0 && this.engine.pcManager.publisher.setTrackCodecBitrate({
              cid: T.cid,
              codec: e.codec,
              maxbr: j / 1e3,
              isScreenShare: e.source === E.Source.ScreenShare
            });
          }
        }
        yield this.engine.negotiate();
      });
      let D;
      const B = new Promise((L, q) => p(this, void 0, void 0, function* () {
        var j;
        try {
          D = yield this.engine.addTrack(T), L(D);
        } catch (pe) {
          if (e.sender && !((j = this.engine.pcManager) === null || j === void 0) && j.publisher) {
            try {
              this.engine.pcManager.publisher.removeTrack(e.sender);
            } catch (le) {
              this.log.error(le);
            }
            yield this.engine.negotiate().catch(le => {
              this.log.error("failed to negotiate after removing track due to failed add track request", Object.assign(Object.assign({}, V(e)), {
                error: le
              }));
            });
          }
          q(pe);
        }
      }));
      if (this.enabledPublishVideoCodecs.length > 0 && b.length === 0) D = (yield Promise.all([B, M()]))[0];else {
        D = yield B;
        let L;
        if (D.codecs.forEach(q => {
          L === void 0 && (L = q.mimeType);
        }), L && e.kind === E.Kind.Video) {
          const q = Wi(L);
          q !== y && (this.log.debug("falling back to server selected codec", Object.assign(Object.assign({}, V(e)), {
            codec: q
          })), t.videoCodec = q, C = zn(e.source === E.Source.ScreenShare, T.width, T.height, t));
        }
        yield M();
      }
      const F = new Nr(e.kind, D, e, {
        loggerName: this.roomOptions.loggerName,
        loggerContextCb: () => this.logContext
      });
      if (F.on(I.CpuConstrained, L => this.onTrackCpuConstrained(L, F)), F.options = t, e.sid = D.sid, Ge(e) && (e.publishOptions = t, T.width && T.height && (e.lastEncodedDimensions = {
        width: T.width,
        height: T.height
      })), this.log.debug("publishing ".concat(e.kind, " with encodings"), {
        encodings: C,
        trackInfo: D
      }), Ge(e) ? e.startMonitor(this.engine.client) : nt(e) && e.startMonitor(), this.addTrackPublication(F), this.emit(A.LocalTrackPublished, F), nt(e) && D.audioFeatures.includes(Te.TF_PRECONNECT_BUFFER)) {
        const L = e.getPreConnectBuffer(),
          q = e.getPreConnectBufferMimeType();
        this.on(A.LocalTrackSubscribed, j => {
          if (j.trackSid === D.sid) {
            if (!e.hasPreConnectBuffer) {
              this.log.warn("subscribe event came to late, buffer already closed");
              return;
            }
            this.log.debug("finished recording preconnect buffer", V(e)), e.stopPreConnectBuffer();
          }
        }), L && new Promise((pe, le) => p(this, void 0, void 0, function* () {
          var ct, fe, Nt, Oi, ii, kt;
          try {
            this.log.debug("waiting for agent", V(e));
            const vs = setTimeout(() => {
                le(new Error("agent not active within 10 seconds"));
              }, 1e4),
              zl = yield this.waitUntilActiveAgentPresent();
            clearTimeout(vs), this.log.debug("sending preconnect buffer", V(e));
            const Ma = yield this.streamBytes({
              name: "preconnect-buffer",
              mimeType: q,
              topic: "lk.agent.pre-connect-audio-buffer",
              destinationIdentities: [zl.identity],
              attributes: {
                trackId: F.trackSid,
                sampleRate: String((ii = R.sampleRate) !== null && ii !== void 0 ? ii : "48000"),
                channels: String((kt = R.channelCount) !== null && kt !== void 0 ? kt : "1")
              }
            });
            try {
              for (var hn = !0, Di = Ve(L), gs; gs = yield Di.next(), ct = gs.done, !ct; hn = !0) {
                Oi = gs.value, hn = !1;
                const bs = Oi;
                yield Ma.write(bs);
              }
            } catch (bs) {
              fe = {
                error: bs
              };
            } finally {
              try {
                !hn && !ct && (Nt = Di.return) && (yield Nt.call(Di));
              } finally {
                if (fe) throw fe.error;
              }
            }
            yield Ma.close(), pe();
          } catch (vs) {
            le(vs);
          }
        })).then(() => {
          this.log.debug("preconnect buffer sent successfully", V(e));
        }).catch(pe => {
          this.log.error("error sending preconnect buffer", Object.assign(Object.assign({}, V(e)), {
            error: pe
          }));
        });
      }
      return F;
    });
  }
  canPublishFrameMetadata() {
    var e;
    return !!(this.roomOptions.e2ee || this.roomOptions.encryption || on((e = this.roomOptions.frameMetadata) !== null && e !== void 0 ? e : this.roomOptions.packetTrailer));
  }
  normalizeRequestedFrameMetadataOptions(e, t) {
    var i;
    const s = (i = t.frameMetadata) !== null && i !== void 0 ? i : t.packetTrailer;
    if (e.kind !== E.Kind.Video || !Kn(s)) return t.frameMetadata = void 0, t.packetTrailer = void 0, [];
    if (!this.canPublishFrameMetadata()) return this.log.warn("frame metadata transform not supported; not advertising features", Object.assign(Object.assign({}, this.logContext), V(e))), t.frameMetadata = void 0, t.packetTrailer = void 0, [];
    const r = Ip(s),
      a = Mp(r);
    return t.frameMetadata = a, t.packetTrailer = a, r;
  }
  get isLocal() {
    return !0;
  }
  publishAdditionalCodecForTrack(e, t, i) {
    return p(this, void 0, void 0, function* () {
      var s;
      if (this.encryptionType !== z.NONE) return;
      let r;
      if (this.trackPublications.forEach(R => {
        R.track && R.track === e && (r = R);
      }), !r) throw new ft("track is not published");
      if (!Ge(e)) throw new ft("track is not a video track");
      const a = Object.assign(Object.assign({}, (s = this.roomOptions) === null || s === void 0 ? void 0 : s.publishDefaults), i),
        o = Sl(e, t, a);
      if (!o) {
        this.log.info("backup codec has been disabled, ignoring request to add additional codec for track", V(e));
        return;
      }
      const c = e.addSimulcastTrack(t, o);
      if (!c) return;
      const d = this.normalizeRequestedFrameMetadataOptions(e, a),
        l = e.mediaStreamTrack.getSettings(),
        u = l.width,
        h = l.height,
        m = u && h ? {
          width: u,
          height: h
        } : void 0;
      m || this.log.warn("could not determine track dimensions, publishing backup codec without layers", V(e));
      const g = m ? Wo(m.width, m.height, o) : [],
        f = new en({
          cid: c.mediaStreamTrack.id,
          type: E.kindToProto(e.kind),
          muted: e.isMuted,
          source: E.sourceToProto(e.source),
          sid: e.sid,
          width: m?.width,
          height: m?.height,
          packetTrailerFeatures: d,
          layers: g,
          simulcastCodecs: [{
            codec: a.videoCodec,
            cid: c.mediaStreamTrack.id,
            layers: g
          }]
        });
      if (!this.engine || this.engine.isClosed) throw new Z("cannot publish track when not connected");
      const y = () => p(this, void 0, void 0, function* () {
          yield this.engine.createSimulcastSender(e, c, a, o), yield this.engine.negotiate();
        }),
        S = (yield Promise.all([this.engine.addTrack(f), y()]))[0];
      this.log.debug("published ".concat(t, " for track ").concat(e.sid), {
        encodings: o,
        trackInfo: S
      });
    });
  }
  unpublishTrack(e, t) {
    return p(this, void 0, void 0, function* () {
      var i, s;
      if (vi(e)) {
        const l = this.pendingPublishPromises.get(e);
        l && (this.log.debug("awaiting publish promise before attempting to unpublish", V(e)), yield l);
      }
      const r = this.getPublicationForTrack(e),
        a = r ? V(r) : void 0;
      if (this.log.info("unpublishing track", a), !r || !r.track) {
        this.log.warn("track was not unpublished because no publication was found", a);
        return;
      }
      e = r.track, e.off(I.Muted, this.onTrackMuted), e.off(I.Unmuted, this.onTrackUnmuted), e.off(I.Ended, this.handleTrackEnded), e.off(I.UpstreamPaused, this.onTrackUpstreamPaused), e.off(I.UpstreamResumed, this.onTrackUpstreamResumed), e.off(I.AudioTrackFeatureUpdate, this.onTrackFeatureUpdate), t === void 0 && (t = (s = (i = this.roomOptions) === null || i === void 0 ? void 0 : i.stopLocalTrackOnUnpublish) !== null && s !== void 0 ? s : !0), t ? e.stop() : e.stopMonitor();
      let o = !1;
      const c = e.sender;
      if (e.sender = void 0, this.engine.pcManager && this.engine.pcManager.currentState < ee.FAILED && c) try {
        for (const l of this.engine.pcManager.publisher.getTransceivers()) l.sender === c && (l.direction = "inactive", o = !0);
        try {
          o = this.engine.removeTrack(c);
        } catch (l) {
          this.log.warn(l), o = !0;
        }
        if (Ge(e)) {
          for (const l of e.simulcastCodecs) {
            var d = x(l, 2);
            const u = d[1];
            if (u.sender) {
              try {
                o = this.engine.removeTrack(u.sender);
              } catch (h) {
                this.log.warn(h), o = !0;
              }
              u.sender = void 0;
            }
          }
          e.simulcastCodecs.clear();
        }
      } catch (l) {
        this.log.warn("failed to unpublish track", Object.assign(Object.assign({}, a), {
          error: l
        }));
      }
      switch (this.trackPublications.delete(r.trackSid), r.kind) {
        case E.Kind.Audio:
          this.audioTrackPublications.delete(r.trackSid);
          break;
        case E.Kind.Video:
          this.videoTrackPublications.delete(r.trackSid);
          break;
      }
      return this.emit(A.LocalTrackUnpublished, r), r.setTrack(void 0), o && (yield this.engine.negotiate()), r;
    });
  }
  unpublishTracks(e) {
    return p(this, void 0, void 0, function* () {
      return (yield Promise.all(e.map(i => this.unpublishTrack(i)))).filter(i => !!i);
    });
  }
  republishAllTracks(e) {
    return p(this, arguments, void 0, function (t) {
      var i = this;
      let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      return function* () {
        i.republishPromise && (yield i.republishPromise), i.republishPromise = new Ae((r, a) => p(i, void 0, void 0, function* () {
          try {
            const o = [];
            this.trackPublications.forEach(c => {
              c.track && (t && (c.options = Object.assign(Object.assign({}, c.options), t)), o.push(c));
            }), yield Promise.all(o.map(c => p(this, void 0, void 0, function* () {
              const d = c.track;
              yield this.unpublishTrack(d, !1), s && !d.isMuted && d.source !== E.Source.ScreenShare && d.source !== E.Source.ScreenShareAudio && (nt(d) || Ge(d)) && !d.isUserProvided && (this.log.debug("restarting existing track", {
                track: c.trackSid
              }), yield d.restartTrack()), yield this.publishOrRepublishTrack(d, c.options, !0);
            }))), r();
          } catch (o) {
            o instanceof Error ? a(o) : a(new Error(String(o)));
          } finally {
            this.republishPromise = void 0;
          }
        })), yield i.republishPromise;
      }();
    });
  }
  publishData(e) {
    return p(this, arguments, void 0, function (t) {
      var i = this;
      let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return function* () {
        const r = s.reliable ? H.RELIABLE : H.LOSSY,
          a = s.reliable ? Pt.RELIABLE : Pt.LOSSY,
          o = s.destinationIdentities,
          c = s.topic;
        let d = new zr({
          participantIdentity: i.identity,
          payload: t,
          destinationIdentities: o,
          topic: c
        });
        const l = new Me({
          kind: a,
          value: {
            case: "user",
            value: d
          }
        });
        yield i.engine.sendDataPacket(l, r);
      }();
    });
  }
  publishDtmf(e, t) {
    return p(this, void 0, void 0, function* () {
      const i = new Me({
        kind: Pt.RELIABLE,
        value: {
          case: "sipDtmf",
          value: new Kc({
            code: e,
            digit: t
          })
        }
      });
      yield this.engine.sendDataPacket(i, H.RELIABLE);
    });
  }
  sendChatMessage(e, t) {
    return p(this, void 0, void 0, function* () {
      const i = {
          id: crypto.randomUUID(),
          message: e,
          timestamp: Date.now(),
          attachedFiles: t?.attachments
        },
        s = new Me({
          value: {
            case: "chatMessage",
            value: new Vn(Object.assign(Object.assign({}, i), {
              timestamp: ie.parse(i.timestamp)
            }))
          }
        });
      return yield this.engine.sendDataPacket(s, H.RELIABLE), this.emit(A.ChatMessage, i), i;
    });
  }
  editChatMessage(e, t) {
    return p(this, void 0, void 0, function* () {
      const i = Object.assign(Object.assign({}, t), {
          message: e,
          editTimestamp: Date.now()
        }),
        s = new Me({
          value: {
            case: "chatMessage",
            value: new Vn(Object.assign(Object.assign({}, i), {
              timestamp: ie.parse(i.timestamp),
              editTimestamp: ie.parse(i.editTimestamp)
            }))
          }
        });
      return yield this.engine.sendDataPacket(s, H.RELIABLE), this.emit(A.ChatMessage, i), i;
    });
  }
  sendText(e, t) {
    return p(this, void 0, void 0, function* () {
      return this.roomOutgoingDataStreamManager.sendText(e, t);
    });
  }
  streamText(e) {
    return p(this, void 0, void 0, function* () {
      return this.roomOutgoingDataStreamManager.streamText(e);
    });
  }
  sendFile(e, t) {
    return p(this, void 0, void 0, function* () {
      return this.roomOutgoingDataStreamManager.sendFile(e, t);
    });
  }
  sendBytes(e, t) {
    return p(this, void 0, void 0, function* () {
      return this.roomOutgoingDataStreamManager.sendBytes(e, t);
    });
  }
  streamBytes(e) {
    return p(this, void 0, void 0, function* () {
      return this.roomOutgoingDataStreamManager.streamBytes(e);
    });
  }
  performRpc(e) {
    return this.rpcClientManager.performRpc(e).then(t => {
      let i = x(t, 2);
      return i[0], i[1];
    });
  }
  registerRpcMethod(e, t) {
    this.rpcServerManager.registerRpcMethod(e, t);
  }
  unregisterRpcMethod(e) {
    this.rpcServerManager.unregisterRpcMethod(e);
  }
  setTrackSubscriptionPermissions(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    this.participantTrackPermissions = t, this.allParticipantsAllowedToSubscribe = e, this.engine.client.isDisconnected || this.updateTrackSubscriptionPermissions();
  }
  setEnabledPublishCodecs(e) {
    this.enabledPublishVideoCodecs = e.filter(t => t.mime.split("/")[0].toLowerCase() === "video");
  }
  updateInfo(e) {
    return super.updateInfo(e) ? (e.tracks.forEach(t => {
      var i, s;
      const r = this.trackPublications.get(t.sid);
      if (r) {
        const a = r.isMuted || ((s = (i = r.track) === null || i === void 0 ? void 0 : i.isUpstreamPaused) !== null && s !== void 0 ? s : !1);
        a !== t.muted && (this.log.debug("updating server mute state after reconcile", Object.assign(Object.assign({}, V(r)), {
          mutedOnServer: a
        })), this.engine.client.sendMuteTrack(t.sid, a));
      }
    }), !0) : !1;
  }
  setActiveAgent(e) {
    var t, i, s, r;
    this.firstActiveAgent = e, e && !this.firstActiveAgent && (this.firstActiveAgent = e), e ? (i = (t = this.activeAgentFuture) === null || t === void 0 ? void 0 : t.resolve) === null || i === void 0 || i.call(t, e) : (r = (s = this.activeAgentFuture) === null || s === void 0 ? void 0 : s.reject) === null || r === void 0 || r.call(s, new Error("Agent disconnected")), this.activeAgentFuture = void 0;
  }
  waitUntilActiveAgentPresent() {
    return this.firstActiveAgent ? Promise.resolve(this.firstActiveAgent) : (this.activeAgentFuture || (this.activeAgentFuture = new we()), this.activeAgentFuture.promise);
  }
  restartOnDefaultAudioDevice(e) {
    return p(this, void 0, void 0, function* () {
      var t, i;
      try {
        il() ? yield e.setDeviceId({
          exact: "default"
        }) : yield e.restartTrack();
      } catch (s) {
        if (!ap(s) || sp(s) || e.isStopped) throw s;
        this.log.debug("could not reacquire the audio device, retrying with an enumerated device", V(e));
        const r = yield be.getInstance().getDevices("audioinput", !1);
        yield e.setDeviceId((i = (t = r?.[0]) === null || t === void 0 ? void 0 : t.deviceId) !== null && i !== void 0 ? i : "default");
      }
    });
  }
  getPublicationForTrack(e) {
    let t;
    return this.trackPublications.forEach(i => {
      const s = i.track;
      s && (e instanceof MediaStreamTrack ? (nt(s) || Ge(s)) && s.mediaStreamTrack === e && (t = i) : e === s && (t = i));
    }), t;
  }
  waitForPendingPublicationOfSource(e) {
    return p(this, void 0, void 0, function* () {
      const i = Date.now();
      for (; Date.now() < i + 1e4;) {
        const s = Array.from(this.pendingPublishPromises.entries()).find(r => x(r, 1)[0].source === e);
        if (s) return s[1];
        yield Ce(20);
      }
    });
  }
  publishDataTrack(e) {
    return p(this, void 0, void 0, function* () {
      const t = new ms(e, this.roomOutgoingDataTrackManager);
      return yield t.publish(), t;
    });
  }
}
class cc extends DOMException {
  constructor(e, t) {
    super(e, "AbortError"), this.reason = t;
  }
}
class Bg extends Map {
  constructor() {
    super(...arguments), this.pending = new Map();
  }
  set(e, t) {
    var i, s;
    super.set(e, t);
    const r = (i = this.pending) === null || i === void 0 ? void 0 : i.get(e);
    if (r) {
      for (const a of r) a.isResolved || (s = a.resolve) === null || s === void 0 || s.call(a, t);
      this.pending.delete(e);
    }
    return this;
  }
  get [Symbol.toStringTag]() {
    return "DeferrableMap";
  }
  getDeferred(e, t) {
    return p(this, void 0, void 0, function* () {
      const i = this.get(e);
      if (typeof i < "u") return i;
      if (t?.aborted) throw new cc("The operation was aborted.", t.reason);
      const s = new we(void 0, () => {
          const a = this.pending.get(e);
          if (!a) return;
          const o = a.indexOf(s);
          o !== -1 && a.splice(o, 1), a.length === 0 && this.pending.delete(e);
        }),
        r = this.pending.get(e);
      if (r ? r.push(s) : this.pending.set(e, [s]), t) {
        const a = () => {
          var o;
          s.isResolved || (o = s.reject) === null || o === void 0 || o.call(s, new cc("The operation was aborted.", t.reason));
        };
        t.addEventListener("abort", a, {
          once: !0
        }), s.promise.finally(() => {
          t.removeEventListener("abort", a);
        });
      }
      return s.promise;
    });
  }
}
class qg extends ht {
  constructor(e, t, i, s) {
    super(e, t.sid, t.name, s), this.track = void 0, this.allowed = !0, this.requestedDisabled = void 0, this.visible = !0, this.handleEnded = r => {
      this.setTrack(void 0), this.emit(I.Ended, r);
    }, this.handleVisibilityChange = r => {
      this.log.debug("adaptivestream video visibility ".concat(this.trackSid, ", visible=").concat(r), this.logContext), this.visible = r, this.emitTrackUpdate();
    }, this.handleVideoDimensionsChange = r => {
      this.log.debug("adaptivestream video dimensions ".concat(r.width, "x").concat(r.height), this.logContext), this.videoDimensionsAdaptiveStream = r, this.emitTrackUpdate();
    }, this.subscribed = i, this.updateInfo(t);
  }
  setSubscribed(e) {
    const t = this.subscriptionStatus,
      i = this.permissionStatus;
    this.subscribed = e, e && (this.allowed = !0);
    const s = new rs({
      trackSids: [this.trackSid],
      subscribe: this.subscribed,
      participantTracks: [new zc({
        participantSid: "",
        trackSids: [this.trackSid]
      })]
    });
    this.emit(I.UpdateSubscription, s), this.emitSubscriptionUpdateIfChanged(t), this.emitPermissionUpdateIfChanged(i);
  }
  get subscriptionStatus() {
    return this.subscribed === !1 ? ht.SubscriptionStatus.Unsubscribed : super.isSubscribed ? ht.SubscriptionStatus.Subscribed : ht.SubscriptionStatus.Desired;
  }
  get permissionStatus() {
    return this.allowed ? ht.PermissionStatus.Allowed : ht.PermissionStatus.NotAllowed;
  }
  get isSubscribed() {
    return this.subscribed === !1 ? !1 : super.isSubscribed;
  }
  get isDesired() {
    return this.subscribed !== !1;
  }
  get isEnabled() {
    return this.requestedDisabled !== void 0 ? !this.requestedDisabled : this.isAdaptiveStream ? this.visible : !0;
  }
  get isLocal() {
    return !1;
  }
  setEnabled(e) {
    !this.isManualOperationAllowed() || this.requestedDisabled === !e || (this.requestedDisabled = !e, this.emitTrackUpdate());
  }
  setVideoQuality(e) {
    !this.isManualOperationAllowed() || this.requestedMaxQuality === e || (this.requestedMaxQuality = e, this.requestedVideoDimensions = void 0, this.emitTrackUpdate());
  }
  setVideoDimensions(e) {
    var t, i;
    this.isManualOperationAllowed() && (((t = this.requestedVideoDimensions) === null || t === void 0 ? void 0 : t.width) === e.width && ((i = this.requestedVideoDimensions) === null || i === void 0 ? void 0 : i.height) === e.height || (Os(this.track) && (this.requestedVideoDimensions = e), this.requestedMaxQuality = void 0, this.emitTrackUpdate()));
  }
  setVideoFPS(e) {
    this.isManualOperationAllowed() && Os(this.track) && this.fps !== e && (this.fps = e, this.emitTrackUpdate());
  }
  get videoQuality() {
    var e;
    return (e = this.requestedMaxQuality) !== null && e !== void 0 ? e : Be.HIGH;
  }
  setTrack(e) {
    const t = this.subscriptionStatus,
      i = this.permissionStatus,
      s = this.track;
    s !== e && (s && (s.off(I.VideoDimensionsChanged, this.handleVideoDimensionsChange), s.off(I.VisibilityChanged, this.handleVisibilityChange), s.off(I.Ended, this.handleEnded), s.detach(), s.stopMonitor(), this.emit(I.Unsubscribed, s)), super.setTrack(e), e && (e.sid = this.trackSid, e.on(I.VideoDimensionsChanged, this.handleVideoDimensionsChange), e.on(I.VisibilityChanged, this.handleVisibilityChange), e.on(I.Ended, this.handleEnded), this.emit(I.Subscribed, e)), this.emitPermissionUpdateIfChanged(i), this.emitSubscriptionUpdateIfChanged(t));
  }
  setAllowed(e) {
    const t = this.subscriptionStatus,
      i = this.permissionStatus;
    this.allowed = e, this.emitPermissionUpdateIfChanged(i), this.emitSubscriptionUpdateIfChanged(t);
  }
  setSubscriptionError(e) {
    this.emit(I.SubscriptionFailed, e);
  }
  updateInfo(e) {
    super.updateInfo(e);
    const t = this.metadataMuted;
    this.metadataMuted = e.muted, this.track ? this.track.setMuted(e.muted) : t !== e.muted && this.emit(e.muted ? I.Muted : I.Unmuted);
  }
  emitSubscriptionUpdateIfChanged(e) {
    const t = this.subscriptionStatus;
    e !== t && this.emit(I.SubscriptionStatusChanged, t, e);
  }
  emitPermissionUpdateIfChanged(e) {
    this.permissionStatus !== e && this.emit(I.SubscriptionPermissionChanged, this.permissionStatus, e);
  }
  isManualOperationAllowed() {
    return this.isDesired ? !0 : (this.log.warn("cannot update track settings when not subscribed", this.logContext), !1);
  }
  get isAdaptiveStream() {
    return Os(this.track) && this.track.isAdaptiveStream;
  }
  emitTrackUpdate() {
    const e = new nd({
      trackSids: [this.trackSid],
      disabled: !this.isEnabled,
      fps: this.fps
    });
    if (this.kind === E.Kind.Video) {
      let t = this.requestedVideoDimensions;
      if (this.videoDimensionsAdaptiveStream !== void 0) if (t) lo(this.videoDimensionsAdaptiveStream, t) && (this.log.debug("using adaptive stream dimensions instead of requested", Object.assign(Object.assign({}, this.logContext), this.videoDimensionsAdaptiveStream)), t = this.videoDimensionsAdaptiveStream);else if (this.requestedMaxQuality !== void 0 && this.trackInfo) {
        const i = qm(this.trackInfo, this.requestedMaxQuality);
        i && lo(this.videoDimensionsAdaptiveStream, i) && (this.log.debug("using adaptive stream dimensions instead of max quality layer", Object.assign(Object.assign({}, this.logContext), this.videoDimensionsAdaptiveStream)), t = this.videoDimensionsAdaptiveStream);
      } else this.log.debug("using adaptive stream dimensions", Object.assign(Object.assign({}, this.logContext), this.videoDimensionsAdaptiveStream)), t = this.videoDimensionsAdaptiveStream;
      t ? (e.width = Math.ceil(t.width), e.height = Math.ceil(t.height)) : this.requestedMaxQuality !== void 0 ? (this.log.debug("using requested max quality", Object.assign(Object.assign({}, this.logContext), {
        quality: this.requestedMaxQuality
      })), e.quality = this.requestedMaxQuality) : (this.log.debug("using default quality", Object.assign(Object.assign({}, this.logContext), {
        quality: Be.HIGH
      })), e.quality = Be.HIGH);
    }
    this.emit(I.UpdateSettings, e);
  }
}
class $n extends ql {
  static fromParticipantInfo(e, t, i, s) {
    return new $n(e, t.sid, t.identity, t.name, t.metadata, t.attributes, i, t.kind, t.dataTracks.map(r => {
      const a = Gn.from(r);
      return new Nl(a, s, {
        publisherIdentity: t.identity
      });
    }), t.clientProtocol, t.capabilities);
  }
  get logContext() {
    return Object.assign(Object.assign({}, super.logContext), {
      remoteParticipantID: this.sid,
      remoteParticipant: this.identity
    });
  }
  constructor(e, t, i, s, r, a, o) {
    let c = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : Xi.STANDARD,
      d = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : [],
      l = arguments.length > 9 && arguments[9] !== void 0 ? arguments[9] : zd,
      u = arguments.length > 10 && arguments[10] !== void 0 ? arguments[10] : [];
    super(t, i || "", s, r, a, o, c), this.signalClient = e, this.trackPublications = new Map(), this.audioTrackPublications = new Map(), this.videoTrackPublications = new Map(), this.dataTracks = new Bg(d.map(h => [h.info.name, h])), this.volumeMap = new Map(), this.clientProtocol = l, this.capabilities = u;
  }
  addTrackPublication(e) {
    super.addTrackPublication(e), e.on(I.UpdateSettings, t => {
      this.log.debug("send update settings", Object.assign(Object.assign(Object.assign({}, this.logContext), V(e)), {
        settings: t
      })), this.signalClient.sendUpdateTrackSettings(t);
    }), e.on(I.UpdateSubscription, t => {
      t.participantTracks.forEach(i => {
        i.participantSid = this.sid;
      }), this.signalClient.sendUpdateSubscription(t);
    }), e.on(I.SubscriptionPermissionChanged, t => {
      this.emit(A.TrackSubscriptionPermissionChanged, e, t);
    }), e.on(I.SubscriptionStatusChanged, t => {
      this.emit(A.TrackSubscriptionStatusChanged, e, t);
    }), e.on(I.Subscribed, t => {
      this.emit(A.TrackSubscribed, t, e);
    }), e.on(I.Unsubscribed, t => {
      this.emit(A.TrackUnsubscribed, t, e);
    }), e.on(I.SubscriptionFailed, t => {
      this.emit(A.TrackSubscriptionFailed, e.trackSid, t);
    });
  }
  getTrackPublication(e) {
    const t = super.getTrackPublication(e);
    if (t) return t;
  }
  getTrackPublicationByName(e) {
    const t = super.getTrackPublicationByName(e);
    if (t) return t;
  }
  setVolume(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : E.Source.Microphone;
    this.volumeMap.set(t, e);
    const i = this.getTrackPublication(t);
    i && i.track && i.track.setVolume(e);
  }
  getVolume() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : E.Source.Microphone;
    const t = this.getTrackPublication(e);
    return t && t.track ? t.track.getVolume() : this.volumeMap.get(e);
  }
  addSubscribedMediaTrack(e, t, i, s, r, a) {
    let o = this.getTrackPublicationBySid(t);
    if (o || t.startsWith("TR") || this.trackPublications.forEach(l => {
      !o && e.kind === l.kind.toString() && (o = l);
    }), !o) {
      if (a === 0) {
        this.log.error("could not find published track", Object.assign(Object.assign({}, this.logContext), {
          trackSid: t
        })), this.emit(A.TrackSubscriptionFailed, t);
        return;
      }
      a === void 0 && (a = 20), setTimeout(() => {
        this.addSubscribedMediaTrack(e, t, i, s, r, a - 1);
      }, 150);
      return;
    }
    if (e.readyState === "ended") {
      this.log.error("unable to subscribe because MediaStreamTrack is ended. Do not call MediaStreamTrack.stop()", Object.assign(Object.assign({}, this.logContext), V(o))), this.emit(A.TrackSubscriptionFailed, t);
      return;
    }
    const c = e.kind === "video";
    let d;
    return c ? d = new pa(e, t, s, r) : d = new Dg(e, t, s, this.audioContext, this.audioOutput), d.source = o.source, d.isMuted = o.isMuted, d.setMediaStream(i), d.start(), o.setTrack(d), this.volumeMap.has(o.source) && Rr(d) && at(d) && d.setVolume(this.volumeMap.get(o.source)), o;
  }
  get hasMetadata() {
    return !!this.participantInfo;
  }
  getTrackPublicationBySid(e) {
    return this.trackPublications.get(e);
  }
  updateInfo(e) {
    if (!super.updateInfo(e)) return !1;
    const t = new Map(),
      i = new Map();
    return e.tracks.forEach(s => {
      var r, a;
      let o = this.getTrackPublicationBySid(s.sid);
      if (o) o.updateInfo(s);else {
        const c = E.kindFromProto(s.type);
        if (!c) return;
        o = new qg(c, s, (r = this.signalClient.connectOptions) === null || r === void 0 ? void 0 : r.autoSubscribe, {
          loggerContextCb: () => this.logContext,
          loggerName: (a = this.loggerOptions) === null || a === void 0 ? void 0 : a.loggerName
        }), o.updateInfo(s), i.set(s.sid, o);
        const d = Array.from(this.trackPublications.values()).find(l => l.source === o?.source);
        d && o.source !== E.Source.Unknown && this.log.debug("received a second track publication for ".concat(this.identity, " with the same source: ").concat(o.source), Object.assign(Object.assign({}, this.logContext), {
          oldTrack: V(d),
          newTrack: V(o)
        })), this.addTrackPublication(o);
      }
      t.set(s.sid, o);
    }), this.trackPublications.forEach(s => {
      t.has(s.trackSid) || (this.log.trace("detected removed track on remote participant, unpublishing", Object.assign(Object.assign({}, this.logContext), V(s))), this.unpublishTrack(s.trackSid, !0));
    }), i.forEach(s => {
      this.emit(A.TrackPublished, s);
    }), !0;
  }
  unpublishTrack(e, t) {
    const i = this.trackPublications.get(e);
    if (!i) return;
    const s = i.track;
    switch (s && (s.stop(), i.setTrack(void 0)), this.trackPublications.delete(e), i.kind) {
      case E.Kind.Audio:
        this.audioTrackPublications.delete(e);
        break;
      case E.Kind.Video:
        this.videoTrackPublications.delete(e);
        break;
    }
    t && this.emit(A.TrackUnpublished, i);
  }
  setAudioOutput(e) {
    return p(this, void 0, void 0, function* () {
      this.audioOutput = e;
      const t = [];
      this.audioTrackPublications.forEach(i => {
        var s;
        at(i.track) && Rr(i.track) && t.push(i.track.setSinkId((s = e.deviceId) !== null && s !== void 0 ? s : "default"));
      }), yield Promise.all(t);
    });
  }
  addRemoteDataTrack(e) {
    this.dataTracks.set(e.info.name, e);
  }
  removeRemoteDataTrack(e) {
    for (const i of this.dataTracks.entries()) {
      var t = x(i, 2);
      const s = t[0],
        r = t[1];
      e === r.info.sid && this.dataTracks.delete(s);
    }
  }
  emit(e) {
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
    return this.log.trace("participant event", Object.assign(Object.assign({}, this.logContext), {
      event: e,
      args: i
    })), super.emit(e, ...i);
  }
}
var K;
(function (n) {
  n.Disconnected = "disconnected", n.Connecting = "connecting", n.Connected = "connected", n.Reconnecting = "reconnecting", n.SignalReconnecting = "signalReconnecting";
})(K || (K = {}));
const jg = 4 * 1e3,
  Vg = 30 * 1e3,
  Wg = "livekit-dummy-audio-el";
let Tn;
function Hg() {
  const n = document.createElement("audio");
  n.id = Wg, n.autoplay = !0, n.hidden = !0;
  const e = al();
  e.enabled = !0;
  const t = new MediaStream([e]);
  return n.srcObject = t, document.body.append(n), {
    element: n,
    stream: t,
    track: e,
    refCount: 0
  };
}
class Mt extends Ue.EventEmitter {
  get hasE2EESetup() {
    return this.e2eeManager !== void 0;
  }
  constructor(e) {
    var t, i, s, r, a, o, c, d;
    if (super(), t = this, this.state = K.Disconnected, this.activeSpeakers = [], this.isE2EEEnabled = !1, this.audioEnabled = !0, this.ownsAudioContext = !1, this.audioContextReleased = !1, this.audioContextMutex = new ye(), this.acquiredEmptyAudioTracks = new Set(), this.e2eeStateMutex = new ye(), this.isVideoPlaybackBlocked = !1, this.log = W, this.statsLog = W, this.bufferedEvents = [], this.isResuming = !1, this.pendingTrackAddedCallbacks = new Map(), this.connect = (l, u, h) => p(this, void 0, void 0, function* () {
      var m;
      if (!Qm()) throw We() ? Error("WebRTC isn't detected, have you called registerGlobals?") : Error("LiveKit doesn't seem to be supported on this browser. Try to update your browser and make sure no browser extensions are disabling webRTC.");
      const g = yield this.disconnectLock.lock();
      if (this.state === K.Connected) return this.log.info("already connected to room ".concat(this.name)), g(), Promise.resolve();
      if (this.connectFuture) return g(), this.connectFuture.promise;
      this.setAndEmitConnectionState(K.Connecting), ((m = this.regionUrlProvider) === null || m === void 0 ? void 0 : m.getServerUrl().toString()) !== ll(l) && (this.regionUrl = void 0, this.regionUrlProvider = void 0), _i(new URL(l)) && (this.regionUrlProvider === void 0 ? this.regionUrlProvider = new G(l, u) : this.regionUrlProvider.updateToken(u), this.regionUrlProvider.fetchRegionSettings().then(k => {
        var S;
        (S = this.regionUrlProvider) === null || S === void 0 || S.setServerReportedRegions(k);
      }).catch(k => {
        this.log.warn("could not fetch region settings", {
          error: k
        });
      }));
      const f = (k, S, R) => p(this, void 0, void 0, function* () {
          var b, T;
          this.abortController && this.abortController.abort();
          const C = new AbortController();
          this.abortController = C, g?.();
          try {
            if (yield yi.getInstance().getBackOffPromise(l), C.signal.aborted) throw N.cancelled("Connection attempt aborted");
            yield this.attemptConnection(R ?? l, u, h, C), this.abortController = void 0, k();
          } catch (M) {
            if (this.regionUrlProvider && M instanceof N && Em(M)) {
              let D = null;
              try {
                this.log.debug("Fetching next region"), D = yield this.regionUrlProvider.getNextBestRegionUrl((b = this.abortController) === null || b === void 0 ? void 0 : b.signal);
              } catch (B) {
                if (B instanceof N && (B.status === 401 || B.reason === Q.Cancelled)) {
                  this.handleDisconnect(this.options.stopLocalTrackOnUnpublish), S(B);
                  return;
                }
              }
              [Q.InternalError, Q.ServerUnreachable, Q.Timeout].includes(M.reason) && (this.log.debug("Adding failed connection attempt to back off"), yi.getInstance().addFailedConnectionAttempt(l)), D && !(!((T = this.abortController) === null || T === void 0) && T.signal.aborted) ? (this.log.info("Initial connection failed with ConnectionError: ".concat(M.message, ". Retrying with another region: ").concat(D)), this.recreateEngine(!0), yield f(k, S, D)) : (this.handleDisconnect(this.options.stopLocalTrackOnUnpublish, go(M)), S(M));
            } else {
              let D = ve.UNKNOWN_REASON;
              M instanceof N && (D = go(M)), this.handleDisconnect(this.options.stopLocalTrackOnUnpublish, D), S(M);
            }
          }
        }),
        y = this.regionUrl;
      return this.regionUrl = void 0, this.connectFuture = new we((k, S) => {
        f(k, S, y);
      }, () => {
        this.clearConnectionFutures();
      }), this.connectFuture.promise;
    }), this.connectSignal = (l, u, h, m, g, f) => p(this, void 0, void 0, function* () {
      const y = yield h.join(l, u, {
          autoSubscribe: m.autoSubscribe,
          adaptiveStream: typeof g.adaptiveStream == "object" ? !0 : g.adaptiveStream,
          disableIceLite: m.disableIceLite,
          subscriberAllowPause: m.subscriberAllowPause,
          clientInfoCapabilities: this.getClientInfoCapabilities(g),
          maxRetries: m.maxRetries,
          e2eeEnabled: !!this.e2eeManager,
          websocketTimeout: m.websocketTimeout
        }, f.signal, !g.singlePeerConnection),
        k = y.joinResponse,
        S = y.serverInfo;
      if (this.serverInfo = S, !S.version) throw new _m("unknown server version");
      return S.version === "0.15.1" && this.options.dynacast && (this.log.debug("disabling dynacast due to server version"), g.dynacast = !1), k;
    }), this.applyJoinResponse = l => {
      const u = l.participant;
      if (this.localParticipant.sid = u.sid, this.localParticipant.identity = u.identity, this.localParticipant.setEnabledPublishCodecs(l.enabledPublishCodecs), this.e2eeManager) try {
        this.e2eeManager.setSifTrailer(l.sifTrailer);
      } catch (h) {
        this.log.error(h instanceof Error ? h.message : "Could not set SifTrailer", {
          error: h
        });
      }
      this.handleParticipantUpdates([u, ...l.otherParticipants]), l.room && this.handleRoomUpdate(l.room);
    }, this.attemptConnection = (l, u, h, m) => p(this, void 0, void 0, function* () {
      var g, f;
      this.state === K.Reconnecting || this.isResuming || !((g = this.engine) === null || g === void 0) && g.pendingReconnect ? (this.log.info("Reconnection attempt replaced by new connection attempt"), this.recreateEngine(!0)) : this.maybeCreateEngine(), !((f = this.regionUrlProvider) === null || f === void 0) && f.isCloud() && this.engine.setRegionStrategy(this.createRegionStrategy()), this.acquireAudioContext(!0).catch(y => this.log.warn("Could not acquire audio context", Object.assign(Object.assign({}, this.logContext), {
        error: y
      }))), this.connOptions = Object.assign(Object.assign({}, Ta), h), this.connOptions.rtcConfig && (this.engine.rtcConfig = this.connOptions.rtcConfig), this.connOptions.peerConnectionTimeout && (this.engine.peerConnectionTimeout = this.connOptions.peerConnectionTimeout);
      try {
        const y = yield this.connectSignal(l, u, this.engine, this.connOptions, this.options, m);
        this.applyJoinResponse(y), this.setupLocalParticipantEvents(), this.emit(w.SignalConnected);
      } catch (y) {
        yield this.engine.close(), this.recreateEngine();
        const k = m.signal.aborted ? N.cancelled("Signal connection aborted") : N.serverUnreachable("could not establish signal connection");
        throw y instanceof Error && (k.message = "".concat(k.message, ": ").concat(y.message)), y instanceof N && (k.reason = y.reason, k.status = y.status), this.log.debug("error trying to establish signal connection", {
          error: y
        }), k;
      }
      if (m.signal.aborted) throw yield this.engine.close(), this.recreateEngine(), N.cancelled("Connection attempt aborted");
      try {
        yield this.engine.waitForPCInitialConnection(this.connOptions.peerConnectionTimeout, m);
      } catch (y) {
        throw yield this.engine.close(), this.recreateEngine(), y;
      }
      Oe() && this.options.disconnectOnPageLeave && (window.addEventListener("pagehide", this.onPageLeave), window.addEventListener("beforeunload", this.onPageLeave)), Oe() && window.addEventListener("freeze", this.onPageLeave), this.setAndEmitConnectionState(K.Connected), this.emit(w.Connected), yi.getInstance().resetFailedConnectionAttempts(l), this.registerConnectionReconcile(), this.regionUrlProvider && this.regionUrlProvider.notifyConnected();
    }), this.disconnect = function () {
      for (var l = arguments.length, u = new Array(l), h = 0; h < l; h++) u[h] = arguments[h];
      return p(t, [...u], void 0, function () {
        var m = this;
        let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
        return function* () {
          var f, y, k;
          const S = yield m.disconnectLock.lock();
          try {
            if (m.state === K.Disconnected) {
              m.log.debug("already disconnected");
              return;
            }
            if (m.log.info("disconnect from room"), m.state === K.Connecting || m.state === K.Reconnecting || m.isResuming) {
              const R = "Abort connection attempt due to user initiated disconnect";
              m.log.warn(R), (f = m.abortController) === null || f === void 0 || f.abort(R), (k = (y = m.connectFuture) === null || y === void 0 ? void 0 : y.reject) === null || k === void 0 || k.call(y, N.cancelled("Client initiated disconnect")), m.connectFuture = void 0;
            }
            m.engine && (m.engine.client.isDisconnected || (yield m.engine.client.sendLeave()), yield m.engine.close()), m.handleDisconnect(g, ve.CLIENT_INITIATED), m.engine = void 0;
          } finally {
            S();
          }
        }();
      });
    }, this.onPageLeave = () => p(this, void 0, void 0, function* () {
      this.log.info("Page leave detected, disconnecting"), yield this.disconnect();
    }), this.startAudio = () => p(this, void 0, void 0, function* () {
      const l = [],
        u = Ee();
      u && u.os === "iOS" && !this.audioContextReleased && l.push(this.acquireDummyAudioElement()), this.remoteParticipants.forEach(h => {
        h.audioTrackPublications.forEach(m => {
          m.track && m.track.attachedElements.forEach(g => {
            l.push(g);
          });
        });
      });
      try {
        yield Promise.all([...(this.audioContextReleased ? [] : [this.acquireAudioContext()]), ...l.map(h => (this.options.webAudioMix || (h.muted = !1), h.play()))]), this.handleAudioPlaybackStarted();
      } catch (h) {
        throw this.handleAudioPlaybackFailed(h), h;
      }
    }), this.startVideo = () => p(this, void 0, void 0, function* () {
      const l = [];
      for (const u of this.remoteParticipants.values()) u.videoTrackPublications.forEach(h => {
        var m;
        (m = h.track) === null || m === void 0 || m.attachedElements.forEach(g => {
          l.includes(g) || l.push(g);
        });
      });
      yield Promise.all(l.map(u => u.play())).then(() => {
        this.handleVideoPlaybackStarted();
      }).catch(u => {
        u.name === "NotAllowedError" ? this.handleVideoPlaybackFailed() : this.log.warn("Resuming video playback failed, make sure you call `startVideo` directly in a user gesture handler");
      });
    }), this.handleRestarting = () => {
      this.clearConnectionReconcile(), this.isResuming = !1;
      for (const l of this.remoteParticipants.values()) this.handleParticipantDisconnected(l.identity, l);
      this.setAndEmitConnectionState(K.Reconnecting) && this.emit(w.Reconnecting);
    }, this.handleRestarted = () => {
      this.outgoingDataTrackManager.sfuWillRepublishTracks(), this.incomingDataTrackManager.resendSubscriptionUpdates();
    }, this.handleSignalRestarted = l => p(this, void 0, void 0, function* () {
      this.log.debug("signal reconnected to server, region ".concat(l.serverRegion), {
        region: l.serverRegion
      }), this.bufferedEvents = [], this.applyJoinResponse(l);
      try {
        yield this.localParticipant.republishAllTracks(void 0, !0);
      } catch (u) {
        this.log.error("error trying to re-publish tracks after reconnection", {
          error: u
        });
      }
      try {
        yield this.engine.waitForRestarted(), this.log.debug("fully reconnected to server", {
          region: l.serverRegion
        });
      } catch {
        return;
      }
      this.setAndEmitConnectionState(K.Connected), this.emit(w.Reconnected), this.registerConnectionReconcile(), this.emitBufferedEvents();
    }), this.handleParticipantUpdates = l => {
      var u;
      for (const m of l) {
        if (m.identity === this.localParticipant.identity) {
          this.localParticipant.updateInfo(m);
          continue;
        }
        m.identity === "" && (m.identity = (u = this.sidToIdentity.get(m.sid)) !== null && u !== void 0 ? u : "");
        let g = this.remoteParticipants.get(m.identity);
        m.state === li.DISCONNECTED ? this.handleParticipantDisconnected(m.identity, g, m.disconnectReason === ve.UNKNOWN_REASON ? void 0 : m.disconnectReason) : this.getOrCreateParticipant(m.identity, m);
      }
      const h = new Map(l.filter(m => m.identity !== this.localParticipant.identity).map(m => [m.identity, m.dataTracks.map(g => Gn.from(g))]));
      this.incomingDataTrackManager.receiveSfuPublicationUpdates(h);
    }, this.handleActiveSpeakersUpdate = l => {
      const u = [],
        h = {};
      l.forEach(m => {
        if (h[m.sid] = !0, m.sid === this.localParticipant.sid) this.localParticipant.audioLevel = m.level, this.localParticipant.setIsSpeaking(!0), u.push(this.localParticipant);else {
          const g = this.getRemoteParticipantBySid(m.sid);
          g && (g.audioLevel = m.level, g.setIsSpeaking(!0), u.push(g));
        }
      }), h[this.localParticipant.sid] || (this.localParticipant.audioLevel = 0, this.localParticipant.setIsSpeaking(!1)), this.remoteParticipants.forEach(m => {
        h[m.sid] || (m.audioLevel = 0, m.setIsSpeaking(!1));
      }), this.activeSpeakers = u, this.emitWhenConnected(w.ActiveSpeakersChanged, u);
    }, this.handleSpeakersChanged = l => {
      const u = new Map();
      this.activeSpeakers.forEach(m => {
        const g = this.remoteParticipants.get(m.identity);
        g && g.sid !== m.sid || u.set(m.sid, m);
      }), l.forEach(m => {
        let g = this.getRemoteParticipantBySid(m.sid);
        m.sid === this.localParticipant.sid && (g = this.localParticipant), g && (g.audioLevel = m.level, g.setIsSpeaking(m.active), m.active ? u.set(m.sid, g) : u.delete(m.sid));
      });
      const h = Array.from(u.values());
      h.sort((m, g) => g.audioLevel - m.audioLevel), this.activeSpeakers = h, this.emitWhenConnected(w.ActiveSpeakersChanged, h);
    }, this.handleStreamStateUpdate = l => {
      l.streamStates.forEach(u => {
        const h = this.getRemoteParticipantBySid(u.participantSid);
        if (!h) return;
        const m = h.getTrackPublicationBySid(u.trackSid);
        if (!m || !m.track) return;
        const g = E.streamStateFromProto(u.state),
          f = m.track.streamState;
        m.track.setStreamState(g), g !== f && (h.emit(A.TrackStreamStateChanged, m, m.track.streamState), this.emitWhenConnected(w.TrackStreamStateChanged, m, m.track.streamState, h));
      });
    }, this.handleSubscriptionPermissionUpdate = l => {
      const u = this.getRemoteParticipantBySid(l.participantSid);
      if (!u) return;
      const h = u.getTrackPublicationBySid(l.trackSid);
      h && h.setAllowed(l.allowed);
    }, this.handleSubscriptionError = l => {
      this.cancelPendingTrackAdded(l.trackSid);
      const u = Array.from(this.remoteParticipants.values()).find(m => m.trackPublications.has(l.trackSid));
      if (!u) return;
      const h = u.getTrackPublicationBySid(l.trackSid);
      h && h.setSubscriptionError(l.err);
    }, this.handleDataPacket = (l, u) => {
      const h = this.remoteParticipants.get(l.participantIdentity);
      if (l.value.case === "user") this.handleUserPacket(h, l.value.value, l.kind, u, l.participantIdentity);else if (l.value.case === "transcription") this.handleTranscription(h, l.value.value);else if (l.value.case === "sipDtmf") this.handleSipDtmf(h, l.value.value);else if (l.value.case === "chatMessage") this.handleChatMessage(h, l.value.value);else if (l.value.case === "metrics") this.handleMetrics(l.value.value, h);else if (l.value.case === "streamHeader" || l.value.case === "streamChunk" || l.value.case === "streamTrailer") this.handleDataStream(l, u);else if (l.value.case === "rpcRequest") {
        const m = l.value.value;
        this.rpcServerManager.handleIncomingRpcRequest(l.participantIdentity, m);
      } else if (l.value.case === "rpcResponse") {
        const m = l.value.value;
        switch (m.value.case) {
          case "payload":
            this.rpcClientManager.handleIncomingRpcResponseSuccess(m.requestId, m.value.value);
            break;
          case "error":
            this.rpcClientManager.handleIncomingRpcResponseFailure(m.requestId, J.fromProto(m.value.value));
            break;
          default:
            this.log.warn("Unknown rpcResponse.value.case: ".concat(m.value.case), this.logContext);
            break;
        }
      } else l.value.case === "rpcAck" && this.rpcClientManager.handleIncomingRpcAck(l.value.value.requestId);
    }, this.handleUserPacket = (l, u, h, m, g) => {
      this.emit(w.DataReceived, u.payload, l, h, u.topic, m, g), l?.emit(A.DataReceived, u.payload, h, m);
    }, this.handleSipDtmf = (l, u) => {
      this.emit(w.SipDTMFReceived, u, l), l?.emit(A.SipDTMFReceived, u);
    }, this.handleTranscription = (l, u) => {
      const h = u.transcribedParticipantIdentity === this.localParticipant.identity ? this.localParticipant : this.getParticipantByIdentity(u.transcribedParticipantIdentity),
        m = h?.trackPublications.get(u.trackId),
        g = cp(u, this.transcriptionReceivedTimes);
      m?.emit(I.TranscriptionReceived, g), h?.emit(A.TranscriptionReceived, g, m), this.emit(w.TranscriptionReceived, g, h, m);
    }, this.handleChatMessage = (l, u) => {
      const h = dp(u);
      this.emit(w.ChatMessage, h, l);
    }, this.handleMetrics = (l, u) => {
      this.emit(w.MetricsReceived, l, u);
    }, this.handleDataStream = (l, u) => {
      this.incomingDataStreamManager.handleDataStreamPacket(l, u);
    }, this.bufferedSegments = new Map(), this.handleAudioPlaybackStarted = () => {
      this.canPlaybackAudio || (this.audioEnabled = !0, this.emit(w.AudioPlaybackStatusChanged, !0));
    }, this.handleAudioPlaybackFailed = l => {
      this.log.warn("could not playback audio", {
        error: l
      }), this.canPlaybackAudio && (this.audioEnabled = !1, this.emit(w.AudioPlaybackStatusChanged, !1));
    }, this.handleVideoPlaybackStarted = () => {
      this.isVideoPlaybackBlocked && (this.isVideoPlaybackBlocked = !1, this.emit(w.VideoPlaybackStatusChanged, !0));
    }, this.handleVideoPlaybackFailed = () => {
      this.isVideoPlaybackBlocked || (this.isVideoPlaybackBlocked = !0, this.emit(w.VideoPlaybackStatusChanged, !1));
    }, this.handleDeviceChange = () => p(this, void 0, void 0, function* () {
      var l;
      ((l = Ee()) === null || l === void 0 ? void 0 : l.os) !== "iOS" && (yield this.selectDefaultDevices()), this.emit(w.MediaDevicesChanged);
    }), this.handleRoomUpdate = l => {
      const u = this.roomInfo;
      this.roomInfo = l, u && u.metadata !== l.metadata && this.emitWhenConnected(w.RoomMetadataChanged, l.metadata), u?.activeRecording !== l.activeRecording && this.emitWhenConnected(w.RecordingStatusChanged, l.activeRecording);
    }, this.handleConnectionQualityUpdate = l => {
      l.updates.forEach(u => {
        if (u.participantSid === this.localParticipant.sid) {
          this.localParticipant.setConnectionQuality(u.quality);
          return;
        }
        const h = this.getRemoteParticipantBySid(u.participantSid);
        h && h.setConnectionQuality(u.quality);
      });
    }, this.getRemoteParticipantClientProtocol = l => {
      var u, h;
      return (h = (u = this.remoteParticipants.get(l)) === null || u === void 0 ? void 0 : u.clientProtocol) !== null && h !== void 0 ? h : zd;
    }, this.getRemoteParticipantCapabilities = l => {
      var u, h;
      return (h = (u = this.remoteParticipants.get(l)) === null || u === void 0 ? void 0 : u.capabilities) !== null && h !== void 0 ? h : [];
    }, this.getAllRemoteParticipantIdentities = () => Array.from(this.remoteParticipants.keys()), this.logWebRTCStats = () => p(this, void 0, void 0, function* () {
      var l, u, h, m;
      const g = (l = this.engine) === null || l === void 0 ? void 0 : l.pcManager;
      if (g) try {
        const f = yield Promise.all([g.publisher.getStats(), (u = g.subscriber) === null || u === void 0 ? void 0 : u.getStats()]),
          y = x(f, 2),
          k = y[0],
          S = y[1],
          R = k && br(k),
          b = S && br(S);
        this.statsLog.info("webrtc stats", {
          publisher: R?.connection,
          subscriber: b?.connection,
          inbound: [...((h = R?.inbound) !== null && h !== void 0 ? h : []), ...((m = b?.inbound) !== null && m !== void 0 ? m : [])],
          outbound: R?.outbound
        });
      } catch (f) {
        this.statsLog.debug("could not collect webrtc stats", {
          error: f
        });
      }
    }), this.onLocalParticipantMetadataChanged = l => {
      this.emit(w.ParticipantMetadataChanged, l, this.localParticipant);
    }, this.onLocalParticipantNameChanged = l => {
      this.emit(w.ParticipantNameChanged, l, this.localParticipant);
    }, this.onLocalAttributesChanged = l => {
      this.emit(w.ParticipantAttributesChanged, l, this.localParticipant);
    }, this.onLocalTrackMuted = l => {
      this.emit(w.TrackMuted, l, this.localParticipant);
    }, this.onLocalTrackUnmuted = l => {
      this.emit(w.TrackUnmuted, l, this.localParticipant);
    }, this.onTrackProcessorUpdate = l => {
      var u;
      (u = l?.onPublish) === null || u === void 0 || u.call(l, this);
    }, this.onLocalTrackPublished = l => p(this, void 0, void 0, function* () {
      var u, h, m, g, f, y;
      (u = l.track) === null || u === void 0 || u.on(I.TrackProcessorUpdate, this.onTrackProcessorUpdate), (h = l.track) === null || h === void 0 || h.on(I.Restarted, this.onLocalTrackRestarted), (f = (g = (m = l.track) === null || m === void 0 ? void 0 : m.getProcessor()) === null || g === void 0 ? void 0 : g.onPublish) === null || f === void 0 || f.call(g, this), this.emit(w.LocalTrackPublished, l, this.localParticipant), nt(l.track) && (yield l.track.checkForSilence()) && this.emit(w.LocalAudioSilenceDetected, l);
      const k = yield (y = l.track) === null || y === void 0 ? void 0 : y.getDeviceId(!1),
        S = Tr(l.source);
      S && k && k !== this.localParticipant.activeDeviceMap.get(S) && (this.localParticipant.activeDeviceMap.set(S, k), this.emit(w.ActiveDeviceChanged, S, k));
    }), this.onLocalTrackUnpublished = l => {
      var u, h;
      (u = l.track) === null || u === void 0 || u.off(I.TrackProcessorUpdate, this.onTrackProcessorUpdate), (h = l.track) === null || h === void 0 || h.off(I.Restarted, this.onLocalTrackRestarted), this.emit(w.LocalTrackUnpublished, l, this.localParticipant);
    }, this.onLocalTrackRestarted = l => p(this, void 0, void 0, function* () {
      const u = yield l.getDeviceId(!1),
        h = Tr(l.source);
      h && u && u !== this.localParticipant.activeDeviceMap.get(h) && (this.log.debug("local track restarted, setting ".concat(h, " ").concat(u, " active")), this.localParticipant.activeDeviceMap.set(h, u), this.emit(w.ActiveDeviceChanged, h, u));
    }), this.onLocalConnectionQualityChanged = l => {
      this.emit(w.ConnectionQualityChanged, l, this.localParticipant);
    }, this.onMediaDevicesError = (l, u) => {
      this.emit(w.MediaDevicesError, l, u);
    }, this.onLocalParticipantPermissionsChanged = l => {
      this.emit(w.ParticipantPermissionsChanged, l, this.localParticipant);
    }, this.onLocalChatMessageSent = l => {
      this.emit(w.ChatMessage, l, this.localParticipant);
    }, this.setMaxListeners(100), this.remoteParticipants = new Map(), this.sidToIdentity = new Map(), this.options = Object.assign(Object.assign({}, If), e), this.log = ke((i = this.options.loggerName) !== null && i !== void 0 ? i : re.Room, () => this.logContext), this.statsLog = ke(re.Stats, () => this.logContext), this.transcriptionReceivedTimes = new Map(), this.options.audioCaptureDefaults = Object.assign(Object.assign({}, bl), e?.audioCaptureDefaults), this.options.videoCaptureDefaults = Object.assign(Object.assign({}, yl), e?.videoCaptureDefaults), this.options.publishDefaults = Object.assign(Object.assign({}, Rf), e?.publishDefaults), this.maybeCreateEngine(), this.incomingDataStreamManager = new ug((s = this.options.dataStream) === null || s === void 0 ? void 0 : s.maxPayloadByteLength), this.outgoingDataStreamManager = new yg(this.engine, this.log, this.getRemoteParticipantClientProtocol, this.getRemoteParticipantCapabilities, this.getAllRemoteParticipantIdentities), this.incomingDataTrackManager = new Rg({
      e2eeManager: this.e2eeManager
    }), this.incomingDataTrackManager.on("sfuUpdateSubscription", l => {
      this.engine.client.sendUpdateDataSubscription(l.sid, l.subscribe);
    }).on("trackPublished", l => {
      var u;
      l.track.publisherIdentity !== this.localParticipant.identity && (this.emit(w.DataTrackPublished, l.track), (u = this.remoteParticipants.get(l.track.publisherIdentity)) === null || u === void 0 || u.addRemoteDataTrack(l.track));
    }).on("trackUnpublished", l => {
      var u;
      l.publisherIdentity !== this.localParticipant.identity && (this.emit(w.DataTrackUnpublished, l.sid), (u = this.remoteParticipants.get(l.publisherIdentity)) === null || u === void 0 || u.removeRemoteDataTrack(l.sid));
    }), this.outgoingDataTrackManager = new wa({
      e2eeManager: this.e2eeManager
    }), this.outgoingDataTrackManager.on("sfuPublishRequest", l => {
      this.engine.client.sendPublishDataTrackRequest(l.handle, l.name, l.usesE2ee);
    }).on("sfuUnpublishRequest", l => {
      this.engine.client.sendUnPublishDataTrackRequest(l.handle);
    }).on("trackPublished", l => {
      this.emit(w.LocalDataTrackPublished, l.track);
    }).on("trackUnpublished", l => {
      this.emit(w.LocalDataTrackUnpublished, l.sid);
    }).on("packetAvailable", l => {
      let u = l.handle,
        h = l.bytes;
      this.engine.sendDataTrackFrame(h).finally(() => this.outgoingDataTrackManager.handlePacketSendComplete(u));
    }), this.registerRpcDataStreamHandler(), this.rpcClientManager = new Ag(this.log, this.outgoingDataStreamManager, this.getRemoteParticipantClientProtocol, () => {
      var l;
      return (l = this.engine) === null || l === void 0 ? void 0 : l.serverVersion;
    }), this.rpcClientManager.on("sendDataPacket", l => {
      let u = l.packet;
      var h;
      (h = this.engine) === null || h === void 0 || h.sendDataPacket(u, H.RELIABLE);
    }), this.rpcServerManager = new Og(this.log, this.outgoingDataStreamManager, this.getRemoteParticipantClientProtocol), this.rpcServerManager.on("sendDataPacket", l => {
      let u = l.packet;
      var h;
      (h = this.engine) === null || h === void 0 || h.sendDataPacket(u, H.RELIABLE);
    }), this.disconnectLock = new ye(), this.localParticipant = new Fg("", "", this.engine, this.options, this.outgoingDataStreamManager, this.outgoingDataTrackManager, this.rpcClientManager, this.rpcServerManager), this.setupFrameMetadata(), (this.options.e2ee || this.options.encryption) && this.setupE2EE(), this.engine.e2eeManager = this.e2eeManager, this.incomingDataTrackManager.updateE2eeManager((r = this.e2eeManager) !== null && r !== void 0 ? r : null), this.outgoingDataTrackManager.updateE2eeManager((a = this.e2eeManager) !== null && a !== void 0 ? a : null), this.options.videoCaptureDefaults.deviceId && this.localParticipant.activeDeviceMap.set("videoinput", gi(this.options.videoCaptureDefaults.deviceId)), this.options.audioCaptureDefaults.deviceId && this.localParticipant.activeDeviceMap.set("audioinput", gi(this.options.audioCaptureDefaults.deviceId)), !((o = this.options.audioOutput) === null || o === void 0) && o.deviceId && this.switchActiveDevice("audiooutput", gi(this.options.audioOutput.deviceId)).catch(l => this.log.warn("Could not set audio output: ".concat(l.message))), Oe()) {
      const l = new AbortController();
      let u;
      if (Mt.cleanupRegistry) {
        const h = new WeakRef(this);
        u = () => {
          const m = h.deref();
          m && m.handleDeviceChange();
        }, Mt.cleanupRegistry.register(this, () => {
          l.abort();
        });
      } else u = this.handleDeviceChange;
      (d = (c = navigator.mediaDevices) === null || c === void 0 ? void 0 : c.addEventListener) === null || d === void 0 || d.call(c, "devicechange", u, {
        signal: l.signal
      });
    }
  }
  registerTextStreamHandler(e, t) {
    return this.incomingDataStreamManager.registerTextStreamHandler(e, t);
  }
  unregisterTextStreamHandler(e) {
    return this.incomingDataStreamManager.unregisterTextStreamHandler(e);
  }
  registerByteStreamHandler(e, t) {
    return this.incomingDataStreamManager.registerByteStreamHandler(e, t);
  }
  unregisterByteStreamHandler(e) {
    return this.incomingDataStreamManager.unregisterByteStreamHandler(e);
  }
  registerRpcMethod(e, t) {
    this.rpcServerManager.registerRpcMethod(e, t);
  }
  unregisterRpcMethod(e) {
    this.rpcServerManager.unregisterRpcMethod(e);
  }
  setE2EEEnabled(e) {
    return p(this, void 0, void 0, function* () {
      const t = yield this.e2eeStateMutex.lock();
      try {
        if (this.e2eeManager) this.isE2EEEnabled !== e && (yield this.localParticipant.setE2EEEnabled(e), this.localParticipant.identity !== "" && this.e2eeManager.setParticipantCryptorEnabled(e, this.localParticipant.identity));else throw Error("e2ee not configured, please set e2ee settings within the room options");
      } finally {
        t();
      }
    });
  }
  setupE2EE() {
    var e, t;
    const i = !!this.options.encryption,
      s = this.options.encryption || this.options.e2ee;
    s && ("e2eeManager" in s ? (this.e2eeManager = s.e2eeManager, this.e2eeManager.isDataChannelEncryptionEnabled = i) : this.e2eeManager = new Ht(s, i), this.e2eeManager.on(Ct.ParticipantEncryptionStatusChanged, (r, a) => {
      up(a) && (this.isE2EEEnabled = r), this.emit(w.ParticipantEncryptionStatusChanged, r, a);
    }), this.e2eeManager.on(Ct.EncryptionError, (r, a) => {
      const o = a ? this.getParticipantByIdentity(a) : void 0;
      this.emit(w.EncryptionError, r, o);
    }), (e = this.e2eeManager) === null || e === void 0 || e.setup(this), (t = this.e2eeManager) === null || t === void 0 || t.setupEngine(this.engine));
  }
  setupFrameMetadata() {
    var e;
    const t = (e = this.options.frameMetadata) !== null && e !== void 0 ? e : this.options.packetTrailer;
    this.frameMetadataManager = new Np(t), this.frameMetadataManager.setup(this);
  }
  get logContext() {
    var e, t, i;
    return {
      room: this.name,
      roomID: (e = this.roomInfo) === null || e === void 0 ? void 0 : e.sid,
      participant: (t = this.localParticipant) === null || t === void 0 ? void 0 : t.identity,
      participantID: (i = this.localParticipant) === null || i === void 0 ? void 0 : i.sid
    };
  }
  get isRecording() {
    var e, t;
    return (t = (e = this.roomInfo) === null || e === void 0 ? void 0 : e.activeRecording) !== null && t !== void 0 ? t : !1;
  }
  getSid() {
    return this.state === K.Disconnected ? Ae.resolve("") : this.roomInfo && this.roomInfo.sid !== "" ? Ae.resolve(this.roomInfo.sid) : new Ae((e, t) => {
      const i = s => {
        s.sid !== "" && (this.engine.off(P.RoomUpdate, i), e(s.sid));
      };
      this.engine.on(P.RoomUpdate, i), this.once(w.Disconnected, () => {
        this.engine.off(P.RoomUpdate, i), t(new Z("Room disconnected before room server id was available"));
      });
    });
  }
  get name() {
    var e, t;
    return (t = (e = this.roomInfo) === null || e === void 0 ? void 0 : e.name) !== null && t !== void 0 ? t : "";
  }
  get metadata() {
    var e;
    return (e = this.roomInfo) === null || e === void 0 ? void 0 : e.metadata;
  }
  get numParticipants() {
    var e, t;
    return (t = (e = this.roomInfo) === null || e === void 0 ? void 0 : e.numParticipants) !== null && t !== void 0 ? t : 0;
  }
  get numPublishers() {
    var e, t;
    return (t = (e = this.roomInfo) === null || e === void 0 ? void 0 : e.numPublishers) !== null && t !== void 0 ? t : 0;
  }
  maybeCreateEngine() {
    this.engine && (this.engine.isNewlyCreated || !this.engine.isClosed) || (this.engine = new og(this.options), this.engine.e2eeManager = this.e2eeManager, this.engine.on(P.ParticipantUpdate, this.handleParticipantUpdates).on(P.RoomUpdate, this.handleRoomUpdate).on(P.SpeakersChanged, this.handleSpeakersChanged).on(P.StreamStateChanged, this.handleStreamStateUpdate).on(P.ConnectionQualityUpdate, this.handleConnectionQualityUpdate).on(P.SubscriptionError, this.handleSubscriptionError).on(P.SubscriptionPermissionUpdate, this.handleSubscriptionPermissionUpdate).on(P.MediaTrackAdded, (e, t, i) => {
      this.onTrackAdded(e, t, i);
    }).on(P.Disconnected, e => {
      this.handleDisconnect(this.options.stopLocalTrackOnUnpublish, e);
    }).on(P.ActiveSpeakersUpdate, this.handleActiveSpeakersUpdate).on(P.DataPacketReceived, this.handleDataPacket).on(P.Resuming, () => {
      this.clearConnectionReconcile(), this.isResuming = !0, this.log.debug("Resuming signal connection"), this.setAndEmitConnectionState(K.SignalReconnecting) && this.emit(w.SignalReconnecting);
    }).on(P.Resumed, () => {
      this.registerConnectionReconcile(), this.isResuming = !1, this.log.debug("Resumed signal connection"), this.updateSubscriptions(), this.setAndEmitConnectionState(K.Connected) && this.emit(w.Reconnected), this.emitBufferedEvents();
    }).on(P.SignalResumed, () => {
      (this.state === K.Reconnecting || this.isResuming) && this.sendSyncState(), this.emitBufferedEvents();
    }).on(P.Restarting, this.handleRestarting).on(P.Restarted, this.handleRestarted).on(P.SignalRestarted, this.handleSignalRestarted).on(P.Offline, () => {
      this.setAndEmitConnectionState(K.Reconnecting) && this.emit(w.Reconnecting);
    }).on(P.DCBufferStatusChanged, (e, t) => {
      this.emit(w.DCBufferStatusChanged, e, t);
    }).on(P.LocalTrackSubscribed, e => {
      this.handleLocalTrackSubscribed(e);
    }).on(P.RoomMoved, e => {
      this.log.debug("room moved", e), e.room && this.handleRoomUpdate(e.room), this.remoteParticipants.forEach((t, i) => {
        this.handleParticipantDisconnected(i, t);
      }), this.emit(w.Moved, e.room.name), e.participant ? this.handleParticipantUpdates([e.participant, ...e.otherParticipants]) : this.handleParticipantUpdates(e.otherParticipants);
    }).on(P.PublishDataTrackResponse, e => {
      if (!e.info) {
        this.log.warn("received PublishDataTrackResponse, but event.info was ".concat(e.info, ", so skipping."));
        return;
      }
      this.outgoingDataTrackManager.receivedSfuPublishResponse(e.info.pubHandle, {
        type: "ok",
        data: {
          sid: e.info.sid,
          pubHandle: e.info.pubHandle,
          name: e.info.name,
          usesE2ee: e.info.encryption !== z.NONE
        }
      });
    }).on(P.UnPublishDataTrackResponse, e => {
      if (!e.info) {
        this.log.warn("received UnPublishDataTrackResponse, but event.info was ".concat(e.info, ", so skipping."));
        return;
      }
      this.outgoingDataTrackManager.receivedSfuUnpublishResponse(e.info.pubHandle);
    }).on(P.DataTrackSubscriberHandles, e => {
      const t = new Map(Object.entries(e.subHandles).map(i => {
        let s = x(i, 2),
          r = s[0],
          a = s[1];
        return [parseInt(r, 10), a.trackSid];
      }));
      this.incomingDataTrackManager.receivedSfuSubscriberHandles(t);
    }).on(P.DataTrackPacketReceived, e => {
      try {
        this.incomingDataTrackManager.packetReceived(e);
      } catch (t) {
        throw t;
      }
    }).on(P.Joined, e => {
      const t = new Map(e.otherParticipants.map(i => [i.identity, i.dataTracks.map(s => Gn.from(s))]));
      this.incomingDataTrackManager.receiveSfuPublicationUpdates(t);
    }).on(P.TokenRefreshed, e => {
      var t;
      (t = this.regionUrlProvider) === null || t === void 0 || t.updateToken(e);
    }).on(P.ServerRegionsReported, e => {
      var t;
      (t = this.regionUrlProvider) === null || t === void 0 || t.setServerReportedRegions({
        regionSettings: e,
        updatedAtInMs: Date.now(),
        maxAgeInMs: Lr
      });
    }).on(P.RequestSubscribedCodecRefresh, () => {
      for (const e of this.localParticipant.videoTrackPublications.values()) Ge(e.track) && e.track.refreshSubscribedCodecs();
    }), this.localParticipant && this.localParticipant.setupEngine(this.engine), this.e2eeManager && this.e2eeManager.setupEngine(this.engine), this.outgoingDataStreamManager && this.outgoingDataStreamManager.setupEngine(this.engine));
  }
  createRegionStrategy() {
    return {
      getNextUrl: e => p(this, void 0, void 0, function* () {
        return this.regionUrlProvider ? this.regionUrlProvider.getNextBestRegionUrl(e) : null;
      }),
      resetAttempts: () => {
        var e;
        return (e = this.regionUrlProvider) === null || e === void 0 ? void 0 : e.resetAttempts();
      }
    };
  }
  static getLocalDevices(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return be.getInstance().getDevices(e, t);
  }
  prepareConnection(e, t) {
    return p(this, void 0, void 0, function* () {
      if (this.state === K.Disconnected) {
        this.log.debug("prepareConnection to ".concat(e));
        try {
          if (_i(new URL(e)) && t) {
            this.regionUrlProvider = new G(e, t);
            const i = yield this.regionUrlProvider.getNextBestRegionUrl();
            i && this.state === K.Disconnected && (this.regionUrl = i, yield fetch(rn(i), {
              method: "HEAD"
            }), this.log.debug("prepared connection to ".concat(i)));
          } else yield fetch(rn(e), {
            method: "HEAD"
          });
        } catch (i) {
          this.log.warn("could not prepare connection", {
            error: i
          });
        }
      }
    });
  }
  getParticipantByIdentity(e) {
    return this.localParticipant.identity === e ? this.localParticipant : this.remoteParticipants.get(e);
  }
  clearConnectionFutures() {
    this.connectFuture = void 0;
  }
  simulateScenario(e, t) {
    return p(this, void 0, void 0, function* () {
      let i = () => p(this, void 0, void 0, function* () {}),
        s;
      switch (e) {
        case "signal-reconnect":
          const r = typeof t == "number" ? t : 0;
          yield this.engine.client.handleOnClose("simulate disconnect", void 0, r);
          break;
        case "fail-on-v1-path":
          this.engine.failNextV1Path();
          break;
        case "speaker":
          s = new it({
            scenario: {
              case: "speakerUpdate",
              value: 3
            }
          });
          break;
        case "node-failure":
          s = new it({
            scenario: {
              case: "nodeFailure",
              value: !0
            }
          });
          break;
        case "server-leave":
          s = new it({
            scenario: {
              case: "serverLeave",
              value: !0
            }
          });
          break;
        case "migration":
          s = new it({
            scenario: {
              case: "migration",
              value: !0
            }
          });
          break;
        case "resume-reconnect":
          this.engine.failNext(), yield this.engine.client.handleOnClose("simulate resume-disconnect");
          break;
        case "disconnect-signal-on-resume":
          i = () => p(this, void 0, void 0, function* () {
            yield this.engine.client.handleOnClose("simulate resume-disconnect");
          }), s = new it({
            scenario: {
              case: "disconnectSignalOnResume",
              value: !0
            }
          });
          break;
        case "disconnect-signal-on-resume-no-messages":
          i = () => p(this, void 0, void 0, function* () {
            yield this.engine.client.handleOnClose("simulate resume-disconnect");
          }), s = new it({
            scenario: {
              case: "disconnectSignalOnResumeNoMessages",
              value: !0
            }
          });
          break;
        case "full-reconnect":
          this.engine.fullReconnectOnNext = !0, yield this.engine.client.handleOnClose("simulate full-reconnect");
          break;
        case "force-tcp":
        case "force-tls":
          s = new it({
            scenario: {
              case: "switchCandidateProtocol",
              value: e === "force-tls" ? 2 : 1
            }
          }), i = () => p(this, void 0, void 0, function* () {
            const a = this.engine.client.onLeave;
            a && a(new as({
              reason: ve.CLIENT_INITIATED,
              action: ui.RECONNECT
            }));
          });
          break;
        case "subscriber-bandwidth":
          if (t === void 0 || typeof t != "number") throw new Error("subscriber-bandwidth requires a number as argument");
          s = new it({
            scenario: {
              case: "subscriberBandwidth",
              value: et(t)
            }
          });
          break;
        case "leave-full-reconnect":
          s = new it({
            scenario: {
              case: "leaveRequestFullReconnect",
              value: !0
            }
          });
      }
      s && (yield this.engine.client.sendSimulateScenario(s), yield i());
    });
  }
  acquireDummyAudioElement() {
    Tn || (Tn = Hg());
    const e = Tn;
    if (this.releaseDummyAudioElement) return e.element;
    e.refCount += 1;
    const t = () => {
      e.element.srcObject = document.hidden ? null : e.stream, document.hidden || (this.log.debug("page visible again, triggering startAudio to resume playback and update playback status"), this.startAudio().catch(i => this.log.warn("Could not restart audio on page becoming visible", Object.assign(Object.assign({}, this.logContext), {
        error: i
      }))));
    };
    return document.addEventListener("visibilitychange", t), this.releaseDummyAudioElement = () => {
      this.releaseDummyAudioElement = void 0, document.removeEventListener("visibilitychange", t), e.refCount -= 1, !(e.refCount > 0) && (e.element.srcObject = null, e.element.remove(), Tn = void 0, fo(e.track).catch(i => this.log.warn("Could not release the dummy audio element track", Object.assign(Object.assign({}, this.logContext), {
        error: i
      }))));
    }, e.element;
  }
  acquireEmptyAudioStreamTrack() {
    const e = al();
    return this.acquiredEmptyAudioTracks.add(e), e;
  }
  releaseAcquiredEmptyAudioTrack(e) {
    this.acquiredEmptyAudioTracks.delete(e) && fo(e).catch(t => this.log.warn("Could not release empty audio stream track", Object.assign(Object.assign({}, this.logContext), {
      error: t
    })));
  }
  releaseAcquiredEmptyAudioTracks() {
    for (const e of this.acquiredEmptyAudioTracks) this.releaseAcquiredEmptyAudioTrack(e);
  }
  get canPlaybackAudio() {
    return this.audioEnabled;
  }
  get canPlaybackVideo() {
    return !this.isVideoPlaybackBlocked;
  }
  getActiveDevice(e) {
    return this.localParticipant.activeDeviceMap.get(e);
  }
  switchActiveDevice(e, t) {
    return p(this, arguments, void 0, function (i, s) {
      var r = this;
      let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
      return function* () {
        var o, c, d, l, u, h, m;
        let g = !0,
          f = !1;
        const y = a ? {
          exact: s
        } : s;
        if (i === "audioinput") {
          f = r.localParticipant.audioTrackPublications.size === 0;
          const k = (o = r.getActiveDevice(i)) !== null && o !== void 0 ? o : r.options.audioCaptureDefaults.deviceId;
          r.options.audioCaptureDefaults.deviceId = y;
          const S = Array.from(r.localParticipant.audioTrackPublications.values()).filter(b => b.source === E.Source.Microphone);
          try {
            g = (yield Promise.all(S.map(b => {
              var T;
              return (T = b.audioTrack) === null || T === void 0 ? void 0 : T.setDeviceId(y);
            }))).every(b => b === !0);
          } catch (b) {
            throw r.options.audioCaptureDefaults.deviceId = k, b;
          }
          const R = S.some(b => {
            var T, C;
            return (C = (T = b.track) === null || T === void 0 ? void 0 : T.isMuted) !== null && C !== void 0 ? C : !1;
          });
          g && R && (f = !0);
        } else if (i === "videoinput") {
          f = r.localParticipant.videoTrackPublications.size === 0;
          const k = (c = r.getActiveDevice(i)) !== null && c !== void 0 ? c : r.options.videoCaptureDefaults.deviceId;
          r.options.videoCaptureDefaults.deviceId = y;
          const S = Array.from(r.localParticipant.videoTrackPublications.values()).filter(b => b.source === E.Source.Camera);
          try {
            g = (yield Promise.all(S.map(b => {
              var T;
              return (T = b.videoTrack) === null || T === void 0 ? void 0 : T.setDeviceId(y);
            }))).every(b => b === !0);
          } catch (b) {
            throw r.options.videoCaptureDefaults.deviceId = k, b;
          }
          const R = S.some(b => {
            var T, C;
            return (C = (T = b.track) === null || T === void 0 ? void 0 : T.isMuted) !== null && C !== void 0 ? C : !1;
          });
          g && R && (f = !0);
        } else if (i === "audiooutput") {
          if (f = !0, !wr() && !r.options.webAudioMix || r.options.webAudioMix && r.audioContext && !("setSinkId" in r.audioContext)) throw new Error("cannot switch audio output, the current browser does not support it");
          r.options.webAudioMix && (s = (d = yield be.getInstance().normalizeDeviceId("audiooutput", s)) !== null && d !== void 0 ? d : ""), (l = (m = r.options).audioOutput) !== null && l !== void 0 || (m.audioOutput = {});
          const k = (u = r.getActiveDevice(i)) !== null && u !== void 0 ? u : r.options.audioOutput.deviceId;
          r.options.audioOutput.deviceId = s;
          try {
            r.options.webAudioMix && ((h = r.audioContext) === null || h === void 0 || h.setSinkId(s)), yield Promise.all(Array.from(r.remoteParticipants.values()).map(S => S.setAudioOutput({
              deviceId: s
            })));
          } catch (S) {
            throw r.options.audioOutput.deviceId = k, S;
          }
        }
        return f && (r.localParticipant.activeDeviceMap.set(i, s), r.emit(w.ActiveDeviceChanged, i, s)), g;
      }();
    });
  }
  setupLocalParticipantEvents() {
    this.localParticipant.on(A.ParticipantMetadataChanged, this.onLocalParticipantMetadataChanged).on(A.ParticipantNameChanged, this.onLocalParticipantNameChanged).on(A.AttributesChanged, this.onLocalAttributesChanged).on(A.TrackMuted, this.onLocalTrackMuted).on(A.TrackUnmuted, this.onLocalTrackUnmuted).on(A.LocalTrackPublished, this.onLocalTrackPublished).on(A.LocalTrackUnpublished, this.onLocalTrackUnpublished).on(A.ConnectionQualityChanged, this.onLocalConnectionQualityChanged).on(A.MediaDevicesError, this.onMediaDevicesError).on(A.AudioStreamAcquired, this.startAudio).on(A.ChatMessage, this.onLocalChatMessageSent).on(A.ParticipantPermissionsChanged, this.onLocalParticipantPermissionsChanged);
  }
  recreateEngine(e) {
    const t = this.engine;
    e && t && !t.client.isDisconnected ? t.client.sendLeave().finally(() => t.close()) : t?.close(), this.engine = void 0, this.isResuming = !1, this.remoteParticipants.clear(), this.sidToIdentity.clear(), this.bufferedEvents = [], this.maybeCreateEngine();
  }
  onTrackAdded(e, t, i) {
    var s, r;
    if ([K.Connecting, K.Reconnecting].includes(this.state)) {
      const m = vo(e, t);
      this.log.debug("deferring on track for later", {
        mediaTrackId: e.id,
        mediaStreamId: t.id,
        tracksInStream: t.getTracks().map(y => y.id)
      });
      const g = () => {
          f(), this.onTrackAdded(e, t, i);
        },
        f = () => {
          if (this.off(w.Reconnected, g), this.off(w.Connected, g), this.off(w.Disconnected, f), m) {
            const y = this.pendingTrackAddedCallbacks.get(m);
            y?.delete(f), y?.size === 0 && this.pendingTrackAddedCallbacks.delete(m);
          }
        };
      if (this.once(w.Reconnected, g), this.once(w.Connected, g), this.once(w.Disconnected, f), m) {
        const y = (s = this.pendingTrackAddedCallbacks.get(m)) !== null && s !== void 0 ? s : new Set();
        y.add(f), this.pendingTrackAddedCallbacks.set(m, y);
      }
      return;
    }
    if (this.state === K.Disconnected) {
      this.log.warn("skipping incoming track after Room disconnected");
      return;
    }
    if (e.readyState === "ended") {
      this.log.debug("skipping incoming track as it already ended");
      return;
    }
    const a = el(t.id),
      o = a[0],
      c = a[1];
    let d = (r = vo(e, t)) !== null && r !== void 0 ? r : e.id;
    if (o === this.localParticipant.sid) {
      this.log.warn("tried to create RemoteParticipant for local participant");
      return;
    }
    const l = Array.from(this.remoteParticipants.values()).find(m => m.sid === o);
    if (!l) {
      o.startsWith("PA") && this.log.error("Tried to add a track for a participant, that's not present. Sid: ".concat(o));
      return;
    }
    if (!d.startsWith("TR")) {
      const m = this.engine.getTrackIdForReceiver(i);
      if (!m) {
        this.log.error("Tried to add a track whose 'sid' could not be found for a participant, that's not present. Sid: ".concat(o));
        return;
      }
      d = m;
    }
    d.startsWith("TR") || this.log.warn("Tried to add a track whose 'sid' could not be determined for a participant, that's not present. Sid: ".concat(o, ", streamId: ").concat(c, ", trackId: ").concat(d), {
      remoteParticipantID: o,
      streamId: c,
      trackId: d
    });
    let u;
    this.options.adaptiveStream && (typeof this.options.adaptiveStream == "object" ? u = this.options.adaptiveStream : u = {});
    const h = l.addSubscribedMediaTrack(e, d, t, i, u);
    h?.isEncrypted && !this.e2eeManager && this.emit(w.EncryptionError, new Error("Encrypted ".concat(h.source, " track received from participant ").concat(l.sid, ", but room does not have encryption enabled!")));
  }
  cancelPendingTrackAdded(e) {
    var t;
    (t = this.pendingTrackAddedCallbacks.get(e)) === null || t === void 0 || t.forEach(i => i());
  }
  handleLocalTrackSubscribed(e) {
    const t = () => this.localParticipant.getTrackPublications().find(c => c.trackSid === e),
      i = t();
    if (i) {
      this.emitLocalTrackSubscribed(i);
      return;
    }
    this.log.debug("deferring LocalTrackSubscribed, publication not yet available", {
      subscribedSid: e
    });
    const s = 1e4;
    let r;
    const a = c => {
        c.trackSid === e && (o(), this.emitLocalTrackSubscribed(c));
      },
      o = () => {
        clearTimeout(r), this.localParticipant.off(A.LocalTrackPublished, a), this.off(w.Disconnected, o);
      };
    this.localParticipant.on(A.LocalTrackPublished, a), this.once(w.Disconnected, o), r = setTimeout(() => {
      o();
      const c = t();
      c ? this.emitLocalTrackSubscribed(c) : this.log.warn("could not find local track publication for LocalTrackSubscribed event after timeout", {
        subscribedSid: e
      });
    }, s);
  }
  emitLocalTrackSubscribed(e) {
    this.localParticipant.emit(A.LocalTrackSubscribed, e), this.emitWhenConnected(w.LocalTrackSubscribed, e, this.localParticipant);
  }
  handleDisconnect() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0,
      t = arguments.length > 1 ? arguments[1] : void 0;
    var i, s, r;
    if (this.clearConnectionReconcile(), this.isResuming = !1, this.bufferedEvents = [], this.transcriptionReceivedTimes.clear(), this.incomingDataStreamManager.clearControllers(), this.incomingDataTrackManager.reset(), this.outgoingDataTrackManager.reset(), this.state !== K.Disconnected) {
      this.regionUrl = void 0, this.regionUrlProvider && this.regionUrlProvider.notifyDisconnected();
      try {
        const a = e ? [] : Array.from(this.localParticipant.audioTrackPublications.values()).map(o => o.track).filter(nt);
        this.remoteParticipants.forEach(o => {
          o.trackPublications.forEach(c => {
            o.unpublishTrack(c.trackSid);
          });
        }), this.localParticipant.trackPublications.forEach(o => {
          var c, d, l;
          o.track && this.localParticipant.unpublishTrack(o.track, e), e ? ((c = o.track) === null || c === void 0 || c.detach(), (d = o.track) === null || d === void 0 || d.stop()) : (l = o.track) === null || l === void 0 || l.stopMonitor();
        }), this.localParticipant.off(A.ParticipantMetadataChanged, this.onLocalParticipantMetadataChanged).off(A.ParticipantNameChanged, this.onLocalParticipantNameChanged).off(A.AttributesChanged, this.onLocalAttributesChanged).off(A.TrackMuted, this.onLocalTrackMuted).off(A.TrackUnmuted, this.onLocalTrackUnmuted).off(A.LocalTrackPublished, this.onLocalTrackPublished).off(A.LocalTrackUnpublished, this.onLocalTrackUnpublished).off(A.ConnectionQualityChanged, this.onLocalConnectionQualityChanged).off(A.MediaDevicesError, this.onMediaDevicesError).off(A.AudioStreamAcquired, this.startAudio).off(A.ChatMessage, this.onLocalChatMessageSent).off(A.ParticipantPermissionsChanged, this.onLocalParticipantPermissionsChanged), this.localParticipant.trackPublications.clear(), this.localParticipant.videoTrackPublications.clear(), this.localParticipant.audioTrackPublications.clear(), this.remoteParticipants.clear(), this.sidToIdentity.clear(), this.activeSpeakers = [], (i = this.releaseDummyAudioElement) === null || i === void 0 || i.call(this), this.releaseAcquiredEmptyAudioTracks(), this.releaseAudioContext(a).catch(o => this.log.warn("Could not release audio context", Object.assign(Object.assign({}, this.logContext), {
          error: o
        }))), Oe() && (window.removeEventListener("beforeunload", this.onPageLeave), window.removeEventListener("pagehide", this.onPageLeave), window.removeEventListener("freeze", this.onPageLeave), (r = (s = navigator.mediaDevices) === null || s === void 0 ? void 0 : s.removeEventListener) === null || r === void 0 || r.call(s, "devicechange", this.handleDeviceChange));
      } finally {
        this.setAndEmitConnectionState(K.Disconnected), this.emit(w.Disconnected, t);
      }
    }
  }
  handleParticipantDisconnected(e, t, i) {
    this.remoteParticipants.delete(e), t && (this.incomingDataStreamManager.validateParticipantHasNoActiveDataStreams(e), this.incomingDataTrackManager.handleRemoteParticipantDisconnected(e), t.trackPublications.forEach(s => {
      t.unpublishTrack(s.trackSid, !0);
    }), this.emit(w.ParticipantDisconnected, t, i), t.setDisconnected(), this.rpcClientManager.handleParticipantDisconnected(t.identity));
  }
  selectDefaultDevices() {
    return p(this, void 0, void 0, function* () {
      var e, t, i;
      const s = be.getInstance().previousDevices,
        r = yield be.getInstance().getDevices(void 0, !1),
        a = Ee();
      if (a?.name === "Chrome" && a.os !== "iOS") for (let c of r) {
        const d = s.find(l => l.deviceId === c.deviceId);
        d && d.label !== "" && d.kind === c.kind && d.label !== c.label && this.getActiveDevice(c.kind) === "default" && this.emit(w.ActiveDeviceChanged, c.kind, c.deviceId);
      }
      const o = ["audiooutput", "audioinput", "videoinput"];
      for (let c of o) {
        const d = Lm(c),
          l = this.localParticipant.getTrackPublication(d);
        if (l && !((e = l.track) === null || e === void 0) && e.isUserProvided) continue;
        const u = r.filter(m => m.kind === c),
          h = this.getActiveDevice(c);
        if (h === ((t = s.filter(m => m.kind === c)[0]) === null || t === void 0 ? void 0 : t.deviceId) && u.length > 0 && ((i = u[0]) === null || i === void 0 ? void 0 : i.deviceId) !== h) {
          yield this.switchActiveDevice(c, u[0].deviceId);
          continue;
        }
        c === "audioinput" && !sn() || c === "videoinput" || u.length > 0 && !u.find(m => m.deviceId === this.getActiveDevice(c)) && (c !== "audiooutput" || !sn()) && (yield this.switchActiveDevice(c, u[0].deviceId));
      }
    });
  }
  acquireAudioContext() {
    return p(this, arguments, void 0, function () {
      var e = this;
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      return function* () {
        var i, s;
        const r = yield e.audioContextMutex.lock();
        try {
          if (e.audioContextReleased && !t) return;
          e.audioContextReleased = !1;
          const a = typeof e.options.webAudioMix != "boolean" ? e.options.webAudioMix.audioContext : void 0;
          if (a ? yield e.setRoomAudioContext(a, !1) : (!e.audioContext || e.audioContext.state === "closed") && (yield e.setRoomAudioContext((i = Xd()) !== null && i !== void 0 ? i : void 0, !0)), e.audioContext && e.audioContext.state === "suspended") try {
            yield Promise.race([e.audioContext.resume(), Ce(200)]);
          } catch (c) {
            e.log.warn("Could not resume audio context", {
              error: c
            });
          }
          const o = ((s = e.audioContext) === null || s === void 0 ? void 0 : s.state) === "running";
          o !== e.canPlaybackAudio && (e.audioEnabled = o, e.emit(w.AudioPlaybackStatusChanged, o));
        } finally {
          r();
        }
      }();
    });
  }
  setRoomAudioContext(e, t) {
    return p(this, void 0, void 0, function* () {
      const i = !!e && t;
      if (this.audioContext === e) {
        this.ownsAudioContext = i;
        return;
      }
      const s = this.ownsAudioContext ? this.audioContext : void 0;
      this.audioContext = e, this.ownsAudioContext = i;
      try {
        this.options.webAudioMix && (yield Promise.all(Array.from(this.remoteParticipants.values()).map(r => r.setAudioContext(e)))), yield this.localParticipant.setAudioContext(e);
      } catch (r) {
        this.log.warn("Could not move audio tracks to the new audio context", Object.assign(Object.assign({}, this.logContext), {
          error: r
        }));
      } finally {
        if (s && s.state !== "closed") try {
          yield s.close();
        } catch (r) {
          this.log.warn("Could not close audio context", Object.assign(Object.assign({}, this.logContext), {
            error: r
          }));
        }
      }
    });
  }
  releaseAudioContext() {
    return p(this, arguments, void 0, function () {
      var e = this;
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      return function* () {
        e.audioContextReleased = !0;
        const i = e.audioContext,
          s = yield e.audioContextMutex.lock();
        try {
          if (!e.audioContextReleased || e.audioContext !== i || !e.ownsAudioContext) return;
          try {
            yield Promise.all(t.map(r => r.setAudioContext(void 0)));
          } catch (r) {
            e.log.warn("Could not detach retained audio tracks from the audio context", Object.assign(Object.assign({}, e.logContext), {
              error: r
            }));
          }
          yield e.setRoomAudioContext(void 0, !1);
        } finally {
          s();
        }
      }();
    });
  }
  createParticipant(e, t) {
    var i;
    let s;
    return t ? s = $n.fromParticipantInfo(this.engine.client, t, {
      loggerContextCb: () => this.logContext,
      loggerName: this.options.loggerName
    }, this.incomingDataTrackManager) : s = new $n(this.engine.client, "", e, void 0, void 0, void 0, {
      loggerContextCb: () => this.logContext,
      loggerName: this.options.loggerName
    }), this.options.webAudioMix && s.setAudioContext(this.audioContext).catch(r => this.log.warn("Could not set audio context", Object.assign(Object.assign({}, this.logContext), {
      error: r
    }))), !((i = this.options.audioOutput) === null || i === void 0) && i.deviceId && s.setAudioOutput(this.options.audioOutput).catch(r => this.log.warn("Could not set audio output: ".concat(r.message))), s;
  }
  getOrCreateParticipant(e, t) {
    if (this.remoteParticipants.has(e)) {
      const s = this.remoteParticipants.get(e);
      return t && s.updateInfo(t) && this.sidToIdentity.set(t.sid, t.identity), s;
    }
    const i = this.createParticipant(e, t);
    return this.remoteParticipants.set(e, i), this.sidToIdentity.set(t.sid, t.identity), this.emitWhenConnected(w.ParticipantConnected, i), i.on(A.TrackPublished, s => {
      this.emitWhenConnected(w.TrackPublished, s, i);
    }).on(A.TrackSubscribed, (s, r) => {
      s.kind === E.Kind.Audio ? (s.on(I.AudioPlaybackStarted, this.handleAudioPlaybackStarted), s.on(I.AudioPlaybackFailed, this.handleAudioPlaybackFailed)) : s.kind === E.Kind.Video && (s.on(I.VideoPlaybackFailed, this.handleVideoPlaybackFailed), s.on(I.VideoPlaybackStarted, this.handleVideoPlaybackStarted)), this.emitWhenConnected(w.TrackSubscribed, s, r, i);
    }).on(A.TrackUnpublished, s => {
      this.cancelPendingTrackAdded(s.trackSid), this.emit(w.TrackUnpublished, s, i);
    }).on(A.TrackUnsubscribed, (s, r) => {
      this.emit(w.TrackUnsubscribed, s, r, i);
    }).on(A.TrackMuted, s => {
      this.emitWhenConnected(w.TrackMuted, s, i);
    }).on(A.TrackUnmuted, s => {
      this.emitWhenConnected(w.TrackUnmuted, s, i);
    }).on(A.ParticipantMetadataChanged, s => {
      this.emitWhenConnected(w.ParticipantMetadataChanged, s, i);
    }).on(A.ParticipantNameChanged, s => {
      this.emitWhenConnected(w.ParticipantNameChanged, s, i);
    }).on(A.AttributesChanged, s => {
      this.emitWhenConnected(w.ParticipantAttributesChanged, s, i);
    }).on(A.ConnectionQualityChanged, s => {
      this.emitWhenConnected(w.ConnectionQualityChanged, s, i);
    }).on(A.ParticipantPermissionsChanged, s => {
      this.emitWhenConnected(w.ParticipantPermissionsChanged, s, i);
    }).on(A.TrackSubscriptionStatusChanged, (s, r) => {
      this.emitWhenConnected(w.TrackSubscriptionStatusChanged, s, r, i);
    }).on(A.TrackSubscriptionFailed, (s, r) => {
      this.emit(w.TrackSubscriptionFailed, s, i, r);
    }).on(A.TrackSubscriptionPermissionChanged, (s, r) => {
      this.emitWhenConnected(w.TrackSubscriptionPermissionChanged, s, r, i);
    }).on(A.Active, () => {
      this.emitWhenConnected(w.ParticipantActive, i), i.kind === Xi.AGENT && this.localParticipant.setActiveAgent(i);
    }), t && i.updateInfo(t), i;
  }
  sendSyncState() {
    const e = Array.from(this.remoteParticipants.values()).reduce((s, r) => (s.push(...r.getTrackPublications()), s), []),
      t = this.localParticipant.getTrackPublications(),
      i = this.outgoingDataTrackManager.queryPublished();
    this.engine.sendSyncState(e, t, i);
  }
  updateSubscriptions() {
    for (const e of this.remoteParticipants.values()) for (const t of e.videoTrackPublications.values()) t.isSubscribed && lp(t) && t.emitTrackUpdate();
  }
  getRemoteParticipantBySid(e) {
    const t = this.sidToIdentity.get(e);
    if (t) return this.remoteParticipants.get(t);
  }
  getClientInfoCapabilities(e) {
    var t;
    const i = [];
    return (on((t = e.frameMetadata) !== null && t !== void 0 ? t : e.packetTrailer) || this.e2eeManager) && i.push(Zi.CAP_PACKET_TRAILER), bi() && i.push(Zi.CAP_COMPRESSION_DEFLATE_RAW), i;
  }
  registerRpcDataStreamHandler() {
    this.incomingDataStreamManager.registerTextStreamHandler(Ul, (e, t) => p(this, [e, t], void 0, function (i, s) {
      var r = this;
      let a = s.identity;
      return function* () {
        var o;
        const c = (o = i.info.attributes) !== null && o !== void 0 ? o : {};
        yield r.rpcServerManager.handleIncomingDataStream(i, a, c);
      }();
    })), this.incomingDataStreamManager.registerTextStreamHandler(Fl, (e, t) => p(this, [e, t], void 0, function (i, s) {
      var r = this;
      let a = s.identity;
      return function* () {
        var o;
        const c = (o = i.info.attributes) !== null && o !== void 0 ? o : {};
        yield r.rpcClientManager.handleIncomingDataStream(i, a, c);
      }();
    }));
  }
  setStatsLogging(e) {
    e ? this.statsLogInterval || (this.statsLogInterval = Y.setInterval(() => {
      this.logWebRTCStats();
    }, Vg)) : this.statsLogInterval && (Y.clearInterval(this.statsLogInterval), this.statsLogInterval = void 0);
  }
  registerConnectionReconcile() {
    this.clearConnectionReconcile();
    let e = 0;
    this.connectionReconcileInterval = Y.setInterval(() => {
      !this.engine || this.engine.isClosed || !this.engine.verifyTransport() ? (e++, this.log.warn("detected connection state mismatch", {
        numFailures: e,
        engine: this.engine ? {
          closed: this.engine.isClosed,
          transportsConnectedOrConnecting: this.engine.verifyTransport()
        } : void 0
      }), e >= 3 && (this.clearConnectionReconcile(), this.engine && !this.engine.isClosed ? (this.log.warn("detected connection state mismatch, attempting full reconnect"), this.engine.reconnect()) : (this.recreateEngine(), this.handleDisconnect(this.options.stopLocalTrackOnUnpublish, ve.STATE_MISMATCH)))) : e = 0;
    }, jg);
  }
  clearConnectionReconcile() {
    this.connectionReconcileInterval && Y.clearInterval(this.connectionReconcileInterval);
  }
  setAndEmitConnectionState(e) {
    return e === this.state ? !1 : (this.log.info("connection state changed: ".concat(this.state, " -> ").concat(e)), this.state = e, this.incomingDataStreamManager.setConnected(e === K.Connected), this.setStatsLogging(e === K.Connected), this.emit(w.ConnectionStateChanged, this.state), !0);
  }
  emitBufferedEvents() {
    this.bufferedEvents.forEach(e => {
      let t = x(e, 2),
        i = t[0],
        s = t[1];
      this.emit(i, ...s);
    }), this.bufferedEvents = [];
  }
  emitWhenConnected(e) {
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
    if (this.state === K.Reconnecting || this.isResuming || !this.engine || this.engine.pendingReconnect) this.bufferedEvents.push([e, i]);else if (this.state === K.Connected) return this.emit(e, ...i);
    return !1;
  }
  simulateParticipants(e) {
    return p(this, void 0, void 0, function* () {
      var t, i, s, r;
      const a = Object.assign({
          audio: !0,
          video: !0,
          useRealTracks: !1
        }, e.publish),
        o = Object.assign({
          count: 9,
          audio: !1,
          video: !0,
          aspectRatios: [1.66, 1.7, 1.3]
        }, e.participants);
      if (this.handleDisconnect(), this.roomInfo = new Zn({
        sid: "RM_SIMULATED",
        name: "simulated-room",
        emptyTimeout: 0,
        maxParticipants: 0,
        creationTime: ie.parse(new Date().getTime()),
        metadata: "",
        numParticipants: 1,
        numPublishers: 1,
        turnPassword: "",
        enabledCodecs: [],
        activeRecording: !1
      }), this.localParticipant.updateInfo(new Jt({
        identity: "simulated-local",
        name: "local-name"
      })), this.setupLocalParticipantEvents(), this.emit(w.SignalConnected), this.emit(w.Connected), this.setAndEmitConnectionState(K.Connected), a.video) {
        const c = new Nr(E.Kind.Video, new ci({
          source: me.CAMERA,
          sid: Math.floor(Math.random() * 1e4).toString(),
          type: Qe.AUDIO,
          name: "video-dummy"
        }), new Gt(a.useRealTracks && !((t = window.navigator.mediaDevices) === null || t === void 0) && t.getUserMedia ? (yield window.navigator.mediaDevices.getUserMedia({
          video: !0
        })).getVideoTracks()[0] : po(160 * ((i = o.aspectRatios[0]) !== null && i !== void 0 ? i : 1), 160, !0, !0), void 0, !1, {
          loggerName: this.options.loggerName,
          loggerContextCb: () => this.logContext
        }), {
          loggerName: this.options.loggerName,
          loggerContextCb: () => this.logContext
        });
        this.localParticipant.addTrackPublication(c), this.localParticipant.emit(A.LocalTrackPublished, c);
      }
      if (a.audio) {
        const c = new Nr(E.Kind.Audio, new ci({
          source: me.MICROPHONE,
          sid: Math.floor(Math.random() * 1e4).toString(),
          type: Qe.AUDIO
        }), new Ri(a.useRealTracks && !((s = navigator.mediaDevices) === null || s === void 0) && s.getUserMedia ? (yield navigator.mediaDevices.getUserMedia({
          audio: !0
        })).getAudioTracks()[0] : this.acquireEmptyAudioStreamTrack(), void 0, !1, this.audioContext, {
          loggerName: this.options.loggerName,
          loggerContextCb: () => this.logContext
        }), {
          loggerName: this.options.loggerName,
          loggerContextCb: () => this.logContext
        });
        this.localParticipant.addTrackPublication(c), this.localParticipant.emit(A.LocalTrackPublished, c);
      }
      for (let c = 0; c < o.count - 1; c += 1) {
        let d = new Jt({
          sid: Math.floor(Math.random() * 1e4).toString(),
          identity: "simulated-".concat(c),
          state: li.ACTIVE,
          tracks: [],
          joinedAt: ie.parse(Date.now())
        });
        const l = this.getOrCreateParticipant(d.identity, d);
        if (o.video) {
          const u = po(160 * ((r = o.aspectRatios[c % o.aspectRatios.length]) !== null && r !== void 0 ? r : 1), 160, !1, !0),
            h = new ci({
              source: me.CAMERA,
              sid: Math.floor(Math.random() * 1e4).toString(),
              type: Qe.AUDIO
            });
          l.addSubscribedMediaTrack(u, h.sid, new MediaStream([u]), new RTCRtpReceiver()), d.tracks = [...d.tracks, h];
        }
        if (o.audio) {
          const u = this.acquireEmptyAudioStreamTrack(),
            h = new ci({
              source: me.MICROPHONE,
              sid: Math.floor(Math.random() * 1e4).toString(),
              type: Qe.AUDIO
            });
          l.addSubscribedMediaTrack(u, h.sid, new MediaStream([u]), new RTCRtpReceiver()), d.tracks = [...d.tracks, h];
        }
        l.updateInfo(d);
      }
    });
  }
  emit(e) {
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
    if (e !== w.ActiveSpeakersChanged && e !== w.TranscriptionReceived) {
      const r = jl(i).filter(a => a !== void 0);
      (e === w.TrackSubscribed || e === w.TrackUnsubscribed) && this.log.trace("subscribe trace: ".concat(e), {
        event: e,
        args: r
      }), this.log.debug("room event ".concat(e), {
        event: e,
        args: r
      });
    }
    return super.emit(e, ...i);
  }
}
Mt.cleanupRegistry = typeof FinalizationRegistry < "u" && typeof WeakRef < "u" && new FinalizationRegistry(n => {
  n();
});
function jl(n) {
  return n.map(e => {
    if (e) return Array.isArray(e) ? jl(e) : typeof e == "object" ? "logContext" in e ? e.logContext : void 0 : e;
  });
}
var Je;
(function (n) {
  n[n.IDLE = 0] = "IDLE", n[n.RUNNING = 1] = "RUNNING", n[n.SKIPPED = 2] = "SKIPPED", n[n.SUCCESS = 3] = "SUCCESS", n[n.FAILED = 4] = "FAILED";
})(Je || (Je = {}));
class Lt extends Ue.EventEmitter {
  constructor(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    super(), this.status = Je.IDLE, this.logs = [], this.options = {}, this.url = e, this.token = t, this.name = this.constructor.name, this.room = new Mt(i.roomOptions), this.connectOptions = i.connectOptions, this.options = i;
  }
  run(e) {
    return p(this, void 0, void 0, function* () {
      if (this.status !== Je.IDLE) throw Error("check is running already");
      this.setStatus(Je.RUNNING);
      try {
        yield this.perform();
      } catch (t) {
        t instanceof Error && (this.options.errorsAsWarnings ? this.appendWarning(t.message) : this.appendError(t.message));
      }
      return yield this.disconnect(), yield new Promise(t => setTimeout(t, 500)), this.status !== Je.SKIPPED && this.setStatus(this.isSuccess() ? Je.SUCCESS : Je.FAILED), e && e(), this.getInfo();
    });
  }
  isSuccess() {
    return !this.logs.some(e => e.level === "error");
  }
  connect(e) {
    return p(this, void 0, void 0, function* () {
      return this.room.state === K.Connected ? this.room : (e || (e = this.url), yield this.room.connect(e, this.token, this.connectOptions), this.room);
    });
  }
  disconnect() {
    return p(this, void 0, void 0, function* () {
      this.room && this.room.state !== K.Disconnected && (yield this.room.disconnect(), yield new Promise(e => setTimeout(e, 500)));
    });
  }
  skip() {
    this.setStatus(Je.SKIPPED);
  }
  switchProtocol(e) {
    return p(this, void 0, void 0, function* () {
      let t = !1,
        i = !1;
      if (this.room.on(w.Reconnecting, () => {
        t = !0;
      }), this.room.once(w.Reconnected, () => {
        i = !0;
      }), this.room.simulateScenario("force-".concat(e)), yield new Promise(r => setTimeout(r, 1e3)), !t) return;
      const s = Date.now() + 1e4;
      for (; Date.now() < s;) {
        if (i) return;
        yield Ce(100);
      }
      throw new Error("Could not reconnect using ".concat(e, " protocol after 10 seconds"));
    });
  }
  appendMessage(e) {
    this.logs.push({
      level: "info",
      message: e
    }), this.emit("update", this.getInfo());
  }
  appendWarning(e) {
    this.logs.push({
      level: "warning",
      message: e
    }), this.emit("update", this.getInfo());
  }
  appendError(e) {
    this.logs.push({
      level: "error",
      message: e
    }), this.emit("update", this.getInfo());
  }
  setStatus(e) {
    this.status = e, this.emit("update", this.getInfo());
  }
  get engine() {
    var e;
    return (e = this.room) === null || e === void 0 ? void 0 : e.engine;
  }
  getInfo() {
    return {
      logs: this.logs,
      name: this.name,
      status: this.status,
      description: this.description
    };
  }
}
class Kg extends Lt {
  get description() {
    return "Cloud regions";
  }
  perform() {
    return p(this, void 0, void 0, function* () {
      const e = new G(this.url, this.token);
      if (!e.isCloud()) {
        this.skip();
        return;
      }
      const t = [],
        i = new Set();
      for (let r = 0; r < 3; r++) {
        const a = yield e.getNextBestRegionUrl();
        if (!a) break;
        if (i.has(a)) continue;
        i.add(a);
        const o = yield this.checkCloudRegion(a);
        this.appendMessage("".concat(o.region, " RTT: ").concat(o.rtt, "ms, duration: ").concat(o.duration, "ms")), t.push(o);
      }
      t.sort((r, a) => (r.duration - a.duration) * .5 + (r.rtt - a.rtt) * .5);
      const s = t[0];
      this.bestStats = s, this.appendMessage("best Cloud region: ".concat(s.region));
    });
  }
  getInfo() {
    const e = super.getInfo();
    return e.data = this.bestStats, e;
  }
  checkCloudRegion(e) {
    return p(this, void 0, void 0, function* () {
      var t, i;
      yield this.connect(e), this.options.protocol === "tcp" && (yield this.switchProtocol("tcp"));
      const s = (t = this.room.serverInfo) === null || t === void 0 ? void 0 : t.region;
      if (!s) throw new Error("Region not found");
      const r = yield this.room.localParticipant.streamText({
          topic: "test"
        }),
        a = 1e3,
        c = 1e6 / a,
        d = "A".repeat(a),
        l = Date.now();
      for (let g = 0; g < c; g++) yield r.write(d);
      yield r.close();
      const u = Date.now(),
        h = yield (i = this.room.engine.pcManager) === null || i === void 0 ? void 0 : i.publisher.getStats(),
        m = {
          region: s,
          rtt: 1e4,
          duration: u - l
        };
      return h?.forEach(g => {
        g.type === "candidate-pair" && g.nominated && (m.rtt = g.currentRoundTripTime * 1e3);
      }), yield this.disconnect(), m;
    });
  }
}
const $s = 1e4;
class Gg extends Lt {
  get description() {
    return "Connection via UDP vs TCP";
  }
  perform() {
    return p(this, void 0, void 0, function* () {
      const e = yield this.checkConnectionProtocol("udp"),
        t = yield this.checkConnectionProtocol("tcp");
      this.bestStats = e, e.qualityLimitationDurations.bandwidth - t.qualityLimitationDurations.bandwidth > .5 || (e.packetsLost - t.packetsLost) / e.packetsSent > .01 ? (this.appendMessage("best connection quality via tcp"), this.bestStats = t) : this.appendMessage("best connection quality via udp");
      const i = this.bestStats;
      this.appendMessage("upstream bitrate: ".concat((i.bitrateTotal / i.count / 1e3 / 1e3).toFixed(2), " mbps")), this.appendMessage("RTT: ".concat((i.rttTotal / i.count * 1e3).toFixed(2), " ms")), this.appendMessage("jitter: ".concat((i.jitterTotal / i.count * 1e3).toFixed(2), " ms")), i.packetsLost > 0 && this.appendWarning("packets lost: ".concat((i.packetsLost / i.packetsSent * 100).toFixed(2), "%")), i.qualityLimitationDurations.bandwidth > 1 && this.appendWarning("bandwidth limited ".concat((i.qualityLimitationDurations.bandwidth / ($s / 1e3) * 100).toFixed(2), "%")), i.qualityLimitationDurations.cpu > 0 && this.appendWarning("cpu limited ".concat((i.qualityLimitationDurations.cpu / ($s / 1e3) * 100).toFixed(2), "%"));
    });
  }
  getInfo() {
    const e = super.getInfo();
    return e.data = this.bestStats, e;
  }
  checkConnectionProtocol(e) {
    return p(this, void 0, void 0, function* () {
      yield this.connect(), e === "tcp" ? yield this.switchProtocol("tcp") : yield this.switchProtocol("udp");
      const t = document.createElement("canvas");
      t.width = 1280, t.height = 720;
      const i = t.getContext("2d");
      if (!i) throw new Error("Could not get canvas context");
      let s = 0;
      const r = () => {
        s = (s + 1) % 360, i.fillStyle = "hsl(".concat(s, ", 100%, 50%)"), i.fillRect(0, 0, t.width, t.height), requestAnimationFrame(r);
      };
      r();
      const o = t.captureStream(30).getVideoTracks()[0],
        d = (yield this.room.localParticipant.publishTrack(o, {
          simulcast: !1,
          degradationPreference: "maintain-resolution",
          videoEncoding: {
            maxBitrate: 2e6
          }
        })).track,
        l = {
          protocol: e,
          packetsLost: 0,
          packetsSent: 0,
          qualityLimitationDurations: {},
          rttTotal: 0,
          jitterTotal: 0,
          bitrateTotal: 0,
          count: 0
        },
        u = setInterval(() => p(this, void 0, void 0, function* () {
          const h = yield d.getRTCStatsReport();
          h?.forEach(m => {
            m.type === "outbound-rtp" ? (l.packetsSent = m.packetsSent, l.qualityLimitationDurations = m.qualityLimitationDurations, l.bitrateTotal += m.targetBitrate, l.count++) : m.type === "remote-inbound-rtp" && (l.packetsLost = m.packetsLost, l.rttTotal += m.roundTripTime, l.jitterTotal += m.jitter);
          });
        }), 1e3);
      return yield new Promise(h => setTimeout(h, $s)), clearInterval(u), o.stop(), t.remove(), yield this.disconnect(), l;
    });
  }
}
class zg extends Lt {
  get description() {
    return "Can publish audio";
  }
  perform() {
    return p(this, void 0, void 0, function* () {
      var e;
      const t = yield this.connect(),
        i = yield Ng();
      if (yield $d(i, 1e3)) throw new Error("unable to detect audio from microphone");
      this.appendMessage("detected audio from microphone"), t.localParticipant.publishTrack(i), yield new Promise(o => setTimeout(o, 3e3));
      const r = yield (e = i.sender) === null || e === void 0 ? void 0 : e.getStats();
      if (!r) throw new Error("Could not get RTCStats");
      let a = 0;
      if (r.forEach(o => {
        o.type === "outbound-rtp" && (o.kind === "audio" || !o.kind && o.mediaType === "audio") && (a = o.packetsSent);
      }), a === 0) throw new Error("Could not determine packets are sent");
      this.appendMessage("published ".concat(a, " audio packets"));
    });
  }
}
class Jg extends Lt {
  get description() {
    return "Can publish video";
  }
  perform() {
    return p(this, void 0, void 0, function* () {
      var e;
      const t = yield this.connect(),
        i = yield Lg();
      yield this.checkForVideo(i.mediaStreamTrack), t.localParticipant.publishTrack(i), yield new Promise(a => setTimeout(a, 5e3));
      const s = yield (e = i.sender) === null || e === void 0 ? void 0 : e.getStats();
      if (!s) throw new Error("Could not get RTCStats");
      let r = 0;
      if (s.forEach(a => {
        a.type === "outbound-rtp" && (a.kind === "video" || !a.kind && a.mediaType === "video") && (r += a.packetsSent);
      }), r === 0) throw new Error("Could not determine packets are sent");
      this.appendMessage("published ".concat(r, " video packets"));
    });
  }
  checkForVideo(e) {
    return p(this, void 0, void 0, function* () {
      const t = new MediaStream();
      t.addTrack(e.clone());
      const i = document.createElement("video");
      i.srcObject = t, i.muted = !0, i.autoplay = !0, i.playsInline = !0, i.setAttribute("playsinline", "true"), document.body.appendChild(i), yield new Promise(s => {
        i.onplay = () => {
          setTimeout(() => {
            var r, a, o, c;
            const d = document.createElement("canvas"),
              l = e.getSettings(),
              u = (a = (r = l.width) !== null && r !== void 0 ? r : i.videoWidth) !== null && a !== void 0 ? a : 1280,
              h = (c = (o = l.height) !== null && o !== void 0 ? o : i.videoHeight) !== null && c !== void 0 ? c : 720;
            d.width = u, d.height = h;
            const m = d.getContext("2d");
            m.drawImage(i, 0, 0);
            const f = m.getImageData(0, 0, d.width, d.height).data;
            let y = !0;
            for (let k = 0; k < f.length; k += 4) if (f[k] !== 0 || f[k + 1] !== 0 || f[k + 2] !== 0) {
              y = !1;
              break;
            }
            y ? this.appendError("camera appears to be producing only black frames") : this.appendMessage("received video frames"), s();
          }, 1e3);
        }, i.play();
      }), t.getTracks().forEach(s => s.stop()), i.remove();
    });
  }
}
class Qg extends Lt {
  get description() {
    return "Resuming connection after interruption";
  }
  perform() {
    return p(this, void 0, void 0, function* () {
      var e;
      const t = yield this.connect();
      let i = !1,
        s = !1,
        r;
      const a = new Promise(d => {
          setTimeout(d, 5e3), r = d;
        }),
        o = () => {
          i = !0;
        };
      t.on(w.SignalReconnecting, o).on(w.Reconnecting, o).on(w.Reconnected, () => {
        s = !0, r(!0);
      }), (e = t.engine.client.ws) === null || e === void 0 || e.close();
      const c = t.engine.client.onClose;
      if (c && c(""), yield a, i) {
        if (!s || t.state !== K.Connected) throw this.appendWarning("reconnection is only possible in Redis-based configurations"), new Error("Not able to reconnect");
      } else throw new Error("Did not attempt to reconnect");
    });
  }
}
class Yg extends Lt {
  get description() {
    return "Can connect via TURN";
  }
  perform() {
    return p(this, void 0, void 0, function* () {
      var e, t, i;
      _i(new URL(this.url)) && (this.appendMessage("Using region specific url"), this.url = (e = yield new G(this.url, this.token).getNextBestRegionUrl()) !== null && e !== void 0 ? e : this.url);
      const s = new ba(),
        r = yield s.join(this.url, this.token, {
          autoSubscribe: !0,
          maxRetries: 0,
          e2eeEnabled: !1,
          websocketTimeout: 15e3
        }, void 0, !0);
      let a = !1,
        o = !1,
        c = !1;
      for (let d of r.iceServers) for (let l of d.urls) l.startsWith("turn:") ? (o = !0, c = !0) : l.startsWith("turns:") && (o = !0, c = !0, a = !0), l.startsWith("stun:") && (c = !0);
      c ? o && !a && this.appendWarning("TURN is configured server side, but TURN/TLS is unavailable.") : this.appendWarning("No STUN servers configured on server side."), yield s.close(), !((i = (t = this.connectOptions) === null || t === void 0 ? void 0 : t.rtcConfig) === null || i === void 0) && i.iceServers || o ? yield this.room.connect(this.url, this.token, {
        rtcConfig: {
          iceTransportPolicy: "relay"
        }
      }) : (this.appendWarning("No TURN servers configured."), this.skip(), yield new Promise(d => setTimeout(d, 0)));
    });
  }
}
class $g extends Lt {
  get description() {
    return "Establishing WebRTC connection";
  }
  perform() {
    return p(this, void 0, void 0, function* () {
      let e = !1,
        t = !1;
      this.room.on(w.SignalConnected, () => {
        var i;
        const s = this.room.engine.client.onTrickle;
        this.room.engine.client.onTrickle = (r, a) => {
          if (r.candidate) {
            const o = new RTCIceCandidate(r);
            let c = "".concat(o.protocol, " ").concat(o.address, ":").concat(o.port, " ").concat(o.type);
            o.address && (Xg(o.address) ? c += " (private)" : o.protocol === "tcp" && o.tcpType === "passive" ? (e = !0, c += " (passive)") : o.protocol === "udp" && (t = !0)), this.appendMessage(c);
          }
          s && s(r, a);
        }, !((i = this.room.engine.pcManager) === null || i === void 0) && i.subscriber && (this.room.engine.pcManager.subscriber.onIceCandidateError = r => {
          r instanceof RTCPeerConnectionIceErrorEvent && this.appendWarning("error with ICE candidate: ".concat(r.errorCode, " ").concat(r.errorText, " ").concat(r.url));
        });
      });
      try {
        yield this.connect(), W.info("now the room is connected");
      } catch (i) {
        throw this.appendWarning("ports need to be open on firewall in order to connect."), i;
      }
      e || this.appendWarning("Server is not configured for ICE/TCP"), t || this.appendWarning("No public IPv4 UDP candidates were found. Your server is likely not configured correctly");
    });
  }
}
function Xg(n) {
  const e = n.split(".");
  if (e.length === 4) {
    if (e[0] === "10") return !0;
    if (e[0] === "192" && e[1] === "168") return !0;
    if (e[0] === "172") {
      const t = parseInt(e[1], 10);
      if (t >= 16 && t <= 31) return !0;
    }
  }
  return !1;
}
class Zg extends Lt {
  get description() {
    return "Connecting to signal connection via WebSocket";
  }
  perform() {
    return p(this, void 0, void 0, function* () {
      var e, t, i;
      (this.url.startsWith("ws:") || this.url.startsWith("http:")) && this.appendWarning("Server is insecure, clients may block connections to it");
      let s = new ba(),
        r;
      try {
        r = yield s.join(this.url, this.token, {
          autoSubscribe: !0,
          maxRetries: 0,
          e2eeEnabled: !1,
          websocketTimeout: 15e3
        }, void 0, !0);
      } catch (a) {
        if (_i(new URL(this.url))) {
          this.appendMessage("Initial connection failed with error ".concat(a.message, ". Retrying with region fallback"));
          const c = yield new G(this.url, this.token).getNextBestRegionUrl();
          c && (r = yield s.join(c, this.token, {
            autoSubscribe: !0,
            maxRetries: 0,
            e2eeEnabled: !1,
            websocketTimeout: 15e3
          }, void 0, !0), this.appendMessage("Fallback to region worked. To avoid initial connections failing, ensure you're calling room.prepareConnection() ahead of time"));
        }
      }
      r ? (this.appendMessage("Connected to server, version ".concat(r.serverVersion, ".")), ((e = r.serverInfo) === null || e === void 0 ? void 0 : e.edition) === Qc.Cloud && !((t = r.serverInfo) === null || t === void 0) && t.region && this.appendMessage("LiveKit Cloud: ".concat((i = r.serverInfo) === null || i === void 0 ? void 0 : i.region))) : this.appendError("Websocket connection could not be established"), yield s.close();
    });
  }
}
class tb extends Ue.EventEmitter {
  constructor(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    super(), this.options = {}, this.checkResults = new Map(), this.url = e, this.token = t, this.options = i;
  }
  getNextCheckId() {
    const e = this.checkResults.size;
    return this.checkResults.set(e, {
      logs: [],
      status: Je.IDLE,
      name: "",
      description: ""
    }), e;
  }
  updateCheck(e, t) {
    this.checkResults.set(e, t), this.emit("checkUpdate", e, t);
  }
  isSuccess() {
    return Array.from(this.checkResults.values()).every(e => e.status !== Je.FAILED);
  }
  getResults() {
    return Array.from(this.checkResults.values());
  }
  createAndRunCheck(e) {
    return p(this, void 0, void 0, function* () {
      const t = this.getNextCheckId(),
        i = new e(this.url, this.token, this.options),
        s = a => {
          this.updateCheck(t, a);
        };
      i.on("update", s);
      const r = yield i.run();
      return i.off("update", s), r;
    });
  }
  checkWebsocket() {
    return p(this, void 0, void 0, function* () {
      return this.createAndRunCheck(Zg);
    });
  }
  checkWebRTC() {
    return p(this, void 0, void 0, function* () {
      return this.createAndRunCheck($g);
    });
  }
  checkTURN() {
    return p(this, void 0, void 0, function* () {
      return this.createAndRunCheck(Yg);
    });
  }
  checkReconnect() {
    return p(this, void 0, void 0, function* () {
      return this.createAndRunCheck(Qg);
    });
  }
  checkPublishAudio() {
    return p(this, void 0, void 0, function* () {
      return this.createAndRunCheck(zg);
    });
  }
  checkPublishVideo() {
    return p(this, void 0, void 0, function* () {
      return this.createAndRunCheck(Jg);
    });
  }
  checkConnectionProtocol() {
    return p(this, void 0, void 0, function* () {
      const e = yield this.createAndRunCheck(Gg);
      if (e.data && "protocol" in e.data) {
        const t = e.data;
        this.options.protocol = t.protocol;
      }
      return e;
    });
  }
  checkCloudRegion() {
    return p(this, void 0, void 0, function* () {
      return this.createAndRunCheck(Kg);
    });
  }
}
new TextEncoder();
new TextDecoder();
new TextDecoder("utf-8", {
  fatal: !0
});
class De extends Error {
  constructor(e, t) {
    var i;
    super(e, t), U(this, "code", "ERR_JOSE_GENERIC"), this.name = this.constructor.name, (i = Error.captureStackTrace) === null || i === void 0 || i.call(Error, this, this.constructor);
  }
}
U(De, "code", "ERR_JOSE_GENERIC");
class ev extends De {
  constructor(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "unspecified",
      s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unspecified";
    super(e, {
      cause: {
        claim: i,
        reason: s,
        payload: t
      }
    }), U(this, "code", "ERR_JWT_CLAIM_VALIDATION_FAILED"), U(this, "claim", void 0), U(this, "reason", void 0), U(this, "payload", void 0), this.claim = i, this.reason = s, this.payload = t;
  }
}
U(ev, "code", "ERR_JWT_CLAIM_VALIDATION_FAILED");
class tv extends De {
  constructor(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "unspecified",
      s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unspecified";
    super(e, {
      cause: {
        claim: i,
        reason: s,
        payload: t
      }
    }), U(this, "code", "ERR_JWT_EXPIRED"), U(this, "claim", void 0), U(this, "reason", void 0), U(this, "payload", void 0), this.claim = i, this.reason = s, this.payload = t;
  }
}
U(tv, "code", "ERR_JWT_EXPIRED");
class iv extends De {
  constructor() {
    super(...arguments), U(this, "code", "ERR_JOSE_ALG_NOT_ALLOWED");
  }
}
U(iv, "code", "ERR_JOSE_ALG_NOT_ALLOWED");
class nv extends De {
  constructor() {
    super(...arguments), U(this, "code", "ERR_JOSE_NOT_SUPPORTED");
  }
}
U(nv, "code", "ERR_JOSE_NOT_SUPPORTED");
class sv extends De {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "decryption operation failed",
      t = arguments.length > 1 ? arguments[1] : void 0;
    super(e, t), U(this, "code", "ERR_JWE_DECRYPTION_FAILED");
  }
}
U(sv, "code", "ERR_JWE_DECRYPTION_FAILED");
class rv extends De {
  constructor() {
    super(...arguments), U(this, "code", "ERR_JWE_INVALID");
  }
}
U(rv, "code", "ERR_JWE_INVALID");
class av extends De {
  constructor() {
    super(...arguments), U(this, "code", "ERR_JWS_INVALID");
  }
}
U(av, "code", "ERR_JWS_INVALID");
class ov extends De {
  constructor() {
    super(...arguments), U(this, "code", "ERR_JWT_INVALID");
  }
}
U(ov, "code", "ERR_JWT_INVALID");
class cv extends De {
  constructor() {
    super(...arguments), U(this, "code", "ERR_JWK_INVALID");
  }
}
U(cv, "code", "ERR_JWK_INVALID");
class dv extends De {
  constructor() {
    super(...arguments), U(this, "code", "ERR_JWKS_INVALID");
  }
}
U(dv, "code", "ERR_JWKS_INVALID");
class lv extends De {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "no applicable key found in the JSON Web Key Set",
      t = arguments.length > 1 ? arguments[1] : void 0;
    super(e, t), U(this, "code", "ERR_JWKS_NO_MATCHING_KEY");
  }
}
U(lv, "code", "ERR_JWKS_NO_MATCHING_KEY");
class uv extends De {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "multiple matching keys found in the JSON Web Key Set",
      t = arguments.length > 1 ? arguments[1] : void 0;
    super(e, t), U(this, Symbol.asyncIterator, Pu(function* () {})), U(this, "code", "ERR_JWKS_MULTIPLE_MATCHING_KEYS");
  }
}
U(uv, "code", "ERR_JWKS_MULTIPLE_MATCHING_KEYS");
class hv extends De {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "request timed out",
      t = arguments.length > 1 ? arguments[1] : void 0;
    super(e, t), U(this, "code", "ERR_JWKS_TIMEOUT");
  }
}
U(hv, "code", "ERR_JWKS_TIMEOUT");
class mv extends De {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "signature verification failed",
      t = arguments.length > 1 ? arguments[1] : void 0;
    super(e, t), U(this, "code", "ERR_JWS_SIGNATURE_VERIFICATION_FAILED");
  }
}
U(mv, "code", "ERR_JWS_SIGNATURE_VERIFICATION_FAILED");
let Sn = null,
  Xs = null;
async function Vl() {
  return Xs || (Xs = zt(() => import("./index-B7kxnIep.js"), [])), Xs;
}
async function pv() {
  return Sn || (Sn = (async () => {
    const [{
      loadRnnoise: n
    }, {
      default: e
    }, {
      default: t
    }] = await Promise.all([Vl(), zt(() => import("./rnnoise-tz8h1nBT.js"), []), zt(() => import("./rnnoise_simd-CdjJlcFK.js"), [])]);
    return n({
      url: e,
      simdUrl: t
    });
  })().catch(n => {
    throw Sn = null, n;
  })), Sn;
}
function fv() {
  if (typeof window > "u") return !1;
  const n = window.AudioContext;
  return !!(n && typeof WebAssembly < "u" && "audioWorklet" in n.prototype);
}
class gv {
  name = "rnnoise";
  processedTrack;
  context = null;
  source = null;
  node = null;
  async init(e) {
    const [{
        RnnoiseWorkletNode: t
      }, i, {
        default: s
      }] = await Promise.all([Vl(), pv(), zt(() => import("./workletProcessor-DvDPG0Ln.js"), [])]),
      r = new AudioContext({
        sampleRate: 48e3
      });
    await r.audioWorklet.addModule(s);
    const a = r.createMediaStreamSource(new MediaStream([e.track])),
      o = new t(r, {
        wasmBinary: i,
        maxChannels: 1
      }),
      c = r.createMediaStreamDestination();
    a.connect(o), o.connect(c), r.state === "suspended" && (await r.resume().catch(() => {})), this.context = r, this.source = a, this.node = o, this.processedTrack = c.stream.getAudioTracks()[0];
  }
  async restart(e) {
    await this.destroy(), await this.init(e);
  }
  async destroy() {
    try {
      this.source?.disconnect(), this.node?.disconnect(), this.node?.destroy();
    } catch {}
    this.processedTrack?.stop(), this.processedTrack = void 0, this.source = null, this.node = null;
    const e = this.context;
    this.context = null, e && (await e.close().catch(() => {}));
  }
}
const dc = "taskham",
  lc = "hand",
  vv = "caption",
  Zs = "lang",
  Wl = "taskham:meetCaptions";
function bv() {
  try {
    return window.localStorage.getItem(Wl) !== "0";
  } catch {
    return !0;
  }
}
const uc = {
  state: "idle",
  participants: [],
  local: null,
  activeSpeaker: "",
  screenShareIdentity: "",
  micOn: !1,
  camOn: !1,
  screenOn: !1,
  blurOn: !1,
  backgroundImage: "",
  blurSupported: !1,
  handUp: !1,
  audioOnly: !1,
  audioBlocked: !1,
  chat: [],
  unreadChat: 0,
  endReason: "",
  error: "",
  muteRequested: !1,
  noiseOn: !1,
  noiseSupported: !1,
  speakerMuted: !1,
  rearCamera: !1,
  captions: [],
  captionsOn: !0,
  foreignPeers: !1
};
function yv(n) {
  return n.startsWith("guest:");
}
function kv(n) {
  const e = /^acc:(\d+)$/.exec(n);
  return e ? Number(e[1]) : 0;
}
function ri(n) {
  try {
    const e = n.metadata ? JSON.parse(n.metadata) : null;
    return typeof e?.role == "string" ? e.role : "";
  } catch {
    return "";
  }
}
function Tv(n) {
  return n === xe.Excellent ? "excellent" : n === xe.Good ? "good" : n === xe.Poor ? "poor" : n === xe.Lost ? "lost" : "unknown";
}
function hc(n) {
  if (!(!n || n.isMuted)) return n.track ?? void 0;
}
class Sv {
  room;
  snapshot = uc;
  listeners = new Set();
  audioElements = new Map();
  previewTracks = [];
  blurProcessor = null;
  logBuffer = [];
  logTimer = null;
  myIdentity;
  chatSeen = 0;
  handsBySignal = new Map();
  noiseProcessor = null;
  constructor(e) {
    this.myIdentity = e.identity, this.room = new Mt({
      adaptiveStream: !0,
      dynacast: !0,
      audioCaptureDefaults: {
        echoCancellation: !0,
        noiseSuppression: !0,
        autoGainControl: !0,
        deviceId: e.devices?.audioDeviceId
      },
      videoCaptureDefaults: {
        resolution: {
          width: 640,
          height: 360,
          frameRate: 24
        },
        deviceId: e.devices?.videoDeviceId
      },
      publishDefaults: {
        videoCodec: "vp9",
        backupCodec: !0,
        scalabilityMode: "L3T3_KEY",
        simulcast: !0,
        videoSimulcastLayers: [Qt.h180, Qt.h360],
        screenShareEncoding: nn.h720fps5.encoding,
        dtx: !0,
        red: !0,
        audioPreset: e.speech ? tn.speech : tn.music
      }
    });
    const t = fv();
    this.snapshot = {
      ...uc,
      audioOnly: !!e.audioOnly,
      noiseSupported: t,
      noiseOn: t && e.noise !== !1,
      speakerMuted: !!e.speakerMuted,
      captionsOn: bv()
    }, this.bind();
  }
  subscribe = e => (this.listeners.add(e), () => {
    this.listeners.delete(e);
  });
  getSnapshot = () => this.snapshot;
  emit(e) {
    this.snapshot = {
      ...this.snapshot,
      ...e
    }, this.listeners.forEach(t => t());
  }
  async startPreview(e, t) {
    await this.stopPreview();
    const i = await un({
      audio: {
        deviceId: e.audioDeviceId,
        echoCancellation: !0,
        noiseSuppression: !0,
        autoGainControl: !0
      },
      video: t ? {
        deviceId: e.videoDeviceId,
        resolution: {
          width: 640,
          height: 360,
          frameRate: 24
        }
      } : !1
    });
    this.previewTracks = i;
    const s = i.find(a => a instanceof Gt),
      r = i.find(a => a instanceof Ri);
    return s && this.hasBackground() && (await this.applyBackground(s).catch(() => {})), {
      video: s,
      audio: r
    };
  }
  async stopPreview() {
    for (const e of this.previewTracks) e.stop();
    this.previewTracks = [];
  }
  async connect(e, t, i) {
    this.emit({
      state: "connecting",
      endReason: "",
      error: ""
    });
    try {
      await this.room.connect(e, t);
    } catch (a) {
      throw this.emit({
        state: "disconnected",
        endReason: "error",
        error: a instanceof Error ? a.message : ce("videoMeeting.connectFailed")
      }), this.log("connect-failed", {
        message: a instanceof Error ? a.message : String(a)
      }), a;
    }
    const s = this.room.localParticipant,
      r = this.previewTracks;
    this.previewTracks = [];
    for (const a of r) {
      if (!(a.kind === E.Kind.Audio ? i.micOn : i.camOn)) {
        a.stop();
        continue;
      }
      await s.publishTrack(a).catch(() => a.stop());
    }
    i.micOn && !s.isMicrophoneEnabled && (await s.setMicrophoneEnabled(!0).catch(a => this.emit({
      error: this.deviceError(a)
    }))), i.camOn && !this.snapshot.audioOnly && !s.isCameraEnabled && (await s.setCameraEnabled(!0).catch(a => this.emit({
      error: this.deviceError(a)
    }))), this.snapshot.audioOnly && this.applyAudioOnly(!0), this.snapshot.noiseOn && (await this.applyNoise(!0)), await this.announceLang(), ys.off("languageChanged", this.announceLang), ys.on("languageChanged", this.announceLang), this.emit({
      state: "connected",
      audioBlocked: !this.room.canPlaybackAudio
    }), this.refresh(), this.log("connected", {});
  }
  deviceError(e) {
    const t = e?.name ?? "";
    return t === "NotAllowedError" ? ce("videoMeeting.deviceDenied") : t === "NotFoundError" ? ce("videoMeeting.deviceNotFound") : t === "NotReadableError" ? ce("videoMeeting.deviceBusy") : e instanceof Error ? e.message : ce("videoMeeting.deviceFailed");
  }
  async disconnect(e = "left") {
    await this.stopPreview(), this.flushLogs(), await this.noiseProcessor?.destroy().catch(() => {}), this.noiseProcessor = null;
    try {
      await this.room.disconnect(!0);
    } catch {}
    this.detachAllAudio(), this.emit({
      state: "disconnected",
      endReason: this.snapshot.endReason || e
    });
  }
  async setMic(e) {
    try {
      await this.room.localParticipant.setMicrophoneEnabled(e), this.emit({
        micOn: this.room.localParticipant.isMicrophoneEnabled,
        error: ""
      }), e && this.snapshot.noiseOn && !this.localAudioTrack()?.getProcessor() && (await this.applyNoise(!0));
    } catch (t) {
      this.emit({
        error: this.deviceError(t)
      });
    }
    this.refresh();
  }
  async setCam(e) {
    try {
      if (await this.room.localParticipant.setCameraEnabled(e), e && this.hasBackground()) {
        const t = this.localVideoTrack();
        t && (await this.applyBackground(t).catch(() => {}));
      }
      this.emit({
        camOn: this.room.localParticipant.isCameraEnabled,
        error: ""
      });
    } catch (t) {
      this.emit({
        error: this.deviceError(t)
      });
    }
    this.refresh();
  }
  async setScreenShare(e) {
    try {
      await this.room.localParticipant.setScreenShareEnabled(e, {
        audio: !1,
        resolution: nn.h720fps5.resolution
      }), this.emit({
        screenOn: this.room.localParticipant.isScreenShareEnabled,
        error: ""
      });
    } catch (t) {
      t?.name !== "NotAllowedError" && this.emit({
        error: t instanceof Error ? t.message : ce("videoMeeting.screenShareFailed")
      });
    }
    this.refresh();
  }
  async switchDevice(e, t) {
    await this.room.switchActiveDevice(e, t).catch(() => {});
  }
  activeDevice(e) {
    return this.room.getActiveDevice(e) ?? "";
  }
  async flipCamera() {
    const e = await Mt.getLocalDevices("videoinput").catch(() => []);
    if (e.length < 2) return;
    const t = this.room.getActiveDevice("videoinput"),
      i = e.findIndex(r => r.deviceId === t),
      s = e[(i + 1) % e.length];
    await this.room.switchActiveDevice("videoinput", s.deviceId).catch(() => {}), this.emit({
      rearCamera: /back|rear|environment|후면/i.test(s.label)
    });
  }
  static async canFlipCamera() {
    return (await Mt.getLocalDevices("videoinput").catch(() => [])).length >= 2;
  }
  applyAudioOnly(e) {
    this.emit({
      audioOnly: e
    });
    for (const t of this.room.remoteParticipants.values()) for (const i of t.trackPublications.values()) i.kind === E.Kind.Video && i.setSubscribed(!e);
    e && this.room.localParticipant.isCameraEnabled && this.setCam(!1), this.refresh();
  }
  localAudioTrack() {
    const t = this.room.localParticipant.getTrackPublication(E.Source.Microphone)?.track;
    return t instanceof Ri ? t : void 0;
  }
  async applyNoise(e) {
    const t = this.localAudioTrack();
    if (!e) {
      t?.getProcessor() && (await t.stopProcessor().catch(() => {})), await this.noiseProcessor?.destroy().catch(() => {}), this.noiseProcessor = null;
      return;
    }
    if (!(!t || !this.snapshot.noiseSupported)) try {
      this.noiseProcessor || (this.noiseProcessor = new gv()), t.getProcessor() !== this.noiseProcessor && (await t.setProcessor(this.noiseProcessor));
    } catch (i) {
      this.noiseProcessor = null, this.emit({
        noiseOn: !1
      }), this.log("noise-failed", {
        message: i instanceof Error ? i.message : String(i)
      });
    }
  }
  async setNoise(e) {
    this.emit({
      noiseOn: e && this.snapshot.noiseSupported
    }), await this.applyNoise(e);
  }
  setSpeakerMuted(e) {
    this.emit({
      speakerMuted: e
    });
    for (const t of this.audioElements.values()) t.muted = e;
  }
  localVideoTrack() {
    const t = this.room.localParticipant.getTrackPublication(E.Source.Camera)?.track;
    return t instanceof Gt ? t : this.previewTracks.find(i => i instanceof Gt);
  }
  async checkBlurSupport() {
    try {
      const t = (await zt(() => import("./index-Q34QwseR.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]))).supportsBackgroundProcessors();
      return this.emit({
        blurSupported: t
      }), t;
    } catch {
      return this.emit({
        blurSupported: !1
      }), !1;
    }
  }
  hasBackground() {
    return this.snapshot.blurOn || !!this.snapshot.backgroundImage;
  }
  async applyBackground(e, t = this.snapshot) {
    const i = await zt(() => import("./index-Q34QwseR.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6])),
      s = t.backgroundImage ? {
        mode: "virtual-background",
        imagePath: t.backgroundImage
      } : t.blurOn ? {
        mode: "background-blur",
        blurRadius: 12
      } : null;
    if (!s) {
      e.getProcessor() && (await e.stopProcessor()), this.blurProcessor = null;
      return;
    }
    const r = this.blurProcessor;
    if (r && e.getProcessor() === r) {
      await r.switchTo?.(s);
      return;
    }
    this.blurProcessor = i.BackgroundProcessor(s), await e.setProcessor(this.blurProcessor);
  }
  async setBlur(e) {
    const t = this.localVideoTrack(),
      i = {
        blurOn: e,
        backgroundImage: e ? "" : this.snapshot.backgroundImage
      };
    try {
      t && (await this.applyBackground(t, i)), this.emit({
        ...i,
        error: ""
      });
    } catch (s) {
      this.emit({
        blurOn: !1,
        error: s instanceof Error ? ce("videoMeeting.blurFailedReason", {
          reason: s.message
        }) : ce("videoMeeting.blurFailed")
      });
    }
  }
  async setBackgroundImage(e) {
    const t = this.localVideoTrack(),
      i = {
        blurOn: e ? !1 : this.snapshot.blurOn,
        backgroundImage: e
      };
    try {
      t && (await this.applyBackground(t, i)), this.emit({
        ...i,
        error: ""
      });
    } catch (s) {
      this.emit({
        backgroundImage: "",
        error: s instanceof Error ? ce("videoMeeting.backgroundFailedReason", {
          reason: s.message
        }) : ce("videoMeeting.backgroundFailed")
      });
    }
  }
  announceLang = async () => {
    this.room.state === K.Connected && (await this.room.localParticipant.setAttributes({
      [Zs]: ks()
    }).catch(() => {}), this.refresh());
  };
  setCaptions(e) {
    try {
      window.localStorage.setItem(Wl, e ? "1" : "0");
    } catch {}
    this.emit({
      captionsOn: e,
      ...(e ? {} : {
        captions: []
      })
    });
  }
  receiveCaption(e) {
    const t = e ?? {},
      i = ks(),
      s = t.translations && typeof t.translations == "object" ? t.translations[i] : void 0;
    if (!this.snapshot.captionsOn || typeof s != "string" || !s.trim() || t.lang === i) return;
    const r = String(t.speakerIdentity ?? ""),
      a = {
        id: String(t.id ?? `${r}-${Date.now()}`),
        identity: r,
        name: String(t.speakerName ?? ""),
        text: s.trim(),
        original: String(t.text ?? ""),
        lang: String(t.lang ?? ""),
        at: Date.now(),
        partial: t.partial === !0
      },
      o = [...this.snapshot.captions],
      c = o[o.length - 1];
    c && c.partial && c.identity === r ? o[o.length - 1] = {
      ...a,
      id: c.id,
      text: `${c.text} ${a.text}`,
      original: `${c.original} ${a.original}`
    } : o.push(a), this.emit({
      captions: o.slice(-3)
    });
  }
  async send(e) {
    if (this.room.state !== K.Connected) return;
    const t = new TextEncoder().encode(JSON.stringify(e));
    await this.room.localParticipant.publishData(t, {
      reliable: !0,
      topic: dc
    }).catch(() => {});
  }
  async setHand(e) {
    this.emit({
      handUp: e
    }), await this.room.localParticipant.setAttributes({
      [lc]: e ? "1" : ""
    }).catch(() => {}), await this.send({
      t: "hand",
      on: e
    }), this.refresh();
  }
  requestMute(e) {
    return this.send({
      t: "mute-request",
      target: e
    });
  }
  kick(e) {
    return this.send({
      t: "kick",
      target: e
    });
  }
  announceRecord(e) {
    return this.send({
      t: "record",
      on: e
    });
  }
  drawListeners = new Set();
  onDraw(e) {
    return this.drawListeners.add(e), () => {
      this.drawListeners.delete(e);
    };
  }
  sendDraw(e, t, i) {
    return this.send({
      t: "draw",
      id: e,
      pts: t,
      c: i
    });
  }
  get identity() {
    return this.myIdentity;
  }
  async sendChat(e, t) {
    const i = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      identity: this.myIdentity,
      name: this.room.localParticipant.name || ce("videoMeeting.me"),
      text: e,
      ts: Date.now(),
      mine: !0,
      ...(t ? {
        file: t
      } : {})
    };
    this.emit({
      chat: [...this.snapshot.chat, i]
    }), this.chatSeen = this.snapshot.chat.length, await this.send({
      t: "chat",
      id: i.id,
      text: e,
      name: i.name,
      ts: i.ts,
      ...(t ? {
        file: t
      } : {})
    });
  }
  markChatSeen() {
    this.chatSeen = this.snapshot.chat.length, this.snapshot.unreadChat && this.emit({
      unreadChat: 0
    });
  }
  markKicked() {
    this.emit({
      endReason: "kicked"
    });
  }
  markAppEnded(e, t) {
    this.log("app-ended", {
      reason: e,
      duration_s: t
    }), this.flushLogs(), this.emit({
      state: "disconnected",
      endReason: e
    });
  }
  clearMuteRequested() {
    this.snapshot.muteRequested && this.emit({
      muteRequested: !1
    });
  }
  clearError() {
    this.snapshot.error && this.emit({
      error: ""
    });
  }
  async startAudio() {
    await this.room.startAudio().catch(() => {}), this.emit({
      audioBlocked: !this.room.canPlaybackAudio
    });
  }
  onRecordAnnounced = null;
  onKicked = null;
  handleSignal(e, t) {
    switch (e.t) {
      case "hand":
        t && this.handsBySignal.set(t.identity, e.on), this.refresh();
        return;
      case "chat":
        {
          if (this.snapshot.chat.some(a => a.id === e.id)) return;
          const i = e.file && typeof e.file.uuid == "string" ? {
              uuid: e.file.uuid,
              name: String(e.file.name ?? ""),
              size: Number(e.file.size) || 0,
              mime: String(e.file.mime ?? "")
            } : void 0,
            s = {
              id: e.id,
              identity: t?.identity ?? "",
              name: e.name || t?.name || ce("videoMeeting.participant"),
              text: e.text,
              ts: e.ts,
              mine: !1,
              ...(i ? {
                file: i
              } : {})
            },
            r = [...this.snapshot.chat, s];
          this.emit({
            chat: r,
            unreadChat: r.length - this.chatSeen
          });
          return;
        }
      case "mute-request":
        e.target === this.myIdentity && ri(t) === "host" && this.emit({
          muteRequested: !0
        });
        return;
      case "kick":
        e.target === this.myIdentity && ri(t) === "host" && (this.emit({
          endReason: "kicked"
        }), this.onKicked?.());
        return;
      case "record":
        this.onRecordAnnounced?.(e.on);
        return;
      case "draw":
        for (const i of this.drawListeners) i(e, t?.identity ?? "");
        return;
      default:
        return;
    }
  }
  tileOf(e, t) {
    const i = e.getTrackPublication(E.Source.Camera),
      s = e.getTrackPublication(E.Source.ScreenShare),
      r = e.getTrackPublication(E.Source.Microphone);
    return {
      identity: e.identity,
      name: e.name || e.identity,
      accountSeq: kv(e.identity),
      isGuest: yv(e.identity) || ri(e) === "guest",
      isLocal: t,
      isSpeaking: e.isSpeaking,
      quality: Tv(e.connectionQuality),
      micOn: !!(r && !r.isMuted),
      camOn: !!(i && !i.isMuted && (t || i.isSubscribed)),
      screenOn: !!(s && !s.isMuted),
      hand: t ? this.snapshot.handUp : e.attributes?.[lc] === "1" || this.handsBySignal.get(e.identity) === !0,
      role: ri(e),
      cameraTrack: hc(i),
      screenTrack: hc(s)
    };
  }
  refresh = () => {
    if (this.room.state === K.Disconnected && this.snapshot.state === "disconnected") return;
    const e = [...this.room.remoteParticipants.values()].filter(c => ri(c) !== "recorder").map(c => this.tileOf(c, !1)),
      t = this.tileOf(this.room.localParticipant, !0),
      i = t.screenOn ? t.identity : e.find(c => c.screenOn)?.identity ?? "",
      s = this.room.activeSpeakers.filter(c => c.identity !== this.myIdentity),
      r = ks(),
      a = [...this.room.remoteParticipants.values()].some(c => ri(c) !== "recorder" && !!c.attributes?.[Zs] && c.attributes[Zs] !== r),
      o = s[0]?.identity ?? (e.some(c => c.identity === this.snapshot.activeSpeaker) ? this.snapshot.activeSpeaker : e[0]?.identity ?? "");
    this.emit({
      participants: e,
      local: t,
      screenShareIdentity: i,
      activeSpeaker: o,
      micOn: this.room.localParticipant.isMicrophoneEnabled,
      camOn: this.room.localParticipant.isCameraEnabled,
      screenOn: this.room.localParticipant.isScreenShareEnabled,
      foreignPeers: a
    });
  };
  attachAudio(e, t) {
    if (e.kind !== E.Kind.Audio) return;
    const i = `${t.identity}:${e.sid ?? e.mediaStreamTrack.id}`;
    if (this.audioElements.has(i)) return;
    const s = e.attach();
    s.setAttribute("data-meet-audio", t.identity), s.style.display = "none", s.muted = this.snapshot.speakerMuted, document.body.appendChild(s), this.audioElements.set(i, s);
  }
  detachAudio(e, t) {
    const i = `${t.identity}:${e.sid ?? e.mediaStreamTrack.id}`,
      s = this.audioElements.get(i);
    s && (e.detach(s), s.remove(), this.audioElements.delete(i));
  }
  detachAllAudio() {
    for (const e of this.audioElements.values()) e.remove();
    this.audioElements.clear();
  }
  log(e, t) {
    this.logBuffer.push({
      at: new Date().toISOString(),
      room: this.room.name,
      event: e,
      ...t
    }), !this.logTimer && (this.logTimer = setTimeout(() => this.flushLogs(), 1e4));
  }
  flushLogs() {
    if (this.logTimer && clearTimeout(this.logTimer), this.logTimer = null, this.logBuffer.length === 0) return;
    const e = this.logBuffer;
    this.logBuffer = [], Jl({
      kind: "video_meeting",
      events: e
    });
  }
  bind() {
    const e = this.room;
    e.on(w.ParticipantConnected, this.refresh).on(w.ParticipantDisconnected, t => {
      this.handsBySignal.delete(t.identity), this.refresh();
    }).on(w.TrackPublished, this.refresh).on(w.TrackUnpublished, this.refresh).on(w.LocalTrackPublished, this.refresh).on(w.LocalTrackUnpublished, this.refresh).on(w.TrackMuted, this.refresh).on(w.TrackUnmuted, this.refresh).on(w.ActiveSpeakersChanged, this.refresh).on(w.ParticipantAttributesChanged, this.refresh).on(w.ParticipantMetadataChanged, this.refresh).on(w.ParticipantNameChanged, this.refresh).on(w.TrackSubscribed, (t, i, s) => {
      this.attachAudio(t, s), this.refresh();
    }).on(w.TrackUnsubscribed, (t, i, s) => {
      this.detachAudio(t, s), this.refresh();
    }).on(w.ConnectionQualityChanged, (t, i) => {
      i.identity === this.myIdentity && (t === xe.Poor || t === xe.Lost) && this.log("quality", {
        quality: t,
        participants: e.numParticipants
      }), this.refresh();
    }).on(w.Reconnecting, () => {
      this.emit({
        state: "reconnecting"
      }), this.log("reconnecting", {});
    }).on(w.Reconnected, () => {
      this.emit({
        state: "connected"
      }), this.log("reconnected", {}), this.refresh();
    }).on(w.AudioPlaybackStatusChanged, () => this.emit({
      audioBlocked: !e.canPlaybackAudio
    })).on(w.MediaDevicesError, t => this.emit({
      error: this.deviceError(t)
    })).on(w.DataReceived, (t, i, s, r) => {
      if (r === vv) {
        if (i) return;
        try {
          this.receiveCaption(JSON.parse(new TextDecoder().decode(t)));
        } catch {}
        return;
      }
      if (!(r && r !== dc)) try {
        const a = JSON.parse(new TextDecoder().decode(t));
        a && typeof a.t == "string" && this.handleSignal(a, i);
      } catch {}
    }).on(w.Disconnected, t => {
      this.detachAllAudio(), ys.off("languageChanged", this.announceLang);
      let i = this.snapshot.endReason || "left";
      t === ve.ROOM_DELETED || t === ve.ROOM_CLOSED ? i = "ended" : t === ve.PARTICIPANT_REMOVED ? i = this.snapshot.endReason === "kicked" ? "kicked" : "ended" : t === ve.DUPLICATE_IDENTITY ? i = "duplicate" : t !== void 0 && t !== ve.CLIENT_INITIATED && !this.snapshot.endReason && (i = "error"), this.log("disconnected", {
        reason: t === void 0 ? "" : ve[t] ?? String(t)
      }), this.flushLogs(), this.emit({
        state: "disconnected",
        endReason: i
      });
    });
  }
}
let Ie = null,
  Yi = null,
  Fn = null;
function Cn(n, e, t) {
  if (!Ie) return;
  const i = Ie.createOscillator(),
    s = Ie.createGain();
  i.type = "sine", i.frequency.value = e, s.gain.setValueAtTime(0, n), s.gain.linearRampToValueAtTime(.25, n + .02), s.gain.setValueAtTime(.25, n + t - .05), s.gain.linearRampToValueAtTime(0, n + t), i.connect(s).connect(Ie.destination), i.start(n), i.stop(n + t);
}
function mc() {
  if (!Ie) return;
  const n = Ie.currentTime;
  Cn(n, 880, .18), Cn(n + .2, 660, .18), Cn(n + .5, 880, .18), Cn(n + .7, 660, .18);
}
function Cv() {
  if (!Yi) {
    try {
      Ie = Ie ?? new AudioContext(), Ie.state === "suspended" && Ie.resume().catch(() => {});
    } catch {
      Ie = null;
    }
    mc(), Yi = setInterval(mc, 2200), typeof navigator < "u" && typeof navigator.vibrate == "function" && (navigator.vibrate([400, 200, 400]), Fn = setInterval(() => navigator.vibrate([400, 200, 400]), 2200));
  }
}
function wv() {
  Yi && clearInterval(Yi), Yi = null, Fn && clearInterval(Fn), Fn = null, typeof navigator < "u" && typeof navigator.vibrate == "function" && navigator.vibrate(0);
}
function ib() {
  try {
    Ie = Ie ?? new AudioContext(), Ie.state === "suspended" && Ie.resume().catch(() => {});
  } catch {}
}
const xr = "taskham-meet-noise-off";
function Ev() {
  try {
    return window.localStorage.getItem(xr) !== "1";
  } catch {
    return !0;
  }
}
function nb(n) {
  try {
    n ? window.localStorage.removeItem(xr) : window.localStorage.setItem(xr, "1");
  } catch {}
}
const _v = "video.ring",
  Pv = "video.ring.cancel",
  Rv = "video.state",
  Iv = "video.summary.ask",
  Mv = "video.kicked",
  Av = "video.knock",
  Ov = "video.knock.resolved",
  Dv = 3e4;
let O = {
  session: null,
  rings: [],
  summaryAsks: [],
  openByRoom: {},
  roomOfCode: {},
  knocks: []
};
const Ur = new Set();
let pc = !1,
  fs = 0,
  Hl = "",
  Kl = "";
const Fr = new Map();
function X(n) {
  O = {
    ...O,
    ...n
  }, Ur.forEach(e => e()), ("knocks" in n || "session" in n) && Lv();
}
let er = "";
function Lv() {
  const n = O.session;
  if (!n?.appHosted) {
    er = "";
    return;
  }
  const e = O.knocks.filter(i => i.code === n.code).map(i => ({
      knock_seq: i.knock_seq,
      name: i.name
    })),
    t = `${n.code}:${e.map(i => i.knock_seq).join(",")}`;
  t !== er && (er = t, Xl(n.code, e));
}
function Nv(n) {
  return Ur.add(n), () => {
    Ur.delete(n);
  };
}
function sb() {
  return eu.useSyncExternalStore(Nv, () => O, () => O);
}
function rb() {
  return O;
}
function xv(n) {
  const e = typeof n.code == "string" ? n.code : "";
  if (!e) return null;
  const t = n.from ?? {};
  return {
    code: e,
    room_seq: Number(n.room_seq ?? 0) || 0,
    from: {
      account_seq: Number(t.account_seq ?? 0) || 0,
      name: String(t.name ?? ""),
      avatar: String(t.avatar ?? "")
    },
    video: n.video === !0 || n.video === 1 || n.video === "1",
    receivedAt: Date.now()
  };
}
function Zt(n) {
  const e = Fr.get(n);
  e && clearTimeout(e), Fr.delete(n);
  const t = O.rings.filter(i => i.code !== n);
  t.length !== O.rings.length && (X({
    rings: t
  }), gc(n, !1)), t.length === 0 && wv();
}
function Uv(n) {
  if (!(n.from.account_seq === fs || O.session?.code === n.code)) {
    if (O.session) {
      ne.decline(n.code).catch(() => {});
      return;
    }
    O.rings.some(e => e.code === n.code) || (X({
      rings: [...O.rings, n],
      roomOfCode: n.room_seq ? {
        ...O.roomOfCode,
        [n.code]: n.room_seq
      } : O.roomOfCode
    }), Cv(), gc(n.code, !0), Fr.set(n.code, setTimeout(() => Zt(n.code), Dv)));
  }
}
const Fv = tu;
function Bv(n) {
  return `acc:${n}`;
}
function ei(n, e) {
  const t = !!(e.identity && e.identity.startsWith("guest:")),
    i = new Sv({
      identity: e.identity ?? Bv(fs),
      devices: e.devices,
      audioOnly: e.audioOnly,
      noise: Ev(),
      speakerMuted: e.speakerMuted,
      speech: n.meeting.mode === "call"
    }),
    s = {
      code: n.meeting.code,
      meeting: n.meeting,
      join: n,
      controller: i,
      view: e.view,
      record: n.recording ?? n.meeting.record,
      recordSince: n.recording ? n.recording_since || Date.now() : 0,
      startedAt: Date.now(),
      prejoin: e.prejoin,
      wantVideo: e.wantVideo,
      guest: t,
      guestKnockSeq: t && Number(e.identity?.slice(6)) || 0,
      guestToken: e.guestToken ?? "",
      appHosted: !1,
      appOpened: !1
    };
  return i.onRecordAnnounced = r => _a(r), i.onKicked = () => {
    Ra("kicked");
  }, i.subscribe(() => {
    const r = i.getSnapshot();
    Br || r.state === "disconnected" && O.session?.controller === i && !O.session.prejoin && Pa(r.endReason === "left" ? "left" : "remote");
  }), n.meeting.source === "chat" && n.meeting.source_seq && X({
    roomOfCode: {
      ...O.roomOfCode,
      [n.meeting.code]: n.meeting.source_seq
    }
  }), O.knocks.some(r => r.code !== n.meeting.code) && X({
    knocks: O.knocks.filter(r => r.code === n.meeting.code)
  }), s;
}
function Mi(n) {
  O.session && X({
    session: {
      ...O.session,
      ...n
    }
  });
}
function _a(n, e = 0) {
  const t = O.session;
  if (t) {
    if (t.record === n) {
      n && e && t.recordSince !== e && Mi({
        recordSince: e
      });
      return;
    }
    Mi({
      record: n,
      recordSince: n ? e || Date.now() : 0
    }), t.appHosted && Ql(t.code, n, n ? e || Date.now() : 0);
  }
}
async function ti(n, e) {
  if (fc()) {
    Mi({
      appHosted: !0,
      prejoin: !1
    });
    const {
      meeting: t,
      join: i
    } = n;
    Yl({
      code: t.code,
      token: i.token,
      livekit_url: i.livekit_url,
      mode: t.mode,
      video: e.camOn,
      title: t.title,
      role: t.host_account_seq === fs ? "host" : "member",
      room_seq: t.source === "chat" ? t.source_seq : 0,
      name: Hl,
      recording: n.record,
      link: `${window.location.origin}/meet/${t.code}`,
      meet_token: i.meet_token ?? "",
      api_base: new URL($l, window.location.origin).toString().replace(/\/+$/, ""),
      language: Kl || "ko",
      recording_since: n.recordSince,
      can_upload: !!t.can_upload
    });
    return;
  }
  await n.controller.connect(n.join.livekit_url, n.join.token, e).catch(async t => {
    throw await Pa("left"), t;
  }), !n.guest && n.meeting.mode === "meeting" && Vv(n.code);
}
function qv(n) {
  O.session && O.session.view !== n && Mi({
    view: n
  });
}
async function ab(n, e, t) {
  if (O.session) throw new Error(ce("videoMeeting.alreadyInCallRetry"));
  const i = await ne.create({
      mode: "call",
      source: "chat",
      source_seq: n,
      video: e
    }).catch(async r => {
      const a = Fv(r);
      if (a) return ne.join(a);
      throw r;
    }),
    s = ei(i, {
      view: t,
      prejoin: !1,
      wantVideo: e
    });
  return X({
    session: s
  }), await ti(s, {
    micOn: !0,
    camOn: e
  }), s;
}
async function ob(n, e) {
  if (Zt(n.code), O.session) throw new Error(ce("videoMeeting.alreadyInCall"));
  const t = await ne.join(n.code),
    i = ei(t, {
      view: e,
      prejoin: !1,
      wantVideo: n.video
    });
  return X({
    session: i
  }), await ti(i, {
    micOn: !0,
    camOn: n.video
  }), i;
}
async function cb(n) {
  Zt(n.code), await ne.decline(n.code).catch(() => {});
}
async function db(n, e, t) {
  if (O.session?.code === n) return O.session;
  if (O.session) throw new Error(ce("videoMeeting.alreadyInCallRetry"));
  const i = await ne.join(n),
    s = ei(i, {
      view: t,
      prejoin: !1,
      wantVideo: e
    });
  return X({
    session: s
  }), await ti(s, {
    micOn: !0,
    camOn: e
  }), s;
}
async function lb(n, e = {}) {
  if (O.session?.code === n) return qv("full"), O.session;
  if (O.session) throw new Error(ce("videoMeeting.alreadyInOtherCall"));
  const t = await ne.join(n, e);
  if (t.meeting.mode === "mic") return jv(t);
  const i = ei(t, {
    view: "full",
    prejoin: !0,
    wantVideo: !0
  });
  return X({
    session: i
  }), fc() && (await ti(i, {
    micOn: !0,
    camOn: !0
  })), i;
}
function ub(n, e, t = "") {
  if (O.session?.code === n.meeting.code) return O.session;
  const i = ei(n, {
    view: "full",
    prejoin: !0,
    wantVideo: !0,
    identity: `guest:${e}`,
    guestToken: t
  });
  return X({
    session: i
  }), i;
}
async function jv(n) {
  if (O.session?.code === n.meeting.code) return O.session;
  if (O.session) throw new Error(ce("videoMeeting.alreadyInOtherCall"));
  const e = ei(n, {
    view: "full",
    prejoin: !1,
    wantVideo: !1,
    audioOnly: !0,
    speakerMuted: !0
  });
  return X({
    session: e
  }), await ti(e, {
    micOn: !0,
    camOn: !1
  }), e;
}
async function hb(n) {
  const e = O.session;
  !e || !e.prejoin || (Mi({
    prejoin: !1,
    wantVideo: n.camOn
  }), n.audioOnly && e.controller.applyAudioOnly(!0), await ti({
    ...e
  }, {
    micOn: n.micOn,
    camOn: n.camOn && !n.audioOnly
  }));
}
let Br = !1;
if (typeof window < "u") {
  const n = () => {
    Br = !0;
  };
  window.addEventListener("pagehide", n), window.addEventListener("beforeunload", n), window.addEventListener("pageshow", () => {
    Br = !1;
  });
}
async function Pa(n) {
  const e = O.session;
  e && (X({
    session: null,
    knocks: []
  }), window.setTimeout(Ai, 1500), n === "left" && (e.guest ? await ne.guestLeave(e.code, e.guestKnockSeq, e.guestToken) : await ne.leave(e.code).catch(() => {})));
}
async function Vv(n) {
  try {
    const {
      participants: e
    } = await ne.detail(n);
    if (O.session?.code !== n) return;
    const t = e.filter(r => r.knock_status === "waiting").map(r => ({
        code: n,
        knock_seq: r.participant_seq,
        name: r.name || ce("videoMeeting.guest"),
        receivedAt: Date.now()
      })),
      i = new Set(O.knocks.map(r => r.knock_seq)),
      s = [...O.knocks.filter(r => r.code === n && t.some(a => a.knock_seq === r.knock_seq)), ...t.filter(r => !i.has(r.knock_seq))];
    X({
      knocks: s
    });
  } catch {}
}
async function Wv(n, e) {
  X({
    knocks: O.knocks.filter(t => t.knock_seq !== n.knock_seq)
  });
  try {
    await ne.answerKnock(n.code, n.knock_seq, e);
  } catch (t) {
    throw X({
      knocks: [...O.knocks, n]
    }), t;
  }
}
async function Ra(n = "left") {
  const e = O.session;
  e && (e.appHosted && qr(e.code), await e.controller.disconnect(n), await Pa("left"));
}
function mb(n) {
  const e = O.session;
  !e || e.code !== n || !e.prejoin || e.appHosted || Ra();
}
async function pb(n = {}) {
  const e = O.session;
  e && (await ne.end(e.code, n).catch(() => {}), e.appHosted && qr(e.code), await e.controller.disconnect("ended"), X({
    session: null
  }), window.setTimeout(Ai, 1500));
}
async function Hv(n, e, t, i = !1) {
  const s = O.session;
  if (!(!s || s.code !== n)) {
    if (e === "busy") {
      X({
        session: null,
        knocks: []
      }), window.setTimeout(Ai, 1500), await ne.leave(n).catch(() => {});
      return;
    }
    s.controller.markAppEnded(e === "kicked" ? "kicked" : e === "end" || e === "ended" ? "ended" : e === "error" ? "error" : "left", t), X({
      session: null,
      knocks: []
    }), window.setTimeout(Ai, 1500), e === "end" ? await ne.end(n, {
      discard: i
    }).catch(r => i ? vc(r instanceof Error ? r.message : ce("videoMeeting.discardFailed")) : void 0) : await ne.leave(n).catch(() => {});
  }
}
async function Kv(n, e, t, i) {
  if (Zt(n), O.session?.code === n || O.session) return;
  if (t > 0) {
    const {
      getCurrentOrg: a,
      switchCurrentOrg: o
    } = await zt(async () => {
      const {
        getCurrentOrg: c,
        switchCurrentOrg: d
      } = await import("../js.d/main-Cm9wS5wt.js").then(l => l.sh);
      return {
        getCurrentOrg: c,
        switchCurrentOrg: d
      };
    }, __vite__mapDeps([2, 3, 4, 5]));
    a()?.seq !== t && (await o(t).catch(() => {}));
  }
  const s = await ne.join(n);
  e && X({
    roomOfCode: {
      ...O.roomOfCode,
      [n]: e
    }
  });
  const r = ei(s, {
    view: "full",
    prejoin: !1,
    wantVideo: i
  });
  X({
    session: r
  }), await ti(r, {
    micOn: !0,
    camOn: i
  });
}
Zl({
  opened: n => {
    O.session?.code === n && Mi({
      appOpened: !0
    });
  },
  ended: (n, e, t, i, s) => {
    Hv(n, e, t, s).catch(() => {});
  },
  accept: (n, e, t, i) => {
    Kv(n, e, t, i).catch(() => {});
  },
  decline: n => {
    Zt(n), ne.decline(n).catch(() => {});
  },
  kick: (n, e) => {
    O.session?.code === n && e && ne.kick(n, e).catch(() => {});
  },
  mute: (n, e) => {
    O.session?.code === n && e && ne.mute(n, e).catch(() => {});
  },
  knock: (n, e, t) => {
    const i = O.knocks.find(s => s.code === n && s.knock_seq === e);
    i && Wv(i, t).catch(s => vc(s instanceof Error ? s.message : ce("videoMeeting.answerFailed")));
  }
});
async function fb(n) {
  const e = O.session;
  e && (await ne.mute(e.code, n));
}
async function gb(n) {
  const e = O.session;
  e && (await ne.kick(e.code, n), await e.controller.kick(n));
}
async function vb(n) {
  const e = O.session;
  e && (await ne.recording(e.code, n), _a(n), await e.controller.announceRecord(n));
}
function Gv(n) {
  X({
    summaryAsks: O.summaryAsks.filter(e => e.code !== n)
  });
}
async function bb(n, e) {
  Gv(n), await ne.summarize(n, e);
}
const Wt = new Map();
async function Ia(n) {
  if (!n) return;
  const e = await ne.open("chat", n).catch(() => null),
    t = {
      ...O.openByRoom
    };
  if (e && e.meeting.status === "open") {
    const i = e.meeting;
    t[n] = {
      code: i.code,
      status: i.status,
      count: e.count || (t[n]?.code === i.code ? t[n].count : 0),
      room_seq: n
    }, X({
      openByRoom: t,
      roomOfCode: {
        ...O.roomOfCode,
        [i.code]: n
      }
    });
  } else delete t[n], X({
    openByRoom: t
  });
}
function Ai() {
  for (const n of Wt.keys()) Ia(n);
}
typeof document < "u" && document.addEventListener("visibilitychange", () => {
  document.visibilityState === "visible" && Ai();
});
function yb(n) {
  return Wt.set(n, (Wt.get(n) ?? 0) + 1), Ia(n), () => {
    const e = (Wt.get(n) ?? 1) - 1;
    e <= 0 ? Wt.delete(n) : Wt.set(n, e);
  };
}
function zv(n) {
  const e = n.room_seq || O.roomOfCode[n.code] || 0;
  if (!e) {
    for (const i of Wt.keys()) Ia(i);
    return;
  }
  const t = {
    ...O.openByRoom
  };
  n.status === "open" ? t[e] = {
    ...n,
    room_seq: e
  } : delete t[e], X({
    openByRoom: t,
    roomOfCode: {
      ...O.roomOfCode,
      [n.code]: e
    }
  }), n.status === "ended" && (Zt(n.code), O.session?.code === n.code && O.session.appHosted && (qr(n.code), O.session.controller.markAppEnded("ended", 0), X({
    session: null,
    knocks: []
  }), window.setTimeout(Ai, 1500)));
}
let Gl = null;
function kb(n) {
  Gl = n;
}
function Tb(n, e = "", t = "") {
  if (n > 0 && (fs = n), e && (Hl = e), t && (Kl = t), pc) return;
  pc = !0;
  const i = s => s?.data ?? {};
  Tt.addRealtimeEventListener(_v, s => {
    const r = xv(i(s));
    r && Uv(r);
  }), Tt.addRealtimeEventListener(Pv, s => {
    const r = i(s).code;
    typeof r == "string" && Zt(r);
  }), Tt.addRealtimeEventListener(Rv, s => {
    const r = i(s),
      a = typeof r.code == "string" ? r.code : "";
    if (!a) return;
    const o = r.status === "ended" ? "ended" : r.status === "scheduled" ? "scheduled" : "open";
    zv({
      code: a,
      status: o,
      count: Number(r.count ?? 0) || 0,
      room_seq: Number(r.room_seq ?? r.source_seq ?? 0) || 0
    });
    const c = typeof r.recording == "boolean" ? r.recording : typeof r.record == "boolean" ? r.record : null;
    O.session?.code === a && c !== null && _a(c, Number(r.recording_since ?? 0) || 0);
  }), Tt.addRealtimeEventListener(Mv, s => {
    const r = i(s).code;
    typeof r != "string" || O.session?.code !== r || (O.session.controller.markKicked(), Ra("kicked"), Gl?.());
  }), Tt.addRealtimeEventListener(Av, s => {
    const r = i(s),
      a = typeof r.code == "string" ? r.code : "",
      o = Number(r.knock_seq ?? 0) || 0;
    !a || !o || O.session && O.session.code !== a || O.knocks.some(c => c.knock_seq === o) || X({
      knocks: [...O.knocks, {
        code: a,
        knock_seq: o,
        name: String(r.name ?? ce("videoMeeting.guest")),
        receivedAt: Date.now()
      }]
    });
  }), Tt.addRealtimeEventListener(Ov, s => {
    const r = Number(i(s).knock_seq ?? 0) || 0;
    r && O.knocks.some(a => a.knock_seq === r) && X({
      knocks: O.knocks.filter(a => a.knock_seq !== r)
    });
  }), Tt.addRealtimeEventListener(Iv, s => {
    const r = i(s),
      a = r.code;
    typeof a != "string" || O.summaryAsks.some(o => o.code === a) || X({
      summaryAsks: [...O.summaryAsks, {
        code: a,
        limited: r.limited === !0,
        message: typeof r.message == "string" ? r.message : ""
      }]
    });
  }), Tt.connectRealtime?.().catch(() => {});
}
export { ke as A, Sv as M, Mt as R, Gv as a, Tb as b, bb as c, cb as d, ob as e, qv as f, rb as g, ab as h, nb as i, db as j, gb as k, Ra as l, fb as m, Wv as n, Ev as o, ib as p, mb as q, Ia as r, kb as s, hb as t, sb as u, lb as v, yb as w, ub as x, pb as y, vb as z };