import React, {useContext, useEffect, useState} from 'react';
import {ShopContext} from "../../Context/Front/ShopContext.jsx";
import {useParams} from "react-router-dom";
import Breadcrum from "../../components/FrontEnd/Breadcrums/Breadcrum.jsx";
import ProductDisplay from "../../components/FrontEnd/ProductDisplay/ProductDisplay.jsx";
import DescriptionBox from "../../components/FrontEnd/DescriptionBox/DescriptionBox.jsx";
import RelatedProducts from "../../components/FrontEnd/RelatedProducts/RelatedProducts.jsx";
import {axiosClient} from "../../services/api/axios.js";
import Loading from "../../components/FrontEnd/Loading.jsx";

function Product() {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const [product,setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const getSingleProduct =  async () => {
        try {
            // We will send formData object as a data to the API URL here.
            const response = await axiosClient.get("/api/products/"+productId).then((res) => {
                // console.log(res)
                setProduct({
                   id: res.data.product.id,
                    name: res.data.product.product_name,
                    old_price: res.data.product.old_price,
                    new_price:res.data.product.current_price,
                    image:res.data.product.main_image,
                    others_images: res.data.product.others_images,
                    qty: res.data.product.qty,
                    description: res.data.product.description,
                    sizes: res.data.product.sizes,
                    short_description: res.data.product.short_description
                });
                setIsLoading(false)
            }).catch((error) => {
                console.log(error)
            });
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getSingleProduct();
    }, [productId]);


    if (isLoading) {
        return  <Loading />
    }

    return (
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox description={product.description} />
            <RelatedProducts />
        </div>
    );
}

export default Product;