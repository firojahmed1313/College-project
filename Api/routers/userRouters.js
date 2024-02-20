import express from "express"
import { home, userLogIn, userRegister } from "../controler/userControler.js";

const router = express.Router();

router.get("/", home);
router.post("/api/user/register", userRegister);
router.get("/user/register", (req, res) => {
    res.render("register.ejs");
});
router.post("/api/user/logIn", userLogIn);
router.get("/user/logIn", (req, res) => {
    res.render("logIn.ejs");
});
export default router