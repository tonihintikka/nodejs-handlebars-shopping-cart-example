const mongoose = require('mongoose')


const connectDB = async () =>{
try{
//Connect to db
const conn = await mongoose.connect( 'mongodb://localhost:27017/',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB