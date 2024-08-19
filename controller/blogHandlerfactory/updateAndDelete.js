const fs = require("fs");
const path = require("path");
const catchAsync = require("../../utils/catchAsync");
const AppError = require("../../utils/appError");

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

    // Find the blog by ID
    const blog = await Model.findById(id);

    if (!blog) {
      return next(new AppError("No blog found with this ID", 404));
    }

    // Get the image path
    const imagePath = path.join(
      __dirname,
      `../../client/public/images/${blog.image}`
    );

    // Delete the blog from the database
    await Model.findByIdAndDelete(id);

    // Check if the image exists and delete it
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error("Error deleting the image:", err);
      } else {
        console.log("Image deleted successfully:", imagePath);
      }
    });

    // Send a response to the client
    res.status(204).json({
      status: "success",
      data: null,
    });
  });
