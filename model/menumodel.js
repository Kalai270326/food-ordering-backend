const mongoose=require('mongoose')
const menuschema=new mongoose.Schema({
    menuname:{
        type:String,
        required:true,
    },
    restaurantname:{
        type:String,
        required:true,
    },
    email:{
            type:String,
            required:true,
        },
     price:{
        type:String,
        required:true,
     } ,
     image:{
        type:String,
        required:true
     }

    
    
})
const menu=mongoose.model('menu',menuschema)
module.exports=menu