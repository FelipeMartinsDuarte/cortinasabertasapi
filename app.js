const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const handlebars = require('express-handlebars');


//Configurations - Importing database and models
mongoose.connect('mongodb://localhost:27017/cortinasabertas')
//let nursing = require('./models/nursing')
//Handlebars
app.engine('handlebars', handlebars.engine({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
//Express
app.use(express.json())

//Calling Routes 
app.use('/', require('./routers/router.js'));



app.get('/', (req,res)=>{
  res.render('app')
})
//Routes
/*
Nursing

app.get('/:id',(req,res)=>{
    res.send("Tá funcionando")
});

app.post('/:id',(req,res)=>{
  res.send("Tá funcionando")
});

app.put('/:id',(req,res)=>{
  res.send("Tá funcionando")
});

app.delete('/:id',(req,res)=>{
  res.send("Tá funcionando")
});
*/

app.listen(9090,()=>{
  console.log("Conectado")
})