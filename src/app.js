const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const leaveRoutes = require("./routes/leaveRoutes");

const app = express();
app.use(bodyParser.json());

app.use("/api", leaveRoutes);

module.exports = app;