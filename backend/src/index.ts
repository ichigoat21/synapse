import express from "express"
import userRouter from "./routes/user"
import { UserMiddleware } from "./routes/middleware"
import contentRouter from "./routes/content"
import mongoose from "mongoose"
import { MONGO_URL } from "./db"
import cors from "cors"
import shareRouter from "./routes/share"



const PORT = 3000
const app = express()
app.use(express.json())
app.use(cors())
app.use("/users", userRouter)
app.use("/contents", UserMiddleware, contentRouter)
app.use("/share", shareRouter)

const start = async () => {
    await mongoose.connect(MONGO_URL);
    console.log("DB Connected")
}

app.listen(PORT, ()=> {
    console.log("Server has started")
    start()
})
