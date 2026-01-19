import express from "express"
import userRouter from "./routes/user"
import { UserMiddleware } from "./routes/middleware"
import contentRouter from "./routes/content"




const PORT = 3000
const app = express()
app.use(express.json())
app.use("/users", userRouter)
app.use("/contents", UserMiddleware, contentRouter)


app.listen(PORT, ()=> {
    console.log("Server has started")
})
