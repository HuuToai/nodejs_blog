// models/course.js
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db/sequelize.js");

const Course = sequelize.define("Course", {
  Course: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
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
  slug: {
    type: DataTypes.STRING,
  },
});

module.exports = Course;
