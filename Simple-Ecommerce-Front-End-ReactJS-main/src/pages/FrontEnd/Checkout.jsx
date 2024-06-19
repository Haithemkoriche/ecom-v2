import React, {useEffect, useState} from 'react';
import {axiosClient} from "../../services/api/axios.js";
import {message} from "antd";
import {useNavigate} from "react-router-dom";
import item from "../../components/FrontEnd/Item/Item.jsx";


function Checkout() {
    const [cart,setCart] = useState([]);
    const navigate = useNavigate();
    var totalCartPrice = 0;
    const [checkoutInput,setCheckoutInput] = useState({
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
    })

    if (!localStorage.getItem("token")) {
        navigate("/");
        message.error("Please Login To View Cart");
    }
    useEffect(() => {
        axiosClient.get("api/cart").then(res => {
            if (res.data.status === 200){
                setCart(res.data.cart)
            }else if (res.data.status === 401) {
                navigate("/");
                message.error(res.data.message)
            }
        })
    }, []);
    const handleInput = (e) => {
        e.persist();
        setCheckoutInput({...checkoutInput,[e.target.name]: e.target.value});
    }
    const submitOrder = (e) => {
        const productsIds = cart?.map(item => item?.product_id);
        e.preventDefault();

        const data = {
            first_name: checkoutInput.first_name,
            last_name: checkoutInput.last_name,
            phone: checkoutInput.phone,
            email: checkoutInput.email,
            address: checkoutInput.address,
            city: checkoutInput.city,
            state: checkoutInput.state,
            zipcode: checkoutInput.zipcode,
            productsIds: productsIds
        };

        if (cart.length === 0){
           message.error("Cart Is Empty")
            return ;
        }

        try {
            axiosClient.post("api/payment",data).then(res => {
               window.location.replace(res.data.url);
            }).catch(errors => {
                console.log(errors);
            })

        }catch (error){
            console.log(error);
        }



        // console.log(data);
    }

    return (
        <>
            <div className="container">
                <div style={{    margin: "100px 0"}} className="checkout row">
                    <div className="col-md-7">
                        <div className="card">
                            <div className="card-header">
                                <h4>Basic Information</h4>
                            </div>
                            <div className="card-content">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label>First Name</label>
                                            <input type="text" name="first_name" onChange={handleInput} value={checkoutInput.first_name}  className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label>Last Name</label>
                                            <input type="text" name="last_name" onChange={handleInput} value={checkoutInput.last_name} className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label>Phone Number</label>
                                            <input type="text" name="phone" onChange={handleInput} value={checkoutInput.phone}  className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label>Email Address</label>
                                            <input type="email" name="email" onChange={handleInput} value={checkoutInput.email}  className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-3">
                                            <label>Full Address</label>
                                            <textarea className="form-control"  name="address" onChange={handleInput} value={checkoutInput.address} rows="3"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label>City</label>
                                            <input type="text" className="form-control" onChange={handleInput} value={checkoutInput.city} name="city"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label>State</label>
                                            <input type="text" className="form-control" onChange={handleInput} value={checkoutInput.state} name="state"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label>Zip Code</label>
                                            <input type="text" className="form-control" onChange={handleInput} value={checkoutInput.zipcode} name="zipcode"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <button onClick={submitOrder} type="button" className="form-control place_order">
                                                Place Order
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <table style={{ border: "1px solid #994bc2"}} className="table">
                            <thead>
                                <tr>
                                    <th width="50%">Product</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Size</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                            { cart.map((item,key) => {
                                totalCartPrice += item.product.current_price * Number(item.product_qty);
                                return (
                                    <tr key={key}>
                                        <td>{item.product.product_name}</td>
                                        <td>{item.product.current_price}</td>
                                        <td>{item.product_qty}</td>
                                        <td>{item.product_size}</td>
                                        <td>${item.product.current_price * Number(item.product_qty)}</td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td colSpan="2" className="text-end">Total Price</td>
                                <td colSpan="2" className="text-end"><strong style={{color: "#994bc2"}}>${totalCartPrice}</strong></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Checkout;