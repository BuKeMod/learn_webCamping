import express from 'express'
const router = express.Router()

import createProfile from '../controllers/profile.js'



router.post('/profile',createProfile)





  




export default router