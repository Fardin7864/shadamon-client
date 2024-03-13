"use client"
import React, { useEffect, useState } from "react";

const UsersTable = () => {
const [users, setUsers] = useState();
useEffect(() => { 
  fetch("http://localhost:8000/api/v1/users/users").then(res => res.json()).then(data => setUsers(data.data))
  // console.log(users)
 },[])
//  console.log(users)
  // Uncommenting the line below would log each user to the console
  // users.map(user => console.log(user))

  return (
    <>
      {users?.map((user) => 
        <tr key={user._id}>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <td>
            <p>{user._id}</p>
          </td>
          <td>{user.username}</td>
          <td>User</td>
          <td>Test address</td>
          <td>{user.createdAt}</td>
          <td>Active</td>
          <td>3.5</td>
          <td>Normal</td>
          <th>
            <button className="btn btn-ghost btn-xs">Edit</button>
            <button className="btn btn-ghost btn-xs text-red-600">
              Delete
            </button>
          </th>
        </tr>
      )}
    </>
  );
};

export default UsersTable;
