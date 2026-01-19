import mongoose, { Schema } from "mongoose";
import { Types } from "mongoose";


const contentSchema = new Schema({
    link: { type: String, required: true },
    type:  String,
    title: { type: String, required: true },
    tags: [{ type: Types.ObjectId, ref: 'Tag' }],
    userId: { type: Types.ObjectId, ref: 'Users', required: true },

    
  });
const contentModel = mongoose.model("Content", contentSchema)
export default contentModel