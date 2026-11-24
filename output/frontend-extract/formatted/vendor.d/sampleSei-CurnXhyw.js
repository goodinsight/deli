import { j as n } from "./react-CjxcGQav.js";
import { B as g, s as a, b as h, f as s, d as i, as as k } from "../js.d/main-Cm9wS5wt.js";
const t = {
  S: {
    bg: h[900],
    color: "#fff"
  },
  A: {
    bg: h[100],
    color: h[700]
  },
  B: {
    bg: a[100],
    color: a[600]
  },
  C: {
    bg: a[50],
    color: a[400]
  }
};
function d({
  grade: r
}) {
  const e = t[r];
  return n.jsx(g, {
    component: "span",
    sx: {
      display: "inline-block",
      width: 32,
      borderRadius: .5,
      py: .25,
      textAlign: "center",
      fontSize: {
        xs: i.base,
        md: i.sm
      },
      fontWeight: s.black,
      bgcolor: e.bg,
      color: e.color
    },
    children: r
  });
}
const o = {
  width: 32,
  fontSize: {
    xs: i.base,
    md: i.sm
  },
  fontWeight: s.bold
};
function p({
  entry: r
}) {
  const e = r.prevRank - r.rank;
  return e > 0 ? n.jsxs(g, {
    component: "span",
    sx: {
      ...o,
      color: k.red500
    },
    children: ["▲", e]
  }) : e < 0 ? n.jsxs(g, {
    component: "span",
    sx: {
      ...o,
      color: k.blue500
    },
    children: ["▼", -e]
  }) : n.jsx(g, {
    component: "span",
    sx: {
      ...o,
      color: a[300]
    },
    children: "—"
  });
}
const m = [{
    key: "local",
    label: "광역지자체"
  }, {
    key: "univ",
    label: "대학"
  }, {
    key: "bi",
    label: "창업보육센터"
  }, {
    key: "ac",
    label: "액셀러레이터"
  }],
  R = {
    local: ["창업친화도", "창업기업 수", "기술창업 비율", "투자유치 규모", "창업지원 예산", "기업 생존율", "창업교육 운영", "민간투자 규모", "창업지원 인프라"],
    univ: ["창업강좌 운영", "창업동아리", "학생창업", "교원창업", "창업기업 수", "투자유치", "매출·고용", "특허·기술이전", "창업지원단·보육센터", "창업공간·AC 운영"],
    bi: ["입주기업 생존율", "입주기업 매출 성장", "투자유치 연계", "졸업기업 성과", "보육 프로그램", "공실률", "전담인력 전문성"],
    ac: ["보육기업 수", "후속투자 유치율", "TIPS 추천 성과", "데모데이 운영", "투자 집행 규모", "졸업기업 생존율"]
  },
  v = {
    local: [{
      rank: 1,
      prevRank: 1,
      name: "서울특별시",
      score: 94.2,
      grade: "S",
      highlight: "투자유치·인프라 1위"
    }, {
      rank: 2,
      prevRank: 3,
      name: "대전광역시",
      score: 91.8,
      grade: "S",
      highlight: "기술창업 비율 1위"
    }, {
      rank: 3,
      prevRank: 2,
      name: "경기도",
      score: 90.5,
      grade: "S",
      highlight: "민간투자 규모 1위"
    }, {
      rank: 4,
      prevRank: 4,
      name: "부산광역시",
      score: 84.1,
      grade: "A",
      highlight: "창업지원 예산 확대"
    }, {
      rank: 5,
      prevRank: 6,
      name: "인천광역시",
      score: 82.7,
      grade: "A",
      highlight: "바이오 클러스터 성장"
    }, {
      rank: 6,
      prevRank: 5,
      name: "경상북도",
      score: 80.9,
      grade: "A",
      highlight: "제조 딥테크 강세"
    }, {
      rank: 7,
      prevRank: 11,
      name: "광주광역시",
      score: 79.4,
      grade: "A",
      highlight: "AI 집적단지 효과"
    }, {
      rank: 8,
      prevRank: 7,
      name: "대구광역시",
      score: 78.2,
      grade: "A",
      highlight: "의료·로봇 특화"
    }, {
      rank: 9,
      prevRank: 8,
      name: "충청남도",
      score: 76.8,
      grade: "B",
      highlight: "디스플레이 연계 창업"
    }, {
      rank: 10,
      prevRank: 10,
      name: "울산광역시",
      score: 75.3,
      grade: "B",
      highlight: "에너지 신산업 전환"
    }, {
      rank: 11,
      prevRank: 9,
      name: "충청북도",
      score: 74.6,
      grade: "B",
      highlight: "바이오헬스 집중"
    }, {
      rank: 12,
      prevRank: 13,
      name: "전라남도",
      score: 72.1,
      grade: "B",
      highlight: "그린에너지 창업 증가"
    }, {
      rank: 13,
      prevRank: 12,
      name: "강원특별자치도",
      score: 71.5,
      grade: "B",
      highlight: "디지털헬스 특구"
    }, {
      rank: 14,
      prevRank: 14,
      name: "전북특별자치도",
      score: 70.2,
      grade: "B",
      highlight: "농식품 융합창업"
    }, {
      rank: 15,
      prevRank: 16,
      name: "경상남도",
      score: 69.8,
      grade: "C",
      highlight: "방산·조선 연계 시동"
    }, {
      rank: 16,
      prevRank: 15,
      name: "제주특별자치도",
      score: 68.4,
      grade: "C",
      highlight: "관광테크 중심"
    }, {
      rank: 17,
      prevRank: 17,
      name: "세종특별자치시",
      score: 66.9,
      grade: "C",
      highlight: "행정테크 실증 확대"
    }],
    univ: [{
      rank: 1,
      prevRank: 1,
      name: "KAIST",
      region: "대전",
      score: 96.1,
      grade: "S",
      highlight: "교원창업·기술이전 1위"
    }, {
      rank: 2,
      prevRank: 2,
      name: "서울대학교",
      region: "서울",
      score: 93.4,
      grade: "S",
      highlight: "학생창업 기업 수 1위"
    }, {
      rank: 3,
      prevRank: 4,
      name: "포스텍",
      region: "포항",
      score: 91.2,
      grade: "S",
      highlight: "교원창업 비율 1위"
    }, {
      rank: 4,
      prevRank: 5,
      name: "한양대학교",
      region: "서울",
      score: 88.7,
      grade: "A",
      highlight: "보육기업 매출 성장 1위"
    }, {
      rank: 5,
      prevRank: 3,
      name: "연세대학교",
      region: "서울",
      score: 87.9,
      grade: "A",
      highlight: "투자유치 총액 상위"
    }, {
      rank: 6,
      prevRank: 6,
      name: "고려대학교",
      region: "서울",
      score: 86.3,
      grade: "A",
      highlight: "창업강좌 운영 우수"
    }, {
      rank: 7,
      prevRank: 8,
      name: "성균관대학교",
      region: "수원",
      score: 84.5,
      grade: "A",
      highlight: "반도체 특화 창업"
    }, {
      rank: 8,
      prevRank: 7,
      name: "UNIST",
      region: "울산",
      score: 83.8,
      grade: "A",
      highlight: "탄소중립 딥테크"
    }, {
      rank: 9,
      prevRank: 10,
      name: "GIST",
      region: "광주",
      score: 81.2,
      grade: "A",
      highlight: "AI 창업 급성장"
    }, {
      rank: 10,
      prevRank: 9,
      name: "부산대학교",
      region: "부산",
      score: 79.6,
      grade: "B",
      highlight: "지역 창업 허브"
    }, {
      rank: 11,
      prevRank: 12,
      name: "경북대학교",
      region: "대구",
      score: 77.4,
      grade: "B",
      highlight: "IT 융합 창업"
    }, {
      rank: 12,
      prevRank: 11,
      name: "전남대학교",
      region: "광주",
      score: 76.1,
      grade: "B",
      highlight: "에너지밸리 연계"
    }, {
      rank: 13,
      prevRank: 14,
      name: "충남대학교",
      region: "대전",
      score: 74.8,
      grade: "B",
      highlight: "대덕특구 연계 보육"
    }, {
      rank: 14,
      prevRank: 13,
      name: "인하대학교",
      region: "인천",
      score: 73.9,
      grade: "B",
      highlight: "항공·모빌리티 특화"
    }, {
      rank: 15,
      prevRank: 15,
      name: "제주대학교",
      region: "제주",
      score: 70.5,
      grade: "C",
      highlight: "관광테크 창업"
    }],
    bi: [{
      rank: 1,
      prevRank: 2,
      name: "서울대 캠퍼스타운 창업HERE-RO",
      region: "서울",
      score: 93.7,
      grade: "S",
      highlight: "졸업기업 투자연계 1위"
    }, {
      rank: 2,
      prevRank: 1,
      name: "KAIST 창업원 보육센터",
      region: "대전",
      score: 92.9,
      grade: "S",
      highlight: "딥테크 보육 특화"
    }, {
      rank: 3,
      prevRank: 3,
      name: "포항테크노파크 보육센터",
      region: "포항",
      score: 89.4,
      grade: "A",
      highlight: "제조 스케일업 지원"
    }, {
      rank: 4,
      prevRank: 6,
      name: "한양대 창업보육센터",
      region: "서울",
      score: 87.1,
      grade: "A",
      highlight: "입주기업 생존율 92%"
    }, {
      rank: 5,
      prevRank: 4,
      name: "판교 스타트업캠퍼스 BI",
      region: "성남",
      score: 86.5,
      grade: "A",
      highlight: "후속투자 유치 강세"
    }, {
      rank: 6,
      prevRank: 5,
      name: "부산대 창업보육센터",
      region: "부산",
      score: 83.2,
      grade: "A",
      highlight: "해양·물류 특화"
    }, {
      rank: 7,
      prevRank: 9,
      name: "광주과기원 창업진흥센터",
      region: "광주",
      score: 81.8,
      grade: "A",
      highlight: "AI 기업 집중 보육"
    }, {
      rank: 8,
      prevRank: 7,
      name: "강원창조경제혁신센터 BI",
      region: "춘천",
      score: 78.6,
      grade: "B",
      highlight: "디지털헬스 특화"
    }, {
      rank: 9,
      prevRank: 8,
      name: "전북대 창업보육센터",
      region: "전주",
      score: 76.9,
      grade: "B",
      highlight: "농식품 융합 보육"
    }, {
      rank: 10,
      prevRank: 10,
      name: "제주테크노파크 BI",
      region: "제주",
      score: 74.3,
      grade: "B",
      highlight: "청정바이오 특화"
    }],
    ac: [{
      rank: 1,
      prevRank: 1,
      name: "프라이머스벤처스",
      region: "서울",
      score: 95,
      grade: "S",
      highlight: "후속투자 유치율 1위"
    }, {
      rank: 2,
      prevRank: 3,
      name: "블루포인트파트너스",
      region: "대전",
      score: 93.2,
      grade: "S",
      highlight: "딥테크 배치 최다"
    }, {
      rank: 3,
      prevRank: 2,
      name: "스파크랩코리아",
      region: "서울",
      score: 91.6,
      grade: "S",
      highlight: "글로벌 진출 연계"
    }, {
      rank: 4,
      prevRank: 4,
      name: "씨엔티테크파트너스",
      region: "서울",
      score: 88.9,
      grade: "A",
      highlight: "TIPS 추천 성과 1위"
    }, {
      rank: 5,
      prevRank: 7,
      name: "퓨처플레이랩",
      region: "서울",
      score: 86.4,
      grade: "A",
      highlight: "기술창업 빌드업"
    }, {
      rank: 6,
      prevRank: 5,
      name: "부산엔젤벤처스",
      region: "부산",
      score: 82.7,
      grade: "A",
      highlight: "지역 배치 프로그램"
    }, {
      rank: 7,
      prevRank: 6,
      name: "대구디지털파트너스",
      region: "대구",
      score: 80.1,
      grade: "A",
      highlight: "의료기기 특화"
    }, {
      rank: 8,
      prevRank: 9,
      name: "광주AI엑셀러레이터",
      region: "광주",
      score: 78.5,
      grade: "B",
      highlight: "AI 실증 연계"
    }, {
      rank: 9,
      prevRank: 8,
      name: "호남임팩트벤처스",
      region: "전주",
      score: 75.8,
      grade: "B",
      highlight: "임팩트 투자 특화"
    }, {
      rank: 10,
      prevRank: 10,
      name: "제주스타트업베이",
      region: "제주",
      score: 72.9,
      grade: "B",
      highlight: "관광테크 배치"
    }]
  };
export { d as G, p as R, m as a, R as b, v as s };