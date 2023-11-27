const express = require("express");
const router = express.Router();
const courseController = require("../app/controllers/CourseController");

router.get("/create", courseController.create);
router.post("/store", courseController.store); //theem
router.get("/:slug", courseController.show);
router.get("/:id/edit", courseController.edit);
router.put("/:id/", courseController.update); //sua thi sua het
router.patch("/:id/restore", courseController.restore);
router.delete("/:id/", courseController.destroy); // xoa thi delete id
router.delete("/:id/force", courseController.forceDestroy); // xoa thi delete id
router.get("/", courseController.index); //courseController.index là funciton index trong NewsController
module.exports = router;
