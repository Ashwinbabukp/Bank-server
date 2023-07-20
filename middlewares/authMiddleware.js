const jwt = require('jsonwebtoken')

exports.appMiddleware = (req,res,next)=>{
    console.log("Inside Application specific Middlewares");
    next()
}

// token logic
exports.jwtMiddleware = (req,res,next)=>{
    console.log("Inside JWTMiddleware");
    //get token from red header
    const token = req.headers["access-token"]
    // verify token
    try{
        const {loginAcno} = jwt.verify(token,"supersecretkey12345")
        console.log(loginAcno);
        req.loginData = loginAcno
        next()
    }
    catch{
        res.status(406).json("Please Login")
    }
}