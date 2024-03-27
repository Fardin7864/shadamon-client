import React, { useEffect, useState } from "react";
import axios from "axios";

import { FaMinus, FaPlus } from "react-icons/fa";

const NewSubCategory = () => {

    const [users, setUsers] = useState([]);
    const [render, setRender] = useState(1);
    const [editUserId, setEditUserId] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [subCategoryNum, setSubCategoruNum] = useState([1]);
    const [tagNum, setTagNum] = useState([1]);
    const [tagInputs, setTagInputs] = useState([{ tagname: "" }]);
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
      tagname: [],
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
  

  
    const handleAddSubcategory = () => {
      setEditedUser((prevUser) => ({
        ...prevUser,
        subcategories: [...prevUser.subcategories, ""],
      }));
    };
  
    const handleSubcategoryChange = (index, value) => {
      const updatedSubcategories = [...editedUser.subcategories];
      updatedSubcategories[index] = value;
      setEditedUser((prevUser) => ({
        ...prevUser,
        subcategories: updatedSubcategories,
      }));
    };
  
    const handleCategoryModal = async (e) => {
      e.preventDefault();
      try {
        console.log(editedUser);
        await axios.post(
          "https://shadamon-m-server.vercel.app/api/v1/categorys/add",
          editedUser
        );
        setEditedUser({
          subcategory: "",
          category: "",
          order: "",
          entrydate: "",
          status: "",
          createdby: "",
          editBy: "",
          input: "",
          feature: "",
        });
        setRender(render + 1);
        document.getElementById("my_modal_2").close();
      } catch (error) {
        console.error("Error creating category:", error);
      }
    };
  
    const handleInputChange = (e) => {
      const { name, value, files } = e.target;
      setFormData({
        ...formData,
        [name]: name === "file" ? files[0] : value, // Handle file input separately
      });
    };
  
    // Function to handle form submission
    const handleCategory = async (e) => {
      e.preventDefault();
      try {
        // Make PATCH request to your server with formData and resource identifier
        const response = await fetch(`your-api-endpoint/${resourceId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log("Updated data:", data);
      } catch (error) {
        console.error("Error updating resource:", error);
      }
    };
  
    // Function to handle changes in tagname
    const handleTagChange = (e) => {
      const { value } = e.target;
      // Assuming your input field is a text input
      // If it's something else like a select or checkbox, you'd handle it differently
      setEditedUser((prevState) => ({
        ...prevState,
        tagname: value.split(",").map((tag) => tag.trim()), // Splitting the input by comma and trimming each tag
      }));
    };
  
    const categories = users?.map(
      (category, index) => category.category + "-" + category._id
    );
    const features = users?.map(
      (feature, index) => feature.feature + "-" + feature._id
    );


  return (
    <>
      {/* new category section form */}
      <form
        onSubmit={handleCategory}
        className=" w-full rounded-lg shadow-xl p-5"
      >
        {/* 1st half */}
        <div className="flex justify-between">
          {/* 1st col  */}
          <div className=" flex flex-col gap-3">
            {/* sub category name */}
            {subCategoryNum?.map((sub) => (
              <div key={sub} className=" flex items-center gap-1 rounded-sm">
                <input
                  type="text"
                  name="subcategory"
                  placeholder="Sub Categorie Name"
                  onChange={handleSubcategoryChange}
                  className=" border p-2 w-44 text-sm"
                />
                <button
                  onClick={() =>
                    setSubCategoruNum((prvsub) => [...prvsub, "2"])
                  }
                  className=" p-2 bg-gray-200 rounded-sm"
                >
                  <FaPlus />
                </button>
                <button
                  onClick={() =>
                    setSubCategoruNum((prevSub) =>
                      prevSub.length > 1 ? prevSub.slice(0, -1) : prevSub
                    )
                  }
                  className=" p-2 bg-gray-200 rounded-sm"
                >
                  <FaMinus />
                </button>
              </div>
            ))}
            {/* Categorie */}
            <div className=" border p-2  rounded-s2 w-44">
              <select
                name="Category"
                id=""
                className=" outline-none border-none w-32 text-sm"
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
            {/* select feature  */}
            <div className=" border p-2  rounded-s2 w-44">
              <select
                name="feature"
                id=""
                className=" outline-none border-none w-32 text-sm"
              >
                <option>Select Feature</option>
                {/* Map over the features array to generate options dynamically */}
                {features.map((feature, index) => (
                  <option key={index} value={feature.split("-")[1]}>
                    {feature.split("-")[0]}
                  </option>
                ))}
              </select>
            </div>
            {/* Tage name */}
            {tagNum?.map((tag, index) => (
              <div key={tag} className=" flex items-center gap-1 rounded-sm">
                <input
                  type="text"
                  name="tagname"
                //   value={editedUser[index].tagname.join(",")}
                  onChange={(e) => handleTagChange(e, index)}
                  placeholder="Tag Name"
                  className=" border p-2 w-44 text-sm"
                />
                <button
                  onClick={() => setTagNum((prvsub) => [...prvsub, "2"])}
                  className=" p-2 bg-gray-200 rounded-sm"
                >
                  <FaPlus />
                </button>
                <button
                  onClick={() =>
                    setTagNum((prevSub) =>
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
          {/* 2nd col in first half */}
          <div className=" flex flex-col gap-3">
            {/* button type */}
            <div className=" border p-2  rounded-s2 w-44">
              <select
                name="Category"
                id=""
                className=" outline-none border-none w-32 text-sm "
              >
                <option value="text">Button Type</option>
                <option value="text">Text</option>
                <option value="radio">Radio</option>
                <option value="checkbox">Check Box</option>
                <option value="input">Input</option>
              </select>
            </div>
            {/* Free post */}
            <div className=" flex items-center gap-1 rounded-sm">
              <input
                type="text"
                name="subcategory"
                placeholder="Free post"
                className=" border p-2 w-44 text-sm"
              />
            </div>
            {/* Ordering */}
            <div className=" flex items-center gap-1 rounded-sm">
              <input
                type="text"
                name="subcategory"
                placeholder="Ordering"
                className=" border p-2 w-44 text-sm"
              />
            </div>
            {/* Date */}
            <div className=" flex items-center gap-1 rounded-sm">
              <input
                type="date"
                name="subcategory"
                placeholder="Sub Categorie Name"
                className=" border p-2 w-44 text-sm"
              />
            </div>
            {/* file upload */}
            <div className=" flex items-center gap-1 rounded-sm">
              <input
                type="file"
                name="subcategory"
                placeholder="Sub Categorie Name"
                className=" border p-1 w-44 text-sm"
              />
            </div>
            {/* Status */}
            <div className=" flex gap-5 items-center rounded-sm w-44 ">
              <h6>Status</h6>
              <div>
                 <div>
                <input
                type="radio"
                name="subcategory"
                placeholder="Status"
                className=" border p-1 text-sm"
              />{" "}
              <span>Yes</span>
              </div>
              <div>
              
              <input
                type="radio"
                name="subcategory"
                placeholder="Status"
                className=" border p-1 text-sm"
              />{" "}
              <span>No</span>  
              </div>
              </div>
             

            </div>
          </div>
        </div>
        {/* buttons */}
        <div className=" flex gap-3 my-10">
          <button className="hover:opacity-70 active:opacity-40 bg-[#0666cd] text-white py-1 text-center rounded-sm w-4/5">
            Save
          </button>
          <button className="hover:opacity-70 active:opacity-40 py-1 text-center rounded-sm w-1/5 border">
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default NewSubCategory;
