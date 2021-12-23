//Initialising application
const express = require("express");
const app = express();

//Importing modules
const handlebars = require("express-handlebars")
const session = require('express-session');
const flash = require('connect-flash');
const mongoose = require("mongoose");
const passport = require('passport');

//Configuring Modules~
// Passport 
require('./routers/middlewares/passport')(passport); 
// Mongoose
mongoose.connect("mongodb://localhost:27017/cortinasabertas"); 
// Express
app.use( 
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);
//Passport
app.use(passport.initialize());
app.use(passport.session());
//Handlebars
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" })); 
app.set("view engine", "handlebars");


//Importing Models
const QuantityModel = require("./models/quantityoptions");
const SpotModel = require("./models/spotoptions");
const AccessibilityModel = require("./models/accessibilityoptions");
const NursingModel = require("./models/nursing");
const teamoptions = require("./models/teamoptions");


//Global
//Routes 
app.use("/", require("./routers/router.js")); //Router: Singleupload, Multiupload
app.use("/", require("./routers/services.js")); //Services: Spot, Accessibility, Quantity
app.use("/", require("./routers/registerlogin.js")); //Register-Login: User: Login, Register
app.use("/", require("./routers/details.js")); //Details: Profile 
app.use("/", require("./routers/items.js")); //Items: Options: Spot,Accesibility, Quantity, Team, Profile 



//Rendering
app.get("/", (req, res) => {
  res.render("app");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req,res) => {
  res.render("login");
})

//Creating Models
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

//Open Server
var port = 9090;
app.listen(port, () => {
  console.log(`Conectado na porta ${port}`);
});
