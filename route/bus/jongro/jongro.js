const express = require("express");
const router = express.Router();
module.exports = router;

const getJongroInfo = require("./fetchjongro.js");

let Jongrotations = [
  {
    sequence: "1",
    stationName: "명륜새마을금고",
    stationNumber: "01504",
    eta: "도착 정보 없음",
    isFirstStation: true,
    isLastStation: false,
    isRotationStation: false,
    busType: "BusType.jonro07Bus",
  },
  {
    sequence: "2",
    stationName: "서울국제고등학교",
    stationNumber: "01512",
    eta: "도착 정보 없음",
    isFirstStation: false,
    isLastStation: false,
    isRotationStation: false,
    busType: "BusType.jonro07Bus",
  },
  {
    sequence: "3",
    stationName: "국민생활관",
    stationNumber: "01521",
    eta: "도착 정보 없음",
    isFirstStation: false,
    isLastStation: false,
    isRotationStation: false,
    busType: "BusType.jonro07Bus",
  },
  {
    sequence: "4",
    stationName: "혜화초등학교",
    stationNumber: "01532",
    eta: "도착 정보 없음",
    isFirstStation: false,
    isLastStation: false,
    isRotationStation: false,
    busType: "BusType.jonro07Bus",
  },
  {
    sequence: "5",
    stationName: "혜화우체국",
    stationNumber: "01543",
    eta: "도착 정보 없음",
    isFirstStation: false,
    isLastStation: false,
    isRotationStation: false,
    busType: "BusType.jonro07Bus",
  },
  {
    sequence: "6",
    stationName: "혜화역4번출구",
    stationNumber: "01876",
    eta: "도착 정보 없음",
    isFirstStation: false,
    isLastStation: false,
    isRotationStation: false,
    busType: "BusType.jonro07Bus",
  },
  {
    sequence: "7",
    stationName: "혜화역.서울대병원입구",
    stationNumber: "01221",
    eta: "도착 정보 없음",
    isFirstStation: false,
    isLastStation: false,
    isRotationStation: false,
    busType: "BusType.jonro07Bus",
  },
  {
    sequence: "8",
    stationName: "방송통신대앞",
    stationNumber: "01877",
    eta: "도착 정보 없음",
    isFirstStation: false,
    isLastStation: false,
    isRotationStation: true,
    busType: "BusType.jonro07Bus",
  },
  {
    sequence: "9",
    stationName: "이화사거리",
    stationNumber: "01886",
    eta: "도착 정보 없음",
    isFirstStation: false,
    isLastStation: false,
    isRotationStation: false,
    busType: "BusType.jonro07Bus",
  },

  {
    sequence: "10",
    stationName: "방송통신대.이화장",
    stationNumber: "01219",
    eta: "도착 정보 없음",
    isFirstStation: false,
    isLastStation: false,
    isRotationStation: false,
    busType: "BusType.jonro07Bus",
  },

  {
    sequence: "11",
    stationName: "혜화역.마로니에공원",
    stationNumber: "01220",
    eta: "도착 정보 없음",
    isFirstStation: false,
    isLastStation: false,
    isRotationStation: false,
    busType: "BusType.jonro07Bus",
  },

  {
    sequence: "12",
    stationName: "혜화역1번출구",
    stationNumber: "01592",
    eta: "도착 정보 없음",
    isFirstStation: false,
    isLastStation: false,
    isRotationStation: false,
    busType: "BusType.jonro07Bus",
  },

  {
    sequence: "13",
    stationName: "혜화동로터리",
    stationNumber: "01226",
    eta: "도착 정보 없음",
    isFirstStation: false,
    isLastStation: false,
    isRotationStation: false,
    busType: "BusType.jonro07Bus",
  },

  {
    sequence: "14",
    stationName: "성대입구",
    stationNumber: "01697",
    eta: "도착 정보 없음",
    isFirstStation: false,
    isLastStation: false,
    isRotationStation: false,
    busType: "BusType.jonro07Bus",
  },

  {
    sequence: "15",
    stationName: "성균관대정문",
    stationNumber: "01615",
    eta: "도착 정보 없음",
    isFirstStation: false,
    isLastStation: false,
    isRotationStation: false,
    busType: "BusType.jonro07Bus",
  },

  {
    sequence: "16",
    stationName: "600주년기념관",
    stationNumber: "01616",
    eta: "도착 정보 없음",
    isFirstStation: false,
    isLastStation: false,
    isRotationStation: false,
    busType: "BusType.jonro07Bus",
  },

  {
    sequence: "17",
    stationName: "성균관대운동장",
    stationNumber: "01617",
    eta: "도착 정보 없음",
    isFirstStation: false,
    isLastStation: false,
    isRotationStation: false,
    busType: "BusType.jonro07Bus",
  },
  {
    sequence: "18",
    stationName: "학생회관",
    stationNumber: "01618",
    eta: "도착 정보 없음",
    isFirstStation: false,
    isLastStation: false,
    isRotationStation: false,
    busType: "BusType.jonro07Bus",
  },

  {
    sequence: "19",
    stationName: "성균관대학교",
    stationNumber: "01722",
    eta: "도착 정보 없음",
    isFirstStation: false,
    isLastStation: true,
    isRotationStation: false,
    busType: "BusType.jonro07Bus",
  },
];

// 현재 운영중인 버스 정보
router.get("/v1/buslocation", async (req, res) => {
  response = getJongroInfo.getJongroBusLocation();

  response = response.map((station) => ({
    ...station,
    isLastBus: false,
  }));
  // response = response.filter(
  //   (item) => item.eta !== "정보 없음" && item.eta !== "출발대기"
  // );

  // last

  res.json(response);
});

// 전체 정류장 목록 (각 정류장별 Eta 포함)
router.get("/v1/busstation", async (req, res) => {
  response = getJongroInfo.getJongroBusList();

  response2 = getJongroInfo.getJongroBusLocation();

  const metadata = {
    currentTime: new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }), // Formats the current time as "12:21 PM"
    totalBuses: response2.length,
    lastStationIndex: 16,
  };

  Jongrotations.forEach((item) => {
    const station = response.find(
      (station) => station.stationName === item.stationName
    );

    if (station) {
      item.eta = station.eta;
    }
  });

  var HSSCStations = Jongrotations;

  res.json({ metadata, HSSCStations });
});
