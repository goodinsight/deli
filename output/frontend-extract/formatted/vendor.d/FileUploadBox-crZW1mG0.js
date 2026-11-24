import { r as d, e as Ge, j as S } from "./react-CjxcGQav.js";
import { jG as Ae, bM as N, jH as dn, jI as fn, bT as h, i as pn, ic as tt, jJ as B, jK as mn, em as De, ep as gn, bW as hn, z as wn, jL as Ht, bx as $t, u as vn, e as yn, c8 as Sn, ch as En, hE as Dt, D as Rn, bv as bn, hH as Cn, el as xn, d_ as _n, B as Y, d as $e, dd as kt, jM as An, bI as Tn, jN as nt, bH as Dn, as as mt, jO as It, jP as Pt, j9 as kn, ds as In } from "../js.d/main-Cm9wS5wt.js";
import { z as Pn } from "./bootstrapController-BMV_i07c.js";
import { p as Ln } from "./AccountAvatar-DtrhoS_d.js";
import { r as On } from "./resolveAssetPreviewSrc-CLlbOCzq.js";
import { b as jn } from "./date_utils-CYURFdnX.js";
import { F as Fn } from "./FileViewer-D5PyYcLh.js";
import { d as Mn } from "./uploadGuard-BK1B6cyC.js";
const Ie = {
    logined: void 0,
    account: null,
    global_vars: {},
    rememberMe: "N",
    remembered_email: "",
    showPassword: !1,
    sessionCheckCompleted: void 0,
    manualLogoutInProgress: !1,
    suppressAuthRequiredAlert: !1,
    loginType: "user"
  },
  Ye = {
    list: () => N.listAccountBiometrics(),
    register: e => N.registerAccountBiometric(e),
    binding: e => Ae("/v1/account/biometric/binding", e),
    challenge: () => Ae("/v1/account/biometric/challenge"),
    login: e => Ae("/v1/account/biometric/login", e),
    unregister: e => Ae("/v1/account/biometric/unregister", e)
  };
function Ue(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var s in n) s !== "__proto__" && (e[s] = n[s]);
  }
  return e;
}
var Vn = {
  read: function (e) {
    return e[0] === '"' && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function (e) {
    return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
  }
};
function gt(e, t) {
  function n(r, l, i) {
    if (!(typeof document > "u")) {
      i = Ue({}, t, i), typeof i.expires == "number" && (i.expires = new Date(Date.now() + i.expires * 864e5)), i.expires && (i.expires = i.expires.toUTCString()), r = encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var u = "";
      for (var a in i) i[a] && (u += "; " + a, i[a] !== !0 && (u += "=" + i[a].split(";")[0]));
      return document.cookie = r + "=" + e.write(l, r) + u;
    }
  }
  function s(r) {
    if (!(typeof document > "u" || arguments.length && !r)) {
      for (var l = document.cookie ? document.cookie.split("; ") : [], i = {}, u = 0; u < l.length; u++) {
        var a = l[u].split("="),
          f = a.slice(1).join("=");
        try {
          var p = decodeURIComponent(a[0]);
          if (p in i || (i[p] = e.read(f, p)), r === p) break;
        } catch {}
      }
      return r ? i[r] : i;
    }
  }
  return Object.create({
    set: n,
    get: s,
    remove: function (r, l) {
      n(r, "", Ue({}, l, {
        expires: -1
      }));
    },
    withAttributes: function (r) {
      return gt(this.converter, Ue({}, this.attributes, r));
    },
    withConverter: function (r) {
      return gt(Ue({}, this.converter, r), this.attributes);
    }
  }, {
    attributes: {
      value: Object.freeze(t)
    },
    converter: {
      value: Object.freeze(e)
    }
  });
}
var Re = gt(Vn, {
  path: "/"
});
function Lt() {
  dn();
}
async function qe(e) {
  return await e();
}
const Kt = "codeshop_active_login_identity";
function Nn(e) {
  const t = fn(e ?? ""),
    n = String(t?.sub ?? "").trim();
  return n ? {
    sub: n,
    license_seq: String(t?.license_seq ?? "").trim()
  } : null;
}
function Bn(e) {
  if (typeof window > "u") return;
  const t = Nn(e);
  t && window.localStorage.setItem(Kt, JSON.stringify(t));
}
function Un() {
  typeof window > "u" || window.localStorage.removeItem(Kt);
}
const Ee = "codeshop_auth_token",
  Gt = 240 * 1e3,
  xt = "codeshop_auth_session_last_active_at",
  qn = 720 * 60 * 1e3,
  Wn = 720 * 60 * 60 * 1e3;
let Se = null,
  Ke = !1,
  We = null;
function zn() {
  return typeof document > "u" || document.visibilityState !== "visible" ? Promise.resolve() : (We || (We = Promise.resolve().then(() => (Pe(), N.checkHealth(!0).then(() => {}))).catch(() => {}).finally(() => {
    We = null;
  })), We);
}
const Je = () => typeof window > "u" ? [] : [window.sessionStorage],
  Xe = () => {
    typeof window > "u" || window.localStorage.removeItem(Ee);
  },
  Pe = () => {
    typeof window > "u" || window.localStorage.setItem(xt, String(Date.now()));
  },
  Le = () => {
    Pe();
  },
  Yt = () => {
    Le(), zn();
  },
  Hn = () => {
    typeof window > "u" || Ke || (window.addEventListener("pagehide", Le), window.addEventListener("beforeunload", Le), document.addEventListener("visibilitychange", Yt), Ke = !0);
  },
  $n = () => {
    typeof window > "u" || !Ke || (window.removeEventListener("pagehide", Le), window.removeEventListener("beforeunload", Le), document.removeEventListener("visibilitychange", Yt), Ke = !1);
  },
  Kn = () => {
    typeof window > "u" || (Se !== null && window.clearInterval(Se), Pe(), Hn(), Se = window.setInterval(Pe, Gt));
  },
  Jt = () => {
    if (typeof window > "u") {
      Se = null;
      return;
    }
    Se !== null && (window.clearInterval(Se), Se = null), $n();
  },
  Gn = () => {
    typeof window < "u" && window.localStorage.removeItem(xt), Re.remove("token_access", {
      path: "/"
    }), Re.remove("token_refresh", {
      path: "/"
    }), Re.remove("auth_session", {
      path: "/"
    }), Re.remove("_csrf", {
      path: "/"
    });
  },
  Yn = () => {
    if (typeof window > "u") return !0;
    if (window.sessionStorage.getItem(Ee)) return !1;
    const e = Number(window.localStorage.getItem(xt) ?? 0);
    return !Number.isFinite(e) || e <= 0 ? !0 : Date.now() - e > (pn() ? Wn : qn);
  },
  Jn = () => (Xe(), Je().some(e => !!e.getItem(Ee))),
  Te = () => {
    const e = N;
    Je().forEach(t => {
      t.removeItem(Ee);
    }), Xe(), Jt(), Gn(), Un(), e.setToken("");
  },
  Ot = (e, t) => {
    const n = N;
    Je().forEach(s => {
      s.removeItem(Ee);
    }), Xe(), typeof window < "u" && (window.sessionStorage.setItem(Ee, e), Pe()), n.setToken(e), Bn(e);
  },
  ot = () => {
    const e = N;
    e.configure({
      keepSession: !0
    }), e.startHealthTick?.(Gt, !0), Kn();
  },
  Xn = () => {
    const e = N;
    e.stopKeepSession?.(), e.stopHealthTick?.(), e.configure({
      keepSession: !1
    }), Jt();
  },
  Zn = () => {
    Xe();
    for (const e of Je()) {
      const t = e.getItem(Ee);
      if (t) return N.setToken(t), t;
    }
    return N.setToken(""), "";
  },
  be = {
    login: (e, t) => N.login(e, t),
    logout: async () => {
      const e = N;
      e.stopKeepSession?.(), e.stopHealthTick?.();
      try {
        await N.logout();
      } catch (t) {
        console.error("로그아웃 서버 통보 실패:", t);
      } finally {
        Re.remove("auth_session", {
          path: "/"
        }), Re.remove("_csrf", {
          path: "/"
        }), e.disconnectRealtime?.("logout_cleanup"), e.setCsrfEnabled?.(!1), e.setAnonymousPacketToken?.(""), Te();
      }
      return {
        ok: !0
      };
    },
    me: () => N.me(),
    bootstrap: async () => {
      const e = await N.http.get("/v1/auth/bootstrap"),
        t = e.data?.bootstrap;
      if (!t) throw new Error(e.message || h("login.bootstrapLoadFailed"));
      return t;
    },
    requestPasswordReset: e => N.requestPasswordReset({
      email: e
    }),
    submitPermissions: ({
      account_seq: e,
      permissions: t,
      groups: n
    }) => N.http.post(`/v1/privilege/account/${e}`, {
      permissions: t,
      groups: n
    })
  },
  Qn = () => h("login.serverUnavailable"),
  eo = () => h("login.licensePeriodExpired"),
  to = () => h("login.invalidEmailOrPassword");
function no(e) {
  if (!(e instanceof Error)) return !1;
  const t = e.message.trim(),
    n = e.status,
    s = String(e.url ?? e.path ?? "");
  return typeof n == "number" && n >= 500 && s.includes("/health") ? !0 : ["Failed to fetch", "Failed to execute", "NetworkError", "/health"].some(r => t.includes(r) || s.includes(r));
}
function jt(e) {
  return no(e) ? Qn() : e?.code === "LICENSE_EXPIRED" ? eo() : e instanceof Error && e.message.trim() === "Invalid email or password" ? to() : e instanceof Error ? e.message || h("login.loginFailed") : h("login.loginFailed");
}
async function oo() {
  await N.checkHealth?.(!0);
}
const so = () => {
    try {
      return !!window.FlutterBiometric;
    } catch {
      return !1;
    }
  },
  ro = e => {
    if (!window.FlutterBiometric) return;
    const t = Number(e?.seq ?? 0);
    try {
      window.FlutterBiometric.postMessage(JSON.stringify({
        type: "LOGIN_SUCCESS",
        account_seq: t
      }));
    } catch (n) {
      console.error("Flutter 메시지 전송 실패:", n);
    }
  },
  st = e => {
    const t = Number(e?.seq ?? 0);
    t <= 0 || hn(t);
  },
  rt = () => {
    const e = new Date().getFullYear(),
      t = [e - 1, e, e + 1];
    gn(t).catch(n => {
      console.error("LoginMutations: 휴일 데이터 로드 실패", n);
    });
  },
  io = ({
    setLoginState: e,
    resetBootstrapState: t,
    refreshBootstrap: n
  }) => {
    const s = async () => {
        t();
        try {
          await n();
        } catch (a) {
          console.error("LoginMutations: 부트스트랩 데이터 로드 실패", a);
        }
      },
      r = () => {
        Xn(), t(), e({
          account: null,
          logined: !1,
          sessionCheckCompleted: !0,
          manualLogoutInProgress: !1,
          suppressAuthRequiredAlert: !0
        });
      },
      l = tt({
        mutationFn: async () => {
          const a = Jn();
          if (a) Zn();else if (Yn()) return Te(), null;
          return qe(async () => {
            try {
              const f = await be.me();
              return (!a || so()) && (await oo()), f.data;
            } catch (f) {
              if (f?.status !== 401) throw f;
              Te();
            }
            return null;
          });
        },
        onSuccess: a => {
          if (!a) {
            r();
            return;
          }
          ot(), rt(), st(a), s(), e({
            account: a,
            logined: !0,
            sessionCheckCompleted: !0,
            manualLogoutInProgress: !1,
            suppressAuthRequiredAlert: !1
          });
        },
        onError: () => {
          r();
        }
      }),
      i = tt({
        mutationFn: async ({
          email: a,
          password: f,
          rememberMe: p,
          loginType: v
        }) => {
          Lt();
          const b = await be.login(a, f);
          if (!mn(b)) throw b.ok === !0 && b.requires_2fa === !0 ? new Error(h("login.twoFactorRequired")) : new Error(b.message || h("login.twoFactorSetupRequired"));
          Ot(b.data.access_token);
          let y;
          try {
            y = await qe(() => be.me());
          } catch (k) {
            throw Te(), k;
          }
          return {
            account: y.data,
            rememberMe: p,
            email: a,
            loginType: v
          };
        },
        onSuccess: ({
          account: a,
          rememberMe: f,
          email: p
        }) => {
          ot(), rt(), st(a), s(), e({
            ...Ie,
            account: a,
            logined: !0,
            sessionCheckCompleted: !0,
            manualLogoutInProgress: !1,
            suppressAuthRequiredAlert: !1,
            rememberMe: f ? "Y" : "N",
            remembered_email: String(p)
          }), ro(a);
        },
        onError: a => {
          t(), B({
            message: jt(a),
            severity: "warning"
          });
        }
      }),
      u = tt({
        mutationFn: async a => {
          Lt();
          const f = await qe(() => Ye.login(a));
          if (!De(f) || !f.data?.access_token) {
            const v = new Error(f.message || h("login.biometricLoginFailed"));
            throw v.biometricRejected = !0, v;
          }
          Ot(f.data.access_token);
          let p;
          try {
            p = await qe(() => be.me());
          } catch (v) {
            throw Te(), v;
          }
          return {
            account: p.data
          };
        },
        onSuccess: ({
          account: a
        }) => {
          ot(), rt(), st(a), s(), e({
            ...Ie,
            account: a,
            logined: !0,
            sessionCheckCompleted: !0,
            manualLogoutInProgress: !1,
            suppressAuthRequiredAlert: !1
          });
        },
        onError: a => {
          if (t(), a.biometricRejected === !0 && typeof window < "u" && window.FlutterBiometric) {
            window.FlutterBiometric.postMessage(JSON.stringify({
              type: "UNREGISTER_BIOMETRIC"
            })), B({
              message: h("login.biometricReset"),
              severity: "warning"
            });
            return;
          }
          B({
            message: jt(a),
            severity: "warning"
          });
        }
      });
    return {
      login: i,
      checkSession: l,
      biometricLogin: u
    };
  },
  ee = {
    homepage: {
      type: "homepage",
      name: "홈페이지",
      description: "메인",
      patterns: ["localhost", "mobile.codeshop.kr"],
      rootPath: "/",
      loginRedirectPath: "/dashboard",
      loginType: "user"
    },
    admin: {
      type: "admin",
      name: "코드마켓 관리자",
      description: "코드마켓 관리자 로그인",
      patterns: ["admin.codeshop.kr"],
      rootPath: "/login",
      loginRedirectPath: "/codemarket",
      loginType: "user"
    },
    pos: {
      type: "pos",
      name: "POS",
      description: "POS 로그인",
      patterns: ["pos.codeshop.kr", "dev-pos.codeshop.kr"],
      rootPath: "/login",
      loginRedirectPath: "/pos",
      loginType: "user"
    },
    kitchen: {
      type: "kitchen",
      name: "주방",
      description: "주방 로그인",
      patterns: ["kitchen.codeshop.kr", "dev-kitchen.codeshop.kr"],
      rootPath: "/login",
      loginRedirectPath: "/kitchen",
      loginType: "user"
    },
    store: {
      type: "store",
      name: "매점",
      description: "매점 로그인",
      patterns: ["store-pos.codeshop.kr", "dev-store-pos.codeshop.kr"],
      rootPath: "/login",
      loginRedirectPath: "/store",
      loginType: "user"
    },
    photoUpload: {
      type: "photoUpload",
      name: "사진 업로드",
      description: "사진 업로드 로그인",
      patterns: ["photo-upload.chumodam.com", "photo-upload.codeshop.kr", "dev-photo-upload.codeshop.kr"],
      rootPath: "/photo-upload/login",
      loginRedirectPath: "/photo-upload",
      loginType: "user"
    },
    photoEditor: {
      type: "photoEditor",
      name: "사진 편집",
      description: "사진 편집 로그인",
      patterns: ["photo-editor.chumodam.com", "photo-editor.codeshop.kr", "dev-photo-editor.codeshop.kr"],
      rootPath: "/photo-editor/login",
      loginRedirectPath: "/photo-editor",
      loginType: "user"
    },
    photo: {
      type: "photo",
      name: "사진 편집",
      description: "사진 편집 로그인",
      patterns: ["photo.codeshop.kr", "dev-photo.codeshop.kr"],
      rootPath: "/photo",
      loginRedirectPath: "/photo-editor",
      loginType: "user"
    },
    bugo: {
      type: "bugo",
      name: "부고",
      description: "부고 랜딩",
      patterns: ["bugo.chumodam.com", "bugo.codeshop.kr", "dev-bugo.codeshop.kr"],
      rootPath: "/",
      loginRedirectPath: "/",
      loginType: "customer"
    },
    partner: {
      type: "partner",
      name: "추모담 파트너",
      description: "파트너 로그인",
      patterns: ["partner.chumodam.com"],
      rootPath: "/partner/login",
      loginRedirectPath: "/partner",
      loginType: "customer"
    },
    chumodam: {
      type: "chumodam",
      name: "추모담 관리자",
      description: "추모담 관리자 로그인",
      patterns: ["chumodam.com"],
      rootPath: "/login",
      loginRedirectPath: "/chumodam",
      loginType: "user"
    }
  },
  Xt = "homepage";
function re(e, t) {
  if (t.includes("*")) {
    const n = t.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\\\*/g, ".*");
    return new RegExp(n).test(e);
  }
  return e.includes(t);
}
function ao(e = window.location.hostname) {
  return ee.admin.patterns.some(t => re(e, t)) ? "admin" : ee.store.patterns.some(t => re(e, t)) ? "store" : ee.pos.patterns.some(t => re(e, t)) ? "pos" : ee.partner.patterns.some(t => re(e, t)) ? "partner" : ee.bugo.patterns.some(t => re(e, t)) ? "bugo" : ee.kitchen.patterns.some(t => re(e, t)) ? "kitchen" : ee.photoUpload.patterns.some(t => re(e, t)) ? "photoUpload" : ee.photoEditor.patterns.some(t => re(e, t)) ? "photoEditor" : ee.photo.patterns.some(t => re(e, t)) ? "photo" : ee.chumodam.patterns.some(t => re(e, t)) ? "chumodam" : Xt;
}
function co(e = Xt) {
  return ee[e];
}
function lo() {
  const e = ao();
  return co(e);
}
const uo = ["개걸레", "개고치", "개너미", "개넘", "개년", "개놈", "개떵", "개라슥", "개보지", "개부랄", "개새", "개세", "개쓰레기", "개씨발", "개자식", "개자지", "개좆", "개지랄", "게부럴", "게자식", "꼴페미", "난교", "난자마셔", "난자먹어", "난자핧아", "내꺼빨아", "내꺼핧아", "내버지", "내자지", "내잠지", "내조지", "네크로필리아", "네토", "니애미", "니애비", "니기미", "니뿡", "니뽕", "니씨브랄", "니아범", "니아비", "닝기미", "닌기미", "니미", "등신", "딸딸이", "딸치다", "떡치다", "똥꼬", "똥꼬충", "똥구녕", "똥꾸뇽", "띠발뇬", "띠팔", "띠펄", "띠풀", "띠벌", "띠벨", "띠빌", "로리", "막대쑤셔줘", "막대핧아줘", "맘충", "메갈", "미친", "미틴", "지랄발광", "버러지", "병신", "백보지", "버따리자지", "벌창같은년", "벵신", "뷩딱", "븅쉰", "븅신", "빙띤", "빙신", "보빨", "보지년", "보짓물", "보쥐", "본디지", "봉알", "부랄", "불알", "붕알", "불여시", "붕가붕가", "붜지", "빠가", "빠가십새", "빠가씹새", "빠구리", "빠굴이", "뻐큐", "뻘소리", "뽕알", "뽀지", "뼝신", "빨통", "사까시", "상년", "사디", "새꺄", "새뀌", "색갸", "색끼", "색스", "색키", "샤발", "써글", "섹쓰", "섹히", "소아성애", "수간", "쓰리썸", "쉐끼", "쉑갸", "쉑쓰", "쉬발", "쉬방", "쉬밸년", "쉬벌", "쉬불", "쉬붕", "쉬빨", "쉬이발", "쉬이방", "쉬이벌", "쉬이불", "쉬이붕", "쉬이빨", "쉬이팔", "쉬이펄", "쉬이풀", "쉬팔", "쉬펄", "쉬풀", "쉽쌔", "쌀것같아", "쌀거같아", "쌀거가타", "쌍넘", "쌍년", "쌍놈", "쌍눔", "쌍보지", "쌔끼", "쌔리", "쌕스", "쌕쓰", "썅년", "썅놈", "썅뇬", "썅늠", "쓉새", "씨가랭넘", "씨가랭년", "씨가랭놈", "씨발", "씨방새", "씨방세", "씨밸", "씨뱅가리", "씨벌", "씨부랄", "씨부럴", "씨불", "씨불알", "씨붕", "씨브럴", "씨블", "씨빨", "씨이발", "씨이벌", "씨이불", "씨이붕", "씨이팔", "씨팔", "씨펄", "씌발", "씌팔", "씹년", "씹물", "씹미랄", "씹버지", "씹보지", "씹부랄", "씹브랄", "씹빵구", "씹뽀지", "씹새", "씹세", "씹자석", "씹자슥", "씹자지", "씹지랄", "씹창", "씹탱", "씹팔", "쓰바새끼", "쓰브랄쉽세", "애미랄", "애미보지", "애미씨뱅", "애미자지", "애미좃물", "애자", "애널", "애미뒤진", "애미없는", "애미창년", "애비뒤진", "애비없는", "애비창놈", "애비충", "애새끼", "어미강간", "어미따먹자", "어미쑤시자", "엄창", "에미", "에비", "염병", "염병할", "염뵹", "엿먹어라", "오랄", "와꾸", "왕버지", "왕자지", "왕잠지", "왕털버지", "왕털보지", "왕털자지", "왕털잠지", "우미쑤셔", "원조교제", "육변기", "육갑", "이년", "이프리트", "인간말종", "일베충", "자기핧아", "자빨러", "작은보지", "잠지", "잠지뚫어", "잠지물마셔", "잠지털", "잠짓물마셔", "잡년", "잡놈", "저년", "점물", "조또", "존나", "존나게", "존니", "좀마니", "좀물", "좀쓰레기", "좁빠라라", "족같내", "족까", "족까내", "좆", "좋만한것", "쥐랄", "지랄", "지랼", "지럴", "지뢀", "쪼까튼", "쪼다", "찌랄", "찐따", "창남", "창녀", "창년", "창놈", "처먹고", "처먹을", "쳐먹고", "쳐쑤셔박어", "촌씨브라리", "촌씨브랑이", "촌씨브랭이", "커닐", "쿠퍼액", "큰보지", "탁탁탁", "틀딱", "틀딱충", "패륜", "패드립", "팸돔", "페도", "페미나치", "펠라", "허덥", "허벌보지", "허벌자지", "허젚", "허졉", "허좁", "헐렁보지", "호로", "호모", "호접", "호좁", "후다", "후장", "후장꽂아", "후장뚫어", "후레자식", "흐접", "흐젚", "흐졉", "bitch", "fuck", "fuckyou", "nflavor", "pennis", "pussy", "짜져", "닥쳐", "입닥쳐", "꺼져", "뒈져", "뒤져"],
  fo = ["공지", "공지사항", "동성애자", "마스터", "SM", "트랜스젠더", "오타쿠", "외설", "바보", "쓰레기", "운영자", "조루", "개떡", "개똥", "사이코", "penis", "sex", "고환", "살인", "혐오", "정력", "정액", "정자", "유두", "유방", "클리토리스", "애무", "오르가즘", "지루", "정상위", "후배위", "왕따", "호구", "히키코모리", "소시오패스", "정신병자", "무뇌", "멍청이", "면상", "대가리", "아가리", "나대다", "꼴값", "꼴보기싫다", "버릇없는", "추잡한", "돌았네", "돌았냐", "돌대가리", "돌아이", "동생강간", "발광", "걸레", "젖꼭지"],
  Zt = uo.filter(e => !fo.includes(e)),
  po = e => {
    const t = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
    let n = "";
    for (let s = 0; s < e.length; s++) {
      const r = e.charCodeAt(s);
      if (r >= 44032 && r <= 55203) {
        const l = Math.floor((r - 44032) / 28 / 21);
        n += t[l];
      } else n += e[s];
    }
    return n;
  },
  mo = () => Zt.filter(e => /[가-힣]/.test(e) && e.length > 2).map(e => po(e)).filter(e => e.length > 2).filter(e => !Ft.includes(e) && !Ft.some(t => e.startsWith(t)) && !go(e)),
  go = e => [/^ㅂㄹ/, /^ㅁㄱ/, /^ㅋㄹ/, /^ㅅㅌ/, /^ㅍㄹ/, /^ㅊㄹ/, /ㄹㄱ$/, /ㅈㄴ$/].some(n => n.test(e)),
  ho = ["ㅅㅂ", "ㅆㅂ", "ㄱㅅㄲ", "ㄱㅈㅅ", "ㅂㅅ", "ㅈㄹ", "ㅈㄴ", "ㅅㄲ", "ㅆㄲ", "ㄲㅈ", "ㄷㅊ", "ㅁㅊ", "ㅁㅊㄴ", "ㄴㅇㅁ", "ㄴㅇㅂ", "ㄷㄱㄹ", "ㅈㄲ", "ㄷㄷㅇ", "ㅎㅌㅊ", "ㅂㄷㅂㅅ", "ㅅㅂㄹ", "ㅈㄲㄴ", "ㄱㅅㅋ", "ㅅㄱㄹ"],
  Ft = ["ㄱㄱ", "ㄴㄴ", "ㄷㄷ", "ㄹㄹ", "ㅁㅁ", "ㅂㅂ", "ㅅㅅ", "ㅇㅇ", "ㅈㅈ", "ㅊㅊ", "ㅋㅋ", "ㅌㅌ", "ㅍㅍ", "ㅎㅎ", "ㅂㄱㅂㄱ", "ㄱㄹㄱㄹ", "ㄷㄱㄷㄱ", "ㅁㄱㅁㄱ", "ㅅㄱㅅㄱ", "ㅈㄱㅈㄱ", "ㅊㄱㅊㄱ", "ㅋㄱㅋㄱ", "ㅌㄱㅌㄱ", "ㅍㄱㅍㄱ", "ㅎㄱㅎㄱ", "ㅂㄹㄱ", "ㅁㄱㅈ", "ㅋㄹㅈ", "ㅂㄹㄴ", "ㅍㄹㅈ", "ㅅㅋㄹ", "ㅂㅇㅅ", "ㅅㅌㄹ", "ㅊㄹㅈ"],
  wo = mo(),
  vo = [...new Set([...wo, ...ho])].sort(),
  yo = ["ㅆlㅂ", "ㅅl발", "씨발", "시ㅂ", "ㅂㅅㅅㄲ", "병ㅅ", "미ㅊ", "뒤ㅈ", "자ㅡl"];
[...new Set([...Zt, ...vo, ...yo])].sort();
const So = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),
  Eo = e => {
    const t = /^[a-zA-Z][a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]{7,}$/,
      n = /[a-zA-Z]/.test(e),
      s = /[0-9]/.test(e);
    return t.test(e) && n && s;
  };
function Ro(e) {
  const t = e;
  return String(t?.avatar || t?.customer_avatar || "").trim();
}
function ht(e) {
  const t = Ro(e);
  t && Ln([On(t, "sm")]);
}
const bo = () => (e, t) => {
    ht(t.account), ht(t.customer_account), "account" in t && Ht(t.account?.is_developer), e.setValues(t);
  },
  Co = () => e => {
    Ht(!1), e.setValues({
      ...Ie,
      logined: !1,
      sessionCheckCompleted: !0,
      manualLogoutInProgress: !1,
      rememberMe: e.getValue("rememberMe") || "N",
      remembered_email: e.getValue("remembered_email") || ""
    });
  },
  xo = () => async (e, t) => {
    const n = () => {
        e.setValues({
          ...Ie,
          logined: !1,
          sessionCheckCompleted: !0,
          manualLogoutInProgress: !0,
          rememberMe: e.getValue("rememberMe") || "N",
          remembered_email: e.getValue("remembered_email") || ""
        });
      },
      s = () => {
        typeof window > "u" || window.location.pathname.startsWith("/login") || (window.history.replaceState(window.history.state, "", "/login"), window.dispatchEvent(new PopStateEvent("popstate")));
      };
    if (be.logout(), n(), t && typeof t == "function") {
      t(), queueMicrotask(s);
      return;
    }
    s();
  },
  _o = () => async (e, t, n, s) => {
    try {
      const r = await be.submitPermissions({
        account_seq: t,
        permissions: n,
        groups: s
      });
      if (r.ok) {
        const l = e.getValue("account");
        l && l.seq === t && e.setValue("account", {
          ...l,
          pv: r.data?.pv || n
        });
      }
      return r;
    } catch (r) {
      throw console.error("권한 저장 실패:", r), r;
    }
  },
  Ao = () => (e, t) => {
    const n = e.getValue("account");
    ht({
      ...n,
      ...t
    }), e.setValue("account", {
      ...n,
      ...t
    });
  },
  To = () => (e, t) => !!e.getValue("account"),
  Do = e => async (t, n) => {
    n === !0 && setTimeout(async () => {
      (await wn({
        title: h("login.changePasswordTitle"),
        message: h("login.tempPasswordChange"),
        confirmText: h("login.ok"),
        cancelText: h("login.later")
      })) && e.open();
    }, 1300);
  },
  ko = (e, t) => e.trim() ? So(e) ? !0 : (B({
    message: h("login.invalidEmailFormat"),
    anchorEl: t.current,
    position: "topLeft"
  }), !1) : (B({
    message: h("login.enterEmail"),
    anchorEl: t.current,
    position: "topLeft"
  }), !1),
  Io = (e, t) => n => ko(n.email, e) ? n.password.trim() ? Eo(n.password) ? !0 : (B({
    message: h("login.passwordRule"),
    anchorEl: t.current,
    position: "topLeft"
  }), !1) : (B({
    message: h("login.enterPassword"),
    anchorEl: t.current,
    position: "topLeft"
  }), !1) : !1,
  Po = () => e => {
    e.getValue("pingClient")?.start();
  },
  Lo = () => e => {
    e.getValue("pingClient")?.stop();
  };
function Oo() {
  return async (e, t) => {
    try {
      const n = await Ye.register(t);
      return n.ok ? ($t(h("login.biometricRegistered")), n) : (B("지문 등록에 실패했습니다."), n);
    } catch (n) {
      return console.error("생체인증 등록 오류:", n), B(h("login.systemError")), {
        ok: !1,
        message: h("login.systemErrorTitle")
      };
    }
  };
}
function jo() {
  return async (e, t) => {
    try {
      const n = await Ye.unregister(t);
      return De(n) ? ($t(t.all ? h("login.biometricUnboundAll") : h("login.biometricUnboundThis")), n) : (B(n.message || h("login.biometricUnbindFailed")), n);
    } catch (n) {
      return console.error("생체인증 해제 오류:", n), B(h("login.systemError")), {
        success: !1,
        message: h("login.systemErrorTitle")
      };
    }
  };
}
function Fo() {
  return async () => {
    try {
      const e = await Ye.list();
      return e.ok || B(h("login.deviceListFailed")), e;
    } catch (e) {
      return console.error("기기 목록 조회 오류:", e), B(h("login.systemError")), {
        ok: !1,
        message: h("login.systemErrorTitle")
      };
    }
  };
}
function Mo() {
  return (e, t) => {
    e.setValue("showBiometricPrompt", t);
  };
}
let Mt = !1;
function Vo() {
  const e = d.useMemo(() => lo(), []),
    t = e.loginType,
    {
      state: n,
      refreshBootstrap: s
    } = Pn(),
    r = vn(),
    l = d.useRef(null),
    i = d.useRef(null),
    u = {
      passwordChange: yn({
        modalId: "password-change-dialog"
      })
    },
    a = Sn({
      stateId: "loginState",
      initialValues: {
        ...Ie,
        loginType: t
      },
      actions: {
        logout: xo(),
        submitUserPermissions: _o(),
        setLoginState: bo(),
        clearLoginState: Co(),
        updateUserInfo: Ao(),
        hasPv: To(),
        registerBiometric: Oo(),
        unregisterBiometric: jo(),
        getBiometricDevices: Fo(),
        toggleBiometricPrompt: Mo(),
        startPing: Po(),
        stopPing: Lo()
      },
      watch: {
        "account.is_passwd_reset": Do(u.passwordChange)
      }
    }),
    f = io({
      setLoginState: a.actions.setLoginState,
      setBootstrapState: n.actions.setBootstrapState,
      resetBootstrapState: n.actions.resetBootstrapState,
      refreshBootstrap: s
    });
  d.useEffect(() => (f.biometricLogin.mutate, () => void 0), [f.biometricLogin.mutate]);
  const p = {
      login: f.login.isPending,
      checkSession: f.checkSession.isPending,
      biometricLogin: f.biometricLogin.isPending
    },
    v = a.useValue("rememberMe"),
    b = a.useValue("account"),
    y = En({
      initialValues: {
        email: "",
        password: "",
        rememberMe: v === "Y",
        loginType: t
      },
      onValidate: Io(l, i),
      onSubmit: E => {
        f.login.mutate(E);
      }
    });
  return d.useEffect(() => {
    if (!Mt) {
      if (Mt = !0, r.getValue("account")) {
        a.setValue("sessionCheckCompleted", !0);
        return;
      }
      a.setValue("sessionCheckCompleted", !1), f.checkSession.mutate();
    }
  }, []), {
    state: a,
    bootstrapState: n,
    account: b,
    loading: p,
    modals: u,
    loginForm: y,
    emailInputRef: l,
    passwordInputRef: i,
    domainInfo: e,
    loginFormHandlers: {
      handlePasswordToggle: () => {
        const E = a.getValue("showPassword");
        a.setValue("showPassword", !E), setTimeout(() => {
          if (i.current) {
            i.current.focus();
            const c = i.current.value.length;
            i.current.setSelectionRange(c, c);
          }
        }, 0);
      },
      handleEmailKeyDown: E => {
        E.key === "Enter" && (E.preventDefault(), i.current?.focus());
      },
      handlePasswordKeyDown: E => {
        E.key === "Enter" && (E.preventDefault(), y.submit());
      }
    }
  };
}
const Qt = 0,
  en = 1,
  tn = 2,
  Vt = 3;
var Nt = Object.prototype.hasOwnProperty;
function wt(e, t) {
  var n, s;
  if (e === t) return !0;
  if (e && t && (n = e.constructor) === t.constructor) {
    if (n === Date) return e.getTime() === t.getTime();
    if (n === RegExp) return e.toString() === t.toString();
    if (n === Array) {
      if ((s = e.length) === t.length) for (; s-- && wt(e[s], t[s]););
      return s === -1;
    }
    if (!n || typeof e == "object") {
      s = 0;
      for (n in e) if (Nt.call(e, n) && ++s && !Nt.call(t, n) || !(n in t) || !wt(e[n], t[n])) return !1;
      return Object.keys(t).length === s;
    }
  }
  return e !== e && t !== t;
}
const le = new WeakMap(),
  ue = () => {},
  j = ue(),
  vt = Object,
  w = e => e === j,
  ie = e => typeof e == "function",
  te = (e, t) => ({
    ...e,
    ...t
  }),
  nn = e => ie(e.then),
  it = {},
  ze = {},
  _t = "undefined",
  je = typeof window != _t,
  yt = typeof document != _t,
  No = je && "Deno" in window,
  Bo = () => je && typeof window.requestAnimationFrame != _t,
  on = (e, t) => {
    const n = le.get(e);
    return [() => !w(t) && e.get(t) || it, s => {
      if (!w(t)) {
        const r = e.get(t);
        t in ze || (ze[t] = r), n[5](t, te(r, s), r || it);
      }
    }, n[6], () => !w(t) && t in ze ? ze[t] : !w(t) && e.get(t) || it];
  };
let St = !0;
const Uo = () => St,
  [Et, Rt] = je && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [ue, ue],
  qo = () => {
    const e = yt && document.visibilityState;
    return w(e) || e !== "hidden";
  },
  Wo = e => (yt && document.addEventListener("visibilitychange", e), Et("focus", e), () => {
    yt && document.removeEventListener("visibilitychange", e), Rt("focus", e);
  }),
  zo = e => {
    const t = () => {
        St = !0, e();
      },
      n = () => {
        St = !1;
      };
    return Et("online", t), Et("offline", n), () => {
      Rt("online", t), Rt("offline", n);
    };
  },
  Ho = {
    isOnline: Uo,
    isVisible: qo
  },
  $o = {
    initFocus: Wo,
    initReconnect: zo
  },
  bt = !Ge.useId,
  Ce = !je || No,
  Ko = e => Bo() ? window.requestAnimationFrame(e) : setTimeout(e, 1),
  ke = Ce ? d.useEffect : d.useLayoutEffect,
  at = typeof navigator < "u" && navigator.connection,
  Bt = !Ce && at && (["slow-2g", "2g"].includes(at.effectiveType) || at.saveData),
  He = new WeakMap(),
  Go = e => vt.prototype.toString.call(e),
  ct = (e, t) => e === `[object ${t}]`;
let Yo = 0;
const Ct = e => {
    const t = typeof e,
      n = Go(e),
      s = ct(n, "Date"),
      r = ct(n, "RegExp"),
      l = ct(n, "Object");
    let i, u;
    if (vt(e) === e && !s && !r) {
      if (i = He.get(e), i) return i;
      if (i = ++Yo + "~", He.set(e, i), Array.isArray(e)) {
        for (i = "@", u = 0; u < e.length; u++) i += Ct(e[u]) + ",";
        He.set(e, i);
      }
      if (l) {
        i = "#";
        const a = vt.keys(e).sort();
        for (; !w(u = a.pop());) w(e[u]) || (i += u + ":" + Ct(e[u]) + ",");
        He.set(e, i);
      }
    } else i = s ? e.toJSON() : t == "symbol" ? e.toString() : t == "string" ? JSON.stringify(e) : "" + e;
    return i;
  },
  Ze = e => {
    if (ie(e)) try {
      e = e();
    } catch {
      e = "";
    }
    const t = e;
    return e = typeof e == "string" ? e : (Array.isArray(e) ? e.length : e) ? Ct(e) : "", [e, t];
  };
let Jo = 0;
const Oe = () => ++Jo;
async function sn(...e) {
  const [t, n, s, r] = e,
    l = te({
      populateCache: !0,
      throwOnError: !0
    }, typeof r == "boolean" ? {
      revalidate: r
    } : r || {});
  let i = l.populateCache;
  const u = l.rollbackOnError;
  let a = l.optimisticData;
  const f = b => typeof u == "function" ? u(b) : u !== !1,
    p = l.throwOnError;
  if (ie(n)) {
    const b = n,
      y = [],
      k = t.keys();
    for (const M of k) !/^\$(inf|sub)\$/.test(M) && b(t.get(M)._k) && y.push(M);
    return Promise.all(y.map(v));
  }
  return v(n);
  async function v(b) {
    const [y] = Ze(b);
    if (!y) return;
    const [k, M] = on(t, y),
      [A, E, c, ne] = le.get(t),
      I = () => {
        const z = A[y];
        return (ie(l.revalidate) ? l.revalidate(k().data, b) : l.revalidate !== !1) && (delete c[y], delete ne[y], z && z[0]) ? z[0](tn).then(() => k().data) : k().data;
      };
    if (e.length < 3) return I();
    let P = s,
      $,
      J = !1;
    const q = Oe();
    E[y] = [q, 0];
    const C = !w(a),
      Z = k(),
      K = Z.data,
      F = Z._c,
      W = w(F) ? K : F;
    if (C && (a = ie(a) ? a(W, K) : a, M({
      data: a,
      _c: W
    })), ie(P)) try {
      P = P(W);
    } catch (z) {
      $ = z, J = !0;
    }
    if (P && nn(P)) if (P = await P.catch(z => {
      $ = z, J = !0;
    }), q !== E[y][0]) {
      if (J) throw $;
      return P;
    } else J && C && f($) && (i = !0, M({
      data: W,
      _c: j
    }));
    if (i && !J) if (ie(i)) {
      const z = i(P, W);
      M({
        data: z,
        error: j,
        _c: j
      });
    } else M({
      data: P,
      error: j,
      _c: j
    });
    if (E[y][1] = Oe(), Promise.resolve(I()).then(() => {
      M({
        _c: j
      });
    }), J) {
      if (p) throw $;
      return;
    }
    return P;
  }
}
const Ut = (e, t) => {
    for (const n in e) e[n][0] && e[n][0](t);
  },
  Xo = (e, t) => {
    if (!le.has(e)) {
      const n = te($o, t),
        s = Object.create(null),
        r = sn.bind(j, e);
      let l = ue;
      const i = Object.create(null),
        u = (p, v) => {
          const b = i[p] || [];
          return i[p] = b, b.push(v), () => b.splice(b.indexOf(v), 1);
        },
        a = (p, v, b) => {
          e.set(p, v);
          const y = i[p];
          if (y) for (const k of y) k(v, b);
        },
        f = () => {
          if (!le.has(e) && (le.set(e, [s, Object.create(null), Object.create(null), Object.create(null), r, a, u]), !Ce)) {
            const p = n.initFocus(setTimeout.bind(j, Ut.bind(j, s, Qt))),
              v = n.initReconnect(setTimeout.bind(j, Ut.bind(j, s, en)));
            l = () => {
              p && p(), v && v(), le.delete(e);
            };
          }
        };
      return f(), [e, r, f, l];
    }
    return [e, le.get(e)[4]];
  },
  Zo = (e, t, n, s, r) => {
    const l = n.errorRetryCount,
      i = r.retryCount,
      u = ~~((Math.random() + .5) * (1 << (i < 8 ? i : 8))) * n.errorRetryInterval;
    !w(l) && i > l || setTimeout(s, u, r);
  },
  Qo = wt,
  [rn, es] = Xo(new Map()),
  ts = te({
    onLoadingSlow: ue,
    onSuccess: ue,
    onError: ue,
    onErrorRetry: Zo,
    onDiscarded: ue,
    revalidateOnFocus: !0,
    revalidateOnReconnect: !0,
    revalidateIfStale: !0,
    shouldRetryOnError: !0,
    errorRetryInterval: Bt ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: Bt ? 5e3 : 3e3,
    compare: Qo,
    isPaused: () => !1,
    cache: rn,
    mutate: es,
    fallback: {}
  }, Ho),
  ns = (e, t) => {
    const n = te(e, t);
    if (t) {
      const {
          use: s,
          fallback: r
        } = e,
        {
          use: l,
          fallback: i
        } = t;
      s && l && (n.use = s.concat(l)), r && i && (n.fallback = te(r, i));
    }
    return n;
  },
  os = d.createContext({}),
  ss = "$inf$",
  an = je && window.__SWR_DEVTOOLS_USE__,
  rs = an ? window.__SWR_DEVTOOLS_USE__ : [],
  is = () => {
    an && (window.__SWR_DEVTOOLS_REACT__ = Ge);
  },
  cn = e => ie(e[1]) ? [e[0], e[1], e[2] || {}] : [e[0], null, (e[1] === null ? e[2] : e[1]) || {}],
  ln = () => {
    const e = d.useContext(os);
    return d.useMemo(() => te(ts, e), [e]);
  },
  as = e => (t, n, s) => e(t, n && ((...l) => {
    const [i] = Ze(t),
      [,,, u] = le.get(rn);
    if (i.startsWith(ss)) return n(...l);
    const a = u[i];
    return w(a) ? n(...l) : (delete u[i], a);
  }), s),
  cs = rs.concat(as),
  ls = e => function (...n) {
    const s = ln(),
      [r, l, i] = cn(n),
      u = ns(s, i);
    let a = e;
    const {
        use: f
      } = u,
      p = (f || []).concat(cs);
    for (let v = p.length; v--;) a = p[v](a);
    return a(r, l || u.fetcher || null, u);
  },
  us = (e, t, n) => {
    const s = t[e] || (t[e] = []);
    return s.push(n), () => {
      const r = s.indexOf(n);
      r >= 0 && (s[r] = s[s.length - 1], s.pop());
    };
  },
  ds = (e, t) => (...n) => {
    const [s, r, l] = cn(n),
      i = (l.use || []).concat(t);
    return e(s, r, {
      ...l,
      use: i
    });
  };
is();
const lt = Ge.use || (e => {
    switch (e.status) {
      case "pending":
        throw e;
      case "fulfilled":
        return e.value;
      case "rejected":
        throw e.reason;
      default:
        throw e.status = "pending", e.then(t => {
          e.status = "fulfilled", e.value = t;
        }, t => {
          e.status = "rejected", e.reason = t;
        }), e;
    }
  }),
  ut = {
    dedupe: !0
  },
  qt = Promise.resolve(j),
  fs = () => ue,
  ps = (e, t, n) => {
    const {
        cache: s,
        compare: r,
        suspense: l,
        fallbackData: i,
        revalidateOnMount: u,
        revalidateIfStale: a,
        refreshInterval: f,
        refreshWhenHidden: p,
        refreshWhenOffline: v,
        keepPreviousData: b,
        strictServerPrefetchWarning: y
      } = n,
      [k, M, A, E] = le.get(s),
      [c, ne] = Ze(e),
      I = d.useRef(!1),
      P = d.useRef(!1),
      $ = d.useRef(c),
      J = d.useRef(t),
      q = d.useRef(n),
      C = () => q.current,
      Z = () => C().isVisible() && C().isOnline(),
      [K, F, W, z] = on(s, c),
      oe = d.useRef({}).current,
      ae = w(i) ? w(n.fallback) ? j : n.fallback[c] : i,
      de = (R, T) => {
        for (const x in oe) {
          const _ = x;
          if (_ === "data") {
            if (!r(R[_], T[_]) && (!w(R[_]) || !r(he, T[_]))) return !1;
          } else if (T[_] !== R[_]) return !1;
        }
        return !0;
      },
      Fe = !I.current,
      Me = d.useMemo(() => {
        const R = K(),
          T = z(),
          x = L => {
            const G = te(L);
            return delete G._k, (() => {
              if (!c || !t || C().isPaused()) return !1;
              if (Fe && !w(u)) return u;
              const ye = w(ae) ? G.data : ae;
              return w(ye) || a;
            })() ? {
              isValidating: !0,
              isLoading: !0,
              ...G
            } : G;
          },
          _ = x(R),
          X = R === T ? _ : x(T);
        let H = _;
        return [() => {
          const L = x(K());
          return de(L, H) ? (H.data = L.data, H.isLoading = L.isLoading, H.isValidating = L.isValidating, H.error = L.error, H) : (H = L, L);
        }, () => X];
      }, [s, c]),
      Q = Dt.useSyncExternalStore(d.useCallback(R => W(c, (T, x) => {
        de(x, T) || R();
      }), [s, c]), Me[0], Me[1]),
      Ve = k[c] && k[c].length > 0,
      fe = Q.data,
      ce = w(fe) ? ae && nn(ae) ? lt(ae) : ae : fe,
      pe = Q.error,
      xe = d.useRef(ce),
      he = b ? w(fe) ? w(xe.current) ? ce : xe.current : fe : ce,
      se = c && w(ce),
      me = d.useRef(null);
    !Ce && Dt.useSyncExternalStore(fs, () => (me.current = !1, me), () => (me.current = !0, me));
    const Qe = me.current;
    y && Qe && !l && se && `${c}`;
    const _e = !c || !t || C().isPaused() || Ve && !w(pe) ? !1 : Fe && !w(u) ? u : l ? w(ce) ? !1 : a : w(ce) || a,
      Ne = w(Q.isValidating) ? _e : Q.isValidating,
      et = w(Q.isLoading) ? _e : Q.isLoading,
      we = d.useCallback(async R => {
        const T = J.current;
        if (!c || !T || P.current || C().isPaused()) return !1;
        let x,
          _,
          X = !0;
        const H = R || {},
          L = !A[c] || !H.dedupe,
          G = () => bt ? !P.current && c === $.current && I.current : c === $.current,
          ve = {
            isValidating: !1,
            isLoading: !1
          },
          ye = () => {
            F(ve);
          },
          o = () => {
            const m = A[c];
            m && m[1] === _ && delete A[c];
          },
          g = {
            isValidating: !0
          };
        w(K().data) && (g.isLoading = !0);
        try {
          if (L && (F(g), n.loadingTimeout && w(K().data) && setTimeout(() => {
            X && G() && C().onLoadingSlow(c, n);
          }, n.loadingTimeout), A[c] = [T(ne), Oe()]), [x, _] = A[c], x = await x, L && setTimeout(o, n.dedupingInterval), !A[c] || A[c][1] !== _) return L && G() && C().onDiscarded(c), !1;
          ve.error = j;
          const m = M[c];
          if (!w(m) && (_ <= m[0] || _ <= m[1] || m[1] === 0)) return ye(), L && G() && C().onDiscarded(c), !1;
          const D = K().data;
          ve.data = r(D, x) ? D : x, L && G() && C().onSuccess(x, c, n);
        } catch (m) {
          o();
          const D = C(),
            {
              shouldRetryOnError: O
            } = D;
          D.isPaused() || (ve.error = m, L && G() && (D.onError(m, c, D), (O === !0 || ie(O) && O(m)) && (!C().revalidateOnFocus || !C().revalidateOnReconnect || Z()) && D.onErrorRetry(m, c, D, U => {
            const V = k[c];
            V && V[0] && V[0](Vt, U);
          }, {
            retryCount: (H.retryCount || 0) + 1,
            dedupe: !0
          })));
        }
        return X = !1, ye(), !0;
      }, [c, s]),
      Be = d.useCallback((...R) => sn(s, $.current, ...R), []);
    if (ke(() => {
      J.current = t, q.current = n, w(fe) || (xe.current = fe);
    }), ke(() => {
      if (!c) return;
      const R = we.bind(j, ut);
      let T = 0;
      C().revalidateOnFocus && (T = Date.now() + C().focusThrottleInterval);
      const _ = us(c, k, (X, H = {}) => {
        if (X == Qt) {
          const L = Date.now();
          C().revalidateOnFocus && L > T && Z() && (T = L + C().focusThrottleInterval, R());
        } else if (X == en) C().revalidateOnReconnect && Z() && R();else {
          if (X == tn) return we();
          if (X == Vt) return we(H);
        }
      });
      return P.current = !1, $.current = c, I.current = !0, F({
        _k: ne
      }), _e && (A[c] || (w(ce) || Ce ? R() : Ko(R))), () => {
        P.current = !0, _();
      };
    }, [c]), ke(() => {
      let R;
      function T() {
        const _ = ie(f) ? f(K().data) : f;
        _ && R !== -1 && (R = setTimeout(x, _));
      }
      function x() {
        !K().error && (p || C().isVisible()) && (v || C().isOnline()) ? we(ut).then(T) : T();
      }
      return T(), () => {
        R && (clearTimeout(R), R = -1);
      };
    }, [f, p, v, c]), d.useDebugValue(he), l) {
      if (!bt && Ce && se) throw new Error("Fallback data is required when using Suspense in SSR.");
      se && (J.current = t, q.current = n, P.current = !1);
      const R = E[c],
        T = !w(R) && se ? Be(R) : qt;
      if (lt(T), !w(pe) && se) throw pe;
      const x = se ? we(ut) : qt;
      !w(he) && se && (x.status = "fulfilled", x.value = !0), lt(x);
    }
    return {
      mutate: Be,
      get data() {
        return oe.data = !0, he;
      },
      get error() {
        return oe.error = !0, pe;
      },
      get isValidating() {
        return oe.isValidating = !0, Ne;
      },
      get isLoading() {
        return oe.isLoading = !0, et;
      }
    };
  },
  ms = ls(ps),
  Wt = bt ? e => {
    e();
  } : Ge.startTransition,
  gs = e => {
    const [, t] = d.useState({}),
      n = d.useRef(!1),
      s = d.useRef(e),
      r = d.useRef({
        data: !1,
        error: !1,
        isValidating: !1
      }),
      l = d.useCallback(i => {
        let u = !1;
        const a = s.current;
        for (const f in i) if (Object.prototype.hasOwnProperty.call(i, f)) {
          const p = f;
          a[p] !== i[p] && (a[p] = i[p], r.current[p] && (u = !0));
        }
        u && !n.current && t({});
      }, []);
    return ke(() => (n.current = !1, () => {
      n.current = !0;
    })), [s, r.current, l];
  },
  hs = () => (e, t, n = {}) => {
    const {
        mutate: s
      } = ln(),
      r = d.useRef(e),
      l = d.useRef(t),
      i = d.useRef(n),
      u = d.useRef(0),
      [a, f, p] = gs({
        data: j,
        error: j,
        isMutating: !1
      }),
      v = a.current,
      b = d.useCallback(async (k, M) => {
        const [A, E] = Ze(r.current);
        if (!l.current) throw new Error("Can’t trigger the mutation: missing fetcher.");
        if (!A) throw new Error("Can’t trigger the mutation: missing key.");
        const c = te(te({
            populateCache: !1,
            throwOnError: !0
          }, i.current), M),
          ne = Oe();
        u.current = ne, p({
          isMutating: !0
        });
        try {
          const I = await s(A, l.current(E, {
            arg: k
          }), te(c, {
            throwOnError: !0
          }));
          return u.current <= ne && (Wt(() => p({
            data: I,
            isMutating: !1,
            error: void 0
          })), c.onSuccess == null || c.onSuccess.call(c, I, A, c)), I;
        } catch (I) {
          if (u.current <= ne && (Wt(() => p({
            error: I,
            isMutating: !1
          })), c.onError == null || c.onError.call(c, I, A, c), c.throwOnError)) throw I;
        }
      }, []),
      y = d.useCallback(() => {
        u.current = Oe(), p({
          data: j,
          error: j,
          isMutating: !1
        });
      }, []);
    return ke(() => {
      r.current = e, l.current = t, i.current = n;
    }), {
      trigger: b,
      reset: y,
      get data() {
        return f.data = !0, v.data;
      },
      get error() {
        return f.error = !0, v.error;
      },
      get isMutating() {
        return f.isMutating = !0, v.isMutating;
      }
    };
  },
  dt = ds(ms, hs),
  zt = {
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    gap: 1,
    borderRadius: "2px",
    px: .75,
    py: .25,
    fontSize: $e.sm,
    lineHeight: 1.4286,
    "@media (hover: hover)": {
      "&:hover": {
        backgroundColor: mt.neutral100
      }
    }
  };
function ft(e) {
  if (!e || typeof e != "object") return !1;
  const t = e,
    n = Number(t.status ?? t.code),
    s = String(t.error ?? t.message ?? "").toLowerCase();
  return n === 415 || s.includes("unsupported media type");
}
function pt() {
  In({
    message: h("components.unsupportedFileType")
  });
}
const xs = d.forwardRef(({
  uploadedFiles: e,
  thumbWidth: t,
  uploaderUrl: n = "/upload/uploader",
  multiple: s = !0,
  height: r = 100,
  onFileUploaded: l,
  onAttachedFilesChange: i,
  onFilesPicked: u,
  uploadFile: a,
  deleteUploadedFiles: f,
  openUploadedFile: p,
  canDeleteUploadedFile: v,
  viewInBrowser: b = !0,
  acceptedFileTypes: y = ["jpg", "jpeg", "png", "gif", "svg", "pdf", "doc", "docx", "xls", "xlsx", "ppt", "txt", "pptx", "hwp", "hwpx", "csv", "json", "xml", "log", "html", "htm", "zip", "rar", "egg"],
  maxFileSize: k = 20,
  deletePvName: M,
  readonly: A = !1,
  variant: E = "box",
  iconSize: c = 16,
  dropzoneText: ne,
  progress: I,
  initialFiles: P,
  ...$
}, J) => {
  const [q, C] = d.useState(e || []),
    [Z, K] = d.useState([]),
    [F, W] = d.useState([]),
    [z, oe] = d.useState(!1),
    ae = Rn(),
    de = bn(),
    Fe = ne ?? de(ae ? "components.attachFile" : "components.dropOrClickToSelect"),
    [Me, Q] = d.useState(null),
    {
      state: Ve
    } = Vo(),
    fe = Ve.useValue("account"),
    {
      isOpen: ce,
      open: pe,
      close: xe
    } = Cn(),
    he = d.useRef(new Set()),
    se = d.useRef(new Set());
  d.useEffect(() => {
    const g = (e || []).map(m => ({
      ...m,
      toDelete: m.uuid ? he.current.has(m.uuid) : se.current.has(m.seq)
    }));
    C(g);
  }, [e]), d.useEffect(() => {
    i?.(F);
  }, [F]);
  const me = d.useRef(!1);
  d.useEffect(() => {
    me.current || !P || P.length === 0 || (me.current = !0, x(P));
  }, []);
  const Qe = o => {
      if (!y || y.length === 0) return !0;
      const g = o.split(".").pop()?.toLowerCase();
      return g ? y.some(m => m.toLowerCase() === g) : !1;
    },
    _e = o => {
      const g = k * 1024 * 1024;
      return o <= g;
    },
    Ne = o => {
      const g = Mn(o),
        m = [],
        D = [],
        O = [];
      return g.forEach(U => {
        Qe(U.name) ? _e(U.size) ? m.push(U) : O.push(U) : D.push(U);
      }), {
        allowed: m,
        rejected: D,
        oversized: O
      };
    },
    {
      trigger: et
    } = dt(n, async (o, {
      arg: g
    }) => await xn({
      endpoint: o,
      method: "POST",
      params: g,
      json: !1
    })),
    {
      trigger: we
    } = dt("/downloader", async (o, {
      arg: g
    }) => await (await fetch(`${_n}${o}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(g)
    })).blob()),
    {
      trigger: Be
    } = dt("/upload/deleter", async (o, {
      arg: g
    }) => await Ae(o, g)),
    At = o => {
      o.preventDefault(), oe(!0);
    },
    R = o => {
      o.preventDefault(), oe(!1);
    },
    T = o => {
      o.preventDefault(), oe(!1), x(Array.from(o.dataTransfer.files));
    },
    x = o => {
      const {
        allowed: g,
        rejected: m,
        oversized: D
      } = Ne(o);
      if (m.length > 0) {
        const O = y?.join(", ") || h("components.allFiles");
        B({
          title: h("components.fileTypeNotAllowed"),
          message: h("components.allowedTypes", {
            types: O
          })
        });
      }
      D.length > 0 && B({
        title: h("components.fileTooLarge"),
        message: h("components.maxFileSize", {
          size: k
        })
      }), g.length > 0 && (u ? u(g) : W(O => [...O, ...g]));
    },
    _ = () => {
      const o = document.createElement("input");
      o.type = "file", o.multiple = s, o.style.display = "none", y && y.length > 0 && (o.accept = y.map(g => `.${g.toLowerCase()}`).join(",")), o.onchange = g => {
        const m = g.target,
          D = Array.from(m.files || []),
          {
            allowed: O,
            rejected: U,
            oversized: V
          } = Ne(D);
        if (U.length > 0) {
          const ge = y?.join(", ") || h("components.allFiles");
          B({
            title: h("components.fileTypeNotAllowed"),
            message: h("components.allowedTypes", {
              types: ge
            })
          });
        }
        V.length > 0 && B({
          title: h("components.fileTooLarge"),
          message: h("components.maxFileSize", {
            size: k
          })
        }), O.length > 0 && (u ? u(O) : W(ge => [...ge, ...O])), o.remove();
      }, document.body.appendChild(o), o.click();
    },
    X = o => {
      W(g => g.filter((m, D) => D !== o));
    },
    H = o => {
      K(g => [...g, o]), o.uuid ? he.current.add(o.uuid) : se.current.add(o.seq), C(g => g.map(m => (o.uuid ? m.uuid === o.uuid : m.seq === o.seq) ? {
        ...m,
        toDelete: !0
      } : m));
    },
    L = async (o, g, m) => {
      if (!m) return !1;
      const D = Z.length > 0,
        O = F.length > 0;
      if (!D && !O) return !1;
      if (D) {
        const V = f ? await f(Z) : await Be({
          files: Z
        });
        if (!De(V)) return console.error("파일 삭제 실패:", V), !1;
        K([]);
      }
      if (!O) return !0;
      const U = new FormData();
      U.append("table_name", o), U.append("data_field_name", g), U.append("data_seq", String(m)), F.forEach((V, ge) => {
        U.append(`files[${ge}]`, V);
      });
      try {
        if (a) {
          let ge = !0;
          for (const un of F) {
            const Tt = await a(un, m, {
              tableName: o,
              dataFieldName: g
            });
            if (!De(Tt)) {
              ft(Tt) && pt(), ge = !1;
              break;
            }
          }
          return W([]), ge;
        }
        const V = await et(U);
        return W([]), V && De(V) ? !0 : (ft(V) && pt(), !1);
      } catch (V) {
        return console.error("🚀 FileUploadBox: Upload error:", V), ft(V) && pt(), W([]), !1;
      }
    },
    G = () => {
      xe(), Q(null);
    },
    ve = async (o, g) => {
      if (!o.toDelete) try {
        if (p) return await p(o), !0;
        const m = o.name.split(".").pop()?.toLowerCase() || "";
        if (b && ["pdf", "jpg", "jpeg", "png", "gif", "bmp", "webp", "svg", "txt", "html", "htm", "csv", "xls", "xlsx", "js", "jsx", "ts", "tsx", "css", "scss", "sass", "less", "php", "py", "java", "c", "cpp", "h", "hpp", "cs", "go", "rs", "rb", "swift", "kt", "scala", "sql", "sh", "bash", "bat", "ps1", "yml", "yaml", "toml", "ini", "conf", "json", "xml", "log", "md", "markdown"].includes(m)) {
          if (o.toDelete) return;
          Q(o), pe();
        } else if (m === "pdf") {
          if (o.toDelete) return;
          Q(o), pe();
        } else if (["csv", "xls", "xlsx"].includes(m)) {
          if (o.toDelete) return;
          Q(o), pe();
        } else {
          const O = await we({
            table_name: o.table_name,
            data_seq: o.seq
          });
          return O && (await kn(O, o.name)), !0;
        }
        return !0;
      } catch (m) {
        return console.error("파일 다운로드 오류:", m), !1;
      }
    },
    ye = () => Z;
  return d.useImperativeHandle(J, () => ({
    handleUploadFiles: L,
    getFilesToDelete: ye
  })), S.jsxs(Y, {
    component: "div",
    sx: E === "icon" ? void 0 : {
      width: "100%"
    },
    ...$,
    style: {
      ...(typeof r == "string" ? {
        height: r
      } : {}),
      ...($.style ?? {})
    },
    children: [!A && E !== "list" && S.jsx(S.Fragment, {
      children: E === "box" ? S.jsxs(Y, {
        onDragOver: At,
        onDragLeave: R,
        onDrop: T,
        onClick: _,
        sx: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: typeof r == "number" ? `${r}px` : (q?.filter(o => !o.toDelete).length ?? 0) > 0 || F.length > 0 ? 52 : r,
          minHeight: typeof r == "number" ? void 0 : (q?.filter(o => !o.toDelete).length ?? 0) > 0 || F.length > 0 ? 52 : 120,
          flexShrink: 0,
          border: "2px dashed",
          borderColor: z ? "primary.main" : "grey.300",
          borderRadius: 2,
          padding: 2,
          textAlign: "center",
          cursor: "pointer",
          backgroundColor: z ? "action.hover" : "background.default",
          transition: "all 0.2s ease",
          "&:hover": {
            borderColor: "primary.main",
            backgroundColor: "action.hover"
          },
          userSelect: "none",
          position: "relative"
        },
        children: [I ? S.jsxs(Y, {
          sx: {
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: .5,
            px: 2
          },
          children: [S.jsxs(Y, {
            className: "font-suit",
            sx: {
              fontSize: $e.sm,
              lineHeight: 1.4286,
              color: "#777777",
              textAlign: "center",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: [I.label, I.percent !== null ? ` ${I.percent}%` : ""]
          }), I.percent !== null ? S.jsx(kt, {
            variant: "determinate",
            value: I.percent,
            sx: {
              borderRadius: 2
            }
          }) : S.jsx(kt, {
            sx: {
              borderRadius: 2
            }
          })]
        }) : null, S.jsxs(Y, {
          className: "font-suit",
          sx: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            fontSize: $e.sm,
            lineHeight: 1.4286,
            visibility: I ? "hidden" : "visible"
          },
          style: {
            color: "#777777",
            whiteSpace: "pre-line",
            textAlign: "center"
          },
          children: [S.jsx(An, {
            sx: {
              color: "#999999",
              fontSize: 20
            }
          }), " ", (q?.filter(o => !o.toDelete).length ?? 0) > 0 || F.length > 0 ? de(ae ? "components.selectFile" : "components.dropOrClickToAddMore") : Fe]
        })]
      }) : E === "icon" ? S.jsx(Tn, {
        onClick: _,
        size: "small",
        color: "primary",
        children: S.jsx(nt, {
          sx: {
            fontSize: c
          }
        })
      }) : null
    }), E !== "icon" && (q?.filter(o => !o.toDelete).length > 0 || !A && E !== "list" && F.length > 0) && S.jsxs(Y, {
      sx: {
        paddingTop: A || E === "list" ? 0 : 2
      },
      children: [q?.filter(o => !o.toDelete).length > 0 && S.jsx(Y, {
        sx: {
          display: "flex",
          flexDirection: "column"
        },
        children: q.filter(o => !o.toDelete).map(o => S.jsx(Dn, {
          title: `${o.user_name || ""} @ ${jn(o.created_time) || ""}`,
          placement: "left",
          arrow: !0,
          enterDelay: 0,
          leaveDelay: 0,
          children: S.jsxs(Y, {
            className: "font-suit",
            sx: zt,
            onClick: () => ve(o),
            children: [S.jsx(nt, {
              sx: {
                fontSize: c
              }
            }), S.jsx(Y, {
              sx: {
                display: "flex",
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              },
              children: S.jsxs("span", {
                children: [o.name, " ", S.jsxs("span", {
                  style: {
                    color: "#999999"
                  },
                  children: ["(", It(o.size), ")"]
                })]
              })
            }), !A && E !== "list" && (v?.(o) === !0 || o.user_seq === fe?.seq || M && Ve.actions.hasPv(M)) && S.jsx(Pt, {
              onClick: g => {
                g.stopPropagation(), H(o);
              },
              sx: {
                fontSize: 16,
                color: "#cccccc",
                cursor: "pointer",
                ml: "auto",
                "&:hover": {
                  color: "#ff4444"
                }
              }
            })]
          })
        }, o.seq))
      }), !A && E !== "list" && F.length > 0 && S.jsx(Y, {
        className: "attached-file-container",
        sx: {
          display: "flex",
          flexDirection: "column",
          color: mt.blue800
        },
        children: F.map((o, g) => S.jsxs(Y, {
          className: "font-suit",
          sx: zt,
          children: [S.jsx(nt, {
            sx: {
              fontSize: 16
            }
          }), S.jsxs("span", {
            children: [o.name, " ", S.jsxs("span", {
              style: {
                color: "#999999"
              },
              children: ["(", It(o.size), ")"]
            })]
          }), S.jsx(Pt, {
            onClick: () => X(g),
            sx: {
              fontSize: 16,
              color: "#cccccc",
              cursor: "pointer",
              ml: "auto",
              "&:hover": {
                color: "#ff4444"
              }
            }
          })]
        }, g))
      })]
    }), E !== "icon" && (A || E === "list") && q?.filter(o => !o.toDelete).length === 0 && S.jsx(Y, {
      sx: {
        paddingTop: 0
      },
      children: S.jsx(Y, {
        className: "font-suit",
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 1,
          px: .75,
          py: .25,
          fontSize: $e.sm,
          lineHeight: 1.4286,
          color: mt.gray500
        },
        children: de("components.noFiles")
      })
    }), S.jsx(Fn, {
      open: ce,
      onClose: G,
      file: Me
    })]
  });
});
export { xs as F, Vo as u };