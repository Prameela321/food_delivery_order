const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

const createUser = async (req,res)=>{
    const {userName , email, address,password} = req.body;
    const hash = bcrypt.hashSync(password,10);
    
    const userRow = new userModel({
        userName,
        email,
        address,
        password : hash
    });
    console.log(userRow,"test");
    try{
        const userStatus = await userModel.findOne({email});
        if(!userStatus){
            const data = await userRow.save();
            // console.log(data,"checkdata");
            res.status(200).json(data)       
        }else{
            res.status(409).json({"error" : "User already Exists"});
        }
    }catch(err){
        res.status(500).json({ "error" :  err.message})
    }
}

module.exports = {
    createUser
}