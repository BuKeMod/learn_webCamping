import express from 'express'
const router = express.Router()

import createProfile from '../controllers/profile.js'
import authCheck from '../middlewares/auth.js'



router.post('/profile',authCheck,createProfile)





  




export default router