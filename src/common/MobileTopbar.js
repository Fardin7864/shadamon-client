"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IoMail } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { FiGift } from "react-icons/fi";
import { GiThorHammer } from "react-icons/gi";
import { TbWorld } from "react-icons/tb";

const MobileTopBar = () => {
  return (
    <div className="mx-2 sm:mx-5 flex items-center justify-between py-2 sticky top-0">
      <div className=" flex items-center">
        <img src="/shadamonlogo.png" alt="logo" className="w-24 sm:w-40  " />
        <p className="text-xs font-bold border-l pl-1 border-black"> 2230</p>
      </div>
      <div className="flex justify-between items-center">
        <div className=" flex items-center gap-2">
          <button className=" bg-gray-200 p-1 sm:p-2 rounded-full">
            <IoMail className=" text-lg" />
          </button>
          <button className=" bg-gray-200 p-1 sm:p-2 rounded-full">
            <FiGift className=" text-lg" />
          </button>
          <button className=" bg-gray-200 p-1 sm:p-2 rounded-full">
            <GiThorHammer className=" text-lg" />
          </button>
          <button className=" bg-gray-200 p-1 sm:p-2 rounded-full">
            <TbWorld className=" text-lg" />
          </button>
          <button className=" bg-gray-200 p-1 sm:p-2 rounded-full">
            <FaPhoneVolume className=" text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileTopBar;
