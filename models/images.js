const mongoose = require("mongoose");

const imagesSchema = new mongoose.Schema({
    
    contentType:{
        type:String,
        require:true
    },
    
    imageBase64:{
        type:String,
        require:true
    },

    dataupload:{
        type:Number,
        require:true
    },
    filename:{
        type:String,
        unique: true,
        required:true
    },
    uploader:{
        type:String,
    },
    loi:{ //Logo or Image, image=true, logo=false
        type:Boolean,
        required:true
    }
});

const images = mongoose.model('images', imagesSchema);

module.exports = images;


