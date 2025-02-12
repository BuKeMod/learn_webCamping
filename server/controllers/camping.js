import renderError from "../utils/renderError.js";
import { prisma } from "../config/prisma.js";

const listcamping =  async (req, res,next) => {
    try {
       const campings = await prisma.landmark.findMany()

        res.json({result:campings})
        
    } catch (error) {
        next(error)
        console.log(error.message); 
        res.status(500).json({
            message:'Server Error',
            BuKeMod: 'สู้ๆนะ'
        })
    }


}
const readCamping = async (req, res) => {
    try {
        const { id } = req.params
        const camping = await prisma.landmark.findFirst({
            where:{
                id:Number(id)
            }
            
        })
        res.json({
            result:camping
        })
        
    } catch (error) {
        console.log(error.message); 
        res.status(500).json({
            message:`${error.message}`
        })
        
    }

}

const createCamping = async (req,res)=>{
    try {
        const {title,description,price,category,lat,lng,image} =req.body
        const { id } = req.user
        const camping = await prisma.landmark.create({
            data:{
                title,
                description,
                price,
                category,
                lat,
                lng,
                public_id: image.public_id,
                secure_url:image.secure_url,
                profileId: id,

            }
        })
        res.json({
            message: 'Create Camping successfully'
        })
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