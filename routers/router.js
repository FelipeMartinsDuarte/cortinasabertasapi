const route = require("express").Router();
const controller = require("./controller");
const mongoose = require("mongoose");
const teamoptions = require("../models/teamoptions");
const bodyParser = require("body-parser");
const { none } = require("./multer");
const multer = require("./multer");
route.use(bodyParser.json()); // to support JSON bodies
route.use(bodyParser.urlencoded({ extended: true }));

//Caso queira uma imagem mudarpara multer.single('images') obs:usaremos no logo
route.post("/uploadmultiple", multer.array("images", 12), controller.uploads);

route.post("/uploadform", (req, res) => {
  teamoptions
    .find()
    .select("name")
    .lean()
    .exec(function (err, doc) {
      catchvalue(doc);
    });

  function catchvalue(doc) {
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

    receiveitem(allowthisvalues);
  }

  var { teamlist, teamlist2, teamlist3 } = req.body;

  function receiveitem(values) {
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
      return res.status(409).json({ Error: "Você selecionou itens iguais" });
    } else {
      //Verify valid value
      let allFounded = array.every((ai) => permitedValues.includes(ai));

      if (!allFounded) {
        return res.status(400).json({ Error: "Algum item é invalido" });
      } else {
        return res.status(200).json({ msg: "Item enviado com sucesso" });
      }
    }
  }
});

module.exports = route;
