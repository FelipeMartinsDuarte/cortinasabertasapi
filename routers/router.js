const route = require("express").Router();
const imgadd = require("./controllers/imageadd");
const teamadd = require("./controllers/teamadd");
const mongoose = require("mongoose");
const teamoptions = require("../models/teamoptions");
const bodyParser = require("body-parser");
const { none } = require("./middlewares/multer");
const multer = require("./middlewares/multer");
route.use(bodyParser.json()); // to support JSON bodies
route.use(bodyParser.urlencoded({ extended: true }));

//Caso queira uma imagem mudarpara multer.single('images') obs:usaremos no logo
route.post("/uploadmultiple", multer.array("images", 12), imgadd.uploads);

route.post("/uploadform", teamadd.addteamitem);

module.exports = route;
