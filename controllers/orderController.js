const orderModel = require('../models/ordersModel');
const userModel = require('../models/userModel');

const createOrder = async (req,res)=>{
    const  {shipName,email,deliveryAddress,menuList} = req.body;

    const userRecord = await userModel.findOne({email});
   
    if(!userRecord){
        return res.status(400).json({"error" : "User Not Found Please Register"});
    }

    const orderRow = new orderModel({
        userId : userRecord._id,
        shipName,
        deliveryAddress,
        menuList
    });
    
    try{
        const orderRecord = await orderRow.save();
        if(!orderRecord)
           return res.status(400).json({"eror" : "Something Went Wrong"})
        res.status(200).json(orderRecord);
    }catch(err){
        res.status(500).json({"error" : err.message});
    }
}

const getOrdersByEmail  = async (req,res)=>{
    const {email} = req.body;
    try{
        const userRecord = await userModel.findOne({email});
        if(!userRecord)
            return res.status(404).json({"error" : "User Not Found to Retrieve Order History"});

        const data = await orderModel.find({"userId" : userRecord._id}).sort({"_id":-1});
        if(!data){
            return res.status(400).find({"error" : "No Data Found"});
        }
        res.status(200).json(data);
    }catch(err){
        return res.status(500).json({"error" : err.message});
    }

}
const listOrders  = async (req,res)=>{
    try{ 
        const data = await orderModel.find({ "status" : {$ne : "CANCELLED"} }).sort({"_id":-1});
        if(!data){
            return res.status(400).find({"error" : "No Data Found"});
        }
        res.status(200).json(data);
    }catch(err){
        return res.status(500).json({"error" : err.message});
    }

}

const cancelOrderByEmailAndOrderId = async (req,res) =>{
    const {email,orderId} = req.body;
    try{
        const userRecord = await userModel.find({email})
        const orderRecord = await orderModel.find({
            $and :[
                    {"userId" : { $eq : userRecord._id} },
                    {"_id" : {$eq : orderId}}
                 ]
         });
        if(!orderRecord){
            return res.status(404).json({"error" : `OrderId or Email  is incorrect`})
        }
        console.log(orderRecord,"order");
        const updated =  await userModel.findByIdAndUpdate(orderId,{"status" : 'CANCELLED'},{new:true,runValidators: true})
        res.status(200).json(updated);
    }catch(err){
        res.status(500).json({"error" : err.message});
    }
}

const updateOrderByEmailAndOrderId = async (req,res) =>{
    const {email,orderId,newAddress} = req.body;
    // console.log("test");
    try{
        const userRecord = await userModel.find({email})
        // const filter = {
        //    $and : [ 
        //     {"userId" :  userRecord._id } ,
        //     {"_id" :  orderId}
        //    ]
        // };
       
        // const updatefield = {"deliveryAddress" : newAddress};
        const updated = await orderModel.findOneAndUpdate(
            { userId: userRecord._id, _id : orderId },
            { deliveryAddress: newAddress},
            { returnOriginal : false }
        );
       res.status(200).json(updated);
    }catch(err){
        res.status(500).json({"error" : err.message});
    }
}


module.exports = {
    createOrder,
    getOrdersByEmail,
    listOrders,
    cancelOrderByEmailAndOrderId,
    updateOrderByEmailAndOrderId
}