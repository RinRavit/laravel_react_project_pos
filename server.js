const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();

// Set up storage for uploaded images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

// Serve images from the uploads directory
app.use("/uploads", express.static("uploads"));

// Handle file upload
app.post("/upload", upload.single("image"), (req, res) => {
  res.json({ file: req.file });
});

// Your other routes...

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
