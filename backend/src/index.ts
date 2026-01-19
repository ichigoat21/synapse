import express from "express"
import userRouter from "./routes/user"
import { UserMiddleware } from "./routes/middleware"
import contentRouter from "./routes/content"
import mongoose from "mongoose"
import { MONGO_URL } from "./db"




const PORT = 3000
const app = express()
app.use(express.json())
app.use("/users", userRouter)
app.use("/contents", UserMiddleware, contentRouter)

const start = async () => {
    await mongoose.connect(MONGO_URL);
    console.log("DB Connected")
}

app.listen(PORT, ()=> {
    console.log("Server has started")
    start()
})
