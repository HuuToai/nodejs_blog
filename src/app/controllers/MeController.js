const Course = require("../models/courseModel.js");
const sequelize = require("../../config/db/sequelize.js");
class MeController {
  //[GET] /me/stored/courses
  storedCourses(req, res, next) {
    Course.findAll({ raw: true })
      .then((courses) => {
        res.render("me/stored-courses", {
          courses,
        });
      })
      .catch(next);
  }
}

module.exports = new MeController();
