const Sequelize = require("sequelize");

function connect() {
  const sequelize = new Sequelize("nodejs_blog", "root", "admin", {
    host: "localhost",
    dialect: "mysql",
  });

  // Kết nối đến cơ sở dữ liệu
  sequelize
    .authenticate()
    .then(() => {
      console.log("Kết nối thành công đến cơ sở dữ liệu.");

      //   // Xử lý sự kiện close
      //   sequelize.connectionManager.on("close", () => {
      //     console.log("Kết nối đã đóng.");
      //   });
    })
    .catch((err) => {
      console.error("Không thể kết nối đến cơ sở dữ liệu:", err);
    });

  // Xử lý sự kiện error
  sequelize.authenticate().catch((err) => {
    console.error("Lỗi khi kết nối đến cơ sở dữ liệu:", err);
  });
}

module.exports = { connect };
