const catchAsync = require("../../utils/catchAsync");

exports.updateBlog = (Model) =>
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const updatedBlog = await Model.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedBlog) {
      return res.status(404).json({
        status: "fail",
        message: "No blog found with this ID",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        blog: updatedBlog,
      },
    });
  });

exports.deleteBlog = (Model) =>
  catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const blogs = await Model.findByIdAndDelete(id);

    if (!blogs) {
      return next(new AppError("No blog found with this ID", 404)); // Properly handle error
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  });
