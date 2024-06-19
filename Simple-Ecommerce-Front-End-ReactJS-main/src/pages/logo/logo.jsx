import React, {useEffect, useState} from 'react';
import "./logo.css";
import LogoApi from "../../services/api/LogoApi.jsx";
import {message} from "antd";
function Logo() {
    const [image,setImage] = useState(null);
    const [currentImage,setCurrentImage] = useState(null);

    const getLogo =  async () => {
        await LogoApi.getLogo().then( (value) => {
            setCurrentImage(value.data.logo.logo)
        } ).catch((e) => {
            console.log(e);
        })
    }
    useEffect(   () => {
        getLogo();
    }, []);
    const handleLogoSubmit =  async (event) => {
        event.preventDefault();
        if (image === null ) {
            message.error("Please Select Logo")
            return ;
        }
        const formData = new FormData();
        formData.append("image", image);
        await LogoApi.getCsrfToken();
        await LogoApi.updateLogo(formData).then( (value) => {
            setCurrentImage(value.data.logo)
            setImage("")
            message.success('Logo Updated With Success');
        } ).catch((e) => {
            console.log(e);
        })

    }
    return (
        <div className="logo-page  flex-grow-1 container-p-y">
            <h4 className="py-3 mb-2"><span className="text-muted fw-light">Settings / </span> Logo</h4>
            <div className="row">
                <div className="col-lg-12 col-xl-12 mb-4 col-lg-12 col-12">
                    <div className="card">
                        <h5 className="card-header"> LOGO</h5>
                        <div className="logo-form">
                            <form onSubmit={handleLogoSubmit}  className="form-horizontal row">
                                        <div className="form-group row mb-4">
                                            <label className="col-lg-2 control-label">Existing Photo</label>
                                            <div className="col-lg-6">
                                                {currentImage &&
                                                    <img src={currentImage} style={{height: "100%"}}
                                                         alt=""/>
                                                 }
                                            </div>

                                        </div>
                                <div className="form-group row  mb-4">

                                        <label className="col-lg-2 control-label">New Photo</label>

                                        <div className="col-lg-6">
                                            <input type="file"
                                                   onChange={(e)=>{setImage(e.target.files[0])}}
                                                   name="logo" />
                                        </div>

                                    </div>
                                <div className="form-group row">

                                    <label className="col-lg-2 control-label"></label>

                                    <div className="col-lg-6">
                                         <button className="btn btn-primary mt-3 mb-3">Update Logo</button>
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

export default Logo;