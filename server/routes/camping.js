import express from "express"
import {listcamping,readCamping,createCamping,updateCamping,deleteCamping} from "../controllers/camping.js"
import authCheck from "../middlewares/auth.js";

const router = express.Router()




router.get('/camping',listcamping);

router.get('/camping/:id',readCamping);


router.post('/camping',authCheck,createCamping);


router.put('/camping/:id',updateCamping)


router.delete('/camping/:id',deleteCamping)

export default router