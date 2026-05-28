const express=require('express')
const router=require('express').Router()
const {registerCustomer,loginCustomer}=require('../controller/customercontroller')



router.post('/registercustomer',registerCustomer)
router.post('/logincustomer',loginCustomer)





module.exports=router;