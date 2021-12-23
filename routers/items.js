//importing modules
const route = require("express").Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Configuring modules
route.use(bodyParser.json()); // to support JSON bodies
route.use(bodyParser.urlencoded({ extended: true }));

//Request models
const spot = require("./controllers/Items/spot")

//Routes
route.post("/spot", spot.additem);


module.exports = route;
