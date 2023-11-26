const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
// app.use(bodyParser.json());
const port = 3000;
const route = require("./routes");
const db = require("./config/db"); // Thay đổi 'your-db-module' thành tên file module của bạn
const { Sequelize } = require("sequelize");
const methodOverride = require("method-override");
// //
db.connect();

// const CourseModel = require("./app/models/CourseModel");

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json()); //XMLhttprequest fetch axios
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

//http logger
// app.use(morgan('combined'));

//template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b, // cấu hình lại để dùng phép cộng
    },
  })
);
app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "resources", "views")); //sửa lại nếu máy mac /
//router init
route(app);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
