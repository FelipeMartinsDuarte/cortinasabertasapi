//Importing modules
const route = require("express").Router();
const mongoose = require("mongoose");

//Request Models
const teamModel = require("../../../../models/teamoptions");

//Configurations
//Bodyparser
const bodyParser = require("body-parser");
route.use(bodyParser.json()); // to support JSON bodies
route.use(bodyParser.urlencoded({ extended: true }));

//Export function
exports.getitem = (req,res) =>{
    res.send("Felipe");
}