import axios from "axios";

const createprofile = async (token, data) => {
    console.log('create profile', token, data);
    return await axios.post('http://localhost:5000/api/profile', data
        , {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    )

}

export default createprofile