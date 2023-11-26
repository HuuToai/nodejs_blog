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
  // [GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({
      where: {
        slug: req.params.slug,
      },
      raw: true, //trả về đối tượng dạng raw không phải đối tượng Sequelize
    })
      .then((courses) => {
        res.render("courses/show", { courses });
      })
      .catch((err) => {
        next(err);
      });
  }
  // [GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  // [POST] /courses/store
  async store(req, res, next) {
    try {
      const course = await Course.create({
        name: req.body.name,
        description: req.body.description,
        video_id: req.body.video_id,
        level: req.body.level,
      });

      res.status(201).json({ success: true, data: course });
    } catch (error) {
      console.error("Lỗi khi tạo khóa học:", error);
      res.status(500).json({ success: false, error: "Lỗi khi tạo khóa học" });
    }
  }
  // [GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findByPk(req.params.id, { raw: true })
      .then((courses) => {
        res.render("courses/edit", { courses });
      })
      .catch((err) => {
        next(err);
      });
  }
  // [POST] /courses/:id
  update(req, res, next) {
    Course.update(
      {
        name: req.body.name,
        description: req.body.description,
        video_id: req.body.video_id,
        level: req.body.level,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then(() => {
        res.redirect("/me/stored/courses");
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = new CourseController();
