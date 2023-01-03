import React from "react";
import "../htmlOnly/vendor/bootstrap/css/bootstrap.min.css";
import "../htmlOnly/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "../htmlOnly/fonts/iconic/css/material-design-iconic-font.min.css";
import "../htmlOnly/vendor/animate/animate.css";
import "../htmlOnly/vendor/css-hamburgers/hamburgers.min.css";
import "../htmlOnly/vendor/animsition/css/animsition.min.css";
import "../htmlOnly/vendor/select2/select2.min.css";
import "../htmlOnly/vendor/daterangepicker/daterangepicker.css";
import "../htmlOnly/css/util.css";
import "../htmlOnly/css/main.css";
import "../htmlOnly/vendor/jquery/jquery-3.2.1.min.js";

class LoginForm extends React.Component {
  render() {
    return (
      <div className="limiter">
        <div
          className="container-login100"
          style={{ backgroundImage: "url('images/bg-01.jpg')" }}
        >
          <div className="wrap-login100">
            <form className="login100-form validate-form">
              <span id="rentNrun">Rent Nd Run</span>
              <span className="login100-form-title p-b-34 p-t-27">Login</span>
              <div
                className="wrap-input100 validate-input"
                data-validate="Enter username"
              >
                <input
                  className="input100"
                  type="text"
                  name="username"
                  placeholder="Username"
                />
                <span
                  className="focus-input100"
                  data-placeholder="&#xf207;"
                ></span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Enter password"
              >
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  placeholder="Password"
                />
                <span
                  className="focus-input100"
                  data-placeholder="&#xf191;"
                ></span>
              </div>
              <div className="container-login100-form-btn">
                <button className="login100-form-btn">Sign In</button>
              </div>
              <div className="text-center p-t-90">
                <a className="txt1" href="#">
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
