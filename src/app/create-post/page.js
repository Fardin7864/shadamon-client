"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { GoQuestion } from "react-icons/go";
import { IoMdEye } from "react-icons/io";
import { MdAddToPhotos } from "react-icons/md";

const CreatePost = () => {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setText(value);
  };

  // Handle add image functionality
  const handleImageUpload = (e) => {
    const selectedFiles = e.target.files;
    const remainingSlots = 10 - images.length;
    const filesToUpload = Array.from(selectedFiles).slice(0, remainingSlots);

    const newImages = filesToUpload.map((file, index) => {
      const id = images.length + index + 1;
      const src = URL.createObjectURL(file);

      return { id, src };
    });

    const updatedImages = [...images, ...newImages];
    setImages(updatedImages);
  };

  return (
    <div className="w-[500px] mx-auto pt-5 ">
      <div className="rounded-t-xl border border-gray-200 bg-[#f8f8f8]">
        {/* <div className="bg-pink-100 py-2 rounded-t-xl">
          <h5 className="font-bold text-center">
            Your account successfully Created
          </h5>
        </div> */}

        {/* <div className="flex flex-col items-center justify-center mt-3 mb-5">
          <img className="h-[80px] mx-auto my-2" src="/loginlogo.png" alt="" />
          <p className="text-sm">Welcome Mohammad Ullah</p>
          <h4 className="font-bold text-lg">Post your Ad</h4>
          <p className="text-sm">Choice your option Below</p>
        </div> */}
        {/* add photos */}

        <div className="bg-white mx-4 mt-4 p-4 border border-gray-200 shadow-lg">
          <div className="uploader mb-2  bg-white border border-gray-200 rounded-md">
            {/* File input for image selection */}
            <label htmlFor="imageInput" className="file-input-label">
              <input
                type="file"
                id="imageInput"
                name="images"
                className="file-input"
                title="Add Images"
                multiple
                onChange={handleImageUpload}
              />
              <div className="uploader-container">
                <div className="bg-gray-200 rounded-full p-3">
                  <MdAddToPhotos id="uploaded-image" className="text-4xl" />
                </div>
                <span className="uploader-title">Add Photos</span>
                <span className="uploader-title2">or drag & drop</span>
              </div>
            </label>
            {/* Display uploaded images */}

            <div className="flex flex-wrap gap-2 mb-2 mx-2">
              {images.map((image) => (
                <img
                  key={image.id}
                  src={image.src}
                  alt={`Uploaded Image ${image.id}`}
                  className="border border-gray-400 h-10 w-10"
                />
              ))}
            </div>
          </div>
          <input
            className="bg-inherit hover:border-gray-200 border border-gray-200 py-2 w-full text-gray-600 focus:outline-none px-3 mb-2 rounded-md"
            placeholder="Title"
            id="name"
            type="text"
            label="Title"
            name="title"
          />
          <textarea
            className="bg-inherit hover:border-gray-200 border border-gray-200 py-2 w-full text-gray-600 focus:outline-none px-3 mb-2 rounded-md"
            placeholder="Description"
            rows="4"
            id="description"
            type="text"
            label="Description"
            name="description"
            value={text}
            onChange={handleChange}
            maxLength="500"
          />
          <p className="text-xs flex justify-between -mt-3 font-semibold">
            *A nice & detail description might help, your Product sell faster.
            <span>{text.length}/500</span>
          </p>

          <h5 className="font-semibold text-gray-600">**All Features here</h5>
          <select
            className="bg-inherit hover:border-gray-200 border border-gray-200 py-2 w-full text-gray-600 focus:outline-none px-3 my-2 rounded-md"
            placeholder="Location"
            id="location"
            type="text"
            label="Location"
            name="location"
          >
            <option value="dhaka">Dhaka</option>
            <option value="khulna">Khulna</option>
            <option value="sylhet">Sylhet</option>
            <option value="malibag">Malibag</option>
          </select>
          <h5 className="text-sm">Contact Detail</h5>
          <input
            className="bg-inherit hover:border-gray-200 border border-gray-200 py-2 w-full text-gray-600 focus:outline-none px-3 mb-2 rounded-md"
            placeholder="Name"
            id="name"
            type="text"
            label="Name"
            name="name"
          />
          <input
            className="bg-inherit hover:border-gray-200 border border-gray-200 py-2 w-full text-gray-600 focus:outline-none px-3 mb-2 rounded-md"
            placeholder="E-mail (Optional)"
            id="email"
            type="text"
            label="E-mail"
            name="email"
          />
          <input
            className="bg-inherit hover:border-gray-200 border border-gray-200 py-2 w-full text-gray-600 focus:outline-none px-3 mb-2 rounded-md"
            placeholder="Create Password"
            id="password"
            type="password"
            label="Password"
            name="password"
          />
          {/* <IoMdEye /> */}
          <div className="border py-3">
            <p className="pl-3 text-xs font-semibold flex gap-2">
              Phone number{" "}
              <span className="text-base">
                <GoQuestion />
              </span>
            </p>

            <input
              className="bg-inherit hover:border-gray-200 border border-gray-200 py-1 mx-3 my-2 w-full text-gray-600 focus:outline-none px-3  rounded-md"
              placeholder="Phone Number"
              id="phone"
              type="text"
              label="Phone Number"
              name="Phone Number"
            />
            <div>
              <label htmlFor="phoneNum" className="text-gray-700 ml-4 text-sm">
                Add phone Number
              </label>
              <div className="flex ml-3 gap-5">
                <input
                  className="bg-inherit hover:border-gray-200 border border-gray-200 py-1 w-full text-gray-600 focus:outline-none px-3  rounded-md"
                  id="phoneNum"
                  placeholder="Enter phone number"
                  type="text"
                  label="phoneNum"
                  name="phoneNum"
                />
                <button className="border px-3 mr-3 rounded-md hover:bg-[#fb6320] hover:text-white duration-300">
                  Add
                </button>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="phoneNumbers"
                  className="ml-3 mt-4"
                />
                <label
                  for="phoneNumbers"
                  className="text-md text-slate-700 ml-3 text-sm mt-4"
                >
                  Hide Phone Number(s)
                </label>
              </div>
            </div>
          </div>
          <button className="bg-[#fb6320] font-bold w-full py-2 text-white my-5 rounded-md">
            Post ad
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
