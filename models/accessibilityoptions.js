const mongoose = require("mongoose");

const accessibilityoptionsSchema = new mongoose.Schema({
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
        ref: './images',
        required:true
    }
});

const accessibility = mongoose.model('accessibilityoptions', accessibilityoptionsSchema);

module.exports = accessibility;
