import { Driver } from "../model/driver.js"
import { createToken } from "../utils/tokencookies.js";

export const driverHome = (req, res) => {
    res.send("<h1>Driver<h1>")
}

export const driverRegister = async (req, res) => {
    console.log(req.body);
    const { name, licence_id,email, password } = req.body;

    const driverExist = await Driver.findOne({ licence_id });
    if (driverExist) {
        return res.status(200).json({
            success: false,
            massage: "User already exist .....",
        });
    }
    const driver = await Driver.create({
        name,
        licence_id,
        email,
        password,
    });
    if (driver) {
        return res.status(201).json({
            success: true,
            driver,
        });
    }

}
export const driverLogIn = async (req, res) => {
    console.log(req.body);
    const { name,licence_id, email, password } = req.body;

    const driverExist = await Driver.findOne({ licence_id });
    if (!driverExist) {
        return res.status(200).json({
            success: false,
            massage: "User Not exist .....",
        });
    }
    if (password != driverExist.password)
        return res.status(400).json({
            success: false,
            massage: "password or email do not match .....",
        });

    console.log(driverExist);
    createToken(
        driverExist,
        res,
        `Welcome ${driverExist.name} and your email is ${driverExist.email}`
    );
}