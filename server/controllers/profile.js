import renderError from "../utils/renderError.js";

const createProfile = (req, res, next) => {
        try {
                const { firstname, lastname, clerkid } = req.body
                console.log(firstname, lastname, clerkid);

                console.log('create Profile success');
                res.json({ message: "create Profile success" })
        } catch (error) {

                next(error)

        }
}


export default createProfile