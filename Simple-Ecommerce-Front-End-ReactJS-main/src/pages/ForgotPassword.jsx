import React from 'react'
import CustomInput from "../components/CustomInput.jsx";

const ForgotPassword = () => {
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
                      <h3 style={{"margin":"0"}} className="text-center mb-2 title"> Forgot Password</h3>
                      <p className="text-center"> Please Enter your register email to get reset password mail.</p>
                    </div>
                  </div>
                  <form action="#" className="signin-form">
                    <div className="form-group mb-3">
                        <label className="label mb-2" htmlFor="email">Email Address : </label>
                        <CustomInput type="password" label="Email Address" id="email" />
                     </div>
                    <div className="form-group">
                      <button type="submit" className="form-control btn btn-primary rounded submit px-3"> Send Link</button>
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

export default ForgotPassword
