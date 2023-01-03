import React, { useState } from "react";
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

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send a POST request to the API with the form data
    fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        phone,
        password,
        confirmPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // If the request is successful, redirect to the /home endpoint
      });
  };

  return (
    <div className="limiter">
      <div
        className="container-login100"
        style={{ backgroundImage: "url('images/bg-01.jpg')" }}
      >
        <div className="wrap-login100">
          <form className="login100-form validate-form" onSubmit={handleSubmit}>
            <span id="rentNrun"> Rent Nd Run </span>
            <span className="login100-form-title p-b-34 p-t-27"> Sign Up </span>
            <div
              className="wrap-input100 validate-input"
              data-validate="Enter username"
            >
              <input
                className="input100"
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              <span
                className="focus-input100"
                data-placeholder="&#xf207;"
              ></span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Enter email"
            >
              <input
                className="input100"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <span
                className="focus-input100"
                data-placeholder="&#xf207;"
              ></span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Enter Phone"
            >
              <input
                className="input100"
                type="number"
                name="phone"
                placeholder="Phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
              <span
                className="focus-input100"
                data-placeholder="&#xf2c9;"
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
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <span
                className="focus-input100"
                data-placeholder="&#xf191;"
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
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
              <span
                className="focus-input100"
                data-placeholder="&#xf191;"
              ></span>
            </div>
            <div className="container-login100-form-btn">
              <button className="login100-form-btn">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
