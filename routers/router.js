const route = require("express").Router();
const mongoose = require("mongoose");
const teamoptions = require("../models/teamoptions");
const imgadd = require("./controllers/imageadd");
const addprof = require("./controllers/profileadd")
const teamadd = require("./controllers/teamadd");
const { none } = require("./middlewares/multer");
const multer = require("./middlewares/multer");
const bodyParser = require("body-parser");
route.use(bodyParser.json()); // to support JSON bodies
route.use(bodyParser.urlencoded({ extended: true }));

//Caso queira uma imagem mudarpara multer.single('images') obs:usaremos no logo
route.post("/uploadmultiple", multer.array("images", 12), imgadd.uploads);

route.post("/uploadform", teamadd.addteamitem);

route.post("/uploadprofile", addprof.addprofile);

module.exports = route;
