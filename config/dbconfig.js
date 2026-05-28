const mongoose=require("mongoose")

async function connectdb() {
   try {
     await mongoose.connect('mongodb+srv://kalaiselvan260327:<db_password>@cluster3.axjvtis.mongodb.net/?appName=Cluster3/foodordering')
    console.log('connect to mongodb');
   } catch (error) {
    console.log(error);
   }
}
module.exports=connectdb