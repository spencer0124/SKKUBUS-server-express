// nodemon index.js 명령어로 서버 실행

// import swaggerFile from "../swagger/swagger-output.json";
// import swaggerUi from "swagger-ui-express";

// Import the express module
const express = require("express");

// Create an instance of express
const app = express();

// Define a port number
const PORT = 3000;

// swagger api docs
// app.use(
//   "/api-docs",
//   swaggerUi.serve,
//   swaggerUi.setup(swaggerFile, { explorer: true })
// );

// Route
const searchRoute = require("./route/search/search.js");
const hsscRoute = require("./route/bus/hssc/hssc.js");
const stationRoute = require("./route/station/station.js");
const mobileRoute = require("./route/mobile/mobile.js");
app.use("/search", searchRoute);
app.use("/bus/hssc", hsscRoute);
app.use("/station", stationRoute);
app.use("/mobile/", mobileRoute);

// Start the server on the specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
