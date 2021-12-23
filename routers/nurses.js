//Importing modules
const route = require("express").Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Configuring modules
route.use(bodyParser.json()); // to support JSON bodies
route.use(bodyParser.urlencoded({ extended: true }));

//Request models
const nursingModel = require("../models/nursing");

//Routes

//Catch the nursing
route.get("/searchresults", (req, res) => {
  //Catch and Storing values
  let search = new Array();
  let allowedvalues = ["bairro", "cidade", "estado", "regiao"];
  var queryParameter = req.query;

  //Check value is valid
  for (k in queryParameter) {
    search.push(k);
  }

  //Check if its allowed value
  let allFounded = search.every((ai) => allowedvalues.includes(ai));

  if (!allFounded) {
    return res.status(400).json({ Error: "Algum item é invalido" }); //Invés de dar um erro voltar para a pagina principal
  }

  //Sort from the minum to max

  let sortarray = [];

  if (req.query.bairro != undefined) {
    sortarray.push({ district: req.query.bairro });
  }

  if (req.query.cidade != undefined) {
    sortarray.push({ city: req.query.cidade });
  }

  if (req.query.estado != undefined) {
    sortarray.push({ state: req.query.estado });
  }

  if (req.query.regiao != undefined) {
    sortarray.push({ region: req.query.regiao });
  }


});

module.exports = route;
