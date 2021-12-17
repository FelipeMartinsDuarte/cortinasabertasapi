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
                type: String,
                require: true   
            },

            images:{
                type: Array,
            }
        },
    },

    owner:{
        type: String
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