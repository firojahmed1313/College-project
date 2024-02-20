import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
})
export const User = mongoose.model.User || new mongoose.model("User" ,userSchema )