const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Customeruser = require("../../models/customeruser");

module.exports = function (passport) {

  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      //Find Customer or user 
      Customeruser
        .findOne({ "credential.email": email })
        .then((customeruser) => {
          if (!customeruser) {
            return done(null, false, {
              Error: "Este email não está registrado",
            });
          }

          // Match password
          bcrypt.compare(password, customeruser.credential.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              return done(null, customeruser);
            } else {
              return done(null, false, { Error: "A Senha está incorreta" });
            }
          });
        })
        .catch((err) => console.log(err));
    })
  );

  passport.serializeUser((customeruser, done) => {
    done(null, customeruser.id);
  });

  passport.deserializeUser((id, done) => {
    Customeruser.findById(id, (err, customeruser) => {
      done(err, user);
    });
  });
};

