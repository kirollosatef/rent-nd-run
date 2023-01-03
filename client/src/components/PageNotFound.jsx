import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/PageNotFound.css"

function PageNotFound() {
  const Navigate = useNavigate();

  return (
    <>
      <div id="background"></div>
      <div className="top">
        <h1 className="h1-notFound">404</h1>
        <h3 className="h3-notFound">page not found</h3>
        </div>
        <div className="container-notFound">
          <div className="ghost-copy">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
            <div className="four"></div>
          </div>
          <div className="ghost">
            <div className="face">
              <div className="eye"></div>
              <div className="eye-right"></div>
              <div className="mouth"></div>
            </div>
          </div>
        <div className="shadow"></div>
      </div>
      <div className="bottom-notFound">
        <h4>Boo, looks like a ghost rent and run with this page!</h4>
        <div className="buttons">
          <button className="btn-notFound" onClick={() => Navigate(-1)}>Back</button>
          <button className="btn-notFound" onClick={() => Navigate('/home')}>Home</button>
        </div>
      </div>
    </>
  )
}

export default PageNotFound;
