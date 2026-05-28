const mongoose=require('mongoose')
const customerschema=new mongoose.Schema({

    name:{
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
    role:{
        type:String,
        default:'customer'
    }



})
const customer=mongoose.model('customers',customerschema)
module.exports=customer;