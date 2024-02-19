import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/userRouters.js"
import driverRouter from "./routers/driverRouters.js"
import { config } from "dotenv";

const app = express();
config({
    path: "./config/config.env"
})
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;


mongoose.connect(DB_URL, {
    dbName: "SMARTPOOL"
}).then(() => {
    console.log("DB CONNECTED");

}).catch((error) => {
    console.log(error())
})

app.use("/", userRouter);
app.use("/", driverRouter);

app.listen(PORT, () => {
    console.log(`open in port ${PORT}`);
});