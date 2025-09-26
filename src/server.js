const express = require("express");
const bodyParser = require("body-parser");
const { port } = require("./config");
const routes = require("./routes");

const app = express();
app.use(bodyParser.json());

app.use("/api/email", routes);

app.listen(port, () => {
  console.log(`Email microservice running at http://localhost:${port}`);
});
