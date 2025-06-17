const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: String,
  createdAt: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});
module.exports = mongoose.model("Post", postSchema);

// This code defines a Mongoose schema for a Post model in a Node.js application.
