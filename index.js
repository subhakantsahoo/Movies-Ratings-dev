
const express = require("express");
const app = express();
const port = 3000;
const passport = require("passport");
const bodyParser = require("body-parser");
const { connectMongo } = require("./config/connect");
const routes = require("./routes/index");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", routes);

connectMongo();

app.get("/1", (req, res) => {
  res.send("this 2nd page");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log("Server running on http://localhost:3000");
  console.log("Swagger docs at http://localhost:3000/docs");
});


