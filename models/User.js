const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  isAdmin: { type: Boolean, default: false },
});
module.exports = mongoose.model("User", userSchema);
// This code is defining a Mongoose schema for a User model in a Node.js application.
