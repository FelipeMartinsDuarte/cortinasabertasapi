const mongoose = require("mongoose");
const customeruser = require("./customeruser");

const nursingSchema = new mongoose.Schema({

    name:{
        type: String,
    },
    services:{
        team:{
            type: Array,
        },
        profile:{
            type: Array,
        },
        place: {
            quantity:{
                type: Array,
            },
            accessibility:{
                type: Array,
            },
            spot:{
                type: Array, 
            },
            description:{
                type: String, 
            },

            images:{
                type: Array,
            }
        },
    },

    contact:{
        website:String,
        telephone:[String],
        openhours: [String]
    },

    owner:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: './customeruser'
    },

    tags:{
        state:{
            type: String
        },
        municipe:{
            type: String
        },
        city:{
            type: String
        },
        district:{
            type: String
        },
        region:{
            type: String
        },
    },

    date:{
        type:Date,
        default: Date.now
    }
});

const nursing = mongoose.model('nursing', nursingSchema);

module.exports = nursing;




