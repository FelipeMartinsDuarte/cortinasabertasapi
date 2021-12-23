//Importing modules
const route = require("express").Router();
const mongoose = require("mongoose");
const spotModel = require("../../../models/spotoptions");
const slugify = require("slugify");
const validator = require("validator");

//Configurations
const bodyParser = require("body-parser");
route.use(bodyParser.json()); // to support JSON bodies
route.use(bodyParser.urlencoded({ extended: true }));

exports.additem = (req, res) => {
  const { nameitem, images } = req.body;

  if (!nameitem || !images) {
    const error = new Error("Por favor preencha os campos");
    error.httpStatusCode = 400;
    return next(error);
  }

  //If exist name slugfy it name
  var nameslug = slugify(nameitem);

  //Define model
  let newSpot = new Spotmodel({
    name: nameslug,
    logo: undefined,
  });

  //Find conflict
  spotModel
    .findOne({ name: nameslug })
    .then((option) => {
      if (option) {
        return res.status(400).json({ Error: "Este item já está cadastrado" });
      } else {
        //newSpot.logo = doc.id;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
