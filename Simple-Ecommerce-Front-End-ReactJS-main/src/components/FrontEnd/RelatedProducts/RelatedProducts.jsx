import React, {useEffect, useState} from 'react';
import "./RelatedProducts.css";
import data_product from "../assets/data.js";
import Item from "../Item/Item.jsx";
import {axiosClient} from "../../../services/api/axios.js";

function RelatedProducts() {
    const [products, setProducts] = useState([]);
    const getPopularsProducts = async () => {
        try {
            // We will send formData object as a data to the API URL here.
            const response = await axiosClient.get("/api/products").then((res) => {
                console.log(res)

                setProducts(
                    res.data.products.slice(0, 4).map( row => ({
                        id: row.id,
                        name: row.product_name,
                        image: row.main_image,
                        new_price: row.current_price +" $",
                        old_price: row.old_price + " $"
                    }))
                )

            }).catch((error) => {
                console.log(error)
            });
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getPopularsProducts();
    }, []);
    return (
        <div className="relaredproducts">
            <h1>Related Products</h1>
            <p className="description">See All Our Related Products From Here</p>
            <hr />
            <div className="relaredproducts-item">
                {products.map((item,i)=> {
                    return  <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    );
}

export default RelatedProducts;