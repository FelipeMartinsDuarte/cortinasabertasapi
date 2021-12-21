const mongoose = require("mongoose");
const nursing = require("./nursing");

const clienteuserSchema = new mongoose.Schema({
    name:{
        type:String
    },

    credential:{
        email: {
            type: String,
        },
        password: {
            type: String,
            required:true
        }
    },

    documents:{
        logo: {
            type: String,
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


