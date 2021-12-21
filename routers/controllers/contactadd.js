const route = require("express").Router();
const mongoose = require("mongoose");
const quantityModel = require("../../models/quantityoptions");
const bodyParser = require("body-parser");
const slugify = require("slugify");
route.use(bodyParser.json()); // to support JSON bodies
route.use(bodyParser.urlencoded({ extended: true }));

exports.contactingadd = (req,res) => {
    var {tel1,tel2,timestart,timeend,website} = req.body;

    //Existence verifing
    if(tel1 || tel2 || timestart && timeend){
        //if only one cellphone exist
        if(tel1){
            return res.status(200).json({ msg: "Enviado com sucesso" });
        //if tel2 exist and tel1 exist
        }else if(tel1 && tel2) {
            //To Send as array to mongoose
            var array = [];
            var openhours = [];
            array.push(tel1,tel2)
            openhours.push(timestart,timeend)
            return res.status(200).json({ msg: "Enviado com sucesso" });
            } else{
                //If only Telephone2 exist, Telephone receive values and tel2 is deleted
                tel1 = tel2;
                tel2 = "";
                return res.status(200).json({ msg: "Enviado com sucesso" });
            }
          //if there is value only in second telephone
        } else{
            return res.status(400).json({ Error: "Informe pelo menos um telefone e sobre o horario de visita" });
        };

    
    }
