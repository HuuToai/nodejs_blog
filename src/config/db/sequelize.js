// config/db.js

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "20122001",
  database: "nodejs_blog",
  define: {
    timestamps: false,
  },
});
module.exports = sequelize;
