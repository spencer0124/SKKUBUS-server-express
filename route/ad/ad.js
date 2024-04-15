const express = require("express");
const router = express.Router();
const { getData } = require("../poll/poll.js");

// Define your function properly
function getAdList() {
  return {
    image: "https://i.imgur.com/A620zXw.png",
    // image: "https://i.imgur.com/yOcuOY8.png",
    // image2: "https://i.imgur.com/Qd9bciY.jpeg",
    image2: "",
    // image2: "https://i.imgur.com/niiVxOH.png",
    link: "instagram://user?username=skkubus.app",
    showtext: true,
    text: "혜화역1출 올라가는 방향 공사중",
    showtext2: false,
    text2: "👆 성대생이라면 이 자리, 무료 광고 (구글폼 작성)",
    // text1은 선택한 url로 단순이동
    // text2는 /v1/notice에서 실행할 url을 받는 방식이다
    // 또한 text2는 기기의 uuid를 가져올 수 있다
  };
}

// Use the function correctly in your route
router.get("/v1/addetail", async (req, res) => {
  const AdListData = getAdList(); // Corrected function call
  res.json(AdListData);
});

// menu1
var menu1_view = 0;

router.get("/v1/statistics/menu1/view", async (req, res) => {
  menu1_view++;
  res.json({ count: menu1_view });
});

var menu1_click = 0;

router.get("/v1/statistics/menu1/click", async (req, res) => {
  menu1_click++;
  res.json({ count: menu1_click });
});

// menu2
var menu2_view = 0;

router.get("/v1/statistics/menu2/view", async (req, res) => {
  menu2_view++;
  res.json({ count: menu2_view });
});

var menu2_click = 0;

router.get("/v1/statistics/menu2/click", async (req, res) => {
  menu2_click++;
  res.json({ count: menu2_click });
});

// menu3
var menu3_view = 0;

router.get("/v1/statistics/menu3/view", async (req, res) => {
  menu3_view++;
  res.json({ count: menu3_view });
});

var menu3_click = 0;

router.get("/v1/statistics/menu3/click", async (req, res) => {
  menu3_click++;
  res.json({ count: menu3_click });
});

// Export the router with the attached route
module.exports = router;
