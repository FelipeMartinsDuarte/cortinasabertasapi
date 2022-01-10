const mongoose = require("mongoose");

const spotoptionsSchema = new mongoose.Schema({
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

const spotoptions = mongoose.model('spotoptions', spotoptionsSchema);
const images = require('./images');

module.exports = spotoptions;