module.exports =(err,req,res,next)=>{
res.status(500).json({
    bodyIs:req.body.password === undefined ? 'no password' : req.body.password,
    path:req.path,
    message:err.message || err,
    status:500
    })
}