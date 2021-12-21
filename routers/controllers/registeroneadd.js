const route = require("express").Router();
const mongoose = require("mongoose");
const teamoptions = require("../../models/teamoptions");
const bodyParser = require("body-parser");
route.use(bodyParser.json()); // to support JSON bodies
route.use(bodyParser.urlencoded({ extended: true }));

exports.addregister = (req,res) => {
   
    var{name,email} = req.body;
    var error = []; //Here will be the messages to display in frontend

    //Checking if there is name
    if(!name){
        error.push({Error: "Insira um nome"})
    } else{
        //Checking if there is email
        if(!email){
        error.push({Error: "Insira um email"})
        } else {
            //Checking if there is any errors to redirect
            if(error.length == 0){


                
                return res.redirect("/register");
            } else {
                //Throw error if something ha]en
                return res.status(500).json({ Error: "Algo deu errado tente novamente" });
            }
        }
    }
}