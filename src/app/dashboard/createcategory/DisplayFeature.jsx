"use client"
import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import axios from "axios";
import Swal from 'sweetalert2'

const DisplayFeature = () => {
  const [users, setUsers] = useState([]);
  const [render, setRender] = useState(1);
  const [editUserId, setEditUserId] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [btnItemNum, setBtnItemNum] = useState([1]);
  const [editedCategory, setEditedCategory] = useState(null)
  const [buttonType, setButtonType] = useState()
  const [editedUser, setEditedUser] = useState({
    subcategory: "",
    category: "",
    featureOrder: "",
    entrydate: "",
    createdby: "",
    editBy: "Admin",
    input: "",
    tagname: "",
    buttonItemName: "",
    featureStatus: "",
    feature: [],
    fade: "",
    featureBtnType: "",
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
  // console.log(users);

  const handleDelete = async (id) => {
    document.getElementById("my_modal_category").close();
    const feature = {
      featureBtnType: "",
      buttonItemName: "",
      featureOrder: "",
      featureStatus: "",
      feature: "",
      boxFade: "",
      input: "",

    }
    const removeFeature = async () => { 
      try {
        const res = await  axios.patch(
          `https://shadamon-m-server.vercel.app/api/v1/categorys/update/${id}`,feature
        );
        setRender(render + 1);
        console.log(res)
      } catch (error) {
        console.error("Error deleting user:", error);
      }
     }
   const res = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        removeFeature();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });



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
        featureOrder: userData.featureOrder,
        entrydate: userData.entrydate,
        status: userData.status,
        createdby: userData.createdby,
        editBy: "Admin",
        input: userData.input,
        feature: userData.feature,
        tagname: userData.tagname,
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

  const handleButnItemChange = (index, value) => {
    const buttonItemName = [...editedUser.buttonItemName];
    buttonItemName[index] = value;
    setEditedUser((prevUser) => ({
      ...prevUser,
      buttonItemName: buttonItemName,
    }));
  };

  const handleCategoryModal = async (e) => {
    e.preventDefault();
    // console.log("Id: ", editedCategory, editedUser)
    try {
      const feature = {
        featureBtnType: buttonType,
        buttonItemName: editedUser.buttonItemName,
        featureOrder: editedUser.featureOrder,
        featureStatus: editedUser.status,
        feature: editedUser.feature,
        boxFade: editedUser.fade,
        input: editedUser.input,

      }
      console.log(feature)
     const res = await axios.patch(
        `https://shadamon-m-server.vercel.app/api/v1/categorys/update/${editedCategory}`,
        feature
      );
      console.log(res.data)
      setEditedUser({
        subcategory: "",
        category: "",
        featureOrder: "",
        entrydate: "",
        createdby: "",
        editBy: "Admin",
        input: "",
        tagname: "",
        buttonItemName: "",
        featureStatus: "",
        feature: [],
        fade: "",
        featureBtnType: "",
      });
      setRender(render + 1);
      document.getElementById("my_modal_3").close();
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };



  const categories = users?.map(
    (category, index) => category.category + "-" + category._id
  );

    // Function to handle change in category select
    const handleCategoryChange = (event) => {
      setEditedCategory(event.target.value);
    };
    const handleBtnType = (event) => {
      setButtonType(event.target.value);
    };

  return (
    <>
      {/* display feature */}
      <div className=" p-5">
        <div className=" w-full rounded-lg shadow-xl p-10">
          {/* header */}
          <div className=" flex justify-end gap-3 border-b-2 py-3">
            <h6>Create Feature </h6>
            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className=" p-2 bg-gray-200 rounded-sm"
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
                                name="featureBtnType"
                                type="text"
                                value={editedUser.featureBtnType}
                                onChange={handleChange}
                                className="border p-2"
                              />
                            ) : (
                              <p>{user.featureBtnType}</p>
                            )}
                          </td>

                          <td>
                            {editUserId === user._id ? (
                              <input
                              name="featureOrder"
                              type="text"
                              value={editedUser.featureOrder}
                              onChange={handleChange}
                              className="border p-2"
                            />
                          ) : (
                            <p>{user.featureOrder}</p>
                          )}
                        </td>
                        <td>
                          {editUserId === user._id ? (
                            <input
                              name="featureStatus"
                              type="text"
                              value={editedUser.featureStatus}
                              onChange={handleChange}
                              className="border p-2"
                            />
                          ) : (
                            <p>{user.featureStatus}</p>
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
        {/* Category Name Modal */}
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_3" className="modal">
          <div style={{ maxWidth: "50rem" }} className="modal-box">
            <div className=" flex justify-start gap-3 border-b-2 py-3">
              <button className=" p-2 bg-gray-200 rounded-sm">
                <FaPlus />
              </button>
              <h6>New Feature </h6>
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
                    name="feature"
                    onChange={handleChange}
                    placeholder="Feature name.."
                    className=" border p-2"
                  />
                  {/* button type */}
                  <div className=" border p-2  rounded-s2">
                    <select
                      name="Category"
                      id=""
                      value={buttonType}
                      onChange={handleBtnType}
                      className=" outline-none border-none text-sm "
                    >
                      <option >Button Type</option>
                      <option value="text">Text</option>
                      <option value="radio">Radio</option>
                      <option value="checkbox">Check Box</option>
                      <option value="input">Input</option>
                    </select>
                  </div>
                  {/* Box fade name */}
                  <input
                    type="text"
                    name="fade"
                    onChange={handleChange}
                    placeholder="Box fade name.."
                    className=" border p-2"
                  />

                  {/* sub category name */}
                  {btnItemNum?.map((sub, index) => (
                    <div
                      key={index}
                      className=" flex items-center gap-1 rounded-sm"
                    >
                      <input
                        type="text"
                        name="subcategory"
                        placeholder="Sub Categorie Name"
                        onChange={(e) => handleButnItemChange(index, e.target.value)}
                        className=" border p-2 w-44 text-sm"
                      />
                      <button
                        onClick={() =>
                          setBtnItemNum((prvsub) => [...prvsub, "2"])
                        }
                        className=" p-2 bg-gray-200 rounded-sm"
                      >
                        <FaPlus />
                      </button>
                      <button
                        onClick={() =>
                          setBtnItemNum((prevSub) =>
                            prevSub.length > 1 ? prevSub.slice(0, -1) : prevSub
                          )
                        }
                        className=" p-2 bg-gray-200 rounded-sm"
                      >
                        <FaMinus />
                      </button>
                    </div>
                  ))}
                </div>
                {/* row 2 */}
                <div className=" flex flex-col gap-3">
                  {/* Categorie */}
                  <div className=" border p-2  rounded-s2">
                    <select
                      name="Category"
                      id=""
                      value={editedCategory}
                      onChange={handleCategoryChange}
                      className=" outline-none border-none"
                    >
                      <option>Select Category</option>
                      {/* Map over the categories array to generate options dynamically */}
                      {categories.map((category, index) => (
                        <option key={index} value={category.split("-")[1]}>
                          {category.split("-")[0]}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className=" flex flex-col gap-3">
                    <input
                      type="text"
                      name="entrydate"
                      value={`${new Date().toDateString()}`}
                      onChange={handleChange}
                      className=" border p-2"
                    />
                    <input
                      type="number"
                      name="featureOrder"
                      onChange={handleChange}
                      placeholder="Feature Order.."
                      className=" border p-2"
                    />
                  </div>
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
                    const modal = document.getElementById("my_modal_3");
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

export default DisplayFeature;
