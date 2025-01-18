
const authCheck = (req,res,next)=>{
    try {
        console.log('Hello middleware');
        if(true){
            next()
        }else{
            res.status(401).json({message:"No access Denied"})
        }
        
    } catch (error) {
        console.log(error);
        
    }
    
}

export default authCheck