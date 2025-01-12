# food_delivery_order
The food delivery  order managment system is a node js based  system developed using express.js framework, with mongoDB as the chosen database. This application manages the information  related to restaurants and food orders.It exposes specific endpoints to  handle  crud(CREATE,READ,UPDATE,DELETE) operations  for restaurants and orders

Endpoints:

    Users :
        1.createUser :
              end point : POST/createUser
              description : to create users  which allows the registered users to place orders
    
    Restaurants:
         1.createRestaurant 
             end point :POST/createRestaurant
             description : to create restaurant  to place the order
        2.listRestaurant :
              end point :GET/listRestaurant
              description : to list the restaurants
        3.filterRestaurant :
              end point :GET/filterRestaurant/:id
              description : to filter restaurant by id
        4.updateRestaurant :
              end point : PUT/updateRestaurant/:id
              description : to update the restaurants by id 
        5.deleteRestaurant :
              end point : DELETE/deleteRestaurant
              description :to delelte the restaurant by id
    Menu Items :
           1.createMenu:
              end point :POST/createMenu
              description : to create menus for each restaurant to find the product and place the orders

    Orders:
           1.createOrder :
              end point :POST/createOrder
              description : to create orders
           2.getOrderByEmail :
              end point :POST/getOrderByEmail
              description : to filter the order using email Id
           3.listOrders :
              end point : GET/listOrders
              description : to get the list of active orders
           4.cancelOrderByEmailAndOrderId:
              end point :PUT/cancelOrderByEmailAndOrderId
              description : to cancel the order by email and orderid
           5.updateOrderByEmailAndOrderId :
              end point :PUT/createUser
              description : to update the existing address by email and orderid

Data Models:
    Users : schema of the User

       Fields:
             userName : {
                type : String,
                required : true
            },
            email : {
                type : String,
                required : true
            },
            address : String,
            password : String

        Example :
            {
                "_id":{"$oid":"67825169b1297e8bc81b5e23"},
                "userName":"prameela Thandu",
                "email":"prameela.thandu321@gmail.com",
                "address":"abc","password":"$2b$10$y7ZmvDNcRWVKzACQmmKXme5dzRmr15PMXFrSq1K47wcVn/.DbjS6y",
                "__v":{"$numberInt":"0"}
            }
    
    Restaurants : schema of the restaurant
         Fields : 
                    displayName : String,
                    imgId : String,
                    avgRating : String,
                    deliveryTime : String,
                    cuisines : String,
                    location : String,
                    offerLine : String
        Example:
                 {
                     "_id":{"$oid":"673efa2b4fedf56669c0da74"},
                     "displayName":"Chinese Work",
                     "imgId":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/13/13032ff6-172d-48f4-bb5e-9249252b7abe_ed6b6fb8-4a45-4616-a9fe-a68ff672e354.jpg",
                     "avgRating":"4.3",
                     "deliveryTime":"13 mins",
                     "cuisines":"asian",
                     "location":"vijayawada",
                     "offerLine":"299",
                     "__v":{"$numberInt":"0"}
                }
                    
    MenuItems : Schema of the menuItems

           Fields:
                restaurantId : mongoose.Types.ObjectId,
                name : String,
                price : Number,
                discount : Number,
                netprice : Number,
                description : String,
                Rating : Number

           Example :
               {
               "_id":{"$oid":"6782b97bfb975f8cc532a4ee"},
               "restaurantId":{"$oid":"673efa2b4fedf56669c0da74"},
               "name":"noodles",
               "price":{"$numberInt":"120"},
               "discount":{"$numberInt":"20"},
               "netprice":{"$numberInt":"100"},
               "description":"chines noodle with red sauce ",
               "__v":{"$numberInt":"0"}
               }

    orders:  Schema of the Orders
           Fields : 
                     userId : mongoose.Types.ObjectId,
                    shipName : String,
                    deliveryAddress : String,
                    menuList : Array,
                    status : {
                        type : String,
                        enum : ['ORDERED','PROCESSED','DELIVERED','CANCELLED'],
                        default : 'ORDERED'
                    }
            Example :
               {
               "_id":{"$oid":"67836eba480a0e622515d68f"},
               "userId":{"$oid":"67825169b1297e8bc81b5e23"},
               "shipName":"testName",
               "deliveryAddress":"abctestaddress",
               "menuList":["6782b97bfb975f8cc532a4ee","6782b99dfb975f8cc532a4f0"],
               "status":"ORDERED",
               "__v":{"$numberInt":"0"}
               }

Usage:
    1.Install Dependencies
    npm install
    


    
 
