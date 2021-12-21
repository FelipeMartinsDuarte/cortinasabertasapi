const route = require("express").Router();
const mongoose = require("mongoose");
const acessibilityModel = require("../../models/accessibilityoptions");
const bodyParser = require("body-parser");
const slugify = require("slugify");
route.use(bodyParser.json()); // to support JSON bodies
route.use(bodyParser.urlencoded({ extended: true }));

exports.accessibilities = (req,res) =>{
    acessibilityModel
    .find()
    .select("name")
    .lean()
    .exec(function (err, doc) {
      catchvalue(doc);
    });

    async function catchvalue(doc) {
        try {
          var values = [];
          var allowthisvalues = [];
          var lenght = 0;
          //Converting to json and javascript object
          let stri = JSON.stringify(doc);
          let parser = JSON.parse(stri);
          //Counting parse object as array
          for (var k in parser)
            if (parser.hasOwnProperty(k)) {
              lenght++;
            }
          //Catching all names
          for (let i = 0; i < lenght; i++) {
            values.push(parser[i].name);
          }
    
          values.forEach((item) => {
            allowthisvalues.push(slugify(item));
          });

          await verificator(allowthisvalues);
        } catch {
          await res.status(500).json({ Error: "Não conseguimos achar os items" });
        }
      }
    
      var {accessibility,accessibility2} = req.body;
    
      async function verificator(values) {
        try {
          //Push itens
          let array = [];
          array.push(accessibility,accessibility2);
    
          //White-list values
          let permitedValues = values;
    
          //Verify duplicate files
          if (accessibility === accessibility2) {
            await res.status(409).json({ Error: "Você selecionou itens iguais" });
          } else {
            //Verify valid value
            let allFounded = array.every((ai) => permitedValues.includes(ai));
    
            if (!allFounded) {
              await res.status(400).json({ Error: "Algum item é invalido" });
            } else {
              await res.status(200).json({ msg: "Item enviado com sucesso" });
            }
          }
        } catch {
          await res.status(500).json({ Error: "Erro inesperado, tente novamente" });
        }
      }
    
}