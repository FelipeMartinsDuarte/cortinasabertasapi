//Importing modules
const route = require("express").Router();
const mongoose = require("mongoose");
const slugify = require("slugify");
const validator = require("validator");
const fs = require("fs");

//Request Models

const quantityoptionsModel = require("../../../models/quantityoptions");
const imageModel = require("../../../models/images");

//Configurations
//Bodyparser
const bodyParser = require("body-parser");
route.use(bodyParser.json()); // to support JSON bodies
route.use(bodyParser.urlencoded({ extended: true }));
//Multer
const multer = require("multer");
const { none } = require("../../middlewares/multer");

//Export function
exports.additem = async (req, res, next) => {
  const { nameitem } = req.body;
  const files = req.files;

  if (!nameitem || !files) {
    const error = new Error("Por favor preencha os campos");
    error.httpStatusCode = 400;
    return next(error);
  }

  //If exist name slugfy it name
  var nameslug = slugify(nameitem);

  //Define model
  let newteam = new quantityoptionsModel({
    name: nameitem,
    slug: nameslug,
    logo: undefined,
  });

  //Find conflict
  function findConflict(id) {
    quantityoptionsModel.findOne({ slug: nameslug }).then((option) => {
      if (option) {
        return res.status(400).json({ Error: "Este item já está cadastrado" });
      } else {
        newteam.icon = id;
        newteam.save();
      }
    });
  }

  //Save image
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
        findConflict(savedDoc);
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
      res.redirect("/"); //Do after send files
    })
    .catch((err) => {
      res.json(err);
    });

};
