const multer = require("multer")


const uploadFiles = multer({ dest: 'uploads/' })

module.exports = { uploadFiles }