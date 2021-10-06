const db = require("../database/db");
const { v4: uuidv4 } = require("uuid");

const multer = require("multer");

let imageStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});
let imageUpload = multer({
  imageStorage,
  limits: { fileSize: 1000000 * 100 },
}).single("photo"); //100mb

module.exports = {
  getForm: (req, res) => res.render("home"),

  postFormUpload: (req, res) => {
    upload(req, res, async (err) => {
      if (err) {
        console.error(err.message);
      }
      console.log(req.file.filename);
    });
  },
};
