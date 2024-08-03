const express = require('express');
const blogController = require('../controller/blogController');

const router = express.Router();

router
    .route('/')
    .post(blogController.createBlog)
    .get(blogController.getAllBlogs);

router
    .route('/:id')
    .get(blogController.getBlog)
    .delete(blogController.deleteBlog);

module.exports = router;
