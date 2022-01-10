const mongoose = require("mongoose");

const teamoptionsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
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

const teamoptions = mongoose.model('teamoptions', teamoptionsSchema);
const images = require('./images');

module.exports = teamoptions;