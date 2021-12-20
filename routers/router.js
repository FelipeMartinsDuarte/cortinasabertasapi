const route = require("express").Router();
const controller = require("./controller");
const mongoose = require("mongoose")
const teamoptions = require("../models/teamoptions")
const bodyParser = require("body-parser");
const { none } = require("./multer");
const multer = require("./multer");
route.use(bodyParser.json()); // to support JSON bodies
route.use(bodyParser.urlencoded({ extended: true }));

//Caso queira uma imagem mudarpara multer.single('images') obs:usaremos no logo
route.post("/uploadmultiple", multer.array("images", 12), controller.uploads);

route.post("/uploadform", (req, res) => {
    
  var { teamlist, teamlist2, teamlist3 } = req.body;
  const permitedValues = ["Medicos", "Fonologos", "Enfermeiros", "Psicologos"];

  if (teamlist === teamlist2 || teamlist2 === teamlist3 || teamlist === teamlist3) {
    return res.status(409).json({Error: "Você selecionou itens iguais"});
  } else {
    let array = [];
    array.push(teamlist, teamlist2, teamlist3);

    let allFounded = array.every(ai => permitedValues.includes(ai));

    if(!allFounded){
        return res.status(400).json({Error: "Algum item é invalido"});
    } else{
        return res.status(200).json({msg: "Item enviado com sucesso"});
    }


  }
})

module.exports = route;
