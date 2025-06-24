require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const characterRoutes = require("./routes/characterRoutes");

const app = express();
app.use(express.json());
app.use("/", characterRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(err));
