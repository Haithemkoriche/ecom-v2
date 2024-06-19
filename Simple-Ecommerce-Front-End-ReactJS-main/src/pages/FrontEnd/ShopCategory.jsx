import React, {useEffect, useState} from 'react';
import "./css/ShopCategory.css";
import dropdown_icon from "../../components/FrontEnd/assets/dropdown_icon.png"
import Item from "../../components/FrontEnd/Item/Item.jsx";
import {useParams} from "react-router-dom";
import {axiosClient} from "../../services/api/axios.js";
import men_banner from "../../components/FrontEnd/assets/banner_mens.png";
import profile_banner from "../../components/FrontEnd/assets/profile_banner.png";
import Loading from "../../components/FrontEnd/Loading.jsx";

function ShopCategory(props) {
    // const {all_product} = useContext(ShopContext);
    let {category}  = useParams();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const getAllProducts =  async () => {
        try {
            setIsLoading(true);
            // We will send formData object as a data to the API URL here.
            const response = await axiosClient.get("/api/shopCategory/"+category)
                .then((res) => {
                setIsLoading(false);
                setProducts(
                    res.data.products.map(row => ({
                        id: row.id,
                        name: row.product_name,
                        image: row.main_image,
                        new_price: row.current_price + " $",
                        old_price: row.old_price + " $"
                    }))
                );

            }).catch((error) => {
                setIsLoading(false);
            });
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAllProducts();

    }, [category]);

    if (isLoading) {
        return  <Loading />
    }
    return (
        <div className="shop-category">
            <img className="shopcategory-banner" src={  profile_banner  } />
            <div className="shopcategrory-indexSort">
                <p>
                    <span>Showing 1-12</span> Out Of 36 Products
                </p>
                <div className="shopcategory-sort">
                    Sort By <img  src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {products.map((item,i) => {

                        return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

                })}
            </div>
        </div>
    );
}

export default ShopCategory;