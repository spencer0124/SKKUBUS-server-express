const AppColors = require("../../common/colors");

/* 
nullalbe
altPageLink: String?
animationText: String?
noticeText: String?
*/

function getBusList() {
  return {
    metaData: {
      busList_count: 5,
    },
    busList: [
      // {
      //   title: "설 연휴 귀향/귀경 버스",
      //   subtitle: "수요조사 후 - 수요 지역별 왕복 운영",
      //   busTypeText: "성대",
      //   busTypeBgColor: AppColors.deepgreen,
      //   pageLink: "/customwebview",
      //   pageWebviewLink: "https://www.naver.com",
      //   altPageLink: "https://namu.wiki/w/%EB%8F%84%EB%A7%9D%EC%B3%90",
      //   noticeText: "자과캠을 출발/도착지로 운영합니다",
      //   useAltPageLink: false,
      //   showAnimation: true,
      //   showNoticeText: true,
      // },
      {
        title: "인사캠 셔틀",
        subtitle: "정차소(인문.농구장) ↔ 600주년 기념관",
        busTypeText: "성대",
        busTypeBgColor: AppColors.deepgreen,
        pageLink: "/MainbusMain",
        pageWebviewLink: null,
        altPageLink: "https://namu.wiki/w/%EB%8F%84%EB%A7%9D%EC%B3%90",
        noticeText: "역명/셔틀 정보를 더욱 정확하게 업데이트했어요",
        useAltPageLink: false,
        showAnimation: true,
        showNoticeText: true,
      },
      {
        title: "인자셔틀",
        subtitle: "인사캠 ↔ 자과캠",
        busTypeText: "성대",
        busTypeBgColor: AppColors.deepgreen,
        pageLink: "/eskara",
        pageWebviewLink: null,
        altPageLink: "https://namu.wiki/w/%EB%8F%84%EB%A7%9D%EC%B3%90",
        useAltPageLink: false,
        noticeText: null,
        showAnimation: false,
        showNoticeText: false,
      },
      {
        title: "종로 07",
        subtitle: "명륜새마을금고 ↔ 명륜새마을금고",
        busTypeText: "마을",
        busTypeBgColor: AppColors.green,
        pageLink: "/MainbusMain",
        pageWebviewLink: null,
        altPageLink: "https://namu.wiki/w/%EB%8F%84%EB%A7%9D%EC%B3%90",
        useAltPageLink: false,
        noticeText: null,
        showAnimation: false,
        showNoticeText: false,
      },
      {
        title: "종로 02",
        subtitle: "성균관대학교 ↔ 종각역YMCA",
        busTypeText: "마을",
        busTypeBgColor: AppColors.green,
        pageLink: "/MainbusMain",
        pageWebviewLink: null,
        altPageLink: "https://namu.wiki/w/%EB%8F%84%EB%A7%9D%EC%B3%90",
        useAltPageLink: false,
        noticeText: null,
        showAnimation: false,
        showNoticeText: false,
      },
    ],
  };
}

module.exports = { getBusList };
