import React, {useState} from 'react';
import {Link, useNavigate,} from "react-router-dom";
import ProductApi from "../../services/api/ProductApi.jsx";
import CategoriesApi from "../../services/api/Categories.jsx";

function Category() {
    const [category,setCategory] = useState("");
    const navigate = useNavigate();
    const  handleCategorySubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('category_name', category);

        await CategoriesApi.getCsrfToken();
        await CategoriesApi.storeCategory(formData).then( () => {
            navigate("/admin/categories");
        } ).catch((e) => {
            console.log(e);
        })

    }

    return (
        <div className="logo-page  flex-grow-1 container-p-y">
            <h4 className="py-3 mb-2"><span className="text-muted fw-light">Dashboard / </span> <span className="text-muted fw-light"> Categories / </span>Add Category</h4>
            <div className="row">
                <div className="col-lg-12 col-xl-12 mb-4 col-lg-12 col-12">
                    <div className="card">
                        <div className="header-table mt-4">
                            <h5 className="card-header"></h5>
                            <Link to="/admin/categories/" className="btn btn-primary">Views All Categories</Link>
                        </div>

                            <div className="logo-form">
                                <form onSubmit={handleCategorySubmit} className="form-horizontal row">
                                    <div className="form-group row mb-4">
                                        <label className="col-lg-2 control-label">Category Name *</label>
                                        <div className="col-lg-4">
                                                <input type="text"
                                                       onChange={(e) => setCategory(e.target.value)}
                                                       className="form-control" name="category_name" />
                                        </div>

                                    </div>

                                    <div className="form-group row">

                                        <label className="col-lg-2 control-label"></label>

                                        <div className="col-lg-6">
                                            <button className="btn btn-primary mt-3 mb-3">Submit</button>
                                        </div>

                                    </div>

                                </form>
                            </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;