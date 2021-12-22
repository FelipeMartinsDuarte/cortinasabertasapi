const express = require("express");
const mongoose = require("mongoose");
const app = express();
const handlebars = require("express-handlebars");
const QuantityModel = require("./models/quantityoptions");
const SpotModel = require("./models/spotoptions");
const session = require("express-session")
const AccessibilityModel = require("./models/accessibilityoptions");
const NursingModel = require("./models/nursing");
const teamoptions = require("./models/teamoptions");
const passport = require('passport');


//Configurations - Importing database and models
mongoose.connect("mongodb://localhost:27017/cortinasabertas");

let nursing = new NursingModel({
  name: "Emadcare",
  services: {
    team: ["Psicologos", "Médicos", "Enfermeiros"],
    profile: ["Aceitam curto periodo", "Aceitam longo periodo"],
    place: {
      quantity: [{ Quartos: 5 }, { Banheiros: 10 }],
      accessibility: ["Possui rampas"],
      spot: ["Quintal", "Jardim", "Area de Visitas"],
      description: "fafafafafafa",
    },
  },
  owner: "61bf1bc2bd08f89ea5936753",
});

let accessibility = new AccessibilityModel({
  name:"Possui rampas",
  icon:"61c1d5897997ad94cc6b40de"
})

//Passport config
require('./config/passport')(passport);

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Handlebars
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Calling Routes
app.use("/", require("./routers/router.js")); //Trazendo multer, controller e router

//Renderizando pagina
app.get("/", (req, res) => {
  res.render("app");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req,res) => {
  res.render("login");
})

//Routes

/* app.get('/:id',(req,res)=>{
  res.send("Tá funcionando")
}); */

/*app.post('/:id',(req,res)=>{
res.send("Tá funcionando")
});

/* app.put('/:id',(req,res)=>{
res.send("Tá funcionando")
});

app.delete('/:id',(req,res)=>{
res.send("Tá funcionando")
});*/

app.listen(9090, () => {
  console.log("Conectado");
});
