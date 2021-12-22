const mongoose = require("mongoose");
const nursing = require("./nursing");

const clienteuserSchema = new mongoose.Schema({
    name:{
        type:String
    },

    date:{
        type:Date,
        default: Date.now
    },

    credential:{
        acess:{ //User 0 x Client 1 x Admin 2 
            type:Number,
            default:1
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required:true
        },
        emailverified:{
            type:Boolean,
            default:false
        }
        //, third_party_auth: [ThirdPartyProviderSchema]
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
}, {strict: false}
);

const clienteuser = mongoose.model('clientuser', clienteuserSchema);

module.exports = clienteuser;


