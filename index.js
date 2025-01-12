const app = require('./server');
const db =  require('./db_connect');
const userRoutes = require('./routes/userRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const menuRoutes = require('./routes/menuRoutes');
const orderRoutes = require('./routes/orderRoutes');

userRoutes(app);
restaurantRoutes(app);
menuRoutes(app);
orderRoutes(app);
