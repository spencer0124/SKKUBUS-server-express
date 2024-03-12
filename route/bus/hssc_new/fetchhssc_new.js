const axios = require("axios");
require("dotenv").config();

// 15 초마다 api를 요청하고, 정제하여 최종적으로 전달한 정보를 담을 변수
let filteredHSSCStations = [];

// api에서 받아오는 정류장 이름이랑 실제 정류장 이름 매핑시켜주기
const stopNameMapping = {
  농구장정류소: "농구장 (셔틀버스정류소)",
  "혜화역 1번출구 셔틀버스 정류소": "혜화역 1번출구 (셔틀버스정류소)",
  "문묘입구[정문]-하교": "정문",
  "600주년기념관 앞-하교": "600주년기념관",
  서울혜화동우체국: "혜화동우체국",
};

// api를 요청하고, 응답을 정제하여 filteredHSSCStations에 저장하는 함수
async function updateHSSCBusList() {
  try {
    const response = await axios.get(
      //   process.env.API_HSSC_NEW_PROD
      process.env.API_HSSC_NEW_DEV
    );

    const apiData = response.data;
    const moment = require("moment-timezone");

    const currentTime = moment().tz("Asia/Seoul").toDate();

    // console.log("apiData: ", apiData);

    filteredHSSCStations = apiData
      .map((item) => {
        let newItem = {
          ...item,
          sequence: item.seq,
          stationName: stopNameMapping[item.stop_name] || item.stop_name,

          carNumber: "0000",
          eventDate: moment(item.get_date, "YYYY-MM-DD a h:mm:ss", "ko").format(
            "YYYY-MM-DD HH:mm:ss"
          ),
          estimatedTime: 30,
          isLastBus: false,
        };
        // delete newItem.get_date;

        // line_no와 stop_no는 eventDate를 업데이트해줄지 여부를 결정해주기 위해 꼭 필요함
        // 따라서 삭제하지 말것!

        // delete newItem.line_no;
        // delete newItem.stop_no;
        delete newItem.inout;
        delete newItem.seq;
        delete newItem.stop_name;
        return newItem;
      })
      .filter((item) => {
        if (item.stationName === "농구장 (셔틀버스정류소)") {
          const itemTime = moment(item.get_date, "YYYY-MM-DD a h:mm:ss", "ko");
          const comparisonTime = moment()
            .tz("Asia/Seoul")
            .subtract(3, "minutes");
          return !itemTime.isBefore(comparisonTime);
        }
        return true;
      });

    console.log("Filtered apiData: ", filteredHSSCStations);
  } catch (error) {
    console.error(error);
  }
}

// 15초마다 updateHSSCBusList 함수를 실행
setInterval(
  updateHSSCBusList,
  15000
  // 1000
);

// filteredHSSCStations를 반환하는 함수
// 업데이트 부분은 분리되어 있으므로 api call은 15초에 한번씩만 일어난다
function getHSSCBusList() {
  console.log("Serving filteredHSSCStations: ", filteredHSSCStations);
  return filteredHSSCStations;
}

module.exports = { getHSSCBusList };
