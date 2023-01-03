import React from 'react'
import Navbar from './Navbar'
import { Routes , Route } from 'react-router-dom'
import HomePage from './HomePage'
import Profile from './Profile'
import Card from './Card'
import Orders from './Orders'
import LogIn from './LogIn'
import PageNotFound from './PageNotFound'


function Home() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/profile" element={<Profile/>} />
        {/* <Route path={`profile/${userID}`} element={<Profile/>} /> */}
        <Route path="/card" element={<Card/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </div>
  )
}

export default Home
