import { Router } from "express";
import contentModel from "../schema/content";

const contentRouter = Router()

contentRouter.post("/add", async (req, res)=> {
    const link = req.body.link
    const title = req.body.link
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
    })
})


export default contentRouter