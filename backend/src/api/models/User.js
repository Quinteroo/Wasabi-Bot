const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  paid: { type: Boolean, required: true },
  email: { type: String, required: true, unique: true },
  rol: { type: String, required: true, enum: ["admin", "user"], default: "user" },
}, {
  timestamp: true,
  collection: "users"
}) 