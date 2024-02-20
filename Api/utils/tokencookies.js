import jwt from "jsonwebtoken"
export const createToken=(user,res,massage)=>{

    const token = jwt.sign({_id:user._id},process.env.JWT_SCODE);
    console.log(token);

    res.status(200).json({
        success: true,
        user,
        massage,
        token
    });

}