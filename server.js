const express=require('express')
const app=express()
const connectdb=require('./config/dbconfig')
const userRouter=require('./router/userrouter')
const restaurantRouter=require('./router/restaurantrouter')
const menurouter=require('./router/menurouter')
 const cors=require('cors')
require('dotenv').config();
port=3000






connectdb()
app.use(cors())

app.use(express.json());
//customer register and login
app.use('/',userRouter)
//restaurant register and login
app.use('/',restaurantRouter)

//menu
app.use('/menu',menurouter)





app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}` );
})