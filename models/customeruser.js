const mongoose = require("mongoose");
const nursing = require("./nursing");

const customeruserSchema = new mongoose.Schema({
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
            default:0
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
            ref: './images',
            default:"61c33c8495bb6564ecb0ad61"
        },
        cnpj: {
            type: Number
        }
    },

    own:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: './models/nursing'
    },

    completednursing: Boolean, //If already completed registering nursing
}, {strict: false}
);

const customeruser = mongoose.model('customeruser', customeruserSchema);

module.exports = customeruser;


