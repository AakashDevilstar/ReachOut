import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import SignUpPage from './SignUpPage'
import HomePage from './HomePage'
import ProfilePage from './ProfilePage'
import MyProfilePage from './MyProfilePage'
import AboutUs from './AboutUs'
import AboutProject from './AboutProject'

function Pages() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<HomePage/>} />
            <Route path = '/signup' element = {<SignUpPage/>} />
            <Route path = '/profile' element = {<ProfilePage/>} />
            <Route path = '/myProfile' element = {<MyProfilePage/>} />
            <Route path = '/profile/:profile' element = {<ProfilePage />} />
            <Route path = '/aboutUs' element = {<AboutUs />} />
            <Route path = '/aboutProject' element = {<AboutProject />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Pages