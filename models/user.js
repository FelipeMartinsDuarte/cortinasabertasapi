const mongoose = require("mongoose");
const nursing = require("./nursing");

const userSchema = new mongoose.Schema({
    name:{
        type:String
    },

    isAdmin:{
        type:Number,
        default:0
    },

    logo: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: './models/images',
        default:"61c33c8495bb6564ecb0ad61"
    },

    
    credential:{
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required:true
        }
    }

})

const user = mongoose.model('user', userSchema);

module.exports = user;


