/* eslint-disable @next/next/no-img-element */
"use client";

import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from "react";

const Settings = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [favoriteList, setFavoriteList] = useState(false);
  const [blockList, setBlockList] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible((prevState) => !prevState);
  };

  const toggleFavoriteList = () => {
    setFavoriteList((prevState) => !prevState);
  };

  const toggleBlockList = () => {
    setBlockList((prevState) => !prevState);
  };

  //
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  //
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisible((prevState) => !prevState);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  return (
    <div className="w-[500px]  mx-auto py-5 ">
      <div className="rounded-xl border border-gray-200  bg-white ">
        <div className="p-3 flex justify-between items-center gap-3 rounded-t-xl bg-white border-b border-slate-300">
          <div className="flex gap-3 ">
            <Link href="/my-post">
              <button className="border  px-2 py-1 rounded-md hover:bg-[#fb6320]  hover:text-white  text-sm">
                My Post
              </button>
            </Link>
            <Link href="/profile">
              <button className="border border-gray-400 px-2 py-1 rounded-md hover:bg-[#fb6320] hover:text-white duration-300 text-sm">
                My Profile
              </button>
            </Link>
            <Link href="/settings">
              <button className=" px-2 py-1 rounded-md bg-[#fb6320] text-white duration-300 text-sm">
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
        <h5 className="my-5 mx-10 font-bold uppercase">Accounting Settings</h5>

        <div className="px-10 pb-6">
          {/* change password */}
          <div>
            <button
              onClick={toggleFormVisibility}
              className="border hover:bg-gray-200  border-gray-300 rounded-md mb-3 w-full h-10 font-bold  bg-gray-100 duration-200"
            >
              Change Password
            </button>
            {isFormVisible && (
              <form className="my-3">
                <label className=" flex items-center gap-2 relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
                    className="border hover:bg-gray-200  border-gray-300 rounded-md mb-3 w-full h-10 font-bold  bg-gray-100 duration-200 px-2 focus:outline-none placeholder:font-light placeholder:text-base"
                    placeholder="Current Password"
                  />
                  <div
                    className="absolute right-2 top-3"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? (
                      <IoEyeOffOutline className="text-xl" />
                    ) : (
                      <IoEyeOutline className="text-xl" />
                    )}
                  </div>
                </label>
                {/*  */}
                <label className=" flex items-center gap-2 relative">
                  <input
                    type={newPasswordVisible ? "text" : "password"}
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                    className="border hover:bg-gray-200  border-gray-300 rounded-md mb-3 w-full h-10 font-bold  bg-gray-100 duration-200 px-2 focus:outline-none placeholder:font-light placeholder:text-base"
                    placeholder="Confirm new Password"
                  />
                  <div
                    className="absolute right-2 top-3"
                    onClick={toggleNewPasswordVisibility}
                  >
                    {newPasswordVisible ? (
                      <IoEyeOffOutline className="text-xl" />
                    ) : (
                      <IoEyeOutline className="text-xl" />
                    )}
                  </div>
                </label>
                <button className="border-0 bg-[#fb6320] text-white rounded-md mb-3 w-full h-10 font-semibold duration-200">
                  Change password
                </button>
              </form>
            )}
          </div>
          {/* favorite list */}
          <div>
            <button
              onClick={toggleFavoriteList}
              className="border hover:bg-gray-200  border-gray-300 rounded-md mb-3 w-full h-10 font-bold bg-gray-100 duration-200"
            >
              Favorite List
            </button>
            {favoriteList && (
              <div className="flex gap-3 mb-4 rounded-lg bg-white border-2 ">
                <div className="relative post-thumbnail">
                  <img
                    className="h-[90px] w-[120px] rounded-lg"
                    src="https://shadamon.vercel.app/assets/premium-cover-pic.jpg"
                    alt=""
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <h2 className="text-sm">Apple IPhone 45M</h2>
                  <p className="text-xs">
                    342234323, 25 oct, 2021 <br />
                    Mobile Phone, Dhaka
                  </p>
                  <div className="flex justify-between items-center w-full">
                    <h5 className="font-semibold text-sm mt-1">View: 55214</h5>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* block list */}
          <div>
            <button
              onClick={toggleBlockList}
              className="border hover:bg-gray-200  border-gray-300 rounded-md mb-3 w-full h-10 font-bold bg-gray-100 duration-200"
            >
              Block List
            </button>
            {blockList && (
              <div className="flex gap-3 mb-4 rounded-lg bg-white border-2 ">
                <div className="relative post-thumbnail">
                  <img
                    className="h-[90px] w-[120px] rounded-lg"
                    src="https://shadamon.vercel.app/assets/premium-cover-pic.jpg"
                    alt=""
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <h2 className="text-sm">Samsung 45M</h2>
                  <p className="text-xs">
                    342234323, 25 oct, 2021 <br />
                    Mobile Phone, Dhaka
                  </p>
                  <div className="flex justify-between items-center w-full">
                    <h5 className="font-semibold text-sm mt-1">View: 55214</h5>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* notification */}

          <div>
            <button className="border hover:bg-gray-200  border-gray-300 rounded-md mb-3 w-full h-10 font-bold bg-gray-100 duration-200">
              Notifications
            </button>
          </div>
          {/* App Theme Mode */}

          <div>
            <button className="border hover:bg-gray-200  border-gray-300 rounded-md mb-3 w-full h-10 font-bold bg-gray-100 duration-200">
              App Theme Mode
            </button>
          </div>
          {/* Delete Account */}

          <div>
            <button className="border hover:bg-gray-200  border-gray-300 rounded-md mb-3 w-full h-10 font-bold bg-gray-100  duration-200">
              Delete Account
            </button>
          </div>
          {/* Clear Cashe */}
          <div>
            <button className="border hover:bg-gray-200  border-gray-300 rounded-md mb-3 w-full h-10 font-bold bg-gray-100  duration-200">
              Clear Cashe
            </button>
          </div>
          {/* about us */}
          <div>
            <button className="border hover:bg-gray-200  border-gray-300 rounded-md mb-3 w-full h-10 font-bold bg-gray-100  duration-200">
              About Us
            </button>
          </div>
          {/* privacy Policy */}
          <div>
            <button className="border hover:bg-gray-200  border-gray-300 rounded-md mb-3 w-full h-10 font-bold bg-gray-100 duration-200">
              Privacy Policy
            </button>
          </div>
          {/* Terms & Conditions */}
          <div>
            <button className="border hover:bg-gray-200  border-gray-300 rounded-md mb-3 w-full h-10 font-bold bg-gray-100 duration-200">
              Term & Condition
            </button>
          </div>
          {/* delete msg */}
          <div className="border  border-gray-300 rounded-md mb-3 w-full bg-gray-200 p-2">
            <h2 className="font-semibold text-sm">Account Delete</h2>
            <p className="font-light text-xs">
              You Can Delete Your Account After 7 Days from <br /> Registration
              Time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
