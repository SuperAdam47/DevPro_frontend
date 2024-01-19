import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const setSession = (authToken) => {
    if (authToken) {
        localStorage.setItem("authToken", authToken);
        axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    } else {
        localStorage.removeItem("authToken");
        delete axios.defaults.headers.common.Authorization;
    }
}

export const authenticateUser = () => {
    axios.get(`${BASE_URL}/protected`).then((response) => {
        let data = {
            success: true,
            data: response.data
        };
        // console.log(data);
        return data;
    }).catch((error) => {
        let data = {
            success: false,
            data: error.response.data
        };
        return data;
    })
}

export const isAuthenticated = () => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
        setSession(authToken);
        return true;
    } else {
        setSession();
        return false;
    }
}