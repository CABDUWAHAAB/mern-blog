const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const blogRouter = require("./routes/blogRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, "client")));

app.use("/api/v1/blogs", blogRouter);
app.use("/api/v1/users", userRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/public/", "index.html"));
});

module.exports = app;
