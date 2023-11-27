// models/course.js
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db/sequelize.js");
const slugify = require("sequelize-slugify");
const Course = sequelize.define(
  "Course",
  {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
    video_id: {
      type: DataTypes.STRING,
    },
    level: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "Courses",
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deletedAt",
    charset: "utf8",
    collate: "utf8_general_ci",
    paranoid: true,
    timestamps: true,
    // freezeTableName: true,//chuyển đổi tên bảng thành số nhiều
  }
);

// const Course = sequelize.define("Course", {
//   // Course: {
//   //   type: DataTypes.INTEGER,
//   //   autoIncrement: true,
//   //   primaryKey: true,
//   //   collate: "utf8_general_ci",
//   // },
//   name: {
//     type: DataTypes.STRING,
//     collate: "utf8_general_ci",
//   },
//   description: {
//     type: DataTypes.STRING,
//     collate: "utf8_general_ci",
//   },
//   image: {
//     type: DataTypes.STRING,
//     collate: "utf8_general_ci",
//   },
//   slug: {
//     type: DataTypes.STRING,
//     collate: "utf8_general_ci",
//     unique: true,
//   },
//   video_id: {
//     type: DataTypes.STRING,
//     collate: "utf8_general_ci",
//   },
//   level: {
//     type: DataTypes.STRING,
//     collate: "utf8_general_ci",
//   },
//   deleteAt: {
//     type: DataTypes.DATE,
//     collate: "utf8_general_ci",
//   },
// });
// Tự động cập nhật cơ sở dữ liệu để phản ánh các thay đổi
Course.sync({
  alter: true,
})
  .then(() => {
    // console.log("Cơ sở dữ liệu đã được cập nhật thành công.");
  })
  .catch((error) => {
    console.error("Lỗi khi cập nhật cơ sở dữ liệu:", error);
  });

// Sử dụng sequelize-slugify
slugify.slugifyModel(Course, {
  source: ["name"], // Trường dữ liệu để tạo slug
  slugOptions: { lower: true }, // Tuỳ chọn slug (ở đây, chuyển đổi sang chữ thường)
  overwrite: false, // Không cập nhật slug nếu đã tồn tại
  column: "slug", // Tên trường chứa slug
  //làm sao để cộng thêm uniqueString(); vào slug
  custom: (text) => {
    // Hàm này được gọi để tạo slug từ text (ở đây là name)
    const baseSlug = slugify(text, { lower: true });
    const uniqueString = generateRandomString(4); // Độ dài của mã ngẫu nhiên
    return `${baseSlug}-${uniqueString}`;
  },
});

// Hàm tạo chuỗi ngẫu nhiên
function generateRandomString(length) {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

// đang thiếu xử lý trùng

module.exports = Course;
