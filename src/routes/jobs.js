const express = require("express");
const { jobMock } = require("../utils/mocks/job");

function jobsApi(app) {
  const router = express.Router();
  app.use("/api/jobs", router);

  router.post("/", async function (req, res, next) {
    try {
      const jobs = await Promise.resolve(jobMock);
      res.status(201).json({
        data: jobs,
        message: "jobs retrieved",
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = jobsApi;
