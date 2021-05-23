const { Router } = require("express");

const routes = Router();

routes.get("/", (req, res) => {
  req.log.info("Hello pino");
  console.log("yo");
  res.send({ status: "OK" });
});

module.exports = routes;
