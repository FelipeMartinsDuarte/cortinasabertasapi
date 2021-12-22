const route = require("express").Router();
const mongoose = require("mongoose");
const teamoptions = require("../../../../models/teamoptions");
const bodyParser = require("body-parser");
route.use(bodyParser.json()); // to support JSON bodies
route.use(bodyParser.urlencoded({ extended: true }));

exports.addregister = (req, res) => {
  var { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ Error: "Preencha os campos" });
  }

  res.redirect("/register");
};
