import express from "express"
import userRouter from "./routes/user"



const PORT = 3000
const app = express()
app.use(express.json())
app.use("/users", userRouter)



app.listen(PORT, ()=> {
    console.log("Server has started")
})
