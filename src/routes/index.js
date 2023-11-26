const newsRouter = require("./news");
const meRouter = require("./me");
const siteRouter = require("./site");
const courseRouter = require("./course");

function route(app) {
  app.use("/news", newsRouter); //đường dẫn news thì dùng newsRouter
  app.use("/courses", courseRouter); //đường dẫn news thì dùng newsRouter
  app.use("/me", meRouter); //đường dẫn news thì dùng newsRouter
  app.use("/", siteRouter); //đường dẫn news thì dùng newsRouter
}

module.exports = route;
