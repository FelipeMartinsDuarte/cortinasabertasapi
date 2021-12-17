const mongoose = require("mongoose");

const imagesSchema = new mongoose.Schema({
    dataupload:{
        type:Number,
        require:true
    },
    filename:{
        type:String,
        require:true
    },
    uploader:{
        type:String,
        require:true
    },
    loi:{ //Logo or Image, image=true, logo=false
        type:Boolean,
        require:true
    }
});

const images = mongoose.model('images', imagesSchema);

module.exports = images;