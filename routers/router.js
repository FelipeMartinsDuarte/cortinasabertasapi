const route = require("express").Router();
const controller = require('./controller');
const bodyParser = require("body-parser");
const { none } = require("./multer");
const multer = require("./multer");
route.use(bodyParser.json()); // to support JSON bodies
route.use(bodyParser.urlencoded({ extended: true }));

//Caso queira uma imagem mudarpara multer.single('images') obs:usaremos no logo
route.post("/uploadmultiple", multer.array("images", 12), controller.uploads);

route.post("/uploadform", (req,res)=>{
    var option1 = req.body.yesnot;
    res.send(`valor é ${option1}`);
  })

module.exports = route;
