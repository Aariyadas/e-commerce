// Connection to our database

import mongoose from "mongoose";
const connectDatabase =async() =>{
    try{
        console.log("Ariya")
        const connect = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true,  

    })
    

    mongoose.connection.on('open', () => console.log('MongoDB connected!'));
}catch(error){
    console.log(`Error:${error}`)

}
}

export default connectDatabase