module.exports=(req, res, next)=>{
    console.log(
        `Request : ${req.method} , Path ${req.path} , ${req.username ? req.username:'username'} , ${req.password ? req.password :'password'}`
    );
    next()
}