import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/SingUp_LogIn.css'
import "../css/Utils.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon} from '@fortawesome/fontawesome-svg-core/import.macro'

function LogIN() {
	const Navigate = useNavigate();
  return (
    <div>
      <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form">
					<span id="rentNrun">
						Rent Nd Run
					</span>

					<span className="login100-form-title p-b-34 p-t-27">
						Log in
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Enter username" style={{"background": "linear-gradient(top, '#7579ff', '#b224ef')"}}>
						<input className="input100" type="text" name="username" placeholder="Username"/>
						<span>
						<FontAwesomeIcon icon={solid('user')} style={{color: "white"}} className="focus-input100"/>
						</span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="Enter password">
						<input className="input100" type="password" name="pass" placeholder="Password"/>
						<FontAwesomeIcon icon={solid('lock')} style={{color: "white"}} className="focus-input100"/>
					</div>

					<div className="contact100-form-checkbox">
						<input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
						<label className="label-checkbox100" htmlFor="ckb1">
							Remember me
						</label>
					</div>

					<div className="container-login100-form-btn">
						<button 
							className="login100-form-btn"
							onClick={() => Navigate('/home') }
						>
							Login
						</button>
					</div>

					<div className="signforget p-t-90">
						<Link className="links" to="/forgatPassword">
							Forgot Password?
						</Link>
            <a className="links" href="./1index.html"> 
              Sign Up
            </a>
					</div>
				</form>
			</div>
		</div>
	</div>
    </div>
  )
}

export default LogIN
