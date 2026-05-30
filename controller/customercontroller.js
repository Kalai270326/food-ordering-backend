const customer=require('../model/usermodel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')




const registerCustomer =async (req,res)=>{
    const{name,email,password,address,phone,role}=req.body;

try {
    const existcustomer=await customer.findOne({email})
    if(existcustomer){
        return res.json({message:"user alreday exists"})
    }
    const hashedpassword=await bcrypt.hash(password,10)
    const newcustomer=await new customer({name,email,password:hashedpassword,address,phone,role}).save()
    return res.json({message:"user registerd successfully",newcustomer})

} catch (error) {
    return res.status(500).json({message:"error registering user",error:error.message})
}
    

}
 const loginCustomer = async (req,res)=>{
    const{email,password}=req.body

    try {
        const existingcustomer=await customer.findOne({email})
        if(!existingcustomer){
            res.status(404).json({message:"user is not found"})
        }
        const ismatch=await bcrypt.compare(password,existingcustomer.password)
        if(!ismatch){
            res.status(400).json({message:"invalid password"})
        }
        const token=jwt.sign({name:existingcustomer.name,email:existingcustomer.email,id:existingcustomer._id,address:existingcustomer.address,phone:existingcustomer.phone,role:existingcustomer.role},"KALAI",{expiresIn:'2d'})
         res.json({message:"login successfully" ,token:token})

        
    } catch (error) {
        res.status(403).json({message:"error in login",error:error.message})
        
    }
 }


module.exports={registerCustomer,loginCustomer}