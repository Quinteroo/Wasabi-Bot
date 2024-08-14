const express = require("express")
const messageRoutes = express.Router()
const { postMessage } = require("../controllers/messageController.js")
const { uploadFiles } = require("../../utils/files.js")

messageRoutes.post("/", postMessage) //, uploadFiles.single("file")

module.exports = messageRoutes