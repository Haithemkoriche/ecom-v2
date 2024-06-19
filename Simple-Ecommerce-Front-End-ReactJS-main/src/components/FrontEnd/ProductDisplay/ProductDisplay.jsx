import React, {useContext, useEffect, useState} from 'react';
import "./ProductDisplay.css"
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import {ShopContext} from "../../../Context/Front/ShopContext.jsx";
import {message} from "antd";
import {axiosClient} from "../../../services/api/axios.js";


function ProductDisplay(props) {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    const [sizes,setSizes] = useState(null);
    const [qty,setQty] = useState(1);
    const [singleSize,setSingleSize] = useState(null);

    const addCartItem = () => {
        if (singleSize === null)  {
            message.error("Please Select Any Size");
            return false;
        }
        const data = {
            product_id : props.product.id,
            product_qty : qty,
            product_size: singleSize
        }
        axiosClient.post("api/add-to-cart",data).then((res)=> {

            if ( res.data.status === 201 ){
                message.success(res.data.message); 
            } else if (res.data.status === 409) {
                message.success(res.data.message);
            } else if(res.data.status === 401) {
                message.error(res.data.message);
            } else if(res.data.status === 404) {
                message.warning(res.data.message);
            }

        }).catch((errors)=> {
            console.log(errors)
        })

   //    addToCart(product.id,singleSize);

    }


    return (
        <div className="prodctdisplay">
            <div className="prodctdisplay-left">
                <div className="prodctdisplay-img-list">
                    {product.others_images &&
                        Object.keys(product.others_images.split(",")).map((key) =>
                            <img key={key}   src={[product.others_images.split(",")[key]]} alt="" />
                        )
                    }
                </div>
                <div className="prodctdisplay-img">
                    <img src={product.image} className="prodctdisplay-main-img" />
                </div>
            </div>
            <div className="prodctdisplay-right">
                <h1>{product.name}</h1>
                <div className="prodctdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="prodctdisplay-right-prices">
                    <div className="prodctdisplay-right-price-old">${product.old_price}</div>
                    <div className="prodctdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="prodctdisplay-right-description">
                    <div
                        dangerouslySetInnerHTML={{__html: product.description}}
                    />
                </div>
                <div className="prodctdisplay-right-size">
                    <h1>Select Qty</h1>
                    <div className="prodctdisplay-right-sizes">

                        <select defaultValue={''}
                                onChange={(e) => setQty(e.target.value)} style={{width: "20%"}}
                                className="form-control">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>

                        </select>


                    </div>
                </div>
                <div className="prodctdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="prodctdisplay-right-sizes">

                        <select defaultValue={''} onChange={(e) => setSingleSize(e.target.value)} style={{width: "20%"}}
                                className="form-control">
                            <option value="" disabled>Select Size</option>
                            {product.sizes &&
                                Object.keys(product.sizes.split(",")).map((key) =>
                                    <option key={key} value={[product.sizes.split(",")[key]]}>
                                        {[product.sizes.split(",")[key].toUpperCase()]}
                                    </option>
                                )
                            }

                        </select>


                    </div>
                </div>
                <button onClick={ () => { addCartItem() } }>ADD TO CART</button>
                <p className="prodctdisplay-right-category"><span>Tags : </span> Modern, Latest</p>
            </div>

        </div>
    );
}

export default ProductDisplay;