import renderError from "../utils/renderError.js";

const createProfile = (req, res, next) => {
        try {
                if (true) {
                return renderError(401, 'Password invalid')
                }

                console.log('create Profile success');
                res.json({ message: "create Profile success" })
        } catch (error) {
            
                next(error)
              
        }
}


export default createProfile