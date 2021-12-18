const imageModel = require("../models/images");
const fs = require("fs"); //para ler o arquivo e converter
const { none } = require("./multer");
const multer = require("multer");


exports.uploads = (req, res, next) => {
  
  const files = req.files;

  let imgArray = files.map((file) => { //Convertendo para 64 bits
    
    let img = fs.readFileSync(file.path);

    return (encode_image = img.toString("base64"));
  },
  );

  result = imgArray.map((src, index) => { //Está pegando cada item e colocando no mongo Schema
    let imagesSchema = {
      contentType: files[index].mimetype,
      imageBase64: src,
      dataupload: Date.now(),
      filename: files[index].originalname,
      uploader: "nameofpeople",
      loi: true,
    };


    let newImage = new imageModel(imagesSchema);  //Após o Schema ser aplicado está salvando
    return newImage.save()
    


    
    
    /*.then(() => {
      msg: "Imagem enviada";
    }).catch(error => { //Tratando erro
      if(error){
        if(error.name === 'MongoError' && error.code === 11000){
          return Promise.reject({error: "Arquivo duplicado"})
        }
        return Promise.reject({error: error.message || "não conseguimos fazer upload algo aconteceu, sentimos muito"})
      }
    }); */
  });

  res.json(imgArray) //como este item está na verdade no route isto aqui é o (res,req){res.send("issoaqui")}


}
