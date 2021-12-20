const route = require("express").Router();
const controller = require("./controller");
const mongoose = require("mongoose");
const teamoptions = require("../models/teamoptions");
const bodyParser = require("body-parser");
const { none } = require("./multer");
const multer = require("./multer");
route.use(bodyParser.json()); // to support JSON bodies
route.use(bodyParser.urlencoded({ extended: true }));

//Caso queira uma imagem mudarpara multer.single('images') obs:usaremos no logo
route.post("/uploadmultiple", multer.array("images", 12), controller.uploads);

route.post("/uploadform", controller.addteamitem);

module.exports = route;
