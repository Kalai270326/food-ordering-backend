const menu=require('../model/menumodel')
const restaurant=require('../model/restaurantmodel')

//create new menu
const createmenu =async(req,res)=>{
    const data=req.body
    try {
        const newmneu=await new menu(data).save()
        res.json({message:"menu created successfully",newmneu})
    } catch (error) {
        res.json({message:"menu not created", error:error.message})
        
    }

}
//get all menu
const getallmenu=async (req,res)=>{
    try {
        const allmenu=await menu.find();
        res.json(allmenu)
    } catch (error) {
    res.json({message:"error in fetching", error:error.message})

    }
}
//get specific menus using email
const getmenubyemail =async(req,res)=>{
    const {restaurantname}=req.query
    try {
       const getmenu=await menu.find({restaurantname}) 
      res.json(getmenu)
    } catch (error) {
        res.json({message:"fetching error",error:error.message})
    }
}
module.exports={createmenu,getallmenu,getmenubyemail}

