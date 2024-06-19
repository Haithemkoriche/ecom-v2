import React, {useEffect, useState} from 'react';
import {axiosClient} from "../../services/api/axios.js";
import {Table} from "antd";

function Orders() {
    const [orders,setOrders] = useState([]);
    const getAllOrders = () => {
        axiosClient.get("/api/dashboard/orders").then(res=> {
            setOrders(

                res.data.orders.map( row => ({
                    key: row.id,
                    firstname: row.firstname,
                    lastname: row.lastname,
                    phone: row.phone,
                    email: row.email,
                    payment_id: row.payment_id,
                    payment_mode: row.payment_mode,
                }) )

            );
        }).catch(error => {
            console.log(error)
        });
    }
    useEffect(() => {
        getAllOrders();

    }, []);

    const columns = [
        {
            title: 'First Name',
            dataIndex: 'firstname',
            key: 'firstname',
            width: '30%',
        },
        {
            title: 'Last Name',
            dataIndex: 'lastname',
            key: 'lastname',
            width: '30%',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
            width: '30%',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: '30%',
        },
        {
            title: 'Payment Id',
            dataIndex: 'payment_id',
            key: 'payment_id',
            width: '30%',
        },
        {
            title: 'Payment Mode',
            dataIndex: 'payment_mode',
            key: 'payment_mode',
            width: '30%',
        },
    ];
    return (
        <div className="logo-page  flex-grow-1 container-p-y">
            <h4 className="py-3 mb-2"><span className="text-muted fw-light">Dashboard / </span> Orders</h4>
            <div className="row">
                <div className="col-lg-12 col-xl-12 mb-4 col-lg-12 col-12">
                    <div className="card">
                        <div className="header-table">
                            <h5 className="card-header">Orders</h5>
                        </div>
                        <div className="categoy-table-form">
                            <Table columns={columns} dataSource={orders} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Orders;