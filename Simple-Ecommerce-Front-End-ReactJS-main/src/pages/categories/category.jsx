import React, {useEffect, useState} from 'react';
import { message, Popconfirm, Table} from "antd";

import {Link} from "react-router-dom";
import categories from "../../services/api/Categories.jsx";


function Category() {
    const [category, setCategory] = useState([]);
    const confirm = async (action) => {
        await categories.deleteCategory(action).then( () => {
            fetchInfo();
        } )
        message.success('Category Deleted With Success');
    };
    const cancel = (e) => {
        console.log(e);
    };


    const fetchInfo = async () => {
        await categories.getCategoris().then( (value) => {
          setCategory(
              value.data.categories.map( row => ({
                  key: row.id,
                  category_name: row.category_name,
                  action: row.id
              }) )
          );
            // setCategory( );
        } ).catch((e) => {
            console.log(e);
        })

    }


    useEffect(() => {
        fetchInfo();
    },[]);

    const columns = [
        {
            title: 'Category Name',
            dataIndex: 'category_name',
            key: 'category_name',
            width: '30%',
        }, {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: action =>
                <Popconfirm
                    title="Delete The Category"
                    description="Are You Sure To Delete This Category ?"
                    onConfirm={()  => confirm(action)}
                    onCancel={cancel}
                    okText="Category Deleted"
                    cancelText="Cancel"
                >
                    <button  className="btn btn-danger">Delete</button>
                </Popconfirm>

        }
    ];

    return (
        <div className="logo-page  flex-grow-1 container-p-y">
            <h4 className="py-3 mb-2"><span className="text-muted fw-light">Dashboard / </span> Categories</h4>
            <div className="row">
                <div className="col-lg-12 col-xl-12 mb-4 col-lg-12 col-12">
                    <div className="card">
                        <div className="header-table">
                                <h5 className="card-header">Categories</h5>
                                <Link to={"category-add"} className="btn btn-primary">Add Category</Link>
                        </div>
                        <div className="categoy-table-form">
                            <Table columns={columns}  dataSource={category} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;