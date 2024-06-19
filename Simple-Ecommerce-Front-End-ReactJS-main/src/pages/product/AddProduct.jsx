import React, {useEffect, useState} from 'react';
// import ReactQuill from 'react-quill';
import {Link, useNavigate} from "react-router-dom";
import {Select} from "antd";
import ReactQuill, {Quill} from "react-quill";
// import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react';
// import 'react-quill/dist/quill.snow.css';
import ProductApi from "../../services/api/ProductApi.jsx";
import categories from "../../services/api/Categories.jsx";
const { Option } = Select;
Quill.register('modules/imageResize', ImageResize);

function Product() {
    const navigate = useNavigate();
    const [files, setFiles] = useState([]);
    const [allCategories, setAllCategories] = useState([]);
    const [value,setValue] = useState('');
    const modules = {
        toolbar: [
            [{ header: '1' }, { header: '2' }, { font: [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [
                { list: 'ordered' },
                { list: 'bullet' },
                { indent: '-1' },
                { indent: '+1' }
            ],
            ['link', 'image', 'video'],
            ['clean']
        ],
        clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: false
        },
        imageResize: {
            parchment: Quill.import('parchment'),
            modules: ['Resize', 'DisplaySize']
        }
    };

    const fetchAllCategories = async () => {

        await categories.getCategoris().then( (value) => {
            setAllCategories(
                value.data.categories.map( row => ({
                    value: row.id,
                    label: row.category_name,
                }) )
            );
            // setCategory( );
        } ).catch((e) => {
            console.log(e);
        })

    }

    useEffect(() => {
        fetchAllCategories();
    },[]);

    const formats = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'video'
    ];
    /* start states for Product Form*/
    const [category,setCategory] = useState("");
    const [productName,setProductName] = useState("");
    const [oldPrice, setOldPrice] = useState("");
    const [currentPrice,setCurrentPrice] = useState("");
    const [qty,setQty] = useState("");
    const [mainImage,setMainImage] = useState(null);
    const [othersImages,setOthersImages] = useState([]);
    const [sizes,setSizes] = useState([]);
    const [colors,setColors] = useState([]);
    const [description,setDescription] = useState("");
    const [shortdescription,setShortDescription] = useState("");
    const [isactive,setIsActive] = useState("YES");
    /* end states for Product Form*/
    const handleContentChange = (Descriptionvalue) => {
        setValue(Descriptionvalue);
        setDescription(Descriptionvalue);
    }

    // Function to handle adding a new file input
    const addFileInput = () => {
        setFiles([...files, null]);
    };
    // Function to handle removing a file input
    const removeFileInput = (index) => {
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);
        setOthersImages(updatedFiles);
    };

    // Function to handle updating file in state
    const handleFileChange = (file, index) => {
        const updatedFiles = [...files];
        updatedFiles[index] = file;
        setFiles(updatedFiles);
        setOthersImages(updatedFiles);
    };
    const handleChangeSize = (value) => {
        setSizes(value);
    };
    const handleChangeColor = (value) => {
        setColors(value);
    };
    const onChangeCategories = (value) => {
        setCategory(value);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };
    const handleProductSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('category', category);
        formData.append('ProductName', productName);
        formData.append('oldPrice', oldPrice);
        formData.append('currentPrice', currentPrice);
        formData.append('qty', qty);
        formData.append('mainImage', mainImage);
        for (let i = 0; i < othersImages.length; i++) {
            formData.append('files[]', othersImages[i]);
        }
        for (let i = 0; i < sizes.length; i++) {
            formData.append('sizes[]', sizes[i]);
        }
        for (let i = 0; i < colors.length; i++) {
            formData.append('colors[]', colors[i]);
        }
        formData.append('description',description);
        formData.append('shortdescription',shortdescription );
        formData.append('isActive',isactive );

        console.log(category);
        await ProductApi.getCsrfToken();
        await ProductApi.storeProduct(formData).then( (value) => {
            navigate("/admin/product");
        } ).catch((e) => {
            console.log(e);
        })

        // await ProductApi.getProducts().then((value) => {
        //     console.log(value);
        // }).catch((e) => {
        //     console.log(e);
        // })


    }
    return (
        <div className="logo-page  flex-grow-1 container-p-y">
            <h4 className="py-3 mb-2"><span className="text-muted fw-light">Dashboard / </span> Products</h4>
            <div className="row">
                <div className="col-lg-12 col-xl-12 mb-4 col-lg-12 col-12">
                    <div className="card">
                        <div className="header-table mt-4">
                            <h5 className="card-header"></h5>
                            <Link to={"/admin/product/"} className="btn btn-primary">Views All Products</Link>
                        </div>
                        <div className="logo-form">
                            <form onSubmit={handleProductSubmit} encType="multipart/form-data" className="form-horizontal row">
                                <div className="form-group row mb-4">
                                    <label className="col-lg-2 control-label">Category Name *</label>
                                    <div className="col-lg-4">
                                        <Select
                                            style={{
                                                width: '100%',
                                            }}
                                            showSearch
                                            placeholder="Select a person"
                                            optionFilterProp="children"
                                            onChange={onChangeCategories}
                                            onSearch={onSearch}
                                            filterOption={(input, option) =>
                                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                            }
                                            options={
                                              allCategories
                                            }


                                        />

                                    </div>

                                </div>
                                <div className="form-group row mb-4">
                                    <label className="col-lg-2 control-label">Product Name *</label>
                                    <div className="col-lg-4">
                                        <input type="text" className={"form-control"}
                                               onChange={(e) => setProductName(e.target.value)}
                                               name="product-name" />
                                    </div>

                                </div>
                                <div className="form-group row mb-4">
                                    <label className="col-lg-2 control-label">Old Price (In USD) *</label>
                                    <div className="col-lg-4">
                                        <input type="text"
                                               className="form-control"
                                               onChange={(e) => setOldPrice(e.target.value)}
                                               name="old-price" />
                                    </div>

                                </div>
                                <div className="form-group row mb-4">
                                    <label className="col-lg-2 control-label">Current Price * (In USD)</label>
                                    <div className="col-lg-4">
                                        <input type="text" className="form-control"
                                               onChange={(e) => setCurrentPrice(e.target.value)}
                                               name={"current-price"} />
                                    </div>

                                </div>
                                <div className="form-group row mb-4">
                                    <label className="col-lg-2 control-label">Quantity *</label>
                                    <div className="col-lg-4">
                                        <input type="text"
                                               onChange={ (e) => setQty(e.target.value) }
                                               className={"form-control"} name={"product-name"} />
                                    </div>

                                </div>
                                <div className="form-group row mb-4">
                                    <label className="col-lg-2 control-label">Select Size *</label>
                                    <div className="col-lg-4">
                                        <Select
                                            mode="multiple"
                                            style={{
                                                width: '100%',
                                            }}
                                            placeholder="select one Sizes"
                                            onChange={handleChangeSize}
                                            optionLabelProp="label"
                                        >
                                            <Option value="xl" label="XL">
                                                <div className="demo-option-label-item">
                                                    XL
                                                </div>
                                            </Option>
                                            <Option value="m" label="M">
                                                <div className="demo-option-label-item">
                                                    M
                                                </div>
                                            </Option>
                                            <Option value="xxl" label="XXL">
                                                <div className="demo-option-label-item">
                                                    XXL
                                                </div>
                                            </Option>
                                            <Option value="l" label="L">
                                                <div className="demo-option-label-item">
                                                    L
                                                </div>
                                            </Option>


                                        </Select>
                                    </div>

                                </div>
                                <div className="form-group row mb-4">
                                    <label className="col-lg-2 control-label">Select Color *</label>
                                    <div className="col-lg-4">
                                        <Select
                                            mode="multiple"
                                            style={{
                                                width: '100%',
                                            }}
                                            placeholder="Select Colors"
                                            onChange={handleChangeColor}
                                            optionLabelProp="label"
                                        >
                                            <Option value="red" label="RED">
                                                <div className="demo-option-label-item">
                                                    RED
                                                </div>
                                            </Option>
                                            <Option value="blue" label="BLUE">
                                                <div className="demo-option-label-item">
                                                    BLUE
                                                </div>
                                            </Option>


                                        </Select>
                                    </div>

                                </div>
                                <div className="form-group row mb-4">
                                    <label className="col-lg-2 control-label">Featured Photo *</label>
                                    <div className="col-lg-4">
                                        <input type="file"
                                               onChange={(e)=>{setMainImage(e.target.files[0])}}
                                               name="main_image" />
                                    </div>

                                </div>

                                <div className="form-group row mb-4">
                                    <label className="col-lg-2 control-label">Other Photos  </label>
                                    <div className="col-lg-4">
                                        <div onClick={addFileInput} className="btn btn-primary mb-4"  >Add Item</div>
                                        {files.map((file, index) => (
                                            <div  style={{display: "flex",alignItems: "center"}} className="mb-2 photo-item" key={index}>
                                                <input
                                                    type="file"
                                                    onChange={(e) => handleFileChange(e.target.files[0], index)}
                                                />
                                                <div className="remove-item" onClick={() => removeFileInput(index)}>Remove</div>
                                            </div>
                                        ))}
                                    </div>

                                </div>

                                <div className="form-group row mb-4">
                                    <label className="col-lg-2 control-label">Description</label>
                                    <div className="col-lg-8">
                                        <ReactQuill
                                            style={{height: "auto",marginBottom: "2rem"}}
                                            theme="snow"
                                            formats={formats}
                                            modules={modules}
                                            value={value}
                                            onChange={handleContentChange}
                                        />
                                    </div>

                                </div>

                                <div className="form-group row mb-4">
                                    <label className="col-lg-2 control-label">Short Description</label>
                                    <div className="col-lg-8">
                                        <textarea className="form-control"
                                                  onChange={ (e) => setShortDescription(e.target.value) }
                                                  cols="8" rows="8" name="short-description" ></textarea>
                                    </div>

                                </div>
                                <div className="form-group row mb-4">
                                    <label className="col-lg-2 control-label">Is Active?</label>
                                    <div className="col-lg-1">
                                         <select onChange={ (e) => setIsActive(e.target.value)  }
                                                 className="form-control">
                                             <option value="YES">Yes</option>
                                             <option value="NO">No</option>
                                         </select>
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

export default Product;