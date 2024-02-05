//Importing modules
const route = require("express").Router();
const mongoose = require("mongoose");

//Request Models
const accessibilityModel = require('../../../../models/accessibilityoptions')
const images = require("../../../../models/images");

//Export function
exports.getitem = (req, res) => {
  accessibilityModel
    .find({})
    .populate('icon')
    .then(items => {
        res.send(items);
    })
    .catch((err) => {
        if(err){
            return res.status(500).json({ Error: "Ocorreu um erro tente novamente" })
        }
    });
};
