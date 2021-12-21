const route = require("express").Router();
const mongoose = require("mongoose");
const acessibilityModel = require("../../models/accessibilityoptions");
const bodyParser = require("body-parser");
const slugify = require("slugify");
route.use(bodyParser.json()); // to support JSON bodies
route.use(bodyParser.urlencoded({ extended: true }));

exports.accessibilities = (req,res) =>{
    res.send("Felipe");
}