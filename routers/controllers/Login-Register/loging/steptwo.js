const route = require("express").Router();
const mongoose = require("mongoose");
const teamoptions = require("../../../../models/teamoptions");
const passport = require("passport");
const bcrypt = require('bcrypt');
const bodyParser = require("body-parser");
route.use(bodyParser.json()); // to support JSON bodies
route.use(bodyParser.urlencoded({ extended: true }));

exports.logintwo = (req,res,next) => {
 passport.authenticate('local',{
     successRedirect:'/',
     failureRedirect: '/register',
     failureFlash: true
 })(req,res,next);
}