const express = require("express");
const router = express.Router();

// Define your function properly
function getAdList() {
  return {
    image: "https://i.imgur.com/A620zXw.png",
    link: "instagram://user?username=skkubus.app",
    text: "스꾸버스 재학생 다운로드 41% 돌파 🔥",
    image2: "",
    // image2: "https://i.imgur.com/niiVxOH.png",
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
