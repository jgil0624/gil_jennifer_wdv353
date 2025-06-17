const express = require("express");
const mongoose = require("mongoose");
const app = express();

//Middleware to parse JSON
app.use(express.json());

//Import routes
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

//Use routes
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

//Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/module2")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => console.log("Server running on port 3000"));
  })
  .catch((err) => console.error("Could not connect to MongoDB", err));
