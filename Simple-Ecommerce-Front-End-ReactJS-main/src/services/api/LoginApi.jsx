import { axiosClient } from "./axios.js";

const LoginApi = {
    getCsrfToken: async () => {
        try {
            await axiosClient.get("/sanctum/csrf-cookie");
            console.log("CSRF token fetched successfully.");
        } catch (error) {
            console.error("Error getting CSRF token:", error);
        }
    },
    login: async (email, password) => {
        try {
            const response = await axiosClient.post("/api/login", { email, password });
            if (response.status === 200) {
                localStorage.setItem("token", response.data.token);
                console.log("Login successful. Token stored:", response.data.token);
            }
            return response;
        } catch (error) {
            console.error("Error during login:", error);
            throw error;
        }
    },
    logout: async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                throw new Error("No token found.");
            }
            const response = await axiosClient.post("/api/logout", {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                localStorage.removeItem("token");
                console.log("Logout successful. Token removed.");
            }
            return response;
        } catch (error) {
            console.error("Error during logout:", error);
            throw error;
        }
    },
    getUser: async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                throw new Error("No token found.");
            }
            const response = await axiosClient.get("/api/user", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log("User data fetched successfully:", response.data);
            return response.data;
        } catch (error) {
            console.error("Error fetching user data:", error);
            throw error;
        }
    }
};

export default LoginApi;
