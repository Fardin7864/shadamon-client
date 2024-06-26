import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";

const CreateLocation = () => {
  const [users, setUsers] = useState([]);
  const [render, setRender] = useState(1);
  const [editUserId, setEditUserId] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [editedUser, setEditedUser] = useState({
    location: "",
    order: "",
    entrydate: "",
    status: "",
    createdby: "",
    editBy: "",
  });

  useEffect(() => {
    const loader = async () => {
      try {
        const res = await axios.get(
          "https://shadamon-m-server.vercel.app/api/v1/locations"
        );
        setUsers(res.data?.data);
        setLoading(false);
      } catch (error) {
        console.error("Error loading users:", error);
      }
    };
    loader();
  }, [render]);
  const handleDelete = async (id) => {
    document.getElementById("my_modal_locationmain").close();
    const removeFeature = async () => {
      try {
        await axios.delete(
          `https://shadamon-m-server.vercel.app/api/v1/locations/${id}`
        );
        setRender(render + 1);
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    };

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
      const updateUser = await axios.get(
        `https://shadamon-m-server.vercel.app/api/v1/locations?id=${id}`
      );
      const userData = updateUser.data?.data[0];
      setEditedUser({
        location: userData.location,
        order: userData.order,
        entrydate: userData.entrydate,
        status: userData.status,
        createdby: userData.createdby,
        editBy: "Admin",
      });
    } catch (error) {
      console.error("Error fetching user data for editing:", error);
    }
  };
  const handleSaveUpdate = async (id) => {
    try {
      await axios.patch(
        `https://shadamon-m-server.vercel.app/api/v1/locations/update/${id}`,
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
  const handleCategoryModal = async (e) => {
    e.preventDefault();
    try {
      console.log(editedUser);
      await axios.post(
        "https://shadamon-m-server.vercel.app/api/v1/locations",
        editedUser
      );
      setEditedUser({
        location: "",
        order: "",
        entrydate: "",
        status: "",
        createdby: "",
        editBy: "",
      });
      setRender(render + 1);
      document.getElementById("my_modal_locationmain").close();
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  return (
    <>
      {/* display category */}
      <div className=" w-full rounded-lg shadow-xl p-5">
        {/* header */}
        <div className=" flex justify-end gap-3 border-b-2 py-3">
          <h6>Create Categorie </h6>
          <button
            onClick={() => document.getElementById("my_modal_locationmain").showModal()}
            className="hover:opacity-70 active:opacity-40 p-2 bg-gray-200 rounded-sm"
          >
            <FaPlus />
          </button>
        </div>
        {/* Category Table */}
        <div className="overflow-x-auto bg-gray-200 m-4 rounded-md p-2">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Location</th>
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
                              name="location"
                              type="text"
                              value={editedUser.location}
                              onChange={handleChange}
                              className="border p-2"
                            />
                          ) : (
                            <p>{user.location}</p>
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
        {/* Category Name Modal */}
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_locationmain" className="modal">
          <div style={{ maxWidth: "50rem" }} className="modal-box">
            <div className=" flex justify-start gap-3 border-b-2 py-3">
              <button className=" p-2 bg-gray-200 rounded-sm">
                <FaPlus />
              </button>
              <h6>Create Location </h6>
            </div>

            {/* <p className="py-4">Press ESC key or click outside to close</p> */}
            <form
              onSubmit={handleCategoryModal}
              className=" my-5 "
              method="dialog"
            >
              <div className=" flex items-center justify-between">
                {/* row 1 */}
                <div className=" flex flex-col gap-3">
                  <input
                    type="text"
                    name="location"
                    onChange={handleChange}
                    placeholder="Location name.."
                    className=" border p-2"
                  />
                  <input
                    type="text"
                    name="entrydate"
                    value={`${new Date().toDateString()}`}
                    onChange={handleChange}
                    className=" border p-2"
                  />
                  <input
                    type="number"
                    name="order"
                    onChange={handleChange}
                    placeholder="Ordering.."
                    className=" border p-2"
                  />
                </div>
                {/* row 2 */}
                <div className=" flex flex-col gap-3">
                 
                  {/* Status */}
                  <div className=" flex items-center gap-5 rounded-sm">
                    <h6>Status</h6>
                    <input
                      type="radio"
                      name="status"
                      placeholder="Status"
                      onChange={() =>
                        setEditedUser((prevUser) => ({
                          ...prevUser,
                          status: "Active",
                        }))
                      }
                      className=" border p-2"
                    />{" "}
                    <span>Yes</span>
                    <input
                      type="radio"
                      name="status"
                      placeholder="Status"
                      onChange={() =>
                        setEditedUser((prevUser) => ({
                          ...prevUser,
                          status: "InActive",
                        }))
                      }
                      className=" border p-2"
                    />{" "}
                    <span>No</span>
                  </div>
                </div>
              </div>
              {/* buttons */}
              <div className=" flex gap-3 my-10">
                <button
                  type="submit"
                  className=" hover:opacity-70 active:opacity-40 bg-[#0666cd] text-white py-1 text-center rounded-sm w-4/5"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const modal = document.getElementById("my_modal_locationmain");
                    if (modal) {
                      modal.close();
                    }
                  }}
                  className=" py-1 text-center rounded-sm w-1/5 border"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default CreateLocation;
