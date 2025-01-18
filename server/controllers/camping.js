import renderError from "../utils/renderError.js";


const listcamping = (req, res,next) => {
    try {
        if (true) {
            return renderError(401, 'Server Error list')
            }

        res.send('hello controller')
        
    } catch (error) {
        next(error)
        console.log(error.message); 
        res.status(500).json({
            message:'Server Error',
            BuKeMod: 'สู้ๆนะ'
        })
    }


}
const readCamping = (req, res) => {
    try {
        console.log(dfsf);
        
        res.send('read')
        
    } catch (error) {
        console.log(error.message); 
        res.status(500).json({
            message:`${error.message}`
        })
        
    }

}

const createCamping = (req,res)=>{
    try {
        res.send('Create')
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message:"server error"
        })
        
    }
}

const updateCamping = (req,res)=>{
    try {
        res.send('Update')
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message:'server error'
        })
        
    }
}

const deleteCamping = (req,res)=>{
    try {
        res.send('Delete')
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message:"server eror"
        })
        
    }
}


export { listcamping, readCamping,createCamping,updateCamping, deleteCamping }