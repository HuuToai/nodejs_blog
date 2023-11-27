const Course = require("../models/courseModel.js");
const sequelize = require("../../config/db/sequelize.js");
const { Op } = require("sequelize");
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
  // [GET] me/trash/courses
  trashCourses(req, res, next) {
    Course.findAll({
      where: {
        deletedAt: {
          [Op.not]: null,
        },
      },
      paranoid: false,
      raw: true,
    })
      .then((courses) => {
        res.render("me/trash-courses", {
          courses,
        });
      })
      .catch(next);
  }
}

module.exports = new MeController();
