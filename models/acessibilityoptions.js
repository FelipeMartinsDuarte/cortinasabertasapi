const mongoose = require("mongoose");

const acessibilityoptionsSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    icon:{
        type:String,
        require:true
    }
});

const acessibility = mongoose.model('acessibilityoptions', acessibilityoptionsSchema);

module.exports = acessibility;
