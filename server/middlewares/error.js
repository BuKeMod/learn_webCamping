const handleError = (err, req,  res, next) => {
    // console.error(err);  // แสดงข้อผิดพลาดใน console
    res.status(err.statusCode||500).json({ 
        message: err.message || "Something Went Wrong!",
        // error: err.message,  // แสดงข้อความข้อผิดพลาด
        // stack: err.stack // แสดง stack trace สำหรับการดีบัก
    });
}


export default handleError