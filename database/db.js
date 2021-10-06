const Image = require("./ImageSchema");

const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://express:asdfqwer@cluster0.r8lxa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

if (!connectionString) {
  console.error("Mongodb connection srtring is required");
  process.exit(1);
}

mongoose.connect(connectionString);

const db = mongoose.connection;

db.on("error", (err) => {
  console.error("MongoDB error" + err.messsage);
});

db.once("open", () => console.log("mongoodb connected successfully"));
module.exports = {};
