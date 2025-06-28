const express = require("express");
const app = express();
const yourRoutes = require("./routes/yourRoutes");

app.use(express.json());
app.use("/", yourRoutes);

module.exports = app;
