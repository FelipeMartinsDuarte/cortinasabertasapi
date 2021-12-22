const route = require("express").Router();
const fs = require("fs"); //para ler o arquivo e converter
const imageModel = require("../../../models/images");
const mongoose = require("mongoose");
const multer = require("multer");
const { none } = require("../../middlewares/multer");


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