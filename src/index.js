const express = require("express");
const pino = require("express-pino-logger")();
const routes = require("./routes");

const port = process.env.PORT || 3000;

const app = express();

app.use(pino);
app.use(express.json());

app.use("/v1", routes);

app.listen(port, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on port ", port);
});
