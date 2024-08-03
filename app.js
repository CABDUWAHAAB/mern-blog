const path = require("path");
const express = require("express");
const cors = require("cors");
const blogRouter = require("./routes/blogRoutes");

const app = express();
app.use(cors());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "client")));

app.use("/api/v1/blogs", blogRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

module.exports = app;
