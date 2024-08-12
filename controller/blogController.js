// handle factories
const { getAllBlogs, getBlog } = require("./blogHandlerFactory/getAndgetAll");
const { createBlog } = require("./blogHandlerFactory/create");
const {
  updateBlog,
  deleteBlog,
} = require("./blogHandlerFactory/updateAndDelete");

const Blog = require("../model/blogModel");

exports.getAllBlogs = getAllBlogs(Blog);
exports.getBlog = getBlog(Blog);
exports.createBlog = createBlog(Blog);
exports.updateBlog = updateBlog(Blog);
exports.deleteBlog = deleteBlog(Blog);
