const express = require("express");
const BiosService = require("../services/bios");

function biosApi(app) {
  const router = express.Router();
  app.use("/api/bios", router);

  const biosService = new BiosService();

  router.get("/:username", async function (req, res, next) {
    try {
      const { username } = req.params;
      const userData = await biosService.getBioByUsername({ username });
      res.status(200).json({
        data: userData.bio,
        message: userData.message,
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = biosApi;
