/* eslint-disable @next/next/no-img-element */
"use client";

import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { TbCurrencyTaka } from "react-icons/tb";
import React, { useEffect, useState } from "react";
import { SlCalender } from "react-icons/sl";
import DatePicker from "react-datepicker";
import { MdOutlineOpenInNew } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const PromotePost = () => {
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

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  const handleInputChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };
  return (
    <div className="w-full md:w-[500px]  mx-auto pt-5 mb-20 md:mb-0">
      {/* promote post detail */}
      <div className="rounded-t-xl border border-gray-200  bg-white">
        <div className="flex justify-between items-center mt-3 mx-3">
          <Link
            href={"/my-post"}
            className="hover:bg-black duration-300 hover:text-white bg-gray-300 p-2 lg:p-3 rounded-full "
          >
            <FaArrowLeftLong />
          </Link>
          <Link
            href={"/my-post"}
            className="hover:bg-black duration-300 hover:text-white bg-gray-300 p-2 lg:p-3 rounded-full "
          >
            <RxCross2 />
          </Link>
        </div>

        <div className="flex gap-3 rounded-lg bg-white border-2 m-3">
          <div className="relative post-thumbnail">
            <img
              className="h-[90px] w-[120px] rounded-lg"
              src="https://shadamon.vercel.app/assets/premium-cover-pic.jpg"
              alt=""
            />
            <button className="absolute top-1 left-1 flex items-center text-xs font-bold bg-white rounded-md p-1">
              See Live <MdOutlineOpenInNew />
            </button>
          </div>
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
          <div className="flex gap-1 justify-end items-end ml-14">
            <div>
              <input
                type="checkbox"
                className="toggle toggle-success toggle-xs -mb-2"
              />
              <p className="text-xs">On/Ps</p>
            </div>
            <div>
              <div className="border rounded-full h-[15px] w-[15px]  flex items-center justify-center border-gray-500 p-[3px]">
                <button className="bg-blue-600 h-[9px] w-[9px]  rounded-full"></button>
              </div>
              <p className="text-xs">Edit</p>
            </div>
            <div>
              <div className="border rounded-full h-[15px] w-[15px]  flex items-center justify-center border-gray-500 p-[3px]">
                <button className="bg-red-600 h-[9px] w-[9px]  rounded-full"></button>
              </div>
              <p className="text-xs">Delete</p>
            </div>
          </div>
        </div>
        {/*  */}
        <hr className="m-3" />

        <div className="mx-3 ">
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
            <div className="flex border-2 w-1/2 px-2 py-1 rounded-lg justify-around ">
              <div className="icon-wrapper ">
                <button onClick={toggleCalendar}>
                  <SlCalender className="text-2xl" />
                </button>

                <div className="date-text-wrapper">
                  <p className="font-semibold">End Date</p>

                  <span className="font-semibold">
                    {selectedDate.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end date-input-container">
            {showCalendar && (
              <DatePicker
                onClickOutside={toggleCalendar}
                selected={selectedDate}
                onChange={handleInputChange}
                inline
                dateFormat="MMMM d, yyyy"
              />
            )}
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
        <hr className="mx-3" />

        <div className="flex justify-between mt-2 mb-4 mx-3">
          <div>
            <button className="text-gray-600 text-sm">Helpline | </button>
            <button className="ml-1 text-gray-600 text-sm">Help Chat</button>
          </div>
          <button className="text-gray-600 text-sm">SKIP</button>
        </div>
      </div>
    </div>
  );
};

export default PromotePost;
