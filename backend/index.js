require("dotenv").config()
const express = require("express")
const cors = require("cors")
const { connectDB } = require("./src/config/connectDB.js")
const messageRoutes = require("./src/api/routes/messageRoutes.js")


const app = express()

app.use(cors())

app.use(express.json())
connectDB()

// app.use("/user", userRouter)
app.use("/api/v1/messages", messageRoutes)

app.use("*", (req, res, next) => {
  return res.status(404).json("❌ Route not found")
})

const PORT = process.env.PORT || 8002

app.listen(PORT, () => {
  console.log("✅ Servidor levantado en puerto 8002")
})