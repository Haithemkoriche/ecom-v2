import React, {useState} from 'react';
import "./css/loginSignup.css"
import {axiosClient} from "../../services/api/axios.js";
import {Link, useNavigate} from "react-router-dom";
import {message} from "antd";

function LoginIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors,setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        if (email === '' || password === '') {
            message.error("Please Complete All Fields")
            setIsLoading(false)
            return ;
        }
        axiosClient.post("api/login",{email,password}).then((res)=> {
            setIsLoading(false)
            window.localStorage.setItem('token', res.data.token);
            navigate("/");

        }).catch((errors)=> {
            console.log(errors)
        })

    }
    return (
        <div className="loginsingnup">
            <div className="loginsingnup-container">
                <h1>Sign In</h1>
                <form  onSubmit={handleSubmit}>
                    <div className="loginsignup-fields">
                        <input type="email" onChange={handleEmailChange}
                               value={email} placeholder="Email Address" />
                        <input type="password" onChange={handlePasswordChange}
                               value={password} placeholder="You Password" />
                    </div>

                        <button disabled={isLoading} className="form-control">
                            {isLoading ? "Loading..." : "Sign In"}
                        </button>

                </form>
                <Link to="/SignUp" className="loginsignup-login mt-3">You Dont Have An Account? <span>SignUp Here</span></Link>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By Continuing, I Agree To The Terms Of Use & Privacy Policy.</p>
                </div>
            </div>
        </div>
    );
}

export default LoginIn;