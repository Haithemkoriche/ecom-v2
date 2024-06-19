import new_collections from "../assets/new_collections.js";
import Item from "../Item/Item.jsx";
import "./NewCollections.css";
import {useEffect, useState} from "react";
import {axiosClient} from "../../../services/api/axios.js";
const NewCollections = () => {
    const [products, setProducts] = useState([]);
    const getPopularsProducts = async () => {
        try {
            // We will send formData object as a data to the API URL here.
            const response = await axiosClient.get("/api/products").then((res) => {
                console.log(res)

                setProducts(
                    res.data.products.slice(4, 8).map( row => ({
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
        <div className="new-collections">
            <h1>NEW COLLECTIONS</h1>
            <p className="description">See All Our Collections Products From Here</p>
            <hr style={{ background: "#994bc2",opacity:"1"}} />
            <div className="collections">
                {products.map((item,i)=> {
                    return  <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    );
}

export default NewCollections;