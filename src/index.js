// Import modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const helmet = require("helmet");
const logger = require("morgan");
const cors = require("cors");

// Environment Variables
const { config } = require("./config/index");

// Import routes
const biosApi = require("./routes/bios");
const jobsApi = require("./routes/jobs");

// Import errorHandlers middleware
const { logErrors, errorHandler } = require("./utils/middleware/errorHandlers");

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(logger("dev"));
app.use(cors());

// Routes
biosApi(app);
jobsApi(app);

// ErrorHandlers middleware
app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
