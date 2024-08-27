const sharp = require("sharp");
const AppError = require("../../utils/appError");
const catchAsync = require("../../utils/catchAsync");
const multer = require("multer");
const path = require("path");

const storage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only images.", 400), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: multerFilter,
});

exports.uploadUserImage = upload.single("userImage");

exports.resizeUserImage = catchAsync(async (req, res, next) => {
  // Proceed only if there is a file
  if (!req.file) {
    return next(new AppError("No userImage file uploaded.", 400));
  }

  const Userfilename = `user-${req.params.id}-${Date.now()}-image.webp`;

  await sharp(req.file.buffer)
    .resize(1000, 500)
    .toFormat("webp")
    .webp({ quality: 90 })
    .toFile(path.join(__dirname, "../../client/public/users/", Userfilename));

  req.body.userImage = Userfilename; // Assign filename to req.body.image

  next();
});
