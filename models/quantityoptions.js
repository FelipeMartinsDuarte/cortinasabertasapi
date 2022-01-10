const mongoose = require("mongoose");

const quantitySchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    slug:{
        type:String,
        required:true,
        unique:true
    },
    icon:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'images',
        required:true
    }
})

const qunatityoptions = mongoose.model('quantityoptions', quantitySchema);
const images = require('./images');

module.exports = qunatityoptions;