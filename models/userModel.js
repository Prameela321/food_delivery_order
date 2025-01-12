const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    address : String,
    password : String
})

const userModel = mongoose.model('customers',userSchema);

module.exports = userModel;