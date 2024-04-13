"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { FaMinus, FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";


const CreateSubLocation = () => {
  const [users, setUsers] = useState([]);
  const [subCategoryNum, setSubCategoruNum] = useState([1]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBtn, setSelectedBtn] = useState();
  const [selectStatus, setStatus] = useState();
  const [formData, setFormData] = useState({
    subcategories: [],
  });

  // Image upload on cloudinary
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    // console.log(e.target.files[0])
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.imgbb.com/1/upload?key=0ec4496118a1ca7ae17b424313985204",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      setImage(response.data.data.url); // Assuming ImgBB returns URL of the uploaded image
      console.log("Image uploaded successfully:", response.data.data.url);
    } catch (error) {
      console.error("Error uploading image:", error);
      setLoading(false);
    }
  };

  // console.log(image)

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  useEffect(() => {
    const loader = async () => {
      try {
        const res = await axios.get(
          "https://shadamon.up.railway.app/api/v1/locations"
        );
        setUsers(res.data?.data);
      } catch (error) {
        console.error("Error loading users:", error);
      }
    };
    loader();
  }, []);

  // console.log(users)

  const handleSubcategoryChange = (index, value) => {
    const updatedSubcategories = [...formData.subcategories];
    updatedSubcategories[index] = value;
    setFormData({ ...formData, subcategories: updatedSubcategories });
  };


  const handleCategory = async (e) => {
    e.preventDefault();
    const newSub = {
      sublocation: formData.subcategories,
      order: e.target.order.value,
      date: e.target.date.value,
      img: image,
      status: selectStatus,
    };

    console.log(newSub)
    const res = await  axios.patch(
      `https://shadamon.up.railway.app/api/v1/locations/update/${selectedCategory}`,newSub
    );
    if(res.data.message) Swal.fire({
      icon: "success",
      title: "Successfully added!",
      text: "Added new sub categoies!",
    });
    // Handle form submission, you can use formData here to send the data
    // console.log(newSub);
  };

  const categories = users?.map(
    (category, index) => category.location + "-" + category._id
  );
  // console.log(categories)

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
            {/* sub Location name */}
            {subCategoryNum?.map((sub, index) => (
              <div key={index} className=" flex items-center gap-1 rounded-sm">
                <input
                  type="text"
                  name="subcategory"
                  placeholder="Sub location Name"
                  onChange={(e) =>
                    handleSubcategoryChange(index, e.target.value)
                  }
                  className=" border p-2 w-44 text-sm"
                />
                <button
                  type="button"
                  onClick={() =>
                    setSubCategoruNum((prevSub) => [
                      ...prevSub,
                      prevSub.length + 1,
                    ])
                  }
                  className=" p-2 bg-gray-200 rounded-sm"
                >
                  <FaPlus />
                </button>
                <button
                  type="button"
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
            {/* Category */}
            <div className=" border p-2  rounded-s2 w-44">
              <select
                name="location"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className=" outline-none border-none w-32 text-sm"
              >
                <option>Select location</option>
                {/* Map over the categories array to generate options dynamically */}
                {categories.map((category, index) => (
                  <option key={index} value={category.split("-")[1]}>
                    {category.split("-")[0]}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* 2nd col in first half */}
          <div className=" flex flex-col gap-3">
            {/* Ordering */}
            <div className=" flex items-center gap-1 rounded-sm">
              <input
                type="number"
                name="order"
                placeholder="Order"
                className=" border p-2 w-44 text-sm"
              />
            </div>
            {/* Date */}
            <div className=" flex items-center gap-1 rounded-sm">
              <input
                type="date"
                name="date"
                placeholder="Date"
                className=" border p-2 w-44 text-sm"
              />
            </div>
            {/* File Upload */}
            <div className=" flex items-center gap-1 rounded-sm">
              <input
                type="file"
                name="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={loading}
                placeholder="File Upload"
                className=" border p-1 w-44 text-sm"
              />
              {/* {loading && <p>Uploading...</p>} */}
              {/* {image && (
                <div>
                  <img cloudName="dh20zdtys" publicId={image} alt="img"  width={100} height={100}/>
                </div>
              )} */}
            </div>
            {/* Status */}
            <div className=" flex gap-5 items-center rounded-sm w-44 ">
              <h6>Status</h6>
              <div>
                <input
                  type="radio"
                  name="status"
                  value={selectStatus}
                  onChange={() => setStatus(true)}
                  className=" border p-1 text-sm"
                />{" "}
                <span>Yes</span>
              </div>
              <div>
                <input
                  type="radio"
                  name="status"
                  value={selectStatus}
                  onChange={() => setStatus(false)}
                  className=" border p-1 text-sm"
                />{" "}
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        {/* buttons */}
        <div className=" flex gap-3 my-10">
          <button
            type="submit"
            className="hover:opacity-70 active:opacity-40 bg-[#0666cd] text-white py-1 text-center rounded-sm w-4/5"
          >
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

export default CreateSubLocation;
