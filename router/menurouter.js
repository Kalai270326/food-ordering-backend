const router=require('express').Router()
const{createmenu,getallmenu,getmenubyemail}=require('../controller/menucontroller')

router.post('/createmenu',createmenu)
router.get('/all',getallmenu)
router.get('/getspecific',getmenubyemail)

module.exports=router