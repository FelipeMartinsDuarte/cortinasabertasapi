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
        ref: './images',
    }
})

const spotoptions = mongoose.model('spotoptions', spotoptionsSchema);

module.exports = spotoptions;