const mongoose = require("mongoose");

const clienteuserSchema = new mongoose.Schema({
    name:{
        type:String
    },

    credential:{
        email: {
            type: String,
        },
        password: {
            require:true
        }
    },

    documents:{
        logo: {
            type: String,
        },
        cnpj: {
            type: Number,
        }
    },

    own:{
        type: String
    }

})

const clienteuser = mongoose.model('clientuser', clienteuserSchema);

module.exports = clienteuser;
