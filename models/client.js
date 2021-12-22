const mongoose = require("mongoose");
const nursing = require("./nursing");

const clienteuserSchema = new mongoose.Schema({
    name:{
        type:String
    },

    isAdmin:{
        type:Number,
        default:0
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
    },

    documents:{
        logo: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: './models/images',
            default:"61c33c8495bb6564ecb0ad61"
        },
        cnpj: {
            type: Number
        }
    },

    own:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: './models/nursing'
    }

})

const clienteuser = mongoose.model('clientuser', clienteuserSchema);

module.exports = clienteuser;


