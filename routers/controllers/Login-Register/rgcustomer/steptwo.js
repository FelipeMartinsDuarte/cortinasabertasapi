const route = require("express").Router();
const mongoose = require("mongoose");
const NursingModel = require("../../../../models/nursing");
const customeruserModel = require("../../../../models/customeruser");
const bcrypt = require('bcrypt');
const bodyParser = require("body-parser");
const passport = require("passport");
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
        const newCustomer = new customeruserModel({
            name: name,
            credential:{
                acess:1,
                email: email,
                password: password
            },
            completednursing: false,
        })

            // Hash Password
            bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(newCustomer.credential.password, salt, (err,hash)=>{
                    if(err) throw err;

                    //Set password to hashed
                    newCustomer.credential.password = hash;

                    //Set his Nursing home
                    const newNursing = new NursingModel({
                        owner: email
                    })

                    //Save customer
                    newCustomer.save()
                    .then(user => {
                        newNursing.owner = user.id;
                        newNursing.save();
                        res.redirect('/')
                    })
                    .catch(err=>{
                        console.log(err);
                    })

                })
            })
        }

}