const Post = require("../models/Post");
exports.createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.getPosts = async (req, res) => {
  const posts = await Post.find().populate("user", "username email");
  res.json(posts);
};
