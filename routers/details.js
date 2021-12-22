//importing modules
const route = require("express").Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Configuring modules
route.use(bodyParser.json()); // to support JSON bodies
route.use(bodyParser.urlencoded({ extended: true }));

//Request models
const addprof = require("./controllers/Service/profileadd")
const teamadd = require("./controllers/Service/teamadd");
const contactadd = require("./controllers/Service/contactadd");

//Routes
route.post("/equipe", teamadd.addteamitem);

route.post("/perfil", addprof.addprofile);

route.post("/contato", contactadd.contactingadd)


module.exports = route;
