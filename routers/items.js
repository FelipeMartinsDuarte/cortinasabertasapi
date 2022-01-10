//importing modules
const route = require("express").Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Configuring modules
//Body-Parser
route.use(bodyParser.json()); // to support JSON bodies
route.use(bodyParser.urlencoded({ extended: true }));
//Multer
const { none } = require("./middlewares/multer");
const multer = require("./middlewares/multer");

//Request models
const spot = require("./controllers/Items/spot")

//Routes
route.post("/api/spot",multer.array("images",1),spot.additem);


module.exports = route;
