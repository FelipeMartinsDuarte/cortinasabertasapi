const route = require("express").Router();
const controller = require('./controller');
const { none } = require("./multer");
const multer = require("./multer");


//Caso queira uma imagem mudarpara multer.single('images') obs:usaremos no logo
route.post("/uploadmultiple", multer.array("images", 12), controller.uploads);

module.exports = route;
