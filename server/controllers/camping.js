import renderError from "../utils/renderError.js";
import { prisma } from "../config/prisma.js";

const listcamping =  async (req, res,next) => {
    try {
       const campings = await prisma.landmark.findMany()

        res.json({result:campings})
        
    } catch (error) {
        next(error)
    }


}
const readCamping = async (req, res,next) => {
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
        next(error)
        
    }

}

const createCamping = async (req,res,next)=>{
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
        next(error)
        
    }
}

const updateCamping = (req,res,next)=>{
    try {
        res.send('Update')
    } catch (error) {
        next(error)
        
    }
}

const deleteCamping = (req,res,next)=>{
    try {
        res.send('Delete')
    } catch (error) {
        next(error)
        
    }
}


export { listcamping, readCamping,createCamping,updateCamping, deleteCamping }