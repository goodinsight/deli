import { l as e } from "./i18nLabels-BNTLL7cu.js";
const a = ["legal", "job", "etc"],
  n = e({
    legal: "hr.trainingCategoryLegal",
    job: "hr.trainingCategoryJob",
    etc: "hr.valOther"
  }),
  l = e({
    legal: "hr.trainingCategoryLegalShort",
    job: "hr.trainingCategoryJobShort",
    etc: "hr.valOther"
  }),
  g = {
    legal: {
      color: "#b91c1c",
      bg: "#fee2e2"
    },
    job: {
      color: "#1d4ed8",
      bg: "#dbeafe"
    },
    etc: {
      color: "#475569",
      bg: "#f1f5f9"
    }
  };
function c(r, o) {
  return !r && !o ? "" : !o || o === r ? r : r ? `${r} ~ ${o}` : `~ ${o}`;
}
function i(r) {
  return r >= 1024 * 1024 ? `${(r / (1024 * 1024)).toFixed(1)} MB` : r >= 1024 ? `${Math.round(r / 1024)} KB` : `${r} B`;
}
export { a as T, l as a, g as b, n as c, i as f, c as p };