const Course = require("../models/courseModel.js");
const sequelize = require("../../config/db/sequelize.js");
const { Op } = require("sequelize");
const db = require("../../config/db"); // Thay đổi 'your-db-module' thành tên file module của bạn
class MeController {
  //[GET] /me/stored/courses
  storedCourses(req, res, next) {
    Promise.all([
      Course.findAll({ raw: true }),
      Course.count({
        where: {
          deletedAt: {
            [Op.not]: null,
          },
        },
        paranoid: false,
        raw: true,
      }),
    ])
      .then(([courses, count]) =>
        res.render("me/stored-courses", { courses, count })
      )
      .catch(next);

    // Course.findAll({ raw: true })
    //   .then((courses) => {
    //     res.render("me/stored-courses", {
    //       courses,
    //     });
    //   })
    //   .catch(next);
    // Course.count({
    //   where: {
    //     deletedAt: {
    //       [Op.not]: null,
    //     },
    //   },
    //   paranoid: false,
    //   raw: true,
    // })
    //   .then((courses) => {
    //     console.log(courses);
    //   })
    //   .catch(next);
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
  searchCourses(req, res, next) {
    Promise.all([
      Course.findAll({
        where: {
          name: {
            [Op.like]: `%${req.query.q}%`,
          },
        },
        raw: true,
      }),
      Course.count({
        where: {
          deletedAt: {
            [Op.not]: null,
          },
        },
        // paranoid: false,
        raw: true,
      }),
    ])

      .then(
        ([courses, count]) =>
          res.render("me/stored-courses", { courses, count })
        // sequelize.close()
      )
      .catch(next);
  }
}

module.exports = new MeController();
