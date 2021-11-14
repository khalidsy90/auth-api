module.exports=(req,res,next)=>{
res.status(404).json({
    message:'Router or Page not found'
})
}