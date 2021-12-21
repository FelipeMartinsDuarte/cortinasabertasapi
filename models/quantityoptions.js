const mongoose = require("mongoose");

const quantitySchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    icon:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: './models/images',
        required:true
    }
})

const qunatityoptions = mongoose.model('quantityoptions', quantitySchema);

module.exports = qunatityoptions;