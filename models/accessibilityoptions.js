const mongoose = require("mongoose");

const accessibilityoptionsSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    icon:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: './models/images',
        required:true
    }
});

const accessibility = mongoose.model('accessibilityoptions', accessibilityoptionsSchema);

module.exports = accessibility;
