"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { IoBagRemoveSharp } from "react-icons/io5";
import { IoHourglassSharp } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { TbCurrencyTaka } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";

const MyPost = () => {
  const [day, setDay] = useState(1);

  const incrementDay = () => {
    setDay(day + 1);
  };

  const decrementDay = () => {
    if (day > 1) {
      setDay(day - 1);
    }
  };

  // range
  const [value, setValue] = useState(40);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // date

  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="w-[500px]  mx-auto pt-5 ">
      <div className="rounded-t-xl border border-gray-200  bg-[#f8f8f8]">
        <div className="p-3 flex justify-between items-center gap-3 rounded-t-xl bg-white">
          <div className="flex gap-3">
            <button className="border  px-2 py-1 rounded-md bg-[#fb6320] text-white text-sm">
              My Post
            </button>
            <button className="border border-gray-400 px-2 py-1 rounded-md hover:bg-[#fb6320] hover:text-white duration-300 text-sm">
              My Profile
            </button>
            <button className="border border-gray-400 px-2 py-1 rounded-md hover:bg-[#fb6320] hover:text-white duration-300 text-sm">
              Settings
            </button>
            <button className="border border-gray-400 px-2 py-1 rounded-md hover:bg-[#fb6320] hover:text-white duration-300 text-sm">
              My Page
            </button>
          </div>

          <button className="bg-gray-300 rounded-full h-8 w-8 hover:bg-black duration-300 hover:text-white text-2xl flex justify-center items-center">
            <IoCloseOutline />
          </button>
        </div>
        {/*  */}
        <div className="p-3">
          <div className="flex gap-3 items-center mb-3 bg-slate-100 py-2 px-3 rounded-lg">
            <div className=" bg-[#fb6320] rounded-full p-1 text-white text-xl">
              <FaMinus className="" />
            </div>

            <p className="leading-[15px] text-sm">
              This Post run is off for{" "}
              <span className="text-[#fb6320]">Policy Violation.</span> You Can
              Edit submit it as early as possible. <br />
              or contact us for help [Help message]
            </p>
          </div>
          {/*  */}
          <div className="flex gap-3 items-center mb-3 bg-slate-100 py-2 px-3 rounded-lg">
            <div className=" bg-[#fb6320] rounded-full p-1 text-white text-xl ">
              <IoBagRemoveSharp />
            </div>
            <p className="leading-[15px] text-sm">
              This Post is Create but not Publish. Because, Your{" "}
              <span className="text-[#fb6320]">FREE POST ACCESS</span> is over.{" "}
              <br /> If You Promote, it will Publish & Promote.
            </p>
          </div>

          {/*  */}
          <div className="flex gap-3 items-center bg-slate-100 py-2 px-3 rounded-lg">
            <div className=" bg-[#fb6320] rounded-full p-1 text-white text-xl">
              <IoHourglassSharp />
            </div>
            <p className="leading-[15px] text-sm">
              <span className="font-semibold">
                Thank you for your patience. <br />
              </span>
              We got your post but admins need to approve if before its visible
              to others.
            </p>
          </div>
        </div>
        <hr className="mx-3" />
        {/* promote this ad */}
        {/*  */}

        <div className="flex gap-3 rounded-lg bg-white border-2 m-3">
          <img
            className="h-[90px] w-[120px] rounded-lg"
            src="https://shadamon.vercel.app/assets/premium-cover-pic.jpg"
            alt=""
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-sm">Apple IPhone 45M</h2>
            <p className="text-xs">
              342234323, 25 oct, 2021 <br />
              Mobile Phone, Dhaka
            </p>
            <div>
              <h5 className="font-semibold text-sm mt-1">View: 55214</h5>
              <div>{/* icon edit icon delete */}</div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="mx-3">
          <button className="bg-[#fb6320] font-bold w-full py-2 text-white my-5 rounded-md ">
            Promote this Post/Running/Again
          </button>
        </div>

        {/*  */}
        <div className="flex gap-3 rounded-lg bg-white border-2 m-3">
          <img
            className="h-[90px] w-[120px] rounded-lg"
            src="https://shadamon.vercel.app/assets/premium-cover-pic.jpg"
            alt=""
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-sm">Apple IPhone 45M</h2>
            <p className="text-xs">
              342234323, 25 oct, 2021 <br />
              Mobile Phone, Dhaka
            </p>
            <div>
              <h5 className="font-semibold text-sm mt-1">View: 55214</h5>
              <div>{/* icon edit icon delete */}</div>
            </div>
          </div>
        </div>
        {/*  */}

        <hr className="m-3" />

        <div className="mx-3">
          <h5 className="font-semibold">Duration</h5>
          <div className="flex gap-3 justify-between">
            <div className="flex border-2 w-1/2 px-2 py-1 rounded-lg justify-around">
              <h2 className="font-semibold">
                Days <br /> {day}
              </h2>
              <button onClick={incrementDay} className="text-3xl">
                <FiPlusCircle />
              </button>
              <button onClick={decrementDay} className="text-3xl">
                <FiMinusCircle />
              </button>
            </div>
            {/*  */}
            <div className="flex border-2 w-1/2 px-2 py-1 rounded-lg justify-around items-center">
              <SlCalender className="text-2xl" />

              <div>
                <p className="text-sm font-semibold">End Date</p>
                <p className="text-sm font-semibold">Mar 20, 2024</p>
              </div>
            </div>
          </div>

          {/*  */}

          <h4 className="font-semibold text-sm mt-3">
            Promotion Performance Estimated
          </h4>
          <h4 className="border-2 border-gray-300 py-2 px-5 rounded-lg mb-5 text-gray-500">
            <span className="font-bold text-gray-900">100-200</span> people See
          </h4>
        </div>

        <hr className="m-3" />

        {/*  */}

        <h4 className="font-semibold text-sm mt-3 mx-3">Budget</h4>

        {/*  */}

        <div className="mx-3">
          <h5 className="flex text-xl mb-4 justify-center text-[#fb6320]">
            <TbCurrencyTaka />
            <span className="text-4xl font-extrabold">{value}</span>
          </h5>

          <div className="range">
            <input
              type="range"
              min={100}
              max={1500}
              value={value}
              onChange={handleChange}
            />
          </div>

          <button className="bg-[#fb6320] font-bold w-full py-2 text-white my-5 rounded-md ">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPost;
