const express = require("express");
const router = express.Router();
const siteController = require("../app/controllers/SiteController");

router.get("/search", siteController.search);
router.get("/", siteController.index); //newsController.index là funciton index trong NewsController

module.exports = router;
