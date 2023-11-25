const express = require("express");
const router = express.Router();
const courseController = require("../app/controllers/CourseController");

router.get("/", courseController.index); //courseController.index là funciton index trong NewsController

module.exports = router;
