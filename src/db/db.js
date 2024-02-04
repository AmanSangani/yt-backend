const  mongoose = require('mongoose')
const DB_NAME = require('../constants')

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log('MongoDB connected : ' + connection.connection.host);
        
    } catch (err) {
        console.log("MongoDB connection error : ",err);

    }
}

module.exports = connectDB