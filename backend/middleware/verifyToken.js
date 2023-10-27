const jwt=require('jsonwebtoken')

const verifyToken=(req,res,next)=>{
    // console.log(req.headers)
    if(!req.headers.authorization){
return res.status(403).json({msg:"Not valid no token"})
    } 

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        const token=req.headers.authorization.split(" ")[1]
        // console.log(token)
        jwt.verify(token,process.env.JWT_SECRET,(err,data)=>{
            if(err){
                return res.status(403).json({msg:"Incorrect or expired token"})
            }else{
                req.user=data
                next()
            }
        })
    }
    
}

module.exports=verifyToken