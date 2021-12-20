const route = require("express").Router();
const imageModel = require("../models/images");
const fs = require("fs"); //para ler o arquivo e converter
const { none } = require("./multer");
const multer = require("multer");
const mongoose = require("mongoose");
const teamoptions = require("../models/teamoptions");
const bodyParser = require("body-parser");
route.use(bodyParser.json()); // to support JSON bodies
route.use(bodyParser.urlencoded({ extended: true }));


//Uploading files
exports.uploads = async (req, res, next) => {
  const files = req.files;

  if (!files) {
    const error = new Error("Por favor escolha arquivos");
    error.httpStatusCode = 400;
    return next(error);
  }

  let imgArray = files.map((file) => {
    //Convertendo para 64 bits

    let img = fs.readFileSync(file.path);

    return (encode_image = img.toString("base64"));
  });

  let result = imgArray.map((src, index) => {
    //Está pegando cada item e colocando no mongo Schema
    let imagesSchema = {
      contentType: files[index].mimetype,
      imageBase64: src,
      dataupload: Date.now(),
      filename: files[index].originalname,
      uploader: "nameofpeople",
      loi: true,
    };

    //Após o Schema ser aplicado está salvando
    let newImage = new imageModel(imagesSchema);

    return newImage
      .save()
      .then((savedDoc) => {
        console.log("Imagem enviada");
        console.log(savedDoc.id);
        //send savedDoc to mongoose database
      })
      .catch((err) => {
        if (err) {
          if (err.name === "MongoError" || err.code === 11000) {
            return Promise.reject({
              error: "Arquivo duplicado, já existe um arquivo igual",
            });
          } else {
            return Promise.reject({
              error: "Algo deu errado, tente novamente",
            });
          }
        }
      });
  });

  Promise.all(result)
    .then((msg) => {
      res.redirect("/"); //como este item está na verdade no route isto aqui é o (res,req){res.send("issoaqui")}
    })
    .catch((err) => {
      res.json(err);
    });
};

//Add item to team
exports.addteamitem = (req, res) => {

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
};
