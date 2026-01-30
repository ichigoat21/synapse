import { Router } from "express";
import contentModel from "../schema/content";
import linkModel from "../schema/link";
import random from "../utils/utils";
import { userModel } from "../schema/user";

const contentRouter = Router()

contentRouter.post("/add", async (req, res)=> {
    try {
    const link = req.body.link
    const title = req.body.title
    const type = req.body.type

    const content = await contentModel.create({
        title: title,
        link : link,
        type : type,
        userId : req.id
    })
    res.status(200).json({
        message : 'Content Added',
        content
    }) } catch (err) {
        console.error("POST ERROR:", err);
        res.status(500).json({
          message: "Server Error",
        });
      }
})

contentRouter.get("/home", async (req, res)=> {
    try {
    const userId = req.id
    const content = await contentModel.find({
        userId : userId
    })
    res.json({
        content
    }) } catch (err) {
        console.error("HOME ERROR:", err);
        res.status(500).json({
          message: "Server Error",
        });
      }
})

contentRouter.delete("/content/:id", async (req, res)=> {
    try {
    const id = req.params.id
    await contentModel.deleteOne({
        _id : id
    })
    res.status(200).json({
        message : 'Item Deleted'
    }) } catch (err) {
        console.error("DELETE ERROR:", err);
        res.status(500).json({
          message: "Server Error",
        });
      }
})

contentRouter.post("/share", async (req, res) => {
  try {
    const { share } = req.body

    if (share) {
      const link = await linkModel.findOneAndUpdate(
        { userId: req.id },
        { hash: random(15) },
        {
          upsert: true,
          new: true,
        }
      )

      return res.json({
        message: "Shareable link created",
        hash: link.hash,
      })
    } else {
      await linkModel.deleteOne({
        userId: req.id,
      })

      return res.json({
        message: "Shareable link removed",
      })
    }
  } catch (err) {
    console.error("SHARE ERROR:", err)
    res.status(500).json({
      message: "Server Error",
    })
  }
})




export default contentRouter