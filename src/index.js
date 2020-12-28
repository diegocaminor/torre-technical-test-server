// Import modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const helmet = require("helmet");
const logger = require("morgan");

// Environment Variables
const { config } = require("./config/index");

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(logger("dev"));

// Routes
const biosApi = require("./routes/bios");
biosApi(app);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
