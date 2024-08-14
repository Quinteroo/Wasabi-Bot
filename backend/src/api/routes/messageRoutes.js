const express = require("express")
const messageRoutes = express.Router()
const { postMessage } = require("../controllers/messageController.js")

messageRoutes.post("/", postMessage)

module.exports = messageRoutes