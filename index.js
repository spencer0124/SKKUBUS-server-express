// Import the express module
const express = require("express");

// Create an instance of express
const app = express();

// Define a port number
const PORT = 3000;

// Bus station data
const busStations = [
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

// Define a route for the bus list
app.get("/v1/bus/hssc/list", (req, res) => {
  res.json(busStations);
});

// Start the server on the specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
