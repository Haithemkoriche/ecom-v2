// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import Navbar from "./Navbar/Navbar.jsx";
import  "../../pages/FrontEnd/style.css"
import Footer from "./Footer/Footer.jsx";
import Loading from "./Loading.jsx";


function FrontLayout() {


    return (


                <div className="content-front">
                    <Navbar/>
                    <Outlet/>
                    <Footer/>
                </div>

    );
}

export default FrontLayout;