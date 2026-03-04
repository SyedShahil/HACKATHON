const jwt = require("jsonwebtoken");
require("dotenv").config();

const secretcode = process.env.SECRET_CODE;
function authMiddleware(req,res,next){
    const token=req.headers.authorization;
    try{
        const email=jwt.verify(token,secretcode);
        if(!email) return res.send({status:'error',message:'Authentication Failed'});
        req.user=email;
        next();
    }catch(e){
        console.log(e)
        return res.send({status:'error',message:'Server Error'});
    }
}

module.exports=authMiddleware;