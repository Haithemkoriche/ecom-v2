// eslint-disable-next-line no-unused-vars
import React from  "react";
import "./Footer.css";
// eslint-disable-next-line no-unused-vars
import footer_logo from "../assets/logo_big.png";
import instagram_icon from "../assets/instagram_icon.png";
import pintester_icon from "../assets/pintester_icon.png";
import whatsapp_icon from  "../assets/whatsapp_icon.png";
const  Footer = () => {
        return (
            <div className="footer-section">
                    <div className="footer-logo">
                        <p className="nav-logo-text">TechShop</p>
                    </div>
                {/* <ul className="footer-links">
                    <li>Company</li>
                    <li>Products</li>
                    <li>offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul> */}
                <div className="footer-social-icon">
                    {/* <div className="footer-icons-container">
                        <img src={instagram_icon} alt="" />
                    </div>
                    <div className="footer-icons-container">
                        <img src={pintester_icon} alt="" />
                    </div>
                    <div className="footer-icons-container">
                        <img src={whatsapp_icon} alt="" />
                    </div> */}
                </div>
                <div className="footer-copyright">
                    <hr />
                    <p style={{margin: "20px 0"}}>Copyright @2024 - All Right Reserved. Sekkoum & Bahria</p>
                </div>
            </div>
        );
}

export default Footer;