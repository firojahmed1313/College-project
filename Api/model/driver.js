import mongoose from "mongoose";

const driverSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    license: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
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

export const Driver = mongoose.model.Driver || new mongoose.model("Driver",driverSchema)