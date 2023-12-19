const express = require("express");
const router = express.Router();

const posts_controller = require("../controllers/postsController");

router.get("/", posts_controller.all_posts);

router.post("/add-post", posts_controller.add_post);

router.get("/:postid", posts_controller.single_post);

router.get("/:postid/comments", posts_controller.comments_for_post);

router.post("/:postid/new-comment", posts_controller.add_comment);

router.post("/:postid/delete", posts_controller.post_delete);

router.post("/:postid/toggle", posts_controller.post_visibility_toggle);

router.post("/:postid/comments/:commentid/delete", posts_controller.comment_delete);

module.exports = router;
