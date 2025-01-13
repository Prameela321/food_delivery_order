const orderController = require('../controllers/orderController');

const orderRoutes = (app)=>{
    app.post('/createOrder',orderController.createOrder);
    app.get('/getOrderByEmail',orderController.getOrdersByEmail);
    app.get('/listOrders',orderController.listOrders);
    app.patch('/cancelOrderByEmailAndOrderId',orderController.cancelOrderByEmailAndOrderId);
    app.patch('/updateOrderByEmailAndOrderId',orderController.updateOrderByEmailAndOrderId)
}

module.exports = orderRoutes;