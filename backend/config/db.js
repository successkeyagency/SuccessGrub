import mongoose from "mongoose";

 export const connectDB = async () => {
    const uri = process.env.MONGO_URI;
    await mongoose.connect(uri).then(()=>console.log("DB Connected"))
}