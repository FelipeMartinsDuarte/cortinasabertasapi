const mongoose = require("mongoose");

const teamoptionsSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    icon:{
        type:String,
        require:true
    }
})

const teamoptions = mongoose.model('teamoptions', teamoptionsSchema);

module.exports = teamoptions;