import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login = (data, callback) => {
    axios
    .post("https://booyahnetapi.azurewebsites.net/api/User/Login", data)
    .then((res) => {
        callback(true, res.data.token)
    })
    .catch((err) =>{
        callback(false, err)
    })
}

export const getEmail = (token) => {
    const decoded = jwtDecode(token)
    console.log(decoded.sub)
    return decoded.sub
}