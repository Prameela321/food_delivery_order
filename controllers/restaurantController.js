const restaurantModel = require('../models/restaurantModel');

function createRestaurant(req,res){
    
    const { displayName,imgId,avgRating,deliveryTime,cuisines,location,offerLine } = req.body;
    const restaurantRow = new restaurantModel({
        displayName,
        imgId,
        avgRating,
        deliveryTime,
        cuisines,
        location,
        offerLine
    });
    
    restaurantRow.save().then((data)=>{
        if(!data)
        res.status(400).json({"message" : "Something Went Wrong"});
        res.status(200).json(data)
    }).catch((err)=>{
        res.status(500).json({"message" : err.message})
    })
    
}

function listRestaurant(req,res){
    console.log("listRestaurant",req.user);
    restaurantModel.find().then(data=>{
        if(!data)
            res.status(400).json({"message" : "No Data Found"});
        console.log("testing response",data);
        return  res.status(200).json({data})
    }).catch(err =>{
        res.status(500).json({"message" : err});
    })
}


const filterRestaurant =  (req,res)=>{
    const _id = req.params.id;
   
    restaurantModel.findById(_id).then(data =>{
        if(!data)
            res.status(404).json({"message" : "Data not found"});
        res.status(200).json(data);
    }).catch(err=>{
        res.status(500).json({"message" : "Something Went Wrong"});
    })
}

const updateRestaurantById  = (req,res)=>{
    const _id = req.params.id;
    let {avgRating,offerLine} = req.body;
    restaurantModel.findByIdAndUpdate(_id,{avgRating : avgRating ,offerLine : offerLine },{new  : true, runValidators : true}).then(data=>{
        if(!data){
            res.status(404).json({"message" : "Data not found"})
        }
      res.status(200).json(data)
    }).catch(err =>{
        res.status(500).json({message : err.message});
    })
}

const deleteRestaurantById = (req,res)=>{
    const id = req.params.id;
    restaurantModel.findByIdAndDelete(id).then(data=>{
        if(!data)
            res.status(404).json({"message" : "Data not found"})
        res.status(200).json({data});
    }).catch(err =>{
        res.status(200).json({"message" : err.message});
    })
}
module.exports = {
    createRestaurant : createRestaurant,
    listRestaurant : listRestaurant,
    filterRestaurant : filterRestaurant,
    updateRestaurantById : updateRestaurantById,
    deleteRestaurantById : deleteRestaurantById
}

