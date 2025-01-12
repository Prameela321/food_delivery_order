const menuController = require('../controllers/menuController');

const menuRoutes = (app)=>{
    app.post('/createMenu',menuController.createMenu);
    app.get('/listMenu',menuController.listMenu);
}

module.exports = menuRoutes;