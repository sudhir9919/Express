import mongoose from "mongoose";
import { MONGO_URL } from "./serverConfig.js";

export default async function connectDB() {
try{
  // console.log("mongodb", MONGO_URL);
  
  await mongoose.connect(MONGO_URL);
  console.log("connected to MongoDB");
}catch(error){
    console.log("Error connecting to DB");
    console.log(error);
  }
}