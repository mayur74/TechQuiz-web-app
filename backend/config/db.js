import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://mayurdellpc74_db_user:QuizApp123@cluster0.mkywwv9.mongodb.net/QuizApp') .then(() =>{console.log('DB CONNECTED');
    })
}