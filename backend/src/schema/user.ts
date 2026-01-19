import { Schema } from "mongoose"
import mongoose from "mongoose"

const userSchema = new Schema({
    username : {type : String, unique : true},
    password : String
})


export const userModel = mongoose.model('Users', userSchema)