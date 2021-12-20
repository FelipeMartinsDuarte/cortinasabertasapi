const mongoose = require("mongoose");

const teamoptionsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    icon:{
        type:String,
        required:true
    }
})

const teamoptions = mongoose.model('teamoptions', teamoptionsSchema);

module.exports = teamoptions;