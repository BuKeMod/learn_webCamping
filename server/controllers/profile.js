import renderError from "../utils/renderError.js";
import { prisma } from "../config/prisma.js";

const createProfile = async (req, res, next) => {
        try {
                const { firstname, lastname } = req.body
                const { id } = req.user
                const email = req.user.emailAddresses[0].emailAddress

                // const profile = await prisma.profile.create({
                //         data:{
                //                 clerkId: id,
                //                 firstname,
                //                 lastname,
                //                 email

                //         }
                // })
                const profile = await prisma.profile.upsert({
                        where: { clerkId: id },
                        create: {
                                firstname,
                                lastname,
                                email,
                                clerkId: id
                        },
                        update: {
                              firstname,
                              lastname,
                              email          
                        }
                })


                res.json({ result: profile, message: "create Profile success" })


        } catch (error) {

                next(error)

        }
}


export default createProfile