import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import  {axiosClient} from "../services/api/axios.js"
import {UserContext, UseUserContext} from "../Context/Back/AuthContext.jsx";
// import axios from 'axios';
const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors,setErrors] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const {login,authenticated,setAuthenticated,setToken} = UseUserContext();

	useEffect(() => {
		if (authenticated) {
			navigate("/admin")
		}
	}, []);
	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	}
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	}
	const handleSubmit =  async  (event) => {
		event.preventDefault();
		setIsLoading(true);
		await login(email,password).then((value)=>{
			if (value.status === 200) {
				setAuthenticated(true);
				setToken(value.data.token);
				// console.log(value.data.token);
				navigate("/admin");
			}
			setIsLoading(false);
		}).catch(({response}) => {
			console.log(response.data)
			setIsLoading(false);
		})

	}
  return (
    <section className="ftco-section">
		<div className="container">
		
			<div className="row justify-content-center">
				<div className="col-md-12 col-lg-10">
					<div className="wrap d-md-flex">
						<div className="img">
			      </div>
				<div className="login-wrap p-4 p-md-5">
			      	<div className="d-flex">
			      		<div className="w-100">
			      			<h3 className="mb-4">LOGIN</h3>
			      		</div>
							<div className="w-100">
									<p className="social-media d-flex justify-content-end">
										<a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook"></span></a>
										<a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-twitter"></span></a>
									</p>
							</div>
			      	</div>
					{errors.message &&
						<div style={{
							color: "red",
							width: "100%",
							textAlign: "center",
							fontWeight: "400"
						}}>{errors.message}</div>
					}
					<form onSubmit={handleSubmit} className="signin-form">
			      		<div className="form-group mb-3">
			      			<label className="label" htmlFor="name">Email</label>
							<input
								type="text"
								className="form-control"
								placeholder="Email Address"
								id="email"
								onChange={handleEmailChange}
								value={email}
								name="email"
							/>
							{errors.email &&<span style={{
								color: "red",
								display: "block",
								marginTop: "5px",
							}} className="span-error">{errors.email[0]}</span>}
			      		</div>
		            <div className="form-group mb-3">
		            	<label className="label" htmlFor="password">Password</label>
						<input
							type="password"
							placeholder="Password"
							id="pass"
							onChange={handlePasswordChange}
							value={password}
							className="form-control"
							name="password"
						/>
						{errors.password &&<span style={{
							color: "red",
							display: "block",
							marginTop: "5px",
						}} className="span-error">{errors.password[0]}</span>}
		            </div>
		            <div className="form-group">
		            	<button disabled={isLoading} className="form-control btn btn-primary rounded submit px-3">
							{isLoading ? "Loading..." : "Sign In"}
						</button>
		            </div>
                <div className="form-group d-md-flex mt-3">
		            	<div className="w-50 text-left"></div>
						<div style={ {"textAlign": "end"} } className="w-50 text-md-right">
							<Link to="#">Forgot Password</Link>
						</div>
		            </div>
		          </form>
		          
		        </div>
		      </div>
				</div>
			</div>
		</div>
	</section>
  );
};

export default Login;
