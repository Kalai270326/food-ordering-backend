const mongoose=require("mongoose")
const restaurnatschema= new mongoose.Schema({
    restaurantname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,

    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
     address:{
        street:{type:String,required:true},
        city:{type:String,required:true},
        district:{type:String,required:true},
        pincode:{type:String,required:true}
    },
    

    restaurantopen:{
        type:String,
        default:'closed',
    },
    role:{
        type:String,
        default:'restaurant'
    }
    

})
const restaurant=mongoose.model('restaurant',restaurnatschema)
module.exports=restaurant;