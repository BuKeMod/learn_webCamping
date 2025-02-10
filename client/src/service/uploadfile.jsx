import axios from "axios";

const uploadImage = async (token, form) => {
    return await axios.post('http://localhost:5000/api/images',
     { image :form }, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    )
}

export const listCamping = async()=>
    await axios.get("http://localhost:5000/api/camping")


export default uploadImage