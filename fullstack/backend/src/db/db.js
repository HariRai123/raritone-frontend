const mongoose=require("mongoose");

async function connectDB(params) {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDb database connected successfully`);
    } 
    catch (error) {
        console.log(`Error from database : ${error}`)
    }
}

module.exports=connectDB