
const createImages = async (req,res,next) =>{
    try {
        console.log(req.body.image);
        
        res.json({ message: 'Hello Upload image'})
    } catch (error) {
        next(error)
    }
}

export default createImages