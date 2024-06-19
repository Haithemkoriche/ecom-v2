import {axiosClient} from "./axios.js";

const LogoApi = {
    getCsrfToken: async  () => {
        return await axiosClient.get("/sanctum/csrf-cookie")
    },
    updateLogo: async (formData) => {
        return await axiosClient.post("api/logo",formData,{
            headers: {"Content-Type": "multipart/form-data"}
        });
    },
    getLogo: async () => {
        return await axiosClient.get("api/logo");
    }

}


export default LogoApi;