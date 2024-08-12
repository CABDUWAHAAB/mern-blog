const catchAsync = require("../../utils/catchAsync");

exports.updateBlog = (Model) =>
  catchAsync(async (req, res) => {
    const blogs = await Model.findByIdAndUpdate(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        blogs,
      },
    });
  });

exports.deleteBlog = (Model) =>
  catchAsync(async (req, res) => {
    const blogs = await Model.findByIdAndDelete(req.params.id);

    if (!blogs) {
      return Error("No blog found with this ID", 404);
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  });
