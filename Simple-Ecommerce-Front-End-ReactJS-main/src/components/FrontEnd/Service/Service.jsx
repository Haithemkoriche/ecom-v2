import React from 'react';
import "./Service.css";
import {AiOutlinePushpin} from "react-icons/ai";
import {FiSettings} from "react-icons/fi";
function Service() {
    return (
        <section className="we-offer-area text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="site-heading text-center">
                            <p>Our <span style={{color: "#994bc2"}}>Services</span></p>
                            <h4>Lorem Ipsum is simply dummy text</h4>
                        </div>
                    </div>
                </div>
                <div className="row our-offer-items less-carousel">
                    <div className="col-md-4 col-sm-6 equal-height">
                        <div style={{borderLeft: "2px solid #994bc2"}} className="service__item">
                            <FiSettings style={{background:"#994bc2 none repeat scroll 0 0"}} />
                            <h4>Project creation</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 equal-height">
                        <div style={{borderLeft: "2px solid #994bc2"}} className="service__item">
                            <FiSettings style={{background:"#994bc2 none repeat scroll 0 0"}} />
                            <h4>Software Development</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 equal-height">
                        <div style={{borderLeft: "2px solid #994bc2"}} className="service__item">
                            <FiSettings style={{background:"#994bc2 none repeat scroll 0 0"}} />
                            <h4>Porject Management</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 equal-height">
                        <div style={{borderLeft: "2px solid #994bc2"}} className="service__item">
                            <FiSettings style={{background:"#994bc2 none repeat scroll 0 0"}} />
                            <h4>Porject Management</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 equal-height">
                        <div style={{borderLeft: "2px solid #994bc2"}} className="service__item">
                            <FiSettings style={{background:"#994bc2 none repeat scroll 0 0"}} />
                            <h4>Porject Management</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 equal-height">
                        <div style={{borderLeft: "2px solid #994bc2"}} className="service__item">
                            <FiSettings style={{background:"#994bc2 none repeat scroll 0 0"}} />
                            <h4>Porject Management</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Service;