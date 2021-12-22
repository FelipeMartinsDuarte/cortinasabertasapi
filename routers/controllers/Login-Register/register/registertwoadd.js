const route = require("express").Router();
const mongoose = require("mongoose");
const clientuserModel = require("../../../../models/clientuser");
const bodyParser = require("body-parser");
route.use(bodyParser.json()); // to support JSON bodies
route.use(bodyParser.urlencoded({ extended: true }));


exports.addregister = (req,res) => {


    const{password,confirmpassword} = req.body;

    let errors = []

    //Check required fields
    if(!password || !confirmpassword) {
        errors.push({Error: "Por favor preencha os campos"})
    }

    // Check passwords match
    if(password !== confirmpassword){
        errors.push({Error: "As senhas inseridas não concidem"})
    }

    //Check pass lenght
    if(password.lenght > 7) {
     //Empty value fixing bug of response being []
    } else {
        errors.push({Error: "A Senha deve ter ao menos 8 caracteres"})
    }

    if(errors != []){
      return res.status(400).json(errors);
    } else{
        const newClient = new clientuserModel({})
    }
}