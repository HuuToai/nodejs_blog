const Sequelize = require("sequelize");

function connect() {
  const sequelize = new Sequelize("nodejs_blog", "root", "20122001", {
    host: "localhost",
    dialect: "mysql",
  });

  // Xử lý sự kiện khi kết nối thành công
  sequelize
    .authenticate()
    .then(() => {
      console.log("Kết nối thành công đến cơ sở dữ liệu.");
    })
    .catch((err) => {
      console.error("Không thể kết nối đến cơ sở dữ liệu:", err);
    });
}

module.exports = { connect };
// module.exports = sequelize;
