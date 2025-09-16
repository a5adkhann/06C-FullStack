import React, { useState } from 'react'
import axios from 'axios'

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async(e) => {
    e.preventDefault();
    try{
      const response = await axios.post("http://localhost:3000/register", {
        name,
        email,
        password
      });
      console.log(response);
      setName("");
      setEmail("");
      setPassword("");
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <>
    <div className='flex justify-center my-44'>
    <form onSubmit={handleRegister}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Register</legend>

        <label className="label">Name</label>
        <input type="text" className="input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button className="btn btn-neutral mt-4">Register</button>
      </fieldset>
      </form>
      </div>
    </>
  )
}

export default RegisterForm
