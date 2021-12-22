const mongoose = require("mongoose");
const nursing = require("./nursing");

const userSchema = new mongoose.Schema({
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
        //,third_party_auth: [ThirdPartyProviderSchema]
    },

    logo: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: './models/images',
        default:"61c33c8495bb6564ecb0ad61"
    }

}, {strict: false}
);

const user = mongoose.model('user', userSchema);

module.exports = user;


