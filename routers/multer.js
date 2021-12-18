const { STATUS_CODES } = require("http");
const multer = require("multer");
const path = require("path");
const images = require("../models/images");

// set storage
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    var extension = file.originalname.substr(
      file.originalname.lastIndexOf(".")
    );

    cb(null, file.fieldname + "-" + Date.now() + extension);
  },
});

var store = multer({
  storage: storage,

  limits: { filesize: 1200 * 1200 },

  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

//verifying file extension
function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png/;

  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Envie uma imagem por favor");
  }
}

module.exports = store;
