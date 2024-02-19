import express from "express"
import { driverHome } from "../controler/carControler.js";

const router = express.Router();

router.get("/driver",driverHome)


export default router