import renderError from "../utils/renderError.js";

const createProfile = (req, res, next) => {
        try {
                const { firstname, lastname, clerkid } = req.body

                if(true){
                        return renderError(400,'กินข้าว')
                }
                console.log(firstname, lastname, clerkid);

                console.log('create Profile success');
                res.json({ message: "create Profile success" })
        } catch (error) {

                next(error)

        }
}


export default createProfile