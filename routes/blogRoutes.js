const express = require("express");
const blogController = require("../controller/blogController");
const blogUploads = require("../controller/uploads/blogUpload");

const router = express.Router();

router
  .route("/")
  .post(
    blogUploads.uploadBlogImage,
    blogUploads.resizeBlogImage,
    blogController.createBlog
  )
  .get(blogController.getAllBlogs);

router
  .route("/:id")
  .get(blogController.getBlog)
  .patch(
    blogUploads.uploadBlogImage,
    blogUploads.resizeBlogImage,
    blogController.updateBlog
  )
  .delete(blogController.deleteBlog);

module.exports = router;
