const router=require('express').Router()
const {registerRestaurant,loginRestaurant}=require('../controller/restaurantcontroller')



router.post('/registerrestaurant',registerRestaurant)
router.post('/loginrestaurant',loginRestaurant)




module.exports=router;