const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Image = new Schema(
  {
    filename: { type: "String", required: true },
    uuid: { type: "String", required: true },
    path: { type: "String", required: true },
    size: { type: "Number", required: true },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Image", Image);
