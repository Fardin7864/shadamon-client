"use client";

/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import "./profile.css";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { FaSave } from "react-icons/fa";
import { MdAddToPhotos } from "react-icons/md";

const Profile = () => {
  const [images, setImages] = useState([]);
  const handleImageUpload = (e) => {
    const selectedFiles = e.target.files;
    const remainingSlots = 5 - images.length;
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
    <div className="w-full md:w-[500px]  mx-auto py-5 mb-20 md:mb-0">
      <div className="rounded-xl border border-gray-200  bg-white ">
        <div className="p-3 flex justify-between items-center gap-3 rounded-t-xl bg-white border-b border-slate-300">
          <div className="flex gap-3 ">
            <Link href="/my-post">
              <button className="border  px-2 py-1 rounded-md hover:bg-[#fb6320]  hover:text-white  text-sm">
                My Post
              </button>
            </Link>
            <Link href="/profile">
              <button className="border border-gray-400 px-2 py-1 rounded-md bg-[#fb6320] text-white duration-300 text-sm">
                My Profile
              </button>
            </Link>
            <Link href="/settings">
              <button className="border border-gray-400 px-2 py-1 rounded-md hover:bg-[#fb6320] hover:text-white duration-300 text-sm">
                Settings
              </button>
            </Link>
            <Link href="/my-page">
              <button className="border border-gray-400 px-2 py-1 rounded-md hover:bg-[#fb6320] hover:text-white duration-300 text-sm">
                My Page
              </button>
            </Link>
          </div>

          <button className="bg-gray-300 rounded-full h-8 w-8 hover:bg-black duration-300 hover:text-white text-2xl flex justify-center items-center">
            <IoCloseOutline />
          </button>
        </div>
        <h5 className="m-3 font-bold uppercase">Basic Information</h5>
        {/* form */}

        <form className="p-3">
          {/* name email */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="form-group">
              <label className="px-1">Name</label>
              <input
                type="text"
                className="form-control rounded h-10 w-full px-2"
              />
            </div>
            <div className="form-group">
              <label className="px-1">Email</label>
              <input
                type="text"
                className="form-control rounded h-10 w-full px-2"
              />
            </div>
          </div>
          {/* mobile location */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="form-group">
              <label className="px-1">Mobile Verified</label>
              <input
                type="text"
                className="form-control rounded h-10 w-full px-2"
              />
            </div>
            <div className="form-group">
              <label className="px-1">Sub Location</label>
              <input
                type="text"
                className="form-control rounded h-10 w-full px-2"
              />
            </div>
          </div>
          {/* date of birth, add mobile number */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="form-group">
              <label className="px-1">Date of Birth</label>
              <input
                type="text"
                className="form-control rounded h-10 w-full px-2"
              />
            </div>
            <div className="form-group">
              <label className="px-1">Add Mobile Num</label>
              <input
                type="text"
                className="form-control rounded h-10 w-full px-2"
              />
            </div>
          </div>
          {/* current job, education */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="form-group">
              <label className="px-1">Current Job</label>
              <input
                type="text"
                className="form-control rounded h-10 w-full px-2"
              />
            </div>
            <div className="form-group">
              <label className="px-1">Education</label>
              <input
                type="text"
                className="form-control rounded h-10 w-full px-2"
              />
            </div>
          </div>
          {/* address, job experience */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="form-group">
              <label className="px-1">Full Address</label>
              <input
                type="text"
                className="form-control rounded h-10 w-full px-2"
              />
            </div>
            <div className="form-group">
              <label className="px-1">Job Experience</label>
              <input
                type="text"
                className="form-control rounded h-10 w-full px-2"
              />
            </div>
          </div>
          {/* current job, education */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div></div>
            <div className="form-group">
              <label className="px-1">Upload Cv(Optional)</label>
              <input
                type="text"
                className="form-control rounded h-10 w-full px-2"
              />
            </div>
          </div>

          {/* save and cancel btn */}
          <div className="flex gap-2 w-full">
            <button className="flex justify-center gap-1 bg-gray-500 text-center rounded text-white items-center w-[80%] py-2">
              <FaSave />
              Save
            </button>
            <button className="flex justify-center gap-1 py-2 bg-red-600 rounded text-white items-center w-[20%]">
              <IoClose /> Cancel
            </button>
          </div>
        </form>

        <div className="mt-5">
          <h5 className="m-3 font-bold uppercase">Seller Information</h5>
          <form className="p-3">
            {/* name btn */}
            <div className="grid grid-cols-2 gap-2 mb-5">
              <div className="form-group">
                <label className="px-1">Shop Name</label>
                <input
                  type="text"
                  className="form-control rounded h-10 w-full px-2"
                />
              </div>
              <div className="form-group">
                <label className="px-1">Page Communication button</label>
                <input
                  type="text"
                  className="form-control rounded h-10 w-full px-2"
                />
              </div>
            </div>
            {/* Seller Page User Name */}
            <div className="grid grid-cols-1 gap-2 mb-3">
              <div className="form-group flex">
                <label className="px-1">Seller Page User Name</label>
                <input
                  type="text"
                  className="form-control rounded-l h-10 w-full px-2"
                  placeholder="www.shadamon.com/Nepobon"
                />
                <button className="border h-10 border-[#acacac] text-[12px] font-bold px-2">
                  Change
                </button>
                <button className="px-2 border rounded-r h-10 border-[#acacac] text-[12px] font-bold">
                  Save
                </button>
              </div>
            </div>

            {/* upload document */}

            <div>
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
                    <span className="uploader-title">Add Document</span>
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
            </div>

            {/* save and cancel btn */}
            <div className="flex gap-2 w-full">
              <button className="flex justify-center gap-1 bg-gray-500 text-center rounded text-white items-center w-[80%] py-2">
                <FaSave />
                Save
              </button>
              <button className="flex justify-center gap-1 py-2 bg-red-600 rounded text-white items-center w-[20%]">
                <IoClose /> Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
