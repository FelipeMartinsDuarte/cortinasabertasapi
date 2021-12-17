const mongoose = require("mongoose");

const spotoptionsSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    icon:{
        type:String,
        require:true
    }
})

const spotoptions = mongoose.model('spotoptions', spotoptionsSchema);

module.exports = spotoptions;