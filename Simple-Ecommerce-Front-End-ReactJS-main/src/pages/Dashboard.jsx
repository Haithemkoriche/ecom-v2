import React, {useEffect, useState} from 'react'
import {FaHandPointRight} from "react-icons/fa";
import { UseUserContext} from "../Context/Back/AuthContext.jsx";
import {axiosClient} from "../services/api/axios.js";

const Dashboard = () => {
    const userContext = UseUserContext();
    const [products,setProducts] = useState(null);
    const [orders,setOrders] = useState(null);
    const [customers,setCustomers] = useState(null);
    const [categories,setCategories] = useState(null);

    const getAllDashboard = () => {
        axiosClient.get("/api/dashboard").then(res=> {
            setProducts(res.data.products);
            setOrders(res.data.orders);
            setCustomers(res.data.customers);
            setCategories(res.data.categories);
        }).catch(error => {
            console.log(error)
        });
    }
    useEffect(() => {
        getAllDashboard();

    }, []);
  return (
    <div className="dashboard  flex-grow-1 container-p-y">
        <h4 className="py-3 mb-4">Dashboard {userContext.user.name}</h4>
        <div className="row">
            <div className="col-xl-3 col-lg-6 mb-3">
                <div className="card products">
                    <div className="card-content">
                        <div className="card-body">
                            <div className="media d-flex">
                                <div className="products-icon align-self-center">
                                    <FaHandPointRight />
                                </div>
                                <div className="media-body text-right">
                                    <h3>{products}</h3>
                                    <span>New Products</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-6 mb-3">
                <div className="card products">
                    <div className="card-content">
                        <div className="card-body">
                            <div className="media d-flex">
                                <div className="products-icon align-self-center">
                                    <FaHandPointRight />
                                </div>
                                <div className="media-body text-right">
                                    <h3>{categories}</h3>
                                    <span>New Categories</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-6 mb-3">
                <div className="card products">
                    <div className="card-content">
                        <div className="card-body">
                            <div className="media d-flex">
                                <div className="products-icon align-self-center">
                                    <FaHandPointRight />
                                </div>
                                <div className="media-body text-right">
                                    <h3>{customers}</h3>
                                    <span>New Customers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-6 mb-3">
                <div className="card products">
                    <div className="card-content">
                        <div className="card-body">
                            <div className="media d-flex">
                                <div className="products-icon align-self-center">
                                    <FaHandPointRight />
                                </div>
                                <div className="media-body text-right">
                                    <h3>{orders}</h3>
                                    <span>New Orders</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Dashboard
