const express = require("express");

const app = express();

// Controllers for all routes
const controllers = require("./controllers/imageControllers");

var exphbs = require("express-handlebars");
app.use(express.urlencoded());
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
const port = process.env.PORT || 3000;
const { imageUpload } = require("./multer.config");

app.get("/", controllers.getForm);
app.post(
  "/process",
  imageUpload.single("image"),
  (req, res) => {
    console.log(req.file);
    res.send(req.file);
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
