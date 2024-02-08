const axios = require("axios");
const e = require("express");
require("dotenv").config();

let filteredJongroStations = [];
let filteredJongroLocations = [];

// filteredJongroLocations에서 사용
// 시간 기록해서 estimatedTime 계산하기 위해 필요함
const stationTimes = {};

// stationId를 기반으로 seqeunce와 stationName을 찾기 위한 데이터

const stationMapping = {
  100900197: { sequence: 1, stationName: "명륜새마을금고" },
  100900031: { sequence: 2, stationName: "서울국제고등학교" },
  100900017: { sequence: 3, stationName: "국민생활관" },
  100900003: { sequence: 4, stationName: "혜화초등학교" },
  100900063: { sequence: 5, stationName: "혜화우체국" },
  100900027: { sequence: 6, stationName: "혜화역4번출구" },
  100000125: { sequence: 7, stationName: "혜화역.서울대병원입구" },
  100900028: { sequence: 8, stationName: "방송통신대앞" },
  100900043: { sequence: 9, stationName: "이화사거리" },
  100000123: { sequence: 10, stationName: "방송통신대.이화장" },
  100000124: { sequence: 11, stationName: "혜화역.마로니에공원" },
  100900075: { sequence: 12, stationName: "혜화역1번출구" },
  100000130: { sequence: 13, stationName: "혜화동로터리" },
  100900199: { sequence: 14, stationName: "성대입구" },
  100900218: { sequence: 15, stationName: "성균관대정문" },
  100900219: { sequence: 16, stationName: "600주년기념관" },
  100900220: { sequence: 17, stationName: "성균관대운동장" },
  100900221: { sequence: 18, stationName: "학생회관" },
  100900110: { sequence: 19, stationName: "성균관대학교" },
};

async function updateJongroBusLocation() {
  try {
    const response = await axios.get(
      //   process.env.API_JONGRO07_LOC_PROD
      process.env.API_JONGRO07_LOC_DEV
    );

    const apiData = response.data.msgBody.itemList;
    const currentTime = new Date();

    filteredJongroLocations.length = 0;

    apiData.forEach((item) => {
      const { lastStnId, tmX, tmY, plainNo } = item;

      let estimatedTime = 0;

      if ((currentTime - new Date(stationTimes[lastStnId])) / 1000 / 60 > 10) {
        delete stationTimes[lastStnId];
      }

      if (stationTimes[lastStnId]) {
        const lastRecordTime = new Date(stationTimes[lastStnId]);
        estimatedTime = Math.round((currentTime - lastRecordTime) / 1000);
      } else {
        stationTimes[lastStnId] = currentTime.toISOString();
      }

      filteredJongroLocations.push({
        sequence: stationMapping[lastStnId].sequence.toString(),
        stationName: stationMapping[lastStnId].stationName,
        carNumber: plainNo.slice(-4),
        eventDate: stationTimes[lastStnId],
        estimatedTime: estimatedTime,

        stationId: lastStnId,
        latitude: tmY,
        longitude: tmX,
        recordTime: stationTimes[lastStnId],
      });
    });
  } catch (error) {
    console.error(error);
  }
}

async function updateJongroBusList() {
  try {
    const response = await axios.get(
      //  process.env.API_JONGRO07_LIST_PROD
      process.env.API_JONGRO07_LIST_DEV
    );

    const apiData = response.data.msgBody.itemList;

    filteredJongroStations.length = 0;

    const currentTime = new Date();

    // {
    //     stationName: "명륜새마을금고",
    //     stationNumber: "01504",
    //     eta: "도착 정보 없음",
    //     isFirstStation: true,
    //     isLastStation: false,
    //     isRotationStation: false,
    //     busType: "BusType.jonroBus",
    //   },

    apiData.forEach((item) => {
      const { stId, staOrd, stNm, plainNo1, mkTm, arsId, arrmsg1 } = item;
      filteredJongroStations.push({
        stationId: stId,
        sequence: staOrd,
        stationName: stNm,
        carNumber: plainNo1.slice(-4),
        eventDate: mkTm,
        // estimatedTime:

        stationNumber: arsId,

        eta: arrmsg1,
      });
    });
  } catch (error) {
    console.error(error);
  }
}

setInterval(
  updateJongroBusList,
  15000
  // 1000
);

setInterval(
  updateJongroBusLocation,
  15000
  // 1000
);

function getJongroBusList() {
  console.log("Serving filteredHSSCStations: ", filteredJongroStations);
  return filteredJongroStations;
}

function getJongroBusLocation() {
  console.log("Serving filteredHSSCStations: ", filteredJongroLocations);
  return filteredJongroLocations;
}

module.exports = { getJongroBusList, getJongroBusLocation };
