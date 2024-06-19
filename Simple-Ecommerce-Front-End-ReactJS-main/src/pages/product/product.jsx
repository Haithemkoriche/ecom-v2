import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import ProductApi from "../../services/api/ProductApi.jsx";
import {Button, message, Popconfirm, Table} from "antd";
import  "./product.css";
function Product() {
    const [product, setProduct] = useState(null);
    const confirm = async (action) => {
       await ProductApi.deleteProduct(action).then( () => {
           fetchInfo();
       } )
        message.success('Product Deleted With Success');
    };
    const cancel = (e) => {
        console.log(e);
    };

    const fetchInfo = async () => {
        await ProductApi.getProducts().then( (value) => {
             // setProduct(value.data.products);
           setProduct(
               value.data.products.map( row => ({
                   key: row.id,
                   image: row.main_image,
                   product_name : row.product_name,
                   category: row.category.category_name,
                   current_price:row.current_price + " $",
                   old_price: row.old_price + " $",
                   action: row.id
               }) )
           );
        } ).catch((e) => {
            console.log(e);
        })

    }


    useEffect(() => {
        fetchInfo();
    },[]);

    const columns = [
        {
            title: 'Product Image',
            dataIndex: 'image',
            key: 'image',
            render: image => <img src={image}  alt="Image" style={{ width: 100, height: 100 }} />,
            width: '10%',
        },
        {
            title: 'Product Name',
            dataIndex: 'product_name',
            key: 'product_name',
            width: '30%',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            width: '20%',
        },
        {
            title: 'Current Price',
            dataIndex: 'current_price',
            key: 'current_price',
            sorter: (a, b) => a.current_price.length - b.current_price.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Old Price',
            dataIndex: 'old_price',
            key: 'old_price',
            sorter: (a, b) => a.old_price.length - b.old_price.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: action =>
                <Popconfirm
                    title="Delete The Product"
                    description="Are You Sure To Delete This Product ?"
                    onConfirm={()  => confirm(action)}
                    onCancel={cancel}
                    okText="Product Deleted"
                    cancelText="Cancel"
                >
                    <button style={ {height: "40px"} } className="btn btn-danger">Delete</button>
                </Popconfirm>

        }
    ];

    return (
        <div className="logo-page  flex-grow-1 container-p-y">
            <h4 className="py-3 mb-2"><span className="text-muted fw-light">Dashboard / </span> Products</h4>
            <div className="row">
                <div className="col-lg-12 col-xl-12 mb-4 col-lg-12 col-12">
                    <div className="card">
                        <div className="header-table">
                            <h5 className="card-header">Products</h5>
                            <Link to={"product-add"} className="btn btn-primary">Add Product</Link>
                        </div>
                        <div className="categoy-table-form">
                            <Table columns={columns}  dataSource={product} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;