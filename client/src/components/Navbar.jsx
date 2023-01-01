import React from 'react'
// import 'bootstrap5/dist/css/bootstrap.min.css';
import "../css/Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';
import { FaRunning } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'


function Navbar() {
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <Link to="/home" className="navbar-brand ml-2">
        rent nd run <FontAwesomeIcon icon={solid('running')} style={{"color": "#7579FF"}}/>
      </Link>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/profile" >
              profile <FontAwesomeIcon icon={solid('user')} style={{"color": "#7579FF"}}/>
              <span className="sr-only">
                (current)
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/orders">
              My Shop <FontAwesomeIcon icon={solid('user')} style={{"color": "#7579FF"}}/>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/orders">
              Orders <FontAwesomeIcon icon={solid('th')} style={{"color": "#7579FF"}}/>
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary btn-outline-success-blue my-2 my-sm-0 search-btn" type="submit">Search</button>
        </form>
      </div>
  </nav>
  )
}
export default Navbar