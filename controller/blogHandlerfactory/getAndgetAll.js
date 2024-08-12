const catchAsync = require("../../utils/catchAsync");

exports.getAllBlogs = (Model) =>
  catchAsync(async (req, res, next) => {
    try {
      const blogs = await Model.find();
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
  });

exports.getBlog = (Model) =>
  catchAsync(async (req, res, next) => {
    const blogs = await Model.findById(req.params.id);

    if (!blogs) {
      return next(Error("No blog found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        blogs,
      },
    });
  });
