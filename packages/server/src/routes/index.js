import pm2, { list } from "pm2";
import Router from "@koa/router";
const router = new Router();

router.get("/router", (ctx, next) => {
  ctx.body = "Router works";
});

router.get("/apps", async (ctx, next) => {
  const list = await getList();
  ctx.body = { ...list };
});

function getList() {
  return new Promise((resolve, reject) => {
    pm2.connect(function (err) {
      if (err) reject(err);
      pm2.list((err, list) => {
        if (err) reject(err);
        resolve(list);
      });
    });
  });
}

module.exports = {
  router
};
