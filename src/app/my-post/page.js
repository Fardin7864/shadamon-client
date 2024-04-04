"use client";

/* eslint-disable @next/next/no-img-element */
import { FaMinus } from "react-icons/fa";
import { IoBagRemoveSharp } from "react-icons/io5";
import { IoHourglassSharp } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineOpenInNew } from "react-icons/md";

//

const MyPost = () => {
  return (
    <div className="w-[500px]  mx-auto pt-5 ">
      <div className="rounded-t-xl border border-gray-200  bg-white">
        <div className="p-3 flex justify-between items-center gap-3 rounded-t-xl bg-white border-b border-slate-300">
          <div className="flex gap-3 ">
            <button className="border  px-2 py-1 rounded-md bg-[#fb6320] text-white text-sm">
              My Post
            </button>
            <Link href="/profile">
              <button className="border border-gray-400 px-2 py-1 rounded-md hover:bg-[#fb6320] hover:text-white duration-300 text-sm">
                My Profile
              </button>
            </Link>
            <button className="border border-gray-400 px-2 py-1 rounded-md hover:bg-[#fb6320] hover:text-white duration-300 text-sm">
              Settings
            </button>
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
            <div className="flex justify-between items-center w-full">
              <h5 className="font-semibold text-sm mt-1">View: 55214</h5>
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
        <hr className="mx-3" />
        {/*  */}
        <div className="mx-3 my-4">
          <Link
            href={"/promote-post"}
            className="bg-[#fb6320] block font-bold w-full py-2 text-white my-5 rounded-md text-center"
          >
            Promote this Post/Running/Again
          </Link>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default MyPost;
