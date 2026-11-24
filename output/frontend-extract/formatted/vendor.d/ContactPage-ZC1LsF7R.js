import { j as e } from "./react-CjxcGQav.js";
import { c8 as m, ak as u, B as o, s as c, as as s, f as i, aB as d, al as n, ao as b, b as p } from "../js.d/main-Cm9wS5wt.js";
import "./stylis-DdLD6a3t.js";
const f = () => t => {
    t.setValue("contactSubmitted", !0);
  },
  x = {
    contactSubmitted: !1
  },
  g = {
    category: "광고",
    company: "",
    name: "",
    email: "",
    message: ""
  };
function h() {
  const t = m({
      stateId: "companyState",
      initialValues: x,
      actions: {
        markContactSubmitted: f()
      }
    }),
    a = u({
      formId: "contactForm",
      initialValues: g,
      onValidate: r => !!r.name.trim() && !!r.email.trim() && !!r.message.trim(),
      onSubmit: () => {
        t.actions.markContactSubmitted();
      }
    });
  return {
    state: t,
    form: a
  };
}
const S = ["광고", "제휴", "기관 라이선스", "기타"],
  y = S.map(t => ({
    value: t,
    label: t
  }));
function W() {
  const {
      state: t,
      form: a
    } = h(),
    l = t.useValue("contactSubmitted") ?? !1;
  return e.jsxs(o, {
    sx: {
      display: "flex",
      flexDirection: "column",
      px: 2,
      py: 3
    },
    children: [e.jsx(o, {
      component: "p",
      sx: {
        m: 0,
        textAlign: "center",
        fontSize: "1rem",
        color: c[500]
      },
      children: "배너광고, 콘텐츠 제휴, SEI 데이터 라이선스 등 협력 제안을 남겨주세요."
    }), l && e.jsx(o, {
      sx: {
        mt: 2.5,
        borderRadius: 1.5,
        bgcolor: s.amber50,
        p: 1.5,
        textAlign: "center",
        fontSize: "1rem",
        fontWeight: i.semibold,
        color: s.amber700
      },
      children: "데모 버전에서는 문의가 접수되지 않습니다."
    }), e.jsxs(o, {
      component: "form",
      onSubmit: a.submit,
      sx: {
        mt: 3,
        display: "grid",
        gap: 2.5
      },
      children: [e.jsx(d, {
        form: a,
        name: "category",
        label: "문의 구분",
        options: y,
        fullWidth: !0,
        size: "medium"
      }), e.jsx(n, {
        form: a,
        name: "company",
        label: "회사/기관명",
        placeholder: "(주)창업스타트업",
        fullWidth: !0,
        size: "medium"
      }), e.jsx(n, {
        form: a,
        name: "name",
        label: "담당자 이름",
        placeholder: "홍길동",
        required: !0,
        fullWidth: !0,
        size: "medium"
      }), e.jsx(b, {
        form: a,
        name: "email",
        label: "회신 이메일",
        placeholder: "you@example.com",
        required: !0,
        fullWidth: !0,
        size: "medium"
      }), e.jsx(n, {
        form: a,
        name: "message",
        label: "문의 내용",
        placeholder: "문의하실 내용을 자유롭게 남겨주세요.",
        required: !0,
        multiline: !0,
        rows: 5,
        fullWidth: !0,
        size: "medium"
      }), e.jsx(o, {
        component: "button",
        type: "submit",
        sx: {
          width: "100%",
          cursor: "pointer",
          borderRadius: 1.5,
          border: "none",
          bgcolor: p[600],
          py: 2,
          fontSize: "1.125rem",
          fontWeight: i.bold,
          color: "#fff"
        },
        children: "문의 보내기"
      })]
    })]
  });
}
export { W as default };