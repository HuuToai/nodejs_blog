const express = require("express");
const router = express.Router();
const newsController = require("../app/controllers/NewsController");

router.get("/:slug", newsController.show);
router.get("/", newsController.index); //newsController.index là funciton index trong NewsController

module.exports = router;
