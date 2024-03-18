"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [render, setRender] = useState(1);
  const [editUserId, setEditUserId] = useState(null);
  const [editedUser, setEditedUser] = useState({
    username: "",
    category: "",
    location: "",
    createdDate: "",
    status: "",
    rating: "",
    editBy: ""
  });

  useEffect(() => {
    const loader = async () => {
      try {
        const res = await axios.get("https://shadamon-m-server.vercel.app/api/v1/users");
        setUsers(res.data?.data);
      } catch (error) {
        console.error("Error loading users:", error);
      }
    };
    loader();
  }, [render]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://shadamon-m-server.vercel.app/api/v1/users/delete/${id}`);
      setRender(render + 1);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleUpdate = async (id) => {
    setEditUserId(id);
    try {
      const updateUser = await axios.get(`https://shadamon-m-server.vercel.app/api/v1/users?id=${id}`);
      const userData = updateUser.data?.data[0];
      setEditedUser({
        username: userData.username,
        category: userData.category,
        location: userData.location,
        createdDate: userData.createdDate,
        status: userData.status,
        rating: userData.rating,
        editBy: "Admin"
      });
    } catch (error) {
      console.error("Error fetching user data for editing:", error);
    }
  };

  const handleSaveUpdate = async (id) => { 
    try {
      await axios.patch(`https://shadamon-m-server.vercel.app/api/v1/users/update/${id}`, editedUser);
      setEditUserId(null);
      setRender(render + 1);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  return (
    <>
      {users.map((user) => (
        <tr key={user._id}>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <td>
            <p>{user._id}</p>
          </td>
          <td>
            {editUserId === user._id ? (
              <input name="username" type="text" value={editedUser.username} onChange={handleChange} className="border p-2" />
            ) : (
              <p>{user.username}</p>
            )}
          </td>
          <td>
            {editUserId === user._id ? (
              <input name="category" type="text" value={editedUser.category} onChange={handleChange} className="border p-2" />
            ) : (
              <p>{user.category}</p>
            )}
          </td>
          <td>
            {editUserId === user._id ? (
              <input name="location" type="text" value={editedUser.location} onChange={handleChange} className="border p-2" />
            ) : (
              <p>{user.location}</p>
            )}
          </td>
          <td>
            {editUserId === user._id ? (
              <input name="createdDate" type="text" value={editedUser.createdDate} onChange={handleChange} className="border p-2" />
            ) : (
              <p>{user.createdDate}</p>
            )}
          </td>
          <td>
            {editUserId === user._id ? (
              <input name="status" type="text" value={editedUser.status} onChange={handleChange} className="border p-2" />
            ) : (
              <p>{user.status}</p>
            )}
          </td>
          <td>
            {editUserId === user._id ? (
              <input name="rating" type="text" value={editedUser.rating} onChange={handleChange} className="border p-2" />
            ) : (
              <p>{user.rating}</p>
            )}
          </td>
          <td>
            {editUserId === user._id ? (
              <input name="editBy" type="text" value={editedUser.editBy} onChange={handleChange} className="border p-2" />
            ) : (
              <p>{user.editBy}</p>
            )}
          </td>
          <th>
            {editUserId === user._id ? (
              <button onClick={() => handleSaveUpdate(user._id)} className="btn btn-ghost btn-xs">Save</button>
            ) : (
              <button onClick={() => handleUpdate(user._id)} className="btn btn-ghost btn-xs">Edit</button>
            )}
            <button onClick={() => handleDelete(user._id)} className="btn btn-ghost btn-xs text-red-600">Delete</button>
          </th>
        </tr>
      ))}
    </>
  );
};

export default UsersTable;
