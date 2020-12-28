const express = require("express");
const BiosService = require("../services/bios");
const JobsService = require("../services/jobs");

function jobsApi(app) {
  const router = express.Router();
  app.use("/api/jobs", router);

  const biosService = new BiosService();
  const jobsService = new JobsService();

  router.get("/skills/:username", async function (req, res, next) {
    try {
      const { username } = req.params;
      const userData = await biosService.getSkillsByUsername({ username });
      const jobs = await jobsService.getMatchJobs(userData.skills);
      res.status(200).json({
        data: jobs.matchedJobs,
        message: jobs.message,
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = jobsApi;
