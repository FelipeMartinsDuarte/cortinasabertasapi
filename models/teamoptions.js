const mongoose = require("mongoose");

const teamoptionsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    icon:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: './models/images',
        required:true
    }
})

const teamoptions = mongoose.model('teamoptions', teamoptionsSchema);

module.exports = teamoptions;