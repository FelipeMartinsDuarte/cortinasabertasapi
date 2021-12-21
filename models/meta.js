const mongoose = require("mongoose");

const metaSchema = new mongoose.Schema({
    metrics:{
        viewcount:{
            type:Number
        },

        contactcount:{
            type:Number
        },

        savedcount:{
            type:Number
        }
    },

    opnions:{
        name:{
            type:String,
            required:true
        },
        rating: {
            type:Number,
            required:true
        },
        comment:{
            type:String,
        }
    }
});

const meta = mongoose.model('meta', metaSchema);

module.exports = meta;