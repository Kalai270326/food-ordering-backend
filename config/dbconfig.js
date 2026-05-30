const mongoose = require('mongoose')

async function connectdb() {
   const defaultUri = 'mongodb+srv://kalaiselvan260327_db_user:7IEZnrSiAIIiUX2p@cluster4.i2blxoy.mongodb.net/?appName=Cluster4/foodordering'
   const uri = process.env.MONGO_URI || defaultUri

   if (!uri.startsWith('mongodb://') && !uri.startsWith('mongodb+srv://')) {
      console.error('Invalid MongoDB URI scheme:', uri)
      console.error('Expected URI to start with "mongodb://" or "mongodb+srv://".')
      process.exit(1)
   }

   try {
      await mongoose.connect(uri)
      console.log('Connected to MongoDB')
   } catch (error) {
      console.error('MongoDB connection error:', error)
      if (error && (error.code === 'ECONNREFUSED' || error.message?.includes('querySrv') || error.code === 'ENOTFOUND')) {
         console.error('DNS SRV lookup failed. If using `mongodb+srv://`, ensure your network/DNS allows SRV lookups.')
         console.error('Or set the `MONGO_URI` environment variable to a standard `mongodb://` connection string.')
      }
      process.exit(1)
   }
}

module.exports = connectdb