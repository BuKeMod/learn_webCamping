
import { v2 as cloudinary } from 'cloudinary';


// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const createImages = async (req, res, next) => {
    try {
      
        const { image } = req.body
        const result = await cloudinary.uploader.upload(image,
            {public_id : `${Date.now()}`,
            resource_type: 'auto',
            folder:'Landmark'
        
        })

        res.json({ result: result })
    } catch (error) {
        next(error)
    }
}

export default createImages