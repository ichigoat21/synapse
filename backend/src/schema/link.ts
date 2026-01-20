import mongoose, { Schema, Types } from "mongoose";



const linkSchema = new Schema({
    hash : {type : String, required : true},
    userId : {type : Types.ObjectId, ref : "Users", required : true, unique : true}
})

const linkModel = mongoose.model("Link", linkSchema)

export default linkModel