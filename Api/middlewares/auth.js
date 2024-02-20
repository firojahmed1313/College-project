

export const isSignIn=async(req,res,next)=>{
    console.log("cookies is : ",req.headers.authorization);
    const token= req.headers.authorization.replace(/"/g, '');
    console.log(token);
    if(!token) return res.status(404).json({
        success: false,
        massage: "plz Login",  
    })

    const decode = jwt.verify(token, process.env.JWT_SCODE);
    console.log(decode);

    req.user = await User.findById(decode);
    next();
}