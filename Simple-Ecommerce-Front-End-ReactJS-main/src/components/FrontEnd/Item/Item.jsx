import React, {useContext} from "react";
import "./Item.css";
import arrow_icon from "../assets/arrow.png";
import {Link} from "react-router-dom";
import {ShopContext} from "../../../Context/Front/ShopContext.jsx";
const Item = (props) => {
    const {addToCart} = useContext(ShopContext);
    return (
        <div className="item">
            <Link to={`/product/${props.id}`}>
                <img onClick={ window.scrollTo(0,0) } className="item-image" src={props.image} alt="" />
            </Link>
            <p>{props.name}</p>
            <div className="item-prices"> <div style={{color: "#994bc2"}} className="item-price-new">
                        ${props.new_price}
                    </div>
                    <div className="item-price-old">
                        ${props.old_price}
                    </div>
            </div>
            <div  style={{background: "#994bc2"}} className="item_cart">
                <div onClick={ () => { addToCart(props.id) } }>Add To Cart</div>
                <img src={arrow_icon} />
            </div>
        </div>
    );
}

export default Item;