import React from 'react';
import "./success.css";
import {Link} from "react-router-dom";
function Success() {
    return (
        <div className="success">
            <div className="card">
                <div style={{
                    borderRadius: "200px",
                    height: "200px",
                    width: "200px",
                    background: "#F8FAF5",
                    margin: "0 auto"
                }}>
                    <i className="checkmark">✓</i>
                </div>
                <h1>Success</h1>
                <p>We received your purchase request;<br/> well be in touch shortly!</p>
                <Link to={"/"} className="btn btn-primary mt-3">Home</Link>
            </div>
        </div>

    );
}

export default Success;