//Importing modules
const route = require("express").Router();
const mongoose = require("mongoose");

//Configuring modules
const bodyParser = require("body-parser");
route.use(bodyParser.json()); // to support JSON bodies
route.use(bodyParser.urlencoded({ extended: true }));

//Request models
const quantityadd = require("./controllers/Place/quantityadd");
const quantityget = require("./controllers/Items/gets/quantity");
const accessibilityadd = require("./controllers/Place/accessibilityadd");
const spotadd = require("./controllers/Place/spotadd");

//Routes
route.post("/api/quantidade", quantityadd.addquantities);

route.get("/api/quantidade", quantityget.getitem);

route.post("/api/acessibilidade", accessibilityadd.accessibilities);

route.post("/api/lugar", spotadd.addspoties)




module.exports = route;
