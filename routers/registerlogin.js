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
const registeroneadd = require("./controllers/Login-Register/register/registeroneadd");
const registertwoadd = require("./controllers/Login-Register/register/registertwoadd");
const loginoneadd = require("./controllers/Login-Register/loging/loginone");
const logintwoadd = require("./controllers/Login-Register/loging/logintwo");

//Routes
route.post("/registerone", registeroneadd.addregister)

route.post("/registertwo", registertwoadd.addregister);

route.post("/loginone", loginoneadd.loginone);

route.post("/logintwo", logintwoadd.logintwo);

module.exports = route;
