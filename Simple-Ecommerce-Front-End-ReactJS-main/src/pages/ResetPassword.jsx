import React from 'react'
import CustomInput from "../components/CustomInput.jsx";
import {Link} from "react-router-dom";

const ResetPassword = () => {
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
                      <h3 style={{"margin":"0"}} className="text-center mb-2 title"> Reset Password</h3>
                      <p className="text-center">Please Enter your new password.</p>
                    </div>
                  </div>
                  <form action="#" className="signin-form">
                    <div className="form-group mb-3">
                      <label className="label mb-2" htmlFor="name">New Password : </label>
                      <CustomInput type="password" label="New Password" id="pass" />


                    </div>
                    <div className="form-group mb-3">
                      <label className="label mb-2" htmlFor="password">Confirm Password : </label>
                      <CustomInput
                          type="password"
                          label="Confirm Password"
                          id="confirmpass"
                      />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="form-control btn btn-primary rounded submit px-3">Reset Password</button>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ResetPassword
