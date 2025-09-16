import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FetchUsers from './pages/FetchUsers'
import AddUser from './pages/AddUser'
import AppLayout from './AppLayout'
import Register from './pages/Register'
import Login from './pages/Login'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<FetchUsers />}></Route>
            <Route path="/adduser" element={<AddUser />}></Route>
          </Route>


          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
