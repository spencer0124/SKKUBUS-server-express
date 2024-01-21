const { option1 } = require("./option1/option1.js");
const { option1_detail } = require("./option1/option1_detail.js");
const { option3 } = require("./option3/option3.js");

const express = require("express");
const router = express.Router();
module.exports = router;

// 전체 검색. 앱 검색창에서 결과를 검색했을 때 사용
// option1 + option2 + option3
router.get("/all/:inputquery", async (req, res) => {
  try {
    const option1_hssc = await option1(req.params.inputquery, 1);
    const option1_nsc = await option1(req.params.inputquery, 2);

    const option1_hsscCount = option1_hssc.length;
    const option1_nscCount = option1_nsc.length;
    const option1_totalCount = option1_hssc.length + option1_nsc.length;

    const option3_hssc = await option3(req.params.inputquery, 1);
    const option3_nsc = await option3(req.params.inputquery, 2);

    const option3_hsscCount = option3_hssc.length;
    const option3_nscCount = option3_nsc.length;
    const option3_totalCount = option3_hssc.length + option3_nsc.length;

    const total_hsscCount = option1_hsscCount + option3_hsscCount;
    const total_nscCount = option1_nscCount + option3_nscCount;
    const total_totalCount = total_hsscCount + total_nscCount;

    res.json({
      metaData: {
        keyword: req.params.inputquery,
        total_totalCount: total_totalCount,
        total_hsscCount: total_hsscCount,
        total_nscCount: total_nscCount,
        option1_totalCount: option1_totalCount,
        option1_hsscCount: option1_hsscCount,
        option1_nscCount: option1_nscCount,
        option3_totalCount: option3_totalCount,
        option3_hsscCount: option3_hsscCount,
        option3_nscCount: option3_nscCount,
      },
      option1Items: {
        hssc: option1_hssc,
        nsc: option1_nsc,
      },
      option3Items: {
        hssc: option3_hssc,
        nsc: option3_nsc,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching data");
  }
});

// 건물 층별 정보 조회
// option1_detail
router.get("/detail/:buildNo/:id", async (req, res) => {
  try {
    const mergedResults = await option1_detail(
      req.params.buildNo,
      req.params.id
    );
    res.json(mergedResults);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching data");
  }
});

// 건물 코드로 정보 조회
// option3
router.get("/option3/:inputquery", async (req, res) => {
  try {
    const mergedResults = await option3(req.params.inputquery);
    res.json(mergedResults);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching data");
  }
});
