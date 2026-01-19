import { Router } from "express";

const contentRouter = Router()

contentRouter.post("/add", async (req, res)=> {
    const userId = req.id
    console.log(userId)
    res.json({
        message : userId
    })
})


export default contentRouter