import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken'
import { JWT_SECRET } from "../config/config";


export const UserMiddleware = (req : Request, res : Response, next : NextFunction)=> {
    const token = req.headers.authorization
    if (typeof token !== "string"){
        res.status(411).json({
            message : 'Invalid Input'
            })
        return
    }
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload & { id: string }
    req.id = decoded.id
    next()
}