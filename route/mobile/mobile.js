const express = require("express");
const router = express.Router();
module.exports = router;

const functiongetBusList = require("./mainpage/buslist");
const functiongetScrollComponent = require("./mainpage/scrollcomponent");

router.get("/v1/mainpage/buslist", async (req, res) => {
  var busListData = functiongetBusList.getBusList();
  res.json(busListData);
});

router.get("/v1/mainpage/scrollcomponent", async (req, res) => {
  var scrollComponentData = functiongetScrollComponent.getScrollComponent();
  res.json(scrollComponentData);
});

