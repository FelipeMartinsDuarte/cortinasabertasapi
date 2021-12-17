const mongoose = require("mongoose");

const nursingSchema = new mongoose.Schema({

    name:{
        type: String,
        require: true
    },
    services:{
        team:{
            type: Array,
            require: true
        },
        profile:{
            type: Array,
            require: true
        },
        place: {
            quantity:{
                type: Array,
                require: true
            },
            accessibility:{
                type: Array,
                require: true
            },
            spot:{
                type: Array,
                require: true   
            },
            description:{
                type: Array,
                require: true   
            }
        },
    },

    owner:{
        type: String
    },

    tags:{
        state:{},
        municipe:{},
        city:{},
        district:{},
        region:{},
    }
});

const nursing = mongoose.model('nursing', nursingSchema);

module.exports = nursing;