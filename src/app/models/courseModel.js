// models/course.js
const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Course = sequelize.define("Course", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
  });

  return Course;
};
