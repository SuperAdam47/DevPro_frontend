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