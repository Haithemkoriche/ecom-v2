import React from 'react';
import {Link} from "react-router-dom";

function Cancel() {
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
                    <i style={{color :"red"}} className="checkmark">X</i>
                </div>
                <h1>Order Canceled</h1>
                <p>We received your purchase request;<br/> well be in touch shortly!</p>
                <Link to={"/"} className="btn btn-primary mt-3">Home</Link>
            </div>
        </div>
    );
}

export default Cancel;