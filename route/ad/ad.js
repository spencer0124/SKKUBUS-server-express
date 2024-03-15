const express = require("express");
const router = express.Router();

// Define your function properly
function getAdList() {
  return {
    image: "https://i.imgur.com/K2JsUO6.png",
    link: "instagram://skkubus.app",
  };
}

// Use the function correctly in your route
router.get("/v1/addetail", async (req, res) => {
  const AdListData = getAdList(); // Corrected function call
  res.json(AdListData);
});

// Export the router with the attached route
module.exports = router;
