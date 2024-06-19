import React from "react";
import  "./NewsLetter.css";
const NewsLetter  = () => {
    return (
            <div className="newsletter">
                    <h1>Get Exclusive Offers On Your Email</h1>
                    <p>Subscribe To Our NewsLetter</p>
                <div>
                    <input  type="email" placeholder="Your Email Here"  />
                    <button style={{ background: "#994bc2" }}>Subscribe</button>
                </div>
            </div>
    );
}
export default NewsLetter;