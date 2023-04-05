import mongoose from "mongoose";
import * as dotenv from 'dotenv';
dotenv.config();
const DATABASE = process.env.DATABASE;


const dbConnection = async () =>{
    const DB_URL = `${DATABASE}`;
    console.log(DB_URL)
    try{
      await mongoose.connect(DB_URL,{useNewUrlParser: true});
     
      console.log('Database Connected Successfully');
    }catch(error){
        console.error('error while connecting with the database',error.message);

    }

}
export default dbConnection;

