import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import axios from "axios";


const DisplayFeature = () => {

    const [users, setUsers] = useState([]);
    const [render, setRender] = useState(1);
    const [editUserId, setEditUserId] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
      // Initialize form data state
      subcategory: "",
      category: "",
      feature: "",
      tagname: "",
      buttonType: "text",
      freePost: "",
      ordering: "",
      date: "",
      file: null,
      status: "Yes",
    });
    const [editedUser, setEditedUser] = useState({
      subcategory: "",
      category: "",
      order: "",
      entrydate: "",
      status: "",
      createdby: "",
      editBy: "",
      input: "",
      feature: "",
      tagname: [],
    });
  
    useEffect(() => {
      const loader = async () => {
        try {
          const res = await axios.get(
            "https://shadamon-m-server.vercel.app/api/v1/categorys"
          );
          setUsers(res.data?.data);
          setLoading(false);
        } catch (error) {
          console.error("Error loading users:", error);
        }
      };
      loader();
    }, [render]);
    console.log(users);
  
    const handleDelete = async (id) => {
      try {
        await axios.delete(
          `https://shadamon-m-server.vercel.app/api/v1/categorys/delete/${id}`
        );
        setRender(render + 1);
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    };
  
    const handleUpdate = async (id) => {
      setEditUserId(id);
      try {
        const updateUser = await axios.get(
          `https://shadamon-m-server.vercel.app/api/v1/categorys?id=${id}`
        );
        const userData = updateUser.data?.data[0];
        setEditedUser({
          subcategory: userData.subcategory,
          category: userData.category,
          order: userData.order,
          entrydate: userData.entrydate,
          status: userData.status,
          createdby: userData.createdby,
          editBy: "Admin",
          input: userData.input,
          feature: userData.feature,
        });
      } catch (error) {
        console.error("Error fetching user data for editing:", error);
      }
    };
  
    const handleSaveUpdate = async (id) => {
      try {
        await axios.patch(
          `https://shadamon-m-server.vercel.app/api/v1/categorys/update/${id}`,
          editedUser
        );
        console.log(editedUser);
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
        [name]: value,
      }));
    };


  return (
    <>
      {/* display feature */}
      <div className=" p-5">
        <div className=" w-full rounded-lg shadow-xl p-10">
          {/* header */}
          <div className=" flex justify-end gap-3 border-b-2 py-3">
            <h6>Create Feature </h6>
            <button className=" p-2 bg-gray-200 rounded-sm">
              <FaPlus />
            </button>
          </div>
          {/* Category Table */}
          <div className="overflow-x-auto bg-gray-200 m-4 rounded-md p-2">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Feature Name</th>
                  <th>Input</th>
                  <th>Order</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Table Datas */}
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
                                name="feature"
                                type="text"
                                value={editedUser.feature}
                                onChange={handleChange}
                                className="border p-2"
                              />
                            ) : (
                              <p>{user.feature}</p>
                            )}
                          </td>
                          <td>
                            {editUserId === user._id ? (
                              <input
                                name="input"
                                type="text"
                                value={editedUser.input}
                                onChange={handleChange}
                                className="border p-2"
                              />
                            ) : (
                              <p>{user.input}</p>
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
              </tbody>
              {/* foot */}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayFeature;
