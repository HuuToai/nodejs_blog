// models/course.js
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db/sequelize.js");
const slugify = require("sequelize-slugify");
const Course = sequelize.define("Course", {
  // Course: {
  //   type: DataTypes.INTEGER,
  //   autoIncrement: true,
  //   primaryKey: true,
  //   collate: "utf8_general_ci",
  // },
  name: {
    type: DataTypes.STRING,
    collate: "utf8_general_ci",
  },
  description: {
    type: DataTypes.STRING,
    collate: "utf8_general_ci",
  },
  image: {
    type: DataTypes.STRING,
    collate: "utf8_general_ci",
  },
  slug: {
    type: DataTypes.STRING,
    collate: "utf8_general_ci",
    unique: true,
  },
  video_id: {
    type: DataTypes.STRING,
    collate: "utf8_general_ci",
  },
  level: {
    type: DataTypes.STRING,
    collate: "utf8_general_ci",
  },
});
// // Tự động cập nhật cơ sở dữ liệu để phản ánh các thay đổi
// Course.sync({ alter: true })
//   .then(() => {
//     console.log("Cơ sở dữ liệu đã được cập nhật thành công.");
//   })
//   .catch((error) => {
//     console.error("Lỗi khi cập nhật cơ sở dữ liệu:", error);
//   });

// Sử dụng sequelize-slugify
slugify.slugifyModel(Course, {
  source: ["name"], // Trường dữ liệu để tạo slug
  slugOptions: { lower: true }, // Tuỳ chọn slug (ở đây, chuyển đổi sang chữ thường)
  overwrite: false, // Không cập nhật slug nếu đã tồn tại
  column: "slug", // Tên trường chứa slug
});

module.exports = Course;
