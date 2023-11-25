const Course = require("../models/courseModel");
const sequelize = require("../../config/db/sequelize.js");
class CourseController {
  //   //   // [GET] /news
  // [GET] /courses
  index(req, res, next) {
    Course.findAll({
      raw: true,
    })
      .then((courses) => {
        res.render("view", { courses });
      })
      .catch((err) => {
        next(err);
      });
  }
  show(req, res, next) {
    Course.findOne({
      where: {
        slug: req.params.slug,
      },
    })
      .then((course) => {
        res.render("courses/show");
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = new CourseController();
