import React from 'react'
// import "bootstrap5/dist/css/bootstrap.min.css";
// import "bootstrap5/dist/js/bootstrap.min.js";
import 'mdb-ui-kit/css/mdb.min.css';
import "../css/Orders.css"

function Orders() {
  return (
    <div>
      <section className="vh-100 gradient-custom-2">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-10 col-lg-8 col-xl-6">
              <div className="card card-stepper" style={{"borderRadius": "16px"}}>

                <div className="card-header p-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className="text-muted mb-2"> Order ID <span className="fw-bold text-body">1222528743</span></p>
                      <p className="text-muted mb-0"> Place On <span className="fw-bold text-body">12,March 2019</span> </p>
                    </div>
                    <div>
                      <h6 className="mb-0"> <a href="#">View Details</a> </h6>
                    </div>
                  </div>
                </div>

                <div className="card-body p-4">
                  <div className="d-flex flex-row mb-4 pb-2">
                    <div className="flex-fill">
                      <h5 className="bold">Headphones Bose 35 II</h5>
                      <p className="text-muted"> Qt: 1 item</p>
                      <h4 className="mb-3"> $ 299 <span className="small text-muted"> via (COD) </span></h4>
                      <p className="text-muted">Tracking Status on: <span className="text-body">11:30pm, Today</span></p>
                    </div>
                    <div>
                      <img 
                        className="align-self-center img-fluid" 
                        alt="mdbreact"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/6.webp" width="250"
                      />
                    </div>
                  </div>
                  <ul id="progressbar-1" className="mx-0 mt-0 mb-5 px-0 pt-0 pb-4">
                    <li className="step0 active" id="step1">
                      <span style={{"marginLeft": "22px", "marginTop": "12px"}}>PLACED</span></li>
                    <li className="step0 active text-center" id="step2"><span>SHIPPED</span></li>
                    <li className="step0 text-muted text-end" id="step3"><span
                        style={{"marginRight": "22px"}}>DELIVERED</span></li>
                  </ul>
                </div>

                <div className="card-footer p-4">
                  <div className="d-flex justify-content-between">
                    <h5 className="fw-normal mb-0"><a href="#!">Track</a></h5>
                    <div className="border-start h-100"></div>
                    <h5 className="fw-normal mb-0"><a href="#!">Cancel</a></h5>
                    <div className="border-start h-100"></div>
                    <h5 className="fw-normal mb-0"><a href="#!">Pre-pay</a></h5>
                    <div className="border-start h-100"></div>
                    <h5 className="fw-normal mb-0"><a href="#!" className="text-muted"><i className="fas fa-ellipsis-v"></i></a>
                    </h5>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Orders
