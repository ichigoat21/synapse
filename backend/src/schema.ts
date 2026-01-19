import mongoose, { Schema } from "mongoose";
import dotenv from "dotenv"

dotenv.config()
mongoose.connect(`mongodb+srv://shivresides:${process.env.DB_PASSWORD}@second-brain.4jq3gmh.mongodb.net/?appName=synapse`).then(()=> {
    console.log("DB Connected")
})

const userSchema = new Schema({
    username : String,
    password : String
})

const userModel = mongoose.model('Users', userSchema)

export default userModel