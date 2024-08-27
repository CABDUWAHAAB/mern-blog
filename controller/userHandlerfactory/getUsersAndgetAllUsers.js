const catchAsync = require("../../utils/catchAsync");

exports.getAllUsers = (Model) =>
  catchAsync(async (req, res, next) => {
    try {
      const users = await Model.find();
      res.status(200).json({
        status: "success",
        results: users.length,
        data: {
          users,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err.message,
      });
    }
  });

exports.getUser = (Model) =>
  catchAsync(async (req, res, next) => {
    const users = await Model.findById(req.params.id);

    if (!users) {
      return next(Error("No user found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  });
