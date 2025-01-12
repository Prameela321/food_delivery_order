const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId : mongoose.Types.ObjectId,
    shipName : String,
    deliveryAddress : String,
    menuList : Array,
    status : {
        type : String,
        enum : ['ORDERED','PROCESSED','DELIVERED','CANCELLED'],
        default : 'ORDERED'
    }
});

const orderModel = mongoose.model('userorder',orderSchema);

module.exports = orderModel;