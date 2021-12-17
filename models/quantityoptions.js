const mongoose = require("mongoose");

const quantityoptionsSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    icon:{
        type:String,
        require:true
    }
})

const qunatityoptions = mongoose.model('quantityoptions.', quantityoptionsSchema);

module.exports = qunatityoptions;