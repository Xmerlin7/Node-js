export default (err, req, res, next)=>{
    console.log(err);
    const errorCode = err.status || 500
    const errorMess = err.message || "Internal Server Error"
    return res
    .status(errorCode).json({errorMess})
}