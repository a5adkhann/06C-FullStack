import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
const FetchUsersTable = () => {

  const [users, setUsers] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editMessage, setEditMessage] = useState("");

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/getusers");
      console.log(response.data);
      setUsers(response.data);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, [users])

  const handleEdit = (u) => {
    setEditingId(u._id);
    setEditName(u.name);
    setEditMessage(u.message);

    console.log(u._id);
  }

  const handleSave = async(id) => {
    try{
      const response = await axios.put(`http://localhost:3000/updateuser/${id}`, {
        editName,
        editMessage
      });
      console.log(response);

      setEditingId(null);

      toast.success(response.data.message);
    }
    catch(err){
      console.log(err);
    }
  } 


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
                <th>{index + 1}</th>
                <td>{
                  u._id == editingId ?
                    <input type="text" className='border border-gray-300 p-2' value={editName} onChange={(e) => setEditName(e.target.value)} />
                    :
                    u.name

                }</td>
                <td>
                  {
                    u._id == editingId ?
                      <input type="text" className='border border-gray-300 p-2' value={editMessage} onChange={(e) => setEditMessage(e.target.value)} />
                      :
                      u.message

                  }
                </td>
                <td>

                  {
                    u._id == editingId
                      ?
                      <>
                        <button className="btn btn-soft btn-accent" onClick={() => handleSave(u._id)}>Save</button>
                        <button className="btn btn-soft btn-warning" onClick={() => setEditingId(null)}>Cancel</button>
                      </>
                      :
                      <>
                        <button className="btn btn-soft btn-info" onClick={() => handleEdit(u)}>Edit</button>
                        <button className="btn btn-soft btn-error">Delete</button>
                      </>
                  }



                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Toaster
              position="top-center"
              reverseOrder={false}
            />
    </>
  )
}

export default FetchUsersTable
