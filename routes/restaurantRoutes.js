const restaurantController = require('../controllers/restaurantController');
// const {verifyToken} = require('../middleware/verifyToken');
function restaurantRoutes(app){
    app.post('/createRestaurant',restaurantController.createRestaurant);
    app.get('/listRestaurant',restaurantController.listRestaurant);
    app.get('/filterRestaurant/:id',restaurantController.filterRestaurant);
    app.put('/updateRestaurant/:id',restaurantController.updateRestaurantById);
    app.delete('/deleteRestaurant/:id',restaurantController.deleteRestaurantById);
}
module.exports =  restaurantRoutes;