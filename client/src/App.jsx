import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import FetchUsers from './pages/FetchUsers'
import AddUser from './pages/AddUser'
import AppLayout from './AppLayout'
import Register from './pages/Register'
import Login from './pages/Login'
import { useState } from 'react'

const App = () => {

  const [logged, setLogged] = useState(localStorage.getItem("user") || "");

  const loginUser = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    setLogged(data);
  }

  const logoutUser = () => {
    localStorage.removeItem("user");
    setLogged(""); 
  }


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ logged ? <AppLayout logoutUser = {logoutUser}/> : <Navigate to="/login"/>}>
            <Route path="/" element={<FetchUsers />}></Route>
            <Route path="/adduser" element={<AddUser />}></Route>
          </Route>


          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login loginUser={loginUser} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
