"use client"
import React, { useState } from "react";
import Home from "@/dashboardComponents/Home";
import axios from "axios";
import { toast } from "react-toastify";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    username: "",
    status: "",
    email: "",
    verifiedBy: "",
    dateOfBirth: "",
    gender: "",
    verificationIcon: "",
    location: "",
    education: "",
    educationIn: "",
    currentJob: "",
    jobExperience: "",
    mobileVerified: "",
    addMobile: "",
    createdAt: "",
    lastLogin: "",
    password: "",
    photo: "",
    note: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(formData.username != ""){
         const res = await axios.post("https://shadamon-m-server.vercel.app/api/v1/users/add", formData)
    if(res.data.message === "User created successfully!")
    toast.success('Created New user!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
        });
        else     toast.error('Faild to Created New user!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            // transition: Bounce,
            });   
    }
    else     toast.error('Need all field completed!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    // Here you can post formData object to your database
    console.log("Form data:", formData);
    // Reset form fields after submission if needed
    setFormData({
      username: "",
      status: "",
      email: "",
      verifiedBy: "",
      dateOfBirth: "",
      gender: "",
      verificationIcon: "",
      location: "",
      education: "",
      educationIn: "",
      currentJob: "",
      jobExperience: "",
      mobileVerified: "",
      addMobile: "",
      createdAt: "",
      lastLogin: "",
      password: "",
      photo: "",
      note: ""
    });
  };

  return (
    <div className="bg-gray-300">
      <div className="max-w-[1440px] mx-auto pt-2 px-5 flex gap-10">
        <Home />
        <div className="w-full bg-white rounded-lg">
          <form onSubmit={handleSubmit}>
            {/* User info */}
            <div className="p-2">
              <h6 className="bg-gray-200 text-gray-900 py-2 px-2 w-full rounded-md">
                User Info
              </h6>
            </div>
            <div className="grid grid-cols-4 gap-5 p-2">
              {/* 1st row */}
              <div className="border-2 h-14">
                <h6 className="relative -top-3 bg-white text-center text-gray-500 w-1/2 -right-10">
                  Person Name
                </h6>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="border-none w-full relative -top-3 outline-none p-2"
                />
              </div>
              <div className="border-2 h-14">
                <h6 className="relative -top-3 bg-white text-center text-gray-500 w-1/2 -right-10">
                  Account Status
                </h6>
                <input
                  type="text"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="border-none w-full relative -top-3 outline-none p-2"
                />
              </div>
              <div className="border-2 h-14">
                <h6 className="relative -top-3 bg-white text-center text-gray-500 w-1/2 -right-10">
                  Email
                </h6>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-none w-full relative -top-3 outline-none p-2"
                />
              </div>
              <div className="border-2 h-14">
                <h6 className="relative -top-3 bg-white text-center text-gray-500 w-1/2 -right-10">
                  Verified By
                </h6>
                <input
                  type="text"
                  name="verifiedBy"
                  value={formData.verifiedBy}
                  onChange={handleChange}
                  className="border-none w-full relative -top-3 outline-none p-2"
                />
              </div>

              {/* 2nd row */}
              <div className="border-2 h-14">
                <h6 className="relative -top-3 bg-white text-center text-gray-500 w-1/2 -right-10">
                  Date Of Birth
                </h6>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="border-none w-full relative -top-3 outline-none p-2"
                />
              </div>
              <div className="border-2 h-14">
                <h6 className="relative -top-3 bg-white text-center text-gray-500 w-1/2 -right-10">
                  Gender
                </h6>
                <input
                  type="text"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="border-none w-full relative -top-3 outline-none p-2"
                />
              </div>
              <div className="border-2 h-14">
                <h6 className="relative -top-3 bg-white text-center text-gray-500 w-1/2 -right-10">
                  Verification Icon
                </h6>
                <input
                  type="text"
                  name="verificationIcon"
                  value={formData.verificationIcon}
                  onChange={handleChange}
                  className="border-none w-full relative -top-3 outline-none p-2"
                />
              </div>
              <div className="border-2 h-14">
                <h6 className="relative -top-3 bg-white text-center text-gray-500 w-1/2 -right-10">
                  Location
                </h6>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="border-none w-full relative -top-3 outline-none p-2"
                />
              </div>

              {/* 3rd row */}
              <div className="border-2 h-14">
                <h6 className="relative -top-3 bg-white text-center text-gray-500 w-1/2 -right-10">
                  Education
                </h6>
                <input
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  className="border-none w-full relative -top-3 outline-none p-2"
                />
              </div>
              <div className="border-2 h-14">
                <h6 className="relative -top-3 bg-white text-center text-gray-500 w-1/2 -right-10">
                  Education In
                </h6>
                <input
                  type="text"
                  name="educationIn"
                  value={formData.educationIn}
                  onChange={handleChange}
                  className="border-none w-full relative -top-3 outline-none p-2"
                />
              </div>
              <div className="border-2 h-14">
                <h6 className="relative -top-3 bg-white text-center text-gray-500 w-1/2 -right-10">
                  Current Job
                </h6>
                <input
                  type="text"
                  name="currentJob"
                  value={formData.currentJob}
                  onChange={handleChange}
                  className="border-none w-full relative -top-3 outline-none p-2"
                />
              </div>
              <div className="border-2 h-14">
                <h6 className="relative -top-3 bg-white text-center text-gray-500 w-1/2 -right-10">
                  Job Experience
                </h6>
                <input
                  type="text"
                  name="jobExperience"
                  value={formData.jobExperience}
                  onChange={handleChange}
                  className="border-none w-full relative -top-3 outline-none p-2"
                />
              </div>

              {/* 4th row */}
              <div className="border-2 h-14">
                <h6 className="relative -top-3 bg-white text-center text-gray-500 w-1/2 -right-10">
                  Mobile Verified
                </h6>
                <input
                  type="text"
                  name="mobileVerified"
                  value={formData.mobileVerified}
                  onChange={handleChange}
                  className="border-none w-full relative -top-3 outline-none p-2"
                />
              </div>
              <div className="border-2 h-14">
                <h6 className="relative -top-3 bg-white text-center text-gray-500 w-1/2 -right-10">
                  Add Mobile
                </h6>
                <input
                  type="text"
                  name="addMobile"
                  value={formData.addMobile}
                  onChange={handleChange}
                  className="border-none w-full relative -top-3 outline-none p-2"
                />
              </div>
              <div className="border-2 h-14">
                <h6 className="relative -top-3 bg-white text-center text-gray-500 w-1/2 -right-10">
                  Created At
                </h6>
                <input
                  type="text"
                  name="createdAt"
                  value={formData.createdAt}
                  onChange={handleChange}
                  className="border-none w-full relative -top-3 outline-none p-2"
                />
              </div>
              <div className="border-2 h-14">
                <h6 className="relative -top-3 bg-white text-center text-gray-500 w-1/2 -right-10">
                  Last Login
                </h6>
                <input
                  type="text"
                  name="lastLogin"
                  value={formData.lastLogin}
                  onChange={handleChange}
                  className="border-none w-full relative -top-3 outline-none p-2"
                />
              </div>

              {/* 5th row */}
              <div className="border-2 h-14">
                <h6 className="relative -top-3 bg-white text-center text-gray-500 w-1/2 -right-10">
                  Password
                </h6>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border-none w-full relative -top-3 outline-none p-2"
                />
              </div>
              <div className="border-2 h-14">
                <h6 className="relative -top-3 bg-white text-center text-gray-500 w-1/2 -right-10">
                  Photo
                </h6>
                <input
                  type="text"
                  name="photo"
                  value={formData.photo}
                  onChange={handleChange}
                  className="border-none w-full relative -top-3 outline-none p-2"
                />
              </div>
              <div className="border-2 h-14 col-span-2">
                <h6 className="relative -top-3 bg-white text-center text-gray-500 w-1/2 -right-10">
                  Note
                </h6>
                <input
                  type="text"
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  className="border-none w-full relative -top-3 outline-none p-2"
                />
              </div>
            {/* Buttons */}
            <div className="flex justify-center items-center">
              <button
                type="button"
                onClick={() => setFormData({})}
                className="bg-[#dd4b3e] w-full h-full p-4 text-gray-100 rounded-md hover:opacity-70 active:opacity-40"
              >
                Cancel
              </button>
            </div>
            <div className="col-span-3 flex justify-center items-center">
              <button
                type="submit"
                className="bg-[#03a75d] w-full h-full p-4 text-gray-100 rounded-md hover:opacity-70 active:opacity-40"
              >
                Save
              </button>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
