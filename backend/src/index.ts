import express from "express"
import userRouter from "./routes/user"
import { UserMiddleware } from "./routes/middleware"
import contentRouter from "./routes/content"
import mongoose from "mongoose"
import { MONGO_URL } from "./db"
import cors from "cors"
import shareRouter from "./routes/share"

const PORT = 3000
const SELF_URL = process.env.SELF_URL || `http://localhost:${PORT}`

const app = express()
app.use(express.json())
app.use(cors())
app.use("/users", userRouter)
app.use("/contents", UserMiddleware, contentRouter)
app.use("/share", shareRouter)

// Self-ping: hits /health every 14 minutes to prevent free-tier spin-down
app.get("/health", (_req, res) => {
  res.json({ status: "ok", ts: Date.now() })
})

setInterval(async () => {
  try {
    const res = await fetch(`${SELF_URL}/health`)
    console.log(`[self-ping] ${new Date().toISOString()} → ${res.status}`)
  } catch (err) {
    console.error("[self-ping] failed:", err)
  }
}, 14 * 60 * 1000)

const start = async () => {
  await mongoose.connect(MONGO_URL)
  console.log("DB Connected")
}

app.listen(PORT, () => {
  console.log("Server has started")
  start()
})