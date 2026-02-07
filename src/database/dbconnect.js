
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config({ path:'.env' })

const dbConnection = async()=>{

    try {
        

      await  mongoose.connect(process.env.MONGODB_URL,{
        dbName:"Photo-Save"
      })
     
     console.log("mongodb is connected successfully")

    } catch (error) {

        console.log("mongodb connection failed");
        console.log(error);
        
        
        
    }
}

export default dbConnection


