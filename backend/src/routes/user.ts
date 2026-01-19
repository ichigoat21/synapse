import { Router } from "express";
import z from "zod"
import userModel from "../schema";
import bcrypt from "bcrypt"

const User = z.object({
    username : z.string().max(10).min(3),
    password : z.string().max(20).min(8)
})

const userRouter = Router()

userRouter.post("/signin", async (req, res)=> {
    try {
    const user = User.parse(req.body)
    if (!user){
        return res.status(411).json({
            message : 'Error in Inputs'
        })
    }
    const username = user.username
    const password = user.password

    const hashedPassword = await bcrypt.hash(password, 9)

    const userDB = await userModel.create({
        username : username,
        password : hashedPassword
    })
    res.status(200).json({
        message : 'You are signed in',
        userid : userDB._id
    }) } catch {
        res.status(500).json({
            message : 'Server Error'
        })
    }
})

export default userRouter