const menuModel = require('../models/menuModel');

const createMenu = async (req,res)=>{
    const {restaurantId,name,price,discount,netprice,description,rating} = req.body;
    const menuRow = new menuModel({
        restaurantId,
        name,
        price,
        discount,
        netprice,
        description,
        rating
    });
    
    try{
        const data = await menuRow.save();
        if(!data)
            res.status(400).json({"error" : "Something went Wrong"});
        res.status(200).json(data);
    }catch(err){
        res.status(500).json({"error" : err.message})
    }
}

const listMenu = async (req,res)=>{
    try{
        const data = await menuModel.find();
        // console.log(data,"data");
        if(!data)
            res.status(400).json({"message" : "No Data Found"});
        
        res.status(200).json(data)
    }
    catch(err){
        // res.status(500).json({"message" : err.message});
    }
}

module.exports = {
    createMenu,
    listMenu
}