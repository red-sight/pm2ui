const Koa = require("koa");
const cors = require("@koa/cors");

import { router } from "./routes";
const app = new Koa();

app.use(
  cors({
    origin: "*"
  })
);

app.use(router.routes()).use(router.allowedMethods());

app.use(async (ctx) => {
  ctx.body = "Hello World";
});

app.listen(3000);

module.exports = app; // for testing
