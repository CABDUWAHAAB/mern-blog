const fs = require("fs");
const path = require("path");
const catchAsync = require("../../utils/catchAsync");
const AppError = require("../../utils/appError");

exports.updateUser = (Model) =>
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const updatedUser = await Model.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return res.status(404).json({
        status: "fail",
        message: "No user found with this ID",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        user: updatedUser,
      },
    });
  });

exports.deleteUser = (Model) =>
  catchAsync(async (req, res, next) => {
    const { id } = req.params;

    // Find the blog by ID
    const user = await Model.findById(id);

    if (!user) {
      return next(new AppError("No user found with this ID", 404));
    }

    // Get the image path
    const imagePath = path.join(
      __dirname,
      `../../client/public/images/users/${user.image}`
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
