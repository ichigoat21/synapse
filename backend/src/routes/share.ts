import { Router } from "express";
import linkModel from "../schema/link";
import contentModel from "../schema/content";
import { userModel } from "../schema/user";

const shareRouter = Router()

shareRouter.get("/:sharelink", async (req,res)=> {
  try {
  const hash = req.params.sharelink
  console.log(hash)
  const link = await linkModel.findOne({
    hash
  })
  console.log("link:", link)
  const content = await contentModel.find({
    userId : link?.userId
  })
  const user = await userModel.findOne({
    _id : link?.userId
  })
  res.status(200).json({
    username : user?.username,
    content : content
  }) } catch (err) {
    console.error("FIND ERROR:", err);
    res.status(500).json({
      message: "Server Error",
    });
  }
})

export default shareRouter