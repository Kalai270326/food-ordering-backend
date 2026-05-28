const mongoose=require("mongoose")

async function connectdb() {
   try {
     await mongoose.connect('mongodb://localhost:27017/foodordering')
    console.log('connect to mongodb');
   } catch (error) {
    console.log(error);
   }
}
module.exports=connectdb