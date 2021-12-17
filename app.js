const express = require("express");
const mongoose = require("mongoose");
const app = express();


//Configurações
mongoose.connect('mongodb://localhost:27017/cortinasabertas').then(console.log("Database Conectada"));

let nursing = require('./models/nursing')


//Routes
app.get('/',(req,res)=>{
    res.send("Tá funcionando")
})



app.listen(800,()=>{
  console.log("Conectado")
})