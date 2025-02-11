const mongoose = require('mongoose');
let schema = mongoose.Schema;
const enquirySchema = new schema({
    name:{ 
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true
    },
    msg:{
        type:String,
        required:true
    }
})

const enquiryModel = mongoose.model('enquiry',enquirySchema);

module.exports = enquiryModel;