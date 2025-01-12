const orderController = require('../controllers/orderController');

const orderRoutes = (app)=>{
    app.post('/createOrder',orderController.createOrder);
    app.get('/getOrderByEmail',orderController.getOrdersByEmail);
    app.get('/listOrders',orderController.listOrders);
    app.put('/cancelOrderByEmailAndOrderId',orderController.cancelOrderByEmailAndOrderId);
    app.put('/updateOrderByEmailAndOrderId',orderController.updateOrderByEmailAndOrderId)
}

module.exports = orderRoutes;