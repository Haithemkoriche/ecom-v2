import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";


function CustomerDashboard() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!window.localStorage.getItem("token")) {
            navigate("/SignIn");
        } else  {
            setIsLoading(false);
        }
    }, []);

    if (isLoading) {
        return "Loading Content";
    }

    return (
        <div>
            CustomerDashboard
        </div>
    );
}

export default CustomerDashboard;