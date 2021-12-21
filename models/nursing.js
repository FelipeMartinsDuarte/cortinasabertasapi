const mongoose = require("mongoose");
const clienteuser = require("./clientuser");

const nursingSchema = new mongoose.Schema({

    name:{
        type: String,
        require: true
    },
    services:{
        team:{
            type: Array,
            required: true
        },
        profile:{
            type: Array,
            required: true
        },
        place: {
            quantity:{
                type: Array,
                required: true
            },
            accessibility:{
                type: Array,
                required: true
            },
            spot:{
                type: Array,
                required: true   
            },
            description:{
                type: String,
                required: true   
            },

            images:{
                type: Array,
            }
        },
    },

    contato:{
        website:String,
        tel1:String,
        tel2:String, 
        openhours: [String]
    },

    owner:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: './models/clientuser'
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
    }
});

const nursing = mongoose.model('nursing', nursingSchema);

module.exports = nursing;
