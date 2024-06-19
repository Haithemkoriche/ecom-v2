import {axiosClient} from "./axios.js";

const ProductApi = {
    getCsrfToken: async  () => {
        return await axiosClient.get("/sanctum/csrf-cookie")
    },
    storeProduct: async (formData) => {
        return await axiosClient.post("api/products",formData,{
            headers: {"Content-Type": "multipart/form-data"}
        });
    },
    getProducts: async () => {
        return await axiosClient.get("/api/products");
    },
    deleteProduct: async (id) => {
       return await axiosClient.delete("api/products/"+id);
    }
}

export default ProductApi;