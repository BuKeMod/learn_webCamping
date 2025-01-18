import express from "express"
import {listcamping,readCamping,createCamping,updateCamping,deleteCamping} from "../controllers/camping.js"
import authCheck from "../middlewares/auth.js";

const router = express.Router()




router.get('/camping',authCheck,listcamping);

router.get('/camping/:id',readCamping);


router.post('/camping',createCamping);


router.put('/camping/:id',updateCamping)


router.delete('/camping/:id',deleteCamping)

export default router