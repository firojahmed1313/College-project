import { User } from "../model/user.js";
import { createToken } from "../utils/tokencookies.js";


export const home = (req, res) => {
    res.send("<h1>MD FIROJ AHMED</h1>");
}

export const userRegister = async (req, res) => {
    console.log(req.body);
    const { name, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
        return res.status(200).json({
            success: false,
            massage: "User already exist .....",
        });
    }
    const user = await User.create({
        name,
        email,
        phone,
        password,
    });
    if (user) {
        return res.status(201).json({
            success: true,
            user,
            massage: "Register sucessfully",
        });
    }

}
export const userLogIn = async (req, res) => {
    console.log(req.body);
    const { email,password } = req.body;

    const userExist = await User.findOne({ email });
    console.log(userExist);
    if (!userExist) {
        return res.status(200).json({
            success: false,
            massage: "User Not exist .....",
        });
    }
    if (password != userExist.password)
        return res.status(400).json({
            success: false,
            massage: "password or email do not match .....",
        });

    
    createToken(
        userExist,
        res,
        `Welcome ${userExist.name} and your email is ${userExist.email}`
    );

}