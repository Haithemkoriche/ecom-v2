import React, {useEffect, useState} from 'react';
import {axiosClient} from "../../services/api/axios.js";
import {Popconfirm, Table} from "antd";



function Custumer() {
    const [customers,setCustomers] = useState([]);


    const cancel = (e) => {
        console.log(e);
    };
    const getAllCustomers = () => {
        axiosClient.get("/api/dashboard/customers").then(res=> {
            setCustomers(

                  res.data.customers.map( row => ({
                      key: row.id,
                      customer_name: row.name,
                      customer_email: row.email,
                      orders: 6,
                  }) )

            );
        }).catch(error => {
            console.log(error)
        });
    }
    useEffect(() => {
        getAllCustomers();

    }, []);

    const columns = [
        {
            title: 'Customer Name',
            dataIndex: 'customer_name',
            key: 'customer_name',
            width: '30%',
        },
        {
            title: 'Customer Email',
            dataIndex: 'customer_email',
            key: 'customer_email',
            width: '30%',
        },
        {
            title: 'Customer Orders',
            dataIndex: 'orders',
            key: 'orders',
            width: '30%',
        }
    ];
    return (
        <div className="logo-page  flex-grow-1 container-p-y">
            <h4 className="py-3 mb-2"><span className="text-muted fw-light">Dashboard / </span> Customers</h4>
            <div className="row">
                <div className="col-lg-12 col-xl-12 mb-4 col-lg-12 col-12">
                    <div className="card">
                        <div className="header-table">
                            <h5 className="card-header">Customers</h5>
                        </div>
                        <div className="categoy-table-form">
                            <Table columns={columns} dataSource={customers} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Custumer;