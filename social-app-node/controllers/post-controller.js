const Post = require("../models/Post");
const User = require("../models/User");

exports.index = async (req, res) => {
  let posts = await Post.find();
  res.status(200).json({ status: true, data: posts });
};

exports.show = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post != null) {
      return res.status(200).json({ status: true, post: post });
    }
    return res.status(404).json({ status: false, message: "Post Not Found." });
  } catch (error) {
    console.log(error);
  }
};

exports.store = async (req, res) => {
  let newPost = new Post(req.body);

  try {
    let result = await newPost.save();
    if (result != null) {
      return res.status(201).json({
        status: true,
        message: "Post createdd successfully",
        result: result,
      });
    }
    return res.status(400).json({ status: false, message: "Failed to create post" });
  } catch (error) {
    console.log(error);
  }
};

exports.update = async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);

    if (post.userId === req.body.userId) {
      let result = await post.updateOne({ $set: req.body });
      if (result.modifiedCount == 1) {
        res.status(200).json({
          status: true,
          message: "Post updated successfully",
        });
      }
      res.status(400).json({ status: false, message: "Failed to update post" });
    }
    res
      .status(400)
      .json({ status: false, message: "You can only update your posts." });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, message: "Failed to update post" });
  }
};

exports.destroy = async (req, res) => {
  let post = await Post.findById(req.params.id);
  if (post != null) {
    if (post.userId == req.body.userId) {
      let result = await Post.deleteOne({ _id: req.params.id });
      if (result.deletedCount == 1) {
        return res.status(200).json({
          status: true,
          message: "Post deleted successfully",
        });
      }
      return res.status(400).json({
        status: false,
        message: "Failed to delete post",
      });
    }
    res.status(403).json({
      status: false,
      message: "Delete rejected, not the owner",
    });
  }
  return res.status(404).json({
    status: false,
    message: "Error, Failed to find target post",
  });
};

exports.likePost = async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);

    if (!post.likes.includes(req.body.userId)) {
      let result = await post.updateOne({ $push: { likes: req.body.userId } });
      if (result.modifiedCount == 1) {
        return res.status(200).json({
          status: true,
          message: "Post has been liked successfully",
        });
      }
    }
    let result = await post.updateOne({ $pull: { likes: req.body.userId } });
    if (result.modifiedCount == 1) {
      return res.status(200).json({
        status: true,
        message: "Post has been unliked successfully",
      });
    }
    return res
      .status(400)
      .json({ status: false, message: "Failed to like the post" });
  } catch (error) {
    console.log(error);
  }
};

exports.getTimelinePosts = async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    return res
      .status(200)
      .json({ status: true, timelinePosts: userPosts.concat(...friendPosts) });
  } catch (error) {
    console.log(error);
  }
};

exports.getUserPosts = async (req, res) => {
  try {
    const currentUser = await User.findOne({ username: req.params.username });
    const userPosts = await Post.find({ userId: currentUser._id });
    return res.status(200).json({ status: true, userPosts: userPosts });
  } catch (error) {
    console.log(error);
  }
};
