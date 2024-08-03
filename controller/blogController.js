const { data } = require("autoprefixer");
const Blog = require("../model/blogModel");

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({
      status: "success",
      results: blogs.length,
      data: {
        blogs,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getBlog = async (req, res) => {
  const blogs = await Blog.findById(req.params.id);

  if (!blogs) {
    return Error("No blog found with that ID", 404);
  }

  res.status(200).json({
    status: "success",
    data: {
      blogs,
    },
  });
};

exports.createBlog = async (req, res) => {
  try {
    const { title, author, description } = req.body;
    const blog = new Blog({ title, author, description });
    await blog.save();

    if (req.headers.accept.includes("text/html")) {
      // Redirect to home page after successful creation
      return res.redirect("/blog");
    }

    res.status(201).json({
      status: "success",
      data: {
        blog,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.updateBlog = async (req, res) => {
  const blogs = await Blog.findByIdAndUpdate(req.params.id);

  res.status(200).json({
    status: "success",
    data: {
      blogs,
    },
  });
};

exports.deleteBlog = async (req, res) => {
  const blogs = await Blog.findByIdAndDelete(req.params.id);

  if (!blogs) {
    return Error("No blog found with this ID", 404);
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
};
