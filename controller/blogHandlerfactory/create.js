const catchAsync = require("../../utils/catchAsync");

exports.createBlog = (Model) =>
  catchAsync(async (req, res, next) => {
    console.log("Received data:", req.body);
    const { title, author, description, image } = req.body;
    const blog = new Model({ title, author, description, image });
    await blog.save();

    if (!title || !author || !description || !image) {
      return res.status(400).json({
        status: "fail",
        message: "All fields are required.",
      });
    }

    if (req.headers.accept.includes("text/html")) {
      // Redirect to home page after successful creation
      return res.redirect("/posts");
    }

    res.status(201).json({
      status: "success",
      data: {
        blog,
      },
    });
  });
