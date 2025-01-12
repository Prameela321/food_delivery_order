const mongoose = require('mongoose');
require('dotenv').config();

const dburl = process.env.DB_URL;

mongoose.connect(`${dburl}`);
const db = mongoose.connection;

db.on('open',()=>{
    console.log("connection successful");
})

db.on('error',(err)=>{
    console.log(`${err}`);
})

module.exports = db;