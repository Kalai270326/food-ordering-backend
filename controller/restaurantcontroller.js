const restaurant=require('../model/restaurantmodel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')




const registerRestaurant =async (req,res)=>{
    const{restaurantname,email,password,address,phone}=req.body;

try {
    const existrestaurant=await restaurant.findOne({email})
    if(existrestaurant){
        return res.json({message:"restaurant alreday exists"})
    }
    const hashedpassword=await bcrypt.hash(password,10)
    const newrestaurant=await new restaurant({restaurantname,email,password:hashedpassword,address,phone}).save()
    return res.json({message:"restaurant registerd successfully",newrestaurant})

} catch (error) {
    return res.status(500).json({message:"error registering restaurant",error:error.message})
}
    

}
 const loginRestaurant = async (req,res)=>{
    const{email,password}=req.body
    try {
        const existingresta=await restaurant.findOne({email})
        if(!existingresta){
            res.status(404).json({message:"restaurant is not found"})
        }
        const ismatch=await bcrypt.compare(password,existingresta.password)
        if(!ismatch){
            res.status(400).json({message:"invalid password"})
        }
            existingresta.status = "open";
            await existingresta.save();

        const token=jwt.sign({restaurantname:existingresta.restaurantname,email:existingresta.email,password:existingresta.password,id:existingresta._id,address:existingresta.address,phone:existingresta.phone,role:existingresta.role,restaturantopen:existingresta.restaurantopen},process.env.jwt_secret,{expiresIn:'1d'})
         res.json({message:"login successfully" ,token})

        
    } catch (error) {
        res.status(403).json({message:"error in login",error:error.message})
        
    }
 }

 module.exports={registerRestaurant,loginRestaurant}