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

//Get controllers
const quantityget = require("./controllers/Items/gets/quantity");
const accessibilityget = require("./controllers/Items/gets/accessibility")
const spotget = require("./controllers/Items/gets/spot")


//Routes
route.post("/api/estrutura", quantityadd.addquantities);

route.get("/api/estrutura", quantityget.getitem);

route.post("/api/acessibilidade", accessibilityadd.accessibilities);

route.get("/api/acessibilidade", accessibilityget.getitem);

route.post("/api/lugar", spotadd.addspoties)

route.get("/api/lugar", spotget.getitem);





module.exports = route;
