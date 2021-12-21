const route = require("express").Router();
const mongoose = require("mongoose");
const teamoptions = require("../models/teamoptions");
const imgadd = require("./controllers/imageadd");
const addprof = require("./controllers/Service/profileadd")
const teamadd = require("./controllers/Service/teamadd");
const quantityadd = require("./controllers/Place/quantityadd");
const accessibilityadd = require("./controllers/Place/accessibilityadd");
const contactadd = require("./controllers/Service/contactadd");
const registeroneadd = require("./controllers/Login-Register/register/registeroneadd");
const registertwoadd = require("./controllers/Login-Register/register/registertwoadd");
const loginoneadd = require("./controllers/Login-Register/loging/loginone");
const logintwoadd = require("./controllers/Login-Register/loging/logintwo");
const spotadd = require("./controllers/Place/spotadd");
const { none } = require("./middlewares/multer");
const multer = require("./middlewares/multer");
const bodyParser = require("body-parser");
route.use(bodyParser.json()); // to support JSON bodies
route.use(bodyParser.urlencoded({ extended: true }));

//Caso queira uma imagem mudarpara multer.single('images') obs:usaremos no logo
route.post("/uploadmultiple", multer.array("images", 12), imgadd.uploads);

route.post("/uploadform", teamadd.addteamitem);

route.post("/uploadprofile", addprof.addprofile);

route.post("/addquantity", quantityadd.addquantities);

route.post("/addaccessibility", accessibilityadd.accessibilities);

route.post("/addspot", spotadd.addspoties)

route.post("/addcontact", contactadd.contactingadd)

route.post("/registerone", registeroneadd.addregister)

route.post("/registertwo", registertwoadd.addregister);

route.post("/loginone", loginoneadd.loginone);

route.post("/logintwo", logintwoadd.logintwo);


module.exports = route;
