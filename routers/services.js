//Importing modules
const route = require("express").Router();
const mongoose = require("mongoose");

//Configuring modules
const bodyParser = require("body-parser");
route.use(bodyParser.json()); // to support JSON bodies
route.use(bodyParser.urlencoded({ extended: true }));

//Request models
const quantityadd = require("./controllers/Place/quantityadd");
const accessibilityadd = require("./controllers/Place/accessibilityadd");
const spotadd = require("./controllers/Place/spotadd");

//Routes
route.post("/quantidade", quantityadd.addquantities);

route.post("/acessibilidade", accessibilityadd.accessibilities);

route.post("/lugar", spotadd.addspoties)




module.exports = route;
