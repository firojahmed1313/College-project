import express from "express"
import { driverHome, driverLogIn, driverRegister, getDriverProfile } from "../controler/carControler.js";
import { isSignInDriver } from "../middlewares/auth.js";
const router = express.Router();

router.post("/api/driver/register", driverRegister);
router.get("/driver/register", (req, res) => {
    res.render("register.ejs");
});
router.post("/api/driver/logIn", driverLogIn);
router.get("/driver/logIn", (req, res) => {
    res.render("logIn.ejs");
});
router.get("/api/driver/myProfile",isSignInDriver, getDriverProfile);

export default router