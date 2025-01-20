import renderError from "../utils/renderError.js";

const createProfile = (req, res, next) => {
        try {
                const { firstname, lastname} = req.body

               console.log(req.user);
               
                console.log('create Profile success');
                

                res.json({ message: "create Profile success" })
                
                
        } catch (error) {

                next(error)

        }
}


export default createProfile