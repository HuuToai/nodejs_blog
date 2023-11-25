const newsRouter = require("./news");
const siteRouter = require("./site");
const courseRouter = require("./course");

function route(app) {
  app.use("/news", newsRouter); //đường dẫn news thì dùng newsRouter
  app.use("/view", courseRouter); //đường dẫn news thì dùng newsRouter
  app.use("/", siteRouter); //đường dẫn news thì dùng newsRouter
}

module.exports = route;
