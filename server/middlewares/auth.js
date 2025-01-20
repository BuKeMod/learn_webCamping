import renderError from "../utils/renderError.js";
import { clerkClient, requireAuth } from '@clerk/express'

const authCheck = async (req,res,next)=>{
    try {
      const userId = req.auth.userId
    
      if(!userId){
        return renderError(401,'Unauthorize')
      }
      const user = await clerkClient.users.getUser(userId)
     
      req.user = user

      
      next()
    } catch (error) {
        next(error)
        
    }
    
}

export default authCheck