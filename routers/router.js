//Importing modules
const route = require("express").Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Configuring modules
route.use(bodyParser.json()); // to support JSON bodies
route.use(bodyParser.urlencoded({ extended: true }));
const { none } = require("./middlewares/multer");
const multer = require("./middlewares/multer");

//Request Controller
const imgadd = require("./controllers/uploader/imageadd");

//Routes
route.post("/enviarmultiplo", multer.array("images", 12), imgadd.uploads);

route.post("/enviarunico", multer.single("images"), imgadd.uploads);



module.exports = route;
