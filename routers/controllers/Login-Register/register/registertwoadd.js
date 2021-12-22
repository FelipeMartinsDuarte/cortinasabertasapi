const route = require("express").Router();
const mongoose = require("mongoose");
const userModel = require("../../../../models/user");
const bodyParser = require("body-parser");
route.use(bodyParser.json()); // to support JSON bodies
route.use(bodyParser.urlencoded({ extended: true }));


exports.addregister = (req,res) => {

    const{password,confirmpassword,email,name} = req.body;
    var strongRegex = new RegExp("^[a-zA-Z0-9]{8,}$");

    let errors = new Array;

    //Check required fields
    if(!password || !confirmpassword) {
        errors.push({Error: "Por favor preencha os campos"})
    }

    // Check passwords match
    if(password !== confirmpassword){
        errors.push({Error: "As senhas inseridas não concidem"})
    }

    //Check pass lenght
    if(strongRegex.test(password) == false) {
        errors.push({Error: "A Senha deve ter ao menos 8 caracteres"})
    } 

    if(errors.length){
        return res.status(400).json(errors);
    } else{
        const newUser = new userModel({
            name:name,
            credential:{
                email: email,
                password: password
            }})
            
        res.send("Felipe");
    }

}