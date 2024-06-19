import React from 'react';

function Color() {
    return (
        <div className="logo-page  flex-grow-1 container-p-y">
            <h4 className="py-3 mb-2"><span className="text-muted fw-light">Settings / </span> Color</h4>
            <div className="row">
                <div className="col-lg-12 col-xl-12 mb-4 col-lg-12 col-12">
                    <div className="card">
                        <h5 className="card-header"> COLOR</h5>
                        <div className="logo-form">
                            <form className="form-horizontal row">

                                <div className="form-group row ">

                                    <label className="col-lg-2 control-label">Theme Color : </label>

                                    <div className="col-lg-6">
                                        <input
                                            style={{
                                                border: "0",
                                                padding: "0px 0px",
                                                height: "34px"
                                            }}
                                            type="color" className="form-control" name="color" />
                                    </div>

                                </div>
                                <div className="form-group row">

                                    <label className="col-lg-2 control-label"></label>

                                    <div className="col-lg-6">
                                        <button className="btn btn-primary mt-3 mb-3">Update Color</button>
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

export default Color;