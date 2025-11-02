const{verifyTokens}=require('../utils/jwt');

const authenticate=(req,res,next)=>{
    const token=req.headers['authorization'];
    if(!authHeader) {
        return res.status(401).json({message:'Unauthorized'});
    }
    const tokenParts=token.split(' ')[1];
    const decoded=verifyTokens(token);
    if(!decoded){
        return res.status(401).json({message:'Unauthorized'});
    }   
    req.user=decoded;
    next();
};
module.exports = authenticate;