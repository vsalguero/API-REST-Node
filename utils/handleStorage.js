const multer = require("multer");

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        const pathStorage = `${__dirname}/../storage`;
        cb(null, pathStorage)
    },
    filename: function(req, file, cb){
        //TODO: imagen.png 
        const ext = file.originalname.split(".").pop();
        const filename = `file-${Date.now()}.${ext}`;
        cb(null, filename);
    }
});

//creating middleware
const uploadMiddleware = multer({storage});

module.exports = uploadMiddleware;