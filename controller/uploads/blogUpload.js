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

exports.uploadBlogImage = upload.single("image");

exports.resizeBlogImage = catchAsync(async (req, res, next) => {
  // Proceed only if there is a file
  if (!req.file) {
    return next(new AppError("No image file uploaded.", 400));
  }

  const filename = `blog-${req.params.id}-${Date.now()}-image.webp`;

  await sharp(req.file.buffer)
    .resize(1000, 500)
    .toFormat("webp")
    .webp({ quality: 90 })
    .toFile(path.join(__dirname, "../../client/public/images/", filename));

  req.body.image = filename; // Assign filename to req.body.image

  next();
});
