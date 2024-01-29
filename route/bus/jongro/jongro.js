const express = require("express");
const router = express.Router();
module.exports = router;

const getJongroBusList = require("./fetchjongro.js");

let Jongrotations = [
  {
    stationName: "정차소(인문.농구장)",
    stationNumber: null,
    eta: "도착 정보 없음",
    isFirstStation: true,
    isLastStation: false,
    isRotationStation: false,
    busType: "BusType.hsscBus",
  },
  {
    stationName: "학생회관(인문)",
    stationNumber: null,
    eta: "도착 정보 없음",
    isFirstStation: false,
    isLastStation: false,
    isRotationStation: false,
    busType: "BusType.hsscBus",
  },
  {
    stationName: "정문(인문-하교)",
    stationNumber: null,
    eta: "도착 정보 없음",
    isFirstStation: false,
    isLastStation: false,
    isRotationStation: false,
    busType: "BusType.hsscBus",
  },
  {
    stationName: "혜화로터리(하차지점)",
    stationNumber: null,
    eta: "도착 정보 없음",
    isFirstStation: false,
    isLastStation: false,
    isRotationStation: false,
    busType: "BusType.hsscBus",
  },
  {
    stationName: "혜화역U턴지점",
    stationNumber: null,
    eta: "도착 정보 없음",
    isFirstStation: false,
    isLastStation: false,
    isRotationStation: false,
    busType: "BusType.hsscBus",
  },
  {
    stationName: "혜화역(승차장)",
    stationNumber: null,
    eta: "도착 정보 없음",
    isFirstStation: false,
    isLastStation: false,
    isRotationStation: false,
    busType: "BusType.hsscBus",
  },
  {
    stationName: "혜화로터리(경유)",
    stationNumber: null,
    eta: "도착 정보 없음",
    isFirstStation: false,
    isLastStation: false,
    isRotationStation: false,
    busType: "BusType.hsscBus",
  },
  {
    stationName: "맥도날드 건너편",
    stationNumber: null,
    eta: "도착 정보 없음",
    isFirstStation: false,
    isLastStation: false,
    isRotationStation: false,
    busType: "BusType.hsscBus",
  },
  {
    stationName: "정문(인문-등교)",
    stationNumber: null,
    eta: "도착 정보 없음",
    isFirstStation: false,
    isLastStation: false,
    isRotationStation: false,
    busType: "BusType.hsscBus",
  },
  {
    stationName: "600주년 기념관",
    stationNumber: null,
    eta: "도착 정보 없음",
    isFirstStation: false,
    isLastStation: true,
    isRotationStation: false,
    busType: "BusType.hsscBus",
  },
];

router.get("/v1/buslocation", async (req, res) => {
  // real
  response = await getJongroBusList.getJongroBusList();
  res.json(response);

  // test
  // res.json([
  //   {
  //     sequence: "1",
  //     stationName: "몰라임마",
  //     carNumber: "101",
  //     eventDate: "상관없어 임마",
  //     estimatedTime: 50,
  //   },
  //   {
  //     sequence: "3",
  //     stationName: "몰라임마",
  //     carNumber: "1022",
  //     eventDate: "상관없어 임마",
  //     estimatedTime: 0,
  //   },
  // ]);
});

router.get("/v1/busstation", (req, res) => {
  res.json(Jongrotations);
});
