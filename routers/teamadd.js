const route = require("express").Router();
const mongoose = require("mongoose");
const teamoptions = require("../models/teamoptions");
const bodyParser = require("body-parser");
route.use(bodyParser.json()); // to support JSON bodies
route.use(bodyParser.urlencoded({ extended: true }));

//Add item to team
exports.addteamitem = (req, res) => {
  teamoptions
    .find()
    .select("name")
    .lean()
    .exec(function (err, doc) {
      catchvalue(doc);
    });

  async function catchvalue(doc) {
    try {
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
        allowthisvalues.push(parser[i].name);
      }
      await verificator(allowthisvalues);
    } catch {
      await res.status(500).json({ Error: "Não conseguimos achar os items" });
    }
  }

  //Handling post values
  var { teamlist, teamlist2, teamlist3 } = req.body;

  async function verificator(values) {
    try {
      //Push itens
      let array = [];
      array.push(teamlist, teamlist2, teamlist3);
      //White-list values
      let permitedValues = values;

      //Verify duplicate files
      if (
        teamlist === teamlist2 ||
        teamlist2 === teamlist3 ||
        teamlist === teamlist3
      ) {
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
};
