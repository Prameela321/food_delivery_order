const  mongoose = require('mongoose');
const restaurantSchema = new mongoose.Schema({
    displayName : String,
    imgId : String,
    avgRating : String,
    deliveryTime : String,
    cuisines : String,
    location : String,
    offerLine : String
});

const restaurantTable = mongoose.model('restaurants',restaurantSchema);
module.exports = restaurantTable;