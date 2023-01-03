import React from 'react'
import Navbar from './Navbar'
import { Routes , Route } from 'react-router-dom'
import HomePage from './HomePage'
import Profile from './Profile'
import Card from './Card'
import Orders from './Orders'
import LogIn from './LogIn'


function Home() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LogIn/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/card" element={<Card/>} />
        <Route path="/orders" element={<Orders/>} />
        {/* <Route path={`profile/${userID}`} element={<Profile/>} /> */}
      </Routes>
    </div>
  )
}

export default Home
