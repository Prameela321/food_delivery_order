const express =  require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const  port = process.env.PORT || 5100;

app.listen(port,()=>{
    console.log(`server started on port ${port}`);
})

app.use(express.json());
app.use(cors());

module.exports = app;