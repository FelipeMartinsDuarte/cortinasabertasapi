const route = require("express").Router();
const mongoose = require("mongoose");
const teamoptions = require("../../../models/teamoptions");
const bodyParser = require("body-parser");
route.use(bodyParser.json()); // to support JSON bodies
route.use(bodyParser.urlencoded({ extended: true }));


exports.addprofile = (req, res) => {
  //Handle values
  var{Confirm1,Confirm2,Confirm3,Confirm4,Confirm5,Confirm6,Confirm7} = req.body;
  //Bending values
  var ai = [Confirm1,Confirm2,Confirm3,Confirm4,Confirm5,Confirm6,Confirm7];
  var ji = ["a","b","c","d","e","f","g"]
  var data = new Array();

  //New values converted to boolean
  var convert = [];
  
  //String to boolean
  function converting (item){
    if(item === 'true'){
        return true;
    } else if (item === 'false'){
        return false;
    } else {
        return res.status(400).json({ Error: "Algum item é invalido" }); 
        //Invalid value
    }
  }
   
  //converting and appending
  ai.forEach(item =>{
      var value = converting(item);
      convert.push(value);
  })

  //Joing values to ji on the new array as object {name:, value:}
  for(let i= 0; i<7; i++){
      data.push({name: ji[i], value: convert[i]})
  }

  return res.status(200).json({ msg: "Item enviado com sucesso" });
}