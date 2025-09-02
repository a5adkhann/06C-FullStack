import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FetchUsersTable = () => {

  const [users, setUsers] = useState([]);

  const fetchUsers = async() => {
    try{
      const response = await axios.get("http://localhost:3000/getusers");
      console.log(response.data);
      setUsers(response.data);
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, [])


  return (
    <>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 w-[50%] mx-auto my-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((u, index) => (
            <tr>
              <th>{index+1}</th>
              <td>{u.name}</td>
              <td>{u.message}</td>
              <td>
                <button className="btn btn-soft btn-info">Edit</button>
                <button className="btn btn-soft btn-error">Delete</button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default FetchUsersTable
