const multer = require('multer');

// set storage
var storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"uploads/")
    },
    filename: function(req,file,cb){

        var extension = file.originalname.substr(file.originalname.lastIndexOf('.'))

        cb(null, file.fieldname + '-' + Date.now() + extension) 
    }
})

var store = multer({storage : storage});

module.exports = store