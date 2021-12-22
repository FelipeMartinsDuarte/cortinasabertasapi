const route = require("express").Router();
const mongoose = require("mongoose");
const teamoptions = require("../../../../models/teamoptions");
const validator = require("validator");
const bodyParser = require("body-parser");
route.use(bodyParser.json()); // to support JSON bodies
route.use(bodyParser.urlencoded({ extended: true }));

exports.loginone = (req,res) => {
    var email = req.body.email;
    var emailvalid = validator.isEmail(email);
  
    if (!email) {
      return res.status(400).json({ Error: "Preencha os campos" });
    }
  
    if(!emailvalid){
      return res.status(400).json({ Error: "Digite um email valido" });
    }
    
    res.render("login", {email:email});
}