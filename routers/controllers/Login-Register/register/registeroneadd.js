const route = require("express").Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const validator = require('validator');
route.use(bodyParser.json()); // to support JSON bodies
route.use(bodyParser.urlencoded({ extended: true }));


exports.addregister = (req, res) => {
  var { name, email } = req.body;
  var emailvalid = validator.isEmail(email);

  if (!name || !email) {
    return res.status(400).json({ Error: "Preencha os campos" });
  }

  if(!emailvalid){
    return res.status(400).json({ Error: "Digite um email valido" });
  }

  res.render("register", {name:name, email:email});
};
