const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    restaurantId : mongoose.Types.ObjectId,
    name : String,
    price : Number,
    discount : Number,
    netprice : Number,
    description : String,
    Rating : Number
});

const menuModel = mongoose.model('menuItems',menuSchema);
module.exports = menuModel;