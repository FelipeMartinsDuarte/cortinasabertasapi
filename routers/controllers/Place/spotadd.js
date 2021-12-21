const route = require("express").Router();
const mongoose = require("mongoose");
const spotoptionsModel = require("../../../models/spotoptions");
const bodyParser = require("body-parser");
const slugify = require("slugify");
route.use(bodyParser.json()); // to support JSON bodies
route.use(bodyParser.urlencoded({ extended: true }));


exports.addspoties = (req,res) => {

    spotoptionsModel
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
    
      var {spot,spot2,id,id2} = req.body;
      var todosjuntos = [];
      todosjuntos.push(spot,spot2);
    
      async function verificator(values) {
        try {
          //Push itens
          let data = new Array();
          let ids = [];
          let array = [];
          ids.push(id,id2);
          array.push(spot,spot2);
    
          //White-list values
          let permitedValues = values;
    
          //Verify duplicate files
          if (spot === spot2) {
            await res.status(409).json({ Error: "Você selecionou itens iguais" });
          } else {
            //Verify valid value
            let allFounded = array.every((ai) => permitedValues.includes(ai));
    
            if (!allFounded) {
              await res.status(400).json({ Error: "Algum item é invalido" });
            } else {
                for(let i= 0; i<todosjuntos.length; i++){
                    data.push({name: array[i], image: ids[i]})
                }

              await res.status(200).json({ msg: "Item enviado com sucesso" });
            }
          }
        } catch {
          await res.status(500).json({ Error: "Erro inesperado, tente novamente" });
        }
      }


}