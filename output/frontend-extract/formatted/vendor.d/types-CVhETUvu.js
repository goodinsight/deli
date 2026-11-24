import { bT as r } from "../js.d/main-Cm9wS5wt.js";
import { l as a } from "./i18nLabels-BNTLL7cu.js";
const i = ["휘발유", "경유", "LPG", "전기", "하이브리드", "수소"],
  s = ["KB국민은행", "신한은행", "우리은행", "하나은행", "NH농협은행", "IBK기업은행", "카카오뱅크", "토스뱅크", "케이뱅크", "SC제일은행", "한국씨티은행", "KDB산업은행", "Sh수협은행", "iM뱅크(대구은행)", "부산은행", "경남은행", "광주은행", "전북은행", "제주은행", "우체국", "새마을금고", "신협", "지역농축협", "저축은행"],
  v = ["미혼", "기혼", "이혼", "사별"],
  c = ["일반", "신입", "경력", "인턴", "장애인", "고령자", "청년"],
  y = ["주간근무", "야간근무", "교대근무", "재택근무", "혼합근무", "선택근무", "기타"],
  S = ["jumin_num", "bank_account", "emergency1_name", "emergency1_relation", "emergency1_phone", "emergency2_name", "emergency2_relation", "emergency2_phone"],
  E = a({
    male: "hr.employeeGenderMale",
    female: "hr.employeeGenderFemale"
  }),
  m = a({
    monthly: "hr.employeePayMonthly",
    annual: "hr.employeePayAnnual",
    hourly: "hr.employeePayHourly",
    daily: "hr.employeePayDaily"
  }),
  p = a({
    parental: "hr.employeeLeaveParental",
    maternity: "hr.employeeLeaveMaternity",
    sick: "hr.employeeLeaveSick",
    other: "hr.valOther"
  }),
  u = ["군필", "미필", "면제", "해당없음", "복무중"],
  t = {
    휘발유: "hr.valFuelGasoline",
    경유: "hr.valFuelDiesel",
    LPG: "hr.valFuelLpg",
    전기: "hr.valFuelElectric",
    하이브리드: "hr.valFuelHybrid",
    수소: "hr.valFuelHydrogen",
    미혼: "hr.valMaritalSingle",
    기혼: "hr.valMaritalMarried",
    이혼: "hr.valMaritalDivorced",
    사별: "hr.valMaritalWidowed",
    일반: "hr.valHireGeneral",
    신입: "hr.valHireNew",
    경력: "hr.valHireExperienced",
    인턴: "hr.valHireIntern",
    장애인: "hr.valHireDisabled",
    고령자: "hr.valHireSenior",
    청년: "hr.valHireYouth",
    주간근무: "hr.valModeDay",
    야간근무: "hr.valModeNight",
    교대근무: "hr.valModeShift",
    재택근무: "hr.valModeRemote",
    혼합근무: "hr.valModeHybrid",
    선택근무: "hr.valModeFlexible",
    기타: "hr.valOther",
    군필: "hr.valMilitaryServed",
    미필: "hr.valMilitaryNotServed",
    면제: "hr.valMilitaryExempt",
    해당없음: "hr.valMilitaryNa",
    복무중: "hr.valMilitaryServing",
    고졸: "hr.valDegreeHighSchool",
    전문학사: "hr.valDegreeAssociate",
    학사: "hr.valDegreeBachelor",
    석사: "hr.valDegreeMaster",
    박사: "hr.valDegreeDoctor",
    졸업: "hr.valSchoolGraduated",
    재학: "hr.valSchoolEnrolled",
    휴학: "hr.valSchoolOnLeave",
    중퇴: "hr.valSchoolDropped",
    수료: "hr.valSchoolCompleted",
    "은행 제출용": "hr.valPurposeBank",
    "관공서 제출용": "hr.valPurposeGov",
    "회사 제출용": "hr.valPurposeCompany",
    "학교 제출용": "hr.valPurposeSchool",
    대출용: "hr.valPurposeLoan"
  };
function L(e) {
  const l = t[e];
  return l ? r(l) : e;
}
const _ = [0, 1, 3, 6],
  M = a({
    regular: "hr.employeeTypeRegular",
    contract: "hr.employeeTypeContract",
    parttime: "hr.employeeTypeParttime",
    intern: "hr.valHireIntern",
    freelance: "hr.employeeTypeFreelance"
  }),
  d = a({
    active: "hr.employeeStatusActive",
    leave: "hr.employeeStatusLeave",
    resigned: "hr.employeeStatusResigned"
  }),
  T = "status";
function g(e) {
  return e === o ? "" : e === "leave" || e === "resigned" ? e : "active";
}
const o = "all",
  A = [{
    value: "active",
    get label() {
      return r("hr.employeeStatusActive");
    }
  }, {
    value: "leave",
    get label() {
      return r("hr.employeeStatusLeave");
    }
  }, {
    value: "resigned",
    get label() {
      return r("hr.employeeStatusResigned");
    }
  }, {
    value: "",
    get label() {
      return r("hr.all");
    }
  }];
export { s as B, m as C, M as E, E as G, c as H, p as L, u as M, _ as P, A as S, y as W, d as a, S as b, v as c, i as d, T as e, o as f, L as h, g as p };