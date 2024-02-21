import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/userRouters.js"
import driverRouter from "./routers/driverRouters.js"
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path"
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.urlencoded({ extended: true })); // post from data
app.use(express.static(path.join(path.resolve(), "pubic"))); // add static file
app.use(cookieParser())


config({
    path: "./config/config.env"
})

app.use(cors({
  
    //origin: process.env.FRONTED_URL,
    origin: "https://5173-firojahmed1-collegeproj-q61ufo89vz5.ws-us108.gitpod.io",
    methods:["GET" ,"POST" , "PUT" , "DELETE"],
    credentials: true,
    optionSuccessStatus:200
  }))
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