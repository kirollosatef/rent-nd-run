import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/Profile.css'
import  { Link } from 'react-router-dom'
import  {BsFacebook} from 'react-icons/bs'
import  {BsMessenger} from 'react-icons/bs'
import  {AiFillInstagram} from 'react-icons/ai'
import  {BsYoutube} from 'react-icons/bs'
import  {IoLogoWhatsapp} from 'react-icons/io'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function Profile() {
  return (
  <div className='container'>
    <div class="row py-5 px-4">
      <div class="col-md-12">
          {/* <!-- Profile widget --> */}
        <div class="bg-white shadow rounded overflow-hidden w-500">
          <div class="px-4 pt-0 pb-4 cover">
              <div class="media align-items-end profile-head">
                  <div class="profile mr-3">
                  <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="..." width="130" class="rounded mb-2 img-thumbnail"/>
                  <Link to="editProfile" class="btn btn-outline-dark btn-sm btn-block">
                    Edit profile
                  </Link>
                  </div>
                  <div class="media-body mb-5 text-white">
                      <h4 class="mt-0 mb-0">Mark Williams</h4>
                      <p class="small mb-4"> <i class="fas fa-map-marker-alt mr-2"></i>New York</p>
                  </div>
              </div>
          </div>
          <div class="bg-light p-4 d-flex justify-content-end text-center">
              <ul class="list-inline mb-0">
                  <li class="list-inline-item">
                      <h5 class="font-weight-bold mb-0 d-block">215</h5><small class="text-muted"> <i
              class="fas fa-image mr-1"></i>rent products</small>
                  </li>
                  <li class="list-inline-item">
                      <h5 class="font-weight-bold mb-0 d-block">745</h5><small class="text-muted"> <i
              class="fas fa-user mr-1"></i>sell products</small>
                  </li>
                  <li class="list-inline-item">
                      <h5 class="font-weight-bold mb-0 d-block">340</h5><small class="text-muted"> <i
              class="fas fa-user mr-1"></i>numbers of products</small>
                  </li>
              </ul>
          </div>
          <div class="px-4 py-3">
              <h5 class="mb-0">About</h5>
              <div class="p-4 rounded shadow-sm bg-light">
                  <p class="font-italic mb-0">Web Developer</p>
                  <p class="font-italic mb-0">Lives in New York</p>
                  <p class="font-italic mb-0">Photographer</p>
              </div>
          </div>
          <div class="py-4 px-4">
              <div class="d-flex align-items-center justify-content-between mb-3">
                  <h5 class="mb-0">Recent products</h5>
                  <Link to="/products" class="btn btn-link text-muted">
                    Show all
                  </Link>
              </div>
              <div class="row">
                  <div class="col-lg-6 mb-2 pr-lg-1">
                    <img src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" class="img-fluid rounded shadow-sm"/>
                    </div>
                  <div class="col-lg-6 mb-2 pl-lg-1">
                    <img src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" class="img-fluid rounded shadow-sm"/>
                    </div>
                  <div class="col-lg-6 pr-lg-1 mb-2">
                    <img src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" class="img-fluid rounded shadow-sm"/>
                  </div>
                  <div class="col-lg-6 pl-lg-1">
                    <img src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" class="img-fluid rounded shadow-sm"/>
                    </div>
              </div>
          <div class="px-4 py-3">
              <h5 class="mb-0">About</h5>
              <div class="p-4 rounded shadow-sm bg-light">
                {/* <FontAwesomeIcon icon={solid("facebook-square")} /> */}
                <BsFacebook className='ml-2 h2'/>
                <BsMessenger className='ml-2 h2'/>
                <AiFillInstagram className='ml-2 h2'/>
                <BsYoutube className='ml-2 h2'/>
                <IoLogoWhatsapp className='ml-2 h2'/>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Profile
