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

//Request get models
const teamget = require("./controllers/Items/gets/team")

//Routes
route.post("/api/equipe", teamadd.addteamitem);

route.get("/api/equipe", teamget.getitem );

route.post("/api/perfil", addprof.addprofile);

route.post("/api/contato", contactadd.contactingadd)

module.exports = route;
