// nodemon index.js 명령어로 서버 실행

// Import the express module
const express = require("express");

// Create an instance of express
const app = express();

// Define a port number
const PORT = 3000;

// Route
const searchRoute = require("./route/search/search.js");
const hsscRoute = require("./route/bus/hssc/hssc.js");
app.use("/search", searchRoute);
app.use("/bus/hssc", hsscRoute);

// Start the server on the specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
