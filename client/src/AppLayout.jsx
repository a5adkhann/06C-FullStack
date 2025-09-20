import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const AppLayout = ({logoutUser}) => {
  return (
    <>
        <Navbar logoutUser ={logoutUser}/>
            <Outlet/>
        <Footer/>
    </>
  )
}

export default AppLayout
