const mongoose = require("mongoose");

const StorageScheme = new mongoose.Schema(
    {
        url: {
            type:String
        },
        filename: {
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);


const storageModel = mongoose.model( 'storages', StorageScheme);

module.exports =  {storageModel}