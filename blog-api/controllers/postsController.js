const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");
const Post = require("../models/post");
const Comment = require("../models/comment");

exports.single_post = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.postid).exec();
  res.status(200).send(post);
});

exports.all_posts = asyncHandler(async (req, res, next) => {
  const posts = await Post.find().exec();
  res.status(200).send(posts);
});

exports.add_post = [
  body("title").trim().isLength({ min: 1 }).escape(),
  body("text").trim().isLength({ min: 1 }).escape(),

  asyncHandler(async (req, res, next) => {
    if (!req.isAuthenticated()) {
      return res.status(401).send("Unauthorized");
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send(`FAILED. ERROR LOG: ${errors}`);
    }

    const post = new Post({
      title: req.body.title,
      text: req.body.text,
    });
    await post.save();
    return res.status(200).send("Post added succesfully");
  }),
];

exports.comments_for_post = asyncHandler(async (req, res, next) => {
  const comments = await Comment.find({ post: req.params.postid });

  res.send(comments);
});

exports.add_comment = [
  body("text").trim().isLength({ min: 1 }),
  body("username").trim().isLength({ min: 1 }).escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send(`FAILED. ERROR LOG: ${errors}`);
    }

    const comment = new Comment({
      text: req.body.text,
      username: req.body.username,
      post: req.params.postid,
    });
    await comment.save();
    res.status(200).send("Comment added");
  }),
];

exports.post_visibility_toggle = asyncHandler(async (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send("Unauthorized");
  }
  const postPrev = await Post.findById(req.body.postid).exec();
  let visibility;
  if (postPrev.isVisible) {
    visibility = false;
  } else {
    visibility = true;
  }

  const post = new Post({
    _id: req.body.postid,
    isVisible: visibility,
  });

  await Post.findByIdAndUpdate(req.body.postid, post, {});
  res.status(200).json({ message: "Post toggled successfully" });
});

exports.post_delete = asyncHandler(async (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send("Unauthorized");
  }
  await Post.findByIdAndDelete(req.body.postid);
  res.status(200).json({ message: "Post deleted successfully" });
});

exports.comment_delete = asyncHandler(async (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send("Unauthorized");
  }
  await Comment.findByIdAndDelete(req.body.commentid);
  res.status(200).send("Comment deleted successfully");
});
