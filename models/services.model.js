const mongoose = require('mongoose');

//Building schema for services
const servicesSchema = new mongoose.Schema({
    type : {
        type : String,
        required : true
    },
    desc : {
        type : String,
        required : true
    },
    date : {
        type : Date, 
        default : Date.now
    },
    hour_start : {
        type :  Date, 
        required : true
    },
    hour_finish : {
        type :  Date, 
        required : true
    },
    tecnico : {
        type :  mongoose.Schema.Types.ObjectId,
        require : true
    },
    emg : {
        type :  mongoose.Schema.Types.ObjectId,
        require : true
    },
    signature : { 
        data: Buffer, 
        contentType: String 
    },
    meta : {
        registred_by : {
            type :  mongoose.Schema.Types.ObjectId,
            require : true
        },
        registred_date : {
            type : Date,
            required : true,
            default : Date.now
        }
    }
});

//Setting collection name and model
const servicesModel = mongoose.model('Services', servicesSchema, 'services');

module.exports = servicesModel;