import { Router } from "express";
import z from "zod"
import userModel from "../schema";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config/config";


const User = z.object({
    username : z.string().max(10).min(3),
    password : z.string().max(20).min(8)
})

const userRouter = Router()

userRouter.post("/signup", async (req, res)=> {
    try {
    const user = User.parse(req.body)
    console.log(user)
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
    }) } catch (err) {
        console.error("SIGNUP ERROR:", err);
        res.status(500).json({
          message: "Server Error",
        });
      }
})

userRouter.post("/signin", async (req, res)=> {
    try {
        const username = req.body.username
        const password = req.body.password 

        const user = await userModel.findOne({
            username : username
        })
        if (typeof user?.password !== "string"){
            res.status(411).json({
                message : 'Wrong Input'
            })
            return
        }
        const verified = await bcrypt.compare(password, user?.password)
        if (!verified){
            res.status(411).json({
                message : 'Wrong Password'
            })
        }
        const token = jwt.sign({
            id : user._id
        }, JWT_SECRET )

        if (token){
            res.status(200).json({
                message : 'You are signed in',
                token : token
            })
        } else {
            res.status(403).json({
                message : 'Sorry couldnt assign you a token'
            })
        }
    } catch {
        res.status(500).json({
            message : 'Sorry Something went wrong'
        })
    }
})

export default userRouter