import {axiosClient} from "./axios.js";

const CategoriesApi = {
    getCsrfToken: async  () => {
        return await axiosClient.get("/sanctum/csrf-cookie")
    },
    storeCategory: async (formData) => {
        return await axiosClient.post("api/categories",formData);
    },
    getCategoris: async () => {
        return await axiosClient.get("/api/categories");
    },
    deleteCategory: async (id) => {
        return await axiosClient.delete("api/categories/"+id);
    }
}

export default CategoriesApi;