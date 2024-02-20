import express from "express"
import { driverHome, driverLogIn, driverRegister } from "../controler/carControler.js";

const router = express.Router();

router.get("/driver",driverHome)
router.post("/api/driver/register", driverRegister);
router.get("/driver/register", (req, res) => {
    res.render("register.ejs");
});
router.post("/api/driver/logIn", driverLogIn);
router.get("/driver/logIn", (req, res) => {
    res.render("logIn.ejs");
});

export default router