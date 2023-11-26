// config/db.js

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "103.18.6.239",
  username: "v2wrml5xinov_userlocal",
  password: "adminlocal",
  database: "v2wrml5xinov_nodejs",
  define: {
    timestamps: false,
  },
});
module.exports = sequelize;
