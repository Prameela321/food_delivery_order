const userController = require('../controllers/userController');

const userRoutes = (app)=>{
    // console.log(app,"appt ")
    app.post('/createUser',userController.createUser)
}

module.exports = userRoutes;