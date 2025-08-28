import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FetchUsers from './pages/FetchUsers'
import AddUser from './pages/AddUser'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<FetchUsers />}></Route>
          <Route path="/adduser" element={<AddUser />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
