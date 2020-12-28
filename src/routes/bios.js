const express = require("express");
const { userBioMock } = require("../utils/mocks/bio");

function biosApi(app) {
  const router = express.Router();
  app.use("/api/bios", router);

  router.get("/:username", async function (req, res, next) {
    try {
      const userBio = await Promise.resolve(userBioMock);
      res.status(200).json({
        data: userBio,
        message: "Bio retrieve",
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = biosApi;
