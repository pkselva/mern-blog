import axios from "axios";

export const registerUser = async (data) => {
    try {
        const res = await axios.post("/api/auth/signup", data);
        return {
            success: true,
            data: res.data
        };
    } catch (error) {
        return {
            success: false,
            error: error.response?.data?.message || error.message
        };
    }
};

export const loginUser = async (data) => {
    try {
        const res = await axios.post("/api/auth/signin", data);
        return {
            success: true,
            data: res.data
        };
    } catch (error) {
        return {
            success: false,
            error: error.response?.data?.message || error.message
        };
    }
};