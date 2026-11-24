import { c as r } from "./companyInfo-Btqdi-Wt.js";
import { bT as a } from "../js.d/main-Cm9wS5wt.js";
const v = "2026-12-12",
  l = "2026-12-12",
  T = () => ({
    legalName: r.legalName,
    ceo: r.ceo,
    businessNumber: r.businessNumber,
    ecommerceNumber: r.ecommerceNumber,
    address: r.address,
    businessType: r.businessType,
    tel: r.tel,
    email: r.email,
    officerName: r.privacyOfficer.name,
    officerTel: r.privacyOfficer.tel
  });
function s(e, m, i) {
  const c = T(),
    t = {
      ...c,
      effectiveDate: m
    };
  return e.map(([p, y]) => ({
    title: i(`policy.${p}`, t),
    paragraphs: y.flatMap(P => typeof P == "string" ? [i(`policy.${P}`, t)] : c[P.when] ? [i(`policy.${P.key}`, t)] : [])
  }));
}
const o = [["privacy01Title", ["privacy01P01", "privacy01P02"]], ["privacy02Title", ["privacy02P01", "privacy02P02", "privacy02P03", "privacy02P04", "privacy02P05", "privacy02P06", "privacy02P07", "privacy02P08", "privacy02P09", "privacy02P10", "privacy02P11", "privacy02P12", "privacy02P13", "privacy02P14", "privacy02P15", "privacy02P16", "privacy02P17"]], ["privacy03Title", ["privacy03P01", "privacy03P02", "privacy03P03", "privacy03P04", "privacy03P05", "privacy03P06", "privacy03P07", "privacy03P08", "privacy03P09", "privacy03P10", "privacy03P11", "privacy03P12", "privacy03P13", "privacy03P14"]], ["privacy04Title", ["privacy04P01", "privacy04P02", "privacy04P03", "privacy04P04", "privacy04P05", "privacy04P06", "privacy04P07", "privacy04P08", "privacy04P09", "privacy04P10"]], ["privacy05Title", ["privacy05P01", "privacy05P02", "privacy05P03", "privacy05P04", "privacy05P05", "privacy05P06", "privacy05P07", "privacy05P08", "privacy05P09", "privacy05P10", "privacy05P11", "privacy05P12"]], ["privacy06Title", ["privacy06P01", "privacy06P02", "privacy06P03", "privacy06P04", "privacy06P05", "privacy06P06", "privacy06P07", "privacy06P08", "privacy06P09", "privacy06P10", "privacy06P11", "privacy06P12", "privacy06P13", "privacy06P14", "privacy06P15", "privacy06P16", "privacy06P17", "privacy06P18"]], ["privacy07Title", ["privacy07P01", "privacy07P02", "privacy07P03", "privacy07P04", "privacy07P05"]], ["privacy08Title", ["privacy08P01", "privacy08P02", "privacy08P03", "privacy08P04", "privacy08P05", "privacy08P06", "privacy08P07", "privacy08P08"]], ["privacy09Title", ["privacy09P01", "privacy09P02", "privacy09P03", "privacy09P04", "privacy09P05", "privacy09P06", "privacy09P07", "privacy09P08", "privacy09P09", "privacy09P10", "privacy09P11", "privacy09P12"]], ["privacy10Title", ["privacy10P01", "privacy10P02"]], ["privacy11Title", ["privacy11P01", "privacy11P02", "privacy11P03", "privacy11P04"]], ["privacy12Title", ["privacy12P01", "privacy12P02", "privacy12P03", "privacy12P04", "privacy12P05"]], ["privacy13Title", ["privacy13P01", "privacy13P02", "privacy13P03", "privacy13P04", "privacy13P05"]], ["privacy14Title", ["privacy14P01", "privacy14P02", "privacy14P03", "privacy14P04"]], ["privacy15Title", ["privacy15P01", "privacy15P02", "privacy15P03", "privacy15P04", "privacy15P05", "privacy15P06", "privacy15P07"]], ["privacy16Title", ["privacy16P01", "privacy16P02", {
    key: "privacy16P03",
    when: "email"
  }, "privacy16P04"]], ["privacy17Title", ["privacy17P01", "privacy17P02", "privacy17P03", "privacy17P04"]], ["privacy18Title", ["privacy18P01", "privacy18P02"]]],
  n = [["terms01Title", ["terms01P01"]], ["terms02Title", ["terms02P01", "terms02P02", "terms02P03", "terms02P04", "terms02P05", "terms02P06", "terms02P07"]], ["terms03Title", ["terms03P01", "terms03P02", "terms03P03", "terms03P04"]], ["terms04Title", ["terms04P01", "terms04P02", "terms04P03", "terms04P04", "terms04P05", "terms04P06", "terms04P07"]], ["terms05Title", ["terms05P01", "terms05P02", "terms05P03", "terms05P04"]], ["terms06Title", ["terms06P01", "terms06P02", "terms06P03", "terms06P04", "terms06P05"]], ["terms07Title", ["terms07P01", "terms07P02", "terms07P03"]], ["terms08Title", ["terms08P01", "terms08P02"]], ["terms09Title", ["terms09P01", "terms09P02", "terms09P03", "terms09P04", "terms09P05", "terms09P06", "terms09P07", "terms09P08", "terms09P09", "terms09P10", "terms09P11"]], ["terms10Title", ["terms10P01", "terms10P02", "terms10P03", "terms10P04"]], ["terms11Title", ["terms11P01", "terms11P02", "terms11P03", "terms11P04"]], ["terms12Title", ["terms12P01", "terms12P02", "terms12P03", "terms12P04"]], ["terms13Title", ["terms13P01", "terms13P02", "terms13P03", "terms13P04"]], ["terms14Title", ["terms14P01", "terms14P02", "terms14P03", "terms14P04", "terms14P05", "terms14P06", "terms14P07", "terms14P08"]], ["terms15Title", ["terms15P01"]], ["terms16Title", ["terms16P01", "terms16P02", "terms16P03", "terms16P04", "terms16P05", "terms16P06", "terms16P07", "terms16P08", "terms16P09"]], ["terms17Title", ["terms17P01", "terms17P02", "terms17P03", "terms17P04", "terms17P05", "terms17P06", "terms17P07"]], ["terms18Title", ["terms18P01", "terms18P02", "terms18P03", "terms18P04", "terms18P05"]], ["terms19Title", ["terms19P01", "terms19P02", "terms19P03"]], ["terms20Title", ["terms20P01", "terms20P02", "terms20P03"]], ["terms21Title", ["terms21P01", "terms21P02", "terms21P03", "terms21P04"]], ["terms22Title", ["terms22P01", "terms22P02", "terms22P03", "terms22P04"]], ["terms23Title", ["terms23P01", "terms23P02"]], ["terms24Title", ["terms24P01", "terms24P02"]], ["terms25Title", ["terms25P01", "terms25P02", "terms25P03", {
    key: "terms25P04",
    when: "ecommerceNumber"
  }, "terms25P05", "terms25P06", {
    key: "terms25P07",
    when: "tel"
  }, {
    key: "terms25P08",
    when: "email"
  }]], ["terms26Title", ["terms26P01"]]],
  b = (e = a) => s(o, v, e),
  N = (e = a) => s(n, l, e);
export { v as a, l as b, b as p, N as t };