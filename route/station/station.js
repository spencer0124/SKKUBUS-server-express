const express = require("express");
const router = express.Router();
module.exports = router;

router.get("/:stationId", async (req, res) => {
  res.json({
    metaData: {
      success: true,
      total_count: 2,
    },
    StationData: [
      {
        busNm: "종로07",
        busSupportTime: true,
        msg1_showmessage: true,
        msg1_message: "곧 도착",
        msg1_remainStation: 7,
        msg1_remainSeconds: 300,
        msg2_showmessage: false,
        msg2_message: null,
        msg2_remainStation: 10,
        msg2_remainSeconds: 600,
      },
      {
        busNm: "인사캠셔틀",
        busSupportTime: false,
        msg1_showmessage: true,
        msg1_message: "곧 도착",
        msg1_remainStation: 3,
        msg1_remainSeconds: null,
        msg2_showmessage: true,
        msg2_message: "도착 정보 없음",
        msg2_remainStation: null,
        msg2_remainSeconds: null,
      },
    ],
  });
});
