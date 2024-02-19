import express from "express"
import { home } from "../controler/userControler.js";

const router = express.Router();

router.get("/",home)

export default router