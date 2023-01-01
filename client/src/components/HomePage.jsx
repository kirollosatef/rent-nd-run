import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "../css/HomePage.css"
import { MdRunCircle } from "react-icons/md"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon} from '@fortawesome/fontawesome-svg-core/import.macro'

function HomePage() {
  return (
  <div className="wrapper">

    <div className="d-md-flex align-items-md-center">
        <div className="h3">Fruits and vegetables</div>
        <div className="ml-auto  d-flex align-items-center views gap-2">
          <div className='d-flex gap-3'>
            <span className="btn btn-black"> 
              <FontAwesomeIcon icon={solid('basket-shopping')} className="px-md-2 px-1" />
              <span>sell products</span> 
            </span> 
            <span className="btn btn-black"> 
              <FontAwesomeIcon icon={solid('running')} className="px-md-2 px-1" />
              <span className="px-md-2 px-1">rent products</span> 
            </span> 
          </div>
          <div>
            <span className="green-label px-md-2 px-1">1</span> 
            <span className="text-muted">Products</span>
          </div>
        </div>
    </div>

    <div className="d-lg-flex align-items-lg-center pt-2">
      <div className="form-inline d-flex align-items-center my-2 mr-lg-2 radio bg-regular border"> 
        <label className="options">Most Popular 
          <input type="radio" name="radio"/> 
          <span className="checkmark"></span> 
        </label> <label className="options">Cheapest 
          <input type="radio" name="radio" checked/> 
          <span className="checkmark"></span> 
        </label> 
      </div>

      <div className="form-inline d-flex align-items-center my-2 checkbox bg-regular border mx-lg-2"> 
        <label className="tick">Farm 
          <input type="checkbox" checked="checked"/> 
          <span className="check"></span> 
        </label> 
        <span className="text-success px-2 count"> 328</span> 
      </div>

      <div className="form-inline d-flex align-items-center my-2 checkbox bg-regular border mx-lg-2"> 
        <label className="tick">Bio 
          <input type="checkbox"/> 
          <span className="check"></span> 
        </label> 
        <span className="text-success px-2 count"> 72</span> 
      </div>

      <div className="form-inline d-flex align-items-center my-2 checkbox bg-regular border mx-lg-2"> 
        <label className="tick">Czech republic 
          <input type="checkbox"/>
          <span className="check"></span> 
        </label> 
        <span className="border px-1 mx-2 mr-3 font-weight-bold count"> 12</span> 
        <select name="country" id="country" className="bg-regular">
            <option value="" hidden>Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Uk">UK</option>
        </select> 
      </div>
    </div>

    <div className="d-sm-flex align-items-sm-center pt-2 clear">
      <div className="text-muted filter-label">Applied Filters:</div>
      <div className="green-label font-weight-bold p-0 px-1 mx-sm-1 mx-0 my-sm-0 my-2">
        Selected Filters 
        <span className=" px-1 close">&times;</span> 
      </div>
      <div className="green-label font-weight-bold p-0 px-1 mx-sm-1 mx-0">
        Selected Filters 
        <span className=" px-1 close">&times;</span> 
      </div>
    </div>

    <div className="filters">
      <button className="btn btn-success" type="button" data-toggle="collapse" data-target="#mobile-filter" aria-expanded="true" aria-controls="mobile-filter">
        Filter
        <span className="px-1 fas fa-filter"></span>
      </button> 
    </div>

    <div id="mobile-filter">
      <div className="py-3">
        <h5 className="font-weight-bold">Categories</h5>
        <ul className="list-group">
          <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">
            vegetables 
            <span className="badge badge-primary badge-pill">328</span> 
          </li>
          <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"> 
            Fruits 
            <span className="badge badge-primary badge-pill">112</span> 
          </li>
          <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"> 
            Kitchen Accessories
            <span className="badge badge-primary badge-pill">32</span> 
          </li>
          <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"> 
            Chefs Tips 
            <span className="badge badge-primary badge-pill">48</span> 
          </li>
        </ul>
      </div>

      <div className="py-3">
          <h5 className="font-weight-bold">Brands</h5>
          <form className="brand">
              <div className="form-inline d-flex align-items-center py-1"> 
                <label className="tick">
                  Royal Fields 
                  <input type="checkbox"/> 
                  <span className="check"></span> 
                </label>
              </div>
              <div className="form-inline d-flex align-items-center py-1"> 
                <label className="tick">
                  Crasmas Fields 
                  <input type="checkbox" checked/> 
                  <span className="check"></span> 
                </label> 
              </div>
              <div className="form-inline d-flex align-items-center py-1"> 
                <label className="tick">
                Vegetarians Farm 
                <input type="checkbox" checked/> 
                <span className="check"></span> 
                </label> 
              </div>
              <div className="form-inline d-flex align-items-center py-1"> 
                <label className="tick">
                  Farmer Field Eve 
                  <input type="checkbox"/> 
                  <span className="check"></span> 
                </label> 
              </div>
              <div className="form-inline d-flex align-items-center py-1"> 
                <label className="tick">
                  True Farmar Steve 
                  <input type="checkbox"/> 
                  <span className="check"></span> 
                </label> 
              </div>
          </form>
      </div>
      
        <div className="py-3">
            <h5 className="font-weight-bold">Rating</h5>
            <form className="rating">
                <div className="form-inline d-flex align-items-center py-2"> 
                  <label className="tick">
                    <FontAwesomeIcon icon={solid("star")}/>
                    <FontAwesomeIcon icon={solid("star")}/>
                    <FontAwesomeIcon icon={solid("star")}/>
                    <FontAwesomeIcon icon={solid("star")}/>
                    <FontAwesomeIcon icon={solid("star")}/>
                    <input type="checkbox"/> 
                    <span className="check"></span> 
                  </label> 
                </div>

                <div className="form-inline d-flex align-items-center py-2"> 
                  <label className="tick">
                    <FontAwesomeIcon icon={solid("star")}/>
                    <FontAwesomeIcon icon={solid("star")}/>
                    <FontAwesomeIcon icon={solid("star")}/>
                    <FontAwesomeIcon icon={solid("star")}/>
                    <FontAwesomeIcon icon={regular("star")} className="text-muted" />
                    <input type="checkbox"/> 
                    <span className="check"></span> 
                  </label>
                </div>

                <div className="form-inline d-flex align-items-center py-2"> 
                  <label className="tick">
                    <FontAwesomeIcon icon={solid("star")}/>
                    <FontAwesomeIcon icon={solid("star")}/>
                    <FontAwesomeIcon icon={solid("star")}/>
                    <FontAwesomeIcon icon={regular("star")} className="text-muted" />
                    <FontAwesomeIcon icon={regular("star")} className="text-muted" />
                    <input type="checkbox"/> 
                    <span className="check"></span> 
                  </label>
                </div>

                <div className="form-inline d-flex align-items-center py-2"> 
                  <label className="tick">
                    <FontAwesomeIcon icon={solid("star")}/>
                    <FontAwesomeIcon icon={solid("star")}/>
                    <FontAwesomeIcon icon={regular("star")} className="text-muted" />
                    <FontAwesomeIcon icon={regular("star")} className="text-muted" />
                    <FontAwesomeIcon icon={regular("star")} className="text-muted" />
                    <input type="checkbox"/> 
                    <span className="check"></span>
                  </label> 
                </div>
                <div className="form-inline d-flex align-items-center py-2"> 
                  <label className="tick">
                    <FontAwesomeIcon icon={solid("star")}/>
                    <FontAwesomeIcon icon={regular("star")} className="text-muted" />
                    <FontAwesomeIcon icon={regular("star")} className="text-muted" />
                    <FontAwesomeIcon icon={regular("star")} className="text-muted" />
                    <FontAwesomeIcon icon={regular("star")} className="text-muted" />
                    <input type="checkbox"/> 
                    <span className="check"></span> 
                  </label> 
                </div>
            </form>
        </div>
    </div>

    <div className="content py-md-0 py-3">
      <section id="sidebar">
          <div className="py-3">
              <h5 className="font-weight-bold">Categories</h5>
              <ul className="list-group">
                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">
                  vegetables 
                  <span className="badge badge-primary badge-pill">328</span> 
                </li>
                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">
                  Fruits 
                  <span className="badge badge-primary badge-pill">112</span> 
                </li>
                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">
                  Kitchen Accessories 
                  <span className="badge badge-primary badge-pill">32</span> 
                </li>
                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">
                  Chefs Tips 
                  <span className="badge badge-primary badge-pill">48</span> 
                </li>
              </ul>
          </div>
          <div className="py-3">
              <h5 className="font-weight-bold">Brands</h5>
              <form className="brand">
                  <div className="form-inline d-flex align-items-center py-1"> 
                  <label className="tick">
                    Royal Fields 
                    <input type="checkbox"/> 
                    <span className="check"></span> 
                  </label>
                  </div>
                  <div className="form-inline d-flex align-items-center py-1"> 
                    <label className="tick">Crasmas Fields 
                      <input type="checkbox" checked/> 
                      <span className="check"></span> 
                    </label> 
                  </div>
                  <div className="form-inline d-flex align-items-center py-1"> 
                    <label className="tick">Vegetarisma Farm 
                      <input type="checkbox" checked/> 
                      <span className="check"></span> 
                    </label> 
                  </div>
                  <div className="form-inline d-flex align-items-center py-1"> 
                    <label className="tick">Farmar Field Eve 
                      <input type="checkbox"/> 
                      <span className="check"></span> 
                    </label> 
                  </div>
                  <div className="form-inline d-flex align-items-center py-1"> 
                    <label className="tick">True Farmar Steve 
                      <input type="checkbox"/> 
                      <span className="check"></span> 
                    </label> 
                  </div>
              </form>
          </div>
          <div className="py-3">
              <h5 className="font-weight-bold">Rating</h5>
              <form className="rating">
                  <div className="form-inline d-flex align-items-center py-2"> 
                    <label className="tick">
                      <span className="fas fa-star">
                      </span> 
                      <FontAwesomeIcon icon={solid("star")} className="ml-0.5"/>
                      <FontAwesomeIcon icon={solid("star")}/>
                      <FontAwesomeIcon icon={solid("star")}/>
                      <FontAwesomeIcon icon={solid("star")}/>
                      <FontAwesomeIcon icon={solid("star")}/>
                      <input type="checkbox"/> 
                      <span className="check"></span> 
                    </label> 
                  </div>
                  <div className="form-inline d-flex align-items-center py-2"> 
                  <label className="tick">
                    <FontAwesomeIcon icon={solid("star")} className="ml-1"/>
                    <FontAwesomeIcon icon={regular("star")} className="text-muted" />
                    <FontAwesomeIcon icon={regular("star")} className="text-muted" />
                    <FontAwesomeIcon icon={regular("star")} className="text-muted" />
                    <FontAwesomeIcon icon={regular("star")} className="text-muted" />
                    <input type="checkbox"/> <span className="check"></span> 
                    </label> 
                  </div>
                  <div className="form-inline d-flex align-items-center py-2"> 
                    <label className="tick">
                      <FontAwesomeIcon icon={solid("star")} className="ml-1"/>
                      <FontAwesomeIcon icon={regular("star")} className="text-muted" />
                      <FontAwesomeIcon icon={regular("star")} className="text-muted" />
                      <input type="checkbox"/> <span className="check"></span>
                    </label> 
                  </div>
                  <div className="form-inline d-flex align-items-center py-2"> 
                    <label className="tick">
                      <FontAwesomeIcon icon={solid("star")} className="ml-1"/>
                      <FontAwesomeIcon icon={regular("star")} className="text-muted" />
                      <FontAwesomeIcon icon={regular("star")} className="text-muted" />
                      <FontAwesomeIcon icon={regular("star")} className="text-muted" />
                      <input type="checkbox"/> <span className="check"></span> 
                    </label> 
                  </div>
                  <div className="form-inline d-flex align-items-center py-2"> 
                    <label className="tick">
                      <FontAwesomeIcon icon={solid("star")} className="ml-1"/>
                      <FontAwesomeIcon icon={regular("star")} className="text-muted" />
                      <FontAwesomeIcon icon={regular("star")} className="text-muted" />
                      <FontAwesomeIcon icon={regular("star")} className="text-muted" />
                      <FontAwesomeIcon icon={regular("star")} className="text-muted" />
                      <input type="checkbox"/> 
                      <span className="check"></span> 
                    </label> 
                </div>
              </form>
          </div>
      </section> 

      <section id="products">
          <div className="container py-3">
              <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                      <div className="card" style={{padding: "10px 10px"}}> 
                      <img className="card-img-top" alt="produ" src="https://www.freepnglogos.com/uploads/cucumber-png/cucumber-png-image-purepng-transparent-png-26.png"/>
                          <div className="card-body">
                              <h6 className="font-weight-bold pt-1">Product title</h6>
                              <div className="text-muted description">Space for small product description</div>
                              
                              <div className="d-flex align-items-center gap-2 py-3">
                                  <div className="d-flex flex-column">
                                      <div className="h6 font-weight-bold" style={{fontSize: "12px"}}>36.99 USD</div>
                                      <div className="text-muted rebate" style={{textDecoration: "line-through", color: "red"}}>48.56</div>
                                  </div>
                                  <div className="btn btn-primary">Buy now</div>
                              </div>

                              <div className="d-flex align-items-center product justify-content-between"> 
                                <FontAwesomeIcon icon={solid("star")}/>
                                <FontAwesomeIcon icon={regular("star")} className="text-muted" /> 
                                <FontAwesomeIcon icon={regular("star")} className="text-muted" /> 
                                <FontAwesomeIcon icon={regular("star")} className="text-muted" /> 
                                <FontAwesomeIcon icon={regular("star")} className="text-muted" /> 
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

    </div>

  </div>
  )
}

export default HomePage
