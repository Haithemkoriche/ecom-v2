import React, {useEffect, useState} from 'react';
import "./CartItems.css";
import remove_icon from "../assets/cart_cross_icon.png"
import {axiosClient} from "../../../services/api/axios.js";
import {Link, useNavigate} from "react-router-dom";
import {message} from "antd";
import Loading from "../../../components/FrontEnd/Loading.jsx";
function CartItems() {
    const [cart,setCart] = useState([]);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    var totalCartPrice = 0;

    if (!localStorage.getItem("token")) {
        navigate("/");
        message.error("Please Login To View Cart");
    }
    useEffect(() => {
        axiosClient.get("api/cart").then(res => {
            if (res.data.status === 200){
                setCart(res.data.cart)
                setIsLoading(false);
            }else if (res.data.status === 401) {
                navigate("/");
                setIsLoading(true);
                message.error(res.data.message)
            }
        })
    }, []);
    const handleDecrement = (cart_id) => {
        setCart(cart.map((item)=>
            cart_id === item.id ? {...item,product_qty: Number(item.product_qty) - (Number(item.product_qty>1 ? 1:0)) } : item
          )
        );
        updateCartQuantity(cart_id,"dec");

    }
    const handleIncrement = (cart_id) => {
        setCart(cart.map((item)=>
                cart_id === item.id ? {...item,product_qty: Number(item.product_qty)+ (Number(item.product_qty<5 ? 1:0)) } : item
            )
        );
        updateCartQuantity(cart_id,"inc");
    }
    function updateCartQuantity(cart_id,scope) {
        axiosClient.put(`api/cart-update-quantity/${Number(cart_id)}/${scope}`).then(res=> {
            if(res.data.status === 200){
                message.success(res.data.message);
            }
        });
    }
    const deleteCartItem = (e,cart_id) => {
        e.preventDefault();
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Removing...";

        axiosClient.delete(`api/delete-cart-item/${cart_id}`).then(res => {
            if(res.data.status === 200) {
                message.success(res.data.message);
                thisClicked.closest(".Single-item").remove();
            } else if(res.data.status === 404) {
                message.error(res.data.message);
            }
        })
    }

    if (isLoading) {
        return  <Loading />
    }

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            { cart.map((item,key) => {
                totalCartPrice += item.product.current_price * Number(item.product_qty);
                return (
                    <div className="Single-item" key={key}>
                        <div className="cartitems-format cartitems-format-main">
                            <img width={"100%"} src={item.product.main_image} className="" alt={item.product.name} />
                            <p className="cartitemtitle">{item.product.product_name}</p>
                            <p>${item.product.current_price}</p>

                            <div className="cartitems-quantity">
                                <button type="button" onClick={ () => handleDecrement(item.id) } className="input-group-text">-</button>
                                <div className="form-control text-center">{item.product_qty}</div>
                                <button type="button" onClick={ () => handleIncrement(item.id) } className="input-group-text">+</button>
                            </div>

                            <p>${item.product.current_price * item.product_qty}</p>
                            <img className="cartitems-remove-icon" src={remove_icon} onClick={(e) => {
                                deleteCartItem(e,item.id)
                            }} alt=""/>
                        </div>
                        <hr/>
                    </div>
                )
            })

            }


            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>SubTotal</p>
                            <p>${totalCartPrice}</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${totalCartPrice}</h3>
                        </div>
                    </div>
                    <Link style={{
                        fontSize: "17px",
                        color: "#994bc2",
                    }} to="/checkout">PROCEED TO CHECKOUT</Link>
                </div>
                <div className="cartitems-promocode">
                    <p>If You Have A Promo Code, Enter It Here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder="Promo Code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;