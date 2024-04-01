"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Categorytable = () => {
    const [users, setUsers] = useState([]);
    const [render, setRender] = useState(1);
    const [editUserId, setEditUserId] = useState(null);
    const [isLoading, setLoading] = useState(true)
    const [editedUser, setEditedUser] = useState({
      subcategory: "",
      category: "",
      order: "",
      entrydate: "",
      status: "",
      createdby: "",
      editBy: ""
    });
  
    useEffect(() => {
      const loader = async () => {
        try {
          const res = await axios.get("https://shadamon-m-server.vercel.app/api/v1/categorys");
          setUsers(res.data?.data);
          setLoading(false)
        } catch (error) {
          console.error("Error loading users:", error);
        }
      };
      loader();
    }, [render]);
  
    const handleDelete = async (id) => {
      const removeFeature = async () => { 
        
        try {
          await axios.delete(`https://shadamon-m-server.vercel.app/api/v1/categorys/delete/${id}`);
          setRender(render + 1);
        } catch (error) {
          console.error("Error deleting user:", error);
        }
       }

    // delete confirm swal

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        removeFeature();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error",
        });
      }
    });


    };
  
    const handleUpdate = async (id) => {
      setEditUserId(id);
      try {
        const updateUser = await axios.get(`https://shadamon-m-server.vercel.app/api/v1/categorys?id=${id}`);
        const userData = updateUser.data?.data[0];
        setEditedUser({
          subcategory: userData.subcategory,
          category: userData.category,
          order: userData.order,
          entrydate: userData.entrydate,
          status: userData.status,
          createdby: userData.createdby,
          editBy: "Admin"
        });
      } catch (error) {
        console.error("Error fetching user data for editing:", error);
      }
    };
  
    const handleSaveUpdate = async (id) => { 
      try {
        await axios.patch(`https://shadamon-m-server.vercel.app/api/v1/categorys/update/${id}`, editedUser);
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
      {isLoading ? (
        <div className="flex flex-col gap-4 ">
          <div className="skeleton h-10 w-full"></div>
          <div className="skeleton h-10 w-full"></div>
          <div className="skeleton h-10 w-full"></div>
          <div className="skeleton h-10 w-full"></div>
        </div>
      ) : (
        <>
          {users.map((user) => (
            <tr key={user._id}>
              <td>
                {editUserId === user._id ? (
                  <input
                    name="subcategory"
                    type="text"
                    value={editedUser.subcategory}
                    onChange={handleChange}
                    className="border p-2"
                  />
                ) : (
                  <p>{user.subcategory}</p>
                )}
              </td>
              <td>
                {editUserId === user._id ? (
                  <input
                    name="category"
                    type="text"
                    value={editedUser.category}
                    onChange={handleChange}
                    className="border p-2"
                  />
                ) : (
                  <p>{user.category}</p>
                )}
              </td>
              <td>
                {editUserId === user._id ? (
                  <input
                    name="order"
                    type="text"
                    value={editedUser.order}
                    onChange={handleChange}
                    className="border p-2"
                  />
                ) : (
                  <p>{user.order}</p>
                )}
              </td>
              <td>
                {editUserId === user._id ? (
                  <input
                    name="status"
                    type="text"
                    value={editedUser.status}
                    onChange={handleChange}
                    className="border p-2"
                  />
                ) : (
                  <p>{user.status}</p>
                )}
              </td>
              <td>
                {editUserId === user._id ? (
                  <input
                    name="entrydate"
                    type="text"
                    value={editedUser.entrydate}
                    onChange={handleChange}
                    className="border p-2"
                  />
                ) : (
                  <p>{user.entrydate}</p>
                )}
              </td>

              <td>
                {editUserId === user._id ? (
                  <input
                    name="createdby"
                    type="text"
                    value={editedUser.createdby}
                    onChange={handleChange}
                    className="border p-2"
                  />
                ) : (
                  <p>{user.createdby}</p>
                )}
              </td>
              <th>
                {editUserId === user._id ? (
                  <button
                    onClick={() => handleSaveUpdate(user._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleUpdate(user._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => handleDelete(user._id)}
                  className="btn btn-ghost btn-xs text-red-600"
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </>
      )}
    </>
  );
};

export default Categorytable;
