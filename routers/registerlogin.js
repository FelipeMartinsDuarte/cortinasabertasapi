//Importing modules
const route = require("express").Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Configuring modules
route.use(bodyParser.json()); // to support JSON bodies
route.use(bodyParser.urlencoded({ extended: true }));

//Request models
const ctrgstep1 = require("./controllers/Login-Register/rgcustomer/stepone");
const ctrgstep2 = require("./controllers/Login-Register/rgcustomer/steptwo");
const rgstep1 = require("./controllers/Login-Register/register/stepone");
const rgstep2 = require("./controllers/Login-Register/register/steptwo");
const loginoneadd = require("./controllers/Login-Register/loging/stepone");
const logintwoadd = require("./controllers/Login-Register/loging/steptwo");

//Routes
//User Sign up
route.post("/register", rgstep1.addregister)

route.post("/register/password", rgstep2.addregister);

route.post("/login", loginoneadd.loginone);

route.post("/login/password", logintwoadd.logintwo);

//Customer Register (Nursing home owner)
route.post("/account", ctrgstep1.addregister)

route.post("/account/register", ctrgstep2.addregister)

module.exports = route;
