import axios from "axios";

const createCamping = async (token, data) => {
    return await axios.post('http://localhost:5000/api/camping', data
        , {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    )

}

export default createCamping