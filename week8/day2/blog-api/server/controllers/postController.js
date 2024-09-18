const postModel = require("../models/postModel");

const getAllPosts = async (req, res) => {
  try {
    const posts = await postModel.getAllPosts();
    res.json(posts);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await postModel.getPostById(id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).send("Post not found");
    }
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

const createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newPost = await postModel.createPost(title, content);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const updatedPost = await postModel.updatePost(id, title, content);
    if (updatedPost) {
      res.json(updatedPost);
    } else {
      res.status(404).send("Post not found");
    }
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

// Удалить запись
const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPost = await postModel.deletePost(id);
    if (deletedPost) {
      res.json({ message: "Post deleted", post: deletedPost });
    } else {
      res.status(404).send("Post not found");
    }
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
