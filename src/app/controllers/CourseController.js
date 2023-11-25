const Course = require("../models/courseModel");
const sequelize = require("../../config/db/sequelize.js");
class CourseController {
  //   //   // [GET] /news
  // [GET] /courses
  index(req, res, next) {
    sequelize
      .sync()
      .then((Course) => res.render("view", { Course }))
      .catch((error) => next(error));
    // sequelize
    //   .sync()
    //   .then(() => {
    //     Course.findAll()
    //       .then((courses) => {
    //         // Truyền dữ liệu vào view
    //         // res.render("view", { courses: courses });
    //         res.json(courses);
    //       })
    //       .catch((error) => {
    //         next(error);
    //       });
    //   })
    //   .catch((error) => {
    //     next(error);
    //   });
  }

  //   // [GET] /courses
  // async index(req, res) {
  //   try {
  //     const courses = await Course.findAll(); // Lấy tất cả các bản ghi từ cơ sở dữ liệu
  //     res.json(courses); // Trả về dữ liệu dưới dạng JSON
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: "Internal Server Error" });
  //   }
  // }
}

module.exports = new CourseController();
